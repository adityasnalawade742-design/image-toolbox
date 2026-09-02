import { describe, it, expect, beforeEach } from 'vitest';
import { saveHandoffImage, consumeHandoffImage } from '../handoffStorage';

describe('Cross-Tool Handoff Storage', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('saves and consumes handoff image using fallback when IndexedDB is mocked/absent', async () => {
    const mockDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    const mockFilename = 'test-image.png';

    await saveHandoffImage(mockDataUrl, mockFilename);
    const result = await consumeHandoffImage();

    expect(result).not.toBeNull();
    expect(result?.dataUrl).toBe(mockDataUrl);
    expect(result?.filename).toBe(mockFilename);

    // Should be consumed (deleted) after retrieval
    const secondResult = await consumeHandoffImage();
    expect(secondResult).toBeNull();
  });
});
