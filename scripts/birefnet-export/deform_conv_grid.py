# Modulated deformable convolution (torchvision semantics, one offset group, dilation 1) in a few ONNX-friendly steps:
# ONE grid_sample for all kernel positions at once, then ONE 1x1 convolution. Same maths as deform_gs.py, about 1/50th
# of the graph nodes, at the cost of holding all positions' samples at once (C x K x H x W).
import torch
import torch.nn.functional as F

def deform_conv2d_grid(input, offset, weight, bias=None, stride=(1, 1), padding=(0, 0), dilation=(1, 1), mask=None):
    pair = lambda v: v if isinstance(v, (tuple, list)) else (v, v)
    (sh, sw), (ph, pw), (dh, dw) = pair(stride), pair(padding), pair(dilation)
    N, C, H, W = input.shape
    O, _, kh, kw = weight.shape
    K = kh * kw
    Ho, Wo = offset.shape[2], offset.shape[3]
    # Where each kernel position samples before the learned offsets: constants for a fixed input size
    ky = torch.arange(kh, dtype=input.dtype).repeat_interleave(kw) * dh            # (K,)
    kx = torch.arange(kw, dtype=input.dtype).repeat(kh) * dw                      # (K,)
    base_y = (torch.arange(Ho, dtype=input.dtype) * sh - ph).view(1, 1, Ho, 1) + ky.view(1, K, 1, 1)
    base_x = (torch.arange(Wo, dtype=input.dtype) * sw - pw).view(1, 1, 1, Wo) + kx.view(1, K, 1, 1)
    off = offset.view(N, K, 2, Ho, Wo)
    py = base_y + off[:, :, 0]                                                     # (N, K, Ho, Wo)
    px = base_x + off[:, :, 1]
    grid = torch.stack([2 * px / (W - 1) - 1, 2 * py / (H - 1) - 1], dim=-1)      # (N, K, Ho, Wo, 2)
    s = F.grid_sample(input, grid.view(N, K * Ho, Wo, 2), mode="bilinear", padding_mode="zeros", align_corners=True)
    s = s.view(N, C, K, Ho, Wo)
    if mask is not None:
        s = s * mask.view(N, 1, K, Ho, Wo)
    # A 1x1 convolution over C*K channels, as a matrix product (the exporter needs a convolution kernel's shape up front)
    out = torch.matmul(weight.reshape(O, C * K), s.reshape(N, C * K, Ho * Wo)).view(N, O, Ho, Wo)
    if bias is not None:
        out = out + bias.view(1, -1, 1, 1)
    return out

if __name__ == "__main__":
    import torchvision
    torch.manual_seed(0); worst = 0.0
    for k in (1, 3, 7):
        x = torch.randn(1, 64, 40, 40); w = torch.randn(64, 64, k, k) * 0.05; b = torch.randn(64)
        off = torch.randn(1, 2 * k * k, 40, 40) * 3; m = torch.rand(1, k * k, 40, 40) * 2
        ref = torchvision.ops.deform_conv2d(x, off, w, b, padding=k // 2, mask=m)
        got = deform_conv2d_grid(x, off, w, b, padding=k // 2, mask=m)
        d = (ref - got).abs().max().item() / ref.abs().max().item(); worst = max(worst, d)
        print(f"kernel {k}: max relative difference {d:.2e}")
    print("OK" if worst < 1e-4 else "MISMATCH")
