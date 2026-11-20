import { describe, it, expect } from 'vitest';
import { snapshotFile } from '../snapshotFile';

describe('copying a picked file into memory', () => {
  it('keeps the name, type and contents, and stays readable after the original stops being readable', async () => {
    let readable = true;
    const original = new File(['photo bytes'], 'IMG_0001.jpg', { type: 'image/jpeg', lastModified: 1700000000000 });
    // An Android photo picker file the browser has lost access to
    const picked = Object.assign(original, {
      arrayBuffer: () => (readable ? Blob.prototype.arrayBuffer.call(original) : Promise.reject(new DOMException('', 'NotReadableError'))),
    });
    const copy = await snapshotFile(picked);
    readable = false;
    expect(copy).not.toBeNull();
    expect(copy!.name).toBe('IMG_0001.jpg');
    expect(copy!.type).toBe('image/jpeg');
    expect(await copy!.text()).toBe('photo bytes');
    await expect(picked.arrayBuffer()).rejects.toThrow();
  });

  it('returns null for a file that is already unreadable', async () => {
    const gone = Object.assign(new File(['x'], 'gone.jpg', { type: 'image/jpeg' }), { arrayBuffer: () => Promise.reject(new DOMException('', 'NotReadableError')) });
    expect(await snapshotFile(gone)).toBeNull();
  });
});
