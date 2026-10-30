/**
 * Word-level differences between two texts (Myers' O(ND) algorithm), for Compare PDFs. Whitespace is kept attached
 * to the words, so joining the tokens of a result rebuilds each text exactly.
 */

export type DiffOp = { type: 'same' | 'add' | 'del'; text: string };

/** Words with the spaces that follow them ("Hello, ", "world") */
export const tokenize = (s: string): string[] => s.match(/\S+\s*|\s+/g) ?? [];

/** Compare tokens by their word, ignoring spacing differences (line wrapping in PDFs varies) */
const key = (t: string) => t.trim();

/**
 * Differences between a and b as runs of unchanged, added and deleted text. Above `maxEdits` changes the
 * comparison gives up and reports everything as replaced, so very different documents stay quick.
 */
export function diffWords(a: string, b: string, maxEdits = 4000): DiffOp[] {
  const A = tokenize(a);
  const B = tokenize(b);
  // Trim the common start and end: most documents differ in a few places
  let start = 0;
  while (start < A.length && start < B.length && key(A[start]) === key(B[start])) start++;
  let endA = A.length;
  let endB = B.length;
  while (endA > start && endB > start && key(A[endA - 1]) === key(B[endB - 1])) {
    endA--;
    endB--;
  }
  const ops: DiffOp[] = [];
  const push = (type: DiffOp['type'], text: string) => {
    if (!text) return;
    const last = ops[ops.length - 1];
    if (last && last.type === type) last.text += text;
    else ops.push({ type, text });
  };
  push('same', A.slice(0, start).join(''));
  const a2 = A.slice(start, endA);
  const b2 = B.slice(start, endB);
  for (const op of myers(a2, b2, maxEdits)) push(op.type, op.text);
  push('same', B.slice(endB).join(''));
  return ops;
}

function myers(A: string[], B: string[], maxEdits: number): DiffOp[] {
  const N = A.length;
  const M = B.length;
  if (!N && !M) return [];
  if (!N) return [{ type: 'add', text: B.join('') }];
  if (!M) return [{ type: 'del', text: A.join('') }];
  const max = Math.min(N + M, maxEdits);
  const offset = max + 1;
  const v = new Int32Array(2 * max + 3);
  // Before each step, the part of the frontier that step reads (diagonals -d-1 … d+1): memory grows with the
  // number of edits squared, not with the length of the texts
  const trace: Int32Array[] = [];
  let found = -1;
  for (let d = 0; d <= max && found < 0; d++) {
    trace.push(v.slice(offset - d - 1, offset + d + 2));
    for (let k = -d; k <= d; k += 2) {
      let x = k === -d || (k !== d && v[offset + k - 1] < v[offset + k + 1]) ? v[offset + k + 1] : v[offset + k - 1] + 1;
      let y = x - k;
      while (x < N && y < M && key(A[x]) === key(B[y])) {
        x++;
        y++;
      }
      v[offset + k] = x;
      if (x >= N && y >= M) {
        found = d;
        break;
      }
    }
  }
  if (found < 0) return [{ type: 'del', text: A.join('') }, { type: 'add', text: B.join('') }];
  // Walk back through the saved frontiers to recover the edit path
  const rev: DiffOp[] = [];
  let x = N;
  let y = M;
  for (let d = found; d > 0; d--) {
    const snap = trace[d];
    const at = (kk: number) => snap[kk + d + 1];
    const k = x - y;
    const prevK = k === -d || (k !== d && at(k - 1) < at(k + 1)) ? k + 1 : k - 1;
    const prevX = at(prevK);
    const prevY = prevX - prevK;
    while (x > prevX && y > prevY) {
      rev.push({ type: 'same', text: B[--y] });
      x--;
    }
    if (x === prevX) rev.push({ type: 'add', text: B[--y] });
    else rev.push({ type: 'del', text: A[--x] });
  }
  while (x > 0 && y > 0) {
    rev.push({ type: 'same', text: B[--y] });
    x--;
  }
  return rev.reverse();
}

/** Counts for a summary line */
export function diffStats(ops: DiffOp[]) {
  const words = (s: string) => (s.match(/\S+/g) || []).length;
  return {
    added: ops.filter((o) => o.type === 'add').reduce((n, o) => n + words(o.text), 0),
    removed: ops.filter((o) => o.type === 'del').reduce((n, o) => n + words(o.text), 0),
  };
}
