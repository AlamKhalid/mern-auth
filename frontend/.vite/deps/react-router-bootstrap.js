import {
  dist_exports,
  init_dist
} from "./chunk-Y2RFZJKU.js";
import {
  require_prop_types
} from "./chunk-FYU6I4CA.js";
import "./chunk-4ZSTBHIF.js";
import {
  require_react
} from "./chunk-HAZNF34R.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-WXXH56N5.js";

// node_modules/react-router-bootstrap/LinkContainer.js
var require_LinkContainer = __commonJS({
  "node_modules/react-router-bootstrap/LinkContainer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _reactRouterDom = (init_dist(), __toCommonJS(dist_exports));
    var _excluded = ["children", "onClick", "replace", "to", "state", "activeClassName", "className", "activeStyle", "style", "isActive"];
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    var isModifiedEvent = function isModifiedEvent2(event) {
      return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
    };
    var LinkContainer = function LinkContainer2(_ref) {
      var children = _ref.children, onClick = _ref.onClick, replace = _ref.replace, to = _ref.to, state = _ref.state, activeClassName = _ref.activeClassName, className = _ref.className, activeStyle = _ref.activeStyle, style = _ref.style, getIsActive = _ref.isActive, props = _objectWithoutProperties(_ref, _excluded);
      var path = _typeof(to) === "object" ? to.pathname || "" : to;
      var navigate = (0, _reactRouterDom.useNavigate)();
      var href = (0, _reactRouterDom.useHref)(typeof to === "string" ? {
        pathname: to
      } : to);
      var match = (0, _reactRouterDom.useMatch)(path);
      var location = (0, _reactRouterDom.useLocation)();
      var child = _react["default"].Children.only(children);
      var isActive = !!(getIsActive ? typeof getIsActive === "function" ? getIsActive(match, location) : getIsActive : match);
      var handleClick = function handleClick2(event) {
        if (children.props.onClick) {
          children.props.onClick(event);
        }
        if (onClick) {
          onClick(event);
        }
        if (!event.defaultPrevented && // onClick prevented default
        event.button === 0 && // ignore right clicks
        !isModifiedEvent(event)) {
          event.preventDefault();
          navigate(to, {
            replace,
            state
          });
        }
      };
      return _react["default"].cloneElement(child, _objectSpread(_objectSpread({}, props), {}, {
        className: [className, child.props.className, isActive ? activeClassName : null].join(" ").trim(),
        style: isActive ? _objectSpread(_objectSpread({}, style), activeStyle) : style,
        href,
        onClick: handleClick
      }));
    };
    LinkContainer.propTypes = {
      children: _propTypes["default"].element.isRequired,
      onClick: _propTypes["default"].func,
      replace: _propTypes["default"].bool,
      to: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
      state: _propTypes["default"].object,
      className: _propTypes["default"].string,
      activeClassName: _propTypes["default"].string,
      style: _propTypes["default"].objectOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
      activeStyle: _propTypes["default"].objectOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
      isActive: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].bool])
    };
    LinkContainer.defaultProps = {
      replace: false,
      activeClassName: "active",
      onClick: null,
      className: null,
      style: null,
      activeStyle: null,
      isActive: null
    };
    var _default = LinkContainer;
    exports["default"] = _default;
  }
});

// node_modules/react-router-bootstrap/index.js
var require_react_router_bootstrap = __commonJS({
  "node_modules/react-router-bootstrap/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "LinkContainer", {
      enumerable: true,
      get: function get() {
        return _LinkContainer["default"];
      }
    });
    var _LinkContainer = _interopRequireDefault(require_LinkContainer());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
  }
});
export default require_react_router_bootstrap();
//# sourceMappingURL=react-router-bootstrap.js.map
