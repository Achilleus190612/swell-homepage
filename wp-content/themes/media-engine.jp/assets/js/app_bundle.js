!(function (e) {
  function t(t) {
    for (
      var o, s, a = t[0], c = t[1], u = t[2], f = 0, d = [];
      f < a.length;
      f++
    )
      (s = a[f]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && d.push(r[s][0]),
        (r[s] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    for (l && l(t); d.length; ) d.shift()();
    return i.push.apply(i, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], o = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== r[c] && (o = !1);
      }
      o && (i.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = { 0: 0 },
    i = [];
  function s(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = o),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          s.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "./");
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    c = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var u = 0; u < a.length; u++) t(a[u]);
  var l = c;
  i.push([144, 1]), n();
})({
  144: function (e, t, n) {
    "use strict";
    n.r(t), n(59), n(116), n(28), n(119), n(22), n(31), n(48), n(98);
    var o,
      r,
      i,
      s,
      a = n(145),
      c = (n(100), n(106)),
      u = n.n(c),
      l = n(107),
      f = n.n(l),
      d = n(58),
      p = n.n(d),
      v = (n(134), n(49), n(108)),
      h = n.n(v),
      y = {
        WIN_W: document.documentElement.clientWidth,
        WIN_H: window.innerHeight || document.documentElement.clientHeight,
        OS:
          (navigator.userAgent.indexOf("iPhone") > 0 &&
          -1 === navigator.userAgent.indexOf("iPad")
            ? (s = "iphone")
            : navigator.userAgent.indexOf("iPad") > 0
            ? (s = "ipad")
            : navigator.userAgent.indexOf("Android") > 0
            ? ((s = "and"),
              (s =
                -1 !== navigator.userAgent.indexOf("Mobile")
                  ? "and"
                  : "andtab"))
            : (s = "pc"),
          s),
        POS: 0,
        USER_AGENT:
          ((o = {
            browser: "",
            device: "",
            iosVer: 0,
            isiOS: !1,
            isMobile: !1,
            isTablet: !1,
            isTouch: !1,
            isModern: !1,
            addClass: Function,
          }),
          (r = window.navigator.userAgent.toLowerCase()),
          (i = window.navigator.appVersion.toLowerCase()),
          (o.browser = (function () {
            if (-1 !== r.indexOf("edge")) return "edge";
            if (-1 !== r.indexOf("iemobile")) return "iemobile";
            if (-1 !== r.indexOf("trident/7")) return "ie11";
            if (-1 !== r.indexOf("msie") && -1 === r.indexOf("opera")) {
              if (-1 !== i.indexOf("msie 6.")) return "ie6";
              if (-1 !== i.indexOf("msie 7.")) return "ie7";
              if (-1 !== i.indexOf("msie 8.")) return "ie8";
              if (-1 !== i.indexOf("msie 9.")) return "ie9";
              if (-1 !== i.indexOf("msie 10.")) return "ie10";
            }
            return -1 !== r.indexOf("chrome") && -1 === r.indexOf("edge")
              ? "chrome"
              : -1 !== r.indexOf("safari") && -1 === r.indexOf("chrome")
              ? "safari"
              : -1 !== r.indexOf("opera")
              ? "opera"
              : -1 !== r.indexOf("firefox")
              ? "firefox"
              : "unknown_browser";
          })()),
          (o.device =
            -1 !== r.indexOf("iphone") || -1 !== r.indexOf("ipod")
              ? "iphone"
              : -1 !== r.indexOf("ipad")
              ? "ipad"
              : -1 !== r.indexOf("android")
              ? "android"
              : -1 !== r.indexOf("windows") && -1 !== r.indexOf("phone")
              ? "windows_phone"
              : ""),
          (o.iosVer = (function () {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
              if (!navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))
                return !1;
              var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              return [
                parseInt(e[1], 10),
                parseInt(e[2], 10),
                parseInt(e[3] || "0", 10),
              ][0];
            }
            return 0;
          })()),
          (o.isiOS = "iphone" === o.device || "iPad" === o.device),
          (o.isMobile =
            -1 !== r.indexOf("mobi") ||
            "iphone" === o.device ||
            ("windows_phone" === o.device && -1 === r.indexOf("wpdesktop")) ||
            "iemobile" === o.device),
          (o.isTablet =
            "ipad" === o.device || ("android" === o.device && !o.isMobile)),
          (o.isTouch = "ontouchstart" in window),
          (o.isModern = !(
            "ie6" === o.browser ||
            "ie7" === o.browser ||
            "ie8" === o.browser ||
            "ie9" === o.browser ||
            (o.iosVer > 0 && o.iosVer < 8)
          )),
          (o.addClass = function () {
            var e = " ";
            (e +=
              "" !== o.browser
                ? "".concat(o.browser, " ")
                : "browser-unknown "),
              (e +=
                "" !== o.device ? "".concat(o.device, " ") : "device-unknown "),
              (e += o.isMobile ? "mobile " : "desktop "),
              (e += o.isTouch ? "touch " : "mouse "),
              (e += o.isModern ? "modern " : "old "),
              document.addEventListener("DOMContentLoaded", function () {
                document.documentElement.className += e;
              });
          }),
          o),
        PERFORMANCE: function () {
          var e = new h.a();
          document.body.appendChild(e.dom),
            requestAnimationFrame(function t() {
              e.begin(), e.end(), requestAnimationFrame(t);
            });
        },
        SC_TAB: 1024,
        SC_MOBILE: 768,
        LOADING_END: !1,
      },
      b =
        (n(102),
        {
          PC: window.matchMedia(
            "screen and (min-width: ".concat(y.SC_MOBILE, "px)")
          ),
          TAB: window.matchMedia(
            "(min-width: "
              .concat(y.SC_MOBILE, "px) and (max-width: ")
              .concat(y.SC_TAB - 1, "px)")
          ),
          SP: window.matchMedia("(max-width: ".concat(y.SC_MOBILE - 1, "px)")),
          OVER_LAPTOP: window.matchMedia(
            "(min-width: ".concat(y.SC_TAB, "px)")
          ),
          UNDER_LAPTOP: window.matchMedia(
            "(max-width: ".concat(y.SC_TAB - 1, "px)")
          ),
        });
    function m(e) {
      var t = e.getBoundingClientRect(),
        n = window.pageYOffset || document.documentElement.scrollTop;
      return t.top + n;
    }
    var w = function (e) {
      return e.dataset.rootMargin
        ? function () {
            var t = (y.WIN_H * parseInt(e.dataset.rootMargin, 10)) / 100;
            return "0px 0px ".concat(t, "px 0px");
          }
        : function () {
            var e = (y.WIN_H / 3) * -1;
            return "0px 0px ".concat(e, "px 0px");
          };
    };
    function O(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    n(33), n(103);
    var g = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.alias = t),
            (this.master = n);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function () {
                var e = this.alias.getAttribute("xlink:href");
                (e = e.split("#")[1]).match(/__/) && (e = e.split("__")[0]);
                var t = this.master
                  .querySelector(".".concat(e))
                  .getAttribute("viewBox");
                this.alias.closest("svg").setAttribute("viewBox", t);
              },
            },
          ]) && O(t.prototype, n),
          e
        );
      })(),
      _ =
        (n(50), n(51), n(52), n(34), n(53), n(54), n(55), n(56), n(57), n(109)),
      E = n.n(_),
      S = function e(t, n) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.html = document.documentElement),
          (this.uuid = E()()),
          (this.el = t),
          (this.props = n || null);
      };
    function x(e) {
      return (x =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function j(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function L(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function P(e, t) {
      return !t || ("object" !== x(t) && "function" != typeof t) ? C(e) : t;
    }
    function M(e) {
      return (M = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function C(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function k(e, t) {
      return (k =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var A = (function (e) {
        function t(e) {
          var n,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            j(this, t),
            ((n = P(this, M(t).call(this, e, o))).hoverClass = "is-hover"),
            (n.onMouseEnter = n.onMouseEnter.bind(C(n))),
            (n.onMouseLeave = n.onMouseLeave.bind(C(n))),
            n
          );
        }
        var n, o;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && k(e, t);
          })(t, e),
          (n = t),
          (o = [
            {
              key: "init",
              value: function () {
                this.el.addEventListener("mouseenter", this.onMouseEnter),
                  this.el.addEventListener("mouseleave", this.onMouseLeave);
              },
            },
            {
              key: "destroy",
              value: function () {
                this.el.removeEventListener("mouseenter", this.onMouseEnter),
                  this.el.removeEventListener("mouseleave", this.onMouseLeave);
              },
            },
            {
              key: "onMouseEnter",
              value: function (e) {
                e.preventDefault(),
                  this.el.classList.contains(this.hoverClass) ||
                    this.el.classList.add(this.hoverClass);
              },
            },
            {
              key: "onMouseLeave",
              value: function (e) {
                e.preventDefault(),
                  this.el.classList.contains(this.hoverClass) &&
                    this.el.classList.remove(this.hoverClass);
              },
            },
          ]) && L(n.prototype, o),
          t
        );
      })(S),
      T = n(110);
    function I(e) {
      return (I =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function B(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function q(e) {
      return (q = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function N(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function R(e, t) {
      return (R =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var z = (function (e) {
      function t(e, n) {
        var o, r;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          this,
          (o =
            !(r = q(t).call(this, e, n)) ||
            ("object" !== I(r) && "function" != typeof r)
              ? N(this)
              : r),
          n && Object.prototype.hasOwnProperty.call(n, "target")
            ? (o.target =
                "string" == typeof n.target
                  ? document.querySelector(n.target)
                  : n.target)
            : (o.target = document.querySelector(o.el.getAttribute("href"))),
          (o.onClick = o.onClick.bind(N(o))),
          o
        );
      }
      var n, o, r;
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && R(e, t);
        })(t, e),
        (n = t),
        (r = [
          {
            key: "move",
            value: function (e, t, n) {
              var o = m(e);
              Object(T.a)({
                targets: "html, body",
                scrollTop: o - 0,
                duration: 1e3,
                easing: "easeInOutQuart",
                begin: function (e) {
                  t && t(e);
                },
                complete: function (e) {
                  n && n(n);
                },
              });
            },
          },
        ]),
        (o = [
          {
            key: "init",
            value: function () {
              this.el.addEventListener("click", this.onClick);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.el.removeEventListener("click", this.onClick);
            },
          },
          {
            key: "onClick",
            value: function (e) {
              e.preventDefault(), this.target && this.moveTo();
            },
          },
          {
            key: "moveTo",
            value: function () {
              t.move(this.target, this.bigins || null, this.callbacks || null);
            },
          },
          {
            key: "setBigins",
            value: function (e) {
              this.bigins = e;
            },
          },
          {
            key: "setCallbacks",
            value: function (e) {
              this.callbacks = e;
            },
          },
        ]) && B(n.prototype, o),
        r && B(n, r),
        t
      );
    })(S);
    function W(e) {
      return (W =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function H(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function D(e) {
      return (D = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function V(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function U(e, t) {
      return (U =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var F = (function (e) {
      function t(e, n) {
        var o, r;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          this,
          ((o =
            !(r = D(t).call(this, e, n)) ||
            ("object" !== W(r) && "function" != typeof r)
              ? V(this)
              : r).isInview = !1),
          (o.observer = null),
          (o.options = {
            root: n.root || null,
            rootMargin: n.rootMargin
              ? n.rootMargin()
              : "0px 0px -".concat(y.WIN_H / 2, "px 0px"),
            threshold: n.threshold || [0],
          }),
          (o.onResize = Object(a.a)(o.onResize.bind(V(o)), 500)),
          o
        );
      }
      var n, o;
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && U(e, t);
        })(t, e),
        (n = t),
        (o = [
          {
            key: "init",
            value: function () {
              this.isOver() ? this.onScreenHandler() : this.setObserver(),
                window.addEventListener("resize", this.onResize);
            },
          },
          {
            key: "destroy",
            value: function () {
              null !== this.observer &&
                (this.observer.disconnect(), (this.observer = null)),
                window.removeEventListener("resize", this.onResize);
            },
          },
          {
            key: "onScreenHandler",
            value: function () {
              var e = this;
              (e.isInview = !0), e.destroy(), e.el.classList.add("is-inview");
            },
          },
          {
            key: "setObserver",
            value: function () {
              var e = this;
              e.observer && (e.observer.disconnect(), (e.observer = null)),
                (e.observer = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    t.isIntersecting && e.onScreenHandler(t);
                  });
                }, e.options)),
                e.observer.observe(e.el);
            },
          },
          {
            key: "isOver",
            value: function () {
              var e = parseInt(this.options.rootMargin.split(" ")[2], 10);
              return y.POS > m(this.el) + e;
            },
          },
          {
            key: "onResize",
            value: function () {
              this.isInview || (this.updateOptions(), this.setObserver());
            },
          },
          {
            key: "updateOptions",
            value: function () {
              var e = this.props.root || null,
                t = this.props.rootMargin
                  ? this.props.rootMargin()
                  : "0px 0px -".concat(y.WIN_H / 2, "px 0px"),
                n = this.props.threshold || null;
              this.options = { root: e, rootMargin: t, threshold: n };
            },
          },
        ]) && H(n.prototype, o),
        t
      );
    })(S);
    !(function () {
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
        Element.prototype.closest ||
          (Element.prototype.closest = function (e) {
            var t = this;
            do {
              if (t.matches(e)) return t;
              t = t.parentElement || t.parentNode;
            } while (null !== t && 1 === t.nodeType);
            return null;
          });
      var e = document.documentElement;
      function t() {
        (y.WIN_W = e.clientWidth),
          (y.WIN_H = window.innerHeight || e.clientHeight);
      }
      function n() {
        y.POS = window.pageYOffset;
      }
      y.USER_AGENT.addClass(),
        window.addEventListener("resize", Object(a.a)(t, 500)),
        window.addEventListener("scroll", Object(a.a)(n, 500)),
        window.addEventListener("DOMContentLoaded", function () {
          var o, r, i;
          const s = document.querySelector(".js-gnav"),
            c = s.querySelectorAll(".js-gnav__link.scroll"),
            l = s.querySelector(".js-gnav__trigger"),
            d = function (t) {
              t.preventDefault();
              var n = document.querySelector(
                  t.currentTarget.getAttribute("href")
                ),
                o = e.classList.contains("is-menuOpen")
                  ? function () {
                      e.classList.remove("is-menuOpen");
                    }
                  : null;
              z.move(n, null, o);
            };
          Array.from(c, function (e) {
            return e.addEventListener("click", d);
          }),
            t(),
            n(),
            u()({ reevaluate: !0 }),
            f()(null, { watchMQ: !0 }),
            (o = document.getElementById("svg-def")),
            (r = document.querySelectorAll("svg")),
            Array.from(r, function (e) {
              var t = e.querySelectorAll("use")[0];
              return !!t && (new g(t, o).init(), !0);
            }),
            (i = document.querySelectorAll(".js-scrollTo")) &&
              Array.from(i, function (e) {
                return new z(e).init();
              }),
            l.addEventListener("click", function (t) {
              t.preventDefault(), e.classList.toggle("is-menuOpen");
            }),
            new Promise(function (t) {
              var n = setInterval(function () {
                e.className.match(/touch|mouse/g) && (clearInterval(n), t(!0));
              }, 100);
            }).then(function (t) {
              var n;
              e.classList.add("is-pageLoaded"),
                (n = document.querySelectorAll(".js-hover")) &&
                  !e.classList.contains("touch") &&
                  Array.from(n, function (e) {
                    return new A(e).init();
                  }),
                (function () {
                  var e = document.querySelectorAll(".js-inview");
                  if (e) {
                    var t = document.querySelectorAll(".js-loadChecker")[0];
                    t
                      ? t.addEventListener("transitionend", function e() {
                          t.removeEventListener("transitionend", e), n();
                        })
                      : n();
                  }
                  function n() {
                    Array.from(e, function (e) {
                      return new F(e, { rootMargin: w(e) }).init();
                    });
                  }
                })(),
                (function () {
                  var e,
                    t,
                    n = document.querySelector(".js-floating"),
                    o = document.getElementById("footer");
                  function r(e) {
                    t && (t.disconnect(), (t = null), s()),
                      e.TAB.matches &&
                        (t = new IntersectionObserver(i, {
                          rootMargin: "0px",
                        })).observe(o);
                  }
                  function i(t) {
                    t.forEach(function (t) {
                      function o() {
                        (n.style.position = "absolute"),
                          (n.style.top = "".concat(
                            e - n.getBoundingClientRect().height - 10,
                            "px"
                          ));
                      }
                      function r() {
                        Object(a.a)(o, 500);
                      }
                      t.isIntersecting
                        ? (o(), window.addEventListener("resize", r))
                        : (s(), window.removeEventListener("resize", r));
                    });
                  }
                  function s() {
                    n.removeAttribute("style");
                  }
                  function c() {
                    e = m(o);
                  }
                  c(),
                    r(b),
                    b.SP.addListener(function () {
                      return r(b);
                    }),
                    b.TAB.addListener(function () {
                      return r(b);
                    }),
                    b.PC.addListener(function () {
                      return r(b);
                    }),
                    window.addEventListener("resize", Object(a.a)(c, 500));
                })(),
                (function () {
                  var e = document
                    .getElementById("service")
                    .querySelector(".".concat("js-clients-slider"));
                  if (e) {
                    var t = e.querySelector(
                        ".".concat("js-clients-slider__slideshow")
                      ),
                      n = {
                        init: !1,
                        containerModifierClass: "".concat(
                          "js-clients-slider",
                          "-"
                        ),
                        wrapperClass: "js-clients-slider__wrap",
                        slideClass: "js-clients-slider__slide",
                        slideActiveClass: "is-active",
                        setWrapperSize: !0,
                        watchOverflow: !0,
                        observer: !0,
                        observeParents: !0,
                        slidesPerView: "auto",
                        centeredSlides: !0,
                        spaceBetween: 30,
                        loop: !0,
                        speed: 1e3,
                        autoplay: { delay: 3500 },
                        pagination: {
                          el: e.querySelector(
                            ".".concat("js-clients-slider", "__paging")
                          ),
                          type: "bullets",
                          bulletActiveClass: "is-active",
                        },
                      };
                    new p.a(t, n).init();
                  }
                })(),
                (function () {
                  var e = document
                    .getElementById("service")
                    .querySelector(".".concat("js-media-slider"));
                  if (e) {
                    var t = {
                        init: !1,
                        containerModifierClass: "".concat(
                          "js-media-slider",
                          "-"
                        ),
                        wrapperClass: "js-media-slider__wrap",
                        slideClass: "js-media-slider__slide",
                        slideActiveClass: "is-active",
                        setWrapperSize: !0,
                        watchOverflow: !0,
                        observer: !0,
                        observeParents: !0,
                        slidesPerView: "auto",
                        centeredSlides: !0,
                        spaceBetween: 20,
                        loop: !0,
                        speed: 1e3,
                        autoplay: { delay: 3500 },
                      },
                      n = new p.a(e, t),
                      o = function (e) {
                        if (e.UNDER_LAPTOP.matches) {
                          if (n.initialized) return;
                          n.init();
                        } else {
                          if (!n.initialized) return;
                          n.destroy(!1, !0);
                        }
                      };
                    o(b),
                      b.OVER_LAPTOP.addListener(function () {
                        return o(b);
                      }),
                      b.UNDER_LAPTOP.addListener(function () {
                        return o(b);
                      });
                  }
                })();
            });
        });
    })();
  },
});
