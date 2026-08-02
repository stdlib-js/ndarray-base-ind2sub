"use strict";var q=function(a,u){return function(){try{return u||a((u={exports:{}}).exports,u),u.exports}catch(v){throw (u=0, v)}};};var o=q(function(O,b){
var g=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),m=require('@stdlib/math-base-special-trunc/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist');function j(a,u,v,c,r,i,t){var l,f,s,n,e;for(l=a.length,f=1,e=0;e<l;e++)f*=a[e];if(i==="clamp")r<0?r=0:r>=f&&(r=f-1);else if(i==="wrap")r<0?(r+=f,r<0&&(r%=f,r!==0&&(r+=f))):r>=f&&(r-=f,r>=f&&(r%=f));else if(i==="normalize"&&r<0&&(r+=f),r<0||r>=f)throw new RangeError(R('0in5E',f,r));if(v===0){if(g(c)){for(e=0;e<l;e++)n=r%a[e],r-=n,r/=a[e],t[e]=n;return t}for(e=l-1;e>=0;e--)n=r%a[e],r-=n,r/=a[e],t[e]=n;return t}if(g(c)){for(e=l-1;e>=0;e--)n=u[e],n<0?(s=m(r/n),r-=s*n,t[e]=a[e]-1+s):(s=m(r/n),r-=s*n,t[e]=s);return t}for(e=0;e<l;e++)n=u[e],n<0?(s=m(r/n),r-=s*n,t[e]=a[e]-1+s):(s=m(r/n),r-=s*n,t[e]=s);return t}b.exports=j
});var y=q(function(S,w){
var k=require('@stdlib/array-base-zeros/dist'),C=o();function E(a,u,v,c,r,i){return C(a,u,v,c,r,i,k(a.length))}w.exports=E
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=y(),M=o();L(z,"assign",M);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
