/**
 * Batch Rename: the new name of each file from a pattern. Pure functions, so the page and the tests agree.
 *
 * A pattern is text with placeholders: {name} the file's own name (without its ending), {n} its number in the list,
 * {date} and {time} when the photo was taken (from its EXIF, else the file's modified time), {ext} the ending.
 * The ending is always kept, so a pattern can't turn a JPG into something that won't open.
 */

export type CaseMode = 'keep' | 'lower' | 'upper';
export type SpaceMode = 'keep' | 'dash' | 'underscore';

export interface RenameOptions {
  pattern: string;
  /** First number for {n} */
  start: number;
  /** {n} is padded with zeros to at least this many digits (1 = no padding) */
  digits: number;
  /** Plain text to find in the new name (not a regular expression); empty = none */
  find: string;
  replace: string;
  caseMode: CaseMode;
  spaces: SpaceMode;
  /** "IMG_1.JPG" → "IMG_1.jpg" */
  lowerExt: boolean;
}

export const DEFAULT_OPTIONS: RenameOptions = {
  pattern: '{name}',
  start: 1,
  digits: 3,
  find: '',
  replace: '',
  caseMode: 'keep',
  spaces: 'keep',
  lowerExt: false,
};

export interface RenameInput {
  name: string;
  /** When the photo was taken, or null when unknown */
  taken?: Date | null;
  /** When the file was last changed (File.lastModified) */
  modified?: number;
}

/** "photo.final.JPG" → ["photo.final", "JPG"]; a name without a dot (or a dotfile) has no ending */
export function splitName(name: string): [string, string] {
  const i = name.lastIndexOf('.');
  if (i <= 0 || i === name.length - 1) return [name, ''];
  return [name.slice(0, i), name.slice(i + 1)];
}

const pad = (n: number, digits: number) => String(n).padStart(Math.max(1, digits), '0');
const two = (n: number) => String(n).padStart(2, '0');

export function formatDate(d: Date): string {
  return `${d.getFullYear()}-${two(d.getMonth() + 1)}-${two(d.getDate())}`;
}

export function formatTime(d: Date): string {
  return `${two(d.getHours())}-${two(d.getMinutes())}-${two(d.getSeconds())}`;
}

/** Characters Windows, macOS or ZIP tools refuse in a file name, and control characters */
// eslint-disable-next-line no-control-regex
const ILLEGAL = /[\\/:*?"<>|\u0000-\u001f]/g;

/** Windows reserves these names whatever the ending */
const RESERVED = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;

export function cleanName(base: string): string {
  let s = base.replace(ILLEGAL, '-').replace(/\s+$/, '').replace(/[. ]+$/, '');
  if (!s) s = 'file';
  if (RESERVED.test(s)) s = `${s}_`;
  return s;
}

/** The new name for one file: `index` is its position in the list (0-based) */
export function newName(input: RenameInput, index: number, opts: RenameOptions): string {
  const [base, ext] = splitName(input.name);
  const when = input.taken ?? (input.modified ? new Date(input.modified) : null);
  let s = opts.pattern.replace(/\{(name|n|date|time|ext)\}/gi, (_, key: string) => {
    switch (key.toLowerCase()) {
      case 'name':
        return base;
      case 'n':
        return pad(opts.start + index, opts.digits);
      case 'date':
        return when ? formatDate(when) : '';
      case 'time':
        return when ? formatTime(when) : '';
      default:
        return ext;
    }
  });
  if (opts.find) s = s.split(opts.find).join(opts.replace);
  if (opts.caseMode === 'lower') s = s.toLowerCase();
  else if (opts.caseMode === 'upper') s = s.toUpperCase();
  if (opts.spaces === 'dash') s = s.replace(/\s+/g, '-');
  else if (opts.spaces === 'underscore') s = s.replace(/\s+/g, '_');
  s = cleanName(s.trim());
  const outExt = opts.lowerExt ? ext.toLowerCase() : ext;
  return outExt ? `${s}.${outExt}` : s;
}

/**
 * Makes every name unique (a ZIP can't hold two files with the same name; Windows also treats names that differ only
 * in case as the same): later duplicates get " (2)", " (3)"… before the ending.
 */
export function uniqueNames(names: string[]): string[] {
  const used = new Set<string>();
  return names.map((name) => {
    let candidate = name;
    const [base, ext] = splitName(name);
    for (let k = 2; used.has(candidate.toLowerCase()); k++) candidate = ext ? `${base} (${k}).${ext}` : `${base} (${k})`;
    used.add(candidate.toLowerCase());
    return candidate;
  });
}

export type SortMode = 'added' | 'name' | 'taken';

/** The order files are numbered in */
export function sortItems<T extends RenameInput>(items: T[], mode: SortMode): T[] {
  if (mode === 'added') return items;
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  const copy = [...items];
  if (mode === 'name') return copy.sort((a, b) => collator.compare(a.name, b.name));
  const time = (x: RenameInput) => (x.taken ? x.taken.getTime() : x.modified ?? Number.MAX_SAFE_INTEGER);
  return copy.sort((a, b) => time(a) - time(b) || collator.compare(a.name, b.name));
}
