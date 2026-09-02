/**
 * High-capacity client-side IndexedDB storage for cross-tool image handoffs
 * Eliminates browser sessionStorage quota limitations (5MB-10MB).
 */

const DB_NAME = 'image_toolbox_db';
const STORE_NAME = 'handoff_store';
const DB_VERSION = 1;
const HANDOFF_KEY = 'active_handoff_image';

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported'));
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export interface HandoffData {
  dataUrl: string;
  filename: string;
  timestamp: number;
}

/**
 * Saves a high-resolution image to IndexedDB with automatic sessionStorage fallback.
 */
export async function saveHandoffImage(dataUrl: string, filename: string): Promise<void> {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const data: HandoffData = {
        dataUrl,
        filename,
        timestamp: Date.now(),
      };
      const req = store.put(data, HANDOFF_KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB write failed, falling back to sessionStorage:', err);
    try {
      sessionStorage.setItem('it_cached_image', dataUrl);
      sessionStorage.setItem('it_cached_filename', filename);
    } catch (sessionErr) {
      console.error('All storage handoff mechanisms failed:', sessionErr);
    }
  }
}

/**
 * Retrieves and consumes (deletes) the handoff image so it doesn't persist forever.
 */
export async function consumeHandoffImage(): Promise<{ dataUrl: string; filename: string } | null> {
  try {
    const db = await openDatabase();
    const data: HandoffData | null = await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(HANDOFF_KEY);

      req.onsuccess = () => {
        const res = req.result as HandoffData | undefined;
        if (res) {
          // Clean up consumed entry
          store.delete(HANDOFF_KEY);
          resolve(res);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => reject(req.error);
    });

    if (data && Date.now() - data.timestamp < 1000 * 60 * 30) {
      // Valid within 30 minutes
      return { dataUrl: data.dataUrl, filename: data.filename };
    }
  } catch (err) {
    console.warn('IndexedDB read failed, checking sessionStorage fallback:', err);
  }

  // Fallback to sessionStorage if IndexedDB had no data
  try {
    const cached = sessionStorage.getItem('it_cached_image');
    const cachedName = sessionStorage.getItem('it_cached_filename');
    if (cached) {
      sessionStorage.removeItem('it_cached_image');
      sessionStorage.removeItem('it_cached_filename');
      return { dataUrl: cached, filename: cachedName || 'image.png' };
    }
  } catch {
    // Ignored
  }

  return null;
}
