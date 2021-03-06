import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import pkg from './package.json';

export default [{
  input: './lib/node.js',
  output: [{
    file: 'dist/autoconsent.puppet.js',
    format: 'cjs'
  }],
}, {
  input: './lib/web.js',
  output: [{
    file: pkg.module,
    format: 'es',
    globals: ['browser'],
  }, {
    file: pkg.main,
    format: 'cjs',
  }],
}, {
  input: './test/background.js',
  output: [{
    file: './test/background.bundle.js',
    format: 'iife',
  }],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
  ],
}, {
  input: './test/content.js',
  output: [{
    file: './test/content.bundle.js',
    format: 'iife',
  }]
}];