"use strict";var g=function(a,t){return function(){return t||a((t={exports:{}}).exports,t),t.exports}};var o=g(function(S,q){
var j=require('@stdlib/error-tools-fmtprodmsg/dist'),c=require('@stdlib/math-base-special-trunc/dist');function z(a,t,i,m,r,v,u){var l,f,s,n,e;for(l=a.length,f=1,e=0;e<l;e++)f*=a[e];if(v==="clamp")r<0?r=0:r>=f&&(r=f-1);else if(v==="wrap")r<0?(r+=f,r<0&&(r%=f,r!==0&&(r+=f))):r>=f&&(r-=f,r>=f&&(r%=f));else if(v==="normalize"&&r<0&&(r+=f),r<0||r>=f)throw new RangeError(j('0in5E',f,r));if(i===0){if(m==="column-major"){for(e=0;e<l;e++)n=r%a[e],r-=n,r/=a[e],u[e]=n;return u}for(e=l-1;e>=0;e--)n=r%a[e],r-=n,r/=a[e],u[e]=n;return u}if(m==="column-major"){for(e=l-1;e>=0;e--)n=t[e],n<0?(s=c(r/n),r-=s*n,u[e]=a[e]-1+s):(s=c(r/n),r-=s*n,u[e]=s);return u}for(e=0;e<l;e++)n=t[e],n<0?(s=c(r/n),r-=s*n,u[e]=a[e]-1+s):(s=c(r/n),r-=s*n,u[e]=s);return u}q.exports=z
});var w=g(function(V,b){
var R=require('@stdlib/array-base-zeros/dist'),k=o();function E(a,t,i,m,r,v){return k(a,t,i,m,r,v,R(a.length))}b.exports=E
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=w(),N=o();L(y,"assign",N);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
