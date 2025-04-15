import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'HelloRemote.jsx',
  output: {
    file: 'dist/hello-remote.js',
    format: 'esm',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx'],
      include: ['**/*.{js,jsx}']
    })
  ]
};
