import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-sitemap',
      writeBundle: () => {
        // Generate sitemap
        execSync('node scripts/generate-sitemap.js', { stdio: 'inherit' });
        
        // Copy sitemap from public to dist
        const publicSitemap = path.resolve('public/sitemap.xml');
        const distSitemap = path.resolve('dist/sitemap.xml');
        
        if (fs.existsSync(publicSitemap)) {
          fs.copyFileSync(publicSitemap, distSitemap);
          console.log('Sitemap copied to dist folder successfully!');
        }
      }
    }
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['lucide-react', 'framer-motion']
        }
      }
    }
  }
});