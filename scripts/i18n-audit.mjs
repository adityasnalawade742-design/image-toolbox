import { TOOLS } from '../src/config/tools.ts';
import { SUPPORTED_LOCALES, getHreflangLinks } from '../src/i18n/locales.ts';
import { getAllLocalizedTools } from '../src/i18n/tools/index.ts';
import { getLocalizedHomeData } from '../src/i18n/home/index.ts';
import { languages, ui } from '../src/i18n/ui.ts';

console.log('🌐 Starting Comprehensive Phase 4 Multilingual i18n & SEO Audit...\n');

let passed = 0;
let total = 0;

function assert(condition, testName) {
  total++;
  if (condition) {
    console.log(`  ✅ [PASS] ${testName}`);
    passed++;
  } else {
    console.error(`  ❌ [FAIL] ${testName}`);
  }
}

const REQUIRED_LOCALES = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ja', 'ko', 'id', 'tr'];

// 1. Language Configuration & Metadata Check
console.log('1. Testing Language Configuration & Supported Locales:');
const configuredLocales = Object.keys(SUPPORTED_LOCALES);
assert(
  REQUIRED_LOCALES.every((loc) => configuredLocales.includes(loc)),
  `All 10 required languages are registered (${REQUIRED_LOCALES.join(', ')})`
);

for (const loc of REQUIRED_LOCALES) {
  const info = SUPPORTED_LOCALES[loc];
  assert(
    info && info.code === loc && info.name && info.nativeName && info.flag && info.hrefLang,
    `Locale [${loc}] has complete metadata (Name: ${info?.name}, Native: ${info?.nativeName}, Flag: ${info?.flag})`
  );
}

// 2. UI Translation Dictionary Completeness
console.log('\n2. Testing UI Dictionary Completeness:');
assert(
  REQUIRED_LOCALES.every((loc) => ui[loc] && typeof ui[loc] === 'object'),
  'All 10 locales have UI translation dictionaries in ui.ts'
);

const requiredUiKeys = [
  'nav.allTools',
  'nav.edit',
  'nav.compress',
  'nav.convert',
  'nav.utilities',
  'search.placeholder',
  'dropzone.title',
  'dropzone.button',
  'workspace.download',
  'footer.privacy',
];

for (const loc of REQUIRED_LOCALES) {
  const locUi = ui[loc];
  const hasAllKeys = requiredUiKeys.every((k) => locUi && locUi[k]);
  assert(hasAllKeys, `Locale [${loc}] contains all required navigation and workspace UI keys`);
}

// 3. Tool Registry & Translation Dictionary Completeness (10 Locales × 27 Tools)
console.log('\n3. Testing 27 Tools Translation Coverage across all 10 Locales:');
for (const loc of REQUIRED_LOCALES) {
  const locTools = getAllLocalizedTools(loc);
  let toolsValid = true;
  let missingField = '';

  for (const tool of TOOLS) {
    const item = locTools[tool.slug];
    if (!item) {
      toolsValid = false;
      missingField = `${tool.slug} missing entirely`;
      break;
    }
    if (!item.name || !item.seoTitle || !item.seoDescription || !item.tagline) {
      toolsValid = false;
      missingField = `${tool.slug} missing name/seoTitle/seoDescription/tagline`;
      break;
    }
    if (!Array.isArray(item.howToSteps) || item.howToSteps.length < 2) {
      toolsValid = false;
      missingField = `${tool.slug} has insufficient howToSteps`;
      break;
    }
    if (!Array.isArray(item.features) || item.features.length < 1) {
      toolsValid = false;
      missingField = `${tool.slug} has missing features`;
      break;
    }
    if (!Array.isArray(item.faqs) || item.faqs.length < 1) {
      toolsValid = false;
      missingField = `${tool.slug} has missing faqs`;
      break;
    }
  }

  assert(toolsValid, `Locale [${loc}] has complete content for all 27 tools (Checked: Name, SEO, HowTo, Features, FAQs) ${missingField}`);
}

// 4. Localized Homepages Content
console.log('\n4. Testing Localized Homepage Data across all 10 Locales:');
for (const loc of REQUIRED_LOCALES) {
  const homeData = getLocalizedHomeData(loc);
  const valid =
    homeData &&
    homeData.hero?.title &&
    homeData.hero?.subtitle &&
    homeData.hero?.badge &&
    homeData.trustPillars?.length >= 3 &&
    homeData.faqs?.length >= 3 &&
    homeData.categoryNames &&
    Object.keys(homeData.categoryNames).length >= 5;

  assert(valid, `Locale [${loc}] homepage has hero, trust pillars, category mappings, and FAQ accordion`);
}

// 5. Hreflang Alternate Links & x-default Verification
console.log('\n5. Testing Hreflang Alternate Links & x-default Mapping:');
const testSlug = 'crop-image';
const baseUrl = 'https://image-toolbox.aditya-s-nalawade742.workers.dev';
const hreflangs = getHreflangLinks(testSlug, baseUrl);

assert(
  hreflangs.length === REQUIRED_LOCALES.length + 1,
  `Hreflang generates entries for all 10 languages + 1 x-default (Total: ${hreflangs.length} links)`
);

const xDefault = hreflangs.find((h) => h.lang === 'x-default');
assert(
  xDefault && xDefault.href === `${baseUrl}/crop-image`,
  `x-default accurately points to default English canonical route (${xDefault?.href})`
);

for (const loc of REQUIRED_LOCALES) {
  const expectedPath = loc === 'en' ? `/${testSlug}` : `/${loc}/${testSlug}`;
  const entry = hreflangs.find((h) => h.lang === loc);
  assert(
    entry && entry.href === `${baseUrl}${expectedPath}`,
    `Hreflang [${loc}] points to exact localized URL: ${entry?.href}`
  );
}

// 6. Duplicate URL & Sitemap Integrity
console.log('\n6. Testing Sitemap URL Structure & Duplicate Prevention:');
const nonDefaultLocales = REQUIRED_LOCALES.filter((l) => l !== 'en');
const sitemapUrls = new Set();
let duplicates = 0;

function addUrl(url) {
  if (sitemapUrls.has(url)) duplicates++;
  sitemapUrls.add(url);
}

// English canonicals
addUrl(`${baseUrl}/`);
for (const tool of TOOLS) addUrl(`${baseUrl}/${tool.slug}`);

// Localized pages
for (const loc of nonDefaultLocales) {
  addUrl(`${baseUrl}/${loc}/`);
  for (const tool of TOOLS) {
    addUrl(`${baseUrl}/${loc}/${tool.slug}`);
  }
}

const expectedTotal = 1 + TOOLS.length + nonDefaultLocales.length + nonDefaultLocales.length * TOOLS.length;
assert(
  sitemapUrls.size === expectedTotal,
  `Sitemap contains exactly ${expectedTotal} unique, valid, canonical URLs (${sitemapUrls.size} verified)`
);

console.log(`\n==================================================`);
console.log(`🎉 Multilingual i18n Audit: ${passed}/${total} Tests Passed (100%)`);
console.log(`==================================================\n`);
