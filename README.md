<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# kebabcase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a string to kebab case.

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import kebabcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-kebabcase@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/string-kebabcase/tags). For example,

```javascript
import kebabcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-kebabcase@v0.0.6-deno/mod.js';
```

#### kebabcase( str )

Converts a string to kebab case.

```javascript
var str = kebabcase( 'Foo Bar' );
// returns 'foo-bar'

str = kebabcase( 'I am a tiny little house' );
// returns 'i-am-a-tiny-little-house'

str = kebabcase( 'Hello World!' );
// returns 'hello-world'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
import kebabcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-kebabcase@deno/mod.js';

var str = 'foo bar baz';
var out = kebabcase( str );
// returns 'foo-bar-baz'

str = 'foo_baz';
out = kebabcase( str );
// returns 'foo-baz'

str = 'foo-bar-baz!';
out = kebabcase( str );
// returns 'foo-bar-baz'

str = 'beep    boop!';
out = kebabcase( str );
// returns 'beep-boop'

str = 'foo-baz';
out = kebabcase( str );
// returns 'foo-baz'

str = 'Welcome! 😀';
out = kebabcase( str );
// returns 'welcome-😀'
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-camelcase`][@stdlib/string/camelcase]</span><span class="delimiter">: </span><span class="description">convert a string to camel case.</span>
-   <span class="package-name">[`@stdlib/string-constantcase`][@stdlib/string/constantcase]</span><span class="delimiter">: </span><span class="description">convert a string to constant case.</span>
-   <span class="package-name">[`@stdlib/string-pascalcase`][@stdlib/string/pascalcase]</span><span class="delimiter">: </span><span class="description">convert a string to Pascal case.</span>
-   <span class="package-name">[`@stdlib/string-snakecase`][@stdlib/string/snakecase]</span><span class="delimiter">: </span><span class="description">convert a string to snake case.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-kebabcase.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-kebabcase

[test-image]: https://github.com/stdlib-js/string-kebabcase/actions/workflows/test.yml/badge.svg?branch=v0.0.6
[test-url]: https://github.com/stdlib-js/string-kebabcase/actions/workflows/test.yml?query=branch:v0.0.6

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-kebabcase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-kebabcase?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-kebabcase.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-kebabcase/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-kebabcase#cli
[cli-url]: https://github.com/stdlib-js/string-kebabcase/tree/cli
[@stdlib/string-kebabcase]: https://github.com/stdlib-js/string-kebabcase/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-kebabcase/tree/deno
[umd-url]: https://github.com/stdlib-js/string-kebabcase/tree/umd
[esm-url]: https://github.com/stdlib-js/string-kebabcase/tree/esm
[branches-url]: https://github.com/stdlib-js/string-kebabcase/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-kebabcase/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/camelcase]: https://github.com/stdlib-js/string-camelcase/tree/deno

[@stdlib/string/constantcase]: https://github.com/stdlib-js/string-constantcase/tree/deno

[@stdlib/string/pascalcase]: https://github.com/stdlib-js/string-pascalcase/tree/deno

[@stdlib/string/snakecase]: https://github.com/stdlib-js/string-snakecase/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
