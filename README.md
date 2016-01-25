# vue-plugin
Template to create vue plugin or shareable components.

## Using tools
- Transpiler
    - babel, coffee, jade, less, sass, stylus
- Linter
    - eslint
- Bundler
    - rollup
- Test Assertion
    - chai
- Test Fremework
    - mocha
- Test Runner
    - karma
- Test Coverage
    - istanbul, coveralls
- Headless Browser
    - phantomjs

## Installation

```sh
$ npm install -g vue-cli
$ vue init znck/vue-plugin demo-project
$ cd demo-project
$ npm install
```


### What's Included

- `npm run build`: CommonJS ready modules.
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - Packed with [rollup](http://rollupjs.org/).

- `npm run unit`: Unit tests run in PhantomJS with Karma + karma-mocha + karma-webpack.
  - Supports ES2015 in test files.
  - Supports all webpack loaders.
  - Easy [mock injection](http://vuejs.github.io/vue-loader/workflow/testing-with-mocks.html).
  - Code coverage with [istanbul](https://github.com/gotwarlost/istanbul) and [coveralls](http://coveralls.io/).


- `npm run lint`: Lint .js/.vue wth eslint.
   - Supports ES2015 in all files.
	
- `npm test`: Run lint and then unit.
	
- `npm run clean`: Delete coverage and dist directory.
