/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/ndarray/base/ind2sub.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>
#include <stdlib.h>

/**
* Converts a linear index to an array of subscripts.
*
* ## Notes
*
* -   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function interprets the linear index as an index into the underlying data buffer for the array, thus returning subscripts from the perspective of that buffer. If an `offset` is equal to `0`, the function treats the linear index as an index into an array view, thus returning subscripts from the perspective of that view. In short, from the perspective of a view, view data is always ordered.
*
* -   In "error" and "normalize" modes, the function returns `-1` if an index is out-of-bounds.
*
* @param ndims    number of dimensions
* @param shape    array shape (dimensions)
* @param strides  array strides
* @param offset   location of the first indexed value **based** on the stride array
* @param order    specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param idx      linear index in an array view
* @param mode     specifies how to handle a linear index which exceeds array dimensions
* @param out      output array
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/ind2sub.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include <stdint.h>
*
* int64_t ndims = 2;
* int64_t shape[] = { 3, 3 };
* int64_t strides[] = { -3, 1 };
* int64_t offset = 6;
*
* int64_t out[ 2 ];
*
* int8_t status = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, 7, STDLIB_NDARRAY_INDEX_ERROR, out );
* if ( status == -1 ) {
*     // Handle error...
* }
*/
int8_t stdlib_ndarray_ind2sub( const int64_t ndims, const int64_t *shape, const int64_t *strides, const int64_t offset, const enum STDLIB_NDARRAY_ORDER order, const int64_t idx, const enum STDLIB_NDARRAY_INDEX_MODE mode, int64_t *out ) {
	int64_t index;
	int64_t len;
	int64_t s;
	int64_t k;
	int64_t i;

	index = idx;
	len = 1;
	for ( i = 0; i < ndims; i++ ) {
		len *= shape[ i ];
	}
	if ( mode == STDLIB_NDARRAY_INDEX_CLAMP ) {
		if ( index < 0 ) {
			index = 0;
		} else if ( index >= len ) {
			index = len - 1;
		}
	} else if ( mode == STDLIB_NDARRAY_INDEX_WRAP ) {
		if ( index < 0 ) {
			index += len; // slight optimization to avoid modulo arithmetic when |index| <= len
			if ( index < 0 ) {
				index -= len*( (int64_t)( index/len ) ); // this is equivalent to `index mod len`, where the result has same sign as dividend (i.e., `index`); cannot use `%` as the sign of the result is implementation defined in C
				if ( index != 0 ) {
					index += len;
				}
			}
		} else if ( index >= len ) {
			index -= len; // slight optimization to avoid modulo arithmetic when len < index <= 2*len
			if ( index >= len ) {
				index %= len;
			}
		}
	} else {
		if ( mode == STDLIB_NDARRAY_INDEX_NORMALIZE && index < 0 ) {
			index += len;
		}
		if ( index < 0 || index >= len ) {
			return -1;
		}
	}
	if ( offset == 0 ) {
		if ( order == STDLIB_NDARRAY_COLUMN_MAJOR ) {
			for ( i = 0; i < ndims; i++ ) {
				s = index % shape[ i ];
				index -= s;
				index /= shape[ i ];
				out[ i ] = s;
			}
			return 0;
		}
		// Case: row-major
		for ( i = ndims-1; i >= 0; i-- ) {
			s = index % shape[ i ];
			index -= s;
			index /= shape[ i ];
			out[ i ] = s;
		}
		return 0;
	}
	if ( order == STDLIB_NDARRAY_COLUMN_MAJOR ) {
		for ( i = ndims-1; i >= 0; i-- ) {
			s = strides[ i ];
			if ( s < 0 ) {
				k = index / s; // truncates
				index -= k * s;
				out[ i ] = shape[ i ] - 1 + k;
			} else {
				k = index / s; // cppcheck-suppress zerodivcond // truncates
				index -= k * s;
				out[ i ] = k;
			}
		}
		return 0;
	}
	// Case: row-major
	for ( i = 0; i < ndims; i++ ) {
		s = strides[ i ];
		if ( s < 0 ) {
			k = index / s; // truncates
			index -= k * s;
			out[ i ] = shape[ i ] - 1 + k;
		} else {
			k = index / s; // cppcheck-suppress zerodivcond // truncates
			index -= k * s;
			out[ i ] = k;
		}
	}
	return 0;
}
