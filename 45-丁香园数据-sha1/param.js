window = globalThis;
self = window;
require('./model1');
try {
    !function () {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}
            , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
            e._sentryDebugIds[t] = "bb9c4547-5884-400b-8b56-38a17c5ab559",
            e._sentryDebugIdIdentifier = "sentry-dbid-bb9c4547-5884-400b-8b56-38a17c5ab559")
    }()
} catch (e) { }
!function () {
    "use strict";
    var e, t, n, r, o, f, c, a, i, u, d, s, l = {}, b = {};
    function p(e) {
        var t = b[e];
        if (void 0 !== t)
            return t.exports;
        var n = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
        }
            , r = !0;
        try {
            // console.log('load', e);
            l[e].call(n.exports, n, n.exports, p),
                r = !1
        } finally {
            r && delete b[e]
        }
        return n.loaded = !0,
            n.exports
    }
    p.m = l,
        e = [],
        p.O = function (t, n, r, o) {
            if (n) {
                o = o || 0;
                for (var f = e.length; f > 0 && e[f - 1][2] > o; f--)
                    e[f] = e[f - 1];
                e[f] = [n, r, o];
                return
            }
            for (var c = 1 / 0, f = 0; f < e.length; f++) {
                for (var n = e[f][0], r = e[f][1], o = e[f][2], a = !0, i = 0; i < n.length; i++)
                    c >= o && Object.keys(p.O).every(function (e) {
                        return p.O[e](n[i])
                    }) ? n.splice(i--, 1) : (a = !1,
                        o < c && (c = o));
                if (a) {
                    e.splice(f--, 1);
                    var u = r();
                    void 0 !== u && (t = u)
                }
            }
            return t
        }
        ,
        p.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            }
                : function () {
                    return e
                }
                ;
            return p.d(t, {
                a: t
            }),
                t
        }
        ,
        n = Object.getPrototypeOf ? function (e) {
            return Object.getPrototypeOf(e)
        }
            : function (e) {
                return e.__proto__
            }
        ,
        p.t = function (e, r) {
            if (1 & r && (e = this(e)),
                8 & r || "object" == typeof e && e && (4 & r && e.__esModule || 16 & r && "function" == typeof e.then))
                return e;
            var o = Object.create(null);
            p.r(o);
            var f = {};
            t = t || [null, n({}), n([]), n(n)];
            for (var c = 2 & r && e; "object" == typeof c && !~t.indexOf(c); c = n(c))
                Object.getOwnPropertyNames(c).forEach(function (t) {
                    f[t] = function () {
                        return e[t]
                    }
                });
            return f.default = function () {
                return e
            }
                ,
                p.d(o, f),
                o
        }
        ,
        p.d = function (e, t) {
            for (var n in t)
                p.o(t, n) && !p.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }
        ,
        p.f = {},
        p.e = function (e) {
            return Promise.all(Object.keys(p.f).reduce(function (t, n) {
                return p.f[n](e, t),
                    t
            }, []))
        }
        ,
        p.u = function (e) {
            return 164 === e ? "static/chunks/164-46f101efeb15feaf.js" : 3894 === e ? "static/chunks/3894-90ae055336449b65.js" : "static/chunks/" + (({
                3070: "8012d7e2",
                3592: "96d80ea8"
            })[e] || e) + "." + ({
                20: "274afe835816a2cc",
                671: "6e95363c0d7d6849",
                1061: "ab5c6da9d8765b8f",
                2296: "11406bdf2d5c9a97",
                2589: "bff3edc499bdba49",
                3070: "f865b56fdff33cdc",
                3466: "b7785d72fb7c4f7c",
                3592: "9dbd258e51b18b3e",
                3600: "7e0b237a0965ff29",
                4405: "74881574731b6641",
                4712: "8b98b53362c46b51",
                5056: "87cab233d3fbaf07",
                5470: "8a0fe8a11c33281f",
                5559: "e84967adc7a05c4f",
                5737: "64ce05dfc4e01ea1",
                5887: "944b6c5a8a54c9c0",
                6380: "05ce8aeead053584",
                8090: "55a4e6dffac344dc",
                8286: "3ce2710dbcd32db7",
                8357: "417490a3aecb8f48",
                9337: "989ba25c75c18429",
                9494: "d5b3c11fbf2282f9",
                9577: "0a3b5012d0fc7b98"
            })[e] + ".js"
        }
        ,
        p.miniCssF = function (e) {
            return "static/css/" + ({
                20: "432a2457c56f5b53",
                3466: "2a4796991d10b89a",
                4405: "8f6cf5acd7c3648a",
                4712: "cc20161f2d9936de",
                5056: "114398d95597f008",
                5559: "b06524b51f253229",
                5887: "1dc7e5fc15adb712",
                8357: "748c5c16d8cbb0d0",
                9494: "4cd90dc5c7506824"
            })[e] + ".css"
        }
        ,
        p.g = function () {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        p.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        r = {},
        o = "_N_E:",
        p.l = function (e, t, n, f) {
            if (r[e]) {
                r[e].push(t);
                return
            }
            if (void 0 !== n)
                for (var c, a, i = document.getElementsByTagName("script"), u = 0; u < i.length; u++) {
                    var d = i[u];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == o + n) {
                        c = d;
                        break
                    }
                }
            c || (a = !0,
                (c = document.createElement("script")).charset = "utf-8",
                c.timeout = 120,
                p.nc && c.setAttribute("nonce", p.nc),
                c.setAttribute("data-webpack", o + n),
                c.src = p.tu(e)),
                r[e] = [t];
            var s = function (t, n) {
                c.onerror = c.onload = null,
                    clearTimeout(l);
                var o = r[e];
                if (delete r[e],
                    c.parentNode && c.parentNode.removeChild(c),
                    o && o.forEach(function (e) {
                        return e(n)
                    }),
                    t)
                    return t(n)
            }
                , l = setTimeout(s.bind(null, void 0, {
                    type: "timeout",
                    target: c
                }), 12e4);
            c.onerror = s.bind(null, c.onerror),
                c.onload = s.bind(null, c.onload),
                a && document.head.appendChild(c)
        }
        ,
        p.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        p.nmd = function (e) {
            return e.paths = [],
                e.children || (e.children = []),
                e
        }
        ,
        p.tt = function () {
            return void 0 === f && (f = {
                createScriptURL: function (e) {
                    return e
                }
            },
                "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (f = trustedTypes.createPolicy("nextjs#bundler", f))),
                f
        }
        ,
        p.tu = function (e) {
            return p.tt().createScriptURL(e)
        }
        ,
        p.p = "https://a1.dxycdn.com/gitrepo/bbs-pc-ssr-v2/_next/",
        c = function (e, t, n, r) {
            var o = document.createElement("link");
            return o.rel = "stylesheet",
                o.type = "text/css",
                o.onerror = o.onload = function (f) {
                    if (o.onerror = o.onload = null,
                        "load" === f.type)
                        n();
                    else {
                        var c = f && ("load" === f.type ? "missing" : f.type)
                            , a = f && f.target && f.target.href || t
                            , i = Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                        i.code = "CSS_CHUNK_LOAD_FAILED",
                            i.type = c,
                            i.request = a,
                            o.parentNode.removeChild(o),
                            r(i)
                    }
                }
                ,
                o.href = t,
                document.head.appendChild(o),
                o
        }
        ,
        a = function (e, t) {
            for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                var o = n[r]
                    , f = o.getAttribute("data-href") || o.getAttribute("href");
                if ("stylesheet" === o.rel && (f === e || f === t))
                    return o
            }
            for (var c = document.getElementsByTagName("style"), r = 0; r < c.length; r++) {
                var o = c[r]
                    , f = o.getAttribute("data-href");
                if (f === e || f === t)
                    return o
            }
        }
        ,
        i = {
            2272: 0
        },
        p.f.miniCss = function (e, t) {
            i[e] ? t.push(i[e]) : 0 !== i[e] && ({
                20: 1,
                3466: 1,
                4405: 1,
                4712: 1,
                5056: 1,
                5559: 1,
                5887: 1,
                8357: 1,
                9494: 1
            })[e] && t.push(i[e] = new Promise(function (t, n) {
                var r = p.miniCssF(e)
                    , o = p.p + r;
                if (a(r, o))
                    return t();
                c(e, o, t, n)
            }
            ).then(function () {
                i[e] = 0
            }, function (t) {
                throw delete i[e],
                t
            }))
        }
        ,
        u = {
            2272: 0,
            591: 0,
            6: 0,
            9129: 0,
            6788: 0,
            2817: 0,
            874: 0,
            6132: 0,
            7685: 0,
            1940: 0,
            2599: 0,
            4866: 0,
            5707: 0,
            7902: 0,
            3847: 0,
            6829: 0,
            2024: 0,
            7192: 0,
            1901: 0,
            1119: 0,
            7403: 0,
            7307: 0,
            8155: 0,
            1628: 0,
            3635: 0,
            578: 0,
            232: 0,
            4827: 0,
            4230: 0,
            4486: 0,
            9344: 0
        },
        p.f.j = function (e, t) {
            var n = p.o(u, e) ? u[e] : void 0;
            if (0 !== n) {
                if (n)
                    t.push(n[2]);
                else if (/^(1(119|628|901|940)|2(0|024|272|32|599|817)|3(466|635|847)|4(230|405|486|712|827|866)|5(056|559|707|78|887|91)|6(|132|788|829)|7(192|307|403|685|902)|8(155|357|74)|9(129|344|494))$/.test(e))
                    u[e] = 0;
                else {
                    var r = new Promise(function (t, r) {
                        n = u[e] = [t, r]
                    }
                    );
                    t.push(n[2] = r);
                    var o = p.p + p.u(e)
                        , f = Error();
                    p.l(o, function (t) {
                        if (p.o(u, e) && (0 !== (n = u[e]) && (u[e] = void 0),
                            n)) {
                            var r = t && ("load" === t.type ? "missing" : t.type)
                                , o = t && t.target && t.target.src;
                            f.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")",
                                f.name = "ChunkLoadError",
                                f.type = r,
                                f.request = o,
                                n[1](f)
                        }
                    }, "chunk-" + e, e)
                }
            }
        }
        ,
        p.O.j = function (e) {
            return 0 === u[e]
        }
        ,
        d = function (e, t) {
            var n, r, o = t[0], f = t[1], c = t[2], a = 0;
            if (o.some(function (e) {
                return 0 !== u[e]
            })) {
                for (n in f)
                    p.o(f, n) && (p.m[n] = f[n]);
                if (c)
                    var i = c(p)
            }
            for (e && e(t); a < o.length; a++)
                r = o[a],
                    p.o(u, r) && u[r] && u[r][0](),
                    u[r] = 0;
            return p.O(i)
        }
        ,
        (s = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(d.bind(null, 0)),
        s.push = d.bind(null, s.push.bind(s))
    window.webpack = p;
}();


function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8
        , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "alphabet"
        , n = ""
        , o = {
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
            number: "0123456789"
        }[t];
    for (let t = 0; t < e; t++)
        n += o.charAt(Math.floor(Math.random() * o.length));
    return n
}
function get_param(cursor) {
    timestamp = Date.now() - 27
    noncestr = r(8, "number");
    let i =`appSignKey=4bTogwpz7RzNO2VTFtW7zcfRkAE97ox6ZSgcQi7FgYdqrHqKB7aGqEZ4o7yssa2aEXoV3bQwh12FFgVNlpyYk2Yjm9d2EZGeGu3&cursor=${cursor}&noncestr=${noncestr}&pageSize=10&sectionCode=1101&source=2&timestamp=${timestamp}`
    var o = window.webpack(54648)
        , s = window.webpack.n(o);
    let sign = s()(i)
    return {
        timestamp: timestamp,
        noncestr: noncestr,
        sign: sign
    }
}

console.log(get_param());





// appSignKey=4bTogwpz7RzNO2VTFtW7zcfRkAE97ox6ZSgcQi7FgYdqrHqKB7aGqEZ4o7yssa2aEXoV3bQwh12FFgVNlpyYk2Yjm9d2EZGeGu3&cursor=AoJ49+W49JkDKDUyNTA1OTE1&noncestr=72797837&pageSize=10&source=1&timestamp=1760682864250