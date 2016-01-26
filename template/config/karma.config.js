var vue = {
  test: /\.vue$/,
  loader: 'vue'
}
var babel = {
  test: /\.js$/,
  exclude: /(node_modules|dist)/,
  loader: 'babel',
  query: {
    presets: ['es2015'],
    plugins: [
      ['babel-plugin-espower']
    ]
  }
}
var json = {
  test: /\.json$/,
  loader: 'json'
}
var istanbul = {
  test: /\.js$/,
  exclude: /(test|node_modules|dist)/,
  loader: 'istanbul-instrumenter'
}

// Karma configuration
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // Frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: ['../test/unit/index.js'],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../test/unit/index.js': ['webpack']
    },

    webpack: {
      devtool: 'source-map',
      module: {
        loaders: [vue, babel],
        postLoaders: [json, istanbul]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'mocha', 'coverage', 'coveralls'
    ],

    coverageReporter: {
      reporters: [{
        type: 'lcov', dir: '../coverage'
      }, {
        type: 'text-summary', dir: '../coverage'
      }]
    },

    port: 8080,
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    plugins: [
      'karma-chai',
      'karma-coverage',
      'karma-coveralls',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-webpack'
    ]
  })
}
