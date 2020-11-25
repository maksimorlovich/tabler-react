import React, {
  forwardRef,
  createElement,
  Fragment,
  useState,
  Component,
  useContext,
  useRef,
  useImperativeHandle,
  useEffect,
  Children,
  PureComponent,
} from "react";
import ReactDOM from "react-dom";

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }

    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var commonjsGlobal =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : typeof self !== "undefined"
    ? self
    : {};

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default")
    ? x["default"]
    : x;
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function(module) {
  /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
  /* global define */

  (function() {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg;

        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        } else if (argType === "object") {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(" ");
    }

    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});

/**
 * Display an icon.
 * Uses the included feathers icon set by default but you can add your own
 */
function Icon(_ref) {
  var _cn;

  var _ref$prefix = _ref.prefix,
    prefixFromProps = _ref$prefix === void 0 ? "fe" : _ref$prefix,
    name = _ref.name,
    className = _ref.className,
    link = _ref.link,
    isAriaHidden = _ref.isAriaHidden,
    payment = _ref.payment,
    flag = _ref.flag,
    thin = _ref.thin,
    rest = _objectWithoutProperties(_ref, [
      "prefix",
      "name",
      "className",
      "link",
      "isAriaHidden",
      "payment",
      "flag",
      "thin",
    ]);

  var isFE = prefixFromProps === "fe";
  var prefix = (payment && "payment") || (flag && "flag") || prefixFromProps;
  var classes = classnames(
    ((_cn = {
      icon: isFE,
    }),
    _defineProperty(_cn, prefix, true),
    _defineProperty(_cn, "".concat(prefix, "-").concat(name), true),
    _defineProperty(_cn, "icon-thin", thin),
    _cn),
    className
  );
  var extraProps = isAriaHidden
    ? {
        "aria-hidden": true,
      }
    : null;
  return !link
    ? React.createElement(
        "i",
        _extends(
          {
            className: classes,
          },
          rest
        )
      )
    : React.createElement(
        "a",
        _extends(
          {
            className: "icon",
          },
          extraProps,
          rest
        ),
        React.createElement("i", {
          className: classes,
        })
      );
}

function parseValue(property, value) {
  var _classes;

  if (typeof value === "undefined") {
    return undefined;
  }

  if (typeof value === "number" || typeof value === "string") {
    return "".concat(property, "-").concat(value);
  }

  var xs = value.xs,
    sm = value.sm,
    md = value.md,
    lg = value.lg,
    xl = value.xl;
  var classes = ((_classes = {}),
  _defineProperty(_classes, "".concat(property, "-").concat(xs), xs),
  _defineProperty(_classes, "".concat(property, "-sm-").concat(sm), sm),
  _defineProperty(_classes, "".concat(property, "-md-").concat(md), md),
  _defineProperty(_classes, "".concat(property, "-lg-").concat(lg), lg),
  _defineProperty(_classes, "".concat(property, "-xl-").concat(xl), xl),
  _classes);
  return classes;
}

var utilityBrekapointPropsKeys = [
  "d",
  "m",
  "mt",
  "mb",
  "ml",
  "mr",
  "mx",
  "my",
  "p",
  "pt",
  "pb",
  "pl",
  "pr",
  "px",
  "py",
];
var utilityPropsKeys = [
  "d",
  "m",
  "mt",
  "mb",
  "ml",
  "mr",
  "mx",
  "my",
  "p",
  "pt",
  "pb",
  "pl",
  "pr",
  "px",
  "py",
];
var getUtilityPropsClasses = function getUtilityPropsClasses(props) {
  var utilityBreakpointPropsClasses = utilityBrekapointPropsKeys.reduce(
    function(acc, cur) {
      if (typeof props[cur] !== "undefined") {
        acc.push(parseValue(cur, props[cur]));
      }

      return acc;
    },
    []
  );
  var utilityPropsClasses = utilityPropsKeys.reduce(function(acc, cur) {
    if (props[cur]) {
      acc.push(parseValue(cur, props[cur]));
    }

    return acc;
  }, []);
  return utilityBreakpointPropsClasses;
};

var capitalize = function capitalize(str) {
  return (
    String(str)
      .charAt(0)
      .toUpperCase() + String(str).slice(1)
  );
};

var splitProps = function splitProps(props) {
  return Object.keys(props).reduce(
    function(pre, cur) {
      if (utilityPropsKeys.includes(cur)) {
        pre[0][cur] = props[cur];
      } else {
        pre[1][cur] = props[cur];
      }

      return pre;
    },
    [{}, {}]
  );
};

var makeElement = function makeElement(element) {
  var Component = forwardRef(function(_ref, ref) {
    var className = _ref.className,
      classNames = _ref.classNames,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? element : _ref$as,
      props = _objectWithoutProperties(_ref, ["className", "classNames", "as"]);

    var _splitProps = splitProps(props),
      _splitProps2 = _slicedToArray(_splitProps, 2),
      elProps = _splitProps2[0],
      _props = _splitProps2[1];

    var utilityClasses = getUtilityPropsClasses(elProps);

    var _className = classnames(utilityClasses, classNames, className);

    return React.createElement(
      as || element,
      _objectSpread(
        {
          className: _className,
          ref: ref,
        },
        _props
      )
    );
  });
  Component.displayName = "ForwardRef(".concat(capitalize(element), ")");
  return Component;
};

var Div = makeElement("div");
var Span = makeElement("span");
var Header = makeElement("header");
var Section = makeElement("section");
var Nav = makeElement("nav");
var Footer = makeElement("footer");
var A = makeElement("a");
var Button = makeElement("button");
var P = makeElement("p");
var Ul = makeElement("ul");
var Li = makeElement("li");
var Ol = makeElement("ol");
var H1 = makeElement("h1");
var H2 = makeElement("h2");
var H3 = makeElement("h3");
var H4 = makeElement("h4");
var H5 = makeElement("h5");
var H6 = makeElement("h6");
var Form = makeElement("form");
var Input = makeElement("input");
var Textarea = makeElement("textarea");
var Select = makeElement("select");
var Option = makeElement("option");
var Fieldset = makeElement("fieldset");
var Label = makeElement("label");
var Iframe = makeElement("iframe"); // const Svg = makeElement<SVGElement>("svg");

var Small = makeElement("small");
var Table = makeElement("table");
var Thead = makeElement("thead");
var Tbody = makeElement("tbody");
var Tfoot = makeElement("tfoot");
var Col = makeElement("col");
var Tr = makeElement("tr");
var Td = makeElement("td");
var Th = makeElement("th");
var El = {
  Div: Div,
  Span: Span,
  Header: Header,
  Section: Section,
  Nav: Nav,
  Footer: Footer,
  A: A,
  Button: Button,
  P: P,
  H1: H1,
  H2: H2,
  H3: H3,
  H4: H4,
  H5: H5,
  H6: H6,
  Ul: Ul,
  Li: Li,
  Ol: Ol,
  Form: Form,
  Input: Input,
  Textarea: Textarea,
  Select: Select,
  Option: Option,
  Fieldset: Fieldset,
  Label: Label,
  Iframe: Iframe,
  // Svg,
  Small: Small,
  Table: Table,
  Thead: Thead,
  Tbody: Tbody,
  Tfoot: Tfoot,
  Col: Col,
  Tr: Tr,
  Td: Td,
  Th: Th,
};

/**
 * Renders a group of Icons
 */
function AvatarList(_ref) {
  var className = _ref.className,
    children = _ref.children,
    stacked = _ref.stacked,
    rest = _objectWithoutProperties(_ref, ["className", "children", "stacked"]);

  var classes = classnames(
    {
      "avatar-list": true,
      "avatar-list-stacked": stacked,
    },
    className
  );
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

/**
 * Appended something to the inside of the badge
 */
function BadgeAddOn(_ref) {
  var children = _ref.children,
    className = _ref.className,
    icon = _ref.icon,
    color = _ref.color,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "span" : _ref$as,
    RootComponent = _ref.RootComponent,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "icon",
      "color",
      "as",
      "RootComponent",
    ]);

  var classes = classnames(
    "badge-addon",
    _defineProperty({}, "badge-".concat(color), color),
    className
  );
  var childrenForAll = createElement(
    Fragment,
    null,
    icon &&
      createElement(Icon, {
        name: icon,
      }),
    children
  );
  var Component = RootComponent || as;
  return createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    childrenForAll
  );
}

var colors = {
  white: "#ffffff",
  blue: "#467fcf",
  "blue-darkest": "#0e1929",
  "blue-darker": "#1c3353",
  "blue-dark": "#3866a6",
  "blue-light": "#7ea5dd",
  "blue-lighter": "#c8d9f1",
  "blue-lightest": "#edf2fa",
  azure: "#45aaf2",
  "azure-darkest": "#0e2230",
  "azure-darker": "#1c4461",
  "azure-dark": "#3788c2",
  "azure-light": "#7dc4f6",
  "azure-lighter": "#c7e6fb",
  "azure-lightest": "#ecf7fe",
  indigo: "#6574cd",
  "indigo-darkest": "#141729",
  "indigo-darker": "#282e52",
  "indigo-dark": "#515da4",
  "indigo-light": "#939edc",
  "indigo-lighter": "#d1d5f0",
  "indigo-lightest": "#f0f1fa",
  purple: "#a55eea",
  "purple-darkest": "#21132f",
  "purple-darker": "#42265e",
  "purple-dark": "#844bbb",
  "purple-light": "#c08ef0",
  "purple-lighter": "#e4cff9",
  "purple-lightest": "#f6effd",
  pink: "#f66d9b",
  "pink-darkest": "#31161f",
  "pink-darker": "#622c3e",
  "pink-dark": "#c5577c",
  "pink-light": "#f999b9",
  "pink-lighter": "#fcd3e1",
  "pink-lightest": "#fef0f5",
  red: "#e74c3c",
  "red-darkest": "#2e0f0c",
  "red-darker": "#5c1e18",
  "red-dark": "#b93d30",
  "red-light": "#ee8277",
  "red-lighter": "#f8c9c5",
  "red-lightest": "#fdedec",
  orange: "#fd9644",
  "orange-darkest": "#331e0e",
  "orange-darker": "#653c1b",
  "orange-dark": "#ca7836",
  "orange-light": "#feb67c",
  "orange-lighter": "#fee0c7",
  "orange-lightest": "#fff5ec",
  yellow: "#f1c40f",
  "yellow-darkest": "#302703",
  "yellow-darker": "#604e06",
  "yellow-dark": "#c19d0c",
  "yellow-light": "#f5d657",
  "yellow-lighter": "#fbedb7",
  "yellow-lightest": "#fef9e7",
  lime: "#7bd235",
  "lime-darkest": "#192a0b",
  "lime-darker": "#315415",
  "lime-dark": "#62a82a",
  "lime-light": "#a3e072",
  "lime-lighter": "#d7f2c2",
  "lime-lightest": "#f2fbeb",
  green: "#5eba00",
  "green-darkest": "#132500",
  "green-darker": "#264a00",
  "green-dark": "#4b9500",
  "green-light": "#8ecf4d",
  "green-lighter": "#cfeab3",
  "green-lightest": "#eff8e6",
  teal: "#2bcbba",
  "teal-darkest": "#092925",
  "teal-darker": "#11514a",
  "teal-dark": "#22a295",
  "teal-light": "#6bdbcf",
  "teal-lighter": "#bfefea",
  "teal-lightest": "#eafaf8",
  cyan: "#17a2b8",
  "cyan-darkest": "#052025",
  "cyan-darker": "#09414a",
  "cyan-dark": "#128293",
  "cyan-light": "#5dbecd",
  "cyan-lighter": "#b9e3ea",
  "cyan-lightest": "#e8f6f8",
  gray: "#868e96",
  "gray-darkest": "#1b1c1e",
  "gray-darker": "#36393c",
  "gray-light": "#aab0b6",
  "gray-lighter": "#dbdde0",
  "gray-lightest": "#f3f4f5",
  "gray-dark": "#343a40",
  "gray-dark-darkest": "#0a0c0d",
  "gray-dark-darker": "#15171a",
  "gray-dark-dark": "#2a2e33",
  "gray-dark-light": "#717579",
  "gray-dark-lighter": "#c2c4c6",
  "gray-dark-lightest": "#ebebec",
};
var softColors = [
  "blue-lt",
  "azure-lt",
  "indigo-lt",
  "purple-lt",
  "pink-lt",
  "red-lt",
  "orange-lt",
  "yellow-lt",
  "lime-lt",
  "green-lt",
  "teal-lt",
  "cyan-lt",
  "gray-lt",
  "dark-lt",
];

var Badge = forwardRef(function(_ref, ref) {
  var _cn;

  var children = _ref.children,
    className = _ref.className,
    rounded = _ref.rounded,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "primary" : _ref$color,
    avatar = _ref.avatar,
    remove = _ref.remove,
    addOn = _ref.addOn,
    addOnIcon = _ref.addOnIcon,
    addOnColor = _ref.addOnColor,
    onRemoveClick = _ref.onRemoveClick,
    onAddOnClick = _ref.onAddOnClick,
    RootComponent = _ref.RootComponent,
    link = _ref.link,
    href = _ref.href,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "span" : _ref$as,
    _ref$textColor = _ref.textColor,
    textColor = _ref$textColor === void 0 ? "white" : _ref$textColor,
    pill = _ref.pill,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "rounded",
      "color",
      "avatar",
      "remove",
      "addOn",
      "addOnIcon",
      "addOnColor",
      "onRemoveClick",
      "onAddOnClick",
      "RootComponent",
      "link",
      "href",
      "as",
      "textColor",
      "pill",
    ]);

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDeleted = _useState2[0],
    setIsDeleted = _useState2[1];

  var handleOnRemoveClick = function handleOnRemoveClick() {
    setIsDeleted(true);
  };

  var classes = classnames(
    ((_cn = {
      badge: true,
      expanded: true,
      "badge-pill": rounded || pill,
    }),
    _defineProperty(_cn, "bg-".concat(color), color),
    _defineProperty(
      _cn,
      "text-".concat(textColor),
      softColors.includes(color) ? false : textColor
    ),
    _cn),
    className
  );

  if (isDeleted) {
    return null;
  }

  var childrenForAll = React.createElement(
    React.Fragment,
    null,
    avatar &&
      React.createElement("span", {
        className: "Badge-avatar avatar",
        style: {
          backgroundImage: "url(".concat(avatar, ")"),
        },
      }),
    children,
    (addOn || addOnIcon) &&
      React.createElement(
        BadgeAddOn,
        {
          icon: addOnIcon,
          color: addOnColor,
          onClick: onAddOnClick,
        },
        addOn
      ),
    remove && onRemoveClick
      ? React.createElement(BadgeAddOn, {
          onClick: onRemoveClick,
          link: true,
          icon: "x",
        })
      : remove &&
          React.createElement(BadgeAddOn, {
            onClick: handleOnRemoveClick,
            link: true,
            icon: "x",
          })
  );
  var Component = RootComponent || as;
  return React.createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    childrenForAll
  );
});

/**
 * Adds a space between its child Badges
 */
var BadgeList = function BadgeList(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ["children", "className"]);

  var classes = classnames("Badges", className);
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
};

var CompoundBadge = Badge;
CompoundBadge.AddOn = BadgeAddOn;
CompoundBadge.List = BadgeList;

/**
 * Renders a single circular avatar
 */
function Avatar(_ref) {
  var _cn;

  var className = _ref.className,
    children = _ref.children,
    imageURL = _ref.imageURL,
    style = _ref.style,
    size = _ref.size,
    status = _ref.status,
    placeholder = _ref.placeholder,
    icon = _ref.icon,
    color = _ref.color,
    upload = _ref.upload,
    rounded = _ref.rounded,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "imageURL",
      "style",
      "size",
      "status",
      "placeholder",
      "icon",
      "color",
      "upload",
      "rounded",
    ]);

  var classes = classnames(
    ((_cn = {
      avatar: true,
      rounded: rounded,
      "avatar-upload": upload,
    }),
    _defineProperty(_cn, "avatar-".concat(size), !!size && !upload),
    _defineProperty(_cn, "bg-".concat(color), !!color && !upload),
    _cn),
    className
  );

  var _icon = icon || (placeholder ? "home" : null);

  return createElement(
    El.Span,
    _extends(
      {
        className: classes,
        style: imageURL
          ? Object.assign(
              {
                backgroundImage: "url(".concat(imageURL, ")"),
              },
              style
            )
          : style,
      },
      rest
    ),
    _icon &&
      createElement(Icon, {
        name: _icon,
      }),
    status &&
      createElement(CompoundBadge, {
        color: status,
      }),
    children
  );
}
Avatar.List = AvatarList;

var Text = function Text(_ref) {
  var _cn;

  var className = _ref.className,
    children = _ref.children,
    RootComponent = _ref.RootComponent,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.Div : _ref$as,
    color = _ref.color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "" : _ref$size,
    wrap = _ref.wrap,
    muted = _ref.muted,
    truncate = _ref.truncate,
    alignFromProps = _ref.align,
    left = _ref.left,
    center = _ref.center,
    right = _ref.right,
    justify = _ref.justify,
    transformFromProps = _ref.transform,
    lowercase = _ref.lowercase,
    uppercase = _ref.uppercase,
    capitalize = _ref.capitalize,
    trackingFromProps = _ref.tracking,
    trackingTight = _ref.trackingTight,
    trackingNormal = _ref.trackingNormal,
    trackingWide = _ref.trackingWide,
    leadingFromProps = _ref.leading,
    leadingNone = _ref.leadingNone,
    leadingTight = _ref.leadingTight,
    leadingNormal = _ref.leadingNormal,
    leadingLoose = _ref.leadingLoose,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "RootComponent",
      "as",
      "color",
      "size",
      "wrap",
      "muted",
      "truncate",
      "align",
      "left",
      "center",
      "right",
      "justify",
      "transform",
      "lowercase",
      "uppercase",
      "capitalize",
      "tracking",
      "trackingTight",
      "trackingNormal",
      "trackingWide",
      "leading",
      "leadingNone",
      "leadingTight",
      "leadingNormal",
      "leadingLoose",
    ]);

  var Component = RootComponent || as;
  var align =
    alignFromProps ||
    (left && "left") ||
    (center && "center") ||
    (right && "right") ||
    (justify && "justify") ||
    "";
  var transform =
    transformFromProps ||
    (lowercase && "lowercase") ||
    (uppercase && "uppercase") ||
    (capitalize && "capitalize") ||
    "";
  var tracking =
    trackingFromProps ||
    (trackingTight && "tight") ||
    (trackingNormal && "normal") ||
    (trackingWide && "wide") ||
    "";
  var leading =
    leadingFromProps ||
    (leadingNone && "none") ||
    (leadingTight && "tight") ||
    (leadingNormal && "normal") ||
    (leadingLoose && "loose") ||
    "";
  var classes = classnames(
    ((_cn = {}),
    _defineProperty(_cn, "text-wrap p-lg-6", wrap),
    _defineProperty(_cn, "text-".concat(color), color),
    _defineProperty(_cn, "".concat(size), size),
    _defineProperty(_cn, "text-muted", muted),
    _defineProperty(_cn, "text-truncate", truncate),
    _defineProperty(_cn, "text-".concat(align), align),
    _defineProperty(_cn, "text-".concat(transform), transform),
    _defineProperty(_cn, "tracking-".concat(tracking), tracking),
    _defineProperty(_cn, "leading-".concat(leading), leading),
    _cn),
    className
  );
  return React.createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
};

var TextSmall = function TextSmall(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);

  return createElement(
    Text,
    _extends(
      {
        as: "small",
        size: "sm",
      },
      rest
    ),
    children
  );
};

var CompoundText = Text;
CompoundText.Small = TextSmall;

/**
 * An individual Notification made up of an Avatar alongside some text and the time
 */
function Notification(_ref) {
  var avatarURL = _ref.avatarURL,
    message = _ref.message,
    time = _ref.time,
    unread = _ref.unread;
  return createElement(
    Fragment,
    null,
    avatarURL &&
      createElement(Avatar, {
        className: "mr-3 align-self-center",
        imageURL: avatarURL,
      }),
    createElement(
      "div",
      null,
      message,
      time &&
        createElement(
          CompoundText,
          {
            color: "gray",
            size: "small",
          },
          time
        )
    )
  );
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose$1;

var _extends_1 = createCommonjsModule(function(module) {
  function _extends() {
    module.exports = _extends =
      Object.assign ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
});

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose;

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized$1;

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty$1;

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser =
  typeof window !== "undefined" && typeof document !== "undefined";

var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function() {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function() {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function() {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function() {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
 * Create a debounced version of a method, that's asynchronously deferred
 * but called in the minimum time possible.
 *
 * @method
 * @memberof Popper.Utils
 * @argument {Function} fn
 * @returns {Function}
 */
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return (
    functionToCheck &&
    getType.toString.call(functionToCheck) === "[object Function]"
  );
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
    overflow = _getStyleComputedProp.overflow,
    overflowX = _getStyleComputedProp.overflowX,
    overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 =
  isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return element
      ? element.ownerDocument.documentElement
      : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (
    ["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 &&
    getStyleComputedProperty(offsetParent, "position") === "static"
  ) {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === "BODY") {
    return false;
  }
  return (
    nodeName === "HTML" ||
    getOffsetParent(element.firstElementChild) === element
  );
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order =
    element1.compareDocumentPosition(element2) &
    Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (
    (element1 !== commonAncestorContainer &&
      element2 !== commonAncestorContainer) ||
    start.contains(end)
  ) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "top";

  var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  var nodeName = element.nodeName;

  if (nodeName === "BODY" || nodeName === "HTML") {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, "top");
  var scrollLeft = getScroll(element, "left");
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === "x" ? "Left" : "Top";
  var sideB = sideA === "Left" ? "Right" : "Bottom";

  return (
    parseFloat(styles["border" + sideA + "Width"], 10) +
    parseFloat(styles["border" + sideB + "Width"], 10)
  );
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(
    body["offset" + axis],
    body["scroll" + axis],
    html["client" + axis],
    html["offset" + axis],
    html["scroll" + axis],
    isIE(10)
      ? parseInt(html["offset" + axis]) +
          parseInt(
            computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]
          ) +
          parseInt(
            computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]
          )
      : 0
  );
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize("Height", body, html, computedStyle),
    width: getSize("Width", body, html, computedStyle),
  };
}

var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var defineProperty$1 = function(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height,
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, "top");
      var scrollLeft = getScroll(element, "left");
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top,
  };

  // subtract scrollbar size from sizes
  var sizes =
    element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height =
    sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, "x");
    vertScrollbar -= getBordersSize(styles, "y");

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === "HTML";
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height,
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (
    isIE10 && !fixedPosition
      ? parent.contains(scrollParent)
      : parent === scrollParent && scrollParent.nodeName !== "BODY"
  ) {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height,
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, "transform") === "none") {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition =
    arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition
    ? getFixedPositionOffsetParent(popper)
    : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(
      offsetParent,
      fixedPosition
    );
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(
      boundariesNode,
      offsetParent,
      fixedPosition
    );

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
        height = _getWindowSizes.height,
        width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === "number";
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
    height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(
  placement,
  refRect,
  popper,
  reference,
  boundariesElement
) {
  var padding =
    arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf("auto") === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top,
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height,
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom,
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height,
    },
  };

  var sortedAreas = Object.keys(rects)
    .map(function(key) {
      return _extends$1(
        {
          key: key,
        },
        rects[key],
        {
          area: getArea(rects[key]),
        }
      );
    })
    .sort(function(a, b) {
      return b.area - a.area;
    });

  var filteredAreas = sortedAreas.filter(function(_ref2) {
    var width = _ref2.width,
      height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement =
    filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split("-")[1];

  return computedPlacement + (variation ? "-" + variation : "");
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition
    ? getFixedPositionOffsetParent(popper)
    : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(
    reference,
    commonOffsetParent,
    fixedPosition
  );
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x =
    parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y =
    parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x,
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split("-")[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height,
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ["right", "left"].indexOf(placement) !== -1;
  var mainSide = isHoriz ? "top" : "left";
  var secondarySide = isHoriz ? "left" : "top";
  var measurement = isHoriz ? "height" : "width";
  var secondaryMeasurement = !isHoriz ? "height" : "width";

  popperOffsets[mainSide] =
    referenceOffsets[mainSide] +
    referenceOffsets[measurement] / 2 -
    popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] =
      referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] =
      referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function(cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function(obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun =
    ends === undefined
      ? modifiers
      : modifiers.slice(0, findIndex(modifiers, "name", ends));

  modifiersToRun.forEach(function(modifier) {
    if (modifier["function"]) {
      // eslint-disable-line dot-notation
      console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    }
    var fn = modifier["function"] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {},
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(
    this.state,
    this.popper,
    this.reference,
    this.options.positionFixed
  );

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(
    this.options.placement,
    data.offsets.reference,
    this.popper,
    this.reference,
    this.options.modifiers.flip.boundariesElement,
    this.options.modifiers.flip.padding
  );

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(
    this.popper,
    data.offsets.reference,
    data.placement
  );

  data.offsets.popper.position = this.options.positionFixed
    ? "fixed"
    : "absolute";

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function(_ref) {
    var name = _ref.name,
      enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, "ms", "Webkit", "Moz", "O"];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? "" + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== "undefined") {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, "applyStyle")) {
    this.popper.removeAttribute("x-placement");
    this.popper.style.position = "";
    this.popper.style.top = "";
    this.popper.style.left = "";
    this.popper.style.right = "";
    this.popper.style.bottom = "";
    this.popper.style.willChange = "";
    this.popper.style[getSupportedPropertyName("transform")] = "";
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === "BODY";
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(
      getScrollParent(target.parentNode),
      event,
      callback,
      scrollParents
    );
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener("resize", state.updateBound, {
    passive: true,
  });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(
    scrollElement,
    "scroll",
    state.updateBound,
    state.scrollParents
  );
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(
      this.reference,
      this.options,
      this.state,
      this.scheduleUpdate
    );
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener("resize", state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function(target) {
    target.removeEventListener("scroll", state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function(prop) {
    var unit = "";
    // add unit if the value is numeric and is one of the following
    if (
      ["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !==
        -1 &&
      isNumeric(styles[prop])
    ) {
      unit = "px";
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function(prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(
    state,
    popper,
    reference,
    options.positionFixed
  );

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(
    options.placement,
    referenceOffsets,
    popper,
    reference,
    options.modifiers.flip.boundariesElement,
    options.modifiers.flip.padding
  );

  popper.setAttribute("x-placement", placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? "fixed" : "absolute" });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;
  var round = Math.round,
    floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf("-") !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound
    ? noRound
    : isVertical || isVariation || sameWidthParity
    ? round
    : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(
      bothOddWidth && !isVariation && shouldRound
        ? popper.left - 1
        : popper.left
    ),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right),
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
    y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function(
    modifier
  ) {
    return modifier.name === "applyStyle";
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn(
      "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
    );
  }
  var gpuAcceleration =
    legacyGpuAccelerationOption !== undefined
      ? legacyGpuAccelerationOption
      : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position,
  };

  var offsets = getRoundedOffsets(
    data,
    window.devicePixelRatio < 2 || !isFirefox
  );

  var sideA = x === "bottom" ? "top" : "bottom";
  var sideB = y === "right" ? "left" : "right";

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName("transform");

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
    top = void 0;
  if (sideA === "bottom") {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === "HTML") {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === "right") {
    if (offsetParent.nodeName === "HTML") {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = "transform";
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === "bottom" ? -1 : 1;
    var invertLeft = sideB === "right" ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ", " + sideB;
  }

  // Attributes
  var attributes = {
    "x-placement": data.placement,
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function(_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired =
    !!requesting &&
    modifiers.some(function(modifier) {
      return (
        modifier.name === requestedName &&
        modifier.enabled &&
        modifier.order < requesting.order
      );
    });

  if (!isRequired) {
    var _requesting = "`" + requestingName + "`";
    var requested = "`" + requestedName + "`";
    console.warn(
      requested +
        " modifier is required by " +
        _requesting +
        " modifier in order to work, be sure to include it before " +
        _requesting +
        "!"
    );
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === "string") {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn(
        "WARNING: `arrow.element` must be child of its popper element!"
      );
      return data;
    }
  }

  var placement = data.placement.split("-")[0];
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;

  var isVertical = ["left", "right"].indexOf(placement) !== -1;

  var len = isVertical ? "height" : "width";
  var sideCapitalized = isVertical ? "Top" : "Left";
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? "left" : "top";
  var opSide = isVertical ? "bottom" : "right";
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -=
      popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] +=
      reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css["margin" + sideCapitalized], 10);
  var popperBorderSide = parseFloat(
    css["border" + sideCapitalized + "Width"],
    10
  );
  var sideValue =
    center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = ((_data$offsets$arrow = {}),
  defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)),
  defineProperty$1(_data$offsets$arrow, altSide, ""),
  _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === "end") {
    return "start";
  } else if (variation === "start") {
    return "end";
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = [
  "auto-start",
  "auto",
  "auto-end",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-end",
  "bottom",
  "bottom-start",
  "left-end",
  "left",
  "left-start",
];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements
    .slice(index + 1)
    .concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise",
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, "inner")) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(
    data.instance.popper,
    data.instance.reference,
    options.padding,
    options.boundariesElement,
    data.positionFixed
  );

  var placement = data.placement.split("-")[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split("-")[1] || "";

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function(step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split("-")[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef =
      (placement === "left" &&
        floor(popperOffsets.right) > floor(refOffsets.left)) ||
      (placement === "right" &&
        floor(popperOffsets.left) < floor(refOffsets.right)) ||
      (placement === "top" &&
        floor(popperOffsets.bottom) > floor(refOffsets.top)) ||
      (placement === "bottom" &&
        floor(popperOffsets.top) < floor(refOffsets.bottom));

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom =
      floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries =
      (placement === "left" && overflowsLeft) ||
      (placement === "right" && overflowsRight) ||
      (placement === "top" && overflowsTop) ||
      (placement === "bottom" && overflowsBottom);

    // flip the variation if required
    var isVertical = ["top", "bottom"].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef =
      !!options.flipVariations &&
      ((isVertical && variation === "start" && overflowsLeft) ||
        (isVertical && variation === "end" && overflowsRight) ||
        (!isVertical && variation === "start" && overflowsTop) ||
        (!isVertical && variation === "end" && overflowsBottom));

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent =
      !!options.flipVariationsByContent &&
      ((isVertical && variation === "start" && overflowsRight) ||
        (isVertical && variation === "end" && overflowsLeft) ||
        (!isVertical && variation === "start" && overflowsBottom) ||
        (!isVertical && variation === "end" && overflowsTop));

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? "-" + variation : "");

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1(
        {},
        data.offsets.popper,
        getPopperOffsets(
          data.instance.popper,
          data.offsets.reference,
          data.placement
        )
      );

      data = runModifiers(data.instance.modifiers, data, "flip");
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;

  var placement = data.placement.split("-")[0];
  var floor = Math.floor;
  var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
  var side = isVertical ? "right" : "bottom";
  var opSide = isVertical ? "left" : "top";
  var measurement = isVertical ? "width" : "height";

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] =
      floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf("%") === 0) {
    var element = void 0;
    switch (unit) {
      case "%p":
        element = popperOffsets;
        break;
      case "%":
      case "%r":
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return (rect[measurement] / 100) * value;
  } else if (unit === "vh" || unit === "vw") {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === "vh") {
      size = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
    } else {
      size = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
    }
    return (size / 100) * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function(frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(
    find(fragments, function(frag) {
      return frag.search(/,|\s/) !== -1;
    })
  );

  if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
    console.warn(
      "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
    );
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops =
    divider !== -1
      ? [
          fragments
            .slice(0, divider)
            .concat([fragments[divider].split(splitRegex)[0]]),
          [fragments[divider].split(splitRegex)[1]].concat(
            fragments.slice(divider + 1)
          ),
        ]
      : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function(op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1
    ? !useHeight
    : useHeight)
      ? "height"
      : "width";
    var mergeWithPrevious = false;
    return (
      op
        // This aggregates any `+` or `-` sign that aren't considered operators
        // e.g.: 10 + +5 => [10, +, +5]
        .reduce(function(a, b) {
          if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
            a[a.length - 1] = b;
            mergeWithPrevious = true;
            return a;
          } else if (mergeWithPrevious) {
            a[a.length - 1] += b;
            mergeWithPrevious = false;
            return a;
          } else {
            return a.concat(b);
          }
        }, [])
        // Here we convert the string values into number values (in px)
        .map(function(str) {
          return toValue(str, measurement, popperOffsets, referenceOffsets);
        })
    );
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function(op, index) {
    op.forEach(function(frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === "-" ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
    _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;

  var basePlacement = placement.split("-")[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === "left") {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === "right") {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === "top") {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === "bottom") {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement =
    options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName("transform");
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
    left = popperStyles.left,
    transform = popperStyles[transformProp];

  popperStyles.top = "";
  popperStyles.left = "";
  popperStyles[transformProp] = "";

  var boundaries = getBoundaries(
    data.instance.popper,
    data.instance.reference,
    options.padding,
    boundariesElement,
    data.positionFixed
  );

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (
        popper[placement] < boundaries[placement] &&
        !options.escapeWithReference
      ) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$1({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === "right" ? "left" : "top";
      var value = popper[mainSide];
      if (
        popper[placement] > boundaries[placement] &&
        !options.escapeWithReference
      ) {
        value = Math.min(
          popper[mainSide],
          boundaries[placement] -
            (placement === "right" ? popper.width : popper.height)
        );
      }
      return defineProperty$1({}, mainSide, value);
    },
  };

  order.forEach(function(placement) {
    var side =
      ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var shiftvariation = placement.split("-")[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
      reference = _data$offsets.reference,
      popper = _data$offsets.popper;

    var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    var side = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";

    var shiftOffsets = {
      start: defineProperty$1({}, side, reference[side]),
      end: defineProperty$1(
        {},
        side,
        reference[side] + reference[measurement] - popper[measurement]
      ),
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function(modifier) {
    return modifier.name === "preventOverflow";
  }).boundaries;

  if (
    refRect.bottom < bound.top ||
    refRect.left > bound.right ||
    refRect.top > bound.bottom ||
    refRect.right < bound.left
  ) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes["x-out-of-boundaries"] = "";
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes["x-out-of-boundaries"] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var _data$offsets = data.offsets,
    popper = _data$offsets.popper,
    reference = _data$offsets.reference;

  var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;

  var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;

  popper[isHoriz ? "left" : "top"] =
    reference[basePlacement] -
    (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift,
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0,
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ["left", "right", "top", "bottom"],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: "scrollParent",
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether,
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: "[x-arrow]",
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: "flip",
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: "viewport",
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false,
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner,
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide,
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: "bottom",
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: "right",
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined,
  },
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: "bottom",

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers,
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = (function() {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function() {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: [],
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(
      _extends$1({}, Popper.Defaults.modifiers, options.modifiers)
    ).forEach(function(name) {
      _this.options.modifiers[name] = _extends$1(
        {},
        Popper.Defaults.modifiers[name] || {},
        options.modifiers ? options.modifiers[name] : {}
      );
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers)
      .map(function(name) {
        return _extends$1(
          {
            name: name,
          },
          _this.options.modifiers[name]
        );
      })
      // sort the modifiers by order
      .sort(function(a, b) {
        return a.order - b.order;
      });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function(modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(
          _this.reference,
          _this.popper,
          _this.options,
          modifierOptions,
          _this.state
        );
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs

  createClass(Popper, [
    {
      key: "update",
      value: function update$$1() {
        return update.call(this);
      },
    },
    {
      key: "destroy",
      value: function destroy$$1() {
        return destroy.call(this);
      },
    },
    {
      key: "enableEventListeners",
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      },
    },
    {
      key: "disableEventListeners",
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      },

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */

      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */
    },
  ]);
  return Popper;
})();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

var reactIs_production_min = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: !0 });
  var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.memo") : 60115,
    r = b ? Symbol.for("react.lazy") : 60116;
  function t(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (((a = a.type), a)) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (((a = a && a.$$typeof), a)) {
                case k:
                case n:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case r:
        case q:
        case d:
          return u;
      }
    }
  }
  function v(a) {
    return t(a) === m;
  }
  exports.typeOf = t;
  exports.AsyncMode = l;
  exports.ConcurrentMode = m;
  exports.ContextConsumer = k;
  exports.ContextProvider = h;
  exports.Element = c;
  exports.ForwardRef = n;
  exports.Fragment = e;
  exports.Lazy = r;
  exports.Memo = q;
  exports.Portal = d;
  exports.Profiler = g;
  exports.StrictMode = f;
  exports.Suspense = p;
  exports.isValidElementType = function(a) {
    return (
      "string" === typeof a ||
      "function" === typeof a ||
      a === e ||
      a === m ||
      a === g ||
      a === f ||
      a === p ||
      ("object" === typeof a &&
        null !== a &&
        (a.$$typeof === r ||
          a.$$typeof === q ||
          a.$$typeof === h ||
          a.$$typeof === k ||
          a.$$typeof === n))
    );
  };
  exports.isAsyncMode = function(a) {
    return v(a) || t(a) === l;
  };
  exports.isConcurrentMode = v;
  exports.isContextConsumer = function(a) {
    return t(a) === k;
  };
  exports.isContextProvider = function(a) {
    return t(a) === h;
  };
  exports.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  exports.isForwardRef = function(a) {
    return t(a) === n;
  };
  exports.isFragment = function(a) {
    return t(a) === e;
  };
  exports.isLazy = function(a) {
    return t(a) === r;
  };
  exports.isMemo = function(a) {
    return t(a) === q;
  };
  exports.isPortal = function(a) {
    return t(a) === d;
  };
  exports.isProfiler = function(a) {
    return t(a) === g;
  };
  exports.isStrictMode = function(a) {
    return t(a) === f;
  };
  exports.isSuspense = function(a) {
    return t(a) === p;
  };
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function(module, exports) {
  if (process.env.NODE_ENV !== "production") {
    (function() {
      Object.defineProperty(exports, "__esModule", { value: true });

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === "function" && Symbol.for;

      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for("react.fragment")
        : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.strict_mode")
        : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for("react.profiler")
        : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for("react.provider")
        : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 0xeace;
      var REACT_ASYNC_MODE_TYPE = hasSymbol
        ? Symbol.for("react.async_mode")
        : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.concurrent_mode")
        : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for("react.forward_ref")
        : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for("react.suspense")
        : 0xead1;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;

      function isValidElementType(type) {
        return (
          typeof type === "string" ||
          typeof type === "function" ||
          // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          (typeof type === "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE))
        );
      }

      /**
       * Forked from fbjs/warning:
       * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
       *
       * Only change is we use console.warn instead of console.error,
       * and do nothing when 'console' is not supported.
       * This really simplifies the code.
       * ---
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */

      var lowPriorityWarning = function() {};

      {
        var printWarning = function(format) {
          for (
            var _len = arguments.length,
              args = Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            args[_key - 1] = arguments[_key];
          }

          var argIndex = 0;
          var message =
            "Warning: " +
            format.replace(/%s/g, function() {
              return args[argIndex++];
            });
          if (typeof console !== "undefined") {
            console.warn(message);
          }
          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        lowPriorityWarning = function(condition, format) {
          if (format === undefined) {
            throw new Error(
              "`lowPriorityWarning(condition, format, ...args)` requires a warning " +
                "message argument"
            );
          }
          if (!condition) {
            for (
              var _len2 = arguments.length,
                args = Array(_len2 > 2 ? _len2 - 2 : 0),
                _key2 = 2;
              _key2 < _len2;
              _key2++
            ) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(undefined, [format].concat(args));
          }
        };
      }

      var lowPriorityWarning$1 = lowPriorityWarning;

      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_LAZY_TYPE:
            case REACT_MEMO_TYPE:
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      }

      // AsyncMode is deprecated along with isAsyncMode
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;

      var hasWarnedAboutDeprecatedIsAsyncMode = false;

      // AsyncMode should be deprecated
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            lowPriorityWarning$1(
              false,
              "The ReactIs.isAsyncMode() alias has been deprecated, " +
                "and will be removed in React 17+. Update your code to use " +
                "ReactIs.isConcurrentMode() instead. It has the exact same API."
            );
          }
        }
        return (
          isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
        );
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object === "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.typeOf = typeOf;
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isValidElementType = isValidElementType;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
    })();
  }
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function(module) {
  if (process.env.NODE_ENV === "production") {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
      return test2[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (
      Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst"
    ) {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative()
  ? Object.assign
  : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;

      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }

      return to;
    };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== "production") {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== "production") {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== "function") {
            var err = Error(
              (componentName || "React class") +
                ": " +
                location +
                " type `" +
                typeSpecName +
                "` is invalid; " +
                "it must be a function, usually from the `prop-types` package, but received `" +
                typeof typeSpecs[typeSpecName] +
                "`."
            );
            err.name = "Invariant Violation";
            throw err;
          }
          error = typeSpecs[typeSpecName](
            values,
            typeSpecName,
            componentName,
            location,
            null,
            ReactPropTypesSecret$1
          );
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || "React class") +
              ": type specification of " +
              location +
              " `" +
              typeSpecName +
              "` is invalid; the type checker " +
              "function must return `null` or an `Error` but returned a " +
              typeof error +
              ". " +
              "You may have forgotten to pass an argument to the type checker " +
              "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
              "shape all require an argument)."
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : "";

          printWarning(
            "Failed " +
              location +
              " type: " +
              error.message +
              (stack != null ? stack : "")
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== "production") {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== "production") {
  printWarning$1 = function(text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn =
      maybeIterable &&
      ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
        maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === "function") {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = "<<anonymous>>";

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker("array"),
    bool: createPrimitiveTypeChecker("boolean"),
    func: createPrimitiveTypeChecker("function"),
    number: createPrimitiveTypeChecker("number"),
    object: createPrimitiveTypeChecker("object"),
    string: createPrimitiveTypeChecker("string"),
    symbol: createPrimitiveTypeChecker("symbol"),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = "";
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== "production") {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(
      isRequired,
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret
    ) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
              "Use `PropTypes.checkPropTypes()` to call them. " +
              "Read more at http://fb.me/use-check-prop-types"
          );
          err.name = "Invariant Violation";
          throw err;
        } else if (
          process.env.NODE_ENV !== "production" &&
          typeof console !== "undefined"
        ) {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ":" + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              "You are manually calling a React.PropTypes validation " +
                "function for the `" +
                propFullName +
                "` prop on `" +
                componentName +
                "`. This is deprecated " +
                "and will throw in the standalone `prop-types` package. " +
                "You may be seeing this warning due to a third-party PropTypes " +
                "library. See https://fb.me/react-warning-dont-call-proptypes " +
                "for details."
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError(
              "The " +
                location +
                " `" +
                propFullName +
                "` is marked as required " +
                ("in `" + componentName + "`, but its value is `null`.")
            );
          }
          return new PropTypeError(
            "The " +
              location +
              " `" +
              propFullName +
              "` is marked as required in " +
              ("`" + componentName + "`, but its value is `undefined`.")
          );
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret
    ) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              preciseType +
              "` supplied to `" +
              componentName +
              "`, expected ") +
            ("`" + expectedType + "`.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError(
          "Property `" +
            propFullName +
            "` of component `" +
            componentName +
            "` has invalid PropType notation inside arrayOf."
        );
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              propType +
              "` supplied to `" +
              componentName +
              "`, expected an array.")
        );
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(
          propValue,
          i,
          componentName,
          location,
          propFullName + "[" + i + "]",
          ReactPropTypesSecret_1
        );
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              propType +
              "` supplied to `" +
              componentName +
              "`, expected a single ReactElement.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              propType +
              "` supplied to `" +
              componentName +
              "`, expected a single ReactElement type.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              actualClassName +
              "` supplied to `" +
              componentName +
              "`, expected ") +
            ("instance of `" + expectedClassName + "`.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== "production") {
        if (arguments.length > 1) {
          printWarning$1(
            "Invalid arguments supplied to oneOf, expected an array, got " +
              arguments.length +
              " arguments. " +
              "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
          );
        } else {
          printWarning$1(
            "Invalid argument supplied to oneOf, expected an array."
          );
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(
        key,
        value
      ) {
        var type = getPreciseType(value);
        if (type === "symbol") {
          return String(value);
        }
        return value;
      });
      return new PropTypeError(
        "Invalid " +
          location +
          " `" +
          propFullName +
          "` of value `" +
          String(propValue) +
          "` " +
          ("supplied to `" +
            componentName +
            "`, expected one of " +
            valuesString +
            ".")
      );
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError(
          "Property `" +
            propFullName +
            "` of component `" +
            componentName +
            "` has invalid PropType notation inside objectOf."
        );
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              propType +
              "` supplied to `" +
              componentName +
              "`, expected an object.")
        );
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret_1
          );
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== "production"
        ? printWarning$1(
            "Invalid argument supplied to oneOfType, expected an instance of array."
          )
        : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== "function") {
        printWarning$1(
          "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
            "received " +
            getPostfixForTypeWarning(checker) +
            " at index " +
            i +
            "."
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (
          checker(
            props,
            propName,
            componentName,
            location,
            propFullName,
            ReactPropTypesSecret_1
          ) == null
        ) {
          return null;
        }
      }

      return new PropTypeError(
        "Invalid " +
          location +
          " `" +
          propFullName +
          "` supplied to " +
          ("`" + componentName + "`.")
      );
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` supplied to " +
            ("`" + componentName + "`, expected a ReactNode.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type `" +
            propType +
            "` " +
            ("supplied to `" + componentName + "`, expected `object`.")
        );
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(
          propValue,
          key,
          componentName,
          location,
          propFullName + "." + key,
          ReactPropTypesSecret_1
        );
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type `" +
            propType +
            "` " +
            ("supplied to `" + componentName + "`, expected `object`.")
        );
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` key `" +
              key +
              "` supplied to `" +
              componentName +
              "`." +
              "\nBad object: " +
              JSON.stringify(props[propName], null, "  ") +
              "\nValid keys: " +
              JSON.stringify(Object.keys(shapeTypes), null, "  ")
          );
        }
        var error = checker(
          propValue,
          key,
          componentName,
          location,
          propFullName + "." + key,
          ReactPropTypesSecret_1
        );
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case "number":
      case "string":
      case "undefined":
        return true;
      case "boolean":
        return !propValue;
      case "object":
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === "symbol") {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue["@@toStringTag"] === "Symbol") {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return "array";
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return "object";
    }
    if (isSymbol(propType, propValue)) {
      return "symbol";
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === "undefined" || propValue === null) {
      return "" + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === "object") {
      if (propValue instanceof Date) {
        return "date";
      } else if (propValue instanceof RegExp) {
        return "regexp";
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case "array":
      case "object":
        return "an " + type;
      case "boolean":
      case "date":
      case "regexp":
        return "a " + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(
    props,
    propName,
    componentName,
    location,
    propFullName,
    secret
  ) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
        "Use PropTypes.checkPropTypes() to call them. " +
        "Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  } // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction,
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function(module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== "production") {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(
      ReactIs.isElement,
      throwOnDirectAccess
    );
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

var key = "__global_unique_id__";

var gud = function() {
  return (commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1);
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction$1 = function emptyFunction() {};

emptyFunction$1.thatReturns = makeEmptyFunction;
emptyFunction$1.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction$1.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction$1.thatReturnsNull = makeEmptyFunction(null);
emptyFunction$1.thatReturnsThis = function() {
  return this;
};
emptyFunction$1.thatReturnsArgument = function(arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction$1;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== "production") {
  var printWarning$2 = function printWarning(format) {
    for (
      var _len = arguments.length,
        args = Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message =
      "Warning: " +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning " +
          "message argument"
      );
    }

    if (format.indexOf("Failed Composite propType: ") === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (
        var _len2 = arguments.length,
          args = Array(_len2 > 2 ? _len2 - 2 : 0),
          _key2 = 2;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning$2.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var implementation = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  var _react2 = _interopRequireDefault(React);

  var _propTypes2 = _interopRequireDefault(propTypes);

  var _gud2 = _interopRequireDefault(gud);

  var _warning2 = _interopRequireDefault(warning_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }
    return call && (typeof call === "object" || typeof call === "function")
      ? call
      : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError(
        "Super expression must either be null or a function, not " +
          typeof superClass
      );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass);
  }

  var MAX_SIGNED_31_BIT_INT = 1073741823;

  // Inlined Object.is polyfill.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  function objectIs(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function createEventEmitter(value) {
    var handlers = [];
    return {
      on: function on(handler) {
        handlers.push(handler);
      },
      off: function off(handler) {
        handlers = handlers.filter(function(h) {
          return h !== handler;
        });
      },
      get: function get() {
        return value;
      },
      set: function set(newValue, changedBits) {
        value = newValue;
        handlers.forEach(function(handler) {
          return handler(value, changedBits);
        });
      },
    };
  }

  function onlyChild(children) {
    return Array.isArray(children) ? children[0] : children;
  }

  function createReactContext(defaultValue, calculateChangedBits) {
    var _Provider$childContex, _Consumer$contextType;

    var contextProp = "__create-react-context-" + (0, _gud2.default)() + "__";

    var Provider = (function(_Component) {
      _inherits(Provider, _Component);

      function Provider() {
        var _temp, _this, _ret;

        _classCallCheck(this, Provider);

        for (
          var _len = arguments.length, args = Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }

        return (
          (_ret = ((_temp = ((_this = _possibleConstructorReturn(
            this,
            _Component.call.apply(_Component, [this].concat(args))
          )),
          _this)),
          (_this.emitter = createEventEmitter(_this.props.value)),
          _temp)),
          _possibleConstructorReturn(_this, _ret)
        );
      }

      Provider.prototype.getChildContext = function getChildContext() {
        var _ref;

        return (_ref = {}), (_ref[contextProp] = this.emitter), _ref;
      };

      Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(
        nextProps
      ) {
        if (this.props.value !== nextProps.value) {
          var oldValue = this.props.value;
          var newValue = nextProps.value;
          var changedBits = void 0;

          if (objectIs(oldValue, newValue)) {
            changedBits = 0; // No change
          } else {
            changedBits =
              typeof calculateChangedBits === "function"
                ? calculateChangedBits(oldValue, newValue)
                : MAX_SIGNED_31_BIT_INT;
            if (process.env.NODE_ENV !== "production") {
              (0, _warning2.default)(
                (changedBits & MAX_SIGNED_31_BIT_INT) === changedBits,
                "calculateChangedBits: Expected the return value to be a " +
                  "31-bit integer. Instead received: %s",
                changedBits
              );
            }

            changedBits |= 0;

            if (changedBits !== 0) {
              this.emitter.set(nextProps.value, changedBits);
            }
          }
        }
      };

      Provider.prototype.render = function render() {
        return this.props.children;
      };

      return Provider;
    })(React.Component);

    Provider.childContextTypes = ((_Provider$childContex = {}),
    (_Provider$childContex[contextProp] =
      _propTypes2.default.object.isRequired),
    _Provider$childContex);

    var Consumer = (function(_Component2) {
      _inherits(Consumer, _Component2);

      function Consumer() {
        var _temp2, _this2, _ret2;

        _classCallCheck(this, Consumer);

        for (
          var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2] = arguments[_key2];
        }

        return (
          (_ret2 = ((_temp2 = ((_this2 = _possibleConstructorReturn(
            this,
            _Component2.call.apply(_Component2, [this].concat(args))
          )),
          _this2)),
          (_this2.state = {
            value: _this2.getValue(),
          }),
          (_this2.onUpdate = function(newValue, changedBits) {
            var observedBits = _this2.observedBits | 0;
            if ((observedBits & changedBits) !== 0) {
              _this2.setState({ value: _this2.getValue() });
            }
          }),
          _temp2)),
          _possibleConstructorReturn(_this2, _ret2)
        );
      }

      Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(
        nextProps
      ) {
        var observedBits = nextProps.observedBits;

        this.observedBits =
          observedBits === undefined || observedBits === null
            ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
            : observedBits;
      };

      Consumer.prototype.componentDidMount = function componentDidMount() {
        if (this.context[contextProp]) {
          this.context[contextProp].on(this.onUpdate);
        }
        var observedBits = this.props.observedBits;

        this.observedBits =
          observedBits === undefined || observedBits === null
            ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
            : observedBits;
      };

      Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.context[contextProp]) {
          this.context[contextProp].off(this.onUpdate);
        }
      };

      Consumer.prototype.getValue = function getValue() {
        if (this.context[contextProp]) {
          return this.context[contextProp].get();
        } else {
          return defaultValue;
        }
      };

      Consumer.prototype.render = function render() {
        return onlyChild(this.props.children)(this.state.value);
      };

      return Consumer;
    })(React.Component);

    Consumer.contextTypes = ((_Consumer$contextType = {}),
    (_Consumer$contextType[contextProp] = _propTypes2.default.object),
    _Consumer$contextType);

    return {
      Provider: Provider,
      Consumer: Consumer,
    };
  }

  exports.default = createReactContext;
  module.exports = exports["default"];
});

unwrapExports(implementation);

var lib = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  var _react2 = _interopRequireDefault(React);

  var _implementation2 = _interopRequireDefault(implementation);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default = _react2.default.createContext || _implementation2.default;
  module.exports = exports["default"];
});

var createContext = unwrapExports(lib);

var ManagerContext = createContext({
  setReferenceNode: undefined,
  referenceNode: undefined,
});

var Manager =
  /*#__PURE__*/
  (function(_React$Component) {
    inheritsLoose(Manager, _React$Component);

    function Manager() {
      var _this;

      _this = _React$Component.call(this) || this;

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "setReferenceNode",
        function(referenceNode) {
          if (
            !referenceNode ||
            _this.state.context.referenceNode === referenceNode
          ) {
            return;
          }

          _this.setState(function(_ref) {
            var context = _ref.context;
            return {
              context: _extends_1({}, context, {
                referenceNode: referenceNode,
              }),
            };
          });
        }
      );

      _this.state = {
        context: {
          setReferenceNode: _this.setReferenceNode,
          referenceNode: undefined,
        },
      };
      return _this;
    }

    var _proto = Manager.prototype;

    _proto.render = function render() {
      return createElement(
        ManagerContext.Provider,
        {
          value: this.state.context,
        },
        this.props.children
      );
    };

    return Manager;
  })(Component);

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (
      var _len = arguments.length,
        args = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};

var initialStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: "none",
};
var initialArrowStyle = {};
var InnerPopper =
  /*#__PURE__*/
  (function(_React$Component) {
    inheritsLoose(InnerPopper, _React$Component);

    function InnerPopper() {
      var _this;

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this =
        _React$Component.call.apply(_React$Component, [this].concat(args)) ||
        this;

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "state",
        {
          data: undefined,
          placement: undefined,
        }
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "popperInstance",
        void 0
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "popperNode",
        null
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "arrowNode",
        null
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "setPopperNode",
        function(popperNode) {
          if (!popperNode || _this.popperNode === popperNode) return;
          safeInvoke(_this.props.innerRef, popperNode);
          _this.popperNode = popperNode;

          _this.updatePopperInstance();
        }
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "setArrowNode",
        function(arrowNode) {
          _this.arrowNode = arrowNode;
        }
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "updateStateModifier",
        {
          enabled: true,
          order: 900,
          fn: function fn(data) {
            var placement = data.placement;

            _this.setState({
              data: data,
              placement: placement,
            });

            return data;
          },
        }
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "getOptions",
        function() {
          return {
            placement: _this.props.placement,
            eventsEnabled: _this.props.eventsEnabled,
            positionFixed: _this.props.positionFixed,
            modifiers: _extends_1({}, _this.props.modifiers, {
              arrow: _extends_1(
                {},
                _this.props.modifiers && _this.props.modifiers.arrow,
                {
                  enabled: !!_this.arrowNode,
                  element: _this.arrowNode,
                }
              ),
              applyStyle: {
                enabled: false,
              },
              updateStateModifier: _this.updateStateModifier,
            }),
          };
        }
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "getPopperStyle",
        function() {
          return !_this.popperNode || !_this.state.data
            ? initialStyle
            : _extends_1(
                {
                  position: _this.state.data.offsets.popper.position,
                },
                _this.state.data.styles
              );
        }
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "getPopperPlacement",
        function() {
          return !_this.state.data ? undefined : _this.state.placement;
        }
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "getArrowStyle",
        function() {
          return !_this.arrowNode || !_this.state.data
            ? initialArrowStyle
            : _this.state.data.arrowStyles;
        }
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "getOutOfBoundariesState",
        function() {
          return _this.state.data ? _this.state.data.hide : undefined;
        }
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "destroyPopperInstance",
        function() {
          if (!_this.popperInstance) return;

          _this.popperInstance.destroy();

          _this.popperInstance = null;
        }
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "updatePopperInstance",
        function() {
          _this.destroyPopperInstance();

          var _assertThisInitialize = assertThisInitialized(
              assertThisInitialized(_this)
            ),
            popperNode = _assertThisInitialize.popperNode;

          var referenceElement = _this.props.referenceElement;
          if (!referenceElement || !popperNode) return;
          _this.popperInstance = new Popper(
            referenceElement,
            popperNode,
            _this.getOptions()
          );
        }
      );

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "scheduleUpdate",
        function() {
          if (_this.popperInstance) {
            _this.popperInstance.scheduleUpdate();
          }
        }
      );

      return _this;
    }

    var _proto = InnerPopper.prototype;

    _proto.componentDidUpdate = function componentDidUpdate(
      prevProps,
      prevState
    ) {
      // If the Popper.js options have changed, update the instance (destroy + create)
      if (
        this.props.placement !== prevProps.placement ||
        this.props.referenceElement !== prevProps.referenceElement ||
        this.props.positionFixed !== prevProps.positionFixed
      ) {
        this.updatePopperInstance();
      } else if (
        this.props.eventsEnabled !== prevProps.eventsEnabled &&
        this.popperInstance
      ) {
        this.props.eventsEnabled
          ? this.popperInstance.enableEventListeners()
          : this.popperInstance.disableEventListeners();
      } // A placement difference in state means popper determined a new placement
      // apart from the props value. By the time the popper element is rendered with
      // the new position Popper has already measured it, if the place change triggers
      // a size change it will result in a misaligned popper. So we schedule an update to be sure.

      if (prevState.placement !== this.state.placement) {
        this.scheduleUpdate();
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      safeInvoke(this.props.innerRef, null);
      this.destroyPopperInstance();
    };

    _proto.render = function render() {
      return unwrapArray(this.props.children)({
        ref: this.setPopperNode,
        style: this.getPopperStyle(),
        placement: this.getPopperPlacement(),
        outOfBoundaries: this.getOutOfBoundariesState(),
        scheduleUpdate: this.scheduleUpdate,
        arrowProps: {
          ref: this.setArrowNode,
          style: this.getArrowStyle(),
        },
      });
    };

    return InnerPopper;
  })(Component);

defineProperty(InnerPopper, "defaultProps", {
  placement: "bottom",
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false,
});
function Popper$1(_ref) {
  var referenceElement = _ref.referenceElement,
    props = objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

  return createElement(ManagerContext.Consumer, null, function(_ref2) {
    var referenceNode = _ref2.referenceNode;
    return createElement(
      InnerPopper,
      _extends_1(
        {
          referenceElement:
            referenceElement !== undefined ? referenceElement : referenceNode,
        },
        props
      )
    );
  });
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== "production";

var warning$1 = function() {};

if (__DEV__) {
  var printWarning$3 = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message =
      "Warning: " +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning$1 = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning " +
          "message argument"
      );
    }
    if (!condition) {
      printWarning$3.apply(null, [format].concat(args));
    }
  };
}

var warning_1$1 = warning$1;

var InnerReference =
  /*#__PURE__*/
  (function(_React$Component) {
    inheritsLoose(InnerReference, _React$Component);

    function InnerReference() {
      var _this;

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this =
        _React$Component.call.apply(_React$Component, [this].concat(args)) ||
        this;

      defineProperty(
        assertThisInitialized(assertThisInitialized(_this)),
        "refHandler",
        function(node) {
          safeInvoke(_this.props.innerRef, node);
          safeInvoke(_this.props.setReferenceNode, node);
        }
      );

      return _this;
    }

    var _proto = InnerReference.prototype;

    _proto.render = function render() {
      warning_1$1(
        Boolean(this.props.setReferenceNode),
        "`Reference` should not be used outside of a `Manager` component."
      );
      return unwrapArray(this.props.children)({
        ref: this.refHandler,
      });
    };

    return InnerReference;
  })(Component);

function Reference(props) {
  return createElement(ManagerContext.Consumer, null, function(_ref) {
    var setReferenceNode = _ref.setReferenceNode;
    return createElement(
      InnerReference,
      _extends_1(
        {
          setReferenceNode: setReferenceNode,
        },
        props
      )
    );
  });
}

var DropdownContext = React.createContext([
  false,
  function() {
    return null;
  },
]);

/**
 * Provides the trigger element for a Dropdown
 */
function DropdownTrigger(_ref) {
  var className = _ref.className,
    _ref$toggle = _ref.toggle,
    toggle = _ref$toggle === void 0 ? true : _ref$toggle,
    value = _ref.value,
    children = _ref.children,
    icon = _ref.icon,
    isNavLink = _ref.isNavLink,
    isOption = _ref.isOption,
    _ref$as = _ref.as,
    Component = _ref$as === void 0 ? El.Button : _ref$as,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "toggle",
      "value",
      "children",
      "icon",
      "isNavLink",
      "isOption",
      "as",
    ]);

  var _React$useContext = useContext(DropdownContext),
    _React$useContext2 = _slicedToArray(_React$useContext, 2),
    isOpen = _React$useContext2[0],
    setIsOpen = _React$useContext2[1];

  var classes = classnames(
    {
      "dropdown-toggle": toggle,
      "nav-link": isNavLink,
      "btn-option": isOption,
    },
    className
  );
  var childrenFragment = createElement(
    Fragment,
    null,
    icon &&
      createElement(
        Fragment,
        null,
        createElement(Icon, {
          name: icon,
        }),
        " "
      ),
    value,
    children
  );
  return createElement(Reference, null, function(_ref2) {
    var ref = _ref2.ref;
    return createElement(
      Component,
      _extends(
        {
          className: classes,
          onClick: function onClick() {
            setIsOpen(!isOpen);
          },
          ref: ref,
        },
        rest
      ),
      childrenFragment
    );
  });
}

/**
 * The wrapper element for a Dropdowns Items
 */
function DropdownMenu(_ref) {
  var _cn;

  var className = _ref.className,
    children = _ref.children,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "bottom" : _ref$position,
    arrow = _ref.arrow,
    _ref$arrowPosition = _ref.arrowPosition,
    arrowPosition = _ref$arrowPosition === void 0 ? "left" : _ref$arrowPosition,
    _style = _ref.style,
    show = _ref.show,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "position",
      "arrow",
      "arrowPosition",
      "style",
      "show",
    ]);

  var _React$useContext = React.useContext(DropdownContext),
    _React$useContext2 = _slicedToArray(_React$useContext, 1),
    isOpen = _React$useContext2[0];

  var _isOpen = show || isOpen;

  var classes = classnames(
    ((_cn = {
      "dropdown-menu": true,
    }),
    _defineProperty(_cn, "dropdown-menu-".concat(arrowPosition), arrowPosition),
    _defineProperty(_cn, "dropdown-menu-arrow", arrow),
    _defineProperty(_cn, "show", _isOpen),
    _cn),
    className
  );
  return React.createElement(
    Popper$1,
    {
      placement: position,
    },
    function(_ref2) {
      var ref = _ref2.ref,
        style = _ref2.style,
        placement = _ref2.placement;
      return (
        _isOpen &&
        React.createElement(
          El.Div,
          _extends(
            {
              className: classes,
              "data-placement": placement,
              style: _objectSpread({}, _style, style),
              ref: ref,
            },
            rest
          ),
          children
        )
      );
    }
  );
}

/**
 * An individual item that should be contained within a Dropdown.Menu
 */
function DropdownItem(_ref) {
  var className = _ref.className,
    icon = _ref.icon,
    value = _ref.value,
    children = _ref.children,
    badge = _ref.badge,
    badgeType = _ref.badgeType,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.A : _ref$as,
    RootComponent = _ref.RootComponent,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "icon",
      "value",
      "children",
      "badge",
      "badgeType",
      "as",
      "RootComponent",
    ]);

  var classes = classnames(
    {
      "dropdown-item": true,
    },
    className
  );
  var Component = RootComponent || as;
  return createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    badge &&
      createElement(
        "span",
        {
          className: "float-right",
        },
        createElement(
          CompoundBadge,
          {
            color: badgeType,
          },
          badge
        )
      ),
    icon &&
      createElement(
        Fragment,
        null,
        createElement(Icon, {
          name: icon,
          className: "dropdown-icon",
        }),
        " "
      ),
    value,
    children
  );
}

/**
 * Used to seperate items within a Dropdown with a horizontal line
 */
function DropdownItemDivider(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    El.Div,
    _extends(
      {
        className: "dropdown-divider",
      },
      rest
    ),
    children
  );
}

var useClickOutside = function useClickOutside(onOutsideClick, ref) {
  var elementRef = useRef(null);
  useImperativeHandle(ref, function() {
    return elementRef.current;
  });

  var handleOutsideOnClick = function handleOutsideOnClick(_ref) {
    var target = _ref.target;

    if (isOutsideClick(target)) {
      onOutsideClick();
    }
  };

  var isOutsideClick = function isOutsideClick(target) {
    return (
      elementRef.current &&
      target instanceof Node &&
      !elementRef.current.contains(target)
    );
  };

  useEffect(function() {
    document.addEventListener("mousedown", handleOutsideOnClick, false);
    return function() {
      document.removeEventListener("mousedown", handleOutsideOnClick, false);
    };
  });
  return elementRef;
};
/**
 * A helper to help you do something when a user clicks outside of a component
 */

var ClickOutside =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(ClickOutside, _React$PureComponent);

    function ClickOutside() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ClickOutside);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(ClickOutside)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(_assertThisInitialized(_this), "elementRef", void 0);

      _defineProperty(
        _assertThisInitialized(_this),
        "componentDidMount",
        function() {
          document.addEventListener(
            "mousedown",
            _this.handleOutsideOnClick,
            false
          );
        }
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "componentWillUnmount",
        function() {
          document.removeEventListener(
            "mousedown",
            _this.handleOutsideOnClick,
            false
          );
        }
      );

      _defineProperty(_assertThisInitialized(_this), "setElementRef", function(
        el
      ) {
        if (el) _this.elementRef = el;
      });

      _defineProperty(_assertThisInitialized(_this), "isOutsideClick", function(
        target
      ) {
        return (
          _this.elementRef &&
          target instanceof Node &&
          !_this.elementRef.contains(target)
        );
      });

      _defineProperty(
        _assertThisInitialized(_this),
        "handleOutsideOnClick",
        function(_ref2) {
          var target = _ref2.target;
          if (_this.isOutsideClick(target)) _this.props.onOutsideClick();
        }
      );

      return _this;
    }

    _createClass(ClickOutside, [
      {
        key: "render",
        value: function render() {
          var children = this.props.children;
          return children({
            setElementRef: this.setElementRef,
          });
        },
      },
    ]);

    return ClickOutside;
  })(React.PureComponent);

var DropdownProvider = function DropdownProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];

  var value = [isOpen, setIsOpen];
  return React.createElement(
    DropdownContext.Provider,
    {
      value: value,
    },
    children
  );
};

var withDropdownProvider = function withDropdownProvider(Component) {
  return forwardRef(function(props, ref) {
    return React.createElement(
      DropdownProvider,
      null,
      React.createElement(
        Component,
        _extends(
          {
            ref: ref,
          },
          props
        )
      )
    );
  });
};

var Dropdown = forwardRef(function(_ref2, ref) {
  var _cn;

  var className = _ref2.className,
    children = _ref2.children,
    desktopOnly = _ref2.desktopOnly,
    isOption = _ref2.isOption,
    _ref2$flex = _ref2.flex,
    flex = _ref2$flex === void 0 ? false : _ref2$flex,
    items = _ref2.items,
    trigger = _ref2.trigger,
    icon = _ref2.icon,
    triggerContent = _ref2.triggerContent,
    triggerAs = _ref2.triggerAs,
    isNavLink = _ref2.isNavLink,
    triggerClassName = _ref2.triggerClassName,
    color = _ref2.color,
    toggle = _ref2.toggle,
    itemsObject = _ref2.itemsObject,
    itemsRootComponent = _ref2.itemsRootComponent,
    position = _ref2.position,
    arrow = _ref2.arrow,
    arrowPosition = _ref2.arrowPosition,
    dropdownMenuClassName = _ref2.dropdownMenuClassName,
    style = _ref2.style,
    triggerProps = _ref2.triggerProps,
    rest = _objectWithoutProperties(_ref2, [
      "className",
      "children",
      "desktopOnly",
      "isOption",
      "flex",
      "items",
      "trigger",
      "icon",
      "triggerContent",
      "triggerAs",
      "isNavLink",
      "triggerClassName",
      "color",
      "toggle",
      "itemsObject",
      "itemsRootComponent",
      "position",
      "arrow",
      "arrowPosition",
      "dropdownMenuClassName",
      "style",
      "triggerProps",
    ]);

  var _useContext = useContext(DropdownContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    isOpen = _useContext2[0],
    setIsOpen = _useContext2[1];

  var _handleItemClick = function _handleItemClick(e, callback) {
    setIsOpen(false);

    if (callback) {
      callback(e);
    }
  };

  var classes = classnames(
    ((_cn = {
      dropdown: true,
      "d-none": desktopOnly,
      "d-md-flex": desktopOnly || flex === "md",
    }),
    _defineProperty(
      _cn,
      "d-".concat(flex, "-flex"),
      (typeof flex !== "boolean" && ["xs", "sm", "lg", "xl"].includes(flex)) ||
        flex
    ),
    _defineProperty(_cn, "d-flex", flex === true),
    _defineProperty(_cn, "card-options-dropdown", isOption),
    _defineProperty(_cn, "show", isOpen),
    _cn),
    className
  );

  var _trigger =
    trigger ||
    (function() {
      if (icon || triggerContent || toggle) {
        return React.createElement(
          DropdownTrigger,
          _extends(
            {
              isNavLink: isNavLink,
              icon: icon,
              className: triggerClassName,
              isOption: isOption,
              color: color,
              toggle: toggle,
              as: triggerAs,
            },
            triggerProps
          ),
          triggerContent
        );
      }

      return null;
    })();

  var _items =
    items ||
    (function() {
      if (itemsObject) {
        return itemsObject.map(function(_ref3, i) {
          var as = _ref3.as,
            _onClick = _ref3.onClick,
            isDivider = _ref3.isDivider,
            dividerProps = _ref3.dividerProps,
            item = _objectWithoutProperties(_ref3, [
              "as",
              "onClick",
              "isDivider",
              "dividerProps",
            ]);

          return isDivider
            ? React.createElement(
                DropdownItemDivider,
                _extends(
                  {
                    key: i,
                  },
                  dividerProps
                )
              )
            : React.createElement(
                DropdownItem,
                _extends(
                  {
                    key: i,
                    as: as || itemsRootComponent,
                    onClick: function onClick(e) {
                      return _handleItemClick(e, _onClick);
                    },
                  },
                  item
                )
              );
        });
      }

      return null;
    })();

  var menu = (function() {
    if (_items) {
      return React.createElement(
        DropdownMenu,
        {
          position: position,
          arrow: arrow,
          arrowPosition: arrowPosition,
          className: dropdownMenuClassName,
          show: isOpen,
        },
        _items
      );
    }

    return null;
  })();

  var _ref = useClickOutside(function() {
    return setIsOpen(false);
  }, ref);

  return React.createElement(
    Manager,
    null,
    React.createElement(
      El.Div,
      _extends(
        {
          className: classes,
          ref: _ref,
        },
        rest
      ),
      _trigger,
      menu || children
    )
  );
});
var Dropdown$1 = withDropdownProvider(Dropdown);

var CompoundDropdown = Dropdown$1;
CompoundDropdown.displayName = "Dropdown";
CompoundDropdown.Trigger = DropdownTrigger;
CompoundDropdown.Menu = DropdownMenu;
CompoundDropdown.Item = DropdownItem;
CompoundDropdown.ItemDivider = DropdownItemDivider;

function NavLinkTitle(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ["children", "className"]);

  var classes = classnames("nav-link-title", className);
  return createElement(
    El.Span,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

var NavLink = forwardRef(function(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    RootComponent = _ref.RootComponent,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.A : _ref$as,
    _ref$iconPrefix = _ref.iconPrefix,
    iconPrefix = _ref$iconPrefix === void 0 ? "fe" : _ref$iconPrefix,
    icon = _ref.icon,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active,
    hasSubNav = _ref.hasSubNav,
    rootRef = _ref.rootRef,
    title = _ref.title,
    collapsed = _ref.collapsed,
    isToggle = _ref.isToggle,
    _ref$subitem = _ref.subitem,
    subitem = _ref$subitem === void 0 ? false : _ref$subitem,
    props = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "RootComponent",
      "as",
      "iconPrefix",
      "icon",
      "active",
      "hasSubNav",
      "rootRef",
      "title",
      "collapsed",
      "isToggle",
      "subitem",
    ]);

  var classes = classnames(
    {
      "nav-link": !subitem,
      "dropdown-toggle": isToggle,
      "dropdown-item": subitem,
      active: active,
      collapse: isToggle && collapsed,
      show: isToggle && collapsed,
    },
    className
  );
  var Component = RootComponent || as;
  return React.createElement(
    Component,
    _extends(
      {
        className: classes,
        ref: rootRef || ref,
        "data-toggle": isToggle ? "collapse" : undefined,
        "aria-expanded": isToggle ? !collapsed : undefined,
      },
      props
    ),
    icon &&
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Icon, {
          prefix: iconPrefix,
          name: icon,
        }),
        " "
      ),
    title && React.createElement(NavLinkTitle, null, title),
    children
  );
});

function NavSubNav(_ref) {
  var _ref$as = _ref.as,
    className = _ref.className,
    children = _ref.children,
    _ref$collapsed = _ref.collapsed,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    rest = _objectWithoutProperties(_ref, [
      "as",
      "className",
      "children",
      "collapsed",
      "show",
    ]);

  // const classes = cn(
  //   { "navbar-subnav": true, collapse: true, collapsed, show },
  //   className
  // );
  var classes = classnames(
    {
      "dropdown-menu": true,
      show: show,
    },
    className
  );
  return (
    // <Component className={classes} {...rest}>
    React.createElement(
      "ul",
      {
        className: classes,
      },
      children
    ) // </Component>
  );
}

var NavSubNavContext = React.createContext(false);

var NavItem = forwardRef(function(_ref2, ref) {
  var children = _ref2.children,
    LinkComponent = _ref2.LinkComponent,
    value = _ref2.value,
    className = _ref2.className,
    href = _ref2.href,
    to = _ref2.to,
    type = _ref2.type,
    _ref2$iconPrefix = _ref2.iconPrefix,
    iconPrefix = _ref2$iconPrefix === void 0 ? "fe" : _ref2$iconPrefix,
    icon = _ref2.icon,
    forcedHasSubNav = _ref2.hasSubNav,
    active = _ref2.active,
    subItems = _ref2.subItems,
    subItemsObjects = _ref2.subItemsObjects,
    useExact = _ref2.useExact,
    _ref2$position = _ref2.position,
    onClick = _ref2.onClick,
    _ref2$as = _ref2.as,
    as = _ref2$as === void 0 ? El.Li : _ref2$as,
    linkAs = _ref2.linkAs,
    linkProps = _ref2.linkProps,
    _ref2$link = _ref2.link,
    link = _ref2$link === void 0 ? true : _ref2$link,
    subNav = _ref2.subNav,
    _ref2$subitem = _ref2.subitem,
    subitem = _ref2$subitem === void 0 ? false : _ref2$subitem,
    props = _objectWithoutProperties(_ref2, [
      "children",
      "LinkComponent",
      "value",
      "className",
      "href",
      "to",
      "type",
      "iconPrefix",
      "icon",
      "hasSubNav",
      "active",
      "subItems",
      "subItemsObjects",
      "useExact",
      "position",
      "onClick",
      "as",
      "linkAs",
      "linkProps",
      "link",
      "subNav",
      "subitem",
    ]);

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1]; // context is used so that we only apply on click outside handler to the top level nav item

  var topLevelSubNavContext = useContext(NavSubNavContext);
  var hasSubNav = forcedHasSubNav || !!subItems || !!subItemsObjects;

  var _isTopLevelSubNav =
    (subNav || hasSubNav) && topLevelSubNavContext === false;

  var Component = type || as;

  var _linkAs = LinkComponent || linkAs;

  var _linkProps = _objectSpread({}, linkProps, {
    href: href,
    to: to,
    iconPrefix: iconPrefix,
    icon: icon,
    active: active,
  });

  var _handleOnClick = function _handleOnClick() {
    if (subNav || hasSubNav) {
      setIsOpen(!isOpen);
    }

    if (onClick) onClick();
  };

  var navLink = link
    ? React.createElement(
        NavLink,
        _extends(
          {
            as: _linkAs,
            collapsed: (subNav || hasSubNav) && isOpen === false,
            onClick: _handleOnClick,
            isToggle: subNav || hasSubNav,
            subitem: subitem,
          },
          _linkProps
        ),
        value || children
      )
    : value || (!hasSubNav && children);
  var wrapperClasses = classnames(
    {
      "nav-item": !subitem,
      dropdown: hasSubNav,
      show: isOpen,
    },
    className
  );

  var _ref = _isTopLevelSubNav
    ? useClickOutside(function() {
        setIsOpen(false);
      }, ref)
    : ref;

  var _navItem = React.createElement(
    Component,
    _extends(
      {
        className: wrapperClasses,
        ref: _ref,
      },
      props
    ),
    React.createElement(
      React.Fragment,
      null,
      navLink,
      subNav &&
        isOpen &&
        React.createElement(
          NavSubNav,
          {
            show: isOpen,
          },
          subNav
        ),
      hasSubNav &&
        isOpen &&
        React.createElement(
          NavSubNav,
          {
            show: isOpen,
          },
          subItems ||
            (subItemsObjects &&
              subItemsObjects.map(function(a, i) {
                return React.createElement(
                  NavItem,
                  _extends(
                    {
                      subitem: true,
                      key: i,
                    },
                    a
                  )
                );
              })) ||
            children
        )
    )
  );

  if (_isTopLevelSubNav) {
    return React.createElement(
      NavSubNavContext.Provider,
      {
        value: true,
      },
      _navItem
    );
  }

  return _navItem;
});

/**
 * A header
 * By default renders a div not a <hX> tag and has no additional spacing classes applied
 */
function Header$1(_ref) {
  var _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.Div : _ref$as,
    RootComponent = _ref.RootComponent,
    className = _ref.className,
    children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 1 : _ref$size,
    props = _objectWithoutProperties(_ref, [
      "as",
      "RootComponent",
      "className",
      "children",
      "size",
    ]);

  var classes = classnames("h".concat(size), className);
  var Component = RootComponent || as;
  return React.createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      props
    ),
    children
  );
}

/**
 * A Header component rendered as a h6 HTML element with a margin below
 */
function H6$1(_ref) {
  var children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "h6" : _ref$as,
    _ref$mt = _ref.mt,
    mt = _ref$mt === void 0 ? 0 : _ref$mt,
    _ref$mb = _ref.mb,
    mb = _ref$mb === void 0 ? 4 : _ref$mb,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 6 : _ref$size,
    props = _objectWithoutProperties(_ref, [
      "children",
      "as",
      "mt",
      "mb",
      "size",
    ]);

  return React.createElement(
    Header$1,
    _extends(
      {
        as: as,
        size: size,
        mt: mt,
        mb: mb,
      },
      props
    ),
    children
  );
}

function NavBarHeading(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ["children", "className"]);

  var classes = classnames("navbar-heading", {}, className);
  return createElement(
    H6$1,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

var Nav$1 = function Nav(_ref) {
  var _ref$as = _ref.as,
    Component = _ref$as === void 0 ? El.Ul : _ref$as,
    className = _ref.className,
    children = _ref.children,
    _ref$tabbed = _ref.tabbed,
    tabbed = _ref$tabbed === void 0 ? false : _ref$tabbed,
    items = _ref.items,
    itemsObjects = _ref.itemsObjects,
    routerContextComponentType = _ref.routerContextComponentType,
    isMenu = _ref.isMenu,
    heading = _ref.heading,
    rest = _objectWithoutProperties(_ref, [
      "as",
      "className",
      "children",
      "tabbed",
      "items",
      "itemsObjects",
      "routerContextComponentType",
      "isMenu",
      "heading",
    ]);

  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    pathName = _useState2[0],
    setPathName = _useState2[1];

  var routerCallback = function routerCallback(location) {
    setPathName(location.pathname);
  };

  var classes = classnames(
    "nav",
    "navbar-nav",
    {
      "navbar-menu": isMenu,
      "nav-tabs": tabbed,
    },
    className
  );
  var element = null;

  if (routerContextComponentType) {
    var routerContextComponentFactory = React.createFactory(
      routerContextComponentType
    );
    element = routerContextComponentFactory({
      callback: routerCallback,
    });
  }

  var _items =
    items ||
    (itemsObjects &&
      itemsObjects.map(function(_ref2, i) {
        var active = _ref2.active,
          restItemProps = _objectWithoutProperties(_ref2, ["active"]);

        return React.createElement(
          NavItem,
          _extends(
            {
              key: i,
              hasSubNav:
                (restItemProps.subItems || restItemProps.subItemsObjects) ===
                true,
            },
            restItemProps
          )
        );
      }));

  var _children = _items || children;

  return React.createElement(
    React.Fragment,
    null,
    element,
    React.createElement(
      Component,
      _extends(
        {
          className: classes,
        },
        rest
      ),
      heading && React.createElement(NavBarHeading, null, heading),
      _children
    )
  );
};

function NavSubItem(_ref) {
  var children = _ref.children,
    as = _ref.as,
    LinkComponent = _ref.LinkComponent,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, [
      "children",
      "as",
      "LinkComponent",
      "value",
    ]);

  var _as = LinkComponent || as;

  var _children = value || children;

  return createElement(
    CompoundDropdown.Item,
    _extends(
      {
        RootComponent: _as,
      },
      props
    ),
    _children
  );
}

function NavSubmenu(_ref) {
  var _ref$as = _ref.as,
    Component = _ref$as === void 0 ? El.Div : _ref$as,
    className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["as", "className", "children"]);

  var classes = classnames(
    {
      nav: true,
      "nav-submenu": true,
    },
    className
  );
  return createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function NavSubmenuItem(_ref) {
  var className = _ref.className,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.A : _ref$as,
    RootComponent = _ref.RootComponent,
    icon = _ref.icon,
    children = _ref.children,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "as",
      "RootComponent",
      "icon",
      "children",
      "active",
    ]);

  var classes = classnames(
    {
      "nav-item": true,
      active: active,
    },
    className
  );
  var Component = RootComponent || as;
  return createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    icon &&
      createElement(
        Fragment,
        null,
        createElement(Icon, {
          name: icon,
        })
      ),
    children
  );
}

function NavBar(_ref) {
  var children = _ref.children,
    className = _ref.className,
    isDark = _ref.isDark,
    isSide = _ref.isSide,
    _ref$side = _ref.side,
    side = _ref$side === void 0 ? "left" : _ref$side,
    expand = _ref.expand,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "isDark",
      "isSide",
      "side",
      "expand",
    ]);

  var classes = classnames(
    "navbar",
    _defineProperty(
      {
        "navbar-vertical": isSide,
        "navbar-dark": isDark,
        "navbar-light": !isDark,
        "navbar-right": side === "right",
      },
      "navbar-expand-".concat(expand),
      expand
    ),
    className
  );
  return createElement(
    El.Nav,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

var CompoundNav = Nav$1;
CompoundNav.displayName = "Nav";
CompoundNav.Item = NavItem;
CompoundNav.SubItem = NavSubItem;
CompoundNav.Link = NavLink;
CompoundNav.LinkTitle = NavLinkTitle;
CompoundNav.Submenu = NavSubmenu;
CompoundNav.SubmenuItem = NavSubmenuItem;
CompoundNav.SubNav = NavSubNav;
CompoundNav.Bar = NavBar;
CompoundNav.BarHeading = NavBarHeading; // export * from "./NavItem";

/**
 * An Icon triggered Dropdown containing Notifications
 */
function NotificationTray(props) {
  var children = props.children,
    unread = props.unread,
    notificationsObjects = props.notificationsObjects,
    markAllAsRead = props.markAllAsRead;
  var notifications = children && Children.toArray(children);
  return createElement(CompoundDropdown, {
    triggerAs: CompoundNav.Link,
    triggerContent:
      unread &&
      createElement("span", {
        className: "badge bg-red",
      }),
    toggle: false,
    icon: "bell",
    isNavLink: true,
    position: "bottom-end",
    arrow: true,
    arrowPosition: "right",
    flex: true,
    items: createElement(
      Fragment,
      null,
      (notifications &&
        notifications.map(function(n, i) {
          return createElement(
            CompoundDropdown.Item,
            {
              className: "d-flex",
              key: i,
            },
            n
          );
        })) ||
        (notificationsObjects &&
          notificationsObjects.map(function(n, i) {
            return createElement(
              CompoundDropdown.Item,
              {
                className: "d-flex ".concat(n.unread ? "bg-light" : ""),
                key: i,
              },
              createElement(Notification, {
                unread: n.unread,
                avatarURL: n.avatarURL,
                message: n.message,
                time: n.time,
              })
            );
          })),
      markAllAsRead &&
        unread &&
        createElement(
          Fragment,
          null,
          createElement(CompoundDropdown.ItemDivider, null),
          createElement(
            CompoundDropdown.Item,
            {
              className: "text-center text-muted-dark",
              onClick: function onClick() {
                return markAllAsRead();
              },
            },
            "Mark all as read"
          )
        )
    ),
  });
}

var CompoundNotification = Notification;
CompoundNotification.Tray = NotificationTray;

var defaultOptions = {
  profile: {
    icon: "user",
    value: "Profile",
    to: "/profile",
  },
  settings: {
    icon: "settings",
    value: "Settings",
    to: "/settings",
  },
  mail: {
    icon: "mail",
    value: "Inbox",
    to: "/mail",
  },
  message: {
    icon: "send",
    value: "Message",
    to: "/message",
  },
  help: {
    icon: "help-circle",
    value: "Need help?",
    to: "/help",
  },
  logout: {
    icon: "log-out",
    value: "Sign out",
    to: "/logout",
  },
  divider: {
    isDivider: true,
  },
};

var itemsFromDefaultOptions = function itemsFromDefaultOptions(options) {
  return options.map(function(opt) {
    return typeof opt === "string" ? defaultOptions[opt] : opt;
  });
};
/**
 * A component for fast creation of an account centric dropdown
 */

function AccountDropdown(_ref) {
  var avatarURL = _ref.avatarURL,
    initials = _ref.initials,
    name = _ref.name,
    description = _ref.description,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    optionsRootComponent = _ref.optionsRootComponent,
    rest = _objectWithoutProperties(_ref, [
      "avatarURL",
      "initials",
      "name",
      "description",
      "options",
      "optionsRootComponent",
    ]);

  var itemsObjects = itemsFromDefaultOptions(options);
  return React.createElement(
    CompoundDropdown,
    _extends(
      {
        as: CompoundNav.Item,
        link: false,
        triggerClassName: "d-flex lh-1 text-reset p-0",
        triggerAs: CompoundNav.Link,
        triggerContent: React.createElement(
          React.Fragment,
          null,
          (avatarURL || initials) &&
            React.createElement(
              Avatar,
              {
                imageURL: avatarURL,
              },
              initials
            ),
          React.createElement(
            "div",
            {
              className: "d-none d-xl-block pl-2",
            },
            React.createElement("div", null, name),
            React.createElement(
              "div",
              {
                className: "mt-1 small text-muted",
              },
              description
            )
          )
        ),
        position: "bottom-end",
        arrow: true,
        arrowPosition: "right",
        toggle: false,
        itemsObject: itemsObjects,
        itemsRootComponent: optionsRootComponent,
      },
      rest
    )
  );
}

var Button$1 = forwardRef(function(_ref, ref) {
  var _cn;

  var size = _ref.size,
    outline = _ref.outline,
    ghost = _ref.ghost,
    link = _ref.link,
    block = _ref.block,
    className = _ref.className,
    children = _ref.children,
    color = _ref.color,
    square = _ref.square,
    pill = _ref.pill,
    icon = _ref.icon,
    _ref$social = _ref.social,
    social = _ref$social === void 0 ? "" : _ref$social,
    loading = _ref.loading,
    active = _ref.active,
    isDropdownToggle = _ref.isDropdownToggle,
    isOption = _ref.isOption,
    _ref$ignoreBtn = _ref.ignoreBtn,
    ignoreBtn = _ref$ignoreBtn === void 0 ? false : _ref$ignoreBtn,
    RootComponent = _ref.RootComponent,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.Button : _ref$as,
    rootRef = _ref.rootRef,
    rest = _objectWithoutProperties(_ref, [
      "size",
      "outline",
      "ghost",
      "link",
      "block",
      "className",
      "children",
      "color",
      "square",
      "pill",
      "icon",
      "social",
      "loading",
      "active",
      "isDropdownToggle",
      "isOption",
      "ignoreBtn",
      "RootComponent",
      "as",
      "rootRef",
    ]);

  var classes = classnames(
    ((_cn = {
      btn: !ignoreBtn,
    }),
    _defineProperty(_cn, "btn-".concat(size), !!size),
    _defineProperty(_cn, "btn-block", block),
    _defineProperty(_cn, "btn-outline-".concat(color), outline && !!color),
    _defineProperty(_cn, "btn-ghost-".concat(color), ghost && !!color),
    _defineProperty(_cn, "btn-link", link),
    _defineProperty(_cn, "disabled", rest.disabled),
    _defineProperty(_cn, "btn-".concat(color), !!color && !outline && !ghost),
    _defineProperty(_cn, "btn-".concat(social), !!social),
    _defineProperty(_cn, "btn-square", square),
    _defineProperty(_cn, "btn-pill", pill),
    _defineProperty(_cn, "btn-icon", !children),
    _defineProperty(_cn, "btn-loading", loading),
    _defineProperty(
      _cn,
      "dropdown-toggle-split",
      isDropdownToggle && !children
    ),
    _defineProperty(_cn, "dropdown-toggle", isDropdownToggle),
    _defineProperty(_cn, "btn-option", isOption),
    _defineProperty(_cn, "active", active),
    _cn),
    className
  );
  var Component = RootComponent || as;
  var childrenForAll = React.createElement(
    React.Fragment,
    null,
    social
      ? React.createElement(Icon, {
          name: social,
          prefix: "fa",
          className: children ? "mr-2" : "",
        })
      : icon
      ? React.createElement(Icon, {
          name: icon,
          className: children ? "mr-2" : "",
        })
      : null,
    children
  );
  return React.createElement(
    Component,
    _extends(
      {
        className: classes,
        ref: rootRef || ref,
      },
      rest
    ),
    childrenForAll
  );
});

function ButtonList(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? "" : _ref$align,
    props = _objectWithoutProperties(_ref, ["className", "children", "align"]);

  var classes = classnames(
    _defineProperty(
      {
        "btn-list": true,
      },
      "text-".concat(align),
      !!align
    ),
    className
  );
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      props
    ),
    children
  );
}

var ButtonDropdown = function ButtonDropdown(_ref) {
  var children = _ref.children,
    value = _ref.value,
    dropdownProps = _ref.dropdownProps,
    buttonProps = _objectWithoutProperties(_ref, [
      "children",
      "value",
      "dropdownProps",
    ]);

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];

  var _handleButtonOnClick = function _handleButtonOnClick(e) {
    e.preventDefault();
    setIsOpen(function(s) {
      return !s;
    });
  };

  return React.createElement(
    Manager,
    null,
    React.createElement(Reference, null, function(_ref2) {
      var ref = _ref2.ref;
      return React.createElement(
        Button$1,
        _extends(
          {
            onClick: _handleButtonOnClick,
            rootRef: ref,
            isDropdownToggle: true,
          },
          buttonProps
        ),
        value
      );
    }),
    React.createElement(
      DropdownMenu,
      _extends(
        {
          show: isOpen,
        },
        dropdownProps
      ),
      children
    )
  );
};

var CompoundButton = Button$1;
CompoundButton.List = ButtonList;
CompoundButton.Dropdown = ButtonDropdown;

var Alert = function Alert(_ref) {
  var className = _ref.className,
    style = _ref.style,
    children = _ref.children,
    type = _ref.type,
    icon = _ref.icon,
    hasExtraSpace = _ref.hasExtraSpace,
    isDismissible = _ref.isDismissible,
    avatar = _ref.avatar,
    onDismissClick = _ref.onDismissClick,
    onClick = _ref.onClick,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    onPointerEnter = _ref.onPointerEnter,
    onPointerLeave = _ref.onPointerLeave;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDismissed = _useState2[0],
    setIsDismissed = _useState2[1];

  var _handleOnDismissClick = function _handleOnDismissClick() {
    if (onDismissClick) onDismissClick();
    setIsDismissed(true);
  };

  var classes = classnames(
    "alert",
    "alert-".concat(type),
    {
      "alert-icon": !!icon,
      "mt-5 mb-6": hasExtraSpace,
      "alert-dismissible": isDismissible,
      "alert-avatar": !!avatar,
    },
    className
  );
  var events = {
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onPointerEnter: onPointerEnter,
    onPointerLeave: onPointerLeave,
  };

  if (isDismissed) {
    return null;
  }

  return React.createElement(
    "div",
    _extends({}, events, {
      className: classes,
      style: style,
      role: "alert",
    }),
    isDismissible &&
      React.createElement(CompoundButton, {
        className: "close",
        onClick: _handleOnDismissClick,
      }),
    avatar &&
      React.createElement(Avatar, {
        imageURL: avatar,
      }),
    icon &&
      React.createElement(Icon, {
        name: icon,
        className: "mr-2",
        isAriaHidden: true,
      }),
    children
  );
};

/**
 * Renders an anchor that stands out more within Alerts
 */
function AlertLink(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ["children", "className"]);

  var classes = classnames("alert-link", className);
  return createElement(
    El.A,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

var CompoundAlert = Alert;
CompoundAlert.Link = AlertLink;

function CardHeader(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$backgroundURL = _ref.backgroundURL,
    backgroundURL = _ref$backgroundURL === void 0 ? "" : _ref$backgroundURL,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "backgroundURL",
    ]);

  var classes = classnames("card-header", className);
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
        style: backgroundURL
          ? Object.assign({
              backgroundImage: "url(".concat(backgroundURL, ")"),
            })
          : null,
      },
      rest
    ),
    children
  );
}

function CardTitle(_ref) {
  var className = _ref.className,
    children = _ref.children,
    RootComponent = _ref.RootComponent,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.H3 : _ref$as,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "RootComponent",
      "as",
    ]);

  var classes = classnames("card-title", className);
  var Component = RootComponent || as;
  return createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function CardBody(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var _className = classnames("card-body", className);

  return React.createElement(
    El.Div,
    _extends(
      {
        className: _className,
      },
      rest
    ),
    children
  );
}

function CardOptions(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("card-options", className);
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function CardOptionsItem(_ref) {
  var className = _ref.className,
    children = _ref.children,
    icon = _ref.icon,
    type = _ref.type,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "icon",
      "type",
    ]);

  var classes = classnames(
    {
      "card-options-collapse": type === "collapse",
      "card-options-remove": type === "close",
      "card-options-fullscreen": type === "fullscreen",
    },
    className
  );

  var dataToggle = (function() {
    switch (type) {
      case "collapse":
        return "card-collapse";

      case "close":
        return "card-remove";

      case "fullscreen":
        return "card-remove";

      default:
        return "";
    }
  })();

  var iconName = (function() {
    if (icon) {
      return icon;
    }

    switch (type) {
      case "collapse":
        return "chevron-up";

      case "close":
        return "x";

      case "fullscreen":
        return "maximize";

      default:
        return "";
    }
  })();

  return createElement(
    El.A,
    _extends(
      {
        className: classes,
        "data-toggle": dataToggle,
      },
      rest
    ),
    createElement(Icon, {
      name: iconName,
    })
  );
}

function CardStatus(_ref) {
  var _cn;

  var className = _ref.className,
    children = _ref.children,
    color = _ref.color,
    side = _ref.side,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "color",
      "side",
    ]);

  var classes = classnames(
    ((_cn = {
      "card-status": true,
    }),
    _defineProperty(_cn, "bg-".concat(color), true),
    _defineProperty(_cn, "card-status-left", side),
    _cn),
    className
  );
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function CardAlert(_ref) {
  var className = _ref.className,
    children = _ref.children,
    color = _ref.color,
    rest = _objectWithoutProperties(_ref, ["className", "children", "color"]);

  var classes = classnames(
    "card-alert alert alert-".concat(color, " mb-0"),
    className
  );
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function CardFooter(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("card-footer", className);
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

var Card = function Card(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.Div : _ref$as,
    RootComponent = _ref.RootComponent,
    title = _ref.title,
    body = _ref.body,
    options = _ref.options,
    isCollapsible = _ref.isCollapsible,
    isClosable = _ref.isClosable,
    isFullscreenable = _ref.isFullscreenable,
    aside = _ref.aside,
    statusColor = _ref.statusColor,
    statusSide = _ref.statusSide,
    alert = _ref.alert,
    alertColor = _ref.alertColor,
    footer = _ref.footer,
    isClosed = _ref.isClosed,
    isCollapsed = _ref.isCollapsed,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "as",
      "RootComponent",
      "title",
      "body",
      "options",
      "isCollapsible",
      "isClosable",
      "isFullscreenable",
      "aside",
      "statusColor",
      "statusSide",
      "alert",
      "alertColor",
      "footer",
      "isClosed",
      "isCollapsed",
    ]);

  var _useState = useState(isClosed || false),
    _useState2 = _slicedToArray(_useState, 2),
    _isClosed = _useState2[0],
    setIsClosed = _useState2[1];

  var _useState3 = useState(isCollapsed || false),
    _useState4 = _slicedToArray(_useState3, 2),
    _isCollapsed = _useState4[0],
    setIsCollapsed = _useState4[1];

  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isFullscreen = _useState6[0],
    setIsFullscreen = _useState6[1];

  var handleCloseOnClick = function handleCloseOnClick() {
    setIsClosed(function(s) {
      return !s;
    });
  };

  var handleCollapseOnClick = function handleCollapseOnClick() {
    setIsCollapsed(function(s) {
      return !s;
    });
  };

  var handleFullscreenOnClick = function handleFullscreenOnClick() {
    setIsFullscreen(function(s) {
      return !s;
    });
  };

  if (_isClosed) {
    return null;
  }

  var classes = classnames(
    {
      card: true,
      aside: aside,
      "card-collapsed": _isCollapsed,
      "card-fullscreen": isFullscreen,
    },
    className
  );
  var Component = RootComponent || as;
  var card_options =
    (options || isCollapsible || isClosable) &&
    React.createElement(
      CardOptions,
      null,
      options,
      isCollapsible &&
        React.createElement(CardOptionsItem, {
          onClick: handleCollapseOnClick,
          type: "collapse",
        }),
      isFullscreenable &&
        React.createElement(CardOptionsItem, {
          type: "fullscreen",
          onClick: handleFullscreenOnClick,
        }),
      isClosable &&
        React.createElement(CardOptionsItem, {
          type: "close",
          onClick: handleCloseOnClick,
        })
    );
  var card_status =
    statusColor &&
    React.createElement(CardStatus, {
      color: statusColor,
      side: statusSide,
    });
  var card_alert =
    alert &&
    alertColor &&
    React.createElement(
      CardAlert,
      {
        color: alertColor,
      },
      alert
    );
  var card_header =
    title &&
    React.createElement(
      CardHeader,
      null,
      React.createElement(CardTitle, null, title),
      card_options
    );
  var card_body = body && React.createElement(CardBody, null, body);
  var card_footer = footer && React.createElement(CardFooter, null, footer);

  if (card_header !== null || card_body !== null) {
    return React.createElement(
      Component,
      _extends(
        {
          className: classes,
        },
        rest
      ),
      card_status,
      card_header,
      card_alert,
      card_body || children,
      card_footer
    );
  }

  return React.createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}; // static Header = CardHeader;

function CardMap(_ref) {
  var className = _ref.className,
    children = _ref.children,
    placeholder = _ref.placeholder,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "placeholder",
    ]);

  var classes = classnames(
    "card-map",
    {
      "card-map-placeholder": placeholder,
    },
    className
  );
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
        style: placeholder
          ? {
              backgroundImage: "url(".concat(placeholder, ")"),
            }
          : {},
      },
      rest
    ),
    children
  );
}

var CompoundCard = Card;
CompoundCard.Alert = CardAlert;
CompoundCard.Body = CardBody;
CompoundCard.Footer = CardFooter;
CompoundCard.Header = CardHeader;
CompoundCard.Map = CardMap;
CompoundCard.Options = CardOptions;
CompoundCard.OptionsItem = CardOptionsItem;
CompoundCard.Status = CardStatus;
CompoundCard.Title = CardTitle;

function BlogCard(_ref) {
  var children = _ref.children,
    title = _ref.title,
    description = _ref.description,
    avatarUrl = _ref.avatarUrl,
    imgUrl = _ref.imgUrl,
    imgAlt = _ref.imgAlt,
    aside = _ref.aside,
    authorName = _ref.authorName,
    date = _ref.date,
    _ref$imgSrc = _ref.imgSrc,
    imgSrc = _ref$imgSrc === void 0 ? "" : _ref$imgSrc,
    _ref$avatarImgSrc = _ref.avatarImgSrc,
    avatarImgSrc = _ref$avatarImgSrc === void 0 ? "" : _ref$avatarImgSrc,
    iconName = _ref.iconName,
    iconHref = _ref.iconHref,
    postHref = _ref.postHref,
    profileHref = _ref.profileHref;
  return !aside
    ? createElement(
        CompoundCard,
        null,
        createElement(
          "a",
          {
            href: postHref,
          },
          createElement("img", {
            className: "card-img-top",
            src: imgSrc,
            alt: imgAlt,
          })
        ),
        createElement(
          CompoundCard.Body,
          {
            className: "d-flex flex-column",
          },
          createElement(
            "h4",
            null,
            createElement(
              "a",
              {
                href: postHref,
              },
              title
            )
          ),
          createElement(
            "div",
            {
              className: "text-muted",
            },
            description
          ),
          createElement(
            "div",
            {
              className: "d-flex align-items-center pt-5 mt-auto",
            },
            createElement("div", {
              className: "avatar avatar-md mr-3",
              style: {
                backgroundImage: "url(".concat(avatarImgSrc),
              },
            }),
            createElement(
              "div",
              null,
              createElement(
                "a",
                {
                  href: profileHref,
                  className: "text-default",
                },
                authorName
              ),
              createElement(
                "small",
                {
                  className: "d-block text-muted",
                },
                date
              )
            ),
            createElement(
              "div",
              {
                className: "ml-auto text-muted",
              },
              createElement(
                "a",
                {
                  href: iconHref,
                  className: "icon d-none d-md-inline-block ml-3",
                },
                createElement(Icon, {
                  prefix: "fe",
                  name: iconName || "heart",
                })
              )
            )
          )
        )
      )
    : createElement(
        CompoundCard,
        {
          className: "card-aside",
        },
        createElement(
          "a",
          {
            href: postHref,
            className: "card-aside-column",
            style: {
              backgroundImage: "url(".concat(imgSrc, ")"),
            },
          },
          ""
        ),
        createElement(
          CompoundCard.Body,
          {
            className: "d-flex flex-column",
          },
          createElement(
            "h4",
            null,
            createElement(
              "a",
              {
                href: postHref,
              },
              title
            )
          ),
          createElement(
            "div",
            {
              className: "text-muted",
            },
            description
          ),
          createElement(
            "div",
            {
              className: "d-flex align-items-center pt-5 mt-auto",
            },
            createElement("div", {
              className: "avatar avatar-md mr-3",
              style: {
                backgroundImage: "url(".concat(avatarImgSrc),
              },
            }),
            createElement(
              "div",
              null,
              createElement(
                "a",
                {
                  href: profileHref,
                  className: "text-default",
                },
                authorName
              ),
              createElement(
                "small",
                {
                  className: "d-block text-muted",
                },
                date
              )
            ),
            createElement(
              "div",
              {
                className: "ml-auto text-red",
              },
              createElement(
                "a",
                {
                  href: iconHref,
                  className: "icon d-none d-md-inline-block ml-3",
                },
                createElement(Icon, {
                  prefix: "fe",
                  name: iconName || "heart",
                })
              )
            )
          )
        )
      );
}

/**
 * Breadcrumbs
 */
function Breadcrumb(_ref) {
  var children = _ref.children,
    className = _ref.className,
    separator = _ref.separator,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "separator",
    ]);

  var classes = classnames(
    "breadcrumb",
    _defineProperty(
      {},
      "breadcrumb-".concat(separator, "s"),
      separator && separator !== "slash"
    ),
    className
  );
  return React.createElement(
    El.Ol,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

/**
 * Breadcrumb Item
 */
function BreadcrumbItem(_ref) {
  var children = _ref.children,
    className = _ref.className,
    active = _ref.active,
    rest = _objectWithoutProperties(_ref, ["children", "className", "active"]);

  var classes = classnames(
    "breadcrumb-item",
    {
      active: active,
    },
    className
  );
  return React.createElement(
    El.Li,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

var CompoundBreadcrumb = Breadcrumb;
CompoundBreadcrumb.Item = BreadcrumbItem;

function ListItem(_ref) {
  var className = _ref.className,
    children = _ref.children,
    inline = _ref.inline,
    rest = _objectWithoutProperties(_ref, ["className", "children", "inline"]);

  var classes = classnames(
    {
      "list-item": !inline,
      "list-inline-item": inline,
    },
    className
  );
  return createElement(
    El.Li,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function ListGroup(_ref) {
  var className = _ref.className,
    children = _ref.children,
    transparent = _ref.transparent,
    isCardBody = _ref.isCardBody,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "transparent",
      "isCardBody",
    ]);

  var classes = classnames(
    "list-group",
    "mb-0",
    {
      "list-group-transparent": transparent,
      "card-list-group": isCardBody,
    },
    className
  );
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function ListGroupItem(_ref) {
  var className = _ref.className,
    children = _ref.children,
    RootComponent = _ref.RootComponent,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.A : _ref$as,
    active = _ref.active,
    action = _ref.action,
    icon = _ref.icon,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "RootComponent",
      "as",
      "active",
      "action",
      "icon",
    ]);

  var classes = classnames(
    "list-group-item",
    {
      "list-group-item-action": action,
    },
    {
      active: active,
    },
    className
  );
  var Component = RootComponent || as;
  return createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    icon &&
      createElement(
        "span",
        {
          className: "mr-3 icon",
        },
        createElement(Icon, {
          prefix: "fe",
          name: icon,
        }),
        " "
      ),
    children
  );
}

function List(_ref) {
  var className = _ref.className,
    as = _ref.as,
    children = _ref.children,
    unstyled = _ref.unstyled,
    seperated = _ref.seperated,
    inline = _ref.inline,
    hoverable = _ref.hoverable,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "as",
      "children",
      "unstyled",
      "seperated",
      "inline",
      "hoverable",
    ]);

  var classes = classnames(
    {
      list: !unstyled,
      "list-unstyled": unstyled,
      "list-seperated": seperated,
      "list-inline": inline,
      "list-hoverable": hoverable,
    },
    className
  );
  var Component = as || El.Ul;
  return createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

List.Item = ListItem;
List.Group = ListGroup;
List.GroupItem = ListGroupItem;

function Media(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rounded = _ref.rounded,
    aspectRatio = _ref.aspectRatio,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "rounded",
      "aspectRatio",
    ]);

  var classes = classnames(
    "media",
    _defineProperty(
      {
        rounded: rounded,
      },
      "media-".concat(aspectRatio),
      aspectRatio
    ),
    className
  );
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function MediaBody(_ref) {
  var className = _ref.className,
    children = _ref.children;
  var classes = classnames("media-body", className);
  return createElement(
    "div",
    {
      className: classes,
    },
    children
  );
}

function MediaHeading(_ref) {
  var className = _ref.className,
    children = _ref.children;
  var classes = classnames("media-heading", className);
  return createElement(
    "div",
    {
      className: classes,
    },
    children
  );
}

function MediaList(_ref) {
  var className = _ref.className,
    children = _ref.children;
  var classes = classnames("media-list", className);
  return createElement(
    "ul",
    {
      className: classes,
    },
    children
  );
}

function MediaObject(_ref) {
  var className = _ref.className,
    children = _ref.children,
    avatar = _ref.avatar,
    objectURL = _ref.objectURL,
    size = _ref.size,
    rounded = _ref.rounded,
    alt = _ref.alt;
  var classes = classnames("media-object", className);
  var imageClasses = classnames({
    "d-flex": true,
    rounded: rounded,
  });
  var mediaImage = avatar
    ? createElement(Avatar, {
        size: size,
        imageURL: objectURL,
      })
    : objectURL
    ? createElement("img", {
        className: imageClasses,
        src: objectURL,
        alt: alt,
      })
    : null;
  return createElement(
    "div",
    {
      className: classes,
    },
    mediaImage,
    children
  );
}

function listItemFromObjectFactory() {
  var asButtons =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var iconPrefix = arguments.length > 1 ? arguments[1] : undefined;
  return function(item, index) {
    var itemContent = asButtons
      ? createElement(
          CompoundButton,
          {
            to: item.to,
            social: item.name,
            color: item.color,
            size: "sm",
          },
          item.label
        )
      : createElement(
          "a",
          {
            href: item.to,
            "data-original-title": item.tooltip,
          },
          createElement(Icon, {
            prefix: iconPrefix,
            name: item.name,
          })
        );
    return createElement(
      List.Item,
      {
        key: index,
        inline: true,
      },
      itemContent
    );
  };
}

function SocialNetworksList(props) {
  var children = props.children,
    className = props.className,
    asButtons = props.asButtons,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? "fe" : _props$prefix,
    items = props.items,
    itemsObjects = props.itemsObjects;
  var classes = classnames("social-links", className);
  var getObjectListItem = listItemFromObjectFactory(asButtons, prefix);
  var contents =
    (itemsObjects && itemsObjects.map(getObjectListItem)) ||
    (items &&
      items.map(function(item, index) {
        return createElement(
          List.Item,
          {
            key: index,
            inline: true,
          },
          item
        );
      })) ||
    children;
  return createElement(
    List,
    {
      inline: true,
      className: classes,
    },
    contents
  );
}

var Tooltip = function Tooltip(_ref) {
  var className = _ref.className,
    children = _ref.children,
    placement = _ref.placement,
    content = _ref.content,
    _ref$arrow = _ref.arrow,
    arrow = _ref$arrow === void 0 ? true : _ref$arrow,
    _ref$clickable = _ref.clickable,
    clickable = _ref$clickable === void 0 ? false : _ref$clickable;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShown = _useState2[0],
    setIsShown = _useState2[1];

  var _handleTriggerOnMouseEnter = function _handleTriggerOnMouseEnter(e) {
    e.preventDefault();
    setIsShown(true);
  };

  var _handleTriggerOnMouseLeave = function _handleTriggerOnMouseLeave(e) {
    e.preventDefault();
    setIsShown(false);
  };

  var _handleTriggerOnClick = function _handleTriggerOnClick(e) {
    e.preventDefault();
    setIsShown(function(s) {
      return !s;
    });
  };

  var classes = classnames(
    "popover",
    placement && "bs-popover-" + placement,
    "show", // "bg-red",
    // "fade",
    className
  );
  var arrowClasses = classnames(
    "arrow",
    placement === "top" || placement === "bottom"
      ? "tbr-arrow-vertical"
      : "tbr-arrow-horizontal"
  );
  return React.createElement(
    Manager,
    null,
    React.createElement(Reference, null, function(_ref2) {
      var ref = _ref2.ref;
      var referenceProps = {
        ref: ref,
        onClick: clickable ? _handleTriggerOnClick : null,
        onMouseEnter: !clickable ? _handleTriggerOnMouseEnter : null,
        onMouseLeave: !clickable ? _handleTriggerOnMouseLeave : null,
      };
      return (
        typeof children !== "undefined" &&
        React.cloneElement(children, referenceProps)
      );
    }),
    isShown &&
      React.createElement(
        Popper$1,
        {
          placement: placement,
          eventsEnabled: true,
          positionFixed: false,
        },
        function(_ref3) {
          var ref = _ref3.ref,
            style = _ref3.style,
            placement = _ref3.placement,
            arrowProps = _ref3.arrowProps;
          return React.createElement(
            "div",
            {
              className: classes,
              "data-placement": placement,
              style: style,
              ref: ref,
            },
            arrow &&
              React.createElement("div", {
                className: "popover-arrow",
                ref: arrowProps.ref,
                "data-placement": placement,
                style: arrowProps.style,
              }),
            React.createElement(
              "div",
              {
                className: "popover-body",
              },
              content
            )
          );
        }
      )
  );
};

function MediaBodySocial(_ref) {
  var className = _ref.className,
    children = _ref.children,
    name = _ref.name,
    workTitle = _ref.workTitle,
    _ref$facebook = _ref.facebook,
    facebook = _ref$facebook === void 0 ? "" : _ref$facebook,
    _ref$twitter = _ref.twitter,
    twitter = _ref$twitter === void 0 ? "" : _ref$twitter,
    _ref$phone = _ref.phone,
    phone = _ref$phone === void 0 ? "" : _ref$phone,
    _ref$skype = _ref.skype,
    skype = _ref$skype === void 0 ? "" : _ref$skype;
  var fbIcon;
  var twitterIcon;
  var phoneIcon;
  var skypeIcon;

  if (facebook) {
    fbIcon = createElement(
      List.Item,
      {
        inline: true,
      },
      createElement(
        Tooltip,
        {
          content: "Facebook",
          placement: "top",
        },
        createElement(
          "a",
          {
            href: "/Profile",
          },
          createElement(Icon, {
            prefix: "fa",
            name: "facebook",
          })
        )
      )
    );
  }

  if (twitter) {
    twitterIcon = createElement(
      List.Item,
      {
        inline: true,
      },
      createElement(
        Tooltip,
        {
          content: "Twitter",
          placement: "top",
        },
        createElement(
          "a",
          {
            href: "/Profile",
          },
          createElement(Icon, {
            prefix: "fa",
            name: "twitter",
          })
        )
      )
    );
  }

  if (phone) {
    phoneIcon = createElement(
      List.Item,
      {
        inline: true,
      },
      createElement(
        Tooltip,
        {
          content: "+1 234-567-8901",
          placement: "top",
        },
        createElement(
          "a",
          {
            href: "/Profile",
          },
          createElement(Icon, {
            prefix: "fa",
            name: "phone",
          })
        )
      )
    );
  }

  if (skype) {
    skypeIcon = createElement(
      List.Item,
      {
        inline: true,
      },
      createElement(
        Tooltip,
        {
          content: "@skypename",
          placement: "top",
        },
        createElement(
          "a",
          {
            href: "/Profile",
          },
          createElement(Icon, {
            prefix: "fa",
            name: "skype",
          })
        )
      )
    );
  }

  return createElement(
    MediaBody,
    null,
    createElement(
      "h4",
      {
        className: "m-0",
      },
      name
    ),
    createElement(
      "p",
      {
        className: "text-muted mb-0",
      },
      workTitle
    ),
    createElement(
      SocialNetworksList,
      {
        className: "mb-0 mt-2",
      },
      fbIcon,
      twitterIcon,
      phoneIcon,
      skypeIcon
    ),
    children
  );
}

function MediaListItem(_ref) {
  var className = _ref.className,
    children = _ref.children;
  var classes = classnames("media mt-4", className);
  return createElement(
    "li",
    {
      className: classes,
    },
    children
  );
}

function MediaContent(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("media-content", className);
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

var CompoundMedia = Media;
CompoundMedia.Body = MediaBody;
CompoundMedia.BodySocial = MediaBodySocial;
CompoundMedia.Heading = MediaHeading;
CompoundMedia.List = MediaList;
CompoundMedia.ListItem = MediaListItem;
CompoundMedia.Object = MediaObject;
CompoundMedia.Content = MediaContent;

function CommentList(_ref) {
  var className = _ref.className,
    children = _ref.children;
  var classes = classnames("card-list-group", className);
  return createElement(
    List.Group,
    {
      className: classes,
    },
    children
  );
}

function CommentReply(_ref) {
  var className = _ref.className,
    children = _ref.children,
    avatarURL = _ref.avatarURL,
    name = _ref.name,
    date = _ref.date,
    text = _ref.text;
  return createElement(
    CompoundMedia.ListItem,
    {
      className: className,
    },
    createElement(CompoundMedia.Object, {
      avatar: true,
      objectURL: avatarURL,
      className: "mr-4",
    }),
    createElement(
      CompoundMedia.Body,
      null,
      createElement("strong", null, name, ": "),
      text
    )
  );
}

function Comment(_ref) {
  var className = _ref.className,
    children = _ref.children,
    avatarURL = _ref.avatarURL,
    name = _ref.name,
    date = _ref.date,
    text = _ref.text,
    replies = _ref.replies;
  var classes = classnames("py-5", className);
  return createElement(
    List.GroupItem,
    {
      className: classes,
    },
    createElement(
      CompoundMedia,
      null,
      createElement(CompoundMedia.Object, {
        avatar: true,
        objectURL: avatarURL,
        size: "md",
        className: "mr-4",
      }),
      createElement(
        CompoundMedia.Body,
        null,
        createElement(
          CompoundMedia.Heading,
          null,
          createElement(
            "small",
            {
              className: "float-right text-muted",
            },
            date
          ),
          createElement("h5", null, name)
        ),
        createElement(CompoundText, null, text),
        replies && createElement(CompoundMedia.List, null, replies)
      )
    )
  );
}

Comment.List = CommentList;
Comment.Reply = CommentReply;

function Form$1(_ref) {
  var children = _ref.children,
    _ref$as = _ref.as,
    Component = _ref$as === void 0 ? El.Form : _ref$as,
    rest = _objectWithoutProperties(_ref, ["children", "as"]);

  return React.createElement(Component, rest, children);
}

function FormLabel(_ref) {
  var className = _ref.className,
    aside = _ref.aside,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "aside", "children"]);

  var classes = classnames("form-label", className);
  return React.createElement(
    El.Label,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    aside &&
      React.createElement(
        "span",
        {
          className: "form-label-description",
        },
        aside
      ),
    children
  );
}

function FormGroup(_ref) {
  var className = _ref.className,
    children = _ref.children,
    label = _ref.label,
    isRequired = _ref.isRequired,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "label",
      "isRequired",
    ]);

  var classes = classnames("form-group", className);
  var labelClasses = classnames({
    required: isRequired,
  });
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    !label
      ? null
      : typeof label === "string"
      ? React.createElement(
          FormLabel,
          {
            className: labelClasses,
          },
          label
        )
      : label,
    children
  );
}

function Spinner(_ref) {
  var className = _ref.className,
    children = _ref.children,
    small = _ref.small,
    grow = _ref.grow,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "small",
      "grow",
    ]);

  var classes = classnames(
    {
      "spinner-grow": grow,
      "spinner-border": !grow,
      "spinner-border-sm": !grow && small,
    },
    className
  );
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

/**
 * A an input field
 */
var FormInput = forwardRef(function(_ref, ref) {
  var className = _ref.className,
    icon = _ref.icon,
    spinner = _ref.spinner,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "prepend" : _ref$position,
    valid = _ref.valid,
    tick = _ref.tick,
    invalid = _ref.invalid,
    cross = _ref.cross,
    error = _ref.error,
    label = _ref.label,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "text" : _ref$type,
    feedback = _ref.feedback,
    light = _ref.light,
    rounded = _ref.rounded,
    flush = _ref.flush,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "icon",
      "spinner",
      "position",
      "valid",
      "tick",
      "invalid",
      "cross",
      "error",
      "label",
      "type",
      "feedback",
      "light",
      "rounded",
      "flush",
    ]);

  var classes = classnames(
    {
      "form-control": type !== "checkbox" && type !== "radio",
      "form-control-light": light,
      "form-control-rounded": rounded,
      "form-control-flush": flush,
      // "custom-control-input": type === "checkbox" || type === "radio",
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid || !!error,
      "state-invalid": cross || !!error,
    },
    className
  );

  var _feedback = error || feedback;

  var allInputProps = _objectSpread(
    {
      className: classes,
      type: type,
    },
    rest
  );

  var _children =
    !icon && !spinner
      ? React.createElement(
          React.Fragment,
          null,
          React.createElement(
            El.Input,
            _extends(
              {
                ref: ref,
              },
              allInputProps
            )
          ),
          _feedback &&
            React.createElement(
              "span",
              {
                className: "invalid-feedback",
              },
              _feedback
            )
        )
      : React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "div",
            {
              className: "input-icon",
            },
            position === "prepend" &&
              React.createElement(
                "span",
                {
                  className: "input-icon-addon",
                },
                spinner &&
                  React.createElement(Spinner, {
                    small: true,
                  }),
                icon &&
                  React.createElement(Icon, {
                    name: icon,
                  })
              ),
            React.createElement(
              El.Input,
              _extends(
                {
                  ref: ref,
                },
                allInputProps
              )
            ),
            position === "append" &&
              React.createElement(
                "span",
                {
                  className: "input-icon-addon",
                },
                spinner &&
                  React.createElement(Spinner, {
                    small: true,
                  }),
                icon &&
                  React.createElement(Icon, {
                    name: icon,
                  })
              )
          ),
          _feedback &&
            React.createElement(
              "span",
              {
                className: "invalid-feedback",
              },
              _feedback
            )
        );

  return label
    ? React.createElement(
        FormGroup,
        {
          label: label,
        },
        _children
      )
    : _children;
});

function FormStaticText(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    El.Div,
    _extends(
      {
        classNames: "form-control-plaintext",
      },
      rest
    ),
    children
  );
}

function FormTextarea(_ref) {
  var className = _ref.className,
    valid = _ref.valid,
    tick = _ref.tick,
    invalid = _ref.invalid,
    cross = _ref.cross,
    error = _ref.error,
    children = _ref.children,
    label = _ref.label,
    feedback = _ref.feedback,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "valid",
      "tick",
      "invalid",
      "cross",
      "error",
      "children",
      "label",
      "feedback",
    ]);

  var classes = classnames(
    "form-control",
    {
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid || !!error,
      "state-invalid": cross || !!error,
    },
    className
  );

  var _feedback = error || feedback;

  if (children) {
    rest.value = children;
  }

  var contents = React.createElement(
    React.Fragment,
    null,
    React.createElement(
      El.Textarea,
      _extends(
        {
          className: classes,
        },
        rest
      )
    ),
    _feedback &&
      React.createElement(
        "span",
        {
          className: "invalid-feedback",
        },
        _feedback
      )
  );
  return label
    ? React.createElement(
        FormGroup,
        {
          label: label,
        },
        contents
      )
    : contents;
}

function GridRow(_ref) {
  var _cn;

  var className = _ref.className,
    children = _ref.children,
    cards = _ref.cards,
    deck = _ref.deck,
    gutters = _ref.gutters,
    _ref$alignItems = _ref.alignItems,
    alignItems = _ref$alignItems === void 0 ? "" : _ref$alignItems,
    _ref$justifyContent = _ref.justifyContent,
    justifyContent = _ref$justifyContent === void 0 ? "" : _ref$justifyContent,
    props = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "cards",
      "deck",
      "gutters",
      "alignItems",
      "justifyContent",
    ]);

  var classes = classnames(
    "row",
    ((_cn = {
      "row-cards": cards,
      "row-deck": deck,
    }),
    _defineProperty(_cn, "gutters-".concat(gutters), gutters),
    _defineProperty(_cn, "align-items-".concat(alignItems), alignItems),
    _defineProperty(
      _cn,
      "justify-content-".concat(justifyContent),
      justifyContent
    ),
    _cn),
    className
  );
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      props
    ),
    children
  );
}

function GridCol(_ref) {
  var _cn;

  var className = _ref.className,
    children = _ref.children,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 0 : _ref$width,
    _ref$xs = _ref.xs,
    xs = _ref$xs === void 0 ? 0 : _ref$xs,
    _ref$sm = _ref.sm,
    sm = _ref$sm === void 0 ? 0 : _ref$sm,
    _ref$md = _ref.md,
    md = _ref$md === void 0 ? 0 : _ref$md,
    _ref$lg = _ref.lg,
    lg = _ref$lg === void 0 ? 0 : _ref$lg,
    _ref$xl = _ref.xl,
    xl = _ref$xl === void 0 ? 0 : _ref$xl,
    xsAuto = _ref.xsAuto,
    smAuto = _ref.smAuto,
    mdAuto = _ref.mdAuto,
    lgAuto = _ref.lgAuto,
    xlAuto = _ref.xlAuto,
    auto = _ref.auto,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 0 : _ref$offset,
    _ref$offsetXs = _ref.offsetXs,
    offsetXs = _ref$offsetXs === void 0 ? 0 : _ref$offsetXs,
    _ref$offsetSm = _ref.offsetSm,
    offsetSm = _ref$offsetSm === void 0 ? 0 : _ref$offsetSm,
    _ref$offsetMd = _ref.offsetMd,
    offsetMd = _ref$offsetMd === void 0 ? 0 : _ref$offsetMd,
    _ref$offsetLg = _ref.offsetLg,
    offsetLg = _ref$offsetLg === void 0 ? 0 : _ref$offsetLg,
    _ref$offsetXl = _ref.offsetXl,
    offsetXl = _ref$offsetXl === void 0 ? 0 : _ref$offsetXl,
    order = _ref.order,
    orderXs = _ref.orderXs,
    orderSm = _ref.orderSm,
    orderMd = _ref.orderMd,
    orderLg = _ref.orderLg,
    orderXl = _ref.orderXl,
    _ref$ignoreCol = _ref.ignoreCol,
    ignoreCol = _ref$ignoreCol === void 0 ? false : _ref$ignoreCol,
    props = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "width",
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "xsAuto",
      "smAuto",
      "mdAuto",
      "lgAuto",
      "xlAuto",
      "auto",
      "offset",
      "offsetXs",
      "offsetSm",
      "offsetMd",
      "offsetLg",
      "offsetXl",
      "order",
      "orderXs",
      "orderSm",
      "orderMd",
      "orderLg",
      "orderXl",
      "ignoreCol",
    ]);

  var classes = classnames(
    ((_cn = {
      col: !ignoreCol,
    }),
    _defineProperty(_cn, "col-".concat(width), width),
    _defineProperty(_cn, "col-xs-".concat(xs), xs),
    _defineProperty(_cn, "col-xs-auto", xsAuto),
    _defineProperty(_cn, "col-sm-".concat(sm), sm),
    _defineProperty(_cn, "col-sm-auto", smAuto),
    _defineProperty(_cn, "col-md-".concat(md), md),
    _defineProperty(_cn, "col-md-auto", mdAuto),
    _defineProperty(_cn, "col-lg-".concat(lg), lg),
    _defineProperty(_cn, "col-lg-auto", lgAuto),
    _defineProperty(_cn, "col-xl-".concat(xl), xl),
    _defineProperty(_cn, "col-xl-auto", xlAuto),
    _defineProperty(_cn, "col-auto", auto),
    _defineProperty(_cn, "offset-".concat(offset), offset),
    _defineProperty(_cn, "offset-xs-".concat(offsetXs), offsetXs),
    _defineProperty(_cn, "offset-sm-".concat(offsetSm), offsetSm),
    _defineProperty(_cn, "offset-md-".concat(offsetMd), offsetMd),
    _defineProperty(_cn, "offset-lg-".concat(offsetLg), offsetLg),
    _defineProperty(_cn, "offset-xl-".concat(offsetXl), offsetXl),
    _defineProperty(_cn, "order-".concat(order), order),
    _defineProperty(_cn, "order-xs-".concat(orderXs), orderXs),
    _defineProperty(_cn, "order-sm-".concat(orderSm), orderSm),
    _defineProperty(_cn, "order-md-".concat(orderMd), orderMd),
    _defineProperty(_cn, "order-lg-".concat(orderLg), orderLg),
    _defineProperty(_cn, "order-xl-".concat(orderXl), orderXl),
    _cn),
    className
  );
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      props
    ),
    children
  );
}

function Grid(props) {
  return props.children;
}

Grid.Row = GridRow;
Grid.Col = GridCol;

function FormImageCheck(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);

  return createElement(
    Grid.Row,
    _extends(
      {
        gutters: "sm",
      },
      rest
    ),
    children
  );
}

function FormImageCheckItem(_ref) {
  var className = _ref.className,
    col = _ref.col,
    imageURL = _ref.imageURL,
    imgProps = _ref.imgProps,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "col",
      "imageURL",
      "imgProps",
    ]);

  return React.createElement(
    Grid.Col,
    _extends(
      {
        className: className,
        width: 6,
        sm: 4,
      },
      col
    ),
    React.createElement(
      "label",
      {
        className: "imagecheck mb-4",
      },
      React.createElement(
        "input",
        _extends(
          {
            name: "imagecheck",
            type: "checkbox",
            className: "imagecheck-input",
          },
          rest
        )
      ),
      React.createElement(
        "figure",
        {
          className: "imagecheck-figure",
        },
        React.createElement(
          "img",
          _extends(
            {
              src: imageURL,
              alt: "Select",
              className: "imagecheck-image",
            },
            imgProps
          )
        )
      )
    )
  );
}

function FormColorCheck(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);

  return createElement(
    Grid.Row,
    _extends(
      {
        gutters: "xs",
      },
      rest
    ),
    children
  );
}

function FormColorCheckItem(_ref) {
  var className = _ref.className,
    color = _ref.color,
    rest = _objectWithoutProperties(_ref, ["className", "color"]);

  var classes = classnames(className);
  return React.createElement(
    Grid.Col,
    {
      auto: true,
      className: classes,
    },
    React.createElement(
      "label",
      {
        className: "colorinput",
      },
      React.createElement(
        "input",
        _extends(
          {
            type: "checkbox",
            value: color,
            className: "colorinput-input",
          },
          rest
        )
      ),
      React.createElement("span", {
        className: "colorinput-color bg-".concat(color),
      })
    )
  );
}

function FormInputGroupAppend(_ref) {
  var className = _ref.className,
    children = _ref.children;
  var classes = classnames("input-group-append", className);
  return React.createElement(
    El.Span,
    {
      className: classes,
    },
    children
  );
}

function FormInputGroupPrepend(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("input-group-prepend", className);
  return React.createElement(
    El.Span,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function FormInputGroup(_ref) {
  var className = _ref.className,
    append = _ref.append,
    prepend = _ref.prepend,
    RootComponent = _ref.RootComponent,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.Div : _ref$as,
    inputProps = _ref.inputProps,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "append",
      "prepend",
      "RootComponent",
      "as",
      "inputProps",
      "children",
    ]);

  var classes = classnames(
    {
      "input-group": true,
    },
    className
  );
  var Component = RootComponent || as;

  var _children = inputProps
    ? React.createElement(FormInput, inputProps)
    : children;

  if (prepend === true) {
    return React.createElement(FormInputGroupPrepend, null, children);
  }

  if (append === true) {
    return React.createElement(FormInputGroupAppend, null, children);
  }

  return React.createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    prepend && React.createElement(FormInputGroupPrepend, null, prepend),
    _children,
    append && React.createElement(FormInputGroupAppend, null, append)
  );
}

function FormHelp(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$position = _ref.position,
    message = _ref.message,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "position",
      "message",
    ]);

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];

  var targetRef = useRef(null);

  var classes = classnames("form-help", className);
  return (
    // <Tooltip content="Tooltip" placement="top">
    //   <Tag>Hover Me!</Tag>
    // </Tooltip>
    React.createElement(
      Tooltip,
      {
        content: message,
        placement: "auto",
        clickable: true,
        arrow: true,
      },
      React.createElement(
        El.Span,
        _extends(
          {
            ref: targetRef,
            className: classes, // dataContent={message}
            // dataToggle="popover"
            // dataPlacement={position}
          },
          rest
        ),
        children || "?"
      )
    )
  );
  //   <Manager>
  //     {/* <Target /> */}
  //   </Manager>
  // )
  // return (
  //   <Popper placement={position}>
  //     {({ ref, style, placement }: PopperChildrenProps) => {
  //       return (
  //         isOpen && (
  //           <El.Div
  //             className={classes}
  //             data-placement={placement}
  //             style={{ ...style }}
  //             ref={ref}
  //             {...rest}
  //           >
  //             {children}
  //           </El.Div>
  //         )
  //       );
  //     }}
  //   </Popper>
  // );
}

function FormSelect(_ref) {
  var className = _ref.className,
    children = _ref.children,
    valid = _ref.valid,
    tick = _ref.tick,
    invalid = _ref.invalid,
    cross = _ref.cross,
    error = _ref.error,
    label = _ref.label,
    feedback = _ref.feedback,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "valid",
      "tick",
      "invalid",
      "cross",
      "error",
      "label",
      "feedback",
    ]);

  var classes = classnames(
    {
      "form-select": true,
      // "custom-select": true,
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid || !!error,
      "state-invalid": cross || !!error,
    },
    className
  );

  var _feedback = error || feedback;

  var _children = React.createElement(
    React.Fragment,
    null,
    React.createElement(
      El.Select,
      _extends(
        {
          className: classes,
        },
        rest
      ),
      children
    ),
    _feedback &&
      React.createElement(
        "span",
        {
          className: "invalid-feedback",
        },
        _feedback
      )
  );

  return label
    ? React.createElement(
        FormGroup,
        {
          label: label,
        },
        _children
      )
    : _children;
}

function FormFooter(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("form-footer", className);
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

var FormRatio = function FormRatio(_ref) {
  var className = _ref.className,
    onChange = _ref.onChange,
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "onChange",
      "defaultValue",
      "value",
    ]);

  var _useState = useState(!onChange ? defaultValue : "0"),
    _useState2 = _slicedToArray(_useState, 2),
    internalValue = _useState2[0],
    setInternalValue = _useState2[1];

  var handleOnChange = function handleOnChange(e) {
    if (onChange) {
      onChange(e);
    } else {
      var _value2 = e.target.value;
      setInternalValue(_value2);
    }
  };

  var classes = classnames(className);

  var _value = onChange ? value : internalValue;

  return React.createElement(
    Grid.Row,
    {
      className: classes,
      alignItems: "center",
    },
    React.createElement(
      Grid.Col,
      null,
      React.createElement(
        El.Input,
        _extends(
          {
            type: "range",
            className: "form-control custom-range",
            onChange: handleOnChange,
            value: _value,
            step: 1,
          },
          rest
        )
      )
    ),
    React.createElement(
      Grid.Col,
      {
        auto: true,
      },
      React.createElement(El.Input, {
        type: "number",
        className: "form-control w-8",
        value: _value,
        onFocus: rest.onFocus,
        onBlur: rest.onBlur,
        readOnly: true,
      })
    )
  );
};

function FormFieldSet(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("form-fieldset", className);
  return React.createElement(
    El.Fieldset,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function FormRadio(_ref) {
  var className = _ref.className,
    label = _ref.label,
    isInline = _ref.isInline,
    rest = _objectWithoutProperties(_ref, ["className", "label", "isInline"]);

  var classes = classnames(
    "custom-control custom-radio",
    {
      "custom-control-inline": isInline,
    },
    className
  );
  var inputComponent = React.createElement(
    FormInput,
    _extends(
      {
        type: "radio",
        className: classes,
      },
      rest
    )
  );
  return label
    ? React.createElement(
        "label",
        {
          className: classes,
        },
        inputComponent,
        React.createElement(
          "span",
          {
            className: "custom-control-label",
          },
          label
        )
      )
    : inputComponent;
}

function FormCheckbox(_ref) {
  var className = _ref.className,
    label = _ref.label,
    isInline = _ref.isInline,
    rest = _objectWithoutProperties(_ref, ["className", "label", "isInline"]);

  var classes = classnames("form-check-input", className);
  var inputComponent = React.createElement(
    FormInput,
    _extends(
      {
        type: "checkbox",
        className: classes,
      },
      rest
    )
  );
  return label
    ? React.createElement(
        "label",
        {
          className: "form-check",
        },
        inputComponent,
        React.createElement(
          "span",
          {
            className: "form-check-label",
          },
          label
        )
      )
    : inputComponent;
}

function FormSelectGroup(_ref) {
  var children = _ref.children,
    pills = _ref.pills,
    canSelectMultiple = _ref.canSelectMultiple,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "pills",
      "canSelectMultiple",
    ]);

  var classNames = {
    selectgroup: true,
    "w-100": true,
    "selectgroup-pills": pills,
  };
  return React.createElement(
    El.Div,
    _extends(
      {
        classNames: classNames,
      },
      rest
    ),
    canSelectMultiple && children
      ? React.Children.map(children, function(itm) {
          return React.isValidElement(itm)
            ? React.cloneElement(itm, {
                type: "checkbox",
              })
            : itm;
        })
      : children
  );
}

function FormSelectGroupItem(_ref) {
  var className = _ref.className,
    label = _ref.label,
    icon = _ref.icon,
    type = _ref.type,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "label",
      "icon",
      "type",
    ]);

  var classes = classnames(
    {
      "selectgroup-item": true,
    },
    className
  );
  var btnClasses = classnames("selectgroup-button", {
    "selectgroup-button-icon": icon,
  });
  var outputLabel = icon
    ? React.createElement(Icon, {
        name: icon,
      })
    : label;
  return React.createElement(
    "label",
    {
      className: classes,
    },
    type === "checkbox"
      ? React.createElement(
          El.Input,
          _extends(
            {
              type: "checkbox",
              className: "selectgroup-input",
            },
            rest
          )
        )
      : React.createElement(
          El.Input,
          _extends(
            {
              type: "radio",
              className: "selectgroup-input",
            },
            rest
          )
        ),
    React.createElement(
      "span",
      {
        className: btnClasses,
      },
      outputLabel
    )
  );
}

var FormFileInput = function FormFileInput(_ref) {
  var onChange = _ref.onChange,
    className = _ref.className,
    _ref$label = _ref.label,
    labelFromProps = _ref$label === void 0 ? "Choose file" : _ref$label,
    rest = _objectWithoutProperties(_ref, ["onChange", "className", "label"]);

  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    fileName = _useState2[0],
    setFileName = _useState2[1];

  var _handleOnChange = function _handleOnChange(event) {
    if (event.target.files) {
      setFileName(event.target.files[0].name);
    }

    if (onChange) {
      onChange(event);
    }
  };

  var classes = classnames("custom-file", className);
  var label = fileName || labelFromProps;
  return React.createElement(
    "div",
    {
      className: classes,
    },
    React.createElement(
      "input",
      _extends(
        {
          type: "file",
          className: "custom-file-input",
          onChange: _handleOnChange,
        },
        rest
      )
    ),
    React.createElement(
      "label",
      {
        className: "custom-file-label",
        style: {
          whiteSpace: "nowrap",
          display: "block",
          overflow: "hidden",
        },
      },
      label
    )
  );
};

function FormToggleStack(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(
    El.Div,
    _extends(
      {
        classNames: "custom-switches-stacked",
      },
      rest
    ),
    children
  );
}

function FormToggle(_ref) {
  var className = _ref.className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "checkbox" : _ref$type,
    label = _ref.label,
    rest = _objectWithoutProperties(_ref, ["className", "type", "label"]);

  var classes = classnames("custom-switch", className);
  return React.createElement(
    "label",
    {
      className: classes,
    },
    React.createElement(
      "input",
      _extends(
        {
          className: "custom-switch-input",
          type: type,
        },
        rest
      )
    ),
    React.createElement("span", {
      className: "custom-switch-indicator",
    }),
    React.createElement(
      "span",
      {
        className: "custom-switch-description",
      },
      label
    )
  );
}

function FormInputGroupText(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("input-group-text", className);
  return React.createElement(
    El.Span,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

var reactTextMask = createCommonjsModule(function(module, exports) {
  !(function(e, t) {
    module.exports = t(React);
  })(commonjsGlobal, function(e) {
    return (function(e) {
      function t(n) {
        if (r[n]) return r[n].exports;
        var o = (r[n] = { exports: {}, id: n, loaded: !1 });
        return (
          e[n].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
        );
      }
      var r = {};
      return (t.m = e), (t.c = r), (t.p = ""), t(0);
    })([
      function(e, t, r) {
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e, t) {
          var r = {};
          for (var n in e)
            t.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        }
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function u(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.conformToMask = void 0);
        var s =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          l = (function() {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            return function(t, r, n) {
              return r && e(t.prototype, r), n && e(t, n), t;
            };
          })(),
          f = r(3);
        Object.defineProperty(t, "conformToMask", {
          enumerable: !0,
          get: function() {
            return n(f).default;
          },
        });
        var c = r(11),
          p = n(c),
          d = r(9),
          h = n(d),
          v = r(5),
          y = n(v),
          m = r(2),
          b = (function(e) {
            function t() {
              var e;
              i(this, t);
              for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
                n[o] = arguments[o];
              var u = a(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(n)
                )
              );
              return (
                (u.setRef = u.setRef.bind(u)),
                (u.onBlur = u.onBlur.bind(u)),
                (u.onChange = u.onChange.bind(u)),
                u
              );
            }
            return (
              u(t, e),
              l(t, [
                {
                  key: "setRef",
                  value: function(e) {
                    this.inputElement = e;
                  },
                },
                {
                  key: "initTextMask",
                  value: function() {
                    var e = this.props,
                      t = this.props.value;
                    (this.textMaskInputElement = (0, y.default)(
                      s({ inputElement: this.inputElement }, e)
                    )),
                      this.textMaskInputElement.update(t);
                  },
                },
                {
                  key: "componentDidMount",
                  value: function() {
                    this.initTextMask();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function(e) {
                    var t = this.props,
                      r = t.value,
                      n = t.pipe,
                      o = t.mask,
                      i = t.guide,
                      a = t.placeholderChar,
                      u = t.showMask,
                      s = { guide: i, placeholderChar: a, showMask: u },
                      l =
                        "function" == typeof n && "function" == typeof e.pipe
                          ? n.toString() !== e.pipe.toString()
                          : ((0, m.isNil)(n) && !(0, m.isNil)(e.pipe)) ||
                            (!(0, m.isNil)(n) && (0, m.isNil)(e.pipe)),
                      f = o.toString() !== e.mask.toString(),
                      c =
                        Object.keys(s).some(function(t) {
                          return s[t] !== e[t];
                        }) ||
                        f ||
                        l,
                      p = r !== this.inputElement.value;
                    (p || c) && this.initTextMask();
                  },
                },
                {
                  key: "render",
                  value: function e() {
                    var t = this.props,
                      e = t.render,
                      r = o(t, ["render"]);
                    return (
                      delete r.mask,
                      delete r.guide,
                      delete r.pipe,
                      delete r.placeholderChar,
                      delete r.keepCharPositions,
                      delete r.value,
                      delete r.onBlur,
                      delete r.onChange,
                      delete r.showMask,
                      e(
                        this.setRef,
                        s(
                          {
                            onBlur: this.onBlur,
                            onChange: this.onChange,
                            defaultValue: this.props.value,
                          },
                          r
                        )
                      )
                    );
                  },
                },
                {
                  key: "onChange",
                  value: function(e) {
                    this.textMaskInputElement.update(),
                      "function" == typeof this.props.onChange &&
                        this.props.onChange(e);
                  },
                },
                {
                  key: "onBlur",
                  value: function(e) {
                    "function" == typeof this.props.onBlur &&
                      this.props.onBlur(e);
                  },
                },
              ]),
              t
            );
          })(p.default.PureComponent);
        (t.default = b),
          (b.propTypes = {
            mask: h.default.oneOfType([
              h.default.array,
              h.default.func,
              h.default.bool,
              h.default.shape({
                mask: h.default.oneOfType([h.default.array, h.default.func]),
                pipe: h.default.func,
              }),
            ]).isRequired,
            guide: h.default.bool,
            value: h.default.oneOfType([h.default.string, h.default.number]),
            pipe: h.default.func,
            placeholderChar: h.default.string,
            keepCharPositions: h.default.bool,
            showMask: h.default.bool,
          }),
          (b.defaultProps = {
            render: function(e, t) {
              return p.default.createElement("input", s({ ref: e }, t));
            },
          });
      },
      function(e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.placeholderChar = "_"),
          (t.strFunction = "function");
      },
      function(e, t, r) {
        function n() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : f,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : l.placeholderChar;
          if (!o(e))
            throw new Error(
              "Text-mask:convertMaskToPlaceholder; The mask property must be an array."
            );
          if (e.indexOf(t) !== -1)
            throw new Error(
              "Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n" +
                ("The placeholder character that was received is: " +
                  JSON.stringify(t) +
                  "\n\n") +
                ("The mask that was received is: " + JSON.stringify(e))
            );
          return e
            .map(function(e) {
              return e instanceof RegExp ? t : e;
            })
            .join("");
        }
        function o(e) {
          return (Array.isArray && Array.isArray(e)) || e instanceof Array;
        }
        function i(e) {
          return "string" == typeof e || e instanceof String;
        }
        function a(e) {
          return "number" == typeof e && void 0 === e.length && !isNaN(e);
        }
        function u(e) {
          return "undefined" == typeof e || null === e;
        }
        function s(e) {
          for (var t = [], r = void 0; (r = e.indexOf(c)), r !== -1; )
            t.push(r), e.splice(r, 1);
          return { maskWithoutCaretTraps: e, indexes: t };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.convertMaskToPlaceholder = n),
          (t.isArray = o),
          (t.isString = i),
          (t.isNumber = a),
          (t.isNil = u),
          (t.processCaretTraps = s);
        var l = r(1),
          f = [],
          c = "[]";
      },
      function(e, t, r) {
        function n() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : s,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : u,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          if (!(0, i.isArray)(t)) {
            if (
              ("undefined" == typeof t ? "undefined" : o(t)) !== a.strFunction
            )
              throw new Error(
                "Text-mask:conformToMask; The mask property must be an array."
              );
            (t = t(e, r)),
              (t = (0, i.processCaretTraps)(t).maskWithoutCaretTraps);
          }
          var n = r.guide,
            l = void 0 === n || n,
            f = r.previousConformedValue,
            c = void 0 === f ? s : f,
            p = r.placeholderChar,
            d = void 0 === p ? a.placeholderChar : p,
            h = r.placeholder,
            v = void 0 === h ? (0, i.convertMaskToPlaceholder)(t, d) : h,
            y = r.currentCaretPosition,
            m = r.keepCharPositions,
            b = l === !1 && void 0 !== c,
            g = e.length,
            k = c.length,
            C = v.length,
            O = t.length,
            T = g - k,
            P = T > 0,
            x = y + (P ? -T : 0),
            w = x + Math.abs(T);
          if (m === !0 && !P) {
            for (var S = s, _ = x; _ < w; _++) v[_] === d && (S += d);
            e = e.slice(0, x) + S + e.slice(x, g);
          }
          for (
            var M = e.split(s).map(function(e, t) {
                return { char: e, isNew: t >= x && t < w };
              }),
              j = g - 1;
            j >= 0;
            j--
          ) {
            var E = M[j].char;
            if (E !== d) {
              var R = j >= x && k === O;
              E === v[R ? j - T : j] && M.splice(j, 1);
            }
          }
          var V = s,
            N = !1;
          e: for (var A = 0; A < C; A++) {
            var B = v[A];
            if (B === d) {
              if (M.length > 0)
                for (; M.length > 0; ) {
                  var I = M.shift(),
                    F = I.char,
                    q = I.isNew;
                  if (F === d && b !== !0) {
                    V += d;
                    continue e;
                  }
                  if (t[A].test(F)) {
                    if (m === !0 && q !== !1 && c !== s && l !== !1 && P) {
                      for (var D = M.length, L = null, W = 0; W < D; W++) {
                        var J = M[W];
                        if (J.char !== d && J.isNew === !1) break;
                        if (J.char === d) {
                          L = W;
                          break;
                        }
                      }
                      null !== L ? ((V += F), M.splice(L, 1)) : A--;
                    } else V += F;
                    continue e;
                  }
                  N = !0;
                }
              b === !1 && (V += v.substr(A, C));
              break;
            }
            V += B;
          }
          if (b && P === !1) {
            for (var U = null, H = 0; H < V.length; H++) v[H] === d && (U = H);
            V = null !== U ? V.substr(0, U + 1) : s;
          }
          return { conformedValue: V, meta: { someCharsRejected: N } };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
        t.default = n;
        var i = r(2),
          a = r(1),
          u = [],
          s = "";
      },
      function(e, t) {
        function r(e) {
          var t = e.previousConformedValue,
            r = void 0 === t ? o : t,
            i = e.previousPlaceholder,
            a = void 0 === i ? o : i,
            u = e.currentCaretPosition,
            s = void 0 === u ? 0 : u,
            l = e.conformedValue,
            f = e.rawValue,
            c = e.placeholderChar,
            p = e.placeholder,
            d = e.indexesOfPipedChars,
            h = void 0 === d ? n : d,
            v = e.caretTrapIndexes,
            y = void 0 === v ? n : v;
          if (0 === s || !f.length) return 0;
          var m = f.length,
            b = r.length,
            g = p.length,
            k = l.length,
            C = m - b,
            O = C > 0,
            T = 0 === b,
            P = C > 1 && !O && !T;
          if (P) return s;
          var x = O && (r === l || l === p),
            w = 0,
            S = void 0,
            _ = void 0;
          if (x) w = s - C;
          else {
            var M = l.toLowerCase(),
              j = f.toLowerCase(),
              E = j.substr(0, s).split(o),
              R = E.filter(function(e) {
                return M.indexOf(e) !== -1;
              });
            _ = R[R.length - 1];
            var V = a
                .substr(0, R.length)
                .split(o)
                .filter(function(e) {
                  return e !== c;
                }).length,
              N = p
                .substr(0, R.length)
                .split(o)
                .filter(function(e) {
                  return e !== c;
                }).length,
              A = N !== V,
              B =
                void 0 !== a[R.length - 1] &&
                void 0 !== p[R.length - 2] &&
                a[R.length - 1] !== c &&
                a[R.length - 1] !== p[R.length - 1] &&
                a[R.length - 1] === p[R.length - 2];
            !O &&
              (A || B) &&
              V > 0 &&
              p.indexOf(_) > -1 &&
              void 0 !== f[s] &&
              ((S = !0), (_ = f[s]));
            for (
              var I = h.map(function(e) {
                  return M[e];
                }),
                F = I.filter(function(e) {
                  return e === _;
                }).length,
                q = R.filter(function(e) {
                  return e === _;
                }).length,
                D = p
                  .substr(0, p.indexOf(c))
                  .split(o)
                  .filter(function(e, t) {
                    return e === _ && f[t] !== e;
                  }).length,
                L = D + q + F + (S ? 1 : 0),
                W = 0,
                J = 0;
              J < k;
              J++
            ) {
              var U = M[J];
              if (((w = J + 1), U === _ && W++, W >= L)) break;
            }
          }
          if (O) {
            for (var H = w, Y = w; Y <= g; Y++)
              if (
                (p[Y] === c && (H = Y),
                p[Y] === c || y.indexOf(Y) !== -1 || Y === g)
              )
                return H;
          } else if (S) {
            for (var z = w - 1; z >= 0; z--)
              if (l[z] === _ || y.indexOf(z) !== -1 || 0 === z) return z;
          } else
            for (var G = w; G >= 0; G--)
              if (p[G - 1] === c || y.indexOf(G) !== -1 || 0 === G) return G;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r);
        var n = [],
          o = "";
      },
      function(e, t, r) {
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e) {
          var t = {
            previousConformedValue: void 0,
            previousPlaceholder: void 0,
          };
          return {
            state: t,
            update: function(r) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : e,
                o = n.inputElement,
                l = n.mask,
                c = n.guide,
                y = n.pipe,
                b = n.placeholderChar,
                g = void 0 === b ? h.placeholderChar : b,
                k = n.keepCharPositions,
                C = void 0 !== k && k,
                O = n.showMask,
                T = void 0 !== O && O;
              if (
                ("undefined" == typeof r && (r = o.value),
                r !== t.previousConformedValue)
              ) {
                ("undefined" == typeof l ? "undefined" : s(l)) === m &&
                  void 0 !== l.pipe &&
                  void 0 !== l.mask &&
                  ((y = l.pipe), (l = l.mask));
                var P = void 0,
                  x = void 0;
                if (
                  (l instanceof Array &&
                    (P = (0, d.convertMaskToPlaceholder)(l, g)),
                  l !== !1)
                ) {
                  var w = a(r),
                    S = o.selectionEnd,
                    _ = t.previousConformedValue,
                    M = t.previousPlaceholder,
                    j = void 0;
                  if (
                    ("undefined" == typeof l ? "undefined" : s(l)) ===
                    h.strFunction
                  ) {
                    if (
                      ((x = l(w, {
                        currentCaretPosition: S,
                        previousConformedValue: _,
                        placeholderChar: g,
                      })),
                      x === !1)
                    )
                      return;
                    var E = (0, d.processCaretTraps)(x),
                      R = E.maskWithoutCaretTraps,
                      V = E.indexes;
                    (x = R),
                      (j = V),
                      (P = (0, d.convertMaskToPlaceholder)(x, g));
                  } else x = l;
                  var N = {
                      previousConformedValue: _,
                      guide: c,
                      placeholderChar: g,
                      pipe: y,
                      placeholder: P,
                      currentCaretPosition: S,
                      keepCharPositions: C,
                    },
                    A = (0, p.default)(w, x, N),
                    B = A.conformedValue,
                    I =
                      ("undefined" == typeof y ? "undefined" : s(y)) ===
                      h.strFunction,
                    F = {};
                  I &&
                    ((F = y(B, u({ rawValue: w }, N))),
                    F === !1
                      ? (F = { value: _, rejected: !0 })
                      : (0, d.isString)(F) && (F = { value: F }));
                  var q = I ? F.value : B,
                    D = (0, f.default)({
                      previousConformedValue: _,
                      previousPlaceholder: M,
                      conformedValue: q,
                      placeholder: P,
                      rawValue: w,
                      currentCaretPosition: S,
                      placeholderChar: g,
                      indexesOfPipedChars: F.indexesOfPipedChars,
                      caretTrapIndexes: j,
                    }),
                    L = q === P && 0 === D,
                    W = T ? P : v,
                    J = L ? W : q;
                  (t.previousConformedValue = J),
                    (t.previousPlaceholder = P),
                    o.value !== J && ((o.value = J), i(o, D));
                }
              }
            },
          };
        }
        function i(e, t) {
          document.activeElement === e &&
            (b
              ? g(function() {
                  return e.setSelectionRange(t, t, y);
                }, 0)
              : e.setSelectionRange(t, t, y));
        }
        function a(e) {
          if ((0, d.isString)(e)) return e;
          if ((0, d.isNumber)(e)) return String(e);
          if (void 0 === e || null === e) return v;
          throw new Error(
            "The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " +
              JSON.stringify(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                };
        t.default = o;
        var l = r(4),
          f = n(l),
          c = r(3),
          p = n(c),
          d = r(2),
          h = r(1),
          v = "",
          y = "none",
          m = "object",
          b =
            "undefined" != typeof navigator &&
            /Android/i.test(navigator.userAgent),
          g =
            "undefined" != typeof requestAnimationFrame
              ? requestAnimationFrame
              : setTimeout;
      },
      function(e, t) {
        function r(e) {
          return function() {
            return e;
          };
        }
        var n = function() {};
        (n.thatReturns = r),
          (n.thatReturnsFalse = r(!1)),
          (n.thatReturnsTrue = r(!0)),
          (n.thatReturnsNull = r(null)),
          (n.thatReturnsThis = function() {
            return this;
          }),
          (n.thatReturnsArgument = function(e) {
            return e;
          }),
          (e.exports = n);
      },
      function(e, t, r) {
        function n(e, t, r, n, i, a, u, s) {
          if (!e) {
            var l;
            if (void 0 === t)
              l = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var f = [r, n, i, a, u, s],
                c = 0;
              (l = new Error(
                t.replace(/%s/g, function() {
                  return f[c++];
                })
              )),
                (l.name = "Invariant Violation");
            }
            throw ((l.framesToPop = 1), l);
          }
        }
        e.exports = n;
      },
      function(e, t, r) {
        var n = r(6),
          o = r(7),
          i = r(10);
        e.exports = function() {
          function e(e, t, r, n, a, u) {
            u !== i &&
              o(
                !1,
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
          };
          return (r.checkPropTypes = n), (r.PropTypes = r), r;
        };
      },
      function(e, t, r) {
        e.exports = r(8)();
      },
      function(e, t) {
        var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        e.exports = r;
      },
      function(t, r) {
        t.exports = e;
      },
    ]);
  });
});

var MaskedInput = unwrapExports(reactTextMask);
var reactTextMask_1 = reactTextMask.reactTextMask;

/**
 * A masked input field using react-text-mask
 */
function FormMaskedInput(_ref) {
  var valid = _ref.valid,
    tick = _ref.tick,
    invalid = _ref.invalid,
    cross = _ref.cross,
    feedback = _ref.feedback,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, [
      "valid",
      "tick",
      "invalid",
      "cross",
      "feedback",
      "className",
    ]);

  var utilityClasses = getUtilityPropsClasses(rest);
  var classes = classnames(
    utilityClasses,
    {
      "form-control": true,
      "is-valid": valid,
      "state-valid": tick,
      "is-invalid": invalid,
      "state-invalid": cross,
    },
    className
  );
  return createElement(
    Fragment,
    null,
    createElement(
      MaskedInput,
      _extends(
        {
          className: classes,
        },
        rest
      )
    ),
    feedback &&
      (invalid || cross) &&
      createElement(
        "span",
        {
          className: "invalid-feedback",
        },
        feedback
      )
  );
}

/**
 * A simple date picker using 3 FormSelect's.
 */
var FormDatePicker = function FormDatePicker(_ref) {
  var onChange = _ref.onChange,
    monthLabels = _ref.monthLabels,
    minYear = _ref.minYear,
    maxYear = _ref.maxYear,
    format = _ref.format,
    className = _ref.className,
    dayProps = _ref.dayProps,
    monthProps = _ref.monthProps,
    yearProps = _ref.yearProps,
    value = _ref.value,
    defaultDate = _ref.defaultDate,
    rest = _objectWithoutProperties(_ref, [
      "onChange",
      "monthLabels",
      "minYear",
      "maxYear",
      "format",
      "className",
      "dayProps",
      "monthProps",
      "yearProps",
      "value",
      "defaultDate",
    ]);

  var _useState = useState(
      _typeof(value) !== undefined ? value : defaultDate || new Date(Date.now())
    ),
    _useState2 = _slicedToArray(_useState, 2),
    currentDate = _useState2[0],
    setCurrentDate = _useState2[1];

  useEffect(function() {
    if (value && currentDate !== value) {
      setCurrentDate(value);
    }
  }, []); // Handle date changes

  var _handleOnChange = function _handleOnChange(type, value) {
    var newDate = new Date(currentDate || Date.now()); // Change month

    if (type === "mm") {
      newDate.setMonth(value);
    } // Change day

    if (type === "dd") {
      newDate.setDate(value);
    }

    if (type === "yyyy") {
      newDate.setFullYear(value);
    }

    setCurrentDate(newDate);

    if (onChange) {
      onChange(newDate);
    }
  }; // Creates an array with numeric values from start to end

  var _range = function _range(start, end) {
    return Array.from(
      {
        length: end + 1 - start,
      },
      function(v, k) {
        return k + start;
      }
    );
  }; // Renders the months select

  var _renderMonths = function _renderMonths() {
    var onChangeMonths = function onChangeMonths(e) {
      return _handleOnChange("mm", Number(e.target.value));
    };

    return React.createElement(
      FormSelect,
      _extends(
        {
          key: "month",
          value: currentDate ? currentDate.getUTCMonth() : "",
          onChange: onChangeMonths,
        },
        monthProps
      ),
      React.createElement("option", {
        value: "",
      }),
      monthLabels.map(function(name, index) {
        return React.createElement(
          "option",
          {
            key: index,
            value: index,
          },
          name
        );
      })
    );
  }; // Renders the days select

  var _renderDays = function _renderDays() {
    var currentMonthDays =
      currentDate &&
      new Date(
        currentDate.getUTCFullYear(),
        currentDate.getUTCMonth() + 1,
        0
      ).getDate();
    var daysRange = currentMonthDays ? _range(1, currentMonthDays) : [];
    var currentDay = currentDate && currentDate.getUTCDate();

    var onChangeDays = function onChangeDays(e) {
      return _handleOnChange("dd", Number(e.target.value));
    };

    return React.createElement(
      FormSelect,
      _extends(
        {
          key: "dd",
          value: currentDay || "",
          onChange: onChangeDays,
        },
        dayProps
      ),
      React.createElement("option", {
        value: "",
      }),
      daysRange.map(function(day) {
        return React.createElement(
          "option",
          {
            key: day,
            value: day,
          },
          day
        );
      })
    );
  }; // renderes the years select

  var _renderYears = function _renderYears() {
    var yearsRange = _range(minYear, maxYear).reverse();

    var currentYear = currentDate && currentDate.getUTCFullYear();

    var onChangeYears = function onChangeYears(e) {
      return _handleOnChange("yyyy", Number(e.target.value));
    };

    return React.createElement(
      FormSelect,
      _extends(
        {
          key: "yy",
          onChange: onChangeYears,
          value: currentYear || "",
        },
        yearProps
      ),
      React.createElement("option", {
        value: "",
      }),
      yearsRange.map(function(year) {
        return React.createElement(
          "option",
          {
            key: year,
            value: year,
          },
          year
        );
      })
    );
  };

  var formatSplit = format.split("/");
  var dateComponents = {
    mm: _renderMonths(),
    dd: _renderDays(),
    yyyy: _renderYears(),
  };
  return React.createElement(
    El.Div,
    _extends(
      {
        className: className,
      },
      rest
    ),
    React.createElement(
      FormInputGroup,
      null,
      formatSplit.map(function(type) {
        return dateComponents[type];
      })
    )
  );
};

FormDatePicker.defaultProps = {
  monthLabels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  minYear: 1897,
  maxYear: new Date().getFullYear(),
  format: "mm/dd/yyyy",
  defaultDate: new Date(),
};

var CompoundForm = Form$1;
CompoundForm.Group = FormGroup;
CompoundForm.Label = FormLabel;
CompoundForm.Input = FormInput;
CompoundForm.StaticText = FormStaticText;
CompoundForm.Textarea = FormTextarea;
CompoundForm.ImageCheck = FormImageCheck;
CompoundForm.ImageCheckItem = FormImageCheckItem;
CompoundForm.ColorCheck = FormColorCheck;
CompoundForm.ColorCheckItem = FormColorCheckItem;
CompoundForm.InputGroup = FormInputGroup;
CompoundForm.Help = FormHelp;
CompoundForm.Select = FormSelect;
CompoundForm.Footer = FormFooter;
CompoundForm.Ratio = FormRatio;
CompoundForm.FieldSet = FormFieldSet;
CompoundForm.SelectGroup = FormSelectGroup;
CompoundForm.SelectGroupItem = FormSelectGroupItem;
CompoundForm.Radio = FormRadio;
CompoundForm.Checkbox = FormCheckbox;
CompoundForm.FileInput = FormFileInput;
CompoundForm.SwitchStack = FormToggleStack;
CompoundForm.Switch = FormToggle;
CompoundForm.InputGroupAppend = FormInputGroupAppend;
CompoundForm.InputGroupPrepend = FormInputGroupPrepend;
CompoundForm.InputGroupText = FormInputGroupText;
CompoundForm.MaskedInput = FormMaskedInput;
CompoundForm.DatePicker = FormDatePicker;

/**
 * A form containing a single input field with an appended Button
 */
function FormWithSingleInputAndButton(_ref) {
  var formProps = _ref.formProps,
    inputProps = _ref.inputProps,
    buttonProps = _ref.buttonProps;
  var button = createElement(CompoundButton, buttonProps);
  return createElement(
    CompoundForm,
    formProps,
    createElement(CompoundForm.InputGroup, {
      inputProps: inputProps,
      append: button,
    })
  );
}

function CommentsCard(_ref) {
  var className = _ref.className,
    children = _ref.children;
  var classes = classnames(className);
  return createElement(
    CompoundCard,
    {
      className: classes,
    },
    createElement(
      CompoundCard.Header,
      null,
      createElement(FormWithSingleInputAndButton, {
        inputProps: {
          placeholder: "Message",
        },
        buttonProps: {
          icon: "camera",
          color: "secondary",
        },
      }),
      createElement(Comment, null, children)
    )
  );
}

/**
 * A Header component rendered as a h1 HTML element with a margin below
 */
function H1$1(_ref) {
  var children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "h1" : _ref$as,
    _ref$mt = _ref.mt,
    mt = _ref$mt === void 0 ? 0 : _ref$mt,
    _ref$mb = _ref.mb,
    mb = _ref$mb === void 0 ? 4 : _ref$mb,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 1 : _ref$size,
    props = _objectWithoutProperties(_ref, [
      "children",
      "as",
      "mt",
      "mb",
      "size",
    ]);

  return React.createElement(
    Header$1,
    _extends(
      {
        as: as,
        size: size,
        mt: mt,
        mb: mb,
      },
      props
    ),
    children
  );
}

/**
 * A Header component rendered as a h2 HTML element with a margin below
 */
function H2$1(_ref) {
  var children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "h2" : _ref$as,
    _ref$mt = _ref.mt,
    mt = _ref$mt === void 0 ? 0 : _ref$mt,
    _ref$mb = _ref.mb,
    mb = _ref$mb === void 0 ? 4 : _ref$mb,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 2 : _ref$size,
    props = _objectWithoutProperties(_ref, [
      "children",
      "as",
      "mt",
      "mb",
      "size",
    ]);

  return React.createElement(
    Header$1,
    _extends(
      {
        as: as,
        size: size,
        mt: mt,
        mb: mb,
      },
      props
    ),
    children
  );
}

/**
 * A Header component rendered as a h3 HTML element with a margin below
 */
function H3$1(_ref) {
  var children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "h3" : _ref$as,
    _ref$mt = _ref.mt,
    mt = _ref$mt === void 0 ? 0 : _ref$mt,
    _ref$mb = _ref.mb,
    mb = _ref$mb === void 0 ? 4 : _ref$mb,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 3 : _ref$size,
    props = _objectWithoutProperties(_ref, [
      "children",
      "as",
      "mt",
      "mb",
      "size",
    ]);

  return React.createElement(
    Header$1,
    _extends(
      {
        as: as,
        size: size,
        mt: mt,
        mb: mb,
      },
      props
    ),
    children
  );
}

/**
 * A Header component rendered as a h4 HTML element with a margin below
 */
function H4$1(_ref) {
  var children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "h4" : _ref$as,
    _ref$mt = _ref.mt,
    mt = _ref$mt === void 0 ? 0 : _ref$mt,
    _ref$mb = _ref.mb,
    mb = _ref$mb === void 0 ? 4 : _ref$mb,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 4 : _ref$size,
    props = _objectWithoutProperties(_ref, [
      "children",
      "as",
      "mt",
      "mb",
      "size",
    ]);

  return React.createElement(
    Header$1,
    _extends(
      {
        as: as,
        size: size,
        mt: mt,
        mb: mb,
      },
      props
    ),
    children
  );
}

/**
 * A Header component rendered as a h5 HTML element with a margin below
 */
function H5$1(_ref) {
  var children = _ref.children,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "h5" : _ref$as,
    _ref$mt = _ref.mt,
    mt = _ref$mt === void 0 ? 0 : _ref$mt,
    _ref$mb = _ref.mb,
    mb = _ref$mb === void 0 ? 4 : _ref$mb,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 5 : _ref$size,
    props = _objectWithoutProperties(_ref, [
      "children",
      "as",
      "mt",
      "mb",
      "size",
    ]);

  return React.createElement(
    Header$1,
    _extends(
      {
        as: as,
        size: size,
        mt: mt,
        mb: mb,
      },
      props
    ),
    children
  );
}

var CompoundHeader = Header$1;
CompoundHeader.H1 = H1$1;
CompoundHeader.H2 = H2$1;
CompoundHeader.H3 = H3$1;
CompoundHeader.H4 = H4$1;
CompoundHeader.H5 = H5$1;
CompoundHeader.H6 = H6$1;

/**
 * Renders a Card designed for displaying details of a person or business
 */
function ContactCard(_ref) {
  var children = _ref.children,
    className = _ref.className,
    cardTitle = _ref.cardTitle,
    map = _ref.map,
    mapPlaceholder = _ref.mapPlaceholder,
    rounded = _ref.rounded,
    avatar = _ref.avatar,
    objectURL = _ref.objectURL,
    alt = _ref.alt,
    name = _ref.name,
    address = _ref.address,
    details = _ref.details,
    description = _ref.description;
  var cardClassName = classnames(className);
  return createElement(
    CompoundCard,
    {
      className: cardClassName,
      title: cardTitle,
    },
    (mapPlaceholder || map) &&
      createElement(
        CompoundCard.Map,
        {
          placeholder: mapPlaceholder,
        },
        map
      ),
    createElement(
      CompoundCard.Body,
      null,
      createElement(
        CompoundMedia,
        {
          className: "mb-5",
        },
        createElement(CompoundMedia.Object, {
          size: "md",
          className: "mr-4",
          avatar: avatar,
          rounded: rounded,
          objectURL: objectURL,
          alt: alt,
        }),
        createElement(
          CompoundMedia.Body,
          null,
          name && createElement(CompoundHeader.H5, null, name),
          address &&
            createElement(
              "address",
              {
                className: "text-muted small",
              },
              address.line1,
              address.line2 && createElement("br", null),
              address.line2
            )
        )
      ),
      details &&
        createElement(
          Grid.Row,
          null,
          details.map(function(d, i) {
            return createElement(
              Grid.Col,
              {
                width: 6,
                key: i,
              },
              createElement(CompoundHeader.H6, null, d.title),
              createElement("p", null, d.content)
            );
          })
        ),
      description &&
        createElement(
          Fragment,
          null,
          createElement(
            CompoundHeader.H6,
            null,
            typeof description === "string" ? "Description" : description.title
          ),
          createElement(
            "p",
            null,
            typeof description === "string" ? description : description.content
          )
        ),
      children
    )
  );
}

function Container(_ref) {
  var _cn;

  var children = _ref.children,
    expand = _ref.expand,
    rest = _objectWithoutProperties(_ref, ["children", "expand"]);

  var classes = classnames(
    ((_cn = {}),
    _defineProperty(_cn, "container", !expand),
    _defineProperty(_cn, "container-".concat(expand), expand),
    _cn)
  );
  return React.createElement(
    El.Div,
    _extends(
      {
        classNames: classes,
      },
      rest
    ),
    children
  );
}

function Loader(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames(
    {
      loader: true,
    },
    className
  );
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function DimmerContent(_ref) {
  var className = _ref.className,
    children = _ref.children;
  var classes = classnames(
    {
      "dimmer-content": true,
    },
    className
  );
  return createElement(
    "div",
    {
      className: classes,
    },
    children
  );
}

function Dimmer(_ref) {
  var className = _ref.className,
    children = _ref.children,
    active = _ref.active,
    loader = _ref.loader;
  var classes = classnames(
    {
      dimmer: true,
      active: active,
    },
    className
  );
  return createElement(
    "div",
    {
      className: classes,
    },
    createElement(
      Fragment,
      null,
      loader && createElement(Loader, null),
      createElement(DimmerContent, null, children)
    )
  );
}

Dimmer.Content = DimmerContent;

// GalleryCardDetails Component

function GalleryCardDetails(_ref) {
  var className = _ref.className,
    children = _ref.children,
    avatarURL = _ref.avatarURL,
    fullName = _ref.fullName,
    dateString = _ref.dateString;
  //classes
  var avatarClasses = classnames("mr-3");
  var dateStringClasses = classnames("d-block text-muted"); //conditions

  var hasOtherDetails = fullName !== null || dateString !== null; //components

  var avatar = createElement(Avatar, {
    imageURL: avatarURL,
    size: "md",
    className: avatarClasses,
  }); // TODO: The following could be a seperate component

  var otherDetails = createElement(
    "div",
    null,
    createElement("div", null, fullName),
    createElement(
      "small",
      {
        className: dateStringClasses,
      },
      " ",
      dateString
    ),
    " "
  );
  return createElement(
    Fragment,
    null,
    avatarURL && avatar,
    hasOtherDetails && otherDetails,
    children
  );
}

function GalleryCardFooter(_ref) {
  var children = _ref.children;
  var classes = classnames("d-flex", "align-items-center", "px-2");
  return createElement(
    "div",
    {
      className: classes,
    },
    children
  );
}

function GalleryCardIconGroup(_ref) {
  var children = _ref.children,
    className = _ref.className;
  var classes = classnames("ml-auto", "text-muted", className);
  return createElement(
    "div",
    {
      className: classes,
    },
    children
  );
}

function GalleryCardIconItem(_ref) {
  var className = _ref.className,
    label = _ref.label,
    name = _ref.name,
    href = _ref.href,
    right = _ref.right,
    to = _ref.to,
    RootComponent = _ref.RootComponent;
  var positionRightClasses = "d-none d-md-inline-block ml-3";
  var componentClasses = !right
    ? classnames("icon", className)
    : classnames("icon", positionRightClasses, className);
  var iconClasses = classnames("mr-1");
  var childrenForAll = createElement(
    Fragment,
    null,
    createElement(Icon, {
      name: name,
      className: iconClasses,
    }),
    label
  );
  var extraProps = {
    href: undefined,
  };

  if (href) {
    extraProps.href = href;
  }

  return RootComponent
    ? createElement(
        RootComponent,
        {
          className: componentClasses,
          to: to,
        },
        childrenForAll
      )
    : createElement(
        "a",
        _extends(
          {
            className: componentClasses,
          },
          extraProps
        ),
        childrenForAll
      );
}

function GalleryCardImage(_ref) {
  var src = _ref.src,
    alt = _ref.alt,
    href = _ref.href,
    _ref$rounded = _ref.rounded,
    rounded = _ref$rounded === void 0 ? true : _ref$rounded,
    className = _ref.className,
    to = _ref.to,
    RootComponent = _ref.RootComponent;
  var componentClasses = classnames("mb-3");
  var imageClasses = classnames(
    {
      rounded: rounded,
    },
    className
  );
  var componentOptionalProps = {
    href: undefined,
  };

  if (href) {
    componentOptionalProps.href = href;
  }

  var image = createElement("img", {
    src: src,
    alt: alt,
    className: imageClasses,
  });
  return RootComponent
    ? createElement(
        RootComponent,
        {
          className: componentClasses,
          to: to,
        },
        image
      )
    : createElement(
        "a",
        _extends(
          {
            className: componentClasses,
          },
          componentOptionalProps
        ),
        image
      );
}

function GalleryCard(_ref) {
  var children = _ref.children,
    className = _ref.className;
  var cardClassName = classnames("p-3", className);
  return createElement(
    CompoundCard,
    {
      className: cardClassName,
    },
    children
  );
}

GalleryCard.Details = GalleryCardDetails;
GalleryCard.Footer = GalleryCardFooter;
GalleryCard.IconGroup = GalleryCardIconGroup;
GalleryCard.IconItem = GalleryCardIconItem;
GalleryCard.Image = GalleryCardImage;

var ModalContext = React.createContext({
  onDismiss: function onDismiss() {},
});

var size = 0;

var scrollBarSize = function scrollBarSize() {
  if (window && window.document && window.document.createElement && !size) {
    var testDiv = document.createElement("div");
    testDiv.style.overflow = "scroll";
    testDiv.style.position = "absolute";
    testDiv.style.top = "-9999px";
    testDiv.style.width = "25px";
    testDiv.style.height = "25px";
    document.body.appendChild(testDiv);
    size = testDiv.offsetWidth - testDiv.clientWidth;
    document.body.removeChild(testDiv);
  }

  return size;
};

var Modal =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
      var _this;

      _classCallCheck(this, Modal);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Modal).call(this, props)
      );

      _defineProperty(
        _assertThisInitialized(_this),
        "handleDismiss",
        function() {
          var container = document.body;
          container.classList.remove("modal-open");
          container.style.paddingRight = "".concat(
            _this.state.originalPaddingRight,
            "px"
          );

          _this.props.onDismiss();
        }
      );

      var _container = document.body;
      var originalPadding =
        parseInt((_container.style.paddingRight || "").replace(/\D/g, "")) || 0;
      _this.state = {
        originalPaddingRight: originalPadding,
        newPaddingRight: originalPadding + scrollBarSize(),
      };
      return _this;
    }

    _createClass(Modal, [
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.handleDismiss();
        }, // shouldComponentUpdate(nextProps: ModalProps, nextState: State) {
        //   return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
        // }
      },
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          if (!this.props.show) {
            return null;
          }

          var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            show = _this$props.show,
            onDismiss = _this$props.onDismiss,
            _this$props$modalSize = _this$props.modalSize,
            modalSize =
              _this$props$modalSize === void 0
                ? "default"
                : _this$props$modalSize,
            scrollable = _this$props.scrollable,
            _this$props$closeButt = _this$props.closeButton,
            closeButton =
              _this$props$closeButt === void 0 ? false : _this$props$closeButt,
            statusBarColor = _this$props.statusBarColor,
            props = _objectWithoutProperties(_this$props, [
              "className",
              "children",
              "show",
              "onDismiss",
              "modalSize",
              "scrollable",
              "closeButton",
              "statusBarColor",
            ]);

          var classes = classnames(
            {
              modal: true,
              "modal-blur": true,
              fade: true,
              show: show,
              "d-none": !show,
              "d-block": show,
            },
            className
          );
          var dialogClasses = classnames(
            _defineProperty(
              {
                "modal-dialog": true,
                "modal-dialog-centered": true,
                "modal-dialog-scrollable": scrollable,
              },
              "modal-".concat(modalSize),
              modalSize !== "default"
            )
          );
          var container = document.body;
          container.style.paddingRight = "".concat(
            this.state.newPaddingRight,
            "px"
          );
          container.classList.add("modal-open");
          var modalContext = {
            onDismiss: this.handleDismiss,
          };

          var handleClick = function handleClick(e) {
            // Must click outside the modal to dismiss
            if (e.target !== e.currentTarget) {
              return;
            }

            _this2.handleDismiss();
          };

          var statusBarStyle = {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "#656d77",
            borderRadius: "3px 3px 0 0",
          };
          var backdropElement = React.createElement("div", {
            className: "modal-backdrop fade show",
          });
          var dialogElement = React.createElement(
            El.Div,
            {
              className: classes,
              style: {
                paddingRight: "".concat(this.state.newPaddingRight, "px"),
              },
              "aria-modal": "true",
              role: "dialog",
              onClick: handleClick,
            },
            React.createElement(
              El.Div,
              {
                className: dialogClasses,
                role: "document",
              },
              React.createElement(
                El.Div,
                {
                  className: "modal-content",
                },
                closeButton &&
                  React.createElement(Button$1, {
                    ignoreBtn: true,
                    icon: "x",
                    className: "close",
                    onClick: this.handleDismiss,
                  }),
                statusBarColor &&
                  React.createElement(El.Div, {
                    style: statusBarStyle,
                    className: "modal-status bg-".concat(statusBarColor),
                  }),
                children
              )
            )
          );
          return React.createElement(
            ModalContext.Provider,
            {
              value: modalContext,
            },
            ReactDOM.createPortal(
              React.createElement(
                React.Fragment,
                null,
                backdropElement,
                dialogElement
              ),
              container
            )
          );
        },
      },
    ]);

    return Modal;
  })(React.Component);

function ModalHeader(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "" : _ref$title,
    _ref$closeButton = _ref.closeButton,
    closeButton = _ref$closeButton === void 0 ? false : _ref$closeButton,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "title",
      "closeButton",
    ]);

  var classes = classnames("modal-header", className);
  var context = useContext(ModalContext);
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    !children &&
      title &&
      React.createElement(
        El.H5,
        {
          className: "modal-title",
        },
        title
      ),
    !children &&
      closeButton &&
      React.createElement(Button$1, {
        ignoreBtn: true,
        icon: "x",
        className: "close",
        onClick: context.onDismiss,
      }),
    children
  );
}

function ModalBody(_ref) {
  var className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("modal-body", className);
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      props
    ),
    children
  );
}

function ModalFooter(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$closeButton = _ref.closeButton,
    closeButton = _ref$closeButton === void 0 ? true : _ref$closeButton,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "closeButton",
    ]);

  var classes = classnames("modal-footer", className);
  var context = useContext(ModalContext);
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    !children &&
      closeButton &&
      React.createElement(
        Button$1,
        {
          color: "white",
          className: "mr-auto",
          onClick: context.onDismiss,
        },
        "Close"
      ),
    children
  );
}

function ModalButton(_ref) {
  var onClick = _ref.onClick,
    onClickDismiss = _ref.onClickDismiss,
    rest = _objectWithoutProperties(_ref, ["onClick", "onClickDismiss"]);

  var context = useContext(ModalContext);

  var clickHandler =
    /*#__PURE__*/
    (function() {
      var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(event) {
          var dismiss;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  dismiss = true;

                  if (!onClick) {
                    _context.next = 5;
                    break;
                  }

                  onClick(event);
                  _context.next = 9;
                  break;

                case 5:
                  if (!onClickDismiss) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 8;
                  return onClickDismiss();

                case 8:
                  dismiss = _context.sent;

                case 9:
                  if (dismiss) {
                    context.onDismiss();
                  }

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })
      );

      return function clickHandler(_x) {
        return _ref2.apply(this, arguments);
      };
    })();

  return React.createElement(
    Button$1,
    _extends(
      {
        onClick: clickHandler,
      },
      rest
    )
  );
}

var CompoundModal = Modal; // CompoundModal.displayName = "Modal";

CompoundModal.Header = ModalHeader;
CompoundModal.Body = ModalBody;
CompoundModal.Footer = ModalFooter;
CompoundModal.Button = ModalButton;

function Page(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("page", className);
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function PageMain(_ref) {
  var children = _ref.children;
  return createElement(
    "div",
    {
      className: "page-main flex-fill d-flex flex-column max-w-full",
    },
    children
  );
}

function PageTitle(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("page-title-box", className);
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    createElement(
      El.H2,
      {
        className: "page-title",
      },
      children
    )
  );
}

function PageSubTitle(_ref) {
  var children = _ref.children;
  return createElement(
    "div",
    {
      className: "page-subtitle",
    },
    children
  );
}

function PageOptions(_ref) {
  var children = _ref.children;
  return createElement(
    "div",
    {
      className: "page-options d-flex",
    },
    children
  );
}

// @flow

function PageHeader(_ref) {
  var children = _ref.children,
    title = _ref.title,
    subTitle = _ref.subTitle,
    options = _ref.options;
  return createElement(
    "div",
    {
      className: "page-header",
    },
    title && createElement(PageTitle, null, title),
    subTitle && createElement(PageSubTitle, null, subTitle),
    options && createElement(PageOptions, null, options),
    children
  );
}

function PageContent(_ref) {
  var className = _ref.className,
    children = _ref.children,
    title = _ref.title,
    subTitle = _ref.subTitle,
    options = _ref.options;
  var classes = classnames("content", className);
  return createElement(
    "div",
    {
      className: classes,
    },
    createElement(
      Container,
      {
        expand: "xl",
      },
      (title || subTitle || options) &&
        createElement(PageHeader, {
          title: title,
          subTitle: subTitle,
          options: options,
        }),
      children
    )
  ); // </div>
}

// @flow

function PageContentWithSidebar(_ref) {
  var children = _ref.children,
    header = _ref.header,
    sidebar = _ref.sidebar;
  return createElement(
    PageContent,
    null,
    header,
    createElement(
      Grid.Row,
      null,
      createElement(
        Grid.Col,
        {
          lg: 3,
          className: "order-lg-1 mb-4",
        },
        sidebar
      ),
      createElement(
        Grid.Col,
        {
          lg: 9,
        },
        children
      )
    )
  );
}

function PageCard(_ref) {
  var children = _ref.children,
    title = _ref.title,
    header = _ref.header,
    footer = _ref.footer,
    RootComponent = _ref.RootComponent;
  return createElement(
    "div",
    {
      className: "my-3 my-md-5",
    },
    createElement(
      Container,
      null,
      createElement(
        Grid.Row,
        null,
        createElement(
          Grid.Col,
          {
            width: 12,
          },
          createElement(
            CompoundCard,
            {
              RootComponent: RootComponent,
            },
            title &&
              createElement(
                CompoundCard.Header,
                null,
                createElement(CompoundCard.Title, null, title)
              ),
            header,
            createElement(CompoundCard.Body, null, children),
            footer
          )
        )
      )
    )
  );
}

// @flow

function PageMapHeader(_ref) {
  var children = _ref.children;
  return createElement(
    "div",
    {
      className: "map-header",
    },
    children
  );
}

var CompoundPage = Object.assign(Page, {
  Main: PageMain,
  Content: PageContent,
  Header: PageHeader,
  ContentWithSidebar: PageContentWithSidebar,
  Card: PageCard,
  Title: PageTitle,
  MapHeader: PageMapHeader,
});

function PricingCardCategory(_ref) {
  var className = _ref.className,
    children = _ref.children;
  // const classes = cn("text-uppercase text-muted", className);
  return createElement(
    CompoundText,
    {
      muted: true,
      uppercase: true,
      className: className,
    },
    children
  ); // return <div className={classes}>{children}</div>;
}

// TODO:Add size options

function PricingCardPrice(_ref) {
  var className = _ref.className,
    children = _ref.children;
  var classes = classnames("my-3", className);
  return createElement(
    CompoundHeader.H1,
    {
      className: classes,
    },
    children
  );
}

function PricingCardAttributeList(_ref) {
  var className = _ref.className,
    children = _ref.children;
  var classes = classnames("list-unstyled", "lh-lg", className);
  return createElement(
    "ul",
    {
      className: classes,
    },
    children
  );
}

function PricingCardAttributeItem(_ref) {
  var children = _ref.children,
    available = _ref.available,
    hasIcon = _ref.hasIcon;
  var iconClasses = available
    ? classnames("text-success", "mr-2")
    : classnames("text-danger", "mr-2");
  return hasIcon
    ? createElement(
        "li",
        null,
        " ",
        createElement(Icon, {
          prefix: "fe",
          name: available ? "check" : "x",
          className: iconClasses,
          isAriaHidden: true,
        }),
        children
      )
    : createElement("li", null, " ", children, " ");
}

// TODO : Add  color prop

function PricingCardButton(_ref) {
  var className = _ref.className,
    children = _ref.children,
    RootComponent = _ref.RootComponent,
    active = _ref.active,
    href = _ref.href,
    to = _ref.to,
    onClick = _ref.onClick;
  var classes = classnames("text-center", "mt-4");
  var Component = RootComponent || "a";
  var componentClasses = classnames(
    "btn",
    active ? "btn-green" : "btn-secondary",
    "btn-block",
    className
  );
  var otherProps = {
    href: undefined,
    to: undefined,
    role: undefined,
    onClick: undefined,
  };

  if (href) {
    otherProps.href = href;
  }

  if (to) {
    otherProps.to = to;
  }

  if (onClick) {
    otherProps.role = "button";
    otherProps.onClick = onClick;
  }

  return createElement(
    "div",
    {
      className: classes,
    },
    createElement(
      Component,
      _extends(
        {
          className: componentClasses,
        },
        otherProps
      ),
      children
    )
  );
}

function Ribbon(_ref) {
  var _cn;

  var children = _ref.children,
    className = _ref.className,
    color = _ref.color,
    icon = _ref.icon,
    bookmark = _ref.bookmark,
    position = _ref.position,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "color",
      "icon",
      "bookmark",
      "position",
    ]);

  var _className = classnames(
    "ribbon",
    ((_cn = {}),
    _defineProperty(_cn, "bg-".concat(color), color),
    _defineProperty(_cn, "ribbon-bookmark", bookmark),
    _defineProperty(
      _cn,
      "ribbon-top",
      position && position.substr(0, 3) === "top"
    ),
    _defineProperty(
      _cn,
      "ribbon-bottom",
      position && position.substr(0, 6) === "bottom"
    ),
    _defineProperty(
      _cn,
      "ribbon-left",
      position && position.substr(-4) === "left"
    ),
    _defineProperty(
      _cn,
      "ribbon-right",
      position && position.substr(-5) === "right"
    ),
    _cn),
    className
  );

  return React.createElement(
    El.Div,
    _extends(
      {
        className: _className,
      },
      rest
    ),
    icon &&
      React.createElement(Icon, {
        name: icon,
      }),
    children
  );
}

function PricingCard(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active,
    category = _ref.category;
  var cardBodyClassName = classnames("text-center");
  var cardStatusClassName = classnames("card-status", "bg-green"); // const cardStatus = <div className={cardStatusClassName} />;

  var cardStatus = createElement(Ribbon, {
    bookmark: true,
    color: "green",
    position: "top-right",
    icon: "star",
  });
  var cardCategory = createElement(PricingCardCategory, null, category); // TODO: Add component logic.

  return createElement(
    CompoundCard,
    null,
    active && cardStatus,
    createElement(
      CompoundCard.Body,
      {
        className: cardBodyClassName,
      },
      category && cardCategory,
      children
    )
  );
}

PricingCard.Category = PricingCardCategory;
PricingCard.Price = PricingCardPrice;
PricingCard.AttributeList = PricingCardAttributeList;
PricingCard.AttributeItem = PricingCardAttributeItem;
PricingCard.Button = PricingCardButton;

function ProfileImage(_ref) {
  var avatarURL = _ref.avatarURL;
  return createElement("img", {
    className: "card-profile-img",
    alt: "Profile",
    src: avatarURL,
  });
}

function Profile(_ref) {
  var className = _ref.className,
    children = _ref.children,
    name = _ref.name,
    _ref$avatarURL = _ref.avatarURL,
    avatarURL = _ref$avatarURL === void 0 ? "" : _ref$avatarURL,
    _ref$twitterURL = _ref.twitterURL,
    _ref$backgroundURL = _ref.backgroundURL,
    backgroundURL = _ref$backgroundURL === void 0 ? "" : _ref$backgroundURL,
    bio = _ref.bio;
  var classes = classnames("card-profile", className);
  return createElement(
    CompoundCard,
    {
      className: classes,
    },
    createElement(CompoundCard.Header, {
      backgroundURL: backgroundURL,
    }),
    createElement(
      CompoundCard.Body,
      {
        className: "text-center",
      },
      createElement(ProfileImage, {
        avatarURL: avatarURL,
      }),
      createElement(
        CompoundHeader.H3,
        {
          className: "mb-3",
        },
        name
      ),
      createElement(
        "p",
        {
          className: "mb-4",
        },
        bio || children
      ),
      createElement(SocialNetworksList, {
        itemsObjects: [
          {
            name: "twitter",
            label: "Follow",
          },
        ],
        prefix: "fa",
        asButtons: true,
      })
    )
  );
}

Profile.Image = ProfileImage;

function ProgressBar(_ref) {
  var className = _ref.className,
    color = _ref.color,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 0 : _ref$width,
    style = _ref.style,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "color",
      "width",
      "style",
    ]);

  var classes = classnames(
    "progress-bar",
    _defineProperty({}, "bg-".concat(color), !!color),
    className
  );
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
        style: _objectSpread(
          {
            width: "".concat(width, "%"),
          },
          style
        ),
      },
      rest
    )
  );
}

function Progress(_ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "" : _ref$size,
    rest = _objectWithoutProperties(_ref, ["className", "children", "size"]);

  var classes = classnames(
    "progress",
    _defineProperty({}, "progress-".concat(size), !!size),
    className
  );
  return createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

Progress.Bar = ProgressBar;

function ProgressCard(_ref) {
  var className = _ref.className,
    header = _ref.header,
    content = _ref.content,
    progressColor = _ref.progressColor,
    progressWidth = _ref.progressWidth;
  var classes = classnames(className);
  return createElement(
    CompoundCard,
    {
      className: classes,
    },
    createElement(
      CompoundCard.Body,
      {
        className: "text-center",
      },
      createElement(
        CompoundHeader,
        {
          size: 5,
        },
        header
      ),
      createElement(
        "div",
        {
          className: "display-4 font-weight-bold mb-4",
        },
        content
      ),
      createElement(
        Progress,
        {
          size: "sm",
        },
        createElement(Progress.Bar, {
          color: progressColor,
          width: progressWidth,
        })
      )
    )
  );
}

/**
 * Components for building the base of your website, such as a header, footer and nav bar
 */
function Site(props) {
  return props.children;
}

var SiteLogo = function SiteLogo(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, ["className"]);

  var _className = classnames("navbar-brand", className);

  return createElement(
    "a",
    _extends(
      {
        className: _className,
        href: props.href,
      },
      props
    ),
    props.src &&
      createElement("img", {
        src: props.src,
        className: "navbar-brand-image",
        alt: props.alt,
      }),
    props.srcSmall &&
      createElement("img", {
        src: props.srcSmall,
        className: "navbar-brand-image",
        alt: props.alt,
      }),
    props.title
  );
};

/**
 * The very top header bar of your website, containing the logo and some optional
 * action components, such as a NotificationTray or an AccountDropdown on the right hand side
 */
var SiteHeader = function SiteHeader(_ref) {
  var children = _ref.children,
    href = _ref.href,
    align = _ref.align,
    imageURL = _ref.imageURL,
    alt = _ref.alt,
    notificationsTrayFromProps = _ref.notificationsTray,
    accountDropdownFromProps = _ref.accountDropdown,
    navItems = _ref.navItems,
    onMenuToggleClick = _ref.onMenuToggleClick;
  return React.createElement(
    CompoundNav.Bar,
    {
      expand: "md",
      as: "header",
    },
    React.createElement(
      Container,
      {
        expand: "xl",
        className: align,
      },
      children ||
        React.createElement(
          React.Fragment,
          null,
          React.createElement(
            "button",
            {
              className: "navbar-toggler",
              onClick: onMenuToggleClick,
            },
            React.createElement("span", {
              className: "navbar-toggler-icon",
            })
          ),
          React.createElement(SiteLogo, {
            className: "text-inherit mr-md-3",
            href: href,
            alt: alt,
            src: imageURL,
          }),
          React.createElement(
            CompoundNav,
            {
              isMenu: true,
              className: "align-items-center flex-row order-1 order-lg-2",
            },
            navItems,
            notificationsTrayFromProps &&
              React.createElement(
                CompoundNav.Item,
                {
                  link: false,
                  className: "d-none d-md-flex mr-3",
                },
                React.createElement(
                  CompoundNotification.Tray,
                  notificationsTrayFromProps
                )
              ),
            accountDropdownFromProps &&
              React.createElement(AccountDropdown, accountDropdownFromProps)
          )
        )
    )
  );
};

/**
 * The footer of your website
 */
var SiteFooter = function SiteFooter(_ref) {
  var links = _ref.links,
    note = _ref.note,
    copyright = _ref.copyright,
    nav = _ref.nav,
    transparent = _ref.transparent;
  var classes = classnames({
    footer: true,
    "footer-transparent": transparent,
  });
  return createElement(
    Fragment,
    null,
    (links || note) &&
      createElement(
        "div",
        {
          className: classes,
        },
        createElement(
          Container,
          null,
          createElement(
            Grid.Row,
            null,
            createElement(
              Grid.Col,
              {
                lg: 8,
              },
              createElement(
                Grid.Row,
                null,
                links &&
                  createElement(
                    Fragment,
                    null,
                    createElement(
                      Grid.Col,
                      {
                        width: 6,
                        md: 3,
                      },
                      createElement(
                        List,
                        {
                          unstyled: true,
                          className: "mb-0",
                        },
                        createElement(List.Item, null, links[0]),
                        createElement(List.Item, null, links[1])
                      )
                    ),
                    createElement(
                      Grid.Col,
                      {
                        width: 6,
                        md: 3,
                      },
                      createElement(
                        List,
                        {
                          unstyled: true,
                          className: "mb-0",
                        },
                        createElement(List.Item, null, links[2]),
                        createElement(List.Item, null, links[3])
                      )
                    ),
                    createElement(
                      Grid.Col,
                      {
                        width: 6,
                        md: 3,
                      },
                      createElement(
                        List,
                        {
                          unstyled: true,
                          className: "mb-0",
                        },
                        createElement(List.Item, null, links[4]),
                        createElement(List.Item, null, links[5])
                      )
                    ),
                    createElement(
                      Grid.Col,
                      {
                        width: 6,
                        md: 3,
                      },
                      createElement(
                        List,
                        {
                          unstyled: true,
                          className: "mb-0",
                        },
                        createElement(List.Item, null, links[6]),
                        createElement(List.Item, null, links[7])
                      )
                    )
                  )
              )
            ),
            createElement(
              Grid.Col,
              {
                lg: 4,
                className: "mt-4 mt-lg-0",
              },
              note
            )
          )
        )
      ),
    (nav || copyright) &&
      createElement(
        "footer",
        {
          className: classes,
        },
        createElement(
          Container,
          null,
          createElement(
            Grid.Row,
            {
              className: "text-center align-items-center flex-row-reverse",
            },
            createElement(
              Grid.Col,
              {
                className: "col-lg-auto ml-lg-auto",
              },
              nav
            ),
            createElement(
              Grid.Col,
              {
                width: 12,
                lgAuto: true,
                className: "mt-3 mt-lg-0 text-center",
              },
              copyright
            )
          )
        )
      )
  );
};

var SiteNav = function SiteNav(_ref) {
  var children = _ref.children,
    items = _ref.items,
    itemsObjects = _ref.itemsObjects,
    _ref$withSearchForm = _ref.withSearchForm,
    rightColumnComponent = _ref.rightColumnComponent,
    _ref$collapse = _ref.collapse,
    routerContextComponentType = _ref.routerContextComponentType,
    logoURL = _ref.logoURL,
    _ref$showMobileMenu = _ref.showMobileMenu,
    showMobileMenuParam =
      _ref$showMobileMenu === void 0 ? false : _ref$showMobileMenu,
    _ref$isSide = _ref.isSide,
    isSide = _ref$isSide === void 0 ? false : _ref$isSide,
    _ref$isCondensed = _ref.isCondensed,
    notificationsTrayFromProps = _ref.notificationsTray,
    accountDropdownFromProps = _ref.accountDropdown,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "items",
      "itemsObjects",
      "withSearchForm",
      "rightColumnComponent",
      "collapse",
      "routerContextComponentType",
      "logoURL",
      "showMobileMenu",
      "isSide",
      "isCondensed",
      "notificationsTray",
      "accountDropdown",
    ]);

  var _React$useState = useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    showMobileMenu = _React$useState2[0],
    setShowMobileMenu = _React$useState2[1]; // console.log('redraw ' + showMobileMenu + ' ' + showMobileMenuParam);

  var _handleMenuButtonOnClick = function _handleMenuButtonOnClick(e) {
    e.preventDefault();
    setShowMobileMenu(function(s) {
      return !s;
    });
  }; // const classes = cn({ collapse: collapse });

  var classes = classnames({
    collapse: true,
    "navbar-collapse": true,
    show: showMobileMenuParam,
  });

  var _innerNav = createElement(CompoundNav, {
    className: "navbar-nav",
    items: items,
    itemsObjects: itemsObjects,
    routerContextComponentType: routerContextComponentType,
  });

  var _children = createElement(
    Fragment,
    null,
    (items || itemsObjects) &&
      (isSide
        ? createElement(
            El.Div,
            {
              className: classes,
            },
            _innerNav
          )
        : _innerNav),
    children,
    !isSide &&
      createElement(
        El.Div,
        {
          className:
            "my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last",
        },
        rightColumnComponent
      )
  );

  if (isSide) {
    return createElement(
      CompoundNav.Bar,
      _extends(
        {
          expand: "lg",
          isSide: true,
          side: rest.side,
        },
        rest
      ),
      createElement(
        Container,
        null,
        createElement(
          El.Button,
          {
            className: "navbar-toggler",
            onClick: _handleMenuButtonOnClick,
            "aria-expanded": showMobileMenu,
          },
          createElement("span", {
            className: "navbar-toggler-icon",
          })
        ),
        logoURL &&
          createElement(SiteLogo, {
            src: logoURL,
          }),
        createElement(
          CompoundNav,
          {
            isMenu: true,
            className: "navbar-nav flex-row d-lg-none",
          },
          notificationsTrayFromProps &&
            createElement(
              CompoundNav.Item,
              {
                link: false,
                className: "d-none d-md-flex mr-3",
              },
              createElement(
                CompoundNotification.Tray,
                notificationsTrayFromProps
              )
            ),
          accountDropdownFromProps &&
            createElement(AccountDropdown, accountDropdownFromProps)
        ),
        _children
      )
    );
  }

  return (
    // <Nav.Bar expand="md" className={classes} as="div" {...rest}>
    createElement(
      El.Div,
      {
        className: "navbar-expand-md",
      },
      createElement(
        El.Div,
        {
          className: classes,
        },
        createElement(
          CompoundNav.Bar,
          {
            as: "div",
            isSide: false,
          },
          createElement(
            Container,
            {
              expand: "xl",
            },
            logoURL &&
              createElement(SiteLogo, {
                src: logoURL,
              }),
            _children
          )
        )
      )
    ) // </Nav.Bar>
  );
};

var SiteWrapper = function SiteWrapper(_ref) {
  var _ref$header = _ref.header,
    Header = _ref$header === void 0 ? SiteHeader : _ref$header,
    _ref$headerProps = _ref.headerProps,
    headerProps = _ref$headerProps === void 0 ? {} : _ref$headerProps,
    _ref$nav = _ref.nav,
    Nav = _ref$nav === void 0 ? SiteNav : _ref$nav,
    _ref$navProps = _ref.navProps,
    navProps = _ref$navProps === void 0 ? {} : _ref$navProps,
    _ref$footer = _ref.footer,
    _ref$footerProps = _ref.footerProps,
    children = _ref.children,
    navIsSide = _ref.navIsSide;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    collapseMobileMenu = _useState2[0],
    setCollapseMobileMenu = _useState2[1];

  var handleCollapseMobileMenu = function handleCollapseMobileMenu() {
    setCollapseMobileMenu(function(s) {
      return !s;
    });
  };

  var nav = React.createElement(
    Nav,
    _extends(
      {
        collapse: collapseMobileMenu,
      },
      navProps
    )
  );

  var _isSide = navIsSide || navProps.isSide;

  return React.createElement(
    CompoundPage,
    null,
    _isSide && nav,
    React.createElement(
      CompoundPage.Main,
      null,
      React.createElement(
        Header,
        _extends(
          {
            onMenuToggleClick: handleCollapseMobileMenu,
          },
          headerProps
        )
      ),
      !_isSide && nav,
      children
    )
  );
};

var CompoundSite = Site;
CompoundSite.Header = SiteHeader;
CompoundSite.Footer = SiteFooter;
CompoundSite.Nav = SiteNav;
CompoundSite.Logo = SiteLogo;
CompoundSite.Wrapper = SiteWrapper;

var SiteLayoutCombined = function SiteLayoutCombined(_ref) {
  var children = _ref.children,
    itemsObjects = _ref.itemsObjects,
    searchBar = _ref.searchBar,
    logoURL = _ref.logoURL,
    title = _ref.title,
    align = _ref.align,
    href = _ref.href,
    alt = _ref.alt,
    notificationsTrayFromProps = _ref.notificationsTray,
    accountDropdownFromProps = _ref.accountDropdown,
    navItems = _ref.navItems,
    _ref$footerProps = _ref.footerProps,
    footerProps = _ref$footerProps === void 0 ? {} : _ref$footerProps,
    _ref$navbarSide = _ref.navbarSide,
    navbarSide = _ref$navbarSide === void 0 ? "left" : _ref$navbarSide;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMobileMenu = _useState2[0],
    setShowMobileMenu = _useState2[1];

  var _handleMenuButtonOnClick = function _handleMenuButtonOnClick(e) {
    e.preventDefault();
    setShowMobileMenu(function(s) {
      return !s;
    });
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(SiteNav, {
      logoURL: logoURL,
      isSide: true,
      side: navbarSide,
      itemsObjects: itemsObjects,
      withSearchForm: false,
      collapse: false,
      rightColumnComponent: searchBar,
      notificationsTray: notificationsTrayFromProps,
      accountDropdown: accountDropdownFromProps, // showMobileMenu={showMobileMenu}
    }),
    React.createElement(
      CompoundPage,
      null,
      React.createElement(
        CompoundNav.Bar,
        {
          expand: "md",
          as: "header",
          className: "d-none d-lg-flex",
        },
        React.createElement(
          Container,
          {
            expand: "xl",
            className: align,
          },
          React.createElement(
            React.Fragment,
            null,
            React.createElement(
              El.Button,
              {
                className: "navbar-toggler",
                onClick: _handleMenuButtonOnClick,
                "aria-expanded": showMobileMenu,
              },
              React.createElement("span", {
                className: "navbar-toggler-icon",
              })
            ),
            searchBar,
            React.createElement(
              CompoundNav,
              {
                isMenu: true,
                className: "flex-row order-md-last",
              },
              navItems,
              notificationsTrayFromProps &&
                React.createElement(
                  CompoundNav.Item,
                  {
                    link: false,
                    className: "d-none d-md-flex mr-3",
                  },
                  React.createElement(
                    CompoundNotification.Tray,
                    notificationsTrayFromProps
                  )
                ),
              accountDropdownFromProps &&
                React.createElement(AccountDropdown, accountDropdownFromProps)
            )
          )
        )
      ),
      children,
      React.createElement(SiteFooter, footerProps)
    )
  );
};

var SiteLayoutCondensed = function SiteLayoutCondensed(_ref) {
  var children = _ref.children,
    itemsObjects = _ref.itemsObjects,
    searchBar = _ref.searchBar,
    logoURL = _ref.logoURL,
    title = _ref.title,
    align = _ref.align,
    href = _ref.href,
    alt = _ref.alt,
    notificationsTrayFromProps = _ref.notificationsTray,
    accountDropdownFromProps = _ref.accountDropdown,
    navItems = _ref.navItems,
    _ref$footerProps = _ref.footerProps,
    footerProps = _ref$footerProps === void 0 ? {} : _ref$footerProps,
    _ref$navbarSide = _ref.navbarSide,
    navbarSide = _ref$navbarSide === void 0 ? "left" : _ref$navbarSide;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMobileMenu = _useState2[0],
    setShowMobileMenu = _useState2[1];

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(SiteNav, {
      logoURL: logoURL,
      isSide: false,
      side: navbarSide,
      itemsObjects: itemsObjects,
      withSearchForm: false,
      collapse: false,
      rightColumnComponent: searchBar,
      notificationsTray: notificationsTrayFromProps,
      accountDropdown: accountDropdownFromProps,
    }),
    React.createElement(
      CompoundPage,
      null,
      children,
      React.createElement(SiteFooter, footerProps)
    )
  );
};

var SiteLayoutHorizontal = function SiteLayoutHorizontal(_ref) {
  var children = _ref.children,
    itemsObjects = _ref.itemsObjects,
    searchBar = _ref.searchBar,
    logoURL = _ref.logoURL,
    title = _ref.title,
    align = _ref.align,
    href = _ref.href,
    alt = _ref.alt,
    notificationsTrayFromProps = _ref.notificationsTray,
    accountDropdownFromProps = _ref.accountDropdown,
    navItems = _ref.navItems,
    _ref$footerProps = _ref.footerProps,
    footerProps = _ref$footerProps === void 0 ? {} : _ref$footerProps;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMobileMenu = _useState2[0],
    setShowMobileMenu = _useState2[1];

  var _handleMenuButtonOnClick = function _handleMenuButtonOnClick(e) {
    e.preventDefault();
    setShowMobileMenu(function(s) {
      console.log("state changed: " + !s);
      return !s;
    });
  };

  return React.createElement(
    CompoundPage,
    null,
    React.createElement(
      CompoundNav.Bar,
      {
        expand: "md",
        as: "header",
      },
      React.createElement(
        Container,
        {
          expand: "xl",
          className: align,
        },
        React.createElement(
          React.Fragment,
          null,
          React.createElement(
            El.Button,
            {
              className: "navbar-toggler",
              onClick: _handleMenuButtonOnClick,
              "aria-expanded": showMobileMenu,
            },
            React.createElement("span", {
              className: "navbar-toggler-icon",
            })
          ),
          React.createElement(SiteLogo, {
            className: "text-inherit mr-md-3",
            href: href,
            alt: alt,
            src: logoURL,
            title: title,
          }),
          React.createElement(
            CompoundNav,
            {
              isMenu: true,
              className: "align-items-center flex-row order-1 order-lg-2",
            },
            navItems,
            notificationsTrayFromProps &&
              React.createElement(
                CompoundNav.Item,
                {
                  link: false,
                  className: "d-none d-md-flex mr-3",
                },
                React.createElement(
                  CompoundNotification.Tray,
                  notificationsTrayFromProps
                )
              ),
            accountDropdownFromProps &&
              React.createElement(AccountDropdown, accountDropdownFromProps)
          )
        )
      )
    ),
    React.createElement(
      SiteNav, // logoURL={logoURL}
      {
        isSide: false,
        side: "left",
        itemsObjects: itemsObjects,
        withSearchForm: false,
        collapse: false,
        rightColumnComponent: searchBar,
        showMobileMenu: showMobileMenu,
      }
    ),
    children,
    React.createElement(SiteFooter, footerProps)
  );
};

var SiteLayoutVertical = function SiteLayoutVertical(_ref) {
  var children = _ref.children,
    itemsObjects = _ref.itemsObjects,
    searchBar = _ref.searchBar,
    logoURL = _ref.logoURL,
    title = _ref.title,
    align = _ref.align,
    href = _ref.href,
    alt = _ref.alt,
    notificationsTrayFromProps = _ref.notificationsTray,
    accountDropdownFromProps = _ref.accountDropdown,
    navItems = _ref.navItems,
    _ref$footerProps = _ref.footerProps,
    footerProps = _ref$footerProps === void 0 ? {} : _ref$footerProps,
    _ref$navbarSide = _ref.navbarSide,
    navbarSide = _ref$navbarSide === void 0 ? "left" : _ref$navbarSide;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMobileMenu = _useState2[0],
    setShowMobileMenu = _useState2[1];

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(SiteNav, {
      logoURL: logoURL,
      isSide: true,
      side: navbarSide,
      itemsObjects: itemsObjects,
      withSearchForm: false,
      collapse: false,
      rightColumnComponent: searchBar,
      notificationsTray: notificationsTrayFromProps,
      accountDropdown: accountDropdownFromProps, // showMobileMenu={showMobileMenu}
    }),
    React.createElement(
      CompoundPage,
      null,
      children,
      React.createElement(SiteFooter, footerProps)
    )
  );
};

function Stamp(_ref) {
  var _cn;

  var children = _ref.children,
    className = _ref.className,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    icon = _ref.icon,
    color = _ref.color,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "size",
      "icon",
      "color",
    ]);

  var classes = classnames(
    ((_cn = {
      stamp: true,
    }),
    _defineProperty(_cn, "stamp-".concat(size), size),
    _defineProperty(_cn, "bg-".concat(color), color),
    _defineProperty(_cn, "text-white", true),
    _cn),
    className
  );
  return createElement(
    El.Span,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    icon &&
      createElement(Icon, {
        name: icon,
      }),
    children
  );
}

function StampCard(_ref) {
  var children = _ref.children,
    className = _ref.className,
    icon = _ref.icon,
    color = _ref.color,
    header = _ref.header,
    footer = _ref.footer;
  var classes = classnames(className);
  return createElement(
    CompoundCard,
    {
      className: classes,
    },
    createElement(
      "div",
      {
        className: "p-3 d-flex align-items-center",
      },
      createElement(Stamp, {
        color: color,
        icon: icon,
        mr: 3,
      }),
      createElement(
        "div",
        null,
        header &&
          createElement(
            CompoundHeader,
            {
              size: 3,
              m: 0,
            },
            header
          ),
        children,
        footer &&
          createElement(
            CompoundText.Small,
            {
              muted: true,
            },
            footer
          )
      )
    )
  );
}

/**
 * Used for dispaying an individual statistic/number with different potential layouts
 */
function StatsCard(_ref) {
  var children = _ref.children,
    className = _ref.className,
    movement = _ref.movement,
    movementLabel = _ref.movementLabel,
    total = _ref.total,
    label = _ref.label,
    _ref$layout = _ref.layout,
    layout = _ref$layout === void 0 ? 1 : _ref$layout,
    chart = _ref.chart,
    progressWidth = _ref.progressWidth,
    _ref$progressColor = _ref.progressColor,
    progressColor =
      _ref$progressColor === void 0 ? "primary" : _ref$progressColor,
    actions = _ref.actions;
  var classes = classnames(className);
  var movementString = "".concat(movement > 0 ? "+" : "").concat(movement, "%");
  var movementColor = !movement ? "yellow" : movement > 0 ? "green" : "red";

  if (layout === 3 || layout === 4) {
    return createElement(
      CompoundCard,
      {
        className: classes,
      },
      createElement(
        CompoundCard.Body,
        null,
        createElement(
          El.Div,
          {
            d: "flex",
          },
          createElement("div", null, label),
          actions &&
            createElement(
              El.Div,
              {
                ml: "auto",
              },
              actions
            )
        ),
        createElement(
          El.Div,
          {
            d: "flex",
            mb: layout === 3 ? 3 : 0,
            className: "align-items-baseline",
          },
          createElement(
            CompoundHeader,
            {
              mb: 0,
              mr: 2,
            },
            total
          ),
          layout === 4 &&
            createElement(
              El.Div,
              {
                mr: "auto",
                className: "text-".concat(movementColor),
              },
              movementString,
              " ",
              createElement(Icon, {
                name: !movement
                  ? "minus"
                  : movement > 0
                  ? "trending-up"
                  : "trending-down",
                thin: true,
              })
            )
        ),
        layout === 3 &&
          createElement(
            Fragment,
            null,
            createElement(
              El.Div,
              {
                d: "flex",
                mb: 2,
              },
              createElement("div", null, movementLabel),
              createElement(
                El.Div,
                {
                  ml: "auto",
                  className: "text-".concat(movementColor),
                },
                movementString,
                " ",
                createElement(Icon, {
                  name: !movement
                    ? "minus"
                    : movement > 0
                    ? "trending-up"
                    : "trending-down",
                  thin: true,
                })
              )
            ),
            typeof progressWidth !== "undefined" &&
              createElement(
                Progress,
                {
                  size: "sm",
                },
                createElement(Progress.Bar, {
                  color: progressColor,
                  width: progressWidth,
                })
              )
          ),
        children
      ),
      chart &&
        createElement(
          "div",
          {
            className: "card-chart",
          },
          chart
        )
    );
  }

  if (layout === 2) {
    return createElement(
      CompoundCard,
      {
        className: classes,
      },
      createElement(
        CompoundCard.Body,
        null,
        createElement(
          "div",
          {
            className: "card-value float-right text-".concat(movementColor),
          },
          movementString
        ),
        createElement(
          CompoundHeader.H3,
          {
            className: "mb-1",
          },
          total
        ),
        createElement(
          CompoundText,
          {
            muted: true,
          },
          label
        )
      ),
      chart &&
        createElement(
          "div",
          {
            className: "card-chart-bg",
          },
          chart
        )
    );
  }

  return createElement(
    CompoundCard,
    {
      className: classes,
    },
    createElement(
      CompoundCard.Body,
      {
        className: "p-3 text-center",
      },
      createElement(
        CompoundText,
        {
          color: movementColor,
          className: "text-right",
        },
        movementString,
        createElement(Icon, {
          name: !movement
            ? "minus"
            : movement > 0
            ? "chevron-up"
            : "chevron-down",
        })
      ),
      createElement(
        CompoundHeader,
        {
          className: "m-0",
        },
        total
      ),
      createElement(
        CompoundText,
        {
          color: "gray",
          className: " mb-4",
        },
        label
      )
    )
  );
}

var Steps = function Steps(_ref) {
  var _cn;

  var children = _ref.children,
    className = _ref.className,
    color = _ref.color,
    counter = _ref.counter,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "color",
      "counter",
    ]);

  var _className = classnames(
    "steps",
    ((_cn = {}),
    _defineProperty(_cn, "steps-".concat(color), color),
    _defineProperty(_cn, "steps-counter", counter),
    _cn),
    className
  );

  return React.createElement(
    El.Div,
    _extends(
      {
        p: 6,
        className: _className,
      },
      rest
    ),
    children
  );
};

var Step = function Step(_ref) {
  var children = _ref.children,
    className = _ref.className,
    active = _ref.active,
    tooltip = _ref.tooltip,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "active",
      "tooltip",
    ]);

  var _className = classnames(
    "step-item",
    {
      active: active,
    },
    className
  );

  var component = React.createElement(
    El.Span,
    _extends(
      {
        className: _className,
      },
      rest
    ),
    children
  );

  if (tooltip) {
    return React.createElement(
      Tooltip,
      {
        content: tooltip,
        placement: "top",
        arrow: false,
      },
      component
    );
  }

  return component;
};

var CompoundSteps = Steps;
CompoundSteps.Step = Step;

function StoreCard(_ref) {
  var children = _ref.children,
    title = _ref.title,
    subtitle = _ref.subtitle,
    price = _ref.price,
    imgUrl = _ref.imgUrl,
    imgAlt = _ref.imgAlt;
  return createElement(
    CompoundCard,
    null,
    createElement(
      CompoundCard.Body,
      null,
      createElement(
        "div",
        {
          className: "mb-4 text-center",
        },
        createElement("img", {
          src: imgUrl,
          alt: imgAlt,
        })
      ),
      createElement(CompoundCard.Title, null, title),
      createElement(
        CompoundText,
        {
          className: "card-subtitle",
        },
        subtitle
      ),
      createElement(
        "div",
        {
          className: "mt-5 d-flex align-items-center",
        },
        createElement(
          "div",
          {
            className: "product-price",
          },
          createElement("strong", null, price)
        ),
        createElement(
          "div",
          {
            className: "ml-auto",
          },
          createElement(
            CompoundButton,
            {
              color: "primary",
            },
            createElement(Icon, {
              prefix: "fe",
              name: "plus",
            }),
            "Add to cart"
          )
        )
      )
    )
  );
}

var Tab =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(Tab, _React$PureComponent);

    function Tab() {
      _classCallCheck(this, Tab);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Tab).apply(this, arguments)
      );
    }

    _createClass(Tab, [
      {
        key: "render",
        value: function render() {
          return this.props.children;
        },
      },
    ]);

    return Tab;
  })(PureComponent);

function TabbedContainer(props) {
  var tabs = Children.toArray(props.children);
  return createElement(
    Fragment,
    null,
    tabs.filter(function(tab) {
      return tab.props.title === props.selectedTitle;
    })
  );
}

function TabbedHeader(_ref) {
  var children = _ref.children,
    stateCallback = _ref.stateCallback,
    selectedTitle = _ref.selectedTitle,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "stateCallback",
      "selectedTitle",
    ]);

  var tabs = Children.toArray(children);
  return createElement(
    El.Ul,
    _extends(
      {
        classNames: "nav nav-tabs Tab_header_tabs",
      },
      rest
    ),
    tabs.map(function(_ref2, index) {
      var _ref2$props = _ref2.props,
        title = _ref2$props.title,
        tabRest = _objectWithoutProperties(_ref2$props, ["title"]);

      return createElement(
        CompoundNav.Item,
        _extends(
          {
            key: index,
            value: title,
            onClick: function onClick() {
              return stateCallback(title);
            },
            active: title === selectedTitle,
          },
          tabRest
        )
      );
    })
  );
}

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
    initialTab = _ref.initialTab;

  var _useState = useState(initialTab),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTitle = _useState2[0],
    setSelectedTitle = _useState2[1];

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      TabbedHeader,
      {
        selectedTitle: selectedTitle,
        stateCallback: setSelectedTitle,
      },
      children
    ),
    React.createElement("div", {
      className: "margin-bottom-24",
    }),
    React.createElement(
      TabbedContainer,
      {
        selectedTitle: selectedTitle,
      },
      children
    )
  );
};

var TabbedCard =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(TabbedCard, _React$PureComponent);

    function TabbedCard() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, TabbedCard);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(TabbedCard)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );

      _defineProperty(_assertThisInitialized(_this), "state", {
        selectedTitle: _this.props.initialTab,
      });

      return _this;
    }

    _createClass(TabbedCard, [
      {
        key: "render",
        value: function render() {
          var _this2 = this;

          var children = this.props.children;
          var selectedTitle = this.state.selectedTitle;
          return createElement(
            CompoundCard,
            null,
            createElement(
              CompoundCard.Header,
              null,
              createElement(
                TabbedHeader,
                {
                  selectedTitle: selectedTitle,
                  stateCallback: function stateCallback(newTitle) {
                    return _this2.setState({
                      selectedTitle: newTitle,
                    });
                  },
                },
                children
              )
            ),
            createElement(
              CompoundCard.Body,
              null,
              createElement(
                TabbedContainer,
                {
                  selectedTitle: selectedTitle,
                },
                children
              )
            )
          );
        },
      },
    ]);

    return TabbedCard;
  })(PureComponent);

function TableHeader(_ref) {
  var className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames(className);
  return React.createElement(
    El.Thead,
    _extends(
      {
        className: classes,
      },
      props
    ),
    children
  );
}

function TableBody(_ref) {
  var className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames(className);
  return createElement(
    El.Tbody,
    _extends(
      {
        className: classes,
      },
      props
    ),
    children
  );
}

function TableRow(_ref) {
  var className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames(className);
  return createElement(
    El.Tr,
    _extends(
      {
        className: classes,
      },
      props
    ),
    children
  );
}

function TableCol(_ref) {
  var className = _ref.className,
    children = _ref.children,
    alignContent = _ref.alignContent,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "alignContent",
    ]);

  var classes = classnames(
    _defineProperty({}, "text-".concat(alignContent), alignContent),
    className
  );
  return createElement(
    El.Td,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function TableColHeader(_ref) {
  var className = _ref.className,
    children = _ref.children,
    alignContent = _ref.alignContent,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "alignContent",
    ]);

  var classes = classnames(
    _defineProperty({}, "text-".concat(alignContent), alignContent),
    className
  );
  return React.createElement(
    El.Th,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function Table$1(_ref) {
  var className = _ref.className,
    children = _ref.children,
    cards = _ref.cards,
    striped = _ref.striped,
    responsive = _ref.responsive,
    highlightRowOnHover = _ref.highlightRowOnHover,
    hasOutline = _ref.hasOutline,
    verticalAlign = _ref.verticalAlign,
    headerItems = _ref.headerItems,
    bodyItems = _ref.bodyItems,
    props = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "cards",
      "striped",
      "responsive",
      "highlightRowOnHover",
      "hasOutline",
      "verticalAlign",
      "headerItems",
      "bodyItems",
    ]);

  var classes = classnames(
    "table",
    {
      "card-table": cards,
      "table-striped": striped,
      "table-hover": highlightRowOnHover,
      "table-outline": hasOutline,
      "table-vcenter": verticalAlign === "center",
    },
    className
  );
  var header =
    headerItems &&
    React.createElement(
      Table$1.Header,
      null,
      React.createElement(
        Table$1.Row,
        null,
        headerItems.map(function(_ref2, i) {
          var content = _ref2.content,
            item = _objectWithoutProperties(_ref2, ["content"]);

          return React.createElement(
            Table$1.ColHeader,
            _extends(
              {
                key: i,
              },
              item
            ),
            content
          );
        })
      )
    );
  var body =
    bodyItems &&
    React.createElement(
      Table$1.Body,
      null,
      bodyItems.map(function(row, i) {
        return React.createElement(
          Table$1.Row,
          _extends(
            {
              key: row.key,
            },
            row
          ),
          row.item.map(function(_ref3, i) {
            var content = _ref3.content,
              col = _objectWithoutProperties(_ref3, ["content"]);

            return React.createElement(
              Table$1.Col,
              _extends(
                {
                  key: i,
                },
                col
              ),
              content
            );
          })
        );
      })
    );
  var table = React.createElement(
    El.Table,
    _extends(
      {
        className: classes,
      },
      props
    ),
    header,
    body || children
  );
  return !responsive
    ? table
    : React.createElement(
        "div",
        {
          className: "table-responsive",
        },
        table
      );
}

Table$1.defaultProps = {
  cards: false,
  striped: false,
  responsive: false,
};
Table$1.Header = TableHeader;
Table$1.Body = TableBody;
Table$1.Row = TableRow;
Table$1.Col = TableCol;
Table$1.ColHeader = TableColHeader;

var CompoundTag = Badge;
CompoundTag.AddOn = BadgeAddOn;
CompoundTag.List = BadgeList;

function Timeline(_ref) {
  var className = _ref.className,
    children = _ref.children,
    simple = _ref.simple,
    rest = _objectWithoutProperties(_ref, ["className", "children", "simple"]);

  var classes = classnames(
    "list-timeline",
    {
      "list-timeline-simple": simple,
    },
    className
  );
  return React.createElement(
    El.Ul,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

function TimelineItemBadge(_ref) {
  var className = _ref.className,
    children = _ref.children,
    color = _ref.color,
    rest = _objectWithoutProperties(_ref, ["className", "children", "color"]);

  var classes = classnames(
    _defineProperty(
      {
        "list-timeline-badge": true,
      },
      "bg-".concat(color),
      color
    ),
    className
  );
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
}

var TimelineItemTime = function TimelineItemTime(_ref) {
  var className = _ref.className,
    children = _ref.children,
    active = _ref.active,
    rest = _objectWithoutProperties(_ref, ["className", "children", "active"]);

  var classes = classnames(
    {
      "list-timeline-time": true,
      "text-muted-black": active,
    },
    className
  );
  return React.createElement(
    El.Div,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children
  );
};

function TimelineItemTitle(_ref) {
  var children = _ref.children,
    className = _ref.className,
    active = _ref.active,
    rest = _objectWithoutProperties(_ref, ["children", "className", "active"]);

  var _className = classnames("list-timeline-title", {}, className);

  return React.createElement(
    El.P,
    _extends(
      {
        className: _className,
      },
      rest
    ),
    active ? React.createElement("strong", null, children) : children
  );
}

var TimelineItemDescription = forwardRef(function TimelineItemDescription(
  _ref,
  ref
) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ["children"]);

  return createElement(
    El.P,
    _extends(
      {
        classNames: "text-muted",
        ref: ref,
      },
      rest
    ),
    children
  );
});

function TimelineItem(_ref) {
  var className = _ref.className,
    children = _ref.children,
    titleFromProps = _ref.title,
    description = _ref.description,
    badge = _ref.badge,
    badgeColor = _ref.badgeColor,
    time = _ref.time,
    active = _ref.active,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "children",
      "title",
      "description",
      "badge",
      "badgeColor",
      "time",
      "active",
    ]);

  var classes = classnames("timeline-item", {}, className);
  var titleString =
    titleFromProps || (typeof children === "string" && children);
  var title =
    titleString &&
    React.createElement(
      TimelineItemTitle,
      {
        active: active,
      },
      titleString
    );
  var titleAndDescription =
    title &&
    React.createElement(
      React.Fragment,
      null,
      title,
      description &&
        React.createElement(TimelineItemDescription, null, description)
    );
  return React.createElement(
    El.Li,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    (badge || badgeColor) &&
      React.createElement(TimelineItemBadge, {
        color: badgeColor,
      }),
    active
      ? React.createElement("div", null, titleAndDescription)
      : titleAndDescription,
    children,
    time &&
      React.createElement(
        TimelineItemTime,
        {
          active: active,
        },
        time
      )
  );
}

function TimelineItemContent(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ["children", "className"]);

  var _className = classnames("list-timeline-content", {}, className);

  return React.createElement(
    El.Div,
    _extends(
      {
        className: _className,
      },
      rest
    ),
    children
  );
}

function TimelineItemIcon(_ref) {
  var children = _ref.children,
    className = _ref.className,
    active = _ref.active,
    bg = _ref.bg,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "active",
      "bg",
    ]);

  var _className = classnames(
    "list-timeline-icon",
    _defineProperty({}, "bg-".concat(bg), bg),
    className
  );

  return React.createElement(
    Icon,
    _extends(
      {
        className: _className,
      },
      rest
    ),
    active ? React.createElement("strong", null, children) : children
  );
}

var CompoundTimeline = Timeline;
CompoundTimeline.Item = TimelineItem;
CompoundTimeline.ItemBadge = TimelineItemBadge;
CompoundTimeline.ItemDescription = TimelineItemDescription;
CompoundTimeline.ItemTime = TimelineItemTime;
CompoundTimeline.ItemTitle = TimelineItemTitle;
CompoundTimeline.ItemContent = TimelineItemContent;
CompoundTimeline.ItemIcon = TimelineItemIcon;

var ToastHeader = function ToastHeader(_ref) {
  var children = _ref.children,
    className = _ref.className,
    avatar = _ref.avatar,
    title = _ref.title,
    timestamp = _ref.timestamp,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "avatar",
      "title",
      "timestamp",
    ]);

  var _className = classnames("toast-header", className);

  return React.createElement(
    El.Div,
    _extends(
      {
        className: _className,
      },
      rest
    ),
    avatar &&
      React.createElement(Avatar, {
        size: "sm",
        mr: 2,
        imageURL: avatar,
      }),
    title &&
      React.createElement(
        "strong",
        {
          className: "mr-auto",
        },
        title
      ),
    timestamp && React.createElement("small", null, "11 mins ago"),
    React.createElement(
      Button$1,
      {
        ml: 2,
        className: "close",
        "data-dismiss": "toast",
        "aria-label": "Close",
      },
      React.createElement(
        "span",
        {
          "aria-hidden": "true",
        },
        "\xD7"
      )
    ),
    children
  );
};

var ToastBody = function ToastBody(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, ["children", "className"]);

  var _className = classnames("toast-body", className);

  return React.createElement(
    El.Div,
    _extends(
      {
        className: _className,
      },
      rest
    ),
    children
  );
};

var Toast = function Toast(_ref) {
  var children = _ref.children,
    className = _ref.className,
    show = _ref.show,
    header = _ref.header,
    body = _ref.body,
    rest = _objectWithoutProperties(_ref, [
      "children",
      "className",
      "show",
      "header",
      "body",
    ]);

  var _className = classnames(
    "toast",
    {
      show: show,
    },
    className
  );

  return React.createElement(
    El.Div,
    _extends(
      {
        className: _className,
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true",
      },
      rest
    ),
    header && React.createElement(ToastHeader, header),
    body && React.createElement(ToastBody, null, body),
    children
  );
};

var CompoundToast = Toast;
CompoundToast.Header = ToastHeader;
CompoundToast.Body = ToastBody;

var PaginationItem = forwardRef(function(_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.Li : _ref$as,
    _ref$linkAs = _ref.linkAs,
    linkAs = _ref$linkAs === void 0 ? El.A : _ref$linkAs,
    href = _ref.href,
    value = _ref.value,
    active = _ref.active,
    disabled = _ref.disabled;
  var classes = classnames(
    {
      "page-item": true,
      disabled: disabled,
      active: active,
    },
    className
  );
  var Component = as;
  var LinkComponent = linkAs;
  return React.createElement(
    Component,
    {
      className: classes,
    },
    React.createElement(
      LinkComponent,
      {
        className: "page-link",
        href: href,
      },
      value || children
    )
  );
});

function Pagination(_ref) {
  var className = _ref.className,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? El.Ul : _ref$as,
    children = _ref.children,
    itemsObjects = _ref.itemsObjects,
    rest = _objectWithoutProperties(_ref, [
      "className",
      "as",
      "children",
      "itemsObjects",
    ]);

  var classes = classnames(
    {
      pagination: true,
    },
    className
  );
  var Component = as;
  return createElement(
    Component,
    _extends(
      {
        className: classes,
      },
      rest
    ),
    children,
    itemsObjects &&
      itemsObjects.map(function(item, index) {
        return createElement(PaginationItem, {
          key: index,
          href: item.href,
          value: item.value,
          active: item.active,
          disabled: item.disabled,
        });
      })
  );
}
Pagination.Item = PaginationItem;

var RouterContextProvider =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(RouterContextProvider, _React$Component);

    function RouterContextProvider() {
      _classCallCheck(this, RouterContextProvider);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(RouterContextProvider).apply(this, arguments)
      );
    }

    _createClass(RouterContextProvider, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this$props = this.props,
            callback = _this$props.callback,
            location = _this$props.location;
          callback(location);
        },
      },
      {
        key: "render",
        value: function render() {
          return null;
        },
      },
    ]);

    return RouterContextProvider;
  })(Component);

function StandaloneFormPage(props) {
  return createElement(
    "div",
    {
      className: "page",
    },
    createElement(
      "div",
      {
        className: "page-single",
      },
      createElement(
        "div",
        {
          className: "container",
        },
        createElement(
          "div",
          {
            className: "row",
          },
          createElement(
            "div",
            {
              className: "col col-login mx-auto",
            },
            createElement(
              "div",
              {
                className: "text-center mb-6",
              },
              createElement("img", {
                src: props.imageURL,
                className: "h-6",
                alt: "logo",
              })
            ),
            props.children
          )
        )
      )
    )
  );
}

function DefaultErrorPage(props) {
  var _onBackClick = function _onBackClick(event) {
    window.history.back();
    event.preventDefault();
    return true;
  };

  var _props$title = props.title,
    title = _props$title === void 0 ? "Error" : _props$title,
    _props$subtitle = props.subtitle,
    subtitle =
      _props$subtitle === void 0
        ? "Sorry an unkown error occurred"
        : _props$subtitle,
    details = props.details,
    _props$action = props.action,
    action = _props$action === void 0 ? "Go back" : _props$action;
  return createElement(
    CompoundPage,
    {
      className: "text-center",
    },
    createElement(
      Container,
      null,
      createElement(
        CompoundHeader.H1,
        {
          className: "display-1 text-muted mb-5",
        },
        title
      ),
      createElement(CompoundHeader.H2, null, subtitle),
      details &&
        createElement(
          CompoundHeader.H4,
          {
            className: "text-muted font-weight-normal mb-7",
          },
          details
        ),
      createElement(
        CompoundButton,
        {
          onClick: _onBackClick,
          className: "btn-primary",
          href: "",
        },
        createElement(Icon, {
          className: "mr-2",
          name: "arrow-left",
        }),
        action
      )
    )
  );
}

function Error400Page(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "400" : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle =
      _ref$subtitle === void 0
        ? "Oops... You just found an error page..."
        : _ref$subtitle,
    _ref$details = _ref.details,
    details =
      _ref$details === void 0
        ? "We are sorry but your request contains bad syntax and cannot be fulfilled..."
        : _ref$details,
    action = _ref.action;
  return createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action,
  });
}

function Error401Page(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "401" : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle =
      _ref$subtitle === void 0
        ? "Oops... You just found an error page..."
        : _ref$subtitle,
    _ref$details = _ref.details,
    details =
      _ref$details === void 0
        ? "We are sorry but you are not authorized to access this page..."
        : _ref$details,
    action = _ref.action;
  return createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action,
  });
}

function Error403Page(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "403" : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle =
      _ref$subtitle === void 0
        ? "Oops... You just found an error page..."
        : _ref$subtitle,
    _ref$details = _ref.details,
    details =
      _ref$details === void 0
        ? "We are sorry but you do not have permission to access this page..."
        : _ref$details,
    action = _ref.action;
  return createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action,
  });
}

function Error404Page(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "404" : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle =
      _ref$subtitle === void 0
        ? "Oops... You just found an error page..."
        : _ref$subtitle,
    _ref$details = _ref.details,
    details =
      _ref$details === void 0
        ? "We are sorry but the page you have requested can not be found..."
        : _ref$details,
    action = _ref.action;
  return createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action,
  });
}

function Error500Page(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "500" : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle =
      _ref$subtitle === void 0
        ? "Oops... You just found an error page..."
        : _ref$subtitle,
    _ref$details = _ref.details,
    details =
      _ref$details === void 0
        ? "We are sorry but your request contains bad syntax and cannot be fulfilled..."
        : _ref$details,
    action = _ref.action;
  return createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action,
  });
}

function Error503Page(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "503" : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle =
      _ref$subtitle === void 0
        ? "Oops... You just found an error page..."
        : _ref$subtitle,
    _ref$details = _ref.details,
    details =
      _ref$details === void 0
        ? "This page is temporarily unavailable.  Please reload your browser..."
        : _ref$details,
    action = _ref.action;
  return createElement(DefaultErrorPage, {
    title: title,
    subtitle: subtitle,
    details: details,
    action: action,
  });
}

function FormCard(_ref) {
  var children = _ref.children,
    action = _ref.action,
    method = _ref.method,
    onSubmit = _ref.onSubmit,
    title = _ref.title,
    buttonText = _ref.buttonText;
  return createElement(
    CompoundForm,
    {
      className: "card",
      onSubmit: onSubmit,
      action: action,
      method: method,
    },
    createElement(
      CompoundCard.Body,
      {
        className: "p-6",
      },
      createElement(
        CompoundCard.Title,
        {
          RootComponent: "div",
        },
        title
      ),
      children,
      createElement(
        CompoundForm.Footer,
        null,
        createElement(
          CompoundButton,
          {
            type: "submit",
            color: "primary",
            block: true,
          },
          buttonText
        )
      )
    )
  );
}

function FormTextInput(props) {
  var label = props.label,
    propsForInput = _objectWithoutProperties(props, ["label"]);

  var formInputComponent = createElement(CompoundForm.Input, propsForInput);
  return createElement(
    CompoundForm.Group,
    {
      label: label,
    },
    formInputComponent
  );
}

function FormCheckboxInput(props) {
  var formCheckboxComponent = createElement(CompoundForm.Checkbox, props);
  return createElement(CompoundForm.Group, null, formCheckboxComponent);
}

/**
 * Returns an object of fields with values set based on the touched and error values
 * If a value is both touched and has a non-empty error string it is returned as the fields value
 */

function touchedErrors() {
  var touched =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var errors =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fields =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return fields.reduce(function(acc, cur) {
    return Object.assign(
      acc,
      _defineProperty(
        {},
        cur,
        touched && touched[cur] && errors ? errors[cur] : ""
      )
    );
  }, {});
}
/**
 * A HOC that modifies the errors propso that it only returns errors if the the field
 * has also been touched
 * First takes an array of the field names, followed by the component
 */

function withTouchedErrors() {
  var fields =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return function withComponent(Component) {
    return function WithTouchedErrors(props) {
      var errors = touchedErrors(props.touched, props.errors, fields);
      return createElement(
        Component,
        _extends({}, props, {
          errors: errors,
        })
      );
    };
  };
}

var strings = {
  title: "Login to your Account",
  buttonText: "Login",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password",
};

/**
 * A login page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function LoginPage(props) {
  var action = props.action,
    method = props.method,
    onSubmit = props.onSubmit,
    onChange = props.onChange,
    onBlur = props.onBlur,
    values = props.values,
    _props$strings = props.strings,
    strings$1 = _props$strings === void 0 ? {} : _props$strings,
    errors = props.errors,
    logoUrl = props.logoUrl;
  return createElement(
    StandaloneFormPage,
    {
      imageURL: logoUrl,
    },
    createElement(
      FormCard,
      {
        buttonText: strings$1.buttonText || strings.buttonText,
        title: strings$1.title || strings.title,
        onSubmit: onSubmit,
        action: action,
        method: method,
      },
      createElement(FormTextInput, {
        name: "email",
        label: strings$1.emailLabel || strings.emailLabel,
        placeholder: strings$1.emailPlaceholder || strings.emailPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.email,
        error: errors && errors.email,
      }),
      createElement(FormTextInput, {
        name: "password",
        type: "password",
        label: strings$1.passwordLabel || strings.passwordLabel,
        placeholder:
          strings$1.passwordPlaceholder || strings.passwordPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.password,
        error: errors && errors.password,
      })
    )
  );
}

var LoginPageWithTouchedErrors = withTouchedErrors(["email", "password"])(
  LoginPage
);

var strings$1 = {
  title: "Create New Account",
  buttonText: "Create Account",
  nameLabel: "Name",
  namePlaceholder: "Enter name",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password",
  termsLabel: "Agree to the terms and policy",
};

/**
 * A register page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function RegisterPage(props) {
  var action = props.action,
    method = props.method,
    onSubmit = props.onSubmit,
    onChange = props.onChange,
    onBlur = props.onBlur,
    values = props.values,
    _props$strings = props.strings,
    strings = _props$strings === void 0 ? {} : _props$strings,
    errors = props.errors,
    logoUrl = props.logoUrl;
  return createElement(
    StandaloneFormPage,
    {
      imageURL: logoUrl,
    },
    createElement(
      FormCard,
      {
        buttonText: strings.buttonText || strings$1.buttonText,
        title: strings.title || strings$1.title,
        onSubmit: onSubmit,
        action: action,
        method: method,
      },
      createElement(FormTextInput, {
        name: "name",
        label: strings.nameLabel || strings$1.nameLabel,
        placeholder: strings.namePlaceholder || strings$1.namePlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.name,
        error: errors && errors.name,
      }),
      createElement(FormTextInput, {
        name: "email",
        label: strings.emailLabel || strings$1.emailLabel,
        placeholder: strings.emailPlaceholder || strings$1.emailPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.email,
        error: errors && errors.email,
      }),
      createElement(FormTextInput, {
        name: "password",
        type: "password",
        label: strings.passwordLabel || strings$1.passwordLabel,
        placeholder:
          strings.passwordPlaceholder || strings$1.passwordPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.password,
        error: errors && errors.password,
      }),
      createElement(FormCheckboxInput, {
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.terms,
        name: "terms",
        label: strings.termsLabel || strings$1.termsLabel,
      })
    )
  );
}

var RegisterPageWithTouchedErrors = withTouchedErrors([
  "name",
  "email",
  "password",
  "terms",
])(RegisterPage);

var strings$2 = {
  title: "Forgot Password",
  buttonText: "Request Password Change",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  instructions:
    "Enter your email address and your password will be reset and emailed to you.",
};

/**
 * A forgot password page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function ForgotPasswordPage(props) {
  var action = props.action,
    method = props.method,
    onSubmit = props.onSubmit,
    onChange = props.onChange,
    onBlur = props.onBlur,
    values = props.values,
    _props$strings = props.strings,
    strings = _props$strings === void 0 ? {} : _props$strings,
    errors = props.errors,
    logoUrl = props.logoUrl;
  return createElement(
    StandaloneFormPage,
    {
      imageURL: logoUrl,
    },
    createElement(
      FormCard,
      {
        buttonText: strings.buttonText || strings$2.buttonText,
        title: strings.title || strings$2.title,
        onSubmit: onSubmit,
        action: action,
        method: method,
      },
      createElement(
        "p",
        {
          className: "text-muted",
        },
        strings.instructions || strings$2.instructions
      ),
      createElement(FormTextInput, {
        name: "email",
        label: strings.emailLabel || strings$2.emailLabel,
        placeholder: strings.emailPlaceholder || strings$2.emailPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.email,
        error: errors && errors.email,
      })
    )
  );
}

var ForgotPasswordPageWithTouchedErrors = withTouchedErrors(["email"])(
  ForgotPasswordPage
);

export {
  AccountDropdown,
  CompoundAlert as Alert,
  Avatar,
  CompoundBadge as Badge,
  BlogCard,
  Breadcrumb,
  BreadcrumbItem,
  CompoundButton as Button,
  CompoundCard as Card,
  Comment,
  CommentsCard,
  ContactCard,
  Container,
  DefaultErrorPage,
  Dimmer,
  CompoundDropdown as Dropdown,
  El,
  Error400Page,
  Error401Page,
  Error403Page,
  Error404Page,
  Error500Page,
  Error503Page,
  ForgotPasswordPageWithTouchedErrors as ForgotPasswordPage,
  CompoundForm as Form,
  FormCard,
  FormCheckboxInput,
  FormTextInput,
  GalleryCard,
  Grid,
  CompoundHeader as Header,
  Icon,
  List,
  Loader,
  LoginPageWithTouchedErrors as LoginPage,
  CompoundMedia as Media,
  CompoundModal as Modal,
  CompoundNav as Nav,
  NavBarHeading,
  NavItem,
  NavLink,
  NavLinkTitle,
  NavSubItem,
  NavSubNav,
  NavSubmenu,
  NavSubmenuItem,
  CompoundNotification as Notification,
  CompoundNotification as NotificationProps,
  CompoundPage as Page,
  Pagination,
  PricingCard,
  Profile,
  Progress,
  ProgressCard,
  RegisterPageWithTouchedErrors as RegisterPage,
  Ribbon,
  RouterContextProvider,
  CompoundSite as Site,
  SiteLayoutCombined,
  SiteLayoutCondensed,
  SiteLayoutHorizontal,
  SiteLayoutVertical,
  SocialNetworksList,
  Spinner,
  Stamp,
  StampCard,
  StandaloneFormPage,
  StatsCard,
  CompoundSteps as Steps,
  StoreCard,
  Tab,
  TabbedCard,
  TabbedContainer,
  TabbedHeader,
  Table$1 as Table,
  Tabs,
  CompoundTag as Tag,
  CompoundText as Text,
  CompoundTimeline as Timeline,
  CompoundToast as Toast,
  Tooltip,
  colors,
  softColors,
};
