import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import inject from '@rollup/plugin-inject';

export default {
  input: 'HelloRemote.jsx',
  output: {
    file: 'dist/hello-remote.js',
    format: 'esm',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    inject({
      process: 'process/browser',
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
