var b = { exports: {} }, m = {}, j = { exports: {} }, r = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y = Symbol.for("react.element"), A = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), B = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), $ = Symbol.iterator;
function J(e) {
  return e === null || typeof e != "object" ? null : (e = $ && e[$] || e["@@iterator"], typeof e == "function" ? e : null);
}
var C = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, O = Object.assign, P = {};
function p(e, t, o) {
  this.props = e, this.context = t, this.refs = P, this.updater = o || C;
}
p.prototype.isReactComponent = {};
p.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
p.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function g() {
}
g.prototype = p.prototype;
function S(e, t, o) {
  this.props = e, this.context = t, this.refs = P, this.updater = o || C;
}
var E = S.prototype = new g();
E.constructor = S;
O(E, p.prototype);
E.isPureReactComponent = !0;
var w = Array.isArray, I = Object.prototype.hasOwnProperty, R = { current: null }, T = { key: !0, ref: !0, __self: !0, __source: !0 };
function D(e, t, o) {
  var n, u = {}, i = null, c = null;
  if (t != null)
    for (n in t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      I.call(t, n) && !T.hasOwnProperty(n) && (u[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1)
    u.children = o;
  else if (1 < s) {
    for (var f = Array(s), a = 0; a < s; a++)
      f[a] = arguments[a + 2];
    u.children = f;
  }
  if (e && e.defaultProps)
    for (n in s = e.defaultProps, s)
      u[n] === void 0 && (u[n] = s[n]);
  return { $$typeof: y, type: e, key: i, ref: c, props: u, _owner: R.current };
}
function Y(e, t) {
  return { $$typeof: y, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function k(e) {
  return typeof e == "object" && e !== null && e.$$typeof === y;
}
function G(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(o) {
    return t[o];
  });
}
var x = /\/+/g;
function h(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? G("" + e.key) : t.toString(36);
}
function _(e, t, o, n, u) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var c = !1;
  if (e === null)
    c = !0;
  else
    switch (i) {
      case "string":
      case "number":
        c = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case y:
          case A:
            c = !0;
        }
    }
  if (c)
    return c = e, u = u(c), e = n === "" ? "." + h(c, 0) : n, w(u) ? (o = "", e != null && (o = e.replace(x, "$&/") + "/"), _(u, t, o, "", function(a) {
      return a;
    })) : u != null && (k(u) && (u = Y(u, o + (!u.key || c && c.key === u.key ? "" : ("" + u.key).replace(x, "$&/") + "/") + e)), t.push(u)), 1;
  if (c = 0, n = n === "" ? "." : n + ":", w(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var f = n + h(i, s);
      c += _(i, t, o, f, u);
    }
  else if (f = J(e), typeof f == "function")
    for (e = f.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, f = n + h(i, s++), c += _(i, t, o, f, u);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return c;
}
function d(e, t, o) {
  if (e == null)
    return e;
  var n = [], u = 0;
  return _(e, n, "", "", function(i) {
    return t.call(o, i, u++);
  }), n;
}
function K(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(o) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = o);
    }, function(o) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = o);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var l = { current: null }, v = { transition: null }, Q = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: v, ReactCurrentOwner: R };
function L() {
  throw Error("act(...) is not supported in production builds of React.");
}
r.Children = { map: d, forEach: function(e, t, o) {
  d(e, function() {
    t.apply(this, arguments);
  }, o);
}, count: function(e) {
  var t = 0;
  return d(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return d(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!k(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
r.Component = p;
r.Fragment = F;
r.Profiler = V;
r.PureComponent = S;
r.StrictMode = N;
r.Suspense = M;
r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q;
r.act = L;
r.cloneElement = function(e, t, o) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = O({}, e.props), u = e.key, i = e.ref, c = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, c = R.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (f in t)
      I.call(t, f) && !T.hasOwnProperty(f) && (n[f] = t[f] === void 0 && s !== void 0 ? s[f] : t[f]);
  }
  var f = arguments.length - 2;
  if (f === 1)
    n.children = o;
  else if (1 < f) {
    s = Array(f);
    for (var a = 0; a < f; a++)
      s[a] = arguments[a + 2];
    n.children = s;
  }
  return { $$typeof: y, type: e.type, key: u, ref: i, props: n, _owner: c };
};
r.createContext = function(e) {
  return e = { $$typeof: B, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: q, _context: e }, e.Consumer = e;
};
r.createElement = D;
r.createFactory = function(e) {
  var t = D.bind(null, e);
  return t.type = e, t;
};
r.createRef = function() {
  return { current: null };
};
r.forwardRef = function(e) {
  return { $$typeof: H, render: e };
};
r.isValidElement = k;
r.lazy = function(e) {
  return { $$typeof: W, _payload: { _status: -1, _result: e }, _init: K };
};
r.memo = function(e, t) {
  return { $$typeof: z, type: e, compare: t === void 0 ? null : t };
};
r.startTransition = function(e) {
  var t = v.transition;
  v.transition = {};
  try {
    e();
  } finally {
    v.transition = t;
  }
};
r.unstable_act = L;
r.useCallback = function(e, t) {
  return l.current.useCallback(e, t);
};
r.useContext = function(e) {
  return l.current.useContext(e);
};
r.useDebugValue = function() {
};
r.useDeferredValue = function(e) {
  return l.current.useDeferredValue(e);
};
r.useEffect = function(e, t) {
  return l.current.useEffect(e, t);
};
r.useId = function() {
  return l.current.useId();
};
r.useImperativeHandle = function(e, t, o) {
  return l.current.useImperativeHandle(e, t, o);
};
r.useInsertionEffect = function(e, t) {
  return l.current.useInsertionEffect(e, t);
};
r.useLayoutEffect = function(e, t) {
  return l.current.useLayoutEffect(e, t);
};
r.useMemo = function(e, t) {
  return l.current.useMemo(e, t);
};
r.useReducer = function(e, t, o) {
  return l.current.useReducer(e, t, o);
};
r.useRef = function(e) {
  return l.current.useRef(e);
};
r.useState = function(e) {
  return l.current.useState(e);
};
r.useSyncExternalStore = function(e, t, o) {
  return l.current.useSyncExternalStore(e, t, o);
};
r.useTransition = function() {
  return l.current.useTransition();
};
r.version = "18.3.1";
j.exports = r;
var X = j.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z = X, ee = Symbol.for("react.element"), te = Symbol.for("react.fragment"), re = Object.prototype.hasOwnProperty, ne = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
function U(e, t, o) {
  var n, u = {}, i = null, c = null;
  o !== void 0 && (i = "" + o), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (c = t.ref);
  for (n in t)
    re.call(t, n) && !oe.hasOwnProperty(n) && (u[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      u[n] === void 0 && (u[n] = t[n]);
  return { $$typeof: ee, type: e, key: i, ref: c, props: u, _owner: ne.current };
}
m.Fragment = te;
m.jsx = U;
m.jsxs = U;
b.exports = m;
var ue = b.exports;
function ie() {
  return /* @__PURE__ */ ue.jsx("div", { style: { fontSize: 24, padding: 20 }, children: "Hello World from Bundled Remote Tool!" });
}
export {
  ie as default
};
