import { describe, it, expect } from 'vitest';
import { newName, uniqueNames, splitName, sortItems, cleanName, DEFAULT_OPTIONS, type RenameOptions } from '../batchRename';

const opts = (o: Partial<RenameOptions>): RenameOptions => ({ ...DEFAULT_OPTIONS, ...o });
// 14 March 2026, 09:05:07 local time
const taken = new Date(2026, 2, 14, 9, 5, 7);

describe('splitName', () => {
  it('splits at the last dot and keeps dotfiles whole', () => {
    expect(splitName('photo.final.JPG')).toEqual(['photo.final', 'JPG']);
    expect(splitName('README')).toEqual(['README', '']);
    expect(splitName('.env')).toEqual(['.env', '']);
    expect(splitName('trailing.')).toEqual(['trailing.', '']);
  });
});

describe('newName', () => {
  it('numbers with leading zeros from the chosen start', () => {
    const o = opts({ pattern: 'Holiday-{n}', start: 1, digits: 3 });
    expect(newName({ name: 'IMG_0001.JPG' }, 0, o)).toBe('Holiday-001.JPG');
    expect(newName({ name: 'IMG_0002.JPG' }, 11, o)).toBe('Holiday-012.JPG');
    expect(newName({ name: 'a.jpg' }, 0, opts({ pattern: '{n}', start: 7, digits: 1 }))).toBe('7.jpg');
  });
  it('fills in the date and time taken, else the modified time', () => {
    const o = opts({ pattern: '{date}_{time}' });
    expect(newName({ name: 'x.jpg', taken }, 0, o)).toBe('2026-03-14_09-05-07.jpg');
    expect(newName({ name: 'x.pdf', taken: null, modified: taken.getTime() }, 0, o)).toBe('2026-03-14_09-05-07.pdf');
  });
  it('keeps the original name and ending, and placeholders ignore case', () => {
    expect(newName({ name: 'Scan 4.pdf' }, 0, opts({ pattern: 'Invoice {NAME}' }))).toBe('Invoice Scan 4.pdf');
    expect(newName({ name: 'a.png' }, 0, opts({ pattern: '{name}.{ext}' }))).toBe('a.png.png');
  });
  it('finds and replaces plain text, not patterns', () => {
    expect(newName({ name: 'IMG (1).jpg' }, 0, opts({ find: '(1)', replace: 'one' }))).toBe('IMG one.jpg');
    expect(newName({ name: 'draft-draft.doc' }, 0, opts({ find: 'draft', replace: '' }))).toBe('-.doc');
  });
  it('changes case and spaces, and can lower the ending', () => {
    expect(newName({ name: 'My Photo.JPG' }, 0, opts({ caseMode: 'lower', spaces: 'dash' }))).toBe('my-photo.JPG');
    expect(newName({ name: 'My  Photo.JPG' }, 0, opts({ caseMode: 'upper', spaces: 'underscore', lowerExt: true }))).toBe('MY_PHOTO.jpg');
  });
  it('never produces a name a computer refuses', () => {
    expect(newName({ name: 'a.jpg' }, 0, opts({ pattern: 'a/b:c*?' }))).toBe('a-b-c--.jpg');
    expect(newName({ name: 'a.jpg' }, 0, opts({ pattern: '' }))).toBe('file.jpg');
    expect(newName({ name: 'a.txt' }, 0, opts({ pattern: 'CON' }))).toBe('CON_.txt');
    expect(cleanName('name. . ')).toBe('name');
  });
});

describe('uniqueNames', () => {
  it('numbers later duplicates, ignoring case', () => {
    expect(uniqueNames(['a.jpg', 'A.jpg', 'a.jpg', 'b'])).toEqual(['a.jpg', 'A (2).jpg', 'a (3).jpg', 'b']);
  });
  it('skips a number already taken', () => {
    expect(uniqueNames(['a (2).jpg', 'a.jpg', 'a.jpg'])).toEqual(['a (2).jpg', 'a.jpg', 'a (3).jpg']);
  });
});

describe('sortItems', () => {
  const items = [
    { name: 'img10.jpg', taken: new Date(2026, 0, 3) },
    { name: 'img2.jpg', taken: null, modified: new Date(2026, 0, 2).getTime() },
    { name: 'img1.jpg', taken: new Date(2026, 0, 5) },
  ];
  it('keeps the order added', () => expect(sortItems(items, 'added')).toBe(items));
  it('sorts names the way people count (2 before 10)', () => {
    expect(sortItems(items, 'name').map((i) => i.name)).toEqual(['img1.jpg', 'img2.jpg', 'img10.jpg']);
  });
  it('sorts by date taken, falling back to the modified time', () => {
    expect(sortItems(items, 'taken').map((i) => i.name)).toEqual(['img2.jpg', 'img10.jpg', 'img1.jpg']);
  });
});
