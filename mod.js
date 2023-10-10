// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function a(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function t(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+a(n):a(n)+e,t&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,a,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(a=e.arg,s=parseInt(a,10),!isFinite(s)){if(!i(a))throw new Error("invalid integer. Value: "+a);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(a=(-s).toString(r),e.precision&&(a=t(a,e.precision,e.padRight)),a="-"+a):(a=s.toString(r),s||e.precision?e.precision&&(a=t(a,e.precision,e.padRight)):a="",e.sign&&(a=e.sign+a)),16===r&&(e.alternate&&(a="0x"+a),a=e.specifier===o.call(e.specifier)?o.call(a):n.call(a)),8===r&&e.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}function c(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function y(e){var r,a,t=parseFloat(e.arg);if(!isFinite(t)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+a);t=e.arg}switch(e.specifier){case"e":case"E":a=t.toExponential(e.precision);break;case"f":case"F":a=t.toFixed(e.precision);break;case"g":case"G":l(t)<1e-4?((r=e.precision)>0&&(r-=1),a=t.toExponential(r)):a=t.toPrecision(e.precision),e.alternate||(a=f.call(a,m,"$1e"),a=f.call(a,v,"e"),a=f.call(a,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=f.call(a,g,"e+0$1"),a=f.call(a,d,"e-0$1"),e.alternate&&(a=f.call(a,h,"$1."),a=f.call(a,w,"$1.e")),t>=0&&e.sign&&(a=e.sign+a),a=e.specifier===u.call(e.specifier)?u.call(a):p.call(a)}function _(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var a=r-e.length;return a<0?e:e=i?e+_(a):_(a)+e}var E=String.fromCharCode,k=isNaN,j=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,i,a,n,o,l,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(c(a=e[u]))l+=a;else{if(r=void 0!==a.precision,!(a=S(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+a+"`.");for(a.mapping&&(p=a.mapping),i=a.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[p],10),p+=1,k(a.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[p],10),p+=1,k(a.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[p],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=s(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!k(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=k(o)?String(a.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=y(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=t(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=x(a.arg,a.width,a.padRight)),l+=a.arg||"",p+=1}return l}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,i,a,t;for(i=[],t=0,a=$.exec(e);a;)(r=e.slice(t,$.lastIndex-a[0].length)).length&&i.push(r),i.push(F(a)),t=$.lastIndex,a=$.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function I(e){return"string"==typeof e}function T(e){var r,i,a;if(!I(e))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(i=new Array(arguments.length))[0]=r,a=1;a<i.length;a++)i[a]=arguments[a];return V.apply(null,i)}var C,R=Object.prototype,O=R.toString,P=R.__defineGetter__,Z=R.__defineSetter__,G=R.__lookupGetter__,L=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var a,t,n,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===O.call(i))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((t="value"in i)&&(G.call(e,r)||L.call(e,r)?(a=e.__proto__,e.__proto__=R,delete e[r],e[r]=i.value,e.__proto__=a):e[r]=i.value),n="get"in i,o="set"in i,t&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&P&&P.call(e,r,i.get),o&&Z&&Z.call(e,r,i.set),e};var W=C;var M=Math.floor,N=Math.ceil;function U(e){return e<0?N(e):M(e)}function X(e,r,i,a,t,n,o){var s,c,l,p,u;for(s=e.length,c=1,u=0;u<s;u++)c*=e[u];if("clamp"===n)t<0?t=0:t>=c&&(t=c-1);else if("wrap"===n)t<0?(t+=c)<0&&0!==(t%=c)&&(t+=c):t>=c&&(t-=c)>=c&&(t%=c);else if(t<0||t>=c)throw new RangeError(T("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",c,t));if(0===i){if("column-major"===a){for(u=0;u<s;u++)t-=p=t%e[u],t/=e[u],o[u]=p;return o}for(u=s-1;u>=0;u--)t-=p=t%e[u],t/=e[u],o[u]=p;return o}if("column-major"===a){for(u=s-1;u>=0;u--)(p=r[u])<0?(t-=(l=U(t/p))*p,o[u]=e[u]-1+l):(t-=(l=U(t/p))*p,o[u]=l);return o}for(u=0;u<s;u++)(p=r[u])<0?(t-=(l=U(t/p))*p,o[u]=e[u]-1+l):(t-=(l=U(t/p))*p,o[u]=l);return o}function z(e,r,i,a,t,n){var o,s;for(o=[],s=0;s<e.length;s++)o.push(0);return X(e,r,i,a,t,n,o)}W(z,"assign",{configurable:!1,enumerable:!1,writable:!1,value:X});export{X as assign,z as default};
//# sourceMappingURL=mod.js.map
