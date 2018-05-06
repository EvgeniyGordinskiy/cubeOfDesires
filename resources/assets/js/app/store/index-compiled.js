'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _getters = require('./getters');

var getters = _interopRequireWildcard(_getters);

var _auth = require('./modules/auth');

var _auth2 = _interopRequireDefault(_auth);

var _profile = require('./modules/profile');

var _profile2 = _interopRequireDefault(_profile);

var _users = require('./modules/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

// Modules
/* ============
 * Vuex Store
 * ============
 *
 * The store of the application
 *
 * http://vuex.vuejs.org/en/index.html
 */

exports.default = new _vuex2.default.Store({

  /**
   * Assign the actions to the store
   */
  actions: actions,
  getters: getters,
  /**
   * Assign the getters to the store
   */

  modules: {
    auth: _auth2.default,
    profile: _profile2.default,
    users: _users2.default
  }
});

//# sourceMappingURL=index-compiled.js.map