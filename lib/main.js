/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var lowercase = require( '@stdlib/string-lowercase' );
var replace = require( '@stdlib/string-replace' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );
var trim = require( '@stdlib/string-trim' );


// VARIABLES //

var RE_WHITESPACE = /\s+/g;
var RE_SPECIAL = /[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g; // eslint-disable-line no-useless-escape
var RE_CAMEL = /([a-z0-9])([A-Z])/g;


// MAIN //

/**
* Converts a string to kebab case.
*
* @param {string} str - string to convert
* @throws {TypeError} must provide a string primitive
* @returns {string} kebab-cased string
*
* @example
* var str = kebabCase( 'Hello World!' );
* // returns 'hello-world'
*
* @example
* var str = kebabCase( 'foo bar' );
* // returns 'foo-bar'
*
* @example
* var str = kebabCase( 'I am a tiny little teapot' );
* // returns 'i-am-a-tiny-little-teapot'
*
* @example
* var str = kebabCase( 'BEEP boop' );
* // returns 'beep-boop'
*
* @example
* var str = kebabCase( 'isMobile' );
* // returns 'is-mobile'
*/
function kebabCase( str ) {
	if ( !isString( str ) ) {
		throw new TypeError( format( '0hD3N', str ) );
	}
	str = replace( str, RE_SPECIAL, ' ' );
	str = replace( str, RE_CAMEL, '$1 $2' );
	str = trim( str );
	str = replace( str, RE_WHITESPACE, '-' );
	return lowercase( str );
}


// EXPORTS //

module.exports = kebabCase;