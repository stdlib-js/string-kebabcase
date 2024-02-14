// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):n.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":p(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function k(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+k(t):k(t)+e}var S=String.fromCharCode,E=isNaN,_=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,i,t,n,o,p,l,u,f;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=$(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,E(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function j(e){var r,i,t,a;for(i=[],a=0,t=T.exec(e);t;)(r=e.slice(a,T.lastIndex-t[0].length)).length&&i.push(r),i.push(F(t)),a=T.lastIndex,t=T.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function I(e){return"string"==typeof e}function A(e){var r,i;if(!I(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[j(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return V.apply(null,r)}var C=Object.prototype,R=C.toString,O=C.__defineGetter__,Z=C.__defineSetter__,P=C.__lookupGetter__,W=C.__lookupSetter__,L=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(P.call(e,r)||W.call(e,r)?(t=e.__proto__,e.__proto__=C,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&O&&O.call(e,r,i.get),o&&Z&&Z.call(e,r,i.set),e};function G(e,r,i){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function N(e){return"string"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,M=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"",D=X()?function(e){var r,i,t,a,n;if(null==e)return z.call(e);i=e[B],n=B,r=null!=(a=e)&&M.call(a,n);try{e[B]=void 0}catch(r){return z.call(e)}return t=z.call(e),r?e[B]=i:delete e[B],t}:function(e){return z.call(e)},H=String.prototype.valueOf,J=X();function K(e){return"object"==typeof e&&(e instanceof String||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object String]"===D(e)))}function Q(e){return N(e)||K(e)}function Y(e){return"number"==typeof e}function ee(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function re(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ee(a):ee(a)+e,t&&(e="-"+e)),e}G(Q,"isPrimitive",N),G(Q,"isObject",K);var ie=String.prototype.toLowerCase,te=String.prototype.toUpperCase;function ae(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Y(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=re(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=re(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===te.call(e.specifier)?te.call(i):ie.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ne(e){return"string"==typeof e}var oe=Math.abs,se=String.prototype.toLowerCase,ce=String.prototype.toUpperCase,pe=String.prototype.replace,le=/e\+(\d)$/,ue=/e-(\d)$/,fe=/^(\d+)$/,ge=/^(\d+)e/,de=/\.0$/,he=/\.0*e/,we=/(\..*[^0])0*e/;function be(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Y(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":oe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=pe.call(i,we,"$1e"),i=pe.call(i,he,"e"),i=pe.call(i,de,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=pe.call(i,le,"e+0$1"),i=pe.call(i,ue,"e-0$1"),e.alternate&&(i=pe.call(i,fe,"$1."),i=pe.call(i,ge,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ce.call(e.specifier)?ce.call(i):se.call(i)}function ve(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ye(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ve(t):ve(t)+e}var me=String.fromCharCode,ke=isNaN,xe=Array.isArray;function Se(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ee(e){var r,i,t,a,n,o,s,c,p;if(!xe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ne(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Se(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,ke(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,ke(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ae(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ke(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ke(n)?String(t.arg):me(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=be(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=re(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ye(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var _e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ve(e){var r,i,t,a;for(i=[],a=0,t=_e.exec(e);t;)(r=e.slice(a,_e.lastIndex-t[0].length)).length&&i.push(r),i.push($e(t)),a=_e.lastIndex,t=_e.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function Te(e){return"string"==typeof e}function Fe(e){var r,i,t;if(!Te(e))throw new TypeError(Fe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ve(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Ee.apply(null,i)}function je(e,r,i){return e.replace(r,i)}var Ie=void 0!==String.prototype.trim,Ae=String.prototype.trim,Ce=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/,Re=Ie&&""===Ae.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===Ae.call("᠎")?function(e){return Ae.call(e)}:function(e){return je(e,Ce,"$1")},Oe=/\s+/g,Ze=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Pe=/([a-z0-9])([A-Z])/g;return function(e){if(!N(e))throw new TypeError(Fe("invalid argument. Must provide a string. Value: `%s`.",e));return function(e){return e=je(e,Ze," "),e=je(e,Pe,"$1 $2"),function(e){return e.toLowerCase()}(e=je(e=Re(e),Oe,"-"))}(e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).kebabcase=r();
//# sourceMappingURL=browser.js.map
