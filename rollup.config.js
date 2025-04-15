import babel from '@rollup/plugin-babel';

export default {
  input: 'HelloRemote.js',
  output: {
    file: 'dist/hello-remote.js',
    format: 'esm',
  },
  plugins: [
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-react'] })
  ],
  external: ['react']
};
