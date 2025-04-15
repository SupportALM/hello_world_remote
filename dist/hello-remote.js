import u from "react";
var s = { exports: {} }, n = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _ = u, d = Symbol.for("react.element"), m = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, x = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
function p(o, e, f) {
  var r, t = {}, l = null, i = null;
  f !== void 0 && (l = "" + f), e.key !== void 0 && (l = "" + e.key), e.ref !== void 0 && (i = e.ref);
  for (r in e)
    y.call(e, r) && !a.hasOwnProperty(r) && (t[r] = e[r]);
  if (o && o.defaultProps)
    for (r in e = o.defaultProps, e)
      t[r] === void 0 && (t[r] = e[r]);
  return { $$typeof: d, type: o, key: l, ref: i, props: t, _owner: x.current };
}
n.Fragment = m;
n.jsx = p;
n.jsxs = p;
s.exports = n;
var v = s.exports;
function c() {
  return /* @__PURE__ */ v.jsx("div", { style: { fontSize: 24, padding: 20 }, children: "Hello World from Bundled Remote Tool!" });
}
export {
  c as default
};
