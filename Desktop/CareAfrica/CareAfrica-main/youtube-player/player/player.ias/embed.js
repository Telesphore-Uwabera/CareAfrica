(function(g) {
    var window = this;
    /*
 SPDX-License-Identifier: Apache-2.0 */
    /*

 Copyright 2017 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
    'use strict';
    var Zkb = function(a) {
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        a.limitedPlaybackDurationInSeconds = NaN;
        g.vT(a)
    }
      , $kb = function() {
        return {
            I: "svg",
            Y: {
                height: "100%",
                version: "1.1",
                viewBox: "0 0 110 26",
                width: "100%"
            },
            X: [{
                I: "path",
                Bc: !0,
                T: "ytp-svg-fill",
                Y: {
                    d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                }
            }]
        }
    }
      , alb = function(a, b) {
        var c = g.Ja.apply(2, arguments), d;
        b = null != (d = b) ? d : {};
        return {
            type: a,
            props: b,
            children: c
        }
    }
      , blb = function(a) {
        return a.children
    }
      , clb = function(a) {
        var b = {}, c;
        for (c in a)
            b = {
                cQ: b.cQ,
                VO: b.VO
            },
            b.cQ = w5[c],
            b.VO = a[c],
            w5[c] = function(d) {
                return function() {
                    var e = g.Ja.apply(0, arguments);
                    d.cQ.apply(null, g.qa(e));
                    d.VO.apply(null, g.qa(e))
                }
            }(b)
    }
      , dlb = function() {}
      , x5 = function(a, b) {
        for (; a.length > b; )
            a.pop()
    }
      , elb = function(a) {
        a = Array(a);
        x5(a, 0);
        return a
    }
      , flb = function(a, b, c) {
        if (null == c)
            a.removeAttribute(b);
        else {
            var d = 0 === b.lastIndexOf("xml:", 0) ? "http://www.w3.org/XML/1998/namespace" : 0 === b.lastIndexOf("xlink:", 0) ? "http://www.w3.org/1999/xlink" : null;
            d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)
        }
    }
      , hlb = function(a, b, c) {
        a = a.style;
        if ("string" === typeof c)
            a.cssText = c;
        else {
            a.cssText = "";
            for (var d in c)
                glb.call(c, d) && (b = c[d],
                0 <= d.indexOf("-") ? a.setProperty(d, b) : a[d] = b)
        }
    }
      , ilb = function(a, b, c) {
        var d = typeof c;
        "object" === d || "function" === d ? a[b] = c : flb(a, b, c)
    }
      , y5 = function() {
        var a = new dlb;
        a.__default = ilb;
        a.style = hlb;
        return a
    }
      , jlb = function(a, b, c, d) {
        (d[b] || d.__default)(a, b, c)
    }
      , klb = function(a) {
        this.created = [];
        this.j = [];
        this.node = a
    }
      , llb = function(a, b) {
        this.j = null;
        this.B = a;
        this.key = b;
        this.text = void 0
    }
      , z5 = function(a, b, c) {
        b = new llb(b,c);
        return a.__incrementalDOMData = b
    }
      , A5 = function(a, b) {
        if (a.__incrementalDOMData)
            return a.__incrementalDOMData;
        var c = 1 === a.nodeType ? a.localName : a.nodeName
          , d = 1 === a.nodeType ? a.getAttribute("key") : null;
        b = z5(a, c, 1 === a.nodeType ? d || b : null);
        if (1 === a.nodeType && (a = a.attributes,
        c = a.length)) {
            d = b.j || (b.j = elb(2 * c));
            for (var e = 0, f = 0; e < c; e += 1,
            f += 2) {
                var h = a[e]
                  , l = h.value;
                d[f] = h.name;
                d[f + 1] = l
            }
        }
        return b
    }
      , mlb = function(a, b, c, d, e) {
        return b == c && d == e
    }
      , E5 = function(a) {
        for (var b = B5, c = C5(); c !== a; ) {
            var d = c.nextSibling;
            b.removeChild(c);
            D5.j.push(c);
            c = d
        }
    }
      , C5 = function() {
        return F5 ? F5.nextSibling : B5.firstChild
    }
      , nlb = function(a, b) {
        F5 = C5();
        if (G5 && F5)
            z5(F5, a, b);
        else {
            var c;
            a: {
                if (c = F5) {
                    do {
                        var d = c
                          , e = a
                          , f = b
                          , h = A5(d, f);
                        if (H5(d, e, h.B, f, h.key))
                            break a
                    } while (b && (c = c.nextSibling))
                }
                c = null
            }
            c || ("#text" === a ? (a = I5.createTextNode(""),
            z5(a, "#text", null)) : (c = I5,
            d = B5,
            "function" === typeof a ? c = new a : c = (d = "svg" === a ? "http://www.w3.org/2000/svg" : "math" === a ? "http://www.w3.org/1998/Math/MathML" : null == d || "foreignObject" === A5(d).B ? null : d.namespaceURI) ? c.createElementNS(d, a) : c.createElement(a),
            z5(c, a, b),
            a = c),
            D5.created.push(a),
            c = a);
            a = c;
            if (a !== F5) {
                if (0 <= J5.indexOf(a))
                    for (b = B5,
                    c = a.nextSibling,
                    d = F5; null !== d && d !== a; )
                        e = d.nextSibling,
                        b.insertBefore(d, c),
                        d = e;
                else
                    B5.insertBefore(a, F5);
                F5 = a
            }
        }
    }
      , olb = function(a, b) {
        nlb(a, b);
        B5 = F5;
        F5 = null;
        return B5
    }
      , qlb = function(a, b) {
        b = void 0 === b ? {} : b;
        var c = void 0 === b.matches ? mlb : b.matches
          , d = void 0 === b.T5 ? !1 : b.T5;
        return function(e, f, h) {
            var l = D5
              , m = I5
              , n = J5
              , p = K5
              , q = F5
              , r = B5
              , t = H5
              , w = G5;
            I5 = e.ownerDocument;
            D5 = new klb(e);
            H5 = c;
            K5 = [];
            F5 = null;
            var y = B5 = e.parentNode, C, H = plb.call(e);
            if ((C = 11 === H.nodeType || 9 === H.nodeType ? H.activeElement : null) && e.contains(C)) {
                for (H = []; C !== y; )
                    H.push(C),
                    C = C.parentNode || (y ? C.host : null);
                y = H
            } else
                y = [];
            J5 = y;
            G5 = d;
            try {
                return a(e, f, h)
            } finally {
                e = D5,
                L5 && 0 < e.j.length && L5(e.j),
                I5 = m,
                D5 = l,
                H5 = t,
                K5 = p,
                F5 = q,
                B5 = r,
                J5 = n,
                G5 = w
            }
        }
    }
      , rlb = function(a, b, c, d) {
        M5.push(jlb);
        M5.push(a);
        M5.push(b);
        M5.push(c);
        M5.push(d)
    }
      , slb = function(a) {
        nlb("#text", null);
        var b = F5;
        var c = A5(b);
        if (c.text !== a) {
            c = c.text = a;
            for (var d = 1; d < arguments.length; d += 1)
                c = (0,
                arguments[d])(c);
            b.data !== c && (b.data = c)
        }
    }
      , tlb = function(a) {
        for (var b in a)
            N5.attributes[b] = a[b](N5.attributes[b])
    }
      , vlb = function(a) {
        ulb.push(a);
        a.attributes && tlb(a.attributes);
        a.WY && clb(a.WY)
    }
      , wlb = function(a) {
        var b;
        return void 0 !== (null == (b = a.prototype) ? void 0 : b.FA)
    }
      , xlb = function(a, b) {
        if (a.Am && a.Lr) {
            var c = a.Am[b];
            a = a.Lr[b];
            c.zI && c.TD && (b = c.zI.length - 1,
            O5(c.zI, a, b),
            O5(c.TD, a, b),
            c.zI.pop(),
            c.TD.pop(),
            b = c.zI[a],
            null != b && b.Lr && (b.Lr[c.TD[a]] = a))
        }
    }
      , ylb = function(a, b) {
        if (a.Am && a.Lr) {
            O5(a.Am, b, a.Am.length - 1);
            O5(a.Lr, b, a.Lr.length - 1);
            a.Am.pop();
            a.Lr.pop();
            var c = a.Am[b];
            a = a.Lr[b];
            if (null == c ? 0 : c.TD)
                c.TD[a] = b
        }
    }
      , O5 = function(a, b, c) {
        -1 === c && (c = a.length - 1);
        var d = a[b];
        a[b] = a[c];
        a[c] = d
    }
      , zlb = function(a) {
        if (0 !== a.state && !a.isDisposed) {
            if (1 === a.state && a.Am)
                for (var b = g.u(a.Am), c = b.next(); !c.done; c = b.next())
                    c = c.value,
                    null != c.MA && zlb(c);
            2 === a.state && null != a.MA && a.MA(a);
            a.state = 0
        }
    }
      , Alb = function(a, b, c) {
        b = void 0 === b ? P5 : b;
        var d = Q5
          , e = P5;
        Q5 = a;
        P5 = b;
        try {
            return c(void 0)
        } finally {
            Q5 = d,
            P5 = e
        }
    }
      , Elb = function(a, b) {
        Blb(function() {
            a.U9 = 0;
            if (a.oA)
                for (var c = g.u(a.oA), d = c.next(); !d.done; d = c.next())
                    Clb(d.value);
            Dlb(a);
            c = Alb(a, a, b);
            if (a.Am && a.Lr)
                for (d = a.U9; d < a.Am.length; d++) {
                    var e = a
                      , f = d;
                    xlb(e, f);
                    ylb(e, f)
                }
            return c
        })
    }
      , Blb = function(a) {
        if (null != R5)
            a();
        else {
            R5 = [];
            try {
                a();
                for (var b = g.u(R5), c = b.next(); !c.done; c = b.next())
                    zlb(c.value)
            } finally {
                R5 = null
            }
        }
    }
      , Flb = function(a) {
        Elb(a, a.fn)
    }
      , Clb = function(a) {
        a.isDisposed = !0;
        if (a.oA)
            for (var b = g.u(a.oA), c = b.next(); !c.done; c = b.next())
                Clb(c.value);
        if (null != a.MA && a.Am)
            for (b = 0; b < a.Am.length; b++) {
                c = a;
                var d = b;
                xlb(c, d);
                ylb(c, d)
            }
        Dlb(a)
    }
      , Dlb = function(a) {
        if (a.nC) {
            for (var b = g.u(a.nC), c = b.next(); !c.done; c = b.next())
                c = c.value,
                c();
            a.nC.length = 0
        }
    }
      , Glb = function() {
        var a = {
            value: null
        };
        if (P5) {
            var b;
            (b = P5).oA || (b.oA = []);
            P5.oA.push(a)
        }
        return a
    }
      , Hlb = function(a) {
        function b() {
            return a(function() {
                return void Clb(c)
            }, c)
        }
        var c = void 0 === c ? Glb() : c;
        Blb(function() {
            return Alb(null, c, b)
        })
    }
      , Ilb = function(a, b) {
        return Alb(Q5, a, b)
    }
      , Jlb = function(a) {
        if (P5) {
            var b;
            (b = P5).nC || (b.nC = []);
            P5.nC.push(a)
        }
    }
      , Klb = function(a) {
        var b = Glb();
        b.fn = a;
        b.MA = Flb;
        b.afb = !0;
        b.state = 2;
        zlb(b)
    }
      , Nlb = function(a, b, c) {
        if (Object.hasOwnProperty.call(Llb, a) && (a = Llb[a],
        Object.hasOwnProperty.call(a, b) && (a = a[b],
        a instanceof Array))) {
            for (var d = null, e = !1, f = 0, h = a.length; f < h; ++f) {
                var l = a[f]
                  , m = l.Zh;
                if (!m)
                    return l.Ed;
                null === d && (d = {});
                m = Object.hasOwnProperty.call(d, m) ? d[m] : d[m] = c(m);
                if (m === l.Ci)
                    return l.Ed;
                null == m && (e = !0)
            }
            if (e)
                return null
        }
        b = Mlb[b];
        return "number" === typeof b ? b : null
    }
      , S5 = function() {
        this.PW = ""
    }
      , Plb = function(a, b, c) {
        if (null === c || void 0 === c)
            return c;
        var d = Nlb(a.tagName.toLowerCase(), b, function() {
            throw Error("Contingent attribute/property lookups are not supported.");
        });
        if (null === d)
            return c;
        d = Olb[d];
        var e;
        if (null == (e = d.Ft) ? 0 : e.call(d, c)) {
            if (d.Wr)
                return d.Wr(c);
            throw Error("Value Handler's unwrap function does not exist.");
        }
        c = c && c.qn ? c.Lk() : c;
        return d.wq ? d.wq(a.tagName, b, String(c)) : c
    }
      , Rlb = function(a, b) {
        var c = Qlb;
        null == a.YF && null != a.ZF && Hlb(function(d, e) {
            a.YF = d;
            null != a.s3 || (a.s3 = e);
            Klb(function() {
                for (var f = a.ZF, h = [], l = 0; l < f.length; l++) {
                    var m = f[l]
                      , n = b[m]();
                    h[l] !== n && (h[l] = n,
                    c(a, m, n))
                }
            })
        })
    }
      , Slb = function(a) {
        var b = document.createTextNode("");
        Hlb(function(c) {
            b.r3 = !0;
            b.YF = c;
            Klb(function() {
                var d = a();
                null == d && (d = "");
                var e = typeof d;
                if ("object" === e || "function" === e)
                    throw Error("Invalid text node kind: " + e + ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed");
                b.textContent = String(d)
            })
        });
        return b
    }
      , Qlb = function(a, b, c) {
        !1 === c && Tlb.has(b) ? flb(a, b, null) : "idomKey" !== b && "skip" !== b && "skipchildren" !== b && "children" !== b && "el" !== b && (b.startsWith("on") ? ":" === b[2] ? a["on" + b.slice(3)] = c.X4(0) : Ulb(a, b, c) : "function" !== typeof c || null != a.YF ? (N5.x4 && (c = Plb(a, b, c)),
        "style" === b ? Vlb(a, b, c) : b.startsWith("prop:") ? a[b.slice(5)] = c : Ulb(a, b, c)) : (a.ZF || (a.ZF = []),
        a.ZF.push(b)))
    }
      , Wlb = function(a, b) {
        if (null == b ? 0 : b.el) {
            var c = b.el;
            if ("function" === typeof c)
                c(a);
            else {
                var d;
                null == (d = c.z8) || d.call(c, a);
                a._disposeRef || (a._disposeRef = function() {
                    var e;
                    null == (e = c.SI) || e.call(c);
                    delete a._disposeRef
                }
                ,
                Jlb(function() {
                    var e;
                    return void (null == (e = a._disposeRef) ? void 0 : e.call(a))
                }))
            }
        }
    }
      , Zlb = function(a, b, c) {
        c = ((void 0 === c ? 0 : c) ? Xlb : Ylb)(a, function() {
            T5(b)
        });
        null != c || (c = a)
    }
      , T5 = function(a) {
        if (void 0 !== a && null !== a)
            if (Array.isArray(a)) {
                a = g.u(a);
                for (var b = a.next(); !b.done; b = a.next())
                    T5(b.value)
            } else if (a instanceof g.Xd || a instanceof g.$d || a instanceof g.ee)
                slb(a.toString());
            else {
                if (a instanceof Node)
                    throw Error("Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " + a.tagName);
                b = typeof a;
                if ("boolean" === b || "number" === b || "string" === b)
                    slb(a);
                else if ("function" === typeof a) {
                    b = B5;
                    var c = C5();
                    c && c.r3 || b.insertBefore(Slb(a), c);
                    F5 = C5()
                } else {
                    if ("string" === typeof a.type) {
                        a.gq || olb(a.type, a.props.idomKey);
                        b = B5;
                        for (var d in a.props)
                            if (a.props[d] !== $lb) {
                                var e = a.props[d]
                                  , f = K5;
                                f.push(d);
                                f.push(e)
                            }
                        d = N5.attributes;
                        d = void 0 === d ? amb : d;
                        e = B5;
                        var h = A5(e);
                        f = d;
                        d = K5;
                        h = h.j || (h.j = elb(d.length));
                        for (var l = !h.length || !1, m = 0; m < d.length; m += 2) {
                            var n = d[m];
                            if (l)
                                h[m] = n;
                            else if (h[m] !== n)
                                break;
                            var p = d[m + 1];
                            if (l || h[m + 1] !== p)
                                h[m + 1] = p,
                                rlb(e, n, p, f)
                        }
                        if (m < d.length || m < h.length) {
                            for (m = l = m; m < h.length; m += 2)
                                U5[h[m]] = h[m + 1];
                            for (m = l; m < d.length; m += 2)
                                l = d[m],
                                n = d[m + 1],
                                U5[l] !== n && rlb(e, l, n, f),
                                h[m] = l,
                                h[m + 1] = n,
                                delete U5[l];
                            x5(h, d.length);
                            for (c in U5)
                                rlb(e, c, void 0, f),
                                delete U5[c]
                        }
                        c = bmb;
                        bmb = e = M5.length;
                        for (f = c; f < e; f += 5)
                            (0,
                            M5[f])(M5[f + 1], M5[f + 2], M5[f + 3], M5[f + 4]);
                        bmb = c;
                        x5(M5, c);
                        x5(d, 0);
                        Rlb(b, a.props);
                        (a.props.skip || a.props.skipchildren) && B5.hasChildNodes() ? F5 = B5.lastChild : T5(a.children);
                        E5(null);
                        F5 = B5;
                        B5 = B5.parentNode;
                        a.gq && (a.gq = !1);
                        Wlb(b, a.props);
                        return b
                    }
                    a.type === blb ? T5(a.children) : N5.XY(a)
                }
            }
    }
      , V5 = function(a) {
        this.props = a;
        this.B = this.gU = !1
    }
      , dmb = function(a) {
        V5.call(this, a);
        var b = this;
        this.pz = [];
        this.C = 0;
        Hlb(function(c, d) {
            b.D = c;
            b.G = d
        });
        Jlb(function() {
            cmb(b, b.el)
        })
    }
      , cmb = function(a, b) {
        if (!a.B && b) {
            a.B = !0;
            w5.LG(a);
            try {
                a.LG()
            } catch (e) {
                var c, d;
                null == (d = N5.kD) || d.call(N5, null == (c = a.j) ? void 0 : c.ZB, e)
            }
            a.el = null;
            b.__instance && delete b.__instance
        }
    }
      , emb = function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = void 0
              , d = void 0
              , e = void 0
              , f = void 0
              , h = void 0
              , l = a[b];
            l && (null == (h = l._disposeRef) || h.call(l),
            null == (f = l.YF) || f.call(l),
            l.__instance && (f = l.__instance,
            cmb(f, l),
            null == (e = f.D) || e.call(f),
            null == (d = f.gy) || null == (c = d.SI) || c.call(d)),
            emb(l.childNodes))
        }
    }
      , gmb = function(a) {
        1 === fmb.push(a) && requestAnimationFrame(function() {
            setTimeout(function() {
                var b = [].concat(g.qa(fmb));
                fmb = [];
                b = g.u(b);
                for (var c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    try {
                        emb(c)
                    } catch (e) {
                        var d = c = void 0;
                        null == (d = (c = N5).kD) || d.call(c, "unknown", e)
                    }
                }
            })
        })
    }
      , X5 = function(a, b) {
        return W5.apply(null, [a, b].concat(g.qa(g.Ja.apply(2, arguments))))
    }
      , hmb = function(a) {
        var b = W5;
        W5 = alb;
        try {
            a()
        } finally {
            W5 = b
        }
    }
      , imb = function(a) {
        var b = null, c, d = {
            value: null,
            z8: function(e) {
                if (c && e !== c) {
                    var f;
                    null == (f = b) || f();
                    c._disposeRef = void 0
                }
                c = e;
                b = a(e) || null
            },
            SI: function() {
                var e;
                null == (e = b) || e()
            }
        };
        Jlb(function() {
            var e;
            null == (e = d.SI) || e.call(d);
            d.SI = void 0
        });
        return d
    }
      , lmb = function(a) {
        var b = Y5;
        if (null == b)
            throw Error(jmb);
        var c = b.C++;
        b.pz || (b.pz = []);
        var d = b.pz;
        d[c] || (d[c] = {
            key: a,
            host: b
        });
        if (a !== d[c].key)
            throw Error(kmb);
        return d[c]
    }
      , mmb = function(a, b) {
        return !a || a.length !== (null == b ? void 0 : b.length) || a.some(function(c, d) {
            return c !== b[d]
        })
    }
      , Z5 = function(a, b) {
        nmb(a, b)
    }
      , nmb = function(a, b) {
        var c = 0;
        c = void 0 === c ? 0 : c;
        var d = lmb("setLifecycle")
          , e = Y5;
        1 === c && e.gU && (c = 0);
        mmb(d.Gg, b) && (d.Gg = b,
        d.DY = a,
        0 === c && (e.iy || (e.iy = []),
        e.iy.push(d)),
        1 === c && (e.XF || (e.XF = []),
        e.XF.push(d)))
    }
      , pmb = function(a) {
        var b = [].concat(g.qa(a));
        a.length = 0;
        a = g.u(b);
        for (b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            omb(b);
            var c = b.DY;
            b.DY = null;
            if (c = null == c ? void 0 : c())
                b.CY = c
        }
    }
      , omb = function(a) {
        var b = a.CY;
        a.CY = null;
        null == b || b()
    }
      , $5 = function(a) {
        var b = []
          , c = lmb("useMemoInternal");
        mmb(c.Gg, b) && (c.Gg = b,
        c.value = a());
        return c.value
    }
      , qmb = function() {
        var a = $5(function() {
            return imb(function(b) {
                a.value = b;
                return function() {
                    a.value = null
                }
            })
        });
        return a
    }
      , rmb = function(a) {
        var b = Y5;
        return {
            X4: function() {
                return function(c) {
                    b && w5.dV(b);
                    !0 !== a(c) && c.stopPropagation()
                }
            }
        }
    }
      , smb = function() {
        return $5(function() {
            var a = null;
            return {
                get value() {
                    return a
                },
                set value(b) {
                    if (null !== Y5)
                        throw Error("Can't update local vars during rendering");
                    a = b
                }
            }
        })
    }
      , tmb = function() {
        var a = Y5;
        return $5(function() {
            if (a.gy)
                return a.gy;
            var b = imb(function(c) {
                b.value = c;
                return function() {
                    b.value = null
                }
            });
            b.qdb = !0;
            return a.gy = b
        })
    }
      , a6 = function(a) {
        var b = Y5
          , c = $5(function() {
            return {
                value: "function" === typeof a ? a() : a
            }
        });
        return [c.value, function(d) {
            if (null !== Y5)
                throw Error("Can't set state during rendering");
            c.value = "function" === typeof d ? d(c.value) : d;
            b.BL = {
                WO: b.state,
                fO: !0
            };
            hmb(function() {
                if (b.el) {
                    var e, f = {
                        props: b.props,
                        type: b.j,
                        children: null != (e = b.props.children) ? e : []
                    };
                    try {
                        Zlb(b.el, f, !0)
                    } catch (m) {
                        var h, l;
                        null == (l = N5.kD) || l.call(N5, null == (h = b.j) ? void 0 : h.ZB, m)
                    }
                }
            })
        }
        ]
    }
      , umb = function(a) {
        function b() {
            var l = g.FU(a.J) ? "Hide more Shorts" : "Hide more videos";
            e(l)
        }
        var c = g.u(a6("Hide more videos"))
          , d = c.next().value
          , e = c.next().value;
        Z5(function() {
            var l = a.J;
            l.addEventListener("videodatachange", b);
            return function() {
                l.removeEventListener("videodatachange", b)
            }
        }, [a.J]);
        var f = $5(function() {
            return (new g.CG(g.PG())).element
        })
          , h = qmb();
        nmb(function() {
            h.value.appendChild(f)
        }, []);
        return X5("button", {
            class: "ytp-button ytp-collapse",
            "aria-label": d,
            "on:click": rmb(function() {
                a.action && a.action()
            })
        }, X5("div", {
            class: "ytp-collapse-icon",
            el: h,
            skip: !0
        }))
    }
      , vmb = function(a) {
        function b() {
            var h = g.FU(a.J) ? "More Shorts" : "More videos";
            e(h)
        }
        var c = g.u(a6("More videos"))
          , d = c.next().value
          , e = c.next().value
          , f = tmb();
        Z5(function() {
            a.uQ && (a.uQ.value = f.value)
        }, [a.uQ]);
        Z5(function() {
            var h = a.J;
            h.addEventListener("videodatachange", b);
            return function() {
                h.removeEventListener("videodatachange", b)
            }
        }, [a.J]);
        return X5("button", {
            class: "ytp-button ytp-expand",
            "on:click": rmb(function() {
                a.action && a.action()
            })
        }, d)
    }
      , wmb = function(a, b) {
        var c = smb();
        Z5(function() {
            var d = new g.z2(a,b);
            d.B = !0;
            c.value = d;
            return function() {
                var e;
                null == (e = c.value) || e.dispose()
            }
        }, [a, b]);
        return c
    }
      , xmb = function(a) {
        function b(y) {
            a: {
                var C = g.u([1, 16, 32]);
                for (var H = C.next(); !H.done; H = C.next())
                    if (g.nH(y, H.value)) {
                        C = !0;
                        break a
                    }
                C = !1
            }
            if (!C) {
                var G;
                null != (G = p.value) && G.oD() && h(g.nH(y, 4) && !g.nH(y, 2) && !g.nH(y, 1024))
            }
        }
        function c() {
            b(a.J.Tb())
        }
        function d(y) {
            b(y.state)
        }
        var e = g.u(a6(!1))
          , f = e.next().value
          , h = e.next().value
          , l = g.u(a6(!1));
        e = l.next().value;
        var m = l.next().value
          , n = qmb()
          , p = wmb(a.J, a.ub)
          , q = tmb();
        l = smb();
        var r = smb();
        Z5(function() {
            var y = a.J
              , C = g.FU(y) ? 157212 : 172777;
            r.value = new g.J;
            y.xb(q.value, r.value, C);
            y.addEventListener("presentingplayerstatechange", d);
            y.N("embeds_web_enable_pause_overlay_wn_update") && y.addEventListener("videodatachange", c);
            C = "0" === y.W().controlsType;
            g.fu(y.getRootNode(), "ytp-pause-overlay-controls-hidden", C);
            return function() {
                y.N("embeds_web_enable_pause_overlay_wn_update") && y.removeEventListener("videodatachange", c);
                y.removeEventListener("presentingplayerstatechange", d);
                var H;
                null == (H = r.value) || H.dispose()
            }
        }, [a.J]);
        Z5(function() {
            var y;
            null == (y = p.value) || y.Ga(n.value)
        }, [p]);
        var t = a.J;
        if (f)
            if (g.fu(t.getRootNode(), "ytp-expand-pause-overlay", !e),
            e)
                l.value.focus();
            else {
                var w = p.value;
                g.A2(w);
                w.show();
                q.value.focus()
            }
        q.value && t.Xa(q.value, f && !e);
        return X5("ytp-pause-overlay", {
            class: "ytp-pause-overlay",
            "aria-hidden": !f
        }, X5(umb, {
            J: a.J,
            ub: a.ub,
            action: function() {
                m(!0)
            }
        }), X5(vmb, {
            J: a.J,
            ub: a.ub,
            action: function() {
                m(!1)
            },
            uQ: l
        }), X5("div", {
            el: n,
            skip: !0
        }))
    }
      , ymb = function(a) {
        g.U.call(this, {
            I: "div",
            T: "ytp-related-on-error-overlay"
        });
        var b = this;
        this.api = a;
        this.K = this.B = 0;
        this.G = new g.lL(this);
        this.j = [];
        this.suggestionData = [];
        this.columns = this.containerWidth = 0;
        this.title = new g.U({
            I: "h2",
            T: "ytp-related-title",
            Aa: "{{title}}"
        });
        this.previous = new g.U({
            I: "button",
            Na: ["ytp-button", "ytp-previous"],
            Y: {
                "aria-label": "Show previous suggested videos"
            },
            X: [g.LG()]
        });
        this.qa = new g.y2(function(f) {
            b.suggestions.element.scrollLeft = -f
        }
        );
        this.D = this.C = 0;
        this.S = !0;
        this.next = new g.U({
            I: "button",
            Na: ["ytp-button", "ytp-next"],
            Y: {
                "aria-label": "Show more suggested videos"
            },
            X: [g.MG()]
        });
        g.L(this, this.G);
        a = a.W();
        this.ea = a.D;
        g.L(this, this.title);
        this.title.Ga(this.element);
        this.suggestions = new g.U({
            I: "div",
            T: "ytp-suggestions"
        });
        g.L(this, this.suggestions);
        this.suggestions.Ga(this.element);
        g.L(this, this.previous);
        this.previous.Ga(this.element);
        this.previous.Ta("click", this.G0, this);
        g.L(this, this.qa);
        for (var c = {
            vz: 0
        }; 16 > c.vz; c = {
            vz: c.vz
        },
        c.vz++) {
            var d = new g.U({
                I: "a",
                T: "ytp-suggestion-link",
                Y: {
                    href: "{{link}}",
                    target: a.ea,
                    "aria-label": "{{aria_label}}"
                },
                X: [{
                    I: "div",
                    T: "ytp-suggestion-image",
                    X: [{
                        I: "div",
                        Y: {
                            "data-is-live": "{{is_live}}"
                        },
                        T: "ytp-suggestion-duration",
                        Aa: "{{duration}}"
                    }]
                }, {
                    I: "div",
                    T: "ytp-suggestion-title",
                    Y: {
                        title: "{{hover_title}}"
                    },
                    Aa: "{{title}}"
                }, {
                    I: "div",
                    T: "ytp-suggestion-author",
                    Aa: "{{views_or_author}}"
                }]
            });
            g.L(this, d);
            d.Ga(this.suggestions.element);
            var e = d.Ha("ytp-suggestion-link");
            g.qr(e, "transitionDelay", c.vz / 20 + "s");
            this.G.V(e, "click", function(f) {
                return function(h) {
                    var l = f.vz
                      , m = b.suggestionData[l]
                      , n = m.sessionData;
                    g.pS(b.api.W()) && b.api.N("web_player_log_click_before_generating_ve_conversion_params") ? (b.api.wb(b.j[l].element),
                    l = m.Nk(),
                    m = {},
                    g.sRa(b.api, m, "emb_rel_err"),
                    l = g.yl(l, m),
                    g.aV(l, b.api, h)) : g.$U(h, b.api, b.ea, n || void 0) && b.api.xo(m.videoId, n, m.playlistId)
                }
            }(c));
            this.j.push(d)
        }
        g.L(this, this.next);
        this.next.Ga(this.element);
        this.next.Ta("click", this.F0, this);
        this.G.V(this.api, "videodatachange", this.onVideoDataChange);
        this.resize(this.api.rb().getPlayerSize());
        this.onVideoDataChange();
        this.show()
    }
      , zmb = function(a, b) {
        if (a.api.W().N("web_player_log_click_before_generating_ve_conversion_params"))
            for (var c = Math.floor(-a.C / (a.D + a.B)), d = Math.min(c + a.columns, a.suggestionData.length) - 1; c <= d; c++)
                a.api.Xa(a.j[c].element, b)
    }
      , Amb = function(a) {
        a.next.element.style.bottom = a.K + "px";
        a.previous.element.style.bottom = a.K + "px";
        var b = a.C
          , c = a.containerWidth - a.suggestionData.length * (a.D + a.B);
        g.fu(a.element, "ytp-scroll-min", 0 <= b);
        g.fu(a.element, "ytp-scroll-max", b <= c)
    }
      , Bmb = function(a) {
        for (var b = 0; b < a.suggestionData.length; b++) {
            var c = a.suggestionData[b]
              , d = a.j[b]
              , e = c.shortViewCount ? c.shortViewCount : c.author
              , f = c.Nk()
              , h = a.api.W();
            if (g.pS(h) && !h.N("web_player_log_click_before_generating_ve_conversion_params")) {
                var l = {};
                g.oU(a.api, "addEmbedsConversionTrackingParams", [l]);
                f = g.yl(f, g.QP(l, "emb_rel_err"))
            }
            d.element.style.display = "";
            l = d.Ha("ytp-suggestion-title");
            g.qu.test(c.title) ? l.dir = "rtl" : g.udb.test(c.title) && (l.dir = "ltr");
            l = d.Ha("ytp-suggestion-author");
            g.qu.test(e) ? l.dir = "rtl" : g.udb.test(e) && (l.dir = "ltr");
            d.update({
                views_or_author: e,
                duration: c.isLivePlayback ? "Live" : c.lengthSeconds ? g.wH(c.lengthSeconds) : "",
                link: f,
                hover_title: c.title,
                title: c.title,
                aria_label: c.ariaLabel || null,
                is_live: c.isLivePlayback
            });
            e = d.Ha("ytp-suggestion-image");
            f = c.Jg();
            e.style.backgroundImage = f ? "url(" + f + ")" : "";
            h.N("web_player_log_click_before_generating_ve_conversion_params") && (a.api.jg(d.element, d),
            (c = (c = c.sessionData) && c.itct) && a.api.Eg(d.element, c))
        }
        for (; b < a.j.length; b++)
            a.j[b].element.style.display = "none";
        Amb(a)
    }
      , b6 = function(a) {
        g.dW.call(this, a);
        var b = this;
        this.j = null;
        var c = a.W()
          , d = {
            I: "svg",
            Y: {
                fill: "#fff",
                height: "100%",
                viewBox: "0 0 24 24",
                width: "100%"
            },
            X: [{
                I: "path",
                Y: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }, {
                I: "path",
                Y: {
                    d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                }
            }]
        };
        g.xS(c) && (d = {
            I: "svg",
            Y: {
                fill: "none",
                height: "100%",
                viewBox: "0 0 25 25",
                width: "100%"
            },
            X: [{
                I: "g",
                Y: {
                    "clip-path": "url(#clip0)",
                    fill: "#fff"
                },
                X: [{
                    I: "path",
                    Y: {
                        d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"
                    }
                }, {
                    I: "path",
                    Y: {
                        d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"
                    }
                }]
            }, {
                I: "defs",
                X: [{
                    I: "clipPath",
                    Y: {
                        id: "clip0"
                    },
                    X: [{
                        I: "path",
                        Y: {
                            d: "M0 0h24v24H0z",
                            fill: "#fff",
                            transform: "translate(.57 .5)"
                        }
                    }]
                }]
            }]
        });
        var e = {
            target: c.ea
        }
          , f = ["ytp-small-redirect"];
        c.C ? f.push("no-link") : (c = g.NS(c),
        e.href = c,
        e["aria-label"] = "Visit YouTube to search for more videos");
        var h = new g.U({
            I: "a",
            Na: f,
            Y: e,
            X: [d]
        });
        h.Ga(this.element);
        a.xb(h.element, this, 178053);
        this.V(h.element, "click", function(l) {
            Cmb(b, l, h.element)
        });
        g.L(this, h);
        a.W().C || (this.j = new ymb(a),
        this.j.Ga(this.element),
        g.L(this, this.j));
        this.V(a, "videodatachange", function() {
            b.show()
        });
        this.resize(this.api.rb().getPlayerSize())
    }
      , Cmb = function(a, b, c) {
        b.preventDefault();
        a.api.wb(c);
        b = c.getAttribute("href");
        c = {};
        g.oU(a.api, "addEmbedsConversionTrackingParams", [c]);
        b = g.jd(c) ? b : g.yl(b, c);
        g.An(b)
    }
      , Dmb = function(a, b) {
        a.Ha("ytp-error-content").style.paddingTop = "0px";
        var c = a.Ha("ytp-error-content")
          , d = c.clientHeight;
        a.j && a.j.resize(b, b.height - d);
        c.style.paddingTop = (b.height - (a.j ? a.j.element.clientHeight : 0)) / 2 - d / 2 + "px"
    }
      , Gmb = function(a, b) {
        var c = a.api.W(), d;
        b.reason && (Emb(b.reason) ? d = g.KG(b.reason) : d = g.eW(g.JG(b.reason)),
        a.pe(d, "content"));
        var e;
        b.subreason && (Emb(b.subreason) ? e = g.KG(b.subreason) : e = g.eW(g.JG(b.subreason)),
        a.pe(e, "subreason"));
        if (b.proceedButton && b.proceedButton.buttonRenderer) {
            d = a.Ha("ytp-error-content-wrap-subreason");
            b = b.proceedButton.buttonRenderer;
            var f = g.lf("A");
            if (b.text && b.text.simpleText && (e = b.text.simpleText,
            f.textContent = e,
            !Fmb(d, e) && (!c.C || c.embedsErrorLinks))) {
                var h;
                c = null == (h = g.T(null == b ? void 0 : b.navigationEndpoint, g.VG)) ? void 0 : h.url;
                var l;
                h = null == (l = g.T(null == b ? void 0 : b.navigationEndpoint, g.VG)) ? void 0 : l.target;
                c && (f.setAttribute("href", c),
                a.api.xb(f, a, 178424),
                a.V(f, "click", function(m) {
                    Cmb(a, m, f)
                }));
                h && f.setAttribute("target", h);
                l = g.lf("DIV");
                l.appendChild(f);
                d.appendChild(l)
            }
        }
    }
      , Emb = function(a) {
        if (a.runs)
            for (var b = 0; b < a.runs.length; b++)
                if (a.runs[b].navigationEndpoint)
                    return !0;
        return !1
    }
      , Fmb = function(a, b) {
        a = g.Xe("A", a);
        for (var c = 0; c < a.length; c++)
            if (a[c].textContent === b)
                return !0;
        return !1
    }
      , c6 = function(a, b) {
        g.U.call(this, {
            I: "a",
            Na: ["ytp-impression-link"],
            Y: {
                target: "{{target}}",
                href: "{{url}}",
                "aria-label": "Watch on YouTube"
            },
            X: [{
                I: "div",
                T: "ytp-impression-link-content",
                Y: {
                    "aria-hidden": "true"
                },
                X: [{
                    I: "div",
                    T: "ytp-impression-link-text",
                    Aa: "Watch on"
                }, {
                    I: "div",
                    T: "ytp-impression-link-logo",
                    X: [$kb()]
                }]
            }]
        });
        this.api = a;
        this.ub = b;
        this.updateValue("target", a.W().ea);
        this.api.xb(this.element, this, 96714);
        this.V(this.api, "presentingplayerstatechange", this.Vi);
        this.V(this.api, "videoplayerreset", this.j);
        this.V(this.element, "click", this.onClick);
        this.j()
    }
      , Hmb = function(a) {
        var b = {};
        g.oU(a.api, "addEmbedsConversionTrackingParams", [b]);
        return g.yl(a.api.getVideoUrl(), g.QP(b, "emb_imp_woyt"))
    }
      , d6 = function(a) {
        g.U.call(this, {
            I: "div",
            Na: ["ytp-mobile-a11y-hidden-seek-button"],
            X: [{
                I: "button",
                Na: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                Y: {
                    "aria-label": "Rewind 10 seconds",
                    "aria-hidden": "false"
                }
            }, {
                I: "button",
                Na: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                Y: {
                    "aria-label": "Fast forward 10 seconds",
                    "aria-hidden": "false"
                }
            }]
        });
        this.api = a;
        this.j = this.Ha("ytp-mobile-a11y-hidden-seek-button-rewind");
        this.forwardButton = this.Ha("ytp-mobile-a11y-hidden-seek-button-forward");
        this.api.xb(this.j, this, 141902);
        this.api.xb(this.forwardButton, this, 141903);
        this.V(this.api, "presentingplayerstatechange", this.Vi);
        this.V(this.j, "click", this.B);
        this.V(this.forwardButton, "click", this.C);
        this.Vi()
    }
      , e6 = function(a) {
        g.U.call(this, {
            I: "div",
            T: "ytp-muted-autoplay-endscreen-overlay",
            X: [{
                I: "div",
                T: "ytp-muted-autoplay-end-panel",
                X: [{
                    I: "button",
                    Na: ["ytp-muted-autoplay-end-text", "ytp-button"],
                    Aa: "{{text}}"
                }]
            }]
        });
        this.api = a;
        this.D = this.Ha("ytp-muted-autoplay-end-panel");
        this.B = !1;
        this.api.xb(this.element, this, 52428);
        this.V(this.api, "presentingplayerstatechange", this.C);
        this.V(a, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.Ta("click", this.onClick);
        this.hide()
    }
      , f6 = function(a) {
        var b = a.W();
        g.U.call(this, {
            I: "a",
            Na: ["ytp-watermark", "yt-uix-sessionlink"],
            Y: {
                target: b.ea,
                href: "{{url}}",
                "aria-label": g.IK("Watch on $WEBSITE", {
                    WEBSITE: g.CS(b)
                }),
                "data-sessionlink": "feature=player-watermark"
            },
            X: [$kb()]
        });
        this.api = a;
        this.j = null;
        this.B = !1;
        this.state = a.Tb();
        a.xb(this.element, this, 76758);
        this.V(a, "videodatachange", this.w_);
        this.V(a, "videodatachange", this.onVideoDataChange);
        this.V(a, "presentingplayerstatechange", this.onStateChange);
        this.V(a, "appresize", this.Nb);
        this.Fc(this.state);
        this.onVideoDataChange();
        this.Nb(a.rb().getPlayerSize())
    }
      , Kmb = function(a) {
        g.U.call(this, {
            I: "div",
            T: "ytp-muted-autoplay-overlay",
            X: [{
                I: "div",
                T: "ytp-muted-autoplay-bottom-buttons",
                X: [{
                    I: "button",
                    Na: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                    Y: {
                        "aria-label": "Muted playback indicator"
                    },
                    X: [{
                        I: "div",
                        Na: ["ytp-muted-autoplay-equalizer-icon"],
                        X: [{
                            I: "svg",
                            Y: {
                                height: "100%",
                                version: "1.1",
                                viewBox: "-4 -4 24 24",
                                width: "100%"
                            },
                            X: [{
                                I: "g",
                                Y: {
                                    fill: "#fff"
                                },
                                X: [{
                                    I: "rect",
                                    T: "ytp-equalizer-bar-left",
                                    Y: {
                                        height: "9",
                                        width: "4",
                                        x: "1",
                                        y: "7"
                                    }
                                }, {
                                    I: "rect",
                                    T: "ytp-equalizer-bar-middle",
                                    Y: {
                                        height: "14",
                                        width: "4",
                                        x: "6",
                                        y: "2"
                                    }
                                }, {
                                    I: "rect",
                                    T: "ytp-equalizer-bar-right",
                                    Y: {
                                        height: "12",
                                        width: "4",
                                        x: "11",
                                        y: "4"
                                    }
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        });
        var b = this;
        this.api = a;
        this.bottomButtons = this.Ha("ytp-muted-autoplay-bottom-buttons");
        this.Ha("ytp-muted-autoplay-equalizer");
        this.C = new g.Ut(this.P5,4E3,this);
        this.B = !1;
        a.xb(this.element, this, 39306);
        this.V(a, "presentingplayerstatechange", this.BK);
        this.V(a, "onMutedAutoplayStarts", function() {
            Imb(b);
            b.BK();
            Jmb(b);
            b.B = !1
        });
        this.V(a, "onAutoplayBlocked", this.onAutoplayBlocked);
        this.Ta("click", this.onClick);
        this.V(a, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
        this.hide();
        g.uU(a.app) && (Imb(this),
        this.BK(),
        Jmb(this))
    }
      , Jmb = function(a) {
        a.Ib && a.j && (a.j.show(),
        a.C.start())
    }
      , Imb = function(a) {
        a.watermark || (a.watermark = new f6(a.api),
        g.L(a, a.watermark),
        a.watermark.Ga(a.bottomButtons, 0),
        g.fu(a.watermark.element, "ytp-muted-autoplay-watermark", !0),
        a.j = new g.hH(a.watermark,0,!0,100),
        g.L(a, a.j))
    }
      , g6 = function(a, b) {
        g.U.call(this, {
            I: "div",
            T: "ytp-pause-overlay",
            Y: {
                tabIndex: "-1"
            }
        });
        var c = this;
        this.api = a;
        this.C = new g.lL(this);
        this.D = new g.hH(this,1E3,!1,100,function() {
            c.j.B = !1
        }
        ,function() {
            c.j.B = !0
        }
        );
        this.B = !1;
        this.expandButton = new g.U({
            I: "button",
            Na: ["ytp-button", "ytp-expand"],
            Aa: g.FU(this.api) ? "More Shorts" : "More videos"
        });
        "0" === a.W().controlsType && g.bu(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
        g.L(this, this.C);
        g.L(this, this.D);
        var d = new g.U({
            I: "button",
            Na: ["ytp-button", "ytp-collapse"],
            Y: {
                "aria-label": g.FU(this.api) ? "Hide more Shorts" : "Hide more videos"
            },
            X: [{
                I: "div",
                T: "ytp-collapse-icon",
                X: [g.PG()]
            }]
        });
        g.L(this, d);
        d.Ga(this.element);
        d.Ta("click", this.G, this);
        g.L(this, this.expandButton);
        this.expandButton.Ga(this.element);
        this.expandButton.Ta("click", this.K, this);
        this.j = new g.z2(a,b);
        g.L(this, this.j);
        this.j.B = !1;
        this.j.Ga(this.element);
        g.FU(this.api) ? this.api.xb(this.element, this, 157212) : this.api.xb(this.element, this, 172777);
        this.C.V(this.api, "presentingplayerstatechange", this.Sa);
        this.C.V(this.api, "videodatachange", this.Sa);
        this.hide()
    }
      , h6 = function(a) {
        g.U.call(this, {
            I: "div",
            Na: ["ytp-player-content", "ytp-iv-player-content"],
            X: [{
                I: "div",
                T: "ytp-countdown-timer",
                X: [{
                    I: "svg",
                    Y: {
                        height: "100%",
                        version: "1.1",
                        viewBox: "0 0 72 72",
                        width: "100%"
                    },
                    X: [{
                        I: "circle",
                        T: "ytp-svg-countdown-timer-ring",
                        Y: {
                            cx: "-36",
                            cy: "36",
                            "fill-opacity": "0",
                            r: "33.5",
                            stroke: "#FFFFFF",
                            "stroke-dasharray": "211",
                            "stroke-dashoffset": "-211",
                            "stroke-width": "4",
                            transform: "rotate(-90)"
                        }
                    }, {
                        I: "circle",
                        T: "ytp-svg-countdown-timer-background",
                        Y: {
                            cx: "-36",
                            cy: "36",
                            "fill-opacity": "0",
                            r: "33.5",
                            stroke: "#FFFFFF",
                            "stroke-opacity": "0.3",
                            "stroke-width": "4",
                            transform: "rotate(-90)"
                        }
                    }]
                }, {
                    I: "span",
                    T: "ytp-countdown-timer-time",
                    Aa: "{{duration}}"
                }]
            }]
        });
        this.api = a;
        this.K = this.Ha("ytp-svg-countdown-timer-ring");
        this.j = null;
        this.D = this.C = 0;
        this.B = !1;
        this.G = 0;
        this.api.xb(this.element, this, 159628)
    }
      , Mmb = function(a) {
        a.j || (a.C = 5E3,
        a.D = (0,
        g.cE)(),
        a.j = new g.St(function() {
            Lmb(a)
        }
        ,null),
        Lmb(a))
    }
      , Lmb = function(a) {
        if (!a.B) {
            var b = Math.min((0,
            g.cE)() - a.D, a.C);
            var c = a.C - b;
            b = 0 === a.C ? 0 : Math.max(c / a.C, 0);
            c = Math.round(c / 1E3);
            a.K.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
            a.updateValue("duration", c);
            0 >= b && a.j ? i6(a) : a.j && a.j.start()
        }
    }
      , i6 = function(a) {
        a.j && (a.j.dispose(),
        a.j = null,
        a.B = !1)
    }
      , Omb = function(a) {
        g.IV.call(this, a);
        this.J = a;
        this.j = new g.lL(this);
        this.B = null;
        this.S = !1;
        this.countdownTimer = null;
        this.ea = !1;
        Nmb(this);
        g.L(this, this.j);
        this.load()
    }
      , Qmb = function(a) {
        var b = g.Hbb(a.J);
        b !== a.ea && (a.ea = b,
        a.G && (a.G.dispose(),
        a.G = null),
        a.C && (a.C.dispose(),
        a.C = null),
        a.D && (a.D.dispose(),
        a.D = null),
        a.B && (a.B.stop(),
        a.B.dispose(),
        a.B = null),
        b && (b = g.qU(a.J),
        g.FU(a.J) && (a.D = new g.U({
            I: "div",
            T: "ytp-pause-overlay-backdrop",
            Y: {
                tabIndex: "-1"
            }
        }),
        g.L(a, a.D),
        g.IU(a.J, a.D.element, 4),
        a.B = new g.hH(a.D,1E3,!1,100),
        g.L(a, a.B),
        a.D.hide()),
        a.G = new g.U({
            I: "div",
            T: "ytp-pause-overlay-container",
            Y: {
                tabIndex: "-1"
            }
        }),
        g.L(a, a.G),
        a.J.N("embeds_web_enable_keto_pause_overlay") ? Zlb(a.G.element, X5(xmb, {
            J: a.J,
            ub: b
        })) : (a.C = new g6(a.J,b),
        g.L(a, a.C),
        a.C.Ga(a.G.element)),
        g.IU(a.J, a.G.element, 4),
        Pmb(a, a.J.Tb())))
    }
      , Pmb = function(a, b) {
        a.B && (!g.nH(b, 4) && !g.nH(b, 2) || g.nH(b, 1024) ? a.B.hide() : a.B.show())
    }
      , Nmb = function(a) {
        var b = a.J;
        a = !!g.FU(b);
        g.fu(b.getRootNode(), "ytp-shorts-mode", a);
        if (b = b.getVideoData())
            b.TT = a
    }
      , j6 = function(a, b) {
        a = {
            adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
            breakType: 0 === a.J.getCurrentTime() ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : 0 === a.J.getPlayerState() ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
            embedUrl: g.Pea(a.J.W().loaderUrl),
            eventType: b,
            youtubeHost: g.sl(a.J.W().Ia) || ""
        };
        g.OD("embedsAdEvent", a)
    };
    var w5 = {
        wdb: function() {},
        xdb: function() {},
        ofb: function() {},
        Adb: function() {},
        xU: function() {},
        ydb: function() {},
        n4: function() {},
        KG: function() {},
        LG: function() {},
        dV: function(a) {
            a.gU = !0
        },
        o4: function() {}
    };
    var glb = Object.prototype.hasOwnProperty;
    dlb.prototype = Object.create(null);
    var amb = y5();
    var L5 = null;
    var plb = "undefined" !== typeof Node && Node.prototype.getRootNode || function() {
        for (var a = this, b = a; a; )
            b = a,
            a = a.parentNode;
        return b
    }
    ;
    var D5 = null
      , F5 = null
      , B5 = null
      , I5 = null
      , J5 = []
      , H5 = mlb
      , K5 = []
      , G5 = !1
      , Ylb = function(a) {
        return qlb(function(b, c, d) {
            B5 = F5 = b;
            F5 = null;
            c(d);
            null != a && a.pfb || (E5(null),
            F5 = B5,
            B5 = B5.parentNode);
            return b
        }, a)
    }()
      , Xlb = function(a) {
        return qlb(function(b, c, d) {
            var e = {
                nextSibling: b
            };
            F5 = e;
            c(d);
            B5 && E5(b.nextSibling);
            return e === F5 ? null : F5
        }, a)
    }();
    var M5 = []
      , bmb = 0;
    var U5 = new dlb;
    var N5 = {
        QG: !1,
        attributes: y5(),
        kD: function(a, b) {
            throw b;
        },
        XY: function() {
            throw Error("renderComponent not implemented");
        },
        Teb: function() {
            return !1
        },
        j$: function(a) {
            if (N5.QG)
                return a
        },
        x4: g.Ubb
    }
      , ulb = [];
    var Q5, P5, R5 = null;
    var Tlb = new Set("allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(" "));
    var Mlb = {
        align: 1,
        alt: 1,
        "aria-activedescendant": 10,
        "aria-atomic": 1,
        "aria-autocomplete": 1,
        "aria-busy": 1,
        "aria-checked": 1,
        "aria-controls": 10,
        "aria-current": 1,
        "aria-disabled": 1,
        "aria-dropeffect": 1,
        "aria-expanded": 1,
        "aria-haspopup": 1,
        "aria-hidden": 1,
        "aria-invalid": 1,
        "aria-label": 1,
        "aria-labelledby": 10,
        "aria-level": 1,
        "aria-live": 1,
        "aria-multiline": 1,
        "aria-multiselectable": 1,
        "aria-orientation": 1,
        "aria-owns": 10,
        "aria-posinset": 1,
        "aria-pressed": 1,
        "aria-readonly": 1,
        "aria-relevant": 1,
        "aria-required": 1,
        "aria-selected": 1,
        "aria-setsize": 1,
        "aria-sort": 1,
        "aria-valuemax": 1,
        "aria-valuemin": 1,
        "aria-valuenow": 1,
        "aria-valuetext": 1,
        async: 8,
        autocapitalize: 1,
        autocomplete: 1,
        autocorrect: 1,
        autofocus: 1,
        autoplay: 1,
        bgcolor: 1,
        border: 1,
        cellpadding: 1,
        cellspacing: 1,
        checked: 1,
        cite: 3,
        "class": 1,
        color: 1,
        cols: 1,
        colspan: 1,
        contenteditable: 1,
        controls: 1,
        datetime: 1,
        dir: 8,
        disabled: 1,
        download: 1,
        draggable: 1,
        enctype: 1,
        face: 1,
        "for": 10,
        formenctype: 1,
        frameborder: 1,
        height: 1,
        hidden: 1,
        href: 4,
        hreflang: 1,
        id: 10,
        ismap: 1,
        itemid: 1,
        itemprop: 1,
        itemref: 1,
        itemscope: 1,
        itemtype: 1,
        label: 1,
        lang: 1,
        list: 10,
        loading: 8,
        loop: 1,
        max: 1,
        maxlength: 1,
        media: 1,
        min: 1,
        minlength: 1,
        multiple: 1,
        muted: 1,
        name: 10,
        nonce: 1,
        open: 1,
        placeholder: 1,
        poster: 3,
        preload: 1,
        rel: 1,
        required: 1,
        reversed: 1,
        role: 1,
        rows: 1,
        rowspan: 1,
        selected: 1,
        shape: 1,
        size: 1,
        sizes: 1,
        slot: 1,
        span: 1,
        spellcheck: 1,
        src: 4,
        srcset: 11,
        start: 1,
        step: 1,
        style: 5,
        summary: 1,
        tabindex: 1,
        target: 8,
        title: 1,
        translate: 1,
        type: 1,
        valign: 1,
        value: 1,
        width: 1,
        wrap: 1
    }
      , Llb = {
        a: {
            href: [{
                Ed: 3
            }]
        },
        area: {
            href: [{
                Ed: 3
            }]
        },
        audio: {
            src: [{
                Ed: 3
            }]
        },
        button: {
            formaction: [{
                Ed: 3
            }],
            formmethod: [{
                Ed: 1
            }]
        },
        form: {
            action: [{
                Ed: 3
            }],
            method: [{
                Ed: 1
            }]
        },
        iframe: {
            srcdoc: [{
                Ed: 2
            }]
        },
        img: {
            src: [{
                Ed: 3
            }]
        },
        input: {
            accept: [{
                Ed: 1
            }],
            formaction: [{
                Ed: 3
            }],
            formmethod: [{
                Ed: 1
            }],
            pattern: [{
                Ed: 1
            }],
            readonly: [{
                Ed: 1
            }],
            src: [{
                Ed: 3
            }]
        },
        link: {
            href: [{
                Ed: 3,
                Zh: "rel",
                Ci: "alternate"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "author"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "bookmark"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "canonical"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "cite"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "help"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "icon"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "license"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "next"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "prefetch"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "dns-prefetch"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "prerender"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "preconnect"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "preload"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "prev"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "search"
            }, {
                Ed: 3,
                Zh: "rel",
                Ci: "subresource"
            }]
        },
        script: {
            defer: [{
                Ed: 1
            }]
        },
        source: {
            src: [{
                Ed: 3
            }]
        },
        textarea: {
            readonly: [{
                Ed: 1
            }]
        },
        video: {
            src: [{
                Ed: 3
            }]
        }
    };
    g.Tu.getInstance();
    S5.prototype.toString = function() {
        return this.PW
    }
    ;
    var Rmb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i
      , k6 = {}
      , Olb = (k6[1] = {
        wq: null,
        Ft: null,
        Wr: null
    },
    k6[2] = {
        wq: function() {
            return g.ie.toString()
        },
        Ft: function(a) {
            return a instanceof g.je
        },
        Wr: function(a) {
            return g.ke(a)
        }
    },
    k6[3] = {
        wq: function(a, b, c) {
            return Rmb.test(c) ? c : g.ie.toString()
        },
        Ft: function(a) {
            return a instanceof g.$d
        },
        Wr: function(a) {
            return g.ae(a)
        }
    },
    k6[4] = {
        wq: function() {
            return g.ie.toString()
        },
        Ft: function(a) {
            return a instanceof g.Xd
        },
        Wr: function(a) {
            return g.Yd(a)
        }
    },
    k6[5] = {
        wq: null,
        Ft: null,
        Wr: null
    },
    k6[7] = {
        wq: null,
        Ft: null,
        Wr: null
    },
    k6[8] = {
        wq: null,
        Ft: null,
        Wr: null
    },
    k6[10] = {
        wq: null,
        Ft: function(a) {
            return a instanceof S5 || a instanceof g.Qd
        },
        Wr: function(a) {
            if (a instanceof g.Qd)
                a = g.Rd(a);
            else {
                if (!(a instanceof S5 && a.constructor === S5))
                    throw Error("Unwrap non-TrustedId");
                a = a.PW
            }
            return a
        }
    },
    k6);
    var Smb = y5()
      , Ulb = Smb.__default
      , Vlb = Smb.style;
    var $lb = Symbol("ATTR_TAG_VALUE");
    var Tmb = {};
    vlb({
        attributes: (Tmb.__default = function() {
            return Qlb
        }
        ,
        Tmb.style = function() {
            return Qlb
        }
        ,
        Tmb)
    });
    V5.prototype.KG = function() {}
    ;
    V5.prototype.n4 = function() {}
    ;
    V5.prototype.LG = function() {}
    ;
    V5.prototype.o4 = function() {}
    ;
    var Y5 = null;
    g.v(dmb, V5);
    dmb.prototype.FA = function(a) {
        var b = this
          , c = Y5;
        Y5 = this;
        this.C = 0;
        try {
            return Ilb(this.G, function() {
                return b.K(a)
            })
        } finally {
            g.Vbb ? Y5 = c : Y5 = null
        }
    }
    ;
    var fmb = [];
    var Umb = y5();
    N5.XY = function(a) {
        try {
            var b = a.type
              , c = b.ZB;
            if (wlb(b) || N5.QG) {
                0 < a.children.length && (a.props.children = a.children);
                if (N5.QG) {
                    var d;
                    (d = a.props).idomKey || (d.idomKey = N5.j$(b))
                }
                d = !1;
                if (c) {
                    var e = olb(c, a.props.idomKey);
                    a.gq = !0;
                    var f = e.__instance
                }
                if (!f) {
                    d = !0;
                    var h = a.props;
                    if (wlb(b))
                        var l = new b(h);
                    else
                        l = new dmb(h),
                        l.K = b;
                    l.j = b;
                    l.BL = {
                        WO: l.state,
                        fO: !1
                    };
                    f = l;
                    f.props = null;
                    e && (e.__instance = f,
                    f.el = e)
                }
                var m, n = null != (m = f.BL) ? m : {
                    WO: f.state,
                    fO: !1
                }, p = n.fO, q = n.WO;
                f.BL = void 0;
                b.W4 && (q = b.W4(a.props, q));
                c = !d && !p && !1;
                f.props = a.props;
                f.state = q;
                if (c)
                    F5 = B5.lastChild;
                else {
                    w5.xU(f);
                    var r = f.FA(f.props);
                    if (f.gy) {
                        if (r.props.el && r.props.el !== f.gy)
                            throw Error("Tried to place reference on an element already referenced with useRootElement");
                        r.props.el = f.gy
                    }
                    if (r) {
                        f.props.idomKey && (r.props.idomKey = f.props.idomKey);
                        r.gq = a.gq;
                        var t = T5(r);
                        a.gq = r.gq;
                        if (!b.ZB)
                            if (t)
                                b.ZB = t.tagName.toLowerCase(),
                                t.__instance = f,
                                f.el = t;
                            else {
                                var w;
                                if (null == (w = f.pz) ? 0 : w.length) {
                                    var y;
                                    null == (y = N5.kD) || y.call(N5, "unknown", Error("A component used hooks, but failed to return a host element"))
                                }
                            }
                    }
                    f.KG();
                    w5.KG(f)
                }
            } else
                T5(b(a.props))
        } catch (G) {
            b = G;
            var C, H;
            null == (H = N5.kD) || H.call(N5, null == (C = a.type) ? void 0 : C.ZB, b)
        }
        a.gq && (E5(null),
        F5 = B5,
        B5 = B5.parentNode,
        a.gq = !1)
    }
    ;
    N5.QG = !0;
    N5.attributes = Umb;
    for (var Vmb = g.u(ulb), Wmb = Vmb.next(); !Wmb.done; Wmb = Vmb.next()) {
        var Xmb = Wmb.value;
        Xmb.attributes && tlb(Xmb.attributes)
    }
    (function() {
        var a = L5;
        L5 = function(b) {
            null == a || a(b);
            gmb(b)
        }
    }
    )();
    var W5 = alb;
    var kmb = "Hook called out of order. Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook."
      , jmb = "A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function  directly";
    vlb({
        WY: {
            xU: function(a) {
                var b;
                (null == (b = a.iy) ? 0 : b.length) && pmb(a.iy)
            },
            KG: function(a) {
                var b;
                (null == (b = a.iy) ? 0 : b.length) && pmb(a.iy)
            },
            LG: function(a) {
                var b;
                (null == (b = a.pz) ? 0 : b.length) && a.pz.forEach(omb)
            },
            dV: function(a) {
                var b;
                (null == (b = a.XF) ? 0 : b.length) && pmb(a.XF)
            }
        }
    });
    g.v(ymb, g.U);
    g.k = ymb.prototype;
    g.k.hide = function() {
        this.S = !0;
        g.U.prototype.hide.call(this);
        zmb(this, !1)
    }
    ;
    g.k.show = function() {
        this.S = !1;
        g.U.prototype.show.call(this);
        zmb(this, !0)
    }
    ;
    g.k.isHidden = function() {
        return this.S
    }
    ;
    g.k.F0 = function() {
        this.scrollTo(this.C - this.containerWidth)
    }
    ;
    g.k.G0 = function() {
        this.scrollTo(this.C + this.containerWidth)
    }
    ;
    g.k.resize = function(a, b) {
        var c = this.api.W()
          , d = 16 / 9
          , e = 650 <= a.width
          , f = 480 > a.width || 290 > a.height
          , h = Math.min(this.suggestionData.length, this.j.length);
        if (150 >= Math.min(a.width, a.height) || 0 === h || !c.Td)
            this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.B = 16
            } else
                this.B = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else
                n = 8,
                e = 18,
                p = 16,
                f = 36,
                c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            m = a / l - this.B;
            var q = Math.floor(m / d);
            b && q + 100 > b && 50 < m && (q = Math.max(b, 50 / d),
            l = Math.ceil(a / (d * (q - 100) + this.B)),
            m = a / l - this.B,
            q = Math.floor(m / d));
            50 > m || g.EU(this.api) ? this.hide() : this.show();
            for (b = 0; b < h; b++) {
                d = this.j[b];
                var r = d.Ha("ytp-suggestion-image");
                r.style.width = m + "px";
                r.style.height = q + "px";
                d.Ha("ytp-suggestion-title").style.width = m + "px";
                d.Ha("ytp-suggestion-author").style.width = m + "px";
                d = d.Ha("ytp-suggestion-duration");
                d.style.display = d && 100 > m ? "none" : ""
            }
            h = e + n + p + 4;
            this.K = h + c + (q - f) / 2;
            this.suggestions.element.style.height = q + h + "px";
            this.D = m;
            this.containerWidth = a;
            this.columns = l;
            this.C = 0;
            this.suggestions.element.scrollLeft = -0;
            Amb(this)
        }
    }
    ;
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData()
          , b = this.api.W();
        this.ea = a.Qd ? !1 : b.D;
        a.suggestions ? this.suggestionData = g.ks(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        Bmb(this);
        a.Qd ? this.title.update({
            title: g.IK("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    }
    ;
    g.k.scrollTo = function(a) {
        a = g.ne(a, this.containerWidth - this.suggestionData.length * (this.D + this.B), 0);
        this.qa.start(this.C, a, 1E3);
        this.C = a;
        Amb(this);
        zmb(this, !0)
    }
    ;
    g.v(b6, g.dW);
    b6.prototype.show = function() {
        g.dW.prototype.show.call(this);
        Dmb(this, this.api.rb().getPlayerSize())
    }
    ;
    b6.prototype.resize = function(a) {
        g.dW.prototype.resize.call(this, a);
        this.j && (Dmb(this, a),
        g.fu(this.element, "related-on-error-overlay-visible", !this.j.isHidden()))
    }
    ;
    b6.prototype.B = function(a) {
        g.dW.prototype.B.call(this, a);
        var b = this.api.getVideoData();
        if (b.XB || b.playerErrorMessageRenderer)
            (a = b.XB) ? Gmb(this, a) : b.playerErrorMessageRenderer && Gmb(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.Sm && (b.Rx ? Emb(b.Rx) ? c = g.KG(b.Rx) : c = g.eW(g.JG(b.Rx)) : c = g.eW(a.Sm),
            this.pe(c, "subreason"))
        }
    }
    ;
    g.v(c6, g.U);
    c6.prototype.Vi = function() {
        this.api.Tb().isCued() || (this.hide(),
        this.api.Xa(this.element, !1))
    }
    ;
    c6.prototype.j = function() {
        var a = this.api.getVideoData()
          , b = this.api.W()
          , c = this.api.getVideoData().Qd
          , d = b.Ud
          , e = !b.Td
          , f = this.ub.wg()
          , h = g.xS(b);
        b = b.C;
        d || f || c || e || h || b || g.FU(this.api) || !a.videoId ? (this.hide(),
        this.api.Xa(this.element, !1)) : (a = Hmb(this),
        this.updateValue("url", a),
        this.show())
    }
    ;
    c6.prototype.onClick = function(a) {
        this.api.N("web_player_log_click_before_generating_ve_conversion_params") && this.api.wb(this.element);
        var b = Hmb(this);
        g.aV(b, this.api, a);
        this.api.N("web_player_log_click_before_generating_ve_conversion_params") || this.api.wb(this.element)
    }
    ;
    c6.prototype.show = function() {
        this.api.Tb().isCued() && (g.U.prototype.show.call(this),
        this.api.Uj(this.element) && this.api.Xa(this.element, !0))
    }
    ;
    g.v(d6, g.U);
    d6.prototype.Vi = function() {
        var a = this.api.Tb();
        !this.api.Oh() || g.nH(a, 2) && g.BU(this.api) || g.nH(a, 64) ? (this.api.Xa(this.j, !1),
        this.api.Xa(this.forwardButton, !1),
        this.hide()) : (this.show(),
        this.api.Xa(this.j, !0),
        this.api.Xa(this.forwardButton, !0))
    }
    ;
    d6.prototype.B = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate());
        this.api.wb(this.j)
    }
    ;
    d6.prototype.C = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate());
        this.api.wb(this.forwardButton)
    }
    ;
    g.v(e6, g.U);
    e6.prototype.C = function() {
        var a = this.api.Tb()
          , b = this.api.getVideoData();
        this.api.W().N("embeds_enable_muted_autoplay") && b.mutedAutoplay && (g.nH(a, 2) && !this.Ib ? (this.show(),
        this.j || (this.j = new g.bW(this.api),
        g.L(this, this.j),
        this.j.Ga(this.D, 0),
        this.j.show()),
        a = this.api.getVideoData(),
        this.updateValue("text", a.UR),
        g.fu(this.element, "ytp-muted-autoplay-show-end-panel", !0),
        this.api.Xa(this.element, this.Ib),
        this.api.Ua("onMutedAutoplayEnds")) : this.hide())
    }
    ;
    e6.prototype.onClick = function() {
        if (!this.B) {
            this.j && (this.j.Ba(),
            this.j = null);
            g.fu(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData()
              , b = this.api.getCurrentTime();
            Zkb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.Rz();
            this.api.wb(this.element);
            this.hide();
            this.B = !0
        }
    }
    ;
    e6.prototype.onMutedAutoplayStarts = function() {
        this.B = !1;
        this.j && (this.j.Ba(),
        this.j = null)
    }
    ;
    g.v(f6, g.U);
    g.k = f6.prototype;
    g.k.w_ = function() {
        var a = this.api.getVideoData()
          , b = this.api.getVideoData(1).Qd
          , c = this.api.W();
        b = c.Ud && !g.nH(this.state, 2) && !(b && c.qa);
        a.mutedAutoplay || g.FG(this, b);
        this.api.Xa(this.element, b)
    }
    ;
    g.k.onStateChange = function(a) {
        this.Fc(a.state)
    }
    ;
    g.k.Fc = function(a) {
        this.state !== a && (this.state = a);
        this.w_()
    }
    ;
    g.k.onVideoDataChange = function() {
        var a = this.api.W();
        a.C && g.bu(this.element, "ytp-no-hover");
        this.api.getVideoData().videoId && !a.C ? (a = this.api.getVideoUrl(!0, !1, !1, !0),
        this.updateValue("url", a),
        this.j || (this.j = this.Ta("click", this.onClick))) : this.j && (this.updateValue("url", null),
        this.Qc(this.j),
        this.j = null)
    }
    ;
    g.k.onClick = function(a) {
        this.api.N("web_player_log_click_before_generating_ve_conversion_params") && this.api.wb(this.element);
        var b = this.api.getVideoUrl(!g.xH(a), !1, !0, !0);
        if (this.api.N("web_player_log_click_before_generating_ve_conversion_params")) {
            var c = {};
            g.oU(this.api, "addEmbedsConversionTrackingParams", [c]);
            b = g.yl(b, g.QP(c, "emb_yt_watermark"))
        }
        g.aV(b, this.api, a);
        this.api.N("web_player_log_click_before_generating_ve_conversion_params") || this.api.wb(this.element)
    }
    ;
    g.k.Nb = function(a) {
        if ((a = 480 > a.width) && !this.B || !a && this.B) {
            var b = new g.U($kb())
              , c = this.Ha("ytp-watermark");
            g.fu(c, "ytp-watermark-small", a);
            g.of(c);
            b.Ga(c);
            this.B = a
        }
    }
    ;
    g.v(Kmb, g.U);
    g.k = Kmb.prototype;
    g.k.BK = function() {
        var a = this.api.Tb()
          , b = this.api.getVideoData();
        this.api.W().N("embeds_enable_muted_autoplay") && b.mutedAutoplay && !g.nH(a, 2) ? this.Ib || (g.U.prototype.show.call(this),
        this.api.Xa(this.element, this.Ib)) : this.hide()
    }
    ;
    g.k.P5 = function() {
        this.j && this.j.hide()
    }
    ;
    g.k.onAutoplayBlocked = function() {
        this.hide();
        Zkb(this.api.getVideoData())
    }
    ;
    g.k.onClick = function() {
        if (!this.B) {
            g.fu(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData()
              , b = this.api.getCurrentTime();
            Zkb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.Rz();
            this.api.wb(this.element);
            this.api.Ua("onMutedAutoplayEnds");
            this.B = !0
        }
    }
    ;
    g.k.onMutedAutoplayEnds = function() {
        this.watermark && (this.watermark.Ba(),
        this.watermark = null)
    }
    ;
    g.v(g6, g.U);
    g6.prototype.hide = function() {
        g.du(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.U.prototype.hide.call(this)
    }
    ;
    g6.prototype.G = function() {
        this.B = !0;
        g.du(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.FU(this.api) && this.api.Xa(this.element, !1);
        this.expandButton.focus()
    }
    ;
    g6.prototype.K = function() {
        this.B = !1;
        g.bu(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.FU(this.api) && this.api.Xa(this.element, !0);
        this.focus()
    }
    ;
    g6.prototype.Sa = function(a) {
        a = this.api.W().N("embeds_web_enable_pause_overlay_wn_update") ? this.api.Tb() : a.state;
        g.nH(a, 1) || g.nH(a, 16) || g.nH(a, 32) || (!g.nH(a, 4) || g.nH(a, 2) || g.nH(a, 1024) ? (this.B || this.api.Xa(this.element, !1),
        this.D.hide()) : this.j.oD() && (this.B || (g.bu(this.api.getRootNode(), "ytp-expand-pause-overlay"),
        g.A2(this.j),
        this.j.show(),
        this.api.Xa(this.element, !0)),
        this.D.show()))
    }
    ;
    g.v(h6, g.U);
    h6.prototype.show = function() {
        g.U.prototype.show.call(this);
        this.api.Xa(this.element, !0)
    }
    ;
    h6.prototype.Ba = function() {
        i6(this);
        g.U.prototype.Ba.call(this)
    }
    ;
    g.v(Omb, g.IV);
    g.k = Omb.prototype;
    g.k.vl = function() {
        return !1
    }
    ;
    g.k.create = function() {
        var a = this.J.W(), b = g.qU(this.J), c, d = null == (c = this.J.getVideoData()) ? void 0 : c.clientPlaybackNonce;
        d && g.uI({
            clientPlaybackNonce: d
        });
        Qmb(this);
        a.N("embeds_enable_muted_autoplay") && (this.ma = new Kmb(this.J),
        g.L(this, this.ma),
        g.IU(this.J, this.ma.element, 4),
        this.va = new e6(this.J),
        g.L(this, this.va),
        g.IU(this.J, this.va.element, 4));
        a.Ud && (this.watermark = new f6(this.J),
        g.L(this, this.watermark),
        g.IU(this.J, this.watermark.element, 8));
        this.K = new c6(this.J,b);
        g.L(this, this.K);
        g.IU(this.J, this.K.element, 8);
        g.uU(this.J.app) && (this.onMutedAutoplayStarts(),
        this.K.hide());
        a.B && (this.qa = new d6(this.J),
        g.L(this, this.qa),
        g.IU(this.J, this.qa.element, 4));
        this.j.V(this.J, "appresize", this.Nb);
        this.j.V(this.J, "presentingplayerstatechange", this.Vi);
        this.j.V(this.J, "videodatachange", this.onVideoDataChange);
        this.j.V(this.J, "videoplayerreset", this.ww);
        this.j.V(this.J, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.j.V(this.J, "onAdStart", this.onAdStart);
        this.j.V(this.J, "onAdComplete", this.onAdComplete);
        this.j.V(this.J, "onAdSkip", this.onAdSkip);
        this.j.V(this.J, "onAdStateChange", this.onAdStateChange);
        if (this.S = g.cD(g.yS(a)))
            this.countdownTimer = new h6(this.J),
            g.L(this, this.countdownTimer),
            g.IU(this.J, this.countdownTimer.element, 4),
            this.countdownTimer.hide(),
            this.j.V(this.J, g.CK("embeds"), this.onCueRangeEnter),
            this.j.V(this.J, g.DK("embeds"), this.onCueRangeExit);
        this.Ac(this.J.Tb());
        this.player.Dg("embed")
    }
    ;
    g.k.onCueRangeEnter = function(a) {
        "countdown timer" === a.getId() && this.countdownTimer && (this.countdownTimer.show(),
        Mmb(this.countdownTimer))
    }
    ;
    g.k.onCueRangeExit = function(a) {
        "countdown timer" === a.getId() && this.countdownTimer && (i6(this.countdownTimer),
        this.countdownTimer.hide())
    }
    ;
    g.k.Nb = function() {
        var a = this.J.rb().getPlayerSize();
        this.Ig && this.Ig.resize(a)
    }
    ;
    g.k.ww = function() {
        Nmb(this)
    }
    ;
    g.k.Vi = function(a) {
        this.Ac(a.state)
    }
    ;
    g.k.Ac = function(a) {
        g.nH(a, 128) ? (this.Ig || (this.Ig = new b6(this.J),
        g.L(this, this.Ig),
        g.IU(this.J, this.Ig.element, 4)),
        this.Ig.B(a.Ah),
        this.Ig.show(),
        g.bu(this.J.getRootNode(), "ytp-embed-error")) : this.Ig && (this.Ig.dispose(),
        this.Ig = null,
        g.du(this.J.getRootNode(), "ytp-embed-error"));
        if (this.countdownTimer && this.countdownTimer.j)
            if (g.nH(a, 64))
                this.countdownTimer.hide(),
                i6(this.countdownTimer);
            else if (a.isPaused()) {
                var b = this.countdownTimer;
                b.B || (b.B = !0,
                b.G = (0,
                g.cE)())
            } else
                a.isPlaying() && this.countdownTimer.B && (b = this.countdownTimer,
                b.B && (b.D += (0,
                g.cE)() - b.G,
                b.B = !1,
                Lmb(b)));
        Pmb(this, a)
    }
    ;
    g.k.onMutedAutoplayStarts = function() {
        this.J.getVideoData().mutedAutoplay && this.ma && g.fu(this.J.getRootNode(), "ytp-muted-autoplay", !0)
    }
    ;
    g.k.onVideoDataChange = function(a, b) {
        var c = this.HD !== b.videoId;
        a = !c && "dataloaded" === a;
        var d = {
            isShortsModeEnabled: !!g.FU(this.J)
        };
        g.OD("embedsVideoDataDidChange", {
            clientPlaybackNonce: b.clientPlaybackNonce,
            isReload: a,
            runtimeEnabledFeatures: d
        });
        c && (this.HD = b.videoId,
        this.countdownTimer && (this.countdownTimer.show(),
        this.countdownTimer.hide()),
        this.S && (this.J.lf("embeds"),
        b.isAd() || 5 > b.limitedPlaybackDurationInSeconds || g.EU(this.J) || (b = Math.max(1E3 * (b.startSeconds + b.limitedPlaybackDurationInSeconds - 5), 0),
        b = new g.BK(b,b + 5E3,{
            id: "countdown timer",
            namespace: "embeds"
        }),
        this.J.xf([b]))),
        Nmb(this),
        Qmb(this));
        this.J.W().C && this.C && this.C.detach()
    }
    ;
    g.k.onAdStart = function() {
        j6(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    }
    ;
    g.k.onAdComplete = function() {
        j6(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    }
    ;
    g.k.onAdSkip = function() {
        j6(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    }
    ;
    g.k.onAdStateChange = function(a) {
        2 === a && j6(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    }
    ;
    g.HV("embed", Omb);
}
)(_yt_player);
