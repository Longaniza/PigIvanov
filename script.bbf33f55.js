parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ebx6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getcurrentScoreEl=exports.newGamebtn=exports.holdbtn=exports.rollDicebtn=exports.diceImg=exports.player2CurrentScoreEl=exports.player1CurrentScoreEl=exports.player2TotalScoreEl=exports.player1TotalScoreEl=exports.player2El=exports.player1El=void 0;var e=document.querySelector(".player--0");exports.player1El=e;var r=document.querySelector(".player--1");exports.player2El=r;var t=document.getElementById("score--0");exports.player1TotalScoreEl=t;var o=document.getElementById("score--1");exports.player2TotalScoreEl=o;var l=document.getElementById("current--0");exports.player1CurrentScoreEl=l;var c=document.getElementById("current--1");exports.player2CurrentScoreEl=c;var n=function(e){return document.getElementById("current--".concat(e))};exports.getcurrentScoreEl=n;var p=document.querySelector(".dice");exports.diceImg=p;var a=document.querySelector(".btn--roll");exports.rollDicebtn=a;var u=document.querySelector(".btn--hold");exports.holdbtn=u;var s=document.querySelector(".btn--new");exports.newGamebtn=s;
},{}],"qc1V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=r(require("./UIElements/selectedElements.js"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(l,a,o):l[a]=e[a]}return l.default=e,r&&r.set(e,l),l}function l(){e.player1El.classList.remove("player--winner"),e.player2El.classList.remove("player--winner"),e.player1El.classList.add("player--active"),e.player2El.classList.remove("player--active"),e.rollDicebtn.disabled=!1,e.holdbtn.disabled=!1,e.player1TotalScoreEl.textContent=0,e.player2TotalScoreEl.textContent=0,e.player1CurrentScoreEl.textContent=0,e.player2CurrentScoreEl.textContent=0,e.diceImg.classList.add("hidden")}
},{"./UIElements/selectedElements.js":"Ebx6"}],"xRih":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=r(require("./UIElements/selectedElements.js"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var c=l?Object.getOwnPropertyDescriptor(e,n):null;c&&(c.get||c.set)?Object.defineProperty(a,n,c):a[n]=e[n]}return a.default=e,r&&r.set(e,a),a}function a(t){0===t.activePlayer?(e.player1CurrentScoreEl.textContent=0,e.player1El.classList.remove("player--active"),e.player2El.classList.add("player--active"),t.activePlayer=1):(e.player2CurrentScoreEl.textContent=0,e.player2El.classList.remove("player--active"),e.player1El.classList.add("player--active"),t.activePlayer=0)}
},{"./UIElements/selectedElements.js":"Ebx6"}],"nV8e":[function(require,module,exports) {
module.exports="/dice-4.4c471d06.png";
},{}],"cwFr":[function(require,module,exports) {
module.exports="/dice-5.fb779bce.png";
},{}],"FfXZ":[function(require,module,exports) {
module.exports="/dice-1.4f7f0f95.png";
},{}],"yKqJ":[function(require,module,exports) {
module.exports="/dice-2.4da4a0c8.png";
},{}],"OVlQ":[function(require,module,exports) {
module.exports="/dice-6.b203bd85.png";
},{}],"cfUA":[function(require,module,exports) {
module.exports="/dice-3.98806e68.png";
},{}],"HBCd":[function(require,module,exports) {
module.exports={"dice-4":require("./dice-4.png"),"dice-5":require("./dice-5.png"),"dice-1":require("./dice-1.png"),"dice-2":require("./dice-2.png"),"dice-6":require("./dice-6.png"),"dice-3":require("./dice-3.png")};
},{"./dice-4.png":"nV8e","./dice-5.png":"cwFr","./dice-1.png":"FfXZ","./dice-2.png":"yKqJ","./dice-6.png":"OVlQ","./dice-3.png":"cfUA"}],"Mz3S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=u(require("./UIElements/selectedElements.js")),t=n(require("./switchPlayer.js")),r=n(require("./assets/*.png"));function n(e){return e&&e.__esModule?e:{default:e}}function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=n?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function a(n){var o=Math.floor(6*Math.random()+1);if(e.diceImg.src=r.default["dice-".concat(o)],e.diceImg.classList.remove("hidden"),1===o)(0,t.default)(n);else{var u=e.getcurrentScoreEl(n.activePlayer);u.textContent=Number(u.textContent)+o}}
},{"./UIElements/selectedElements.js":"Ebx6","./switchPlayer.js":"xRih","./assets/*.png":"HBCd"}],"OJ3y":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=r(require("./UIElements/selectedElements.js"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function n(t){t.classList.add("player--winner"),e.rollDicebtn.disabled=!0,e.holdbtn.disabled=!0}
},{"./UIElements/selectedElements.js":"Ebx6"}],"waLL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=n(require("./UIElements/selectedElements.js")),t=o(require("./switchPlayer.js")),r=o(require("./finishGame.js"));function o(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=o?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(r,n,a):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function a(o){var l=e.getcurrentScoreEl(o.activePlayer);if(0===o.activePlayer){if(o.player1TotalScore+=Number(l.textContent),e.player1TotalScoreEl.textContent=o.player1TotalScore,o.player1TotalScore>=100)return void(0,r.default)(e.player1El)}else if(o.player2TotalScore+=Number(l.textContent),e.player2TotalScoreEl.textContent=o.player2TotalScore,o.player2TotalScore>=100)return void(0,r.default)(e.player2El);(0,t.default)(o)}
},{"./UIElements/selectedElements.js":"Ebx6","./switchPlayer.js":"xRih","./finishGame.js":"OJ3y"}],"wtOm":[function(require,module,exports) {
"use strict";var e=o(require("../UIElements/selectedElements.js")),t=l(require("../rollDice.js")),r=l(require("../hold.js")),n=l(require("../initGame.js"));function l(e){return e&&e.__esModule?e:{default:e}}function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var o=n?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}return r.default=e,t&&t.set(e,r),r}var i={activePlayer:0,player1TotalScore:0,player2TotalScore:0};e.rollDicebtn.addEventListener("click",function(){(0,t.default)(i)}),e.holdbtn.addEventListener("click",function(){(0,r.default)(i)}),e.newGamebtn.addEventListener("click",function(){i.activePlayer=0,i.player1TotalScore=0,i.player2TotalScore=0,(0,n.default)()});
},{"../UIElements/selectedElements.js":"Ebx6","../rollDice.js":"Mz3S","../hold.js":"waLL","../initGame.js":"qc1V"}],"mpVp":[function(require,module,exports) {
"use strict";var e=r(require("./initGame.js"));function r(e){return e&&e.__esModule?e:{default:e}}require("./EventListeners/clickListeners.js"),(0,e.default)();
},{"./initGame.js":"qc1V","./EventListeners/clickListeners.js":"wtOm"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.bbf33f55.js.map