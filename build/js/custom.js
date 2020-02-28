! function(e, n) {
  function t(e, n) {
    return typeof e === n
  }

  function o() {
    var e, n, o, s, a, i, r;
    for (var c in f)
      if (f.hasOwnProperty(c)) {
        if (e = [], n = f[c], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
          for (o = 0; o < n.options.aliases.length; o++) e.push(n.options.aliases[o].toLowerCase());
        for (s = t(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) i = e[a], r = i.split("."), 1 === r.length ? u[r[0]] = s : (!u[r[0]] || u[r[0]] instanceof Boolean || (u[r[0]] = new Boolean(u[r[0]])), u[r[0]][r[1]] = s), l.push((s ? "" : "no-") + r.join("-"))
      }
  }

  function s(e) {
    var n = d.className,
      t = u._config.classPrefix || "";
    if (p && (n = n.baseVal), u._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(o, "$1" + t + "js$2")
    }
    u._config.enableClasses && (n += " " + t + e.join(" " + t), p ? d.className.baseVal = n : d.className = n)
  }

  function a() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
  }

  function i() {
    var e = n.body;
    return e || (e = a(p ? "svg" : "body"), e.fake = !0), e
  }

  function r(e, t, o, s) {
    var r, l, f, c, u = "modernizr",
      p = a("div"),
      m = i();
    if (parseInt(o, 10))
      for (; o--;) f = a("div"), f.id = s ? s[o] : u + (o + 1), p.appendChild(f);
    return r = a("style"), r.type = "text/css", r.id = "s" + u, (m.fake ? m : p).appendChild(r), m.appendChild(p), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(n.createTextNode(e)), p.id = u, m.fake && (m.style.background = "", m.style.overflow = "hidden", c = d.style.overflow, d.style.overflow = "hidden", d.appendChild(m)), l = t(p, e), m.fake ? (m.parentNode.removeChild(m), d.style.overflow = c, d.offsetHeight) : p.parentNode.removeChild(p), !!l
  }
  var l = [],
    f = [],
    c = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, n) {
        var t = this;
        setTimeout(function() {
          n(t[e])
        }, 0)
      },
      addTest: function(e, n, t) {
        f.push({
          name: e,
          fn: n,
          options: t
        })
      },
      addAsyncTest: function(e) {
        f.push({
          name: null,
          fn: e
        })
      }
    },
    u = function() {};
  u.prototype = c, u = new u;
  var d = n.documentElement,
    p = "svg" === d.nodeName.toLowerCase(),
    m = c._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  c._prefixes = m;
  var h = c.testStyles = r;
  u.addTest("touchevents", function() {
    var t;
    if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
    else {
      var o = ["@media (", m.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      h(o, function(e) {
        t = 9 === e.offsetTop
      })
    }
    return t
  });
  var v = function() {
    var n = e.matchMedia || e.msMatchMedia;
    return n ? function(e) {
      var t = n(e);
      return t && t.matches || !1
    } : function(n) {
      var t = !1;
      return r("@media " + n + " { #modernizr { position: absolute; } }", function(n) {
        t = "absolute" == (e.getComputedStyle ? e.getComputedStyle(n, null) : n.currentStyle).position
      }), t
    }
  }();
  c.mq = v, o(), s(l), delete c.addTest, delete c.addAsyncTest;
  for (var g = 0; g < u._q.length; g++) u._q[g]();
  e.Modernizr = u
}(window, document);
