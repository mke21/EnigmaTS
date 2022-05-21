!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.enigma=n():t.enigma=n()}(self,(()=>(()=>{"use strict";var t={632:(t,n,e)=>{e.d(n,{Z:()=>T});var o=e(81),r=e.n(o),i=e(645),s=e.n(i),a=e(667),c=e.n(a),u=new URL(e(149),e.b),l=new URL(e(231),e.b),d=new URL(e(482),e.b),f=new URL(e(959),e.b),p=new URL(e(378),e.b),h=new URL(e(814),e.b),b=new URL(e(288),e.b),m=new URL(e(108),e.b),v=new URL(e(163),e.b),g=s()(r()),y=c()(u),w=c()(l),x=c()(d),k=c()(f),O=c()(p),U=c()(h),_=c()(b),E=c()(m),S=c()(v);g.push([t.id,"/* open-sans-cyrillic-ext-400-normal*/\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("+y+") format('woff2'), url("+w+") format('woff');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* open-sans-cyrillic-400-normal*/\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("+x+") format('woff2'), url("+w+") format('woff');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* open-sans-greek-ext-400-normal*/\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("+k+") format('woff2'), url("+w+") format('woff');\n  unicode-range: U+1F00-1FFF;\n}\n/* open-sans-greek-400-normal*/\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("+O+") format('woff2'), url("+w+") format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* open-sans-hebrew-400-normal*/\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("+U+") format('woff2'), url("+w+") format('woff');\n  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* open-sans-vietnamese-400-normal*/\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("+_+") format('woff2'), url("+w+") format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* open-sans-latin-ext-400-normal*/\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("+E+") format('woff2'), url("+w+") format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* open-sans-latin-400-normal*/\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("+S+") format('woff2'), url("+w+") format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",""]);const T=g},677:(t,n,e)=>{e.d(n,{Z:()=>a});var o=e(81),r=e.n(o),i=e(645),s=e.n(i)()(r());s.push([t.id,"html, body {\n    margin: 0;\n    height: 100%;\n}\n\nbody {\n  background-color: grey;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n}\n\n.header {\n  margin-left: 1em;\n  margin-right: 1em;\n  border-bottom: 1px solid #333;\n  display: flex;\n  flex-direction: row;\n  gap: 2em;\n}\n\n.body {\n  display: grid;\n  grid-template-columns: 1fr max-content 1fr;\n  grid-template-rows: max-content max-content max-content max-content;\n}\n\n.writing {\n  display: grid;\n  grid-template-rows: min-content 1fr;\n  padding: 1em;\n}\n\n.left {\n  border-right: 1px solid #333;\n  grid-column-start: 1;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 5;\n}\n\n.right {\n  border-left: 1px solid #333;\n  grid-column-start: 3;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 5;\n}\n\n.rotorpanel {\n  padding: 1em;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  column-gap: 1em;\n}\n\nbutton.reset {\n  border: 2px solid #777;\n  border-radius: 1em; /*make circular */\n  padding: 5px;\n  background-color: black;\n  text-align: center;\n  vertical-align: middle;\n  color: #555;\n  line-height: 1.3em;\n  font-family: Open Sans;\n  font-weight: bold;\n  font-size: 1.5em;\n  box-shadow: 0 10px 6px black;\n  cursor: pointer;\n}\n\nbutton.reset:active {\n  box-shadow: 0px 1px 0px black;\n  transform: translateY(10px);\n}\n",""]);const a=s},415:(t,n,e)=>{e.d(n,{Z:()=>a});var o=e(81),r=e.n(o),i=e(645),s=e.n(i)()(r());s.push([t.id,".keyboard {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-rows: max-content max-content max-content;\n  padding: 2em;\n  border-top: 1px solid #333;\n}\n\n.keyboard .row {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n}\n\n.keyboard .row button {\n  border: 2px solid #777;\n  border-radius: 50%; /*make circular */\n  width: 1.8em;\n  height: 1.8em;\n  background-color: black;\n  text-align: center;\n  vertical-align: middle;\n  color: #555;\n  line-height: 1.7em;\n  font-family: Open Sans;\n  font-weight: bold;\n  font-size: 2em;\n  box-shadow: 0 10px 6px black;\n  cursor: pointer;\n}\n\n.keyboard .row > button {\n  margin: 0.5rem 0.5rem auto;\n}\n\n.keyboard .row button:active, .keyboard .row button.active {\n  box-shadow: 0px 1px 0px black;\n  transform: translateY(10px);\n}\n",""]);const a=s},44:(t,n,e)=>{e.d(n,{Z:()=>a});var o=e(81),r=e.n(o),i=e(645),s=e.n(i)()(r());s.push([t.id,".lightboard {\n  display: grid;\n  grid-template-rows: max-content max-content max-content;\n}\n\n.lightboard .row {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n}\n",""]);const a=s},475:(t,n,e)=>{e.d(n,{Z:()=>a});var o=e(81),r=e.n(o),i=e(645),s=e.n(i)()(r());s.push([t.id,"/* css for lights */\ndiv.LightWrapper {\n  width: 4rem;\n  height: 4rem;\n}\n\ndiv.LightWrapper div.Light {\n  border: 2px solid #aaa;\n  border-radius: 50%; /*make circular */\n  background-color: black;\n  margin: auto;\n  width: 80%;\n  height: 80%;\n  text-align: center;\n  vertical-align: middle;\n  color: #555;\n  line-height: 3.2rem;\n  font-family: Open Sans;\n  font-weight: bold;\n  font-size: 2.1em;\n}\n\ndiv.LightWrapper div.Light.on {\n  background-color:  #d4ac0d;\n  color: white;\n}\n\n",""]);const a=s},951:(t,n,e)=>{e.d(n,{Z:()=>a});var o=e(81),r=e.n(o),i=e(645),s=e.n(i)()(r());s.push([t.id,".notition {\nfont-family: monospace;\n  padding-left: 1em;\n  border: 1px solid black;\n  background-color: white;\n  color: black;\n  font-size: 22px;\n  vertical-align: middle;\n  line-height: 2em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  word-wrap: break-word;\n}\n\n",""]);const a=s},86:(t,n,e)=>{e.d(n,{Z:()=>a});var o=e(81),r=e.n(o),i=e(645),s=e.n(i)()(r());s.push([t.id,".dialog {\n  padding: 1em;\n  max-width: 50ch;\n}\n\n.dialog::backdrop {\n  background: rgb(0 0 0 / 0.3);\n}\n\n.button-open {\n  height: 100%;\n}\n",""]);const a=s},561:(t,n,e)=>{e.d(n,{Z:()=>a});var o=e(81),r=e.n(o),i=e(645),s=e.n(i)()(r());s.push([t.id,".wireboard {\n  background-color: saddlebrown;\n  display: grid;\n  grid-template-rows: max-content max-content max-content;\n  padding: 5px;\n}\n\n.wireboard .row {\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  grid-gap: 0.5rem;\n}\n\n.socket {\n  display: grid;\n  box-shadow: inset 3px 3px 3px #999;\n  border-bottom-left-radius: 100% 2em;\n  border-bottom-right-radius: 100% 2em;\n  border-top-left-radius: 100% 2em;\n  border-top-right-radius: 100% 2em;\n  grid-template-rows: 1fr 1fr;\n  background-color: #333;\n  cursor: pointer;\n}\n\n.socket .label {\n  color: white;\n  font-family: Open Sans;\n  font-size: 1.5em;\n  text-align: center;\n  margin: auto;\n  cursor: pointer;\n}\n\n.socket .bus {\n  border-radius: 50%; /*make circular */\n  width: 1.5rem;\n  height: 1.5rem;\n  margin: 0.5em;\n  border: 2px solid #777;\n  background-color: black;\n  cursor: pointer;\n}\n\n.socket .bus.red {\n  background-color: red;\n}\n.socket .bus.blue {\n  background-color: blue;\n}\n.socket .bus.purple {\n  background-color: purple;\n}\n.socket .bus.orange {\n  background-color: orange;\n}\n.socket .bus.yellow {\n  background-color: yellow;\n}\n.socket .bus.green {\n  background-color: green;\n}\n.socket .bus.blueviolet {\n  background-color: blueviolet;\n}\n.socket .bus.brown {\n  background-color: orangered;\n}\n.socket .bus.darkgolden {\n  background-color: darkgoldenrod;\n}\n.socket .bus.chartreuse {\n  background-color: chartreuse;\n}\n.socket .bus.grey {\n  background-color: grey;\n}\n.socket .bus.salmon {\n  background-color: darksalmon;\n}\n.socket .bus.olive {\n  background-color: olive;\n}\n",""]);const a=s},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);o&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var i={},s=[],a=0;a<t.length;a++){var c=t[a],u=o.base?c[0]+o.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=e(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var h=r(p,o);o.byIndex=a,n.splice(a,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=e(i[s]);n[a].references--}for(var c=o(t,r),u=0;u<i.length;u++){var l=e(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},231:(t,n,e)=>{t.exports=e.p+"fd1a30188fbba33c1971.woff"},482:(t,n,e)=>{t.exports=e.p+"8c8b009e2308cfd36674.woff2"},149:(t,n,e)=>{t.exports=e.p+"432abaf385d938750963.woff2"},378:(t,n,e)=>{t.exports=e.p+"f4df5aa87d97ffdd65c4.woff2"},959:(t,n,e)=>{t.exports=e.p+"7f0c7c378a3ca829b189.woff2"},814:(t,n,e)=>{t.exports=e.p+"abf447351bfd65fe2d5d.woff2"},163:(t,n,e)=>{t.exports=e.p+"a2d02404d087c7c068d4.woff2"},108:(t,n,e)=>{t.exports=e.p+"0950a0dbc206706736db.woff2"},288:(t,n,e)=>{t.exports=e.p+"1970138327ca2599f2c5.woff2"}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href;var o={};return(()=>{e.r(o),e.d(o,{app:()=>lt});var t=e(379),n=e.n(t),r=e(795),i=e.n(r),s=e(569),a=e.n(s),c=e(565),u=e.n(c),l=e(216),d=e.n(l),f=e(589),p=e.n(f),h=e(677),b={};function m(t,n){void 0===n&&(n=[]);var e=document.createElement(t);return n.forEach((function(t){return e.classList.add(t)})),e}function v(t,n){return n.forEach((function(n){return t.appendChild(n)})),t}b.styleTagTransform=p(),b.setAttributes=u(),b.insert=a().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=d(),n()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;var g=e(44),y={};y.styleTagTransform=p(),y.setAttributes=u(),y.insert=a().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=d(),n()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;var w=e(632),x={};x.styleTagTransform=p(),x.setAttributes=u(),x.insert=a().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=d(),n()(w.Z,x),w.Z&&w.Z.locals&&w.Z.locals;var k=e(475),O={};O.styleTagTransform=p(),O.setAttributes=u(),O.insert=a().bind(null,"head"),O.domAPI=i(),O.insertStyleElement=d(),n()(k.Z,O),k.Z&&k.Z.locals&&k.Z.locals;var U=function(){function t(t){this.div=m("div",["LightWrapper"]),this.light=m("div",["Light"]);var n=t.toUpperCase();this.light.appendChild(document.createTextNode(n)),v(this.div,[this.light]),this.on=this.on.bind(this),this.off=this.off.bind(this)}return t.prototype.on=function(){this.light.classList.add("on")},t.prototype.off=function(){this.light.classList.remove("on")},t}(),_=[["Q","W","E","R","T","Z","U","I","O"],["A","S","D","F","G","H","J","K"],["P","Y","X","C","V","B","N","M","L"]],E=function(){function t(){this.div=m("div",["lightboard"]),this.lights=new Map;for(var t=this,n=[m("div",["row"]),m("div",["row"]),m("div",["row"])],e=function(e){_[e].forEach((function(o){var r=new U(o);t.lights.set(o,r),n[e].appendChild(r.div)}))},o=0;o<n.length;o++)e(o);v(this.div,n),this.on=this.on.bind(this),this.off=this.off.bind(this)}return t.prototype.on=function(t){this.lights.get(t.toUpperCase()).on()},t.prototype.off=function(){this.lights.forEach((function(t){return t.off()}))},t}();function S(t){return 1!==t.length||!"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(t)}var T=function(t,n){void 0===n&&(n=!1),this.rotate=!1;var e=t.toUpperCase();if(S(e))throw'Value "'.concat(t," is not a character that could be typed in enigma");this.value=e,this.rotate=n},C=function(){function t(){this.connections=new Map,this.add=this.add.bind(this),this.delete=this.delete.bind(this),this.passThrough=this.passThrough.bind(this)}return t.prototype.add=function(t){var n=t.side1.toUpperCase(),e=t.side2.toUpperCase();if(S(n)||S(e))throw"plugs not correct, should be a single letter";if(n===e)throw"cannot plug wire into itself";if(this.connections.has(t.side1)||this.connections.has(t.side2))throw"Cannot connect mutiple wires to the same socket";this.connections.set(n,e),this.connections.set(e,n)},t.prototype.delete=function(t){if(this.connections.get(t.side1)!==t.side2)throw"Wire is not connected";this.connections.delete(t.side1),this.connections.delete(t.side2)},t.prototype.passThrough=function(t){var n=this.connections.get(t.value)||t.value;return new T(n,t.rotate)},t}(),P={test:{sequence:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",turnover:"C"},I:{sequence:"EKMFLGDQVZNTOWYHXUSPAIBRCJ",turnover:"Q"},II:{sequence:"AJDKSIRUXBLHWTMCQGZNPYFVOE",turnover:"E"},III:{sequence:"BDFHJLCPRTXVZNYEIWGAKMUSQO",turnover:"V"},IV:{sequence:"ESOVPZJAYQUIRHXLNFTGKDCMWB",turnover:"J"},V:{sequence:"VZBRGITYUPSDNHLXAWMJQOFECK",turnover:"Z"}},R=function(){function t(){this.base="ABCDEFGHIJKLMNOPQRSTUVWXYZ",this.forward=this.forward.bind(this),this.reverse=this.reverse.bind(this),this.rotate=this.rotate.bind(this),this.reset=this.reset.bind(this)}return Object.defineProperty(t.prototype,"rotor",{get:function(){return this.rotorNumber},set:function(t){this.rotorNumber=t,this._rotor=P[t],this.start=1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"outstring",{get:function(){var t=this.current-1;return"".concat(this._rotor.sequence.slice(t)).concat(this._rotor.sequence.slice(0,t))},enumerable:!1,configurable:!0}),t.prototype.forward=function(t){var n=!1;t.rotate&&(this.rotate(),n=this.outstring[0]===this._rotor.turnover);var e=this.base.indexOf(t.value);return new T(this.outstring[e],n)},t.prototype.reverse=function(t){var n=this.outstring.indexOf(t.value);return new T(this.base[n])},t.prototype.rotate=function(){this.current+=1,this.current>this._rotor.sequence.length&&(this.current=1)},Object.defineProperty(t.prototype,"start",{get:function(){return this._start},set:function(t){if(t<1||t>this._rotor.sequence.length)throw"no valid rotor setting";this._start=t,this.current=t},enumerable:!1,configurable:!0}),t.prototype.reset=function(){this.current=this._start},t}(),A=function(){function t(t,n,e){void 0===t&&(t="I"),void 0===n&&(n="II"),void 0===e&&(e="III"),this.rotors=[new R,new R,new R],this.setRotor(0,t),this.setRotor(1,n),this.setRotor(2,e),this.forward=this.forward.bind(this),this.reverse=this.reverse.bind(this),this.setRotor=this.setRotor.bind(this),this.reset=this.reset.bind(this)}return Object.defineProperty(t.prototype,"RotorNames",{get:function(){var t=[];return this.rotors.forEach((function(n){return t.push(n.rotorNumber)})),t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"RotorSettings",{get:function(){var t=[];return this.rotors.forEach((function(n){return t.push(n.start)})),t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"RotorCurrent",{get:function(){var t=[];return this.rotors.forEach((function(n){return t.push(n.current)})),t},enumerable:!1,configurable:!0}),t.prototype.forward=function(t){for(var n=new T(t.value,t.rotate),e=0;e<this.rotors.length;e++)n=this.rotors[e].forward(n);return n},t.prototype.reverse=function(t){for(var n=new T(t.value,t.rotate),e=this.rotors.length-1;e>=0;e--)n=this.rotors[e].reverse(n);return n},t.prototype.reset=function(){this.rotors.forEach((function(t){return t.reset()}))},t.prototype.setRotor=function(t,n){this.rotors[t].rotor=n},t.prototype.setRotorStart=function(t,n){this.rotors[t].start=n},t}(),Z=function(){function t(){this.base="ABCDEFGHIJKLMNOPQRSTUVWXYZ",this.sequence="YRUHQSLDPXNGOKMIEBFZCWVJAT",this.passThrough=this.passThrough.bind(this)}return t.prototype.passThrough=function(t){var n=this.base.indexOf(t.value);return new T(this.sequence[n],t.rotate)},t}(),F=function(){function t(){this.plugboard=new C,this.rotors=new A,this.reflector=new Z,this.encrypt=this.encrypt.bind(this),this.reset=this.reset.bind(this)}return t.prototype.encrypt=function(t){var n=new T(t,!0);return n=this.plugboard.passThrough(n),n=this.rotors.forward(n),n=this.reflector.passThrough(n),n=this.rotors.reverse(n),(n=this.plugboard.passThrough(n)).value},t.prototype.reset=function(){this.rotors.reset()},Object.defineProperty(t.prototype,"rotorOptions",{get:function(){return Object.keys(P).filter((function(t){return"test"!==t}))},enumerable:!1,configurable:!0}),t}(),L=e(951),j={};j.styleTagTransform=p(),j.setAttributes=u(),j.insert=a().bind(null,"head"),j.domAPI=i(),j.insertStyleElement=d(),n()(L.Z,j),L.Z&&L.Z.locals&&L.Z.locals;var I=function(){function t(){this.input=m("div",["notition"]),this.output=m("div",["notition"]),this.reset=this.reset.bind(this),this.add=this.add.bind(this)}return t.prototype.add=function(t,n){this.input.innerText+=t,this.output.innerText+=n},t.prototype.reset=function(){this.input.innerText="",this.output.innerText=""},t}(),K=e(415),B={};B.styleTagTransform=p(),B.setAttributes=u(),B.insert=a().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=d(),n()(K.Z,B),K.Z&&K.Z.locals&&K.Z.locals;var M,N=function(){function t(t){this.listeners=[],this.sender=t}return t.prototype.attach=function(t){this.listeners.push(t)},t.prototype.notify=function(t){for(var n=0;n<this.listeners.length;n+=1)try{this.listeners[n](t)}catch(t){console.error(t)}},t}(),V=function(){function t(t,n){return this.eventObj=t,this.listener=n,this.reaction=this.reaction.bind(this),this.enable(),this}return t.prototype.enable=function(){return this.eventObj.attach(this.reaction),this},t.prototype.reaction=function(t){this.listener(t)},t}(),D=function(){function t(t){void 0===t&&(t=[]),this._controllers=[],this._events={},this._setEvents(t),this.addEventListener=this.addEventListener.bind(this)}return t.prototype._setEvents=function(t){var n=this;t.forEach((function(t){n._events[t]=new N(n)}))},t.prototype.addEventListener=function(t,n){this._controllers.push(new V(this._events[t],n))},t}(),W=(M=function(t,n){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},M(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}M(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),H=function(t){function n(){var n=t.call(this,["KeyPress","KeyRelease"])||this;n.pressed=!1;var e=n;return window.onkeydown=function(t){"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".includes(t.key)&&!e.pressed&&(e.pressed=!0,e._events.KeyPress.notify(t.key.toUpperCase()))},window.onkeyup=function(){e.pressed=!1,e._events.KeyRelease.notify("up")},n}return W(n,t),n}(D),J=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),Q=[["Q","W","E","R","T","Z","U","I","O"],["A","S","D","F","G","H","J","K"],["P","Y","X","C","V","B","N","M","L"]],Y=function(t){function n(){var n=t.call(this,["KeyPress","KeyRelease"])||this;n.div=m("div",["keyboard"]),n.keys=new Map,n.input=new H;for(var e=n,o=[m("div",["row"]),m("div",["row"]),m("div",["row"])],r=function(t){Q[t].forEach((function(r){var i=document.createElement("button");i.id=r,i.innerText=r,i.onmousedown=function(){return e._events.KeyPress.notify(r)},i.onmouseup=function(){return e._events.KeyRelease.notify(r)},n.keys.set(r,i),o[t].appendChild(i)}))},i=0;i<o.length;i++)r(i);return v(n.div,o),n.realKeyPress=n.realKeyPress.bind(n),n.realKeyRelease=n.realKeyRelease.bind(n),n.realKeysEvents(),n}return J(n,t),n.prototype.realKeysEvents=function(){var t=this;this.input.addEventListener("KeyPress",(function(n){t.realKeyPress(String(n)),t._events.KeyPress.notify(String(n))})),this.input.addEventListener("KeyRelease",(function(){t.realKeyRelease(),t._events.KeyRelease.notify("")}))},n.prototype.realKeyPress=function(t){this.keys.get(t).classList.add("active")},n.prototype.realKeyRelease=function(){this.keys.forEach((function(t){return t.classList.remove("active")}))},n}(D),q=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),G=function(t){function n(n){var e=t.call(this,["changeRotorSetting"])||this;e.div=m("div",["rotors"]),e.rotors=[],e.public=!0;for(var o=function(t){var o=document.createElement("input");o.onkeydown=function(){return!1},o.type="number",o.min="1",o.max="26",o.value=String(n[t]),o.onchange=function(){e.public&&e._events.changeRotorSetting.notify({nr:t,value:parseInt(o.value)})},r.rotors.push(o)},r=this,i=0;i<n.length;i++)o(i);return v(e.div,e.rotors.slice().reverse()),e}return q(n,t),Object.defineProperty(n.prototype,"values",{set:function(t){this.public=!1;for(var n=0;n<t.length;n++)this.rotors[n].value=String(t[n]);this.public=!0},enumerable:!1,configurable:!0}),n}(D),X=e(561),z={};z.styleTagTransform=p(),z.setAttributes=u(),z.insert=a().bind(null,"head"),z.domAPI=i(),z.insertStyleElement=d(),n()(X.Z,z),X.Z&&X.Z.locals&&X.Z.locals;var $=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),tt=function(t){function n(n){var e=t.call(this,["clicked"])||this;e.div=m("div",["socket"]),e.label=m("div",["label"]),e.bus=m("div",["bus"]),e.colorValue="";var o=e;return e.label.innerText=n,v(e.div,[e.label,e.bus]),e.div.onclick=function(){return o._events.clicked.notify(n)},e}return $(n,t),Object.defineProperty(n.prototype,"letter",{get:function(){return this.label.innerText},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"color",{get:function(){return this.colorValue},set:function(t){this.removeColor(),this.colorValue=t,this.bus.classList.add(t)},enumerable:!1,configurable:!0}),n.prototype.removeColor=function(){""!==this.colorValue&&(this.bus.classList.remove(this.colorValue),this.colorValue="")},n}(D),nt=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),et=[["Q","W","E","R","T","Z","U","I","O"],["A","S","D","F","G","H","J","K"],["P","Y","X","C","V","B","N","M","L"]],ot=function(){function t(){this.used=[],this.available=["red","blue","purple","orange","yellow","green","blueviolet","brown","darkgolden","chartreuse","grey","salmon","olive"],this.send=this.send.bind(this),this.return=this.return.bind(this)}return t.prototype.send=function(){var t=this.available.shift();return this.used.push(t),t},t.prototype.return=function(t){var n=this.used.indexOf(t);this.used.splice(n,1),this.available.push(t)},t}(),rt=function(t){function n(){var n=t.call(this,["connected","disconnected"])||this;n.div=m("div",["wireboard"]),n.colors=new ot,n.sockets=new Map,n.connections=new Map,n.temp=null,n.clickedSocket=n.clickedSocket.bind(n);for(var e=[m("div",["row"]),m("div",["row"]),m("div",["row"])],o=function(t){et[t].forEach((function(o){var r=new tt(o);r.addEventListener("clicked",n.clickedSocket),n.sockets.set(o,r),e[t].appendChild(r.div)}))},r=0;r<e.length;r++)o(r);return v(n.div,e),n}return nt(n,t),n.prototype.clickedSocket=function(t){if(this.connections.has(t)){var n=this.connections.get(t);return this.colors.return(n.side1.color),n.side1.removeColor(),n.side2.removeColor(),this.connections.delete(n.side1.letter),this.connections.delete(n.side2.letter),void this._events.disconnected.notify({side1:n.side1.letter,side2:n.side2.letter})}if(null===this.temp){var e=this.sockets.get(t);return e.color=this.colors.send(),void(this.temp={side1:e,side2:null})}return this.temp.side1.letter===t?(this.colors.return(this.temp.side1.color),this.temp.side1.removeColor(),void(this.temp=null)):null!==this.temp?(this.temp.side2=this.sockets.get(t),this.temp.side2.color=this.temp.side1.color,this.connections.set(this.temp.side1.letter,this.temp),this.connections.set(this.temp.side2.letter,this.temp),this._events.connected.notify({side1:this.temp.side1.letter,side2:this.temp.side2.letter}),void(this.temp=null)):void 0},n}(D),it=e(86),st={};st.styleTagTransform=p(),st.setAttributes=u(),st.insert=a().bind(null,"head"),st.domAPI=i(),st.insertStyleElement=d(),n()(it.Z,st),it.Z&&it.Z.locals&&it.Z.locals;class at{modal=m("dialog",["dialog"]);h2=m("h2");content=m("div");openButton=m("button",["button","button-open"]);closeButton=m("button",["button","button-close"]);constructor(t){this.h2.innerText=t,this.closeButton.innerText="Close",v(this.modal,[this.h2,this.content,this.closeButton]),this.openButton.onclick=()=>this.modal.showModal(),this.closeButton.onclick=()=>this.modal.close()}append(t){v(this.content,t)}}var ct=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),ut=function(t){function n(n,e){var o=t.call(this,["setRotor"])||this;o.modal=new at("Rotor Settings"),o.modal.openButton.innerText="Rotor Settings";for(var r=function(t){var r=function(t,n){var e=document.createElement("select");return t.forEach((function(t){var n=document.createElement("option");n.innerText=t,n.value=t,e.append(n)})),e.value=n,e}(n,e[t]);r.onchange=function(){return o._events.setRotor.notify({index:t,rotor_number:r.value})},i.modal.content.appendChild(r)},i=this,s=e.length-1;s>=0;s--)r(s);return o}return ct(n,t),Object.defineProperty(n.prototype,"div",{get:function(){return this.modal.modal},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"button",{get:function(){return this.modal.openButton},enumerable:!1,configurable:!0}),n}(D),lt=new function(){var t=this;this.machine=new F,this.board=new E,this.reset=m("button",["reset"]),this.output=new I,this.keyboard=new Y,this.rotors=new G(this.machine.rotors.RotorSettings),this.wireboard=new rt,this.settings=new ut(this.machine.rotorOptions,this.machine.rotors.RotorNames),this.reset.classList.add("resetbutton"),this.reset.textContent="Reset";var n=m("div",["rotorpanel"]),e=m("div",["header"]),o=m("h1");o.innerText="Enigma";var r=m("div",["body"]),i=m("div",["left","writing"]),s=document.createElement("h2");s.innerText="Input",v(i,[s,this.output.input]);var a=m("div",["right","writing"]),c=document.createElement("h2");c.innerText="Output",v(a,[c,this.output.output]),v(document.body,[v(e,[o,this.settings.button]),v(r,[i,a,v(n,[this.rotors.div,this.reset]),this.board.div,this.keyboard.div,this.wireboard.div,this.settings.div])]),this.keyboard.addEventListener("KeyPress",(function(n){var e=t.machine.encrypt(n);t.rotors.values=t.machine.rotors.RotorCurrent,t.output.add(n,e),t.board.on(e)})),this.keyboard.addEventListener("KeyRelease",(function(){t.board.off()})),this.wireboard.addEventListener("connected",this.machine.plugboard.add),this.wireboard.addEventListener("disconnected",this.machine.plugboard.delete),this.rotors.addEventListener("changeRotorSetting",(function(n){t.machine.rotors.setRotorStart(n.nr,n.value)})),this.reset.onclick=function(){t.machine.reset(),t.rotors.values=t.machine.rotors.RotorCurrent,t.output.reset()},this.settings.addEventListener("setRotor",(function(n){return t.machine.rotors.setRotor(n.index,n.rotor_number)}))}})(),o})()));