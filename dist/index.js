"use strict";var q=function(a,t){return function(){return t||a((t={exports:{}}).exports,t),t.exports}};var o=q(function(O,b){
var g=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),c=require('@stdlib/math-base-special-trunc/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist');function j(a,t,m,i,r,v,u){var l,f,s,n,e;for(l=a.length,f=1,e=0;e<l;e++)f*=a[e];if(v==="clamp")r<0?r=0:r>=f&&(r=f-1);else if(v==="wrap")r<0?(r+=f,r<0&&(r%=f,r!==0&&(r+=f))):r>=f&&(r-=f,r>=f&&(r%=f));else if(v==="normalize"&&r<0&&(r+=f),r<0||r>=f)throw new RangeError(R('0in5E',f,r));if(m===0){if(g(i)){for(e=0;e<l;e++)n=r%a[e],r-=n,r/=a[e],u[e]=n;return u}for(e=l-1;e>=0;e--)n=r%a[e],r-=n,r/=a[e],u[e]=n;return u}if(g(i)){for(e=l-1;e>=0;e--)n=t[e],n<0?(s=c(r/n),r-=s*n,u[e]=a[e]-1+s):(s=c(r/n),r-=s*n,u[e]=s);return u}for(e=0;e<l;e++)n=t[e],n<0?(s=c(r/n),r-=s*n,u[e]=a[e]-1+s):(s=c(r/n),r-=s*n,u[e]=s);return u}b.exports=j
});var y=q(function(S,w){
var k=require('@stdlib/array-base-zeros/dist'),C=o();function E(a,t,m,i,r,v){return C(a,t,m,i,r,v,k(a.length))}w.exports=E
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=y(),M=o();L(z,"assign",M);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
