/*Copyright (c) 2011, 2019, Oracle and/or its affiliates.  All rights reserved.*/
function e() {
  this.a = "moat-display-dynamic";
}
e.prototype.b = function(h) {
  var k = this;
  return new Promise(function(l, c) {
    "undefined" === typeof document &&
      c("moat_npm_module: Moat tag doesn't support current environment");
    var b = document.createElement("script"),
      d = document.querySelector("head");
    (b && d) || c("moat_npm_module: Moat tag can't be loaded");
    var a = Math.round(Date.now() / 1e3),
      m = a << 1;
    a =
      String.fromCharCode(77, 79, 65, 84) +
      window[String.fromCharCode(98, 116, 111, 97)](a);
    window[a] = k;
    window[a].resolve = l;
    window[a].reject = c;
    b.type = "text/javascript";
    d.insertBefore(b, d.childNodes[0] || null);
    b.src = "https://giphyscripts.s3.amazonaws.com/moat/moatad.js#" + m;
  });
};
var f = new e(),
  g = {};
g.adFindingMethod = f.a;
g.loadMoatTag = f.b;
module.exports = g;
