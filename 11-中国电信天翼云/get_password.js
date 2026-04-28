window = globalThis;
self = window

require('./model1.js')
require('./model2.js')

document = {
    body: {},
    createElement: function (args) {}
}

location = {
    href: 'https://www.ctyun.cn/h5/auth/login',
}

!function() {
    var e, t, n, r = {
        8227: function(e, t, n) {
            "use strict";
            var r = n(8665)
              , o = n(4421);
            t.A = async (e={}, t=!0) => {
                const {data: {value: {isLoggedIn: n}}} = await (0,
                r.A)("/gw/auth/Current")
                  , a = e?.query?.pwdState ?? null;
                t ? n && window.open(`${window.location.origin}`, "_self") : await (async e => {
                    if ("10002" === e)
                        try {
                            await (0,
                            o.A)({
                                title: "密码即将到期提醒",
                                message: "您的密码即将过期，为确保账户安全，请及时修改密码后重新登录。",
                                confirmBtn: "立即修改密码",
                                cancelBtn: "以后再说"
                            }),
                            window.location.href = `${window.location.origin}/console/user/setting/password`
                        } catch (t) {
                            window.open(`${window.location.origin}`, "_self")
                        }
                    if ("10003" === e)
                        try {
                            await (0,
                            o.A)({
                                title: "密码到期提醒",
                                message: "您的密码已到期，为确保账户安全，请及时修改密码后重新登录。",
                                confirmBtn: "立即修改密码",
                                cancelBtn: "以后再说"
                            }),
                            window.location.href = `${window.location.origin}/h5/auth/findPass`
                        } catch (t) {
                            return
                        }
                }
                )(a)
            }
        },
        4421: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return h
                }
            });
            var r = n(6217)
              , o = n(3291)
              , a = n(8405)
              , i = n(5236)
              , s = n(3324)
              , c = n(9141)
              , l = n(5550);
            const u = {
                key: 1,
                class: "ct-message-title"
            }
              , d = {
                key: 1
            }
              , f = {
                class: "dialog-footer"
            };
            var m = {
                __name: "ctMessage",
                props: {
                    title: {
                        type: String,
                        default: "密码到期提醒"
                    },
                    message: {
                        type: String,
                        default: "您的密码已到期，为确保账户安全，请及时修改密码后重新登录。"
                    },
                    confirmBtn: {
                        type: String,
                        default: "立即修改密码"
                    },
                    cancelBtn: {
                        type: String,
                        default: "以后再说"
                    }
                },
                setup(e, {expose: t}) {
                    const n = (0,
                    i.KR)(!1);
                    let m = null
                      , p = null;
                    const v = () => {
                        m(),
                        n.value = !1
                    }
                      , h = () => {
                        p(),
                        n.value = !1
                    }
                    ;
                    return t({
                        open: async () => (n.value = !0,
                        new Promise(( (e, t) => {
                            m = e,
                            p = t
                        }
                        )))
                    }),
                    (t, m) => {
                        const p = a.tk
                          , g = o.S2
                          , w = r.kZ;
                        return (0,
                        s.uX)(),
                        (0,
                        s.CE)("div", null, [(0,
                        s.bF)(w, {
                            modelValue: (0,
                            i.R1)(n),
                            "onUpdate:modelValue": m[0] || (m[0] = e => (0,
                            i.i9)(n) ? n.value = e : null),
                            title: "Tips",
                            width: "500",
                            class: "ct-message-dialog"
                        }, {
                            header: (0,
                            s.k6)(( () => [t.$slots.title ? (0,
                            s.RG)(t.$slots, "title", {
                                key: 0
                            }) : ((0,
                            s.uX)(),
                            (0,
                            s.CE)("div", u, [(0,
                            s.bF)(p, {
                                size: "16",
                                color: "#FF8F34"
                            }, {
                                default: (0,
                                s.k6)(( () => [(0,
                                s.bF)((0,
                                i.R1)(l.WarningFilled))])),
                                _: 1
                            }), (0,
                            s.Lk)("span", null, (0,
                            c.v_)(e.title), 1)]))])),
                            footer: (0,
                            s.k6)(( () => [(0,
                            s.Lk)("div", f, [(0,
                            s.bF)(g, {
                                onClick: h
                            }, {
                                default: (0,
                                s.k6)(( () => [(0,
                                s.eW)((0,
                                c.v_)(e.cancelBtn), 1)])),
                                _: 1
                            }), (0,
                            s.bF)(g, {
                                class: "ct-button--main",
                                onClick: v
                            }, {
                                default: (0,
                                s.k6)(( () => [(0,
                                s.eW)((0,
                                c.v_)(e.confirmBtn), 1)])),
                                _: 1
                            })])])),
                            default: (0,
                            s.k6)(( () => [t.$slots.message ? (0,
                            s.RG)(t.$slots, "message", {
                                key: 0
                            }) : ((0,
                            s.uX)(),
                            (0,
                            s.CE)("span", d, (0,
                            c.v_)(e.message), 1))])),
                            _: 3
                        }, 8, ["modelValue"])])
                    }
                }
            };
            var p = (0,
            n(7167).A)(m, [["__scopeId", "data-v-838cceae"]])
              , v = n(1727)
              , h = (e={}) => {
                const t = document.createElement("div")
                  , n = (0,
                s.h)(p, e);
                (0,
                v.XX)(n, t),
                document.body.appendChild(t);
                const r = n.component.exposed.open();
                return r.finally(( () => {
                    setTimeout(( () => {
                        (0,
                        v.XX)(null, t),
                        t.parentNode?.removeChild(t)
                    }
                    ), 300)
                }
                )),
                r
            }
        },
        7418: function(e, t, n) {
            "use strict";
            n.r(t),
            t.default = {
                mounted: e => {
                    e.focus();
                    e.querySelector(".el-input__inner").focus()
                }
            }
        },
        5302: function(e, t, n) {
            "use strict";
            var r = n(6065)
              , o = n(3135)
              , a = n(1727)
              , i = n(926)
              , s = n(3072);
            const c = async (e={}, t={}) => {
                const {global: o=window} = e
                  , {to: a, next: i, router: s} = t;
                ( (e, t) => {
                    e.query.encodeHash && t({
                        ...e,
                        query: {
                            ...e.query,
                            encodeHash: void 0
                        },
                        hash: window.decodeURIComponent(e.query.encodeHash)
                    })
                }
                )(a, i),
                (e => {
                    if (e.meta.outerRedirect && r.A.env.isProduction()) {
                        const t = r.A.qs.parseUrl(e.meta.outerRedirect)
                          , o = {
                            ...t,
                            query: {
                                ...t.query || {},
                                ...e.query
                            }
                        };
                        n.g.location.href = r.A.qs.stringifyUrl(o)
                    }
                }
                )(a),
                ( (e, t) => {
                    t._hmt && t._hmt.push(["_trackPageview", e.path])
                }
                )(a, o),
                i()
            }
            ;
            var l = (e={}) => {
                const {routerBase: t, routes: n} = e
                  , o = t || "/h5/auth/"
                  , a = location.href.includes("#/") ? (0,
                s.Bt)(o) : (0,
                s.LA)(o);
                n.push({
                    path: "/:pathMatch(.*)*",
                    name: "notFound",
                    beforeEnter: (e, t, n) => {
                        location.href.includes("#/") && (window.location.href = r.A.qs.stringifyUrl({
                            url: window.location.pathname,
                            query: {
                                ...e.query,
                                encodeHash: window.encodeURIComponent(window.location.hash)
                            }
                        }))
                    }
                });
                const i = (0,
                s.aE)({
                    history: a,
                    routes: n
                });
                return i.beforeEach(( (t, n, r) => c(e, {
                    router: i,
                    to: t,
                    from: n,
                    next: r
                }))),
                i.afterEach(( (t, n) => ( (e={}, t={}) => {
                    const {to: n, from: r} = t;
                    if (window.CtcloudTrack) {
                        const e = n.name;
                        CtcloudTrack.defineOpt({
                            routeName: e
                        }),
                        CtcloudTrack.sendPV([{
                            routeName: e
                        }])
                    }
                }
                )(e, {
                    to: t,
                    from: n,
                    router: i
                }))),
                window.CtcloudTrack && CtcloudTrack.observerPage(i),
                {
                    history: a,
                    router: i
                }
            }
              , u = n(6176)
              , d = n(5550)
              , f = n(8665);
            const m = [{
                path: "/",
                name: "index",
                redirect: "/login"
            }, ...[{
                path: "/activate",
                name: "activate"
            }, {
                path: "/msgRecevier",
                name: "msgRecevier"
            }, {
                path: "/bindAccount",
                name: "bindAccount"
            }, {
                path: "/acceptOrRejectH5",
                name: "acceptOrRejectH5"
            }, {
                path: "/relevancyAccout",
                name: "relevancyAccout"
            }, {
                path: "/bindResult",
                name: "bindResult"
            }, {
                path: "/invitation/:id",
                name: "invitation"
            }].map((e => ({
                ...e,
                beforeEnter(e, t, n) {
                    window.location.href = r.A.qs.stringifyUrl({
                        url: "/h5/auth" + e.fullPath,
                        query: e.query
                    })
                }
            })))];
            var p;
            (p = n(3800)).keys().forEach((e => {
                const t = p(e).default;
                if (Array.isArray(t)) {
                    const e = t.filter((e => !e.disable));
                    m.push(...e)
                } else
                    !t.disable && m.push(t)
            }
            ));
            var v = m
              , h = n(3324)
              , g = n(5236)
              , w = n(9141)
              , y = n(2851);
            const b = {
                class: "layout-header-inner"
            }
              , C = {
                class: "layout-header-left"
            }
              , A = {
                key: 0,
                href: "/ctyun/home"
            }
              , E = ["src"]
              , I = {
                class: "layout-header-right"
            };
            var k = {
                __name: "header",
                setup(e) {
                    const t = (0,
                    s.lq)()
                      , n = (0,
                    h.EW)(( () => "login" === t.name))
                      , r = (0,
                    h.EW)(( () => "register" === t.name))
                      , {mainLogo: o} = (0,
                    i.bP)((0,
                    y.A)());
                    return (e, a) => {
                        const i = (0,
                        h.g2)("router-link");
                        return (0,
                        h.uX)(),
                        (0,
                        h.CE)("div", {
                            class: (0,
                            w.C4)(["layout-header", {
                                hide: (0,
                                g.R1)(r)
                            }])
                        }, [(0,
                        h.Lk)("div", b, [(0,
                        h.Lk)("div", C, [(0,
                        g.R1)(o) ? ((0,
                        h.uX)(),
                        (0,
                        h.CE)("a", A, [(0,
                        h.Lk)("img", {
                            src: (0,
                            g.R1)(o),
                            title: "天翼云",
                            class: "layout-header-logo"
                        }, null, 8, E)])) : (0,
                        h.Q3)("", !0), a[0] || (a[0] = (0,
                        h.Lk)("div", {
                            class: "header-bg"
                        }, null, -1))]), (0,
                        h.Lk)("div", I, [(0,
                        g.R1)(n) ? (0,
                        h.Q3)("", !0) : ((0,
                        h.uX)(),
                        (0,
                        h.Wv)(i, {
                            key: 0,
                            to: {
                                name: "login",
                                query: (0,
                                g.R1)(t).query
                            },
                            class: "layout-header-btn"
                        }, {
                            default: (0,
                            h.k6)(( () => a[1] || (a[1] = [(0,
                            h.eW)(" 登录 ")]))),
                            _: 1
                        }, 8, ["to"]))])])], 2)
                    }
                }
            }
              , x = n(7167);
            var T = (0,
            x.A)(k, [["__scopeId", "data-v-8122c402"]]);
            const S = {
                class: "layout-footer"
            }
              , R = {
                class: "layout-footer-inner"
            }
              , P = {
                class: "layout-footer-left"
            }
              , L = {
                class: "copyright"
            };
            var N = {
                __name: "footer",
                setup(e) {
                    const t = (0,
                    g.KR)((new Date).getFullYear());
                    return (e, n) => ((0,
                    h.uX)(),
                    (0,
                    h.CE)("div", S, [(0,
                    h.Lk)("div", R, [(0,
                    h.Lk)("div", P, [(0,
                    h.Lk)("div", null, [(0,
                    h.Lk)("span", L, " ©" + (0,
                    w.v_)((0,
                    g.R1)(t)) + " 天翼云科技有限公司版权所有 ", 1), n[0] || (n[0] = (0,
                    h.eW)(" 增值电信业务经营许可证A2.B1.B2-20090001 ")), n[1] || (n[1] = (0,
                    h.Lk)("address", null, " 公司地址：北京市东城区青龙胡同甲1号、3号2幢2层205-32室 ", -1))]), n[2] || (n[2] = (0,
                    h.Lk)("div", {
                        class: "layout-footer-left-beian"
                    }, [(0,
                    h.Lk)("img", {
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAFQklEQVRYw+3Wa1BUdRjH8SOpMeg4WhZGpDIxiaaTeUFgWrxE4AVRQJGlRRAVIV1JkbgMgQLi5AVBQSVLSp0xlEAUKBEEFZCrCstll8UV2AV2YbmoGCrYv31+R95UL5pmmtamZ+bz6rz5nvOc/5zDcX9jGLs/iTxuyvIlWYkRFeTHA2HVRFtzfhthTG5KuH96/vUgNlC4mMgyw1NJit/aAXLKazYje9xtIMZ/OZz50gW+9hcNkvoLEemEPbnrSP47QYwxQ5Ifv54RqzcXwFFvSyjaOhfavN8F7Y5ZcC/HH9JOB4LNa9Zw5YA76OZV8vIGMdZtSp7cDrtOnOavYiQhTAiPwi1AMtIQaqyngsxpBtw2GAGDKfaQmpUAa6xc4Vfp4UtEdzAMycsT9JQ1Tyctl/2eEkuTlYysF/rCUNxMqDEzgTqzSXBnpgnIHCzgjvEEuD52DLBr3rA1MAaWmNtB582wdtIljZ9G9D+IPU6aTxIPBjHCcXvg3CEh9K2fDLWvjIH6D6fwTIyheuwEqLUyhzLOALq8pkN+bgRw3HY4FBsMzxojZxP9DequLjAlQwVrbpIjhyIY4UYGQ/buhdBqPxlk3Gion2IMDQIz3kJe/ZS34I7uHkmD7VSQVgYDNyIAwsNCgfXGXoOBPjP9DKrOCAogA2etGTmTHAMcFwFZye7wS5QlVHGjoEw4A2qPCUBZ6AzNcQ5Q/YYRdO+YB1U3dsDwypLio4FJ3ECryIzWz6Cm3NgTRHN8HiPF6eHAGSbAdh8feFZkB7krzaHE9h2o85sDsiAbkIsXQMN+e2CtGyF0kzdwXCgU5++D/ouLQFV4OEU/g2Q/iNuIPNaKkQflAWBqexxGjhLDVUcL6IwSQN3SGVChe6FJg9dckCx6D1QBliDZLIAxo7eA8eyv4KE0BJqTrHkZvnL9DJKn+Twmt0NsGGHZy2Dn3kQYfsQ53Hh4/r4RNGz8AIpdzKEuaAF0RC2E57MmQgE3ATjuM/CPiANW7AqSfQJQ5vk362eQKmd3JrmXsoSRocpNIMnbB9zbceDIWUPmuHFQNMkISqa9DpUvNK6YDpW2s8DfwBK48WFQnhMCgzUBoLy0BrRVe5P0NWjPLdKUsJiR1tR1wGp8IeZwMgx/SrgRvjxuAziNcwLvyathLOcJHLflhRDYGRYFrNET2rJ5yvPLoas0tOj/oL8UpC4JHyTSU+6MNCS4gvKoAB5WiKG+MAQSg0WwLXQ/ZJ3xhao0FxB5hYCbUwAEfhEF3Td8QP2dAOQnPwFlxgrolUVq9TPoaX+ZB2nLc2Gk6awj1MU78HZZwJMid2Byb550JQwVO0NfxlJgdz14vWKeRAiK6DlQF28PLZdcoLNcBIO92bb6GTQ8Q/13RURT6tlH2gvXMlITLYD6uI+gp2ozdF0VQXumM6ivCqGvahM8kPiDItkeGo8tB025GFQ3xFrSr06zI3/4yde7oN7m0sWk5eKWDqK5JWJQvAHac9ygq3Adr9gTNNc3QG85rzPfHe5/7wDtPwuhp/Zz6CjyhaZzwi6ivfetHdH/oP77+3PJQOsuRnqkQdCa4wWqyx6gyecpL64GTaEX7ycXUJz4GJp1B4O0X/Hg0Xp1tFV+8Ei1k6c5coHofxBrrzQinbKYo0SVJ+wn6iurGHlY5gY911aDJnMFaHXXiDp9GQyvtKfUA9QFTtBZ7gPdit0tpFd9OpwwFmlA9D/o9yNLDpxIKmI8PMnNSNtviCLVpYTITzrXEGWaq4qos0WgOPdpCenIF+eRrurjB4k0PXopYZG6gMg/D/gNBUxhAbSAmKMAAAAASUVORK5CYII=",
                        alt: "备案"
                    }), (0,
                    h.Lk)("a", {
                        class: "mps",
                        rel: "noreferrer",
                        href: "https://beian.mps.gov.cn/#/query/webSearch?code=11010802043424",
                        target: "_blank"
                    }, " 京公网安备11010802043424号 "), (0,
                    h.Lk)("a", {
                        href: "https://www.ctyun.cn/ctyun/beian-gov",
                        target: "_blank"
                    }, " 京ICP备 2021034386号 ")], -1))]), n[3] || (n[3] = (0,
                    h.Lk)("div", {
                        class: "layout-footer-right"
                    }, [(0,
                    h.Lk)("a", {
                        href: "https://www.ctyun.cn/portal/protocol/10144340",
                        target: "_blank"
                    }, " 用户协议 "), (0,
                    h.Lk)("a", {
                        href: "https://www.ctyun.cn/portal/protocol/10139040",
                        target: "_blank"
                    }, " 隐私政策 "), (0,
                    h.Lk)("a", {
                        href: "https://www.ctyun.cn/portal/protocol/10139038",
                        target: "_blank"
                    }, " 法律声明 ")], -1))])]))
                }
            };
            var M = (0,
            x.A)(N, [["__scopeId", "data-v-47f5045e"]])
              , _ = n(9818);
            const $ = {
                class: "layout-content-inner"
            };
            var U = {
                __name: "content",
                setup(e) {
                    const {bgColor: t} = (0,
                    i.bP)((0,
                    _.A)())
                      , n = (0,
                    s.lq)()
                      , r = (0,
                    g.KR)(null)
                      , o = (0,
                    h.EW)(( () => !!n?.meta?.background));
                    return (0,
                    h.wB)(t, ( () => {
                        r.value.style.backgroundColor = t.value
                    }
                    )),
                    (e, t) => ((0,
                    h.uX)(),
                    (0,
                    h.CE)("div", {
                        class: (0,
                        w.C4)(["layout-content", {
                            background: (0,
                            g.R1)(o)
                        }]),
                        ref_key: "contentRef",
                        ref: r
                    }, [(0,
                    h.Lk)("div", $, [(0,
                    h.RG)(e.$slots, "default")])], 2))
                }
            };
            var D = (0,
            x.A)(U, [["__scopeId", "data-v-7ed2431b"]]);
            const B = {
                class: "layout-wrapper"
            };
            var O = {
                __name: "index",
                setup(e) {
                    const t = (0,
                    s.lq)()
                      , n = (0,
                    h.EW)(( () => "register" === t.name));
                    return (e, t) => ((0,
                    h.uX)(),
                    (0,
                    h.CE)("div", B, [(0,
                    h.bF)(T, {
                        class: "layout-header"
                    }), (0,
                    h.bF)(D, {
                        class: (0,
                        w.C4)(["layout-content", {
                            hide: (0,
                            g.R1)(n)
                        }])
                    }, {
                        default: (0,
                        h.k6)(( () => [(0,
                        h.RG)(e.$slots, "default")])),
                        _: 3
                    }, 8, ["class"]), (0,
                    h.bF)(M, {
                        class: "layout-footer"
                    })]))
                }
            };
            var F = (0,
            x.A)(O, [["__scopeId", "data-v-081f3985"]]);
            var W = {
                __name: "App",
                setup(e) {
                    return (e, t) => {
                        const n = (0,
                        h.g2)("router-view");
                        return (0,
                        h.uX)(),
                        (0,
                        h.Wv)((0,
                        g.R1)(F), null, {
                            default: (0,
                            h.k6)(( () => [(0,
                            h.bF)(n)])),
                            _: 1
                        })
                    }
                }
            };
            const j = []
              , q = n(9770);
            q.keys().forEach((e => {
                const t = e.replace(/^\.\/|\.js$/g, "")
                  , n = q(e).default;
                j.push({
                    name: t,
                    directive: n
                })
            }
            ));
            const {app: V} = function(e={}) {
                f.A.config({
                    errorCallback: e => {
                        e && (0,
                        o.nk)({
                            message: e,
                            grouping: !0,
                            type: "error"
                        })
                    }
                    ,
                    useRisk: u.A
                }),
                f.A;
                const t = (0,
                a.Ef)(e.App);
                (e => {
                    e.use((0,
                    i.Ey)())
                }
                )(t),
                ( (e, t={}) => {
                    for (const n in t)
                        r.A[n] = t[n];
                    e.config.globalProperties.$utils = r.A
                }
                )(t, e.utils),
                ( (e, t={}) => {
                    for (const [n,r] of Object.entries(d))
                        e.component(n, r);
                    for (const n in t)
                        e.component(n, t[n])
                }
                )(t, e.components);
                const {router: n, history: s} = ( (e, t={}) => {
                    const {global: n=window, routerBase: r, routes: o, localRoutes: a} = t
                      , i = l({
                        routerBase: r,
                        routes: o,
                        global: n
                    });
                    return e.use(i.router),
                    i
                }
                )(t, e);
                return ( (e, t) => {
                    e.provide("_$analysis", e.config.globalProperties._$analysis),
                    window.CtcloudAnalysis?.install(e, {
                        router: t,
                        flowReport: {
                            enable: !0
                        }
                    })
                }
                )(t, n),
                (e => {
                    e.config.errorHandler = (e, t, n) => {
                        const o = `vue逻辑报错: ${t.$.vnode.type.__file} 发生错误：${e} 所在生命周期：${n}`;
                        console.error(o),
                        r.A.report.sendEvent("business.monitor.times", [{
                            message: o
                        }])
                    }
                }
                )(t),
                (async (e, t={}) => {
                    t.beforeMount && await t.beforeMount(),
                    e.mount(t.mountEl || "#app")
                }
                )(t, e),
                {
                    app: t,
                    router: n,
                    history: s
                }
            }({
                global: window,
                App: W,
                routerBase: "/h5/auth",
                routes: v,
                utils: {}
            });
            var Q;
            Q = V,
            j.map((e => {
                const {name: t="", directive: n={}} = e || {};
                Q.directive(t, n)
            }
            ))
        },
        8790: function(e, t, n) {
            "use strict";
            var r = n(926)
              , o = n(8665)
              , a = n(168);
            t.A = (0,
            r.nY)("confirmInfoStore", {
                state: () => ({
                    confirmStatus: {}
                }),
                actions: {
                    setConfirm(e) {
                        Object.assign(this.confirmStatus, e)
                    },
                    getConfirm() {
                        return this.confirmStatus
                    },
                    async getChangeInformation(e) {
                        const {data: {value: {code: t="", message: n="", data: {agencyId: r="", agencyApprovalNodeId: i="", beforeIncomeProvinceName: s="", beforeIncomeCityName: c="", afterIncomeProvinceName: l="", afterIncomeCityName: u=""}={}}={}}={}} = await (0,
                        o.A)({
                            url: a.Tx,
                            query: e
                        });
                        this.setConfirm({
                            status: t,
                            agencyId: r,
                            agencyApprovalNodeId: i,
                            code: e.code,
                            message: n,
                            beforeIncome: {
                                provinceName: s,
                                cityName: c
                            },
                            afterIncome: {
                                provinceName: l,
                                cityName: u
                            }
                        })
                    }
                }
            })
        },
        9818: function(e, t, n) {
            "use strict";
            var r = n(926)
              , o = n(5236)
              , a = n(3324);
            t.A = (0,
            r.nY)("useLayout", ( () => {
                const e = (0,
                o.KR)("#edeff1");
                return {
                    bgColor: e,
                    whiteLayout: () => {
                        e.value = "white",
                        (0,
                        a.hi)(( () => {
                            e.value = "#edeff1"
                        }
                        ))
                    }
                }
            }
            ))
        },
        2851: function(e, t, n) {
            "use strict";
            var r = n(926)
              , o = n(8665)
              , a = n(3324);
            t.A = (0,
            r.nY)("auth.cms.logo", ( () => {
                const {data: e} = (0,
                o.A)({
                    url: "/v1/portal/banner/GetDomain?domain=ctyun.home-v4.logo"
                });
                return {
                    consoleLogo: (0,
                    a.EW)(( () => (e.value?.list || []).find((e => "consoleLogo" === e.properties))?.icon)),
                    mainLogo: (0,
                    a.EW)(( () => (e.value?.list || []).find((e => "mainLogo" === e.properties))?.icon))
                }
            }
            ))
        },
        168: function(e, t, n) {
            "use strict";
            n.d(t, {
                HF: function() {
                    return l
                },
                SQ: function() {
                    return s
                },
                Tx: function() {
                    return a
                },
                Ug: function() {
                    return r
                },
                _v: function() {
                    return c
                },
                cQ: function() {
                    return o
                },
                jk: function() {
                    return u
                },
                qb: function() {
                    return i
                }
            });
            const r = "/v2/agency/subAgent/getDetail"
              , o = "/v2/agency/subAgent/confirmAgencyPreBind"
              , a = "/v2/agency/incomeProvince/changeInformation"
              , i = "/v2/agency/incomeProvince/changeApprove"
              , s = "/v2/agency/jxs/cloudCustomer/getDetail"
              , c = "/v2/agency/jxs/cloudCustomer/confirmBindCusSms"
              , l = "/v2/agency/jxs/cloudCustomer/confirmCreateCusSms"
              , u = "/v2/portal/term/Get"
        },
        6604: function(e, t, n) {
            "use strict";
            n.r(t),
            t.default = [{
                path: "/channelConfirm/confirmResult",
                name: "channelConfirm.confirmResult",
                component: () => n.e(129).then(n.bind(n, 7129))
            }]
        },
        4124: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(3135)
              , o = n(8790);
            const a = [];
            var i;
            (i = n(9228)).keys().forEach((e => {
                const t = i(e).default;
                Array.isArray(t) ? a.push(...t) : a.push(t)
            }
            )),
            t.default = {
                name: "channelConfirm",
                path: "/channelConfirm",
                subUser: !0,
                component: () => n.e(118).then(n.bind(n, 9118)),
                children: a,
                beforeEnter: async (e, t, n) => {
                    const {query: a={}} = e || {};
                    await (0,
                    o.A)().getChangeInformation(a);
                    const {status: i="", message: s=""} = (0,
                    o.A)().getConfirm();
                    return ["notConfirm", "confirm", "fail"].includes(i) ? (n({
                        name: "" + ("notConfirm" === i ? "channelConfirm.unconfirmed" : "channelConfirm.confirmResult"),
                        query: "notConfirm" === i ? a : {}
                    }),
                    !0) : ((0,
                    r.nk)({
                        type: "error",
                        message: s
                    }),
                    !1)
                }
            }
        },
        2353: function(e, t, n) {
            "use strict";
            n.r(t),
            t.default = [{
                path: "/channelConfirm/unconfirmed",
                name: "channelConfirm.unconfirmed",
                component: () => n.e(66).then(n.bind(n, 7066))
            }]
        },
        8902: function(e, t, n) {
            "use strict";
            n.r(t),
            t.default = [{
                path: "/createCustomerConfirm",
                name: "createCustomerConfirm",
                component: () => Promise.all([n.e(192), n.e(948), n.e(48)]).then(n.bind(n, 3048))
            }, {
                path: "/bindCustomerConfirm",
                name: "bindCustomerConfirm",
                component: () => Promise.all([n.e(192), n.e(948), n.e(48)]).then(n.bind(n, 3048))
            }]
        },
        5722: function(e, t, n) {
            "use strict";
            n.r(t),
            t.default = [{
                path: "/createConfirm",
                name: "createConfirm",
                component: () => n.e(805).then(n.bind(n, 8805))
            }]
        },
        4162: function(e, t, n) {
            "use strict";
            n.r(t),
            t.default = [{
                path: "/inviteDealerCustomerConfirm",
                name: "inviteDealerCustomerConfirm",
                component: () => Promise.all([n.e(192), n.e(948), n.e(523)]).then(n.bind(n, 2523))
            }, {
                path: "/createDealerCustomerConfirm",
                name: "createDealerCustomerConfirm",
                component: () => Promise.all([n.e(192), n.e(948), n.e(523)]).then(n.bind(n, 2523))
            }]
        },
        6380: function(e, t, n) {
            "use strict";
            n.r(t),
            t.default = [{
                path: "/inviteConfirm",
                name: "inviteConfirm",
                component: () => n.e(608).then(n.bind(n, 2608))
            }]
        },
        1574: function(e, t, n) {
            "use strict";
            n.r(t);
            const r = [];
            var o;
            (o = n(7318)).keys().forEach((e => {
                const t = o(e).default;
                Array.isArray(t) ? r.push(...t) : r.push(t)
            }
            )),
            t.default = {
                name: "",
                path: "/",
                subUser: !0,
                component: () => n.e(810).then(n.bind(n, 9810)),
                children: r,
                beforeEnter: async (e, t) => !0
            }
        },
        2665: function(e, t, n) {
            "use strict";
            n.r(t),
            t.default = [{
                path: "/changeRole",
                name: "changeRole",
                component: () => Promise.all([n.e(192), n.e(948), n.e(966)]).then(n.bind(n, 2376)),
                meta: {
                    background: !0
                }
            }]
        },
        2764: function(e, t, n) {
            "use strict";
            n.r(t),
            t.default = [{
                path: "/entrustedLogin",
                name: "entrustedLogin",
                component: () => Promise.all([n.e(192), n.e(948), n.e(966)]).then(n.bind(n, 4822)),
                meta: {
                    background: !0
                }
            }]
        },
        1932: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(8227);
            t.default = [{
                path: "/findAccount",
                name: "findAccount",
                redirect: "/findAccount/enterprise",
                beforeEnter: async () => {
                    await (0,
                    r.A)()
                }
                ,
                component: () => Promise.all([n.e(192), n.e(948), n.e(127)]).then(n.bind(n, 1814)),
                children: [{
                    path: "/findAccount/domain",
                    name: "findAccount.domain",
                    component: () => Promise.all([n.e(192), n.e(948), n.e(127)]).then(n.bind(n, 9633)),
                    meta: {
                        hasTypeTabs: !0
                    }
                }, {
                    path: "/findAccount/enterprise",
                    name: "findAccount.enterprise",
                    component: () => Promise.all([n.e(192), n.e(948), n.e(127)]).then(n.bind(n, 6266)),
                    meta: {
                        hasTypeTabs: !0
                    }
                }, {
                    path: "/findAccount/invoice",
                    name: "findAccount.invoice",
                    component: () => Promise.all([n.e(192), n.e(948), n.e(127)]).then(n.bind(n, 5017)),
                    meta: {
                        hasTypeTabs: !0
                    }
                }, {
                    path: "/findAccount/ip",
                    name: "findAccount.ip",
                    component: () => Promise.all([n.e(192), n.e(948), n.e(127)]).then(n.bind(n, 4608)),
                    meta: {
                        hasTypeTabs: !0
                    }
                }, {
                    path: "/findAccount/order",
                    name: "findAccount.order",
                    component: () => Promise.all([n.e(192), n.e(948), n.e(127)]).then(n.bind(n, 5982)),
                    meta: {
                        hasTypeTabs: !0
                    }
                }, {
                    path: "/findAccount/personal",
                    name: "findAccount.personal",
                    component: () => Promise.all([n.e(192), n.e(948), n.e(127)]).then(n.bind(n, 3911)),
                    meta: {
                        hasTypeTabs: !0
                    }
                }, {
                    path: "/findAccount/info",
                    name: "findAccount.info",
                    component: () => Promise.all([n.e(192), n.e(948), n.e(127)]).then(n.bind(n, 6713))
                }, {
                    path: "/findAccount/info/results",
                    name: "findAccount.info.results",
                    component: () => Promise.all([n.e(192), n.e(948), n.e(127)]).then(n.bind(n, 3522))
                }, {
                    path: "/findAccount/info/review",
                    name: "findAccount.info.review",
                    component: () => Promise.all([n.e(192), n.e(948), n.e(127)]).then(n.bind(n, 4905))
                }, {
                    path: "/findAccount/info/failed",
                    name: "findAccount.info.failed",
                    component: () => Promise.all([n.e(192), n.e(948), n.e(127)]).then(n.bind(n, 3973))
                }]
            }]
        },
        8779: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(8227);
            t.default = [{
                path: "/findPass",
                name: "findPass",
                beforeEnter: async () => {
                    await (0,
                    r.A)()
                }
                ,
                component: () => Promise.all([n.e(192), n.e(948), n.e(209)]).then(n.bind(n, 1726)),
                meta: {
                    loginBtn: !0,
                    mTitle: "找回密码"
                }
            }]
        },
        8694: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(8227);
            t.default = [{
                path: "/login",
                name: "login",
                component: () => Promise.all([n.e(192), n.e(948), n.e(966)]).then(n.bind(n, 1421)),
                beforeEnter: async e => {
                    await (0,
                    r.A)(e, !1)
                }
                ,
                meta: {
                    background: !0
                }
            }, {
                path: "/bind",
                name: "bind",
                component: () => Promise.all([n.e(192), n.e(948)]).then(n.bind(n, 1421))
            }]
        },
        4778: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(8665)
              , o = n(2631)
              , a = n(8227);
            t.default = [{
                path: "/register",
                name: "register",
                component: () => Promise.all([n.e(192), n.e(948), n.e(224)]).then(n.bind(n, 8124)),
                meta: {
                    background: !0
                },
                beforeEnter: async (e, t) => {
                    await (0,
                    a.A)();
                    const {registerType: n, aid: i, agencyType: s} = e.query
                      , c = "AGC_100_12_0003" === n ? "总经销商" : "总代";
                    if (i && n) {
                        const {data: {value: {ban: e, subCode: t, quitType: n}}} = await (0,
                        r.A)({
                            url: "/v2/agency/united/agentBan/checkIfBanByAgencyId",
                            query: {
                                moduleCode: "AGC_106_01_0003",
                                agencyId: i
                            }
                        });
                        if (n) {
                            const e = "AGC_106_01_0004" === t ? "end" === n ? "您绑定的上级伙伴已退出，您不能发展客户，有疑问请联系渠道经理！" : "您绑定的上级伙伴已启动退出流程，您不能发展客户，有疑问请联系渠道经理！" : "secEnd" === n ? "该账号已退出，不能发展客户，有疑问请联系您绑定的总代！" : "end" === n ? "该账号已退出，不能发展客户，有疑问请联系渠道经理！" : "该账号已启动退出流程，不能发展客户，有疑问请联系渠道经理！";
                            await o.s.alert(e, "提示", {
                                confirmButtonText: "确定",
                                callback: () => {
                                    window.location.replace(`${window.location.origin}/`)
                                }
                            })
                        }
                        if (e) {
                            const e = "AGC_106_01_0004" === t ? `您绑定的${c}账号已被封禁，所以您不能发展客户，有疑问请联系渠道经理！` : "您的账号已被封禁，不能发展客户，有疑问请联系渠道经理！";
                            await o.s.alert(e, "提示", {
                                confirmButtonText: "确定",
                                callback: () => {
                                    window.location.replace(`${window.location.origin}/`)
                                }
                            })
                        }
                    }
                    return !0
                }
            }]
        },
        7436: function(e, t, n) {
            "use strict";
            n.r(t),
            t.default = [{
                path: "/sso/login/:identityId?",
                name: "sso.login",
                component: () => Promise.all([n.e(192), n.e(948), n.e(803)]).then(n.bind(n, 7470))
            }, {
                path: "/sso/chooseAccount",
                name: "sso.chooseAccount",
                component: () => Promise.all([n.e(192), n.e(948), n.e(803)]).then(n.bind(n, 775))
            }, {
                path: "/sso/findPass",
                name: "sso.findPass",
                component: () => Promise.all([n.e(192), n.e(948), n.e(803)]).then(n.bind(n, 2780))
            }, {
                path: "/sso/activate/:result",
                name: "sso.activate",
                component: () => Promise.all([n.e(192), n.e(948), n.e(803)]).then(n.bind(n, 1372))
            }]
        },
        6065: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return Kt
                }
            });
            var r = n(1580)
              , o = n(5231);
            const a = function(e, t) {
                let n;
                return n = t || "YYYY-MM-DD HH:mm:ss",
                /^\d+$/g.test(e) ? (0,
                o.NR)(Number(e), n).value : e
            }
              , i = e => {
                return !isNaN(e) && (t = "Number",
                e => `[object ${t}]` === Object.prototype.toString.call(e))(e);
                var t
            }
              , s = (e=Date.now(), t=Date.now()) => {
                if (t -= 0,
                !i(e -= 0) || !i(t))
                    return "";
                let n = Math.floor((t - e) / 1e3);
                n = n < 0 ? -n : n;
                const r = 86400
                  , o = 3600
                  , a = 60
                  , s = {
                    day: 0,
                    hour: 0,
                    minute: 0,
                    second: 0
                };
                return n < 1 ? "" : (n < a ? s.second = ~~(n % a / 1) : n < o ? (s.minute = ~~(n / a),
                s.second = ~~(n % a / 1)) : n < r ? (s.hour = ~~(n / o),
                s.minute = ~~(n % o / a),
                s.second = ~~(n % a / 1)) : (s.day = ~~(n / r),
                s.hour = ~~(n % r / o),
                s.minute = ~~(n % o / a),
                s.second = ~~(n % a / 1)),
                s)
            }
            ;
            function c(e, t, n) {
                return void 0 === n || 0 == +n ? Math[e](t) : (t = +t,
                n = +n,
                isNaN(t) || "number" != typeof n || n % 1 != 0 ? NaN : (t = t.toString().split("e"),
                +((t = (t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - n : -n)))).toString().split("e"))[0] + "e" + (t[1] ? +t[1] + n : n))))
            }
            a.countdown = e => {
                if ((new Date).getTime() < e) {
                    const t = s((new Date).getTime(), e);
                    let n = 0;
                    if (t.day > 0)
                        return n = t.day,
                        t.hour > 0 && n++,
                        `${n} 天`;
                    if (t.hour > 0)
                        return n = t.hour,
                        t.minute > 0 && n++,
                        `${n} 小时`;
                    if (t.minute > 0)
                        return n = t.minute,
                        t.second > 0 && n++,
                        `${n} 分`;
                    if (t.second > 0)
                        return `${n} 秒`
                }
                return "已过期"
            }
            ,
            a.diff = s,
            a.toTimeStamp = function(e, t) {
                if (!e)
                    return e;
                const n = (0,
                o.NR)(`${e}`, "YYYY.MM.DD.HH.mm.ss").value.split(".");
                n[1] = n[1] - 1;
                return new Date(...n).getTime()
            }
            ;
            const l = function(e, t) {
                return c("round", e, t)
            };
            function u(e) {
                let t = String(e);
                if (!/e/.test(t))
                    return e;
                let n = !0;
                /e-/.test(t) && (n = !1);
                let r = Number(t.match(/\d+$/)[0])
                  , o = t.match(/^[\d\.]+/)[0].replace(/\./, "");
                return n ? o.padEnd(r + 1, 0) : o.padStart(r + o.length, 0).replace(/^0/, "0.")
            }
            function d(e) {
                return 0 === e && 1 / e < 0
            }
            var f = function(e, t="minute", n=!1, r=!0) {
                if (!e || isNaN(e))
                    return e || "0.00";
                const o = "minute" === t ? e / 100 : e;
                let a = -2;
                if (n) {
                    const n = e.split(".");
                    let r = 2 === n.length ? n[1].length : 0;
                    "minute" === t && (r += 2),
                    a = Number(`-${r}`)
                }
                let i = l(o, a);
                const s = `${u(Number(i))}`
                  , c = (e => e - 0 < 0)(e) ? Math.ceil(Number(s)) : Math.floor(Number(s))
                  , f = d(c) ? "-0" : c.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
                  , m = s.split(".");
                let p = ".00";
                return p = 2 === m.length ? `.${m[1].toString()}` : ".00",
                2 === p.length && (p = `${p}0`),
                r ? `${f}${p}` : `${c}${p}`
            };
            var m = {
                date: a,
                money: f,
                masking: {
                    bankAct: e => e.replace(/(.{4})(.*)(.{4})/, ( (e, t, n, r) => t + n.replace(/.{1}/g, "*") + r)),
                    mail: e => e.replace(/(.{1})(.*)(.{1})(@.*)/, "$1****$3$4"),
                    phone: e => e.replace(/(\d{3})\d*(\d{4})/, "$1****$2")
                }
            }
              , p = n(5946)
              , v = n(8527);
            var h = {
                diff: (e=Date.now(), t=Date.now()) => {
                    if (t -= 0,
                    "number" != typeof (e -= 0) || "number" != typeof t)
                        return "";
                    let n = Math.floor((t - e) / 1e3);
                    n = n < 0 ? -n : n;
                    const r = 86400
                      , o = 3600
                      , a = 60
                      , i = {
                        day: 0,
                        hour: 0,
                        minute: 0,
                        second: 0
                    };
                    return n < 1 ? "" : (n < a ? i.second = ~~(n % a / 1) : n < o ? (i.minute = ~~(n / a),
                    i.second = ~~(n % a / 1)) : n < r ? (i.hour = ~~(n / o),
                    i.minute = ~~(n % o / a),
                    i.second = ~~(n % a / 1)) : (i.day = ~~(n / r),
                    i.hour = ~~(n % r / o),
                    i.minute = ~~(n % o / a),
                    i.second = ~~(n % a / 1)),
                    i)
                }
                ,
                near: e => {
                    const t = new Date
                      , n = new Date;
                    return (!isNumber(e) || e < 0) && (e = 0),
                    n.setTime(n.getTime() - 864e5 * e),
                    {
                        start: n,
                        end: t
                    }
                }
                ,
                maxOfDay: (e=new Date) => new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999),
                minOfDay: (e=new Date) => new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0),
                dateformat: e => {
                    function t(e) {
                        return e < 10 ? "0" + e : e
                    }
                    const n = new Date(e - 0)
                      , r = n.getFullYear()
                      , o = n.getMonth() + 1
                      , a = n.getDate();
                    return r + "-" + t(o) + "-" + t(a)
                }
                ,
                timeformat: e => {
                    function t(e) {
                        return e < 10 ? "0" + e : e
                    }
                    const n = new Date(e - 0)
                      , r = n.getFullYear()
                      , o = n.getMonth() + 1
                      , a = n.getDate()
                      , i = n.getHours()
                      , s = n.getMinutes()
                      , c = n.getSeconds();
                    return `${t(r)}-${t(o)}-${t(a)} ${t(i)}:${t(s)}:${t(c)}`
                }
            };
            const g = () => {
                const e = window.location.host;
                return /ittest/.test(e) ? "ittest" : /js|local|l\.ctyun\.cn/.test(e) ? "test" : /gray/.test(e) ? "gray" : /show/.test(e) ? "show" : /bak/.test(e) ? "bak" : "product"
            }
            ;
            var w = {
                isProduction: () => !0,
                isDevelopment: () => !1,
                getCurEnv: g,
                getCurEnvMHost: () => ({
                    test: "https://mtest.ctyun.cn:21443",
                    gray: "https://mgray.ctyun.cn",
                    show: "https://mshow.ctyun.cn:11443",
                    product: "https://m.ctyun.cn",
                    bak: "https://mbak.ctyun.cn",
                    ittest: "https://mittest.ctyun.cn:21443"
                }[g()])
            }
              , y = n(1224);
            var b = {
                URL_REG: "/ctyun/signup",
                URL_LOGIN: "/ctyun/signin",
                URL_REAL: "/ctyun/realinfo",
                getMobileHost: () => {
                    const e = window.location.hostname;
                    return {
                        test: "https://mtest.ctyun.cn:21443",
                        gray: "https://mgray.ctyun.cn",
                        show: "https://mshow.ctyun.cn:11443",
                        product: "https://m.ctyun.cn",
                        bak: "https://mbak.ctyun.cn"
                    }[-1 !== e.indexOf("test") ? "test" : -1 !== e.indexOf("gray") ? "gray" : -1 !== e.indexOf("show") ? "show" : -1 !== e.indexOf("bak") ? "bak" : "product"]
                }
            };
            const C = e => /^\S{4,20}$/.test(e)
              , A = e => /^[\u4e00-\u9fa5a-zA-Z].*$/.test(e)
              , E = e => /^[\u4e00-\u9fa5a-zA-Z0-9\_]+$/.test(e);
            var I = {
                email: e => /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]+$/.test(e),
                mobile: e => /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(e),
                imgCode: e => /^[a-zA-Z0-9]{4}$/.test(e),
                authCode: e => /^\d{6}$/.test(e),
                ip: e => /^((0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])$/.test(e),
                fileTypes: e => /(txt|rar|zip|doc|docx|ini|conf|eml|pdf|xlsx|xls)$/.test(e),
                personCard: e => {
                    let t = !0;
                    if (e || (t = !1),
                    /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/.test(e) || (t = !1),
                    {
                        11: "北京",
                        12: "天津",
                        13: "河北",
                        14: "山西",
                        15: "内蒙古",
                        21: "辽宁",
                        22: "吉林",
                        23: "黑龙江 ",
                        31: "上海",
                        32: "江苏",
                        33: "浙江",
                        34: "安徽",
                        35: "福建",
                        36: "江西",
                        37: "山东",
                        41: "河南",
                        42: "湖北 ",
                        43: "湖南",
                        44: "广东",
                        45: "广西",
                        46: "海南",
                        50: "重庆",
                        51: "四川",
                        52: "贵州",
                        53: "云南",
                        54: "西藏 ",
                        61: "陕西",
                        62: "甘肃",
                        63: "青海",
                        64: "宁夏",
                        65: "新疆",
                        71: "台湾",
                        81: "香港",
                        82: "澳门",
                        91: "国外 "
                    }[e.substr(0, 2)] || (t = !1),
                    18 === e.length) {
                        e = e.split("");
                        const n = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
                          , r = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
                        let o = 0
                          , a = 0
                          , i = 0;
                        for (let t = 0; t < 17; t++)
                            a = e[t],
                            i = n[t],
                            o += a * i;
                        `${r[o % 11]}` != `${e[17]}` && (t = !1)
                    }
                    return t
                }
                ,
                ipv6: e => {
                    let t = !0;
                    const n = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
                      , r = e.split(",");
                    for (let o = 0; o < r.length; o += 1)
                        if (!1 === n.test(r[o]))
                            return t = !1,
                            !1;
                    return t
                }
                ,
                ipv4: e => null != e.match(/^[0-9.\-,]+$/),
                taxpayerId: e => /^\w{15,20}$/.test(e),
                tel: e => /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/.test(e),
                telephone: e => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e) || /^0\d{2,3}-[1-9]\d{6,7}$/.test(e),
                virtualPhone: e => /^1(70|65|62|71|67)/.test(e),
                bankAcct: e => /^\d{7,30}$/.test(e),
                subBranchNo: e => /^[0-9A-Za-z]{12}$/.test(e),
                postCode: e => /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/.test(e),
                idCard: e => /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/.test(e),
                socialCreditCode: e => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(e),
                money: e => /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(e),
                price: e => /(^[1-9]\d*(\.\d{1,2})?$)|(^[0]{1}(\.\d{1,2})?$)/.test(e),
                idCardAgeReach: (e, t=16) => (0,
                p.QO)(e) >= t,
                QQ: e => /^[1-9][0-9]{3,}$/.test(e),
                loginNameLength: C,
                loginNameFirstChar: A,
                loginNameCharType: E,
                loginName: e => C(e) && A(e) && E(e)
            };
            const k = "classList"in document.body
              , x = (e, t) => (t = t ? "string" == typeof t ? x(t) : t : document).querySelector(e)
              , T = (e, t) => k ? e.classList.contains(t) : e.className.includes(t)
              , S = (e, t) => {
                const n = new RegExp(`${t}\\s?`,"g");
                return k ? e.classList.remove(t) : e.className = e.className.replace(n, "").trim()
            }
              , R = (e, t) => {
                if (!T(e, t))
                    if (k)
                        e.classList.add(t);
                    else {
                        let n = e.className;
                        n += ` ${t}`,
                        e.className = n.trim().replace(/\s+/g, " ")
                    }
            }
              , P = {
                setCssProperty: (e, t, n) => {
                    e.style[t] = e.style[`ms${t.slice(0, 1).toUpperCase()}${t.slice(1)}`] = n
                }
                ,
                getEle: x,
                getEles: (e, t) => (t = t ? "string" == typeof t ? x(t) : t : document,
                Array.from(t.querySelectorAll(e))),
                addClass: R,
                replaceClass: (e, t, n) => {
                    const r = new RegExp("\\b" + t + "\\b","g");
                    e.className = e.className.replace(r, n)
                }
                ,
                toggleClass: (e, t) => {
                    T(e, t) ? S(e, t) : R(e, t)
                }
                ,
                hasClass: T,
                removeClass: S,
                getOuterWidth: e => {
                    const t = e.innerHTML
                      , n = document.createElement("div");
                    return n.innerHTML = t,
                    n.offsetWidth
                }
                ,
                getTranslateValues: e => {
                    const t = window.getComputedStyle(e)
                      , n = t.transform || t.webkitTransform || t.mozTransform;
                    if ("none" === n || void 0 === n)
                        return {
                            x: 0,
                            y: 0,
                            z: 0
                        };
                    const r = n.includes("3d") ? "3d" : "2d"
                      , o = n.match(/matrix.*\((.+)\)/)[1].split(", ");
                    return "2d" === r ? {
                        x: o[4],
                        y: o[5],
                        z: 0
                    } : "3d" === r ? {
                        x: o[12],
                        y: o[13],
                        z: o[14]
                    } : void 0
                }
                ,
                genHtmlNodesByRichText: (e, t=[]) => {
                    const n = ( (e, t="") => v.Ay.isString(e) ? e.replace(/:/g, "：") : t)(( (e, t, n="") => v.Ay.isString(e) ? e.replace(/\\r\\n/g, t ? "<br>" : "\n") : n)(e, !0))
                      , r = document.createElement("div")
                      , o = [...t];
                    var a;
                    r.innerHTML = n,
                    a = r,
                    Array.from(a.querySelectorAll("br")).forEach((e => {
                        try {
                            e.remove()
                        } catch {
                            e.removeNode(!0)
                        }
                    }
                    ));
                    for (let i = 0; i < r.childNodes.length; i++) {
                        let e;
                        const t = r.childNodes[i];
                        t.nodeType === Node.ELEMENT_NODE && (e = t.outerHTML,
                        "br" === t.tagName.toLowerCase()) || (t.nodeType === Node.TEXT_NODE && (e = `<p>${t.textContent}</p>`),
                        o.push(e))
                    }
                    return o
                }
            };
            var L = P;
            const N = (e, t="milliseconds", n="ceil") => {
                if ("milliseconds" === t)
                    return e;
                const r = new Date(e);
                return ["year", "month", "day", "hour", "minute", "seconds"].includes(t) && ("floor" === n ? r.setMilliseconds(999) : r.setMilliseconds(0)),
                ["year", "month", "day", "hour", "minute"].includes(t) && ("floor" === n ? r.setSeconds(59) : r.setSeconds(0)),
                ["year", "month", "day", "hour"].includes(t) && ("floor" === n ? r.setMinutes(59) : r.setMinutes(0)),
                ["year", "month", "day"].includes(t) && ("floor" === n ? r.setHours(23) : r.setHours(0)),
                ["year", "month"].includes(t) && ("floor" === n ? (r.setMonth(r.getMonth() + 1),
                r.setDate(0)) : r.setDate(1)),
                ["year"].includes(t) && ("floor" === n ? r.setMonth(11) : r.setMonth(0)),
                r.getTime()
            }
            ;
            var M = {
                getPrecisionTimestamp: N,
                inRange: (e, t=[(new Date).getTime(), (new Date).getTime() + 1], n="milliseconds", r) => N(e, n, "ceil") >= N(t[0], n, "ceil") && N(e, n, "floor") <= N(t[1], n, "floor"),
                beforeRange: (e, t=[(new Date).getTime(), (new Date).getTime() + 1], n="milliseconds", r) => N(e, n, "ceil") < N(t[0], n, "ceil"),
                afterRange: (e, t=[(new Date).getTime(), (new Date).getTime() + 1], n="milliseconds", r) => N(e, n, "floor") > N(t[1], n, "floor")
            };
            function _(e) {
                return f(e, "yuan").replace(/,/g, "")
            }
            function $(e=0, t=0) {
                e = _(e),
                t = _(t);
                let n = 0;
                const r = e.toString()
                  , o = t.toString();
                try {
                    n += r.split(".")[1].length
                } catch (a) {}
                try {
                    n += o.split(".")[1].length
                } catch (a) {}
                return Number(r.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, n)
            }
            const U = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
              , D = ["", "十", "百", "千"];
            var B = {
                add: function(e=0, t=0) {
                    let n, r;
                    e = _(e),
                    t = _(t);
                    try {
                        n = e.toString().split(".")[1].length
                    } catch (a) {
                        n = 0
                    }
                    try {
                        r = t.toString().split(".")[1].length
                    } catch (a) {
                        r = 0
                    }
                    const o = Math.pow(10, Math.max(n, r));
                    return ($(e, o) + $(t, o)) / o
                },
                sub: function(e=0, t=0) {
                    let n, r;
                    e = _(e),
                    t = _(t);
                    try {
                        n = e.toString().split(".")[1].length
                    } catch (a) {
                        n = 0
                    }
                    try {
                        r = t.toString().split(".")[1].length
                    } catch (a) {
                        r = 0
                    }
                    const o = Math.pow(10, Math.max(n, r));
                    return ($(e, o) - $(t, o)) / o
                },
                mul: $,
                div: function(e, t) {
                    let n, r;
                    e = _(e),
                    t = _(t);
                    let o = 0
                      , a = 0;
                    try {
                        o = e.toString().split(".")[1].length
                    } catch (i) {}
                    try {
                        a = t.toString().split(".")[1].length
                    } catch (i) {}
                    return n = Number(e.toString().replace(".", "")),
                    r = Number(t.toString().replace(".", "")),
                    $(n / r, Math.pow(10, a - o))
                },
                isNumber: e => /^\d+(\.\d+)?$/.test(e),
                sectionToChinese: function(e) {
                    let t = ""
                      , n = ""
                      , r = 0
                      , o = !0
                      , a = e;
                    for (; a > 0; ) {
                        const e = a % 10;
                        0 === e ? o || (o = !0,
                        n = U[e] + n) : (o = !1,
                        t = U[e],
                        t += D[r],
                        n = t + n),
                        r += 1,
                        a = Math.floor(a / 10)
                    }
                    return n
                }
            };
            function O(e) {
                return /[A-Z]/.test(e) ? e.charCodeAt(0) - "A".charCodeAt(0) : /[a-z]/.test(e) ? e.charCodeAt(0) - "a".charCodeAt(0) + 26 : /[0-9]/.test(e) ? e.charCodeAt(0) - "0".charCodeAt(0) + 52 : "+" === e ? 62 : "/" === e ? 63 : void 0
            }
            var F = function(e) {
                if ((e = (e = `${e}`).replace(/[ \t\n\f\r]/g, "")).length % 4 == 0 && (e = e.replace(/==?$/, "")),
                e.length % 4 == 1 || /[^+/0-9A-Za-z]/.test(e))
                    return null;
                let t = ""
                  , n = 0
                  , r = 0;
                for (let o = 0; o < e.length; o++)
                    n <<= 6,
                    n |= O(e[o]),
                    r += 6,
                    24 === r && (t += String.fromCharCode((16711680 & n) >> 16),
                    t += String.fromCharCode((65280 & n) >> 8),
                    t += String.fromCharCode(255 & n),
                    n = r = 0);
                return 12 === r ? (n >>= 4,
                t += String.fromCharCode(n)) : 18 === r && (n >>= 2,
                t += String.fromCharCode((65280 & n) >> 8),
                t += String.fromCharCode(255 & n)),
                t
            };
            function W(e) {
                return e < 26 ? String.fromCharCode(e + "A".charCodeAt(0)) : e < 52 ? String.fromCharCode(e - 26 + "a".charCodeAt(0)) : e < 62 ? String.fromCharCode(e - 52 + "0".charCodeAt(0)) : 62 === e ? "+" : 63 === e ? "/" : void 0
            }
            var j = function(e) {
                let t;
                for (e = `${e}`,
                t = 0; t < e.length; t++)
                    if (e.charCodeAt(t) > 255)
                        return null;
                let n = "";
                for (t = 0; t < e.length; t += 3) {
                    const r = [void 0, void 0, void 0, void 0];
                    r[0] = e.charCodeAt(t) >> 2,
                    r[1] = (3 & e.charCodeAt(t)) << 4,
                    e.length > t + 1 && (r[1] |= e.charCodeAt(t + 1) >> 4,
                    r[2] = (15 & e.charCodeAt(t + 1)) << 2),
                    e.length > t + 2 && (r[2] |= e.charCodeAt(t + 2) >> 6,
                    r[3] = 63 & e.charCodeAt(t + 2));
                    for (let e = 0; e < r.length; e++)
                        void 0 === r[e] ? n += "=" : n += W(r[e])
                }
                return n
            };
            const q = window.atob || F
              , V = window.btoa || j;
            var Q = function(e, t, n, r, o, a) {
                n && (t = unescape(encodeURIComponent(t)));
                var i, s, c, l, u, d, f, m, p, v, h, g, w, y, b = new Array(16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756), C = new Array(-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344), A = new Array(520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584), E = new Array(8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928), I = new Array(256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080), k = new Array(536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312), x = new Array(2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154), T = new Array(268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696), S = K(e), R = 0, P = t.length, L = 0, N = 32 == S.length ? 3 : 9;
                m = 3 == N ? n ? new Array(0,32,2) : new Array(30,-2,-2) : n ? new Array(0,32,2,62,30,-2,64,96,2) : new Array(94,62,-2,32,64,2,30,-2,-2),
                2 == a ? t += "        " : 1 == a ? n && (c = 8 - P % 8,
                t += String.fromCharCode(c, c, c, c, c, c, c, c),
                8 === c && (P += 8)) : a || (t += "\0\0\0\0\0\0\0\0");
                var M = ""
                  , _ = "";
                for (1 == r && (p = o.charCodeAt(R++) << 24 | o.charCodeAt(R++) << 16 | o.charCodeAt(R++) << 8 | o.charCodeAt(R++),
                h = o.charCodeAt(R++) << 24 | o.charCodeAt(R++) << 16 | o.charCodeAt(R++) << 8 | o.charCodeAt(R++),
                R = 0); R < P; ) {
                    for (d = t.charCodeAt(R++) << 24 | t.charCodeAt(R++) << 16 | t.charCodeAt(R++) << 8 | t.charCodeAt(R++),
                    f = t.charCodeAt(R++) << 24 | t.charCodeAt(R++) << 16 | t.charCodeAt(R++) << 8 | t.charCodeAt(R++),
                    1 == r && (n ? (d ^= p,
                    f ^= h) : (v = p,
                    g = h,
                    p = d,
                    h = f)),
                    d ^= (c = 252645135 & (d >>> 4 ^ f)) << 4,
                    d ^= (c = 65535 & (d >>> 16 ^ (f ^= c))) << 16,
                    d ^= c = 858993459 & ((f ^= c) >>> 2 ^ d),
                    d ^= c = 16711935 & ((f ^= c << 2) >>> 8 ^ d),
                    d = (d ^= (c = 1431655765 & (d >>> 1 ^ (f ^= c << 8))) << 1) << 1 | d >>> 31,
                    f = (f ^= c) << 1 | f >>> 31,
                    s = 0; s < N; s += 3) {
                        for (w = m[s + 1],
                        y = m[s + 2],
                        i = m[s]; i != w; i += y)
                            l = f ^ S[i],
                            u = (f >>> 4 | f << 28) ^ S[i + 1],
                            c = d,
                            d = f,
                            f = c ^ (C[l >>> 24 & 63] | E[l >>> 16 & 63] | k[l >>> 8 & 63] | T[63 & l] | b[u >>> 24 & 63] | A[u >>> 16 & 63] | I[u >>> 8 & 63] | x[63 & u]);
                        c = d,
                        d = f,
                        f = c
                    }
                    f = f >>> 1 | f << 31,
                    f ^= c = 1431655765 & ((d = d >>> 1 | d << 31) >>> 1 ^ f),
                    f ^= (c = 16711935 & (f >>> 8 ^ (d ^= c << 1))) << 8,
                    f ^= (c = 858993459 & (f >>> 2 ^ (d ^= c))) << 2,
                    f ^= c = 65535 & ((d ^= c) >>> 16 ^ f),
                    f ^= c = 252645135 & ((d ^= c << 16) >>> 4 ^ f),
                    d ^= c << 4,
                    1 == r && (n ? (p = d,
                    h = f) : (d ^= v,
                    f ^= g)),
                    _ += String.fromCharCode(d >>> 24, d >>> 16 & 255, d >>> 8 & 255, 255 & d, f >>> 24, f >>> 16 & 255, f >>> 8 & 255, 255 & f),
                    512 == (L += 8) && (M += _,
                    _ = "",
                    L = 0)
                }
                if (M += _,
                !n) {
                    if (1 === a) {
                        var $ = M.length
                          , U = 0;
                        $ && (U = M.charCodeAt($ - 1)),
                        U <= 8 && (M = M.substring(0, $ - U))
                    }
                    M = decodeURIComponent(escape(M))
                }
                return M
            }
              , K = function(e) {
                for (var t, n, r, o = new Array(0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964), a = new Array(0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697), i = new Array(0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272), s = new Array(0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144), c = new Array(0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256), l = new Array(0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488), u = new Array(0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746), d = new Array(0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568), f = new Array(0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578), m = new Array(0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488), p = new Array(0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800), v = new Array(0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744), h = new Array(0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128), g = new Array(0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261), w = e.length > 8 ? 3 : 1, y = new Array(32 * w), b = new Array(0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0), C = 0, A = 0, E = 0; E < w; E++) {
                    var I = e.charCodeAt(C++) << 24 | e.charCodeAt(C++) << 16 | e.charCodeAt(C++) << 8 | e.charCodeAt(C++)
                      , k = e.charCodeAt(C++) << 24 | e.charCodeAt(C++) << 16 | e.charCodeAt(C++) << 8 | e.charCodeAt(C++);
                    I ^= (r = 252645135 & (I >>> 4 ^ k)) << 4,
                    I ^= r = 65535 & ((k ^= r) >>> -16 ^ I),
                    I ^= (r = 858993459 & (I >>> 2 ^ (k ^= r << -16))) << 2,
                    I ^= r = 65535 & ((k ^= r) >>> -16 ^ I),
                    I ^= (r = 1431655765 & (I >>> 1 ^ (k ^= r << -16))) << 1,
                    I ^= r = 16711935 & ((k ^= r) >>> 8 ^ I),
                    r = (I ^= (r = 1431655765 & (I >>> 1 ^ (k ^= r << 8))) << 1) << 8 | (k ^= r) >>> 20 & 240,
                    I = k << 24 | k << 8 & 16711680 | k >>> 8 & 65280 | k >>> 24 & 240,
                    k = r;
                    for (var x = 0; x < b.length; x++)
                        b[x] ? (I = I << 2 | I >>> 26,
                        k = k << 2 | k >>> 26) : (I = I << 1 | I >>> 27,
                        k = k << 1 | k >>> 27),
                        k &= -15,
                        t = o[(I &= -15) >>> 28] | a[I >>> 24 & 15] | i[I >>> 20 & 15] | s[I >>> 16 & 15] | c[I >>> 12 & 15] | l[I >>> 8 & 15] | u[I >>> 4 & 15],
                        r = 65535 & ((n = d[k >>> 28] | f[k >>> 24 & 15] | m[k >>> 20 & 15] | p[k >>> 16 & 15] | v[k >>> 12 & 15] | h[k >>> 8 & 15] | g[k >>> 4 & 15]) >>> 16 ^ t),
                        y[A++] = t ^ r,
                        y[A++] = n ^ r << 16
                }
                return y
            }
              , H = function(e, t, n) {
                return {
                    key: z(e.slice(t, n)),
                    vector: 1
                }
            }
              , z = function(e) {
                for (var t = e.length; t < 24; t++)
                    e += "0";
                return e
            }
              , X = {
                encrypt: function(e, t) {
                    var n = H(e, 0, 24);
                    return V(Q(n.key, t, 1, 0, 0, 1))
                },
                decrypt: function(e, t) {
                    var n = H(e, 0, 24);
                    return Q(n.key, q(t), 0, 0, 0, 1)
                }
            }
              , G = X;
            var J = {
                loadScript: e => new Promise((t => {
                    const n = document.createElement("script");
                    n.readyState ? n.onreadystatechange = function() {
                        "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null,
                        t())
                    }
                    : n.onload = function() {
                        t()
                    }
                    ,
                    n.src = e,
                    window.document.getElementsByTagName("head")[0].appendChild(n)
                }
                ))
            };
            const Y = {
                PLAT_REG: [[/android/, "android"], [/\(macintosh\; intel /, "osx"], [/windows/, "win"], [/iphone/, "iphone"], [/ipad/, "ipad"]],
                TERM_REG: [[/android/, "mobile"], [/\(macintosh\; intel /, "pc"], [/windows/, "pc"], [/iphone/, "mobile"], [/ipad/, "mobile"]],
                BROWSER_REG: [[/msie\s([\d.]+)/, "IE"], [/trident\/[\d](?=[^\?]+).*rv:([0-9.].)/, "IE"], [/edge\/([\d.]+)/, "Edge"], [/firefox\/([\d.]+)/, "Firefox"], [/edg\/([\d.]+)/, "Edge"], [/chrome\/([\d.]+)/, "Chrome"], [/crios\/([\d.]+)/, "Chrome"], [/safari\/([\d.]+)/, "Safari"]],
                PLAT_REG: [[/android/, "android"], [/\(macintosh\; intel /, "osx"], [/windows/, "win"], [/iphone/, "iphone"], [/ipad/, "ipad"]],
                TERM_REG: [[/android/, "mobile"], [/\(macintosh\; intel /, "pc"], [/windows/, "pc"], [/iphone/, "mobile"], [/ipad/, "mobile"]],
                data: {
                    brs: "",
                    os: "",
                    screen: "",
                    term: ""
                },
                isHistoryClient() {
                    return window && window.history && "pushState"in window.history
                },
                getEnv() {
                    return this.getScreen(),
                    this.getPlatform(),
                    this.getBrowser(),
                    this.data
                },
                getScreen() {
                    const e = window.screen;
                    return this.data.screen = `${e.width}x${e.height}-${e.colorDepth}`,
                    this.data.screen
                },
                getBrowser() {
                    return this.detect(this.BROWSER_REG, "brs")
                },
                getPlatform() {
                    const e = this.getTerminal()
                      , t = this.detect(this.PLAT_REG, "os");
                    if ("pc" === e) {
                        return t + this.getSystemVersion()
                    }
                    return t
                },
                getTerminal() {
                    return this.detect(this.TERM_REG, "term")
                },
                detect(e, t) {
                    if (this.data[t])
                        return this.data[t];
                    const n = e.map((e => e[0]))
                      , r = navigator.userAgent.toLowerCase();
                    for (let o = 0, a = n.length; o < a; o++) {
                        if (n[o].test(r)) {
                            const n = e[o][1];
                            this.data[t] = RegExp.$1 ? `${n}/${RegExp.$1}` : `${n}`;
                            break
                        }
                    }
                    return this.data[t]
                },
                getSystemVersion() {
                    const e = navigator.userAgent
                      , t = navigator.platform;
                    return -1 !== t.toLowerCase().indexOf("win") ? /Windows NT ([\d.]+)/.test(e) ? RegExp.$1 : "Unknown" : -1 !== t.toLowerCase().indexOf("mac") ? /Mac OS X ([\/\d_.]+)/.test(e) ? RegExp.$1.replace(/_/g, ".") : "Unknown" : -1 !== t.toLowerCase().indexOf("x11") ? /X11; (.*)/.test(e) ? RegExp.$1 : "Unknown" : -1 !== t.toLowerCase().indexOf("linux") ? /Linux(?:[ \t]*([\d.]+))?/.test(e) ? RegExp.$1 : "Unknown" : "Not detected"
                }
            };
            var Z = n(1081);
            const ee = []
              , te = {
                reportSeq: 0,
                getReportSeq() {
                    return this.reportSeq
                },
                updateReportSeq() {
                    this.reportSeq += 1
                },
                traceid: "",
                productName: "ctyunConsole",
                getProjectName() {
                    const e = location.pathname.split("/").filter((e => e));
                    return e.length > 1 ? e[1] : "homePage"
                },
                getPageName() {
                    const e = location.pathname.split("/").filter((e => e));
                    return e.length > 2 ? e.slice(2).join("/") : "homePage"
                },
                sendEvent(e="", t=[], n={}) {
                    if (!Array.isArray(t) || !t.length || !e)
                        return !1;
                    if (!Z.A.get("ct_m_sid1") && (!n.retryTimes || n.retryTimes && n.retryTimes < 3)) {
                        const e = Array.from(arguments);
                        return void setTimeout(( () => {
                            e[2] ? e[2].retryTimes = e[2].retryTimes ? e[2].retryTimes + 1 : 1 : e[2] = {
                                retryTimes: 1
                            },
                            this.sendEvent.apply(this, e)
                        }
                        ), 100)
                    }
                    let r = document.referrer
                      , o = location.href;
                    this.updateReportSeq(),
                    this.traceid = window?.__ctPerformance?.traceid || ( (e=8) => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
                        const t = 16 * Math.random() | 0;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    }
                    )).slice(0, e))(32);
                    const a = this.projectName ? this.projectName : this.getProjectName()
                      , i = this.productName;
                    let s = `${i}.${a}.${this.getPageName()}`;
                    let c = {
                        time: Date.now(),
                        referer: r || "",
                        current: o,
                        event: e,
                        traceId: this.traceid,
                        source: Y.getTerminal(),
                        sourceType: Y.getPlatform() + "-" + Y.getBrowser(),
                        appId: "42445843a28741958fa0543a5b3e3012",
                        pageId: s,
                        productName: i
                    }
                      , l = ee.includes(e) ? this.reportData : [];
                    t.forEach((t => {
                        t.routeName && (s = `${i}.${a}.${t.routeName}`),
                        "business.monitor.times" === e && (t.errorType = (e => {
                            const t = [[/TypeError/, "TypeError"], [/SyntaxError/, "SyntaxError"], [/ReferenceError/, "ReferenceError"], [/Request failed/, "NetworkError"], [/NotFoundError/, "NotFoundError"], [/InvalidStateError/, "InvalidStateError"]];
                            for (let n = 0, r = t.length; n < r; n++)
                                if (t[n][0].test(e))
                                    return t[n][1];
                            return "Error"
                        }
                        )(t.message)),
                        l.push({
                            ...c,
                            pageId: s,
                            current: t.curUrl || c.current,
                            seq: this.getReportSeq() || 1,
                            value: t
                        })
                    }
                    ));
                    const u = n.reprotURL || "/collection/gw/performance/Info";
                    ee.includes(e) ? ( (e, t, n, r={}) => {
                        const {firstDo: o} = r
                          , {param: a} = r;
                        o ? e.tId ? (clearTimeout(e.tId),
                        e.tId = setTimeout(( () => {
                            e.tId = 0,
                            e.call(t, a)
                        }
                        ), n)) : (e.tId = 1,
                        e.call(t, a)) : (clearTimeout(e.tId),
                        e.tId = setTimeout(( () => {
                            e.call(t, a)
                        }
                        ), n))
                    }
                    )(this.excuteReport, this, 2e3, {
                        param: u
                    }) : this.sendBeacon(u, {
                        data: l
                    })
                },
                reportData: [],
                excuteReport(e) {
                    const t = this.reportData.splice(0);
                    this.ajaxPost(e, {
                        data: t
                    })
                },
                sendBeacon(e, t) {
                    navigator.sendBeacon ? navigator.sendBeacon(e, JSON.stringify(t)) : this.ajaxPost(e, t)
                },
                ajaxPost(e, t, n) {
                    const r = new XMLHttpRequest;
                    this.wafData(t);
                    const o = JSON.stringify(t);
                    r.onreadystatechange = function() {
                        if (4 === r.readyState && 200 === r.status) {
                            const e = JSON.parse(r.responseText);
                            n && n(e)
                        }
                    }
                    ,
                    r.open("POST", e),
                    r.setRequestHeader("Content-Type", "application/json"),
                    r.send(o)
                },
                wafData(e) {
                    if (e.data && 1 === e.data.length && "performance.page" === e.data[0].event) {
                        const {navigationTiming: n} = e.data[0].value;
                        if (n) {
                            let t = JSON.parse(JSON.stringify(n));
                            delete t.nextHopProtocol,
                            e.data[0].value.navigationTiming = t
                        }
                        try {
                            if (n && !n.initiatorType) {
                                const t = n.navigationStart
                                  , r = {};
                                for (const e in n)
                                    "[object Number]" === Object.prototype.toString.call(n[e]) && (r[e] = n[e],
                                    r[e] > 0 && (r[e] = r[e] - t));
                                e.data[0].value.navigationTiming = r
                            }
                        } catch (t) {
                            console.error(t)
                        }
                    }
                },
                later(e, t=1500) {
                    return setTimeout(e, t)
                },
                reportCatchError(e) {
                    this.sendEvent("business.custom.log", [{
                        value: {
                            event: "report.catch.error",
                            detail: e
                        }
                    }])
                },
                sendPV(e) {
                    const t = e.routeName;
                    this.sendEvent("pv", [{
                        pagePv: !0,
                        routeName: t
                    }])
                }
            }
              , ne = window.rawWindow ? window.rawWindow : window;
            ne.__ctPerformance && !ne.__ctPerformance.report && (ne.__ctPerformance.report = te);
            var re = te;
            const oe = {}
              , ae = {
                performance: [],
                route: {
                    page: [],
                    app: []
                },
                cgi: {
                    beforeSend: [],
                    afterSuccess: [],
                    afterError: []
                }
            }
              , ie = {}
              , se = [];
            function ce(e) {
                if (Array.isArray(e))
                    return e.every((e => ce(e)));
                try {
                    return void 0 !== e.split(".").reduce(( (e, t) => e[t]), window)
                } catch (t) {
                    return console.error(t),
                    !1
                }
            }
            function le() {
                return ie
            }
            function ue(e={}, t={}) {
                const n = le();
                oe[e.url] = {
                    pageId: n.pageId,
                    routeName: n.routeName,
                    current: n.current,
                    curUrl: location.href,
                    referrer: n.referrer,
                    url: e.url,
                    cmdId: e.url,
                    reqBody: e,
                    startTime: Date.now(),
                    seq: t.seq,
                    requestInfo: t,
                    successCode: e.successCode || "core.ok",
                    runSide: "client",
                    ...t
                }
            }
            function de(e={}) {
                const t = e.response && e.response.data || {}
                  , n = oe[e.url];
                n && (n.traceid = t.traceid,
                n.endTime = Date.now(),
                n.cost = n.endTime - n.startTime)
            }
            function fe(e, t) {
                "function" == typeof t && ae.cgi[e] && ae.cgi[e].push(t)
            }
            function me() {
                const e = performance.getEntries().length();
                performance.setResourceTimingBufferSize(e + 100)
            }
            function pe(e, t) {
                "function" == typeof t && ae.route[e] && ae.route[e].push(t)
            }
            function ve(e) {
                e.beforeEach(( (e, t, n) => {
                    const {protocol: r, hostname: o, port: a} = window.location
                      , i = window.location.origin || `${r}//${o}${a ? `:${a}` : ""}`
                      , s = t.name ? `${i}${t.fullPath}` : document.referrer
                      , c = e.name ? `${i}${e.fullPath}` : location.href;
                    ie.to = e,
                    ie.from = t,
                    ie.referer = s,
                    ie.current = c,
                    ie.pageId = e.fullPath,
                    ie.pageName = e.path,
                    ie.routeName = e.name,
                    ie.pageQuery = e.query,
                    se.push({
                        ...ie
                    }),
                    n()
                }
                ))
            }
            const he = {
                canIUse: ce,
                throttle: (e, t, n, r={}) => {
                    const {firstDo: o} = r
                      , {param: a} = r;
                    o ? e.tId ? (clearTimeout(e.tId),
                    e.tId = setTimeout(( () => {
                        e.tId = 0,
                        e.call(t, a)
                    }
                    ), n)) : (e.tId = 1,
                    e.call(t, a)) : (clearTimeout(e.tId),
                    e.tId = setTimeout(( () => {
                        e.call(t, a)
                    }
                    ), n))
                }
                ,
                valInside: function(e, t, n) {
                    return e >= t && e <= n
                },
                areaInside: function(e, t, n, r) {
                    return e >= n && t <= r
                },
                getFileName: function(e, t="") {
                    try {
                        return e.replace(/.*\//g, "").replace(t, "")
                    } catch (n) {
                        return ""
                    }
                },
                isPageComp: function(e) {
                    try {
                        return "navigation" === e.$options.parent.$options.name
                    } catch (t) {
                        return !1
                    }
                },
                getRouteType: function(e, t) {
                    return e.name && !t.name ? "spa.enter" : !!se.slice(0, -1).find((t => t.to.fullPath === e.fullPath)) ? "" : "spa.forward"
                },
                getRouteInfo: le,
                getCgiInfo: function(e) {
                    return oe[e]
                }
            }
              , ge = {
                addPerformance: function(e) {
                    "function" == typeof e && ae.performance.push(e)
                },
                execPerformance: function() {
                    if (ce("PerformanceObserver")) {
                        new PerformanceObserver((e => {
                            ae.performance.forEach((t => {
                                try {
                                    t(e.getEntries())
                                } catch (n) {
                                    console.error(n)
                                }
                            }
                            ))
                        }
                        )).observe({
                            entryTypes: ["resource"]
                        })
                    } else
                        ce(["performance.getEntries", "performance.setResourceTimingBufferSize"]) && (performance.onresourcetimingbufferfull = me,
                        performance.onwebkitresourcetimingbufferfull = me)
                },
                addRoute: pe,
                execRoute: function(e, t) {
                    ae.route[e] && ae.route[e].forEach((e => {
                        try {
                            e(t)
                        } catch (n) {
                            console.error(n)
                        }
                    }
                    ))
                },
                addCgi: fe,
                execCgi: function(e, ...t) {
                    ae.cgi[e] && ae.cgi[e].forEach((e => {
                        try {
                            e(...t)
                        } catch (n) {
                            console.error(n)
                        }
                    }
                    ))
                }
            }
              , we = [];
            function ye(e) {
                const t = e || we.splice(0);
                t.length && re.sendEvent("performance.cgi", t)
            }
            function be(e={}) {
                we.push(e),
                he.canIUse("PerformanceObserver") || (he.canIUse("performance.getEntries") ? Ie(performance.getEntries()) : he.throttle(ye, this, 300))
            }
            function Ce(e={}) {
                const t = e.response || {}
                  , n = e.response && e.response.data || {}
                  , r = e.response && e.response.headers || {
                    get: () => {}
                }
                  , o = he.getCgiInfo(e.url);
                if (!o)
                    return;
                const a = o.requestInfo;
                return {
                    url: e.url,
                    seq: o.seq,
                    routeName: o.routeName,
                    payload: a.params,
                    startTime: o.startTime,
                    endTime: o.endTime,
                    cost: o.cost,
                    curUrl: o.curUrl,
                    httpSuccess: e.httpSuccess,
                    status: t.status,
                    code: n.code,
                    serial: n.serial || r.get("X-Trace-Id"),
                    reason: n.reason,
                    method: a.method,
                    success: n.code === o.successCode,
                    runSide: "client"
                }
            }
            function Ae(e={}) {
                be(Ce(e))
            }
            function Ee(e={}) {
                const t = "string" == typeof e.error ? e.error : e.error && e.error.message;
                let n = Ce(e);
                n.message = t,
                be(n)
            }
            function Ie(e=[]) {
                const t = e.filter((e => "xmlhttprequest" === e.initiatorType));
                we.forEach((e => {
                    if (!e.url)
                        return;
                    t.find((t => t.name.includes(e.url)))
                }
                )),
                he.throttle(ye, this, 500)
            }
            const ke = {}
              , xe = []
              , Te = ["beforeEach", "beforeRouteEnter", "beforeResolve", "afterEach", "routeChanged"]
              , Se = [];
            const Re = {
                link: "css",
                script: "script",
                img: "img",
                image: "img",
                css: "img"
            };
            function Pe() {
                if (he.canIUse("performance.timing"))
                    return performance.timing.navigationStart
            }
            function Le(e, t) {
                const n = ke[e] || {};
                n.done || (ke[e] = {
                    ...n,
                    ...t
                })
            }
            function Ne(e, t) {
                const n = ke[e];
                if (!n || n.done || !n.routeType)
                    return;
                const {cgiList: r=[], fmpType: o, routeType: a="", error: i, fmpLength: s} = n
                  , c = [r.filter((e => e.requestInfo.fmp)), r.filter((e => he.valInside(e.startTime, n.beforeEach, n.mounted)))]
                  , l = c[0]
                  , u = "fmp" === o;
                let d = u && !l.length;
                const f = a.includes("spa") && !n.mounted;
                s && (d = s <= l.length);
                if (!i && (d || f))
                    return;
                const m = c.find((e => e.length)) || r
                  , p = (u ? l : m).every((e => e.done));
                if (!("ssr.enter" === a || "static" === o || i || p))
                    return;
                const v = {
                    ...n
                };
                if (a.includes("enter")) {
                    const {timing: e, paintTimings: t} = function() {
                        const e = {};
                        return he.canIUse("performance.timing") && (e.navigationL1 = performance.timing),
                        he.canIUse("performance.getEntriesByType") && (e.navigationL2 = performance.getEntriesByType("navigation")[0],
                        e.paint = performance.getEntriesByType("paint")),
                        {
                            timing: e.navigationL2 || e.navigationL1,
                            paintTimings: e.paint
                        }
                    }();
                    v.navigationTiming = e,
                    v.paintTimings = t,
                    v.navigationStart = Pe(),
                    v.beforeDOM = window?.__ctPerformance?.__BEFOREDOM__,
                    v.afterDOM = window?.__ctPerformance?.__AFTERDOM__,
                    t.length > 0 && (v.whiteScreenTime = t[0].startTime),
                    v.httpCost = performance.timing.responseEnd - performance.timing.navigationStart
                }
                const h = function() {
                    if (he.canIUse("performance.getEntries")) {
                        const e = performance.getEntries().filter((e => e.name && e.name.includes("app.") && "fetch" === e.initiatorType));
                        let t = "app";
                        return e.length > 0 && (t = he.getFileName(e[0].name)),
                        t
                    }
                }();
                h && (v.isFirstOpen = function(e, t) {
                    let n = 1;
                    const r = `ctyunConsole.${function() {
                        const e = location.pathname.split("/").filter((e => e));
                        return e.length > 1 ? e[1] : "homePage"
                    }()}.${e}`;
                    try {
                        if (localStorage) {
                            const e = localStorage.getItem("appVersion");
                            if (e) {
                                const o = JSON.parse(e);
                                o[r] !== t ? (o[r] = t,
                                localStorage.setItem("appVersion", JSON.stringify(o))) : n = -1
                            } else
                                localStorage.setItem("appVersion", JSON.stringify({
                                    [r]: t
                                }))
                        }
                    } catch (i) {}
                    return n
                }(n.routeName, h));
                const g = Te.reverse().find((e => n[e]));
                v.afterAsset = n[g],
                v.assetList = function(e, t) {
                    const n = ke[e]
                      , r = Pe();
                    if (!n || !r)
                        return;
                    const {routeType: o=""} = n
                      , a = o.includes("forward")
                      , i = he.canIUse("PerformanceObserver")
                      , s = he.canIUse("performance.getEntries");
                    a && i || !s || De(performance.getEntries());
                    const c = o.includes("enter") ? 0 : n.beforeEach - r
                      , l = n[t] - r
                      , u = xe.filter((e => he.areaInside(e.startTime, e.responseEnd, c, l)));
                    return Se.filter((e => he.areaInside(e.startTime, e.responseEnd, c, l))).concat(u).map((e => ({
                        name: e.name,
                        cost: e.duration,
                        size: e.transferSize / 1e3,
                        type: Re[e.initiatorType] || e.initiatorType
                    }))).filter((e => e.size))
                }(e, g),
                l.length && p && (v.afterCgi = Math.max(...l.map((e => e.endTime))));
                const w = l.map((e => e.cmdId));
                v.cgiList = v.cgiList.map((e => ({
                    url: e.url,
                    serial: e.serial,
                    cost: e.cost,
                    fmp: w.includes(e.cmdId)
                }))),
                v.startTime = function(e) {
                    let t = [e.navigationStart, e.beforeRouteLeave, e.beforeDOM, e.beforeEach, e.routeChanged];
                    return Math.min(...t.filter((e => e)))
                }(v),
                v.endTime = function(e) {
                    let t = [e.mounted, e.afterDOM, e.DOMContentLoaded, e.afterCgi];
                    return Math.max(...t.filter((e => e)))
                }(v),
                v.routeName = n.routeName,
                v.cost = v.endTime - v.startTime,
                v.reportStage = t;
                const y = function(e, t) {
                    const n = ke[e]
                      , r = Pe();
                    if (!n || !r)
                        return;
                    const {routeType: o=""} = n
                      , a = o.includes("forward")
                      , i = he.canIUse("PerformanceObserver")
                      , s = he.canIUse("performance.getEntries");
                    a && i || !s || De(performance.getEntries());
                    const c = o.includes("enter") ? 0 : n.beforeEach - r
                      , l = t - r
                      , u = Se.filter((e => he.valInside(e.startTime, c, l))).map((e => e.responseEnd)).filter((e => e));
                    return {
                        afterImage: r + Math.max(...u),
                        imageCount: u.length
                    }
                }(e, v.endTime) || {};
                v.afterImage = y.afterImage,
                v.imageCount = y.imageCount,
                v.curUrl = n.curUrl,
                re.sendEvent("performance.page", [{
                    current: v.pageUrl,
                    ...v
                }]),
                ke[e] = {
                    done: !0
                }
            }
            function Me(e={}) {
                const t = he.getCgiInfo(e.url);
                if (!t)
                    return;
                const n = ke[t.pageId];
                if (!n)
                    return;
                const r = n.cgiList || [];
                r.find((t => t.cmdId === e.url)) || r.push(t)
            }
            function _e(e={}, t={}) {
                Ue(e)
            }
            function $e(e={}, t={}) {
                Ue(e)
            }
            function Ue(e={}) {
                const t = he.getCgiInfo(e.url);
                t && (t.done = !0,
                setTimeout(( () => {
                    Ne(t.pageId, "afterCgi")
                }
                )))
            }
            function De(e=[]) {
                const t = e.filter((e => {
                    const t = ["link", "script"].includes(e.initiatorType)
                      , n = xe.includes(e);
                    return t && !n
                }
                ));
                xe.push(...t);
                const n = e.filter((e => {
                    const t = ["img"].includes(e.initiatorType)
                      , n = Se.includes(e);
                    return t && !n
                }
                ));
                Se.push(...n)
            }
            function Be(e) {
                e.beforeEach(( (e, t, n) => {
                    Oe = e.fullPath;
                    const r = he.getRouteType(e, t)
                      , {pageName: o, pageQuery: a, current: i, routeName: s} = he.getRouteInfo();
                    Le(e.fullPath, {
                        beforeEach: Date.now(),
                        routeType: r,
                        pageUrl: i,
                        pageName: o,
                        routeName: s,
                        pageQuery: a,
                        cgiList: []
                    }),
                    n()
                }
                )),
                e.beforeResolve(( (e, t, n) => {
                    Le(e.fullPath, {
                        beforeResolve: Date.now()
                    }),
                    n()
                }
                )),
                e.afterEach((e => {
                    Le(e.fullPath, {
                        afterEach: Date.now()
                    })
                }
                ))
            }
            let Oe = "";
            var Fe = n(8671);
            window.CtcloudTrack || (ge.execPerformance(),
            pe("page", ve),
            fe("beforeSend", ue),
            fe("afterSuccess", de),
            fe("afterError", de),
            ge.addPerformance(Ie),
            ge.addCgi("afterSuccess", Ae),
            ge.addCgi("afterError", Ee),
            ge.addPerformance(De),
            ge.addRoute("page", Be),
            ge.addCgi("beforeSend", Me),
            ge.addCgi("afterSuccess", _e),
            ge.addCgi("afterError", $e),
            (0,
            Fe.Ts)());
            var We = {
                observerCgi: function(e, t={}, n={}) {
                    ge.execCgi(e, t, n)
                },
                observerPage: function(e) {
                    ge.execRoute("page", e)
                }
            };
            const je = (e, t={}, {pre: n=!1}={}) => new Promise((r => {
                const o = document.createElement(e);
                o.readyState ? o.onreadystatechange = function() {
                    "loaded" !== o.readyState && "complete" !== o.readyState || (o.onreadystatechange = null,
                    r())
                }
                : o.onload = function() {
                    r()
                }
                ,
                Object.keys(t).forEach((e => {
                    o[e] = t[e]
                }
                ));
                const a = window.document.getElementsByTagName("head")[0]
                  , i = a.getElementsByTagName(e);
                n && i && i.length ? a.insertBefore(o, i[0]) : a.appendChild(o)
            }
            ));
            var qe = n(3941)
              , Ve = n(6775);
            const Qe = /js/.test(location.host) ? "https://wwwtest.ctyun.cn:21443" : "https://www.ctyun.cn";
            var Ke = {
                handlerAppEvoke: async function({target: e, path: t}) {
                    let n = t;
                    if ("openAuthen" === e) {
                        n = Qe + "/m/user/realname";
                        const e = new URLSearchParams(window.location.search).get("returnUrl");
                        e && window.sessionStorage.setItem("returnUrl", e)
                    }
                    ( (e, t) => {
                        let n = null;
                        const r = (new Date).getTime();
                        return new Promise(( (o, a) => {
                            window.location.href = e,
                            window.addEventListener("visibilitychange", ( () => {
                                "hidden" === document.visibilityState ? (clearTimeout(n),
                                o()) : a()
                            }
                            )),
                            n = setTimeout(( () => {
                                (new Date).getTime() - r > t + 1e3 ? (clearTimeout(n),
                                o()) : a()
                            }
                            ), t)
                        }
                        ))
                    }
                    )("ctyflutterapp://openpage/" + e, /ctyunapp-ios|ios\/wkwebview|iphone|ipad|ipod|ios/.test(navigator.userAgent.toLowerCase()) ? 2500 : 3500).then(( () => {
                        window.history.back()
                    }
                    )).catch(( () => {
                        window.open(`${Qe}/console/app.html?target=${n}`, "_self")
                    }
                    ))
                }
            }
              , He = n(1727)
              , ze = n(7519)
              , Xe = n(3324)
              , Ge = n(5236)
              , Je = n(8665)
              , Ye = n(9141);
            const Ze = {
                "data-v-3159c102": "",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1024 1024"
            };
            var et = n(7167);
            const tt = {};
            var nt = (0,
            et.A)(tt, [["render", function(e, t) {
                return (0,
                Xe.uX)(),
                (0,
                Xe.CE)("svg", Ze, t[0] || (t[0] = [(0,
                Xe.Lk)("path", {
                    fill: "currentColor",
                    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                }, null, -1)]))
            }
            ]]);
            const rt = {
                viewBox: "0 0 1024 1024",
                xmlns: "http://www.w3.org/2000/svg"
            };
            const ot = {};
            var at = (0,
            et.A)(ot, [["render", function(e, t) {
                return (0,
                Xe.uX)(),
                (0,
                Xe.CE)("svg", rt, t[0] || (t[0] = [(0,
                Xe.Lk)("path", {
                    fill: "currentColor",
                    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
                }, null, -1), (0,
                Xe.Lk)("path", {
                    fill: "currentColor",
                    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
                }, null, -1)]))
            }
            ]]);
            const it = {
                "data-v-3159c102": "",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1024 1024"
            };
            const st = {};
            var ct = (0,
            et.A)(st, [["render", function(e, t) {
                return (0,
                Xe.uX)(),
                (0,
                Xe.CE)("svg", it, t[0] || (t[0] = [(0,
                Xe.Lk)("path", {
                    fill: "currentColor",
                    d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
                }, null, -1)]))
            }
            ]])
              , lt = n(1057);
            const ut = {
                class: "slider-code-box"
            }
              , dt = {
                class: "slider-code-box-container"
            }
              , ft = ["src"]
              , mt = {
                key: 0,
                class: "success-modal"
            }
              , pt = {
                class: "drag"
            }
              , vt = {
                class: "operation"
            };
            var ht = {
                __name: "CtyJigsaw",
                props: {
                    loginId: {
                        type: String,
                        default: (0,
                        p.Os)()
                    },
                    verifyUrl: {
                        type: String,
                        default: "/gw/user/VerifySlideVerify"
                    }
                },
                setup(e, {expose: t}) {
                    const {eventReport: n} = (0,
                    ze.A)()
                      , r = e
                      , o = (0,
                    Xe.EW)(( () => r.loginId))
                      , a = (0,
                    Ge.KR)(!1)
                      , i = (0,
                    Ge.KR)(!1)
                      , s = (0,
                    Ge.KR)(!1)
                      , c = (0,
                    Ge.KR)(!1)
                      , l = (0,
                    Ge.Kh)({
                        x: 0,
                        y: 0
                    })
                      , u = (0,
                    Ge.Kh)({
                        x: 0,
                        y: 0,
                        backgroundUrl: "",
                        foregroundUrl: ""
                    })
                      , d = (0,
                    Ge.KR)(0)
                      , f = (0,
                    Ge.KR)(( () => {}
                    ))
                      , m = async () => {
                        s.value = !0,
                        u.backgroundUrl = "",
                        u.foregroundUrl = "",
                        i.value = !1;
                        const {data: e} = await (0,
                        Je.A)({
                            url: "/gw/user/SlideVerify",
                            query: {
                                loginId: o.value
                            }
                        })
                          , {shadeImage: t, cutoutImage: n, x: r, y: a} = (0,
                        Ge.R1)(e);
                        u.backgroundUrl = `data:image/jpg;base64,${t}`,
                        u.foregroundUrl = `data:image/jpg;base64,${n}`,
                        u.x = r - 0,
                        u.y = a - 0,
                        s.value = !1
                    }
                    ;
                    let p = () => Promise.resolve()
                      , v = () => Promise.reject();
                    const h = () => {
                        a.value = !1,
                        i.value = !1,
                        v()
                    }
                      , g = async () => {
                        const e = {
                            loginId: o.value,
                            x: G.encrypt(o.value.toString(), u.x.toString()),
                            y: G.encrypt(o.value.toString(), u.y.toString())
                        };
                        try {
                            const {data: t} = await (0,
                            Je.A)({
                                url: r.verifyUrl,
                                query: e
                            })
                              , {success: n} = (0,
                            Ge.R1)(t);
                            i.value = "true" === n,
                            i.value ? (f?.value(),
                            h()) : (window?._useHttpConfig?.errorCallback("验证失败，请重试！"),
                            u.x = 0)
                        } catch (t) {
                            i.value = !1,
                            m()
                        }
                    }
                      , w = {
                        start: e => {
                            d.value = new Date,
                            c.value = !0,
                            e = e.touches ? e.touches[0] : e || window.event,
                            l.x = e.clientX,
                            l.y = e.clientY
                        }
                        ,
                        move: e => {
                            if (!c.value)
                                return !1;
                            const t = (e = e.touches ? e.touches[0] : e || window.event).clientX
                              , n = e.clientY;
                            let r = t - l.x
                              , o = n - l.y;
                            Math.abs(r) > Math.abs(o) && (e.preventDefault ? e.preventDefault() : window.event.returnValue = !1);
                            r > 250 ? r = 250 : r < 0 && (r = 0),
                            r = Math.round(r),
                            u.x = r
                        }
                        ,
                        end: e => {
                            if (!c.value)
                                return !1;
                            c.value = !1,
                            d.value = ((new Date - d.value) / 1e3).toFixed(2);
                            if ((e.clientX || e.changedTouches[0].clientX) === l.x)
                                return !1;
                            g()
                        }
                    };
                    return (0,
                    Xe.sV)(( () => {
                        window.addEventListener("popstate", h),
                        document.addEventListener("mousemove", w.move),
                        document.addEventListener("touchmove", w.move, {
                            passive: !1
                        }),
                        document.addEventListener("mouseup", w.end),
                        document.addEventListener("touchend", w.end)
                    }
                    )),
                    (0,
                    Xe.xo)(( () => {
                        window.removeEventListener("popstate", h),
                        document.removeEventListener("mousemove", w.move),
                        document.removeEventListener("touchmove", w.move, {
                            passive: !1
                        }),
                        document.removeEventListener("mouseup", w.end),
                        document.removeEventListener("touchend", w.end)
                    }
                    )),
                    t({
                        open: (e= () => {}
                        ) => {
                            m();
                            const t = new Promise(( (e, t) => {
                                p = e,
                                v = t
                            }
                            ));
                            return f.value = () => {
                                const t = {
                                    loginId: o.value,
                                    x: G.encrypt(o.value.toString(), u.x.toString()),
                                    y: G.encrypt(o.value.toString(), u.y.toString())
                                };
                                e(t),
                                p(t)
                            }
                            ,
                            a.value = !0,
                            t
                        }
                        ,
                        close: h
                    }),
                    (e, t) => (0,
                    Ge.R1)(a) ? ((0,
                    Xe.uX)(),
                    (0,
                    Xe.CE)("div", {
                        key: 0,
                        onSelectstart: () => !1
                    }, [t[4] || (t[4] = (0,
                    Xe.Lk)("div", {
                        class: "slider-code-model"
                    }, null, -1)), (0,
                    Xe.Lk)("div", ut, [(0,
                    Xe.bo)(((0,
                    Xe.uX)(),
                    (0,
                    Xe.CE)("div", dt, [(0,
                    Xe.Lk)("div", {
                        class: "shadeImage",
                        style: (0,
                        Ye.Tr)({
                            backgroundImage: `url(${(0,
                            Ge.R1)(u).backgroundUrl})`
                        })
                    }, [(0,
                    Xe.Lk)("img", {
                        class: "cutoutImage",
                        src: (0,
                        Ge.R1)(u).foregroundUrl,
                        style: (0,
                        Ye.Tr)({
                            left: `${(0,
                            Ge.R1)(u).x}px`,
                            top: `${(0,
                            Ge.R1)(u).y}px`
                        })
                    }, null, 12, ft), (0,
                    Ge.R1)(i) ? ((0,
                    Xe.uX)(),
                    (0,
                    Xe.CE)("div", mt, [(0,
                    Xe.bF)(at, {
                        class: "success-modal-icon"
                    }), (0,
                    Xe.Lk)("p", null, "只用了" + (0,
                    Ye.v_)((0,
                    Ge.R1)(d)) + "s，这速度简直完美", 1)])) : (0,
                    Xe.Q3)("", !0)], 4), (0,
                    Xe.Lk)("div", pt, [t[3] || (t[3] = (0,
                    Xe.Lk)("span", null, "拖动滑块完成拼图", -1)), (0,
                    Xe.Lk)("div", {
                        class: "drag-btn",
                        ref: "drag-btn",
                        onMousedown: t[0] || (t[0] = (...e) => w.start && w.start(...e)),
                        onTouchstart: t[1] || (t[1] = (...e) => w.start && w.start(...e)),
                        style: (0,
                        Ye.Tr)({
                            left: (0,
                            Ge.R1)(u).x + "px"
                        })
                    }, t[2] || (t[2] = [(0,
                    Xe.Lk)("span", null, null, -1), (0,
                    Xe.Lk)("span", null, null, -1), (0,
                    Xe.Lk)("span", null, null, -1)]), 36)])])), [[(0,
                    Ge.R1)(lt.L), (0,
                    Ge.R1)(s)]]), (0,
                    Xe.Lk)("div", vt, [(0,
                    Xe.bF)(nt, {
                        class: "operation-btn",
                        onClick: h,
                        title: "关闭"
                    }), (0,
                    Xe.bF)(ct, {
                        class: "operation-btn",
                        onClick: m,
                        title: "刷新"
                    })])])], 32)) : (0,
                    Xe.Q3)("", !0)
                }
            };
            var gt = (0,
            et.A)(ht, [["__scopeId", "data-v-3f907582"]]);
            const wt = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none"
            };
            const yt = {};
            var bt = (0,
            et.A)(yt, [["render", function(e, t) {
                return (0,
                Xe.uX)(),
                (0,
                Xe.CE)("svg", wt, t[0] || (t[0] = [(0,
                Xe.Lk)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M11.7795 0.220455C11.4856 -0.0734851 11.009 -0.0734851 10.7151 0.220455L6 4.93553L1.28493 0.220455C0.990985 -0.0734851 0.514413 -0.0734851 0.220472 0.220455C-0.073468 0.514396 -0.073468 0.990968 0.220472 1.28491L4.93555 5.99998L0.220472 10.7151C0.0303264 10.9052 -0.0439342 11.1823 0.0256641 11.4421C0.0952625 11.7018 0.298146 11.9047 0.55789 11.9743C0.817635 12.0439 1.09478 11.9697 1.28492 11.7795L6 7.06444L10.7151 11.7795C10.9052 11.9697 11.1824 12.0439 11.4421 11.9743C11.7019 11.9047 11.9047 11.7018 11.9743 11.4421C12.0439 11.1823 11.9697 10.9052 11.7795 10.7151L7.06445 5.99998L11.7795 1.28491C12.0735 0.990968 12.0735 0.514396 11.7795 0.220455Z",
                    fill: "#999999"
                }, null, -1)]))
            }
            ]]);
            const Ct = {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                style: {
                    "line-height": "20px"
                }
            };
            const At = {};
            var Et = (0,
            et.A)(At, [["render", function(e, t) {
                return (0,
                Xe.uX)(),
                (0,
                Xe.CE)("svg", Ct, t[0] || (t[0] = [(0,
                Xe.Lk)("path", {
                    d: "M2.89844 9.67773C2.93555 8.83398 3.12109 8.01562 3.44727 7.24219C3.80469 6.39648 4.31641 5.63867 4.96875 4.98633C5.62109 4.33398 6.37891 3.82227 7.22461 3.46484C8.09961 3.0957 9.02734 2.9082 9.98633 2.9082C10.9453 2.9082 11.873 3.0957 12.748 3.46484C13.5938 3.82227 14.3516 4.33398 15.0039 4.98633C15.125 5.10742 15.2402 5.23047 15.3516 5.35938L16.3359 5.01758C14.8574 3.13867 12.5625 1.93164 9.98633 1.93164C5.5293 1.93164 1.91406 5.54492 1.91406 10.0039V10.0195L2.89844 9.67773ZM17.0742 10.377C17.0312 11.2031 16.8477 12.0059 16.5273 12.7656C16.1699 13.6113 15.6582 14.3691 15.0059 15.0215C14.3535 15.6738 13.5957 16.1855 12.75 16.543C11.875 16.9121 10.9473 17.0996 9.98828 17.0996C9.0293 17.0996 8.10156 16.9121 7.22656 16.543C6.38086 16.1855 5.62305 15.6738 4.9707 15.0215C4.85156 14.9023 4.73633 14.7793 4.62695 14.6523L3.64062 14.9902C5.11914 16.8691 7.41211 18.0762 9.98828 18.0762C14.4355 18.0762 18.043 14.4805 18.0605 10.0371L17.0742 10.377Z",
                    fill: "#D9D9D9"
                }, null, -1), (0,
                Xe.Lk)("path", {
                    d: "M15.9766 11.0156L17.5039 9.0625L19.0293 11.0156H15.9766ZM0.960938 9.0625L2.5 11.0156L4.04297 9.0625H0.960938Z",
                    fill: "#D9D9D9"
                }, null, -1)]))
            }
            ]]);
            const It = {
                class: "contatiner",
                style: {
                    "line-height": "50px"
                }
            };
            const kt = {};
            var xt = (0,
            et.A)(kt, [["render", function(e, t) {
                return (0,
                Xe.uX)(),
                (0,
                Xe.CE)("span", It, t[0] || (t[0] = [(0,
                Xe.Lk)("svg", {
                    class: "svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "18",
                    height: "13",
                    viewBox: "0 0 18 13",
                    fill: "none"
                }, [(0,
                Xe.Lk)("path", {
                    d: "M17 1L6.75993 11L1 5.37511",
                    stroke: "white",
                    "stroke-width": "2"
                })], -1)]))
            }
            ], ["__scopeId", "data-v-7f6eb572"]]);
            const Tt = {
                class: "slider-code-box",
                style: {
                    padding: "20px 15px",
                    width: "330px"
                }
            }
              , St = {
                class: "header"
            }
              , Rt = {
                class: "content",
                style: {
                    height: "265px"
                }
            }
              , Pt = {
                key: 1,
                class: "content-container"
            }
              , Lt = {
                class: "refresh-container",
                style: {
                    height: "32px",
                    width: "32px",
                    "line-height": "32px"
                }
            }
              , Nt = ["src"]
              , Mt = {
                key: 0,
                class: "success-modal"
            }
              , _t = {
                class: "drag",
                style: {
                    width: "300px",
                    height: "50px"
                }
            };
            var $t = {
                __name: "CtyJigsawMobile",
                props: {
                    loginId: {
                        type: String,
                        default: (0,
                        p.Os)()
                    },
                    verifyUrl: {
                        type: String,
                        default: "/gw/user/VerifySlideVerify"
                    }
                },
                setup(e, {expose: t}) {
                    (0,
                    He.$9)((e => ({
                        c8e4c6b6: u.value,
                        c8e4c6d4: d.value
                    })));
                    const {eventReport: n} = (0,
                    ze.A)()
                      , r = e
                      , o = (0,
                    Xe.EW)(( () => r.loginId))
                      , a = (0,
                    Ge.KR)(!1)
                      , i = (0,
                    Ge.KR)(!1)
                      , s = (0,
                    Ge.KR)(!1)
                      , c = (0,
                    Ge.KR)(!1)
                      , l = (0,
                    Ge.Kh)({
                        x: 0,
                        y: 0
                    })
                      , u = (0,
                    Xe.EW)(( () => `${f.x}px`))
                      , d = (0,
                    Xe.EW)(( () => `${f.y}px`))
                      , f = (0,
                    Ge.Kh)({
                        x: 0,
                        y: 0,
                        backgroundUrl: "",
                        foregroundUrl: ""
                    })
                      , m = (0,
                    Ge.KR)(0)
                      , p = (0,
                    Ge.KR)(( () => {}
                    ))
                      , v = async () => {
                        s.value = !0,
                        f.backgroundUrl = "",
                        f.foregroundUrl = "",
                        i.value = !1;
                        const {data: e} = await (0,
                        Je.A)({
                            url: "/gw/user/SlideVerify",
                            query: {
                                loginId: o.value
                            }
                        })
                          , {shadeImage: t, cutoutImage: n, x: r, y: a} = (0,
                        Ge.R1)(e);
                        f.backgroundUrl = `data:image/jpg;base64,${t}`,
                        f.foregroundUrl = `data:image/jpg;base64,${n}`,
                        f.x = r - 0,
                        f.y = a - 0,
                        s.value = !1
                    }
                    ;
                    let h = () => Promise.resolve()
                      , g = () => Promise.reject();
                    const w = () => {
                        a.value = !1,
                        i.value = !1,
                        g()
                    }
                      , y = async () => {
                        const e = {
                            loginId: o.value,
                            x: G.encrypt(o.value.toString(), f.x.toString()),
                            y: G.encrypt(o.value.toString(), f.y.toString())
                        };
                        try {
                            const {data: t} = await (0,
                            Je.A)({
                                url: r.verifyUrl,
                                query: e
                            })
                              , {success: n} = (0,
                            Ge.R1)(t);
                            i.value = "true" === n,
                            i.value ? setTimeout(( () => {
                                p?.value(),
                                w()
                            }
                            ), 500) : (showFailToast({
                                message: "验证失败，请重试！"
                            }),
                            f.x = 0)
                        } catch (t) {
                            i.value = !1;
                            const e = t.reason || "验证已过期，请重试！";
                            showFailToast(e),
                            v()
                        }
                    }
                      , b = {
                        start: e => {
                            m.value = new Date,
                            c.value = !0,
                            e = e.touches ? e.touches[0] : e || window.event,
                            l.x = e.clientX,
                            l.y = e.clientY
                        }
                        ,
                        move: e => {
                            if (!c.value)
                                return !1;
                            const t = (e = e.touches ? e.touches[0] : e || window.event).clientX
                              , n = e.clientY;
                            let r = t - l.x
                              , o = n - l.y;
                            Math.abs(r) > Math.abs(o) && (e.preventDefault ? e.preventDefault() : window.event.returnValue = !1);
                            r > 250 ? r = 250 : r < 0 && (r = 0),
                            r = Math.round(r),
                            f.x = r
                        }
                        ,
                        end: e => {
                            if (!c.value)
                                return !1;
                            c.value = !1,
                            m.value = ((new Date - m.value) / 1e3).toFixed(2);
                            if ((e.clientX || e.changedTouches[0].clientX) <= l.x)
                                return !1;
                            y()
                        }
                    };
                    return (0,
                    Xe.sV)(( () => {
                        document.addEventListener("popstate", w),
                        document.addEventListener("mousemove", b.move),
                        document.addEventListener("touchmove", b.move, {
                            passive: !1
                        }),
                        document.addEventListener("mouseup", b.end),
                        document.addEventListener("touchend", b.end)
                    }
                    )),
                    (0,
                    Xe.xo)(( () => {
                        document.removeEventListener("popstate", w),
                        document.removeEventListener("mousemove", b.move),
                        document.removeEventListener("touchmove", b.move, {
                            passive: !1
                        }),
                        document.removeEventListener("mouseup", b.end),
                        document.removeEventListener("touchend", b.end)
                    }
                    )),
                    t({
                        open: (e= () => {}
                        ) => {
                            v();
                            const t = new Promise(( (e, t) => {
                                h = e,
                                g = t
                            }
                            ));
                            return p.value = () => {
                                const t = {
                                    loginId: o.value,
                                    x: G.encrypt(o.value.toString(), f.x.toString()),
                                    y: G.encrypt(o.value.toString(), f.y.toString())
                                };
                                e(t),
                                h(t)
                            }
                            ,
                            a.value = !0,
                            t
                        }
                        ,
                        close: w
                    }),
                    (e, t) => {
                        const n = (0,
                        Xe.g2)("van-loading");
                        return (0,
                        Ge.R1)(a) ? ((0,
                        Xe.uX)(),
                        (0,
                        Xe.CE)("div", {
                            key: 0,
                            onSelectstart: () => !1
                        }, [t[1] || (t[1] = (0,
                        Xe.Lk)("div", {
                            class: "slider-code-model"
                        }, null, -1)), (0,
                        Xe.Lk)("div", Tt, [(0,
                        Xe.Lk)("div", St, [t[0] || (t[0] = (0,
                        Xe.Lk)("span", {
                            class: "title"
                        }, " 请完成安全验证 ", -1)), (0,
                        Xe.bF)(bt, {
                            class: "operation-btn",
                            onClick: w,
                            title: "关闭"
                        })]), (0,
                        Xe.Lk)("div", Rt, [(0,
                        Ge.R1)(s) ? ((0,
                        Xe.uX)(),
                        (0,
                        Xe.Wv)(n, {
                            key: 0,
                            class: "loading",
                            color: "#1989fa"
                        })) : (0,
                        Xe.Q3)("", !0), (0,
                        Ge.R1)(s) ? (0,
                        Xe.Q3)("", !0) : ((0,
                        Xe.uX)(),
                        (0,
                        Xe.CE)("div", Pt, [(0,
                        Xe.Lk)("div", {
                            class: "shadeImage",
                            style: (0,
                            Ye.Tr)({
                                backgroundImage: `url(${(0,
                                Ge.R1)(f).backgroundUrl})`,
                                height: "200px",
                                width: "300px"
                            })
                        }, [(0,
                        Xe.Lk)("div", Lt, [(0,
                        Xe.bF)(Et, {
                            class: "refresh-btn",
                            onClick: v,
                            title: "刷新"
                        })]), (0,
                        Xe.Lk)("img", {
                            class: "cutoutImage",
                            src: (0,
                            Ge.R1)(f).foregroundUrl
                        }, null, 8, Nt), (0,
                        Ge.R1)(i) ? ((0,
                        Xe.uX)(),
                        (0,
                        Xe.CE)("div", Mt, [(0,
                        Xe.bF)(at, {
                            class: "success-modal-icon"
                        }), (0,
                        Xe.Lk)("p", null, "只用了" + (0,
                        Ye.v_)((0,
                        Ge.R1)(m)) + "s，这速度简直完美", 1)])) : (0,
                        Xe.Q3)("", !0)], 4), (0,
                        Xe.Lk)("div", _t, [(0,
                        Xe.Lk)("div", {
                            class: "drag-bar",
                            style: (0,
                            Ye.Tr)({
                                width: (0,
                                Ge.R1)(f).x + "px",
                                height: "50px"
                            })
                        }, null, 4), (0,
                        Xe.bF)(xt, {
                            class: "drag-btn",
                            ref: "drag-btn",
                            onMousedown: b.start,
                            onTouchstart: b.start,
                            style: (0,
                            Ye.Tr)({
                                left: (0,
                                Ge.R1)(f).x + "px",
                                height: "50px",
                                width: "50px"
                            })
                        }, null, 8, ["onMousedown", "onTouchstart", "style"])])]))])])], 32)) : (0,
                        Xe.Q3)("", !0)
                    }
                }
            };
            var Ut = (0,
            et.A)($t, [["__scopeId", "data-v-2783b7b4"]]);
            const Dt = {
                modal: null
            };
            const Bt = () => {
                const e = window.location.host;
                return /ittest/.test(e) ? "ittest" : /js|local|l\.ctyun\.cn/.test(e) ? "test" : /gray/.test(e) ? "gray" : /dev/.test(e) ? "dev" : "product"
            }
            ;
            var Ot = {
                isProduction: () => !0,
                isDevelopment: () => !1,
                getCurEnv: Bt,
                getCurEnvMHost: () => ({
                    test: "https://wwwtest.ctyun.cn:21443",
                    dev: "https://wwwdev.ctyun.cn:10443",
                    gray: "https://wwwgray.ctyun.cn",
                    product: "https://www.ctyun.cn",
                    ittest: "https://wwwittest.ctyun.cn:21443"
                }[Bt()])
            }
              , Ft = {
                qs: r,
                format: m,
                common: p.Ay,
                dataType: v.Ay,
                date: h,
                env: w,
                envNew: Ot,
                jumper: y.Ay,
                url: b,
                validator: I,
                dom: L,
                timeRange: M,
                float: B,
                DES: G,
                load: J,
                report: re,
                performance: We,
                eruda: () => {
                    (/(eruda|debug)=true/.test(window.location.search) || /(wwwtest|wwwgray|wwwbak|wwwshow|l|local)\.ctyun\.cn/.test(window.location.hostname) && window.innerWidth <= 768) && ( (e, t= () => {}
                    , n) => {
                        je("script", {
                            src: e
                        }, n).then(t)
                    }
                    )("/console/eruda.js", ( () => {
                        window.eruda.init()
                    }
                    ))
                }
                ,
                ua: qe.Ay,
                http: Ve.A,
                appEvoke: Ke,
                jigsaw: (e={}) => {
                    if (Dt.modal)
                        return Dt.modal.open(e.okCb);
                    let t = null;
                    t = !0 === e.mobile ? (0,
                    He.Ef)(Ut, e) : (0,
                    He.Ef)(gt, e);
                    const n = document.createElement("div");
                    document.body.appendChild(n);
                    const r = t.mount(n);
                    return Dt.modal = r,
                    r.open(e.okCb)
                }
            }
              , Wt = n(8763)
              , jt = {
                account: {
                    title: "账号中心",
                    domain: "console.account",
                    list: [{
                        name: "首页",
                        menuId: "0",
                        menuCode: "console.account.index",
                        href: "/console/account/",
                        order: "0",
                        hrefLocal: "/console/account/"
                    }, {
                        name: "页面1",
                        menuId: "1",
                        menuCode: "console.account.page1",
                        href: "/console/account/page1",
                        order: "1",
                        hrefLocal: "/console/account/page1"
                    }, {
                        name: "页面2",
                        menuId: "2",
                        menuCode: "console.account.page2",
                        href: "/console/account/page2",
                        order: "2",
                        hrefLocal: "/console/account/page2"
                    }]
                },
                console: {
                    title: "控制中心",
                    list: [{
                        name: "费用中心",
                        menuId: "0",
                        menuCode: "console.expense",
                        href: "/console/expense",
                        order: "0",
                        hrefLocal: "/console/expense"
                    }, {
                        name: "账号中心",
                        menuId: "1",
                        menuCode: "console.user",
                        href: "/console/user",
                        order: "1",
                        hrefLocal: "/console/user"
                    }, {
                        name: "支持中心",
                        menuId: "2",
                        menuCode: "console.smartservice",
                        href: "/console/smartservice",
                        order: "2",
                        hrefLocal: "/console/smartservice"
                    }, {
                        name: "统一资源视图",
                        menuId: "3",
                        menuCode: "console.product",
                        href: "/console/product",
                        order: "3",
                        hrefLocal: "/console/product"
                    }, {
                        name: "企业管理",
                        menuId: "4",
                        menuCode: "console.enterprise",
                        href: "/console/enterprise",
                        order: "4",
                        hrefLocal: "/console/enterprise"
                    }, {
                        name: "配额中心",
                        menuId: "5",
                        menuCode: "console.allocation",
                        href: "/console/allocation",
                        order: "5",
                        hrefLocal: "/console/allocation"
                    }, {
                        name: "云SSO中心",
                        menuId: "6",
                        menuCode: "console.sso",
                        href: "/console/sso",
                        order: "6",
                        hrefLocal: "/console/sso"
                    }]
                },
                worksheet: {
                    title: "工单中心",
                    domain: "console.worksheet",
                    list: [{
                        name: "首页",
                        menuId: "0",
                        menuCode: "console.worksheet.home",
                        href: "/console/worksheet/",
                        order: "0",
                        hrefLocal: "/console/worksheet/"
                    }, {
                        name: "页面2",
                        menuId: "1",
                        menuCode: "console.worksheet.page2",
                        href: "/console/worksheet/page2",
                        order: "1",
                        hrefLocal: "/console/worksheet/page2"
                    }]
                }
            };
            function qt(e, t) {
                return e.currentPrivilege ? t.some((t => -1 !== t.indexOf(e.currentPrivilege))) : "true" == `${e.enable}`
            }
            const Vt = window.location.href.includes("wwwgray.ctyun.cn")
              , Qt = {
                promise: Promise.resolve()
            };
            var Kt = {
                ...Ft,
                menu: {
                    setMenu: async e => {
                        await Qt.promise;
                        const t = (async e => {
                            if (jt[e])
                                return Promise.resolve(jt[e]);
                            if (!e)
                                return Promise.resolve({});
                            try {
                                const {data: t} = await (0,
                                Wt.sti)(`/v1/portal/menu/GetTree?domain=${e}`)
                                  , n = JSON.parse(t.value).data;
                                if (n.list) {
                                    const {privilege: e=[]} = await window.CtcloudLayoutV2.getPublicInfo().authCurrentPromise;
                                    return n.title = n.name,
                                    n.list = n.list.filter((t => {
                                        if (!("online" === t.state || "gray" === t.state && Vt))
                                            return !1;
                                        if (t.list && t.list.length) {
                                            const n = t.list.filter((t => !!("online" === t.state || "gray" === t.state && Vt) && qt(t, e))) || [];
                                            return t.list = n,
                                            !!n.length
                                        }
                                        return qt(t, e)
                                    }
                                    )),
                                    n
                                }
                                return Promise.resolve({})
                            } catch {
                                return Promise.resolve({})
                            }
                        }
                        )(e);
                        Qt.promise = t,
                        window.CtcloudLayoutV2.consoleLayout.fetchMenuData({
                            getMenuPromise: t
                        })
                    }
                    ,
                    clearMenu: async () => {
                        await Qt.promise;
                        const e = Promise.resolve({
                            title: "",
                            list: []
                        });
                        Qt.promise = e,
                        window.CtcloudLayoutV2.consoleLayout.fetchMenuData({
                            getMenuPromise: e
                        })
                    }
                }
            }
        },
        5012: function(e, t, n) {
            "use strict";
            var r = n(926)
              , o = n(5236)
              , a = n(3324)
              , i = n(8665)
              , s = n(6065);
            t.A = (0,
            r.nY)("code", ( () => {
                const e = (0,
                o.KR)((new Date).getTime());
                window.setInterval(( () => {
                    e.value = (new Date).getTime()
                }
                ), 1e3);
                const t = (0,
                o.KR)(6e4)
                  , n = (0,
                o.KR)(0)
                  , r = (0,
                a.EW)(( () => parseInt((t.value - (e.value - n.value)) / 1e3)))
                  , c = (0,
                o.KR)(!1)
                  , l = (0,
                a.EW)(( () => c.value || r.value > 0))
                  , u = (0,
                a.EW)(( () => !c.value && l.value ? `${r.value}s后重发` : "获取验证码"))
                  , d = (0,
                o.KR)(0)
                  , f = (0,
                a.EW)(( () => parseInt((t.value - (e.value - d.value)) / 1e3)))
                  , m = (0,
                o.KR)(!1)
                  , p = (0,
                a.EW)(( () => m.value || f.value > 0))
                  , v = (0,
                a.EW)(( () => !m.value && p.value ? `${f.value}s后重发` : "获取验证码"))
                  , h = (0,
                o.KR)(0)
                  , g = (0,
                o.KR)(!1)
                  , w = (0,
                a.EW)(( () => parseInt((t.value - (e.value - h.value)) / 1e3)))
                  , y = (0,
                a.EW)(( () => g.value || w.value > 0))
                  , b = (0,
                a.EW)(( () => !g.value && y.value ? `${w.value}s后重发` : "发送验证码"))
                  , C = (0,
                o.KR)(0)
                  , A = (0,
                o.KR)(!1)
                  , E = (0,
                a.EW)(( () => parseInt((t.value - (e.value - C.value)) / 1e3)))
                  , I = (0,
                a.EW)(( () => A.value || E.value > 0))
                  , k = (0,
                a.EW)(( () => !A.value && I.value ? `${E.value}s后重发` : "发送验证码"));
                return {
                    smsDisabled: l,
                    smsLoading: c,
                    smsSendBtnText: u,
                    smsDisabledBind: p,
                    smsLoadingBind: m,
                    smsSendBtnTextBind: v,
                    mailDisabled: y,
                    mailLoading: g,
                    mailSendBtnText: b,
                    mailDisabledBind: I,
                    mailLoadingBind: A,
                    mailSendBtnTextBind: k,
                    sendCodeByPhoneNumberAfterJigsaw: async ({loginId: e, x: t, y: o, phoneNumber: a, scene: s}={}) => {
                        if (l.value)
                            throw new Error(r.value + "s后再发送！");
                        if (!e || !t || !o)
                            throw new Error("滑动拼图相关参数缺失！当前参数loginId为${loginId},x为${x},y为${y};");
                        if (!a)
                            throw new Error("手机号参数缺失！");
                        c.value = !0;
                        try {
                            const {data: r} = await (0,
                            i.A)({
                                url: "/gw/self/SendMobileCodeBySlideVerify",
                                query: {
                                    loginId: e,
                                    x: t,
                                    y: o,
                                    phoneNumber: a,
                                    scene: s
                                }
                            });
                            return n.value = (new Date).getTime(),
                            c.value = !1,
                            r
                        } catch (u) {
                            throw c.value = !1,
                            u
                        }
                    }
                    ,
                    sendCodeByPhoneNumberAfterJigsawForUser: async ({loginId: e, x: t, y: o, phoneNumber: a, scene: s}={}) => {
                        if (l.value)
                            throw new Error(r.value + "s后再发送！");
                        if (!e || !t || !o)
                            throw new Error("滑动拼图相关参数缺失！当前参数loginId为${loginId},x为${x},y为${y};");
                        if (!a)
                            throw new Error("手机号参数缺失！");
                        c.value = !0;
                        try {
                            const {data: r} = await (0,
                            i.A)({
                                url: "/gw/self/SendMobileCodeBySlideVerifyV1",
                                query: {
                                    loginId: e,
                                    x: t,
                                    y: o,
                                    phoneNumber: a,
                                    scene: s
                                }
                            });
                            return n.value = (new Date).getTime(),
                            c.value = !1,
                            r
                        } catch (u) {
                            throw c.value = !1,
                            u
                        }
                    }
                    ,
                    sendCodeByPhoneNumberAfterJigsawFromSmsCenter: async ({loginId: e, x: t, y: o, phoneNumber: a, scene: s}={}) => {
                        if (l.value)
                            throw new Error(r.value + "s后再发送！");
                        if (!e || !t || !o)
                            throw new Error("滑动拼图相关参数缺失！当前参数loginId为${loginId},x为${x},y为${y};");
                        if (!a)
                            throw new Error("手机号参数缺失！");
                        c.value = !0;
                        try {
                            const {data: r} = await (0,
                            i.A)({
                                url: "/gw/self/SendMobileCodeBySlideVerify4Login",
                                query: {
                                    loginId: e,
                                    x: t,
                                    y: o,
                                    phoneNumber: a,
                                    scene: s
                                }
                            });
                            return n.value = (new Date).getTime(),
                            c.value = !1,
                            r
                        } catch (u) {
                            throw c.value = !1,
                            u
                        }
                    }
                    ,
                    sendCodeByPhoneNumberAfterJigsawFrombankCardSms: async ({loginId: e, x: t, y: o, phone: a, scene: s}={}) => {
                        if (l.value)
                            throw new Error(r.value + "s后再发送！");
                        if (!e || !t || !o)
                            throw new Error("滑动拼图相关参数缺失！当前参数loginId为${loginId},x为${x},y为${y};");
                        if (!a)
                            throw new Error("手机号参数缺失！");
                        c.value = !0;
                        try {
                            const {data: r} = await (0,
                            i.A)({
                                url: "/gw/user/realname/personal/bankCardAuth/SendSmsVerificationCode",
                                query: {
                                    loginId: e,
                                    x: t,
                                    y: o,
                                    phone: a,
                                    scene: s
                                }
                            });
                            return n.value = (new Date).getTime(),
                            c.value = !1,
                            r
                        } catch (u) {
                            throw c.value = !1,
                            u
                        }
                    }
                    ,
                    sendCodeByPhoneNumberAfterEncryptCheck: async ({phoneNumber: e}={}) => {
                        if (l.value)
                            throw new Error(r.value + "s后再发送！");
                        const t = (0,
                        o.R1)(e);
                        if (!t)
                            throw new Error("手机号参数缺失！");
                        c.value = !0;
                        try {
                            await (0,
                            i.A)({
                                url: "/gw/self/CheckMobileV2",
                                query: {
                                    mobile: s.A.DES.encrypt("alogic-diffcult", t)
                                }
                            });
                            const {data: e} = await (0,
                            i.A)({
                                url: "/gw/self/SendPublicMobileCode",
                                query: {
                                    phoneNumber: t
                                }
                            });
                            return n.value = (new Date).getTime(),
                            c.value = !1,
                            e
                        } catch (a) {
                            throw c.value = !1,
                            a
                        }
                    }
                    ,
                    sendCodeByPhoneNumberAfterJigsawToBind: async ({loginId: e, x: t, y: n, scene: o}={}) => {
                        if (l.value)
                            throw new Error(r.value + "s后再发送！");
                        if (!e || !t || !n)
                            throw new Error("滑动拼图相关参数缺失！当前参数loginId为${loginId},x为${x},y为${y};");
                        m.value = !0;
                        try {
                            const {data: r} = await (0,
                            i.A)({
                                url: "/gw/self/SendMobileCodeBySlideVerify4Unbind",
                                query: {
                                    loginId: e,
                                    x: t,
                                    y: n,
                                    scene: o
                                }
                            });
                            return d.value = (new Date).getTime(),
                            m.value = !1,
                            r
                        } catch (a) {
                            throw m.value = !1,
                            a
                        }
                    }
                    ,
                    sendCodeByEmailAfterJigsaw: async ({loginId: e, x: t, y: n, verifyCodeType: r, email: o, scene: a}={}) => {
                        if (y.value)
                            throw new Error(w.value + "s后再发送！");
                        if (!e || !t || !n)
                            throw new Error("滑动拼图相关参数缺失！当前参数loginId为${loginId},x为${x},y为${y};");
                        if (!o)
                            throw new Error("邮箱参数缺失！");
                        g.value = !0;
                        try {
                            const {data: s} = await (0,
                            i.A)({
                                url: "/gw/self/SendEmailCodeV6",
                                query: {
                                    loginId: e,
                                    x: t,
                                    y: n,
                                    verifyCodeType: r,
                                    email: o,
                                    scene: a
                                }
                            });
                            return h.value = (new Date).getTime(),
                            g.value = !1,
                            s
                        } catch (s) {
                            throw g.value = !1,
                            s
                        }
                    }
                    ,
                    sendCodeByEmailAfterJigsawForUser: async ({loginId: e, x: t, y: n, verifyCodeType: r, email: o, scene: a}={}) => {
                        if (y.value)
                            throw new Error(w.value + "s后再发送！");
                        if (!e || !t || !n)
                            throw new Error("滑动拼图相关参数缺失！当前参数loginId为${loginId},x为${x},y为${y};");
                        if (!o)
                            throw new Error("邮箱参数缺失！");
                        g.value = !0;
                        try {
                            const {data: s} = await (0,
                            i.A)({
                                url: "/gw/self/SendEmailCodeBySlideVerifyV1",
                                query: {
                                    loginId: e,
                                    x: t,
                                    y: n,
                                    verifyCodeType: r,
                                    email: o,
                                    scene: a
                                }
                            });
                            return h.value = (new Date).getTime(),
                            g.value = !1,
                            s
                        } catch (s) {
                            throw g.value = !1,
                            s
                        }
                    }
                    ,
                    sendCodeByEmailAfterJigsawToBind: async ({loginId: e, x: t, y: n, email: r, scene: o}={}) => {
                        if (I.value)
                            throw new Error(w.value + "s后再发送！");
                        if (!e || !t || !n)
                            throw new Error("滑动拼图相关参数缺失！当前参数loginId为${loginId},x为${x},y为${y};");
                        if (!r)
                            throw new Error("邮箱参数缺失！");
                        A.value = !0;
                        try {
                            const {data: a} = await (0,
                            i.A)({
                                url: "/gw/self/SendEmailCodeV3",
                                query: {
                                    loginId: e,
                                    x: t,
                                    y: n,
                                    email: r,
                                    scene: o
                                }
                            });
                            return C.value = (new Date).getTime(),
                            A.value = !1,
                            a
                        } catch (a) {
                            throw A.value = !1,
                            a
                        }
                    }
                    ,
                    sendCodeByPhoneNumberBind: async e => {
                        m.value = !0;
                        try {
                            const {execute: t} = (0,
                            i.A)({
                                url: "/gw/self/SendMobileCodeV3",
                                query: {
                                    scene: e
                                },
                                immediate: !1
                            });
                            await t(),
                            d.value = (new Date).getTime(),
                            m.value = !1
                        } catch (t) {
                            throw m.value = !1,
                            t
                        }
                    }
                    ,
                    sendFindPassAfterJigsaw: async ({loginId: e, x: t, y: o, mobileId: a, type: s, scene: u}={}) => {
                        if (l.value)
                            throw new Error(r.value + "s后再发送！");
                        if (!e || !t || !o)
                            throw new Error("滑动拼图相关参数缺失！当前参数loginId为${loginId},x为${x},y为${y};");
                        if (!a)
                            throw new Error("手机号参数缺失！");
                        let d = {
                            loginId: e,
                            x: t,
                            y: o,
                            scene: u
                        }
                          , f = "";
                        "loginName" === s ? (f = "/gw/self/SendMobileCodeResetPwd2",
                        d.mobileId = a) : "mobile" === s ? (f = "/gw/self/SendMobileCodeResetPwd",
                        d.phoneNumber = a) : "mail" === s && (f = "/gw/self/SendEmailCodeResetPwd",
                        d.email = a),
                        c.value = !0;
                        try {
                            const {data: e} = await (0,
                            i.A)({
                                url: f,
                                query: d
                            });
                            return n.value = (new Date).getTime(),
                            c.value = !1,
                            e
                        } catch (m) {
                            throw c.value = !1,
                            m
                        }
                    }
                    ,
                    verifyByKey: async ({verifyKey: e, code: t}={}) => {
                        const n = (0,
                        o.R1)(e)
                          , r = (0,
                        o.R1)(t);
                        if (!n)
                            throw new Error("verifyKey参数缺失！");
                        if (!r)
                            throw new Error("code参数缺失！");
                        return await (0,
                        i.A)({
                            url: "/gw/self/VerifySmsCode",
                            query: {
                                verifyKey: n,
                                code: r
                            }
                        })
                    }
                    ,
                    refreshBtn: () => {
                        m.value = !1,
                        d.value = 0,
                        c.value = !1,
                        n.value = 0,
                        A.value = !1,
                        C.value = 0,
                        g.value = !1,
                        h.value = 0
                    }
                }
            }
            ))
        },
        317: function(e, t, n) {
            "use strict";
            var r = n(926)
              , o = n(3324)
              , a = n(5236)
              , i = n(6065)
              , s = n(5012);
            t.A = (e={}) => {
                const {phoneNumber: t, mobile: n=!1, onSendSuccess: c= () => {}
                , scene: l=""} = e
                  , u = (0,
                s.A)()
                  , {smsDisabled: d, smsSendBtnText: f, smsDisabledBind: m, smsSendBtnTextBind: p} = (0,
                r.bP)(u)
                  , v = (0,
                o.EW)(( () => (0,
                a.R1)(t)))
                  , h = (0,
                o.EW)(( () => i.A.validator.mobile(v.value || "")));
                return {
                    disabled: (0,
                    o.EW)(( () => !h.value || d.value)),
                    smsDisabled: d,
                    btnText: (0,
                    o.EW)(( () => f.value)),
                    disabledBind: (0,
                    o.EW)(( () => m.value)),
                    btnTextBind: (0,
                    o.EW)(( () => p.value)),
                    sendAfterJigsaw: async () => {
                        if (d.value)
                            return;
                        const e = await i.A.jigsaw({
                            mobile: n
                        });
                        await u.sendCodeByPhoneNumberAfterJigsaw({
                            ...e,
                            scene: l,
                            phoneNumber: v.value
                        });
                        c()
                    }
                    ,
                    sendAfterJigsawForUser: async () => {
                        if (d.value)
                            return;
                        const e = await i.A.jigsaw({
                            mobile: n
                        });
                        await u.sendCodeByPhoneNumberAfterJigsawForUser({
                            ...e,
                            scene: l,
                            phoneNumber: v.value
                        });
                        c()
                    }
                    ,
                    sendAfterEncryptCheck: async () => {
                        await u.sendCodeByPhoneNumberAfterEncryptCheck({
                            phoneNumber: v,
                            scene: l
                        }),
                        c()
                    }
                    ,
                    sendAfterJigsawToCurrent: async () => {
                        if (m.value)
                            return;
                        const e = await i.A.jigsaw({
                            mobile: n
                        });
                        await u.sendCodeByPhoneNumberAfterJigsawToBind({
                            scene: l,
                            ...e
                        }),
                        c()
                    }
                    ,
                    sendAfterJigsawFromMsgCenter: async () => {
                        const e = await i.A.jigsaw();
                        await u.sendCodeByPhoneNumberAfterJigsawFromSmsCenter({
                            ...e,
                            scene: l,
                            phoneNumber: v.value
                        }),
                        c()
                    }
                    ,
                    sendAfterJigsawFrombankCardSms: async () => {
                        const e = await i.A.jigsaw({
                            mobile: n
                        });
                        await u.sendCodeByPhoneNumberAfterJigsawFrombankCardSms({
                            ...e,
                            phone: v.value,
                            scene: l
                        }),
                        c()
                    }
                    ,
                    sendToBind: async () => {
                        m.value || (await u.sendCodeByPhoneNumberBind(l),
                        c())
                    }
                    ,
                    sendToBindAfterJigsaw: async () => {
                        if (m.value)
                            return;
                        const e = await i.A.jigsaw({
                            mobile: n
                        });
                        await u.sendCodeByPhoneNumberAfterJigsawToBind({
                            scene: l,
                            ...e
                        }),
                        c()
                    }
                    ,
                    sendFindPass: async e => {
                        if (d.value)
                            return;
                        const t = await i.A.jigsaw({
                            mobile: n
                        });
                        await u.sendFindPassAfterJigsaw({
                            ...t,
                            mobileId: v.value,
                            type: e,
                            scene: l
                        }),
                        c()
                    }
                    ,
                    justJigsaw: async () => await i.A.jigsaw({
                        mobile: n
                    }),
                    refreshBtn: () => {
                        u.refreshBtn()
                    }
                }
            }
        },
        9387: function(e, t, n) {
            "use strict";
            var r = n(3324);
            t.A = () => (0,
            r.nI)()?.appContext?.config?.globalProperties?._$analysis || window.CtcloudReport
        },
        7519: function(e, t, n) {
            "use strict";
            var r = n(5236)
              , o = n(3324)
              , a = n(5946)
              , i = n(9387);
            const s = {
                flowIndex: 0,
                flowId: ""
            };
            let c = {
                moduleName: "",
                url: "",
                domList: []
            };
            t.A = () => {
                const e = (0,
                r.KR)(!1)
                  , t = (0,
                r.KR)(!1)
                  , n = (0,
                i.A)()
                  , l = (e="click", t, r) => {
                    try {
                        s.flowId || (s.flowId = (0,
                        a.Os)());
                        const o = {
                            event: {
                                flowId: s.flowId,
                                flowIndex: s.flowIndex++,
                                type: e,
                                ...t
                            }
                        };
                        if (r) {
                            const {offsetX: e, offsetY: t, pageX: n, pageY: a} = r;
                            Object.assign(o, {
                                mouse: {
                                    offsetX: e,
                                    offsetY: t,
                                    pageX: n,
                                    pageY: a
                                }
                            })
                        }
                        if (o.event && !isNaN(o.event.note)) {
                            let e = c.domList.find((e => e.id === `${note}`));
                            o.event.note = e.note
                        }
                        n?.eventsReportEt(o)
                    } catch (o) {}
                }
                  , u = e => {
                    if (c && c.domList.length > 0) {
                        const t = c.domList.filter((e => "click" === e.type)).find((t => Array.from(document.querySelectorAll(t.selector)).some((t => t.contains(e.target) || t === e.target))));
                        if (t) {
                            let n = {
                                note: `${t.subModuleName}-${t.note}`
                            };
                            t.content && (n.note += `-${e.target.attributes?.name?.value || e.target.innerText || e.target.innerHTML}`),
                            t.extendData && (n.extendData = JSON.parse(e.target.attributes?.extendData?.value || "")),
                            l("click", n, e)
                        }
                    }
                }
                  , d = () => {
                    const e = c.moduleName;
                    n?.eventsReportEt({
                        event: {
                            flowId: s.flowId,
                            flowIndex: s.flowIndex++,
                            type: "leavePage",
                            note: `离开“${e}”页面`
                        }
                    }),
                    s.flowId = "",
                    s.flowIndex = ""
                }
                ;
                return {
                    validInput: r => {
                        if (!e.value) {
                            e.value = !0,
                            t.value = !0;
                            let o = {
                                note: ""
                            };
                            o = isNaN(r) ? c.domList.find((e => e.note === `${r}`)) : c.domList.find((e => e.id === `${r}`)),
                            n?.eventsReportEt({
                                event: {
                                    flowId: s.flowId,
                                    flowIndex: s.flowIndex++,
                                    type: "input",
                                    status: "success",
                                    note: o.subModuleName ? `${o.subModuleName}-${o.note}` : r
                                }
                            })
                        }
                    }
                    ,
                    validBlur: async (r, o, a, i=!1) => {
                        if (e.value = !1,
                        !t.value)
                            return;
                        let l = {};
                        l = isNaN(r) ? c.domList.find((e => e.note === `${r}`)) : c.domList.find((e => e.id === `${r}`)),
                        o ? i ? o.validate(a).then(( () => {
                            n?.eventsReportEt({
                                event: {
                                    flowId: s.flowId,
                                    flowIndex: s.flowIndex++,
                                    type: "blur",
                                    status: "success",
                                    note: l.subModuleName ? `${l.subModuleName}-${l.note}` : r
                                }
                            }),
                            t.value = !1
                        }
                        )).catch(( ({message: e}) => {
                            n?.eventsReportEt({
                                event: {
                                    flowId: s.flowId,
                                    flowIndex: s.flowIndex++,
                                    type: "blur",
                                    status: "fail",
                                    msg: e,
                                    note: l.subModuleName ? `${l.subModuleName}-${l.note}` : r
                                }
                            }),
                            t.value = !1
                        }
                        )) : o.validateField(a, ( (e, o) => {
                            n?.eventsReportEt({
                                event: {
                                    flowId: s.flowId,
                                    flowIndex: s.flowIndex++,
                                    type: "blur",
                                    status: e ? "success" : "fail",
                                    msg: e ? "" : o[a][0].message,
                                    note: l.subModuleName ? `${l.subModuleName}-${l.note}` : r
                                }
                            }),
                            t.value = !1
                        }
                        )) : (n?.eventsReportEt({
                            event: {
                                flowId: s.flowId,
                                flowIndex: s.flowIndex++,
                                type: "blur",
                                status: "success",
                                note: l.subModuleName ? `${l.subModuleName}-${l.note}` : r
                            }
                        }),
                        t.value = !1)
                    }
                    ,
                    validChange: (e, t) => {
                        let r = c.domList.find((t => t.id === e));
                        n?.eventsReportEt({
                            event: {
                                flowId: s.flowId,
                                flowIndex: s.flowIndex++,
                                type: "change",
                                note: `${r.subModuleName}-${r.note}-${t}`
                            }
                        })
                    }
                    ,
                    eventReport: l,
                    flowReportInit: e => {
                        (0,
                        o.sV)(( () => {
                            c = e;
                            const t = c.moduleName;
                            s.flowId = (0,
                            a.Os)(),
                            setTimeout(( () => {
                                n?.eventsReportEt({
                                    event: {
                                        flowId: s.flowId,
                                        flowIndex: s.flowIndex++,
                                        type: "enterPage",
                                        note: `进入“${t}”页面`
                                    }
                                })
                            }
                            ), 500),
                            window.addEventListener("beforeunload", d),
                            document.body.addEventListener("click", u)
                        }
                        )),
                        (0,
                        o.xo)(( () => {
                            d(),
                            window.removeEventListener("beforeunload", d),
                            document.body.removeEventListener("click", u)
                        }
                        ))
                    }
                }
            }
        },
        8665: function(e, t, n) {
            "use strict";
            var r = n(6775);
            const o = r.A.create();
            o.config = r.A.config,
            o.helper = r.A.helper,
            t.A = o
        },
        5946: function(e, t, n) {
            "use strict";
            n.d(t, {
                Os: function() {
                    return o
                },
                QO: function() {
                    return a
                }
            });
            const r = (e, t="--") => e || 0 === e ? e : t
              , o = () => {
                function e() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                }
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
            ;
            const a = e => {
                let t = (e + "").length
                  , n = "";
                if (18 == t && (n = e.substr(6, 4) + "/" + e.substr(10, 2) + "/" + e.substr(12, 2)),
                15 == t) {
                    let t = "";
                    t = e.charAt(6) + e.charAt(7),
                    n = parseInt(t) < 10 ? "20" + e.substr(6, 2) + "/" + e.substr(8, 2) + "/" + e.substr(10, 2) : "19" + e.substr(6, 2) + "/" + e.substr(8, 2) + "/" + e.substr(10, 2)
                }
                let r = new Date(n)
                  , o = new Date
                  , a = o.getFullYear() - r.getFullYear();
                return (o.getMonth() < r.getMonth() || o.getMonth() == r.getMonth() && o.getDate() <= r.getDate()) && a--,
                a
            }
            ;
            t.Ay = {
                clearArgs: e => {
                    let t = {};
                    for (let n in e)
                        ["", void 0, null].includes(e[n]) || (t[n] = e[n]);
                    return t
                }
                ,
                getExe: function(e) {
                    const t = e.lastIndexOf(".");
                    return e.substring(t + 1)
                },
                downloadByUrl: (e, t="") => {
                    if (!e)
                        return;
                    const n = document.createElement("a");
                    n.href = e,
                    n.style.display = "none",
                    document.body.appendChild(n),
                    n.click(),
                    document.body.removeChild(n)
                }
                ,
                formatNumWithComma: e => {
                    const t = e + "";
                    if (null == e)
                        return r(e);
                    return t.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,")
                }
                ,
                addZeroToLeft: e => {
                    if (e || 0 === e) {
                        const t = (e + "").length;
                        return `00${e}`.substr(t)
                    }
                    return e
                }
                ,
                formatValWhenEmpty: r,
                dict2Array: (e, t={
                    label: "label",
                    value: "value"
                }) => Object.entries(e).map((e => ({
                    [t.label]: e[1],
                    [t.value]: e[0]
                }))),
                accMul: (e, t) => {
                    var n = 0
                      , r = e.toString()
                      , o = t.toString();
                    try {
                        n += r.split(".")[1].length
                    } catch (a) {}
                    try {
                        n += o.split(".")[1].length
                    } catch (a) {}
                    return Number(r.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, n)
                }
                ,
                hidePhone: e => e ? e.replace(/(\d{3})(\d+)(\d{4})/, "$1****$3") : "",
                getUrlParamsObject: (e=window.location.href, t) => {
                    const n = {};
                    return e.replace(/.*\?/g, "").replace(/#.*/, "").replace(/\b(\w+)=([^&]*)/g, ( (e, r, o) => (o = o || "",
                    n[r] = t ? decodeURIComponent(o) : o,
                    e))),
                    n
                }
                ,
                byteConvert: e => {
                    if (isNaN(e))
                        return "";
                    var t = Math.floor(Math.log(e) / Math.log(2));
                    t < 1 && (t = 0);
                    var n = Math.floor(t / 10);
                    return (e = (e /= Math.pow(2, 10 * n)).toFixed(3)) + " " + ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][n]
                }
                ,
                clearEmptyAttr: e => {
                    for (const t in e)
                        (!e[t] || e[t]instanceof Array && 0 === e[t].length || e[t]instanceof Object && 0 === Object.keys(e[t]).length) && delete e[t];
                    return e
                }
                ,
                xss: (e, t) => {
                    if (!e)
                        return 0 === e ? "0" : "";
                    switch (t) {
                    case "html":
                        e = e.replace(/['"<>\/\\\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, (function(e) {
                            return "&#" + e.charCodeAt(0) + ";"
                        }
                        )).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(/\n/g, "<br />").replace(/\r/g, "<br />");
                        break;
                    case "htmlEp":
                        e = e.replace(/['"<>\/\\\x00-\x1f\x80-\xff]/g, (function(e) {
                            return "&#" + e.charCodeAt(0) + ";"
                        }
                        ));
                    default:
                        e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;")
                    }
                    return e.replace(/&&&/g, "<br/>")
                }
                ,
                guid: o,
                isEmpty: function(e) {
                    return null == e || "" === e || "string" == typeof e && "" === e.trim()
                },
                getAge: a,
                wait: e => new Promise((t => {
                    setTimeout(( () => {
                        t()
                    }
                    ), e)
                }
                )),
                deepClone: function e(t) {
                    if (!t && "object" != typeof t)
                        throw new Error("error arguments","deepClone");
                    const n = t.constructor === Array ? [] : {};
                    return Object.keys(t).forEach((r => {
                        t[r] && "object" == typeof t[r] ? n[r] = e(t[r]) : n[r] = t[r]
                    }
                    )),
                    n
                }
            }
        },
        1081: function(e, t) {
            "use strict";
            const n = {
                set: function(e, t, n, r, o, a) {
                    const i = r || "/"
                      , s = o || ""
                      , c = new Date;
                    n && c.setMinutes(c.getMinutes() + parseInt(n, 10)),
                    document.cookie = e + "=" + escape(t) + (n ? ";expires=" + c.toGMTString() : "") + (i ? ";path=" + i : "") + (s ? ";domain=" + s : "") + (a ? ";secure=true" : "")
                },
                get: function(e) {
                    const t = new RegExp("(^| )" + e + "(?:=([^;]*))?(;|$)");
                    let n = document.cookie.match(t);
                    return n = n && n[2] ? unescape(n[2]) : n ? "" : null,
                    n
                },
                has: function(e) {
                    const t = new RegExp("(^| )(" + e + ")(?:=[^;]*)?(;|$)")
                      , n = document.cookie.match(t);
                    return !(!n || !n[2])
                },
                remove: function(e, t, n) {
                    t = t || "/",
                    n = n || ".ctyun.cn",
                    this.set(e, "", -1, t, n)
                }
            };
            t.A = n
        },
        8527: function(e, t, n) {
            "use strict";
            function r(e) {
                return t => `[object ${e}]` === Object.prototype.toString.call(t)
            }
            const o = r("Object")
              , a = r("Array")
              , i = r("Boolean")
              , s = r("Function")
              , c = r("String")
              , l = r("Null")
              , u = r("Undefined")
              , d = r("Date")
              , f = r("Math");
            t.Ay = {
                isType: r,
                isObject: o,
                isArray: a,
                isBoolean: i,
                isFunction: s,
                isString: c,
                isNumber: e => !isNaN(e) && r("Number")(e),
                isNull: l,
                isUndefined: u,
                isDate: d,
                isMath: f
            }
        },
        6775: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return Ue
                }
            });
            var r = n(3324)
              , o = n(5236)
              , a = n(8763)
              , i = function() {
                return i = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
                ,
                i.apply(this, arguments)
            };
            function s(e, t, n, r) {
                return new (n || (n = Promise))((function(o, a) {
                    function i(e) {
                        try {
                            c(r.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }
                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(i, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }
                ))
            }
            function c(e, t) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }
                ),
                a;
                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; i; )
                                try {
                                    if (n = 1,
                                    r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r),
                                    0) : r.next) && !(o = o.call(r, a[1])).done)
                                        return o;
                                    switch (r = 0,
                                    o && (a = [2 & a[0], o.value]),
                                    a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return i.label++,
                                        {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++,
                                        r = a[1],
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop(),
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1],
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2],
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop(),
                                        i.trys.pop();
                                        continue
                                    }
                                    a = t.call(e, i)
                                } catch (s) {
                                    a = [6, s],
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                            if (5 & a[0])
                                throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            }
            function l() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                    e += arguments[t].length;
                var r = Array(e)
                  , o = 0;
                for (t = 0; t < n; t++)
                    for (var a = arguments[t], i = 0, s = a.length; i < s; i++,
                    o++)
                        r[o] = a[i];
                return r
            }
            function u(e, t) {
                return new Promise((function(n) {
                    return setTimeout(n, e, t)
                }
                ))
            }
            function d(e, t) {
                try {
                    var n = e();
                    (r = n) && "function" == typeof r.then ? n.then((function(e) {
                        return t(!0, e)
                    }
                    ), (function(e) {
                        return t(!1, e)
                    }
                    )) : t(!0, n)
                } catch (u) {
                    t(!1, u)
                }
                var r
            }
            function f(e, t, n) {
                return void 0 === n && (n = 16),
                s(this, void 0, void 0, (function() {
                    var r, o, a;
                    return c(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            r = Date.now(),
                            o = 0,
                            i.label = 1;
                        case 1:
                            return o < e.length ? (t(e[o], o),
                            (a = Date.now()) >= r + n ? (r = a,
                            [4, u(0)]) : [3, 3]) : [3, 4];
                        case 2:
                            i.sent(),
                            i.label = 3;
                        case 3:
                            return ++o,
                            [3, 1];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function m(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] + t[3],
                n[2] += n[3] >>> 16,
                n[3] &= 65535,
                n[2] += e[2] + t[2],
                n[1] += n[2] >>> 16,
                n[2] &= 65535,
                n[1] += e[1] + t[1],
                n[0] += n[1] >>> 16,
                n[1] &= 65535,
                n[0] += e[0] + t[0],
                n[0] &= 65535,
                [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }
            function p(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] * t[3],
                n[2] += n[3] >>> 16,
                n[3] &= 65535,
                n[2] += e[2] * t[3],
                n[1] += n[2] >>> 16,
                n[2] &= 65535,
                n[2] += e[3] * t[2],
                n[1] += n[2] >>> 16,
                n[2] &= 65535,
                n[1] += e[1] * t[3],
                n[0] += n[1] >>> 16,
                n[1] &= 65535,
                n[1] += e[2] * t[2],
                n[0] += n[1] >>> 16,
                n[1] &= 65535,
                n[1] += e[3] * t[1],
                n[0] += n[1] >>> 16,
                n[1] &= 65535,
                n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
                n[0] &= 65535,
                [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }
            function v(e, t) {
                return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
                [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
            }
            function h(e, t) {
                return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
            }
            function g(e, t) {
                return [e[0] ^ t[0], e[1] ^ t[1]]
            }
            function w(e) {
                return e = g(e, [0, e[0] >>> 1]),
                e = g(e = p(e, [4283543511, 3981806797]), [0, e[0] >>> 1]),
                g(e = p(e, [3301882366, 444984403]), [0, e[0] >>> 1])
            }
            function y(e, t) {
                t = t || 0;
                var n, r = (e = e || "").length % 16, o = e.length - r, a = [0, t], i = [0, t], s = [0, 0], c = [0, 0], l = [2277735313, 289559509], u = [1291169091, 658871167];
                for (n = 0; n < o; n += 16)
                    s = [255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24, 255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24],
                    c = [255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24, 255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24],
                    s = v(s = p(s, l), 31),
                    a = m(a = v(a = g(a, s = p(s, u)), 27), i),
                    a = m(p(a, [0, 5]), [0, 1390208809]),
                    c = v(c = p(c, u), 33),
                    i = m(i = v(i = g(i, c = p(c, l)), 31), a),
                    i = m(p(i, [0, 5]), [0, 944331445]);
                switch (s = [0, 0],
                c = [0, 0],
                r) {
                case 15:
                    c = g(c, h([0, e.charCodeAt(n + 14)], 48));
                case 14:
                    c = g(c, h([0, e.charCodeAt(n + 13)], 40));
                case 13:
                    c = g(c, h([0, e.charCodeAt(n + 12)], 32));
                case 12:
                    c = g(c, h([0, e.charCodeAt(n + 11)], 24));
                case 11:
                    c = g(c, h([0, e.charCodeAt(n + 10)], 16));
                case 10:
                    c = g(c, h([0, e.charCodeAt(n + 9)], 8));
                case 9:
                    c = p(c = g(c, [0, e.charCodeAt(n + 8)]), u),
                    i = g(i, c = p(c = v(c, 33), l));
                case 8:
                    s = g(s, h([0, e.charCodeAt(n + 7)], 56));
                case 7:
                    s = g(s, h([0, e.charCodeAt(n + 6)], 48));
                case 6:
                    s = g(s, h([0, e.charCodeAt(n + 5)], 40));
                case 5:
                    s = g(s, h([0, e.charCodeAt(n + 4)], 32));
                case 4:
                    s = g(s, h([0, e.charCodeAt(n + 3)], 24));
                case 3:
                    s = g(s, h([0, e.charCodeAt(n + 2)], 16));
                case 2:
                    s = g(s, h([0, e.charCodeAt(n + 1)], 8));
                case 1:
                    s = p(s = g(s, [0, e.charCodeAt(n)]), l),
                    a = g(a, s = p(s = v(s, 31), u))
                }
                return a = m(a = g(a, [0, e.length]), i = g(i, [0, e.length])),
                i = m(i, a),
                a = m(a = w(a), i = w(i)),
                i = m(i, a),
                ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
            }
            function b(e) {
                return parseInt(e)
            }
            function C(e) {
                return parseFloat(e)
            }
            function A(e, t) {
                return "number" == typeof e && isNaN(e) ? t : e
            }
            function E(e) {
                return e.reduce((function(e, t) {
                    return e + (t ? 1 : 0)
                }
                ), 0)
            }
            function I(e, t) {
                if (void 0 === t && (t = 1),
                Math.abs(t) >= 1)
                    return Math.round(e / t) * t;
                var n = 1 / t;
                return Math.round(e * n) / n
            }
            function k(e) {
                return e && "object" == typeof e && "message"in e ? e : {
                    message: e
                }
            }
            function x(e, t, n) {
                var r = Object.keys(e).filter((function(e) {
                    return !function(e, t) {
                        for (var n = 0, r = e.length; n < r; ++n)
                            if (e[n] === t)
                                return !0;
                        return !1
                    }(n, e)
                }
                ))
                  , o = Array(r.length);
                return f(r, (function(n, r) {
                    o[r] = function(e, t) {
                        var n = new Promise((function(n) {
                            var r = Date.now();
                            d(e.bind(null, t), (function() {
                                for (var e = [], t = 0; t < arguments.length; t++)
                                    e[t] = arguments[t];
                                var o = Date.now() - r;
                                if (!e[0])
                                    return n((function() {
                                        return {
                                            error: k(e[1]),
                                            duration: o
                                        }
                                    }
                                    ));
                                var a = e[1];
                                if (function(e) {
                                    return "function" != typeof e
                                }(a))
                                    return n((function() {
                                        return {
                                            value: a,
                                            duration: o
                                        }
                                    }
                                    ));
                                n((function() {
                                    return new Promise((function(e) {
                                        var t = Date.now();
                                        d(a, (function() {
                                            for (var n = [], r = 0; r < arguments.length; r++)
                                                n[r] = arguments[r];
                                            var a = o + Date.now() - t;
                                            if (!n[0])
                                                return e({
                                                    error: k(n[1]),
                                                    duration: a
                                                });
                                            e({
                                                value: n[1],
                                                duration: a
                                            })
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ));
                        return function() {
                            return n.then((function(e) {
                                return e()
                            }
                            ))
                        }
                    }(e[n], t)
                }
                )),
                function() {
                    return s(this, void 0, void 0, (function() {
                        var e, t, n, a, i, s;
                        return c(this, (function(l) {
                            switch (l.label) {
                            case 0:
                                for (e = {},
                                t = 0,
                                n = r; t < n.length; t++)
                                    a = n[t],
                                    e[a] = void 0;
                                i = Array(r.length),
                                s = function() {
                                    var t;
                                    return c(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return t = !0,
                                            [4, f(r, (function(n, r) {
                                                i[r] || (o[r] ? i[r] = o[r]().then((function(t) {
                                                    return e[n] = t
                                                }
                                                )) : t = !1)
                                            }
                                            ))];
                                        case 1:
                                            return n.sent(),
                                            t ? [2, "break"] : [4, u(1)];
                                        case 2:
                                            return n.sent(),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ,
                                l.label = 1;
                            case 1:
                                return [5, s()];
                            case 2:
                                if ("break" === l.sent())
                                    return [3, 4];
                                l.label = 3;
                            case 3:
                                return [3, 1];
                            case 4:
                                return [4, Promise.all(i)];
                            case 5:
                                return l.sent(),
                                [2, e]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
            function T() {
                var e = window
                  , t = navigator;
                return E(["MSCSSMatrix"in e, "msSetImmediate"in e, "msIndexedDB"in e, "msMaxTouchPoints"in t, "msPointerEnabled"in t]) >= 4
            }
            function S() {
                var e = window
                  , t = navigator;
                return E(["webkitPersistentStorage"in t, "webkitTemporaryStorage"in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL"in e, "BatteryManager"in e, "webkitMediaStream"in e, "webkitSpeechGrammar"in e]) >= 5
            }
            function R() {
                var e = window
                  , t = navigator;
                return E(["ApplePayError"in e, "CSSPrimitiveValue"in e, "Counter"in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates"in t, "WebKitMediaKeys"in e]) >= 4
            }
            function P() {
                var e = window;
                return E(["safari"in e, !("DeviceMotionEvent"in e), !("ongestureend"in e), !("standalone"in navigator)]) >= 3
            }
            function L() {
                var e = S()
                  , t = function() {
                    var e, t, n = window;
                    return E(["buildID"in navigator, "MozAppearance"in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange"in n, "mozInnerScreenX"in n, "CSSMozDocumentRule"in n, "CanvasCaptureMediaStream"in n]) >= 4
                }();
                if (!e && !t)
                    return !1;
                var n = window;
                return E(["onorientationchange"in n, "orientation"in n, e && !("SharedWorker"in n), t && /android/i.test(navigator.appVersion)]) >= 2
            }
            function N(e) {
                var t = new Error(e);
                return t.name = e,
                t
            }
            function M(e, t, n) {
                var r, o, a;
                return void 0 === n && (n = 50),
                s(this, void 0, void 0, (function() {
                    var i, s;
                    return c(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            i = document,
                            c.label = 1;
                        case 1:
                            return i.body ? [3, 3] : [4, u(n)];
                        case 2:
                            return c.sent(),
                            [3, 1];
                        case 3:
                            s = i.createElement("iframe"),
                            c.label = 4;
                        case 4:
                            return c.trys.push([4, , 10, 11]),
                            [4, new Promise((function(e, n) {
                                var r = !1
                                  , o = function() {
                                    r = !0,
                                    e()
                                };
                                s.onload = o,
                                s.onerror = function(e) {
                                    r = !0,
                                    n(e)
                                }
                                ;
                                var a = s.style;
                                a.setProperty("display", "block", "important"),
                                a.position = "absolute",
                                a.top = "0",
                                a.left = "0",
                                a.visibility = "hidden",
                                t && "srcdoc"in s ? s.srcdoc = t : s.src = "about:blank",
                                i.body.appendChild(s);
                                var c = function() {
                                    var e, t;
                                    r || ("complete" === (null === (t = null === (e = s.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? o() : setTimeout(c, 10))
                                };
                                c()
                            }
                            ))];
                        case 5:
                            c.sent(),
                            c.label = 6;
                        case 6:
                            return (null === (o = null === (r = s.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === o ? void 0 : o.body) ? [3, 8] : [4, u(n)];
                        case 7:
                            return c.sent(),
                            [3, 6];
                        case 8:
                            return [4, e(s, s.contentWindow)];
                        case 9:
                            return [2, c.sent()];
                        case 10:
                            return null === (a = s.parentNode) || void 0 === a || a.removeChild(s),
                            [7];
                        case 11:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            function _(e) {
                for (var t = function(e) {
                    for (var t, n, r = "Unexpected syntax '" + e + "'", o = /^\s*([a-z-]*)(.*)$/i.exec(e), a = o[1] || void 0, i = {}, s = /([.:#][\w-]+|\[.+?\])/gi, c = function(e, t) {
                        i[e] = i[e] || [],
                        i[e].push(t)
                    }; ; ) {
                        var l = s.exec(o[2]);
                        if (!l)
                            break;
                        var u = l[0];
                        switch (u[0]) {
                        case ".":
                            c("class", u.slice(1));
                            break;
                        case "#":
                            c("id", u.slice(1));
                            break;
                        case "[":
                            var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u);
                            if (!d)
                                throw new Error(r);
                            c(d[1], null !== (n = null !== (t = d[4]) && void 0 !== t ? t : d[5]) && void 0 !== n ? n : "");
                            break;
                        default:
                            throw new Error(r)
                        }
                    }
                    return [a, i]
                }(e), n = t[0], r = t[1], o = document.createElement(null != n ? n : "div"), a = 0, i = Object.keys(r); a < i.length; a++) {
                    var s = i[a]
                      , c = r[s].join(" ");
                    "style" === s ? $(o.style, c) : o.setAttribute(s, c)
                }
                return o
            }
            function $(e, t) {
                for (var n = 0, r = t.split(";"); n < r.length; n++) {
                    var o = r[n]
                      , a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
                    if (a) {
                        var i = a[1]
                          , s = a[2]
                          , c = a[4];
                        e.setProperty(i, s, c || "")
                    }
                }
            }
            var U, D, B = ["monospace", "sans-serif", "serif"], O = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];
            function F(e) {
                return e.rect(0, 0, 10, 10),
                e.rect(2, 2, 6, 6),
                !e.isPointInPath(5, 5, "evenodd")
            }
            function W(e, t) {
                e.width = 240,
                e.height = 60,
                t.textBaseline = "alphabetic",
                t.fillStyle = "#f60",
                t.fillRect(100, 1, 62, 20),
                t.fillStyle = "#069",
                t.font = '11pt "Times New Roman"';
                var n = "Cwm fjordbank gly " + String.fromCharCode(55357, 56835);
                return t.fillText(n, 2, 15),
                t.fillStyle = "rgba(102, 204, 0, 0.2)",
                t.font = "18pt Arial",
                t.fillText(n, 4, 45),
                q(e)
            }
            function j(e, t) {
                e.width = 122,
                e.height = 110,
                t.globalCompositeOperation = "multiply";
                for (var n = 0, r = [["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]]; n < r.length; n++) {
                    var o = r[n]
                      , a = o[0]
                      , i = o[1]
                      , s = o[2];
                    t.fillStyle = a,
                    t.beginPath(),
                    t.arc(i, s, 40, 0, 2 * Math.PI, !0),
                    t.closePath(),
                    t.fill()
                }
                return t.fillStyle = "#f9c",
                t.arc(60, 60, 60, 0, 2 * Math.PI, !0),
                t.arc(60, 60, 20, 0, 2 * Math.PI, !0),
                t.fill("evenodd"),
                q(e)
            }
            function q(e) {
                return e.toDataURL()
            }
            function V() {
                var e = this;
                return function() {
                    if (void 0 === D) {
                        var e = function() {
                            var t = Q();
                            K(t) ? D = setTimeout(e, 2500) : (U = t,
                            D = void 0)
                        };
                        e()
                    }
                }(),
                function() {
                    return s(e, void 0, void 0, (function() {
                        var e;
                        return c(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return K(e = Q()) ? U ? [2, l(U)] : function() {
                                    var e = document;
                                    return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
                                }() ? [4, (n = document,
                                (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n))] : [3, 2] : [3, 2];
                            case 1:
                                t.sent(),
                                e = Q(),
                                t.label = 2;
                            case 2:
                                return K(e) || (U = e),
                                [2, e]
                            }
                            var n
                        }
                        ))
                    }
                    ))
                }
            }
            function Q() {
                var e = screen;
                return [A(C(e.availTop), null), A(C(e.width) - C(e.availWidth) - A(C(e.availLeft), 0), null), A(C(e.height) - C(e.availHeight) - A(C(e.availTop), 0), null), A(C(e.availLeft), null)]
            }
            function K(e) {
                for (var t = 0; t < 4; ++t)
                    if (e[t])
                        return !1;
                return !0
            }
            var H = {};
            function z(e) {
                var t;
                return s(this, void 0, void 0, (function() {
                    var n, r, o, a, i, s, l;
                    return c(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            for (n = document,
                            r = n.createElement("div"),
                            o = new Array(e.length),
                            a = {},
                            X(r),
                            l = 0; l < e.length; ++l)
                                i = _(e[l]),
                                X(s = n.createElement("div")),
                                s.appendChild(i),
                                r.appendChild(s),
                                o[l] = i;
                            c.label = 1;
                        case 1:
                            return n.body ? [3, 3] : [4, u(50)];
                        case 2:
                            return c.sent(),
                            [3, 1];
                        case 3:
                            n.body.appendChild(r);
                            try {
                                for (l = 0; l < e.length; ++l)
                                    o[l].offsetParent || (a[e[l]] = !0)
                            } finally {
                                null === (t = r.parentNode) || void 0 === t || t.removeChild(r)
                            }
                            return [2, a]
                        }
                    }
                    ))
                }
                ))
            }
            function X(e) {
                e.style.setProperty("display", "block", "important")
            }
            function G(e) {
                return matchMedia("(inverted-colors: " + e + ")").matches
            }
            function J(e) {
                return matchMedia("(forced-colors: " + e + ")").matches
            }
            function Y(e) {
                return matchMedia("(prefers-contrast: " + e + ")").matches
            }
            function Z(e) {
                return matchMedia("(prefers-reduced-motion: " + e + ")").matches
            }
            function ee(e) {
                return matchMedia("(dynamic-range: " + e + ")").matches
            }
            var te = Math
              , ne = function() {
                return 0
            }
              , re = {
                default: [],
                apple: [{
                    font: "-apple-system-body"
                }],
                serif: [{
                    fontFamily: "serif"
                }],
                sans: [{
                    fontFamily: "sans-serif"
                }],
                mono: [{
                    fontFamily: "monospace"
                }],
                min: [{
                    fontSize: "1px"
                }],
                system: [{
                    fontFamily: "system-ui"
                }]
            }
              , oe = {
                fonts: function() {
                    return M((function(e, t) {
                        var n = t.document
                          , r = n.body;
                        r.style.fontSize = "48px";
                        var o = n.createElement("div")
                          , a = {}
                          , i = {}
                          , s = function(e) {
                            var t = n.createElement("span")
                              , r = t.style;
                            return r.position = "absolute",
                            r.top = "0",
                            r.left = "0",
                            r.fontFamily = e,
                            t.textContent = "mmMwWLliI0O&1",
                            o.appendChild(t),
                            t
                        }
                          , c = B.map(s)
                          , l = function() {
                            for (var e = {}, t = function(t) {
                                e[t] = B.map((function(e) {
                                    return function(e, t) {
                                        return s("'" + e + "'," + t)
                                    }(t, e)
                                }
                                ))
                            }, n = 0, r = O; n < r.length; n++)
                                t(r[n]);
                            return e
                        }();
                        r.appendChild(o);
                        for (var u = 0; u < B.length; u++)
                            a[B[u]] = c[u].offsetWidth,
                            i[B[u]] = c[u].offsetHeight;
                        return O.filter((function(e) {
                            return t = l[e],
                            B.some((function(e, n) {
                                return t[n].offsetWidth !== a[e] || t[n].offsetHeight !== i[e]
                            }
                            ));
                            var t
                        }
                        ))
                    }
                    ))
                },
                domBlockers: function(e) {
                    var t = (void 0 === e ? {} : e).debug;
                    return s(this, void 0, void 0, (function() {
                        var e, n, r, o;
                        return c(this, (function(a) {
                            switch (a.label) {
                            case 0:
                                return R() || L() ? (e = Object.keys(H),
                                [4, z((o = []).concat.apply(o, e.map((function(e) {
                                    return H[e]
                                }
                                ))))]) : [2, void 0];
                            case 1:
                                return n = a.sent(),
                                t && function(e) {
                                    for (var t = 0, n = Object.keys(H); t < n.length; t++) {
                                        var r = n[t];
                                        0;
                                        for (var o = 0, a = H[r]; o < a.length; o++) {
                                            var i = a[o];
                                            "\n  " + i + " " + (e[i] ? "🚫" : "➡️")
                                        }
                                    }
                                }(n),
                                (r = e.filter((function(e) {
                                    var t = H[e];
                                    return E(t.map((function(e) {
                                        return n[e]
                                    }
                                    ))) > .6 * t.length
                                }
                                ))).sort(),
                                [2, r]
                            }
                        }
                        ))
                    }
                    ))
                },
                fontPreferences: function() {
                    return function(e, t) {
                        return void 0 === t && (t = 4e3),
                        M((function(e, n) {
                            var r = n.document
                              , o = r.body
                              , a = o.style;
                            a.width = t + "px",
                            a.webkitTextSizeAdjust = a.textSizeAdjust = "none",
                            S() ? o.style.zoom = "" + 1 / n.devicePixelRatio : R() && (o.style.zoom = "reset");
                            var i = r.createElement("div");
                            return i.textContent = l(Array(t / 20 | 0)).map((function() {
                                return "word"
                            }
                            )).join(" "),
                            o.appendChild(i),
                            function(e, t) {
                                for (var n = {}, r = {}, o = 0, a = Object.keys(re); o < a.length; o++) {
                                    var i = a[o]
                                      , s = re[i]
                                      , c = s[0]
                                      , l = void 0 === c ? {} : c
                                      , u = s[1]
                                      , d = void 0 === u ? "mmMwWLliI0fiflO&1" : u
                                      , f = e.createElement("span");
                                    f.textContent = d,
                                    f.style.whiteSpace = "nowrap";
                                    for (var m = 0, p = Object.keys(l); m < p.length; m++) {
                                        var v = p[m]
                                          , h = l[v];
                                        void 0 !== h && (f.style[v] = h)
                                    }
                                    n[i] = f,
                                    t.appendChild(e.createElement("br")),
                                    t.appendChild(f)
                                }
                                for (var g = 0, w = Object.keys(re); g < w.length; g++)
                                    r[i = w[g]] = n[i].getBoundingClientRect().width;
                                return r
                            }(r, o)
                        }
                        ), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
                    }()
                },
                audio: function() {
                    var e = window
                      , t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
                    if (!t)
                        return -2;
                    if (R() && !P() && !function() {
                        var e = window;
                        return E(["DOMRectList"in e, "RTCPeerConnectionIceEvent"in e, "SVGGeometryElement"in e, "ontransitioncancel"in e]) >= 3
                    }())
                        return -1;
                    var n = new t(1,5e3,44100)
                      , r = n.createOscillator();
                    r.type = "triangle",
                    r.frequency.value = 1e4;
                    var o = n.createDynamicsCompressor();
                    o.threshold.value = -50,
                    o.knee.value = 40,
                    o.ratio.value = 12,
                    o.attack.value = 0,
                    o.release.value = .25,
                    r.connect(o),
                    o.connect(n.destination),
                    r.start(0);
                    var a = function(e) {
                        var t = function() {};
                        return [new Promise((function(n, o) {
                            var a = !1
                              , i = 0
                              , s = 0;
                            e.oncomplete = function(e) {
                                return n(e.renderedBuffer)
                            }
                            ;
                            var c = function() {
                                setTimeout((function() {
                                    return o(N("timeout"))
                                }
                                ), Math.min(500, s + 5e3 - Date.now()))
                            }
                              , l = function() {
                                try {
                                    switch (e.startRendering(),
                                    e.state) {
                                    case "running":
                                        s = Date.now(),
                                        a && c();
                                        break;
                                    case "suspended":
                                        document.hidden || i++,
                                        a && i >= 3 ? o(N("suspended")) : setTimeout(l, 500)
                                    }
                                } catch (r) {
                                    o(r)
                                }
                            };
                            l(),
                            t = function() {
                                a || (a = !0,
                                s > 0 && c())
                            }
                        }
                        )), t]
                    }(n)
                      , i = a[0]
                      , s = a[1]
                      , c = i.then((function(e) {
                        return function(e) {
                            for (var t = 0, n = 0; n < e.length; ++n)
                                t += Math.abs(e[n]);
                            return t
                        }(e.getChannelData(0).subarray(4500))
                    }
                    ), (function(e) {
                        if ("timeout" === e.name || "suspended" === e.name)
                            return -3;
                        throw e
                    }
                    ));
                    return c.catch((function() {}
                    )),
                    function() {
                        return s(),
                        c
                    }
                },
                screenFrame: function() {
                    var e = this
                      , t = V();
                    return function() {
                        return s(e, void 0, void 0, (function() {
                            var e, n;
                            return c(this, (function(r) {
                                switch (r.label) {
                                case 0:
                                    return [4, t()];
                                case 1:
                                    return e = r.sent(),
                                    [2, [(n = function(e) {
                                        return null === e ? null : I(e, 10)
                                    }
                                    )(e[0]), n(e[1]), n(e[2]), n(e[3])]]
                                }
                            }
                            ))
                        }
                        ))
                    }
                },
                osCpu: function() {
                    return navigator.oscpu
                },
                languages: function() {
                    var e, t = navigator, n = [], r = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
                    if (void 0 !== r && n.push([r]),
                    Array.isArray(t.languages))
                        S() && E([!("MediaSettingsRange"in (e = window)), "RTCEncodedAudioFrame"in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || n.push(t.languages);
                    else if ("string" == typeof t.languages) {
                        var o = t.languages;
                        o && n.push(o.split(","))
                    }
                    return n
                },
                colorDepth: function() {
                    return window.screen.colorDepth
                },
                deviceMemory: function() {
                    return A(C(navigator.deviceMemory), void 0)
                },
                screenResolution: function() {
                    var e = screen
                      , t = function(e) {
                        return A(b(e), null)
                    }
                      , n = [t(e.width), t(e.height)];
                    return n.sort().reverse(),
                    n
                },
                hardwareConcurrency: function() {
                    return A(b(navigator.hardwareConcurrency), void 0)
                },
                timezone: function() {
                    var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
                    if (t) {
                        var n = (new t).resolvedOptions().timeZone;
                        if (n)
                            return n
                    }
                    var r, o = (r = (new Date).getFullYear(),
                    -Math.max(C(new Date(r,0,1).getTimezoneOffset()), C(new Date(r,6,1).getTimezoneOffset())));
                    return "UTC" + (o >= 0 ? "+" : "") + Math.abs(o)
                },
                sessionStorage: function() {
                    try {
                        return !!window.sessionStorage
                    } catch (i) {
                        return !0
                    }
                },
                localStorage: function() {
                    try {
                        return !!window.localStorage
                    } catch (i) {
                        return !0
                    }
                },
                indexedDB: function() {
                    if (!T() && !function() {
                        var e = window
                          , t = navigator;
                        return E(["msWriteProfilerMark"in e, "MSStream"in e, "msLaunchUri"in t, "msSaveBlob"in t]) >= 3 && !T()
                    }())
                        try {
                            return !!window.indexedDB
                        } catch (i) {
                            return !0
                        }
                },
                openDatabase: function() {
                    return !!window.openDatabase
                },
                cpuClass: function() {
                    return navigator.cpuClass
                },
                platform: function() {
                    var e = navigator.platform;
                    return "MacIntel" === e && R() && !P() ? function() {
                        if ("iPad" === navigator.platform)
                            return !0;
                        var e = screen
                          , t = e.width / e.height;
                        return E(["MediaSource"in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
                    }() ? "iPad" : "iPhone" : e
                },
                plugins: function() {
                    var e = navigator.plugins;
                    if (e) {
                        for (var t = [], n = 0; n < e.length; ++n) {
                            var r = e[n];
                            if (r) {
                                for (var o = [], a = 0; a < r.length; ++a) {
                                    var i = r[a];
                                    o.push({
                                        type: i.type,
                                        suffixes: i.suffixes
                                    })
                                }
                                t.push({
                                    name: r.name,
                                    description: r.description,
                                    mimeTypes: o
                                })
                            }
                        }
                        return t
                    }
                },
                canvas: function() {
                    var e = function() {
                        var e = document.createElement("canvas");
                        return e.width = 1,
                        e.height = 1,
                        [e, e.getContext("2d")]
                    }()
                      , t = e[0]
                      , n = e[1];
                    return function(e, t) {
                        return !(!t || !e.toDataURL)
                    }(t, n) ? {
                        winding: F(n),
                        geometry: j(t, n),
                        text: W(t, n)
                    } : {
                        winding: !1,
                        geometry: "",
                        text: ""
                    }
                },
                touchSupport: function() {
                    var e, t = navigator, n = 0;
                    void 0 !== t.maxTouchPoints ? n = b(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (n = t.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"),
                        e = !0
                    } catch (l) {
                        e = !1
                    }
                    return {
                        maxTouchPoints: n,
                        touchEvent: e,
                        touchStart: "ontouchstart"in window
                    }
                },
                vendor: function() {
                    return navigator.vendor || ""
                },
                vendorFlavors: function() {
                    for (var e = [], t = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < n.length; t++) {
                        var r = n[t]
                          , o = window[r];
                        o && "object" == typeof o && e.push(r)
                    }
                    return e.sort()
                },
                cookiesEnabled: function() {
                    var e = document;
                    try {
                        e.cookie = "cookietest=1; SameSite=Strict;";
                        var t = -1 !== e.cookie.indexOf("cookietest=");
                        return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",
                        t
                    } catch (c) {
                        return !1
                    }
                },
                colorGamut: function() {
                    for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
                        var n = t[e];
                        if (matchMedia("(color-gamut: " + n + ")").matches)
                            return n
                    }
                },
                invertedColors: function() {
                    return !!G("inverted") || !G("none") && void 0
                },
                forcedColors: function() {
                    return !!J("active") || !J("none") && void 0
                },
                monochrome: function() {
                    if (matchMedia("(min-monochrome: 0)").matches) {
                        for (var e = 0; e <= 100; ++e)
                            if (matchMedia("(max-monochrome: " + e + ")").matches)
                                return e;
                        throw new Error("Too high value")
                    }
                },
                contrast: function() {
                    return Y("no-preference") ? 0 : Y("high") || Y("more") ? 1 : Y("low") || Y("less") ? -1 : Y("forced") ? 10 : void 0
                },
                reducedMotion: function() {
                    return !!Z("reduce") || !Z("no-preference") && void 0
                },
                hdr: function() {
                    return !!ee("high") || !ee("standard") && void 0
                },
                math: function() {
                    var e, t = te.acos || ne, n = te.acosh || ne, r = te.asin || ne, o = te.asinh || ne, a = te.atanh || ne, i = te.atan || ne, s = te.sin || ne, c = te.sinh || ne, l = te.cos || ne, u = te.cosh || ne, d = te.tan || ne, f = te.tanh || ne, m = te.exp || ne, p = te.expm1 || ne, v = te.log1p || ne;
                    return {
                        acos: t(.12312423423423424),
                        acosh: n(1e308),
                        acoshPf: (e = 1e154,
                        te.log(e + te.sqrt(e * e - 1))),
                        asin: r(.12312423423423424),
                        asinh: o(1),
                        asinhPf: te.log(1 + te.sqrt(2)),
                        atanh: a(.5),
                        atanhPf: te.log(3) / 2,
                        atan: i(.5),
                        sin: s(-1e300),
                        sinh: c(1),
                        sinhPf: te.exp(1) - 1 / te.exp(1) / 2,
                        cos: l(10.000000000123),
                        cosh: u(1),
                        coshPf: (te.exp(1) + 1 / te.exp(1)) / 2,
                        tan: d(-1e300),
                        tanh: f(1),
                        tanhPf: (te.exp(2) - 1) / (te.exp(2) + 1),
                        exp: m(1),
                        expm1: p(1),
                        expm1Pf: te.exp(1) - 1,
                        log1p: v(10),
                        log1pPf: te.log(11),
                        powPI: te.pow(te.PI, -100)
                    }
                }
            };
            function ae(e) {
                var t = function(e) {
                    if (L())
                        return .4;
                    if (R())
                        return P() ? .5 : .3;
                    var t = e.platform.value || "";
                    return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
                }(e)
                  , n = function(e) {
                    return I(.99 + .01 * e, 1e-4)
                }(t);
                return {
                    score: t,
                    comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "" + n)
                }
            }
            function ie(e) {
                return y(function(e) {
                    for (var t = "", n = 0, r = Object.keys(e).sort(); n < r.length; n++) {
                        var o = r[n]
                          , a = e[o]
                          , i = a.error ? "error" : JSON.stringify(a.value);
                        t += (t ? "|" : "") + o.replace(/([:|\\])/g, "\\$1") + ":" + i
                    }
                    return t
                }(e))
            }
            function se(e) {
                return void 0 === e && (e = 50),
                function(e, t) {
                    void 0 === t && (t = 1 / 0);
                    var n = window.requestIdleCallback;
                    return n ? new Promise((function(e) {
                        return n.call(window, (function() {
                            return e()
                        }
                        ), {
                            timeout: t
                        })
                    }
                    )) : u(Math.min(e, t))
                }(e, 2 * e)
            }
            function ce(e, t) {
                Date.now();
                return {
                    get: function(n) {
                        return s(this, void 0, void 0, (function() {
                            var r, o;
                            return c(this, (function(a) {
                                switch (a.label) {
                                case 0:
                                    return Date.now(),
                                    [4, e()];
                                case 1:
                                    return r = a.sent(),
                                    o = function(e) {
                                        var t;
                                        return {
                                            get visitorId() {
                                                return void 0 === t && (t = ie(this.components)),
                                                t
                                            },
                                            set visitorId(e) {
                                                t = e
                                            },
                                            confidence: ae(e),
                                            components: e,
                                            version: "3.3.3"
                                        }
                                    }(r),
                                    t || (null == n || n.debug),
                                    [2, o]
                                }
                            }
                            ))
                        }
                        ))
                    }
                }
            }
            var le = {
                load: function(e) {
                    var t = void 0 === e ? {} : e
                      , n = t.delayFallback
                      , r = t.debug;
                    return t.monitoring,
                    s(this, void 0, void 0, (function() {
                        return c(this, (function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, se(n)];
                            case 1:
                                return e.sent(),
                                [2, ce(x(oe, {
                                    debug: r
                                }, []), r)]
                            }
                        }
                        ))
                    }
                    ))
                },
                hashComponents: ie,
                componentsToDebugString: function(e) {
                    return JSON.stringify(e, (function(e, t) {
                        return t instanceof Error ? i({
                            name: (n = t).name,
                            message: n.message,
                            stack: null === (r = n.stack) || void 0 === r ? void 0 : r.split("\n")
                        }, n) : t;
                        var n, r
                    }
                    ), 2)
                }
            }
              , ue = n(8527)
              , de = n(5946)
              , fe = n(1224);
            n(3941);
            const me = (e, t, n) => {
                e = t.serial ? e.replace(/[!！；;，,.。]*$/, "") : e;
                let r = n ? "<br/>" : "，";
                return e += t.serial ? `${r}PN: ${t.serial}` : ""
            }
            ;
            var pe = {
                appendSerial: (e, t=!1) => {
                    let n = e.reason || e.advise || "很抱歉,服务打了个盹,请稍后再试";
                    return e.showTrace ? me(n, e, t) : n
                }
                ,
                initAccessToken: async () => {
                    if (!window || window.localStorage.getItem("accessToken") || window.CtcloudLayoutV2)
                        return !0;
                    if (window.CtcloudLayoutV2) {
                        const e = await window.CtcloudLayoutV2.getPublicInfo().authCurrentPromise;
                        return e?.property?.accessToken && window.localStorage.setItem("accessToken", e?.property?.accessToken),
                        !0
                    }
                }
            }
              , ve = n(1580)
              , he = n(1081)
              , ge = Uint8Array
              , we = Uint32Array
              , ye = Math.pow
              , be = new we(8)
              , Ce = []
              , Ae = new we(64);
            function Ee(e) {
                return (e - (0 | e)) * ye(2, 32) | 0
            }
            for (var Ie = 2, ke = 0; ke < 64; ) {
                for (var xe = !0, Te = 2; Te <= Ie / 2; Te++)
                    Ie % Te == 0 && (xe = !1);
                xe && (ke < 8 && (be[ke] = Ee(ye(Ie, .5))),
                Ce[ke] = Ee(ye(Ie, 1 / 3)),
                ke++),
                Ie++
            }
            var Se = !!new ge(new we([1]).buffer)[0];
            function Re(e) {
                return Se ? e >>> 24 | (e >>> 16 & 255) << 8 | (65280 & e) << 8 | e << 24 : e
            }
            function Pe(e, t) {
                return e >>> t | e << 32 - t
            }
            function Le(e) {
                var t, n = be.slice(), r = e.length, o = 8 * r, a = 512 - (o + 64) % 512 - 1 + o + 65, i = new ge(a / 8), s = new we(i.buffer);
                i.set(e, 0),
                i[r] = 128,
                s[s.length - 1] = Re(o);
                for (var c = 0; c < a / 32; c += 16) {
                    var l = n.slice();
                    for (t = 0; t < 64; t++) {
                        var u;
                        if (t < 16)
                            u = Re(s[c + t]);
                        else {
                            var d = Ae[t - 15]
                              , f = Ae[t - 2];
                            u = Ae[t - 7] + Ae[t - 16] + (Pe(d, 7) ^ Pe(d, 18) ^ d >>> 3) + (Pe(f, 17) ^ Pe(f, 19) ^ f >>> 10)
                        }
                        Ae[t] = u |= 0;
                        for (var m = (Pe(l[4], 6) ^ Pe(l[4], 11) ^ Pe(l[4], 25)) + (l[4] & l[5] ^ ~l[4] & l[6]) + l[7] + u + Ce[t], p = (Pe(l[0], 2) ^ Pe(l[0], 13) ^ Pe(l[0], 22)) + (l[0] & l[1] ^ l[2] & (l[0] ^ l[1])), v = 7; v > 0; v--)
                            l[v] = l[v - 1];
                        l[0] = m + p | 0,
                        l[4] = l[4] + m | 0
                    }
                    for (t = 0; t < 8; t++)
                        n[t] = n[t] + l[t] | 0
                }
                return new ge(new we(n.map((function(e) {
                    return Re(e)
                }
                ))).buffer)
            }
            const Ne = new TextEncoder("utf-8");
            var Me = {
                sign: function(e, t) {
                    return function(e, t) {
                        if (e.length > 64 && (e = Le(e)),
                        e.length < 64) {
                            const t = new Uint8Array(64);
                            t.set(e, 0),
                            e = t
                        }
                        for (var n = new Uint8Array(64), r = new Uint8Array(64), o = 0; o < 64; o++)
                            n[o] = 54 ^ e[o],
                            r[o] = 92 ^ e[o];
                        var a = new Uint8Array(t.length + 64);
                        a.set(n, 0),
                        a.set(t, 64);
                        var i = new Uint8Array(96);
                        return i.set(r, 0),
                        i.set(Le(a), 64),
                        Le(i)
                    }("string" == typeof e ? Ne.encode(e) : e, "string" == typeof t ? Ne.encode(t) : t)
                },
                hex: function(e) {
                    return e.reduce(( (e, t) => e + ("00" + t.toString(16)).substr(-2)), "")
                }
            };
            const _e = e => {
                const t = function(e) {
                    const t = (new Date).getTimezoneOffset()
                      , n = (new Date).getTime();
                    return new Date(n + 60 * t * 1e3 + 60 * e * 60 * 1e3).getTime()
                }(8);
                let n = ( (e, t) => {
                    const n = new RegExp("(^| )" + e + "(?:=([^;]*))?(;|$)")
                      , r = (t = t || "object" == typeof document && document.cookie || "").match(n);
                    return r && r[2] ? unescape(r[2]) : ""
                }
                )("ct_ss")
                  , r = "";
                if (!n)
                    throw new Error("identityId is empty");
                if (!e)
                    return;
                if ("?" === e.charAt(e.length - 1)) {
                    const n = /\/([^\\/?]+)(?=\?|$)/
                      , o = e.match(n);
                    if (!(o && o.length > 1))
                        return {
                            sign: "errorUrl",
                            time: t
                        };
                    r = o[1]
                } else {
                    const n = /\/([^\\/?]+)(\?.*)?$/s
                      , o = e.match(n);
                    if (!(o && o.length > 1))
                        return {
                            sign: "errorUrl",
                            time: t
                        };
                    r = o[1] + (o[2] ? o[2] : "")
                }
                r = decodeURIComponent(r).trim();
                let o = `${r}:${t}:${n}`;
                return {
                    sign: Me.hex(Me.sign(n, o)),
                    time: t,
                    message: o
                }
            }
            ;
            const $e = ({errorCallback: e, useRisk: t}={}) => {
                window._useHttpConfig = window._useHttpConfig || {},
                window._useHttpConfig.useRisk = t || {},
                window._useHttpConfig.errorCallback = t => {
                    t ? e && e(t) : console.error(t)
                }
                ,
                $e.errorCallback = window._useHttpConfig.errorCallback
            }
            ;
            var Ue = {
                create: () => {
                    const e = e => {
                        e && window?._useHttpConfig?.errorCallback(e)
                    }
                      , t = "core.ok"
                      , n = "core.e1019"
                      , s = (0,
                    a.Hyi)({
                        baseUrl: "",
                        timeout: 0
                    })
                      , c = {};
                    let l = 0;
                    const u = (a, d, f, ...m) => {
                        const p = (0,
                        r.EW)(( () => {
                            const e = (0,
                            o.R1)(a)
                              , t = (0,
                            o.R1)(d) || {}
                              , n = ue.Ay.isObject(e)
                              , r = n ? (0,
                            o.R1)(e.url) : e
                              , i = ve.parseUrl(r)
                              , s = i.url
                              , c = {
                                ...i.query,
                                ...n && (0,
                                o.R1)(e.query) || {},
                                ...(0,
                                o.R1)(t.query) || {}
                            }
                              , l = {
                                ...i,
                                url: s,
                                query: c
                            };
                            return ve.stringifyUrl(l)
                        }
                        ))
                          , v = (0,
                        r.EW)(( () => {
                            const e = (0,
                            o.R1)(d) || {};
                            if (ue.Ay.isObject(e)) {
                                const t = (0,
                                o.R1)(a)
                                  , n = {
                                    ...ue.Ay.isObject(t) ? t : {},
                                    ...e
                                };
                                return delete n.url,
                                delete n.query,
                                n
                            }
                            return e
                        }
                        ))
                          , h = (0,
                        r.EW)(( () => v.value.fetchCache))
                          , g = (0,
                        r.EW)(( () => v.value.fetchCacheMode))
                          , w = (0,
                        r.EW)(( () => v.value.fetchCacheKey || p.value))
                          , y = {
                            originData: (0,
                            o.KR)(void 0),
                            serial: (0,
                            o.KR)(void 0)
                        }
                          , b = (0,
                        o.KR)(null)
                          , C = (0,
                        r.EW)(( () => ({
                            ...(0,
                            o.R1)(v),
                            ...(0,
                            o.R1)(f) || {},
                            async beforeFetch(e) {
                                const t = he.A.get("ct_m_dvc_id") || await ( () => {
                                    const e = window.sessionStorage.getItem("x-riskdevicesign");
                                    return e ? Promise.resolve(e) : le.load().then((e => e.get())).then((e => {
                                        const t = e.visitorId;
                                        return window.sessionStorage.setItem("x-riskdevicesign", t),
                                        t
                                    }
                                    ))
                                }
                                )()
                                  , n = window.localStorage.getItem("accessToken")
                                  , r = v.value?.body || e.options?.body || void 0
                                  , a = v.value?.objectBody || e.options?.objectBody || void 0
                                  , i = he.A.get("ct_d_pid") || "";
                                e.options = {
                                    ...e.options,
                                    headers: {
                                        ...e.options?.headers || {},
                                        ...v.value?.headers || {},
                                        "x-riskdevicesign": t,
                                        "x-ctyun-accesstoken": n
                                    },
                                    method: v.value?.method || e.options?.method || "get",
                                    body: r
                                },
                                i && (e.options.headers["X-Pin-Id"] = i);
                                const s = (0,
                                o.R1)(v)?.beforeFetch || (0,
                                o.R1)(f)?.beforeFetch;
                                try {
                                    const t = p.value
                                      , n = {
                                        ...v.value,
                                        ...e.options
                                    };
                                    if (r && e.options.headers["Content-Type"]) {
                                        const t = e.options.headers["Content-Type"].toUpperCase().includes("JSON");
                                        n.params = t ? JSON.parse(a || r) : de.Ay.getUrlParamsObject(r)
                                    }
                                    try {
                                        const n = _e(t);
                                        e.options.headers.Csm = n.sign,
                                        e.options.headers.Cst = n.time,
                                        location.host.includes("www.ctyun.cn") || (e.options.headers.Csmessage = encodeURIComponent(n.message))
                                    } catch (c) {}
                                    l++,
                                    n.seq = l,
                                    window.CtcloudTrack && CtcloudTrack.beforeRequest({
                                        ...n,
                                        url: t
                                    })
                                } catch (c) {
                                    console.error("monitor cgi error", c)
                                }
                                return s && s(e) || e
                            },
                            async afterFetch(r) {
                                let s = r;
                                try {
                                    "[object String]" === Object.prototype.toString.call(r.data) && (r.data = JSON.parse(r.data))
                                } catch (g) {}
                                const c = p.value
                                  , l = "true" === r.response.headers.get("Trace-Id-Show");
                                if (window.CtcloudTrack) {
                                    const e = r.response.headers.get("X-Trace-Id");
                                    CtcloudTrack.requestSuccess({
                                        url: c,
                                        response: {
                                            serial: e,
                                            ...r.response,
                                            data: {
                                                ...r.data
                                            },
                                            headers: r.response.headers
                                        },
                                        httpSuccess: !0
                                    })
                                }
                                if ("[object Object]" === Object.prototype.toString.call(r.data)) {
                                    const o = r.data;
                                    if (o.code === n)
                                        fe.Ay.gotoLogin();
                                    else if (o.code !== t) {
                                        const t = pe.appendSerial({
                                            reason: o.reason,
                                            serial: o.serial,
                                            advise: o.advise,
                                            showTrace: l
                                        });
                                        if (r.data = o,
                                        o._errTips = t,
                                        v.value?.ignoreErrTips ? console.warn(o._errTips) : e(o._errTips),
                                        o.code.includes("core.r")) {
                                            const e = {
                                                url: a,
                                                opt: d,
                                                useFetchOptions: f,
                                                ...m
                                            };
                                            try {
                                                await ( (e={}) => window?._useHttpConfig?.useRisk(e))({
                                                    code: o.code,
                                                    params: e
                                                });
                                                try {
                                                    o.__recursionResolveRst = await u(a, d, f, ...m)
                                                } catch (i) {
                                                    o.__recursionRejectRst = i
                                                }
                                            } catch (i) {
                                                i ? o._errTips = i : o.__forceInterrupt = !0
                                            }
                                        }
                                        s = r
                                    } else
                                        y.originData.value = r.data,
                                        y.serial.value = r.data?.serial,
                                        r.data = o.data || o.returnObj || o,
                                        s = r
                                }
                                const h = (0,
                                o.R1)(v)?.afterFetch || (0,
                                o.R1)(f)?.afterFetch;
                                return h && h(s) || s
                            },
                            onFetchError(t) {
                                if (window.CtcloudTrack && CtcloudTrack.requestError({
                                    url: p.value,
                                    error: t.error,
                                    httpSuccess: !1,
                                    response: {
                                        status: 404
                                    }
                                }),
                                t.error) {
                                    const n = t.error?.name;
                                    t.error = {
                                        ...t.error,
                                        _errTips: t.error.message ? `请求错误：${t.error.message}` : "请求错误",
                                        reason: t.error.message
                                    },
                                    "AbortError" !== n ? e(t.error._errTips) : console.warn(t.error._errTips)
                                }
                                const n = (0,
                                o.R1)(v)?.onFetchError || (0,
                                o.R1)(f)?.onFetchError;
                                return n && n(t) || t
                            }
                        })));
                        if (( () => {
                            const e = window.location.href;
                            if (!e)
                                return !1;
                            for (let t in c)
                                c[t] && c[t].route && c[t].route.fetchCacheRoute !== e && delete c[t].route
                        }
                        )(),
                        h.value) {
                            const e = ( (e, t="session") => c[e] && c[e][t] ? c[e][t] : null)(w.value, g.value);
                            if (e)
                                return e
                        }
                        const A = s(p, (0,
                        o.R1)(v), (0,
                        o.R1)(C), ...m);
                        b.value = A;
                        const E = A.then;
                        A.then = (e, t) => {
                            const n = (...e) => t ? t(...e) : Promise.reject(...e)
                              , r = (...t) => e ? e(...t) : Promise.resolve(...t);
                            return E((e => {
                                const t = e.data.value
                                  , o = t?._errTips
                                  , a = e.error.value;
                                return t?.__recursionResolveRst ? r(t?.__recursionResolveRst) : t?.__recursionRejectRst ? n(t?.__recursionRejectRst) : t && o ? n(t) : a ? n(e.error.value) : t?.__forceInterrupt ? n() : r({
                                    ...e,
                                    ...y
                                })
                            }
                            ), (e => n({
                                ...e,
                                ...y
                            })))
                        }
                        ;
                        const I = A.execute;
                        return A.execute = async (...e) => {
                            I(...e),
                            await A.then()
                        }
                        ,
                        h.value && ( (e, t, n="session") => {
                            if ("route" === n) {
                                const e = window.location.href;
                                if (!e)
                                    return !1;
                                t.fetchCacheRoute = e
                            }
                            c[e] = c[e] || {},
                            c[e][n] = t
                        }
                        )(p.value, A, g.value),
                        {
                            ...A,
                            ...y
                        }
                    }
                    ;
                    return u.CODE_OK = t,
                    u.CODE_UNLOGIN = n,
                    u.helper = pe,
                    u
                }
                ,
                helper: pe,
                config: $e
            }
        },
        1224: function(e, t, n) {
            "use strict";
            function r(e) {
                window.location.replace(e)
            }
            function o() {
                r(`/sign/in?returnUrl=${encodeURIComponent(window.location.href)}`)
            }
            t.Ay = {
                gotoLogin: o,
                locationReplace: r,
                gotoLoginIfNotLogin: function(e={
                    login: []
                }) {
                    if (!window || !window.CtcloudLayoutV2)
                        return !1;
                    window.CtcloudLayoutV2.getPublicInfo().authCurrentPromise.then((t => {
                        if (!t.isLoggedIn && !e.login.some((e => RegExp(e).test(location.pathname))))
                            throw o(),
                            new Error("账号未登录")
                    }
                    ))
                }
            }
        },
        8671: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ts: function() {
                    return x
                },
                do: function() {
                    return f
                }
            });
            var r = n(3324)
              , o = n(1081);
            const a = ["发送频率太快啦", "实名证件号关联的账号超过数量限制"];
            let i = ""
              , s = ""
              , c = window.location.href.includes("console") ? "PC" : "APP"
              , l = {
                PC: {
                    "realname.enterprise.bank": {
                        id: "100",
                        name: "企业-对公打款",
                        startUrl: ["/gw/user/realname/company/PublicPayment"],
                        endUrl: ["/gw/user/realname/company/PublicPaymentCheck"]
                    },
                    "realname.enterprise.license": {
                        id: "101",
                        name: "企业-证件认证",
                        startUrl: ["/v2/bcc/realNameAuth/extractBusiLicense"],
                        endUrl: ["/v2/bcc/realNameAuth/faceToAuthCmp", "/v2/bcc/realNameAuthQr/faceToAuthCmpQrCode"]
                    },
                    "realname.personal.certificate": {
                        id: "112",
                        name: "个人-非身份证认证",
                        startUrl: ["/gw/beian/Upload"],
                        endUrl: ["/gw/user/realname/personal/Submit"]
                    },
                    "realname.personal.phone": {
                        id: "113",
                        name: "个人-手机号认证",
                        startUrl: ["/gw/self/SendMobileCodeBySlideVerify"],
                        endUrl: ["/v2/bcc/realNameAuth/faceToAuthPhone", "/v2/bcc/realNameAuthQr/faceToAuthPhoneQrCode"]
                    },
                    "realname.personal.bank": {
                        id: "110",
                        name: "个人-银行卡认证",
                        startUrl: ["/gw/user/realname/personal/bankCardAuth/SendSmsVerificationCode"],
                        endUrl: ["/v2/bcc/realNameAuth/faceToAuthBankCard", "/v2/bcc/realNameAuthQr/faceToAuthBankCardQrCode"]
                    }
                },
                APP: {
                    "realname.enterprise.bank": {
                        id: "100",
                        name: "企业-对公打款",
                        startUrl: ["/gw/user/realname/company/PublicPayment"],
                        endUrl: ["/gw/user/realname/company/PublicPaymentCheck"]
                    },
                    "realname.enterprise.license": {
                        id: "101",
                        name: "企业-证件认证",
                        startUrl: ["/v2/bcc/realNameAuth/extractBusiLicense"],
                        endUrl: ["/v2/bcc/realNameAuth/faceToAuthCmp", "/v2/bcc/realNameAuthQr/faceToAuthCmpQrCode"]
                    },
                    "realname.personal.idCard": {
                        id: "112",
                        name: "个人-身份证认证",
                        startUrl: ["/v2/bcc/realNameAuth/extractNameAndIDNo", "/v2/bcc/realNameAuthQr/extractNameAndIDNo"],
                        endUrl: ["/v2/bcc/realNameAuth/faceToAuth", "/v2/bcc/realNameAuthQr/faceToAuthQrCode"]
                    },
                    "realname.personal.bank": {
                        id: "110",
                        name: "个人-银行卡认证",
                        startUrl: ["/gw/user/realname/personal/bankCardAuth/SendSmsVerificationCode"],
                        endUrl: ["/v2/bcc/realNameAuth/faceToAuthBankCard", "/v2/bcc/realNameAuthQr/faceToAuthBankCardQrCode"]
                    },
                    "realname.personal.phone": {
                        id: "113",
                        name: "个人-手机号认证",
                        startUrl: ["/gw/self/SendMobileCodeBySlideVerify"],
                        endUrl: ["/v2/bcc/realNameAuth/faceToAuthPhone"]
                    }
                }
            }[c]
              , u = {
                id: "",
                startUrl: "",
                endUrl: "",
                businessId: "",
                flowId: "",
                flowText: "",
                bStartTime: "",
                bStatus: ""
            };
            const d = e => e?.includes("core.e") && e <= "core.e1700" ? "系统原因" : "客户原因"
              , f = e => {
                s = (0,
                r.EW)(( () => e?.value))
            }
              , m = async () => {
                let e = ""
                  , t = window.localStorage.getItem("userId") || s.value || o.A.get("ct_user");
                if (t || window.localStorage.setItem("userId", s.value),
                u.flowId?.includes("realname.enterprise.bank")) {
                    let n = i.value ? 0 == i.value ? 0 : 2 : 0;
                    e = u.id + (t || s.value) + n
                } else
                    e = u.id + (t || s.value) + u.bStartTime;
                return u.businessId = e,
                e
            }
              , p = e => {
                if (!e)
                    return "";
                for (let t = 0; t < a.length; t++) {
                    const n = a[t];
                    if (e.includes(n))
                        return n
                }
                return e
            }
              , v = e => {
                "" != e.businessId && CtcloudTrack.sendEvent("performance.business", [e], {
                    reprotURL: "/collection/gw/performance/realNameInfo"
                })
            }
              , h = e => {
                if (u.hasOwnProperty("businessId") && "" != u.businessId)
                    return !0;
                let t = window.localStorage.getItem("businessCache");
                return null !== t && (t = JSON.parse(t),
                t.flowId == e || "realname.result" == e || "realname.faceRecog.result" == e) && (u = t,
                !0)
            }
              , g = (e={}) => {
                for (const t in l)
                    if (e.routeName == t) {
                        const n = l[t];
                        let r = e.url.indexOf("?")
                          , o = e.url;
                        return r > 0 && (o = o.substring(0, r)),
                        !!n.startUrl.includes(o) && (u.id = n.id,
                        u.startUrl = n.startUrl,
                        u.endUrl = n.endUrl,
                        u.flowText = n.name,
                        u.flowId = e.routeName,
                        u.bStartTime = e.time,
                        !0)
                    }
                return !1
            }
              , w = (e, t) => !e?.includes(u.startUrl) && !e?.includes(u.endUrl) && !t
              , y = e => {
                let t = e?.indexOf("?")
                  , n = e;
                return t > 0 && (n = n.substring(0, t)),
                !!u.endUrl.includes(n)
            }
              , b = (e={}) => {
                A(e)
            }
              , C = (e={}) => {
                A(e)
            }
              , A = e => {
                const t = e.response && e.response.data || {}
                  , n = CtcloudTrack.tool.performanceLoggerUtils.getCgiInfo(e.url);
                if (!n.routeName?.includes("realname"))
                    return void E();
                if ("core.e1019" == t.code)
                    return;
                const r = "core.ok" == t.code && 1 == e.httpSuccess
                  , o = e.httpSuccess ? "core.ok" == t.code ? "" : t.reason : "请求失败";
                (async (e={}) => {
                    const {routeName: t, url: n, success: r, time: o, reason: a, reasonType: i, log: s, code: l} = e;
                    if ("realname.list" != t && "realname.enterprise" != t && "realname.personal" != t && "realname.result" != t) {
                        if (!g(e)) {
                            if (h(t)) {
                                if (w(n, r, t)) {
                                    const e = {
                                        ...u,
                                        terminal: u.terminal || c,
                                        bEndTime: o,
                                        bStatus: "fail",
                                        reason: a,
                                        reasonType: i || d(l),
                                        log: s
                                    };
                                    return void v(e)
                                }
                                if (y(n)) {
                                    const e = {
                                        ...u,
                                        terminal: u.terminal || c,
                                        bEndTime: o,
                                        bStatus: r ? "success" : "fail",
                                        reason: r ? "" : a || "实名认证失败",
                                        reasonType: r ? "" : i || d(l),
                                        log: s
                                    };
                                    return v(e),
                                    void (r && I())
                                }
                            }
                            if ("realname.enterprise.bank" == t && w(n, r)) {
                                u.id = "100",
                                u.flowText = "企业-对公打款",
                                u.flowId = t,
                                await m();
                                const e = {
                                    ...u,
                                    terminal: c,
                                    bEndTime: o,
                                    bStatus: "fail",
                                    reason: a,
                                    reasonType: i || d(l),
                                    log: s
                                };
                                return v(e),
                                u
                            }
                            return u
                        }
                        {
                            if ("process" !== u.bStatus) {
                                await m();
                                let e = JSON.stringify(u);
                                window.localStorage.removeItem("businessCache"),
                                window.localStorage.setItem("businessCache", e)
                            }
                            u.bStatus = "process";
                            const e = {
                                ...u,
                                terminal: c,
                                bStatus: r ? "process" : "fail",
                                bEndTime: r ? "" : o,
                                reason: r ? "" : a,
                                reasonType: r ? "" : i || d(l),
                                log: s
                            };
                            v(e)
                        }
                    } else
                        I()
                }
                )({
                    url: e.url,
                    routeName: n.routeName,
                    success: r,
                    time: Date.now(),
                    reason: p(o),
                    reasonType: e.httpSuccess ? "" : "其他原因",
                    code: t.code,
                    log: JSON.stringify(e)
                })
            }
              , E = () => {
                window.localStorage.removeItem("businessCache"),
                window.localStorage.removeItem("businessId"),
                window.localStorage.removeItem("bStartTime"),
                window.localStorage.removeItem("userId")
            }
              , I = () => {
                window.localStorage.removeItem("businessCache"),
                window.localStorage.removeItem("businessId"),
                window.localStorage.removeItem("bStartTime"),
                u = {}
            }
            ;
            let k = !1;
            const x = async () => {
                if (!k) {
                    // if (!window.CtcloudTrack || !CtcloudTrack.tool)
                    //     throw new Error("CtcloudTrack is not defined");
                    // CtcloudTrack.tool.performanceLoggerObservers.addCgi("afterSuccess", b),
                    // CtcloudTrack.tool.performanceLoggerObservers.addCgi("afterError", C),
                    // k = !0
                }
            }
        },
        6176: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return q
                }
            });
            var r = n(6065)
              , o = n(3135)
              , a = n(1727)
              , i = n(8665)
              , s = n(6217)
              , c = n(3291)
              , l = n(3324)
              , u = n(882);
            var d = {
                __name: "CtycQr",
                props: {
                    text: {
                        type: String
                    },
                    opt: {
                        type: Object
                    },
                    awesomeQr: {
                        type: String
                    }
                },
                emits: ["change", "error"],
                setup(e, {emit: t}) {
                    const n = t;
                    return (t, r) => ((0,
                    l.uX)(),
                    (0,
                    l.Wv)(u.A, {
                        text: e.text,
                        opt: e.opt,
                        awesomeQr: e.awesomeQr,
                        onChange: r[0] || (r[0] = e => n("change")),
                        onError: r[1] || (r[1] = e => n("error"))
                    }, null, 8, ["text", "opt", "awesomeQr"]))
                }
            }
              , f = n(926)
              , m = n(5236)
              , p = n(2631)
              , v = n(9141)
              , h = n.p + "img/appmodal.19d13cd9.png"
              , g = n(8671);
            const w = (0,
            f.nY)("authCurrent", ( () => {
                const e = (0,
                m.KR)({})
                  , t = (0,
                l.EW)(( () => !!e.value?.isLoggedIn))
                  , n = (0,
                l.EW)(( () => "authzed" === e.value?.property?.realname))
                  , r = (0,
                l.EW)(( () => "1" === e.value?.property?.isPostpaid))
                  , o = (0,
                l.EW)(( () => "1" === e.value?.property?.isPostpaid && "1" === e.value?.property?.channel))
                  , a = (0,
                l.EW)(( () => "enterprise" === e.value?.property?.userType))
                  , i = (0,
                l.EW)(( () => e.value?.property?.ctyunRootUserId !== e.value?.property?.ctyunUserId))
                  , s = (0,
                l.EW)(( () => e.value?.property?.ctyunRootUserId === e.value?.property?.ctyunUserId))
                  , c = (0,
                l.EW)(( () => 1 * e.value?.property?.channel == 2 && 1 * e.value?.property?.saleChannel == 2))
                  , u = (0,
                l.EW)(( () => 1 * e.value?.property?.channel == 1 && 1 * e.value?.property?.saleChannel == 2 && [1, 3].includes(1 * e.value?.property?.registerEntrance)))
                  , d = (0,
                l.EW)(( () => 1 * e.value?.property?.channel == 10 && 1 * e.value?.property?.saleChannel == 2))
                  , f = (0,
                l.EW)(( () => 1 * e.value?.property?.channel == 10))
                  , p = (0,
                l.EW)(( () => 1 * e.value?.property?.saleChannel == 2))
                  , v = (0,
                l.EW)(( () => 1 * e.value?.property?.channel == 1))
                  , h = (0,
                l.EW)(( () => 1 * e.value?.property?.channel == 2));
                let w = Promise.resolve();
                const y = () => (w = window.CtcloudLayoutV2.getPublicInfo().authCurrentPromise.then((t => (e.value = JSON.parse(JSON.stringify(t)),
                t))),
                w);
                y();
                const b = (0,
                l.EW)(( () => "1" === e.value?.property?.invalidStatus))
                  , C = (0,
                l.EW)(( () => "2" === e.value?.property?.invalidStatus))
                  , A = (0,
                l.EW)(( () => !window.location.href.includes("cancel=0") && ("1" === e.value?.property?.invalidStatus || "2" === e.value?.property?.invalidStatus)))
                  , E = (0,
                l.EW)(( () => e.value?.property?.ctyunAcctId))
                  , I = (0,
                l.EW)(( () => e.value?.property?.loginId))
                  , k = (0,
                l.EW)(( () => e.value?.property?.ctyunUserId))
                  , x = (0,
                l.EW)(( () => e.value?.property?.ctyunRootUserId))
                  , T = (0,
                l.EW)(( () => e.value?.property?.userId));
                (0,
                g.do)(T);
                const S = (0,
                l.EW)(( () => e.value?.property?.mobile))
                  , R = (0,
                l.EW)(( () => e.value?.property?.userMobilePhone))
                  , P = (0,
                l.EW)(( () => "10001" === e.value?.property?.isFederation || "CUS_136_01_0001" === e.value?.property?.isVirtualAccount))
                  , L = (0,
                l.EW)(( () => e.value?.property?.email))
                  , N = (0,
                l.EW)(( () => e.value?.property?.name))
                  , M = (0,
                l.EW)(( () => {
                    const t = e.value?.property?.consumptionLevel;
                    return "无" === t ? "V0" : t
                }
                ))
                  , _ = (0,
                l.EW)(( () => e.value?.privilege))
                  , $ = (0,
                l.EW)(( () => e.value?.property?.sessionHours || 3))
                  , U = (0,
                l.EW)(( () => e.value?.property?.sessionMinutes || 180))
                  , D = (0,
                l.EW)(( () => e.value?.property?.userLoginName));
                return {
                    data: e,
                    promise: w,
                    isLoggedIn: t,
                    isReal: n,
                    isEnterprise: a,
                    isPostpaid: r,
                    isProPostpaid: o,
                    isSubUser: i,
                    isRootUser: s,
                    AccountClosing: b,
                    AccountRetaining: C,
                    AccountCanceling: A,
                    ACCOUNTID: E,
                    UserId: k,
                    rootUserId: x,
                    UserIdInPortal: T,
                    mobile: S,
                    userMobilePhone: R,
                    isCTIAMUser: P,
                    email: L,
                    consumptionLevel: M,
                    username: N,
                    LOGINID: I,
                    isBusinessAct: c,
                    is1ren1maAct: u,
                    isYunShengFenOnlineAct: d,
                    isYunShengFenAct: f,
                    isAllChannelYunAct: p,
                    isProvincialCompany: v,
                    isCloudCompany: h,
                    privilege: _,
                    sessionHours: $,
                    sessionMinutes: U,
                    refresh: async () => {
                        window.AppLayout ? await window.AppLayout.updateUserInfo() : await window.CtcloudLayoutV2.consoleLayout.updateUserInfo(),
                        await y()
                    }
                    ,
                    userLoginName: D
                }
            }
            ));
            var y = () => {
                const e = w();
                return {
                    ...(0,
                    f.bP)(e),
                    refresh: e.refresh,
                    promise: e.promise
                }
            }
              , b = (0,
            f.nY)("detailInfo", ( () => {
                const e = y()
                  , {data: t, execute: n, then: o, isFetching: a} = (0,
                i.A)("/gw/user/query/DetailInfo", {
                    fmp: !0
                })
                  , s = (0,
                l.EW)(( () => t.value?.csfrToken))
                  , c = (0,
                l.EW)(( () => t.value?.ctyunAcctId))
                  , u = (0,
                l.EW)(( () => t.value?.ctyunUserId))
                  , d = (0,
                l.EW)(( () => t.value?.acctInfo?.accountInfo?.id))
                  , f = (0,
                l.EW)(( () => t.value?.avatarPath))
                  , m = (0,
                l.EW)(( () => t.value?.avatarFileId))
                  , p = (0,
                l.EW)(( () => t.value?.ctyunUserId === t.value?.acctInfo?.rootUserId))
                  , v = (0,
                l.EW)(( () => (p.value ? t.value?.acctInfo : t.value)?.customerName))
                  , h = (0,
                l.EW)(( () => (p.value ? t.value?.acctInfo : t.value)?.customerEmail))
                  , g = (0,
                l.EW)(( () => (t.value?.ctyunUserId === t.value?.acctInfo?.rootUserId ? t.value?.acctInfo : t.value)?.mobilePhone))
                  , w = (0,
                l.EW)(( () => t.value?.createDate))
                  , b = (0,
                l.EW)(( () => t.value?.lastLogin))
                  , C = (0,
                l.EW)(( () => t.value?.acctInfo?.accountType))
                  , A = (0,
                l.EW)(( () => 1 === C.value))
                  , E = (0,
                l.EW)(( () => !A.value))
                  , I = (0,
                l.EW)(( () => t.value?.acctInfo?.accountInfo?.authMode))
                  , k = (0,
                l.EW)(( () => t.value?.acctInfo?.accountInfo?.operateAuthMode))
                  , x = (0,
                l.EW)(( () => t.value?.hasAccessKey))
                  , T = (0,
                l.EW)(( () => A.value ? "personal" : "enterprise"))
                  , S = (0,
                l.EW)(( () => ({
                    1: "个人",
                    2: "政府",
                    3: "企业",
                    4: "军队",
                    5: "事业单位",
                    6: "社会团体",
                    99: "其他"
                }[1 * C.value])))
                  , R = (0,
                l.EW)(( () => t.value?.acctInfo?.originChannel))
                  , P = (0,
                l.EW)(( () => t.value?.acctInfo?.auditStatus))
                  , L = (0,
                l.EW)(( () => ({
                    0: "未实名认证",
                    1: "认证审核中",
                    2: "认证失败",
                    3: "已实名认证",
                    4: "认证审核中"
                }[1 * P.value || 0])))
                  , N = (0,
                l.EW)(( () => r.A.format.date(t.value?.acctInfo?.auditDate)))
                  , M = (0,
                l.EW)(( () => 1 * P.value == 3))
                  , _ = (0,
                l.EW)(( () => ![1, 2, 3, 4].includes(1 * P.value)))
                  , $ = (0,
                l.EW)(( () => [1, 3, 4].includes(1 * P.value)))
                  , U = (0,
                l.EW)(( () => 1 * P.value == 2))
                  , D = (0,
                l.EW)(( () => `${t.value?.acctInfo?.accountInfo?.idCardType || 99}`))
                  , B = (0,
                l.EW)(( () => ({
                    1: "中华人民共和国居民身份证",
                    2: "华侨护照",
                    3: "军官证",
                    4: "台湾居民来往大陆通行证",
                    10: "外国公民护照",
                    11: "港澳居民来往内地通行证",
                    12: "港澳居民居住证",
                    13: "台湾居民居住证",
                    14: "其他",
                    99: "其他"
                }[1 * D.value])))
                  , O = (0,
                l.EW)(( () => t.value?.acctInfo?.accountInfo?.name))
                  , F = (0,
                l.EW)(( () => t.value?.acctInfo?.accountInfo?.idCardNo))
                  , W = (0,
                l.EW)(( () => A.value && M.value && 1 * D.value == 1))
                  , j = (0,
                l.EW)(( () => A.value && M.value && 1 * D.value != 1))
                  , q = (0,
                l.EW)(( () => E.value && M.value))
                  , V = (0,
                l.EW)(( () => t.value?.acctInfo?.accountInfo?.linkmanName))
                  , Q = (0,
                l.EW)(( () => t.value?.acctInfo?.accountInfo?.legalPersonIdCardNo))
                  , K = (0,
                l.EW)(( () => t.value?.acctInfo?.remindMode))
                  , H = (0,
                l.EW)(( () => ({
                    0: "不接受任何通知",
                    1: "仅短信",
                    2: "仅邮件",
                    3: "短信 + 邮件"
                }[1 * K.value])))
                  , z = (0,
                l.EW)(( () => "null" !== t.value?.acctInfo?.birthday ? t.value?.acctInfo?.birthday : ""))
                  , X = (0,
                l.EW)(( () => t.value?.acctInfo?.industryClassification))
                  , G = (0,
                l.EW)(( () => t.value?.acctInfo?.applicationScene))
                  , J = (0,
                l.EW)(( () => t.value?.acctInfo?.applicationType))
                  , Y = (0,
                l.EW)(( () => t.value?.acctInfo?.contactTel))
                  , Z = (0,
                l.EW)(( () => 0 == t.value?.acctInfo?.provinceCode ? "" : t.value?.acctInfo?.provinceCode || ""))
                  , ee = (0,
                l.EW)(( () => 0 == t.value?.acctInfo?.cityCode ? "" : t.value?.acctInfo?.cityCode || ""))
                  , te = (0,
                l.EW)(( () => 0 == t.value?.acctInfo?.countyCode ? "" : t.value?.acctInfo?.countyCode || ""))
                  , ne = (0,
                l.EW)(( () => t.value?.acctInfo?.accountInfo?.address))
                  , re = (0,
                l.EW)(( () => t.value?.acctInfo?.firmSize))
                  , oe = (0,
                l.EW)(( () => t.value?.acctInfo?.businessYear))
                  , ae = (0,
                l.EW)(( () => t.value?.acctInfo?.productName))
                  , ie = (0,
                l.EW)(( () => t.value?.acctInfo?.enterpriceWebsite))
                  , se = (0,
                l.EW)(( () => t.value?.defaultzoneid))
                  , ce = {
                    data: t,
                    refresh: async () => {
                        const t = await n();
                        return await e.refresh(),
                        t
                    }
                    ,
                    token: s,
                    accountId: c,
                    userId: u,
                    accountInfoId: d,
                    avatarPath: f,
                    avatarFileId: m,
                    customerName: v,
                    customerEmail: h,
                    mobilePhone: g,
                    createDate: w,
                    lastLogin: b,
                    accountType: C,
                    accountTypeValue: T,
                    accountTypeText: S,
                    isPersonal: A,
                    isEnterprise: E,
                    auditStatus: P,
                    auditStatusText: L,
                    auditSuccess: M,
                    auditUncommitted: _,
                    auditCommitted: $,
                    idCardType: D,
                    idCardTypeText: B,
                    idCardNo: F,
                    isPersonalIdCardAuditSuccess: W,
                    isPersonalNoIdCardAuditSuccess: j,
                    isEnterpriseAuditSuccess: q,
                    linkName: V,
                    legalPersonIdCardNo: Q,
                    auditFail: U,
                    remindMode: K,
                    remindModeText: H,
                    birthday: z,
                    industryClassification: X,
                    applicationScene: G,
                    applicationType: J,
                    contactTel: Y,
                    provinceCode: Z,
                    cityCode: ee,
                    countyCode: te,
                    address: ne,
                    loading: a,
                    authMode: I,
                    operateAuthMode: k,
                    hasAccessKey: x,
                    firmSize: re,
                    businessYear: oe,
                    productName: ae,
                    enterpriceWebsite: ie,
                    accountInfoName: O,
                    auditDate: N,
                    originChannel: R,
                    promise: o(( () => ce)),
                    defaultzoneid: se
                };
                return ce
            }
            ));
            const C = {
                class: "wrapper"
            }
              , A = {
                class: "img-wrap"
            };
            var E = {
                __name: "qrDialog",
                setup(e, {expose: t}) {
                    const n = b()
                      , {idCardNo: a, customerName: u, linkName: g, isEnterpriseAuditSuccess: w, legalPersonIdCardNo: E} = (0,
                    f.bP)(b())
                      , {UserIdInPortal: I, username: k} = y()
                      , x = (0,
                    m.KR)(!1)
                      , T = (0,
                    m.KR)(!1)
                      , S = (0,
                    m.KR)("")
                      , R = (0,
                    m.KR)("common")
                      , P = (0,
                    m.KR)("0")
                      , L = (0,
                    m.KR)("-1")
                      , N = (0,
                    m.KR)("")
                      , M = (0,
                    m.KR)({
                        size: 200,
                        logoCornerRadius: 30,
                        logoMargin: 5,
                        margin: 8,
                        dotScale: 1,
                        logoScale: .25
                    });
                    let _ = () => Promise.resolve()
                      , $ = () => Promise.reject();
                    const U = async () => {
                        const {data: {value: {sign: e}}} = await (0,
                        i.A)({
                            url: "/v2/bcc/realNameAuth/updatePhoneCreateQrCode",
                            method: "post"
                        });
                        S.value = e,
                        N.value = `${r.A.envNew.getCurEnvMHost()}/m/user/realname/qrcodeInOne?sign=${encodeURIComponent(e)}&type=${R.value}&userId=${I.value}`
                    }
                      , D = async () => {
                        const {data: e} = await (0,
                        i.A)("/v2/bcc/realNameAuth/refreshQrCode", {
                            method: "POST",
                            query: {
                                sign: S.value
                            }
                        });
                        S.value = e.value.sign,
                        U()
                    }
                      , B = (0,
                    m.KR)(null)
                      , O = (e=1) => {
                        window.clearTimeout(B.value),
                        B.value = window.setTimeout((async () => {
                            try {
                                const {data: t} = await (0,
                                i.A)({
                                    url: "/v2/bcc/realNameAuth/verifyQrCode",
                                    method: "POST",
                                    query: {
                                        sign: S.value
                                    }
                                });
                                if (P.value = t.value?.detectionFlag,
                                e > 20)
                                    return !1;
                                1 * t.value?.detectionFlag != 2 ? O(e + 1) : 2 == +t.value?.detectionFlag && (p.s.close(),
                                await n.refresh(),
                                _(),
                                x.value = !1)
                            } catch {
                                T.value = !0
                            }
                        }
                        ), 3e4)
                    }
                      , F = async () => {
                        window.clearTimeout(B.value),
                        B.value = setTimeout(( () => {
                            O()
                        }
                        ), 1e3);
                        try {
                            return await p.s.confirm(null, null, {
                                title: "提示",
                                message: "活体认证中",
                                confirmButtonText: "已完成认证",
                                cancelButtonText: "取消",
                                cancelButtonClass: "is-plain",
                                confirmButtonClass: "el-button--theme",
                                dangerouslyUseHTMLString: !0,
                                "show-close": !1,
                                "close-on-click-modal": !1,
                                "close-on-press-escape": !1,
                                beforeClose: async (e, t, n) => {
                                    const r = await (async () => {
                                        const {data: {value: {realNameInfoResult: e}}} = await (0,
                                        i.A)({
                                            url: "/v2/bcc/realNameAuth/queryRealNameInfoBean",
                                            method: "post"
                                        });
                                        return e
                                    }
                                    )();
                                    if ("2" === P.value || r)
                                        (0,
                                        o.nk)({
                                            type: "success",
                                            message: "验证成功，请继续操作"
                                        }),
                                        Q("success");
                                    else {
                                        if ("confirm" === e)
                                            return void (0,
                                            o.nk)({
                                                type: "error",
                                                message: "验证失败，请重试"
                                            });
                                        "cancel" === e && ((0,
                                        o.nk)({
                                            type: "error",
                                            message: "已取消验证"
                                        }),
                                        Q())
                                    }
                                    n()
                                }
                            }),
                            await n.refresh(),
                            x.value = !1,
                            _()
                        } catch {
                            return await n.refresh(),
                            $()
                        }
                    }
                      , W = (0,
                    m.KR)(null)
                      , j = async (e=1) => {
                        window.clearTimeout(W.value),
                        W.value = window.setTimeout((async () => {
                            try {
                                const {data: t} = await (0,
                                i.A)({
                                    url: "/v2/bcc/realNameAuth/verifyQrCode",
                                    method: "POST",
                                    query: {
                                        sign: S.value
                                    }
                                });
                                if (L.value = t.value?.codeFlag,
                                e > 60)
                                    return T.value = !0,
                                    !1;
                                1 * t.value?.codeFlag != 1 ? j(e + 1) : F()
                            } catch {
                                T.value = !0
                            }
                        }
                        ), 5e3)
                    }
                      , q = () => {
                        T.value = !1,
                        j()
                    }
                      , V = () => {
                        o.nk.error("生成二维码错误，请稍后再试!"),
                        T.value = !0
                    }
                      , Q = e => (window.clearTimeout(W.value),
                    window.clearTimeout(B.value),
                    x.value = !1,
                    "success" === e ? _() : $());
                    (0,
                    l.xo)(( () => {
                        window.clearTimeout(W.value),
                        window.clearTimeout(B.value)
                    }
                    ));
                    const K = (0,
                    m.KR)(!1)
                      , H = () => {
                        K.value = !0
                    }
                    ;
                    return t({
                        open: async e => {
                            const t = new Promise(( (e, t) => {
                                _ = e,
                                $ = t
                            }
                            ));
                            return x.value = !0,
                            U(),
                            t
                        }
                    }),
                    (e, t) => {
                        const n = d
                          , r = c.S2
                          , o = s.kZ;
                        return (0,
                        l.uX)(),
                        (0,
                        l.CE)(l.FK, null, [(0,
                        l.bF)(o, {
                            title: "活体认证",
                            modelValue: (0,
                            m.R1)(x),
                            "onUpdate:modelValue": t[0] || (t[0] = e => (0,
                            m.i9)(x) ? x.value = e : null),
                            width: "550",
                            onClose: Q
                        }, {
                            default: (0,
                            l.k6)(( () => [(0,
                            l.Lk)("div", null, [t[2] || (t[2] = (0,
                            l.eW)(" 使用 ")), t[3] || (t[3] = (0,
                            l.Lk)("span", {
                                class: "required-tip"
                            }, "天翼云APP", -1)), t[4] || (t[4] = (0,
                            l.Lk)("span", {
                                class: "recommend"
                            }, "推荐", -1)), t[5] || (t[5] = (0,
                            l.eW)(" 或 ")), t[6] || (t[6] = (0,
                            l.Lk)("span", {
                                class: "required-tip"
                            }, "手机微信", -1)), (0,
                            l.eW)(" 扫描二维码，" + (0,
                            v.v_)(`需要${(0,
                            m.R1)(w) ? (0,
                            m.R1)(g) : (0,
                            m.R1)(u)}本人（身份证号${(0,
                            m.R1)(w) ? (0,
                            m.R1)(E) : (0,
                            m.R1)(a)}）根据提示完成活体认证`), 1)]), (0,
                            l.Lk)("div", C, [(0,
                            l.Lk)("div", A, [(0,
                            l.bF)(n, {
                                text: (0,
                                m.R1)(N),
                                opt: (0,
                                m.R1)(M),
                                onChange: q,
                                onError: V
                            }, null, 8, ["text", "opt"]), (0,
                            l.Lk)("div", {
                                class: (0,
                                v.C4)({
                                    dated: (0,
                                    m.R1)(T),
                                    mask: !0
                                })
                            }, "二维码已过期", 2)]), t[9] || (t[9] = (0,
                            l.Lk)("br", null, null, -1)), (0,
                            m.R1)(T) ? ((0,
                            l.uX)(),
                            (0,
                            l.Wv)(r, {
                                key: 0,
                                type: "theme",
                                class: "refreshQrBtn",
                                onClick: D
                            }, {
                                default: (0,
                                l.k6)(( () => t[7] || (t[7] = [(0,
                                l.eW)(" 请点击刷新 ")]))),
                                _: 1
                            })) : (0,
                            l.Q3)("", !0), (0,
                            l.Lk)("p", {
                                class: "label"
                            }, [t[8] || (t[8] = (0,
                            l.Lk)("span", {
                                class: "no-app"
                            }, "没有天翼云app？", -1)), (0,
                            l.Lk)("span", {
                                class: "load",
                                onClick: H
                            }, "点击扫描安装")])])])),
                            _: 1
                        }, 8, ["modelValue"]), (0,
                        l.bF)(o, {
                            modelValue: (0,
                            m.R1)(K),
                            "onUpdate:modelValue": t[1] || (t[1] = e => (0,
                            m.i9)(K) ? K.value = e : null),
                            width: "850",
                            class: "appModal"
                        }, {
                            default: (0,
                            l.k6)(( () => t[10] || (t[10] = [(0,
                            l.Lk)("img", {
                                src: h,
                                class: "appModal-img"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"])], 64)
                    }
                }
            }
              , I = n(7167);
            var k = (0,
            I.A)(E, [["__scopeId", "data-v-e724aa86"]]);
            const x = {
                class: "wrapper"
            }
              , T = {
                class: "img-wrap"
            };
            var S = {
                __name: "qrDialogNoLogin",
                setup(e, {expose: t}) {
                    const n = (0,
                    m.KR)(!1)
                      , a = (0,
                    m.KR)(!1)
                      , u = (0,
                    m.KR)("")
                      , f = (0,
                    m.KR)("common")
                      , g = (0,
                    m.KR)({})
                      , w = (0,
                    m.KR)("0")
                      , y = (0,
                    m.KR)("-1")
                      , b = (0,
                    m.KR)("")
                      , C = (0,
                    m.KR)({
                        size: 200,
                        logoCornerRadius: 30,
                        logoMargin: 5,
                        margin: 8,
                        dotScale: 1,
                        logoScale: .25
                    });
                    let A = () => Promise.resolve()
                      , E = () => Promise.reject();
                    const I = async () => {
                        const {data: {value: {sign: e}}} = await (0,
                        i.A)(g.value.initOpt || {
                            url: g.value.initUrl || "/v2/bcc/realNameAuthQr/loginCreateQrCode",
                            method: "post",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                cryptStr: g.value.cryptStr
                            })
                        });
                        u.value = e,
                        b.value = `${r.A.envNew.getCurEnvMHost()}/m/user/realname/qrcodeInOne?sign=${encodeURIComponent(e)}&type=${f.value}`
                    }
                      , k = async () => {
                        const {data: e} = await (0,
                        i.A)({
                            url: g.value.refreshUrl || "/v2/bcc/realNameAuthQr/refreshQrCode",
                            method: "POST",
                            query: {
                                sign: u.value
                            }
                        });
                        u.value = e.value.sign,
                        I()
                    }
                      , S = (0,
                    m.KR)(null)
                      , R = async () => {
                        const {data: e} = await (0,
                        i.A)({
                            url: g.value.verifyUrl || "/v2/bcc/realNameAuthQr/verifyQrCode",
                            method: "POST",
                            query: {
                                sign: u.value
                            }
                        });
                        return e
                    }
                      , P = async (e=1) => {
                        window.clearTimeout(S.value),
                        S.value = window.setTimeout((async () => {
                            try {
                                const t = await R();
                                if (y.value = t.value?.codeFlag,
                                e > 60)
                                    return a.value = !0,
                                    !1;
                                1 * t.value?.codeFlag != 1 ? P(e + 1) : M()
                            } catch (t) {
                                a.value = !0
                            }
                        }
                        ), 5e3)
                    }
                      , L = (0,
                    m.KR)(null)
                      , N = (e=1) => {
                        window.clearTimeout(L.value),
                        L.value = window.setTimeout((async () => {
                            try {
                                const t = await R();
                                if (w.value = t.value?.detectionFlag,
                                e > 20)
                                    return !1;
                                1 * t.value?.detectionFlag != 2 ? N(e + 1) : 2 == +t.value?.detectionFlag && (p.s.close(),
                                A(),
                                n.value = !1)
                            } catch (t) {
                                a.value = !0
                            }
                        }
                        ), 1e4)
                    }
                      , M = async () => {
                        window.clearTimeout(L.value),
                        L.value = setTimeout(( () => {
                            N()
                        }
                        ), 1e3);
                        try {
                            await p.s.confirm(null, null, {
                                title: "提示",
                                message: "活体认证中",
                                confirmButtonText: "已完成认证",
                                cancelButtonText: "取消",
                                cancelButtonClass: "is-plain",
                                confirmButtonClass: "el-button--theme",
                                dangerouslyUseHTMLString: !0,
                                "show-close": !1,
                                "close-on-click-modal": !1,
                                "close-on-press-escape": !1,
                                beforeClose: async (e, t, r) => {
                                    if (await (async () => {
                                        const e = await R();
                                        return w.value = e.value?.detectionFlag,
                                        2 == +e.value?.detectionFlag
                                    }
                                    )(),
                                    "confirm" === e) {
                                        if ("2" !== w.value)
                                            return void (0,
                                            o.nk)({
                                                type: "error",
                                                message: "验证失败，请重试"
                                            });
                                        (0,
                                        o.nk)({
                                            type: "success",
                                            message: "验证成功，请继续操作"
                                        }),
                                        A(),
                                        n.value = !1
                                    } else
                                        "cancel" === e && ((0,
                                        o.nk)({
                                            type: "error",
                                            message: "已取消验证，请重新发起登录"
                                        }),
                                        n.value = !1,
                                        E());
                                    r()
                                }
                            }),
                            n.value = !1,
                            A()
                        } catch {}
                    }
                      , _ = () => {
                        a.value = !1,
                        P()
                    }
                      , $ = () => {
                        o.nk.error("生成二维码错误，请稍后再试!"),
                        a.value = !0
                    }
                      , U = () => {
                        window.clearTimeout(S.value),
                        window.clearTimeout(L.value),
                        E()
                    }
                    ;
                    (0,
                    l.xo)(( () => {
                        window.clearTimeout(S.value),
                        window.clearTimeout(L.value)
                    }
                    ));
                    const D = (0,
                    m.KR)(!1)
                      , B = () => {
                        D.value = !0
                    }
                    ;
                    return t({
                        open: async e => {
                            const t = new Promise(( (e, t) => {
                                A = e,
                                E = t
                            }
                            ));
                            return g.value = Object.assign(e, g.value),
                            n.value = !0,
                            I(),
                            t
                        }
                    }),
                    (e, t) => {
                        const r = d
                          , o = c.S2
                          , i = s.kZ;
                        return (0,
                        l.uX)(),
                        (0,
                        l.CE)(l.FK, null, [(0,
                        l.bF)(i, {
                            title: "活体认证",
                            modelValue: (0,
                            m.R1)(n),
                            "onUpdate:modelValue": t[0] || (t[0] = e => (0,
                            m.i9)(n) ? n.value = e : null),
                            width: "550",
                            onClose: U
                        }, {
                            default: (0,
                            l.k6)(( () => [(0,
                            l.Lk)("div", null, [t[2] || (t[2] = (0,
                            l.eW)(" 使用 ")), t[3] || (t[3] = (0,
                            l.Lk)("span", {
                                class: "required-tip"
                            }, "天翼云APP", -1)), t[4] || (t[4] = (0,
                            l.Lk)("span", {
                                class: "recommend"
                            }, "推荐", -1)), t[5] || (t[5] = (0,
                            l.eW)(" 或 ")), t[6] || (t[6] = (0,
                            l.Lk)("span", {
                                class: "required-tip"
                            }, "手机微信", -1)), (0,
                            l.eW)(" 扫描二维码，" + (0,
                            v.v_)(`需要${(0,
                            m.R1)(g).idCardNameMask}本人（身份证号${(0,
                            m.R1)(g).idCardMask}）根据提示完成活体认证`), 1)]), (0,
                            l.Lk)("div", x, [(0,
                            l.Lk)("div", T, [(0,
                            l.bF)(r, {
                                text: (0,
                                m.R1)(b),
                                opt: (0,
                                m.R1)(C),
                                onChange: _,
                                onError: $
                            }, null, 8, ["text", "opt"]), (0,
                            l.Lk)("div", {
                                class: (0,
                                v.C4)({
                                    dated: (0,
                                    m.R1)(a),
                                    mask: !0
                                })
                            }, "二维码已过期", 2)]), t[9] || (t[9] = (0,
                            l.Lk)("br", null, null, -1)), (0,
                            m.R1)(a) ? ((0,
                            l.uX)(),
                            (0,
                            l.Wv)(o, {
                                key: 0,
                                type: "theme",
                                class: "refreshQrBtn",
                                onClick: k
                            }, {
                                default: (0,
                                l.k6)(( () => t[7] || (t[7] = [(0,
                                l.eW)(" 请点击刷新 ")]))),
                                _: 1
                            })) : (0,
                            l.Q3)("", !0), (0,
                            l.Lk)("p", {
                                class: "label"
                            }, [t[8] || (t[8] = (0,
                            l.Lk)("span", {
                                class: "no-app"
                            }, "没有天翼云app？", -1)), (0,
                            l.Lk)("span", {
                                class: "load",
                                onClick: B
                            }, "点击扫描安装")])])])),
                            _: 1
                        }, 8, ["modelValue"]), (0,
                        l.bF)(i, {
                            modelValue: (0,
                            m.R1)(D),
                            "onUpdate:modelValue": t[1] || (t[1] = e => (0,
                            m.i9)(D) ? D.value = e : null),
                            width: "850",
                            class: "appModal"
                        }, {
                            default: (0,
                            l.k6)(( () => t[10] || (t[10] = [(0,
                            l.Lk)("img", {
                                src: h,
                                class: "appModal-img"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"])], 64)
                    }
                }
            };
            var R = (0,
            I.A)(S, [["__scopeId", "data-v-51b22720"]])
              , P = n(6138)
              , L = n(4926)
              , N = n(4569)
              , M = n(317);
            const _ = {
                style: {
                    display: "flex",
                    width: "100%"
                }
            }
              , $ = {
                class: "dialog-footer"
            };
            var U = {
                __name: "smsVerifyDialog",
                setup(e, {expose: t}) {
                    const n = (0,
                    m.KR)(!1)
                      , r = (0,
                    m.KR)(!1)
                      , a = (0,
                    m.KR)({
                        verifyCode: ""
                    });
                    let u = () => Promise.resolve()
                      , d = () => Promise.reject();
                    const p = async () => {
                        await I.value.validateField(["verifyCode"], (e => {}
                        ));
                        try {
                            const {data: e} = await (0,
                            i.A)({
                                url: "/gw/self/VerifyPhoneCodeOnRisk",
                                query: {
                                    code: a.value.verifyCode
                                },
                                ignoreErrTips: !0
                            });
                            (0,
                            o.nk)({
                                message: "验证成功！请稍等",
                                type: "success"
                            }),
                            u(),
                            n.value = !1
                        } catch (e) {
                            (0,
                            o.nk)("验证码填写错误，请重新填写")
                        }
                    }
                      , h = (0,
                    l.EW)(( () => ({
                        verifyCode: [{
                            required: !0,
                            message: "请输入验证码",
                            trigger: "blur"
                        }]
                    })))
                      , g = b()
                      , {mobilePhone: w} = (0,
                    f.bP)(g)
                      , {btnTextBind: y, disabledBind: C, sendToBind: A, refreshBtn: E} = (0,
                    M.A)({
                        phoneNumber: w,
                        scene: "s10",
                        onSendSuccess() {
                            o.nk.success("发送成功！")
                        }
                    })
                      , I = (0,
                    m.KR)(null)
                      , k = () => {
                        d(),
                        I.value.resetFields(),
                        n.value = !1
                    }
                    ;
                    return t({
                        open: () => {
                            I.value?.resetFields(),
                            E();
                            const e = new Promise(( (e, t) => {
                                u = e,
                                d = t
                            }
                            ));
                            return n.value = !0,
                            e
                        }
                    }),
                    (e, t) => {
                        const o = N.A
                          , i = L.WK
                          , u = P.xE
                          , d = c.S2
                          , f = P.US
                          , g = s.kZ;
                        return (0,
                        l.uX)(),
                        (0,
                        l.Wv)(g, {
                            title: "需要验证您的身份",
                            width: "650px",
                            modelValue: (0,
                            m.R1)(n),
                            "onUpdate:modelValue": t[1] || (t[1] = e => (0,
                            m.i9)(n) ? n.value = e : null),
                            "before-close": k
                        }, {
                            footer: (0,
                            l.k6)(( () => [(0,
                            l.Lk)("span", $, [(0,
                            l.bF)(d, {
                                class: "btn",
                                disabled: (0,
                                m.R1)(r),
                                onClick: k
                            }, {
                                default: (0,
                                l.k6)(( () => t[3] || (t[3] = [(0,
                                l.eW)(" 取消 ")]))),
                                _: 1
                            }, 8, ["disabled"]), (0,
                            l.bF)(d, {
                                class: "btn",
                                disabled: (0,
                                m.R1)(r),
                                type: "theme",
                                onClick: p
                            }, {
                                default: (0,
                                l.k6)(( () => t[4] || (t[4] = [(0,
                                l.eW)(" 确认 ")]))),
                                _: 1
                            }, 8, ["disabled"])])])),
                            default: (0,
                            l.k6)(( () => [(0,
                            l.bF)(o, {
                                class: "tips",
                                type: "info"
                            }, {
                                default: (0,
                                l.k6)(( () => t[2] || (t[2] = [(0,
                                l.eW)("为确认是您本人操作，请进行身份验证。")]))),
                                _: 1
                            }), (0,
                            l.bF)(f, {
                                "label-width": "120px",
                                "label-position": "left",
                                rules: (0,
                                m.R1)(h),
                                style: {
                                    "margin-top": "20px"
                                },
                                ref_key: "formRef",
                                ref: I,
                                "validate-on-rule-change": !1,
                                model: (0,
                                m.R1)(a)
                            }, {
                                default: (0,
                                l.k6)(( () => [(0,
                                l.bF)(u, {
                                    label: "手机号"
                                }, {
                                    default: (0,
                                    l.k6)(( () => [(0,
                                    l.bF)(i, {
                                        value: (0,
                                        m.R1)(w),
                                        disabled: ""
                                    }, null, 8, ["value"])])),
                                    _: 1
                                }), (0,
                                l.bF)(u, {
                                    label: "验证码",
                                    prop: "verifyCode"
                                }, {
                                    default: (0,
                                    l.k6)(( () => [(0,
                                    l.Lk)("div", _, [(0,
                                    l.bF)(i, {
                                        placeholder: "请输入短信验证码",
                                        modelValue: (0,
                                        m.R1)(a).verifyCode,
                                        "onUpdate:modelValue": t[0] || (t[0] = e => (0,
                                        m.R1)(a).verifyCode = e),
                                        maxlength: "6"
                                    }, null, 8, ["modelValue"]), (0,
                                    l.bF)(d, {
                                        disabled: (0,
                                        m.R1)(C),
                                        type: "theme",
                                        onClick: (0,
                                        m.R1)(A),
                                        style: {
                                            "margin-left": "10px"
                                        }
                                    }, {
                                        default: (0,
                                        l.k6)(( () => [(0,
                                        l.eW)((0,
                                        v.v_)((0,
                                        m.R1)(y)), 1)])),
                                        _: 1
                                    }, 8, ["disabled", "onClick"])])])),
                                    _: 1
                                })])),
                                _: 1
                            }, 8, ["rules", "model"])])),
                            _: 1
                        }, 8, ["modelValue"])
                    }
                }
            };
            var D = (0,
            I.A)(U, [["__scopeId", "data-v-05fae9f3"]])
              , B = n(2467);
            const O = {
                class: "phone"
            };
            var F = {
                __name: "smsVerifyDialogMobile",
                setup(e, {expose: t}) {
                    const n = (0,
                    m.KR)(!1)
                      , r = (0,
                    m.KR)({
                        verifyCode: ""
                    });
                    let o = () => Promise.resolve()
                      , a = () => Promise.reject();
                    const s = e => /^\d{6}$/.test(e)
                      , c = b()
                      , {mobilePhone: u} = (0,
                    f.bP)(c)
                      , {btnTextBind: d, disabledBind: p, sendToBind: h, refreshBtn: g} = (0,
                    M.A)({
                        phoneNumber: u,
                        scene: "s10",
                        onSendSuccess() {
                            (0,
                            B.P0)({
                                message: "发送成功！",
                                type: "success"
                            })
                        }
                    })
                      , w = (0,
                    m.KR)(null)
                      , y = e => {
                        "confirm" === e ? (async () => {
                            if (s(r.value.verifyCode))
                                try {
                                    const {data: e} = await (0,
                                    i.A)({
                                        url: "/gw/self/VerifyPhoneCodeOnRisk",
                                        query: {
                                            code: r.value.verifyCode
                                        },
                                        ignoreErrTips: !0
                                    });
                                    n.value = !1,
                                    (0,
                                    B.P0)({
                                        message: "验证成功！请稍等",
                                        type: "success"
                                    }),
                                    o()
                                } catch (e) {
                                    (0,
                                    B.P0)({
                                        message: "验证码填写错误，请重新填写",
                                        type: "fail"
                                    })
                                }
                            else
                                (0,
                                B.P0)({
                                    message: "验证码填写错误，请重新填写",
                                    type: "fail"
                                })
                        }
                        )() : (a(),
                        r.value.verifyCode = "",
                        n.value = !1)
                    }
                    ;
                    return t({
                        open: () => {
                            r.value.verifyCode = "",
                            g();
                            const e = new Promise(( (e, t) => {
                                o = e,
                                a = t
                            }
                            ));
                            return n.value = !0,
                            e
                        }
                    }),
                    (e, t) => {
                        const o = (0,
                        l.g2)("van-field")
                          , a = (0,
                        l.g2)("van-button")
                          , i = (0,
                        l.g2)("van-cell-group")
                          , c = (0,
                        l.g2)("van-form")
                          , f = (0,
                        l.g2)("van-dialog");
                        return (0,
                        l.uX)(),
                        (0,
                        l.Wv)(f, {
                            className: "my-code-Dialog",
                            show: (0,
                            m.R1)(n),
                            "onUpdate:show": t[1] || (t[1] = e => (0,
                            m.i9)(n) ? n.value = e : null),
                            confirmButtonText: "确定",
                            "show-cancel-button": "",
                            "before-close": y
                        }, {
                            title: (0,
                            l.k6)(( () => t[2] || (t[2] = [(0,
                            l.Lk)("div", {
                                class: "title"
                            }, " 短信验证 ", -1)]))),
                            default: (0,
                            l.k6)(( () => [(0,
                            l.Lk)("div", O, "接收手机" + (0,
                            v.v_)((0,
                            m.R1)(u)), 1), (0,
                            l.bF)(c, {
                                ref_key: "formRef",
                                ref: w
                            }, {
                                default: (0,
                                l.k6)(( () => [(0,
                                l.bF)(i, {
                                    inset: ""
                                }, {
                                    default: (0,
                                    l.k6)(( () => [(0,
                                    l.bF)(o, {
                                        class: "my-van-cell",
                                        name: "verifyCode"
                                    }, {
                                        input: (0,
                                        l.k6)(( () => [(0,
                                        l.bF)(o, {
                                            class: "my-van-cell-item",
                                            autocomplete: "off",
                                            maxlength: "6",
                                            placeholder: "短信验证码",
                                            type: "digit",
                                            modelValue: (0,
                                            m.R1)(r).verifyCode,
                                            "onUpdate:modelValue": t[0] || (t[0] = e => (0,
                                            m.R1)(r).verifyCode = e),
                                            rules: [{
                                                validator: s,
                                                message: "请输入正确内容"
                                            }]
                                        }, null, 8, ["modelValue", "rules"]), (0,
                                        l.bF)(a, {
                                            class: (0,
                                            v.C4)(["send-message", {
                                                "send-message-disable": (0,
                                                m.R1)(p)
                                            }]),
                                            type: "default",
                                            disable: (0,
                                            m.R1)(p),
                                            onClick: (0,
                                            m.R1)(h)
                                        }, {
                                            default: (0,
                                            l.k6)(( () => [(0,
                                            l.eW)((0,
                                            v.v_)((0,
                                            m.R1)(d)), 1)])),
                                            _: 1
                                        }, 8, ["class", "disable", "onClick"])])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            }, 512)])),
                            _: 1
                        }, 8, ["show"])
                    }
                }
            };
            var W = (0,
            I.A)(F, [["__scopeId", "data-v-5f08ae15"]]);
            const j = {
                qrModal: null,
                smsModel: null
            };
            var q = async (e={}) => {
                const {code: t, params: n, pcOpt: s, isLoggedIn: c=!0} = e
                  , l = async () => {
                    if (r.A.ua.isMobile()) {
                        sessionStorage.setItem("risk_last_request_params", JSON.stringify(n));
                        const e = `${r.A.envNew.getCurEnvMHost()}/m/user/realname/entry`
                          , {data: {value: {sign: t}}} = await (0,
                        i.A)({
                            url: "/v2/bcc/realNameAuth/updatePhoneCreateQrCode",
                            method: "post"
                        })
                          , {data: o} = await (0,
                        i.A)({
                            url: "/v2/bcc/realNameAuthQr/parseQrCode",
                            query: {
                                sign: t
                            }
                        })
                          , a = n.opt?.returnUrl || n.url?.returnUrl || window.location.href
                          , s = `${e}?sign=${encodeURIComponent(t)}&token=${o.value}&type=app&nextUrl=${a}`;
                        window.location.href = s
                    } else {
                        if (j.qrModal)
                            return j.qrModal.open(s);
                        const e = c ? k : R
                          , t = (0,
                        a.Ef)(e)
                          , n = document.createElement("div");
                        document.body.appendChild(n);
                        const r = t.mount(n);
                        j.qrModal = r,
                        await r.open(s)
                    }
                }
                  , u = new Map([["core.r0005", async () => {
                    const e = "/gw/user/VerifySlideVerifyOnRisk"
                      , {data: t} = r.A.ua.isMobile() ? await r.A.jigsaw({
                        mobile: !0,
                        verifyUrl: e
                    }) : await r.A.jigsaw({
                        verifyUrl: e
                    });
                    r.A.ua.c() ? (0,
                    B.P0)("校验成功，请继续操作！") : (0,
                    o.nk)({
                        message: "校验成功，请继续操作！",
                        type: "success"
                    })
                }
                ], ["core.r0006", async () => Promise.reject()], ["core.r0008", async () => {
                    if (j.smsModel)
                        return j.smsModel.open();
                    let e = null;
                    e = r.A.ua.isMobile() ? (0,
                    a.Ef)(W) : (0,
                    a.Ef)(D);
                    const t = document.createElement("div");
                    document.body.appendChild(t);
                    const n = e.mount(t);
                    j.smsModel = n,
                    await n.open()
                }
                ], ["core.r0009", l], ["10007", l]]);
                if (!["core.r0005", "core.r0006", "core.r0008", "core.r0009", "10007"].includes(t))
                    return Promise.reject();
                {
                    let e = u.get(`${t}`);
                    await e.call(void 0)
                }
            }
        },
        3941: function(e, t, n) {
            "use strict";
            const r = () => navigator ? navigator.userAgent.toLowerCase() : ""
              , o = (e=r()) => /ctyunapp-ios|ios\/wkwebview/.test(e) || /ctyunapp-android/.test(e) || /ctyunapp-ohos/.test(e)
              , a = (e=r()) => /micromessenger/i.test(e) || /windows phone/i.test(e)
              , i = (e=r()) => {
                if (o(e))
                    return !1;
                const t = "ipad" == e.match(/ipad/i)
                  , n = "iphone os" == e.match(/iphone os/i)
                  , i = "midp" == e.match(/midp/i)
                  , s = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i)
                  , c = "ucweb" == e.match(/ucweb/i)
                  , l = "android" == e.match(/android/i)
                  , u = "windows ce" == e.match(/windows ce/i)
                  , d = "windows mobile" == e.match(/windows mobile/i)
                  , f = a(e)
                  , m = "openharmony" == e.match(/openharmony/i);
                return t || n || i || s || c || l || u || d || f || m
            }
            ;
            t.Ay = {
                getUA: r,
                get: r,
                isAPP: o,
                isWECHAT: a,
                isWAP: i,
                isPC: (e=r()) => !o(e) && !i(e),
                isMobile: (e=r()) => o(e) || i(e),
                isIOS: (e=r()) => /ctyunapp-ios|ios\/wkwebview/.test(e),
                isAndroid: (e=r()) => /ctyunapp-android/.test(e),
                isHarmony: (e=r()) => /ctyunapp-ohos/.test(e),
                isCloudPro: (e=r()) => /platform\/clouddesktop/.test(e) || /platform\/cloudphone/i.test(e),
                getWapType: (e=r()) => {
                    let t = "unknow";
                    return "ipad" == e.match(/ipad/i) ? t = "ipad" : "iphone os" == e.match(/iphone os/i) ? t = "iphone" : "android" == e.match(/android/i) ? t = "android" : a(e) ? t = "wechat" : "openharmony" == e.match(/openharmony/i) && (t = "harmony"),
                    t
                }
            }
        },
        4569: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return f
                }
            });
            var r = n(8405)
              , o = n(5236)
              , a = n(3324)
              , i = n(9141)
              , s = n(1727);
            const c = {
                key: 0,
                class: "img"
            }
              , l = ["src"]
              , u = {
                class: "content"
            };
            var d = {
                __name: "CtycTip",
                props: {
                    type: {
                        type: String,
                        default: "info"
                    },
                    showClose: {
                        type: Boolean,
                        default: !1
                    },
                    showIcon: {
                        type: Boolean,
                        default: !0
                    }
                },
                setup(e) {
                    const t = e
                      , d = (0,
                    o.KR)(!0)
                      , f = n(5701)(`./${t.type}.svg`);
                    return (n, m) => {
                        const p = (0,
                        a.g2)("Close")
                          , v = r.tk;
                        return (0,
                        a.bo)(((0,
                        a.uX)(),
                        (0,
                        a.CE)("div", {
                            class: (0,
                            i.C4)(["tip-wrapper", {
                                [t.type]: !0,
                                noIcon: !e.showIcon
                            }])
                        }, [e.showIcon ? ((0,
                        a.uX)(),
                        (0,
                        a.CE)("div", c, [(0,
                        a.Lk)("img", {
                            src: (0,
                            o.R1)(f)
                        }, null, 8, l)])) : (0,
                        a.Q3)("", !0), (0,
                        a.Lk)("div", u, [(0,
                        a.RG)(n.$slots, "default")]), t.showClose ? ((0,
                        a.uX)(),
                        (0,
                        a.Wv)(v, {
                            key: 1,
                            class: (0,
                            i.C4)(["close", t.type]),
                            onClick: m[0] || (m[0] = e => d.value = !1)
                        }, {
                            default: (0,
                            a.k6)(( () => [(0,
                            a.bF)(p)])),
                            _: 1
                        }, 8, ["class"])) : (0,
                        a.Q3)("", !0)], 2)), [[s.aG, (0,
                        o.R1)(d)]])
                    }
                }
            };
            var f = (0,
            n(7167).A)(d, [["__scopeId", "data-v-09a9d872"]])
        },
        882: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return u
                }
            });
            var r = n(5236)
              , o = n(3324)
              , a = n(5231)
              , i = n(6065)
              , s = n(9141)
              , c = n(8335)
              , l = {
                __name: "CtyQr",
                props: {
                    text: {
                        type: String
                    },
                    opt: {
                        type: Object,
                        default: () => ({})
                    },
                    awesomeQr: {
                        type: String,
                        default: "/console/awesome-qr.js"
                    }
                },
                emits: ["change", "error"],
                setup(e, {emit: t}) {
                    const n = e
                      , l = t
                      , u = (0,
                    r.KR)(null)
                      , d = (0,
                    a.xD)((async () => {
                        const e = window.AwesomeQR ? Promise.resolve() : i.A.load.loadScript(n.awesomeQr);
                        if (await e,
                        !n.text && u.value)
                            return u.value.src = "";
                        if (window.AwesomeQR) {
                            const e = window.AwesomeQR.AwesomeQR
                              , t = await new e({
                                dotScale: 1,
                                text: n.text,
                                ...n.opt,
                                margin: 0
                            }).draw();
                            u.value.src = t,
                            l("change")
                        } else
                            c.toDataURL(n.text, {
                                ...n.opt.size ? {
                                    width: n.opt.size
                                } : {},
                                margin: 0
                            }, ( (e, t) => {
                                u.value.src = t,
                                l(e ? "error" : "change")
                            }
                            ))
                    }
                    ), 100);
                    return (0,
                    o.sV)(( () => {
                        d()
                    }
                    )),
                    (0,
                    o.wB)(( () => n.text), ( () => {
                        d()
                    }
                    )),
                    (t, n) => ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", {
                        style: (0,
                        s.Tr)(e.opt.margin ? {
                            padding: e.opt.margin + "px"
                        } : {}),
                        class: "cty-qr"
                    }, [(0,
                    o.Lk)("img", {
                        ref_key: "qrcodeImgRef",
                        ref: u
                    }, null, 512)], 4))
                }
            };
            var u = (0,
            n(7167).A)(l, [["__scopeId", "data-v-fd800ae4"]])
        },
        9770: function(e, t, n) {
            var r = {
                "./focus.js": 7418
            };
            function o(e) {
                var t = a(e);
                return n(t)
            }
            function a(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            }
            ,
            o.resolve = a,
            e.exports = o,
            o.id = 9770
        },
        9228: function(e, t, n) {
            var r = {
                "./confirmResult/childRouter.js": 6604,
                "./unconfirmed/childRouter.js": 2353
            };
            function o(e) {
                var t = a(e);
                return n(t)
            }
            function a(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            }
            ,
            o.resolve = a,
            e.exports = o,
            o.id = 9228
        },
        7318: function(e, t, n) {
            var r = {
                "./channelConfirm/confirmResult/childRouter.js": 6604,
                "./channelConfirm/unconfirmed/childRouter.js": 2353
            };
            function o(e) {
                var t = a(e);
                return n(t)
            }
            function a(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            }
            ,
            o.resolve = a,
            e.exports = o,
            o.id = 7318
        },
        3800: function(e, t, n) {
            var r = {
                "./agent/channelConfirm/router.js": 4124,
                "./agent/cloudCustomerConfirm/router.js": 8902,
                "./agent/createSecConfirm/router.js": 5722,
                "./agent/distributorConfirm/router.js": 4162,
                "./agent/inviteSecConfrm/router.js": 6380,
                "./agent/router.js": 1574,
                "./changeRole/router.js": 2665,
                "./entrustedLogin/router.js": 2764,
                "./findAccount/router.js": 1932,
                "./findPass/router.js": 8779,
                "./login/router.js": 8694,
                "./register/router.js": 4778,
                "./sso/router.js": 7436
            };
            function o(e) {
                var t = a(e);
                return n(t)
            }
            function a(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            }
            ,
            o.resolve = a,
            e.exports = o,
            o.id = 3800
        },
        5701: function(e, t, n) {
            var r = {
                "./InfoCircleFill.svg": 4690,
                "./error.svg": 4009,
                "./filter-active.svg": 2742,
                "./filter-hover.svg": 6366,
                "./filter.svg": 2327,
                "./info.svg": 9029,
                "./success.svg": 8410,
                "./warning.svg": 1439
            };
            function o(e) {
                var t = a(e);
                return n(t)
            }
            function a(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                return r[e]
            }
            o.keys = function() {
                return Object.keys(r)
            }
            ,
            o.resolve = a,
            e.exports = o,
            o.id = 5701
        },
        4690: function(e, t, n) {
            "use strict";
            e.exports = n.p + "img/InfoCircleFill.03bdfde7.svg"
        },
        4009: function(e, t, n) {
            "use strict";
            e.exports = n.p + "img/error.d4416e89.svg"
        },
        2742: function(e, t, n) {
            "use strict";
            e.exports = n.p + "img/filter-active.24494ff9.svg"
        },
        6366: function(e, t, n) {
            "use strict";
            e.exports = n.p + "img/filter-hover.3e296c90.svg"
        },
        2327: function(e, t, n) {
            "use strict";
            e.exports = n.p + "img/filter.c00c0e07.svg"
        },
        9029: function(e, t, n) {
            "use strict";
            e.exports = n.p + "img/info.e3e2e8ce.svg"
        },
        8410: function(e, t, n) {
            "use strict";
            e.exports = n.p + "img/success.c4eaeef6.svg"
        },
        1439: function(e, t, n) {
            "use strict";
            e.exports = n.p + "img/warning.90cfe963.svg"
        }
    }, o = {};
    function a(e) {
        var t = o[e];
        if (void 0 !== t)
            return t.exports;
        var n = o[e] = {
            exports: {}
        };
        console.log('laod chunk', e);
        
        return r[e].call(n.exports, n, n.exports, a),
        n.exports
    }
    a.m = r,
    e = [],
    a.O = function(t, n, r, o) {
        if (!n) {
            var i = 1 / 0;
            for (u = 0; u < e.length; u++) {
                n = e[u][0],
                r = e[u][1],
                o = e[u][2];
                for (var s = !0, c = 0; c < n.length; c++)
                    (!1 & o || i >= o) && Object.keys(a.O).every((function(e) {
                        return a.O[e](n[c])
                    }
                    )) ? n.splice(c--, 1) : (s = !1,
                    o < i && (i = o));
                if (s) {
                    e.splice(u--, 1);
                    var l = r();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
        o = o || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > o; u--)
            e[u] = e[u - 1];
        e[u] = [n, r, o]
    }
    ,
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(t, {
            a: t
        }),
        t
    }
    ,
    a.d = function(e, t) {
        for (var n in t)
            a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    a.f = {},
    a.e = function(e) {
        return Promise.all(Object.keys(a.f).reduce((function(t, n) {
            return a.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    a.u = function(e) {
        return "js/" + ({
            127: "findAccount",
            209: "findPass",
            224: "register",
            803: "ssologin",
            948: "ctyc.async",
            966: "login"
        }[e] || e) + "." + {
            48: "4c294bcb",
            66: "9fef94dd",
            118: "a450841e",
            127: "d2003095",
            129: "5f028cf2",
            209: "71b97f71",
            224: "bc084ba8",
            523: "9341a785",
            608: "297cf335",
            803: "eb3bc1d8",
            805: "8216a6b1",
            810: "0c40496d",
            948: "1319e033",
            966: "b581b7d7"
        }[e] + ".js"
    }
    ,
    a.miniCssF = function(e) {
        return "css/" + ({
            127: "findAccount",
            209: "findPass",
            224: "register",
            803: "ssologin",
            948: "ctyc.async",
            966: "login"
        }[e] || e) + "." + {
            48: "5400398d",
            66: "5b060481",
            127: "4dcd03e4",
            129: "704235bf",
            209: "9378ad6e",
            224: "fe2fa5f5",
            523: "9b4a4ffb",
            608: "a04e3bd1",
            803: "8022edce",
            805: "21ae0eb0",
            948: "eb4c1455",
            966: "1e861959"
        }[e] + ".css"
    }
    ,
    a.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t = {},
    n = "auth:",
    a.l = function(e, r, o, i) {
        if (t[e])
            t[e].push(r);
        else {
            var s, c;
            if (void 0 !== o)
                for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                    var d = l[u];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == n + o) {
                        s = d;
                        break
                    }
                }
            s || (c = !0,
            (s = document.createElement("script")).charset = "utf-8",
            s.timeout = 120,
            a.nc && s.setAttribute("nonce", a.nc),
            s.setAttribute("data-webpack", n + o),
            s.src = e),
            t[e] = [r];
            var f = function(n, r) {
                s.onerror = s.onload = null,
                clearTimeout(m);
                var o = t[e];
                if (delete t[e],
                s.parentNode && s.parentNode.removeChild(s),
                o && o.forEach((function(e) {
                    return e(r)
                }
                )),
                n)
                    return n(r)
            }
              , m = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: s
            }), 12e4);
            s.onerror = f.bind(null, s.onerror),
            s.onload = f.bind(null, s.onload),
            c && document.head.appendChild(s)
        }
    }
    ,
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.p = "/h5/auth/",
    function() {
        if ("undefined" != typeof document) {
            var e = function(e) {
                return new Promise((function(t, n) {
                    var r = a.miniCssF(e)
                      , o = a.p + r;
                    if (function(e, t) {
                        for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                            var o = (i = n[r]).getAttribute("data-href") || i.getAttribute("href");
                            if ("stylesheet" === i.rel && (o === e || o === t))
                                return i
                        }
                        var a = document.getElementsByTagName("style");
                        for (r = 0; r < a.length; r++) {
                            var i;
                            if ((o = (i = a[r]).getAttribute("data-href")) === e || o === t)
                                return i
                        }
                    }(r, o))
                        return t();
                    !function(e, t, n, r, o) {
                        var i = document.createElement("link");
                        i.rel = "stylesheet",
                        i.type = "text/css",
                        a.nc && (i.nonce = a.nc),
                        i.onerror = i.onload = function(n) {
                            if (i.onerror = i.onload = null,
                            "load" === n.type)
                                r();
                            else {
                                var a = n && n.type
                                  , s = n && n.target && n.target.href || t
                                  , c = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ": " + s + ")");
                                c.name = "ChunkLoadError",
                                c.code = "CSS_CHUNK_LOAD_FAILED",
                                c.type = a,
                                c.request = s,
                                i.parentNode && i.parentNode.removeChild(i),
                                o(c)
                            }
                        }
                        ,
                        i.href = t,
                        n ? n.parentNode.insertBefore(i, n.nextSibling) : document.head.appendChild(i)
                    }(e, o, null, t, n)
                }
                ))
            }
              , t = {
                524: 0
            };
            a.f.miniCss = function(n, r) {
                t[n] ? r.push(t[n]) : 0 !== t[n] && {
                    48: 1,
                    66: 1,
                    127: 1,
                    129: 1,
                    209: 1,
                    224: 1,
                    523: 1,
                    608: 1,
                    803: 1,
                    805: 1,
                    948: 1,
                    966: 1
                }[n] && r.push(t[n] = e(n).then((function() {
                    t[n] = 0
                }
                ), (function(e) {
                    throw delete t[n],
                    e
                }
                )))
            }
        }
    }(),
    function() {
        var e = {
            524: 0
        };
        a.f.j = function(t, n) {
            var r = a.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    n.push(r[2]);
                else {
                    var o = new Promise((function(n, o) {
                        r = e[t] = [n, o]
                    }
                    ));
                    n.push(r[2] = o);
                    var i = a.p + a.u(t)
                      , s = new Error;
                    a.l(i, (function(n) {
                        if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type)
                              , i = n && n.target && n.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")",
                            s.name = "ChunkLoadError",
                            s.type = o,
                            s.request = i,
                            r[1](s)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        a.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, n) {
            var r, o, i = n[0], s = n[1], c = n[2], l = 0;
            if (i.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (r in s)
                    a.o(s, r) && (a.m[r] = s[r]);
                if (c)
                    var u = c(a)
            }
            for (t && t(n); l < i.length; l++)
                o = i[l],
                a.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return a.O(u)
        }
          , n = self.webpackChunkauth = self.webpackChunkauth || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }();
    var i = a.O(void 0, [768, 192, 504], (function() {
        return a(5302)
    }
    ));
    i = a.O(i)
    window.webpack = a;
}();


function get_password(usename, password) {
    d = window.webpack(6065)
    pwd = d.A.DES.encrypt(window.encodeURIComponent(usename), password)
    return pwd 
}

