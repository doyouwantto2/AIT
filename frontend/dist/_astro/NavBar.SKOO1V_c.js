import"./index.B28oNxVQ.js";var s={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function h(){if(x)return e;x=1;var c=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function i(d,r,n){var u=null;if(n!==void 0&&(u=""+n),r.key!==void 0&&(u=""+r.key),"key"in r){n={};for(var o in r)o!=="key"&&(n[o]=r[o])}else n=r;return r=n.ref,{$$typeof:c,type:d,key:u,ref:r!==void 0?r:null,props:n}}return e.Fragment=l,e.jsx=i,e.jsxs=i,e}var a;function p(){return a||(a=1,s.exports=h()),s.exports}var t=p();function j(){return t.jsx("button",{children:t.jsx("a",{href:"/",children:"Astro"})})}function f(){return t.jsx("button",{children:t.jsx("a",{href:"/about",children:"About"})})}function v(){return t.jsx("button",{children:t.jsx("span",{className:"cursor-pointer",children:"Chat"})})}function E(){return t.jsx("button",{children:t.jsx("span",{className:"cursor-pointer",children:"Menu"})})}export{f as AboutButton,j as AstroButton,v as ChatButton,E as MenuButton};
