// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,i=e.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(a.call(t,r)||i.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=c):t[r]=l.value),p="get"in l,y="set"in l,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,l.get),y&&u&&u.call(t,r,l.set),t};function c(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var g=y()?function(t){var r,e,n,o,u;if(null==t)return b.call(t);e=t[_],u=_,r=null!=(o=t)&&v.call(o,u);try{t[_]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[_]=e:delete t[_],n}:function(t){return b.call(t)},s=String.prototype.valueOf;var m=y();function d(t){return"object"==typeof t&&(t instanceof String||(m?function(t){try{return s.call(t),!0}catch(t){return!1}}(t):"[object String]"===g(t)))}function S(t){return f(t)||d(t)}function j(t,r,e){return t.replace(r,e)}c(S,"isPrimitive",f),c(S,"isObject",d);var h=void 0!==String.prototype.trim,w=String.prototype.trim;var O=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var P=h&&""===w.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===w.call("᠎")?function(t){return w.call(t)}:function(t){return j(t,O,"$1")},T=/\s+/g,$=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,E=/([a-z0-9])([A-Z])/g;function A(t){if(!f(t))throw new TypeError(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("0hD3N",t));return function(t){return t=j(t,$," "),t=j(t,E,"$1 $2"),function(t){return t.toLowerCase()}(t=j(t=P(t),T,"-"))}(t)}export{A as default};
//# sourceMappingURL=mod.js.map
