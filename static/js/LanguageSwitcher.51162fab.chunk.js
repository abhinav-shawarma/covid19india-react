/*! For license information please see LanguageSwitcher.51162fab.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[14],{240:function(e,t,n){"use strict";var r=n(7),a=n(99),o=["mousedown","touchstart"];t.a=function(e,t,n){void 0===n&&(n=o);var i=Object(r.useRef)(t);Object(r.useEffect)((function(){i.current=t}),[t]),Object(r.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&i.current(t)},r=0,o=n;r<o.length;r++){var c=o[r];Object(a.c)(document,c,t)}return function(){for(var e=0,r=n;e<r.length;e++){var o=r[e];Object(a.b)(document,o,t)}}}),[n,e])}},332:function(e,t,n){"use strict";n.r(t);var r=n(150),a=n(98),o=n.n(a),i=n(7),c=n.n(i),l=n(88),u=n.n(l);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=Object(i.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,o=void 0===a?24:a,i=f(e,["color","size"]);return c.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),c.a.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),c.a.createElement("polyline",{points:"5 12 12 5 19 12"}))}));p.propTypes={color:u.a.string,size:u.a.oneOfType([u.a.string,u.a.number])},p.displayName="ArrowUp";var v=p,g=n(333),m=n(96),d=n(240),h={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},y={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"};t.default=c.a.memo((function(e){var t,n=e.showLanguageSwitcher,a=e.setShowLanguageSwitcher,l=Object(g.a)().i18n,u=Object.keys(r).includes(null===l||void 0===l?void 0:l.language)?null===l||void 0===l?void 0:l.language:null===l||void 0===l||null===(t=l.options)||void 0===t?void 0:t.fallbackLng[0],s=Object(m.f)(n,null,{from:y,enter:h,leave:y,config:{mass:1,tension:100,friction:15}}),f=Object(i.useRef)();return Object(d.a)(f,(function(){a(!1)})),s.map((function(e){var t=e.item,n=e.key,i=e.props;return t?c.a.createElement(m.a.div,{key:n,className:"LanguageSwitcher",style:i,ref:f},c.a.createElement("h3",null,"We speak the following languages"),c.a.createElement("div",{className:"languages"},Object.keys(r).map((function(e){return c.a.createElement("div",{key:e,className:o()("language",{"is-highlighted":u===e}),onClick:function(){l&&l.changeLanguage(e)}},c.a.createElement("span",null,r[e]))}))),c.a.createElement("div",{className:"close-button",onClick:function(){a(!1)}},c.a.createElement(v,{width:16}))):c.a.createElement(m.a.div,{key:n})}))}))},98:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=LanguageSwitcher.51162fab.chunk.js.map