import sys
import numpy as np
import onnxruntime as ort

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

print("🧪 ==================================================================")
print("🧪 FORENSIC CONTROL TEST: UNTRAINED vs MATHEMATICAL INTERPOLATION")
print("🧪 ==================================================================\n")

# Test Patterns
# Pattern 1: Flat gray (0.5)
flat_input = np.full((1, 1, 256, 256), 0.5, dtype=np.float32)

# Pattern 2: High contrast sharp step edge
edge_input = np.zeros((1, 1, 256, 256), dtype=np.float32)
edge_input[:, :, :, 128:] = 1.0

# Pattern 3: High frequency checkerboard
checker_input = np.zeros((1, 1, 256, 256), dtype=np.float32)
for y in range(256):
    for x in range(256):
        if (x // 8 + y // 8) % 2 == 0:
            checker_input[0, 0, y, x] = 1.0

session2 = ort.InferenceSession('public/models/espcn-x2.onnx')
session4 = ort.InferenceSession('public/models/espcn-x4.onnx')

def evaluate_pattern(name, inp_data):
    print(f"--- Test Pattern: {name} ---")
    
    # 2x Inference
    res2 = session2.run(None, {'input': inp_data})[0]
    mean_in = np.mean(inp_data)
    mean_out2 = np.mean(res2)
    std_out2 = np.std(res2)
    min_out2 = np.min(res2)
    max_out2 = np.max(res2)
    
    print(f"ESPCN 2× Output:")
    print(f"  Input Mean: {mean_in:.4f} -> Output Mean: {mean_out2:.4f}")
    print(f"  Output Min: {min_out2:.4f}, Max: {max_out2:.4f}, Std: {std_out2:.4f}")
    
    # 4x Inference
    res4 = session4.run(None, {'input': inp_data})[0]
    mean_out4 = np.mean(res4)
    std_out4 = np.std(res4)
    min_out4 = np.min(res4)
    max_out4 = np.max(res4)
    
    print(f"ESPCN 4× Output:")
    print(f"  Input Mean: {mean_in:.4f} -> Output Mean: {mean_out4:.4f}")
    print(f"  Output Min: {min_out4:.4f}, Max: {max_out4:.4f}, Std: {std_out4:.4f}")
    print("")

evaluate_pattern("Flat Color (0.500)", flat_input)
evaluate_pattern("Sharp Step Edge", edge_input)
evaluate_pattern("High-Frequency Checkerboard", checker_input)
