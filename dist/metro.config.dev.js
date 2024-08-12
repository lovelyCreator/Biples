"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('@react-native/metro-config'),
    getDefaultConfig = _require.getDefaultConfig,
    mergeConfig = _require.mergeConfig;
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */


var defaultConfig = getDefaultConfig(__dirname);
var config = {
  transformer: {
    getTransformOptions: function getTransformOptions() {
      return regeneratorRuntime.async(function getTransformOptions$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {
                transform: {
                  experimentalImportSupport: false,
                  inlineRequires: true
                }
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  resolver: {
    extraNodeModules: _objectSpread({}, require("node-libs-react-native"))
  }
};
module.exports = mergeConfig(defaultConfig, config);
//# sourceMappingURL=metro.config.dev.js.map
