/**
 * A copy of a picked file, held in memory. On Android, a photo chosen in the system picker is a reference that the
 * browser can lose access to after a while: later reads then fail ("Failed to fetch", NotReadableError), although
 * the thumbnail showed when it was added. Tools that read their files only when a queue reaches them (the bulk tools)
 * copy each file the moment it is added, while it can still be read. Returns null when it can't be read even then.
 */
export async function snapshotFile(file: File): Promise<File | null> {
  try {
    return new File([await file.arrayBuffer()], file.name, { type: file.type, lastModified: file.lastModified });
  } catch {
    return null;
  }
}
