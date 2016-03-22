# Vue Plugin Skeleton
Template to create vue plugin or shareable components. The purpose of this Vue project templates is to provide opinionated, battery-included development tooling setups so that users can get started with actual app code as fast as possible.

![Vue Plugin Skeleton](cover.png)

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="Software License" />
  </a>
  <a href="https://github.com/znck/vue-plugin/releases">
    <img src="https://img.shields.io/github/release/znck/vue-plugin.svg?style=flat-square" alt="Latest Version" />
  </a>

  <a href="https://github.com/znck/vue-plugin/issues">
    <img src="https://img.shields.io/github/issues/znck/vue-plugin.svg?style=flat-square" alt="Issues" />
  </a>
</p>

## Installation

[Node](https://nodejs.org/) and [vue-cli](https://github.com/vuejs/vue-cli) are required.

```sh
$ vue init znck/vue-plugin my-project
$ cd demo-project
$ npm install
```
The above command pulls this template, prompts for some information, and generates the project at `./my-project/`.

## Using tools
- Transpiler
    - babel, coffee, jade, less, sass, stylus
- Linter
    - eslint
- Bundler
    - rollup
- Test Assertion
    - chai
- Test Framework
    - mocha
- Test Runner
    - karma
- Test Coverage
    - istanbul, coveralls
- Headless Browser
    - phantomjs

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


## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ composer test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

## Security

If you discover any security related issues, please email :author_email instead of using the issue tracker.

## Credits

- [Rahul Kadyan][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/znck
[link-contributors]: ../../contributors
