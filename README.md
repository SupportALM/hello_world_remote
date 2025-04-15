# My Remote Tool

A minimal React component bundled as a single ES module for remote loading (e.g., via GitHub Pages).

## Quick Start

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Build the ES module**
   ```sh
   npm run build
   ```
   This will output `dist/hello-remote.js`.

3. **Publish to GitHub Pages**
   - Push your repo to GitHub.
   - In GitHub: Settings → Pages → Source: `main` branch, `/dist` folder.
   - Your file will be at: `https://<your-username>.github.io/<your-repo>/hello-remote.js`

4. **Reference in your manifest**
   ```json
   {
     "id": "my-remote-tool",
     "name": "My Remote Tool",
     "description": "A tool loaded from my GitHub Pages.",
     "entry": "https://<your-username>.github.io/<your-repo>/hello-remote.js",
     "version": "0.1.0"
   }
   ```

---

- The output file is an ES module and expects `react` to be provided by the host app.
- You can modify `HelloRemote.js` to export any component you like!
