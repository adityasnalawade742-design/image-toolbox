import type { APIRoute, GetStaticPaths } from 'astro';
import { languages } from '../../i18n/ui';
import { searchItems } from '../../i18n/searchItems';

// One small file per language, fetched the first time someone opens search, instead of embedding it in every page
export const getStaticPaths = (() => Object.keys(languages).map((locale) => ({ params: { locale } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(searchItems(params.locale!)), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
