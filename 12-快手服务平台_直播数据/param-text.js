window = this;
self = window;
require("./model.js");

(() => {
    "use strict";
    var e = {}
        , t = {};
    function r(a) {
        var o = t[a];
        if (void 0 !== o)
            return o.exports;
        var i = t[a] = {
            id: a,
            loaded: !1,
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, r),
            i.loaded = !0,
            i.exports
    }
    window.webpack = r;
    r.m = e,
        (() => {
            var e = [];
            r.O = (t, a, o, i) => {
                if (!a) {
                    var c = 1 / 0;
                    for (l = 0; l < e.length; l++) {
                        a = e[l][0],
                            o = e[l][1],
                            i = e[l][2];
                        for (var n = !0, s = 0; s < a.length; s++)
                            (!1 & i || c >= i) && Object.keys(r.O).every((e => r.O[e](a[s]))) ? a.splice(s--, 1) : (n = !1,
                                i < c && (c = i));
                        if (n) {
                            e.splice(l--, 1);
                            var d = o();
                            void 0 !== d && (t = d)
                        }
                    }
                    return t
                }
                i = i || 0;
                for (var l = e.length; l > 0 && e[l - 1][2] > i; l--)
                    e[l] = e[l - 1];
                e[l] = [a, o, i]
            }
        }
        )(),
        (() => {
            r.n = e => {
                var t = e && e.__esModule ? () => e["default"] : () => e;
                return r.d(t, {
                    a: t
                }),
                    t
            }
        }
        )(),
        (() => {
            var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
            r.t = function (a, o) {
                if (1 & o && (a = this(a)),
                    8 & o)
                    return a;
                if ("object" === typeof a && a) {
                    if (4 & o && a.__esModule)
                        return a;
                    if (16 & o && "function" === typeof a.then)
                        return a
                }
                var i = Object.create(null);
                r.r(i);
                var c = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var n = 2 & o && a; "object" == typeof n && !~e.indexOf(n); n = t(n))
                    Object.getOwnPropertyNames(n).forEach((e => c[e] = () => a[e]));
                return c["default"] = () => a,
                    r.d(i, c),
                    i
            }
        }
        )(),
        (() => {
            r.d = (e, t) => {
                for (var a in t)
                    r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
                        enumerable: !0,
                        get: t[a]
                    })
            }
        }
        )(),
        (() => {
            r.f = {},
                r.e = e => Promise.all(Object.keys(r.f).reduce(((t, a) => (r.f[a](e, t),
                    t)), []))
        }
        )(),
        (() => {
            r.u = e => "ks-cp/js/" + ({
                20: "articlePublishWord",
                243: "micro-app",
                284: "articleMaterial",
                304: "members",
                334: "articleManageCollection",
                673: "creativeHot",
                729: "chunk-chart",
                871: "statisticsUser",
                1064: "promoteTrading",
                1184: "keceMain",
                1316: "creative-idea",
                1341: "promoteWorks",
                1692: "statisticsWorks",
                1862: "statisticsMarket",
                1867: "chunk-screenshot",
                1961: "incomeKwaiAdMemberStatus",
                2317: "incomeOrders",
                2509: "articlePublishVideo",
                2588: "incomeKwaiAdQualification",
                2874: "incomeGamePartner",
                3351: "account-auth",
                3556: "articlePublishRedirect",
                3968: "statisticsLive",
                4085: "incomeEncourage",
                4634: "incomeKwaiAdCooperation",
                4679: "outerUrl",
                5047: "articleCollection",
                5186: "incomeEcommerce",
                6736: "permissionsAdministrator",
                7010: "incomeApply",
                7022: "help",
                7040: "statisticsArticle",
                7150: "articleComment",
                7472: "chunk-editor",
                7614: "creator-school",
                7948: "articlePublish",
                8048: "growth-center",
                8841: "incomeKwaiAd",
                9694: "articleManage",
                9760: "incomeGovDeposit"
            }[e] || e) + "." + {
                20: "dad688ef",
                243: "4ac81042",
                284: "31f5aa00",
                304: "304f737e",
                334: "5fe13785",
                341: "5f566446",
                673: "b8fecfe9",
                705: "b5cc2fc5",
                729: "7c49449b",
                871: "a5cb1f6b",
                1064: "bbadab02",
                1184: "7d8d6c0b",
                1245: "814453ba",
                1316: "f64836c0",
                1341: "35c1fa6f",
                1692: "1be32a0d",
                1862: "3e2b1bd9",
                1867: "c72ab0d0",
                1961: "c628a179",
                2049: "e2537961",
                2317: "64f4b72e",
                2509: "6fd9ff33",
                2588: "5a865ead",
                2728: "27e9226a",
                2874: "f09f0518",
                3351: "04a2a837",
                3556: "fe9ce3c1",
                3910: "2e00c7a9",
                3968: "157de703",
                4085: "4d93e441",
                4634: "b127d5ac",
                4679: "fe9d90bb",
                5047: "1b51df81",
                5186: "c44d19de",
                5606: "877283a1",
                6736: "d2f6ac36",
                7010: "76860a0d",
                7022: "a08f9115",
                7040: "edeb518d",
                7150: "4a40ae2e",
                7472: "f5ac44a1",
                7614: "dfb70054",
                7948: "24bff1a6",
                8048: "44b79b06",
                8841: "95508acb",
                9613: "a6d40b05",
                9694: "4f2f65ca",
                9760: "be317bc8"
            }[e] + ".js"
        }
        )(),
        (() => {
            r.miniCssF = e => "ks-cp/css/" + ({
                20: "articlePublishWord",
                243: "micro-app",
                284: "articleMaterial",
                304: "members",
                334: "articleManageCollection",
                673: "creativeHot",
                871: "statisticsUser",
                1064: "promoteTrading",
                1184: "keceMain",
                1316: "creative-idea",
                1341: "promoteWorks",
                1692: "statisticsWorks",
                1862: "statisticsMarket",
                1961: "incomeKwaiAdMemberStatus",
                2317: "incomeOrders",
                2509: "articlePublishVideo",
                2588: "incomeKwaiAdQualification",
                2874: "incomeGamePartner",
                3351: "account-auth",
                3968: "statisticsLive",
                4085: "incomeEncourage",
                4634: "incomeKwaiAdCooperation",
                5047: "articleCollection",
                5186: "incomeEcommerce",
                6736: "permissionsAdministrator",
                7010: "incomeApply",
                7022: "help",
                7040: "statisticsArticle",
                7150: "articleComment",
                7614: "creator-school",
                8048: "growth-center",
                8841: "incomeKwaiAd",
                9694: "articleManage",
                9760: "incomeGovDeposit"
            }[e] || e) + "." + {
                20: "cf908a73",
                243: "b95ed2ae",
                284: "eb113db5",
                304: "883e057e",
                334: "d74825aa",
                673: "344bbcad",
                705: "f7d7f4da",
                871: "81e8f319",
                1064: "298f6167",
                1184: "b95ed2ae",
                1245: "df06fe1e",
                1316: "ae3b1ff9",
                1341: "52f2c986",
                1692: "fac487ef",
                1862: "8380a9fb",
                1961: "abf70c32",
                2049: "d49f46e9",
                2317: "abe26145",
                2509: "15f4b9d3",
                2588: "cf96d1fd",
                2874: "213f3fea",
                3351: "22b6d2db",
                3968: "56ab195d",
                4085: "843f8243",
                4634: "62363200",
                5047: "1e090ec7",
                5186: "54f1977f",
                6736: "a47f2b4d",
                7010: "4580ea0a",
                7022: "b0b712e3",
                7040: "340be7fa",
                7150: "d7675af9",
                7614: "9b24a5da",
                8048: "b57f7c9f",
                8841: "0aaa461a",
                9694: "f91fa0e7",
                9760: "c67012c0"
            }[e] + ".css"
        }
        )(),
        (() => {
            r.g = function () {
                if ("object" === typeof globalThis)
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" === typeof window)
                        return window
                }
            }()
        }
        )(),
        (() => {
            r.hmd = e => (e = Object.create(e),
                e.children || (e.children = []),
                Object.defineProperty(e, "exports", {
                    enumerable: !0,
                    set: () => {
                        throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
                    }
                }),
                e)
        }
        )(),
        (() => {
            r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
        }
        )(),
        (() => {
            var e = {}
                , t = "ks-fe-creator-platform:";
            r.l = (a, o, i, c) => {
                if (e[a])
                    e[a].push(o);
                else {
                    var n, s;
                    if (void 0 !== i)
                        for (var d = document.getElementsByTagName("script"), l = 0; l < d.length; l++) {
                            var f = d[l];
                            if (f.getAttribute("src") == a || f.getAttribute("data-webpack") == t + i) {
                                n = f;
                                break
                            }
                        }
                    n || (s = !0,
                        n = document.createElement("script"),
                        n.charset = "utf-8",
                        n.timeout = 120,
                        r.nc && n.setAttribute("nonce", r.nc),
                        n.setAttribute("data-webpack", t + i),
                        n.src = a),
                        e[a] = [o];
                    var u = (t, r) => {
                        n.onerror = n.onload = null,
                            clearTimeout(b);
                        var o = e[a];
                        if (delete e[a],
                            n.parentNode && n.parentNode.removeChild(n),
                            o && o.forEach((e => e(r))),
                            t)
                            return t(r)
                    }
                        , b = setTimeout(u.bind(null, void 0, {
                            type: "timeout",
                            target: n
                        }), 12e4);
                    n.onerror = u.bind(null, n.onerror),
                        n.onload = u.bind(null, n.onload),
                        s && document.head.appendChild(n)
                }
            }
        }
        )(),
        (() => {
            r.r = e => {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
        }
        )(),
        (() => {
            r.nmd = e => (e.paths = [],
                e.children || (e.children = []),
                e)
        }
        )(),
        (() => {
            r.p = "//p2-plat.wskwai.com/kos/nlav11104/static/"
        }
        )(),
        (() => {
            var e = (e, t, r, a) => {
                var o = document.createElement("link");
                o.rel = "stylesheet",
                    o.type = "text/css";
                var i = i => {
                    if (o.onerror = o.onload = null,
                        "load" === i.type)
                        r();
                    else {
                        var c = i && ("load" === i.type ? "missing" : i.type)
                            , n = i && i.target && i.target.href || t
                            , s = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                        s.code = "CSS_CHUNK_LOAD_FAILED",
                            s.type = c,
                            s.request = n,
                            o.parentNode.removeChild(o),
                            a(s)
                    }
                }
                    ;
                return o.onerror = o.onload = i,
                    o.href = t,
                    document.head.appendChild(o),
                    o
            }
                , t = (e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                        var o = r[a]
                            , i = o.getAttribute("data-href") || o.getAttribute("href");
                        if ("stylesheet" === o.rel && (i === e || i === t))
                            return o
                    }
                    var c = document.getElementsByTagName("style");
                    for (a = 0; a < c.length; a++) {
                        o = c[a],
                            i = o.getAttribute("data-href");
                        if (i === e || i === t)
                            return o
                    }
                }
                , a = a => new Promise(((o, i) => {
                    var c = r.miniCssF(a)
                        , n = r.p + c;
                    if (t(c, n))
                        return o();
                    e(a, n, o, i)
                }
                ))
                , o = {
                    4556: 0
                };
            r.f.miniCss = (e, t) => {
                var r = {
                    20: 1,
                    243: 1,
                    284: 1,
                    304: 1,
                    334: 1,
                    673: 1,
                    705: 1,
                    871: 1,
                    1064: 1,
                    1184: 1,
                    1245: 1,
                    1316: 1,
                    1341: 1,
                    1692: 1,
                    1862: 1,
                    1961: 1,
                    2049: 1,
                    2317: 1,
                    2509: 1,
                    2588: 1,
                    2874: 1,
                    3351: 1,
                    3968: 1,
                    4085: 1,
                    4634: 1,
                    5047: 1,
                    5186: 1,
                    6736: 1,
                    7010: 1,
                    7022: 1,
                    7040: 1,
                    7150: 1,
                    7614: 1,
                    8048: 1,
                    8841: 1,
                    9694: 1,
                    9760: 1
                };
                o[e] ? t.push(o[e]) : 0 !== o[e] && r[e] && t.push(o[e] = a(e).then((() => {
                    o[e] = 0
                }
                ), (t => {
                    throw delete o[e],
                    t
                }
                )))
            }
        }
        )(),
        (() => {
            var e = {
                4556: 0
            };
            r.f.j = (t, a) => {
                var o = r.o(e, t) ? e[t] : void 0;
                if (0 !== o)
                    if (o)
                        a.push(o[2]);
                    else if (4556 != t) {
                        var i = new Promise(((r, a) => o = e[t] = [r, a]));
                        a.push(o[2] = i);
                        var c = r.p + r.u(t)
                            , n = new Error
                            , s = a => {
                                if (r.o(e, t) && (o = e[t],
                                    0 !== o && (e[t] = void 0),
                                    o)) {
                                    var i = a && ("load" === a.type ? "missing" : a.type)
                                        , c = a && a.target && a.target.src;
                                    n.message = "Loading chunk " + t + " failed.\n(" + i + ": " + c + ")",
                                        n.name = "ChunkLoadError",
                                        n.type = i,
                                        n.request = c,
                                        o[1](n)
                                }
                            }
                            ;
                        r.l(c, s, "chunk-" + t, t)
                    } else
                        e[t] = 0
            }
                ,
                r.O.j = t => 0 === e[t];
            var t = (t, a) => {
                var o, i, c = a[0], n = a[1], s = a[2], d = 0;
                if (c.some((t => 0 !== e[t]))) {
                    for (o in n)
                        r.o(n, o) && (r.m[o] = n[o]);
                    if (s)
                        var l = s(r)
                }
                for (t && t(a); d < c.length; d++)
                    i = c[d],
                        r.o(e, i) && e[i] && e[i][0](),
                        e[i] = 0;
                return r.O(l)
            }
                , a = self["webpackChunkks_fe_creator_platform"] = self["webpackChunkks_fe_creator_platform"] || [];
            a.forEach(t.bind(null, 0)),
                a.push = t.bind(null, a.push.bind(a))
        }
        )()
}
)();

function get_o(i) {
    let o = window.webpack(18922)
        , i = window.webpack.n(o)
    let n = `${JSON.stringify(i)}`
    return o()(n)
}

function get_sign() {
    const e = {
        "kuaishou.web.cp.api_ph": "da3af889a7d44ae1aa1e0ba358eae6ca35c5"
    }
    const o = get_o(e)
    var r = window.webpack(75407)
        , a = window.webpack.n(r)
    a().call("$encode", [o, {
        suc: function (e) {
            s(`__NS_sig3=${e}`)
        },
        err: function (s) {
            e(s)
        }
    }])
}

get_sign();