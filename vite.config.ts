import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [
    topLevelAwait()
  ],
  build: {
    rollupOptions: {
      external: [
        'pdfjs-dist/build/pdf.worker.mjs'
      ]
    }
  }
}); 