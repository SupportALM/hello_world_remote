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
    rollupOptions: {
      // Externalize react to use the host's React
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [react()]
});
