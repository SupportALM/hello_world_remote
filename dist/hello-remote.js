import m from "react";
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
var _ = m, d = Symbol.for("react.element"), u = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, R = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
function p(o, e, i) {
  var r, t = {}, l = null, f = null;
  i !== void 0 && (l = "" + i), e.key !== void 0 && (l = "" + e.key), e.ref !== void 0 && (f = e.ref);
  for (r in e)
    y.call(e, r) && !x.hasOwnProperty(r) && (t[r] = e[r]);
  if (o && o.defaultProps)
    for (r in e = o.defaultProps, e)
      t[r] === void 0 && (t[r] = e[r]);
  return { $$typeof: d, type: o, key: l, ref: f, props: t, _owner: R.current };
}
n.Fragment = u;
n.jsx = p;
n.jsxs = p;
s.exports = n;
var a = s.exports;
function v() {
  return console.log("Rendering HelloRemoteTool (simplified)..."), /* @__PURE__ */ a.jsx("div", { style: { fontSize: 24, padding: 20 }, children: "Hello World from Simplified Remote Tool!" });
}
export {
  v as default
};
