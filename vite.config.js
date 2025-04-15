import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Add this import:
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/HelloRemoteTool.jsx',
      name: 'HelloRemoteTool',
      fileName: () => 'hello-remote.js',
      formats: ['es']
    },
    rollupOptions: {
      external: [],
    }
  },
  plugins: [
    react(),
    // Add this plugin to replace process.env and process:
    {
      name: 'replace-process',
      enforce: 'pre',
      transform(code) {
        return code
          .replace(/process\.env\.NODE_ENV/g, '"production"')
          .replace(/process\.env/g, '{}')
          .replace(/process/g, '{}');
      }
    }
  ]
});