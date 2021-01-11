// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"UIElements/selectedElements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getcurrentScoreEl = exports.newGamebtn = exports.holdbtn = exports.rollDicebtn = exports.diceImg = exports.player2CurrentScoreEl = exports.player1CurrentScoreEl = exports.player2TotalScoreEl = exports.player1TotalScoreEl = exports.player2El = exports.player1El = void 0;
var player1El = document.querySelector('.player--0');
exports.player1El = player1El;
var player2El = document.querySelector('.player--1');
exports.player2El = player2El;
var player1TotalScoreEl = document.getElementById('score--0');
exports.player1TotalScoreEl = player1TotalScoreEl;
var player2TotalScoreEl = document.getElementById('score--1');
exports.player2TotalScoreEl = player2TotalScoreEl;
var player1CurrentScoreEl = document.getElementById('current--0');
exports.player1CurrentScoreEl = player1CurrentScoreEl;
var player2CurrentScoreEl = document.getElementById('current--1');
exports.player2CurrentScoreEl = player2CurrentScoreEl;

var getcurrentScoreEl = function getcurrentScoreEl(activePlayer) {
  return document.getElementById("current--".concat(activePlayer));
};

exports.getcurrentScoreEl = getcurrentScoreEl;
var diceImg = document.querySelector('.dice');
exports.diceImg = diceImg;
var rollDicebtn = document.querySelector('.btn--roll');
exports.rollDicebtn = rollDicebtn;
var holdbtn = document.querySelector('.btn--hold');
exports.holdbtn = holdbtn;
var newGamebtn = document.querySelector('.btn--new');
exports.newGamebtn = newGamebtn;
},{}],"initGame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initGame;

var UIElements = _interopRequireWildcard(require("./UIElements/selectedElements.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function initGame() {
  UIElements.player1El.classList.remove('player--winner');
  UIElements.player2El.classList.remove('player--winner');
  UIElements.player1El.classList.add('player--active');
  UIElements.player2El.classList.remove('player--active');
  UIElements.rollDicebtn.disabled = false;
  UIElements.holdbtn.disabled = false;
  UIElements.player1TotalScoreEl.textContent = 0;
  UIElements.player2TotalScoreEl.textContent = 0;
  UIElements.player1CurrentScoreEl.textContent = 0;
  UIElements.player2CurrentScoreEl.textContent = 0;
  UIElements.diceImg.classList.add('hidden');
}

;
},{"./UIElements/selectedElements.js":"UIElements/selectedElements.js"}],"switchPlayer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = switchPlayer;

var UIElements = _interopRequireWildcard(require("./UIElements/selectedElements.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function switchPlayer(gameState) {
  if (gameState.activePlayer === 0) {
    UIElements.player1CurrentScoreEl.textContent = 0;
    UIElements.player1El.classList.remove('player--active');
    UIElements.player2El.classList.add('player--active');
    gameState.activePlayer = 1;
  } else {
    UIElements.player2CurrentScoreEl.textContent = 0;
    UIElements.player2El.classList.remove('player--active');
    UIElements.player1El.classList.add('player--active');
    gameState.activePlayer = 0;
  }
}
},{"./UIElements/selectedElements.js":"UIElements/selectedElements.js"}],"assets/dice-1.png":[function(require,module,exports) {
module.exports = "/dice-1.69bd5d39.png";
},{}],"assets/dice-2.png":[function(require,module,exports) {
module.exports = "/dice-2.2e53abd2.png";
},{}],"assets/dice-4.png":[function(require,module,exports) {
module.exports = "/dice-4.6a01e139.png";
},{}],"assets/dice-3.png":[function(require,module,exports) {
module.exports = "/dice-3.dd33ec9d.png";
},{}],"assets/dice-5.png":[function(require,module,exports) {
module.exports = "/dice-5.f0188897.png";
},{}],"assets/dice-6.png":[function(require,module,exports) {
module.exports = "/dice-6.733812b5.png";
},{}],"assets/*.png":[function(require,module,exports) {
module.exports = {
  "dice-1": require("./dice-1.png"),
  "dice-2": require("./dice-2.png"),
  "dice-4": require("./dice-4.png"),
  "dice-3": require("./dice-3.png"),
  "dice-5": require("./dice-5.png"),
  "dice-6": require("./dice-6.png")
};
},{"./dice-1.png":"assets/dice-1.png","./dice-2.png":"assets/dice-2.png","./dice-4.png":"assets/dice-4.png","./dice-3.png":"assets/dice-3.png","./dice-5.png":"assets/dice-5.png","./dice-6.png":"assets/dice-6.png"}],"rollDice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rollDice;

var UIElements = _interopRequireWildcard(require("./UIElements/selectedElements.js"));

var _switchPlayer = _interopRequireDefault(require("./switchPlayer.js"));

var _ = _interopRequireDefault(require("./assets/*.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function rollDice(gameState) {
  var randomNumber = Math.floor(Math.random() * 6 + 1); //UIElements.diceImg.src= `dice-${randomNumber}.png`

  UIElements.diceImg.src = _.default["dice-".concat(randomNumber)];
  UIElements.diceImg.addEventListener('load', function () {
    UIElements.diceImg.classList.remove('hidden');
  });

  if (randomNumber === 1) {
    (0, _switchPlayer.default)(gameState);
  } else {
    var currentElementPlayerEl = UIElements.getcurrentScoreEl(gameState.activePlayer);
    currentElementPlayerEl.textContent = Number(currentElementPlayerEl.textContent) + randomNumber;
  }
}
},{"./UIElements/selectedElements.js":"UIElements/selectedElements.js","./switchPlayer.js":"switchPlayer.js","./assets/*.png":"assets/*.png"}],"finishGame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = finishGame;

var UIElements = _interopRequireWildcard(require("./UIElements/selectedElements.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function finishGame(winnerEl) {
  winnerEl.classList.add('player--winner');
  UIElements.rollDicebtn.disabled = true;
  UIElements.holdbtn.disabled = true;
}
},{"./UIElements/selectedElements.js":"UIElements/selectedElements.js"}],"hold.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hold;

var UIElements = _interopRequireWildcard(require("./UIElements/selectedElements.js"));

var _switchPlayer = _interopRequireDefault(require("./switchPlayer.js"));

var _finishGame = _interopRequireDefault(require("./finishGame.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function hold(gameState) {
  var currentScoreEl = UIElements.getcurrentScoreEl(gameState.activePlayer);

  if (gameState.activePlayer === 0) {
    gameState.player1TotalScore += Number(currentScoreEl.textContent);
    UIElements.player1TotalScoreEl.textContent = gameState.player1TotalScore;

    if (gameState.player1TotalScore >= 100) {
      (0, _finishGame.default)(UIElements.player1El);
      return;
    }
  } else {
    gameState.player2TotalScore += Number(currentScoreEl.textContent);
    UIElements.player2TotalScoreEl.textContent = gameState.player2TotalScore;

    if (gameState.player2TotalScore >= 100) {
      (0, _finishGame.default)(UIElements.player2El);
      return;
    }
  }

  (0, _switchPlayer.default)(gameState);
}
},{"./UIElements/selectedElements.js":"UIElements/selectedElements.js","./switchPlayer.js":"switchPlayer.js","./finishGame.js":"finishGame.js"}],"EventListeners/clickListeners.js":[function(require,module,exports) {
"use strict";

var UIElements = _interopRequireWildcard(require("../UIElements/selectedElements.js"));

var _rollDice = _interopRequireDefault(require("../rollDice.js"));

var _hold = _interopRequireDefault(require("../hold.js"));

var _initGame = _interopRequireDefault(require("../initGame.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var gameState = {
  activePlayer: 0,
  player1TotalScore: 0,
  player2TotalScore: 0
};
UIElements.rollDicebtn.addEventListener('click', function () {
  (0, _rollDice.default)(gameState);
});
UIElements.holdbtn.addEventListener('click', function () {
  (0, _hold.default)(gameState);
});
UIElements.newGamebtn.addEventListener('click', function () {
  gameState.activePlayer = 0;
  gameState.player1TotalScore = 0;
  gameState.player2TotalScore = 0;
  (0, _initGame.default)();
});
},{"../UIElements/selectedElements.js":"UIElements/selectedElements.js","../rollDice.js":"rollDice.js","../hold.js":"hold.js","../initGame.js":"initGame.js"}],"script.js":[function(require,module,exports) {
'use strict';

var _initGame = _interopRequireDefault(require("./initGame.js"));

require("./EventListeners/clickListeners.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _initGame.default)();
},{"./initGame.js":"initGame.js","./EventListeners/clickListeners.js":"EventListeners/clickListeners.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62749" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map