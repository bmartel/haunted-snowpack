import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const build = (input, output = {}) => ({
  input,
  output,
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs({
      include: /node_modules/,
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    terser({
      output: {
        comments: false,
      },
    }),
  ],
});

export default [
  build('build/sw.js', {
    format: 'cjs',
    file: 'build/sw.js',
  }),
];
