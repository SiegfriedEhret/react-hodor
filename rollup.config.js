import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV;

export default {
  entry: 'demo/index.js',
  dest: 'demo/bundle.js',
  format: 'umd',
  moduleName: 'Hodor',
  plugins: [
    nodeResolve(),
    replace({'process.env.NODE_ENV': JSON.stringify(env)}),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    env === 'production' && uglify()
  ]
};
