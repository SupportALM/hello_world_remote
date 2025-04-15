import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'HelloRemote.jsx',
  output: {
    file: 'dist/hello-remote.js',
    format: 'esm',
  },
  external: ['react'],
  output: {
    file: 'dist/hello-remote.js',
    format: 'esm',
    globals: {
      react: 'React'
    }
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
      include: ['**/*'],
    }),
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
