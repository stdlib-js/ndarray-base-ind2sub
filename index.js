// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function a(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function t(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+a(n):a(n)+e,t&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,a,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(a=e.arg,s=parseInt(a,10),!isFinite(s)){if(!i(a))throw new Error("invalid integer. Value: "+a);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(a=(-s).toString(r),e.precision&&(a=t(a,e.precision,e.padRight)),a="-"+a):(a=s.toString(r),s||e.precision?e.precision&&(a=t(a,e.precision,e.padRight)):a="",e.sign&&(a=e.sign+a)),16===r&&(e.alternate&&(a="0x"+a),a=e.specifier===o.call(e.specifier)?o.call(a):n.call(a)),8===r&&e.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function y(e){var r,a,t=parseFloat(e.arg);if(!isFinite(t)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+a);t=e.arg}switch(e.specifier){case"e":case"E":a=t.toExponential(e.precision);break;case"f":case"F":a=t.toFixed(e.precision);break;case"g":case"G":p(t)<1e-4?((r=e.precision)>0&&(r-=1),a=t.toExponential(r)):a=t.toPrecision(e.precision),e.alternate||(a=u.call(a,m,"$1e"),a=u.call(a,v,"e"),a=u.call(a,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=u.call(a,g,"e+0$1"),a=u.call(a,d,"e-0$1"),e.alternate&&(a=u.call(a,h,"$1."),a=u.call(a,w,"$1.e")),t>=0&&e.sign&&(a=e.sign+a),a=e.specifier===f.call(e.specifier)?f.call(a):l.call(a)}function x(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var a=r-e.length;return a<0?e:e=i?e+x(a):x(a)+e}var E=String.fromCharCode,_=isNaN,S=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,i,a,n,o,p,l,f,u;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,f=0;f<e.length;f++)if(c(a=e[f]))p+=a;else{if(r=void 0!==a.precision,!(a=V(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+a+"`.");for(a.mapping&&(l=a.mapping),i=a.flags,u=0;u<i.length;u++)switch(n=i.charAt(u)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[l],10),l+=1,_(a.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[l],10),l+=1,_(a.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[l],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=s(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!_(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=_(o)?String(a.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=y(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=t(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=k(a.arg,a.width,a.padRight)),p+=a.arg||"",l+=1}return p}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,i,a,t;for(i=[],t=0,a=F.exec(e);a;)(r=e.slice(t,F.lastIndex-a[0].length)).length&&i.push(r),i.push(I(a)),t=F.lastIndex,a=F.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function j(e){return"string"==typeof e}function A(e){var r,i;if(!j(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return $.apply(null,r)}var C,R=Object.prototype,Z=R.toString,W=R.__defineGetter__,L=R.__defineSetter__,G=R.__lookupGetter__,O=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var a,t,n,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===Z.call(i))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((t="value"in i)&&(G.call(e,r)||O.call(e,r)?(a=e.__proto__,e.__proto__=R,delete e[r],e[r]=i.value,e.__proto__=a):e[r]=i.value),n="get"in i,o="set"in i,t&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&W&&W.call(e,r,i.get),o&&L&&L.call(e,r,i.set),e};var P=C;function N(e){return"number"==typeof e}function M(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function U(e,r,i){var a=!1,t=r-e.length;return t<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+M(t):M(t)+e,a&&(e="-"+e)),e}var X=String.prototype.toLowerCase,z=String.prototype.toUpperCase;function q(e){var r,i,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,a=parseInt(i,10),!isFinite(a)){if(!N(i))throw new Error("invalid integer. Value: "+i);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(i=(-a).toString(r),e.precision&&(i=U(i,e.precision,e.padRight)),i="-"+i):(i=a.toString(r),a||e.precision?e.precision&&(i=U(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===z.call(e.specifier)?z.call(i):X.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function B(e){return"string"==typeof e}var D=Math.abs,H=String.prototype.toLowerCase,J=String.prototype.toUpperCase,K=String.prototype.replace,Q=/e\+(\d)$/,Y=/e-(\d)$/,ee=/^(\d+)$/,re=/^(\d+)e/,ie=/\.0$/,ae=/\.0*e/,te=/(\..*[^0])0*e/;function ne(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!N(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":D(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=K.call(i,te,"$1e"),i=K.call(i,ae,"e"),i=K.call(i,ie,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=K.call(i,Q,"e+0$1"),i=K.call(i,Y,"e-0$1"),e.alternate&&(i=K.call(i,ee,"$1."),i=K.call(i,re,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===J.call(e.specifier)?J.call(i):H.call(i)}function oe(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function se(e,r,i){var a=r-e.length;return a<0?e:e=i?e+oe(a):oe(a)+e}var ce=String.fromCharCode,pe=isNaN,le=Array.isArray;function fe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ue(e){var r,i,a,t,n,o,s,c,p;if(!le(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(B(a=e[c]))o+=a;else{if(r=void 0!==a.precision,!(a=fe(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+a+"`.");for(a.mapping&&(s=a.mapping),i=a.flags,p=0;p<i.length;p++)switch(t=i.charAt(p)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if("*"===a.width){if(a.width=parseInt(arguments[s],10),s+=1,pe(a.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[s],10),s+=1,pe(a.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[s],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=q(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!pe(a.arg)){if((n=parseInt(a.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=pe(n)?String(a.arg):ce(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=ne(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=U(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=se(a.arg,a.width,a.padRight)),o+=a.arg||"",s+=1}return o}var ge=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function de(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function he(e){var r,i,a,t;for(i=[],t=0,a=ge.exec(e);a;)(r=e.slice(t,ge.lastIndex-a[0].length)).length&&i.push(r),i.push(de(a)),t=ge.lastIndex,a=ge.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function we(e){return"string"==typeof e}function be(e){var r,i,a;if(!we(e))throw new TypeError(be("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=he(e),(i=new Array(arguments.length))[0]=r,a=1;a<i.length;a++)i[a]=arguments[a];return ue.apply(null,i)}var ve=Math.floor,me=Math.ceil;function ye(e){return e<0?me(e):ve(e)}function xe(e,r,i,a,t,n,o){var s,c,p,l,f;for(s=e.length,c=1,f=0;f<s;f++)c*=e[f];if("clamp"===n)t<0?t=0:t>=c&&(t=c-1);else if("wrap"===n)t<0?(t+=c)<0&&0!=(t%=c)&&(t+=c):t>=c&&(t-=c)>=c&&(t%=c);else if("normalize"===n&&t<0&&(t+=c),t<0||t>=c)throw new RangeError(be("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",c,t));if(0===i){if("column-major"===a){for(f=0;f<s;f++)t-=l=t%e[f],t/=e[f],o[f]=l;return o}for(f=s-1;f>=0;f--)t-=l=t%e[f],t/=e[f],o[f]=l;return o}if("column-major"===a){for(f=s-1;f>=0;f--)(l=r[f])<0?(t-=(p=ye(t/l))*l,o[f]=e[f]-1+p):(t-=(p=ye(t/l))*l,o[f]=p);return o}for(f=0;f<s;f++)(l=r[f])<0?(t-=(p=ye(t/l))*l,o[f]=e[f]-1+p):(t-=(p=ye(t/l))*l,o[f]=p);return o}function ke(e,r,i,a,t,n){return xe(e,r,i,a,t,n,function(e,r){var i,a;for(i=[],a=0;a<r;a++)i.push(e);return i}(0,e.length))}return P(ke,"assign",{configurable:!1,enumerable:!1,writable:!1,value:xe}),ke},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ind2sub=r();
//# sourceMappingURL=index.js.map
