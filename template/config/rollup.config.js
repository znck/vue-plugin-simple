var rollup = require('rollup')
var vue = require('rollup-plugin-vue')
var replace = require('rollup-plugin-replace')
var Promise = require('es6-promise')['Promise']
var fs = require('fs')
var pack = require('../package.json')
var banner = require('./banner')

// update main file
var main = fs
    .readFileSync('src/index.js', 'utf-8')
    .replace(/plugin\.version = '[\d\.]+'/, "plugin.version = '" + pack.version + "'")

fs.writeFileSync('src/index.js', main)

// CommonJS build.
// this is used as the "main" field in package.json
// and used by bundlers like Webpack and Browserify.
rollup.rollup({
  entry: 'src/index.js',
  plugins: [replace({
    'process.env.NODE_ENV': "'development'"
  }), vue()]
}).then(function (bundle) {
  return write('dist/' + pack.name + '.common.js', bundle.generate({
    format: 'cjs',
    banner: banner
  }).code)
}).catch(logError)

function write (dest, code) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err)
      console.log(blue(dest) + ' ' + getSize(code))
      resolve()
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function logError (e) {
  console.log(e)
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
