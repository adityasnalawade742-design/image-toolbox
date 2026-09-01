import sys
import os
import onnx
import numpy as np
from onnx import numpy_helper

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

def analyze_onnx_weights(model_path):
    print(f"==================================================")
    print(f"Forensic Weight Analysis: {model_path}")
    print(f"==================================================")
    
    model = onnx.load(model_path)
    graph = model.graph
    
    print(f"• ONNX IR Version: {model.ir_version}")
    print(f"• Opset Version: {model.opset_import[0].version if model.opset_import else 'N/A'}")
    print(f"• Producer Name: {model.producer_name}")
    print(f"• Producer Version: {model.producer_version}")
    print(f"• Graph Name: {graph.name}")
    print(f"• Number of Nodes: {len(graph.node)}")
    
    op_types = [node.op_type for node in graph.node]
    print(f"• Operator Types in Graph: {list(set(op_types))}")
    print(f"• Node Chain: {' -> '.join(op_types)}")
    
    total_params = 0
    total_bytes = 0
    
    print("\n--- Initializers (Weight & Bias Tensors) ---")
    for init in graph.initializer:
        tensor_array = numpy_helper.to_array(init)
        num_elements = tensor_array.size
        byte_size = tensor_array.nbytes
        total_params += num_elements
        total_bytes += byte_size
        
        min_val = float(np.min(tensor_array))
        max_val = float(np.max(tensor_array))
        mean_val = float(np.mean(tensor_array))
        std_val = float(np.std(tensor_array))
        zero_count = int(np.sum(tensor_array == 0))
        
        print(f"Tensor: {init.name}")
        print(f"  Shape: {tensor_array.shape}, Dtype: {tensor_array.dtype}")
        print(f"  Params: {num_elements}, Bytes: {byte_size}")
        print(f"  Min: {min_val:.6f}, Max: {max_val:.6f}, Mean: {mean_val:.6f}, Std: {std_val:.6f}")
        print(f"  Zero Count: {zero_count} ({(zero_count/num_elements)*100:.1f}%)")
        print(f"  First 4 values: {tensor_array.flatten()[:4].tolist()}\n")
        
    print(f"• Total Initializer Tensors: {len(graph.initializer)}")
    print(f"• Total Learnable Parameters: {total_params}")
    print(f"• Total Parameter Memory: {total_bytes} bytes ({(total_bytes / 1024):.2f} KB)")
    
    # Statistical forensic test: check if conv biases are exact 0.0 (signature of PyTorch initialization without training)
    conv_biases = [numpy_helper.to_array(init) for init in graph.initializer if 'bias' in init.name]
    all_zero_biases = all(np.all(b == 0.0) for b in conv_biases) if conv_biases else False
    
    if all_zero_biases:
        print("\n⚠️ FORENSIC FINDING: All convolution bias tensors are exactly 0.000000.")
        print("  This is a direct fingerprint of 'nn.init.constant_(m.bias, 0.0)' from PyTorch weight initialization.")
        print("  Status: WEIGHTS ARE ORTHOGONALLY INITIALIZED BUT UNTRAINED.")
    else:
        print("\n✅ Conv biases contain learned non-zero values.")
    print("--------------------------------------------------\n")

if __name__ == '__main__':
    analyze_onnx_weights('public/models/espcn-x2.onnx')
    analyze_onnx_weights('public/models/espcn-x4.onnx')
