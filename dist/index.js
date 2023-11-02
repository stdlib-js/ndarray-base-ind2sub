"use strict";var g=function(a,l){return function(){return l||a((l={exports:{}}).exports,l),l.exports}};var i=g(function(S,q){
var j=require('@stdlib/error-tools-fmtprodmsg/dist'),c=require('@stdlib/math-base-special-trunc/dist');function R(a,l,o,v,r,m,f){var t,s,u,n,e;for(t=a.length,s=1,e=0;e<t;e++)s*=a[e];if(m==="clamp")r<0?r=0:r>=s&&(r=s-1);else if(m==="wrap")r<0?(r+=s,r<0&&(r%=s,r!==0&&(r+=s))):r>=s&&(r-=s,r>=s&&(r%=s));else if(r<0||r>=s)throw new RangeError(j('0in5E',s,r));if(o===0){if(v==="column-major"){for(e=0;e<t;e++)n=r%a[e],r-=n,r/=a[e],f[e]=n;return f}for(e=t-1;e>=0;e--)n=r%a[e],r-=n,r/=a[e],f[e]=n;return f}if(v==="column-major"){for(e=t-1;e>=0;e--)n=l[e],n<0?(u=c(r/n),r-=u*n,f[e]=a[e]-1+u):(u=c(r/n),r-=u*n,f[e]=u);return f}for(e=0;e<t;e++)n=l[e],n<0?(u=c(r/n),r-=u*n,f[e]=a[e]-1+u):(u=c(r/n),r-=u*n,f[e]=u);return f}q.exports=R
});var w=g(function(V,b){
var k=i();function E(a,l,o,v,r,m){var f,t;for(f=[],t=0;t<a.length;t++)f.push(0);return k(a,l,o,v,r,m,f)}b.exports=E
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=w(),N=i();L(y,"assign",N);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
