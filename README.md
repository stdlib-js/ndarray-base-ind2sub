<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ind2sub

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a linear index to an array of subscripts.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-ind2sub
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ind2sub = require( '@stdlib/ndarray-base-ind2sub' );
```

#### ind2sub( shape, strides, offset, order, idx, mode )

Converts a linear index to an array of subscripts.

```javascript
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

var subscripts = ind2sub( shape, strides, offset, order, 1, 'throw' );
// returns [ 0, 1 ]
```

The function supports the following modes:

-   **throw**: specifies that the function should throw an error when a linear index exceeds array dimensions.
-   **normalize**: specifies that the function should normalize negative indices and throw an error when a linear index exceeds array dimensions.
-   **wrap**: specifies that the function should wrap around a linear index exceeding array dimensions using modulo arithmetic.
-   **clamp**: specifies that the function should set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.

```javascript
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

var idx = ind2sub( shape, strides, offset, order, -2, 'wrap' );
// returns [ 1, 0 ]

idx = ind2sub( shape, strides, offset, order, 10, 'clamp' );
// returns [ 1, 1 ]
```

The `order` parameter specifies whether an array is `row-major` (C-style) or `column-major` (Fortran-style).

```javascript
var shape = [ 2, 2 ];
var order = 'column-major';
var strides = [ 1, 2 ];
var offset = 0;

var idx = ind2sub( shape, strides, offset, order, 2, 'throw' );
// returns [ 0, 1 ]
```

#### ind2sub.assign( shape, strides, offset, order, idx, mode, out )

Converts a linear index to an array of subscripts and assigns results to a provided output array.

```javascript
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

var out = [ 0, 0 ];
var subscripts = ind2sub.assign( shape, strides, offset, order, 1, 'throw', out );
// returns [ 0, 1 ]

var bool = ( subscripts === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function interprets the linear index as an index into the underlying data buffer for the array, thus returning subscripts from the perspective of that buffer. If an `offset` is equal to `0`, the function treats the linear index as an index into an array view, thus returning subscripts from the perspective of that view.

    ```text
    Dims: 2x2
    Buffer: [ 1, 2, 3, 4 ]

    View = [ a00, a01,
             a10, a11 ]

    Strides: 2,1
    Offset: 0

    View = [ 1, 2,
             3, 4 ]

    Strides: 2,-1
    Offset: 1

    View = [ 2, 1,
             4, 3 ]

    Strides: -2,1
    Offset: 2

    View = [ 3, 4,
             1, 2 ]

    Strides: -2,-1
    Offset: 3

    View = [ 4, 3,
             2, 1 ]
    ```

    ```javascript
    var shape = [ 2, 2 ];
    var order = 'row-major';
    var strides = [ -2, 1 ];
    var offset = 2;
    var mode = 'throw';

    // From the perspective of a view...
    var s = ind2sub( shape, strides, 0, order, 0, mode );
    // returns [ 0, 0 ]

    s = ind2sub( shape, strides, 0, order, 1, mode );
    // returns [ 0, 1 ]

    s = ind2sub( shape, strides, 0, order, 2, mode );
    // returns [ 1, 0 ]

    s = ind2sub( shape, strides, 0, order, 3, mode );
    // returns [ 1, 1 ]

    // From the perspective of an underlying buffer...
    s = ind2sub( shape, strides, offset, order, 0, mode );
    // returns [ 1, 0 ]

    s = ind2sub( shape, strides, offset, order, 1, mode );
    // returns [ 1, 1 ]

    s = ind2sub( shape, strides, offset, order, 2, mode );
    // returns [ 0, 0 ]

    s = ind2sub( shape, strides, offset, order, 3, mode );
    // returns [ 0, 1 ]
    ```

    In short, from the perspective of a view, view data is always ordered.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var numel = require( '@stdlib/ndarray-base-numel' );
var randu = require( '@stdlib/random-base-randu' );
var abs = require( '@stdlib/math-base-special-abs' );
var ind2sub = require( '@stdlib/ndarray-base-ind2sub' );

// Specify array characteristics:
var shape = [ 3, 3, 3 ];
var order = 'row-major';

// Compute array meta data:
var ndims = shape.length;
var strides = shape2strides( shape, order );
var len = numel( shape );

// Determine stride indices to be used for formatting how views are displayed...
var s0;
var s1;
if ( order === 'column-major' ) {
    s0 = ndims - 1;
    s1 = s0 - 1;
} else { // row-major
    s0 = 0;
    s1 = s0 + 1;
}

// Initialize a linear array...
var arr = [];
var i;
for ( i = 0; i < len; i++ ) {
    arr.push( 0 );
}

// Generate random views and display the mapping of elements in the linear array to view subscripts...
var offset;
var row;
var j;
var s;
for ( i = 0; i < 20; i++ ) {
    // Randomly flip the sign of one of the strides...
    j = discreteUniform( 0, ndims-1 );
    strides[ j ] *= ( randu() < 0.5 ) ? -1 : 1;
    offset = strides2offset( shape, strides );

    // Print view meta data...
    console.log( '' );
    console.log( 'Dimensions: %s.', shape.join( 'x' ) );
    console.log( 'Strides: %s.', strides.join( ',' ) );
    console.log( 'View (subscripts):' );

    // Print the mapping of elements in the linear array to view subscripts...
    row = '  ';
    for ( j = 0; j < len; j++ ) {
        s = ind2sub( shape, strides, offset, order, j, 'throw' );
        row += '(' + s.join( ',' ) + ')';
        if ( ndims === 1 && j === len-1 ) {
            console.log( row );
        } else if ( ndims === 2 && (j+1)%abs( strides[ s0 ] ) === 0 ) {
            console.log( row );
            row = '  ';
        } else if ( ndims > 2 && (j+1)%abs( strides[ s1 ] ) === 0 ) {
            console.log( row );
            if ( (j+1)%abs( strides[ s0 ] ) === 0 ) {
                console.log( '' );
            }
            row = '  ';
        } else {
            row += ', ';
        }
    }
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/ind2sub.h"
```

<!-- lint disable maximum-heading-length -->

#### stdlib_ndarray_ind2sub( ndims, \*shape, \*strides, offset, order, idx, mode, \*out )

Computes the minimum and maximum linear indices in an underlying data buffer accessible to an array view.

```c
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>

int64_t ndims = 2;
int64_t shape[] = { 3, 3 };
int64_t strides[] = { -3, 1 };
int64_t offset = 6;

int64_t out[ 2 ];

int8_t status = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, 7, STDLIB_NDARRAY_INDEX_ERROR, out );
if ( status == -1 ) {
    // Handle error...
}
```

The function accepts the following arguments:

-   **ndims**: `[in] int64_t` number of dimensions.
-   **shape**: `[in] int64_t*` array shape (dimensions).
-   **strides**: `[in] int64_t*` array strides.
-   **offset**: `[in] int64_t` index offset.
-   **order**: `[in] enum STDLIB_NDARRAY_ORDER` specifies whether an array is row-major (C-style) or column-major (Fortran-style).
-   **idx**: `[in] int64_t` linear index in an array view.
-   **mode**: `[in] enum STDLIB_NDARRAY_INDEX_MODE` specifies how to handle a linear index which exceeds array dimensions.
-   **out**: `[out] int64_t*` output array.

```c
int8_t stdlib_ndarray_ind2sub( const int64_t ndims, const int64_t *shape, const int64_t *strides, const int64_t offset, const enum STDLIB_NDARRAY_ORDER order, const int64_t idx, const enum STDLIB_NDARRAY_INDEX_MODE mode, int64_t *out );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/ndarray/base/ind2sub.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    int64_t ndims = 2;
    int64_t shape[] = { 3, 3 };
    int64_t strides[] = { -3, 1 };
    int64_t offset = 6;

    int64_t out[ 2 ];

    stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, 7, STDLIB_NDARRAY_INDEX_ERROR, out );

    int i;
    printf( "subscripts = { " );
    for ( i = 0; i < ndims; i++ ) {
        printf( "%"PRId64"", out[ i ] );
        if ( i < ndims-1 ) {
            printf( ", " );
        }
    }
    printf( " }\n" );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-ind2sub.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-ind2sub

[test-image]: https://github.com/stdlib-js/ndarray-base-ind2sub/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-ind2sub/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-ind2sub/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-ind2sub?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-ind2sub.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-ind2sub/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-ind2sub/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-ind2sub/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-ind2sub/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-ind2sub/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-ind2sub/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-ind2sub/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-ind2sub/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-ind2sub/main/LICENSE

</section>

<!-- /.links -->
