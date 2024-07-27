"use strict";var s=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var q=s(function(z,o){
var l=require('@stdlib/math-base-assert-is-nanf/dist'),P=require('@stdlib/math-base-assert-is-positive-zerof/dist');function R(u,r,n){var v,i,e,a;if(u<=0)return NaN;if(u===1||n===0)return r[0];for(n<0?i=(1-u)*n:i=0,v=r[i],a=1;a<u;a++){if(i+=n,e=r[i],l(e))return e;(e>v||e===v&&P(e))&&(v=e)}return v}o.exports=R
});var x=s(function(A,m){
var Z=require('@stdlib/math-base-assert-is-nanf/dist'),_=require('@stdlib/math-base-assert-is-positive-zerof/dist');function E(u,r,n,v){var i,e,a,t;if(u<=0)return NaN;if(u===1||n===0)return r[v];for(e=v,i=r[e],t=1;t<u;t++){if(e+=n,a=r[e],Z(a))return a;(a>i||a===i&&_(a))&&(i=a)}return i}m.exports=E
});var y=s(function(B,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),b=x();O(c,"ndarray",b);p.exports=c
});var d=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=y(),f,j=g(d(__dirname,"./native.js"));h(j)?f=k:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
