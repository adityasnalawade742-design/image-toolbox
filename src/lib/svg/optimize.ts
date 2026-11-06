/**
 * SVG optimisation with SVGO. The defaults are SVGO's preset, made safer for files people reuse: the viewBox is
 * kept (so the drawing still scales), IDs referenced from outside aren't renamed unless asked, and accessible titles
 * stay.
 */
import type { Config } from 'svgo';

export interface SvgOptions {
  /** Decimal places for coordinates (lower is smaller; 1–2 rarely shows, 0 can) */
  precision: number;
  /** Shorten and drop unused IDs (breaks CSS or scripts that target them from outside the file) */
  cleanIds: boolean;
  /** Remove <title> and <desc> (smaller, but screen readers lose the description) */
  removeTitles: boolean;
  /** Keep the editor's layer names and metadata (Inkscape, Illustrator) */
  keepEditorData: boolean;
  /** Indent the output for reading */
  pretty: boolean;
}

export const DEFAULT_SVG_OPTIONS: SvgOptions = { precision: 2, cleanIds: false, removeTitles: false, keepEditorData: false, pretty: false };

export function svgoConfig(o: SvgOptions): Config {
  // SVGO 4's preset already keeps the viewBox and the <title>
  const overrides: Record<string, false | object> = {
    cleanupNumericValues: { floatPrecision: o.precision },
    convertPathData: { floatPrecision: o.precision },
    convertTransform: { floatPrecision: o.precision },
  };
  if (!o.cleanIds) overrides.cleanupIds = false;
  if (!o.removeTitles) overrides.removeDesc = false;
  if (o.keepEditorData) {
    overrides.removeEditorsNSData = false;
    overrides.removeMetadata = false;
  }
  return {
    multipass: true,
    js2svg: o.pretty ? { pretty: true, indent: 2 } : undefined,
    plugins: [{ name: 'preset-default', params: { overrides } } as never, ...(o.removeTitles ? ['removeTitle' as never] : [])],
  };
}

export interface SvgResult {
  svg: string;
  before: number;
  after: number;
}

/** Optimise with the given SVGO `optimize` function (the browser and Node builds differ) */
export function optimizeSvg(optimize: (svg: string, config: Config) => { data: string }, svg: string, o: SvgOptions): SvgResult {
  const before = new TextEncoder().encode(svg).length;
  const out = optimize(svg, svgoConfig(o)).data;
  return { svg: out, before, after: new TextEncoder().encode(out).length };
}
