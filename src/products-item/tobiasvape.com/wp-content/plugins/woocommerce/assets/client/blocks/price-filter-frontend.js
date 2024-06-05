(() => {
    var e = {
            3849: (e, r) => {
                var t;
                ! function() {
                    "use strict";
                    var n = {}.hasOwnProperty;

                    function o() {
                        for (var e = [], r = 0; r < arguments.length; r++) {
                            var t = arguments[r];
                            if (t) {
                                var i = typeof t;
                                if ("string" === i || "number" === i) e.push(t);
                                else if (Array.isArray(t)) {
                                    if (t.length) {
                                        var c = o.apply(null, t);
                                        c && e.push(c)
                                    }
                                } else if ("object" === i)
                                    if (t.toString === Object.prototype.toString)
                                        for (var a in t) n.call(t, a) && t[a] && e.push(a);
                                    else e.push(t.toString())
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (o.default = o, e.exports = o) : void 0 === (t = function() {
                        return o
                    }.apply(r, [])) || (e.exports = t)
                }()
            },
            8406: () => {},
            1753: () => {},
            2728: () => {},
            6099: () => {},
            7507: () => {},
            9432: () => {}
        },
        r = {};

    function t(n) {
        var o = r[n];
        if (void 0 !== o) return o.exports;
        var i = r[n] = {
            exports: {}
        };
        return e[n](i, i.exports, t), i.exports
    }
    t.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return t.d(r, {
            a: r
        }), r
    }, t.d = (e, r) => {
        for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: r[n]
        })
    }, t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), (() => {
        "use strict";
        const e = window.React,
            r = window.wp.element;

        function n(e) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, n(e)
        }
        const o = window.wp.i18n,
            i = window.wc.wcSettings;
        var c, a, l, s, u, m, p, d, f, g;
        const b = (0, i.getSetting)("wcBlocksConfig", {
                buildPhase: 1,
                pluginUrl: "",
                productCount: 0,
                defaultAvatar: "",
                restApiRoutes: {},
                wordCountType: "words"
            }),
            w = b.pluginUrl + "assets/images/",
            _ = (b.pluginUrl, b.buildPhase, null === (c = i.STORE_PAGES.shop) || void 0 === c || c.permalink, null === (a = i.STORE_PAGES.checkout) || void 0 === a || a.id, null === (l = i.STORE_PAGES.checkout) || void 0 === l || l.permalink, null === (s = i.STORE_PAGES.privacy) || void 0 === s || s.permalink, null === (u = i.STORE_PAGES.privacy) || void 0 === u || u.title, null === (m = i.STORE_PAGES.terms) || void 0 === m || m.permalink, null === (p = i.STORE_PAGES.terms) || void 0 === p || p.title, null === (d = i.STORE_PAGES.cart) || void 0 === d || d.id, null === (f = i.STORE_PAGES.cart) || void 0 === f || f.permalink, null !== (g = i.STORE_PAGES.myaccount) && void 0 !== g && g.permalink ? i.STORE_PAGES.myaccount.permalink : (0, i.getSetting)("wpLoginUrl", "/wp-login.php"), (0, i.getSetting)("localPickupEnabled", !1), (0, i.getSetting)("countries", {})),
            y = (0, i.getSetting)("countryData", {}),
            E = (Object.fromEntries(Object.keys(y).filter((e => !0 === y[e].allowBilling)).map((e => [e, _[e] || ""]))), Object.fromEntries(Object.keys(y).filter((e => !0 === y[e].allowBilling)).map((e => [e, y[e].states || []]))), Object.fromEntries(Object.keys(y).filter((e => !0 === y[e].allowShipping)).map((e => [e, _[e] || ""]))), Object.fromEntries(Object.keys(y).filter((e => !0 === y[e].allowShipping)).map((e => [e, y[e].states || []]))), Object.fromEntries(Object.keys(y).map((e => [e, y[e].locale || []]))), {
                address: ["first_name", "last_name", "company", "address_1", "address_2", "city", "postcode", "country", "state", "phone"],
                contact: ["email"],
                additional: []
            }),
            h = ((0, i.getSetting)("addressFieldsLocations", E).address, (0, i.getSetting)("addressFieldsLocations", E).contact, (0, i.getSetting)("addressFieldsLocations", E).additional, (0, i.getSetting)("additionalFields", {}), (0, i.getSetting)("additionalContactFields", {}), (0, i.getSetting)("additionalAddressFields", {}), ({
                imageUrl: r = `${w}/block-error.svg`,
                header: t = (0, o.__)("Oops!", "woocommerce"),
                text: n = (0, o.__)("There was an error loading the content.", "woocommerce"),
                errorMessage: i,
                errorMessagePrefix: c = (0, o.__)("Error:", "woocommerce"),
                button: a,
                showErrorBlock: l = !0
            }) => l ? (0, e.createElement)("div", {
                className: "wc-block-error wc-block-components-error"
            }, r && (0, e.createElement)("img", {
                className: "wc-block-error__image wc-block-components-error__image",
                src: r,
                alt: ""
            }), (0, e.createElement)("div", {
                className: "wc-block-error__content wc-block-components-error__content"
            }, t && (0, e.createElement)("p", {
                className: "wc-block-error__header wc-block-components-error__header"
            }, t), n && (0, e.createElement)("p", {
                className: "wc-block-error__text wc-block-components-error__text"
            }, n), i && (0, e.createElement)("p", {
                className: "wc-block-error__message wc-block-components-error__message"
            }, c ? c + " " : "", i), a && (0, e.createElement)("p", {
                className: "wc-block-error__button wc-block-components-error__button"
            }, a))) : null);
        t(8406);
        class v extends r.Component {
            constructor(...e) {
                var r, t, o;
                super(...e), r = this, o = {
                    errorMessage: "",
                    hasError: !1
                }, (t = function(e) {
                    var r = function(e, r) {
                        if ("object" !== n(e) || null === e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var o = t.call(e, "string");
                            if ("object" !== n(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === n(r) ? r : String(r)
                }(t = "state")) in r ? Object.defineProperty(r, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[t] = o
            }
            static getDerivedStateFromError(r) {
                return void 0 !== r.statusText && void 0 !== r.status ? {
                    errorMessage: (0, e.createElement)(e.Fragment, null, (0, e.createElement)("strong", null, r.status), ": ", r.statusText),
                    hasError: !0
                } : {
                    errorMessage: r.message,
                    hasError: !0
                }
            }
            render() {
                const {
                    header: r,
                    imageUrl: t,
                    showErrorMessage: n = !0,
                    showErrorBlock: o = !0,
                    text: i,
                    errorMessagePrefix: c,
                    renderError: a,
                    button: l
                } = this.props, {
                    errorMessage: s,
                    hasError: u
                } = this.state;
                return u ? "function" == typeof a ? a({
                    errorMessage: s
                }) : (0, e.createElement)(h, {
                    showErrorBlock: o,
                    errorMessage: n ? s : null,
                    header: r,
                    imageUrl: t,
                    text: i,
                    errorMessagePrefix: c,
                    button: l
                }) : this.props.children
            }
        }
        const k = v,
            S = [".wp-block-woocommerce-cart"],
            x = ({
                Block: t,
                containers: n,
                getProps: o = (() => ({})),
                getErrorBoundaryProps: i = (() => ({}))
            }) => {
                0 !== n.length && Array.prototype.forEach.call(n, ((n, c) => {
                    const a = o(n, c),
                        l = i(n, c),
                        s = { ...n.dataset,
                            ...a.attributes || {}
                        };
                    (({
                        Block: t,
                        container: n,
                        attributes: o = {},
                        props: i = {},
                        errorBoundaryProps: c = {}
                    }) => {
                        (0, r.render)((0, e.createElement)(k, { ...c
                        }, (0, e.createElement)(r.Suspense, {
                            fallback: (0, e.createElement)("div", {
                                className: "wc-block-placeholder"
                            })
                        }, t && (0, e.createElement)(t, { ...i,
                            attributes: o
                        }))), n, (() => {
                            n.classList && n.classList.remove("is-loading")
                        }))
                    })({
                        Block: t,
                        container: n,
                        props: a,
                        attributes: s,
                        errorBoundaryProps: l
                    })
                }))
            };

        function P(e, t) {
            const n = (0, r.useRef)();
            return (0, r.useEffect)((() => {
                n.current === e || t && !t(e, n.current) || (n.current = e)
            }), [e, t]), n.current
        }
        const F = window.wc.wcBlocksData,
            C = window.wp.data,
            R = window.wp.isShallowEqual;
        var A = t.n(R);
        const N = (0, r.createContext)("page"),
            O = () => (0, r.useContext)(N),
            T = (N.Provider, e => {
                const t = O();
                e = e || t;
                const n = (0, C.useSelect)((r => r(F.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0)), [e]),
                    {
                        setValueForQueryContext: o
                    } = (0, C.useDispatch)(F.QUERY_STATE_STORE_KEY);
                return [n, (0, r.useCallback)((r => {
                    o(e, r)
                }), [e, o])]
            }),
            B = (e, t, n) => {
                const o = O();
                n = n || o;
                const i = (0, C.useSelect)((r => r(F.QUERY_STATE_STORE_KEY).getValueForQueryKey(n, e, t)), [n, e]),
                    {
                        setQueryValue: c
                    } = (0, C.useDispatch)(F.QUERY_STATE_STORE_KEY);
                return [i, (0, r.useCallback)((r => {
                    c(n, e, r)
                }), [n, e, c])]
            };

        function U(r, t, n) {
            var o = this,
                i = (0, e.useRef)(null),
                c = (0, e.useRef)(0),
                a = (0, e.useRef)(null),
                l = (0, e.useRef)([]),
                s = (0, e.useRef)(),
                u = (0, e.useRef)(),
                m = (0, e.useRef)(r),
                p = (0, e.useRef)(!0);
            (0, e.useEffect)((function() {
                m.current = r
            }), [r]);
            var d = !t && 0 !== t && "undefined" != typeof window;
            if ("function" != typeof r) throw new TypeError("Expected a function");
            t = +t || 0;
            var f = !!(n = n || {}).leading,
                g = !("trailing" in n) || !!n.trailing,
                b = "maxWait" in n,
                w = b ? Math.max(+n.maxWait || 0, t) : null;
            (0, e.useEffect)((function() {
                return p.current = !0,
                    function() {
                        p.current = !1
                    }
            }), []);
            var _ = (0, e.useMemo)((function() {
                var e = function(e) {
                        var r = l.current,
                            t = s.current;
                        return l.current = s.current = null, c.current = e, u.current = m.current.apply(t, r)
                    },
                    r = function(e, r) {
                        d && cancelAnimationFrame(a.current), a.current = d ? requestAnimationFrame(e) : setTimeout(e, r)
                    },
                    n = function(e) {
                        if (!p.current) return !1;
                        var r = e - i.current;
                        return !i.current || r >= t || r < 0 || b && e - c.current >= w
                    },
                    _ = function(r) {
                        return a.current = null, g && l.current ? e(r) : (l.current = s.current = null, u.current)
                    },
                    y = function e() {
                        var o = Date.now();
                        if (n(o)) return _(o);
                        if (p.current) {
                            var a = t - (o - i.current),
                                l = b ? Math.min(a, w - (o - c.current)) : a;
                            r(e, l)
                        }
                    },
                    E = function() {
                        var m = Date.now(),
                            d = n(m);
                        if (l.current = [].slice.call(arguments), s.current = o, i.current = m, d) {
                            if (!a.current && p.current) return c.current = i.current, r(y, t), f ? e(i.current) : u.current;
                            if (b) return r(y, t), e(i.current)
                        }
                        return a.current || r(y, t), u.current
                    };
                return E.cancel = function() {
                    a.current && (d ? cancelAnimationFrame(a.current) : clearTimeout(a.current)), c.current = 0, l.current = i.current = s.current = a.current = null
                }, E.isPending = function() {
                    return !!a.current
                }, E.flush = function() {
                    return a.current ? _(Date.now()) : u.current
                }, E
            }), [f, b, t, w, g, d]);
            return _
        }

        function L(e, r) {
            return e === r
        }

        function M(e) {
            return "function" == typeof e ? function() {
                return e
            } : e
        }
        const j = e => !(e => null === e)(e) && e instanceof Object && e.constructor === Object;

        function I(e, r) {
            return j(e) && r in e
        }
        var q = function(e) {
                return function(r, t, n) {
                    return e(r, t, n) * n
                }
            },
            D = function(e, r) {
                if (e) throw Error("Invalid sort config: " + r)
            },
            G = function(e) {
                var r = e || {},
                    t = r.asc,
                    n = r.desc,
                    o = t ? 1 : -1,
                    i = t || n;
                return D(!i, "Expected `asc` or `desc` property"), D(t && n, "Ambiguous object with `asc` and `desc` config properties"), {
                    order: o,
                    sortBy: i,
                    comparer: e.comparer && q(e.comparer)
                }
            };

        function Q(e, r, t) {
            if (void 0 === e || !0 === e) return function(e, n) {
                return r(e, n, t)
            };
            if ("string" == typeof e) return D(e.includes("."), "String syntax not allowed for nested properties."),
                function(n, o) {
                    return r(n[e], o[e], t)
                };
            if ("function" == typeof e) return function(n, o) {
                return r(e(n), e(o), t)
            };
            if (Array.isArray(e)) {
                var n = function(e) {
                    return function r(t, n, o, i, c, a, l) {
                        var s, u;
                        if ("string" == typeof t) s = a[t], u = l[t];
                        else {
                            if ("function" != typeof t) {
                                var m = G(t);
                                return r(m.sortBy, n, o, m.order, m.comparer || e, a, l)
                            }
                            s = t(a), u = t(l)
                        }
                        var p = c(s, u, i);
                        return (0 === p || null == s && null == u) && n.length > o ? r(n[o], n, o + 1, i, c, a, l) : p
                    }
                }(r);
                return function(o, i) {
                    return n(e[0], e, 1, t, r, o, i)
                }
            }
            var o = G(e);
            return Q(o.sortBy, o.comparer || r, o.order)
        }
        var V = function(e, r, t, n) {
            return Array.isArray(r) ? (Array.isArray(t) && t.length < 2 && (t = t[0]), r.sort(Q(t, n, e))) : r
        };

        function Y(e) {
            var r = q(e.comparer);
            return function(t) {
                var n = Array.isArray(t) && !e.inPlaceSorting ? t.slice() : t;
                return {
                    asc: function(e) {
                        return V(1, n, e, r)
                    },
                    desc: function(e) {
                        return V(-1, n, e, r)
                    },
                    by: function(e) {
                        return V(1, n, e, r)
                    }
                }
            }
        }
        var W = function(e, r, t) {
                return null == e ? t : null == r ? -t : typeof e != typeof r ? typeof e < typeof r ? -1 : 1 : e < r ? -1 : e > r ? 1 : 0
            },
            K = Y({
                comparer: W
            });

        function $(e) {
            const t = (0, r.useRef)(e);
            return A()(e, t.current) || (t.current = e), t.current
        }
        Y({
            comparer: W,
            inPlaceSorting: !0
        });
        const z = ({
            queryAttribute: t,
            queryPrices: n,
            queryStock: o,
            queryRating: i,
            queryState: c,
            isEditor: a = !1
        }) => {
            let l = O();
            l = `${l}-collection-data`;
            const [s] = T(l), [u, m] = B("calculate_attribute_counts", [], l), [p, d] = B("calculate_price_range", null, l), [f, g] = B("calculate_stock_status_counts", null, l), [b, w] = B("calculate_rating_counts", null, l), _ = $(t || {}), y = $(n), E = $(o), h = $(i);
            (0, r.useEffect)((() => {
                "object" == typeof _ && Object.keys(_).length && (u.find((e => I(_, "taxonomy") && e.taxonomy === _.taxonomy)) || m([...u, _]))
            }), [_, u, m]), (0, r.useEffect)((() => {
                p !== y && void 0 !== y && d(y)
            }), [y, d, p]), (0, r.useEffect)((() => {
                f !== E && void 0 !== E && g(E)
            }), [E, g, f]), (0, r.useEffect)((() => {
                b !== h && void 0 !== h && w(h)
            }), [h, w, b]);
            const [v, k] = (0, r.useState)(a), [S] = (x = v, N = L, R = (0, e.useState)(M(x)), A = R[1], j = [R[0], (0, e.useCallback)((function(e) {
                return A(M(e))
            }), [])], q = j[0], D = j[1], G = U((0, e.useCallback)((function(e) {
                return D(e)
            }), [D]), 200, P), Q = (0, e.useRef)(x), N(Q.current, x) || (G(x), Q.current = x), [q, G]);
            var x, P, R, A, N, j, q, D, G, Q;
            v || k(!0);
            const V = (0, r.useMemo)((() => (e => {
                const r = e;
                return Array.isArray(e.calculate_attribute_counts) && (r.calculate_attribute_counts = K(e.calculate_attribute_counts.map((({
                    taxonomy: e,
                    queryType: r
                }) => ({
                    taxonomy: e,
                    query_type: r
                })))).asc(["taxonomy", "query_type"])), r
            })(s)), [s]);
            return (e => {
                const {
                    namespace: t,
                    resourceName: n,
                    resourceValues: o = [],
                    query: i = {},
                    shouldSelect: c = !0
                } = e;
                if (!t || !n) throw new Error("The options object must have valid values for the namespace and the resource properties.");
                const a = (0, r.useRef)({
                        results: [],
                        isLoading: !0
                    }),
                    l = $(i),
                    s = $(o),
                    u = (() => {
                        const [, e] = (0, r.useState)();
                        return (0, r.useCallback)((r => {
                            e((() => {
                                throw r
                            }))
                        }), [])
                    })(),
                    m = (0, C.useSelect)((e => {
                        if (!c) return null;
                        const r = e(F.COLLECTIONS_STORE_KEY),
                            o = [t, n, l, s],
                            i = r.getCollectionError(...o);
                        if (i) {
                            if (!(i instanceof Error)) throw new Error("TypeError: `error` object is not an instance of Error constructor");
                            u(i)
                        }
                        return {
                            results: r.getCollection(...o),
                            isLoading: !r.hasFinishedResolution("getCollection", o)
                        }
                    }), [t, n, s, l, c]);
                return null !== m && (a.current = m), a.current
            })({
                namespace: "/wc/store/v1",
                resourceName: "products/collection-data",
                query: { ...c,
                    page: void 0,
                    per_page: void 0,
                    orderby: void 0,
                    order: void 0,
                    ...V
                },
                shouldSelect: S
            })
        };
        var Z = t(3849),
            J = t.n(Z);
        const X = window.wc.blocksComponents;
        t(7507);
        const H = (e, r, t, n = 1, o = !1) => {
            let [i, c] = e;
            const a = e => Number.isFinite(e);
            return a(i) || (i = r || 0), a(c) || (c = t || n), a(r) && r > i && (i = r), a(t) && t <= i && (i = t - n), a(r) && r >= c && (c = r + n), a(t) && t < c && (c = t), !o && i >= c && (i = c - n), o && c <= i && (c = i + n), [i, c]
        };
        t(6099);
        const ee = ({
                className: r,
                isLoading: t,
                disabled: n,
                /* translators: Submit button text for filters. */
                label: i = (0, o.__)("Apply", "woocommerce"),
                onClick: c,
                screenReaderLabel: a = (0, o.__)("Apply filter", "woocommerce")
            }) => (0, e.createElement)("button", {
                type: "submit",
                className: J()("wp-block-button__link", "wc-block-filter-submit-button", "wc-block-components-filter-submit-button", {
                    "is-loading": t
                }, r),
                disabled: n,
                onClick: c
            }, (0, e.createElement)(X.Label, {
                label: i,
                screenReaderLabel: a
            })),
            re = ({
                maxConstraint: e,
                minorUnit: r
            }) => ({
                floatValue: t
            }) => void 0 !== t && t <= e / 10 ** r && t > 0,
            te = ({
                minConstraint: e,
                currentMaxValue: r,
                minorUnit: t
            }) => ({
                floatValue: n
            }) => void 0 !== n && n >= e / 10 ** t && n < r / 10 ** t;
        t(2728);
        const ne = ({
                className: r,
                /* translators: Reset button text for filters. */
                label: t = (0, o.__)("Reset", "woocommerce"),
                onClick: n,
                screenReaderLabel: i = (0, o.__)("Reset filter", "woocommerce")
            }) => (0, e.createElement)("button", {
                className: J()("wc-block-components-filter-reset-button", r),
                onClick: n
            }, (0, e.createElement)(X.Label, {
                label: t,
                screenReaderLabel: i
            })),
            oe = ({
                minPrice: t,
                maxPrice: n,
                minConstraint: i,
                maxConstraint: c,
                onChange: a,
                step: l,
                currency: s,
                showInputFields: u = !0,
                showFilterButton: m = !1,
                inlineInput: p = !0,
                isLoading: d = !1,
                isUpdating: f = !1,
                isEditor: g = !1,
                onSubmit: b = (() => {})
            }) => {
                const w = (0, r.useRef)(null),
                    _ = (0, r.useRef)(null),
                    y = l || 10 ** s.minorUnit,
                    [E, h] = (0, r.useState)(t),
                    [v, k] = (0, r.useState)(n),
                    S = (0, r.useRef)(null),
                    [x, P] = (0, r.useState)(0);
                (0, r.useEffect)((() => {
                    h(t)
                }), [t]), (0, r.useEffect)((() => {
                    k(n)
                }), [n]), (0, r.useLayoutEffect)((() => {
                    var e;
                    p && S.current && P(null === (e = S.current) || void 0 === e ? void 0 : e.offsetWidth)
                }), [p, P]);
                const F = (0, r.useMemo)((() => isFinite(i) && isFinite(c)), [i, c]),
                    C = (0, r.useMemo)((() => isFinite(t) && isFinite(n) && F ? {
                        "--low": (t - i) / (c - i) * 100 + "%",
                        "--high": (n - i) / (c - i) * 100 + "%"
                    } : {
                        "--low": "0%",
                        "--high": "100%"
                    }), [t, n, i, c, F]),
                    R = (0, r.useCallback)((e => {
                        if (d || !F || !w.current || !_.current) return;
                        const r = e.target.getBoundingClientRect(),
                            t = e.clientX - r.left,
                            n = w.current.offsetWidth,
                            o = +w.current.value,
                            i = _.current.offsetWidth,
                            a = +_.current.value,
                            l = n * (o / c),
                            s = i * (a / c);
                        Math.abs(t - l) > Math.abs(t - s) ? (w.current.style.zIndex = "20", _.current.style.zIndex = "21") : (w.current.style.zIndex = "21", _.current.style.zIndex = "20")
                    }), [d, c, F]),
                    A = (0, r.useCallback)((e => {
                        const r = e.target.classList.contains("wc-block-price-filter__range-input--min"),
                            o = +e.target.value,
                            l = r ? [Math.round(o / y) * y, n] : [t, Math.round(o / y) * y],
                            s = H(l, i, c, y, r);
                        a(s)
                    }), [a, t, n, i, c, y]),
                    N = (0, r.useCallback)((e => {
                        if (e.relatedTarget && e.relatedTarget.classList && e.relatedTarget.classList.contains("wc-block-price-filter__amount")) return;
                        const r = e.target.classList.contains("wc-block-price-filter__amount--min");
                        if (E >= v) {
                            const e = H([0, v], null, null, y, r);
                            return a([parseInt(e[0], 10), parseInt(e[1], 10)])
                        }
                        const t = H([E, v], null, null, y, r);
                        a(t)
                    }), [a, y, E, v]),
                    O = U(b, 600),
                    T = J()("wc-block-price-filter", "wc-block-components-price-slider", u && "wc-block-price-filter--has-input-fields", u && "wc-block-components-price-slider--has-input-fields", m && "wc-block-price-filter--has-filter-button", m && "wc-block-components-price-slider--has-filter-button", !F && "is-disabled", (p || x <= 300) && "wc-block-components-price-slider--is-input-inline"),
                    B = j(w.current) ? w.current.ownerDocument.activeElement : void 0,
                    L = B && B === w.current ? y : 1,
                    M = B && B === _.current ? y : 1,
                    I = String(E / 10 ** s.minorUnit),
                    q = String(v / 10 ** s.minorUnit),
                    D = p && x > 300,
                    G = (0, e.createElement)("div", {
                        className: J()("wc-block-price-filter__range-input-wrapper", "wc-block-components-price-slider__range-input-wrapper", {
                            "is-loading": d && f
                        }),
                        onMouseMove: R,
                        onFocus: R
                    }, F && (0, e.createElement)("div", {
                        "aria-hidden": u
                    }, (0, e.createElement)("div", {
                        className: "wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",
                        style: C
                    }), (0, e.createElement)("input", {
                        type: "range",
                        className: "wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min",
                        "aria-label": (0, o.__)("Filter products by minimum price", "woocommerce"),
                        "aria-valuetext": I,
                        value: Number.isFinite(t) ? t : i,
                        onChange: A,
                        step: L,
                        min: i,
                        max: c,
                        ref: w,
                        disabled: d && !F,
                        tabIndex: u ? -1 : 0
                    }), (0, e.createElement)("input", {
                        type: "range",
                        className: "wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max",
                        "aria-label": (0, o.__)("Filter products by maximum price", "woocommerce"),
                        "aria-valuetext": q,
                        value: Number.isFinite(n) ? n : c,
                        onChange: A,
                        step: M,
                        min: i,
                        max: c,
                        ref: _,
                        disabled: d,
                        tabIndex: u ? -1 : 0
                    }))),
                    Q = e => `wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,
                    V = {
                        currency: s,
                        decimalScale: 0
                    },
                    Y = { ...V,
                        displayType: "input",
                        allowNegative: !1,
                        disabled: d || !F,
                        onBlur: N
                    };
                return (0, e.createElement)("div", {
                    className: T,
                    ref: S
                }, (!D || !u) && G, u && (0, e.createElement)("div", {
                    className: "wc-block-price-filter__controls wc-block-components-price-slider__controls"
                }, f ? (0, e.createElement)("div", {
                    className: "input-loading"
                }) : (0, e.createElement)(X.FormattedMonetaryAmount, { ...Y,
                    className: Q("min"),
                    "aria-label": (0, o.__)("Filter products by minimum price", "woocommerce"),
                    isAllowed: te({
                        minConstraint: i,
                        minorUnit: s.minorUnit,
                        currentMaxValue: v
                    }),
                    onValueChange: e => {
                        e !== E && h(e)
                    },
                    value: E
                }), D && G, f ? (0, e.createElement)("div", {
                    className: "input-loading"
                }) : (0, e.createElement)(X.FormattedMonetaryAmount, { ...Y,
                    className: Q("max"),
                    "aria-label": (0, o.__)("Filter products by maximum price", "woocommerce"),
                    isAllowed: re({
                        maxConstraint: c,
                        minorUnit: s.minorUnit
                    }),
                    onValueChange: e => {
                        e !== v && k(e)
                    },
                    value: v
                })), !u && !f && Number.isFinite(t) && Number.isFinite(n) && (0, e.createElement)("div", {
                    className: "wc-block-price-filter__range-text wc-block-components-price-slider__range-text"
                }, (0, e.createElement)(X.FormattedMonetaryAmount, { ...V,
                    value: t
                }), (0, e.createElement)(X.FormattedMonetaryAmount, { ...V,
                    value: n
                })), (0, e.createElement)("div", {
                    className: "wc-block-components-price-slider__actions"
                }, (g || !f && (t !== i || n !== c)) && (0, e.createElement)(ne, {
                    onClick: () => {
                        a([i, c]), O()
                    },
                    screenReaderLabel: (0, o.__)("Reset price filter", "woocommerce")
                }), m && (0, e.createElement)(ee, {
                    className: "wc-block-price-filter__button wc-block-components-price-slider__button",
                    isLoading: f,
                    disabled: d || !F,
                    onClick: b,
                    screenReaderLabel: (0, o.__)("Apply price filter", "woocommerce")
                })))
            };
        t(1753);
        const ie = ({
                children: r
            }) => (0, e.createElement)("div", {
                className: "wc-block-filter-title-placeholder"
            }, r),
            ce = window.wc.priceFormat,
            ae = window.wp.url,
            le = e => "boolean" == typeof e,
            se = (0, i.getSettingWithCoercion)("isRenderingPhpTemplate", !1, le);

        function ue(e) {
            return window ? (0, ae.getQueryArg)(window.location.href, e) : null
        }

        function me(e) {
            if (se) {
                const r = new URL(e);
                r.pathname = r.pathname.replace(/\/page\/[0-9]+/i, ""), r.searchParams.delete("paged"), r.searchParams.forEach(((e, t) => {
                    t.match(/^query(?:-[0-9]+)?-page$/) && r.searchParams.delete(t)
                })), window.location.href = r.href
            } else window.history.replaceState({}, "", e)
        }
        const pe = e => "string" == typeof e,
            de = "ROUND_UP",
            fe = "ROUND_DOWN",
            ge = (e, r, t) => {
                const n = 10 * 10 ** r;
                let o = null;
                const i = parseFloat(e);
                isNaN(i) || (t === de ? o = Math.ceil(i / n) * n : t === fe && (o = Math.floor(i / n) * n));
                const c = P(o, Number.isFinite);
                return Number.isFinite(o) ? o : c
            };
        t(9432);
        const be = (0, r.createContext)({});

        function we(e, r) {
            return Number(e) * 10 ** r
        }
        const _e = JSON.parse('{"Y4":{"D8":{"Z":3}}}');
        (e => {
            const r = document.body.querySelectorAll(S.join(",")),
                {
                    Block: t,
                    getProps: n,
                    getErrorBoundaryProps: o,
                    selector: i
                } = e;
            (({
                Block: e,
                getProps: r,
                getErrorBoundaryProps: t,
                selector: n,
                wrappers: o
            }) => {
                const i = document.body.querySelectorAll(n);
                o && o.length > 0 && Array.prototype.filter.call(i, (e => !((e, r) => Array.prototype.some.call(r, (r => r.contains(e) && !r.isSameNode(e))))(e, o))), x({
                    Block: e,
                    containers: i,
                    getProps: r,
                    getErrorBoundaryProps: t
                })
            })({
                Block: t,
                getProps: n,
                getErrorBoundaryProps: o,
                selector: i,
                wrappers: r
            }), Array.prototype.forEach.call(r, (r => {
                r.addEventListener("wc-blocks_render_blocks_frontend", (() => {
                    (({
                        Block: e,
                        getProps: r,
                        getErrorBoundaryProps: t,
                        selector: n,
                        wrapper: o
                    }) => {
                        const i = o.querySelectorAll(n);
                        x({
                            Block: e,
                            containers: i,
                            getProps: r,
                            getErrorBoundaryProps: t
                        })
                    })({ ...e,
                        wrapper: r
                    })
                }))
            }))
        })({
            selector: ".wp-block-woocommerce-price-filter",
            Block: ({
                attributes: t,
                isEditor: n = !1
            }) => {
                const o = (() => {
                        const {
                            wrapper: e
                        } = (0, r.useContext)(be);
                        return r => {
                            e && e.current && (e.current.hidden = !r)
                        }
                    })(),
                    c = (0, i.getSettingWithCoercion)("hasFilterableProducts", !1, le),
                    a = (0, i.getSettingWithCoercion)("isRenderingPhpTemplate", !1, le),
                    [l, s] = (0, r.useState)(!1),
                    u = ue("min_price"),
                    m = ue("max_price"),
                    [p] = T(),
                    {
                        results: d,
                        isLoading: f
                    } = z({
                        queryPrices: !0,
                        queryState: p,
                        isEditor: n
                    }),
                    g = (0, ce.getCurrencyFromPriceResponse)(I(d, "price_range") ? d.price_range : void 0),
                    [b, w] = B("min_price"),
                    [_, y] = B("max_price"),
                    [E, h] = (0, r.useState)(we(u, g.minorUnit) || null),
                    [v, k] = (0, r.useState)(we(m, g.minorUnit) || null),
                    {
                        minConstraint: S,
                        maxConstraint: x
                    } = (({
                        minPrice: e,
                        maxPrice: r,
                        minorUnit: t
                    }) => ({
                        minConstraint: ge(e || "", t, fe),
                        maxConstraint: ge(r || "", t, de)
                    }))({
                        minPrice: I(d, "price_range") && I(d.price_range, "min_price") && pe(d.price_range.min_price) ? d.price_range.min_price : void 0,
                        maxPrice: I(d, "price_range") && I(d.price_range, "max_price") && pe(d.price_range.max_price) ? d.price_range.max_price : void 0,
                        minorUnit: g.minorUnit
                    });
                (0, r.useEffect)((() => {
                    l || (w(we(u, g.minorUnit)), y(we(m, g.minorUnit)), s(!0))
                }), [g.minorUnit, l, m, u, y, w]);
                const [F, C] = (0, r.useState)(f), R = (0, r.useCallback)(((e, r) => {
                    const t = r >= Number(x) ? void 0 : r,
                        n = e <= Number(S) ? void 0 : e;
                    if (window) {
                        const e = function(e, r) {
                            const t = {};
                            for (const [e, n] of Object.entries(r)) n ? t[e] = n.toString() : delete t[e];
                            const n = (0, ae.removeQueryArgs)(e, ...Object.keys(r));
                            return (0, ae.addQueryArgs)(n, t)
                        }(window.location.href, {
                            min_price: n / 10 ** g.minorUnit,
                            max_price: t / 10 ** g.minorUnit
                        });
                        window.location.href !== e && me(e)
                    }
                    w(n), y(t)
                }), [S, x, w, y, g.minorUnit]), A = U(R, 500), N = (0, r.useCallback)((e => {
                    C(!0), e[0] !== E && h(e[0]), e[1] !== v && k(e[1]), a && l && !t.showFilterButton && A(e[0], e[1])
                }), [E, v, h, k, a, l, A, t.showFilterButton]);
                (0, r.useEffect)((() => {
                    t.showFilterButton || a || A(E, v)
                }), [E, v, t.showFilterButton, A, a]);
                const O = P(b),
                    L = P(_),
                    M = P(S),
                    j = P(x);
                if ((0, r.useEffect)((() => {
                        (!Number.isFinite(E) || b !== O && b !== E || S !== M && S !== E) && h(Number.isFinite(b) ? b : S), (!Number.isFinite(v) || _ !== L && _ !== v || x !== j && x !== v) && k(Number.isFinite(_) ? _ : x)
                    }), [E, v, b, _, S, x, M, j, O, L]), !c) return o(!1), null;
                if (!f && (null === S || null === x || S === x)) return o(!1), null;
                const q = `h${t.headingLevel}`;
                o(!0), !f && F && C(!1);
                const D = (0, e.createElement)(q, {
                        className: "wc-block-price-filter__title"
                    }, t.heading),
                    G = f && F ? (0, e.createElement)(ie, null, D) : D;
                return (0, e.createElement)(e.Fragment, null, !n && t.heading && G, (0, e.createElement)("div", {
                    className: "wc-block-price-slider"
                }, (0, e.createElement)(oe, {
                    minConstraint: S,
                    maxConstraint: x,
                    minPrice: E,
                    maxPrice: v,
                    currency: g,
                    showInputFields: t.showInputFields,
                    inlineInput: t.inlineInput,
                    showFilterButton: t.showFilterButton,
                    onChange: N,
                    onSubmit: () => R(E, v),
                    isLoading: f,
                    isUpdating: F,
                    isEditor: n
                })))
            },
            getProps: e => {
                return {
                    attributes: (r = e.dataset, {
                        heading: pe(null == r ? void 0 : r.heading) ? r.heading : "",
                        headingLevel: pe(null == r ? void 0 : r.headingLevel) && parseInt(r.headingLevel, 10) || _e.Y4.D8.Z,
                        showFilterButton: "true" === (null == r ? void 0 : r.showFilterButton),
                        showInputFields: "false" !== (null == r ? void 0 : r.showInputFields),
                        inlineInput: "true" === (null == r ? void 0 : r.inlineInput)
                    }),
                    isEditor: !1
                };
                var r
            }
        })
    })()
})();