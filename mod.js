// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,i=o.__lookupGetter__,u=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(e,r)||u.call(e,r)?(c=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&l&&l.call(e,r,t.set),e};var c=r;var f=Math.floor,_=Math.ceil;function p(e){return e<0?_(e):f(e)}function s(e,r,t,o,n,a,l){var i,u,c,f,_;for(i=e.length,u=1,_=0;_<i;_++)u*=e[_];if("clamp"===a)n<0?n=0:n>=u&&(n=u-1);else if("wrap"===a)n<0?(n+=u)<0&&0!==(n%=u)&&(n+=u):n>=u&&(n-=u)>=u&&(n%=u);else if(n<0||n>=u)throw new RangeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("0MJ5S",u,n));if(0===t){if("column-major"===o){for(_=0;_<i;_++)n-=f=n%e[_],n/=e[_],l[_]=f;return l}for(_=i-1;_>=0;_--)n-=f=n%e[_],n/=e[_],l[_]=f;return l}if("column-major"===o){for(_=i-1;_>=0;_--)(f=r[_])<0?(n-=(c=p(n/f))*f,l[_]=e[_]-1+c):(n-=(c=p(n/f))*f,l[_]=c);return l}for(_=0;_<i;_++)(f=r[_])<0?(n-=(c=p(n/f))*f,l[_]=e[_]-1+c):(n-=(c=p(n/f))*f,l[_]=c);return l}function b(e,r,t,o,n,a){var l,i;for(l=[],i=0;i<e.length;i++)l.push(0);return s(e,r,t,o,n,a,l)}c(b,"assign",{configurable:!1,enumerable:!1,writable:!1,value:s});export{s as assign,b as default};
//# sourceMappingURL=mod.js.map
