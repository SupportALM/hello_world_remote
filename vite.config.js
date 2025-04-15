import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // Keep this import

export default defineConfig({
  build: {
    lib: {
      // Point entry to your main component file
      entry: resolve(__dirname, 'src/HelloRemoteTool.jsx'),
      name: 'HelloRemoteTool',
      // Output filename
      fileName: () => 'hello-remote.js',
      // Output format
      formats: ['es'] // Use ES module format
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps (not strictly needed for 'es' format)
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    // Ensure minification is enabled for production builds (usually default)
    minify: 'esbuild',
    // Clean output directory before build (good practice)
    emptyOutDir: true
  },
  // Define environment variables replacements
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'), // Replace NODE_ENV
    'process.env': JSON.stringify({}), // Replace process.env accesses
     // Vite v3+ uses import.meta.env, but some libs might still use process.
     // We need a robust way to eliminate 'process' if it's causing issues.
     // Using define is generally preferred over a custom plugin if possible.
    'process': JSON.stringify({}) // Attempt to replace 'process' global references
  },
  plugins: [
    react()
    // We removed the custom plugin here because 'define' is often sufficient
    // and less complex for this specific replacement task.
  ]
});