/*Copyright (c) 2011, 2020, Oracle and/or its affiliates.  All rights reserved.*/
function moatLoader() {}
moatLoader.prototype.a = function(partnerCode, url) {
  var h = this;
  return new Promise(function(resolve, reject) {
    "undefined" === typeof document &&
      reject("moat_npm_module: Moat tag doesn't support current environment");
    partnerCode || reject("moat_npm_module: partnercode is required");
    var scriptTag = document.createElement("script"),
      headTag = document.querySelector("head");
    (scriptTag && headTag) ||
      reject("moat_npm_module: Moat tag can't be loaded");
    var randomId = Math.round(Date.now() / 1e3),
      l = randomId << 1;
    randomId =
      String.fromCharCode(77, 79, 65, 84) +
      window[String.fromCharCode(98, 116, 111, 97)](randomId);
    window[randomId] = h;
    window[randomId].resolve = resolve;
    window[randomId].reject = reject;
    window[randomId].adFindingMethod = "moat-display-dynamic";
    window[randomId].moatTagHostedFullUrl = url;
    scriptTag.type = "text/javascript";
    headTag.insertBefore(scriptTag, headTag.childNodes[0] || null);
    scriptTag.src =
      (url ? url : "https://z.moatads.com/" + partnerCode + "/moatad.js") +
      "#" +
      l;
  });
};
module.exports = { loadMoatTag: new moatLoader().a };
