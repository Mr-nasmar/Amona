! function() {
    var e = {
            679: function(e, t, r) {
                "use strict";
                var n = r(864),
                    i = {
                        childContextTypes: !0,
                        contextType: !0,
                        contextTypes: !0,
                        defaultProps: !0,
                        displayName: !0,
                        getDefaultProps: !0,
                        getDerivedStateFromError: !0,
                        getDerivedStateFromProps: !0,
                        mixins: !0,
                        propTypes: !0,
                        type: !0
                    },
                    a = {
                        name: !0,
                        length: !0,
                        prototype: !0,
                        caller: !0,
                        callee: !0,
                        arguments: !0,
                        arity: !0
                    },
                    l = {
                        $$typeof: !0,
                        compare: !0,
                        defaultProps: !0,
                        displayName: !0,
                        propTypes: !0,
                        type: !0
                    },
                    o = {};

                function c(e) {
                    return n.isMemo(e) ? l : o[e.$$typeof] || i
                }
                o[n.ForwardRef] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, o[n.Memo] = l;
                var s = Object.defineProperty,
                    h = Object.getOwnPropertyNames,
                    f = Object.getOwnPropertySymbols,
                    m = Object.getOwnPropertyDescriptor,
                    u = Object.getPrototypeOf,
                    d = Object.prototype;
                e.exports = function e(t, r, n) {
                    if ("string" != typeof r) {
                        if (d) {
                            var i = u(r);
                            i && i !== d && e(t, i, n)
                        }
                        var l = h(r);
                        f && (l = l.concat(f(r)));
                        for (var o = c(t), p = c(r), E = 0; E < l.length; ++E) {
                            var w = l[E];
                            if (!(a[w] || n && n[w] || p && p[w] || o && o[w])) {
                                var g = m(r, w);
                                try {
                                    s(t, w, g)
                                } catch (e) {}
                            }
                        }
                    }
                    return t
                }
            },
            703: function(e, t, r) {
                "use strict";
                var n = r(414);

                function i() {}

                function a() {}
                a.resetWarningCache = i, e.exports = function() {
                    function e(e, t, r, i, a, l) {
                        if (l !== n) {
                            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw o.name = "Invariant Violation", o
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var r = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: a,
                        resetWarningCache: i
                    };
                    return r.PropTypes = r, r
                }
            },
            697: function(e, t, r) {
                e.exports = r(703)()
            },
            414: function(e) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            },
            921: function(e, t) {
                "use strict";
                var r = "function" == typeof Symbol && Symbol.for,
                    n = r ? Symbol.for("react.element") : 60103,
                    i = r ? Symbol.for("react.portal") : 60106,
                    a = r ? Symbol.for("react.fragment") : 60107,
                    l = r ? Symbol.for("react.strict_mode") : 60108,
                    o = r ? Symbol.for("react.profiler") : 60114,
                    c = r ? Symbol.for("react.provider") : 60109,
                    s = r ? Symbol.for("react.context") : 60110,
                    h = r ? Symbol.for("react.async_mode") : 60111,
                    f = r ? Symbol.for("react.concurrent_mode") : 60111,
                    m = r ? Symbol.for("react.forward_ref") : 60112,
                    u = r ? Symbol.for("react.suspense") : 60113,
                    d = r ? Symbol.for("react.suspense_list") : 60120,
                    p = r ? Symbol.for("react.memo") : 60115,
                    E = r ? Symbol.for("react.lazy") : 60116,
                    w = r ? Symbol.for("react.block") : 60121,
                    g = r ? Symbol.for("react.fundamental") : 60117,
                    x = r ? Symbol.for("react.responder") : 60118,
                    v = r ? Symbol.for("react.scope") : 60119;

                function y(e) {
                    if ("object" == typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case n:
                                switch (e = e.type) {
                                    case h:
                                    case f:
                                    case a:
                                    case o:
                                    case l:
                                    case u:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case s:
                                            case m:
                                            case E:
                                            case p:
                                            case c:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                            case i:
                                return t
                        }
                    }
                }

                function C(e) {
                    return y(e) === f
                }
                t.AsyncMode = h, t.ConcurrentMode = f, t.ContextConsumer = s, t.ContextProvider = c, t.Element = n, t.ForwardRef = m, t.Fragment = a, t.Lazy = E, t.Memo = p, t.Portal = i, t.Profiler = o, t.StrictMode = l, t.Suspense = u, t.isAsyncMode = function(e) {
                    return C(e) || y(e) === h
                }, t.isConcurrentMode = C, t.isContextConsumer = function(e) {
                    return y(e) === s
                }, t.isContextProvider = function(e) {
                    return y(e) === c
                }, t.isElement = function(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === n
                }, t.isForwardRef = function(e) {
                    return y(e) === m
                }, t.isFragment = function(e) {
                    return y(e) === a
                }, t.isLazy = function(e) {
                    return y(e) === E
                }, t.isMemo = function(e) {
                    return y(e) === p
                }, t.isPortal = function(e) {
                    return y(e) === i
                }, t.isProfiler = function(e) {
                    return y(e) === o
                }, t.isStrictMode = function(e) {
                    return y(e) === l
                }, t.isSuspense = function(e) {
                    return y(e) === u
                }, t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === a || e === f || e === o || e === l || e === u || e === d || "object" == typeof e && null !== e && (e.$$typeof === E || e.$$typeof === p || e.$$typeof === c || e.$$typeof === s || e.$$typeof === m || e.$$typeof === g || e.$$typeof === x || e.$$typeof === v || e.$$typeof === w)
                }, t.typeOf = y
            },
            864: function(e, t, r) {
                "use strict";
                e.exports = r(921)
            },
            585: function(e) {
                e.exports = Array.isArray || function(e) {
                    return "[object Array]" == Object.prototype.toString.call(e)
                }
            },
            658: function(e, t, r) {
                var n = r(585);
                e.exports = function e(t, r, i) {
                    return n(r) || (i = r || i, r = []), i = i || {}, t instanceof RegExp ? function(e, t) {
                        var r = e.source.match(/\((?!\?)/g);
                        if (r)
                            for (var n = 0; n < r.length; n++) t.push({
                                name: n,
                                prefix: null,
                                delimiter: null,
                                optional: !1,
                                repeat: !1,
                                partial: !1,
                                asterisk: !1,
                                pattern: null
                            });
                        return h(e, t)
                    }(t, r) : n(t) ? function(t, r, n) {
                        for (var i = [], a = 0; a < t.length; a++) i.push(e(t[a], r, n).source);
                        return h(new RegExp("(?:" + i.join("|") + ")", f(n)), r)
                    }(t, r, i) : function(e, t, r) {
                        return m(a(e, r), t, r)
                    }(t, r, i)
                }, e.exports.parse = a, e.exports.compile = function(e, t) {
                    return o(a(e, t), t)
                }, e.exports.tokensToFunction = o, e.exports.tokensToRegExp = m;
                var i = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

                function a(e, t) {
                    for (var r, n = [], a = 0, l = 0, o = "", h = t && t.delimiter || "/"; null != (r = i.exec(e));) {
                        var f = r[0],
                            m = r[1],
                            u = r.index;
                        if (o += e.slice(l, u), l = u + f.length, m) o += m[1];
                        else {
                            var d = e[l],
                                p = r[2],
                                E = r[3],
                                w = r[4],
                                g = r[5],
                                x = r[6],
                                v = r[7];
                            o && (n.push(o), o = "");
                            var y = null != p && null != d && d !== p,
                                C = "+" === x || "*" === x,
                                b = "?" === x || "*" === x,
                                F = r[2] || h,
                                D = w || g;
                            n.push({
                                name: E || a++,
                                prefix: p || "",
                                delimiter: F,
                                optional: b,
                                repeat: C,
                                partial: y,
                                asterisk: !!v,
                                pattern: D ? s(D) : v ? ".*" : "[^" + c(F) + "]+?"
                            })
                        }
                    }
                    return l < e.length && (o += e.substr(l)), o && n.push(o), n
                }

                function l(e) {
                    return encodeURI(e).replace(/[\/?#]/g, (function(e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                    }))
                }

                function o(e, t) {
                    for (var r = new Array(e.length), i = 0; i < e.length; i++) "object" == typeof e[i] && (r[i] = new RegExp("^(?:" + e[i].pattern + ")$", f(t)));
                    return function(t, i) {
                        for (var a = "", o = t || {}, c = (i || {}).pretty ? l : encodeURIComponent, s = 0; s < e.length; s++) {
                            var h = e[s];
                            if ("string" != typeof h) {
                                var f, m = o[h.name];
                                if (null == m) {
                                    if (h.optional) {
                                        h.partial && (a += h.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + h.name + '" to be defined')
                                }
                                if (n(m)) {
                                    if (!h.repeat) throw new TypeError('Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(m) + "`");
                                    if (0 === m.length) {
                                        if (h.optional) continue;
                                        throw new TypeError('Expected "' + h.name + '" to not be empty')
                                    }
                                    for (var u = 0; u < m.length; u++) {
                                        if (f = c(m[u]), !r[s].test(f)) throw new TypeError('Expected all "' + h.name + '" to match "' + h.pattern + '", but received `' + JSON.stringify(f) + "`");
                                        a += (0 === u ? h.prefix : h.delimiter) + f
                                    }
                                } else {
                                    if (f = h.asterisk ? encodeURI(m).replace(/[?#]/g, (function(e) {
                                            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                                        })) : c(m), !r[s].test(f)) throw new TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + f + '"');
                                    a += h.prefix + f
                                }
                            } else a += h
                        }
                        return a
                    }
                }

                function c(e) {
                    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
                }

                function s(e) {
                    return e.replace(/([=!:$\/()])/g, "\\$1")
                }

                function h(e, t) {
                    return e.keys = t, e
                }

                function f(e) {
                    return e && e.sensitive ? "" : "i"
                }

                function m(e, t, r) {
                    n(t) || (r = t || r, t = []);
                    for (var i = (r = r || {}).strict, a = !1 !== r.end, l = "", o = 0; o < e.length; o++) {
                        var s = e[o];
                        if ("string" == typeof s) l += c(s);
                        else {
                            var m = c(s.prefix),
                                u = "(?:" + s.pattern + ")";
                            t.push(s), s.repeat && (u += "(?:" + m + u + ")*"), l += u = s.optional ? s.partial ? m + "(" + u + ")?" : "(?:" + m + "(" + u + "))?" : m + "(" + u + ")"
                        }
                    }
                    var d = c(r.delimiter || "/"),
                        p = l.slice(-d.length) === d;
                    return i || (l = (p ? l.slice(0, -d.length) : l) + "(?:" + d + "(?=$))?"), l += a ? "$" : i && p ? "" : "(?=" + d + "|$)", h(new RegExp("^" + l, f(r)), t)
                }
            }
        },
        t = {};

    function r(n) {
        var i = t[n];
        if (void 0 !== i) return i.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, r), a.exports
    }
    r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, {
                a: t
            }), t
        }, r.d = function(e, t) {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, r.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var e = window.React,
                t = r.n(e),
                n = window.ReactDOM,
                i = r.n(n),
                a = window.wp.i18n,
                l = () => {
                    const {
                        admin_url: t
                    } = amona_theme_builder;
                    let r = [(0, e.createElement)("a", {
                        href: t
                    }, (0, a.__)("Dashboard", "amona")), (0, a.__)("Site Builder", "amona")];
                    return (0, e.createElement)("nav", {
                        className: "nas-tb-breadcrumbs"
                    }, r.map(((t, n) => (0, e.createElement)("span", {
                        className: "nas-tb-crumb",
                        key: n
                    }, t, n < r.length - 1 && (0, e.createElement)("span", {
                        className: "nas-tb-crumb-icon"
                    }, (0, e.createElement)("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-breadcrumb-icon"
                    }, (0, e.createElement)("path", {
                        d: "M4.90625 10.2734L8.17578 7.0039L4.90625 3.73438",
                        stroke: "#4B5563",
                        strokeWidth: "1.08984",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })))))))
                },
                o = () => (0, e.createElement)("div", {
                    className: "nas-tb-header"
                }, (0, e.createElement)("div", {
                    className: "nas-tb-header-items"
                }, (0, e.createElement)("svg", {
                    width: "40",
                    height: "40",
                    viewBox: "0 0 162 162",
                    fill: "none",
                    stroke: "url(#paint0_linear_2349_55861)",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, e.createElement)("path", {
                    d: "M81 101h60V81c-1-33.14-26.86-60-60-60a60 60 0 1 0 0 120",
                    strokeWidth: "40"
                }), (0, e.createElement)("defs", null, (0, e.createElement)("linearGradient", {
                    id: "paint0_linear_2349_55861",
                    x1: "-5.96046e-07",
                    y1: "40",
                    x2: "47.0588",
                    y2: "28.2353",
                    gradientUnits: "userSpaceOnUse"
                }, (0, e.createElement)("stop", {
                    stopColor: "#0a5b9f"
                }), (0, e.createElement)("stop", {
                    offset: "1",
                    stopColor: "#159489"
                })))), (0, e.createElement)("h2", {
                    className: "nas-tb-main-title"
                }, amona_theme_builder.title), (0, e.createElement)(l, null)), (0, e.createElement)("div", {
                    className: "nas-tb-header-close",
                    onClick: () => window.location.href = amona_theme_builder.admin_url
                }, (0, e.createElement)("div", null, (0, e.createElement)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, e.createElement)("path", {
                    d: "M6 18L18 6M6 6L18 18",
                    stroke: "#475569",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })))));

            function c(e, t) {
                return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, c(e, t)
            }

            function s(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, c(e, t)
            }

            function h() {
                return h = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, h.apply(this, arguments)
            }

            function f(e) {
                return "/" === e.charAt(0)
            }

            function m(e, t) {
                for (var r = t, n = r + 1, i = e.length; n < i; r += 1, n += 1) e[r] = e[n];
                e.pop()
            }
            var u = function(e, t) {
                    void 0 === t && (t = "");
                    var r, n = e && e.split("/") || [],
                        i = t && t.split("/") || [],
                        a = e && f(e),
                        l = t && f(t),
                        o = a || l;
                    if (e && f(e) ? i = n : n.length && (i.pop(), i = i.concat(n)), !i.length) return "/";
                    if (i.length) {
                        var c = i[i.length - 1];
                        r = "." === c || ".." === c || "" === c
                    } else r = !1;
                    for (var s = 0, h = i.length; h >= 0; h--) {
                        var u = i[h];
                        "." === u ? m(i, h) : ".." === u ? (m(i, h), s++) : s && (m(i, h), s--)
                    }
                    if (!o)
                        for (; s--; s) i.unshift("..");
                    !o || "" === i[0] || i[0] && f(i[0]) || i.unshift("");
                    var d = i.join("/");
                    return r && "/" !== d.substr(-1) && (d += "/"), d
                },
                d = !0,
                p = "Invariant failed";

            function E(e, t) {
                if (!e) {
                    if (d) throw new Error(p);
                    var r = "function" == typeof t ? t() : t,
                        n = r ? "".concat(p, ": ").concat(r) : p;
                    throw new Error(n)
                }
            }

            function w(e) {
                return "/" === e.charAt(0) ? e : "/" + e
            }

            function g(e, t) {
                return function(e, t) {
                    return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length))
                }(e, t) ? e.substr(t.length) : e
            }

            function x(e) {
                return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e
            }

            function v(e) {
                var t = e.pathname,
                    r = e.search,
                    n = e.hash,
                    i = t || "/";
                return r && "?" !== r && (i += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (i += "#" === n.charAt(0) ? n : "#" + n), i
            }

            function y(e, t, r, n) {
                var i;
                "string" == typeof e ? (i = function(e) {
                    var t = e || "/",
                        r = "",
                        n = "",
                        i = t.indexOf("#"); - 1 !== i && (n = t.substr(i), t = t.substr(0, i));
                    var a = t.indexOf("?");
                    return -1 !== a && (r = t.substr(a), t = t.substr(0, a)), {
                        pathname: t,
                        search: "?" === r ? "" : r,
                        hash: "#" === n ? "" : n
                    }
                }(e), i.state = t) : (void 0 === (i = h({}, e)).pathname && (i.pathname = ""), i.search ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search) : i.search = "", i.hash ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash) : i.hash = "", void 0 !== t && void 0 === i.state && (i.state = t));
                try {
                    i.pathname = decodeURI(i.pathname)
                } catch (e) {
                    throw e instanceof URIError ? new URIError('Pathname "' + i.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e
                }
                return r && (i.key = r), n ? i.pathname ? "/" !== i.pathname.charAt(0) && (i.pathname = u(i.pathname, n.pathname)) : i.pathname = n.pathname : i.pathname || (i.pathname = "/"), i
            }

            function C() {
                var e = null,
                    t = [];
                return {
                    setPrompt: function(t) {
                        return e = t,
                            function() {
                                e === t && (e = null)
                            }
                    },
                    confirmTransitionTo: function(t, r, n, i) {
                        if (null != e) {
                            var a = "function" == typeof e ? e(t, r) : e;
                            "string" == typeof a ? "function" == typeof n ? n(a, i) : i(!0) : i(!1 !== a)
                        } else i(!0)
                    },
                    appendListener: function(e) {
                        var r = !0;

                        function n() {
                            r && e.apply(void 0, arguments)
                        }
                        return t.push(n),
                            function() {
                                r = !1, t = t.filter((function(e) {
                                    return e !== n
                                }))
                            }
                    },
                    notifyListeners: function() {
                        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        t.forEach((function(e) {
                            return e.apply(void 0, r)
                        }))
                    }
                }
            }
            var b = !("undefined" == typeof window || !window.document || !window.document.createElement);

            function F(e, t) {
                t(window.confirm(e))
            }
            var D = "popstate",
                _ = "hashchange";

            function k() {
                try {
                    return window.history.state || {}
                } catch (e) {
                    return {}
                }
            }
            var L = r(697),
                M = r.n(L),
                H = 1073741823,
                N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : {},
                S = t().createContext || function(t, r) {
                    var n, i, a, l = "__create-react-context-" + ((N[a = "__global_unique_id__"] = (N[a] || 0) + 1) + "__"),
                        o = function(e) {
                            function t() {
                                var t, r, n;
                                return (t = e.apply(this, arguments) || this).emitter = (r = t.props.value, n = [], {
                                    on: function(e) {
                                        n.push(e)
                                    },
                                    off: function(e) {
                                        n = n.filter((function(t) {
                                            return t !== e
                                        }))
                                    },
                                    get: function() {
                                        return r
                                    },
                                    set: function(e, t) {
                                        r = e, n.forEach((function(e) {
                                            return e(r, t)
                                        }))
                                    }
                                }), t
                            }
                            s(t, e);
                            var n = t.prototype;
                            return n.getChildContext = function() {
                                var e;
                                return (e = {})[l] = this.emitter, e
                            }, n.componentWillReceiveProps = function(e) {
                                if (this.props.value !== e.value) {
                                    var t, n = this.props.value,
                                        i = e.value;
                                    ((a = n) === (l = i) ? 0 !== a || 1 / a == 1 / l : a != a && l != l) ? t = 0: (t = "function" == typeof r ? r(n, i) : H, 0 != (t |= 0) && this.emitter.set(e.value, t))
                                }
                                var a, l
                            }, n.render = function() {
                                return this.props.children
                            }, t
                        }(e.Component);
                    o.childContextTypes = ((n = {})[l] = M().object.isRequired, n);
                    var c = function(e) {
                        function r() {
                            var t;
                            return (t = e.apply(this, arguments) || this).state = {
                                value: t.getValue()
                            }, t.onUpdate = function(e, r) {
                                0 != ((0 | t.observedBits) & r) && t.setState({
                                    value: t.getValue()
                                })
                            }, t
                        }
                        s(r, e);
                        var n = r.prototype;
                        return n.componentWillReceiveProps = function(e) {
                            var t = e.observedBits;
                            this.observedBits = null == t ? H : t
                        }, n.componentDidMount = function() {
                            this.context[l] && this.context[l].on(this.onUpdate);
                            var e = this.props.observedBits;
                            this.observedBits = null == e ? H : e
                        }, n.componentWillUnmount = function() {
                            this.context[l] && this.context[l].off(this.onUpdate)
                        }, n.getValue = function() {
                            return this.context[l] ? this.context[l].get() : t
                        }, n.render = function() {
                            return (e = this.props.children, Array.isArray(e) ? e[0] : e)(this.state.value);
                            var e
                        }, r
                    }(e.Component);
                    return c.contextTypes = ((i = {})[l] = M().object, i), {
                        Provider: o,
                        Consumer: c
                    }
                },
                V = S,
                B = r(658),
                O = r.n(B);

            function P(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    a = Object.keys(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }
            r(864), r(679);
            var R = function(e) {
                    var t = V();
                    return t.displayName = e, t
                },
                $ = R("Router-History"),
                A = function(e) {
                    var t = V();
                    return t.displayName = e, t
                },
                T = A("Router"),
                j = function(e) {
                    function r(t) {
                        var r;
                        return (r = e.call(this, t) || this).state = {
                            location: t.history.location
                        }, r._isMounted = !1, r._pendingLocation = null, t.staticContext || (r.unlisten = t.history.listen((function(e) {
                            r._isMounted ? r.setState({
                                location: e
                            }) : r._pendingLocation = e
                        }))), r
                    }
                    s(r, e), r.computeRootMatch = function(e) {
                        return {
                            path: "/",
                            url: "/",
                            params: {},
                            isExact: "/" === e
                        }
                    };
                    var n = r.prototype;
                    return n.componentDidMount = function() {
                        this._isMounted = !0, this._pendingLocation && this.setState({
                            location: this._pendingLocation
                        })
                    }, n.componentWillUnmount = function() {
                        this.unlisten && this.unlisten()
                    }, n.render = function() {
                        return t().createElement(T.Provider, {
                            value: {
                                history: this.props.history,
                                location: this.state.location,
                                match: r.computeRootMatch(this.state.location.pathname),
                                staticContext: this.props.staticContext
                            }
                        }, t().createElement($.Provider, {
                            children: this.props.children || null,
                            value: this.props.history
                        }))
                    }, r
                }(t().Component);
            t().Component, t().Component;
            var Z = {},
                W = 0;

            function U(e, t) {
                void 0 === t && (t = {}), ("string" == typeof t || Array.isArray(t)) && (t = {
                    path: t
                });
                var r = t,
                    n = r.path,
                    i = r.exact,
                    a = void 0 !== i && i,
                    l = r.strict,
                    o = void 0 !== l && l,
                    c = r.sensitive,
                    s = void 0 !== c && c;
                return [].concat(n).reduce((function(t, r) {
                    if (!r && "" !== r) return null;
                    if (t) return t;
                    var n = function(e, t) {
                            var r = "" + t.end + t.strict + t.sensitive,
                                n = Z[r] || (Z[r] = {});
                            if (n[e]) return n[e];
                            var i = [],
                                a = {
                                    regexp: O()(e, i, t),
                                    keys: i
                                };
                            return W < 1e4 && (n[e] = a, W++), a
                        }(r, {
                            end: a,
                            strict: o,
                            sensitive: s
                        }),
                        i = n.regexp,
                        l = n.keys,
                        c = i.exec(e);
                    if (!c) return null;
                    var h = c[0],
                        f = c.slice(1),
                        m = e === h;
                    return a && !m ? null : {
                        path: r,
                        url: "/" === r && "" === h ? "/" : h,
                        isExact: m,
                        params: l.reduce((function(e, t, r) {
                            return e[t.name] = f[r], e
                        }), {})
                    }
                }), null)
            }
            var I = function(e) {
                function r() {
                    return e.apply(this, arguments) || this
                }
                return s(r, e), r.prototype.render = function() {
                    var e = this;
                    return t().createElement(T.Consumer, null, (function(r) {
                        r || E(!1);
                        var n = e.props.location || r.location,
                            i = h({}, r, {
                                location: n,
                                match: e.props.computedMatch ? e.props.computedMatch : e.props.path ? U(n.pathname, e.props) : r.match
                            }),
                            a = e.props,
                            l = a.children,
                            o = a.component,
                            c = a.render;
                        return Array.isArray(l) && 0 === l.length && (l = null), t().createElement(T.Provider, {
                            value: i
                        }, i.match ? l ? "function" == typeof l ? l(i) : l : o ? t().createElement(o, i) : c ? c(i) : null : "function" == typeof l ? l(i) : null)
                    }))
                }, r
            }(t().Component);
            t().Component;
            var z = function(e) {
                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    return s(r, e), r.prototype.render = function() {
                        var e = this;
                        return t().createElement(T.Consumer, null, (function(r) {
                            r || E(!1);
                            var n, i, a = e.props.location || r.location;
                            return t().Children.forEach(e.props.children, (function(e) {
                                if (null == i && t().isValidElement(e)) {
                                    n = e;
                                    var l = e.props.path || e.props.from;
                                    i = l ? U(a.pathname, h({}, e.props, {
                                        path: l
                                    })) : r.match
                                }
                            })), i ? t().cloneElement(n, {
                                location: a,
                                computedMatch: i
                            }) : null
                        }))
                    }, r
                }(t().Component),
                q = t().useContext;

            function K() {
                return q(T).location
            }
            var J = ({
                    label: t,
                    icon: r,
                    layout: n,
                    template: i
                }) => {
                    const a = K(),
                        [l, o] = (0, e.useState)(!1),
                        c = new URLSearchParams(a.search),
                        s = c.get("page"),
                        h = c.get("path"),
                        f = "theme-builder" === s && n === h;
                    (0, e.useEffect)((() => {
                        o(f)
                    }), [h, n]);
                    const m = l ? "nas-tb-sidebar-item-selected" : "",
                        [u, d] = (0, e.useState)(!1);
                    return (0, e.createElement)(e.Fragment, null, (0, e.createElement)("div", {
                        className: `nas-tb-sidebar-item ${m}`,
                        onMouseEnter: () => {
                            d(!0)
                        },
                        onMouseLeave: () => {
                            d(!1)
                        }
                    }, (0, e.createElement)("div", {
                        className: "nas-tb-sidebar-item-left"
                    }, (0, e.createElement)("span", {
                        className: "nas-tb-sidebar-item-icon"
                    }, r), (0, e.createElement)("span", {
                        className: `nas-tb-sidebar-item-label ${"404 Page"===t||"Archive"===t?"nas-tb-sidebar-item-svg":""} `
                    }, t)), (0, e.createElement)("div", {
                        className: "nas-tb-sidebar-item-right"
                    }, u && (0, e.createElement)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        className: "w-6 h-6"
                    }, (0, e.createElement)("path", {
                        fillRule: "evenodd",
                        d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
                        clipRule: "evenodd"
                    })))))
                },
                G = ({
                    items: t
                }) => {
                    const r = K(),
                        [n, i] = (0, e.useState)(!1),
                        l = new URLSearchParams(r.search),
                        o = l.get("page"),
                        c = l.get("path"),
                        s = "theme-builder" === o && "all-layouts" === c;
                    (0, e.useEffect)((() => {
                        i(s)
                    }), [c]);
                    const h = n ? "nas-tb-sidebar-item-selected" : "",
                        [f, m] = (0, e.useState)(!1);
                    return (0, e.createElement)("div", {
                        className: "nas-tb-sidebar"
                    }, (0, e.createElement)("div", {
                        className: `nas-tb-sidebar-header ${h}`,
                        onMouseEnter: () => {
                            m(!0)
                        },
                        onMouseLeave: () => {
                            m(!1)
                        }
                    }, (0, e.createElement)("div", {
                        className: "nas-tb-sidebar-header-left"
                    }, (0, e.createElement)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M2.39844 9.24418C2.39844 8.85015 2.59899 8.4805 2.93665 8.25215L11.2566 2.62564C11.7008 2.32531 12.2961 2.32531 12.7402 2.62564L21.0602 8.25216C21.3979 8.4805 21.5984 8.85015 21.5984 9.24418V19.7745C21.5984 20.7829 20.7388 21.6004 19.6784 21.6004H4.31844C3.25805 21.6004 2.39844 20.7829 2.39844 19.7745V9.24418Z",
                        stroke: "#4B5563",
                        strokeWidth: "2"
                    })), (0, e.createElement)("h2", null, (0, a.__)("All Layouts", "amona"))), (0, e.createElement)("div", {
                        className: "nas-tb-sidebar-header-right"
                    }, f && (0, e.createElement)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        className: "w-6 h-6"
                    }, (0, e.createElement)("path", {
                        fillRule: "evenodd",
                        d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
                        clipRule: "evenodd"
                    })))), (0, e.createElement)("div", {
                        className: "nas-tb-sidebar-subtitle"
                    }, (0, e.createElement)("h3", null, (0, a.__)("Website Parts", "amona"))), t.map(((t, r) => (0, e.createElement)(J, {
                        key: r,
                        label: t.label,
                        icon: t.icon,
                        layout: t.layout,
                        template: t.template
                    }))), (0, e.createElement)("div", {
                        className: "nas-tb-help-divider"
                    }), (0, e.createElement)("div", {
                        className: "nas-tb-sidebar-help nas-tb-sidebar-item",
                        onClick: () => window.open(amona_theme_builder.amona_docs_page_url, "_blank")
                    }, (0, e.createElement)("svg", {
                        width: "24",
                        height: "25",
                        viewBox: "0 0 24 25",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M11.9974 17.3004V17.3426M9.59844 9.54572C9.59844 8.1952 10.673 7.10039 11.9984 7.10039C13.3239 7.10039 14.3984 8.1952 14.3984 9.54572C14.3984 10.8962 13.3239 11.991 11.9984 11.991C11.9984 11.991 11.9974 12.7209 11.9974 13.6213M21.5984 12.5004C21.5984 17.8023 17.3004 22.1004 11.9984 22.1004C6.6965 22.1004 2.39844 17.8023 2.39844 12.5004C2.39844 7.19846 6.6965 2.90039 11.9984 2.90039C17.3004 2.90039 21.5984 7.19846 21.5984 12.5004Z",
                        stroke: "#4B5563",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })), (0, e.createElement)("span", null, (0, a.__)("Help", "amona"))))
                },
                Y = [{
                    label: (0, a.__)("Header", "amona"),
                    layout: "header",
                    template: "",
                    icon: (0, e.createElement)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M2.99844 9.00039H20.9984M5.99844 21.6004H17.9984C19.9867 21.6004 21.5984 19.9886 21.5984 18.0004V6.00039C21.5984 4.01217 19.9867 2.40039 17.9984 2.40039H5.99844C4.01021 2.40039 2.39844 4.01217 2.39844 6.00039V18.0004C2.39844 19.9886 4.01021 21.6004 5.99844 21.6004Z",
                        stroke: "#4B5563",
                        strokeWidth: "2"
                    }))
                }, {
                    label: (0, a.__)("Footer", "amona"),
                    layout: "footer",
                    template: "",
                    icon: (0, e.createElement)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M21.0016 15.0004L3.00156 15.0004M18.0016 2.40039L6.00156 2.40039C4.01334 2.40039 2.40156 4.01217 2.40156 6.00039L2.40156 18.0004C2.40156 19.9886 4.01334 21.6004 6.00156 21.6004L18.0016 21.6004C19.9898 21.6004 21.6016 19.9886 21.6016 18.0004L21.6016 6.00039C21.6016 4.01217 19.9898 2.40039 18.0016 2.40039Z",
                        stroke: "#4B5563",
                        strokeWidth: "2"
                    }))
                }, {
                    label: (0, a.__)("Hooks", "amona"),
                    layout: "hooks",
                    template: "",
                    icon: (0, e.createElement)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M9.59844 15.0004L6.59844 12.0004L9.59844 9.00039M14.3984 9.00039L17.3984 12.0004L14.3984 15.0004M4.79844 21.6004C3.47295 21.6004 2.39844 20.5259 2.39844 19.2004V4.80039C2.39844 3.47491 3.47295 2.40039 4.79844 2.40039H19.1984C20.5239 2.40039 21.5984 3.47491 21.5984 4.80039V19.2004C21.5984 20.5259 20.5239 21.6004 19.1984 21.6004H4.79844Z",
                        stroke: "#4B5563",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                }, {
                    label: (0, a.__)("Inside Post/Page", "amona"),
                    layout: "content",
                    template: "",
                    icon: (0, e.createElement)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M2.99844 7.80039H20.9984M17.9984 12.0004H5.99844M13.1984 16.8004H5.99844M5.99844 21.6004H17.9984C19.9867 21.6004 21.5984 19.9886 21.5984 18.0004V6.00039C21.5984 4.01217 19.9867 2.40039 17.9984 2.40039H5.99844C4.01021 2.40039 2.39844 4.01217 2.39844 6.00039V18.0004C2.39844 19.9886 4.01021 21.6004 5.99844 21.6004Z",
                        stroke: "#4B5563",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }))
                }, {
                    label: (0, a.__)("Single", "amona"),
                    layout: "template",
                    template: "single",
                    icon: (0, e.createElement)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M8.99844 2.40039V21.6004M13.1984 6.00039H16.7984M13.1984 9.60039H16.7984M13.1984 13.2004H13.7984M5.99844 21.6004H17.9984C19.9867 21.6004 21.5984 19.9886 21.5984 18.0004V6.00039C21.5984 4.01217 19.9867 2.40039 17.9984 2.40039H5.99844C4.01021 2.40039 2.39844 4.01217 2.39844 6.00039V18.0004C2.39844 19.9886 4.01021 21.6004 5.99844 21.6004Z",
                        stroke: "#4B5563",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }))
                }, {
                    label: (0, a.__)("Archive", "amona"),
                    layout: "template",
                    template: "archive",
                    icon: (0, e.createElement)("svg", {
                        width: "54",
                        height: "35",
                        viewBox: "0 0 54 35",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-sidebar-item-svg"
                    }, (0, e.createElement)("path", {
                        d: "M-31 25.0004L-36 20.002M-28.5 11.002H-23M-18.5 21.502H-21.5M-31 1.50195L-18.5 2.50195M-18.5 23.502L-21.5 6.00195M-24 33.502L-26.5 30.502M32.3984 13.0004V25.0004C32.3984 26.9886 34.0102 28.6004 35.9984 28.6004C37.9867 28.6004 46.0102 28.6004 47.9984 28.6004C49.9867 28.6004 51.5984 26.9886 51.5984 25.0004V13.0004C51.5984 11.0122 49.9867 9.40039 47.9984 9.40039H35.9984C34.0102 9.40039 32.3984 11.0122 32.3984 13.0004Z",
                        stroke: "#4B5563",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, e.createElement)("mask", {
                        id: "path-2-inside-1_6833_64713",
                        fill: "white"
                    }, (0, e.createElement)("rect", {
                        x: "35.7031",
                        y: "12",
                        width: "6",
                        height: "6",
                        rx: "0.3"
                    })), (0, e.createElement)("rect", {
                        x: "35.7031",
                        y: "12",
                        width: "6",
                        height: "6",
                        rx: "0.3",
                        stroke: "#4B5563",
                        strokeWidth: "3",
                        mask: "url(#path-2-inside-1_6833_64713)"
                    }), (0, e.createElement)("rect", {
                        x: "42.7031",
                        y: "13",
                        width: "6",
                        height: "1.5",
                        rx: "0.75",
                        fill: "#4B5563"
                    }), (0, e.createElement)("rect", {
                        x: "42.7031",
                        y: "15.5",
                        width: "5",
                        height: "1.5",
                        rx: "0.75",
                        fill: "#4B5563"
                    }), (0, e.createElement)("mask", {
                        id: "path-5-inside-2_6833_64713",
                        fill: "white"
                    }, (0, e.createElement)("rect", {
                        x: "35.7031",
                        y: "20",
                        width: "6",
                        height: "6",
                        rx: "0.3"
                    })), (0, e.createElement)("rect", {
                        x: "35.7031",
                        y: "20",
                        width: "6",
                        height: "6",
                        rx: "0.3",
                        stroke: "#4B5563",
                        strokeWidth: "3",
                        mask: "url(#path-5-inside-2_6833_64713)"
                    }), (0, e.createElement)("rect", {
                        x: "42.7031",
                        y: "21",
                        width: "6",
                        height: "1.5",
                        rx: "0.75",
                        fill: "#4B5563"
                    }), (0, e.createElement)("rect", {
                        x: "42.7031",
                        y: "23.5",
                        width: "5",
                        height: "1.5",
                        rx: "0.75",
                        fill: "#4B5563"
                    }))
                }, {
                    label: (0, a.__)("404 Page", "amona"),
                    layout: "404-page",
                    template: "",
                    icon: (0, e.createElement)("svg", {
                        width: "54",
                        height: "24",
                        viewBox: "0 0 54 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-sidebar-item-svg"
                    }, (0, e.createElement)("path", {
                        d: "M-4.2 4.50195H-9M32.3969 6.00039V18.0004C32.3969 19.9886 34.0086 21.6004 35.9969 21.6004H47.9969C49.9851 21.6004 51.5969 19.9886 51.5969 18.0004V6.00039C51.5969 4.01217 49.9851 2.40039 47.9969 2.40039H35.9969C34.0086 2.40039 32.3969 4.01217 32.3969 6.00039Z",
                        stroke: "#4B5563",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, e.createElement)("path", {
                        d: "M38.0231 14.9167C37.8902 14.9167 37.7785 14.8694 37.6881 14.775C37.5977 14.675 37.5525 14.5528 37.5525 14.4083V10.4917L37.72 10.5333L36.1805 12.525L36.1406 12.4167H38.9643C39.092 12.4167 39.1983 12.4611 39.2834 12.55C39.3685 12.6389 39.411 12.75 39.411 12.8833C39.411 13.0111 39.3685 13.1194 39.2834 13.2083C39.1983 13.2917 39.092 13.3333 38.9643 13.3333H35.4786C35.3669 13.3333 35.2579 13.2861 35.1516 13.1917C35.0505 13.0972 35 12.9806 35 12.8417C35 12.7194 35.0399 12.6083 35.1196 12.5083L37.6402 9.28333C37.6828 9.22222 37.7386 9.175 37.8077 9.14167C37.8769 9.10278 37.954 9.08333 38.0391 9.08333C38.1773 9.08333 38.289 9.13333 38.3741 9.23333C38.4645 9.32778 38.5097 9.44722 38.5097 9.59167V14.4083C38.5097 14.5528 38.4618 14.675 38.3661 14.775C38.2757 14.8694 38.1614 14.9167 38.0231 14.9167Z",
                        fill: "#4B5563"
                    }), (0, e.createElement)("path", {
                        d: "M42.0584 15C41.601 15 41.2128 14.875 40.8938 14.625C40.58 14.3694 40.3407 14.0167 40.1759 13.5667C40.011 13.1111 39.9286 12.5889 39.9286 12C39.9286 11.4056 40.011 10.8833 40.1759 10.4333C40.3407 9.98333 40.58 9.63333 40.8938 9.38333C41.2128 9.12778 41.601 9 42.0584 9C42.5157 9 42.9012 9.12778 43.215 9.38333C43.534 9.63333 43.776 9.98333 43.9408 10.4333C44.1057 10.8833 44.1881 11.4056 44.1881 12C44.1881 12.5889 44.1057 13.1111 43.9408 13.5667C43.776 14.0167 43.534 14.3694 43.215 14.625C42.9012 14.875 42.5157 15 42.0584 15ZM42.0584 14C42.2817 14 42.4731 13.9278 42.6327 13.7833C42.7975 13.6333 42.9251 13.4111 43.0155 13.1167C43.1059 12.8167 43.1511 12.4444 43.1511 12C43.1511 11.55 43.1059 11.1778 43.0155 10.8833C42.9251 10.5889 42.7975 10.3694 42.6327 10.225C42.4731 10.075 42.2817 10 42.0584 10C41.8403 10 41.6489 10.075 41.484 10.225C41.3192 10.3694 41.1916 10.5889 41.1012 10.8833C41.0108 11.1778 40.9656 11.55 40.9656 12C40.9656 12.4444 41.0108 12.8167 41.1012 13.1167C41.1916 13.4111 41.3192 13.6333 41.484 13.7833C41.6489 13.9278 41.8403 14 42.0584 14Z",
                        fill: "#4B5563"
                    }), (0, e.createElement)("path", {
                        d: "M47.6121 14.9167C47.4791 14.9167 47.3675 14.8694 47.2771 14.775C47.1867 14.675 47.1415 14.5528 47.1415 14.4083V10.4917L47.309 10.5333L45.7695 12.525L45.7296 12.4167H48.5533C48.6809 12.4167 48.7873 12.4611 48.8724 12.55C48.9575 12.6389 49 12.75 49 12.8833C49 13.0111 48.9575 13.1194 48.8724 13.2083C48.7873 13.2917 48.6809 13.3333 48.5533 13.3333H45.0676C44.9559 13.3333 44.8469 13.2861 44.7405 13.1917C44.6395 13.0972 44.589 12.9806 44.589 12.8417C44.589 12.7194 44.6289 12.6083 44.7086 12.5083L47.2292 9.28333C47.2718 9.22222 47.3276 9.175 47.3967 9.14167C47.4658 9.10278 47.543 9.08333 47.628 9.08333C47.7663 9.08333 47.878 9.13333 47.9631 9.23333C48.0535 9.32778 48.0987 9.44722 48.0987 9.59167V14.4083C48.0987 14.5528 48.0508 14.675 47.9551 14.775C47.8647 14.8694 47.7503 14.9167 47.6121 14.9167Z",
                        fill: "#4B5563"
                    }))
                }],
                Q = {
                    Header: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 304",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        width: "323.5",
                        height: "304",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        width: "323.5",
                        height: "56",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "20",
                        y: "19",
                        width: "48",
                        height: "18",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "149",
                        y: "24",
                        width: "26",
                        height: "8",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "117",
                        y: "24",
                        width: "26",
                        height: "8",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "181",
                        y: "24",
                        width: "25",
                        height: "8",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "212",
                        y: "24",
                        width: "26",
                        height: "8",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "259",
                        y: "24",
                        width: "26",
                        height: "8",
                        rx: "2",
                        fill: "#F5F9FE"
                    })),
                    Footer: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 304",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        x: "0.5",
                        width: "323.5",
                        height: "304",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        x: "0.5",
                        y: "248",
                        width: "323.5",
                        height: "56",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "20.5",
                        y: "263",
                        width: "48",
                        height: "18",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "163.5",
                        y: "263",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "117.5",
                        y: "263",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "117.5",
                        y: "273",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "163.5",
                        y: "273",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "209.5",
                        y: "273",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "254.5",
                        y: "273",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "117.5",
                        y: "283",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "163.5",
                        y: "283",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "209.5",
                        y: "283",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "254.5",
                        y: "283",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "209.5",
                        y: "263",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "254.5",
                        y: "263",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    })),
                    Hooks: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 304",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        x: "0.5",
                        width: "323.5",
                        height: "304",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "50.5",
                        width: "226",
                        height: "103",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("path", {
                        d: "M145.417 88.3327L131.75 101.999L145.417 115.666M179.583 88.3327L193.25 101.999L179.583 115.666M169.333 74.666L155.667 129.333",
                        stroke: "white",
                        strokeWidth: "6.83333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "173.5",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "191.5",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "209.5",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "227.5",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "245.5",
                        width: "154",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    })),
                    Archive: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 304",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        width: "323.5",
                        height: "304",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "29",
                        width: "107",
                        height: "63",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "102",
                        width: "107",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "119",
                        width: "62",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "29",
                        width: "107",
                        height: "63",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "102",
                        width: "107",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "119",
                        width: "62",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "146",
                        width: "107",
                        height: "63",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "219",
                        width: "107",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "236",
                        width: "62",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "146",
                        width: "107",
                        height: "63",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "219",
                        width: "107",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "236",
                        width: "62",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    })),
                    Single: (0, e.createElement)("svg", {
                        width: "324",
                        height: "308",
                        viewBox: "0 0 324 308",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        x: "0.5",
                        width: "323.5",
                        height: "308",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "30",
                        width: "25",
                        height: "25",
                        rx: "12.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "79.25",
                        y: "36",
                        width: "38",
                        height: "4",
                        rx: "2",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "79.25",
                        y: "45",
                        width: "68",
                        height: "4",
                        rx: "2",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "75",
                        width: "226",
                        height: "103",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "198",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "216",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "234",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    })),
                    Content: (0, e.createElement)("svg", {
                        width: "324",
                        height: "308",
                        viewBox: "0 0 324 308",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        x: "0.5",
                        width: "323.5",
                        height: "308",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "30",
                        width: "25",
                        height: "25",
                        rx: "12.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "79.25",
                        y: "36",
                        width: "38",
                        height: "4",
                        rx: "2",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "79.25",
                        y: "45",
                        width: "68",
                        height: "4",
                        rx: "2",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "75",
                        width: "226",
                        height: "103",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "198",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "216",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "234",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    })),
                    Page_404: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 304",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        width: "323.5",
                        height: "304",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("path", {
                        d: "M85.7235 125.175C84.7431 123.322 81.6945 123.322 80.7141 125.175L55.2141 173.342C54.9846 173.773 54.8708 174.257 54.8838 174.746C54.8969 175.235 55.0363 175.712 55.2885 176.131C55.5407 176.549 55.8972 176.896 56.3231 177.136C56.749 177.376 57.2299 177.502 57.7188 177.501H108.719C109.207 177.502 109.688 177.376 110.114 177.136C110.539 176.896 110.895 176.55 111.147 176.131C111.399 175.713 111.539 175.236 111.551 174.748C111.564 174.259 111.45 173.776 111.221 173.344L85.7235 125.175ZM86.0521 169.001H80.3855V163.334H86.0521V169.001ZM80.3855 157.668V143.501H86.0521L86.055 157.668H80.3855Z",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("path", {
                        d: "M134.008 168.752V161.012L156.806 124.992H163.259V136.011H159.324L143.977 160.33V160.75H175.8V168.752H134.008ZM159.639 178.721V166.391L159.744 162.928V124.992H168.926V178.721H159.639Z",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("path", {
                        d: "M204.041 179.744C199.721 179.744 196.013 178.651 192.918 176.465C189.839 174.261 187.47 171.087 185.808 166.941C184.164 162.779 183.342 157.768 183.342 151.909C183.359 146.05 184.19 141.065 185.834 136.955C187.496 132.828 189.866 129.68 192.944 127.511C196.039 125.342 199.739 124.258 204.041 124.258C208.344 124.258 212.043 125.342 215.138 127.511C218.234 129.68 220.604 132.828 222.248 136.955C223.909 141.083 224.74 146.067 224.74 151.909C224.74 157.786 223.909 162.805 222.248 166.968C220.604 171.113 218.234 174.278 215.138 176.465C212.06 178.651 208.361 179.744 204.041 179.744ZM204.041 171.533C207.399 171.533 210.049 169.88 211.99 166.574C213.949 163.251 214.928 158.363 214.928 151.909C214.928 147.642 214.482 144.056 213.59 141.153C212.698 138.25 211.439 136.063 209.813 134.594C208.186 133.108 206.262 132.364 204.041 132.364C200.7 132.364 198.06 134.026 196.118 137.349C194.177 140.654 193.197 145.508 193.18 151.909C193.162 156.194 193.591 159.797 194.465 162.718C195.357 165.638 196.617 167.842 198.243 169.329C199.87 170.798 201.802 171.533 204.041 171.533Z",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("path", {
                        d: "M232.486 168.752V161.012L255.284 124.992H261.737V136.011H257.802L242.455 160.33V160.75H274.278V168.752H232.486ZM258.117 178.721V166.391L258.222 162.928V124.992H267.404V178.721H258.117Z",
                        fill: "#D6DCE4"
                    }))
                },
                X = function({
                    title: t,
                    icon: r,
                    layout: n,
                    template: i,
                    enabled: l
                }) {
                    const [o, c] = (0, e.useState)(!1);
                    return (0, e.createElement)("div", {
                        className: "nas-tb-card-parent",
                        onMouseEnter: () => {
                            c(!0)
                        },
                        onMouseLeave: () => {
                            c(!1)
                        }
                    }, r && o && (0, e.createElement)("div", {
                        className: "nas-tb-locked"
                    }, (0, e.createElement)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        className: "w-6 h-6"
                    }, (0, e.createElement)("path", {
                        fillRule: "evenodd",
                        d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
                        clipRule: "evenodd"
                    })), (0, e.createElement)("button", {
                        className: "nas-tb-card-hover-btn",
                        onClick: () => window.open(amona_theme_builder.amona_pricing_page_url)
                    }, (0, a.__)("Upgrade", "amona"))), (0, e.createElement)("div", {
                        className: "nas-tb-card"
                    }, (0, e.createElement)("div", {
                        className: "nas-tb-card-icon-wrapper " + (o ? "nas-tb-card-icon-wrapper-hover" : "")
                    }, r || (() => {
                        switch (n) {
                            case "header":
                                return Q.Header;
                            case "footer":
                                return Q.Footer;
                            case "404-page":
                                return Q.Page_404;
                            case "hooks":
                                return Q.Hooks;
                            case "content":
                                return Q.Content;
                            case "template":
                                return i && "single" === i ? Q.Single : Q.Archive
                        }
                    })()), (0, e.createElement)("div", {
                        className: "nas-tb-card-title-wrapper"
                    }, (0, e.createElement)("h3", {
                        className: "nas-tb-card-title nas-tb-create-new-card-title"
                    }, t))))
                },
                ee = [{
                    label: (0, a.__)("Header", "amona"),
                    layout: "header",
                    template: "",
                    icon: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 304",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        width: "323.5",
                        height: "304",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        width: "323.5",
                        height: "56",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "20",
                        y: "19",
                        width: "48",
                        height: "18",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "149",
                        y: "24",
                        width: "26",
                        height: "8",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "117",
                        y: "24",
                        width: "26",
                        height: "8",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "181",
                        y: "24",
                        width: "25",
                        height: "8",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "212",
                        y: "24",
                        width: "26",
                        height: "8",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "259",
                        y: "24",
                        width: "26",
                        height: "8",
                        rx: "2",
                        fill: "#F5F9FE"
                    }))
                }, {
                    label: (0, a.__)("Footer", "amona"),
                    layout: "footer",
                    template: "",
                    icon: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 304",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        x: "0.5",
                        width: "323.5",
                        height: "304",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        x: "0.5",
                        y: "248",
                        width: "323.5",
                        height: "56",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "20.5",
                        y: "263",
                        width: "48",
                        height: "18",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "163.5",
                        y: "263",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "117.5",
                        y: "263",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "117.5",
                        y: "273",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "163.5",
                        y: "273",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "209.5",
                        y: "273",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "254.5",
                        y: "273",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "117.5",
                        y: "283",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "163.5",
                        y: "283",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "209.5",
                        y: "283",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "254.5",
                        y: "283",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "209.5",
                        y: "263",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "254.5",
                        y: "263",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }))
                }, {
                    label: (0, a.__)("Hooks", "amona"),
                    layout: "hooks",
                    template: "",
                    icon: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 304",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        x: "0.5",
                        width: "323.5",
                        height: "304",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "50.5",
                        width: "226",
                        height: "103",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("path", {
                        d: "M145.417 88.3327L131.75 101.999L145.417 115.666M179.583 88.3327L193.25 101.999L179.583 115.666M169.333 74.666L155.667 129.333",
                        stroke: "white",
                        strokeWidth: "6.83333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "173.5",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "191.5",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "209.5",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "227.5",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "245.5",
                        width: "154",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }))
                }, {
                    label: (0, a.__)("Inside Post/Page", "amona"),
                    layout: "content",
                    template: "",
                    icon: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 306",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        y: "2",
                        width: "323.5",
                        height: "304",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        x: "135.75",
                        y: "46.5",
                        width: "52",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "103.75",
                        y: "59.5",
                        width: "116",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "48.75",
                        y: "77.5",
                        width: "226",
                        height: "87",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "180.5",
                        width: "170",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "198.5",
                        width: "170",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "229.75",
                        y: "174.5",
                        width: "44",
                        height: "38",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        y: "250",
                        width: "323.5",
                        height: "56",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "20",
                        y: "265",
                        width: "48",
                        height: "18",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "141",
                        y: "265",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "100",
                        y: "265",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "100",
                        y: "275",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "141",
                        y: "275",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "100",
                        y: "285",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "141",
                        y: "285",
                        width: "26",
                        height: "6",
                        rx: "2",
                        fill: "#F5F9FE"
                    }), (0, e.createElement)("rect", {
                        x: "245",
                        y: "266",
                        width: "22",
                        height: "12",
                        rx: "2",
                        fill: "#C4CBD5"
                    }), (0, e.createElement)("rect", {
                        x: "181",
                        y: "266",
                        width: "60",
                        height: "12",
                        rx: "2",
                        fill: "#F5F9FE"
                    }))
                }, {
                    label: (0, a.__)("Single", "amona"),
                    layout: "template",
                    template: "single",
                    icon: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 308",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        x: "0.5",
                        width: "323.5",
                        height: "308",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "30",
                        width: "25",
                        height: "25",
                        rx: "12.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "79.25",
                        y: "36",
                        width: "38",
                        height: "4",
                        rx: "2",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "79.25",
                        y: "45",
                        width: "68",
                        height: "4",
                        rx: "2",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "75",
                        width: "226",
                        height: "103",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "198",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "216",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.25",
                        y: "234",
                        width: "226",
                        height: "8",
                        rx: "4",
                        fill: "#D6DCE4"
                    }))
                }, {
                    label: (0, a.__)("Archive", "amona"),
                    layout: "template",
                    template: "archive",
                    icon: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 304",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        width: "323.5",
                        height: "304",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "29",
                        width: "107",
                        height: "63",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "102",
                        width: "107",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "119",
                        width: "62",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "29",
                        width: "107",
                        height: "63",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "102",
                        width: "107",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "119",
                        width: "62",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "146",
                        width: "107",
                        height: "63",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "219",
                        width: "107",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "49.75",
                        y: "236",
                        width: "62",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "146",
                        width: "107",
                        height: "63",
                        rx: "5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "219",
                        width: "107",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("rect", {
                        x: "166.75",
                        y: "236",
                        width: "62",
                        height: "7",
                        rx: "3.5",
                        fill: "#D6DCE4"
                    }))
                }, {
                    label: (0, a.__)("404 Page", "amona"),
                    layout: "404-page",
                    template: "",
                    icon: (0, e.createElement)("svg", {
                        width: "324",
                        height: "304",
                        viewBox: "0 0 324 304",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "nas-tb-card-svg-icon"
                    }, (0, e.createElement)("rect", {
                        width: "323.5",
                        height: "304",
                        rx: "5",
                        fill: "#ECEFF3"
                    }), (0, e.createElement)("path", {
                        d: "M85.7235 125.175C84.7431 123.322 81.6945 123.322 80.7141 125.175L55.2141 173.342C54.9846 173.773 54.8708 174.257 54.8838 174.746C54.8969 175.235 55.0363 175.712 55.2885 176.131C55.5407 176.549 55.8972 176.896 56.3231 177.136C56.749 177.376 57.2299 177.502 57.7188 177.501H108.719C109.207 177.502 109.688 177.376 110.114 177.136C110.539 176.896 110.895 176.55 111.147 176.131C111.399 175.713 111.539 175.236 111.551 174.748C111.564 174.259 111.45 173.776 111.221 173.344L85.7235 125.175ZM86.0521 169.001H80.3855V163.334H86.0521V169.001ZM80.3855 157.668V143.501H86.0521L86.055 157.668H80.3855Z",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("path", {
                        d: "M134.008 168.752V161.012L156.806 124.992H163.259V136.011H159.324L143.977 160.33V160.75H175.8V168.752H134.008ZM159.639 178.721V166.391L159.744 162.928V124.992H168.926V178.721H159.639Z",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("path", {
                        d: "M204.041 179.744C199.721 179.744 196.013 178.651 192.918 176.465C189.839 174.261 187.47 171.087 185.808 166.941C184.164 162.779 183.342 157.768 183.342 151.909C183.359 146.05 184.19 141.065 185.834 136.955C187.496 132.828 189.866 129.68 192.944 127.511C196.039 125.342 199.739 124.258 204.041 124.258C208.344 124.258 212.043 125.342 215.138 127.511C218.234 129.68 220.604 132.828 222.248 136.955C223.909 141.083 224.74 146.067 224.74 151.909C224.74 157.786 223.909 162.805 222.248 166.968C220.604 171.113 218.234 174.278 215.138 176.465C212.06 178.651 208.361 179.744 204.041 179.744ZM204.041 171.533C207.399 171.533 210.049 169.88 211.99 166.574C213.949 163.251 214.928 158.363 214.928 151.909C214.928 147.642 214.482 144.056 213.59 141.153C212.698 138.25 211.439 136.063 209.813 134.594C208.186 133.108 206.262 132.364 204.041 132.364C200.7 132.364 198.06 134.026 196.118 137.349C194.177 140.654 193.197 145.508 193.18 151.909C193.162 156.194 193.591 159.797 194.465 162.718C195.357 165.638 196.617 167.842 198.243 169.329C199.87 170.798 201.802 171.533 204.041 171.533Z",
                        fill: "#D6DCE4"
                    }), (0, e.createElement)("path", {
                        d: "M232.486 168.752V161.012L255.284 124.992H261.737V136.011H257.802L242.455 160.33V160.75H274.278V168.752H232.486ZM258.117 178.721V166.391L258.222 162.928V124.992H267.404V178.721H258.117Z",
                        fill: "#D6DCE4"
                    }))
                }],
                te = () => (0, e.createElement)(e.Fragment, null, (0, e.createElement)("div", {
                    className: "nas-tb-canvas-content-row"
                }, ee.map(((t, r) => (0, e.createElement)(X, {
                    key: r,
                    title: t.label,
                    icon: t.icon,
                    layout: t.layout,
                    template: t.template
                }))))),
                re = () => (0, e.createElement)("div", {
                    className: "nas-tb-canvas"
                }, (0, e.createElement)("div", {
                    className: "nas-tb-canvas-body"
                }, (0, e.createElement)("div", {
                    className: "nas-tb-canvas-header"
                }, (0, e.createElement)("h2", null, (0, a.__)("Start customizing every part of your website.", "amona")), (0, e.createElement)("button", {
                    className: "nas-tb-btn nas-tb-btn-primary",
                    onClick: () => window.open(amona_theme_builder.amona_pricing_page_url, "_blank")
                }, (0, a.__)("Upgrade", "amona"))), (0, e.createElement)("div", {
                    className: "nas-tb-canvas-content"
                }, (0, e.createElement)(z, null, (0, e.createElement)(I, {
                    path: "/"
                }, (0, e.createElement)(te, null)))))),
                ne = function(e) {
                    function r() {
                        for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(n)) || this).history = function(e) {
                            void 0 === e && (e = {}), b || E(!1);
                            var t, r = window.history,
                                n = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
                                i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
                                a = e,
                                l = a.forceRefresh,
                                o = void 0 !== l && l,
                                c = a.getUserConfirmation,
                                s = void 0 === c ? F : c,
                                f = a.keyLength,
                                m = void 0 === f ? 6 : f,
                                u = e.basename ? x(w(e.basename)) : "";

                            function d(e) {
                                var t = e || {},
                                    r = t.key,
                                    n = t.state,
                                    i = window.location,
                                    a = i.pathname + i.search + i.hash;
                                return u && (a = g(a, u)), y(a, n, r)
                            }

                            function p() {
                                return Math.random().toString(36).substr(2, m)
                            }
                            var L = C();

                            function M(e) {
                                h(j, e), j.length = r.length, L.notifyListeners(j.location, j.action)
                            }

                            function H(e) {
                                (function(e) {
                                    return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
                                })(e) || V(d(e.state))
                            }

                            function N() {
                                V(d(k()))
                            }
                            var S = !1;

                            function V(e) {
                                S ? (S = !1, M()) : L.confirmTransitionTo(e, "POP", s, (function(t) {
                                    t ? M({
                                        action: "POP",
                                        location: e
                                    }) : function(e) {
                                        var t = j.location,
                                            r = O.indexOf(t.key); - 1 === r && (r = 0);
                                        var n = O.indexOf(e.key); - 1 === n && (n = 0);
                                        var i = r - n;
                                        i && (S = !0, R(i))
                                    }(e)
                                }))
                            }
                            var B = d(k()),
                                O = [B.key];

                            function P(e) {
                                return u + v(e)
                            }

                            function R(e) {
                                r.go(e)
                            }
                            var $ = 0;

                            function A(e) {
                                1 === ($ += e) && 1 === e ? (window.addEventListener(D, H), i && window.addEventListener(_, N)) : 0 === $ && (window.removeEventListener(D, H), i && window.removeEventListener(_, N))
                            }
                            var T = !1,
                                j = {
                                    length: r.length,
                                    action: "POP",
                                    location: B,
                                    createHref: P,
                                    push: function(e, t) {
                                        var i = "PUSH",
                                            a = y(e, t, p(), j.location);
                                        L.confirmTransitionTo(a, i, s, (function(e) {
                                            if (e) {
                                                var t = P(a),
                                                    l = a.key,
                                                    c = a.state;
                                                if (n)
                                                    if (r.pushState({
                                                            key: l,
                                                            state: c
                                                        }, null, t), o) window.location.href = t;
                                                    else {
                                                        var s = O.indexOf(j.location.key),
                                                            h = O.slice(0, s + 1);
                                                        h.push(a.key), O = h, M({
                                                            action: i,
                                                            location: a
                                                        })
                                                    }
                                                else window.location.href = t
                                            }
                                        }))
                                    },
                                    replace: function(e, t) {
                                        var i = "REPLACE",
                                            a = y(e, t, p(), j.location);
                                        L.confirmTransitionTo(a, i, s, (function(e) {
                                            if (e) {
                                                var t = P(a),
                                                    l = a.key,
                                                    c = a.state;
                                                if (n)
                                                    if (r.replaceState({
                                                            key: l,
                                                            state: c
                                                        }, null, t), o) window.location.replace(t);
                                                    else {
                                                        var s = O.indexOf(j.location.key); - 1 !== s && (O[s] = a.key), M({
                                                            action: i,
                                                            location: a
                                                        })
                                                    }
                                                else window.location.replace(t)
                                            }
                                        }))
                                    },
                                    go: R,
                                    goBack: function() {
                                        R(-1)
                                    },
                                    goForward: function() {
                                        R(1)
                                    },
                                    block: function(e) {
                                        void 0 === e && (e = !1);
                                        var t = L.setPrompt(e);
                                        return T || (A(1), T = !0),
                                            function() {
                                                return T && (T = !1, A(-1)), t()
                                            }
                                    },
                                    listen: function(e) {
                                        var t = L.appendListener(e);
                                        return A(1),
                                            function() {
                                                A(-1), t()
                                            }
                                    }
                                };
                            return j
                        }(t.props), t
                    }
                    return s(r, e), r.prototype.render = function() {
                        return t().createElement(j, {
                            history: this.history,
                            children: this.props.children
                        })
                    }, r
                }(t().Component);
            t().Component;
            var ie = function(e, t) {
                    return "function" == typeof e ? e(t) : e
                },
                ae = function(e, t) {
                    return "string" == typeof e ? y(e, null, null, t) : e
                },
                le = function(e) {
                    return e
                },
                oe = t().forwardRef;
            void 0 === oe && (oe = le);
            var ce = oe((function(e, r) {
                    var n = e.innerRef,
                        i = e.navigate,
                        a = e.onClick,
                        l = P(e, ["innerRef", "navigate", "onClick"]),
                        o = l.target,
                        c = h({}, l, {
                            onClick: function(e) {
                                try {
                                    a && a(e)
                                } catch (t) {
                                    throw e.preventDefault(), t
                                }
                                e.defaultPrevented || 0 !== e.button || o && "_self" !== o || function(e) {
                                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                                }(e) || (e.preventDefault(), i())
                            }
                        });
                    return c.ref = le !== oe && r || n, t().createElement("a", c)
                })),
                se = oe((function(e, r) {
                    var n = e.component,
                        i = void 0 === n ? ce : n,
                        a = e.replace,
                        l = e.to,
                        o = e.innerRef,
                        c = P(e, ["component", "replace", "to", "innerRef"]);
                    return t().createElement(T.Consumer, null, (function(e) {
                        e || E(!1);
                        var n = e.history,
                            s = ae(ie(l, e.location), e.location),
                            f = s ? n.createHref(s) : "",
                            m = h({}, c, {
                                href: f,
                                navigate: function() {
                                    var t = ie(l, e.location);
                                    (a ? n.replace : n.push)(t)
                                }
                            });
                        return le !== oe ? m.ref = r || o : m.innerRef = o, t().createElement(i, m)
                    }))
                })),
                he = function(e) {
                    return e
                },
                fe = t().forwardRef;
            void 0 === fe && (fe = he), fe((function(e, r) {
                var n = e["aria-current"],
                    i = void 0 === n ? "page" : n,
                    a = e.activeClassName,
                    l = void 0 === a ? "active" : a,
                    o = e.activeStyle,
                    c = e.className,
                    s = e.exact,
                    f = e.isActive,
                    m = e.location,
                    u = e.sensitive,
                    d = e.strict,
                    p = e.style,
                    w = e.to,
                    g = e.innerRef,
                    x = P(e, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
                return t().createElement(T.Consumer, null, (function(e) {
                    e || E(!1);
                    var n = m || e.location,
                        a = ae(ie(w, n), n),
                        v = a.pathname,
                        y = v && v.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
                        C = y ? U(n.pathname, {
                            path: y,
                            exact: s,
                            sensitive: u,
                            strict: d
                        }) : null,
                        b = !!(f ? f(C, n) : C),
                        F = b ? function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return t.filter((function(e) {
                                return e
                            })).join(" ")
                        }(c, l) : c,
                        D = b ? h({}, p, {}, o) : p,
                        _ = h({
                            "aria-current": b && i || null,
                            className: F,
                            style: D,
                            to: a
                        }, x);
                    return he !== fe ? _.ref = r || g : _.innerRef = g, t().createElement(se, _)
                }))
            }));
            document.getElementById("nas-tb-app-root") && i().render((0, e.createElement)((() => ((0, e.useEffect)((() => {
                document.querySelector("html.wp-toolbar").style.paddingTop = 0
            }), []), (0, e.createElement)(ne, null, (0, e.createElement)("div", {
                className: "nas-tb-app"
            }, (0, e.createElement)(o, null), (0, e.createElement)("div", {
                className: "nas-tb-main"
            }, (0, e.createElement)(G, {
                items: Y
            }), (0, e.createElement)(re, null)))))), null), document.getElementById("nas-tb-app-root"))
        }()
}();