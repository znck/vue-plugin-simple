// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack
require('es6-promise/auto');
require('phantomjs-prebuilt').path = '/usr/local/bin/phantomjs';

var vue = require('rollup-plugin-vue');
var buble = require('rollup-plugin-buble');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var replace = require('rollup-plugin-replace');

var bubleConfig = {
  useStrict: false,
};
var rollupConfig = {
  useStrict: false,
  plugins: [
    vue({compileTemplate: true}),
    buble(bubleConfig),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    })
  ],
};

module.exports = function(config) {
  config.set({
    autoWatch: true,
    browsers: ['Chrome'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: [
      './specs/**/*.spec.js'
    ],
    preprocessors: {
      '../../src/**/*.js': ['rollup'],
      '../../src/**/*.vue': ['rollup'],
      './specs/**/*.spec.js': ['rollup']
    },
    rollupPreprocessor: rollupConfig,
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
      ]
    },
  });
}
