// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-trunc@esm/index.mjs";function n(r,n,s,o,i,m,f){var l,a,d,p,u;for(l=r.length,a=1,u=0;u<l;u++)a*=r[u];if("clamp"===m)i<0?i=0:i>=a&&(i=a-1);else if("wrap"===m)i<0?(i+=a)<0&&0!==(i%=a)&&(i+=a):i>=a&&(i-=a)>=a&&(i%=a);else if(i<0||i>=a)throw new RangeError(e("0MJ5S",a,i));if(0===s){if("column-major"===o){for(u=0;u<l;u++)i-=p=i%r[u],i/=r[u],f[u]=p;return f}for(u=l-1;u>=0;u--)i-=p=i%r[u],i/=r[u],f[u]=p;return f}if("column-major"===o){for(u=l-1;u>=0;u--)(p=n[u])<0?(i-=(d=t(i/p))*p,f[u]=r[u]-1+d):(i-=(d=t(i/p))*p,f[u]=d);return f}for(u=0;u<l;u++)(p=n[u])<0?(i-=(d=t(i/p))*p,f[u]=r[u]-1+d):(i-=(d=t(i/p))*p,f[u]=d);return f}function s(r,e,t,s,o,i){var m,f;for(m=[],f=0;f<r.length;f++)m.push(0);return n(r,e,t,s,o,i,m)}r(s,"assign",n);export{n as assign,s as default};
//# sourceMappingURL=index.mjs.map
