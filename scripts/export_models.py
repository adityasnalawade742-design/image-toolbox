import sys
import os
import torch
import torch.nn as nn

# Force utf-8 stdout
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

class ESPCN(nn.Module):
    def __init__(self, scale_factor, num_channels=1):
        super(ESPCN, self).__init__()
        self.scale_factor = scale_factor
        # Layer 1: Feature extraction (5x5, 64 filters)
        self.conv1 = nn.Conv2d(num_channels, 64, kernel_size=5, padding=2)
        self.tanh1 = nn.Tanh()
        # Layer 2: Non-linear mapping (3x3, 32 filters)
        self.conv2 = nn.Conv2d(64, 32, kernel_size=3, padding=1)
        self.tanh2 = nn.Tanh()
        # Layer 3: Sub-pixel convolution reconstruction (3x3, r^2 filters)
        self.conv3 = nn.Conv2d(32, (scale_factor ** 2), kernel_size=3, padding=1)
        # Layer 4: Periodic PixelShuffle
        self.pixel_shuffle = nn.PixelShuffle(scale_factor)

        self._initialize_weights()

    def _initialize_weights(self):
        # Orthogonal initialization as defined in ESPCN paper
        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                if m.weight.data.shape[0] == (self.scale_factor ** 2):
                    nn.init.orthogonal_(m.weight.data)
                else:
                    nn.init.orthogonal_(m.weight.data, gain=nn.init.calculate_gain('tanh'))
                if m.bias is not None:
                    nn.init.constant_(m.bias.data, 0.0)

    def forward(self, x):
        x = self.tanh1(self.conv1(x))
        x = self.tanh2(self.conv2(x))
        x = self.pixel_shuffle(self.conv3(x))
        return x

def export_model(scale_factor, output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    model = ESPCN(scale_factor=scale_factor)
    model.eval()
    
    dummy_input = torch.randn(1, 1, 64, 64, requires_grad=False)
    
    torch.onnx.export(
        model,
        dummy_input,
        output_path,
        export_params=True,
        opset_version=18,
        do_constant_folding=True,
        input_names=['input'],
        output_names=['output'],
        dynamic_axes={
            'input': {2: 'height', 3: 'width'},
            'output': {2: 'height', 3: 'width'}
        }
    )
    print(f"Exported ESPCN {scale_factor}x ONNX model to {output_path} (Size: {os.path.getsize(output_path)} bytes)")

if __name__ == '__main__':
    export_model(2, 'public/models/espcn-x2.onnx')
    export_model(4, 'public/models/espcn-x4.onnx')
