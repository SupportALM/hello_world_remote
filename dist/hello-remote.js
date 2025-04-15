import n from "react";
var d = { exports: {} }, l = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p = n, u = Symbol.for("react.element"), c = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, R = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
function m(r, e, i) {
  var o, t = {}, s = null, f = null;
  i !== void 0 && (s = "" + i), e.key !== void 0 && (s = "" + e.key), e.ref !== void 0 && (f = e.ref);
  for (o in e)
    _.call(e, o) && !a.hasOwnProperty(o) && (t[o] = e[o]);
  if (r && r.defaultProps)
    for (o in e = r.defaultProps, e)
      t[o] === void 0 && (t[o] = e[o]);
  return { $$typeof: u, type: r, key: s, ref: f, props: t, _owner: R.current };
}
l.Fragment = c;
l.jsx = m;
l.jsxs = m;
d.exports = l;
var v = d.exports;
function x() {
  return n.useEffect(() => {
    console.log("HelloRemoteTool component mounted!"), console.log("React version detected by HelloRemoteTool:", n.version);
  }, []), console.log("Rendering HelloRemoteTool..."), /* @__PURE__ */ v.jsxs("div", { style: { fontSize: 24, padding: 20 }, children: [
    "Hello World from Bundled Remote Tool! (React Version: ",
    n.version,
    ")"
  ] });
}
export {
  x as default
};
