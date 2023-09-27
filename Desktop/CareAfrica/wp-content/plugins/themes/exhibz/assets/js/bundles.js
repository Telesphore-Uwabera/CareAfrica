(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
}
)(this, function () {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var o = window.getComputedStyle(e, null);
        return t ? o[t] : o
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName))
            return window.document.body;
        var i = t(e)
            , r = i.overflow
            , p = i.overflowX
            , s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
    }
    function r(e) {
        var o = e && e.offsetParent
            , i = o && o.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement
    }
    function p(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }
    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return window.document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
            , i = o ? e : t
            , n = o ? t : e
            , a = document.createRange();
        a.setStart(i, 0),
            a.setEnd(n, 0);
        var l = a.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(n))
            return p(l) ? l : r(l);
        var f = s(e);
        return f.host ? d(f.host, t) : d(e, s(t).host)
    }
    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
            , o = 'top' === t ? 'scrollTop' : 'scrollLeft'
            , i = e.nodeName;
        if ('BODY' === i || 'HTML' === i) {
            var n = window.document.documentElement
                , r = window.document.scrollingElement || n;
            return r[o]
        }
        return e[o]
    }
    function l(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
            , i = a(t, 'top')
            , n = a(t, 'left')
            , r = o ? -1 : 1;
        return e.top += i * r,
            e.bottom += i * r,
            e.left += n * r,
            e.right += n * r,
            e
    }
    function f(e, t) {
        var o = 'x' === t ? 'Left' : 'Top'
            , i = 'Left' == o ? 'Right' : 'Bottom';
        return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0]
    }
    function m(e, t, o, i) {
        return X(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ne() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }
    function c() {
        var e = window.document.body
            , t = window.document.documentElement
            , o = ne() && window.getComputedStyle(t);
        return {
            height: m('Height', e, t, o),
            width: m('Width', e, t, o)
        }
    }
    function h(e) {
        return de({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function g(e) {
        var o = {};
        if (ne())
            try {
                o = e.getBoundingClientRect();
                var i = a(e, 'top')
                    , n = a(e, 'left');
                o.top += i,
                    o.left += n,
                    o.bottom += i,
                    o.right += n
            } catch (e) { }
        else
            o = e.getBoundingClientRect();
        var r = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }
            , p = 'HTML' === e.nodeName ? c() : {}
            , s = p.width || e.clientWidth || r.right - r.left
            , d = p.height || e.clientHeight || r.bottom - r.top
            , l = e.offsetWidth - s
            , m = e.offsetHeight - d;
        if (l || m) {
            var g = t(e);
            l -= f(g, 'x'),
                m -= f(g, 'y'),
                r.width -= l,
                r.height -= m
        }
        return h(r)
    }
    function u(e, o) {
        var i = ne()
            , r = 'HTML' === o.nodeName
            , p = g(e)
            , s = g(o)
            , d = n(e)
            , a = t(o)
            , f = +a.borderTopWidth.split('px')[0]
            , m = +a.borderLeftWidth.split('px')[0]
            , c = h({
                top: p.top - s.top - f,
                left: p.left - s.left - m,
                width: p.width,
                height: p.height
            });
        if (c.marginTop = 0,
            c.marginLeft = 0,
            !i && r) {
            var u = +a.marginTop.split('px')[0]
                , b = +a.marginLeft.split('px')[0];
            c.top -= f - u,
                c.bottom -= f - u,
                c.left -= m - b,
                c.right -= m - b,
                c.marginTop = u,
                c.marginLeft = b
        }
        return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (c = l(c, o)),
            c
    }
    function b(e) {
        var t = window.document.documentElement
            , o = u(e, t)
            , i = X(t.clientWidth, window.innerWidth || 0)
            , n = X(t.clientHeight, window.innerHeight || 0)
            , r = a(t)
            , p = a(t, 'left')
            , s = {
                top: r - o.top + o.marginTop,
                left: p - o.left + o.marginLeft,
                width: i,
                height: n
            };
        return h(s)
    }
    function y(e) {
        var i = e.nodeName;
        return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
    }
    function w(e, t, i, r) {
        var p = {
            top: 0,
            left: 0
        }
            , s = d(e, t);
        if ('viewport' === r)
            p = b(s);
        else {
            var a;
            'scrollParent' === r ? (a = n(o(e)),
                'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
            var l = u(a, s);
            if ('HTML' === a.nodeName && !y(s)) {
                var f = c()
                    , m = f.height
                    , h = f.width;
                p.top += l.top - l.marginTop,
                    p.bottom = m + l.top,
                    p.left += l.left - l.marginLeft,
                    p.right = h + l.left
            } else
                p = l
        }
        return p.left += i,
            p.top += i,
            p.right -= i,
            p.bottom -= i,
            p
    }
    function E(e) {
        var t = e.width
            , o = e.height;
        return t * o
    }
    function v(e, t, o, i, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var p = w(o, i, r, n)
            , s = {
                top: {
                    width: p.width,
                    height: t.top - p.top
                },
                right: {
                    width: p.right - t.right,
                    height: p.height
                },
                bottom: {
                    width: p.width,
                    height: p.bottom - t.bottom
                },
                left: {
                    width: t.left - p.left,
                    height: p.height
                }
            }
            , d = Object.keys(s).map(function (e) {
                return de({
                    key: e
                }, s[e], {
                    area: E(s[e])
                })
            }).sort(function (e, t) {
                return t.area - e.area
            })
            , a = d.filter(function (e) {
                var t = e.width
                    , i = e.height;
                return t >= o.clientWidth && i >= o.clientHeight
            })
            , l = 0 < a.length ? a[0].key : d[0].key
            , f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }
    function x(e, t, o) {
        var i = d(t, o);
        return u(o, i)
    }
    function O(e) {
        var t = window.getComputedStyle(e)
            , o = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
            , i = parseFloat(t.marginLeft) + parseFloat(t.marginRight)
            , n = {
                width: e.offsetWidth + i,
                height: e.offsetHeight + o
            };
        return n
    }
    function L(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }
    function S(e, t, o) {
        o = o.split('-')[0];
        var i = O(e)
            , n = {
                width: i.width,
                height: i.height
            }
            , r = -1 !== ['right', 'left'].indexOf(o)
            , p = r ? 'top' : 'left'
            , s = r ? 'left' : 'top'
            , d = r ? 'height' : 'width'
            , a = r ? 'width' : 'height';
        return n[p] = t[p] + t[d] / 2 - i[d] / 2,
            n[s] = o === s ? t[s] - i[a] : t[L(s)],
            n
    }
    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function C(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function (e) {
                return e[t] === o
            });
        var i = T(e, function (e) {
            return e[t] === o
        });
        return e.indexOf(i)
    }
    function N(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
        return n.forEach(function (t) {
            t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var i = t.function || t.fn;
            t.enabled && e(i) && (o.offsets.popper = h(o.offsets.popper),
                o.offsets.reference = h(o.offsets.reference),
                o = i(o, t))
        }),
            o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = x(this.state, this.popper, this.reference),
                e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                e.originalPlacement = e.placement,
                e.offsets.popper = S(this.popper, e.offsets.reference, e.placement),
                e.offsets.popper.position = 'absolute',
                e = N(this.modifiers, e),
                this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                    this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function (e) {
            var o = e.name
                , i = e.enabled;
            return i && o === t
        })
    }
    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var i = t[n]
                , r = i ? '' + i + o : e;
            if ('undefined' != typeof window.document.body.style[r])
                return r
        }
        return null
    }
    function P() {
        return this.state.isDestroyed = !0,
            W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
                this.popper.style.left = '',
                this.popper.style.position = '',
                this.popper.style.top = '',
                this.popper.style[B('transform')] = ''),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
    }
    function D(e, t, o, i) {
        var r = 'BODY' === e.nodeName
            , p = r ? window : e;
        p.addEventListener(t, o, {
            passive: !0
        }),
            r || D(n(p.parentNode), t, o, i),
            i.push(p)
    }
    function H(e, t, o, i) {
        o.updateBound = i,
            window.addEventListener('resize', o.updateBound, {
                passive: !0
            });
        var r = n(e);
        return D(r, 'scroll', o.updateBound, o.scrollParents),
            o.scrollElement = r,
            o.eventsEnabled = !0,
            o
    }
    function A() {
        this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function M(e, t) {
        return window.removeEventListener('resize', t.updateBound),
            t.scrollParents.forEach(function (e) {
                e.removeEventListener('scroll', t.updateBound)
            }),
            t.updateBound = null,
            t.scrollParents = [],
            t.scrollElement = null,
            t.eventsEnabled = !1,
            t
    }
    function I() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate),
            this.state = M(this.reference, this.state))
    }
    function R(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function U(e, t) {
        Object.keys(t).forEach(function (o) {
            var i = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'),
                e.style[o] = t[o] + i
        })
    }
    function Y(e, t) {
        Object.keys(t).forEach(function (o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function F(e, t, o) {
        var i = T(e, function (e) {
            var o = e.name;
            return o === t
        })
            , n = !!i && e.some(function (e) {
                return e.name === o && e.enabled && e.order < i.order
            });
        if (!n) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return n
    }
    function j(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function K(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
            , o = le.indexOf(e)
            , i = le.slice(o + 1).concat(le.slice(0, o));
        return t ? i.reverse() : i
    }
    function q(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
            , r = +n[1]
            , p = n[2];
        if (!r)
            return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = i;
            }
            var d = h(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? X(document.documentElement.clientHeight, window.innerHeight || 0) : X(document.documentElement.clientWidth, window.innerWidth || 0),
                a / 100 * r
        }
        return r
    }
    function G(e, t, o, i) {
        var n = [0, 0]
            , r = -1 !== ['right', 'left'].indexOf(i)
            , p = e.split(/(\+|\-)/).map(function (e) {
                return e.trim()
            })
            , s = p.indexOf(T(p, function (e) {
                return -1 !== e.search(/,|\s/)
            }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/
            , a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function (e, i) {
            var n = (1 === i ? !r : r) ? 'height' : 'width'
                , p = !1;
            return e.reduce(function (e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
                    p = !0,
                    e) : p ? (e[e.length - 1] += t,
                        p = !1,
                        e) : e.concat(t)
            }, []).map(function (e) {
                return q(e, n, t, o)
            })
        }),
            a.forEach(function (e, t) {
                e.forEach(function (o, i) {
                    R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
                })
            }),
            n
    }
    function z(e, t) {
        var o, i = t.offset, n = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = n.split('-')[0];
        return o = R(+i) ? [+i, 0] : G(i, p, s, d),
            'left' === d ? (p.top += o[0],
                p.left -= o[1]) : 'right' === d ? (p.top += o[0],
                    p.left += o[1]) : 'top' === d ? (p.left += o[0],
                        p.top -= o[1]) : 'bottom' === d && (p.left += o[0],
                            p.top += o[1]),
            e.popper = p,
            e
    }
    for (var V = Math.min, _ = Math.floor, X = Math.max, Q = ['native code', '[object MutationObserverConstructor]'], J = function (e) {
        return Q.some(function (t) {
            return -1 < (e || '').toString().indexOf(t)
        })
    }, Z = 'undefined' != typeof window, $ = ['Edge', 'Trident', 'Firefox'], ee = 0, te = 0; te < $.length; te += 1)
        if (Z && 0 <= navigator.userAgent.indexOf($[te])) {
            ee = 1;
            break
        }
    var i, oe = Z && J(window.MutationObserver), ie = oe ? function (e) {
        var t = !1
            , o = 0
            , i = document.createElement('span')
            , n = new MutationObserver(function () {
                e(),
                    t = !1
            }
            );
        return n.observe(i, {
            attributes: !0
        }),
            function () {
                t || (t = !0,
                    i.setAttribute('x-index', o),
                    ++o)
            }
    }
        : function (e) {
            var t = !1;
            return function () {
                t || (t = !0,
                    setTimeout(function () {
                        t = !1,
                            e()
                    }, ee))
            }
        }
        , ne = function () {
            return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')),
                i
        }, re = function (e, t) {
            if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
        }, pe = function () {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++)
                    o = t[n],
                        o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o)
            }
            return function (t, o, i) {
                return o && e(t.prototype, o),
                    i && e(t, i),
                    t
            }
        }(), se = function (e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
                e
        }, de = Object.assign || function (e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var i in t = arguments[o],
                    t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        , ae = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], le = ae.slice(3), fe = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        }, me = function () {
            function t(o, i) {
                var n = this
                    , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                re(this, t),
                    this.scheduleUpdate = function () {
                        return requestAnimationFrame(n.update)
                    }
                    ,
                    this.update = ie(this.update.bind(this)),
                    this.options = de({}, t.Defaults, r),
                    this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    },
                    this.reference = o.jquery ? o[0] : o,
                    this.popper = i.jquery ? i[0] : i,
                    this.options.modifiers = {},
                    Object.keys(de({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                        n.options.modifiers[e] = de({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                    }),
                    this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                        return de({
                            name: e
                        }, n.options.modifiers[e])
                    }).sort(function (e, t) {
                        return e.order - t.order
                    }),
                    this.modifiers.forEach(function (t) {
                        t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                    }),
                    this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(),
                    this.state.eventsEnabled = p
            }
            return pe(t, [{
                key: 'update',
                value: function () {
                    return k.call(this)
                }
            }, {
                key: 'destroy',
                value: function () {
                    return P.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function () {
                    return A.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function () {
                    return I.call(this)
                }
            }]),
                t
        }();
    return me.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
        me.placements = ae,
        me.Defaults = {
            placement: 'bottom',
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () { },
            onUpdate: function () { },
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement
                            , o = t.split('-')[0]
                            , i = t.split('-')[1];
                        if (i) {
                            var n = e.offsets
                                , r = n.reference
                                , p = n.popper
                                , s = -1 !== ['bottom', 'top'].indexOf(o)
                                , d = s ? 'left' : 'top'
                                , a = s ? 'width' : 'height'
                                , l = {
                                    start: se({}, d, r[d]),
                                    end: se({}, d, r[d] + r[a] - p[a])
                                };
                            e.offsets.popper = de({}, p, l[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: z,
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.boundariesElement || r(e.instance.popper);
                        e.instance.reference === o && (o = r(o));
                        var i = w(e.instance.popper, e.instance.reference, t.padding, o);
                        t.boundaries = i;
                        var n = t.priority
                            , p = e.offsets.popper
                            , s = {
                                primary: function (e) {
                                    var o = p[e];
                                    return p[e] < i[e] && !t.escapeWithReference && (o = X(p[e], i[e])),
                                        se({}, e, o)
                                },
                                secondary: function (e) {
                                    var o = 'right' === e ? 'left' : 'top'
                                        , n = p[o];
                                    return p[e] > i[e] && !t.escapeWithReference && (n = V(p[o], i[e] - ('right' === e ? p.width : p.height))),
                                        se({}, o, n)
                                }
                            };
                        return n.forEach(function (e) {
                            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                            p = de({}, p, s[t](e))
                        }),
                            e.offsets.popper = p,
                            e
                    },
                    priority: ['left', 'right', 'top', 'bottom'],
                    padding: 5,
                    boundariesElement: 'scrollParent'
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets
                            , o = t.popper
                            , i = t.reference
                            , n = e.placement.split('-')[0]
                            , r = _
                            , p = -1 !== ['top', 'bottom'].indexOf(n)
                            , s = p ? 'right' : 'bottom'
                            , d = p ? 'left' : 'top'
                            , a = p ? 'width' : 'height';
                        return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]),
                            o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])),
                            e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, o) {
                        if (!F(e.instance.modifiers, 'arrow', 'keepTogether'))
                            return e;
                        var i = o.element;
                        if ('string' == typeof i) {
                            if (i = e.instance.popper.querySelector(i),
                                !i)
                                return e;
                        } else if (!e.instance.popper.contains(i))
                            return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                                e;
                        var n = e.placement.split('-')[0]
                            , r = e.offsets
                            , p = r.popper
                            , s = r.reference
                            , d = -1 !== ['left', 'right'].indexOf(n)
                            , a = d ? 'height' : 'width'
                            , l = d ? 'Top' : 'Left'
                            , f = l.toLowerCase()
                            , m = d ? 'left' : 'top'
                            , c = d ? 'bottom' : 'right'
                            , g = O(i)[a];
                        s[c] - g < p[f] && (e.offsets.popper[f] -= p[f] - (s[c] - g)),
                            s[f] + g > p[c] && (e.offsets.popper[f] += s[f] + g - p[c]);
                        var u = s[f] + s[a] / 2 - g / 2
                            , b = t(e.instance.popper, 'margin' + l).replace('px', '')
                            , y = u - h(e.offsets.popper)[f] - b;
                        return y = X(V(p[a] - g, y), 0),
                            e.arrowElement = i,
                            e.offsets.arrow = {},
                            e.offsets.arrow[f] = Math.round(y),
                            e.offsets.arrow[m] = '',
                            e
                    },
                    element: '[x-arrow]'
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (W(e.instance.modifiers, 'inner'))
                            return e;
                        if (e.flipped && e.placement === e.originalPlacement)
                            return e;
                        var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement)
                            , i = e.placement.split('-')[0]
                            , n = L(i)
                            , r = e.placement.split('-')[1] || ''
                            , p = [];
                        switch (t.behavior) {
                            case fe.FLIP:
                                p = [i, n];
                                break;
                            case fe.CLOCKWISE:
                                p = K(i);
                                break;
                            case fe.COUNTERCLOCKWISE:
                                p = K(i, !0);
                                break;
                            default:
                                p = t.behavior;
                        }
                        return p.forEach(function (s, d) {
                            if (i !== s || p.length === d + 1)
                                return e;
                            i = e.placement.split('-')[0],
                                n = L(i);
                            var a = e.offsets.popper
                                , l = e.offsets.reference
                                , f = _
                                , m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom)
                                , c = f(a.left) < f(o.left)
                                , h = f(a.right) > f(o.right)
                                , g = f(a.top) < f(o.top)
                                , u = f(a.bottom) > f(o.bottom)
                                , b = 'left' === i && c || 'right' === i && h || 'top' === i && g || 'bottom' === i && u
                                , y = -1 !== ['top', 'bottom'].indexOf(i)
                                , w = !!t.flipVariations && (y && 'start' === r && c || y && 'end' === r && h || !y && 'start' === r && g || !y && 'end' === r && u);
                            (m || b || w) && (e.flipped = !0,
                                (m || b) && (i = p[d + 1]),
                                w && (r = j(r)),
                                e.placement = i + (r ? '-' + r : ''),
                                e.offsets.popper = de({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)),
                                e = N(e.instance.modifiers, e, 'flip'))
                        }),
                            e
                    },
                    behavior: 'flip',
                    padding: 5,
                    boundariesElement: 'viewport'
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement
                            , o = t.split('-')[0]
                            , i = e.offsets
                            , n = i.popper
                            , r = i.reference
                            , p = -1 !== ['left', 'right'].indexOf(o)
                            , s = -1 === ['top', 'left'].indexOf(o);
                        return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0),
                            e.placement = L(t),
                            e.offsets.popper = h(n),
                            e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!F(e.instance.modifiers, 'hide', 'preventOverflow'))
                            return e;
                        var t = e.offsets.reference
                            , o = T(e.instance.modifiers, function (e) {
                                return 'preventOverflow' === e.name
                            }).boundaries;
                        if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                            if (!0 === e.hide)
                                return e;
                            e.hide = !0,
                                e.attributes['x-out-of-boundaries'] = ''
                        } else {
                            if (!1 === e.hide)
                                return e;
                            e.hide = !1,
                                e.attributes['x-out-of-boundaries'] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.x
                            , i = t.y
                            , n = e.offsets.popper
                            , p = T(e.instance.modifiers, function (e) {
                                return 'applyStyle' === e.name
                            }).gpuAcceleration;
                        void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                        var s, d, a = void 0 === p ? t.gpuAcceleration : p, l = r(e.instance.popper), f = g(l), m = {
                            position: n.position
                        }, c = {
                            left: _(n.left),
                            top: _(n.top),
                            bottom: _(n.bottom),
                            right: _(n.right)
                        }, h = 'bottom' === o ? 'top' : 'bottom', u = 'right' === i ? 'left' : 'right', b = B('transform');
                        if (d = 'bottom' == h ? -f.height + c.bottom : c.top,
                            s = 'right' == u ? -f.width + c.right : c.left,
                            a && b)
                            m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
                                m[h] = 0,
                                m[u] = 0,
                                m.willChange = 'transform';
                        else {
                            var y = 'bottom' == h ? -1 : 1
                                , w = 'right' == u ? -1 : 1;
                            m[h] = d * y,
                                m[u] = s * w,
                                m.willChange = h + ', ' + u
                        }
                        var E = {
                            "x-placement": e.placement
                        };
                        return e.attributes = de({}, E, e.attributes),
                            e.styles = de({}, m, e.styles),
                            e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles),
                            e
                    },
                    gpuAcceleration: !0,
                    x: 'bottom',
                    y: 'right'
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return U(e.instance.popper, e.styles),
                            Y(e.instance.popper, e.attributes),
                            e.arrowElement && Object.keys(e.arrowStyles).length && U(e.arrowElement, e.arrowStyles),
                            e
                    },
                    onLoad: function (e, t, o, i, n) {
                        var r = x(n, t, e)
                            , p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                        return t.setAttribute('x-placement', p),
                            U(t, {
                                position: 'absolute'
                            }),
                            o
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        me
});
/*!
* Bootstrap v4.0.0 (https://getbootstrap.com)
* Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e),
            n && i(t, n),
            t
    }
    function r() {
        return (r = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ).apply(this, arguments)
    }
    e = e && e.hasOwnProperty("default") ? e.default : e,
        n = n && n.hasOwnProperty("default") ? n.default : n;
    var o, a, l, h, c, u, f, d, _, g, p, m, v, E, T, y, C, I, A, b, D, S, w, N, O, k, P = function (t) {
        var e = !1;
        function n(e) {
            var n = this
                , s = !1;
            return t(this).one(i.TRANSITION_END, function () {
                s = !0
            }),
                setTimeout(function () {
                    s || i.triggerTransitionEnd(n)
                }, e),
                this
        }
        var i = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            },
            getSelectorFromElement: function (e) {
                var n, i = e.getAttribute("data-target");
                i && "#" !== i || (i = e.getAttribute("href") || ""),
                    "#" === i.charAt(0) && (n = i,
                        i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                try {
                    return t(document).find(i).length > 0 ? i : null
                } catch (t) {
                    return null
                }
            },
            reflow: function (t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function (n) {
                t(n).trigger(e.end)
            },
            supportsTransitionEnd: function () {
                return Boolean(e)
            },
            isElement: function (t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function (t, e, n) {
                for (var s in n)
                    if (Object.prototype.hasOwnProperty.call(n, s)) {
                        var r = n[s]
                            , o = e[s]
                            , a = o && i.isElement(o) ? "element" : (l = o,
                                {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                        if (!new RegExp(r).test(a))
                            throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".')
                    }
                var l
            }
        };
        return e = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend"
        },
            t.fn.emulateTransitionEnd = n,
            i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
                bindType: e.end,
                delegateType: e.end,
                handle: function (e) {
                    if (t(e.target).is(this))
                        return e.handleObj.handler.apply(this, arguments)
                }
            }),
            i
    }(e), L = (a = "alert",
        h = "." + (l = "bs.alert"),
        c = (o = e).fn[a],
        u = {
            CLOSE: "close" + h,
            CLOSED: "closed" + h,
            CLICK_DATA_API: "click" + h + ".data-api"
        },
        f = "alert",
        d = "fade",
        _ = "show",
        g = function () {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.close = function (t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }
                ,
                e.dispose = function () {
                    o.removeData(this._element, l),
                        this._element = null
                }
                ,
                e._getRootElement = function (t) {
                    var e = P.getSelectorFromElement(t)
                        , n = !1;
                    return e && (n = o(e)[0]),
                        n || (n = o(t).closest("." + f)[0]),
                        n
                }
                ,
                e._triggerCloseEvent = function (t) {
                    var e = o.Event(u.CLOSE);
                    return o(t).trigger(e),
                        e
                }
                ,
                e._removeElement = function (t) {
                    var e = this;
                    o(t).removeClass(_),
                        P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function (n) {
                            return e._destroyElement(t, n)
                        }).emulateTransitionEnd(150) : this._destroyElement(t)
                }
                ,
                e._destroyElement = function (t) {
                    o(t).detach().trigger(u.CLOSED).remove()
                }
                ,
                t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = o(this)
                            , i = n.data(l);
                        i || (i = new t(this),
                            n.data(l, i)),
                            "close" === e && i[e](this)
                    })
                }
                ,
                t._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(),
                            t.close(this)
                    }
                }
                ,
                s(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.0.0"
                    }
                }]),
                t
        }(),
        o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)),
        o.fn[a] = g._jQueryInterface,
        o.fn[a].Constructor = g,
        o.fn[a].noConflict = function () {
            return o.fn[a] = c,
                g._jQueryInterface
        }
        ,
        g), R = (m = "button",
            E = "." + (v = "bs.button"),
            T = ".data-api",
            y = (p = e).fn[m],
            C = "active",
            I = "btn",
            A = "focus",
            b = '[data-toggle^="button"]',
            D = '[data-toggle="buttons"]',
            S = "input",
            w = ".active",
            N = ".btn",
            O = {
                CLICK_DATA_API: "click" + E + T,
                FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T
            },
            k = function () {
                function t(t) {
                    this._element = t
                }
                var e = t.prototype;
                return e.toggle = function () {
                    var t = !0
                        , e = !0
                        , n = p(this._element).closest(D)[0];
                    if (n) {
                        var i = p(this._element).find(S)[0];
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && p(this._element).hasClass(C))
                                    t = !1;
                                else {
                                    var s = p(n).find(w)[0];
                                    s && p(s).removeClass(C)
                                }
                            if (t) {
                                if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                                    return;
                                i.checked = !p(this._element).hasClass(C),
                                    p(i).trigger("change")
                            }
                            i.focus(),
                                e = !1
                        }
                    }
                    e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)),
                        t && p(this._element).toggleClass(C)
                }
                    ,
                    e.dispose = function () {
                        p.removeData(this._element, v),
                            this._element = null
                    }
                    ,
                    t._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = p(this).data(v);
                            n || (n = new t(this),
                                p(this).data(v, n)),
                                "toggle" === e && n[e]()
                        })
                    }
                    ,
                    s(t, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }]),
                    t
            }(),
            p(document).on(O.CLICK_DATA_API, b, function (t) {
                t.preventDefault();
                var e = t.target;
                p(e).hasClass(I) || (e = p(e).closest(N)),
                    k._jQueryInterface.call(p(e), "toggle")
            }).on(O.FOCUS_BLUR_DATA_API, b, function (t) {
                var e = p(t.target).closest(N)[0];
                p(e).toggleClass(A, /^focus(in)?$/.test(t.type))
            }),
            p.fn[m] = k._jQueryInterface,
            p.fn[m].Constructor = k,
            p.fn[m].noConflict = function () {
                return p.fn[m] = y,
                    k._jQueryInterface
            }
            ,
            k), j = function (t) {
                var e = "carousel"
                    , n = "bs.carousel"
                    , i = "." + n
                    , o = t.fn[e]
                    , a = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0
                    }
                    , l = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean"
                    }
                    , h = "next"
                    , c = "prev"
                    , u = "left"
                    , f = "right"
                    , d = {
                        SLIDE: "slide" + i,
                        SLID: "slid" + i,
                        KEYDOWN: "keydown" + i,
                        MOUSEENTER: "mouseenter" + i,
                        MOUSELEAVE: "mouseleave" + i,
                        TOUCHEND: "touchend" + i,
                        LOAD_DATA_API: "load" + i + ".data-api",
                        CLICK_DATA_API: "click" + i + ".data-api"
                    }
                    , _ = "carousel"
                    , g = "active"
                    , p = "slide"
                    , m = "carousel-item-right"
                    , v = "carousel-item-left"
                    , E = "carousel-item-next"
                    , T = "carousel-item-prev"
                    , y = {
                        ACTIVE: ".active",
                        ACTIVE_ITEM: ".active.carousel-item",
                        ITEM: ".carousel-item",
                        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                        INDICATORS: ".carousel-indicators",
                        DATA_SLIDE: "[data-slide], [data-slide-to]",
                        DATA_RIDE: '[data-ride="carousel"]'
                    }
                    , C = function () {
                        function o(e, n) {
                            this._items = null,
                                this._interval = null,
                                this._activeElement = null,
                                this._isPaused = !1,
                                this._isSliding = !1,
                                this.touchTimeout = null,
                                this._config = this._getConfig(n),
                                this._element = t(e)[0],
                                this._indicatorsElement = t(this._element).find(y.INDICATORS)[0],
                                this._addEventListeners()
                        }
                        var C = o.prototype;
                        return C.next = function () {
                            this._isSliding || this._slide(h)
                        }
                            ,
                            C.nextWhenVisible = function () {
                                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                            }
                            ,
                            C.prev = function () {
                                this._isSliding || this._slide(c)
                            }
                            ,
                            C.pause = function (e) {
                                e || (this._isPaused = !0),
                                    t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element),
                                        this.cycle(!0)),
                                    clearInterval(this._interval),
                                    this._interval = null
                            }
                            ,
                            C.cycle = function (t) {
                                t || (this._isPaused = !1),
                                    this._interval && (clearInterval(this._interval),
                                        this._interval = null),
                                    this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                            }
                            ,
                            C.to = function (e) {
                                var n = this;
                                this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
                                var i = this._getItemIndex(this._activeElement);
                                if (!(e > this._items.length - 1 || e < 0))
                                    if (this._isSliding)
                                        t(this._element).one(d.SLID, function () {
                                            return n.to(e)
                                        });
                                    else {
                                        if (i === e)
                                            return this.pause(),
                                                void this.cycle();
                                        var s = e > i ? h : c;
                                        this._slide(s, this._items[e])
                                    }
                            }
                            ,
                            C.dispose = function () {
                                t(this._element).off(i),
                                    t.removeData(this._element, n),
                                    this._items = null,
                                    this._config = null,
                                    this._element = null,
                                    this._interval = null,
                                    this._isPaused = null,
                                    this._isSliding = null,
                                    this._activeElement = null,
                                    this._indicatorsElement = null
                            }
                            ,
                            C._getConfig = function (t) {
                                return t = r({}, a, t),
                                    P.typeCheckConfig(e, t, l),
                                    t
                            }
                            ,
                            C._addEventListeners = function () {
                                var e = this;
                                this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
                                    return e._keydown(t)
                                }),
                                    "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
                                        return e.pause(t)
                                    }).on(d.MOUSELEAVE, function (t) {
                                        return e.cycle(t)
                                    }),
                                        "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
                                            e.pause(),
                                                e.touchTimeout && clearTimeout(e.touchTimeout),
                                                e.touchTimeout = setTimeout(function (t) {
                                                    return e.cycle(t)
                                                }, 500 + e._config.interval)
                                        }))
                            }
                            ,
                            C._keydown = function (t) {
                                if (!/input|textarea/i.test(t.target.tagName))
                                    switch (t.which) {
                                        case 37:
                                            t.preventDefault(),
                                                this.prev();
                                            break;
                                        case 39:
                                            t.preventDefault(),
                                                this.next()
                                    }
                            }
                            ,
                            C._getItemIndex = function (e) {
                                return this._items = t.makeArray(t(e).parent().find(y.ITEM)),
                                    this._items.indexOf(e)
                            }
                            ,
                            C._getItemByDirection = function (t, e) {
                                var n = t === h
                                    , i = t === c
                                    , s = this._getItemIndex(e)
                                    , r = this._items.length - 1;
                                if ((i && 0 === s || n && s === r) && !this._config.wrap)
                                    return e;
                                var o = (s + (t === c ? -1 : 1)) % this._items.length;
                                return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                            }
                            ,
                            C._triggerSlideEvent = function (e, n) {
                                var i = this._getItemIndex(e)
                                    , s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0])
                                    , r = t.Event(d.SLIDE, {
                                        relatedTarget: e,
                                        direction: n,
                                        from: s,
                                        to: i
                                    });
                                return t(this._element).trigger(r),
                                    r
                            }
                            ,
                            C._setActiveIndicatorElement = function (e) {
                                if (this._indicatorsElement) {
                                    t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);
                                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                                    n && t(n).addClass(g)
                                }
                            }
                            ,
                            C._slide = function (e, n) {
                                var i, s, r, o = this, a = t(this._element).find(y.ACTIVE_ITEM)[0], l = this._getItemIndex(a), c = n || a && this._getItemByDirection(e, a), _ = this._getItemIndex(c), C = Boolean(this._interval);
                                if (e === h ? (i = v,
                                    s = E,
                                    r = u) : (i = m,
                                        s = T,
                                        r = f),
                                    c && t(c).hasClass(g))
                                    this._isSliding = !1;
                                else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
                                    this._isSliding = !0,
                                        C && this.pause(),
                                        this._setActiveIndicatorElement(c);
                                    var I = t.Event(d.SLID, {
                                        relatedTarget: c,
                                        direction: r,
                                        from: l,
                                        to: _
                                    });
                                    P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s),
                                        P.reflow(c),
                                        t(a).addClass(i),
                                        t(c).addClass(i),
                                        t(a).one(P.TRANSITION_END, function () {
                                            t(c).removeClass(i + " " + s).addClass(g),
                                                t(a).removeClass(g + " " + s + " " + i),
                                                o._isSliding = !1,
                                                setTimeout(function () {
                                                    return t(o._element).trigger(I)
                                                }, 0)
                                        }).emulateTransitionEnd(600)) : (t(a).removeClass(g),
                                            t(c).addClass(g),
                                            this._isSliding = !1,
                                            t(this._element).trigger(I)),
                                        C && this.cycle()
                                }
                            }
                            ,
                            o._jQueryInterface = function (e) {
                                return this.each(function () {
                                    var i = t(this).data(n)
                                        , s = r({}, a, t(this).data());
                                    "object" == typeof e && (s = r({}, s, e));
                                    var l = "string" == typeof e ? e : s.slide;
                                    if (i || (i = new o(this, s),
                                        t(this).data(n, i)),
                                        "number" == typeof e)
                                        i.to(e);
                                    else if ("string" == typeof l) {
                                        if ("undefined" == typeof i[l])
                                            throw new TypeError('No method named "' + l + '"');
                                        i[l]()
                                    } else
                                        s.interval && (i.pause(),
                                            i.cycle())
                                })
                            }
                            ,
                            o._dataApiClickHandler = function (e) {
                                var i = P.getSelectorFromElement(this);
                                if (i) {
                                    var s = t(i)[0];
                                    if (s && t(s).hasClass(_)) {
                                        var a = r({}, t(s).data(), t(this).data())
                                            , l = this.getAttribute("data-slide-to");
                                        l && (a.interval = !1),
                                            o._jQueryInterface.call(t(s), a),
                                            l && t(s).data(n).to(l),
                                            e.preventDefault()
                                    }
                                }
                            }
                            ,
                            s(o, null, [{
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0"
                                }
                            }, {
                                key: "Default",
                                get: function () {
                                    return a
                                }
                            }]),
                            o
                    }();
                return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler),
                    t(window).on(d.LOAD_DATA_API, function () {
                        t(y.DATA_RIDE).each(function () {
                            var e = t(this);
                            C._jQueryInterface.call(e, e.data())
                        })
                    }),
                    t.fn[e] = C._jQueryInterface,
                    t.fn[e].Constructor = C,
                    t.fn[e].noConflict = function () {
                        return t.fn[e] = o,
                            C._jQueryInterface
                    }
                    ,
                    C
            }(e), H = function (t) {
                var e = "collapse"
                    , n = "bs.collapse"
                    , i = "." + n
                    , o = t.fn[e]
                    , a = {
                        toggle: !0,
                        parent: ""
                    }
                    , l = {
                        toggle: "boolean",
                        parent: "(string|element)"
                    }
                    , h = {
                        SHOW: "show" + i,
                        SHOWN: "shown" + i,
                        HIDE: "hide" + i,
                        HIDDEN: "hidden" + i,
                        CLICK_DATA_API: "click" + i + ".data-api"
                    }
                    , c = "show"
                    , u = "collapse"
                    , f = "collapsing"
                    , d = "collapsed"
                    , _ = "width"
                    , g = "height"
                    , p = {
                        ACTIVES: ".show, .collapsing",
                        DATA_TOGGLE: '[data-toggle="collapse"]'
                    }
                    , m = function () {
                        function i(e, n) {
                            this._isTransitioning = !1,
                                this._element = e,
                                this._config = this._getConfig(n),
                                this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                            for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
                                var r = i[s]
                                    , o = P.getSelectorFromElement(r);
                                null !== o && t(o).filter(e).length > 0 && (this._selector = o,
                                    this._triggerArray.push(r))
                            }
                            this._parent = this._config.parent ? this._getParent() : null,
                                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                                this._config.toggle && this.toggle()
                        }
                        var o = i.prototype;
                        return o.toggle = function () {
                            t(this._element).hasClass(c) ? this.hide() : this.show()
                        }
                            ,
                            o.show = function () {
                                var e, s, r = this;
                                if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null),
                                    !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
                                    var o = t.Event(h.SHOW);
                                    if (t(this._element).trigger(o),
                                        !o.isDefaultPrevented()) {
                                        e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"),
                                            s || t(e).data(n, null));
                                        var a = this._getDimension();
                                        t(this._element).removeClass(u).addClass(f),
                                            this._element.style[a] = 0,
                                            this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0),
                                            this.setTransitioning(!0);
                                        var l = function () {
                                            t(r._element).removeClass(f).addClass(u).addClass(c),
                                                r._element.style[a] = "",
                                                r.setTransitioning(!1),
                                                t(r._element).trigger(h.SHOWN)
                                        };
                                        if (P.supportsTransitionEnd()) {
                                            var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                            t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600),
                                                this._element.style[a] = this._element[_] + "px"
                                        } else
                                            l()
                                    }
                                }
                            }
                            ,
                            o.hide = function () {
                                var e = this;
                                if (!this._isTransitioning && t(this._element).hasClass(c)) {
                                    var n = t.Event(h.HIDE);
                                    if (t(this._element).trigger(n),
                                        !n.isDefaultPrevented()) {
                                        var i = this._getDimension();
                                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                                            P.reflow(this._element),
                                            t(this._element).addClass(f).removeClass(u).removeClass(c),
                                            this._triggerArray.length > 0)
                                            for (var s = 0; s < this._triggerArray.length; s++) {
                                                var r = this._triggerArray[s]
                                                    , o = P.getSelectorFromElement(r);
                                                if (null !== o)
                                                    t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1)
                                            }
                                        this.setTransitioning(!0);
                                        var a = function () {
                                            e.setTransitioning(!1),
                                                t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)
                                        };
                                        this._element.style[i] = "",
                                            P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                                    }
                                }
                            }
                            ,
                            o.setTransitioning = function (t) {
                                this._isTransitioning = t
                            }
                            ,
                            o.dispose = function () {
                                t.removeData(this._element, n),
                                    this._config = null,
                                    this._parent = null,
                                    this._element = null,
                                    this._triggerArray = null,
                                    this._isTransitioning = null
                            }
                            ,
                            o._getConfig = function (t) {
                                return (t = r({}, a, t)).toggle = Boolean(t.toggle),
                                    P.typeCheckConfig(e, t, l),
                                    t
                            }
                            ,
                            o._getDimension = function () {
                                return t(this._element).hasClass(_) ? _ : g
                            }
                            ,
                            o._getParent = function () {
                                var e = this
                                    , n = null;
                                P.isElement(this._config.parent) ? (n = this._config.parent,
                                    "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                                var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                                return t(n).find(s).each(function (t, n) {
                                    e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                                }),
                                    n
                            }
                            ,
                            o._addAriaAndCollapsedClass = function (e, n) {
                                if (e) {
                                    var i = t(e).hasClass(c);
                                    n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
                                }
                            }
                            ,
                            i._getTargetFromElement = function (e) {
                                var n = P.getSelectorFromElement(e);
                                return n ? t(n)[0] : null
                            }
                            ,
                            i._jQueryInterface = function (e) {
                                return this.each(function () {
                                    var s = t(this)
                                        , o = s.data(n)
                                        , l = r({}, a, s.data(), "object" == typeof e && e);
                                    if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                                        o || (o = new i(this, l),
                                            s.data(n, o)),
                                        "string" == typeof e) {
                                        if ("undefined" == typeof o[e])
                                            throw new TypeError('No method named "' + e + '"');
                                        o[e]()
                                    }
                                })
                            }
                            ,
                            s(i, null, [{
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0"
                                }
                            }, {
                                key: "Default",
                                get: function () {
                                    return a
                                }
                            }]),
                            i
                    }();
                return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
                    "A" === e.currentTarget.tagName && e.preventDefault();
                    var i = t(this)
                        , s = P.getSelectorFromElement(this);
                    t(s).each(function () {
                        var e = t(this)
                            , s = e.data(n) ? "toggle" : i.data();
                        m._jQueryInterface.call(e, s)
                    })
                }),
                    t.fn[e] = m._jQueryInterface,
                    t.fn[e].Constructor = m,
                    t.fn[e].noConflict = function () {
                        return t.fn[e] = o,
                            m._jQueryInterface
                    }
                    ,
                    m
            }(e), W = function (t) {
                var e = "dropdown"
                    , i = "bs.dropdown"
                    , o = "." + i
                    , a = ".data-api"
                    , l = t.fn[e]
                    , h = new RegExp("38|40|27")
                    , c = {
                        HIDE: "hide" + o,
                        HIDDEN: "hidden" + o,
                        SHOW: "show" + o,
                        SHOWN: "shown" + o,
                        CLICK: "click" + o,
                        CLICK_DATA_API: "click" + o + a,
                        KEYDOWN_DATA_API: "keydown" + o + a,
                        KEYUP_DATA_API: "keyup" + o + a
                    }
                    , u = "disabled"
                    , f = "show"
                    , d = "dropup"
                    , _ = "dropright"
                    , g = "dropleft"
                    , p = "dropdown-menu-right"
                    , m = "dropdown-menu-left"
                    , v = "position-static"
                    , E = '[data-toggle="dropdown"]'
                    , T = ".dropdown form"
                    , y = ".dropdown-menu"
                    , C = ".navbar-nav"
                    , I = ".dropdown-menu .dropdown-item:not(.disabled)"
                    , A = "top-start"
                    , b = "top-end"
                    , D = "bottom-start"
                    , S = "bottom-end"
                    , w = "right-start"
                    , N = "left-start"
                    , O = {
                        offset: 0,
                        flip: !0,
                        boundary: "scrollParent"
                    }
                    , k = {
                        offset: "(number|string|function)",
                        flip: "boolean",
                        boundary: "(string|element)"
                    }
                    , L = function () {
                        function a(t, e) {
                            this._element = t,
                                this._popper = null,
                                this._config = this._getConfig(e),
                                this._menu = this._getMenuElement(),
                                this._inNavbar = this._detectNavbar(),
                                this._addEventListeners()
                        }
                        var l = a.prototype;
                        return l.toggle = function () {
                            if (!this._element.disabled && !t(this._element).hasClass(u)) {
                                var e = a._getParentFromElement(this._element)
                                    , i = t(this._menu).hasClass(f);
                                if (a._clearMenus(),
                                    !i) {
                                    var s = {
                                        relatedTarget: this._element
                                    }
                                        , r = t.Event(c.SHOW, s);
                                    if (t(e).trigger(r),
                                        !r.isDefaultPrevented()) {
                                        if (!this._inNavbar) {
                                            if ("undefined" == typeof n)
                                                throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                            var o = this._element;
                                            t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e),
                                                "scrollParent" !== this._config.boundary && t(e).addClass(v),
                                                this._popper = new n(o, this._menu, this._getPopperConfig())
                                        }
                                        "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop),
                                            this._element.focus(),
                                            this._element.setAttribute("aria-expanded", !0),
                                            t(this._menu).toggleClass(f),
                                            t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s))
                                    }
                                }
                            }
                        }
                            ,
                            l.dispose = function () {
                                t.removeData(this._element, i),
                                    t(this._element).off(o),
                                    this._element = null,
                                    this._menu = null,
                                    null !== this._popper && (this._popper.destroy(),
                                        this._popper = null)
                            }
                            ,
                            l.update = function () {
                                this._inNavbar = this._detectNavbar(),
                                    null !== this._popper && this._popper.scheduleUpdate()
                            }
                            ,
                            l._addEventListeners = function () {
                                var e = this;
                                t(this._element).on(c.CLICK, function (t) {
                                    t.preventDefault(),
                                        t.stopPropagation(),
                                        e.toggle()
                                })
                            }
                            ,
                            l._getConfig = function (n) {
                                return n = r({}, this.constructor.Default, t(this._element).data(), n),
                                    P.typeCheckConfig(e, n, this.constructor.DefaultType),
                                    n
                            }
                            ,
                            l._getMenuElement = function () {
                                if (!this._menu) {
                                    var e = a._getParentFromElement(this._element);
                                    this._menu = t(e).find(y)[0]
                                }
                                return this._menu
                            }
                            ,
                            l._getPlacement = function () {
                                var e = t(this._element).parent()
                                    , n = D;
                                return e.hasClass(d) ? (n = A,
                                    t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S),
                                    n
                            }
                            ,
                            l._detectNavbar = function () {
                                return t(this._element).closest(".navbar").length > 0
                            }
                            ,
                            l._getPopperConfig = function () {
                                var t = this
                                    , e = {};
                                return "function" == typeof this._config.offset ? e.fn = function (e) {
                                    return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}),
                                        e
                                }
                                    : e.offset = this._config.offset,
                                {
                                    placement: this._getPlacement(),
                                    modifiers: {
                                        offset: e,
                                        flip: {
                                            enabled: this._config.flip
                                        },
                                        preventOverflow: {
                                            boundariesElement: this._config.boundary
                                        }
                                    }
                                }
                            }
                            ,
                            a._jQueryInterface = function (e) {
                                return this.each(function () {
                                    var n = t(this).data(i);
                                    if (n || (n = new a(this, "object" == typeof e ? e : null),
                                        t(this).data(i, n)),
                                        "string" == typeof e) {
                                        if ("undefined" == typeof n[e])
                                            throw new TypeError('No method named "' + e + '"');
                                        n[e]()
                                    }
                                })
                            }
                            ,
                            a._clearMenus = function (e) {
                                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                                    for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
                                        var r = a._getParentFromElement(n[s])
                                            , o = t(n[s]).data(i)
                                            , l = {
                                                relatedTarget: n[s]
                                            };
                                        if (o) {
                                            var h = o._menu;
                                            if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                                                var u = t.Event(c.HIDE, l);
                                                t(r).trigger(u),
                                                    u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                                                        n[s].setAttribute("aria-expanded", "false"),
                                                        t(h).removeClass(f),
                                                        t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)))
                                            }
                                        }
                                    }
                            }
                            ,
                            a._getParentFromElement = function (e) {
                                var n, i = P.getSelectorFromElement(e);
                                return i && (n = t(i)[0]),
                                    n || e.parentNode
                            }
                            ,
                            a._dataApiKeydownHandler = function (e) {
                                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(),
                                    e.stopPropagation(),
                                    !this.disabled && !t(this).hasClass(u))) {
                                    var n = a._getParentFromElement(this)
                                        , i = t(n).hasClass(f);
                                    if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                                        var s = t(n).find(I).get();
                                        if (0 !== s.length) {
                                            var r = s.indexOf(e.target);
                                            38 === e.which && r > 0 && r--,
                                                40 === e.which && r < s.length - 1 && r++,
                                                r < 0 && (r = 0),
                                                s[r].focus()
                                        }
                                    } else {
                                        if (27 === e.which) {
                                            var o = t(n).find(E)[0];
                                            t(o).trigger("focus")
                                        }
                                        t(this).trigger("click")
                                    }
                                }
                            }
                            ,
                            s(a, null, [{
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0"
                                }
                            }, {
                                key: "Default",
                                get: function () {
                                    return O
                                }
                            }, {
                                key: "DefaultType",
                                get: function () {
                                    return k
                                }
                            }]),
                            a
                    }();
                return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function (e) {
                    e.preventDefault(),
                        e.stopPropagation(),
                        L._jQueryInterface.call(t(this), "toggle")
                }).on(c.CLICK_DATA_API, T, function (t) {
                    t.stopPropagation()
                }),
                    t.fn[e] = L._jQueryInterface,
                    t.fn[e].Constructor = L,
                    t.fn[e].noConflict = function () {
                        return t.fn[e] = l,
                            L._jQueryInterface
                    }
                    ,
                    L
            }(e), M = function (t) {
                var e = "modal"
                    , n = "bs.modal"
                    , i = "." + n
                    , o = t.fn.modal
                    , a = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0,
                        show: !0
                    }
                    , l = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean",
                        show: "boolean"
                    }
                    , h = {
                        HIDE: "hide" + i,
                        HIDDEN: "hidden" + i,
                        SHOW: "show" + i,
                        SHOWN: "shown" + i,
                        FOCUSIN: "focusin" + i,
                        RESIZE: "resize" + i,
                        CLICK_DISMISS: "click.dismiss" + i,
                        KEYDOWN_DISMISS: "keydown.dismiss" + i,
                        MOUSEUP_DISMISS: "mouseup.dismiss" + i,
                        MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
                        CLICK_DATA_API: "click" + i + ".data-api"
                    }
                    , c = "modal-scrollbar-measure"
                    , u = "modal-backdrop"
                    , f = "modal-open"
                    , d = "fade"
                    , _ = "show"
                    , g = {
                        DIALOG: ".modal-dialog",
                        DATA_TOGGLE: '[data-toggle="modal"]',
                        DATA_DISMISS: '[data-dismiss="modal"]',
                        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        STICKY_CONTENT: ".sticky-top",
                        NAVBAR_TOGGLER: ".navbar-toggler"
                    }
                    , p = function () {
                        function o(e, n) {
                            this._config = this._getConfig(n),
                                this._element = e,
                                this._dialog = t(e).find(g.DIALOG)[0],
                                this._backdrop = null,
                                this._isShown = !1,
                                this._isBodyOverflowing = !1,
                                this._ignoreBackdropClick = !1,
                                this._originalBodyPadding = 0,
                                this._scrollbarWidth = 0
                        }
                        var p = o.prototype;
                        return p.toggle = function (t) {
                            return this._isShown ? this.hide() : this.show(t)
                        }
                            ,
                            p.show = function (e) {
                                var n = this;
                                if (!this._isTransitioning && !this._isShown) {
                                    P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
                                    var i = t.Event(h.SHOW, {
                                        relatedTarget: e
                                    });
                                    t(this._element).trigger(i),
                                        this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                                            this._checkScrollbar(),
                                            this._setScrollbar(),
                                            this._adjustDialog(),
                                            t(document.body).addClass(f),
                                            this._setEscapeEvent(),
                                            this._setResizeEvent(),
                                            t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function (t) {
                                                return n.hide(t)
                                            }),
                                            t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
                                                t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
                                                    t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                                })
                                            }),
                                            this._showBackdrop(function () {
                                                return n._showElement(e)
                                            }))
                                }
                            }
                            ,
                            p.hide = function (e) {
                                var n = this;
                                if (e && e.preventDefault(),
                                    !this._isTransitioning && this._isShown) {
                                    var i = t.Event(h.HIDE);
                                    if (t(this._element).trigger(i),
                                        this._isShown && !i.isDefaultPrevented()) {
                                        this._isShown = !1;
                                        var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                                        s && (this._isTransitioning = !0),
                                            this._setEscapeEvent(),
                                            this._setResizeEvent(),
                                            t(document).off(h.FOCUSIN),
                                            t(this._element).removeClass(_),
                                            t(this._element).off(h.CLICK_DISMISS),
                                            t(this._dialog).off(h.MOUSEDOWN_DISMISS),
                                            s ? t(this._element).one(P.TRANSITION_END, function (t) {
                                                return n._hideModal(t)
                                            }).emulateTransitionEnd(300) : this._hideModal()
                                    }
                                }
                            }
                            ,
                            p.dispose = function () {
                                t.removeData(this._element, n),
                                    t(window, document, this._element, this._backdrop).off(i),
                                    this._config = null,
                                    this._element = null,
                                    this._dialog = null,
                                    this._backdrop = null,
                                    this._isShown = null,
                                    this._isBodyOverflowing = null,
                                    this._ignoreBackdropClick = null,
                                    this._scrollbarWidth = null
                            }
                            ,
                            p.handleUpdate = function () {
                                this._adjustDialog()
                            }
                            ,
                            p._getConfig = function (t) {
                                return t = r({}, a, t),
                                    P.typeCheckConfig(e, t, l),
                                    t
                            }
                            ,
                            p._showElement = function (e) {
                                var n = this
                                    , i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                                    this._element.style.display = "block",
                                    this._element.removeAttribute("aria-hidden"),
                                    this._element.scrollTop = 0,
                                    i && P.reflow(this._element),
                                    t(this._element).addClass(_),
                                    this._config.focus && this._enforceFocus();
                                var s = t.Event(h.SHOWN, {
                                    relatedTarget: e
                                })
                                    , r = function () {
                                        n._config.focus && n._element.focus(),
                                            n._isTransitioning = !1,
                                            t(n._element).trigger(s)
                                    };
                                i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r()
                            }
                            ,
                            p._enforceFocus = function () {
                                var e = this;
                                t(document).off(h.FOCUSIN).on(h.FOCUSIN, function (n) {
                                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                                })
                            }
                            ,
                            p._setEscapeEvent = function () {
                                var e = this;
                                this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
                                    27 === t.which && (t.preventDefault(),
                                        e.hide())
                                }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS)
                            }
                            ,
                            p._setResizeEvent = function () {
                                var e = this;
                                this._isShown ? t(window).on(h.RESIZE, function (t) {
                                    return e.handleUpdate(t)
                                }) : t(window).off(h.RESIZE)
                            }
                            ,
                            p._hideModal = function () {
                                var e = this;
                                this._element.style.display = "none",
                                    this._element.setAttribute("aria-hidden", !0),
                                    this._isTransitioning = !1,
                                    this._showBackdrop(function () {
                                        t(document.body).removeClass(f),
                                            e._resetAdjustments(),
                                            e._resetScrollbar(),
                                            t(e._element).trigger(h.HIDDEN)
                                    })
                            }
                            ,
                            p._removeBackdrop = function () {
                                this._backdrop && (t(this._backdrop).remove(),
                                    this._backdrop = null)
                            }
                            ,
                            p._showBackdrop = function (e) {
                                var n = this
                                    , i = t(this._element).hasClass(d) ? d : "";
                                if (this._isShown && this._config.backdrop) {
                                    var s = P.supportsTransitionEnd() && i;
                                    if (this._backdrop = document.createElement("div"),
                                        this._backdrop.className = u,
                                        i && t(this._backdrop).addClass(i),
                                        t(this._backdrop).appendTo(document.body),
                                        t(this._element).on(h.CLICK_DISMISS, function (t) {
                                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                        }),
                                        s && P.reflow(this._backdrop),
                                        t(this._backdrop).addClass(_),
                                        !e)
                                        return;
                                    if (!s)
                                        return void e();
                                    t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150)
                                } else if (!this._isShown && this._backdrop) {
                                    t(this._backdrop).removeClass(_);
                                    var r = function () {
                                        n._removeBackdrop(),
                                            e && e()
                                    };
                                    P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                                } else
                                    e && e()
                            }
                            ,
                            p._adjustDialog = function () {
                                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                                    this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                            }
                            ,
                            p._resetAdjustments = function () {
                                this._element.style.paddingLeft = "",
                                    this._element.style.paddingRight = ""
                            }
                            ,
                            p._checkScrollbar = function () {
                                var t = document.body.getBoundingClientRect();
                                this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                                    this._scrollbarWidth = this._getScrollbarWidth()
                            }
                            ,
                            p._setScrollbar = function () {
                                var e = this;
                                if (this._isBodyOverflowing) {
                                    t(g.FIXED_CONTENT).each(function (n, i) {
                                        var s = t(i)[0].style.paddingRight
                                            , r = t(i).css("padding-right");
                                        t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                                    }),
                                        t(g.STICKY_CONTENT).each(function (n, i) {
                                            var s = t(i)[0].style.marginRight
                                                , r = t(i).css("margin-right");
                                            t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                                        }),
                                        t(g.NAVBAR_TOGGLER).each(function (n, i) {
                                            var s = t(i)[0].style.marginRight
                                                , r = t(i).css("margin-right");
                                            t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                                        });
                                    var n = document.body.style.paddingRight
                                        , i = t("body").css("padding-right");
                                    t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                                }
                            }
                            ,
                            p._resetScrollbar = function () {
                                t(g.FIXED_CONTENT).each(function (e, n) {
                                    var i = t(n).data("padding-right");
                                    "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
                                }),
                                    t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (e, n) {
                                        var i = t(n).data("margin-right");
                                        "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
                                    });
                                var e = t("body").data("padding-right");
                                "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
                            }
                            ,
                            p._getScrollbarWidth = function () {
                                var t = document.createElement("div");
                                t.className = c,
                                    document.body.appendChild(t);
                                var e = t.getBoundingClientRect().width - t.clientWidth;
                                return document.body.removeChild(t),
                                    e
                            }
                            ,
                            o._jQueryInterface = function (e, i) {
                                return this.each(function () {
                                    var s = t(this).data(n)
                                        , a = r({}, o.Default, t(this).data(), "object" == typeof e && e);
                                    if (s || (s = new o(this, a),
                                        t(this).data(n, s)),
                                        "string" == typeof e) {
                                        if ("undefined" == typeof s[e])
                                            throw new TypeError('No method named "' + e + '"');
                                        s[e](i)
                                    } else
                                        a.show && s.show(i)
                                })
                            }
                            ,
                            s(o, null, [{
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0"
                                }
                            }, {
                                key: "Default",
                                get: function () {
                                    return a
                                }
                            }]),
                            o
                    }();
                return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
                    var i, s = this, o = P.getSelectorFromElement(this);
                    o && (i = t(o)[0]);
                    var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
                    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                    var l = t(i).one(h.SHOW, function (e) {
                        e.isDefaultPrevented() || l.one(h.HIDDEN, function () {
                            t(s).is(":visible") && s.focus()
                        })
                    });
                    p._jQueryInterface.call(t(i), a, this)
                }),
                    t.fn.modal = p._jQueryInterface,
                    t.fn.modal.Constructor = p,
                    t.fn.modal.noConflict = function () {
                        return t.fn.modal = o,
                            p._jQueryInterface
                    }
                    ,
                    p
            }(e), U = function (t) {
                var e = "tooltip"
                    , i = "bs.tooltip"
                    , o = "." + i
                    , a = t.fn[e]
                    , l = new RegExp("(^|\\s)bs-tooltip\\S+", "g")
                    , h = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(number|string)",
                        container: "(string|element|boolean)",
                        fallbackPlacement: "(string|array)",
                        boundary: "(string|element)"
                    }
                    , c = {
                        AUTO: "auto",
                        TOP: "top",
                        RIGHT: "right",
                        BOTTOM: "bottom",
                        LEFT: "left"
                    }
                    , u = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: 0,
                        container: !1,
                        fallbackPlacement: "flip",
                        boundary: "scrollParent"
                    }
                    , f = "show"
                    , d = "out"
                    , _ = {
                        HIDE: "hide" + o,
                        HIDDEN: "hidden" + o,
                        SHOW: "show" + o,
                        SHOWN: "shown" + o,
                        INSERTED: "inserted" + o,
                        CLICK: "click" + o,
                        FOCUSIN: "focusin" + o,
                        FOCUSOUT: "focusout" + o,
                        MOUSEENTER: "mouseenter" + o,
                        MOUSELEAVE: "mouseleave" + o
                    }
                    , g = "fade"
                    , p = "show"
                    , m = ".tooltip-inner"
                    , v = ".arrow"
                    , E = "hover"
                    , T = "focus"
                    , y = "click"
                    , C = "manual"
                    , I = function () {
                        function a(t, e) {
                            if ("undefined" == typeof n)
                                throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                            this._isEnabled = !0,
                                this._timeout = 0,
                                this._hoverState = "",
                                this._activeTrigger = {},
                                this._popper = null,
                                this.element = t,
                                this.config = this._getConfig(e),
                                this.tip = null,
                                this._setListeners()
                        }
                        var I = a.prototype;
                        return I.enable = function () {
                            this._isEnabled = !0
                        }
                            ,
                            I.disable = function () {
                                this._isEnabled = !1
                            }
                            ,
                            I.toggleEnabled = function () {
                                this._isEnabled = !this._isEnabled
                            }
                            ,
                            I.toggle = function (e) {
                                if (this._isEnabled)
                                    if (e) {
                                        var n = this.constructor.DATA_KEY
                                            , i = t(e.currentTarget).data(n);
                                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()),
                                            t(e.currentTarget).data(n, i)),
                                            i._activeTrigger.click = !i._activeTrigger.click,
                                            i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                                    } else {
                                        if (t(this.getTipElement()).hasClass(p))
                                            return void this._leave(null, this);
                                        this._enter(null, this)
                                    }
                            }
                            ,
                            I.dispose = function () {
                                clearTimeout(this._timeout),
                                    t.removeData(this.element, this.constructor.DATA_KEY),
                                    t(this.element).off(this.constructor.EVENT_KEY),
                                    t(this.element).closest(".modal").off("hide.bs.modal"),
                                    this.tip && t(this.tip).remove(),
                                    this._isEnabled = null,
                                    this._timeout = null,
                                    this._hoverState = null,
                                    this._activeTrigger = null,
                                    null !== this._popper && this._popper.destroy(),
                                    this._popper = null,
                                    this.element = null,
                                    this.config = null,
                                    this.tip = null
                            }
                            ,
                            I.show = function () {
                                var e = this;
                                if ("none" === t(this.element).css("display"))
                                    throw new Error("Please use show on visible elements");
                                var i = t.Event(this.constructor.Event.SHOW);
                                if (this.isWithContent() && this._isEnabled) {
                                    t(this.element).trigger(i);
                                    var s = t.contains(this.element.ownerDocument.documentElement, this.element);
                                    if (i.isDefaultPrevented() || !s)
                                        return;
                                    var r = this.getTipElement()
                                        , o = P.getUID(this.constructor.NAME);
                                    r.setAttribute("id", o),
                                        this.element.setAttribute("aria-describedby", o),
                                        this.setContent(),
                                        this.config.animation && t(r).addClass(g);
                                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                                        , h = this._getAttachment(l);
                                    this.addAttachmentClass(h);
                                    var c = !1 === this.config.container ? document.body : t(this.config.container);
                                    t(r).data(this.constructor.DATA_KEY, this),
                                        t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c),
                                        t(this.element).trigger(this.constructor.Event.INSERTED),
                                        this._popper = new n(this.element, r, {
                                            placement: h,
                                            modifiers: {
                                                offset: {
                                                    offset: this.config.offset
                                                },
                                                flip: {
                                                    behavior: this.config.fallbackPlacement
                                                },
                                                arrow: {
                                                    element: v
                                                },
                                                preventOverflow: {
                                                    boundariesElement: this.config.boundary
                                                }
                                            },
                                            onCreate: function (t) {
                                                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                            },
                                            onUpdate: function (t) {
                                                e._handlePopperPlacementChange(t)
                                            }
                                        }),
                                        t(r).addClass(p),
                                        "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                                    var u = function () {
                                        e.config.animation && e._fixTransition();
                                        var n = e._hoverState;
                                        e._hoverState = null,
                                            t(e.element).trigger(e.constructor.Event.SHOWN),
                                            n === d && e._leave(null, e)
                                    };
                                    P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
                                }
                            }
                            ,
                            I.hide = function (e) {
                                var n = this
                                    , i = this.getTipElement()
                                    , s = t.Event(this.constructor.Event.HIDE)
                                    , r = function () {
                                        n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i),
                                            n._cleanTipClass(),
                                            n.element.removeAttribute("aria-describedby"),
                                            t(n.element).trigger(n.constructor.Event.HIDDEN),
                                            null !== n._popper && n._popper.destroy(),
                                            e && e()
                                    };
                                t(this.element).trigger(s),
                                    s.isDefaultPrevented() || (t(i).removeClass(p),
                                        "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                                        this._activeTrigger[y] = !1,
                                        this._activeTrigger[T] = !1,
                                        this._activeTrigger[E] = !1,
                                        P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(),
                                        this._hoverState = "")
                            }
                            ,
                            I.update = function () {
                                null !== this._popper && this._popper.scheduleUpdate()
                            }
                            ,
                            I.isWithContent = function () {
                                return Boolean(this.getTitle())
                            }
                            ,
                            I.addAttachmentClass = function (e) {
                                t(this.getTipElement()).addClass("bs-tooltip-" + e)
                            }
                            ,
                            I.getTipElement = function () {
                                return this.tip = this.tip || t(this.config.template)[0],
                                    this.tip
                            }
                            ,
                            I.setContent = function () {
                                var e = t(this.getTipElement());
                                this.setElementContent(e.find(m), this.getTitle()),
                                    e.removeClass(g + " " + p)
                            }
                            ,
                            I.setElementContent = function (e, n) {
                                var i = this.config.html;
                                "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
                            }
                            ,
                            I.getTitle = function () {
                                var t = this.element.getAttribute("data-original-title");
                                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                                    t
                            }
                            ,
                            I._getAttachment = function (t) {
                                return c[t.toUpperCase()]
                            }
                            ,
                            I._setListeners = function () {
                                var e = this;
                                this.config.trigger.split(" ").forEach(function (n) {
                                    if ("click" === n)
                                        t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                                            return e.toggle(t)
                                        });
                                    else if (n !== C) {
                                        var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                                            , s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                        t(e.element).on(i, e.config.selector, function (t) {
                                            return e._enter(t)
                                        }).on(s, e.config.selector, function (t) {
                                            return e._leave(t)
                                        })
                                    }
                                    t(e.element).closest(".modal").on("hide.bs.modal", function () {
                                        return e.hide()
                                    })
                                }),
                                    this.config.selector ? this.config = r({}, this.config, {
                                        trigger: "manual",
                                        selector: ""
                                    }) : this._fixTitle()
                            }
                            ,
                            I._fixTitle = function () {
                                var t = typeof this.element.getAttribute("data-original-title");
                                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                                    this.element.setAttribute("title", ""))
                            }
                            ,
                            I._enter = function (e, n) {
                                var i = this.constructor.DATA_KEY;
                                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()),
                                    t(e.currentTarget).data(i, n)),
                                    e && (n._activeTrigger["focusin" === e.type ? T : E] = !0),
                                    t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout),
                                        n._hoverState = f,
                                        n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                                            n._hoverState === f && n.show()
                                        }, n.config.delay.show) : n.show())
                            }
                            ,
                            I._leave = function (e, n) {
                                var i = this.constructor.DATA_KEY;
                                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()),
                                    t(e.currentTarget).data(i, n)),
                                    e && (n._activeTrigger["focusout" === e.type ? T : E] = !1),
                                    n._isWithActiveTrigger() || (clearTimeout(n._timeout),
                                        n._hoverState = d,
                                        n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                                            n._hoverState === d && n.hide()
                                        }, n.config.delay.hide) : n.hide())
                            }
                            ,
                            I._isWithActiveTrigger = function () {
                                for (var t in this._activeTrigger)
                                    if (this._activeTrigger[t])
                                        return !0;
                                return !1
                            }
                            ,
                            I._getConfig = function (n) {
                                return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                                    show: n.delay,
                                    hide: n.delay
                                }),
                                    "number" == typeof n.title && (n.title = n.title.toString()),
                                    "number" == typeof n.content && (n.content = n.content.toString()),
                                    P.typeCheckConfig(e, n, this.constructor.DefaultType),
                                    n
                            }
                            ,
                            I._getDelegateConfig = function () {
                                var t = {};
                                if (this.config)
                                    for (var e in this.config)
                                        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                                return t
                            }
                            ,
                            I._cleanTipClass = function () {
                                var e = t(this.getTipElement())
                                    , n = e.attr("class").match(l);
                                null !== n && n.length > 0 && e.removeClass(n.join(""))
                            }
                            ,
                            I._handlePopperPlacementChange = function (t) {
                                this._cleanTipClass(),
                                    this.addAttachmentClass(this._getAttachment(t.placement))
                            }
                            ,
                            I._fixTransition = function () {
                                var e = this.getTipElement()
                                    , n = this.config.animation;
                                null === e.getAttribute("x-placement") && (t(e).removeClass(g),
                                    this.config.animation = !1,
                                    this.hide(),
                                    this.show(),
                                    this.config.animation = n)
                            }
                            ,
                            a._jQueryInterface = function (e) {
                                return this.each(function () {
                                    var n = t(this).data(i)
                                        , s = "object" == typeof e && e;
                                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s),
                                        t(this).data(i, n)),
                                        "string" == typeof e)) {
                                        if ("undefined" == typeof n[e])
                                            throw new TypeError('No method named "' + e + '"');
                                        n[e]()
                                    }
                                })
                            }
                            ,
                            s(a, null, [{
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0"
                                }
                            }, {
                                key: "Default",
                                get: function () {
                                    return u
                                }
                            }, {
                                key: "NAME",
                                get: function () {
                                    return e
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function () {
                                    return i
                                }
                            }, {
                                key: "Event",
                                get: function () {
                                    return _
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function () {
                                    return o
                                }
                            }, {
                                key: "DefaultType",
                                get: function () {
                                    return h
                                }
                            }]),
                            a
                    }();
                return t.fn[e] = I._jQueryInterface,
                    t.fn[e].Constructor = I,
                    t.fn[e].noConflict = function () {
                        return t.fn[e] = a,
                            I._jQueryInterface
                    }
                    ,
                    I
            }(e), x = function (t) {
                var e = "popover"
                    , n = "bs.popover"
                    , i = "." + n
                    , o = t.fn[e]
                    , a = new RegExp("(^|\\s)bs-popover\\S+", "g")
                    , l = r({}, U.Default, {
                        placement: "right",
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                    })
                    , h = r({}, U.DefaultType, {
                        content: "(string|element|function)"
                    })
                    , c = "fade"
                    , u = "show"
                    , f = ".popover-header"
                    , d = ".popover-body"
                    , _ = {
                        HIDE: "hide" + i,
                        HIDDEN: "hidden" + i,
                        SHOW: "show" + i,
                        SHOWN: "shown" + i,
                        INSERTED: "inserted" + i,
                        CLICK: "click" + i,
                        FOCUSIN: "focusin" + i,
                        FOCUSOUT: "focusout" + i,
                        MOUSEENTER: "mouseenter" + i,
                        MOUSELEAVE: "mouseleave" + i
                    }
                    , g = function (r) {
                        var o, g;
                        function p() {
                            return r.apply(this, arguments) || this
                        }
                        g = r,
                            (o = p).prototype = Object.create(g.prototype),
                            o.prototype.constructor = o,
                            o.__proto__ = g;
                        var m = p.prototype;
                        return m.isWithContent = function () {
                            return this.getTitle() || this._getContent()
                        }
                            ,
                            m.addAttachmentClass = function (e) {
                                t(this.getTipElement()).addClass("bs-popover-" + e)
                            }
                            ,
                            m.getTipElement = function () {
                                return this.tip = this.tip || t(this.config.template)[0],
                                    this.tip
                            }
                            ,
                            m.setContent = function () {
                                var e = t(this.getTipElement());
                                this.setElementContent(e.find(f), this.getTitle());
                                var n = this._getContent();
                                "function" == typeof n && (n = n.call(this.element)),
                                    this.setElementContent(e.find(d), n),
                                    e.removeClass(c + " " + u)
                            }
                            ,
                            m._getContent = function () {
                                return this.element.getAttribute("data-content") || this.config.content
                            }
                            ,
                            m._cleanTipClass = function () {
                                var e = t(this.getTipElement())
                                    , n = e.attr("class").match(a);
                                null !== n && n.length > 0 && e.removeClass(n.join(""))
                            }
                            ,
                            p._jQueryInterface = function (e) {
                                return this.each(function () {
                                    var i = t(this).data(n)
                                        , s = "object" == typeof e ? e : null;
                                    if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s),
                                        t(this).data(n, i)),
                                        "string" == typeof e)) {
                                        if ("undefined" == typeof i[e])
                                            throw new TypeError('No method named "' + e + '"');
                                        i[e]()
                                    }
                                })
                            }
                            ,
                            s(p, null, [{
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0"
                                }
                            }, {
                                key: "Default",
                                get: function () {
                                    return l
                                }
                            }, {
                                key: "NAME",
                                get: function () {
                                    return e
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function () {
                                    return n
                                }
                            }, {
                                key: "Event",
                                get: function () {
                                    return _
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function () {
                                    return i
                                }
                            }, {
                                key: "DefaultType",
                                get: function () {
                                    return h
                                }
                            }]),
                            p
                    }(U);
                return t.fn[e] = g._jQueryInterface,
                    t.fn[e].Constructor = g,
                    t.fn[e].noConflict = function () {
                        return t.fn[e] = o,
                            g._jQueryInterface
                    }
                    ,
                    g
            }(e), K = function (t) {
                var e = "scrollspy"
                    , n = "bs.scrollspy"
                    , i = "." + n
                    , o = t.fn[e]
                    , a = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    }
                    , l = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    }
                    , h = {
                        ACTIVATE: "activate" + i,
                        SCROLL: "scroll" + i,
                        LOAD_DATA_API: "load" + i + ".data-api"
                    }
                    , c = "dropdown-item"
                    , u = "active"
                    , f = {
                        DATA_SPY: '[data-spy="scroll"]',
                        ACTIVE: ".active",
                        NAV_LIST_GROUP: ".nav, .list-group",
                        NAV_LINKS: ".nav-link",
                        NAV_ITEMS: ".nav-item",
                        LIST_ITEMS: ".list-group-item",
                        DROPDOWN: ".dropdown",
                        DROPDOWN_ITEMS: ".dropdown-item",
                        DROPDOWN_TOGGLE: ".dropdown-toggle"
                    }
                    , d = "offset"
                    , _ = "position"
                    , g = function () {
                        function o(e, n) {
                            var i = this;
                            this._element = e,
                                this._scrollElement = "BODY" === e.tagName ? window : e,
                                this._config = this._getConfig(n),
                                this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS,
                                this._offsets = [],
                                this._targets = [],
                                this._activeTarget = null,
                                this._scrollHeight = 0,
                                t(this._scrollElement).on(h.SCROLL, function (t) {
                                    return i._process(t)
                                }),
                                this.refresh(),
                                this._process()
                        }
                        var g = o.prototype;
                        return g.refresh = function () {
                            var e = this
                                , n = this._scrollElement === this._scrollElement.window ? d : _
                                , i = "auto" === this._config.method ? n : this._config.method
                                , s = i === _ ? this._getScrollTop() : 0;
                            this._offsets = [],
                                this._targets = [],
                                this._scrollHeight = this._getScrollHeight(),
                                t.makeArray(t(this._selector)).map(function (e) {
                                    var n, r = P.getSelectorFromElement(e);
                                    if (r && (n = t(r)[0]),
                                        n) {
                                        var o = n.getBoundingClientRect();
                                        if (o.width || o.height)
                                            return [t(n)[i]().top + s, r]
                                    }
                                    return null
                                }).filter(function (t) {
                                    return t
                                }).sort(function (t, e) {
                                    return t[0] - e[0]
                                }).forEach(function (t) {
                                    e._offsets.push(t[0]),
                                        e._targets.push(t[1])
                                })
                        }
                            ,
                            g.dispose = function () {
                                t.removeData(this._element, n),
                                    t(this._scrollElement).off(i),
                                    this._element = null,
                                    this._scrollElement = null,
                                    this._config = null,
                                    this._selector = null,
                                    this._offsets = null,
                                    this._targets = null,
                                    this._activeTarget = null,
                                    this._scrollHeight = null
                            }
                            ,
                            g._getConfig = function (n) {
                                if ("string" != typeof (n = r({}, a, n)).target) {
                                    var i = t(n.target).attr("id");
                                    i || (i = P.getUID(e),
                                        t(n.target).attr("id", i)),
                                        n.target = "#" + i
                                }
                                return P.typeCheckConfig(e, n, l),
                                    n
                            }
                            ,
                            g._getScrollTop = function () {
                                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                            }
                            ,
                            g._getScrollHeight = function () {
                                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                            }
                            ,
                            g._getOffsetHeight = function () {
                                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                            }
                            ,
                            g._process = function () {
                                var t = this._getScrollTop() + this._config.offset
                                    , e = this._getScrollHeight()
                                    , n = this._config.offset + e - this._getOffsetHeight();
                                if (this._scrollHeight !== e && this.refresh(),
                                    t >= n) {
                                    var i = this._targets[this._targets.length - 1];
                                    this._activeTarget !== i && this._activate(i)
                                } else {
                                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                                        return this._activeTarget = null,
                                            void this._clear();
                                    for (var s = this._offsets.length; s--;) {
                                        this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                                    }
                                }
                            }
                            ,
                            g._activate = function (e) {
                                this._activeTarget = e,
                                    this._clear();
                                var n = this._selector.split(",");
                                n = n.map(function (t) {
                                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                                });
                                var i = t(n.join(","));
                                i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),
                                    i.addClass(u)) : (i.addClass(u),
                                        i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u),
                                        i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),
                                    t(this._scrollElement).trigger(h.ACTIVATE, {
                                        relatedTarget: e
                                    })
                            }
                            ,
                            g._clear = function () {
                                t(this._selector).filter(f.ACTIVE).removeClass(u)
                            }
                            ,
                            o._jQueryInterface = function (e) {
                                return this.each(function () {
                                    var i = t(this).data(n);
                                    if (i || (i = new o(this, "object" == typeof e && e),
                                        t(this).data(n, i)),
                                        "string" == typeof e) {
                                        if ("undefined" == typeof i[e])
                                            throw new TypeError('No method named "' + e + '"');
                                        i[e]()
                                    }
                                })
                            }
                            ,
                            s(o, null, [{
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0"
                                }
                            }, {
                                key: "Default",
                                get: function () {
                                    return a
                                }
                            }]),
                            o
                    }();
                return t(window).on(h.LOAD_DATA_API, function () {
                    for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
                        var i = t(e[n]);
                        g._jQueryInterface.call(i, i.data())
                    }
                }),
                    t.fn[e] = g._jQueryInterface,
                    t.fn[e].Constructor = g,
                    t.fn[e].noConflict = function () {
                        return t.fn[e] = o,
                            g._jQueryInterface
                    }
                    ,
                    g
            }(e), V = function (t) {
                var e = "bs.tab"
                    , n = "." + e
                    , i = t.fn.tab
                    , r = {
                        HIDE: "hide" + n,
                        HIDDEN: "hidden" + n,
                        SHOW: "show" + n,
                        SHOWN: "shown" + n,
                        CLICK_DATA_API: "click.bs.tab.data-api"
                    }
                    , o = "dropdown-menu"
                    , a = "active"
                    , l = "disabled"
                    , h = "fade"
                    , c = "show"
                    , u = ".dropdown"
                    , f = ".nav, .list-group"
                    , d = ".active"
                    , _ = "> li > .active"
                    , g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
                    , p = ".dropdown-toggle"
                    , m = "> .dropdown-menu .active"
                    , v = function () {
                        function n(t) {
                            this._element = t
                        }
                        var i = n.prototype;
                        return i.show = function () {
                            var e = this;
                            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
                                var n, i, s = t(this._element).closest(f)[0], o = P.getSelectorFromElement(this._element);
                                if (s) {
                                    var h = "UL" === s.nodeName ? _ : d;
                                    i = (i = t.makeArray(t(s).find(h)))[i.length - 1]
                                }
                                var c = t.Event(r.HIDE, {
                                    relatedTarget: this._element
                                })
                                    , u = t.Event(r.SHOW, {
                                        relatedTarget: i
                                    });
                                if (i && t(i).trigger(c),
                                    t(this._element).trigger(u),
                                    !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
                                    o && (n = t(o)[0]),
                                        this._activate(this._element, s);
                                    var g = function () {
                                        var n = t.Event(r.HIDDEN, {
                                            relatedTarget: e._element
                                        })
                                            , s = t.Event(r.SHOWN, {
                                                relatedTarget: i
                                            });
                                        t(i).trigger(n),
                                            t(e._element).trigger(s)
                                    };
                                    n ? this._activate(n, n.parentNode, g) : g()
                                }
                            }
                        }
                            ,
                            i.dispose = function () {
                                t.removeData(this._element, e),
                                    this._element = null
                            }
                            ,
                            i._activate = function (e, n, i) {
                                var s = this
                                    , r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0]
                                    , o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h)
                                    , a = function () {
                                        return s._transitionComplete(e, r, i)
                                    };
                                r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                            }
                            ,
                            i._transitionComplete = function (e, n, i) {
                                if (n) {
                                    t(n).removeClass(c + " " + a);
                                    var s = t(n.parentNode).find(m)[0];
                                    s && t(s).removeClass(a),
                                        "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                                }
                                if (t(e).addClass(a),
                                    "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                                    P.reflow(e),
                                    t(e).addClass(c),
                                    e.parentNode && t(e.parentNode).hasClass(o)) {
                                    var r = t(e).closest(u)[0];
                                    r && t(r).find(p).addClass(a),
                                        e.setAttribute("aria-expanded", !0)
                                }
                                i && i()
                            }
                            ,
                            n._jQueryInterface = function (i) {
                                return this.each(function () {
                                    var s = t(this)
                                        , r = s.data(e);
                                    if (r || (r = new n(this),
                                        s.data(e, r)),
                                        "string" == typeof i) {
                                        if ("undefined" == typeof r[i])
                                            throw new TypeError('No method named "' + i + '"');
                                        r[i]()
                                    }
                                })
                            }
                            ,
                            s(n, null, [{
                                key: "VERSION",
                                get: function () {
                                    return "4.0.0"
                                }
                            }]),
                            n
                    }();
                return t(document).on(r.CLICK_DATA_API, g, function (e) {
                    e.preventDefault(),
                        v._jQueryInterface.call(t(this), "show")
                }),
                    t.fn.tab = v._jQueryInterface,
                    t.fn.tab.Constructor = v,
                    t.fn.tab.noConflict = function () {
                        return t.fn.tab = i,
                            v._jQueryInterface
                    }
                    ,
                    v
            }(e);
    !function (t) {
        if ("undefined" == typeof t)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e),
        t.Util = P,
        t.Alert = L,
        t.Button = R,
        t.Carousel = j,
        t.Collapse = H,
        t.Dropdown = W,
        t.Modal = M,
        t.Popover = x,
        t.Scrollspy = K,
        t.Tab = V,
        t.Tooltip = U,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
});
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) {
        b.ev.on(o + a + p, c)
    }, x = function (b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b,
            d && (f.innerHTML = d),
            e ? c && c.appendChild(f) : (f = a(f),
                c && f.appendTo(c)),
            f
    }, y = function (c, d) {
        b.ev.triggerHandler(o + c, d),
            b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1),
                b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function (c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)),
            g = c),
            b.currTemplate.closeBtn
    }, A = function () {
        a.magnificPopup.instance || (b = new t,
            b.init(),
            a.magnificPopup.instance = b)
    }, B = function () {
        var a = document.createElement("p").style
            , b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)
            return !0;
        for (; b.length;)
            if (b.pop() + "Transition" in a)
                return !0;
        return !1
    };
    t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener,
                b.isAndroid = /android/gi.test(c),
                b.isIOS = /iphone|ipad|ipod/gi.test(c),
                b.supportsTransition = B(),
                b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
                d = a(document),
                b.popupsCache = {}
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(),
                    b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e],
                        g.parsed && (g = g.el[0]),
                        g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else
                b.items = a.isArray(c.items) ? c.items : [c.items],
                    b.index = c.index || 0;
            if (b.isOpen)
                return void b.updateItemHTML();
            b.types = [],
                f = "",
                c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d,
                c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
                    b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {},
                b.st = a.extend(!0, {}, a.magnificPopup.defaults, c),
                b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos,
                b.st.modal && (b.st.closeOnContentClick = !1,
                    b.st.closeOnBgClick = !1,
                    b.st.showCloseBtn = !1,
                    b.st.enableEscapeKey = !1),
                b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                    b.close()
                }),
                    b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                        b._checkIfClose(a.target) && b.close()
                    }),
                    b.container = x("container", b.wrap)),
                b.contentContainer = x("content"),
                b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1),
                    b["init" + j].call(b)
            }
            y("BeforeOpen"),
                b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                    c.close_replaceWith = z(d.type)
                }),
                    f += " mfp-close-btn-in") : b.wrap.append(z())),
                b.st.alignTop && (f += " mfp-align-top"),
                b.fixedContentPos ? b.wrap.css({
                    overflow: b.st.overflowY,
                    overflowX: "hidden",
                    overflowY: b.st.overflowY
                }) : b.wrap.css({
                    top: v.scrollTop(),
                    position: "absolute"
                }),
                (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                    height: d.height(),
                    position: "absolute"
                }),
                b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                    27 === a.keyCode && b.close()
                }),
                v.on("resize" + p, function () {
                    b.updateSize()
                }),
                b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && b.wrap.addClass(f);
            var k = b.wH = v.height()
                , n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y("BuildControls"),
                a("html").css(n),
                b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
                b._lastFocusedEl = document.activeElement,
                setTimeout(function () {
                    b.content ? (b._addClassToMFP(q),
                        b._setFocus()) : b.bgOverlay.addClass(q),
                        d.on("focusin" + p, b._onFocusIn)
                }, 16),
                b.isOpen = !0,
                b.updateSize(k),
                y(m),
                c
        },
        close: function () {
            b.isOpen && (y(i),
                b.isOpen = !1,
                b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r),
                    setTimeout(function () {
                        b._close()
                    }, b.st.removalDelay)) : b._close())
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(),
                b.wrap.detach(),
                b.container.empty(),
                b.st.mainClass && (c += b.st.mainClass + " "),
                b._removeClassFromMFP(c),
                b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "",
                    a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p),
                b.ev.off(p),
                b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                b.bgOverlay.attr("class", "mfp-bg"),
                b.container.attr("class", "mfp-container"),
                !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(),
                b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
                b.currItem = null,
                b.content = null,
                b.currTemplate = null,
                b.prevHeight = 0,
                y(j)
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth
                    , d = window.innerHeight * c;
                b.wrap.css("height", d),
                    b.wH = d
            } else
                b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH),
                y("Resize")
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(),
                b.content && b.content.detach(),
                c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
                b.currItem = c,
                !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f),
                    f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d),
                c.preloaded = !0,
                y(n, c),
                e = c.type,
                b.container.prepend(b.contentContainer),
                y("AfterChange")
        },
        appendContent: function (a, c) {
            b.content = a,
                a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "",
                y(k),
                b.container.addClass("mfp-" + c + "-holder"),
                b.contentContainer.append(b.content)
        },
        parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                el: a(e)
            } : (d = e.type,
                e = {
                    data: e,
                    src: e.src
                }),
                e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"),
                    e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline",
                e.index = c,
                e.parsed = !0,
                b.items[c] = e,
                y("ElementParse", e),
                b.items[c]
        },
        addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this,
                    b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a,
                c.items ? (c.isObj = !0,
                    a.off(e).on(e, d)) : (c.isObj = !1,
                        c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a,
                            a.off(e).on(e, d)))
        },
        _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b))
                            return !0
                    } else if (v.width() < g)
                        return !0;
                c.type && (c.preventDefault(),
                    b.isOpen && c.stopPropagation()),
                    e.el = a(c.mfpEl),
                    e.delegate && (e.items = d.find(e.delegate)),
                    b.open(e)
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c),
                    d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e),
                    a = e.status,
                    d = e.text,
                    b.preloader.html(d),
                    b.preloader.find("a").on("click", function (a) {
                        a.stopImmediatePropagation()
                    }),
                    b.container.addClass("mfp-s-" + a),
                    c = a
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick
                    , e = b.st.closeOnBgClick;
                if (d && e)
                    return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return !0
                } else if (e && a.contains(document, c))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a),
                b.wrap.addClass(a)
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a),
                b.wrap.removeClass(a)
        },
        _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(),
                !1)
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function (c, d) {
                    if (void 0 === d || d === !1)
                        return !0;
                    if (e = c.split("_"),
                        e.length > 1) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                        }
                    } else
                        b.find(p + "-" + c).html(d)
                })
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                    document.body.appendChild(a),
                    b.scrollbarSize = a.offsetWidth - a.clientWidth,
                    document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    },
        a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function (b, c) {
                return A(),
                    b = b ? a.extend(!0, {}, b) : {},
                    b.isObj = !0,
                    b.index = c || 0,
                    this.instance.open(b)
            },
            close: function () {
                return a.magnificPopup.instance && a.magnificPopup.instance.close()
            },
            registerModule: function (b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options),
                    a.extend(this.proto, c.proto),
                    this.modules.push(b)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        },
        a.fn.magnificPopup = function (c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                    f.items ? e = f.items[g] : (e = d,
                        f.delegate && (e = e.find(f.delegate)),
                        e = e.eq(g)),
                        b._openClick({
                            mfpEl: e
                        }, d, f)
                } else
                    b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else
                c = a.extend(!0, {}, c),
                    u ? d.data("magnificPopup", c) : d[0].magnificPopup = c,
                    b.addGroup(d, c);
            return d
        }
        ;
    var C, D, E, F = "inline", G = function () {
        E && (D.after(E.addClass(C)).detach(),
            E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                b.types.push(F),
                    w(h + "." + F, function () {
                        G()
                    })
            },
            getInline: function (c, d) {
                if (G(),
                    c.src) {
                    var e = b.st.inline
                        , f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass,
                            D = x(C),
                            C = "mfp-" + C),
                            E = f.after(D).detach().removeClass(C)),
                            b.updateStatus("ready")
                    } else
                        b.updateStatus("error", e.tNotFound),
                            f = a("<div>");
                    return c.inlineElement = f,
                        f
                }
                return b.updateStatus("ready"),
                    b._parseMarkup(d, {}, c),
                    d
            }
        }
    });
    var H, I = "ajax", J = function () {
        H && a(document.body).removeClass(H)
    }, K = function () {
        J(),
            b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                b.types.push(I),
                    H = b.st.ajax.cursor,
                    w(h + "." + I, K),
                    w("BeforeChange." + I, K)
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H),
                    b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function (d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g),
                            b.appendContent(a(g.data), I),
                            c.finished = !0,
                            J(),
                            b._setFocus(),
                            setTimeout(function () {
                                b.wrap.addClass(q)
                            }, 16),
                            b.updateStatus("ready"),
                            y("AjaxContentAdded")
                    },
                    error: function () {
                        J(),
                            c.finished = c.loadError = !0,
                            b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d),
                    ""
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var c = b.st.image
                    , d = ".image";
                b.types.push("image"),
                    w(m + d, function () {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                    }),
                    w(h + d, function () {
                        c.cursor && a(document.body).removeClass(c.cursor),
                            v.off("resize" + p)
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
                        a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0,
                    L && clearInterval(L),
                    a.isCheckingImgSize = !1,
                    y("ImageHasSize", a),
                    a.imgHidden && (b.content && b.content.removeClass("mfp-loading"),
                        a.imgHidden = !1))
            },
            findImageSize: function (a) {
                var c = 0
                    , d = a.img[0]
                    , e = function (f) {
                        L && clearInterval(L),
                            L = setInterval(function () {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L),
                                    c++,
                                    void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                            }, f)
                    };
                e(1)
            },
            getImage: function (c, d) {
                var e = 0
                    , f = function () {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"),
                            c === b.currItem && (b._onImageHasSize(c),
                                b.updateStatus("ready")),
                            c.hasSize = !0,
                            c.loaded = !0,
                            y("ImageLoadComplete")) : (e++,
                                200 > e ? setTimeout(f, 100) : g()))
                    }
                    , g = function () {
                        c && (c.img.off(".mfploader"),
                            c === b.currItem && (b._onImageHasSize(c),
                                b.updateStatus("error", h.tError.replace("%url%", c.src))),
                            c.hasSize = !0,
                            c.loaded = !0,
                            c.loadError = !0)
                    }
                    , h = b.st.image
                    , i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img",
                        c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                        c.img = a(j).on("load.mfploader", f).on("error.mfploader", g),
                        j.src = c.src,
                        i.is("img") && (c.img = c.img.clone()),
                        j = c.img[0],
                        j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c),
                    b.resizeImage(),
                    c.hasSize ? (L && clearInterval(L),
                        c.loadError ? (d.addClass("mfp-loading"),
                            b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"),
                                b.updateStatus("ready")),
                        d) : (b.updateStatus("loading"),
                            c.loading = !0,
                            c.hasSize || (c.imgHidden = !0,
                                d.addClass("mfp-loading"),
                                b.findImageSize(c)),
                            d)
            }
        }
    });
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform),
            N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function (a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                            , d = "all " + c.duration / 1e3 + "s " + c.easing
                            , e = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }
                            , f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d,
                            b.css(e),
                            b
                    }, k = function () {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                                b.content.css("visibility", "hidden"),
                                a = b._getItemToZoom(),
                                !a)
                                return void k();
                            f = j(a),
                                f.css(b._getOffset()),
                                b.wrap.append(f),
                                e = setTimeout(function () {
                                    f.css(b._getOffset(!0)),
                                        e = setTimeout(function () {
                                            k(),
                                                setTimeout(function () {
                                                    f.remove(),
                                                        a = f = null,
                                                        y("ZoomAnimationEnded")
                                                }, 16)
                                        }, g)
                                }, 16)
                        }
                    }),
                        w(i + d, function () {
                            if (b._allowZoom()) {
                                if (clearTimeout(e),
                                    b.st.removalDelay = g,
                                    !a) {
                                    if (a = b._getItemToZoom(),
                                        !a)
                                        return;
                                    f = j(a)
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        f.css(b._getOffset())
                                    }, 16)
                            }
                        }),
                        w(h + d, function () {
                            b._allowZoom() && (k(),
                                f && f.remove(),
                                a = null)
                        })
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset()
                    , f = parseInt(d.css("padding-top"), 10)
                    , g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left,
                    h.top = e.top),
                    h
            }
        }
    });
    var P = "iframe"
        , Q = "//about:blank"
        , R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q),
                    b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                b.types.push(P),
                    w("BeforeChange", function (a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0))
                    }),
                    w(h + "." + P, function () {
                        R()
                    })
            },
            getIframe: function (c, d) {
                var e = c.src
                    , f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)),
                        e = this.src.replace("%id%", e),
                        !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e),
                    b._parseMarkup(d, g, c),
                    b.updateStatus("ready"),
                    d
            }
        }
    });
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }
        , T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery
                    , e = ".mfp-gallery";
                return b.direction = !0,
                    c && c.enabled ? (f += " mfp-gallery",
                        w(m + e, function () {
                            c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                                return b.items.length > 1 ? (b.next(),
                                    !1) : void 0
                            }),
                                d.on("keydown" + e, function (a) {
                                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                                })
                        }),
                        w("UpdateStatus" + e, function (a, c) {
                            c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                        }),
                        w(l + e, function (a, d, e, f) {
                            var g = b.items.length;
                            e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                        }),
                        w("BuildControls" + e, function () {
                            if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                                var d = c.arrowMarkup
                                    , e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)
                                    , f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                                e.click(function () {
                                    b.prev()
                                }),
                                    f.click(function () {
                                        b.next()
                                    }),
                                    b.container.append(e.add(f))
                            }
                        }),
                        w(n + e, function () {
                            b._preloadTimeout && clearTimeout(b._preloadTimeout),
                                b._preloadTimeout = setTimeout(function () {
                                    b.preloadNearbyImages(),
                                        b._preloadTimeout = null
                                }, 16)
                        }),
                        void w(h + e, function () {
                            d.off(e),
                                b.wrap.off("click" + e),
                                b.arrowRight = b.arrowLeft = null
                        })) : !1
            },
            next: function () {
                b.direction = !0,
                    b.index = S(b.index + 1),
                    b.updateItemHTML()
            },
            prev: function () {
                b.direction = !1,
                    b.index = S(b.index - 1),
                    b.updateItemHTML()
            },
            goTo: function (a) {
                b.direction = a >= b.index,
                    b.index = a,
                    b.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a)
            },
            _preloadItem: function (c) {
                if (c = S(c),
                    !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                            d.hasSize = !0
                        }).on("error.mfploader", function () {
                            d.hasSize = !0,
                                d.loadError = !0,
                                y("LazyLoadError", d)
                        }).attr("src", d.src)),
                        d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina
                        , c = a.ratio;
                    c = isNaN(c) ? c() : c,
                        c > 1 && (w("ImageHasSize." + U, function (a, b) {
                            b.img.css({
                                "max-width": b.img[0].naturalWidth / c,
                                width: "100%"
                            })
                        }),
                            w("ElementParse." + U, function (b, d) {
                                d.src = a.replaceSrc(d, c)
                            }))
                }
            }
        }
    }),
        A()
});
/*!
* Name : Just Another Parallax [Jarallax]
* Version : 1.10.7
* Author : nK <https://nkdev.info>
* GitHub : https://github.com/nk-o/jarallax
*/
!function (o) {
    var n = {};
    function i(e) {
        if (n[e])
            return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return o[e].call(t.exports, t, t.exports, i),
            t.l = !0,
            t.exports
    }
    i.m = o,
        i.c = n,
        i.d = function (e, t, o) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }
        ,
        i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        i.t = function (t, e) {
            if (1 & e && (t = i(t)),
                8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var o = Object.create(null);
            if (i.r(o),
                Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                for (var n in t)
                    i.d(o, n, function (e) {
                        return t[e]
                    }
                        .bind(null, n));
            return o
        }
        ,
        i.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            }
                : function () {
                    return e
                }
                ;
            return i.d(t, "a", t),
                t
        }
        ,
        i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        i.p = "",
        i(i.s = 11)
}([, , function (e, t, o) {
    "use strict";
    e.exports = function (e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}
    , , function (o, e, t) {
        "use strict";
        (function (e) {
            var t;
            t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
                o.exports = t
        }
        ).call(this, t(5))
    }
    , function (e, t, o) {
        "use strict";
        var n, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
                eval)("this")
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (n = window)
        }
        e.exports = n
    }
    , , , , , , function (e, t, o) {
        e.exports = o(12)
    }
    , function (e, t, o) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , i = l(o(2))
            , a = o(4)
            , r = l(o(13));
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = a.window.jarallax;
        if (a.window.jarallax = r.default,
            a.window.jarallax.noConflict = function () {
                return a.window.jarallax = s,
                    this
            }
            ,
            void 0 !== a.jQuery) {
            var c = function () {
                var e = arguments || [];
                Array.prototype.unshift.call(e, this);
                var t = r.default.apply(a.window, e);
                return "object" !== (void 0 === t ? "undefined" : n(t)) ? t : this
            };
            c.constructor = r.default.constructor;
            var u = a.jQuery.fn.jarallax;
            a.jQuery.fn.jarallax = c,
                a.jQuery.fn.jarallax.noConflict = function () {
                    return a.jQuery.fn.jarallax = u,
                        this
                }
        }
        (0,
            i.default)(function () {
                (0,
                    r.default)(document.querySelectorAll("[data-jarallax]"))
            })
    }
    , function (e, j, S) {
        "use strict";
        (function (e) {
            Object.defineProperty(j, "__esModule", {
                value: !0
            });
            var d = function (e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return function (e, t) {
                        var o = []
                            , n = !0
                            , i = !1
                            , a = void 0;
                        try {
                            for (var r, l = e[Symbol.iterator](); !(n = (r = l.next()).done) && (o.push(r.value),
                                !t || o.length !== t); n = !0)
                                ;
                        } catch (e) {
                            i = !0,
                                a = e
                        } finally {
                            try {
                                !n && l.return && l.return()
                            } finally {
                                if (i)
                                    throw a
                            }
                        }
                        return o
                    }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
                , t = function () {
                    function n(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var n = t[o];
                            n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function (e, t, o) {
                        return t && n(e.prototype, t),
                            o && n(e, o),
                            e
                    }
                }()
                , p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                , o = a(S(2))
                , n = a(S(14))
                , i = S(4);
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = -1 < navigator.userAgent.indexOf("MSIE ") || -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/")
                , r = function () {
                    for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), o = 0; o < e.length; o++)
                        if (t && void 0 !== t.style[e[o]])
                            return e[o];
                    return !1
                }()
                , b = void 0
                , v = void 0
                , l = void 0
                , c = !1
                , u = !1;
            function m(e) {
                b = i.window.innerWidth || document.documentElement.clientWidth,
                    v = i.window.innerHeight || document.documentElement.clientHeight,
                    "object" !== (void 0 === e ? "undefined" : p(e)) || "load" !== e.type && "dom-loaded" !== e.type || (c = !0)
            }
            m(),
                i.window.addEventListener("resize", m),
                i.window.addEventListener("orientationchange", m),
                i.window.addEventListener("load", m),
                (0,
                    o.default)(function () {
                        m({
                            type: "dom-loaded"
                        })
                    });
            var f = []
                , y = !1;
            function g() {
                if (f.length) {
                    l = void 0 !== i.window.pageYOffset ? i.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                    var t = c || !y || y.width !== b || y.height !== v
                        , o = u || t || !y || y.y !== l;
                    u = c = !1,
                        (t || o) && (f.forEach(function (e) {
                            t && e.onResize(),
                                o && e.onScroll()
                        }),
                            y = {
                                width: b,
                                height: v,
                                y: l
                            }),
                        (0,
                            n.default)(g)
                }
            }
            var h = !!e.ResizeObserver && new e.ResizeObserver(function (e) {
                e && e.length && (0,
                    n.default)(function () {
                        e.forEach(function (e) {
                            e.target && e.target.jarallax && (c || e.target.jarallax.onResize(),
                                u = !0)
                        })
                    })
            }
            )
                , x = 0
                , w = function () {
                    function u(e, t) {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, u);
                        var o = this;
                        o.instanceID = x++,
                            o.$item = e,
                            o.defaults = {
                                type: "scroll",
                                speed: .5,
                                imgSrc: null,
                                imgElement: ".jarallax-img",
                                imgSize: "cover",
                                imgPosition: "50% 50%",
                                imgRepeat: "no-repeat",
                                keepImg: !1,
                                elementInViewport: null,
                                zIndex: -100,
                                disableParallax: !1,
                                disableVideo: !1,
                                automaticResize: !0,
                                videoSrc: null,
                                videoStartTime: 0,
                                videoEndTime: 0,
                                videoVolume: 0,
                                videoLoop: !0,
                                videoPlayOnlyVisible: !0,
                                onScroll: null,
                                onInit: null,
                                onDestroy: null,
                                onCoverImage: null
                            };
                        var n = o.$item.getAttribute("data-jarallax")
                            , i = JSON.parse(n || "{}");
                        n && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
                        var a = o.$item.dataset || {}
                            , r = {};
                        if (Object.keys(a).forEach(function (e) {
                            var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                            t && void 0 !== o.defaults[t] && (r[t] = a[e])
                        }),
                            o.options = o.extend({}, o.defaults, i, r, t),
                            o.pureOptions = o.extend({}, o.options),
                            Object.keys(o.options).forEach(function (e) {
                                "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1)
                            }),
                            o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))),
                            (o.options.noAndroid || o.options.noIos) && (console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"),
                                o.options.disableParallax || (o.options.noIos && o.options.noAndroid ? o.options.disableParallax = /iPad|iPhone|iPod|Android/ : o.options.noIos ? o.options.disableParallax = /iPad|iPhone|iPod/ : o.options.noAndroid && (o.options.disableParallax = /Android/))),
                            "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)),
                            o.options.disableParallax instanceof RegExp) {
                            var l = o.options.disableParallax;
                            o.options.disableParallax = function () {
                                return l.test(navigator.userAgent)
                            }
                        }
                        if ("function" != typeof o.options.disableParallax && (o.options.disableParallax = function () {
                            return !1
                        }
                        ),
                            "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)),
                            o.options.disableVideo instanceof RegExp) {
                            var s = o.options.disableVideo;
                            o.options.disableVideo = function () {
                                return s.test(navigator.userAgent)
                            }
                        }
                        "function" != typeof o.options.disableVideo && (o.options.disableVideo = function () {
                            return !1
                        }
                        );
                        var c = o.options.elementInViewport;
                        c && "object" === (void 0 === c ? "undefined" : p(c)) && void 0 !== c.length && (c = d(c, 1)[0]);
                        c instanceof Element || (c = null),
                            o.options.elementInViewport = c,
                            o.image = {
                                src: o.options.imgSrc || null,
                                $container: null,
                                useImgTag: !1,
                                position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
                            },
                            o.initImg() && o.canInitParallax() && o.init()
                    }
                    return t(u, [{
                        key: "css",
                        value: function (t, o) {
                            return "string" == typeof o ? i.window.getComputedStyle(t).getPropertyValue(o) : (o.transform && r && (o[r] = o.transform),
                                Object.keys(o).forEach(function (e) {
                                    t.style[e] = o[e]
                                }),
                                t)
                        }
                    }, {
                        key: "extend",
                        value: function (o) {
                            var n = arguments;
                            return o = o || {},
                                Object.keys(arguments).forEach(function (t) {
                                    n[t] && Object.keys(n[t]).forEach(function (e) {
                                        o[e] = n[t][e]
                                    })
                                }),
                                o
                        }
                    }, {
                        key: "getWindowData",
                        value: function () {
                            return {
                                width: b,
                                height: v,
                                y: l
                            }
                        }
                    }, {
                        key: "initImg",
                        value: function () {
                            var e = this
                                , t = e.options.imgElement;
                            return t && "string" == typeof t && (t = e.$item.querySelector(t)),
                                t instanceof Element || (t = null),
                                t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t,
                                    e.image.$itemParent = t.parentNode),
                                    e.image.useImgTag = !0),
                                !!e.image.$item || (null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")),
                                    !(!e.image.src || "none" === e.image.src))
                        }
                    }, {
                        key: "canInitParallax",
                        value: function () {
                            return r && !this.options.disableParallax()
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var e = this
                                , t = {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    overflow: "hidden",
                                    pointerEvents: "none"
                                }
                                , o = {};
                            if (!e.options.keepImg) {
                                var n = e.$item.getAttribute("style");
                                if (n && e.$item.setAttribute("data-jarallax-original-styles", n),
                                    e.image.useImgTag) {
                                    var i = e.image.$item.getAttribute("style");
                                    i && e.image.$item.setAttribute("data-jarallax-original-styles", i)
                                }
                            }
                            if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                                position: "relative"
                            }),
                                "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                                    zIndex: 0
                                }),
                                e.image.$container = document.createElement("div"),
                                e.css(e.image.$container, t),
                                e.css(e.image.$container, {
                                    "z-index": e.options.zIndex
                                }),
                                s && e.css(e.image.$container, {
                                    opacity: .9999
                                }),
                                e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID),
                                e.$item.appendChild(e.image.$container),
                                e.image.useImgTag ? o = e.extend({
                                    "object-fit": e.options.imgSize,
                                    "object-position": e.options.imgPosition,
                                    "font-family": "object-fit: " + e.options.imgSize + "; object-position: " + e.options.imgPosition + ";",
                                    "max-width": "none"
                                }, t, o) : (e.image.$item = document.createElement("div"),
                                    e.image.src && (o = e.extend({
                                        "background-position": e.options.imgPosition,
                                        "background-size": e.options.imgSize,
                                        "background-repeat": e.options.imgRepeat,
                                        "background-image": 'url("' + e.image.src + '")'
                                    }, t, o))),
                                "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"),
                                "fixed" === e.image.position)
                                for (var a = 0, r = e.$item; null !== r && r !== document && 0 === a;) {
                                    var l = e.css(r, "-webkit-transform") || e.css(r, "-moz-transform") || e.css(r, "transform");
                                    l && "none" !== l && (a = 1,
                                        e.image.position = "absolute"),
                                        r = r.parentNode
                                }
                            o.position = e.image.position,
                                e.css(e.image.$item, o),
                                e.image.$container.appendChild(e.image.$item),
                                e.onResize(),
                                e.onScroll(!0),
                                e.options.automaticResize && h && h.observe(e.$item),
                                e.options.onInit && e.options.onInit.call(e),
                                "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                                    "background-image": "none"
                                }),
                                e.addToParallaxList()
                        }
                    }, {
                        key: "addToParallaxList",
                        value: function () {
                            f.push(this),
                                1 === f.length && g()
                        }
                    }, {
                        key: "removeFromParallaxList",
                        value: function () {
                            var o = this;
                            f.forEach(function (e, t) {
                                e.instanceID === o.instanceID && f.splice(t, 1)
                            })
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            var e = this;
                            e.removeFromParallaxList();
                            var t = e.$item.getAttribute("data-jarallax-original-styles");
                            if (e.$item.removeAttribute("data-jarallax-original-styles"),
                                t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"),
                                e.image.useImgTag) {
                                var o = e.image.$item.getAttribute("data-jarallax-original-styles");
                                e.image.$item.removeAttribute("data-jarallax-original-styles"),
                                    o ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"),
                                    e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                            }
                            e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles),
                                e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container),
                                e.options.onDestroy && e.options.onDestroy.call(e),
                                delete e.$item.jarallax
                        }
                    }, {
                        key: "clipContainer",
                        value: function () {
                            if ("fixed" === this.image.position) {
                                var e = this
                                    , t = e.image.$container.getBoundingClientRect()
                                    , o = t.width
                                    , n = t.height;
                                if (!e.$clipStyles)
                                    e.$clipStyles = document.createElement("style"),
                                        e.$clipStyles.setAttribute("type", "text/css"),
                                        e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID),
                                        (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles);
                                var i = "#jarallax-container-" + e.instanceID + " {\n           clip: rect(0 " + o + "px " + n + "px 0);\n           clip: rect(0, " + o + "px, " + n + "px, 0);\n        }";
                                e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i
                            }
                        }
                    }, {
                        key: "coverImage",
                        value: function () {
                            var e = this
                                , t = e.image.$container.getBoundingClientRect()
                                , o = t.height
                                , n = e.options.speed
                                , i = "scroll" === e.options.type || "scroll-opacity" === e.options.type
                                , a = 0
                                , r = o
                                , l = 0;
                            return i && (n < 0 ? (a = n * Math.max(o, v),
                                v < o && (a -= n * (o - v))) : a = n * (o + v),
                                1 < n ? r = Math.abs(a - v) : n < 0 ? r = a / n + Math.abs(a) : r += (v - o) * (1 - n),
                                a /= 2),
                                e.parallaxScrollDistance = a,
                                l = i ? (v - r) / 2 : (o - r) / 2,
                                e.css(e.image.$item, {
                                    height: r + "px",
                                    marginTop: l + "px",
                                    left: "fixed" === e.image.position ? t.left + "px" : "0",
                                    width: t.width + "px"
                                }),
                                e.options.onCoverImage && e.options.onCoverImage.call(e),
                            {
                                image: {
                                    height: r,
                                    marginTop: l
                                },
                                container: t
                            }
                        }
                    }, {
                        key: "isVisible",
                        value: function () {
                            return this.isElementInViewport || !1
                        }
                    }, {
                        key: "onScroll",
                        value: function (e) {
                            var t = this
                                , o = t.$item.getBoundingClientRect()
                                , n = o.top
                                , i = o.height
                                , a = {}
                                , r = o;
                            if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()),
                                t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= v && r.left <= b,
                                e || t.isElementInViewport) {
                                var l = Math.max(0, n)
                                    , s = Math.max(0, i + n)
                                    , c = Math.max(0, -n)
                                    , u = Math.max(0, n + i - v)
                                    , d = Math.max(0, i - (n + i - v))
                                    , p = Math.max(0, -n + v - i)
                                    , m = 1 - 2 * (v - n) / (v + i)
                                    , f = 1;
                                if (i < v ? f = 1 - (c || u) / i : s <= v ? f = s / v : d <= v && (f = d / v),
                                    "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (a.transform = "translate3d(0,0,0)",
                                        a.opacity = f),
                                    "scale" === t.options.type || "scale-opacity" === t.options.type) {
                                    var y = 1;
                                    t.options.speed < 0 ? y -= t.options.speed * f : y += t.options.speed * (1 - f),
                                        a.transform = "scale(" + y + ") translate3d(0,0,0)"
                                }
                                if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                                    var g = t.parallaxScrollDistance * m;
                                    "absolute" === t.image.position && (g -= n),
                                        a.transform = "translate3d(0," + g + "px,0)"
                                }
                                t.css(t.image.$item, a),
                                    t.options.onScroll && t.options.onScroll.call(t, {
                                        section: o,
                                        beforeTop: l,
                                        beforeTopEnd: s,
                                        afterTop: c,
                                        beforeBottom: u,
                                        beforeBottomEnd: d,
                                        afterBottom: p,
                                        visiblePercent: f,
                                        fromViewportCenter: m
                                    })
                            }
                        }
                    }, {
                        key: "onResize",
                        value: function () {
                            this.coverImage(),
                                this.clipContainer()
                        }
                    }]),
                        u
                }()
                , $ = function (e) {
                    ("object" === ("undefined" == typeof HTMLElement ? "undefined" : p(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : p(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
                    for (var t = arguments[1], o = Array.prototype.slice.call(arguments, 2), n = e.length, i = 0, a = void 0; i < n; i++)
                        if ("object" === (void 0 === t ? "undefined" : p(t)) || void 0 === t ? e[i].jarallax || (e[i].jarallax = new w(e[i], t)) : e[i].jarallax && (a = e[i].jarallax[t].apply(e[i].jarallax, o)),
                            void 0 !== a)
                            return a;
                    return e
                };
            $.constructor = w,
                j.default = $
        }
        ).call(this, S(5))
    }
    , function (e, t, o) {
        "use strict";
        var n = o(4)
            , i = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || function (e) {
                var t = +new Date
                    , o = Math.max(0, 16 - (t - a))
                    , n = setTimeout(e, o);
                return a = t,
                    n
            }
            , a = +new Date;
        var r = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || clearTimeout;
        Function.prototype.bind && (i = i.bind(n),
            r = r.bind(n)),
            (e.exports = i).cancel = r
    }
]);
/*!
* VERSION: 2.1.3
* DATE: 2019-05-17
* UPDATES AND DOCS AT: http://greensock.com
* @author: Jack Doyle, jack@greensock.com
**/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
        var d = function (a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++]))
                ;
            return c
        }
            , e = function (a, b, c) {
                var d, e, f = a.cycle;
                for (d in f)
                    e = f[d],
                        a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
                delete a.cycle
            }
            , f = function (a) {
                if ("function" == typeof a)
                    return a;
                var b = "object" == typeof a ? a : {
                    each: a
                }
                    , c = b.ease
                    , d = b.from || 0
                    , e = b.base || 0
                    , f = {}
                    , g = isNaN(d)
                    , h = b.axis
                    , i = {
                        center: .5,
                        end: 1
                    }[d] || 0;
                return function (a, j, k) {
                    var l, m, n, o, p, q, r, s, t, u = (k || b).length, v = f[u];
                    if (!v) {
                        if (t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0],
                            !t) {
                            for (r = -(1 / 0); r < (r = k[t++].getBoundingClientRect().left) && u > t;)
                                ;
                            t--
                        }
                        for (v = f[u] = [],
                            l = g ? Math.min(t, u) * i - .5 : d % t,
                            m = g ? u * i / t - .5 : d / t | 0,
                            r = 0,
                            s = 1 / 0,
                            q = 0; u > q; q++)
                            n = q % t - l,
                                o = m - (q / t | 0),
                                v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o),
                                p > r && (r = p),
                                s > p && (s = p);
                        v.max = r - s,
                            v.min = s,
                            v.v = u = b.amount || b.each * (t > u ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0,
                            v.b = 0 > u ? e - u : e
                    }
                    return u = (v[a] - v.min) / v.max,
                        v.b + (c ? c.getRatio(u) : u) * v.v
                }
            }
            , g = function (a, b, d) {
                c.call(this, a, b, d),
                    this._cycle = 0,
                    this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase,
                    this._repeat = this.vars.repeat || 0,
                    this._repeatDelay = this.vars.repeatDelay || 0,
                    this._repeat && this._uncache(!0),
                    this.render = g.prototype.render
            }
            , h = 1e-8
            , i = c._internals
            , j = i.isSelector
            , k = i.isArray
            , l = g.prototype = c.to({}, .1, {})
            , m = [];
        g.version = "2.1.3",
            l.constructor = g,
            l.kill()._gc = !1,
            g.killTweensOf = g.killDelayedCallsTo = c.killTweensOf,
            g.getTweensOf = c.getTweensOf,
            g.lagSmoothing = c.lagSmoothing,
            g.ticker = c.ticker,
            g.render = c.render,
            g.distribute = f,
            l.invalidate = function () {
                return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase,
                    this._repeat = this.vars.repeat || 0,
                    this._repeatDelay = this.vars.repeatDelay || 0,
                    this._yoyoEase = null,
                    this._uncache(!0),
                    c.prototype.invalidate.call(this)
            }
            ,
            l.updateTo = function (a, b) {
                var d, e = this, f = e.ratio, g = e.vars.immediateRender || a.immediateRender;
                b && e._startTime < e._timeline._time && (e._startTime = e._timeline._time,
                    e._uncache(!1),
                    e._gc ? e._enabled(!0, !1) : e._timeline.insert(e, e._startTime - e._delay));
                for (d in a)
                    e.vars[d] = a[d];
                if (e._initted || g)
                    if (b)
                        e._initted = !1,
                            g && e.render(0, !0, !0);
                    else if (e._gc && e._enabled(!0, !1),
                        e._notifyPluginsOfEnabled && e._firstPT && c._onPluginEvent("_onDisable", e),
                        e._time / e._duration > .998) {
                        var h = e._totalTime;
                        e.render(0, !0, !1),
                            e._initted = !1,
                            e.render(h, !0, !1)
                    } else if (e._initted = !1,
                        e._init(),
                        e._time > 0 || g)
                        for (var i, j = 1 / (1 - f), k = e._firstPT; k;)
                            i = k.s + k.c,
                                k.c *= j,
                                k.s = i - k.c,
                                k = k._next;
                return e
            }
            ,
            l.render = function (a, b, d) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var e, f, g, j, k, l, m, n, o, p = this, q = p._dirty ? p.totalDuration() : p._totalDuration, r = p._time, s = p._totalTime, t = p._cycle, u = p._duration, v = p._rawPrevTime;
                if (a >= q - h && a >= 0 ? (p._totalTime = q,
                    p._cycle = p._repeat,
                    p._yoyo && 0 !== (1 & p._cycle) ? (p._time = 0,
                        p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0) : (p._time = u,
                            p.ratio = p._ease._calcEnd ? p._ease.getRatio(1) : 1),
                    p._reversed || (e = !0,
                        f = "onComplete",
                        d = d || p._timeline.autoRemoveChildren),
                    0 === u && (p._initted || !p.vars.lazy || d) && (p._startTime === p._timeline._duration && (a = 0),
                        (0 > v || 0 >= a && a >= -h || v === h && "isPause" !== p.data) && v !== a && (d = !0,
                            v > h && (f = "onReverseComplete")),
                        p._rawPrevTime = n = !b || a || v === a ? a : h)) : h > a ? (p._totalTime = p._time = p._cycle = 0,
                            p.ratio = p._ease._calcEnd ? p._ease.getRatio(0) : 0,
                            (0 !== s || 0 === u && v > 0) && (f = "onReverseComplete",
                                e = p._reversed),
                            a > -h ? a = 0 : 0 > a && (p._active = !1,
                                0 === u && (p._initted || !p.vars.lazy || d) && (v >= 0 && (d = !0),
                                    p._rawPrevTime = n = !b || a || v === a ? a : h)),
                            p._initted || (d = !0)) : (p._totalTime = p._time = a,
                                0 !== p._repeat && (j = u + p._repeatDelay,
                                    p._cycle = p._totalTime / j >> 0,
                                    0 !== p._cycle && p._cycle === p._totalTime / j && a >= s && p._cycle--,
                                    p._time = p._totalTime - p._cycle * j,
                                    p._yoyo && 0 !== (1 & p._cycle) && (p._time = u - p._time,
                                        o = p._yoyoEase || p.vars.yoyoEase,
                                        o && (p._yoyoEase || (o !== !0 || p._initted ? p._yoyoEase = o = o === !0 ? p._ease : o instanceof Ease ? o : Ease.map[o] : (o = p.vars.ease,
                                            p._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, p.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)),
                                            p.ratio = o ? 1 - o.getRatio((u - p._time) / u) : 0)),
                                    p._time > u ? p._time = u : p._time < 0 && (p._time = 0)),
                                p._easeType && !o ? (k = p._time / u,
                                    l = p._easeType,
                                    m = p._easePower,
                                    (1 === l || 3 === l && k >= .5) && (k = 1 - k),
                                    3 === l && (k *= 2),
                                    1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k),
                                    p.ratio = 1 === l ? 1 - k : 2 === l ? k : p._time / u < .5 ? k / 2 : 1 - k / 2) : o || (p.ratio = p._ease.getRatio(p._time / u))),
                    r === p._time && !d && t === p._cycle)
                    return void (s !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));
                if (!p._initted) {
                    if (p._init(),
                        !p._initted || p._gc)
                        return;
                    if (!d && p._firstPT && (p.vars.lazy !== !1 && p._duration || p.vars.lazy && !p._duration))
                        return p._time = r,
                            p._totalTime = s,
                            p._rawPrevTime = v,
                            p._cycle = t,
                            i.lazyTweens.push(p),
                            void (p._lazy = [a, b]);
                    !p._time || e || o ? e && this._ease._calcEnd && !o && (p.ratio = p._ease.getRatio(0 === p._time ? 0 : 1)) : p.ratio = p._ease.getRatio(p._time / u)
                }
                for (p._lazy !== !1 && (p._lazy = !1),
                    p._active || !p._paused && p._time !== r && a >= 0 && (p._active = !0),
                    0 === s && (2 === p._initted && a > 0 && p._init(),
                        p._startAt && (a >= 0 ? p._startAt.render(a, !0, d) : f || (f = "_dummyGS")),
                        p.vars.onStart && (0 !== p._totalTime || 0 === u) && (b || p._callback("onStart"))),
                    g = p._firstPT; g;)
                    g.f ? g.t[g.p](g.c * p.ratio + g.s) : g.t[g.p] = g.c * p.ratio + g.s,
                        g = g._next;
                p._onUpdate && (0 > a && p._startAt && p._startTime && p._startAt.render(a, !0, d),
                    b || (p._totalTime !== s || f) && p._callback("onUpdate")),
                    p._cycle !== t && (b || p._gc || p.vars.onRepeat && p._callback("onRepeat")),
                    f && (!p._gc || d) && (0 > a && p._startAt && !p._onUpdate && p._startTime && p._startAt.render(a, !0, d),
                        e && (p._timeline.autoRemoveChildren && p._enabled(!1, !1),
                            p._active = !1),
                        !b && p.vars[f] && p._callback(f),
                        0 === u && p._rawPrevTime === h && n !== h && (p._rawPrevTime = 0))
            }
            ,
            g.to = function (a, b, c) {
                return new g(a, b, c)
            }
            ,
            g.from = function (a, b, c) {
                return c.runBackwards = !0,
                    c.immediateRender = 0 != c.immediateRender,
                    new g(a, b, c)
            }
            ,
            g.fromTo = function (a, b, c, d) {
                return d.startAt = c,
                    d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
                    new g(a, b, d)
            }
            ,
            g.staggerTo = g.allTo = function (a, b, h, i, l, n, o) {
                var p, q, r, s, t = [], u = f(h.stagger || i), v = h.cycle, w = (h.startAt || m).cycle;
                for (k(a) || ("string" == typeof a && (a = c.selector(a) || a),
                    j(a) && (a = d(a))),
                    a = a || [],
                    p = a.length - 1,
                    r = 0; p >= r; r++) {
                    q = {};
                    for (s in h)
                        q[s] = h[s];
                    if (v && (e(q, a, r),
                        null != q.duration && (b = q.duration,
                            delete q.duration)),
                        w) {
                        w = q.startAt = {};
                        for (s in h.startAt)
                            w[s] = h.startAt[s];
                        e(q.startAt, a, r)
                    }
                    q.delay = u(r, a[r], a) + (q.delay || 0),
                        r === p && l && (q.onComplete = function () {
                            h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments),
                                l.apply(o || h.callbackScope || this, n || m)
                        }
                        ),
                        t[r] = new g(a[r], b, q)
                }
                return t
            }
            ,
            g.staggerFrom = g.allFrom = function (a, b, c, d, e, f, h) {
                return c.runBackwards = !0,
                    c.immediateRender = 0 != c.immediateRender,
                    g.staggerTo(a, b, c, d, e, f, h)
            }
            ,
            g.staggerFromTo = g.allFromTo = function (a, b, c, d, e, f, h, i) {
                return d.startAt = c,
                    d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
                    g.staggerTo(a, b, d, e, f, h, i)
            }
            ,
            g.delayedCall = function (a, b, c, d, e) {
                return new g(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    callbackScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    immediateRender: !1,
                    useFrames: e,
                    overwrite: 0
                })
            }
            ,
            g.set = function (a, b) {
                return new g(a, 0, b)
            }
            ,
            g.isTweening = function (a) {
                return c.getTweensOf(a, !0).length > 0
            }
            ;
        var n = function (a, b) {
            for (var d = [], e = 0, f = a._first; f;)
                f instanceof c ? d[e++] = f : (b && (d[e++] = f),
                    d = d.concat(n(f, b)),
                    e = d.length),
                    f = f._next;
            return d
        }
            , o = g.getAllTweens = function (b) {
                return n(a._rootTimeline, b).concat(n(a._rootFramesTimeline, b))
            }
            ;
        g.killAll = function (a, c, d, e) {
            null == c && (c = !0),
                null == d && (d = !0);
            var f, g, h, i = o(0 != e), j = i.length, k = c && d && e;
            for (h = 0; j > h; h++)
                g = i[h],
                    (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
        }
            ,
            g.killChildTweensOf = function (a, b) {
                if (null != a) {
                    var e, f, h, l, m, n = i.tweenLookup;
                    if ("string" == typeof a && (a = c.selector(a) || a),
                        j(a) && (a = d(a)),
                        k(a))
                        for (l = a.length; --l > -1;)
                            g.killChildTweensOf(a[l], b);
                    else {
                        e = [];
                        for (h in n)
                            for (f = n[h].target.parentNode; f;)
                                f === a && (e = e.concat(n[h].tweens)),
                                    f = f.parentNode;
                        for (m = e.length,
                            l = 0; m > l; l++)
                            b && e[l].totalTime(e[l].totalDuration()),
                                e[l]._enabled(!1, !1)
                    }
                }
            }
            ;
        var p = function (a, c, d, e) {
            c = c !== !1,
                d = d !== !1,
                e = e !== !1;
            for (var f, g, h = o(e), i = c && d && e, j = h.length; --j > -1;)
                g = h[j],
                    (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
        };
        return g.pauseAll = function (a, b, c) {
            p(!0, a, b, c)
        }
            ,
            g.resumeAll = function (a, b, c) {
                p(!1, a, b, c)
            }
            ,
            g.globalTimeScale = function (b) {
                var d = a._rootTimeline
                    , e = c.ticker.time;
                return arguments.length ? (b = b || h,
                    d._startTime = e - (e - d._startTime) * d._timeScale / b,
                    d = a._rootFramesTimeline,
                    e = c.ticker.frame,
                    d._startTime = e - (e - d._startTime) * d._timeScale / b,
                    d._timeScale = a._rootTimeline._timeScale = b,
                    b) : d._timeScale
            }
            ,
            l.progress = function (a, b) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this.duration() ? this._time / this._duration : this.ratio
            }
            ,
            l.totalProgress = function (a, b) {
                return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
            }
            ,
            l.time = function (a, b) {
                if (!arguments.length)
                    return this._time;
                this._dirty && this.totalDuration();
                var c = this._duration
                    , d = this._cycle
                    , e = d * (c + this._repeatDelay);
                return a > c && (a = c),
                    this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b)
            }
            ,
            l.duration = function (b) {
                return arguments.length ? a.prototype.duration.call(this, b) : this._duration
            }
            ,
            l.totalDuration = function (a) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
                    this._dirty = !1),
                    this._totalDuration)
            }
            ,
            l.repeat = function (a) {
                return arguments.length ? (this._repeat = a,
                    this._uncache(!0)) : this._repeat
            }
            ,
            l.repeatDelay = function (a) {
                return arguments.length ? (this._repeatDelay = a,
                    this._uncache(!0)) : this._repeatDelay
            }
            ,
            l.yoyo = function (a) {
                return arguments.length ? (this._yoyo = a,
                    this) : this._yoyo
            }
            ,
            g
    }, !0),
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
            var d = function (a) {
                b.call(this, a);
                var c, d, e = this, f = e.vars;
                e._labels = {},
                    e.autoRemoveChildren = !!f.autoRemoveChildren,
                    e.smoothChildTiming = !!f.smoothChildTiming,
                    e._sortChildren = !0,
                    e._onUpdate = f.onUpdate;
                for (d in f)
                    c = f[d],
                        i(c) && -1 !== c.join("").indexOf("{self}") && (f[d] = e._swapSelfInParams(c));
                i(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger)
            }
                , e = 1e-8
                , f = c._internals
                , g = d._internals = {}
                , h = f.isSelector
                , i = f.isArray
                , j = f.lazyTweens
                , k = f.lazyRender
                , l = _gsScope._gsDefine.globals
                , m = function (a) {
                    var b, c = {};
                    for (b in a)
                        c[b] = a[b];
                    return c
                }
                , n = function (a, b, c) {
                    var d, e, f = a.cycle;
                    for (d in f)
                        e = f[d],
                            a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length];
                    delete a.cycle
                }
                , o = g.pauseCallback = function () { }
                , p = function (a) {
                    var b, c = [], d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]))
                        ;
                    return c
                }
                , q = function (a, b, c, d) {
                    var e = "immediateRender";
                    return e in b || (b[e] = !(c && c[e] === !1 || d)),
                        b
                }
                , r = function (a) {
                    if ("function" == typeof a)
                        return a;
                    var b = "object" == typeof a ? a : {
                        each: a
                    }
                        , c = b.ease
                        , d = b.from || 0
                        , e = b.base || 0
                        , f = {}
                        , g = isNaN(d)
                        , h = b.axis
                        , i = {
                            center: .5,
                            end: 1
                        }[d] || 0;
                    return function (a, j, k) {
                        var l, m, n, o, p, q, r, s, t, u = (k || b).length, v = f[u];
                        if (!v) {
                            if (t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0],
                                !t) {
                                for (r = -(1 / 0); r < (r = k[t++].getBoundingClientRect().left) && u > t;)
                                    ;
                                t--
                            }
                            for (v = f[u] = [],
                                l = g ? Math.min(t, u) * i - .5 : d % t,
                                m = g ? u * i / t - .5 : d / t | 0,
                                r = 0,
                                s = 1 / 0,
                                q = 0; u > q; q++)
                                n = q % t - l,
                                    o = m - (q / t | 0),
                                    v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o),
                                    p > r && (r = p),
                                    s > p && (s = p);
                            v.max = r - s,
                                v.min = s,
                                v.v = u = b.amount || b.each * (t > u ? u - 1 : h ? "y" === h ? u / t : t : Math.max(t, u / t)) || 0,
                                v.b = 0 > u ? e - u : e
                        }
                        return u = (v[a] - v.min) / v.max,
                            v.b + (c ? c.getRatio(u) : u) * v.v
                    }
                }
                , s = d.prototype = new b;
            return d.version = "2.1.3",
                d.distribute = r,
                s.constructor = d,
                s.kill()._gc = s._forcingPlayhead = s._hasPause = !1,
                s.to = function (a, b, d, e) {
                    var f = d.repeat && l.TweenMax || c;
                    return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
                }
                ,
                s.from = function (a, b, d, e) {
                    return this.add((d.repeat && l.TweenMax || c).from(a, b, q(this, d)), e)
                }
                ,
                s.fromTo = function (a, b, d, e, f) {
                    var g = e.repeat && l.TweenMax || c;
                    return e = q(this, e, d),
                        b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
                }
                ,
                s.staggerTo = function (a, b, e, f, g, i, j, k) {
                    var l, o, q = new d({
                        onComplete: i,
                        onCompleteParams: j,
                        callbackScope: k,
                        smoothChildTiming: this.smoothChildTiming
                    }), s = r(e.stagger || f), t = e.startAt, u = e.cycle;
                    for ("string" == typeof a && (a = c.selector(a) || a),
                        a = a || [],
                        h(a) && (a = p(a)),
                        o = 0; o < a.length; o++)
                        l = m(e),
                            t && (l.startAt = m(t),
                                t.cycle && n(l.startAt, a, o)),
                            u && (n(l, a, o),
                                null != l.duration && (b = l.duration,
                                    delete l.duration)),
                            q.to(a[o], b, l, s(o, a[o], a));
                    return this.add(q, g)
                }
                ,
                s.staggerFrom = function (a, b, c, d, e, f, g, h) {
                    return c.runBackwards = !0,
                        this.staggerTo(a, b, q(this, c), d, e, f, g, h)
                }
                ,
                s.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
                    return d.startAt = c,
                        this.staggerTo(a, b, q(this, d, c), e, f, g, h, i)
                }
                ,
                s.call = function (a, b, d, e) {
                    return this.add(c.delayedCall(0, a, b, d), e)
                }
                ,
                s.set = function (a, b, d) {
                    return this.add(new c(a, 0, q(this, b, null, !0)), d)
                }
                ,
                d.exportRoot = function (a, b) {
                    a = a || {},
                        null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                    var e, f, g, h, i = new d(a), j = i._timeline;
                    for (null == b && (b = !0),
                        j._remove(i, !0),
                        i._startTime = 0,
                        i._rawPrevTime = i._time = i._totalTime = j._time,
                        g = j._first; g;)
                        h = g._next,
                            b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay,
                                0 > f && (e = 1),
                                i.add(g, f)),
                            g = h;
                    return j.add(i, 0),
                        e && i.totalDuration(),
                        i
                }
                ,
                s.add = function (e, f, g, h) {
                    var j, k, l, m, n, o, p = this;
                    if ("number" != typeof f && (f = p._parseTimeOrLabel(f, 0, !0, e)),
                        !(e instanceof a)) {
                        if (e instanceof Array || e && e.push && i(e)) {
                            for (g = g || "normal",
                                h = h || 0,
                                j = f,
                                k = e.length,
                                l = 0; k > l; l++)
                                i(m = e[l]) && (m = new d({
                                    tweens: m
                                })),
                                    p.add(m, j),
                                    "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())),
                                    j += h;
                            return p._uncache(!0)
                        }
                        if ("string" == typeof e)
                            return p.addLabel(e, f);
                        if ("function" != typeof e)
                            throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(p, e, f),
                        (e._time || !e._duration && e._initted) && (j = (p.rawTime() - e._startTime) * e._timeScale,
                            (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) - e._totalTime > 1e-5) && e.render(j, !1, !1)),
                        (p._gc || p._time === p._duration) && !p._paused && p._duration < p.duration())
                        for (n = p,
                            o = n.rawTime() > e._startTime; n._timeline;)
                            o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1),
                                n = n._timeline;
                    return p
                }
                ,
                s.remove = function (b) {
                    if (b instanceof a) {
                        this._remove(b, !1);
                        var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                        return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale,
                            this
                    }
                    if (b instanceof Array || b && b.push && i(b)) {
                        for (var d = b.length; --d > -1;)
                            this.remove(b[d]);
                        return this
                    }
                    return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                }
                ,
                s._remove = function (a, c) {
                    b.prototype._remove.call(this, a, c);
                    var d = this._last;
                    return d ? this._time > this.duration() && (this._time = this._duration,
                        this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
                        this
                }
                ,
                s.append = function (a, b) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                }
                ,
                s.insert = s.insertMultiple = function (a, b, c, d) {
                    return this.add(a, b || 0, c, d)
                }
                ,
                s.appendMultiple = function (a, b, c, d) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                }
                ,
                s.addLabel = function (a, b) {
                    return this._labels[a] = this._parseTimeOrLabel(b),
                        this
                }
                ,
                s.addPause = function (a, b, d, e) {
                    var f = c.delayedCall(0, o, d, e || this);
                    return f.vars.onComplete = f.vars.onReverseComplete = b,
                        f.data = "isPause",
                        this._hasPause = !0,
                        this.add(f, a)
                }
                ,
                s.removeLabel = function (a) {
                    return delete this._labels[a],
                        this
                }
                ,
                s.getLabelTime = function (a) {
                    return null != this._labels[a] ? this._labels[a] : -1
                }
                ,
                s._parseTimeOrLabel = function (b, c, d, e) {
                    var f, g;
                    if (e instanceof a && e.timeline === this)
                        this.remove(e);
                    else if (e && (e instanceof Array || e.push && i(e)))
                        for (g = e.length; --g > -1;)
                            e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
                    if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0,
                        "string" == typeof c)
                        return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
                    if (c = c || 0,
                        "string" != typeof b || !isNaN(b) && null == this._labels[b])
                        null == b && (b = f);
                    else {
                        if (g = b.indexOf("="),
                            -1 === g)
                            return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)),
                            b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f
                    }
                    return Number(b) + c
                }
                ,
                s.seek = function (a, b) {
                    return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
                }
                ,
                s.stop = function () {
                    return this.paused(!0)
                }
                ,
                s.gotoAndPlay = function (a, b) {
                    return this.play(a, b)
                }
                ,
                s.gotoAndStop = function (a, b) {
                    return this.pause(a, b)
                }
                ,
                s.render = function (a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, g, h, i, l, m, n, o = this, p = o._time, q = o._dirty ? o.totalDuration() : o._totalDuration, r = o._startTime, s = o._timeScale, t = o._paused;
                    if (p !== o._time && (a += o._time - p),
                        o._hasPause && !o._forcingPlayhead && !b) {
                        if (a > p)
                            for (d = o._first; d && d._startTime <= a && !l;)
                                d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === o._rawPrevTime || (l = d),
                                    d = d._next;
                        else
                            for (d = o._last; d && d._startTime >= a && !l;)
                                d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d),
                                    d = d._prev;
                        l && (o._time = o._totalTime = a = l._startTime,
                            n = o._startTime + (o._reversed ? o._duration - a : a) / o._timeScale)
                    }
                    if (a >= q - e && a >= 0)
                        o._totalTime = o._time = q,
                            o._reversed || o._hasPausedChild() || (f = !0,
                                h = "onComplete",
                                i = !!o._timeline.autoRemoveChildren,
                                0 === o._duration && (0 >= a && a >= -e || o._rawPrevTime < 0 || o._rawPrevTime === e) && o._rawPrevTime !== a && o._first && (i = !0,
                                    o._rawPrevTime > e && (h = "onReverseComplete"))),
                            o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e,
                            a = q + 1e-4;
                    else if (e > a)
                        if (o._totalTime = o._time = 0,
                            a > -e && (a = 0),
                            (0 !== p || 0 === o._duration && o._rawPrevTime !== e && (o._rawPrevTime > 0 || 0 > a && o._rawPrevTime >= 0)) && (h = "onReverseComplete",
                                f = o._reversed),
                            0 > a)
                            o._active = !1,
                                o._timeline.autoRemoveChildren && o._reversed ? (i = f = !0,
                                    h = "onReverseComplete") : o._rawPrevTime >= 0 && o._first && (i = !0),
                                o._rawPrevTime = a;
                        else {
                            if (o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e,
                                0 === a && f)
                                for (d = o._first; d && 0 === d._startTime;)
                                    d._duration || (f = !1),
                                        d = d._next;
                            a = 0,
                                o._initted || (i = !0)
                        }
                    else
                        o._totalTime = o._time = o._rawPrevTime = a;
                    if (o._time !== p && o._first || c || i || l) {
                        if (o._initted || (o._initted = !0),
                            o._active || !o._paused && o._time !== p && a > 0 && (o._active = !0),
                            0 === p && o.vars.onStart && (0 === o._time && o._duration || b || o._callback("onStart")),
                            m = o._time,
                            m >= p)
                            for (d = o._first; d && (g = d._next,
                                m === o._time && (!o._paused || t));)
                                (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && (o.pause(),
                                    o._pauseTime = n),
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
                                    d = g;
                        else
                            for (d = o._last; d && (g = d._prev,
                                m === o._time && (!o._paused || t));) {
                                if (d._active || d._startTime <= p && !d._paused && !d._gc) {
                                    if (l === d) {
                                        for (l = d._prev; l && l.endTime() > o._time;)
                                            l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c),
                                                l = l._prev;
                                        l = null,
                                            o.pause(),
                                            o._pauseTime = n
                                    }
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                }
                                d = g
                            }
                        o._onUpdate && (b || (j.length && k(),
                            o._callback("onUpdate"))),
                            h && (o._gc || (r === o._startTime || s !== o._timeScale) && (0 === o._time || q >= o.totalDuration()) && (f && (j.length && k(),
                                o._timeline.autoRemoveChildren && o._enabled(!1, !1),
                                o._active = !1),
                                !b && o.vars[h] && o._callback(h)))
                    }
                }
                ,
                s._hasPausedChild = function () {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild())
                            return !0;
                        a = a._next
                    }
                    return !1
                }
                ,
                s.getChildren = function (a, b, d, e) {
                    e = e || -9999999999;
                    for (var f = [], g = this._first, h = 0; g;)
                        g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g),
                            a !== !1 && (f = f.concat(g.getChildren(!0, b, d)),
                                h = f.length))),
                            g = g._next;
                    return f
                }
                ,
                s.getTweensOf = function (a, b) {
                    var d, e, f = this._gc, g = [], h = 0;
                    for (f && this._enabled(!0, !0),
                        d = c.getTweensOf(a),
                        e = d.length; --e > -1;)
                        (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
                    return f && this._enabled(!1, !0),
                        g
                }
                ,
                s.recent = function () {
                    return this._recent
                }
                ,
                s._contains = function (a) {
                    for (var b = a.timeline; b;) {
                        if (b === this)
                            return !0;
                        b = b.timeline
                    }
                    return !1
                }
                ,
                s.shiftChildren = function (a, b, c) {
                    c = c || 0;
                    for (var d, e = this._first, f = this._labels; e;)
                        e._startTime >= c && (e._startTime += a),
                            e = e._next;
                    if (b)
                        for (d in f)
                            f[d] >= c && (f[d] += a);
                    return this._uncache(!0)
                }
                ,
                s._kill = function (a, b) {
                    if (!a && !b)
                        return this._enabled(!1, !1);
                    for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;)
                        c[d]._kill(a, b) && (e = !0);
                    return e
                }
                ,
                s.clear = function (a) {
                    var b = this.getChildren(!1, !0, !0)
                        , c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;)
                        b[c]._enabled(!1, !1);
                    return a !== !1 && (this._labels = {}),
                        this._uncache(!0)
                }
                ,
                s.invalidate = function () {
                    for (var b = this._first; b;)
                        b.invalidate(),
                            b = b._next;
                    return a.prototype.invalidate.call(this)
                }
                ,
                s._enabled = function (a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;)
                            d._enabled(a, !0),
                                d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }
                ,
                s.totalTime = function (b, c, d) {
                    this._forcingPlayhead = !0;
                    var e = a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1,
                        e
                }
                ,
                s.duration = function (a) {
                    return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a),
                        this) : (this._dirty && this.totalDuration(),
                            this._duration)
                }
                ,
                s.totalDuration = function (a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var b, c, d = 0, e = this, f = e._last, g = 999999999999; f;)
                                b = f._prev,
                                    f._dirty && f.totalDuration(),
                                    f._startTime > g && e._sortChildren && !f._paused && !e._calculatingDuration ? (e._calculatingDuration = 1,
                                        e.add(f, f._startTime - f._delay),
                                        e._calculatingDuration = 0) : g = f._startTime,
                                    f._startTime < 0 && !f._paused && (d -= f._startTime,
                                        e._timeline.smoothChildTiming && (e._startTime += f._startTime / e._timeScale,
                                            e._time -= f._startTime,
                                            e._totalTime -= f._startTime,
                                            e._rawPrevTime -= f._startTime),
                                        e.shiftChildren(-f._startTime, !1, -9999999999),
                                        g = 0),
                                    c = f._startTime + f._totalDuration / f._timeScale,
                                    c > d && (d = c),
                                    f = b;
                            e._duration = e._totalDuration = d,
                                e._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
                }
                ,
                s.paused = function (b) {
                    if (b === !1 && this._paused)
                        for (var c = this._first; c;)
                            c._startTime === this._time && "isPause" === c.data && (c._rawPrevTime = 0),
                                c = c._next;
                    return a.prototype.paused.apply(this, arguments)
                }
                ,
                s.usesFrames = function () {
                    for (var b = this._timeline; b._timeline;)
                        b = b._timeline;
                    return b === a._rootFramesTimeline
                }
                ,
                s.rawTime = function (a) {
                    return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale
                }
                ,
                d
        }, !0),
        _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
            var d = function (b) {
                a.call(this, b),
                    this._repeat = this.vars.repeat || 0,
                    this._repeatDelay = this.vars.repeatDelay || 0,
                    this._cycle = 0,
                    this._yoyo = !!this.vars.yoyo,
                    this._dirty = !0
            }
                , e = 1e-8
                , f = b._internals
                , g = f.lazyTweens
                , h = f.lazyRender
                , i = _gsScope._gsDefine.globals
                , j = new c(null, null, 1, 0)
                , k = d.prototype = new a;
            return k.constructor = d,
                k.kill()._gc = !1,
                d.version = "2.1.3",
                k.invalidate = function () {
                    return this._yoyo = !!this.vars.yoyo,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._uncache(!0),
                        a.prototype.invalidate.call(this)
                }
                ,
                k.addCallback = function (a, c, d, e) {
                    return this.add(b.delayedCall(0, a, d, e), c)
                }
                ,
                k.removeCallback = function (a, b) {
                    if (a)
                        if (null == b)
                            this._kill(null, a);
                        else
                            for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;)
                                c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }
                ,
                k.removePause = function (b) {
                    return this.removeCallback(a._internals.pauseCallback, b)
                }
                ,
                k.tweenTo = function (a, c) {
                    c = c || {};
                    var d, e, f, g = {
                        ease: j,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    }, h = c.repeat && i.TweenMax || b;
                    for (e in c)
                        g[e] = c[e];
                    return g.time = this._parseTimeOrLabel(a),
                        d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001,
                        f = new h(this, d, g),
                        g.onStart = function () {
                            f.target.paused(!0),
                                f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0),
                                c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || [])
                        }
                        ,
                        f
                }
                ,
                k.tweenFromTo = function (a, b, c) {
                    c = c || {},
                        a = this._parseTimeOrLabel(a),
                        c.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [a],
                            callbackScope: this
                        },
                        c.immediateRender = c.immediateRender !== !1;
                    var d = this.tweenTo(b, c);
                    return d.isFromTo = 1,
                        d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                }
                ,
                k.render = function (a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, i, j, k, l, m, n, o, p = this, q = p._time, r = p._dirty ? p.totalDuration() : p._totalDuration, s = p._duration, t = p._totalTime, u = p._startTime, v = p._timeScale, w = p._rawPrevTime, x = p._paused, y = p._cycle;
                    if (q !== p._time && (a += p._time - q),
                        a >= r - e && a >= 0)
                        p._locked || (p._totalTime = r,
                            p._cycle = p._repeat),
                            p._reversed || p._hasPausedChild() || (f = !0,
                                j = "onComplete",
                                k = !!p._timeline.autoRemoveChildren,
                                0 === p._duration && (0 >= a && a >= -e || 0 > w || w === e) && w !== a && p._first && (k = !0,
                                    w > e && (j = "onReverseComplete"))),
                            p._rawPrevTime = p._duration || !b || a || p._rawPrevTime === a ? a : e,
                            p._yoyo && 1 & p._cycle ? p._time = a = 0 : (p._time = s,
                                a = s + 1e-4);
                    else if (e > a)
                        if (p._locked || (p._totalTime = p._cycle = 0),
                            p._time = 0,
                            a > -e && (a = 0),
                            (0 !== q || 0 === s && w !== e && (w > 0 || 0 > a && w >= 0) && !p._locked) && (j = "onReverseComplete",
                                f = p._reversed),
                            0 > a)
                            p._active = !1,
                                p._timeline.autoRemoveChildren && p._reversed ? (k = f = !0,
                                    j = "onReverseComplete") : w >= 0 && p._first && (k = !0),
                                p._rawPrevTime = a;
                        else {
                            if (p._rawPrevTime = s || !b || a || p._rawPrevTime === a ? a : e,
                                0 === a && f)
                                for (d = p._first; d && 0 === d._startTime;)
                                    d._duration || (f = !1),
                                        d = d._next;
                            a = 0,
                                p._initted || (k = !0)
                        }
                    else
                        0 === s && 0 > w && (k = !0),
                            p._time = p._rawPrevTime = a,
                            p._locked || (p._totalTime = a,
                                0 !== p._repeat && (l = s + p._repeatDelay,
                                    p._cycle = p._totalTime / l >> 0,
                                    p._cycle && p._cycle === p._totalTime / l && a >= t && p._cycle--,
                                    p._time = p._totalTime - p._cycle * l,
                                    p._yoyo && 1 & p._cycle && (p._time = s - p._time),
                                    p._time > s ? (p._time = s,
                                        a = s + 1e-4) : p._time < 0 ? p._time = a = 0 : a = p._time));
                    if (p._hasPause && !p._forcingPlayhead && !b) {
                        if (a = p._time,
                            a > q || p._repeat && y !== p._cycle)
                            for (d = p._first; d && d._startTime <= a && !m;)
                                d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === p._rawPrevTime || (m = d),
                                    d = d._next;
                        else
                            for (d = p._last; d && d._startTime >= a && !m;)
                                d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d),
                                    d = d._prev;
                        m && (o = p._startTime + (p._reversed ? p._duration - m._startTime : m._startTime) / p._timeScale,
                            m._startTime < s && (p._time = p._rawPrevTime = a = m._startTime,
                                p._totalTime = a + p._cycle * (p._totalDuration + p._repeatDelay)))
                    }
                    if (p._cycle !== y && !p._locked) {
                        var z = p._yoyo && 0 !== (1 & y)
                            , A = z === (p._yoyo && 0 !== (1 & p._cycle))
                            , B = p._totalTime
                            , C = p._cycle
                            , D = p._rawPrevTime
                            , E = p._time;
                        if (p._totalTime = y * s,
                            p._cycle < y ? z = !z : p._totalTime += s,
                            p._time = q,
                            p._rawPrevTime = 0 === s ? w - 1e-4 : w,
                            p._cycle = y,
                            p._locked = !0,
                            q = z ? 0 : s,
                            p.render(q, b, 0 === s),
                            b || p._gc || p.vars.onRepeat && (p._cycle = C,
                                p._locked = !1,
                                p._callback("onRepeat")),
                            q !== p._time)
                            return;
                        if (A && (p._cycle = y,
                            p._locked = !0,
                            q = z ? s + 1e-4 : -1e-4,
                            p.render(q, !0, !1)),
                            p._locked = !1,
                            p._paused && !x)
                            return;
                        p._time = E,
                            p._totalTime = B,
                            p._cycle = C,
                            p._rawPrevTime = D
                    }
                    if (!(p._time !== q && p._first || c || k || m))
                        return void (t !== p._totalTime && p._onUpdate && (b || p._callback("onUpdate")));
                    if (p._initted || (p._initted = !0),
                        p._active || !p._paused && p._totalTime !== t && a > 0 && (p._active = !0),
                        0 === t && p.vars.onStart && (0 === p._totalTime && p._totalDuration || b || p._callback("onStart")),
                        n = p._time,
                        n >= q)
                        for (d = p._first; d && (i = d._next,
                            n === p._time && (!p._paused || x));)
                            (d._active || d._startTime <= p._time && !d._paused && !d._gc) && (m === d && (p.pause(),
                                p._pauseTime = o),
                                d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
                                d = i;
                    else
                        for (d = p._last; d && (i = d._prev,
                            n === p._time && (!p._paused || x));) {
                            if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                                if (m === d) {
                                    for (m = d._prev; m && m.endTime() > p._time;)
                                        m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c),
                                            m = m._prev;
                                    m = null,
                                        p.pause(),
                                        p._pauseTime = o
                                }
                                d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                            }
                            d = i
                        }
                    p._onUpdate && (b || (g.length && h(),
                        p._callback("onUpdate"))),
                        j && (p._locked || p._gc || (u === p._startTime || v !== p._timeScale) && (0 === p._time || r >= p.totalDuration()) && (f && (g.length && h(),
                            p._timeline.autoRemoveChildren && p._enabled(!1, !1),
                            p._active = !1),
                            !b && p.vars[j] && p._callback(j)))
                }
                ,
                k.getActive = function (a, b, c) {
                    var d, e, f = [], g = this.getChildren(a || null == a, b || null == a, !!c), h = 0, i = g.length;
                    for (d = 0; i > d; d++)
                        e = g[d],
                            e.isActive() && (f[h++] = e);
                    return f
                }
                ,
                k.getLabelAfter = function (a) {
                    a || 0 !== a && (a = this._time);
                    var b, c = this.getLabelsArray(), d = c.length;
                    for (b = 0; d > b; b++)
                        if (c[b].time > a)
                            return c[b].name;
                    return null
                }
                ,
                k.getLabelBefore = function (a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (b[c].time < a)
                            return b[c].name;
                    return null
                }
                ,
                k.getLabelsArray = function () {
                    var a, b = [], c = 0;
                    for (a in this._labels)
                        b[c++] = {
                            time: this._labels[a],
                            name: a
                        };
                    return b.sort(function (a, b) {
                        return a.time - b.time
                    }),
                        b
                }
                ,
                k.invalidate = function () {
                    return this._locked = !1,
                        a.prototype.invalidate.call(this)
                }
                ,
                k.progress = function (a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0
                }
                ,
                k.totalProgress = function (a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0
                }
                ,
                k.totalDuration = function (b) {
                    return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this),
                        this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
                        this._totalDuration)
                }
                ,
                k.time = function (a, b) {
                    if (!arguments.length)
                        return this._time;
                    this._dirty && this.totalDuration();
                    var c = this._duration
                        , d = this._cycle
                        , e = d * (c + this._repeatDelay);
                    return a > c && (a = c),
                        this.totalTime(this._yoyo && 1 & d ? c - a + e : this._repeat ? a + e : a, b)
                }
                ,
                k.repeat = function (a) {
                    return arguments.length ? (this._repeat = a,
                        this._uncache(!0)) : this._repeat
                }
                ,
                k.repeatDelay = function (a) {
                    return arguments.length ? (this._repeatDelay = a,
                        this._uncache(!0)) : this._repeatDelay
                }
                ,
                k.yoyo = function (a) {
                    return arguments.length ? (this._yoyo = a,
                        this) : this._yoyo
                }
                ,
                k.currentLabel = function (a) {
                    return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + e)
                }
                ,
                d
        }, !0),
        function () {
            var a = 180 / Math.PI
                , b = []
                , c = []
                , d = []
                , e = {}
                , f = _gsScope._gsDefine.globals
                , g = function (a, b, c, d) {
                    c === d && (c = d - (d - b) / 1e6),
                        a === b && (b = a + (c - a) / 1e6),
                        this.a = a,
                        this.b = b,
                        this.c = c,
                        this.d = d,
                        this.da = d - a,
                        this.ca = c - a,
                        this.ba = b - a
                }
                , h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"
                , i = function (a, b, c, d) {
                    var e = {
                        a: a
                    }
                        , f = {}
                        , g = {}
                        , h = {
                            c: d
                        }
                        , i = (a + b) / 2
                        , j = (b + c) / 2
                        , k = (c + d) / 2
                        , l = (i + j) / 2
                        , m = (j + k) / 2
                        , n = (m - l) / 8;
                    return e.b = i + (a - i) / 4,
                        f.b = l + n,
                        e.c = f.a = (e.b + f.b) / 2,
                        f.c = g.a = (l + m) / 2,
                        g.b = m - n,
                        h.b = k + (d - k) / 4,
                        g.c = h.a = (g.b + h.b) / 2,
                        [e, f, g, h]
                }
                , j = function (a, e, f, g, h) {
                    var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1, x = 0, y = a[0].a;
                    for (j = 0; w > j; j++)
                        n = a[x],
                            k = n.a,
                            l = n.d,
                            m = a[x + 1].d,
                            h ? (t = b[j],
                                u = c[j],
                                v = (u + t) * e * .25 / (g ? .5 : d[j] || .5),
                                o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0),
                                p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0),
                                q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5,
                                    p = l + (m - l) * e * .5,
                                    q = l - (o + p) / 2),
                            o += q,
                            p += q,
                            n.c = r = o,
                            0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a),
                            n.da = l - k,
                            n.ca = r - k,
                            n.ba = y - k,
                            f ? (s = i(k, y, r, l),
                                a.splice(x, 1, s[0], s[1], s[2], s[3]),
                                x += 4) : x++,
                            y = p;
                    n = a[x],
                        n.b = y,
                        n.c = y + .4 * (n.d - y),
                        n.da = n.d - n.a,
                        n.ca = n.c - n.a,
                        n.ba = y - n.a,
                        f && (s = i(n.a, y, n.c, n.d),
                            a.splice(x, 1, s[0], s[1], s[2], s[3]))
                }
                , k = function (a, d, e, f) {
                    var h, i, j, k, l, m, n = [];
                    if (f)
                        for (a = [f].concat(a),
                            i = a.length; --i > -1;)
                            "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                    if (h = a.length - 2,
                        0 > h)
                        return n[0] = new g(a[0][d], 0, 0, a[0][d]),
                            n;
                    for (i = 0; h > i; i++)
                        j = a[i][d],
                            k = a[i + 1][d],
                            n[i] = new g(j, 0, 0, k),
                            e && (l = a[i + 2][d],
                                b[i] = (b[i] || 0) + (k - j) * (k - j),
                                c[i] = (c[i] || 0) + (l - k) * (l - k));
                    return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]),
                        n
                }
                , l = function (a, f, g, i, l, m) {
                    var n, o, p, q, r, s, t, u, v = {}, w = [], x = m || a[0];
                    l = "string" == typeof l ? "," + l + "," : h,
                        null == f && (f = 1);
                    for (o in a[0])
                        w.push(o);
                    if (a.length > 1) {
                        for (u = a[a.length - 1],
                            t = !0,
                            n = w.length; --n > -1;)
                            if (o = w[n],
                                Math.abs(x[o] - u[o]) > .05) {
                                t = !1;
                                break
                            }
                        t && (a = a.concat(),
                            m && a.unshift(m),
                            a.push(a[1]),
                            m = a[a.length - 3])
                    }
                    for (b.length = c.length = d.length = 0,
                        n = w.length; --n > -1;)
                        o = w[n],
                            e[o] = -1 !== l.indexOf("," + o + ","),
                            v[o] = k(a, o, e[o], m);
                    for (n = b.length; --n > -1;)
                        b[n] = Math.sqrt(b[n]),
                            c[n] = Math.sqrt(c[n]);
                    if (!i) {
                        for (n = w.length; --n > -1;)
                            if (e[o])
                                for (p = v[w[n]],
                                    s = p.length - 1,
                                    q = 0; s > q; q++)
                                    r = p[q + 1].da / c[q] + p[q].da / b[q] || 0,
                                        d[q] = (d[q] || 0) + r * r;
                        for (n = d.length; --n > -1;)
                            d[n] = Math.sqrt(d[n])
                    }
                    for (n = w.length,
                        q = g ? 4 : 1; --n > -1;)
                        o = w[n],
                            p = v[o],
                            j(p, f, g, i, e[o]),
                            t && (p.splice(0, q),
                                p.splice(p.length - q, q));
                    return v
                }
                , m = function (a, b, c) {
                    b = b || "soft";
                    var d, e, f, h, i, j, k, l, m, n, o, p = {}, q = "cubic" === b ? 3 : 2, r = "soft" === b, s = [];
                    if (r && c && (a = [c].concat(a)),
                        null == a || a.length < q + 1)
                        throw "invalid Bezier data";
                    for (m in a[0])
                        s.push(m);
                    for (j = s.length; --j > -1;) {
                        for (m = s[j],
                            p[m] = i = [],
                            n = 0,
                            l = a.length,
                            k = 0; l > k; k++)
                            d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o),
                                r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),
                                i[n++] = d;
                        for (l = n - q + 1,
                            n = 0,
                            k = 0; l > k; k += q)
                            d = i[k],
                                e = i[k + 1],
                                f = i[k + 2],
                                h = 2 === q ? 0 : i[k + 3],
                                i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                        i.length = n
                    }
                    return p
                }
                , n = function (a, b, c) {
                    for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                        for (m = a[p],
                            f = m.a,
                            g = m.d - f,
                            h = m.c - f,
                            i = m.b - f,
                            d = e = 0,
                            k = 1; c >= k; k++)
                            j = o * k,
                                l = 1 - j,
                                d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j),
                                n = p * c + k - 1,
                                b[n] = (b[n] || 0) + d * d
                }
                , o = function (a, b) {
                    b = b >> 0 || 6;
                    var c, d, e, f, g = [], h = [], i = 0, j = 0, k = b - 1, l = [], m = [];
                    for (c in a)
                        n(a[c], g, b);
                    for (e = g.length,
                        d = 0; e > d; d++)
                        i += Math.sqrt(g[d]),
                            f = d % b,
                            m[f] = i,
                            f === k && (j += i,
                                f = d / b >> 0,
                                l[f] = m,
                                h[f] = j,
                                i = 0,
                                m = []);
                    return {
                        length: j,
                        lengths: h,
                        segments: l
                    }
                }
                , p = _gsScope._gsDefine.plugin({
                    propName: "bezier",
                    priority: -1,
                    version: "1.3.9",
                    API: 2,
                    global: !0,
                    init: function (a, b, c) {
                        this._target = a,
                            b instanceof Array && (b = {
                                values: b
                            }),
                            this._func = {},
                            this._mod = {},
                            this._props = [],
                            this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                        var d, e, f, g, h, i = b.values || [], j = {}, k = i[0], n = b.autoRotate || c.vars.orientToBezier;
                        this._autoRotate = n ? n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]] : null;
                        for (d in k)
                            this._props.push(d);
                        for (f = this._props.length; --f > -1;)
                            d = this._props[f],
                                this._overwriteProps.push(d),
                                e = this._func[d] = "function" == typeof a[d],
                                j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]),
                                h || j[d] !== i[0][d] && (h = j);
                        if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j),
                            this._segCount = this._beziers[d].length,
                            this._timeRes) {
                            var p = o(this._beziers, this._timeRes);
                            this._length = p.length,
                                this._lengths = p.lengths,
                                this._segments = p.segments,
                                this._l1 = this._li = this._s1 = this._si = 0,
                                this._l2 = this._lengths[0],
                                this._curSeg = this._segments[0],
                                this._s2 = this._curSeg[0],
                                this._prec = 1 / this._curSeg.length
                        }
                        if (n = this._autoRotate)
                            for (this._initialRotations = [],
                                n[0] instanceof Array || (this._autoRotate = n = [n]),
                                f = n.length; --f > -1;) {
                                for (g = 0; 3 > g; g++)
                                    d = n[f][g],
                                        this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                                d = n[f][2],
                                    this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0,
                                    this._overwriteProps.push(d)
                            }
                        return this._startRatio = c.vars.runBackwards ? 1 : 0,
                            !0
                    },
                    set: function (b) {
                        var c, d, e, f, g, h, i, j, k, l, m, n = this._segCount, o = this._func, p = this._target, q = b !== this._startRatio;
                        if (this._timeRes) {
                            if (k = this._lengths,
                                l = this._curSeg,
                                m = b * this._length,
                                e = this._li,
                                m > this._l2 && n - 1 > e) {
                                for (j = n - 1; j > e && (this._l2 = k[++e]) <= m;)
                                    ;
                                this._l1 = k[e - 1],
                                    this._li = e,
                                    this._curSeg = l = this._segments[e],
                                    this._s2 = l[this._s1 = this._si = 0]
                            } else if (m < this._l1 && e > 0) {
                                for (; e > 0 && (this._l1 = k[--e]) >= m;)
                                    ;
                                0 === e && m < this._l1 ? this._l1 = 0 : e++,
                                    this._l2 = k[e],
                                    this._li = e,
                                    this._curSeg = l = this._segments[e],
                                    this._s1 = l[(this._si = l.length - 1) - 1] || 0,
                                    this._s2 = l[this._si]
                            }
                            if (c = e,
                                m -= this._l1,
                                e = this._si,
                                m > this._s2 && e < l.length - 1) {
                                for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= m;)
                                    ;
                                this._s1 = l[e - 1],
                                    this._si = e
                            } else if (m < this._s1 && e > 0) {
                                for (; e > 0 && (this._s1 = l[--e]) >= m;)
                                    ;
                                0 === e && m < this._s1 ? this._s1 = 0 : e++,
                                    this._s2 = l[e],
                                    this._si = e
                            }
                            h = 1 === b ? 1 : (e + (m - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                        } else
                            c = 0 > b ? 0 : b >= 1 ? n - 1 : n * b >> 0,
                                h = (b - c * (1 / n)) * n;
                        for (d = 1 - h,
                            e = this._props.length; --e > -1;)
                            f = this._props[e],
                                g = this._beziers[f][c],
                                i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a,
                                this._mod[f] && (i = this._mod[f](i, p)),
                                o[f] ? p[f](i) : p[f] = i;
                        if (this._autoRotate) {
                            var r, s, t, u, v, w, x, y = this._autoRotate;
                            for (e = y.length; --e > -1;)
                                f = y[e][2],
                                    w = y[e][3] || 0,
                                    x = y[e][4] === !0 ? 1 : a,
                                    g = this._beziers[y[e][0]],
                                    r = this._beziers[y[e][1]],
                                    g && r && (g = g[c],
                                        r = r[c],
                                        s = g.a + (g.b - g.a) * h,
                                        u = g.b + (g.c - g.b) * h,
                                        s += (u - s) * h,
                                        u += (g.c + (g.d - g.c) * h - u) * h,
                                        t = r.a + (r.b - r.a) * h,
                                        v = r.b + (r.c - r.b) * h,
                                        t += (v - t) * h,
                                        v += (r.c + (r.d - r.c) * h - v) * h,
                                        i = q ? Math.atan2(v - t, u - s) * x + w : this._initialRotations[e],
                                        this._mod[f] && (i = this._mod[f](i, p)),
                                        o[f] ? p[f](i) : p[f] = i)
                        }
                    }
                })
                , q = p.prototype;
            p.bezierThrough = l,
                p.cubicToQuadratic = i,
                p._autoCSS = !0,
                p.quadraticToCubic = function (a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }
                ,
                p._cssRegister = function () {
                    var a = f.CSSPlugin;
                    if (a) {
                        var b = a._internals
                            , c = b._parseToProxy
                            , d = b._setPluginRatio
                            , e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function (a, b, f, g, h, i) {
                                b instanceof Array && (b = {
                                    values: b
                                }),
                                    i = new p;
                                var j, k, l, m = b.values, n = m.length - 1, o = [], q = {};
                                if (0 > n)
                                    return h;
                                for (j = 0; n >= j; j++)
                                    l = c(a, m[j], g, h, i, n !== j),
                                        o[j] = l.end;
                                for (k in b)
                                    q[k] = b[k];
                                return q.values = o,
                                    h = new e(a, "bezier", 0, 0, l.pt, 2),
                                    h.data = l,
                                    h.plugin = i,
                                    h.setRatio = d,
                                    0 === q.autoRotate && (q.autoRotate = !0),
                                    !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate),
                                        q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1),
                                    q.autoRotate && (g._transform || g._enableTransforms(!1),
                                        l.autoRotate = g._target._gsTransform,
                                        l.proxy.rotation = l.autoRotate.rotation || 0,
                                        g._overwriteProps.push("rotation")),
                                    i._onInitTween(l.proxy, q, g._tween),
                                    h
                            }
                        })
                    }
                }
                ,
                q._mod = function (a) {
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1;)
                        b = a[c[d]],
                            b && "function" == typeof b && (this._mod[c[d]] = b)
                }
                ,
                q._kill = function (a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b],
                                delete this._func[b],
                                c = d.length; --c > -1;)
                                d[c] === b && d.splice(c, 1);
                    if (d = this._autoRotate)
                        for (c = d.length; --c > -1;)
                            a[d[c][2]] && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }
        }(),
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
            var c, d, e, f, g = function () {
                a.call(this, "css"),
                    this._overwriteProps.length = 0,
                    this.setRatio = g.prototype.setRatio
            }, h = _gsScope._gsDefine.globals, i = {}, j = g.prototype = new a("css");
            j.constructor = g,
                g.version = "2.1.3",
                g.API = 2,
                g.defaultTransformPerspective = 0,
                g.defaultSkewType = "compensated",
                g.defaultSmoothOrigin = !0,
                j = "px",
                g.suffixMap = {
                    top: j,
                    right: j,
                    bottom: j,
                    left: j,
                    width: j,
                    height: j,
                    fontSize: j,
                    padding: j,
                    margin: j,
                    perspective: j,
                    lineHeight: ""
                };
            var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g, t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, x = /(?:\d|\-|\+|=|#|\.)*/g, y = /opacity *= *([^)]*)/i, z = /opacity:([^;]*)/i, A = /alpha\(opacity *=.+?\)/i, B = /^(rgb|hsl)/, C = /([A-Z])/g, D = /-([a-z])/gi, E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, F = function (a, b) {
                return b.toUpperCase()
            }, G = /(?:Left|Right|Width)/i, H = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, J = /,(?=[^\)]*(?:\(|$))/gi, K = /[\s,\(]/i, L = Math.PI / 180, M = 180 / Math.PI, N = {}, O = {
                style: {}
            }, P = _gsScope.document || {
                createElement: function () {
                    return O
                }
            }, Q = function (a, b) {
                var c = P.createElementNS ? P.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : P.createElement(a);
                return c.style ? c : P.createElement(a)
            }, R = Q("div"), S = Q("img"), T = g._internals = {
                _specialProps: i
            }, U = (_gsScope.navigator || {}).userAgent || "", V = function () {
                var a = U.indexOf("Android")
                    , b = Q("a");
                return m = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === a || parseFloat(U.substr(a + 8, 2)) > 3),
                    o = m && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6,
                    n = -1 !== U.indexOf("Firefox"),
                    (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (p = parseFloat(RegExp.$1)),
                    b ? (b.style.cssText = "top:1px;opacity:.55;",
                        /^0.55/.test(b.style.opacity)) : !1
            }(), W = function (a) {
                return y.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, X = function (a) {
                _gsScope.console && console.log(a)
            }, Y = "", Z = "", $ = function (a, b) {
                b = b || R;
                var c, d, e = b.style;
                if (void 0 !== e[a])
                    return a;
                for (a = a.charAt(0).toUpperCase() + a.substr(1),
                    c = ["O", "Moz", "ms", "Ms", "Webkit"],
                    d = 5; --d > -1 && void 0 === e[c[d] + a];)
                    ;
                return d >= 0 ? (Z = 3 === d ? "ms" : c[d],
                    Y = "-" + Z.toLowerCase() + "-",
                    Z + a) : null
            }, _ = "undefined" != typeof window ? window : P.defaultView || {
                getComputedStyle: function () { }
            }, aa = function (a) {
                return _.getComputedStyle(a)
            }, ba = g.getStyle = function (a, b, c, d, e) {
                var f;
                return V || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || aa(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(C, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]),
                    null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : W(a)
            }
                , ca = T.convertToPixels = function (a, c, d, e, f) {
                    if ("px" === e || !e && "lineHeight" !== c)
                        return d;
                    if ("auto" === e || !d)
                        return 0;
                    var h, i, j, k = G.test(c), l = a, m = R.style, n = 0 > d, o = 1 === d;
                    if (n && (d = -d),
                        o && (d *= 100),
                        "lineHeight" !== c || e)
                        if ("%" === e && -1 !== c.indexOf("border"))
                            h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                        else {
                            if (m.cssText = "border:0 solid red;position:" + ba(a, "position") + ";line-height:0;",
                                "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e)
                                m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                            else {
                                if (l = a.parentNode || P.body,
                                    -1 !== ba(l, "display").indexOf("flex") && (m.position = "absolute"),
                                    i = l._gsCache,
                                    j = b.ticker.frame,
                                    i && k && i.time === j)
                                    return i.width * d / 100;
                                m[k ? "width" : "height"] = d + e
                            }
                            l.appendChild(R),
                                h = parseFloat(R[k ? "offsetWidth" : "offsetHeight"]),
                                l.removeChild(R),
                                k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {},
                                    i.time = j,
                                    i.width = h / d * 100),
                                0 !== h || f || (h = ca(a, c, d, e, !0))
                        }
                    else
                        i = aa(a).lineHeight,
                            a.style.lineHeight = d,
                            h = parseFloat(aa(a).lineHeight),
                            a.style.lineHeight = i;
                    return o && (h /= 100),
                        n ? -h : h
                }
                , da = T.calculateOffset = function (a, b, c) {
                    if ("absolute" !== ba(a, "position", c))
                        return 0;
                    var d = "left" === b ? "Left" : "Top"
                        , e = ba(a, "margin" + d, c);
                    return a["offset" + d] - (ca(a, b, parseFloat(e), e.replace(x, "")) || 0)
                }
                , ea = function (a, b) {
                    var c, d, e, f = {};
                    if (b = b || aa(a, null))
                        if (c = b.length)
                            for (; --c > -1;)
                                e = b[c],
                                    (-1 === e.indexOf("-transform") || Fa === e) && (f[e.replace(D, F)] = b.getPropertyValue(e));
                        else
                            for (c in b)
                                (-1 === c.indexOf("Transform") || Ea === c) && (f[c] = b[c]);
                    else if (b = a.currentStyle || a.style)
                        for (c in b)
                            "string" == typeof c && void 0 === f[c] && (f[c.replace(D, F)] = b[c]);
                    return V || (f.opacity = W(a)),
                        d = Ta(a, b, !1),
                        f.rotation = d.rotation,
                        f.skewX = d.skewX,
                        f.scaleX = d.scaleX,
                        f.scaleY = d.scaleY,
                        f.x = d.x,
                        f.y = d.y,
                        Ha && (f.z = d.z,
                            f.rotationX = d.rotationX,
                            f.rotationY = d.rotationY,
                            f.scaleZ = d.scaleZ),
                        f.filters && delete f.filters,
                        f
                }, fa = function (a, b, c, d, e) {
                    var f, g, h, i = {}, j = a.style;
                    for (g in c)
                        "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(w, "") ? f : 0 : da(a, g),
                            void 0 !== j[g] && (h = new ua(j, g, j[g], h)));
                    if (d)
                        for (g in d)
                            "className" !== g && (i[g] = d[g]);
                    return {
                        difs: i,
                        firstMPT: h
                    }
                }, ga = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                }, ha = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ia = function (a, b, c) {
                    if ("svg" === (a.nodeName + "").toLowerCase())
                        return (c || aa(a))[b] || 0;
                    if (a.getCTM && Qa(a))
                        return a.getBBox()[b] || 0;
                    var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight)
                        , e = ga[b]
                        , f = e.length;
                    for (c = c || aa(a, null); --f > -1;)
                        d -= parseFloat(ba(a, "padding" + e[f], c, !0)) || 0,
                            d -= parseFloat(ba(a, "border" + e[f] + "Width", c, !0)) || 0;
                    return d
                }, ja = function (a, b) {
                    if ("contain" === a || "auto" === a || "auto auto" === a)
                        return a + " ";
                    (null == a || "" === a) && (a = "0 0");
                    var c, d = a.split(" "), e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0], f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                    if (d.length > 3 && !b) {
                        for (d = a.split(", ").join(",").split(","),
                            a = [],
                            c = 0; c < d.length; c++)
                            a.push(ja(d[c]));
                        return a.join(",")
                    }
                    return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"),
                        ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"),
                        a = e + " " + f + (d.length > 2 ? " " + d[2] : ""),
                        b && (b.oxp = -1 !== e.indexOf("%"),
                            b.oyp = -1 !== f.indexOf("%"),
                            b.oxr = "=" === e.charAt(1),
                            b.oyr = "=" === f.charAt(1),
                            b.ox = parseFloat(e.replace(w, "")),
                            b.oy = parseFloat(f.replace(w, "")),
                            b.v = a),
                        b || a
                }, ka = function (a, b) {
                    return "function" == typeof a && (a = a(r, q)),
                        "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
                }, la = function (a, b) {
                    "function" == typeof a && (a = a(r, q));
                    var c = "string" == typeof a && "=" === a.charAt(1);
                    return "string" == typeof a && "v" === a.charAt(a.length - 2) && (a = (c ? a.substr(0, 2) : 0) + window["inner" + ("vh" === a.substr(-2) ? "Height" : "Width")] * (parseFloat(c ? a.substr(2) : a) / 100)),
                        null == a ? b : c ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
                }, ma = function (a, b, c, d) {
                    var e, f, g, h, i, j = 1e-6;
                    return "function" == typeof a && (a = a(r, q)),
                        null == a ? h = b : "number" == typeof a ? h = a : (e = 360,
                            f = a.split("_"),
                            i = "=" === a.charAt(1),
                            g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : M) - (i ? 0 : b),
                            f.length && (d && (d[c] = b + g),
                                -1 !== a.indexOf("short") && (g %= e,
                                    g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
                                -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)),
                            h = b + g),
                        j > h && h > -j && (h = 0),
                        h
                }, na = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                }, oa = function (a, b, c) {
                    return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a,
                        255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                }, pa = g.parseColor = function (a, b) {
                    var c, d, e, f, g, h, i, j, k, l, m;
                    if (a)
                        if ("number" == typeof a)
                            c = [a >> 16, a >> 8 & 255, 255 & a];
                        else {
                            if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)),
                                na[a])
                                c = na[a];
                            else if ("#" === a.charAt(0))
                                4 === a.length && (d = a.charAt(1),
                                    e = a.charAt(2),
                                    f = a.charAt(3),
                                    a = "#" + d + d + e + e + f + f),
                                    a = parseInt(a.substr(1), 16),
                                    c = [a >> 16, a >> 8 & 255, 255 & a];
                            else if ("hsl" === a.substr(0, 3))
                                if (c = m = a.match(s),
                                    b) {
                                    if (-1 !== a.indexOf("="))
                                        return a.match(t)
                                } else
                                    g = Number(c[0]) % 360 / 360,
                                        h = Number(c[1]) / 100,
                                        i = Number(c[2]) / 100,
                                        e = .5 >= i ? i * (h + 1) : i + h - i * h,
                                        d = 2 * i - e,
                                        c.length > 3 && (c[3] = Number(c[3])),
                                        c[0] = oa(g + 1 / 3, d, e),
                                        c[1] = oa(g, d, e),
                                        c[2] = oa(g - 1 / 3, d, e);
                            else
                                c = a.match(s) || na.transparent;
                            c[0] = Number(c[0]),
                                c[1] = Number(c[1]),
                                c[2] = Number(c[2]),
                                c.length > 3 && (c[3] = Number(c[3]))
                        }
                    else
                        c = na.black;
                    return b && !m && (d = c[0] / 255,
                        e = c[1] / 255,
                        f = c[2] / 255,
                        j = Math.max(d, e, f),
                        k = Math.min(d, e, f),
                        i = (j + k) / 2,
                        j === k ? g = h = 0 : (l = j - k,
                            h = i > .5 ? l / (2 - j - k) : l / (j + k),
                            g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4,
                            g *= 60),
                        c[0] = g + .5 | 0,
                        c[1] = 100 * h + .5 | 0,
                        c[2] = 100 * i + .5 | 0),
                        c
                }
                , qa = function (a, b) {
                    var c, d, e, f = a.match(ra) || [], g = 0, h = "";
                    if (!f.length)
                        return a;
                    for (c = 0; c < f.length; c++)
                        d = f[c],
                            e = a.substr(g, a.indexOf(d, g) - g),
                            g += e.length + d.length,
                            d = pa(d, b),
                            3 === d.length && d.push(1),
                            h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                    return h + a.substr(g)
                }, ra = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (j in na)
                ra += "|" + j + "\\b";
            ra = new RegExp(ra + ")", "gi"),
                g.colorStringFilter = function (a) {
                    var b, c = a[0] + " " + a[1];
                    ra.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("),
                        a[0] = qa(a[0], b),
                        a[1] = qa(a[1], b)),
                        ra.lastIndex = 0
                }
                ,
                b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
            var sa = function (a, b, c, d) {
                if (null == a)
                    return function (a) {
                        return a
                    }
                        ;
                var e, f = b ? (a.match(ra) || [""])[0] : "", g = a.split(f).join("").match(u) || [], h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "", j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = k > 0 ? g[0].replace(s, "") : "";
                return k ? e = b ? function (a) {
                    var b, m, n, o;
                    if ("number" == typeof a)
                        a += l;
                    else if (d && J.test(a)) {
                        for (o = a.replace(J, "|").split("|"),
                            n = 0; n < o.length; n++)
                            o[n] = e(o[n]);
                        return o.join(",")
                    }
                    if (b = (a.match(ra) || [f])[0],
                        m = a.split(b).join("").match(u) || [],
                        n = m.length,
                        k > n--)
                        for (; ++n < k;)
                            m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                    return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                }
                    : function (a) {
                        var b, f, m;
                        if ("number" == typeof a)
                            a += l;
                        else if (d && J.test(a)) {
                            for (f = a.replace(J, "|").split("|"),
                                m = 0; m < f.length; m++)
                                f[m] = e(f[m]);
                            return f.join(",")
                        }
                        if (b = a.match("," === j ? u : v) || [],
                            m = b.length,
                            k > m--)
                            for (; ++m < k;)
                                b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                        return (h && "none" !== a ? a.substr(0, a.indexOf(b[0])) || h : h) + b.join(j) + i
                    }
                    : function (a) {
                        return a
                    }
            }
                , ta = function (a) {
                    return a = a.split(","),
                        function (b, c, d, e, f, g, h) {
                            var i, j = (c + "").split(" ");
                            for (h = {},
                                i = 0; 4 > i; i++)
                                h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                            return e.parse(b, h, f, g)
                        }
                }
                , ua = (T._setPluginRatio = function (a) {
                    this.plugin.setRatio(a);
                    for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;)
                        b = h[i.v],
                            i.r ? b = i.r(b) : j > b && b > -j && (b = 0),
                            i.t[i.p] = b,
                            i = i._next;
                    if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation),
                        1 === a || 0 === a)
                        for (i = g.firstMPT,
                            f = 1 === a ? "e" : "b"; i;) {
                            if (c = i.t,
                                c.type) {
                                if (1 === c.type) {
                                    for (e = c.xs0 + c.s + c.xs1,
                                        d = 1; d < c.l; d++)
                                        e += c["xn" + d] + c["xs" + (d + 1)];
                                    c[f] = e
                                }
                            } else
                                c[f] = c.s + c.xs0;
                            i = i._next
                        }
                }
                    ,
                    function (a, b, c, d, e) {
                        this.t = a,
                            this.p = b,
                            this.v = c,
                            this.r = e,
                            d && (d._prev = this,
                                this._next = d)
                    }
                )
                , va = (T._parseToProxy = function (a, b, c, d, e, f) {
                    var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = N;
                    for (c._transform = null,
                        N = b,
                        d = k = c.parse(a, b, d, e),
                        N = p,
                        f && (c._transform = o,
                            l && (l._prev = null,
                                l._prev && (l._prev._next = null))); d && d !== l;) {
                        if (d.type <= 1 && (h = d.p,
                            n[h] = d.s + d.c,
                            m[h] = d.s,
                            f || (j = new ua(d, "s", h, j, d.r),
                                d.c = 0),
                            1 === d.type))
                            for (g = d.l; --g > 0;)
                                i = "xn" + g,
                                    h = d.p + "_" + i,
                                    n[h] = d.data[i],
                                    m[h] = d[i],
                                    f || (j = new ua(d, i, h, j, d.rxp[i]));
                        d = d._next
                    }
                    return {
                        proxy: m,
                        end: n,
                        firstMPT: j,
                        pt: k
                    }
                }
                    ,
                    T.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
                        this.t = a,
                            this.p = b,
                            this.s = d,
                            this.c = e,
                            this.n = i || b,
                            a instanceof va || f.push(this.n),
                            this.r = j ? "function" == typeof j ? j : Math.round : j,
                            this.type = h || 0,
                            k && (this.pr = k,
                                c = !0),
                            this.b = void 0 === l ? d : l,
                            this.e = void 0 === m ? d + e : m,
                            g && (this._next = g,
                                g._prev = this)
                    }
                )
                , wa = function (a, b, c, d, e, f) {
                    var g = new va(a, b, c, d - c, e, -1, f);
                    return g.b = c,
                        g.e = g.xs0 = d,
                        g
                }
                , xa = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
                    c = c || f || "",
                        "function" == typeof d && (d = d(r, q)),
                        h = new va(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d),
                        d += "",
                        e && ra.test(d + c) && (d = [c, d],
                            g.colorStringFilter(d),
                            c = d[0],
                            d = d[1]);
                    var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "), E = d.split(", ").join(",").split(" "), F = D.length, G = k !== !1;
                    for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(J, ", ").split(" "),
                        E = E.join(" ").replace(J, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "),
                            E = E.join(" ").split(",").join(", ").split(" ")),
                        F = D.length),
                        F !== E.length && (D = (f || "").split(" "),
                            F = D.length),
                        h.plugin = j,
                        h.setRatio = l,
                        ra.lastIndex = 0,
                        m = 0; F > m; m++)
                        if (p = D[m],
                            u = E[m] + "",
                            x = parseFloat(p),
                            x || 0 === x)
                            h.appendXtra("", x, ka(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") ? Math.round : !1, !0);
                        else if (e && ra.test(p))
                            B = u.indexOf(")") + 1,
                                B = ")" + (B ? u.substr(B) : ""),
                                C = -1 !== u.indexOf("hsl") && V,
                                z = u,
                                p = pa(p, C),
                                u = pa(u, C),
                                y = p.length + u.length > 6,
                                y && !V && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent",
                                    h.e = h.e.split(E[m]).join("transparent")) : (V || (y = !1),
                                        C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ka(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ka(u[1], p[1]), "%,", !1).appendXtra("", p[2], ka(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round),
                                        y && (p = p.length < 4 ? 1 : p[3],
                                            h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))),
                                ra.lastIndex = 0;
                        else if (v = p.match(s)) {
                            if (w = u.match(t),
                                !w || w.length !== v.length)
                                return h;
                            for (o = 0,
                                n = 0; n < v.length; n++)
                                A = v[n],
                                    z = p.indexOf(A, o),
                                    h.appendXtra(p.substr(o, z - o), Number(A), ka(w[n], A), "", G && "px" === p.substr(z + A.length, 2) ? Math.round : !1, 0 === n),
                                    o = z + A.length;
                            h["xs" + h.l] += p.substr(o)
                        } else
                            h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                    if (-1 !== d.indexOf("=") && h.data) {
                        for (B = h.xs0 + h.data.s,
                            m = 1; m < h.l; m++)
                            B += h["xs" + m] + h.data["xn" + m];
                        h.e = B + h["xs" + m]
                    }
                    return h.l || (h.type = -1,
                        h.xs0 = h.e),
                        h.xfirst || h
                }
                , ya = 9;
            for (j = va.prototype,
                j.l = j.pr = 0; --ya > 0;)
                j["xn" + ya] = 0,
                    j["xs" + ya] = "";
            j.xs0 = "",
                j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null,
                j.appendXtra = function (a, b, c, d, e, f) {
                    var g = this
                        , h = g.l;
                    return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "",
                        c || 0 === h || g.plugin ? (g.l++,
                            g.type = g.setRatio ? 2 : 1,
                            g["xs" + g.l] = d || "",
                            h > 0 ? (g.data["xn" + h] = b + c,
                                g.rxp["xn" + h] = e,
                                g["xn" + h] = b,
                                g.plugin || (g.xfirst = new va(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr),
                                    g.xfirst.xs0 = 0),
                                g) : (g.data = {
                                    s: b + c
                                },
                                    g.rxp = {},
                                    g.s = b,
                                    g.c = c,
                                    g.r = e,
                                    g)) : (g["xs" + h] += b + (d || ""),
                                        g)
                }
                ;
            var za = function (a, b) {
                b = b || {},
                    this.p = b.prefix ? $(a) || a : a,
                    i[a] = i[this.p] = this,
                    this.format = b.formatter || sa(b.defaultValue, b.color, b.collapsible, b.multi),
                    b.parser && (this.parse = b.parser),
                    this.clrs = b.color,
                    this.multi = b.multi,
                    this.keyword = b.keyword,
                    this.dflt = b.defaultValue,
                    this.allowFunc = b.allowFunc,
                    this.pr = b.priority || 0
            }
                , Aa = T._registerComplexSpecialProp = function (a, b, c) {
                    "object" != typeof b && (b = {
                        parser: c
                    });
                    var d, e, f = a.split(","), g = b.defaultValue;
                    for (c = c || [g],
                        d = 0; d < f.length; d++)
                        b.prefix = 0 === d && b.prefix,
                            b.defaultValue = c[d] || g,
                            e = new za(f[d], b)
                }
                , Ba = T._registerPluginProp = function (a) {
                    if (!i[a]) {
                        var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                        Aa(a, {
                            parser: function (a, c, d, e, f, g, j) {
                                var k = h.com.greensock.plugins[b];
                                return k ? (k._cssRegister(),
                                    i[d].parse(a, c, d, e, f, g, j)) : (X("Error: " + b + " js file not loaded."),
                                        f)
                            }
                        })
                    }
                }
                ;
            j = za.prototype,
                j.parseComplex = function (a, b, c, d, e, f) {
                    var g, h, i, j, k, l, m = this.keyword;
                    if (this.multi && (J.test(c) || J.test(b) ? (h = b.replace(J, "|").split("|"),
                        i = c.replace(J, "|").split("|")) : m && (h = [b],
                            i = [c])),
                        i) {
                        for (j = i.length > h.length ? i.length : h.length,
                            g = 0; j > g; g++)
                            b = h[g] = h[g] || this.dflt,
                                c = i[g] = i[g] || this.dflt,
                                m && (k = b.indexOf(m),
                                    l = c.indexOf(m),
                                    k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                        b = h.join(", "),
                            c = i.join(", ")
                    }
                    return xa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }
                ,
                j.parse = function (a, b, c, d, f, g, h) {
                    return this.parseComplex(a.style, this.format(ba(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
                }
                ,
                g.registerSpecialProp = function (a, b, c) {
                    Aa(a, {
                        parser: function (a, d, e, f, g, h, i) {
                            var j = new va(a, e, 0, 0, g, 2, e, !1, c);
                            return j.plugin = h,
                                j.setRatio = b(a, d, f._tween, e),
                                j
                        },
                        priority: c
                    })
                }
                ,
                g.useSVGTransformAttr = !0;
            var Ca, Da = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ea = $("transform"), Fa = Y + "transform", Ga = $("transformOrigin"), Ha = null !== $("perspective"), Ia = T.Transform = function () {
                this.perspective = parseFloat(g.defaultTransformPerspective) || 0,
                    this.force3D = g.defaultForce3D !== !1 && Ha ? g.defaultForce3D || "auto" : !1
            }
                , Ja = _gsScope.SVGElement, Ka = function (a, b, c) {
                    var d, e = P.createElementNS("http://www.w3.org/2000/svg", a), f = /([a-z])([A-Z])/g;
                    for (d in c)
                        e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                    return b.appendChild(e),
                        e
                }, La = P.documentElement || {}, Ma = function () {
                    var a, b, c, d = p || /Android/i.test(U) && !_gsScope.chrome;
                    return P.createElementNS && La.appendChild && !d && (a = Ka("svg", La),
                        b = Ka("rect", a, {
                            width: 100,
                            height: 50,
                            x: 100
                        }),
                        c = b.getBoundingClientRect().width,
                        b.style[Ga] = "50% 50%",
                        b.style[Ea] = "scaleX(0.5)",
                        d = c === b.getBoundingClientRect().width && !(n && Ha),
                        La.removeChild(a)),
                        d
                }(), Na = function (a, b, c, d, e, f) {
                    var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform, w = Sa(a, !0);
                    v && (t = v.xOrigin,
                        u = v.yOrigin),
                        (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(),
                            0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
                                x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                                y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                                width: 0,
                                height: 0
                            }),
                            b = ja(b).split(" "),
                            h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]),
                        c.xOrigin = k = parseFloat(h[0]),
                        c.yOrigin = l = parseFloat(h[1]),
                        d && w !== Ra && (m = w[0],
                            n = w[1],
                            o = w[2],
                            p = w[3],
                            q = w[4],
                            r = w[5],
                            s = m * p - n * o,
                            s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s,
                                j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s,
                                k = c.xOrigin = h[0] = i,
                                l = c.yOrigin = h[1] = j)),
                        v && (f && (c.xOffset = v.xOffset,
                            c.yOffset = v.yOffset,
                            v = c),
                            e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t,
                                j = l - u,
                                v.xOffset += i * w[0] + j * w[2] - i,
                                v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0),
                        f || a.setAttribute("data-svg-origin", h.join(" "))
                }, Oa = function (a) {
                    var b, c = Q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), d = this.parentNode, e = this.nextSibling, f = this.style.cssText;
                    if (La.appendChild(c),
                        c.appendChild(this),
                        this.style.display = "block",
                        a)
                        try {
                            b = this.getBBox(),
                                this._originalGetBBox = this.getBBox,
                                this.getBBox = Oa
                        } catch (g) { }
                    else
                        this._originalGetBBox && (b = this._originalGetBBox());
                    return e ? d.insertBefore(this, e) : d.appendChild(this),
                        La.removeChild(c),
                        this.style.cssText = f,
                        b
                }, Pa = function (a) {
                    try {
                        return a.getBBox()
                    } catch (b) {
                        return Oa.call(a, !0)
                    }
                }, Qa = function (a) {
                    return !(!Ja || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Pa(a))
                }, Ra = [1, 0, 0, 1, 0, 0], Sa = function (a, b) {
                    var c, d, e, f, g, h, i, j = a._gsTransform || new Ia, k = 1e5, l = a.style;
                    if (Ea ? d = ba(a, Fa, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(H),
                        d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), j.x || 0, j.y || 0].join(",") : ""),
                        c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d,
                        Ea && c && !a.offsetParent && a !== La && (f = l.display,
                            l.display = "block",
                            i = a.parentNode,
                            i && a.offsetParent || (g = 1,
                                h = a.nextSibling,
                                La.appendChild(a)),
                            d = ba(a, Fa, null, !0),
                            c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d,
                            f ? l.display = f : Xa(l, "display"),
                            g && (h ? i.insertBefore(a, h) : i ? i.appendChild(a) : La.removeChild(a))),
                        (j.svg || a.getCTM && Qa(a)) && (c && -1 !== (l[Ea] + "").indexOf("matrix") && (d = l[Ea],
                            c = 0),
                            e = a.getAttribute("transform"),
                            c && e && (e = a.transform.baseVal.consolidate().matrix,
                                d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")",
                                c = 0)),
                        c)
                        return Ra;
                    for (e = (d || "").match(s) || [],
                        ya = e.length; --ya > -1;)
                        f = Number(e[ya]),
                            e[ya] = (g = f - (f |= 0)) ? (g * k + (0 > g ? -.5 : .5) | 0) / k + f : f;
                    return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                }, Ta = T.getTransform = function (a, c, d, e) {
                    if (a._gsTransform && d && !e)
                        return a._gsTransform;
                    var f, h, i, j, k, l, m = d ? a._gsTransform || new Ia : new Ia, n = m.scaleX < 0, o = 2e-5, p = 1e5, q = Ha ? parseFloat(ba(a, Ga, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0, r = parseFloat(g.defaultTransformPerspective) || 0;
                    if (m.svg = !(!a.getCTM || !Qa(a)),
                        m.svg && (Na(a, ba(a, Ga, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")),
                            Ca = g.useSVGTransformAttr || Ma),
                        f = Sa(a),
                        f !== Ra) {
                        if (16 === f.length) {
                            var s, t, u, v, w, x = f[0], y = f[1], z = f[2], A = f[3], B = f[4], C = f[5], D = f[6], E = f[7], F = f[8], G = f[9], H = f[10], I = f[12], J = f[13], K = f[14], L = f[11], N = Math.atan2(D, H);
                            m.zOrigin && (K = -m.zOrigin,
                                I = F * K - f[12],
                                J = G * K - f[13],
                                K = H * K + m.zOrigin - f[14]),
                                m.rotationX = N * M,
                                N && (v = Math.cos(-N),
                                    w = Math.sin(-N),
                                    s = B * v + F * w,
                                    t = C * v + G * w,
                                    u = D * v + H * w,
                                    F = B * -w + F * v,
                                    G = C * -w + G * v,
                                    H = D * -w + H * v,
                                    L = E * -w + L * v,
                                    B = s,
                                    C = t,
                                    D = u),
                                N = Math.atan2(-z, H),
                                m.rotationY = N * M,
                                N && (v = Math.cos(-N),
                                    w = Math.sin(-N),
                                    s = x * v - F * w,
                                    t = y * v - G * w,
                                    u = z * v - H * w,
                                    G = y * w + G * v,
                                    H = z * w + H * v,
                                    L = A * w + L * v,
                                    x = s,
                                    y = t,
                                    z = u),
                                N = Math.atan2(y, x),
                                m.rotation = N * M,
                                N && (v = Math.cos(N),
                                    w = Math.sin(N),
                                    s = x * v + y * w,
                                    t = B * v + C * w,
                                    u = F * v + G * w,
                                    y = y * v - x * w,
                                    C = C * v - B * w,
                                    G = G * v - F * w,
                                    x = s,
                                    B = t,
                                    F = u),
                                m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0,
                                    m.rotationY = 180 - m.rotationY),
                                N = Math.atan2(B, C),
                                m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p,
                                m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p,
                                m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p,
                                x /= m.scaleX,
                                B /= m.scaleY,
                                y /= m.scaleX,
                                C /= m.scaleY,
                                Math.abs(N) > o ? (m.skewX = N * M,
                                    B = 0,
                                    "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0,
                                m.perspective = L ? 1 / (0 > L ? -L : L) : 0,
                                m.x = I,
                                m.y = J,
                                m.z = K,
                                m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B),
                                    m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                        } else if (!Ha || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                            var O = f.length >= 6
                                , P = O ? f[0] : 1
                                , Q = f[1] || 0
                                , R = f[2] || 0
                                , S = O ? f[3] : 1;
                            m.x = f[4] || 0,
                                m.y = f[5] || 0,
                                i = Math.sqrt(P * P + Q * Q),
                                j = Math.sqrt(S * S + R * R),
                                k = P || Q ? Math.atan2(Q, P) * M : m.rotation || 0,
                                l = R || S ? Math.atan2(R, S) * M + k : m.skewX || 0,
                                m.scaleX = i,
                                m.scaleY = j,
                                m.rotation = k,
                                m.skewX = l,
                                Ha && (m.rotationX = m.rotationY = m.z = 0,
                                    m.perspective = r,
                                    m.scaleZ = 1),
                                m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R),
                                    m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                        }
                        Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1,
                            m.skewX += m.rotation <= 0 ? 180 : -180,
                            m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1,
                                m.skewX += m.skewX <= 0 ? 180 : -180)),
                            m.zOrigin = q;
                        for (h in m)
                            m[h] < o && m[h] > -o && (m[h] = 0)
                    }
                    return d && (a._gsTransform = m,
                        m.svg && (Ca && a.style[Ea] ? b.delayedCall(.001, function () {
                            Xa(a.style, Ea)
                        }) : !Ca && a.getAttribute("transform") && b.delayedCall(.001, function () {
                            a.removeAttribute("transform")
                        }))),
                        m
                }
                , Ua = function (a) {
                    var b, c, d = this.data, e = -d.rotation * L, f = e + d.skewX * L, g = 1e5, h = (Math.cos(e) * d.scaleX * g | 0) / g, i = (Math.sin(e) * d.scaleX * g | 0) / g, j = (Math.sin(f) * -d.scaleY * g | 0) / g, k = (Math.cos(f) * d.scaleY * g | 0) / g, l = this.t.style, m = this.t.currentStyle;
                    if (m) {
                        c = i,
                            i = -j,
                            j = -c,
                            b = m.filter,
                            l.filter = "";
                        var n, o, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position, t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, u = d.x + q * d.xPercent / 100, v = d.y + r * d.yPercent / 100;
                        if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2,
                            o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2,
                            u += n - (n * h + o * i),
                            v += o - (n * j + o * k)),
                            s ? (n = q / 2,
                                o = r / 2,
                                t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')",
                            -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(I, t) : l.filter = t + " " + b,
                            (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || y.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")),
                            !s) {
                            var w, z, A, B = 8 > p ? 1 : -1;
                            for (n = d.ieOffsetX || 0,
                                o = d.ieOffsetY || 0,
                                d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u),
                                d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v),
                                ya = 0; 4 > ya; ya++)
                                z = ha[ya],
                                    w = m[z],
                                    c = -1 !== w.indexOf("px") ? parseFloat(w) : ca(this.t, z, parseFloat(w), w.replace(x, "")) || 0,
                                    A = c !== d[z] ? 2 > ya ? -d.ieOffsetX : -d.ieOffsetY : 2 > ya ? n - d.ieOffsetX : o - d.ieOffsetY,
                                    l[z] = (d[z] = Math.round(c - A * (0 === ya || 2 === ya ? 1 : B))) + "px"
                        }
                    }
                }, Va = T.set3DTransformRatio = T.setTransformRatio = function (a) {
                    var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data, A = this.t.style, B = z.rotation, C = z.rotationX, D = z.rotationY, E = z.scaleX, F = z.scaleY, G = z.scaleZ, H = z.x, I = z.y, J = z.z, K = z.svg, M = z.perspective, N = z.force3D, O = z.skewY, P = z.skewX;
                    if (O && (P += O,
                        B += O),
                        ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Ca && K || !Ha)
                        return void (B || P || K ? (B *= L,
                            x = P * L,
                            y = 1e5,
                            c = Math.cos(B) * E,
                            f = Math.sin(B) * E,
                            d = Math.sin(B - x) * -F,
                            g = Math.cos(B - x) * F,
                            x && "simple" === z.skewType && (b = Math.tan(x - O * L),
                                b = Math.sqrt(1 + b * b),
                                d *= b,
                                g *= b,
                                O && (b = Math.tan(O * L),
                                    b = Math.sqrt(1 + b * b),
                                    c *= b,
                                    f *= b)),
                            K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset,
                                I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset,
                                Ca && (z.xPercent || z.yPercent) && (q = this.t.getBBox(),
                                    H += .01 * z.xPercent * q.width,
                                    I += .01 * z.yPercent * q.height),
                                q = 1e-6,
                                q > H && H > -q && (H = 0),
                                q > I && I > -q && (I = 0)),
                            u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")",
                            K && Ca ? this.t.setAttribute("transform", "matrix(" + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
                    if (n && (q = 1e-4,
                        q > E && E > -q && (E = G = 2e-5),
                        q > F && F > -q && (F = G = 2e-5),
                        !M || z.z || z.rotationX || z.rotationY || (M = 0)),
                        B || P)
                        B *= L,
                            r = c = Math.cos(B),
                            s = f = Math.sin(B),
                            P && (B -= P * L,
                                r = Math.cos(B),
                                s = Math.sin(B),
                                "simple" === z.skewType && (b = Math.tan((P - O) * L),
                                    b = Math.sqrt(1 + b * b),
                                    r *= b,
                                    s *= b,
                                    z.skewY && (b = Math.tan(O * L),
                                        b = Math.sqrt(1 + b * b),
                                        c *= b,
                                        f *= b))),
                            d = -s,
                            g = r;
                    else {
                        if (!(D || C || 1 !== G || M || K))
                            return void (A[Ea] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                        c = g = 1,
                            d = f = 0
                    }
                    k = 1,
                        e = h = i = j = l = m = 0,
                        o = M ? -1 / M : 0,
                        p = z.zOrigin,
                        q = 1e-6,
                        v = ",",
                        w = "0",
                        B = D * L,
                        B && (r = Math.cos(B),
                            s = Math.sin(B),
                            i = -s,
                            l = o * -s,
                            e = c * s,
                            h = f * s,
                            k = r,
                            o *= r,
                            c *= r,
                            f *= r),
                        B = C * L,
                        B && (r = Math.cos(B),
                            s = Math.sin(B),
                            b = d * r + e * s,
                            t = g * r + h * s,
                            j = k * s,
                            m = o * s,
                            e = d * -s + e * r,
                            h = g * -s + h * r,
                            k *= r,
                            o *= r,
                            d = b,
                            g = t),
                        1 !== G && (e *= G,
                            h *= G,
                            k *= G,
                            o *= G),
                        1 !== F && (d *= F,
                            g *= F,
                            j *= F,
                            m *= F),
                        1 !== E && (c *= E,
                            f *= E,
                            i *= E,
                            l *= E),
                        (p || K) && (p && (H += e * -p,
                            I += h * -p,
                            J += k * -p + p),
                            K && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset,
                                I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset),
                            q > H && H > -q && (H = w),
                            q > I && I > -q && (I = w),
                            q > J && J > -q && (J = 0)),
                        u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(",
                        u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i),
                        u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g),
                        C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e),
                            u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,",
                        u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")",
                        A[Ea] = u
                }
                ;
            j = Ia.prototype,
                j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0,
                j.scaleX = j.scaleY = j.scaleZ = 1,
                Aa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function (a, b, c, d, f, h, i) {
                        if (d._lastParsedTransform === i)
                            return f;
                        d._lastParsedTransform = i;
                        var j = i.scale && "function" == typeof i.scale ? i.scale : 0;
                        j && (i.scale = j(r, a));
                        var k, l, m, n, o, p, s, t, u, v = a._gsTransform, w = a.style, x = 1e-6, y = Da.length, z = i, A = {}, B = "transformOrigin", C = Ta(a, e, !0, z.parseTransform), D = z.transform && ("function" == typeof z.transform ? z.transform(r, q) : z.transform);
                        if (C.skewType = z.skewType || C.skewType || g.defaultSkewType,
                            d._transform = C,
                            "rotationZ" in z && (z.rotation = z.rotationZ),
                            D && "string" == typeof D && Ea)
                            l = R.style,
                                l[Ea] = D,
                                l.display = "block",
                                l.position = "absolute",
                                -1 !== D.indexOf("%") && (l.width = ba(a, "width"),
                                    l.height = ba(a, "height")),
                                P.body.appendChild(R),
                                k = Ta(R, null, !1),
                                "simple" === C.skewType && (k.scaleY *= Math.cos(k.skewX * L)),
                                C.svg && (p = C.xOrigin,
                                    s = C.yOrigin,
                                    k.x -= C.xOffset,
                                    k.y -= C.yOffset,
                                    (z.transformOrigin || z.svgOrigin) && (D = {},
                                        Na(a, ja(z.transformOrigin), D, z.svgOrigin, z.smoothOrigin, !0),
                                        p = D.xOrigin,
                                        s = D.yOrigin,
                                        k.x -= D.xOffset - C.xOffset,
                                        k.y -= D.yOffset - C.yOffset),
                                    (p || s) && (t = Sa(R, !0),
                                        k.x -= p - (p * t[0] + s * t[2]),
                                        k.y -= s - (p * t[1] + s * t[3]))),
                                P.body.removeChild(R),
                                k.perspective || (k.perspective = C.perspective),
                                null != z.xPercent && (k.xPercent = la(z.xPercent, C.xPercent)),
                                null != z.yPercent && (k.yPercent = la(z.yPercent, C.yPercent));
                        else if ("object" == typeof z) {
                            if (k = {
                                scaleX: la(null != z.scaleX ? z.scaleX : z.scale, C.scaleX),
                                scaleY: la(null != z.scaleY ? z.scaleY : z.scale, C.scaleY),
                                scaleZ: la(z.scaleZ, C.scaleZ),
                                x: la(z.x, C.x),
                                y: la(z.y, C.y),
                                z: la(z.z, C.z),
                                xPercent: la(z.xPercent, C.xPercent),
                                yPercent: la(z.yPercent, C.yPercent),
                                perspective: la(z.transformPerspective, C.perspective)
                            },
                                o = z.directionalRotation,
                                null != o)
                                if ("object" == typeof o)
                                    for (l in o)
                                        z[l] = o[l];
                                else
                                    z.rotation = o;
                            "string" == typeof z.x && -1 !== z.x.indexOf("%") && (k.x = 0,
                                k.xPercent = la(z.x, C.xPercent)),
                                "string" == typeof z.y && -1 !== z.y.indexOf("%") && (k.y = 0,
                                    k.yPercent = la(z.y, C.yPercent)),
                                k.rotation = ma("rotation" in z ? z.rotation : "shortRotation" in z ? z.shortRotation + "_short" : C.rotation, C.rotation, "rotation", A),
                                Ha && (k.rotationX = ma("rotationX" in z ? z.rotationX : "shortRotationX" in z ? z.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", A),
                                    k.rotationY = ma("rotationY" in z ? z.rotationY : "shortRotationY" in z ? z.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", A)),
                                k.skewX = ma(z.skewX, C.skewX),
                                k.skewY = ma(z.skewY, C.skewY)
                        }
                        for (Ha && null != z.force3D && (C.force3D = z.force3D,
                            n = !0),
                            m = C.force3D || C.z || C.rotationX || C.rotationY || k.z || k.rotationX || k.rotationY || k.perspective,
                            m || null == z.scale || (k.scaleZ = 1); --y > -1;)
                            u = Da[y],
                                D = k[u] - C[u],
                                (D > x || -x > D || null != z[u] || null != N[u]) && (n = !0,
                                    f = new va(C, u, C[u], D, f),
                                    u in A && (f.e = A[u]),
                                    f.xs0 = 0,
                                    f.plugin = h,
                                    d._overwriteProps.push(f.n));
                        return D = "function" == typeof z.transformOrigin ? z.transformOrigin(r, q) : z.transformOrigin,
                            C.svg && (D || z.svgOrigin) && (p = C.xOffset,
                                s = C.yOffset,
                                Na(a, ja(D), k, z.svgOrigin, z.smoothOrigin),
                                f = wa(C, "xOrigin", (v ? C : k).xOrigin, k.xOrigin, f, B),
                                f = wa(C, "yOrigin", (v ? C : k).yOrigin, k.yOrigin, f, B),
                                (p !== C.xOffset || s !== C.yOffset) && (f = wa(C, "xOffset", v ? p : C.xOffset, C.xOffset, f, B),
                                    f = wa(C, "yOffset", v ? s : C.yOffset, C.yOffset, f, B)),
                                D = "0px 0px"),
                            (D || Ha && m && C.zOrigin) && (Ea ? (n = !0,
                                u = Ga,
                                D || (D = (ba(a, u, e, !1, "50% 50%") + "").split(" "),
                                    D = D[0] + " " + D[1] + " " + C.zOrigin + "px"),
                                D += "",
                                f = new va(w, u, 0, 0, f, -1, B),
                                f.b = w[u],
                                f.plugin = h,
                                Ha ? (l = C.zOrigin,
                                    D = D.split(" "),
                                    C.zOrigin = (D.length > 2 ? parseFloat(D[2]) : l) || 0,
                                    f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px",
                                    f = new va(C, "zOrigin", 0, 0, f, -1, f.n),
                                    f.b = l,
                                    f.xs0 = f.e = C.zOrigin) : f.xs0 = f.e = D) : ja(D + "", C)),
                            n && (d._transformType = C.svg && Ca || !m && 3 !== this._transformType ? 2 : 3),
                            j && (i.scale = j),
                            f
                    },
                    allowFunc: !0,
                    prefix: !0
                }),
                Aa("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }),
                Aa("clipPath", {
                    defaultValue: "inset(0%)",
                    prefix: !0,
                    multi: !0,
                    formatter: sa("inset(0% 0% 0% 0%)", !1, !0)
                }),
                Aa("borderRadius", {
                    defaultValue: "0px",
                    parser: function (a, b, c, f, g, h) {
                        b = this.format(b);
                        var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], z = a.style;
                        for (q = parseFloat(a.offsetWidth),
                            r = parseFloat(a.offsetHeight),
                            i = b.split(" "),
                            j = 0; j < y.length; j++)
                            this.p.indexOf("border") && (y[j] = $(y[j])),
                                m = l = ba(a, y[j], e, !1, "0px"),
                                -1 !== m.indexOf(" ") && (l = m.split(" "),
                                    m = l[0],
                                    l = l[1]),
                                n = k = i[j],
                                o = parseFloat(m),
                                t = m.substr((o + "").length),
                                u = "=" === n.charAt(1),
                                u ? (p = parseInt(n.charAt(0) + "1", 10),
                                    n = n.substr(2),
                                    p *= parseFloat(n),
                                    s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n),
                                        s = n.substr((p + "").length)),
                                "" === s && (s = d[c] || t),
                                s !== t && (v = ca(a, "borderLeft", o, t),
                                    w = ca(a, "borderTop", o, t),
                                    "%" === s ? (m = v / q * 100 + "%",
                                        l = w / r * 100 + "%") : "em" === s ? (x = ca(a, "borderLeft", 1, "em"),
                                            m = v / x + "em",
                                            l = w / x + "em") : (m = v + "px",
                                                l = w + "px"),
                                    u && (n = parseFloat(m) + p + s,
                                        k = parseFloat(l) + p + s)),
                                g = xa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                        return g
                    },
                    prefix: !0,
                    formatter: sa("0px 0px 0px 0px", !1, !0)
                }),
                Aa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function (a, b, c, d, f, g) {
                        return xa(a.style, c, this.format(ba(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
                    },
                    prefix: !0,
                    formatter: sa("0px 0px", !1, !0)
                }),
                Aa("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (a, b, c, d, f, g) {
                        var h, i, j, k, l, m, n = "background-position", o = e || aa(a, null), q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), r = this.format(b);
                        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = ba(a, "backgroundImage").replace(E, ""),
                            m && "none" !== m)) {
                            for (h = q.split(" "),
                                i = r.split(" "),
                                S.setAttribute("src", m),
                                j = 2; --j > -1;)
                                q = h[j],
                                    k = -1 !== q.indexOf("%"),
                                    k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - S.width : a.offsetHeight - S.height,
                                        h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                            q = h.join(" ")
                        }
                        return this.parseComplex(a.style, q, r, f, g)
                    },
                    formatter: ja
                }),
                Aa("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function (a) {
                        return a += "",
                            "co" === a.substr(0, 2) ? a : ja(-1 === a.indexOf(" ") ? a + " " + a : a)
                    }
                }),
                Aa("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }),
                Aa("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }),
                Aa("transformStyle", {
                    prefix: !0
                }),
                Aa("backfaceVisibility", {
                    prefix: !0
                }),
                Aa("userSelect", {
                    prefix: !0
                }),
                Aa("margin", {
                    parser: ta("marginTop,marginRight,marginBottom,marginLeft")
                }),
                Aa("padding", {
                    parser: ta("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }),
                Aa("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (a, b, c, d, f, g) {
                        var h, i, j;
                        return 9 > p ? (i = a.currentStyle,
                            j = 8 > p ? " " : ",",
                            h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")",
                            b = this.format(b).split(",").join(j)) : (h = this.format(ba(a, this.p, e, !1, this.dflt)),
                                b = this.format(b)),
                            this.parseComplex(a.style, h, b, f, g)
                    }
                }),
                Aa("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }),
                Aa("autoRound,strictUnits", {
                    parser: function (a, b, c, d, e) {
                        return e
                    }
                }),
                Aa("border", {
                    defaultValue: "0px solid #000",
                    parser: function (a, b, c, d, f, g) {
                        var h = ba(a, "borderTopWidth", e, !1, "0px")
                            , i = this.format(b).split(" ")
                            , j = i[0].replace(x, "");
                        return "px" !== j && (h = parseFloat(h) / ca(a, "borderTopWidth", 1, j) + j),
                            this.parseComplex(a.style, this.format(h + " " + ba(a, "borderTopStyle", e, !1, "solid") + " " + ba(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                    },
                    color: !0,
                    formatter: function (a) {
                        var b = a.split(" ");
                        return b[0] + " " + (b[1] || "solid") + " " + (a.match(ra) || ["#000"])[0]
                    }
                }),
                Aa("borderWidth", {
                    parser: ta("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }),
                Aa("float,cssFloat,styleFloat", {
                    parser: function (a, b, c, d, e, f) {
                        var g = a.style
                            , h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                        return new va(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
                    }
                });
            var Wa = function (a) {
                var b, c = this.t, d = c.filter || ba(this.data, "filter") || "", e = this.s + this.c * a | 0;
                100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"),
                    b = !ba(this.data, "filter")) : (c.filter = d.replace(A, ""),
                        b = !0)),
                    b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
                        -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(y, "opacity=" + e))
            };
            Aa("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (a, b, c, d, f, g) {
                    var h = parseFloat(ba(a, "opacity", e, !1, "1"))
                        , i = a.style
                        , j = "autoAlpha" === c;
                    return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
                        j && 1 === h && "hidden" === ba(a, "visibility", e) && 0 !== b && (h = 0),
                        V ? f = new va(i, "opacity", h, b - h, f) : (f = new va(i, "opacity", 100 * h, 100 * (b - h), f),
                            f.xn1 = j ? 1 : 0,
                            i.zoom = 1,
                            f.type = 2,
                            f.b = "alpha(opacity=" + f.s + ")",
                            f.e = "alpha(opacity=" + (f.s + f.c) + ")",
                            f.data = a,
                            f.plugin = g,
                            f.setRatio = Wa),
                        j && (f = new va(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"),
                            f.xs0 = "inherit",
                            d._overwriteProps.push(f.n),
                            d._overwriteProps.push(c)),
                        f
                }
            });
            var Xa = function (a, b) {
                b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b),
                    a.removeProperty(b.replace(C, "-$1").toLowerCase())) : a.removeAttribute(b))
            }
                , Ya = function (a) {
                    if (this.t._gsClassPT = this,
                        1 === a || 0 === a) {
                        this.t.setAttribute("class", 0 === a ? this.b : this.e);
                        for (var b = this.data, c = this.t.style; b;)
                            b.v ? c[b.p] = b.v : Xa(c, b.p),
                                b = b._next;
                        1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else
                        this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            Aa("className", {
                parser: function (a, b, d, f, g, h, i) {
                    var j, k, l, m, n, o = a.getAttribute("class") || "", p = a.style.cssText;
                    if (g = f._classNamePT = new va(a, d, 0, 0, g, 2),
                        g.setRatio = Ya,
                        g.pr = -11,
                        c = !0,
                        g.b = o,
                        k = ea(a, e),
                        l = a._gsClassPT) {
                        for (m = {},
                            n = l.data; n;)
                            m[n.p] = 1,
                                n = n._next;
                        l.setRatio(1)
                    }
                    return a._gsClassPT = g,
                        g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""),
                        a.setAttribute("class", g.e),
                        j = fa(a, k, ea(a), i, m),
                        a.setAttribute("class", o),
                        g.data = j.firstMPT,
                        a.style.cssText !== p && (a.style.cssText = p),
                        g = g.xfirst = f.parse(a, j.difs, g, h)
                }
            });
            var Za = function (a) {
                if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var b, c, d, e, f, g = this.t.style, h = i.transform.parse;
                    if ("all" === this.e)
                        g.cssText = "",
                            e = !0;
                    else
                        for (b = this.e.split(" ").join("").split(","),
                            d = b.length; --d > -1;)
                            c = b[d],
                                i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ga : i[c].p),
                                Xa(g, c);
                    e && (Xa(g, Ea),
                        f = this.t._gsTransform,
                        f && (f.svg && (this.t.removeAttribute("data-svg-origin"),
                            this.t.removeAttribute("transform")),
                            delete this.t._gsTransform))
                }
            };
            for (Aa("clearProps", {
                parser: function (a, b, d, e, f) {
                    return f = new va(a, d, 0, 0, f, 2),
                        f.setRatio = Za,
                        f.e = b,
                        f.pr = -10,
                        f.data = e._tween,
                        c = !0,
                        f
                }
            }),
                j = "bezier,throwProps,physicsProps,physics2D".split(","),
                ya = j.length; ya--;)
                Ba(j[ya]);
            j = g.prototype,
                j._firstPT = j._lastParsedTransform = j._transform = null,
                j._onInitTween = function (a, b, h, j) {
                    if (!a.nodeType)
                        return !1;
                    this._target = q = a,
                        this._tween = h,
                        this._vars = b,
                        r = j,
                        k = b.autoRound,
                        c = !1,
                        d = b.suffixMap || g.suffixMap,
                        e = aa(a, ""),
                        f = this._overwriteProps;
                    var n, p, s, t, u, v, w, x, y, A = a.style;
                    if (l && "" === A.zIndex && (n = ba(a, "zIndex", e),
                        ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
                        "string" == typeof b && (t = A.cssText,
                            n = ea(a, e),
                            A.cssText = t + ";" + b,
                            n = fa(a, n, ea(a)).difs,
                            !V && z.test(b) && (n.opacity = parseFloat(RegExp.$1)),
                            b = n,
                            A.cssText = t),
                        b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null),
                        this._transformType) {
                        for (y = 3 === this._transformType,
                            Ea ? m && (l = !0,
                                "" === A.zIndex && (w = ba(a, "zIndex", e),
                                    ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)),
                                o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (y ? "visible" : "hidden"))) : A.zoom = 1,
                            s = p; s && s._next;)
                            s = s._next;
                        x = new va(a, "transform", 0, 0, null, 2),
                            this._linkCSSP(x, null, s),
                            x.setRatio = Ea ? Va : Ua,
                            x.data = this._transform || Ta(a, e, !0),
                            x.tween = h,
                            x.pr = -1,
                            f.pop()
                    }
                    if (c) {
                        for (; p;) {
                            for (v = p._next,
                                s = t; s && s.pr > p.pr;)
                                s = s._next;
                            (p._prev = s ? s._prev : u) ? p._prev._next = p : t = p,
                                (p._next = s) ? s._prev = p : u = p,
                                p = v
                        }
                        this._firstPT = t
                    }
                    return !0
                }
                ,
                j.parse = function (a, b, c, f) {
                    var g, h, j, l, m, n, o, p, s, t, u = a.style;
                    for (g in b) {
                        if (n = b[g],
                            h = i[g],
                            "function" != typeof n || h && h.allowFunc || (n = n(r, q)),
                            h)
                            c = h.parse(a, n, g, this, c, f, b);
                        else {
                            if ("--" === g.substr(0, 2)) {
                                this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", aa(a).getPropertyValue(g) + "", n + "", g, !1, g);
                                continue
                            }
                            m = ba(a, g, e) + "",
                                s = "string" == typeof n,
                                "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && B.test(n) ? (s || (n = pa(n),
                                    n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"),
                                    c = xa(u, g, m, n, !0, "transparent", c, 0, f)) : s && K.test(n) ? c = xa(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m),
                                        o = j || 0 === j ? m.substr((j + "").length) : "",
                                        ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ia(a, g, e),
                                            o = "px") : "left" === g || "top" === g ? (j = da(a, g, e),
                                                o = "px") : (j = "opacity" !== g ? 0 : 1,
                                                    o = "")),
                                        t = s && "=" === n.charAt(1),
                                        t ? (l = parseInt(n.charAt(0) + "1", 10),
                                            n = n.substr(2),
                                            l *= parseFloat(n),
                                            p = n.replace(x, "")) : (l = parseFloat(n),
                                                p = s ? n.replace(x, "") : ""),
                                        "" === p && (p = g in d ? d[g] : o),
                                        n = l || 0 === l ? (t ? l + j : l) + p : b[g],
                                        o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = ca(a, g, j, o),
                                            "%" === p ? (j /= ca(a, g, 100, "%") / 100,
                                                b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= ca(a, g, 1, p) : "px" !== p && (l = ca(a, g, l, p),
                                                    p = "px"),
                                            t && (l || 0 === l) && (n = l + j + p)),
                                        t && (l += j),
                                        !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new va(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n),
                                            c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : X("invalid " + g + " tween value: " + b[g]) : (c = new va(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n),
                                                c.xs0 = p))
                        }
                        f && c && !c.plugin && (c.plugin = f)
                    }
                    return c
                }
                ,
                j.setRatio = function (a) {
                    var b, c, d, e = this._firstPT, f = 1e-6;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; e;) {
                                if (b = e.c * a + e.s,
                                    e.r ? b = e.r(b) : f > b && b > -f && (b = 0),
                                    e.type)
                                    if (1 === e.type)
                                        if (d = e.l,
                                            2 === d)
                                            e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === d)
                                            e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                        else if (4 === d)
                                            e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                        else if (5 === d)
                                            e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                        else {
                                            for (c = e.xs0 + b + e.xs1,
                                                d = 1; d < e.l; d++)
                                                c += e["xn" + d] + e["xs" + (d + 1)];
                                            e.t[e.p] = c
                                        }
                                    else
                                        -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                else
                                    e.t[e.p] = b + e.xs0;
                                e = e._next
                            }
                        else
                            for (; e;)
                                2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a),
                                    e = e._next;
                    else
                        for (; e;) {
                            if (2 !== e.type)
                                if (e.r && -1 !== e.type)
                                    if (b = e.r(e.s + e.c),
                                        e.type) {
                                        if (1 === e.type) {
                                            for (d = e.l,
                                                c = e.xs0 + b + e.xs1,
                                                d = 1; d < e.l; d++)
                                                c += e["xn" + d] + e["xs" + (d + 1)];
                                            e.t[e.p] = c
                                        }
                                    } else
                                        e.t[e.p] = b + e.xs0;
                                else
                                    e.t[e.p] = e.e;
                            else
                                e.setRatio(a);
                            e = e._next
                        }
                }
                ,
                j._enableTransforms = function (a) {
                    this._transform = this._transform || Ta(this._target, e, !0),
                        this._transformType = this._transform.svg && Ca || !a && 3 !== this._transformType ? 2 : 3
                }
                ;
            var $a = function (a) {
                this.t[this.p] = this.e,
                    this.data._linkCSSP(this, this._next, null, !0)
            };
            j._addLazySet = function (a, b, c) {
                var d = this._firstPT = new va(a, b, 0, 0, this._firstPT, 2);
                d.e = c,
                    d.setRatio = $a,
                    d.data = this
            }
                ,
                j._linkCSSP = function (a, b, c, d) {
                    return a && (b && (b._prev = a),
                        a._next && (a._next._prev = a._prev),
                        a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next,
                            d = !0),
                        c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a),
                        a._next = b,
                        a._prev = c),
                        a
                }
                ,
                j._mod = function (a) {
                    for (var b = this._firstPT; b;)
                        "function" == typeof a[b.p] && (b.r = a[b.p]),
                            b = b._next
                }
                ,
                j._kill = function (b) {
                    var c, d, e, f = b;
                    if (b.autoAlpha || b.alpha) {
                        f = {};
                        for (d in b)
                            f[d] = b[d];
                        f.opacity = 1,
                            f.autoAlpha && (f.visibility = 1)
                    }
                    for (b.className && (c = this._classNamePT) && (e = c.xfirst,
                        e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next),
                        c._next && this._linkCSSP(c._next, c._next._next, e._prev),
                        this._classNamePT = null),
                        c = this._firstPT; c;)
                        c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b),
                            d = c.plugin),
                            c = c._next;
                    return a.prototype._kill.call(this, f)
                }
                ;
            var _a = function (a, b, c) {
                var d, e, f, g;
                if (a.slice)
                    for (e = a.length; --e > -1;)
                        _a(a[e], b, c);
                else
                    for (d = a.childNodes,
                        e = d.length; --e > -1;)
                        f = d[e],
                            g = f.type,
                            f.style && (b.push(ea(f)),
                                c && c.push(f)),
                            1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || _a(f, b, c)
            };
            return g.cascadeTo = function (a, c, d) {
                var e, f, g, h, i = b.to(a, c, d), j = [i], k = [], l = [], m = [], n = b._internals.reservedProps;
                for (a = i._targets || i.target,
                    _a(a, k, m),
                    i.render(c, !0, !0),
                    _a(a, l),
                    i.render(0, !0, !0),
                    i._enabled(!0),
                    e = m.length; --e > -1;)
                    if (f = fa(m[e], k[e], l[e]),
                        f.firstMPT) {
                        f = f.difs;
                        for (g in d)
                            n[g] && (f[g] = d[g]);
                        h = {};
                        for (g in f)
                            h[g] = k[e][g];
                        j.push(b.fromTo(m[e], c, h, f))
                    }
                return j
            }
                ,
                a.activate([g]),
                g
        }, !0),
        function () {
            var a = _gsScope._gsDefine.plugin({
                propName: "roundProps",
                version: "1.7.0",
                priority: -1,
                API: 2,
                init: function (a, b, c) {
                    return this._tween = c,
                        !0
                }
            })
                , b = function (a) {
                    var b = 1 > a ? Math.pow(10, (a + "").length - 2) : 1;
                    return function (c) {
                        return (Math.round(c / a) * a * b | 0) / b
                    }
                }
                , c = function (a, b) {
                    for (; a;)
                        a.f || a.blob || (a.m = b || Math.round),
                            a = a._next
                }
                , d = a.prototype;
            d._onInitAllProps = function () {
                var a, d, e, f, g = this._tween, h = g.vars.roundProps, i = {}, j = g._propLookup.roundProps;
                if ("object" != typeof h || h.push)
                    for ("string" == typeof h && (h = h.split(",")),
                        e = h.length; --e > -1;)
                        i[h[e]] = Math.round;
                else
                    for (f in h)
                        i[f] = b(h[f]);
                for (f in i)
                    for (a = g._firstPT; a;)
                        d = a._next,
                            a.pg ? a.t._mod(i) : a.n === f && (2 === a.f && a.t ? c(a.t._firstPT, i[f]) : (this._add(a.t, f, a.s, a.c, i[f]),
                                d && (d._prev = a._prev),
                                a._prev ? a._prev._next = d : g._firstPT === a && (g._firstPT = d),
                                a._next = a._prev = null,
                                g._propLookup[f] = j)),
                            a = d;
                return !1
            }
                ,
                d._add = function (a, b, c, d, e) {
                    this._addTween(a, b, c, c + d, b, e || Math.round),
                        this._overwriteProps.push(b)
                }
        }(),
        function () {
            _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function (a, b, c, d) {
                    var e, f;
                    if ("function" != typeof a.setAttribute)
                        return !1;
                    for (e in b)
                        f = b[e],
                            "function" == typeof f && (f = f(d, a)),
                            this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e),
                            this._overwriteProps.push(e);
                    return !0
                }
            })
        }(),
        _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (a, b, c, d) {
                "object" != typeof b && (b = {
                    rotation: b
                }),
                    this.finals = {};
                var e, f, g, h, i, j, k = b.useRadians === !0 ? 2 * Math.PI : 360, l = 1e-6;
                for (e in b)
                    "useRadians" !== e && (h = b[e],
                        "function" == typeof h && (h = h(d, a)),
                        j = (h + "").split("_"),
                        f = j[0],
                        g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()),
                        h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0,
                        i = h - g,
                        j.length && (f = j.join("_"),
                            -1 !== f.indexOf("short") && (i %= k,
                                i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)),
                            -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)),
                        (i > l || -l > i) && (this._addTween(a, e, g, g + i, e),
                            this._overwriteProps.push(e)));
                return !0
            },
            set: function (a) {
                var b;
                if (1 !== a)
                    this._super.setRatio.call(this, a);
                else
                    for (b = this._firstPT; b;)
                        b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p],
                            b = b._next
            }
        })._autoCSS = !0,
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a) {
            var b, c, d, e, f = _gsScope.GreenSockGlobals || _gsScope, g = f.com.greensock, h = 2 * Math.PI, i = Math.PI / 2, j = g._class, k = function (b, c) {
                var d = j("easing." + b, function () { }, !0)
                    , e = d.prototype = new a;
                return e.constructor = d,
                    e.getRatio = c,
                    d
            }, l = a.register || function () { }
                , m = function (a, b, c, d, e) {
                    var f = j("easing." + a, {
                        easeOut: new b,
                        easeIn: new c,
                        easeInOut: new d
                    }, !0);
                    return l(f, a),
                        f
                }, n = function (a, b, c) {
                    this.t = a,
                        this.v = b,
                        c && (this.next = c,
                            c.prev = this,
                            this.c = c.v - b,
                            this.gap = c.t - a)
                }, o = function (b, c) {
                    var d = j("easing." + b, function (a) {
                        this._p1 = a || 0 === a ? a : 1.70158,
                            this._p2 = 1.525 * this._p1
                    }, !0)
                        , e = d.prototype = new a;
                    return e.constructor = d,
                        e.getRatio = c,
                        e.config = function (a) {
                            return new d(a)
                        }
                        ,
                        d
                }, p = m("Back", o("BackOut", function (a) {
                    return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                }), o("BackIn", function (a) {
                    return a * a * ((this._p1 + 1) * a - this._p1)
                }), o("BackInOut", function (a) {
                    return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                })), q = j("easing.SlowMo", function (a, b, c) {
                    b = b || 0 === b ? b : .7,
                        null == a ? a = .7 : a > 1 && (a = 1),
                        this._p = 1 !== a ? b : 0,
                        this._p1 = (1 - a) / 2,
                        this._p2 = a,
                        this._p3 = this._p1 + this._p2,
                        this._calcEnd = c === !0
                }, !0), r = q.prototype = new a;
            return r.constructor = q,
                r.getRatio = function (a) {
                    var b = a + (.5 - a) * this._p;
                    return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                }
                ,
                q.ease = new q(.7, .7),
                r.config = q.config = function (a, b, c) {
                    return new q(a, b, c)
                }
                ,
                b = j("easing.SteppedEase", function (a, b) {
                    a = a || 1,
                        this._p1 = 1 / a,
                        this._p2 = a + (b ? 0 : 1),
                        this._p3 = b ? 1 : 0
                }, !0),
                r = b.prototype = new a,
                r.constructor = b,
                r.getRatio = function (a) {
                    return 0 > a ? a = 0 : a >= 1 && (a = .999999999),
                        ((this._p2 * a | 0) + this._p3) * this._p1
                }
                ,
                r.config = b.config = function (a, c) {
                    return new b(a, c)
                }
                ,
                c = j("easing.ExpoScaleEase", function (a, b, c) {
                    this._p1 = Math.log(b / a),
                        this._p2 = b - a,
                        this._p3 = a,
                        this._ease = c
                }, !0),
                r = c.prototype = new a,
                r.constructor = c,
                r.getRatio = function (a) {
                    return this._ease && (a = this._ease.getRatio(a)),
                        (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2
                }
                ,
                r.config = c.config = function (a, b, d) {
                    return new c(a, b, d)
                }
                ,
                d = j("easing.RoughEase", function (b) {
                    b = b || {};
                    for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --m > -1;)
                        c = o ? Math.random() : 1 / l * m,
                            d = q ? q.getRatio(c) : c,
                            "none" === i ? e = r : "out" === i ? (f = 1 - c,
                                e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c,
                                    e = f * f * .5 * r) : (f = 2 * (1 - c),
                                        e = f * f * .5 * r),
                            o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e,
                            p && (d > 1 ? d = 1 : 0 > d && (d = 0)),
                            j[k++] = {
                                x: c,
                                y: d
                            };
                    for (j.sort(function (a, b) {
                        return a.x - b.x
                    }),
                        h = new n(1, 1, null),
                        m = l; --m > -1;)
                        g = j[m],
                            h = new n(g.x, g.y, h);
                    this._prev = new n(0, 0, 0 !== h.t ? h : h.next)
                }, !0),
                r = d.prototype = new a,
                r.constructor = d,
                r.getRatio = function (a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;)
                            b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && a <= b.t;)
                            b = b.prev;
                    return this._prev = b,
                        b.v + (a - b.t) / b.gap * b.c
                }
                ,
                r.config = function (a) {
                    return new d(a)
                }
                ,
                d.ease = new d,
                m("Bounce", k("BounceOut", function (a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }), k("BounceIn", function (a) {
                    return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }), k("BounceInOut", function (a) {
                    var b = .5 > a;
                    return a = b ? 1 - 2 * a : 2 * a - 1,
                        a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375,
                        b ? .5 * (1 - a) : .5 * a + .5
                })),
                m("Circ", k("CircOut", function (a) {
                    return Math.sqrt(1 - (a -= 1) * a)
                }), k("CircIn", function (a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }), k("CircInOut", function (a) {
                    return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                })),
                e = function (b, c, d) {
                    var e = j("easing." + b, function (a, b) {
                        this._p1 = a >= 1 ? a : 1,
                            this._p2 = (b || d) / (1 > a ? a : 1),
                            this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0),
                            this._p2 = h / this._p2
                    }, !0)
                        , f = e.prototype = new a;
                    return f.constructor = e,
                        f.getRatio = c,
                        f.config = function (a, b) {
                            return new e(a, b)
                        }
                        ,
                        e
                }
                ,
                m("Elastic", e("ElasticOut", function (a) {
                    return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
                }, .3), e("ElasticIn", function (a) {
                    return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
                }, .3), e("ElasticInOut", function (a) {
                    return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
                }, .45)),
                m("Expo", k("ExpoOut", function (a) {
                    return 1 - Math.pow(2, -10 * a)
                }), k("ExpoIn", function (a) {
                    return Math.pow(2, 10 * (a - 1)) - .001
                }), k("ExpoInOut", function (a) {
                    return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                })),
                m("Sine", k("SineOut", function (a) {
                    return Math.sin(a * i)
                }), k("SineIn", function (a) {
                    return -Math.cos(a * i) + 1
                }), k("SineInOut", function (a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                })),
                j("easing.EaseLookup", {
                    find: function (b) {
                        return a.map[b]
                    }
                }, !0),
                l(f.SlowMo, "SlowMo", "ease,"),
                l(d, "RoughEase", "ease,"),
                l(b, "SteppedEase", "ease,"),
                p
        }, !0)
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (a, b) {
        "use strict";
        var c = {}
            , d = a.document
            , e = a.GreenSockGlobals = a.GreenSockGlobals || a
            , f = e[b];
        if (f)
            return "undefined" != typeof module && module.exports && (module.exports = f),
                f;
        var g, h, i, j, k, l = function (a) {
            var b, c = a.split("."), d = e;
            for (b = 0; b < c.length; b++)
                d[c[b]] = d = d[c[b]] || {};
            return d
        }, m = l("com.greensock"), n = 1e-8, o = function (a) {
            var b, c = [], d = a.length;
            for (b = 0; b !== d; c.push(a[b++]))
                ;
            return c
        }, p = function () { }, q = function () {
            var a = Object.prototype.toString
                , b = a.call([]);
            return function (c) {
                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }(), r = {}, s = function (d, f, g, h) {
            this.sc = r[d] ? r[d].sc : [],
                r[d] = this,
                this.gsClass = null,
                this.func = g;
            var i = [];
            this.check = function (j) {
                for (var k, m, n, o, p = f.length, q = p; --p > -1;)
                    (k = r[f[p]] || new s(f[p], [])).gsClass ? (i[p] = k.gsClass,
                        q--) : j && k.sc.push(this);
                if (0 === q && g) {
                    if (m = ("com.greensock." + d).split("."),
                        n = m.pop(),
                        o = l(m.join("."))[n] = this.gsClass = g.apply(g, i),
                        h)
                        if (e[n] = c[n] = o,
                            "undefined" != typeof module && module.exports)
                            if (d === b) {
                                module.exports = c[b] = o;
                                for (p in c)
                                    o[p] = c[p]
                            } else
                                c[b] && (c[b][n] = o);
                        else
                            "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
                                return o
                            });
                    for (p = 0; p < this.sc.length; p++)
                        this.sc[p].check()
                }
            }
                ,
                this.check(!0)
        }, t = a._gsDefine = function (a, b, c, d) {
            return new s(a, b, c, d)
        }
            , u = m._class = function (a, b, c) {
                return b = b || function () { }
                    ,
                    t(a, [], function () {
                        return b
                    }, c),
                    b
            }
            ;
        t.globals = e;
        var v = [0, 0, 1, 1]
            , w = u("easing.Ease", function (a, b, c, d) {
                this._func = a,
                    this._type = c || 0,
                    this._power = d || 0,
                    this._params = b ? v.concat(b) : v
            }, !0)
            , x = w.map = {}
            , y = w.register = function (a, b, c, d) {
                for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                    for (f = i[j],
                        e = d ? u("easing." + f, null, !0) : m.easing[f] || {},
                        g = k.length; --g > -1;)
                        h = k[g],
                            x[f + "." + h] = x[h + f] = e[h] = a.getRatio ? a : a[h] || new a
            }
            ;
        for (i = w.prototype,
            i._calcEnd = !1,
            i.getRatio = function (a) {
                if (this._func)
                    return this._params[0] = a,
                        this._func.apply(null, this._params);
                var b = this._type
                    , c = this._power
                    , d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d),
                    1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
            }
            ,
            g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
            h = g.length; --h > -1;)
            i = g[h] + ",Power" + h,
                y(new w(null, null, 1, h), i, "easeOut", !0),
                y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")),
                y(new w(null, null, 3, h), i, "easeInOut");
        x.linear = m.easing.Linear.easeIn,
            x.swing = m.easing.Quad.easeInOut;
        var z = u("events.EventDispatcher", function (a) {
            this._listeners = {},
                this._eventTarget = a || this
        });
        i = z.prototype,
            i.addEventListener = function (a, b, c, d, e) {
                e = e || 0;
                var f, g, h = this._listeners[a], i = 0;
                for (this !== j || k || j.wake(),
                    null == h && (this._listeners[a] = h = []),
                    g = h.length; --g > -1;)
                    f = h[g],
                        f.c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
                h.splice(i, 0, {
                    c: b,
                    s: c,
                    up: d,
                    pr: e
                })
            }
            ,
            i.removeEventListener = function (a, b) {
                var c, d = this._listeners[a];
                if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b)
                            return void d.splice(c, 1)
            }
            ,
            i.dispatchEvent = function (a) {
                var b, c, d, e = this._listeners[a];
                if (e)
                    for (b = e.length,
                        b > 1 && (e = e.slice(0)),
                        c = this._eventTarget; --b > -1;)
                        d = e[b],
                            d && (d.up ? d.c.call(d.s || c, {
                                type: a,
                                target: c
                            }) : d.c.call(d.s || c))
            }
            ;
        var A = a.requestAnimationFrame
            , B = a.cancelAnimationFrame
            , C = Date.now || function () {
                return (new Date).getTime()
            }
            , D = C();
        for (g = ["ms", "moz", "webkit", "o"],
            h = g.length; --h > -1 && !A;)
            A = a[g[h] + "RequestAnimationFrame"],
                B = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
        u("Ticker", function (a, b) {
            var c, e, f, g, h, i = this, l = C(), m = b !== !1 && A ? "auto" : !1, o = 500, q = 33, r = "tick", s = function (a) {
                var b, d, j = C() - D;
                j > o && (l += j - q),
                    D += j,
                    i.time = (D - l) / 1e3,
                    b = i.time - h,
                    (!c || b > 0 || a === !0) && (i.frame++,
                        h += b + (b >= g ? .004 : g - b),
                        d = !0),
                    a !== !0 && (f = e(s)),
                    d && i.dispatchEvent(r)
            };
            z.call(i),
                i.time = i.frame = 0,
                i.tick = function () {
                    s(!0)
                }
                ,
                i.lagSmoothing = function (a, b) {
                    return arguments.length ? (o = a || 1 / n,
                        void (q = Math.min(b, o, 0))) : 1 / n > o
                }
                ,
                i.sleep = function () {
                    null != f && (m && B ? B(f) : clearTimeout(f),
                        e = p,
                        f = null,
                        i === j && (k = !1))
                }
                ,
                i.wake = function (a) {
                    null !== f ? i.sleep() : a ? l += -D + (D = C()) : i.frame > 10 && (D = C() - o + 5),
                        e = 0 === c ? p : m && A ? A : function (a) {
                            return setTimeout(a, 1e3 * (h - i.time) + 1 | 0)
                        }
                        ,
                        i === j && (k = !0),
                        s(2)
                }
                ,
                i.fps = function (a) {
                    return arguments.length ? (c = a,
                        g = 1 / (c || 60),
                        h = this.time + g,
                        void i.wake()) : c
                }
                ,
                i.useRAF = function (a) {
                    return arguments.length ? (i.sleep(),
                        m = a,
                        void i.fps(c)) : m
                }
                ,
                i.fps(a),
                setTimeout(function () {
                    "auto" === m && i.frame < 5 && "hidden" !== (d || {}).visibilityState && i.useRAF(!1)
                }, 1500)
        }),
            i = m.Ticker.prototype = new m.events.EventDispatcher,
            i.constructor = m.Ticker;
        var E = u("core.Animation", function (a, b) {
            if (this.vars = b = b || {},
                this._duration = this._totalDuration = a || 0,
                this._delay = Number(b.delay) || 0,
                this._timeScale = 1,
                this._active = !!b.immediateRender,
                this.data = b.data,
                this._reversed = !!b.reversed,
                Z) {
                k || j.wake();
                var c = this.vars.useFrames ? Y : Z;
                c.add(this, c._time),
                    this.vars.paused && this.paused(!0)
            }
        });
        j = E.ticker = new m.Ticker,
            i = E.prototype,
            i._dirty = i._gc = i._initted = i._paused = !1,
            i._totalTime = i._time = 0,
            i._rawPrevTime = -1,
            i._next = i._last = i._onUpdate = i._timeline = i.timeline = null,
            i._paused = !1;
        var F = function () {
            k && C() - D > 2e3 && ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) && j.wake();
            var a = setTimeout(F, 2e3);
            a.unref && a.unref()
        };
        F(),
            i.play = function (a, b) {
                return null != a && this.seek(a, b),
                    this.reversed(!1).paused(!1)
            }
            ,
            i.pause = function (a, b) {
                return null != a && this.seek(a, b),
                    this.paused(!0)
            }
            ,
            i.resume = function (a, b) {
                return null != a && this.seek(a, b),
                    this.paused(!1)
            }
            ,
            i.seek = function (a, b) {
                return this.totalTime(Number(a), b !== !1)
            }
            ,
            i.restart = function (a, b) {
                return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
            }
            ,
            i.reverse = function (a, b) {
                return null != a && this.seek(a || this.totalDuration(), b),
                    this.reversed(!0).paused(!1)
            }
            ,
            i.render = function (a, b, c) { }
            ,
            i.invalidate = function () {
                return this._time = this._totalTime = 0,
                    this._initted = this._gc = !1,
                    this._rawPrevTime = -1,
                    (this._gc || !this.timeline) && this._enabled(!0),
                    this
            }
            ,
            i.isActive = function () {
                var a, b = this._timeline, c = this._startTime;
                return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - n
            }
            ,
            i._enabled = function (a, b) {
                return k || j.wake(),
                    this._gc = !a,
                    this._active = this.isActive(),
                    b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)),
                    !1
            }
            ,
            i._kill = function (a, b) {
                return this._enabled(!1, !1)
            }
            ,
            i.kill = function (a, b) {
                return this._kill(a, b),
                    this
            }
            ,
            i._uncache = function (a) {
                for (var b = a ? this : this.timeline; b;)
                    b._dirty = !0,
                        b = b.timeline;
                return this
            }
            ,
            i._swapSelfInParams = function (a) {
                for (var b = a.length, c = a.concat(); --b > -1;)
                    "{self}" === a[b] && (c[b] = this);
                return c
            }
            ,
            i._callback = function (a) {
                var b = this.vars
                    , c = b[a]
                    , d = b[a + "Params"]
                    , e = b[a + "Scope"] || b.callbackScope || this
                    , f = d ? d.length : 0;
                switch (f) {
                    case 0:
                        c.call(e);
                        break;
                    case 1:
                        c.call(e, d[0]);
                        break;
                    case 2:
                        c.call(e, d[0], d[1]);
                        break;
                    default:
                        c.apply(e, d)
                }
            }
            ,
            i.eventCallback = function (a, b, c, d) {
                if ("on" === (a || "").substr(0, 2)) {
                    var e = this.vars;
                    if (1 === arguments.length)
                        return e[a];
                    null == b ? delete e[a] : (e[a] = b,
                        e[a + "Params"] = q(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c,
                        e[a + "Scope"] = d),
                        "onUpdate" === a && (this._onUpdate = b)
                }
                return this
            }
            ,
            i.delay = function (a) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay),
                    this._delay = a,
                    this) : this._delay
            }
            ,
            i.duration = function (a) {
                return arguments.length ? (this._duration = this._totalDuration = a,
                    this._uncache(!0),
                    this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0),
                    this) : (this._dirty = !1,
                        this._duration)
            }
            ,
            i.totalDuration = function (a) {
                return this._dirty = !1,
                    arguments.length ? this.duration(a) : this._totalDuration
            }
            ,
            i.time = function (a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(),
                    this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
            }
            ,
            i.totalTime = function (a, b, c) {
                if (k || j.wake(),
                    !arguments.length)
                    return this._totalTime;
                if (this._timeline) {
                    if (0 > a && !c && (a += this.totalDuration()),
                        this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var d = this._totalDuration
                            , e = this._timeline;
                        if (a > d && !c && (a = d),
                            this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale,
                            e._dirty || this._uncache(!1),
                            e._timeline)
                            for (; e._timeline;)
                                e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0),
                                    e = e._timeline
                    }
                    this._gc && this._enabled(!0, !1),
                        (this._totalTime !== a || 0 === this._duration) && (K.length && _(),
                            this.render(a, b, !1),
                            K.length && _())
                }
                return this
            }
            ,
            i.progress = i.totalProgress = function (a, b) {
                var c = this.duration();
                return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
            }
            ,
            i.startTime = function (a) {
                return arguments.length ? (a !== this._startTime && (this._startTime = a,
                    this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)),
                    this) : this._startTime
            }
            ,
            i.endTime = function (a) {
                return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
            }
            ,
            i.timeScale = function (a) {
                if (!arguments.length)
                    return this._timeScale;
                var b, c;
                for (a = a || n,
                    this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime,
                        c = b || 0 === b ? b : this._timeline.totalTime(),
                        this._startTime = c - (c - this._startTime) * this._timeScale / a),
                    this._timeScale = a,
                    c = this.timeline; c && c.timeline;)
                    c._dirty = !0,
                        c.totalDuration(),
                        c = c.timeline;
                return this
            }
            ,
            i.reversed = function (a) {
                return arguments.length ? (a != this._reversed && (this._reversed = a,
                    this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                    this) : this._reversed
            }
            ,
            i.paused = function (a) {
                if (!arguments.length)
                    return this._paused;
                var b, c, d = this._timeline;
                return a != this._paused && d && (k || a || j.wake(),
                    b = d.rawTime(),
                    c = b - this._pauseTime,
                    !a && d.smoothChildTiming && (this._startTime += c,
                        this._uncache(!1)),
                    this._pauseTime = a ? b : null,
                    this._paused = a,
                    this._active = this.isActive(),
                    !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale,
                        this.render(b, b === this._totalTime, !0))),
                    this._gc && !a && this._enabled(!0, !1),
                    this
            }
            ;
        var G = u("core.SimpleTimeline", function (a) {
            E.call(this, 0, a),
                this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        i = G.prototype = new E,
            i.constructor = G,
            i.kill()._gc = !1,
            i._first = i._last = i._recent = null,
            i._sortChildren = !1,
            i.add = i.insert = function (a, b, c, d) {
                var e, f;
                if (a._startTime = Number(b || 0) + a._delay,
                    a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)),
                    a.timeline && a.timeline._remove(a, !0),
                    a.timeline = a._timeline = this,
                    a._gc && a._enabled(!0, !0),
                    e = this._last,
                    this._sortChildren)
                    for (f = a._startTime; e && e._startTime > f;)
                        e = e._prev;
                return e ? (a._next = e._next,
                    e._next = a) : (a._next = this._first,
                        this._first = a),
                    a._next ? a._next._prev = a : this._last = a,
                    a._prev = e,
                    this._recent = a,
                    this._timeline && this._uncache(!0),
                    this
            }
            ,
            i._remove = function (a, b) {
                return a.timeline === this && (b || a._enabled(!1, !0),
                    a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next),
                    a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev),
                    a._next = a._prev = a.timeline = null,
                    a === this._recent && (this._recent = this._last),
                    this._timeline && this._uncache(!0)),
                    this
            }
            ,
            i.render = function (a, b, c) {
                var d, e = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = a; e;)
                    d = e._next,
                        (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)),
                        e = d
            }
            ,
            i.rawTime = function () {
                return k || j.wake(),
                    this._totalTime
            }
            ;
        var H = u("TweenLite", function (b, c, d) {
            if (E.call(this, c, d),
                this.render = H.prototype.render,
                null == b)
                throw "Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : H.selector(b) || b;
            var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType), i = this.vars.overwrite;
            if (this._overwrite = i = null == i ? X[H.defaultOverwrite] : "number" == typeof i ? i >> 0 : X[i],
                (h || b instanceof Array || b.push && q(b)) && "number" != typeof b[0])
                for (this._targets = g = o(b),
                    this._propLookup = [],
                    this._siblings = [],
                    e = 0; e < g.length; e++)
                    f = g[e],
                        f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1),
                            this._targets = g = g.concat(o(f))) : (this._siblings[e] = aa(f, this, !1),
                                1 === i && this._siblings[e].length > 1 && ca(f, this, null, 1, this._siblings[e])) : (f = g[e--] = H.selector(f),
                                    "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
            else
                this._propLookup = {},
                    this._siblings = aa(b, this, !1),
                    1 === i && this._siblings.length > 1 && ca(b, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -n,
                this.render(Math.min(0, -this._delay)))
        }, !0)
            , I = function (b) {
                return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
            }
            , J = function (a, b) {
                var c, d = {};
                for (c in a)
                    W[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!T[c] || T[c] && T[c]._autoCSS) || (d[c] = a[c],
                        delete a[c]);
                a.css = d
            };
        i = H.prototype = new E,
            i.constructor = H,
            i.kill()._gc = !1,
            i.ratio = 0,
            i._firstPT = i._targets = i._overwrittenProps = i._startAt = null,
            i._notifyPluginsOfEnabled = i._lazy = !1,
            H.version = "2.1.3",
            H.defaultEase = i._ease = new w(null, null, 1, 1),
            H.defaultOverwrite = "auto",
            H.ticker = j,
            H.autoSleep = 120,
            H.lagSmoothing = function (a, b) {
                j.lagSmoothing(a, b)
            }
            ,
            H.selector = a.$ || a.jQuery || function (b) {
                var c = a.$ || a.jQuery;
                return c ? (H.selector = c,
                    c(b)) : (d || (d = a.document),
                        d ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b)
            }
            ;
        var K = []
            , L = {}
            , M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
            , N = /[\+-]=-?[\.\d]/
            , O = function (a) {
                for (var b, c = this._firstPT, d = 1e-6; c;)
                    b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s,
                        c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : d > b && b > -d && !c.blob && (b = 0),
                        c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b,
                        c = c._next
            }
            , P = function (a) {
                return (1e3 * a | 0) / 1e3 + ""
            }
            , Q = function (a, b, c, d) {
                var e, f, g, h, i, j, k, l = [], m = 0, n = "", o = 0;
                for (l.start = a,
                    l.end = b,
                    a = l[0] = a + "",
                    b = l[1] = b + "",
                    c && (c(l),
                        a = l[0],
                        b = l[1]),
                    l.length = 0,
                    e = a.match(M) || [],
                    f = b.match(M) || [],
                    d && (d._next = null,
                        d.blob = 1,
                        l._firstPT = l._applyPT = d),
                    i = f.length,
                    h = 0; i > h; h++)
                    k = f[h],
                        j = b.substr(m, b.indexOf(k, m) - m),
                        n += j || !h ? j : ",",
                        m += j.length,
                        o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1),
                        k === e[h] || e.length <= h ? n += k : (n && (l.push(n),
                            n = ""),
                            g = parseFloat(e[h]),
                            l.push(g),
                            l._firstPT = {
                                _next: l._firstPT,
                                t: l,
                                p: l.length - 1,
                                s: g,
                                c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                                f: 0,
                                m: o && 4 > o ? Math.round : P
                            }),
                        m += k.length;
                return n += b.substr(m),
                    n && l.push(n),
                    l.setRatio = O,
                    N.test(b) && (l.end = null),
                    l
            }
            , R = function (a, b, c, d, e, f, g, h, i) {
                "function" == typeof d && (d = d(i || 0, a));
                var j, k = typeof a[b], l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b], n = "string" == typeof d && "=" === d.charAt(1), o = {
                    t: a,
                    p: b,
                    s: m,
                    f: "function" === k,
                    pg: 0,
                    n: e || b,
                    m: f ? "function" == typeof f ? f : Math.round : 0,
                    pr: 0,
                    c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
                };
                return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g,
                    j = Q(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || H.defaultStringFilter, o),
                    o = {
                        t: j,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: e || b,
                        pr: 0,
                        m: 0
                    }) : (o.s = parseFloat(m),
                        n || (o.c = parseFloat(d) - o.s || 0))),
                    o.c ? ((o._next = this._firstPT) && (o._next._prev = o),
                        this._firstPT = o,
                        o) : void 0
            }
            , S = H._internals = {
                isArray: q,
                isSelector: I,
                lazyTweens: K,
                blobDif: Q
            }
            , T = H._plugins = {}
            , U = S.tweenLookup = {}
            , V = 0
            , W = S.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
                stagger: 1
            }
            , X = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            }
            , Y = E._rootFramesTimeline = new G
            , Z = E._rootTimeline = new G
            , $ = 30
            , _ = S.lazyRender = function () {
                var a, b, c = K.length;
                for (L = {},
                    a = 0; c > a; a++)
                    b = K[a],
                        b && b._lazy !== !1 && (b.render(b._lazy[0], b._lazy[1], !0),
                            b._lazy = !1);
                K.length = 0
            }
            ;
        Z._startTime = j.time,
            Y._startTime = j.frame,
            Z._active = Y._active = !0,
            setTimeout(_, 1),
            E._updateRoot = H.render = function () {
                var a, b, c;
                if (K.length && _(),
                    Z.render((j.time - Z._startTime) * Z._timeScale, !1, !1),
                    Y.render((j.frame - Y._startTime) * Y._timeScale, !1, !1),
                    K.length && _(),
                    j.frame >= $) {
                    $ = j.frame + (parseInt(H.autoSleep, 10) || 120);
                    for (c in U) {
                        for (b = U[c].tweens,
                            a = b.length; --a > -1;)
                            b[a]._gc && b.splice(a, 1);
                        0 === b.length && delete U[c]
                    }
                    if (c = Z._first,
                        (!c || c._paused) && H.autoSleep && !Y._first && 1 === j._listeners.tick.length) {
                        for (; c && c._paused;)
                            c = c._next;
                        c || j.sleep()
                    }
                }
            }
            ,
            j.addEventListener("tick", E._updateRoot);
        var aa = function (a, b, c) {
            var d, e, f = a._gsTweenID;
            if (U[f || (a._gsTweenID = f = "t" + V++)] || (U[f] = {
                target: a,
                tweens: []
            }),
                b && (d = U[f].tweens,
                    d[e = d.length] = b,
                    c))
                for (; --e > -1;)
                    d[e] === b && d.splice(e, 1);
            return U[f].tweens
        }
            , ba = function (a, b, c, d) {
                var e, f, g = a.vars.onOverwrite;
                return g && (e = g(a, b, c, d)),
                    g = H.onOverwrite,
                    g && (f = g(a, b, c, d)),
                    e !== !1 && f !== !1
            }
            , ca = function (a, b, c, d, e) {
                var f, g, h, i;
                if (1 === d || d >= 4) {
                    for (i = e.length,
                        f = 0; i > f; f++)
                        if ((h = e[f]) !== b)
                            h._gc || h._kill(null, a, b) && (g = !0);
                        else if (5 === d)
                            break;
                    return g
                }
                var j, k = b._startTime + n, l = [], m = 0, o = 0 === b._duration;
                for (f = e.length; --f > -1;)
                    (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || da(b, 0, o),
                        0 === da(h, j, o) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2 * n || (l[m++] = h)));
                for (f = m; --f > -1;)
                    if (h = l[f],
                        i = h._firstPT,
                        2 === d && h._kill(c, a, b) && (g = !0),
                        2 !== d || !h._firstPT && h._initted && i) {
                        if (2 !== d && !ba(h, b))
                            continue;
                        h._enabled(!1, !1) && (g = !0)
                    }
                return g
            }
            , da = function (a, b, c) {
                for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                    if (f += d._startTime,
                        e *= d._timeScale,
                        d._paused)
                        return -100;
                    d = d._timeline
                }
                return f /= e,
                    f > b ? f - b : c && f === b || !a._initted && 2 * n > f - b ? n : (f += a.totalDuration() / a._timeScale / e) > b + n ? 0 : f - b - n
            };
        i._init = function () {
            var a, b, c, d, e, f, g = this.vars, h = this._overwrittenProps, i = this._duration, j = !!g.immediateRender, k = g.ease, l = this._startAt;
            if (g.startAt) {
                l && (l.render(-1, !0),
                    l.kill()),
                    e = {};
                for (d in g.startAt)
                    e[d] = g.startAt[d];
                if (e.data = "isStart",
                    e.overwrite = !1,
                    e.immediateRender = !0,
                    e.lazy = j && g.lazy !== !1,
                    e.startAt = e.delay = null,
                    e.onUpdate = g.onUpdate,
                    e.onUpdateParams = g.onUpdateParams,
                    e.onUpdateScope = g.onUpdateScope || g.callbackScope || this,
                    this._startAt = H.to(this.target || {}, 0, e),
                    j)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== i)
                        return
            } else if (g.runBackwards && 0 !== i)
                if (l)
                    l.render(-1, !0),
                        l.kill(),
                        this._startAt = null;
                else {
                    0 !== this._time && (j = !1),
                        c = {};
                    for (d in g)
                        W[d] && "autoCSS" !== d || (c[d] = g[d]);
                    if (c.overwrite = 0,
                        c.data = "isFromStart",
                        c.lazy = j && g.lazy !== !1,
                        c.immediateRender = j,
                        this._startAt = H.to(this.target, 0, c),
                        j) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                            this._startAt._enabled(!1),
                            this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = k = k ? k instanceof w ? k : "function" == typeof k ? new w(k, g.easeParams) : x[k] || H.defaultEase : H.defaultEase,
                g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)),
                this._easeType = this._ease._type,
                this._easePower = this._ease._power,
                this._firstPT = null,
                this._targets)
                for (f = this._targets.length,
                    a = 0; f > a; a++)
                    this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
            else
                b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
            if (b && H._onPluginEvent("_onInitAllProps", this),
                h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
                g.runBackwards)
                for (c = this._firstPT; c;)
                    c.s += c.c,
                        c.c = -c.c,
                        c = c._next;
            this._onUpdate = g.onUpdate,
                this._initted = !0
        }
            ,
            i._initProps = function (b, c, d, e, f) {
                var g, h, i, j, k, l;
                if (null == b)
                    return !1;
                L[b._gsTweenID] && _(),
                    this.vars.css || b.style && b !== a && b.nodeType && T.css && this.vars.autoCSS !== !1 && J(this.vars, b);
                for (g in this.vars)
                    if (l = this.vars[g],
                        W[g])
                        l && (l instanceof Array || l.push && q(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                    else if (T[g] && (j = new T[g])._onInitTween(b, this.vars[g], this, f)) {
                        for (this._firstPT = k = {
                            _next: this._firstPT,
                            t: j,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: g,
                            pg: 1,
                            pr: j._priority,
                            m: 0
                        },
                            h = j._overwriteProps.length; --h > -1;)
                            c[j._overwriteProps[h]] = this._firstPT;
                        (j._priority || j._onInitAllProps) && (i = !0),
                            (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0),
                            k._next && (k._next._prev = k)
                    } else
                        c[g] = R.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
                return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && ca(b, this, c, this._overwrite, d) ? (this._kill(c, b),
                    this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[b._gsTweenID] = !0),
                        i)
            }
            ,
            i.render = function (a, b, c) {
                var d, e, f, g, h = this, i = h._time, j = h._duration, k = h._rawPrevTime;
                if (a >= j - n && a >= 0)
                    h._totalTime = h._time = j,
                        h.ratio = h._ease._calcEnd ? h._ease.getRatio(1) : 1,
                        h._reversed || (d = !0,
                            e = "onComplete",
                            c = c || h._timeline.autoRemoveChildren),
                        0 === j && (h._initted || !h.vars.lazy || c) && (h._startTime === h._timeline._duration && (a = 0),
                            (0 > k || 0 >= a && a >= -n || k === n && "isPause" !== h.data) && k !== a && (c = !0,
                                k > n && (e = "onReverseComplete")),
                            h._rawPrevTime = g = !b || a || k === a ? a : n);
                else if (n > a)
                    h._totalTime = h._time = 0,
                        h.ratio = h._ease._calcEnd ? h._ease.getRatio(0) : 0,
                        (0 !== i || 0 === j && k > 0) && (e = "onReverseComplete",
                            d = h._reversed),
                        a > -n ? a = 0 : 0 > a && (h._active = !1,
                            0 === j && (h._initted || !h.vars.lazy || c) && (k >= 0 && (k !== n || "isPause" !== h.data) && (c = !0),
                                h._rawPrevTime = g = !b || a || k === a ? a : n)),
                        (!h._initted || h._startAt && h._startAt.progress()) && (c = !0);
                else if (h._totalTime = h._time = a,
                    h._easeType) {
                    var l = a / j
                        , m = h._easeType
                        , o = h._easePower;
                    (1 === m || 3 === m && l >= .5) && (l = 1 - l),
                        3 === m && (l *= 2),
                        1 === o ? l *= l : 2 === o ? l *= l * l : 3 === o ? l *= l * l * l : 4 === o && (l *= l * l * l * l),
                        h.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / j ? l / 2 : 1 - l / 2
                } else
                    h.ratio = h._ease.getRatio(a / j);
                if (h._time !== i || c) {
                    if (!h._initted) {
                        if (h._init(),
                            !h._initted || h._gc)
                            return;
                        if (!c && h._firstPT && (h.vars.lazy !== !1 && h._duration || h.vars.lazy && !h._duration))
                            return h._time = h._totalTime = i,
                                h._rawPrevTime = k,
                                K.push(h),
                                void (h._lazy = [a, b]);
                        h._time && !d ? h.ratio = h._ease.getRatio(h._time / j) : d && h._ease._calcEnd && (h.ratio = h._ease.getRatio(0 === h._time ? 0 : 1))
                    }
                    for (h._lazy !== !1 && (h._lazy = !1),
                        h._active || !h._paused && h._time !== i && a >= 0 && (h._active = !0),
                        0 === i && (h._startAt && (a >= 0 ? h._startAt.render(a, !0, c) : e || (e = "_dummyGS")),
                            h.vars.onStart && (0 !== h._time || 0 === j) && (b || h._callback("onStart"))),
                        f = h._firstPT; f;)
                        f.f ? f.t[f.p](f.c * h.ratio + f.s) : f.t[f.p] = f.c * h.ratio + f.s,
                            f = f._next;
                    h._onUpdate && (0 > a && h._startAt && a !== -1e-4 && h._startAt.render(a, !0, c),
                        b || (h._time !== i || d || c) && h._callback("onUpdate")),
                        e && (!h._gc || c) && (0 > a && h._startAt && !h._onUpdate && a !== -1e-4 && h._startAt.render(a, !0, c),
                            d && (h._timeline.autoRemoveChildren && h._enabled(!1, !1),
                                h._active = !1),
                            !b && h.vars[e] && h._callback(e),
                            0 === j && h._rawPrevTime === n && g !== n && (h._rawPrevTime = 0))
                }
            }
            ,
            i._kill = function (a, b, c) {
                if ("all" === a && (a = null),
                    null == a && (null == b || b === this.target))
                    return this._lazy = !1,
                        this._enabled(!1, !1);
                b = "string" != typeof b ? b || this._targets || this.target : H.selector(b) || b;
                var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline, n = this._firstPT;
                if ((q(b) || I(b)) && "number" != typeof b[0])
                    for (d = b.length; --d > -1;)
                        this._kill(a, b[d], c) && (i = !0);
                else {
                    if (this._targets) {
                        for (d = this._targets.length; --d > -1;)
                            if (b === this._targets[d]) {
                                h = this._propLookup[d] || {},
                                    this._overwrittenProps = this._overwrittenProps || [],
                                    e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                                break
                            }
                    } else {
                        if (b !== this.target)
                            return !1;
                        h = this._propLookup,
                            e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    }
                    if (h) {
                        if (j = a || h,
                            k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill),
                            c && (H.onOverwrite || this.vars.onOverwrite)) {
                            for (f in j)
                                h[f] && (l || (l = []),
                                    l.push(f));
                            if ((l || !a) && !ba(this, c, b, l))
                                return !1
                        }
                        for (f in j)
                            (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s,
                                i = !0),
                                g.pg && g.t._kill(j) && (i = !0),
                                g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next),
                                    g._next && (g._next._prev = g._prev),
                                    g._next = g._prev = null),
                                delete h[f]),
                                k && (e[f] = 1);
                        !this._firstPT && this._initted && n && this._enabled(!1, !1)
                    }
                }
                return i
            }
            ,
            i.invalidate = function () {
                this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this);
                var a = this._time;
                return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
                    this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                    this._propLookup = this._targets ? {} : [],
                    E.prototype.invalidate.call(this),
                    this.vars.immediateRender && (this._time = -n,
                        this.render(a, !1, this.vars.lazy !== !1)),
                    this
            }
            ,
            i._enabled = function (a, b) {
                if (k || j.wake(),
                    a && this._gc) {
                    var c, d = this._targets;
                    if (d)
                        for (c = d.length; --c > -1;)
                            this._siblings[c] = aa(d[c], this, !0);
                    else
                        this._siblings = aa(this.target, this, !0)
                }
                return E.prototype._enabled.call(this, a, b),
                    this._notifyPluginsOfEnabled && this._firstPT ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
            }
            ,
            H.to = function (a, b, c) {
                return new H(a, b, c)
            }
            ,
            H.from = function (a, b, c) {
                return c.runBackwards = !0,
                    c.immediateRender = 0 != c.immediateRender,
                    new H(a, b, c)
            }
            ,
            H.fromTo = function (a, b, c, d) {
                return d.startAt = c,
                    d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,
                    new H(a, b, d)
            }
            ,
            H.delayedCall = function (a, b, c, d, e) {
                return new H(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    callbackScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: e,
                    overwrite: 0
                })
            }
            ,
            H.set = function (a, b) {
                return new H(a, 0, b)
            }
            ,
            H.getTweensOf = function (a, b) {
                if (null == a)
                    return [];
                a = "string" != typeof a ? a : H.selector(a) || a;
                var c, d, e, f;
                if ((q(a) || I(a)) && "number" != typeof a[0]) {
                    for (c = a.length,
                        d = []; --c > -1;)
                        d = d.concat(H.getTweensOf(a[c], b));
                    for (c = d.length; --c > -1;)
                        for (f = d[c],
                            e = c; --e > -1;)
                            f === d[e] && d.splice(c, 1)
                } else if (a._gsTweenID)
                    for (d = aa(a).concat(),
                        c = d.length; --c > -1;)
                        (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                return d || []
            }
            ,
            H.killTweensOf = H.killDelayedCallsTo = function (a, b, c) {
                "object" == typeof b && (c = b,
                    b = !1);
                for (var d = H.getTweensOf(a, b), e = d.length; --e > -1;)
                    d[e]._kill(c, a)
            }
            ;
        var ea = u("plugins.TweenPlugin", function (a, b) {
            this._overwriteProps = (a || "").split(","),
                this._propName = this._overwriteProps[0],
                this._priority = b || 0,
                this._super = ea.prototype
        }, !0);
        if (i = ea.prototype,
            ea.version = "1.19.0",
            ea.API = 2,
            i._firstPT = null,
            i._addTween = R,
            i.setRatio = O,
            i._kill = function (a) {
                var b, c = this._overwriteProps, d = this._firstPT;
                if (null != a[this._propName])
                    this._overwriteProps = [];
                else
                    for (b = c.length; --b > -1;)
                        null != a[c[b]] && c.splice(b, 1);
                for (; d;)
                    null != a[d.n] && (d._next && (d._next._prev = d._prev),
                        d._prev ? (d._prev._next = d._next,
                            d._prev = null) : this._firstPT === d && (this._firstPT = d._next)),
                        d = d._next;
                return !1
            }
            ,
            i._mod = i._roundProps = function (a) {
                for (var b, c = this._firstPT; c;)
                    b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")],
                        b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b),
                        c = c._next
            }
            ,
            H._onPluginEvent = function (a, b) {
                var c, d, e, f, g, h = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; h;) {
                        for (g = h._next,
                            d = e; d && d.pr > h.pr;)
                            d = d._next;
                        (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h,
                            (h._next = d) ? d._prev = h : f = h,
                            h = g
                    }
                    h = b._firstPT = e
                }
                for (; h;)
                    h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
                        h = h._next;
                return c
            }
            ,
            ea.activate = function (a) {
                for (var b = a.length; --b > -1;)
                    a[b].API === ea.API && (T[(new a[b])._propName] = a[b]);
                return !0
            }
            ,
            t.plugin = function (a) {
                if (!(a && a.propName && a.init && a.API))
                    throw "illegal plugin definition.";
                var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_mod",
                    mod: "_mod",
                    initAll: "_onInitAllProps"
                }, g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                    ea.call(this, c, d),
                        this._overwriteProps = e || []
                }, a.global === !0), h = g.prototype = new ea(c);
                h.constructor = g,
                    g.API = a.API;
                for (b in f)
                    "function" == typeof a[b] && (h[f[b]] = a[b]);
                return g.version = a.version,
                    ea.activate([g]),
                    g
            }
            ,
            g = a._gsQueue) {
            for (h = 0; h < g.length; h++)
                g[h]();
            for (i in r)
                r[i].func || a.console.log("GSAP encountered missing dependency: " + i)
        }
        k = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
jQuery.easing.jswing = jQuery.easing.swing,
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (n, e, t, u, a) {
            return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
        },
        easeInQuad: function (n, e, t, u, a) {
            return u * (e /= a) * e + t
        },
        easeOutQuad: function (n, e, t, u, a) {
            return -u * (e /= a) * (e - 2) + t
        },
        easeInOutQuad: function (n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
        },
        easeInCubic: function (n, e, t, u, a) {
            return u * (e /= a) * e * e + t
        },
        easeOutCubic: function (n, e, t, u, a) {
            return u * ((e = e / a - 1) * e * e + 1) + t
        },
        easeInOutCubic: function (n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
        },
        easeInQuart: function (n, e, t, u, a) {
            return u * (e /= a) * e * e * e + t
        },
        easeOutQuart: function (n, e, t, u, a) {
            return -u * ((e = e / a - 1) * e * e * e - 1) + t
        },
        easeInOutQuart: function (n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
        },
        easeInQuint: function (n, e, t, u, a) {
            return u * (e /= a) * e * e * e * e + t
        },
        easeOutQuint: function (n, e, t, u, a) {
            return u * ((e = e / a - 1) * e * e * e * e + 1) + t
        },
        easeInOutQuint: function (n, e, t, u, a) {
            return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
        },
        easeInSine: function (n, e, t, u, a) {
            return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
        },
        easeOutSine: function (n, e, t, u, a) {
            return u * Math.sin(e / a * (Math.PI / 2)) + t
        },
        easeInOutSine: function (n, e, t, u, a) {
            return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
        },
        easeInExpo: function (n, e, t, u, a) {
            return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
        },
        easeOutExpo: function (n, e, t, u, a) {
            return e == a ? t + u : u * (1 - Math.pow(2, -10 * e / a)) + t
        },
        easeInOutExpo: function (n, e, t, u, a) {
            return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (2 - Math.pow(2, -10 * --e)) + t
        },
        easeInCirc: function (n, e, t, u, a) {
            return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
        },
        easeOutCirc: function (n, e, t, u, a) {
            return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
        },
        easeInOutCirc: function (n, e, t, u, a) {
            return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
        },
        easeInElastic: function (n, e, t, u, a) {
            var r = 1.70158
                , i = 0
                , s = u;
            if (0 == e)
                return t;
            if (1 == (e /= a))
                return t + u;
            if (i || (i = .3 * a),
                s < Math.abs(u)) {
                s = u;
                r = i / 4
            } else
                r = i / (2 * Math.PI) * Math.asin(u / s);
            return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) + t
        },
        easeOutElastic: function (n, e, t, u, a) {
            var r = 1.70158
                , i = 0
                , s = u;
            if (0 == e)
                return t;
            if (1 == (e /= a))
                return t + u;
            if (i || (i = .3 * a),
                s < Math.abs(u)) {
                s = u;
                r = i / 4
            } else
                r = i / (2 * Math.PI) * Math.asin(u / s);
            return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
        },
        easeInOutElastic: function (n, e, t, u, a) {
            var r = 1.70158
                , i = 0
                , s = u;
            if (0 == e)
                return t;
            if (2 == (e /= a / 2))
                return t + u;
            if (i || (i = a * (.3 * 1.5)),
                s < Math.abs(u)) {
                s = u;
                r = i / 4
            } else
                r = i / (2 * Math.PI) * Math.asin(u / s);
            return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * -.5 + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
        },
        easeInBack: function (n, e, t, u, a, r) {
            return null == r && (r = 1.70158),
                u * (e /= a) * e * ((r + 1) * e - r) + t
        },
        easeOutBack: function (n, e, t, u, a, r) {
            return null == r && (r = 1.70158),
                u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
        },
        easeInOutBack: function (n, e, t, u, a, r) {
            return null == r && (r = 1.70158),
                (e /= a / 2) < 1 ? u / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + t : u / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t
        },
        easeInBounce: function (n, e, t, u, a) {
            return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
        },
        easeOutBounce: function (n, e, t, u, a) {
            return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : e < 2 / 2.75 ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
        },
        easeInOutBounce: function (n, e, t, u, a) {
            return e < a / 2 ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
        }
    });
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
}
    : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (i, s) {
        return void 0 === s && (s = "undefined" != typeof window ? require("jquery") : require("jquery")(i)),
            t(s),
            s
    }
        : t(jQuery)
}(function (t) {
    return t.fn.tilt = function (i) {
        var s = function () {
            this.ticking || (requestAnimationFrame(g.bind(this)),
                this.ticking = !0)
        }
            , e = function () {
                var i = this;
                t(this).on("mousemove", o),
                    t(this).on("mouseenter", a),
                    this.settings.reset && t(this).on("mouseleave", l),
                    this.settings.glare && t(window).on("resize", d.bind(i))
            }
            , n = function () {
                var i = this;
                void 0 !== this.timeout && clearTimeout(this.timeout),
                    t(this).css({
                        transition: this.settings.speed + "ms " + this.settings.easing
                    }),
                    this.settings.glare && this.glareElement.css({
                        transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
                    }),
                    this.timeout = setTimeout(function () {
                        t(i).css({
                            transition: ""
                        }),
                            i.settings.glare && i.glareElement.css({
                                transition: ""
                            })
                    }, this.settings.speed)
            }
            , a = function (i) {
                this.ticking = !1,
                    t(this).css({
                        "will-change": "transform"
                    }),
                    n.call(this),
                    t(this).trigger("tilt.mouseEnter")
            }
            , r = function (i) {
                return "undefined" == typeof i && (i = {
                    pageX: t(this).offset().left + t(this).outerWidth() / 2,
                    pageY: t(this).offset().top + t(this).outerHeight() / 2
                }),
                {
                    x: i.pageX,
                    y: i.pageY
                }
            }
            , o = function (t) {
                this.mousePositions = r(t),
                    s.call(this)
            }
            , l = function () {
                n.call(this),
                    this.reset = !0,
                    s.call(this),
                    t(this).trigger("tilt.mouseLeave")
            }
            , h = function () {
                var i = t(this).outerWidth()
                    , s = t(this).outerHeight()
                    , e = t(this).offset().left
                    , n = t(this).offset().top
                    , a = (this.mousePositions.x - e) / i
                    , r = (this.mousePositions.y - n) / s
                    , o = (this.settings.maxTilt / 2 - a * this.settings.maxTilt).toFixed(2)
                    , l = (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2)
                    , h = Math.atan2(this.mousePositions.x - (e + i / 2), -(this.mousePositions.y - (n + s / 2))) * (180 / Math.PI);
                return {
                    tiltX: o,
                    tiltY: l,
                    percentageX: 100 * a,
                    percentageY: 100 * r,
                    angle: h
                }
            }
            , g = function () {
                return this.transforms = h.call(this),
                    this.reset ? (this.reset = !1,
                        t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"),
                        void (this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"),
                            this.glareElement.css("opacity", "0")))) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"),
                                this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"),
                                    this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)),
                                t(this).trigger("change", [this.transforms]),
                                void (this.ticking = !1))
            }
            , c = function () {
                var i = this.settings.glarePrerender;
                if (i || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),
                    this.glareElementWrapper = t(this).find(".js-tilt-glare"),
                    this.glareElement = t(this).find(".js-tilt-glare-inner"),
                    !i) {
                    var s = {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    };
                    this.glareElementWrapper.css(s).css({
                        overflow: "hidden",
                        "pointer-events": "none"
                    }),
                        this.glareElement.css({
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                            width: "" + 2 * t(this).outerWidth(),
                            height: "" + 2 * t(this).outerWidth(),
                            transform: "rotate(180deg) translate(-50%, -50%)",
                            "transform-origin": "0% 0%",
                            opacity: "0"
                        })
                }
            }
            , d = function () {
                this.glareElement.css({
                    width: "" + 2 * t(this).outerWidth(),
                    height: "" + 2 * t(this).outerWidth()
                })
            };
        return t.fn.tilt.destroy = function () {
            t(this).each(function () {
                t(this).find(".js-tilt-glare").remove(),
                    t(this).css({
                        "will-change": "",
                        transform: ""
                    }),
                    t(this).off("mousemove mouseenter mouseleave")
            })
        }
            ,
            t.fn.tilt.getValues = function () {
                var i = [];
                return t(this).each(function () {
                    this.mousePositions = r.call(this),
                        i.push(h.call(this))
                }),
                    i
            }
            ,
            t.fn.tilt.reset = function () {
                t(this).each(function () {
                    var i = this;
                    this.mousePositions = r.call(this),
                        this.settings = t(this).data("settings"),
                        l.call(this),
                        setTimeout(function () {
                            i.reset = !1
                        }, this.settings.transition)
                })
            }
            ,
            this.each(function () {
                var s = this;
                this.settings = t.extend({
                    maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
                    perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300,
                    easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                    scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
                    speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
                    transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
                    disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
                    axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
                    reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
                    glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
                    maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1
                }, i),
                    null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),
                        this.settings.disableAxis = this.settings.axis),
                    this.init = function () {
                        t(s).data("settings", s.settings),
                            s.settings.glare && c.call(s),
                            e.call(s)
                    }
                    ,
                    this.init()
            })
    }
        ,
        t("[data-tilt]").tilt(),
        !0
});
!function (n, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.anime = e()
}(this, function () {
    "use strict";
    var n = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0
    }
        , e = {
            duration: 1e3,
            delay: 0,
            endDelay: 0,
            easing: "easeOutElastic(1, .5)",
            round: 0
        }
        , r = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"]
        , t = {
            CSS: {},
            springs: {}
        };
    function a(n, e, r) {
        return Math.min(Math.max(n, e), r)
    }
    function o(n, e) {
        return n.indexOf(e) > -1
    }
    function i(n, e) {
        return n.apply(null, e)
    }
    var u = {
        arr: function (n) {
            return Array.isArray(n)
        },
        obj: function (n) {
            return o(Object.prototype.toString.call(n), "Object")
        },
        pth: function (n) {
            return u.obj(n) && n.hasOwnProperty("totalLength")
        },
        svg: function (n) {
            return n instanceof SVGElement
        },
        inp: function (n) {
            return n instanceof HTMLInputElement
        },
        dom: function (n) {
            return n.nodeType || u.svg(n)
        },
        str: function (n) {
            return "string" == typeof n
        },
        fnc: function (n) {
            return "function" == typeof n
        },
        und: function (n) {
            return void 0 === n
        },
        hex: function (n) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)
        },
        rgb: function (n) {
            return /^rgb/.test(n)
        },
        hsl: function (n) {
            return /^hsl/.test(n)
        },
        col: function (n) {
            return u.hex(n) || u.rgb(n) || u.hsl(n)
        },
        key: function (r) {
            return !n.hasOwnProperty(r) && !e.hasOwnProperty(r) && "targets" !== r && "keyframes" !== r
        }
    };
    function s(n) {
        var e = /\(([^)]+)\)/.exec(n);
        return e ? e[1].split(",").map(function (n) {
            return parseFloat(n)
        }) : []
    }
    function c(n, e) {
        var r = s(n)
            , o = a(u.und(r[0]) ? 1 : r[0], .1, 100)
            , i = a(u.und(r[1]) ? 100 : r[1], .1, 100)
            , c = a(u.und(r[2]) ? 10 : r[2], .1, 100)
            , f = a(u.und(r[3]) ? 0 : r[3], .1, 100)
            , l = Math.sqrt(i / o)
            , d = c / (2 * Math.sqrt(i * o))
            , p = d < 1 ? l * Math.sqrt(1 - d * d) : 0
            , v = 1
            , h = d < 1 ? (d * l - f) / p : -f + l;
        function g(n) {
            var r = e ? e * n / 1e3 : n;
            return r = d < 1 ? Math.exp(-r * d * l) * (v * Math.cos(p * r) + h * Math.sin(p * r)) : (v + h * r) * Math.exp(-r * l),
                0 === n || 1 === n ? n : 1 - r
        }
        return e ? g : function () {
            var e = t.springs[n];
            if (e)
                return e;
            for (var r = 0, a = 0; ;)
                if (1 === g(r += 1 / 6)) {
                    if (++a >= 16)
                        break
                } else
                    a = 0;
            var o = r * (1 / 6) * 1e3;
            return t.springs[n] = o,
                o
        }
    }
    function f(n, e) {
        void 0 === n && (n = 1),
            void 0 === e && (e = .5);
        var r = a(n, 1, 10)
            , t = a(e, .1, 2);
        return function (n) {
            return 0 === n || 1 === n ? n : -r * Math.pow(2, 10 * (n - 1)) * Math.sin((n - 1 - t / (2 * Math.PI) * Math.asin(1 / r)) * (2 * Math.PI) / t)
        }
    }
    function l(n) {
        return void 0 === n && (n = 10),
            function (e) {
                return Math.round(e * n) * (1 / n)
            }
    }
    var d = function () {
        var n = 11
            , e = 1 / (n - 1);
        function r(n, e) {
            return 1 - 3 * e + 3 * n
        }
        function t(n, e) {
            return 3 * e - 6 * n
        }
        function a(n) {
            return 3 * n
        }
        function o(n, e, o) {
            return ((r(e, o) * n + t(e, o)) * n + a(e)) * n
        }
        function i(n, e, o) {
            return 3 * r(e, o) * n * n + 2 * t(e, o) * n + a(e)
        }
        return function (r, t, a, u) {
            if (0 <= r && r <= 1 && 0 <= a && a <= 1) {
                var s = new Float32Array(n);
                if (r !== t || a !== u)
                    for (var c = 0; c < n; ++c)
                        s[c] = o(c * e, r, a);
                return function (n) {
                    return r === t && a === u ? n : 0 === n || 1 === n ? n : o(f(n), t, u)
                }
            }
            function f(t) {
                for (var u = 0, c = 1, f = n - 1; c !== f && s[c] <= t; ++c)
                    u += e;
                var l = u + (t - s[--c]) / (s[c + 1] - s[c]) * e
                    , d = i(l, r, a);
                return d >= .001 ? function (n, e, r, t) {
                    for (var a = 0; a < 4; ++a) {
                        var u = i(e, r, t);
                        if (0 === u)
                            return e;
                        e -= (o(e, r, t) - n) / u
                    }
                    return e
                }(t, l, r, a) : 0 === d ? l : function (n, e, r, t, a) {
                    for (var i, u, s = 0; (i = o(u = e + (r - e) / 2, t, a) - n) > 0 ? r = u : e = u,
                        Math.abs(i) > 1e-7 && ++s < 10;)
                        ;
                    return u
                }(t, u, u + e, r, a)
            }
        }
    }()
        , p = function () {
            var n = ["Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Back", "Elastic"]
                , e = {
                    In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], f],
                    Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (n, e) {
                        return function (r) {
                            return 1 - f(n, e)(1 - r)
                        }
                    }
                    ],
                    InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (n, e) {
                        return function (r) {
                            return r < .5 ? f(n, e)(2 * r) / 2 : 1 - f(n, e)(-2 * r + 2) / 2
                        }
                    }
                    ]
                }
                , r = {
                    linear: [.25, .25, .75, .75]
                }
                , t = function (t) {
                    e[t].forEach(function (e, a) {
                        r["ease" + t + n[a]] = e
                    })
                };
            for (var a in e)
                t(a);
            return r
        }();
    function v(n, e) {
        if (u.fnc(n))
            return n;
        var r = n.split("(")[0]
            , t = p[r]
            , a = s(n);
        switch (r) {
            case "spring":
                return c(n, e);
            case "cubicBezier":
                return i(d, a);
            case "steps":
                return i(l, a);
            default:
                return u.fnc(t) ? i(t, a) : i(d, t)
        }
    }
    function h(n) {
        try {
            return document.querySelectorAll(n)
        } catch (n) {
            return
        }
    }
    function g(n, e) {
        for (var r = n.length, t = arguments.length >= 2 ? arguments[1] : void 0, a = [], o = 0; o < r; o++)
            if (o in n) {
                var i = n[o];
                e.call(t, i, o, n) && a.push(i)
            }
        return a
    }
    function m(n) {
        return n.reduce(function (n, e) {
            return n.concat(u.arr(e) ? m(e) : e)
        }, [])
    }
    function y(n) {
        return u.arr(n) ? n : (u.str(n) && (n = h(n) || n),
            n instanceof NodeList || n instanceof HTMLCollection ? [].slice.call(n) : [n])
    }
    function b(n, e) {
        return n.some(function (n) {
            return n === e
        })
    }
    function x(n) {
        var e = {};
        for (var r in n)
            e[r] = n[r];
        return e
    }
    function M(n, e) {
        var r = x(n);
        for (var t in n)
            r[t] = e.hasOwnProperty(t) ? e[t] : n[t];
        return r
    }
    function w(n, e) {
        var r = x(n);
        for (var t in e)
            r[t] = u.und(n[t]) ? e[t] : n[t];
        return r
    }
    function k(n) {
        return u.rgb(n) ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = n)) ? "rgba(" + r[1] + ",1)" : e : u.hex(n) ? (t = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (n, e, r, t) {
            return e + e + r + r + t + t
        }),
            a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
            "rgba(" + parseInt(a[1], 16) + "," + parseInt(a[2], 16) + "," + parseInt(a[3], 16) + ",1)") : u.hsl(n) ? function (n) {
                var e, r, t, a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n), o = parseInt(a[1], 10) / 360, i = parseInt(a[2], 10) / 100, u = parseInt(a[3], 10) / 100, s = a[4] || 1;
                function c(n, e, r) {
                    return r < 0 && (r += 1),
                        r > 1 && (r -= 1),
                        r < 1 / 6 ? n + 6 * (e - n) * r : r < .5 ? e : r < 2 / 3 ? n + (e - n) * (2 / 3 - r) * 6 : n
                }
                if (0 == i)
                    e = r = t = u;
                else {
                    var f = u < .5 ? u * (1 + i) : u + i - u * i
                        , l = 2 * u - f;
                    e = c(l, f, o + 1 / 3),
                        r = c(l, f, o),
                        t = c(l, f, o - 1 / 3)
                }
                return "rgba(" + 255 * e + "," + 255 * r + "," + 255 * t + "," + s + ")"
            }(n) : void 0;
        var e, r, t, a
    }
    function C(n) {
        var e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);
        if (e)
            return e[2]
    }
    function O(n, e) {
        return u.fnc(n) ? n(e.target, e.id, e.total) : n
    }
    function P(n, e) {
        return n.getAttribute(e)
    }
    function I(n, e, r) {
        if (b([r, "deg", "rad", "turn"], C(e)))
            return e;
        var a = t.CSS[e + r];
        if (!u.und(a))
            return a;
        var o = document.createElement(n.tagName)
            , i = n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
        i.appendChild(o),
            o.style.position = "absolute",
            o.style.width = 100 + r;
        var s = 100 / o.offsetWidth;
        i.removeChild(o);
        var c = s * parseFloat(e);
        return t.CSS[e + r] = c,
            c
    }
    function B(n, e, r) {
        if (e in n.style) {
            var t = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                , a = n.style[e] || getComputedStyle(n).getPropertyValue(t) || "0";
            return r ? I(n, a, r) : a
        }
    }
    function D(n, e) {
        return u.dom(n) && !u.inp(n) && (P(n, e) || u.svg(n) && n[e]) ? "attribute" : u.dom(n) && b(r, e) ? "transform" : u.dom(n) && "transform" !== e && B(n, e) ? "css" : null != n[e] ? "object" : void 0
    }
    function T(n) {
        if (u.dom(n)) {
            for (var e, r = n.style.transform || "", t = /(\w+)\(([^)]*)\)/g, a = new Map; e = t.exec(r);)
                a.set(e[1], e[2]);
            return a
        }
    }
    function F(n, e, r, t) {
        var a, i = o(e, "scale") ? 1 : 0 + (o(a = e, "translate") || "perspective" === a ? "px" : o(a, "rotate") || o(a, "skew") ? "deg" : void 0), u = T(n).get(e) || i;
        return r && (r.transforms.list.set(e, u),
            r.transforms.last = e),
            t ? I(n, u, t) : u
    }
    function N(n, e, r, t) {
        switch (D(n, e)) {
            case "transform":
                return F(n, e, t, r);
            case "css":
                return B(n, e, r);
            case "attribute":
                return P(n, e);
            default:
                return n[e] || 0
        }
    }
    function A(n, e) {
        var r = /^(\*=|\+=|-=)/.exec(n);
        if (!r)
            return n;
        var t = C(n) || 0
            , a = parseFloat(e)
            , o = parseFloat(n.replace(r[0], ""));
        switch (r[0][0]) {
            case "+":
                return a + o + t;
            case "-":
                return a - o + t;
            case "*":
                return a * o + t
        }
    }
    function E(n, e) {
        if (u.col(n))
            return k(n);
        var r = C(n)
            , t = r ? n.substr(0, n.length - r.length) : n;
        return e && !/\s/g.test(n) ? t + e : t
    }
    function L(n, e) {
        return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2))
    }
    function S(n) {
        for (var e, r = n.points, t = 0, a = 0; a < r.numberOfItems; a++) {
            var o = r.getItem(a);
            a > 0 && (t += L(e, o)),
                e = o
        }
        return t
    }
    function j(n) {
        if (n.getTotalLength)
            return n.getTotalLength();
        switch (n.tagName.toLowerCase()) {
            case "circle":
                return o = n,
                    2 * Math.PI * P(o, "r");
            case "rect":
                return 2 * P(a = n, "width") + 2 * P(a, "height");
            case "line":
                return L({
                    x: P(t = n, "x1"),
                    y: P(t, "y1")
                }, {
                    x: P(t, "x2"),
                    y: P(t, "y2")
                });
            case "polyline":
                return S(n);
            case "polygon":
                return r = (e = n).points,
                    S(e) + L(r.getItem(r.numberOfItems - 1), r.getItem(0))
        }
        var e, r, t, a, o
    }
    function q(n, e) {
        var r = e || {}
            , t = r.el || function (n) {
                for (var e = n.parentNode; u.svg(e) && (e = e.parentNode,
                    u.svg(e.parentNode));)
                    ;
                return e
            }(n)
            , a = t.getBoundingClientRect()
            , o = P(t, "viewBox")
            , i = a.width
            , s = a.height
            , c = r.viewBox || (o ? o.split(" ") : [0, 0, i, s]);
        return {
            el: t,
            viewBox: c,
            x: c[0] / 1,
            y: c[1] / 1,
            w: i / c[2],
            h: s / c[3]
        }
    }
    function $(n, e) {
        function r(r) {
            void 0 === r && (r = 0);
            var t = e + r >= 1 ? e + r : 0;
            return n.el.getPointAtLength(t)
        }
        var t = q(n.el, n.svg)
            , a = r()
            , o = r(-1)
            , i = r(1);
        switch (n.property) {
            case "x":
                return (a.x - t.x) * t.w;
            case "y":
                return (a.y - t.y) * t.h;
            case "angle":
                return 180 * Math.atan2(i.y - o.y, i.x - o.x) / Math.PI
        }
    }
    function X(n, e) {
        var r = /-?\d*\.?\d+/g
            , t = E(u.pth(n) ? n.totalLength : n, e) + "";
        return {
            original: t,
            numbers: t.match(r) ? t.match(r).map(Number) : [0],
            strings: u.str(n) || e ? t.split(r) : []
        }
    }
    function Y(n) {
        return g(n ? m(u.arr(n) ? n.map(y) : y(n)) : [], function (n, e, r) {
            return r.indexOf(n) === e
        })
    }
    function Z(n) {
        var e = Y(n);
        return e.map(function (n, r) {
            return {
                target: n,
                id: r,
                total: e.length,
                transforms: {
                    list: T(n)
                }
            }
        })
    }
    function Q(n, e) {
        var r = x(e);
        if (/^spring/.test(r.easing) && (r.duration = c(r.easing)),
            u.arr(n)) {
            var t = n.length;
            2 === t && !u.obj(n[0]) ? n = {
                value: n
            } : u.fnc(e.duration) || (r.duration = e.duration / t)
        }
        var a = u.arr(n) ? n : [n];
        return a.map(function (n, r) {
            var t = u.obj(n) && !u.pth(n) ? n : {
                value: n
            };
            return u.und(t.delay) && (t.delay = r ? 0 : e.delay),
                u.und(t.endDelay) && (t.endDelay = r === a.length - 1 ? e.endDelay : 0),
                t
        }).map(function (n) {
            return w(n, r)
        })
    }
    function V(n, e) {
        var r = []
            , t = e.keyframes;
        for (var a in t && (e = w(function (n) {
            for (var e = g(m(n.map(function (n) {
                return Object.keys(n)
            })), function (n) {
                return u.key(n)
            }).reduce(function (n, e) {
                return n.indexOf(e) < 0 && n.push(e),
                    n
            }, []), r = {}, t = function (t) {
                var a = e[t];
                r[a] = n.map(function (n) {
                    var e = {};
                    for (var r in n)
                        u.key(r) ? r == a && (e.value = n[r]) : e[r] = n[r];
                    return e
                })
            }, a = 0; a < e.length; a++)
                t(a);
            return r
        }(t), e)),
            e)
            u.key(a) && r.push({
                name: a,
                tweens: Q(e[a], n)
            });
        return r
    }
    function z(n, e) {
        var r;
        return n.tweens.map(function (t) {
            var a = function (n, e) {
                var r = {};
                for (var t in n) {
                    var a = O(n[t], e);
                    u.arr(a) && 1 === (a = a.map(function (n) {
                        return O(n, e)
                    })).length && (a = a[0]),
                        r[t] = a
                }
                return r.duration = parseFloat(r.duration),
                    r.delay = parseFloat(r.delay),
                    r
            }(t, e)
                , o = a.value
                , i = u.arr(o) ? o[1] : o
                , s = C(i)
                , c = N(e.target, n.name, s, e)
                , f = r ? r.to.original : c
                , l = u.arr(o) ? o[0] : f
                , d = C(l) || C(c)
                , p = s || d;
            return u.und(i) && (i = f),
                a.from = X(l, p),
                a.to = X(A(i, l), p),
                a.start = r ? r.end : 0,
                a.end = a.start + a.delay + a.duration + a.endDelay,
                a.easing = v(a.easing, a.duration),
                a.isPath = u.pth(o),
                a.isColor = u.col(a.from.original),
                a.isColor && (a.round = 1),
                r = a,
                a
        })
    }
    var H = {
        css: function (n, e, r) {
            return n.style[e] = r
        },
        attribute: function (n, e, r) {
            return n.setAttribute(e, r)
        },
        object: function (n, e, r) {
            return n[e] = r
        },
        transform: function (n, e, r, t, a) {
            if (t.list.set(e, r),
                e === t.last || a) {
                var o = "";
                t.list.forEach(function (n, e) {
                    o += e + "(" + n + ") "
                }),
                    n.style.transform = o
            }
        }
    };
    function G(n, e) {
        Z(n).forEach(function (n) {
            for (var r in e) {
                var t = O(e[r], n)
                    , a = n.target
                    , o = C(t)
                    , i = N(a, r, o, n)
                    , u = A(E(t, o || C(i)), i)
                    , s = D(a, r);
                H[s](a, r, u, n.transforms, !0)
            }
        })
    }
    function R(n, e) {
        return g(m(n.map(function (n) {
            return e.map(function (e) {
                return function (n, e) {
                    var r = D(n.target, e.name);
                    if (r) {
                        var t = z(e, n)
                            , a = t[t.length - 1];
                        return {
                            type: r,
                            property: e.name,
                            animatable: n,
                            tweens: t,
                            duration: a.end,
                            delay: t[0].delay,
                            endDelay: a.endDelay
                        }
                    }
                }(n, e)
            })
        })), function (n) {
            return !u.und(n)
        })
    }
    function W(n, e) {
        var r = n.length
            , t = function (n) {
                return n.timelineOffset ? n.timelineOffset : 0
            }
            , a = {};
        return a.duration = r ? Math.max.apply(Math, n.map(function (n) {
            return t(n) + n.duration
        })) : e.duration,
            a.delay = r ? Math.min.apply(Math, n.map(function (n) {
                return t(n) + n.delay
            })) : e.delay,
            a.endDelay = r ? a.duration - Math.max.apply(Math, n.map(function (n) {
                return t(n) + n.duration - n.endDelay
            })) : e.endDelay,
            a
    }
    var J = 0;
    var K, U = [], _ = [], nn = function () {
        function n() {
            K = requestAnimationFrame(e)
        }
        function e(e) {
            var r = U.length;
            if (r) {
                for (var t = 0; t < r;) {
                    var a = U[t];
                    if (a.paused) {
                        var o = U.indexOf(a);
                        o > -1 && (U.splice(o, 1),
                            r = U.length)
                    } else
                        a.tick(e);
                    t++
                }
                n()
            } else
                K = cancelAnimationFrame(K)
        }
        return n
    }();
    function en(r) {
        void 0 === r && (r = {});
        var t, o = 0, i = 0, u = 0, s = 0, c = null;
        function f(n) {
            var e = window.Promise && new Promise(function (n) {
                return c = n
            }
            );
            return n.finished = e,
                e
        }
        var l, d, p, v, h, m, y, b, x = (d = M(n, l = r),
            p = M(e, l),
            v = V(p, l),
            h = Z(l.targets),
            m = R(h, v),
            y = W(m, p),
            b = J,
            J++,
            w(d, {
                id: b,
                children: [],
                animatables: h,
                animations: m,
                duration: y.duration,
                delay: y.delay,
                endDelay: y.endDelay
            }));
        f(x);
        function k() {
            var n = x.direction;
            "alternate" !== n && (x.direction = "normal" !== n ? "normal" : "reverse"),
                x.reversed = !x.reversed,
                t.forEach(function (n) {
                    return n.reversed = x.reversed
                })
        }
        function C(n) {
            return x.reversed ? x.duration - n : n
        }
        function O() {
            o = 0,
                i = C(x.currentTime) * (1 / en.speed)
        }
        function P(n, e) {
            e && e.seek(n - e.timelineOffset)
        }
        function I(n) {
            for (var e = 0, r = x.animations, t = r.length; e < t;) {
                var o = r[e]
                    , i = o.animatable
                    , u = o.tweens
                    , s = u.length - 1
                    , c = u[s];
                s && (c = g(u, function (e) {
                    return n < e.end
                })[0] || c);
                for (var f = a(n - c.start - c.delay, 0, c.duration) / c.duration, l = isNaN(f) ? 1 : c.easing(f), d = c.to.strings, p = c.round, v = [], h = c.to.numbers.length, m = void 0, y = 0; y < h; y++) {
                    var b = void 0
                        , M = c.to.numbers[y]
                        , w = c.from.numbers[y] || 0;
                    b = c.isPath ? $(c.value, l * M) : w + l * (M - w),
                        p && (c.isColor && y > 2 || (b = Math.round(b * p) / p)),
                        v.push(b)
                }
                var k = d.length;
                if (k) {
                    m = d[0];
                    for (var C = 0; C < k; C++) {
                        d[C];
                        var O = d[C + 1]
                            , P = v[C];
                        isNaN(P) || (m += O ? P + O : P + " ")
                    }
                } else
                    m = v[0];
                H[o.type](i.target, o.property, m, i.transforms),
                    o.currentValue = m,
                    e++
            }
        }
        function B(n) {
            x[n] && !x.passThrough && x[n](x)
        }
        function D(n) {
            var e = x.duration
                , r = x.delay
                , l = e - x.endDelay
                , d = C(n);
            x.progress = a(d / e * 100, 0, 100),
                x.reversePlayback = d < x.currentTime,
                t && function (n) {
                    if (x.reversePlayback)
                        for (var e = s; e--;)
                            P(n, t[e]);
                    else
                        for (var r = 0; r < s; r++)
                            P(n, t[r])
                }(d),
                !x.began && x.currentTime > 0 && (x.began = !0,
                    B("begin"),
                    B("loopBegin")),
                d <= r && 0 !== x.currentTime && I(0),
                (d >= l && x.currentTime !== e || !e) && I(e),
                d > r && d < l ? (x.changeBegan || (x.changeBegan = !0,
                    x.changeCompleted = !1,
                    B("changeBegin")),
                    B("change"),
                    I(d)) : x.changeBegan && (x.changeCompleted = !0,
                        x.changeBegan = !1,
                        B("changeComplete")),
                x.currentTime = a(d, 0, e),
                x.began && B("update"),
                n >= e && (i = 0,
                    x.remaining && !0 !== x.remaining && x.remaining--,
                    x.remaining ? (o = u,
                        B("loopComplete"),
                        B("loopBegin"),
                        "alternate" === x.direction && k()) : (x.paused = !0,
                            x.completed || (x.completed = !0,
                                B("loopComplete"),
                                B("complete"),
                                !x.passThrough && "Promise" in window && (c(),
                                    f(x)))))
        }
        return x.reset = function () {
            var n = x.direction;
            x.passThrough = !1,
                x.currentTime = 0,
                x.progress = 0,
                x.paused = !0,
                x.began = !1,
                x.changeBegan = !1,
                x.completed = !1,
                x.changeCompleted = !1,
                x.reversePlayback = !1,
                x.reversed = "reverse" === n,
                x.remaining = x.loop,
                t = x.children;
            for (var e = s = t.length; e--;)
                x.children[e].reset();
            (x.reversed && !0 !== x.loop || "alternate" === n && 1 === x.loop) && x.remaining++,
                I(0)
        }
            ,
            x.set = function (n, e) {
                return G(n, e),
                    x
            }
            ,
            x.tick = function (n) {
                u = n,
                    o || (o = u),
                    D((u + (i - o)) * en.speed)
            }
            ,
            x.seek = function (n) {
                D(C(n))
            }
            ,
            x.pause = function () {
                x.paused = !0,
                    O()
            }
            ,
            x.play = function () {
                x.paused && (x.completed && x.reset(),
                    x.paused = !1,
                    U.push(x),
                    O(),
                    K || nn())
            }
            ,
            x.reverse = function () {
                k(),
                    O()
            }
            ,
            x.restart = function () {
                x.reset(),
                    x.play()
            }
            ,
            x.reset(),
            x.autoplay && x.play(),
            x
    }
    function rn(n, e) {
        for (var r = e.length; r--;)
            b(n, e[r].animatable.target) && e.splice(r, 1)
    }
    return "undefined" != typeof document && document.addEventListener("visibilitychange", function () {
        document.hidden ? (U.forEach(function (n) {
            return n.pause()
        }),
            _ = U.slice(0),
            U = []) : _.forEach(function (n) {
                return n.play()
            })
    }),
        en.version = "3.0.1",
        en.speed = 1,
        en.running = U,
        en.remove = function (n) {
            for (var e = Y(n), r = U.length; r--;) {
                var t = U[r]
                    , a = t.animations
                    , o = t.children;
                rn(e, a);
                for (var i = o.length; i--;) {
                    var u = o[i]
                        , s = u.animations;
                    rn(e, s),
                        s.length || u.children.length || o.splice(i, 1)
                }
                a.length || o.length || t.pause()
            }
        }
        ,
        en.get = N,
        en.set = G,
        en.convertPx = I,
        en.path = function (n, e) {
            var r = u.str(n) ? h(n)[0] : n
                , t = e || 100;
            return function (n) {
                return {
                    property: n,
                    el: r,
                    svg: q(r),
                    totalLength: j(r) * (t / 100)
                }
            }
        }
        ,
        en.setDashoffset = function (n) {
            var e = j(n);
            return n.setAttribute("stroke-dasharray", e),
                e
        }
        ,
        en.stagger = function (n, e) {
            void 0 === e && (e = {});
            var r = e.direction || "normal"
                , t = e.easing ? v(e.easing) : null
                , a = e.grid
                , o = e.axis
                , i = e.from || 0
                , s = "first" === i
                , c = "center" === i
                , f = "last" === i
                , l = u.arr(n)
                , d = l ? parseFloat(n[0]) : parseFloat(n)
                , p = l ? parseFloat(n[1]) : 0
                , h = C(l ? n[1] : n) || 0
                , g = e.start || 0 + (l ? d : 0)
                , m = []
                , y = 0;
            return function (n, e, u) {
                if (s && (i = 0),
                    c && (i = (u - 1) / 2),
                    f && (i = u - 1),
                    !m.length) {
                    for (var v = 0; v < u; v++) {
                        if (a) {
                            var b = c ? (a[0] - 1) / 2 : i % a[0]
                                , x = c ? (a[1] - 1) / 2 : Math.floor(i / a[0])
                                , M = b - v % a[0]
                                , w = x - Math.floor(v / a[0])
                                , k = Math.sqrt(M * M + w * w);
                            "x" === o && (k = -M),
                                "y" === o && (k = -w),
                                m.push(k)
                        } else
                            m.push(Math.abs(i - v));
                        y = Math.max.apply(Math, m)
                    }
                    t && (m = m.map(function (n) {
                        return t(n / y) * y
                    })),
                        "reverse" === r && (m = m.map(function (n) {
                            return o ? n < 0 ? -1 * n : -n : Math.abs(y - n)
                        }))
                }
                return g + (l ? (p - d) / y : d) * (Math.round(100 * m[e]) / 100) + h
            }
        }
        ,
        en.timeline = function (n) {
            void 0 === n && (n = {});
            var r = en(n);
            return r.duration = 0,
                r.add = function (t, a) {
                    var o = U.indexOf(r)
                        , i = r.children;
                    function s(n) {
                        n.passThrough = !0
                    }
                    o > -1 && U.splice(o, 1);
                    for (var c = 0; c < i.length; c++)
                        s(i[c]);
                    var f = w(t, M(e, n));
                    f.targets = f.targets || n.targets;
                    var l = r.duration;
                    f.autoplay = !1,
                        f.direction = r.direction,
                        f.timelineOffset = u.und(a) ? l : A(a, l),
                        s(r),
                        r.seek(f.timelineOffset);
                    var d = en(f);
                    s(d),
                        i.push(d);
                    var p = W(i, n);
                    return r.delay = p.delay,
                        r.endDelay = p.endDelay,
                        r.duration = p.duration,
                        r.seek(0),
                        r.reset(),
                        r.autoplay && r.play(),
                        r
                }
                ,
                r
        }
        ,
        en.easing = v,
        en.penner = p,
        en.random = function (n, e) {
            return Math.floor(Math.random() * (e - n + 1)) + n
        }
        ,
        en
});
!function (t) {
    "use strict";
    t.fn.magician = function (n) {
        var a, u, r, i, o, s, c, f, h, M, l, I = t.extend({
            container: t(window),
            uniqueKey: "",
            type: "scroll",
            offsetTop: 0,
            duration: 1e3,
            offsetBottom: 0,
            animation: {}
        }, n), p = function () {
            r = a.height() - (I.offsetTop + I.offsetBottom),
                i = a.scrollTop() + I.offsetTop,
                o = i + r,
                s = u.outerHeight(),
                c = u.offset().top,
                f = c + s,
                1 == (c <= o && f >= i) ? l = i - c + r : (c <= o && (l = r + s),
                    f >= i && (l = 0)),
                l = Math.floor(l / (r + s) * 1e3),
                t({
                    n: M
                }).animate({
                    n: l
                }, {
                    duration: I.duration,
                    easing: "easeOutQuad",
                    step: function (e, t) {
                        h.seek(e)
                    }
                }),
                M = l
        };
        return this.each(function () {
            switch (u = t(this),
            a = "object" == typeof I.container ? I.container : u.parents(I.container).eq(0),
            I.type) {
                case "scroll":
                    var n = t.extend(I.animation, {
                        targets: u.get(),
                        duration: 1e3,
                        elasticity: 0,
                        easing: "linear",
                        autoplay: !1
                    });
                    h = anime(n),
                        p(),
                        a.on("scroll.magicianscrolleffect" + I.uniqueKey, p);
                    break;
                case "mousemove":
                    var r = e.pageX - u.offset().left
                        , i = e.pageY - u.offset().top;
                    TweenMax.to(u.find(".elementor-repeater-item-" + obj._id), 1, {
                        x: (r - u.width() / 2) / u.width() * obj.parallax_speed,
                        y: (i - u.height() / 2) / u.height() * obj.parallax_speed,
                        ease: Power2.ease
                    })
            }
        }),
            this
    }
        ,
        jQuery.easing.jswing = jQuery.easing.swing,
        jQuery.extend(jQuery.easing, {
            def: "easeOutQuad",
            swing: function (e, t, n, a, u) {
                return jQuery.easing[jQuery.easing.def](e, t, n, a, u)
            },
            easeInQuad: function (e, t, n, a, u) {
                return a * (t /= u) * t + n
            },
            easeOutQuad: function (e, t, n, a, u) {
                return -a * (t /= u) * (t - 2) + n
            },
            easeInOutQuad: function (e, t, n, a, u) {
                return (t /= u / 2) < 1 ? a / 2 * t * t + n : -a / 2 * (--t * (t - 2) - 1) + n
            },
            easeInCubic: function (e, t, n, a, u) {
                return a * (t /= u) * t * t + n
            },
            easeOutCubic: function (e, t, n, a, u) {
                return a * ((t = t / u - 1) * t * t + 1) + n
            },
            easeInOutCubic: function (e, t, n, a, u) {
                return (t /= u / 2) < 1 ? a / 2 * t * t * t + n : a / 2 * ((t -= 2) * t * t + 2) + n
            },
            easeInQuart: function (e, t, n, a, u) {
                return a * (t /= u) * t * t * t + n
            },
            easeOutQuart: function (e, t, n, a, u) {
                return -a * ((t = t / u - 1) * t * t * t - 1) + n
            },
            easeInOutQuart: function (e, t, n, a, u) {
                return (t /= u / 2) < 1 ? a / 2 * t * t * t * t + n : -a / 2 * ((t -= 2) * t * t * t - 2) + n
            },
            easeInQuint: function (e, t, n, a, u) {
                return a * (t /= u) * t * t * t * t + n
            },
            easeOutQuint: function (e, t, n, a, u) {
                return a * ((t = t / u - 1) * t * t * t * t + 1) + n
            },
            easeInOutQuint: function (e, t, n, a, u) {
                return (t /= u / 2) < 1 ? a / 2 * t * t * t * t * t + n : a / 2 * ((t -= 2) * t * t * t * t + 2) + n
            },
            easeInSine: function (e, t, n, a, u) {
                return -a * Math.cos(t / u * (Math.PI / 2)) + a + n
            },
            easeOutSine: function (e, t, n, a, u) {
                return a * Math.sin(t / u * (Math.PI / 2)) + n
            },
            easeInOutSine: function (e, t, n, a, u) {
                return -a / 2 * (Math.cos(Math.PI * t / u) - 1) + n
            },
            easeInExpo: function (e, t, n, a, u) {
                return 0 == t ? n : a * Math.pow(2, 10 * (t / u - 1)) + n
            },
            easeOutExpo: function (e, t, n, a, u) {
                return t == u ? n + a : a * (1 - Math.pow(2, -10 * t / u)) + n
            },
            easeInOutExpo: function (e, t, n, a, u) {
                return 0 == t ? n : t == u ? n + a : (t /= u / 2) < 1 ? a / 2 * Math.pow(2, 10 * (t - 1)) + n : a / 2 * (2 - Math.pow(2, -10 * --t)) + n
            },
            easeInCirc: function (e, t, n, a, u) {
                return -a * (Math.sqrt(1 - (t /= u) * t) - 1) + n
            },
            easeOutCirc: function (e, t, n, a, u) {
                return a * Math.sqrt(1 - (t = t / u - 1) * t) + n
            },
            easeInOutCirc: function (e, t, n, a, u) {
                return (t /= u / 2) < 1 ? -a / 2 * (Math.sqrt(1 - t * t) - 1) + n : a / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
            },
            easeInElastic: function (e, t, n, a, u) {
                var r = 1.70158
                    , i = 0
                    , o = a;
                if (0 == t)
                    return n;
                if (1 == (t /= u))
                    return n + a;
                if (i || (i = .3 * u),
                    o < Math.abs(a)) {
                    o = a;
                    r = i / 4
                } else
                    r = i / (2 * Math.PI) * Math.asin(a / o);
                return -o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - r) * (2 * Math.PI) / i) + n
            },
            easeOutElastic: function (e, t, n, a, u) {
                var r = 1.70158
                    , i = 0
                    , o = a;
                if (0 == t)
                    return n;
                if (1 == (t /= u))
                    return n + a;
                if (i || (i = .3 * u),
                    o < Math.abs(a)) {
                    o = a;
                    r = i / 4
                } else
                    r = i / (2 * Math.PI) * Math.asin(a / o);
                return o * Math.pow(2, -10 * t) * Math.sin((t * u - r) * (2 * Math.PI) / i) + a + n
            },
            easeInOutElastic: function (e, t, n, a, u) {
                var r = 1.70158
                    , i = 0
                    , o = a;
                if (0 == t)
                    return n;
                if (2 == (t /= u / 2))
                    return n + a;
                if (i || (i = u * (.3 * 1.5)),
                    o < Math.abs(a)) {
                    o = a;
                    r = i / 4
                } else
                    r = i / (2 * Math.PI) * Math.asin(a / o);
                return t < 1 ? o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - r) * (2 * Math.PI) / i) * -.5 + n : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * u - r) * (2 * Math.PI) / i) * .5 + a + n
            },
            easeInBack: function (e, t, n, a, u, r) {
                return null == r && (r = 1.70158),
                    a * (t /= u) * t * ((r + 1) * t - r) + n
            },
            easeOutBack: function (e, t, n, a, u, r) {
                return null == r && (r = 1.70158),
                    a * ((t = t / u - 1) * t * ((r + 1) * t + r) + 1) + n
            },
            easeInOutBack: function (e, t, n, a, u, r) {
                return null == r && (r = 1.70158),
                    (t /= u / 2) < 1 ? a / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + n : a / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + n
            },
            easeInBounce: function (e, t, n, a, u) {
                return a - jQuery.easing.easeOutBounce(e, u - t, 0, a, u) + n
            },
            easeOutBounce: function (e, t, n, a, u) {
                return (t /= u) < 1 / 2.75 ? a * (7.5625 * t * t) + n : t < 2 / 2.75 ? a * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? a * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : a * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
            },
            easeInOutBounce: function (e, t, n, a, u) {
                return t < u / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, a, u) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - u, 0, a, u) + .5 * a + n
            }
        })
}(jQuery);
