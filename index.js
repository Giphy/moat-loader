/*Copyright (c) 2011, 2020, Oracle and/or its affiliates.  All rights reserved.*/
function f() {}
f.prototype.a = function(g, d) {
  var h = this;
  return new Promise(function(k, b) {
    "undefined" === typeof document &&
      b("moat_npm_module: Moat tag doesn't support current environment");
    g || b("moat_npm_module: partnercode is required");
    var c = document.createElement("script"),
      e = document.querySelector("head");
    (c && e) || b("moat_npm_module: Moat tag can't be loaded");
    var a = Math.round(Date.now() / 1e3),
      l = a << 1;
    a =
      String.fromCharCode(77, 79, 65, 84) +
      window[String.fromCharCode(98, 116, 111, 97)](a);
    window[a] = h;
    window[a].resolve = k;
    window[a].reject = b;
    window[a].adFindingMethod = "moat-display-dynamic";
    window[a].moatTagHostedFullUrl = d;
    c.type = "text/javascript";
    e.insertBefore(c, e.childNodes[0] || null);
    c.src = (d ? d : "https://z.moatads.com/" + g + "/moatad.js") + "#" + l;
  });
};
module.exports = { loadMoatTag: new f().a };
