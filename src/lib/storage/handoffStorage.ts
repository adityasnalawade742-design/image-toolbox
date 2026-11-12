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

const FILE_KEY = 'active_handoff_file';
// A file waits this long for the tool it was sent to
const FILE_TTL_MS = 1000 * 60 * 30;

interface FileHandoff {
  blob: Blob;
  name: string;
  /** The tool the file was sent to: only that tool's page picks it up */
  slug: string;
  timestamp: number;
}

/**
 * Sends a file (a PDF from the home page) to one tool. Stored as a Blob in IndexedDB; when storage is unavailable
 * the tool simply opens empty and the visitor picks the file again.
 */
export async function saveHandoffFile(file: Blob, name: string, slug: string): Promise<void> {
  try {
    const db = await openDatabase();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put({ blob: file, name, slug, timestamp: Date.now() } satisfies FileHandoff, FILE_KEY);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Could not keep the file for the next tool:', err);
  }
}

/** The file sent to the tool on this page, if any (taken out of storage, so it opens once) */
export async function consumeHandoffFile(): Promise<File | null> {
  if (typeof window === 'undefined') return null;
  try {
    const db = await openDatabase();
    const data = await new Promise<FileHandoff | undefined>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(FILE_KEY);
      req.onsuccess = () => {
        const res = req.result as FileHandoff | undefined;
        const here = window.location.pathname.replace(/\/+$/, '').split('/').pop();
        // Another tool's file stays for that tool; a stale one is dropped
        if (res && (res.slug === here || Date.now() - res.timestamp >= FILE_TTL_MS)) store.delete(FILE_KEY);
        resolve(res && res.slug === here ? res : undefined);
      };
      req.onerror = () => reject(req.error);
    });
    if (!data || Date.now() - data.timestamp >= FILE_TTL_MS) return null;
    return new File([data.blob], data.name, { type: data.blob.type || 'application/pdf' });
  } catch {
    return null;
  }
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
      store.put(data, HANDOFF_KEY);
      // Resolve on commit, not on request success: callers navigate away immediately afterwards
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
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
