import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/HelloRemoteTool.jsx',
      name: 'HelloRemoteTool',
      fileName: () => 'hello-remote.js',
      formats: ['es']
    },
    // React is NOT external, so it will be bundled for guaranteed compatibility.
    rollupOptions: {
      external: [],
    }
  },
  plugins: [react()]
});
