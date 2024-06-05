(() => {
    "use strict";
    var e = {
            d: (r, t) => {
                for (var o in t) e.o(t, o) && !e.o(r, o) && Object.defineProperty(r, o, {
                    enumerable: !0,
                    get: t[o]
                })
            },
            o: (e, r) => Object.prototype.hasOwnProperty.call(e, r),
            r: e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        r = {};
    e.r(r), e.d(r, {
        formatPrice: () => s,
        getCurrency: () => c,
        getCurrencyFromPriceResponse: () => a
    });
    const t = window.wc.wcSettings,
        o = {
            code: t.CURRENCY.code,
            symbol: t.CURRENCY.symbol,
            thousandSeparator: t.CURRENCY.thousandSeparator,
            decimalSeparator: t.CURRENCY.decimalSeparator,
            minorUnit: t.CURRENCY.precision,
            prefix: (i = t.CURRENCY.symbol, n = t.CURRENCY.symbolPosition, {
                left: i,
                left_space: " " + i,
                right: "",
                right_space: ""
            }[n] || ""),
            suffix: ((e, r) => ({
                left: "",
                left_space: "",
                right: e,
                right_space: " " + e
            }[r] || ""))(t.CURRENCY.symbol, t.CURRENCY.symbolPosition)
        };
    var i, n;
    const a = e => {
            if (null == e || !e.currency_code) return o;
            const {
                currency_code: r,
                currency_symbol: t,
                currency_thousand_separator: i,
                currency_decimal_separator: n,
                currency_minor_unit: a,
                currency_prefix: c,
                currency_suffix: s
            } = e;
            return {
                code: r || "USD",
                symbol: t || "$",
                thousandSeparator: "string" == typeof i ? i : ",",
                decimalSeparator: "string" == typeof n ? n : ".",
                minorUnit: Number.isFinite(a) ? a : 2,
                prefix: "string" == typeof c ? c : "$",
                suffix: "string" == typeof s ? s : ""
            }
        },
        c = (e = {}) => ({ ...o,
            ...e
        }),
        s = (e, r) => {
            if ("" === e || void 0 === e) return "";
            const t = "number" == typeof e ? e : parseInt(e, 10);
            if (!Number.isFinite(t)) return "";
            const o = c(r),
                {
                    minorUnit: i,
                    prefix: n,
                    suffix: a,
                    decimalSeparator: s,
                    thousandSeparator: u
                } = o,
                p = t / 10 ** i,
                {
                    beforeDecimal: l,
                    afterDecimal: f
                } = (e => {
                    const r = e.split(".");
                    return {
                        beforeDecimal: r[0],
                        afterDecimal: r[1] || ""
                    }
                })(p.toString()),
                m = `${n}${((e,r)=>e.replace(/\B(?=(\d{3})+(?!\d))/g,r))(l,u)}${((e,r,t)=>e?`${r}${e.padEnd(t,"0")}`:t>0?`${r}${"0".repeat(t)}`:"")(f,s,i)}${a}`,
                y = document.createElement("textarea");
            return y.innerHTML = m, y.value
        };
    (this.wc = this.wc || {}).priceFormat = r
})();