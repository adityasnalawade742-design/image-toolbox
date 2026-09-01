import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const langs = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ja', 'ko', 'id', 'tr'];

for (const lang of langs) {
  const filePath = resolve(process.cwd(), `src/i18n/tools/${lang}.ts`);
  let content = readFileSync(filePath, 'utf8');

  // Replace '  }\n  "ai-image-upscaler":' with '  },\n  "ai-image-upscaler":'
  content = content.replace(/\n  \}\n  "ai-image-upscaler":/g, '\n  },\n  "ai-image-upscaler":');
  content = content.replace(/\n  \}\n  'ai-image-upscaler':/g, '\n  },\n  "ai-image-upscaler":');

  writeFileSync(filePath, content, 'utf8');
}
console.log('✅ Commas fixed in all 10 language dictionaries!');
