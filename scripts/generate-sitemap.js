import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.3volve.be';

async function extractRoutesFromApp() {
  const appPath = path.join(__dirname, '..', 'src', 'App.tsx');
  const appContent = fs.readFileSync(appPath, 'utf-8');

  const routes = [];
  
  // Parse the TypeScript/JSX code
  const ast = parse(appContent, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx']
  });

  // Extract routes from Route components
  traverse.default(ast, {
    JSXElement(path) {
      if (path.node.openingElement.name.name === 'Route') {
        const pathProp = path.node.openingElement.attributes.find(
          attr => attr.name?.name === 'path'
        );
        
        if (pathProp && pathProp.value.value) {
          routes.push(pathProp.value.value);
        }
      }
    }
  });

  return routes;
}

function getPriority(route) {
  if (route === '/') return '1.0';
  if (route.split('/').length === 2) return '0.8';
  return '0.6';
}

async function generateSitemap() {
  try {
    const routes = await extractRoutesFromApp();
    const today = new Date().toISOString();
    
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`).join('')}
</urlset>`;

    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();