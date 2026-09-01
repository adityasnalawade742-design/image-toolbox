import sys
import os
import struct
import numpy as np
import torch
import torch.nn as nn
import onnx

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

def parse_protobuf(data):
    pos = 0
    fields = []
    while pos < len(data):
        tag_byte = data[pos]
        pos += 1
        wire_type = tag_byte & 0x07
        field_num = tag_byte >> 3
        if wire_type == 0:
            val = 0
            shift = 0
            while True:
                b = data[pos]
                pos += 1
                val |= (b & 0x7F) << shift
                if not (b & 0x80): break
                shift += 7
            fields.append((field_num, wire_type, val))
        elif wire_type == 2:
            length = 0
            shift = 0
            while True:
                b = data[pos]
                pos += 1
                length |= (b & 0x7F) << shift
                if not (b & 0x80): break
                shift += 7
            val_bytes = data[pos:pos+length]
            pos += length
            fields.append((field_num, wire_type, val_bytes))
        elif wire_type == 5:
            val = struct.unpack('<I', data[pos:pos+4])[0]
            pos += 4
            fields.append((field_num, wire_type, val))
        else:
            break
    return fields

def extract_tf_weights(pb_path):
    with open(pb_path, 'rb') as f:
        raw = f.read()
    fields = parse_protobuf(raw)
    nodes = [f[2] for f in fields if f[0] == 1]
    
    weights = {}
    for n in nodes:
        n_fields = parse_protobuf(n)
        name = [f[2].decode('ascii', 'ignore') for f in n_fields if f[0] == 1][0]
        op = [f[2].decode('ascii', 'ignore') for f in n_fields if f[0] == 2][0]
        if op == 'Const' and name in ['f1', 'b1', 'f2', 'b2', 'f3', 'b3']:
            attrs = [f[2] for f in n_fields if f[0] == 5]
            for attr in attrs:
                a_fields = parse_protobuf(attr)
                k = [f[2].decode('ascii', 'ignore') for f in a_fields if f[0] == 1]
                if k and k[0] == 'value':
                    v_bytes = [f[2] for f in a_fields if f[0] == 2][0]
                    tensor_proto_fields = parse_protobuf(v_bytes)
                    tensor_bytes = [f[2] for f in tensor_proto_fields if f[0] == 8][0]
                    t_fields = parse_protobuf(tensor_bytes)
                    content_bytes = [f[2] for f in t_fields if f[0] == 4]
                    if content_bytes:
                        weights[name] = np.frombuffer(content_bytes[0], dtype=np.float32).copy()
    return weights

class PretrainedESPCN(nn.Module):
    def __init__(self, scale_factor, weights):
        super(PretrainedESPCN, self).__init__()
        self.scale_factor = scale_factor
        self.conv1 = nn.Conv2d(1, 64, kernel_size=5, padding=2)
        self.relu1 = nn.ReLU()
        self.conv2 = nn.Conv2d(64, 32, kernel_size=3, padding=1)
        self.relu2 = nn.ReLU()
        self.conv3 = nn.Conv2d(32, scale_factor ** 2, kernel_size=3, padding=1)
        self.pixel_shuffle = nn.PixelShuffle(scale_factor)
        self.tanh = nn.Tanh()
        
        # Load authentic learned weights (transposing from TF [H, W, In, Out] to PyTorch [Out, In, H, W])
        f1_arr = weights['f1'].reshape(5, 5, 1, 64).transpose(3, 2, 0, 1).copy()
        self.conv1.weight.data = torch.from_numpy(f1_arr)
        self.conv1.bias.data = torch.from_numpy(weights['b1'].copy())
        
        f2_arr = weights['f2'].reshape(3, 3, 64, 32).transpose(3, 2, 0, 1).copy()
        self.conv2.weight.data = torch.from_numpy(f2_arr)
        self.conv2.bias.data = torch.from_numpy(weights['b2'].copy())
        
        f3_arr = weights['f3'].reshape(3, 3, 32, scale_factor ** 2).transpose(3, 2, 0, 1).copy()
        self.conv3.weight.data = torch.from_numpy(f3_arr)
        self.conv3.bias.data = torch.from_numpy(weights['b3'].copy())

    def forward(self, x):
        x = self.relu1(self.conv1(x))
        x = self.relu2(self.conv2(x))
        x = self.pixel_shuffle(self.conv3(x))
        x = self.tanh(x)
        return x

def export_pretrained_model(scale_factor, pb_path, output_onnx_path):
    print(f"Loading authentic trained weights from {pb_path}...")
    weights = extract_tf_weights(pb_path)
    model = PretrainedESPCN(scale_factor=scale_factor, weights=weights)
    model.eval()
    
    # 256x256 fixed input for universal browser execution
    dummy_input = torch.randn(1, 1, 256, 256)
    
    torch.onnx.export(
        model,
        dummy_input,
        output_onnx_path,
        export_params=True,
        opset_version=18,
        input_names=['input'],
        output_names=['output']
    )
    
    # Save as self-contained ONNX with all weights embedded in the protobuf
    m = onnx.load(output_onnx_path, load_external_data=True)
    onnx.save_model(m, output_onnx_path, save_as_external_data=False)
    
    size_kb = os.path.getsize(output_onnx_path) / 1024
    print(f"✅ Successfully converted & exported authentic {scale_factor}× ESPCN model to {output_onnx_path} ({size_kb:.1f} KB)")

if __name__ == '__main__':
    os.makedirs('public/models', exist_ok=True)
    export_pretrained_model(2, 'scratch/pretrained/tf_espcn_x2.bin', 'public/models/espcn-x2.onnx')
    export_pretrained_model(4, 'scratch/pretrained/tf_espcn_x4.bin', 'public/models/espcn-x4.onnx')
