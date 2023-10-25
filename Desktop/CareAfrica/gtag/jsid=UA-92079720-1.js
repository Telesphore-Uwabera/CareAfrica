// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__c",
                "vtp_value": "undefined"
            }],
            "tags": [{
                "function": "__rep",
                "vtp_containerId": "UA-92079720-1",
                "vtp_remoteConfig": ["map"],
                "tag_id": 1
            }, {
                "function": "__zone",
                "vtp_childContainers": ["list", ["map", "publicId", "G-VE49F7WSTE"]],
                "vtp_enableConfiguration": false,
                "tag_id": 3
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [[["if", 0], ["add", 0, 1]]]
        },
        "runtime": []

    };

    var ca, da = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ea = function(a) {
        return a.raw = a
    }, fa = function(a, b) {
        a.raw = b;
        return a
    }, ha = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: da(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }, ia = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ja;
    if ("function" == typeof Object.setPrototypeOf)
        ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                a: !0
            }
              , ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var oa = ja
      , pa = function(a, b) {
        a.prototype = ia(b.prototype);
        a.prototype.constructor = a;
        if (oa)
            oa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.xm = b.prototype
    };
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var qa = this || self
      , ra = function(a) {
        return a
    };
    var sa = function() {}
      , ta = function(a) {
        return "function" === typeof a
    }
      , g = function(a) {
        return "string" === typeof a
    }
      , ua = function(a) {
        return "number" === typeof a && !isNaN(a)
    }
      , va = Array.isArray
      , xa = function(a, b) {
        if (a && va(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , ya = function(a, b) {
        if (!ua(a) || !ua(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , Ba = function(a, b) {
        for (var c = new Aa, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , k = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Ca = function(a) {
        return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , Da = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Ea = function(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }
      , Fa = function(a) {
        var b = [];
        if (va(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Ga = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Ia = function() {
        return new Date(Date.now())
    }
      , Ja = function() {
        return Ia().getTime()
    }
      , Aa = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    Aa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    Aa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Ka = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , La = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , Ma = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Oa = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , Pa = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , Qa = function(a, b) {
        return a.substring(0, b.length) === b
    }
      , Ra = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , Sa = /^\w{1,9}$/
      , Ta = function(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        k(a, function(d, e) {
            Sa.test(d) && e && c.push(d)
        });
        return c.join(b)
    }
      , Ua = function(a, b) {
        function c() {
            ++d === b && (e(),
            e = null,
            c.done = !0)
        }
        var d = 0
          , e = a;
        c.done = !1;
        return c
    };
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Va = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , Wa = function(a) {
        if (null == a)
            return String(a);
        var b = Va.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , Xa = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , Ya = function(a) {
        if (!a || "object" != Wa(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !Xa(a, "constructor") && !Xa(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || Xa(a, b)
    }
      , z = function(a, b) {
        var c = b || ("array" == Wa(a) ? [] : {}), d;
        for (d in a)
            if (Xa(a, d)) {
                var e = a[d];
                "array" == Wa(e) ? ("array" != Wa(c[d]) && (c[d] = []),
                c[d] = z(e, c[d])) : Ya(e) ? (Ya(c[d]) || (c[d] = {}),
                c[d] = z(e, c[d])) : c[d] = e
            }
        return c
    };
    var Za = function(a) {
        if (void 0 == a || va(a) || Ya(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    };
    function $a() {
        for (var a = ab, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function bb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var ab, cb;
    function db(a) {
        ab = ab || bb();
        cb = cb || $a();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length
              , e = c + 2 < a.length
              , f = a.charCodeAt(c)
              , h = d ? a.charCodeAt(c + 1) : 0
              , l = e ? a.charCodeAt(c + 2) : 0
              , m = f >> 2
              , n = (f & 3) << 4 | h >> 4
              , p = (h & 15) << 2 | l >> 6
              , q = l & 63;
            e || (q = 64,
            d || (p = 64));
            b.push(ab[m], ab[n], ab[p], ab[q])
        }
        return b.join("")
    }
    function eb(a) {
        function b(m) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = cb[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        ab = ab || bb();
        cb = cb || $a();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , h = b(64)
              , l = b(64);
            if (64 === l && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2),
            64 != l && (c += String.fromCharCode(h << 6 & 192 | l)))
        }
    }
    ;var fb = {}
      , gb = function(a, b) {
        fb[a] = fb[a] || [];
        fb[a][b] = !0
    }
      , hb = function() {
        delete fb.GA4_EVENT
    }
      , ib = function(a) {
        var b = fb[a];
        if (!b || 0 === b.length)
            return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++)
            0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)),
            d = 0),
            b[e] && (d |= 1 << e % 8);
        0 < d && c.push(String.fromCharCode(d));
        return db(c.join("")).replace(/\.+$/, "")
    };
    var jb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    var kb, lb = function() {
        if (void 0 === kb) {
            var a = null
              , b = qa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ra,
                        createScript: ra,
                        createScriptURL: ra
                    })
                } catch (c) {
                    qa.console && qa.console.error(c.message)
                }
                kb = a
            } else
                kb = a
        }
        return kb
    };
    var mb = function(a) {
        this.h = a
    };
    mb.prototype.toString = function() {
        return this.h + ""
    }
    ;
    var nb = {};
    var ob = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var pb, qb;
    a: {
        for (var rb = ["CLOSURE_FLAGS"], sb = qa, tb = 0; tb < rb.length; tb++)
            if (sb = sb[rb[tb]],
            null == sb) {
                qb = null;
                break a
            }
        qb = sb
    }
    var ub = qb && qb[610401301];
    pb = null != ub ? ub : !1;
    function vb() {
        var a = qa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    var wb, xb = qa.navigator;
    wb = xb ? xb.userAgentData || null : null;
    function yb(a) {
        return pb ? wb ? wb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }
    function zb(a) {
        return -1 != vb().indexOf(a)
    }
    ;function Ab() {
        return pb ? !!wb && 0 < wb.brands.length : !1
    }
    function Bb() {
        return Ab() ? !1 : zb("Opera")
    }
    function Cb() {
        return zb("Firefox") || zb("FxiOS")
    }
    function Db() {
        return Ab() ? yb("Chromium") : (zb("Chrome") || zb("CriOS")) && !(Ab() ? 0 : zb("Edge")) || zb("Silk")
    }
    ;var Eb = {}
      , Fb = function(a) {
        this.h = a
    };
    Fb.prototype.toString = function() {
        return this.h.toString()
    }
    ;
    var Gb = function(a) {
        return a instanceof Fb && a.constructor === Fb ? a.h : "type_error:SafeHtml"
    };
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    function Hb(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b)
            throw Error("");
    }
    ;var Ib = ea([""])
      , Jb = fa(["\x00"], ["\\0"])
      , Kb = fa(["\n"], ["\\n"])
      , Lb = fa(["\x00"], ["\\u0000"]);
    function Mb(a) {
        return -1 === a.toString().indexOf("`")
    }
    Mb(function(a) {
        return a(Ib)
    }) || Mb(function(a) {
        return a(Jb)
    }) || Mb(function(a) {
        return a(Kb)
    }) || Mb(function(a) {
        return a(Lb)
    });
    var Nb = "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")
      , Ob = [["dir", {
        Rb: 3,
        conditions: new Map([["dir", new Set(["auto", "ltr", "rtl"])]])
    }], ["async", {
        Rb: 3,
        conditions: new Map([["async", new Set(["async"])]])
    }], ["cite", {
        Rb: 2
    }], ["loading", {
        Rb: 3,
        conditions: new Map([["loading", new Set(["eager", "lazy"])]])
    }], ["poster", {
        Rb: 2
    }], ["target", {
        Rb: 3,
        conditions: new Map([["target", new Set(["_self", "_blank"])]])
    }]];
    Nb.concat(["class", "id"]);
    Ob.concat([["style", {
        Rb: 4
    }]]);
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ").concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "));
    Nb.concat(["class", "id", "tabindex", "contenteditable", "name"]);
    Ob.concat([["style", {
        Rb: 4
    }]]);
    function Pb(a) {
        var b = a = Qb(a)
          , c = lb()
          , d = c ? c.createHTML(b) : b;
        return new Fb(d,Eb)
    }
    function Qb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    }
    ;var C = window
      , E = document
      , Rb = navigator
      , Sb = E.currentScript && E.currentScript.src
      , Tb = function(a, b) {
        var c = C[a];
        C[a] = void 0 === c ? b : c;
        return C[a]
    }
      , Ub = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , Vb = {
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , Wb = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function Xb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Yb = function(a, b, c, d, e) {
        var f = E.createElement("script");
        void 0 === d && (d = {});
        void 0 === d.async && (d.async = !0);
        Xb(f, d, Vb);
        f.type = "text/javascript";
        var h, l = Qb(a), m = lb(), n = m ? m.createScriptURL(l) : l;
        h = new mb(n,nb);
        f.src = h instanceof mb && h.constructor === mb ? h.h : "type_error:TrustedResourceUrl";
        var p, q, r, t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
        (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
        Ub(f, b);
        c && (f.onerror = c);
        if (e)
            e.appendChild(f);
        else {
            var u = E.getElementsByTagName("script")[0] || E.body || E.head;
            u.parentNode.insertBefore(f, u)
        }
        return f
    }
      , Zb = function() {
        if (Sb) {
            var a = Sb.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , $b = function(a, b, c, d, e) {
        var f;
        f = void 0 === f ? !0 : f;
        var h = e
          , l = !1;
        h || (h = E.createElement("iframe"),
        l = !0);
        Xb(h, c, Wb);
        d && k(d, function(n, p) {
            h.dataset[n] = p
        });
        f && (h.height = "0",
        h.width = "0",
        h.style.display = "none",
        h.style.visibility = "hidden");
        if (l) {
            var m = E.body && E.body.lastChild || E.body || E.head;
            m.parentNode.insertBefore(h, m)
        }
        Ub(h, b);
        void 0 !== a && (h.src = a);
        return h
    }
      , ac = function(a, b, c, d) {
        var e = new Image(1,1);
        Xb(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        }
        ;
        e.onerror = function() {
            e.onerror = null;
            c && c()
        }
        ;
        e.src = a
    }
      , bc = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , cc = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , H = function(a) {
        C.setTimeout(a, 0)
    }
      , dc = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , ec = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , fc = function(a) {
        var b = E.createElement("div")
          , c = b
          , d = Pb("A<div>" + a + "</div>");
        1 === c.nodeType && Hb(c);
        c.innerHTML = Gb(d);
        b = b.lastChild;
        for (var e = []; b.firstChild; )
            e.push(b.removeChild(b.firstChild));
        return e
    }
      , gc = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, h = 0; f && h <= c; h++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , hc = function(a) {
        var b;
        try {
            b = Rb.sendBeacon && Rb.sendBeacon(a)
        } catch (c) {
            gb("TAGGING", 15)
        }
        b || ac(a)
    }
      , ic = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }
      , jc = function(a) {
        var b = {
            headers: {
                "Attribution-Reporting-Eligible": "trigger"
            },
            keepalive: !0,
            attributionReporting: {
                eventSourceEligible: !0,
                triggerEligible: !0
            }
        };
        try {
            C.fetch(a, b)
        } catch (c) {}
    }
      , kc = function() {
        var a = C.performance;
        if (a && ta(a.now))
            return a.now()
    }
      , lc = function() {
        return C.performance || void 0
    };
    function mc(a) {
        switch (a) {
        case 1:
            return "1";
        case 2:
        case 4:
            return "0";
        default:
            return "-"
        }
    }
    function nc(a) {
        switch (a) {
        case 1:
            return "G";
        case 3:
            return "g";
        case 2:
            return "D";
        case 4:
            return "d";
        case 0:
            return "g";
        default:
            return "g"
        }
    }
    function oc(a, b) {
        var c = a[1] || 0
          , d = a[2] || 0;
        switch (b) {
        case 0:
            return "G1" + mc(c) + mc(d);
        case 1:
            return "G2" + nc(c) + nc(d);
        default:
            return "g1--"
        }
    }
    ;var pc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Gi: a("consent"),
            wg: a("convert_case_to"),
            xg: a("convert_false_to"),
            yg: a("convert_null_to"),
            zg: a("convert_true_to"),
            Ag: a("convert_undefined_to"),
            Ul: a("debug_mode_metadata"),
            ia: a("function"),
            Ef: a("instance_name"),
            Mj: a("live_only"),
            Nj: a("malware_disabled"),
            Oj: a("metadata"),
            Rj: a("original_activity_id"),
            dm: a("original_vendor_template_id"),
            bm: a("once_on_load"),
            Qj: a("once_per_event"),
            Ch: a("once_per_load"),
            im: a("priority_override"),
            jm: a("respected_consent_types"),
            Gh: a("setup_tags"),
            rd: a("tag_id"),
            Lh: a("teardown_tags")
        }
    }();
    var Mc = []
      , Nc = function(a) {
        return void 0 == Mc[a] ? !1 : Mc[a]
    };
    var Oc;
    var Pc = [], Qc = [], Rc = [], Sc = [], Tc = [], Uc = {}, Vc, Wc, Xc = function(a) {
        Wc = Wc || a
    }, Yc = function(a) {}, Zc, $c = [], ad = function(a, b) {
        var c = a[pc.ia]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = Uc[c], f = b && 2 === b.type && d.lg && e && -1 !== $c.indexOf(c), h = {}, l = {}, m;
        for (m in a)
            a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.Qh && d.Qh(a[m]),
            e && (h[m] = a[m]),
            !e || f) && (l[m.substr(4)] = a[m]);
        e && d && d.Ph && (h.vtp_gtmCachedValues = d.Ph);
        if (b) {
            if (null == b.name) {
                var n;
                a: {
                    var p = b.index;
                    if (null == p)
                        n = "";
                    else {
                        var q;
                        switch (b.type) {
                        case 2:
                            q = Pc[p];
                            break;
                        case 1:
                            q = Sc[p];
                            break;
                        default:
                            n = "";
                            break a
                        }
                        var r = q && q[pc.Ef];
                        n = r ? String(r) : ""
                    }
                }
                b.name = n
            }
            e && (h.vtp_gtmEntityIndex = b.index,
            h.vtp_gtmEntityName = b.name)
        }
        var t, u;
        e && (t = e(h));
        if (!e || f)
            u = Oc(c, l, b);
        f && d && (Za(t) ? typeof t !== typeof u && d.lg(d.id, c) : t !== u && d.lg(d.id, c));
        return e ? t : u
    }, cd = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = bd(a[e], b, c));
        return d
    }, bd = function(a, b, c) {
        if (va(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(bd(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var h = Pc[f];
                if (!h || b.Vf(h))
                    return;
                c[f] = !0;
                var l = String(h[pc.Ef]);
                try {
                    var m = cd(h, b, c);
                    m.vtp_gtmEventId = b.id;
                    b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                    d = ad(m, {
                        event: b,
                        index: f,
                        type: 2,
                        name: l
                    });
                    Zc && (d = Zc.hk(d, m))
                } catch (y) {
                    b.bi && b.bi(y, Number(f), l),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var n = 1; n < a.length; n += 2)
                    d[bd(a[n], b, c)] = bd(a[n + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var p = !1, q = 1; q < a.length; q++) {
                    var r = bd(a[q], b, c);
                    Wc && (p = p || Wc.Sk(r));
                    d.push(r)
                }
                return Wc && p ? Wc.kk(d) : d.join("");
            case "escape":
                d = bd(a[1], b, c);
                if (Wc && va(a[1]) && "macro" === a[1][0] && Wc.Tk(a))
                    return Wc.vl(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    qc[a[t]] && (d = qc[a[t]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!Sc[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return d = {
                    Uh: a[2],
                    index: u
                };
            case "zb":
                var v = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                v[pc.ia] = a[1];
                var w = dd(v, b, c)
                  , x = !!a[4];
                return x || 2 !== w ? x !== (1 === w) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, dd = function(a, b, c) {
        try {
            return Vc(cd(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }, ed = function(a) {
        var b = a[pc.ia];
        if (!b)
            throw Error("Error: No function name given for function call.");
        return !!Uc[b]
    };
    var id = function(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++)
                d[r[t]] = !0
        }
        for (var c = [], d = [], e = gd(a), f = 0; f < Qc.length; f++) {
            var h = Qc[f]
              , l = hd(h, e);
            if (l) {
                for (var m = h.add || [], n = 0; n < m.length; n++)
                    c[m[n]] = !0;
                b(h.block || [])
            } else
                null === l && b(h.block || []);
        }
        for (var p = [], q = 0; q < Sc.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , hd = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null
        }
        for (var f = a.unless || [], h = 0; h < f.length; h++) {
            var l = b(f[h]);
            if (2 === l)
                return null;
            if (1 === l)
                return !1
        }
        return !0
    }
      , gd = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = dd(Rc[c], a));
            return b[c]
        }
    };
    var jd = {
        hk: function(a, b) {
            b[pc.wg] && "string" === typeof a && (a = 1 == b[pc.wg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(pc.yg) && null === a && (a = b[pc.yg]);
            b.hasOwnProperty(pc.Ag) && void 0 === a && (a = b[pc.Ag]);
            b.hasOwnProperty(pc.zg) && !0 === a && (a = b[pc.zg]);
            b.hasOwnProperty(pc.xg) && !1 === a && (a = b[pc.xg]);
            return a
        }
    };
    var xd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"]
      , yd = new Aa;
    var Fd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function Gd(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b]
    }
    ;var Id = function(a) {
        return Hd ? E.querySelectorAll(a) : null
    }
      , Jd = function(a, b) {
        if (!Hd)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!E.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , Kd = !1;
    if (E.querySelectorAll)
        try {
            var Ld = E.querySelectorAll(":root");
            Ld && 1 == Ld.length && Ld[0] == E.documentElement && (Kd = !0)
        } catch (a) {}
    var Hd = Kd;
    var J = function(a) {
        gb("GTM", a)
    };
    var K = {
        g: {
            Ta: "ad_personalization",
            F: "ad_storage",
            J: "ad_user_data",
            N: "analytics_storage",
            Wb: "region",
            Rd: "consent_updated",
            Ze: "wait_for_update",
            Ki: "ads",
            Tl: "all",
            Li: "android",
            Mi: "chrome",
            Ni: "playstore",
            Oi: "search",
            Pi: "shopping",
            Qi: "youtube",
            Ri: "app_remove",
            Si: "app_store_refund",
            Ti: "app_store_subscription_cancel",
            Ui: "app_store_subscription_convert",
            Vi: "app_store_subscription_renew",
            Bg: "add_payment_info",
            Cg: "add_shipping_info",
            Xb: "add_to_cart",
            Yb: "remove_from_cart",
            Dg: "view_cart",
            Eb: "begin_checkout",
            Zb: "select_item",
            Ua: "view_item_list",
            hb: "select_promotion",
            Va: "view_promotion",
            ka: "purchase",
            ac: "refund",
            xa: "view_item",
            Eg: "add_to_wishlist",
            Wi: "exception",
            Xi: "first_open",
            Yi: "first_visit",
            la: "gtag.config",
            Ha: "gtag.get",
            Zi: "in_app_purchase",
            bc: "page_view",
            aj: "screen_view",
            bj: "session_start",
            cj: "timing_complete",
            dj: "track_social",
            Td: "user_engagement",
            ib: "gclid",
            ma: "ads_data_redaction",
            Z: "allow_ad_personalization_signals",
            ef: "allow_custom_scripts",
            ff: "allow_display_features",
            Ud: "allow_enhanced_conversions",
            jb: "allow_google_signals",
            Ba: "allow_interest_groups",
            ej: "app_id",
            fj: "app_installer_id",
            gj: "app_name",
            ij: "app_version",
            fc: "auid",
            jj: "auto_detection_enabled",
            Fb: "aw_remarketing",
            hf: "aw_remarketing_only",
            Vd: "discount",
            Wd: "aw_feed_country",
            Xd: "aw_feed_language",
            T: "items",
            Yd: "aw_merchant_id",
            Fg: "aw_basket_type",
            Bc: "campaign_content",
            Cc: "campaign_id",
            Dc: "campaign_medium",
            Ec: "campaign_name",
            Fc: "campaign",
            Gc: "campaign_source",
            Hc: "campaign_term",
            Wa: "client_id",
            kj: "content_group",
            lj: "content_type",
            Ia: "conversion_cookie_prefix",
            Ic: "conversion_id",
            ya: "conversion_linker",
            Gb: "conversion_api",
            Oa: "cookie_domain",
            Ca: "cookie_expires",
            Pa: "cookie_flags",
            hc: "cookie_name",
            Jc: "cookie_path",
            Ja: "cookie_prefix",
            kb: "cookie_update",
            ic: "country",
            na: "currency",
            Zd: "customer_lifetime_value",
            Kc: "custom_map",
            Gg: "gcldc",
            mj: "debug_mode",
            W: "developer_id",
            nj: "disable_merchant_reported_purchases",
            Lc: "dc_custom_params",
            oj: "dc_natural_search",
            Hg: "dynamic_event_settings",
            Ig: "affiliation",
            ae: "checkout_option",
            jf: "checkout_step",
            Jg: "coupon",
            Mc: "item_list_name",
            kf: "list_name",
            pj: "promotions",
            Nc: "shipping",
            lf: "tax",
            be: "engagement_time_msec",
            Oc: "enhanced_client_id",
            ce: "enhanced_conversions",
            Kg: "enhanced_conversions_automatic_settings",
            de: "estimated_delivery_date",
            nf: "euid_logged_in_state",
            Pc: "event_callback",
            qj: "event_category",
            lb: "event_developer_id_string",
            rj: "event_label",
            Lg: "event",
            ee: "event_settings",
            fe: "event_timeout",
            sj: "description",
            tj: "fatal",
            uj: "experiments",
            pf: "firebase_id",
            he: "first_party_collection",
            ie: "_x_20",
            Hb: "_x_19",
            Mg: "fledge",
            Ng: "flight_error_code",
            Og: "flight_error_message",
            Pg: "fl_activity_category",
            Qg: "fl_activity_group",
            qf: "fl_advertiser_id",
            Rg: "fl_ar_dedupe",
            Sg: "fl_random_number",
            Tg: "tran",
            Ug: "u",
            je: "gac_gclid",
            jc: "gac_wbraid",
            Vg: "gac_wbraid_multiple_conversions",
            Wg: "ga_restrict_domain",
            rf: "ga_temp_client_id",
            ke: "gdpr_applies",
            Xg: "geo_granularity",
            nb: "value_callback",
            Ya: "value_key",
            Wl: "google_ono",
            Za: "google_signals",
            Yg: "google_tld",
            me: "groups",
            Zg: "gsa_experiment_id",
            ah: "iframe_state",
            Qc: "ignore_referrer",
            tf: "internal_traffic_results",
            pb: "is_legacy_converted",
            qb: "is_legacy_loaded",
            ne: "is_passthrough",
            oe: "_lps",
            Da: "language",
            uf: "legacy_developer_id_string",
            za: "linker",
            kc: "accept_incoming",
            rb: "decorate_forms",
            O: "domains",
            Ib: "url_position",
            bh: "method",
            vj: "name",
            Rc: "new_customer",
            eh: "non_interaction",
            wj: "optimize_id",
            xj: "page_hostname",
            Sc: "page_path",
            Aa: "page_referrer",
            sb: "page_title",
            fh: "passengers",
            gh: "phone_conversion_callback",
            yj: "phone_conversion_country_code",
            hh: "phone_conversion_css_class",
            zj: "phone_conversion_ids",
            ih: "phone_conversion_number",
            jh: "phone_conversion_options",
            Tc: "quantity",
            Uc: "redact_device_info",
            vf: "redact_enhanced_user_id",
            Aj: "redact_ga_client_id",
            Bj: "redact_user_id",
            pe: "referral_exclusion_definition",
            Jb: "restricted_data_processing",
            Cj: "retoken",
            Dj: "sample_rate",
            wf: "screen_name",
            tb: "screen_resolution",
            Ej: "search_term",
            Ka: "send_page_view",
            Kb: "send_to",
            Vc: "server_container_url",
            Wc: "session_duration",
            qe: "session_engaged",
            xf: "session_engaged_time",
            ub: "session_id",
            se: "session_number",
            Xc: "delivery_postal_code",
            kh: "temporary_client_id",
            yf: "topmost_url",
            Fj: "tracking_id",
            zf: "traffic_type",
            qa: "transaction_id",
            Lb: "transport_url",
            lh: "trip_type",
            Mb: "update",
            vb: "url_passthrough",
            Yc: "_user_agent_architecture",
            Zc: "_user_agent_bitness",
            ad: "_user_agent_full_version_list",
            bd: "_user_agent_mobile",
            dd: "_user_agent_model",
            ed: "_user_agent_platform",
            fd: "_user_agent_platform_version",
            gd: "_user_agent_wow64",
            ra: "user_data",
            mh: "user_data_auto_latency",
            nh: "user_data_auto_meta",
            oh: "user_data_auto_multi",
            ph: "user_data_auto_selectors",
            qh: "user_data_auto_status",
            ue: "user_data_mode",
            ve: "user_data_settings",
            wa: "user_id",
            La: "user_properties",
            rh: "_user_region",
            sh: "us_privacy_string",
            aa: "value",
            mc: "wbraid",
            th: "wbraid_multiple_conversions",
            zh: "_host_name",
            Ah: "_in_page_command",
            Bh: "_is_passthrough_cid",
            md: "non_personalized_ads",
            qd: "_sst_parameters",
            Xa: "conversion_label",
            oa: "page_location",
            ob: "global_developer_id_string",
            te: "tc_privacy_string"
        }
    }
      , ie = {}
      , je = Object.freeze((ie[K.g.Z] = 1,
    ie[K.g.ff] = 1,
    ie[K.g.Ud] = 1,
    ie[K.g.jb] = 1,
    ie[K.g.T] = 1,
    ie[K.g.Oa] = 1,
    ie[K.g.Ca] = 1,
    ie[K.g.Pa] = 1,
    ie[K.g.hc] = 1,
    ie[K.g.Jc] = 1,
    ie[K.g.Ja] = 1,
    ie[K.g.kb] = 1,
    ie[K.g.Kc] = 1,
    ie[K.g.W] = 1,
    ie[K.g.Hg] = 1,
    ie[K.g.Pc] = 1,
    ie[K.g.ee] = 1,
    ie[K.g.fe] = 1,
    ie[K.g.he] = 1,
    ie[K.g.Wg] = 1,
    ie[K.g.Za] = 1,
    ie[K.g.Yg] = 1,
    ie[K.g.me] = 1,
    ie[K.g.tf] = 1,
    ie[K.g.pb] = 1,
    ie[K.g.qb] = 1,
    ie[K.g.za] = 1,
    ie[K.g.vf] = 1,
    ie[K.g.pe] = 1,
    ie[K.g.Jb] = 1,
    ie[K.g.Ka] = 1,
    ie[K.g.Kb] = 1,
    ie[K.g.Vc] = 1,
    ie[K.g.Wc] = 1,
    ie[K.g.xf] = 1,
    ie[K.g.Xc] = 1,
    ie[K.g.Lb] = 1,
    ie[K.g.Mb] = 1,
    ie[K.g.ve] = 1,
    ie[K.g.La] = 1,
    ie[K.g.qd] = 1,
    ie));
    Object.freeze([K.g.oa, K.g.Aa, K.g.sb, K.g.Da, K.g.wf, K.g.wa, K.g.pf, K.g.kj]);
    var ke = {}
      , le = Object.freeze((ke[K.g.Ri] = 1,
    ke[K.g.Si] = 1,
    ke[K.g.Ti] = 1,
    ke[K.g.Ui] = 1,
    ke[K.g.Vi] = 1,
    ke[K.g.Xi] = 1,
    ke[K.g.Yi] = 1,
    ke[K.g.Zi] = 1,
    ke[K.g.bj] = 1,
    ke[K.g.Td] = 1,
    ke))
      , me = {}
      , oe = Object.freeze((me[K.g.Bg] = 1,
    me[K.g.Cg] = 1,
    me[K.g.Xb] = 1,
    me[K.g.Yb] = 1,
    me[K.g.Dg] = 1,
    me[K.g.Eb] = 1,
    me[K.g.Zb] = 1,
    me[K.g.Ua] = 1,
    me[K.g.hb] = 1,
    me[K.g.Va] = 1,
    me[K.g.ka] = 1,
    me[K.g.ac] = 1,
    me[K.g.xa] = 1,
    me[K.g.Eg] = 1,
    me))
      , pe = Object.freeze([K.g.Z, K.g.jb, K.g.kb, K.g.Qc, K.g.Mb])
      , qe = Object.freeze([].concat(pe))
      , re = Object.freeze([K.g.Ca, K.g.fe, K.g.Wc, K.g.xf, K.g.be])
      , se = Object.freeze([].concat(re))
      , te = {}
      , ue = (te[K.g.F] = "1",
    te[K.g.N] = "2",
    te[K.g.J] = "3",
    te[K.g.Ta] = "4",
    te)
      , ve = {}
      , we = Object.freeze((ve[K.g.Z] = 1,
    ve[K.g.Ud] = 1,
    ve[K.g.Ba] = 1,
    ve[K.g.Fb] = 1,
    ve[K.g.hf] = 1,
    ve[K.g.Vd] = 1,
    ve[K.g.Wd] = 1,
    ve[K.g.Xd] = 1,
    ve[K.g.T] = 1,
    ve[K.g.Yd] = 1,
    ve[K.g.Ia] = 1,
    ve[K.g.ya] = 1,
    ve[K.g.Oa] = 1,
    ve[K.g.Ca] = 1,
    ve[K.g.Pa] = 1,
    ve[K.g.Ja] = 1,
    ve[K.g.na] = 1,
    ve[K.g.Zd] = 1,
    ve[K.g.W] = 1,
    ve[K.g.nj] = 1,
    ve[K.g.ce] = 1,
    ve[K.g.de] = 1,
    ve[K.g.pf] = 1,
    ve[K.g.he] = 1,
    ve[K.g.pb] = 1,
    ve[K.g.qb] = 1,
    ve[K.g.Da] = 1,
    ve[K.g.Rc] = 1,
    ve[K.g.oa] = 1,
    ve[K.g.Aa] = 1,
    ve[K.g.gh] = 1,
    ve[K.g.hh] = 1,
    ve[K.g.ih] = 1,
    ve[K.g.jh] = 1,
    ve[K.g.Jb] = 1,
    ve[K.g.Ka] = 1,
    ve[K.g.Kb] = 1,
    ve[K.g.Vc] = 1,
    ve[K.g.Xc] = 1,
    ve[K.g.qa] = 1,
    ve[K.g.Lb] = 1,
    ve[K.g.Mb] = 1,
    ve[K.g.vb] = 1,
    ve[K.g.ra] = 1,
    ve[K.g.wa] = 1,
    ve[K.g.aa] = 1,
    ve))
      , xe = {}
      , ye = Object.freeze((xe[K.g.Oi] = "s",
    xe[K.g.Qi] = "y",
    xe[K.g.Li] = "n",
    xe[K.g.Mi] = "c",
    xe[K.g.Ni] = "p",
    xe[K.g.Pi] = "h",
    xe[K.g.Ki] = "a",
    xe));
    Object.freeze(K.g);
    var ze = {}
      , Ae = C.google_tag_manager = C.google_tag_manager || {}
      , Be = Math.random();
    ze.Ff = "39d0";
    ze.pd = Number("0") || 0;
    ze.da = "dataLayer";
    ze.Ii = "ChEI8MeaqAYQ+76Xg+bkj5SwARImAOf/cvjlD4qz0pODpMyqYruXCgA1uTs0rAqFT0JbjQ1UJygkOmYaAis5";
    var Ce = {
        __cl: 1,
        __ecl: 1,
        __ehl: 1,
        __evl: 1,
        __fal: 1,
        __fil: 1,
        __fsl: 1,
        __hl: 1,
        __jel: 1,
        __lcl: 1,
        __sdl: 1,
        __tl: 1,
        __ytl: 1
    }, De = {
        __paused: 1,
        __tg: 1
    }, Ee;
    for (Ee in Ce)
        Ce.hasOwnProperty(Ee) && (De[Ee] = 1);
    var Fe = Ea(""), Ge, He = !1;
    He = !0;
    Ge = He;
    var Ie, Je = !1;
    Ie = Je;
    var Ke, Le = !1;
    Ke = Le;
    var Me, Ne = !1;
    Me = Ne;
    ze.Sd = "www.googletagmanager.com";
    var Oe = "" + ze.Sd + (Ge ? "/gtag/js" : "/gtm.js")
      , Pe = null
      , Qe = null
      , Re = {}
      , Se = {}
      , Te = {}
      , Ue = function() {
        var a = Ae.sequence || 1;
        Ae.sequence = a + 1;
        return a
    };
    ze.Hi = "";
    var Ve = "";
    ze.ze = Ve;
    var We = new Aa
      , Xe = {}
      , Ye = {}
      , af = {
        name: ze.da,
        set: function(a, b) {
            z(Ra(a, b), Xe);
            Ze()
        },
        get: function(a) {
            return $e(a, 2)
        },
        reset: function() {
            We = new Aa;
            Xe = {};
            Ze()
        }
    }
      , $e = function(a, b) {
        return 2 != b ? We.get(a) : bf(a)
    }
      , bf = function(a) {
        var b, c = a.split(".");
        b = b || [];
        for (var d = Xe, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d))
                return
        }
        return d
    }
      , cf = function(a, b) {
        Ye.hasOwnProperty(a) || (We.set(a, b),
        z(Ra(a, b), Xe),
        Ze())
    }
      , Ze = function(a) {
        k(Ye, function(b, c) {
            We.set(b, c);
            z(Ra(b), Xe);
            z(Ra(b, c), Xe);
            a && delete Ye[b]
        })
    }
      , df = function(a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? bf(a) : We.get(a);
        "array" === Wa(d) || "object" === Wa(d) ? c = z(d) : c = d;
        return c
    };
    var L = [];
    L[5] = !0;
    L[6] = !0;
    L[11] = !0;
    L[7] = !0;
    L[8] = !0;
    L[21] = !0;
    L[9] = !0;
    L[10] = !0;
    L[13] = !0;
    L[14] = !0;
    L[15] = !0;
    L[17] = !0;
    L[23] = !0;
    L[24] = !0;
    L[25] = !0;
    L[27] = !0;
    L[19] = !0;
    L[28] = !0;
    L[31] = !0;
    L[32] = !0;
    L[33] = !0;
    L[34] = !0;
    L[36] = !0;
    L[37] = !0;
    L[39] = !0;
    L[41] = !0;
    L[42] = !0;
    L[43] = !0;
    L[54] = !0;
    L[55] = !0;
    L[56] = !0;
    L[57] = !0;
    L[59] = !0;
    L[60] = !0;
    L[65] = !0;
    L[68] = !0;
    L[71] = !0;
    a: {
        for (var lf = void 0, mf = void 0, nf = 0; lf === mf; )
            if (lf = Math.floor(2 * Math.random()),
            mf = Math.floor(2 * Math.random()),
            nf++,
            20 < nf)
                break a;
        lf ? L[74] = !0 : L[75] = !0
    }
    P(75) ? Mc[6] = !0 : P(74) && (Mc[5] = !0);

    L[78] = !0;
    L[84] = !0;
    L[85] = !0;
    L[88] = !0;
    L[91] = !0;
    L[92] = !0;
    L[94] = !0;
    L[96] = !0;
    L[97] = !0;
    L[101] = !0;
    Mc[9] = !0;
    function P(a) {
        return !!L[a]
    }
    var of = function(a) {
        gb("HEALTH", a)
    };
    var pf;
    try {
        pf = JSON.parse(eb("eyIwIjoiUlciLCIxIjoiUlctMDEiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5ydyIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        J(123),
        of(2),
        pf = {}
    }
    var qf = function() {
        return pf["0"] || ""
    }
      , rf = function() {
        var a = !1;
        return a
    }
      , sf = function() {
        var a = "";
        return a
    }
      , tf = function() {
        var a = !1;
        return a
    }
      , uf = function() {
        var a = "";
        return a
    };
    var yf = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (1933);
    var zf = function(a) {
        zf[" "](a);
        return a
    };
    zf[" "] = function() {}
    ;
    var Bf = function() {
        var a = Af
          , b = "Tf";
        if (a.Tf && a.hasOwnProperty(b))
            return a.Tf;
        var c = new a;
        return a.Tf = c
    };
    var Af = function() {
        var a = {};
        this.h = function() {
            var b = yf.h
              , c = yf.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.B = function() {
            a[yf.h] = !0
        }
    };
    var Cf = !1
      , Df = !1
      , Ef = {}
      , Ff = {
        ad_storage: !1,
        ad_user_data: !1,
        ad_personalization: !1
    };
    function Gf() {
        var a = Tb("google_tag_data", {});
        return a.ics = a.ics || new Hf
    }
    var Hf = function() {
        this.entries = {};
        this.cps = {};
        this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    Hf.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        gb("TAGGING", 19);
        void 0 == b ? gb("TAGGING", 18) : If(this, a, "granted" === b, c, d, e, f)
    }
    ;
    Hf.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++)
            If(this, a[c], void 0, void 0, "", "", b)
    }
    ;
    var If = function(a, b, c, d, e, f, h) {
        var l = a.entries
          , m = l[b] || {}
          , n = m.region
          , p = d && g(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Jf(p, n, e, f)) {
            var q = !!(h && 0 < h && void 0 === m.update)
              , r = {
                region: p,
                declare_region: m.declare_region,
                implicit: m.implicit,
                default: void 0 !== c ? c : m.default,
                declare: m.declare,
                update: m.update,
                quiet: q
            };
            if ("" !== e || !1 !== m.default)
                l[b] = r;
            q && C.setTimeout(function() {
                if (l[b] === r && r.quiet) {
                    r.quiet = !1;
                    var t = [b];
                    if (Nc(4))
                        for (var u in Ef)
                            Ef.hasOwnProperty(u) && Ef[u] === b && t.push(u);
                    for (var v = 0; v < t.length; v++)
                        Kf(a, t[v]);
                    a.notifyListeners();
                    gb("TAGGING", 2)
                }
            }, h)
        }
    };
    ca = Hf.prototype;
    ca.update = function(a, b) {
        this.usedDefault || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a)
              , d = this.entries
              , e = d[a] = d[a] || {};
            e.update = "granted" === b;
            var f = this.getConsentState(a)
              , h = [a];
            if (Nc(4))
                for (var l in Ef)
                    Ef.hasOwnProperty(l) && Ef[l] === a && h.push(l);
            if (e.quiet) {
                e.quiet = !1;
                for (var m = 0; m < h.length; m++)
                    Kf(this, h[m])
            } else if (f !== c)
                for (var n = 0; n < h.length; n++)
                    Kf(this, h[n])
        }
    }
    ;
    ca.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries
          , h = f[a] || {}
          , l = h.declare_region
          , m = c && g(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Jf(m, l, d, e)) {
            var n = {
                region: h.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: h.implicit,
                default: h.default,
                update: h.update,
                quiet: h.quiet
            };
            if ("" !== d || !1 !== h.declare)
                f[a] = n
        }
    }
    ;
    ca.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries
          , d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    }
    ;
    ca.getConsentState = function(a) {
        var b = this.entries
          , c = b[a] || {}
          , d = c.update;
        if (void 0 !== d)
            return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d)
            return d ? 1 : 2;
        if (Nc(4) && Ef.hasOwnProperty(a)) {
            var e = b[Ef[a]] || {};
            d = e.update;
            if (void 0 !== d)
                return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d)
                return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d)
            return d ? 1 : 2;
        if (Nc(3)) {
            d = c.implicit;
            if (void 0 !== d)
                return d ? 3 : 4;
            if (Ff.hasOwnProperty(a))
                return Ff[a] ? 3 : 4
        }
        return 0
    }
    ;
    ca.setCps = function(a, b, c, d, e) {
        var f;
        a: {
            var h = this.cps, l, m = h[a] || {}, n = m.region, p = c && g(c) ? c.toUpperCase() : void 0;
            l = d.toUpperCase();
            if (Jf(p, n, l, e.toUpperCase())) {
                var q = {
                    enabled: "granted" === b,
                    region: p
                };
                if ("" !== l || !1 !== m.enabled) {
                    h[a] = q;
                    f = !0;
                    break a
                }
            }
            f = !1
        }
        f && (this.usedSetCps = !0)
    }
    ;
    ca.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            sk: b
        })
    }
    ;
    var Kf = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            va(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.ii = !0)
        }
    };
    Hf.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.ii) {
                d.ii = !1;
                try {
                    d.sk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    ;
    function Jf(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }
    var Lf = function(a) {
        var b = Gf();
        b.accessedAny = !0;
        switch (b.getConsentState(a)) {
        case 1:
        case 3:
            return !0;
        case 2:
        case 4:
            return !1;
        default:
            return !0
        }
    }
      , Mf = function(a) {
        var b = Gf();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , Nf = function() {
        if (!Bf().h())
            return !1;
        var a = Gf();
        a.accessedAny = !0;
        return a.active
    }
      , Of = function() {
        var a = Gf();
        a.accessedDefault = !0;
        return a.usedDefault
    }
      , Pf = function(a, b) {
        Gf().addListener(a, b)
    }
      , Qf = function(a, b) {
        Gf().notifyListeners(a, b)
    }
      , Rf = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Mf(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Pf(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , Sf = function(a, b) {
        function c() {
            for (var l = [], m = 0; m < e.length; m++) {
                var n = e[m];
                Lf(n) && !f[n] && l.push(n)
            }
            return l
        }
        function d(l) {
            for (var m = 0; m < l.length; m++)
                f[l[m]] = !0
        }
        var e = g(b) ? [b] : b
          , f = {}
          , h = c();
        h.length !== e.length && (d(h),
        Pf(e, function(l) {
            function m(q) {
                0 !== q.length && (d(q),
                l.consentTypes = q,
                a(l))
            }
            var n = c();
            if (0 !== n.length) {
                var p = Object.keys(f).length;
                !Nc(9) || n.length + p >= e.length ? m(n) : C.setTimeout(function() {
                    m(c())
                }, 500)
            }
        }))
    };
    function Tf() {}
    function Uf() {}
    ;var Vf = [K.g.F, K.g.N, K.g.J, K.g.Ta]
      , Wf = function(a) {
        for (var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = {
            Bd: 0
        }; d.Bd < c.length; d = {
            Bd: d.Bd
        },
        ++d.Bd)
            k(a, function(e) {
                return function(f, h) {
                    if (f !== K.g.Wb) {
                        var l = c[e.Bd]
                          , m = qf()
                          , n = pf["1"] || "";
                        Df = !0;
                        Cf && gb("TAGGING", 20);
                        Gf().declare(f, h, l, m, n)
                    }
                }
            }(d))
    }
      , Xf = function(a) {
        var b = a[K.g.Wb];
        b && J(40);
        var c = a[K.g.Ze];
        c && J(41);
        for (var d = va(b) ? b : [b], e = {
            Cd: 0
        }; e.Cd < d.length; e = {
            Cd: e.Cd
        },
        ++e.Cd)
            k(a, function(f) {
                return function(h, l) {
                    if (h !== K.g.Wb && h !== K.g.Ze) {
                        var m = d[f.Cd]
                          , n = Number(c)
                          , p = qf()
                          , q = pf["1"] || "";
                        Cf = !0;
                        Df && gb("TAGGING", 20);
                        Gf().default(h, l, m, p, q, n)
                    }
                }
            }(e))
    }
      , Yf = function(a, b) {
        k(a, function(c, d) {
            Cf = !0;
            Df && gb("TAGGING", 20);
            Gf().update(c, d)
        });
        Qf(b.eventId, b.priorityId)
    }
      , Zf = function(a) {
        for (var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = {
            Dd: 0
        }; d.Dd < c.length; d = {
            Dd: d.Dd
        },
        ++d.Dd)
            k(a, function(e) {
                return function(f, h) {
                    if (f !== K.g.Wb) {
                        var l = c[e.Dd]
                          , m = qf()
                          , n = pf["1"] || "";
                        Gf().setCps(f, h, l, m, n)
                    }
                }
            }(d))
    }
      , Q = function(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return Lf(b)
        })
    }
      , $f = function(a, b) {
        Sf(a, b)
    }
      , ag = function(a, b) {
        Rf(a, b)
    }
      , bg = function(a) {
        Gf().waitForUpdate(a, 500)
    };
    var cg = function(a) {
        var b = String(a[pc.ia] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    }
      , dg = 0 <= C.location.search.indexOf("?gtm_latency=") || 0 <= C.location.search.indexOf("&gtm_latency=");
    var fg = function(a) {
        var b = eg();
        b.pending || (b.pending = []);
        xa(b.pending, function(c) {
            return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
        }) || b.pending.push({
            target: a,
            onLoad: void 0
        })
    }
      , gg = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = []
    }
      , eg = function() {
        var a = Tb("google_tag_data", {})
          , b = a.tidr;
        b || (b = new gg,
        a.tidr = b);
        return b
    };
    var hg = {}
      , ig = !1
      , jg = {
        ctid: "UA-92079720-1",
        Jf: "",
        gi: "UA-92079720-1",
        hi: "UA-92079720-1"
    };
    hg.ld = Ea("");
    var mg = function() {
        var a = kg();
        return ig ? a.map(lg) : a
    }
      , og = function() {
        var a = ng();
        return ig ? a.map(lg) : a
    }
      , qg = function() {
        return pg(jg.ctid)
    }
      , rg = function() {
        return pg(jg.Jf || "_" + jg.ctid)
    }
      , kg = function() {
        return jg.gi ? jg.gi.split("|") : [jg.ctid]
    }
      , ng = function() {
        return jg.hi ? jg.hi.split("|") : []
    }
      , sg = function(a) {
        var b = eg();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }
      , pg = function(a) {
        return ig ? lg(a) : a
    }
      , lg = function(a) {
        return "siloed_" + a
    }
      , tg = function(a) {
        a = String(a);
        return ig && 0 === a.indexOf("siloed_") ? a.substring(7) : a
    }
      , ug = function() {
        var a = !1;
        if (a) {
            var b = eg();
            if (b.siloed) {
                for (var c = [], d = kg(), e = ng(), f = {}, h = 0; h < b.siloed.length; f = {
                    vd: f.vd
                },
                h++)
                    f.vd = b.siloed[h],
                    !ig && xa(f.vd.isDestination ? e : d, function(l) {
                        return function(m) {
                            return m === l.vd.ctid
                        }
                    }(f)) ? ig = !0 : c.push(f.vd);
                b.siloed = c
            }
        }
    };
    function vg() {
        var a = eg();
        if (a.pending) {
            for (var b, c = [], d = !1, e = mg(), f = og(), h = {}, l = 0; l < a.pending.length; h = {
                wc: h.wc
            },
            l++)
                h.wc = a.pending[l],
                xa(h.wc.target.isDestination ? f : e, function(m) {
                    return function(n) {
                        return n === m.wc.target.ctid
                    }
                }(h)) ? d || (b = h.wc.onLoad,
                d = !0) : c.push(h.wc);
            a.pending = c;
            if (b)
                try {
                    b(rg())
                } catch (m) {}
        }
    }
    var wg = function() {
        for (var a = eg(), b = mg(), c = 0; c < b.length; c++) {
            var d = a.container[b[c]];
            d ? (d.state = 2,
            d.containers = mg(),
            d.destinations = og()) : a.container[b[c]] = {
                state: 2,
                containers: mg(),
                destinations: og()
            }
        }
        for (var e = og(), f = 0; f < e.length; f++) {
            var h = a.destination[e[f]];
            h && 0 === h.state && J(93);
            h ? (h.state = 2,
            h.containers = mg(),
            h.destinations = og()) : a.destination[e[f]] = {
                state: 2,
                containers: mg(),
                destinations: og()
            }
        }
        a.canonical[rg()] = {};
        vg()
    }
      , xg = function(a) {
        return !!eg().container[a]
    }
      , yg = function() {
        return {
            ctid: qg(),
            isDestination: hg.ld
        }
    };
    function zg(a) {
        var b = eg();
        (b.siloed = b.siloed || []).push(a)
    }
    var Ag = function() {
        var a = eg().container, b;
        for (b in a)
            if (a.hasOwnProperty(b) && 1 === a[b].state)
                return !0;
        return !1
    }
      , Bg = function() {
        var a = {};
        k(eg().destination, function(b, c) {
            0 === c.state && (a[b] = c)
        });
        return a
    }
      , Cg = function(a) {
        return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
    };
    var Dg = {
        sampleRate: "0.005000",
        Di: "",
        Ci: Number("5"),
        ym: Number("")
    }
      , Eg = [];
    function Fg(a) {
        Eg.push(a)
    }
    var Gg = !1, Hg;
    if (!(Hg = dg)) {
        var Ig = Math.random()
          , Jg = Dg.sampleRate;
        Hg = Ig < Number(Jg)
    }
    var Kg = Hg
      , Lg = "https://www.googletagmanager.com/a?id=" + jg.ctid
      , Mg = void 0
      , Ng = {}
      , Og = void 0
      , Pg = new function() {
        var a = 5;
        0 < Dg.Ci && (a = Dg.Ci);
        this.h = 0;
        this.C = [];
        this.B = a
    }
      , Qg = 1E3;
    function Rg(a, b) {
        var c = Mg;
        if (void 0 === c)
            if (b)
                c = Ue();
            else
                return "";
        for (var d = [Lg], e = 0; e < Eg.length; e++) {
            var f = Eg[e]({
                eventId: c,
                Cb: !!a,
                ri: function() {
                    Gg = !0
                }
            });
            "&" === f[0] && d.push(f)
        }
        d.push("&z=0");
        return d.join("")
    }
    function Sg() {
        Og && (C.clearTimeout(Og),
        Og = void 0);
        if (void 0 !== Mg && Tg) {
            var a;
            (a = Ng[Mg]) || (a = Pg.h < Pg.B ? !1 : 1E3 > Ja() - Pg.C[Pg.h % Pg.B]);
            if (a || 0 >= Qg--)
                J(1),
                Ng[Mg] = !0;
            else {
                var b = Pg.h++ % Pg.B;
                Pg.C[b] = Ja();
                var c = Rg(!0);
                ac(c);
                if (Gg) {
                    var d = c.replace("/a?", "/td?");
                    ac(d)
                }
                Tg = Gg = !1
            }
        }
    }
    var Tg = !1;
    function Ug(a) {
        Ng[a] || (a !== Mg && (Sg(),
        Mg = a),
        Tg = !0,
        Og || (Og = C.setTimeout(Sg, 500)),
        2022 <= Rg().length && Sg())
    }
    var Vg = ya();
    function Wg() {
        Vg = ya()
    }
    function Xg() {
        return ["&v=3&t=t", "&pid=" + Vg].join("")
    }
    ;var Yg = function(a, b, c, d, e, f, h, l, m, n, p, q) {
        this.eventId = a;
        this.priorityId = b;
        this.h = c;
        this.M = d;
        this.C = e;
        this.I = f;
        this.U = h;
        this.B = l;
        this.eventMetadata = m;
        this.onSuccess = n;
        this.onFailure = p;
        this.isGtmEvent = q
    }
      , T = function(a, b, c) {
        if (void 0 !== a.h[b])
            return a.h[b];
        if (void 0 !== a.M[b])
            return a.M[b];
        if (void 0 !== a.C[b])
            return a.C[b];
        Kg && Zg(a, a.I[b], a.U[b]) && (J(71),
        J(79));
        return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.B[b] ? a.B[b] : c
    }
      , $g = function(a) {
        function b(h) {
            for (var l = Object.keys(h), m = 0; m < l.length; ++m)
                c[l[m]] = 1
        }
        var c = {};
        b(a.h);
        b(a.M);
        b(a.C);
        b(a.I);
        if (Kg)
            for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
                var f = d[e];
                if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                    J(71);
                    J(80);
                    break
                }
            }
        return Object.keys(c)
    }
      , ah = function(a, b, c) {
        function d(m) {
            Ya(m) && k(m, function(n, p) {
                f = !0;
                e[n] = p
            })
        }
        var e = {}
          , f = !1;
        c && 1 !== c || (d(a.B[b]),
        d(a.I[b]),
        d(a.C[b]),
        d(a.M[b]));
        c && 2 !== c || d(a.h[b]);
        if (Kg) {
            var h = f
              , l = e;
            e = {};
            f = !1;
            c && 1 !== c || (d(a.B[b]),
            d(a.U[b]),
            d(a.C[b]),
            d(a.M[b]));
            c && 2 !== c || d(a.h[b]);
            if (f !== h || Zg(a, e, l))
                J(71),
                J(81);
            f = h;
            e = l
        }
        return f ? e : void 0
    }
      , ih = function(a) {
        var b = [K.g.Fc, K.g.Bc, K.g.Cc, K.g.Dc, K.g.Ec, K.g.Gc, K.g.Hc]
          , c = {}
          , d = !1
          , e = function(l) {
            for (var m = 0; m < b.length; m++)
                void 0 !== l[b[m]] && (c[b[m]] = l[b[m]],
                d = !0);
            return d
        };
        if (e(a.h) || e(a.M) || e(a.C))
            return c;
        e(a.I);
        if (Kg) {
            var f = c
              , h = d;
            c = {};
            d = !1;
            e(a.U);
            Zg(a, c, f) && (J(71),
            J(82));
            c = f;
            d = h
        }
        if (d)
            return c;
        e(a.B);
        return c
    }
      , Zg = function(a, b, c) {
        if (!Kg)
            return !1;
        try {
            if (b === c)
                return !1;
            var d = Wa(b);
            if (d !== Wa(c) || !(Ya(b) && Ya(c) || "array" === d))
                return !0;
            if ("array" === d) {
                if (b.length !== c.length)
                    return !0;
                for (var e = 0; e < b.length; e++)
                    if (Zg(a, b[e], c[e]))
                        return !0
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f))
                        return !0;
                for (var h in b)
                    if (!c.hasOwnProperty(h) || Zg(a, b[h], c[h]))
                        return !0
            }
        } catch (l) {
            J(72)
        }
        return !1
    }
      , jh = function(a, b) {
        this.Cf = a;
        this.Ij = b;
        this.I = {};
        this.kd = {};
        this.h = {};
        this.M = {};
        this.B = {};
        this.jd = {};
        this.C = {};
        this.Ac = function() {}
        ;
        this.Db = function() {}
        ;
        this.U = !1
    }
      , kh = function(a, b) {
        a.I = b;
        return a
    }
      , lh = function(a, b) {
        a.kd = b;
        return a
    }
      , mh = function(a, b) {
        a.h = b;
        return a
    }
      , nh = function(a, b) {
        a.M = b;
        return a
    }
      , oh = function(a, b) {
        a.B = b;
        return a
    }
      , ph = function(a, b) {
        a.jd = b;
        return a
    }
      , qh = function(a, b) {
        a.C = b || {};
        return a
    }
      , rh = function(a, b) {
        a.Ac = b;
        return a
    }
      , sh = function(a, b) {
        a.Db = b;
        return a
    }
      , th = function(a, b) {
        a.U = b;
        return a
    }
      , uh = function(a) {
        return new Yg(a.Cf,a.Ij,a.I,a.kd,a.h,a.M,a.B,a.jd,a.C,a.Ac,a.Db,a.U)
    };
    function vh(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var wh = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , xh = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var yh = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    function zh() {
        return pb ? !!wb && !!wb.platform : !1
    }
    function Ah() {
        return zb("iPhone") && !zb("iPod") && !zb("iPad")
    }
    function Bh() {
        Ah() || zb("iPad") || zb("iPod")
    }
    ;Bb();
    Ab() || zb("Trident") || zb("MSIE");
    zb("Edge");
    !zb("Gecko") || -1 != vb().toLowerCase().indexOf("webkit") && !zb("Edge") || zb("Trident") || zb("MSIE") || zb("Edge");
    -1 != vb().toLowerCase().indexOf("webkit") && !zb("Edge") && zb("Mobile");
    zh() || zb("Macintosh");
    zh() || zb("Windows");
    (zh() ? "Linux" === wb.platform : zb("Linux")) || zh() || zb("CrOS");
    var Ch = qa.navigator || null;
    Ch && (Ch.appVersion || "").indexOf("X11");
    zh() || zb("Android");
    Ah();
    zb("iPad");
    zb("iPod");
    Bh();
    vb().toLowerCase().indexOf("kaios");
    var Dh = function(a, b, c, d) {
        for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
            var h = a.charCodeAt(e - 1);
            if (38 == h || 63 == h) {
                var l = a.charCodeAt(e + f);
                if (!l || 61 == l || 38 == l || 35 == l)
                    return e
            }
            e += f + 1
        }
        return -1
    }
      , Eh = /#|$/
      , Fh = function(a, b) {
        var c = a.search(Eh)
          , d = Dh(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
      , Gh = /[?&]($|#)/
      , Hh = function(a, b, c) {
        for (var d, e = a.search(Eh), f = 0, h, l = []; 0 <= (h = Dh(a, f, b, e)); )
            l.push(a.substring(f, h)),
            f = Math.min(a.indexOf("&", h) + 1 || e, e);
        l.push(a.slice(f));
        d = l.join("").replace(Gh, "$1");
        var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, r = d.indexOf("#");
            0 > r && (r = d.length);
            var t = d.indexOf("?"), u;
            0 > t || t > r ? (t = r,
            u = "") : u = d.substring(t + 1, r);
            q = [d.slice(0, t), u, d.slice(r)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else
            m = d;
        return m
    };
    var Ih = function(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        zf(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , Jh = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    function Kh(a) {
        if (!a || !E.head)
            return null;
        var b = Lh("META");
        E.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Mh = function() {
        if (C.top == C)
            return 0;
        var a = C.location.ancestorOrigins;
        return a ? a[a.length - 1] == C.location.origin ? 1 : 2 : Ih(C.top) ? 1 : 2
    }
      , Lh = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    function Nh(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Lh("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var h = a.google_image_requests
                      , l = jb(h, e);
                    0 <= l && Array.prototype.splice.call(h, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            yh(e, "load", f);
            yh(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Ph = function(a) {
        var b;
        b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        Jh(a, function(d, e) {
            if (d || 0 === d)
                c += "&" + e + "=" + encodeURIComponent("" + d)
        });
        Oh(c, b)
    }
      , Oh = function(a, b) {
        var c = window, d;
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? !1 : d;
        if (c.fetch) {
            var e = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            };
            d && (e.mode = "cors",
            "setAttributionReporting"in XMLHttpRequest.prototype ? e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : e.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            });
            c.fetch(a, e)
        } else
            Nh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    };
    var Qh = function() {};
    var Rh = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Sh = function(a, b) {
        b = void 0 === b ? {} : b;
        this.B = a;
        this.h = null;
        this.M = {};
        this.Db = 0;
        var c;
        this.U = null != (c = b.Ml) ? c : 500;
        var d;
        this.I = null != (d = b.lm) ? d : !1;
        this.C = null
    };
    pa(Sh, Qh);
    var Uh = function(a) {
        return "function" === typeof a.B.__tcfapi || null != Th(a)
    };
    Sh.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.I
        }
          , d = xh(function() {
            return a(c)
        })
          , e = 0;
        -1 !== this.U && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.U));
        var f = function(h, l) {
            clearTimeout(e);
            h ? (c = h,
            c.internalErrorState = Rh(c),
            c.internalBlockOnErrors = b.I,
            l && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
            l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            Vh(this, "addEventListener", f)
        } catch (h) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    Sh.prototype.removeEventListener = function(a) {
        a && a.listenerId && Vh(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Xh = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var h = e;
        if (0 === h)
            return !1;
        var l = c;
        2 === c ? (l = 0,
        2 === h && (l = 1)) : 3 === c && (l = 1,
        1 === h && (l = 0));
        var m;
        if (0 === l)
            if (a.purpose && a.vendor) {
                var n = Wh(a.vendor.consents, void 0 === d ? "755" : d);
                m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Wh(a.purpose.consents, b)
            } else
                m = !0;
        else
            m = 1 === l ? a.purpose && a.vendor ? Wh(a.purpose.legitimateInterests, b) && Wh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return m
    }
      , Wh = function(a, b) {
        return !(!a || !a[b])
    }
      , Vh = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.B.__tcfapi) {
            var e = a.B.__tcfapi;
            e(b, 2, c, d)
        } else if (Th(a)) {
            Yh(a);
            var f = ++a.Db;
            a.M[f] = c;
            if (a.h) {
                var h = {};
                a.h.postMessage((h.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                h), "*")
            }
        } else
            c({}, !1)
    }
      , Th = function(a) {
        if (a.h)
            return a.h;
        var b;
        a: {
            for (var c = a.B, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (l) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var h = c.parent;
                        if (h && h != c) {
                            f = h;
                            break b
                        }
                    } catch (l) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.h = b;
        return a.h
    }
      , Yh = function(a) {
        a.C || (a.C = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.M[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        yh(a.B, "message", a.C))
    }
      , Zh = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Rh(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Ph({
            e: String(a.internalErrorState)
        }),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };
    var $h = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    }
      , ai = vh('', 500);
    function bi() {
        var a = Ae.tcf || {};
        return Ae.tcf = a
    }
    var ci = function() {
        return new Sh(C,{
            Ml: -1
        })
    }
      , ii = function() {
        var a = bi()
          , b = ci();
        Uh(b) && di() && J(124);
        if ((ei() || P(81)) && !a.active && Uh(b)) {
            a.active = !0;
            ei() ? (a.Bb = {},
            a.cmpId = 0,
            a.tcfPolicyVersion = 0,
            fi(),
            P(81) && bg([K.g.J]),
            a.tcString = "tcunavailable") : P(81) && bg([K.g.F, K.g.Ta, K.g.J]);
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState)
                        gi(a),
                        hi(a);
                    else {
                        a.gdprApplies = c.gdprApplies;
                        if (P(81)) {
                            a.cmpId = c.cmpId;
                            a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                            if (di())
                                return;
                            a.tcfPolicyVersion = c.tcfPolicyVersion
                        }
                        var d;
                        if (!1 === c.gdprApplies) {
                            var e = {}, f;
                            for (f in $h)
                                $h.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var h = {}, l;
                            for (l in $h)
                                if ($h.hasOwnProperty(l))
                                    if ("1" === l) {
                                        var m, n = c, p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = Zh(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Xh(n, "1", 0) : !1;
                                        h["1"] = m
                                    } else
                                        h[l] = Xh(c, l, $h[l]);
                            d = h
                        }
                        d && (a.tcString = c.tcString || "tcempty",
                        a.Bb = d,
                        hi(a))
                    }
                })
            } catch (c) {
                gi(a),
                hi(a)
            }
        }
    };
    function gi(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }
    function fi() {
        var a = {}
          , b = (a[K.g.F] = "denied",
        a[K.g.Ze] = ai,
        a);
        P(81) && (b[K.g.Ta] = "denied");
        Xf(b)
    }
    var ei = function() {
        return !0 === C.gtag_enable_tcf_support
    }
      , di = function() {
        var a = ei();
        if (P(81)) {
            var b = bi().enableAdvertiserConsentMode;
            return !a && !b
        }
        return !a
    };
    function hi(a) {
        var b = {}
          , c = (b[K.g.F] = a.Bb["1"] ? "granted" : "denied",
        b);
        P(81) && (c[K.g.Ta] = a.Bb["3"] && a.Bb["4"] ? "granted" : "denied",
        "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion && (c[K.g.J] = a.Bb["1"] && a.Bb["7"] ? "granted" : "denied"));
        Yf(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: ji() || ""
        })
    }
    var ji = function() {
        var a = bi();
        if (a.active)
            return a.tcString
    }
      , ki = function() {
        var a = bi();
        if (a.active && void 0 !== a.gdprApplies)
            return a.gdprApplies ? "1" : "0"
    }
      , li = function(a) {
        if (!$h.hasOwnProperty(String(a)))
            return !0;
        var b = bi();
        return b.active && b.Bb ? !!b.Bb[String(a)] : !0
    };
    var mi = [K.g.F, K.g.N]
      , ni = [K.g.F, K.g.N, K.g.J, K.g.Ta]
      , oi = {}
      , pi = (oi[K.g.F] = 1,
    oi[K.g.N] = 2,
    oi);
    function qi(a) {
        switch (T(a, K.g.Z)) {
        case void 0:
            return 1;
        case !1:
            return 3;
        default:
            return 2
        }
    }
    var ri = function(a) {
        var b = 3 !== qi(a);
        P(67) && (b = b && Lf(K.g.Ta));
        return b
    }
      , si = function() {
        var a = {}, b;
        for (b in pi)
            if (pi.hasOwnProperty(b)) {
                var c = pi[b], d, e = Gf();
                e.accessedAny = !0;
                d = e.getConsentState(b);
                a[c] = d
            }
        var f = P(51) && mi.every(Lf)
          , h = P(46);
        return f || h ? oc(a, 1) : oc(a, 0)
    }
      , ti = {}
      , ui = (ti[K.g.F] = 0,
    ti[K.g.N] = 1,
    ti[K.g.J] = 2,
    ti[K.g.Ta] = 3,
    ti);
    function vi(a) {
        switch (a) {
        case void 0:
            return 1;
        case !0:
            return 3;
        case !1:
            return 2;
        default:
            return 0
        }
    }
    var wi = function(a) {
        if (P(48)) {
            for (var b = "1", c = 0; c < ni.length; c++) {
                var d = b, e, f = ni[c], h = Ef[f];
                e = void 0 === h ? 0 : ui.hasOwnProperty(h) ? 12 | ui[h] : 8;
                var l = Gf();
                l.accessedAny = !0;
                var m = l.entries[f] || {};
                e = e << 2 | vi(m.implicit);
                b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[vi(m.declare) << 4 | vi(m.default) << 2 | vi(m.update)])
            }
            void 0 !== a && (b += qi(a));
            return b
        }
        for (var n = "G1", p = 0; p < mi.length; p++) {
            var q;
            a: {
                var r = mi[p]
                  , t = Gf();
                t.accessedDefault = !0;
                switch ((t.entries[r] || {}).default) {
                case !0:
                    q = 3;
                    break a;
                case !1:
                    q = 2;
                    break a;
                default:
                    q = 1
                }
            }
            switch (q) {
            case 3:
                n += "1";
                break;
            case 2:
                n += "0";
                break;
            case 1:
                n += "-"
            }
        }
        return n
    }
      , xi = function() {
        if (!Lf(K.g.J))
            return "-";
        var a = [], b = Gf().cps, c;
        for (c in b)
            b.hasOwnProperty(c) && b[c].enabled && a.push(c);
        for (var d = "", e = 0; e < a.length; e++) {
            var f = ye[a[e]];
            f && (d += f)
        }
        return "" === d ? "-" : d
    };
    function yi() {
        var a = !!pf["6"]
          , b = !1;
        P(81) && (b = !di() && "1" === ki());
        return a || b
    }
    var zi = function() {
        return yi() ? "1" : "0"
    }
      , Ai = function() {
        return yi() || Gf().usedSetCps || !Q(K.g.J)
    }
      , Bi = function() {
        var a = "0", b = "0", c;
        var d = bi();
        c = d.active && P(81) ? d.cmpId : void 0;
        "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63],
        b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
        var e = "0", f;
        var h = bi();
        f = h.active && P(81) ? h.tcfPolicyVersion : void 0;
        "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
        var l = 0;
        pf["6"] && (l |= 1);
        "1" === ki() && (l |= 2);
        ei() && (l |= 4);
        var m;
        var n = bi();
        m = n.active && void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        "1" === m && (l |= 8);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[l]
    };
    var Ci = function(a) {
        var b = 1, c, d, e;
        if (a)
            for (b = 0,
            d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Di = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("=")
              , l = h[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    function Ei(a) {
        return "null" !== a.origin
    }
    ;var Hi = function(a, b, c, d) {
        return Fi(d) ? Di(a, String(b || Gi()), c) : []
    }
      , Ki = function(a, b, c, d, e) {
        if (Fi(e)) {
            var f = Ii(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = Ji(f, function(h) {
                    return h.Ee
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = Ji(f, function(h) {
                    return h.Md
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function Li(a, b, c, d) {
        var e = Gi()
          , f = window;
        Ei(f) && (f.document.cookie = a);
        var h = Gi();
        return e != h || void 0 != c && 0 <= Hi(b, h, !1, d).indexOf(c)
    }
    var Pi = function(a, b, c) {
        function d(t, u, v) {
            if (null == v)
                return delete h[u],
                t;
            h[u] = v;
            return t + "; " + u + "=" + v
        }
        function e(t, u) {
            if (null == u)
                return delete h[u],
                t;
            h[u] = !0;
            return t + "; " + u
        }
        if (!Fi(c.fb))
            return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = Mi(b),
        f = a + "=" + b);
        var h = {};
        f = d(f, "path", c.path);
        var l;
        c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
        f = d(f, "expires", l);
        f = d(f, "max-age", c.sm);
        f = d(f, "samesite", c.vm);
        c.wm && (f = e(f, "secure"));
        var m = c.domain;
        if (m && "auto" === m.toLowerCase()) {
            for (var n = Ni(), p = 0; p < n.length; ++p) {
                var q = "none" !== n[p] ? n[p] : void 0
                  , r = d(f, "domain", q);
                r = e(r, c.flags);
                if (!Oi(q, c.path) && Li(r, a, b, c.fb))
                    return 0
            }
            return 1
        }
        m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
        f = e(f, c.flags);
        return Oi(m, c.path) ? 1 : Li(f, a, b, c.fb) ? 0 : 1
    }
      , Qi = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Pi(a, b, c)
    };
    function Ji(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var l = a[h]
              , m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l],
            f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }
    function Ii(a, b, c) {
        for (var d = [], e = Hi(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split(".")
              , l = h.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = h.shift();
                m && (m = m.split("-"),
                d.push({
                    id: h.join("."),
                    Ee: 1 * m[0] || 1,
                    Md: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Mi = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , Ri = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , Si = /(^|\.)doubleclick\.net$/i
      , Oi = function(a, b) {
        return Si.test(window.document.location.hostname) || "/" === b && Ri.test(a)
    }
      , Gi = function() {
        return Ei(window) ? window.document.cookie : ""
    }
      , Ni = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        Si.test(e) || Ri.test(e) || a.push("none");
        return a
    }
      , Fi = function(a) {
        return a && Bf().h() ? Mf(a) ? Lf(a) : !1 : !0
    };
    var Ti = function(a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ Ci(a) & 2147483647) : String(b)
    }
      , Ui = function(a) {
        return [Ti(a), Math.round(Ja() / 1E3)].join(".")
    }
      , Xi = function(a, b, c, d, e) {
        var f = Vi(b);
        return Ki(a, f, Wi(c), d, e)
    }
      , Yi = function(a, b, c, d) {
        var e = "" + Vi(c)
          , f = Wi(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , Vi = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , Wi = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    var Zi = function() {
        Ae.dedupe_gclid || (Ae.dedupe_gclid = "" + Ui());
        return Ae.dedupe_gclid
    };
    var $i = function() {
        var a = !1;
        return a
    };
    var aj = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    }
      , bj = function(a) {
        var b = jg.ctid.split("-")[0].toUpperCase()
          , c = {};
        c.ctid = jg.ctid;
        c.Cl = ze.pd;
        c.Fl = ze.Ff;
        c.fl = hg.ld ? 2 : 1;
        Ge ? (c.Se = aj[b],
        c.Se || (c.Se = 0)) : c.Se = Me ? 13 : 10;
        Ke ? c.eg = 1 : $i() ? c.eg = 2 : c.eg = 3;
        var d;
        var e = c.Se
          , f = c.eg;
        void 0 === e ? d = "" : (f || (f = 0),
        d = "" + Gd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e << 2 | f]);
        var h = c.km, l = 4 + d + (h ? "" + Gd(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h] : ""), m, n = c.Fl;
        m = n && Fd.test(n) ? "" + Gd(3, 2) + n : "";
        var p, q = c.Cl;
        p = q ? "" + Gd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q] : "";
        var r;
        var t = c.ctid;
        if (t && a) {
            var u = t.split("-")
              , v = u[0].toUpperCase();
            if ("GTM" !== v && "OPT" !== v)
                r = "";
            else {
                var w = u[1];
                r = "" + Gd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + w.length] + (c.fl || 0) + w
            }
        } else
            r = "";
        return l + m + p + r
    };
    var cj = void 0;
    function dj(a) {
        var b = "";
        return b
    }
    ;Cb();
    Ah() || zb("iPod");
    zb("iPad");
    !zb("Android") || Db() || Cb() || Bb() || zb("Silk");
    Db();
    !zb("Safari") || Db() || (Ab() ? 0 : zb("Coast")) || Bb() || (Ab() ? 0 : zb("Edge")) || (Ab() ? yb("Microsoft Edge") : zb("Edg/")) || (Ab() ? yb("Opera") : zb("OPR")) || Cb() || zb("Silk") || zb("Android") || Bh();
    var ej = {}
      , fj = null
      , gj = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        var f = 4;
        void 0 === f && (f = 0);
        if (!fj) {
            fj = {};
            for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                var n = h.concat(l[m].split(""));
                ej[m] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    void 0 === fj[q] && (fj[q] = p)
                }
            }
        }
        for (var r = ej[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
            var x = b[v]
              , y = b[v + 1]
              , A = b[v + 2]
              , B = r[x >> 2]
              , D = r[(x & 3) << 4 | y >> 4]
              , I = r[(y & 15) << 2 | A >> 6]
              , F = r[A & 63];
            t[w++] = "" + B + D + I + F
        }
        var G = 0
          , M = u;
        switch (b.length - v) {
        case 2:
            G = b[v + 1],
            M = r[(G & 15) << 2] || u;
        case 1:
            var N = b[v];
            t[w] = "" + r[N >> 2] + r[(N & 3) << 4 | G >> 4] + M + u
        }
        return t.join("")
    };
    var hj = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function ij() {
        var a;
        return null != (a = C.google_tag_data) ? a : C.google_tag_data = {}
    }
    function jj() {
        var a = C.google_tag_data, b;
        if (null != a && a.uach) {
            var c = a.uach
              , d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else
            b = null;
        return b
    }
    function kj() {
        var a, b;
        return null != (b = null == (a = C.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }
    function lj() {
        var a, b;
        return "function" === typeof (null == (a = C.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }
    function mj() {
        if (!lj())
            return null;
        var a = ij();
        if (a.uach_promise)
            return a.uach_promise;
        var b = C.navigator.userAgentData.getHighEntropyValues(hj).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }
    ;var sj = /:[0-9]+$/
      , tj = /^\d+\.fls\.doubleclick\.net$/
      , uj = function(a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var h = f.slice(1).join("=");
                return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
            }
        }
    }
      , xj = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = vj(a.protocol) || vj(C.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : C.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || C.location.hostname).replace(sj, "").toLowerCase());
        return wj(a, b, c, d, e)
    }
      , wj = function(a, b, c, d, e) {
        var f, h = vj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = yj(a);
            break;
        case "protocol":
            f = h;
            break;
        case "host":
            f = a.hostname.replace(sj, "").toLowerCase();
            if (c) {
                var l = /^www\d*\./.exec(f);
                l && l[0] && (f = f.substr(l[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" === h ? 80 : "https" === h ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || gb("TAGGING", 1);
            f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var m = f.split("/");
            0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
            f = m.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = uj(f, e));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , vj = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , yj = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , zj = function(a) {
        var b = E.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || gb("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(sj, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , Aj = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 !== p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = zj(a)
          , f = a.split(/[?#]/)[0]
          , h = e.search
          , l = e.hash;
        "?" === h[0] && (h = h.substring(1));
        "#" === l[0] && (l = l.substring(1));
        h = c(h);
        l = c(l);
        "" !== h && (h = "?" + h);
        "" !== l && (l = "#" + l);
        var m = "" + f + h + l;
        "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
        return m
    }
      , Bj = function(a) {
        var b = zj(C.location.href)
          , c = xj(b, "host", !1);
        if (c && c.match(tj)) {
            var d = xj(b, "path").split(a + "=");
            if (1 < d.length)
                return d[1].split(";")[0].split("?")[0]
        }
    };
    function Cj(a, b, c, d) {
        var e, f = Number(null != a.yb ? a.yb : void 0);
        0 !== f && (e = new Date((b || Ja()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            fb: d
        }
    }
    ;var Dj;
    var Hj = function() {
        var a = Ej
          , b = Fj
          , c = Gj()
          , d = function(h) {
            a(h.target || h.srcElement || {})
        }
          , e = function(h) {
            b(h.target || h.srcElement || {})
        };
        if (!c.init) {
            bc(E, "mousedown", d);
            bc(E, "keyup", d);
            bc(E, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , Ij = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        Gj().decorators.push(f)
    }
      , Jj = function(a, b, c) {
        for (var d = Gj().decorators, e = {}, f = 0; f < d.length; ++f) {
            var h = d[f], l;
            if (l = !c || h.forms)
                a: {
                    var m = h.domains
                      , n = a
                      , p = !!h.sameHost;
                    if (m && (p || n !== E.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q]instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                                l = !0;
                                break a
                            }
                    l = !1
                }
            if (l) {
                var r = h.placement;
                void 0 == r && (r = h.fragment ? 2 : 1);
                r === b && Ma(e, h.callback())
            }
        }
        return e
    };
    function Gj() {
        var a = Tb("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var Kj = /(.*?)\*(.*?)\*(.*)/
      , Lj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , Mj = /^(?:www\.|m\.|amp\.)+/
      , Nj = /([^?#]+)(\?[^#]*)?(#.*)?/
      , Pj = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c),
                b.push(db(String(d))))
            }
        var e = b.join("*");
        return ["1", Oj(e), e].join("*")
    };
    function Oj(a, b) {
        var c = [Rb.userAgent, (new Date).getTimezoneOffset(), Rb.userLanguage || Rb.language, Math.floor(Ja() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = Dj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, l = 0; 8 > l; l++)
                    h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        Dj = d;
        for (var m = 4294967295, n = 0; n < c.length; n++)
            m = m >>> 8 ^ Dj[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }
    function Qj() {
        return function(a) {
            var b = zj(C.location.href)
              , c = b.search.replace("?", "")
              , d = uj(c, "_gl", !0) || "";
            a.query = Rj(d) || {};
            var e = xj(b, "fragment"), f;
            var h = -1;
            if (Qa(e, "_gl="))
                h = 4;
            else {
                var l = e.indexOf("&_gl=");
                0 < l && (h = l + 3 + 2)
            }
            if (0 > h)
                f = void 0;
            else {
                var m = e.indexOf("&", h);
                f = 0 > m ? e.substring(h) : e.substring(h, m)
            }
            a.fragment = Rj(f || "") || {}
        }
    }
    function Sj(a, b) {
        var c = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(b)
          , d = b;
        if (c) {
            var e = c[2]
              , f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Tj = function(a, b) {
        b || (b = "_gl");
        var c = Nj.exec(a);
        if (!c)
            return "";
        var d = c[1]
          , e = Sj(b, (c[2] || "").slice(1))
          , f = Sj(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }
      , Uj = function(a) {
        var b = Qj()
          , c = Gj();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Ma(d, e.query),
        a && Ma(d, e.fragment));
        return d
    }
      , Rj = function(a) {
        try {
            var b = Vj(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , h = eb(d[e + 1]);
                    c[f] = h
                }
                gb("TAGGING", 6);
                return c
            }
        } catch (l) {
            gb("TAGGING", 8)
        }
    };
    function Vj(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Kj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var h = c;
            if (h && "1" === h[1]) {
                var l = h[3], m;
                a: {
                    for (var n = h[2], p = 0; p < b; ++p)
                        if (n === Oj(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m)
                    return l;
                gb("TAGGING", 7)
            }
        }
    }
    function Wj(a, b, c, d) {
        function e(p) {
            p = Sj(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Nj.exec(c);
        if (!f)
            return "";
        var h = f[1]
          , l = f[2] || ""
          , m = f[3] || ""
          , n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + h + l + m
    }
    function Xj(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = Jj(b, 1, c)
          , e = Jj(b, 2, c)
          , f = Jj(b, 3, c);
        if (Oa(d)) {
            var h = Pj(d);
            c ? Yj("_gl", h, a) : Zj("_gl", h, a, !1)
        }
        if (!c && Oa(e)) {
            var l = Pj(e);
            Zj("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m))
                a: {
                    var n = m
                      , p = f[m]
                      , q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            Zj(n, p, q);
                            break a
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            Yj(n, p, q);
                            break a
                        }
                    }
                    "string" == typeof q && Wj(n, p, q)
                }
    }
    function Zj(a, b, c, d) {
        if (c.href) {
            var e = Wj(a, b, c.href, void 0 === d ? !1 : d);
            ob.test(e) && (c.href = e)
        }
    }
    function Yj(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
                    var l = e[h];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = E.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = Wj(a, b, c.action);
                ob.test(n) && (c.action = n)
            }
        }
    }
    function Ej(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Xj(e, e.hostname)
            }
        } catch (h) {}
    }
    function Fj(a) {
        try {
            if (a.action) {
                var b = xj(zj(a.action), "host");
                Xj(a, b)
            }
        } catch (c) {}
    }
    var ak = function(a, b, c, d) {
        Hj();
        Ij(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , bk = function(a, b) {
        Hj();
        Ij(a, [wj(C.location, "host", !0)], b, !0, !0)
    }
      , ck = function() {
        var a = E.location.hostname
          , b = Lj.exec(E.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , h = f[1];
            e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var l = a.replace(Mj, ""), m = e.replace(Mj, ""), n;
        if (!(n = l === m)) {
            var p = "." + m;
            n = l.substring(l.length - p.length, l.length) === p
        }
        return n
    }
      , dk = function(a, b) {
        return !1 === a ? !1 : a || b || ck()
    };
    var ek = ["1"]
      , fk = {}
      , gk = {}
      , lk = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = hk(a.prefix);
        if (!fk[c])
            if (ik(c, a.path, a.domain)) {
                var d = gk[hk(a.prefix)];
                jk(a, d ? d.id : void 0, d ? d.cg : void 0)
            } else {
                var e = Bj("auiddc");
                if (e)
                    gb("TAGGING", 17),
                    fk[c] = e;
                else if (b) {
                    var f = hk(a.prefix)
                      , h = Ui();
                    if (0 === kk(f, h, a)) {
                        var l = Tb("google_tag_data", {});
                        l._gcl_au || (l._gcl_au = h)
                    }
                    ik(c, a.path, a.domain)
                }
            }
    };
    function jk(a, b, c) {
        var d = hk(a.prefix)
          , e = fk[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var h = Number(f[1]) || 0;
                if (h) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(Ja() / 1E3)));
                    kk(d, l, a, 1E3 * h)
                }
            }
        }
    }
    function kk(a, b, c, d) {
        var e = Yi(b, "1", c.domain, c.path)
          , f = Cj(c, d);
        f.fb = "ad_storage";
        return Qi(a, e, f)
    }
    function ik(a, b, c) {
        var d = Xi(a, b, c, ek, "ad_storage");
        if (!d)
            return !1;
        mk(a, d);
        return !0
    }
    function mk(a, b) {
        var c = b.split(".");
        5 === c.length ? (fk[a] = c.slice(0, 2).join("."),
        gk[a] = {
            id: c.slice(2, 4).join("."),
            cg: Number(c[4]) || 0
        }) : 3 === c.length ? gk[a] = {
            id: c.slice(0, 2).join("."),
            cg: Number(c[2]) || 0
        } : fk[a] = b
    }
    function hk(a) {
        return (a || "_gcl") + "_au"
    }
    function nk(a) {
        Bf().h() ? Rf(function() {
            Lf("ad_storage") ? a() : Sf(a, "ad_storage")
        }, ["ad_storage"]) : a()
    }
    function ok(a) {
        var b = Uj(!0)
          , c = hk(a.prefix);
        nk(function() {
            var d = b[c];
            if (d) {
                mk(c, d);
                var e = 1E3 * Number(fk[c].split(".")[1]);
                if (e) {
                    gb("TAGGING", 16);
                    var f = Cj(a, e);
                    f.fb = "ad_storage";
                    var h = Yi(d, "1", a.domain, a.path);
                    Qi(c, h, f)
                }
            }
        })
    }
    function pk(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var h = {}
              , l = Xi(a, e.path, e.domain, ek, "ad_storage");
            l && (h[a] = l);
            return h
        };
        nk(function() {
            ak(f, b, c, d)
        })
    }
    ;var qk = function(a) {
        for (var b = [], c = E.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                pg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(h, l) {
            return l.timestamp - h.timestamp
        });
        return b
    };
    function rk(a, b) {
        var c = qk(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].pg] || (d[c[e].pg] = []);
                var h = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    R: f[2]
                };
                b && 3 < f.length && (h.labels = f.slice(3));
                d[c[e].pg].push(h)
            }
        }
        return d
    }
    ;var sk = /^\w+$/
      , Dk = /^[\w-]+$/
      , Ek = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp",
        gb: "_gb"
    }
      , Fk = function() {
        return Bf().h() ? Lf("ad_storage") : !0
    }
      , Gk = function(a, b) {
        Mf("ad_storage") ? Fk() ? a() : Sf(a, "ad_storage") : b ? gb("TAGGING", 3) : Rf(function() {
            Gk(a, !0)
        }, ["ad_storage"])
    }
      , Ik = function(a) {
        return Hk(a).map(function(b) {
            return b.R
        })
    }
      , Hk = function(a) {
        var b = [];
        if (!Ei(C) || !E.cookie)
            return b;
        var c = Hi(a, E.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = {}, e = 0; e < c.length; d = {
            R: d.R
        },
        e++) {
            var f = Jk(c[e]);
            if (null != f) {
                var h = f
                  , l = h.version;
                d.R = h.R;
                var m = h.timestamp
                  , n = h.labels
                  , p = xa(b, function(q) {
                    return function(r) {
                        return r.R === q.R
                    }
                }(d));
                p ? (p.timestamp = Math.max(p.timestamp, m),
                p.labels = Kk(p.labels, n || [])) : b.push({
                    version: l,
                    R: d.R,
                    timestamp: m,
                    labels: n
                })
            }
        }
        b.sort(function(q, r) {
            return r.timestamp - q.timestamp
        });
        return Lk(b)
    };
    function Kk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (var f = 0; f < b.length; f++)
            c[b[f]] || d.push(b[f]);
        return d
    }
    function Mk(a) {
        return a && "string" == typeof a && a.match(sk) ? a : "_gcl"
    }
    var Ok = function() {
        var a = zj(C.location.href)
          , b = xj(a, "query", !1, void 0, "gclid")
          , c = xj(a, "query", !1, void 0, "gclsrc")
          , d = xj(a, "query", !1, void 0, "wbraid")
          , e = xj(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || uj(f, "gclid");
            c = c || uj(f, "gclsrc");
            d = d || uj(f, "wbraid")
        }
        return Nk(b, c, e, d)
    }
      , Nk = function(a, b, c, d) {
        var e = {}
          , f = function(h, l) {
            e[l] || (e[l] = []);
            e[l].push(h)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && Dk.test(d) && (e.gbraid = d,
        f(d, "gb"));
        if (void 0 !== a && a.match(Dk))
            switch (b) {
            case void 0:
                f(a, "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
            }
        c && f(c, "dc");
        return e
    }
      , Qk = function(a) {
        var b = Ok();
        Gk(function() {
            Pk(b, !1, a)
        })
    };
    function Pk(a, b, c, d, e) {
        function f(w, x) {
            var y = Rk(w, h);
            y && (Qi(y, x, l),
            m = !0)
        }
        c = c || {};
        e = e || [];
        var h = Mk(c.prefix);
        d = d || Ja();
        var l = Cj(c, d, !0);
        l.fb = "ad_storage";
        var m = !1
          , n = Math.round(d / 1E3)
          , p = function(w) {
            var x = ["GCL", n, w];
            0 < e.length && x.push(e.join("."));
            return x.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0]
              , r = Rk("gb", h)
              , t = !1;
            if (!b)
                for (var u = Hk(r), v = 0; v < u.length; v++)
                    u[v].R === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var Tk = function(a, b) {
        var c = Uj(!0);
        Gk(function() {
            for (var d = Mk(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== Ek[f]) {
                    var h = Rk(f, d)
                      , l = c[h];
                    if (l) {
                        var m = Math.min(Sk(l), Ja()), n;
                        b: {
                            var p = m;
                            if (Ei(C))
                                for (var q = Hi(h, E.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                    if (Sk(q[r]) > p) {
                                        n = !0;
                                        break b
                                    }
                            n = !1
                        }
                        if (!n) {
                            var t = Cj(b, m, !0);
                            t.fb = "ad_storage";
                            Qi(h, l, t)
                        }
                    }
                }
            }
            Pk(Nk(c.gclid, c.gclsrc), !1, b)
        })
    }
      , Rk = function(a, b) {
        var c = Ek[a];
        if (void 0 !== c)
            return b + c
    }
      , Sk = function(a) {
        return 0 !== Uk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function Jk(a) {
        var b = Uk(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            R: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function Uk(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Dk.test(a[2]) ? [] : a
    }
    var Vk = function(a, b, c, d, e) {
        if (va(b) && Ei(C)) {
            var f = Mk(e)
              , h = function() {
                for (var l = {}, m = 0; m < a.length; ++m) {
                    var n = Rk(a[m], f);
                    if (n) {
                        var p = Hi(n, E.cookie, void 0, "ad_storage");
                        p.length && (l[n] = p.sort()[p.length - 1])
                    }
                }
                return l
            };
            Gk(function() {
                ak(h, b, c, d)
            })
        }
    }
      , Lk = function(a) {
        return a.filter(function(b) {
            return Dk.test(b.R)
        })
    }
      , Wk = function(a, b) {
        if (Ei(C)) {
            for (var c = Mk(b.prefix), d = {}, e = 0; e < a.length; e++)
                Ek[a[e]] && (d[a[e]] = Ek[a[e]]);
            Gk(function() {
                k(d, function(f, h) {
                    var l = Hi(c + h, E.cookie, void 0, "ad_storage");
                    l.sort(function(t, u) {
                        return Sk(u) - Sk(t)
                    });
                    if (l.length) {
                        var m = l[0], n = Sk(m), p = 0 !== Uk(m.split(".")).length ? m.split(".").slice(3) : [], q = {}, r;
                        r = 0 !== Uk(m.split(".")).length ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        Pk(q, !0, b, n, p)
                    }
                })
            })
        }
    };
    function Xk(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var Yk = function(a) {
        function b(e, f, h) {
            h && (e[f] = h)
        }
        if (Nf()) {
            var c = Ok();
            if (Xk(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                bk(function() {
                    return d
                }, 3);
                bk(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
      , Zk = function(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Fk())
            return e;
        var f = Hk(a);
        if (!f.length)
            return e;
        for (var h = 0; h < f.length; h++)
            -1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d)
            return e;
        if (1 !== e[0]) {
            var l = f[0]
              , m = f[0].timestamp
              , n = [l.version, Math.round(m / 1E3), l.R].concat(l.labels || [], [b]).join(".")
              , p = Cj(c, m, !0);
            p.fb = "ad_storage";
            Qi(a, n, p)
        }
        return e
    };
    function $k(a, b) {
        var c = Mk(b)
          , d = Rk(a, c);
        if (!d)
            return 0;
        for (var e = Hk(d), f = 0, h = 0; h < e.length; h++)
            f = Math.max(f, e[h].timestamp);
        return f
    }
    function al(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var bl = function(a) {
        var b = Math.max($k("aw", a), al(Fk() ? rk() : {}));
        return Math.max($k("gb", a), al(Fk() ? rk("_gac_gb", !0) : {})) > b
    };
    var gl = /[A-Z]+/
      , hl = /\s/
      , il = function(a, b) {
        if (g(a)) {
            a = Ga(a);
            var c = a.indexOf("-");
            if (!(0 > c)) {
                var d = a.substring(0, c);
                if (gl.test(d)) {
                    var e = a.substring(c + 1), f;
                    if (b) {
                        var h = function(n) {
                            var p = n.indexOf("/");
                            return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = h(e);
                        if ("DC" === d && 2 === f.length) {
                            var l = h(f[1]);
                            2 === l.length && (f[1] = l[0],
                            f.push(l[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || hl.test(f[m]) && ("AW" !== d || 1 !== m))
                                return
                    }
                    return {
                        id: a,
                        prefix: d,
                        X: d + "-" + f[0],
                        K: f
                    }
                }
            }
        }
    }
      , kl = function(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = il(a[d], b);
            e && (c[e.id] = e)
        }
        jl(c);
        var f = [];
        k(c, function(h, l) {
            f.push(l)
        });
        return f
    };
    function jl(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.X)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var ll = function(a, b, c, d) {
        var e = Zb(), f;
        if (1 === e)
            a: {
                var h = Oe;
                h = h.toLowerCase();
                for (var l = "https://" + h, m = "http://" + h, n = 1, p = E.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                    var r = p[q].src;
                    if (r) {
                        r = r.toLowerCase();
                        if (0 === r.indexOf(m)) {
                            f = 3;
                            break a
                        }
                        1 === n && 0 === r.indexOf(l) && (n = 2)
                    }
                }
                f = n
            }
        else
            f = e;
        return (2 === f || d || "http:" != C.location.protocol ? a : b) + c
    };
    var nl = function(a, b, c) {
        if (C[a.functionName])
            return b.gg && H(b.gg),
            C[a.functionName];
        var d = ml();
        C[a.functionName] = d;
        if (a.Be)
            for (var e = 0; e < a.Be.length; e++)
                C[a.Be[e]] = C[a.Be[e]] || ml();
        a.Ke && void 0 === C[a.Ke] && (C[a.Ke] = c);
        Yb(ll("https://", "http://", a.og), b.gg, b.ml);
        return d
    }
      , ml = function() {
        var a = function() {
            a.q = a.q || [];
            a.q.push(arguments)
        };
        return a
    }
      , ol = {
        functionName: "_googWcmImpl",
        Ke: "_googWcmAk",
        og: "www.gstatic.com/wcm/loader.js"
    }
      , pl = {
        functionName: "_gaPhoneImpl",
        Ke: "ga_wpid",
        og: "www.gstatic.com/gaphone/loader.js"
    }
      , ql = {
        Fi: "",
        Tj: "5"
    }
      , rl = {
        functionName: "_googCallTrackingImpl",
        Be: [pl.functionName, ol.functionName],
        og: "www.gstatic.com/call-tracking/call-tracking_" + (ql.Fi || ql.Tj) + ".js"
    }
      , sl = {}
      , tl = function(a, b, c, d) {
        J(22);
        if (c) {
            d = d || {};
            var e = nl(ol, d, a)
              , f = {
                ak: a,
                cl: b
            };
            void 0 === d.eb && (f.autoreplace = c);
            e(2, d.eb, f, c, 0, Ia(), d.options)
        }
    }
      , ul = function(a, b, c, d) {
        J(21);
        if (b && c) {
            d = d || {};
            for (var e = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: Ia()
            }, f = 0; f < a.length; f++) {
                var h = a[f];
                sl[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.K.length ? (e.adData = {
                    ak: h.K[0],
                    cl: h.K[1]
                },
                sl[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
                    gaWpid: h.X
                },
                sl[h.id] = !0))
            }
            (e.gaData || e.adData) && nl(rl, d)(d.eb, e, d.options)
        }
    }
      , vl = function() {
        var a = !1;
        return a
    }
      , wl = function(a, b) {
        if (a)
            if ($i()) {} else {
                if (g(a)) {
                    var c = il(a);
                    if (!c)
                        return;
                    a = c
                }
                var d = void 0
                  , e = !1
                  , f = T(b, K.g.zj);
                if (f && va(f)) {
                    d = [];
                    for (var h = 0; h < f.length; h++) {
                        var l = il(f[h]);
                        l && (d.push(l),
                        (a.id === l.id || a.id === a.X && a.X === l.X) && (e = !0))
                    }
                }
                if (!d || e) {
                    var m = T(b, K.g.ih), n;
                    if (m) {
                        va(m) ? n = m : n = [m];
                        var p = T(b, K.g.gh)
                          , q = T(b, K.g.hh)
                          , r = T(b, K.g.jh)
                          , t = T(b, K.g.yj)
                          , u = p || q
                          , v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var w = 0; w < n.length; w++)
                            if (w < v)
                                if (d)
                                    ul(d, n[w], t, {
                                        eb: u,
                                        options: r
                                    });
                                else if ("AW" === a.prefix && a.K[1])
                                    vl() ? ul([a], n[w], t || "US", {
                                        eb: u,
                                        options: r
                                    }) : tl(a.K[0], a.K[1], n[w], {
                                        eb: u,
                                        options: r
                                    });
                                else if ("UA" === a.prefix)
                                    if (vl())
                                        ul([a], n[w], t || "US", {
                                            eb: u
                                        });
                                    else {
                                        var x = a.X
                                          , y = n[w]
                                          , A = {
                                            eb: u
                                        };
                                        J(23);
                                        if (y) {
                                            A = A || {};
                                            var B = nl(pl, A, x)
                                              , D = {};
                                            void 0 !== A.eb ? D.receiver = A.eb : D.replace = y;
                                            D.ga_wpid = x;
                                            D.destination = y;
                                            B(2, Ia(), D)
                                        }
                                    }
                    }
                }
            }
    };
    var xl, yl = !1, zl = function(a) {
        if (!yl) {
            yl = !0;
            xl = xl || {}
        }
        return xl[a]
    };
    var Al = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.s = c;
        this.h = {};
        this.metadata = z(c.eventMetadata || {});
        this.isAborted = !1
    };
    Al.prototype.copyToHitData = function(a, b) {
        var c = T(this.s, a);
        void 0 !== c ? this.h[a] = c : void 0 !== b && (this.h[a] = b)
    }
    ;
    var Bl = function(a, b, c) {
        var d = zl(a.target.X);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };
    function Cl(a) {
        return {
            getDestinationId: function() {
                return a.target.X
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return T(a.s, b)
            },
            qm: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    }
    ;function Zl(a) {
        var b = T(a.s, K.g.qb)
          , c = T(a.s, K.g.pb);
        b && !c ? (a.eventName !== K.g.la && a.eventName !== K.g.Td && J(131),
        a.isAborted = !0) : !b && c && (J(132),
        a.isAborted = !0)
    }
    ;var am = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/
      , bm = /^www.googleadservices.com$/
      , dm = function(a) {
        a || (a = cm());
        return a.Rl ? !1 : a.Ik || a.Jk || a.Kk || a.Rf || a.wk || a.Bk ? !0 : !1
    }
      , cm = function() {
        var a = {}
          , b = Uj(!0);
        a.Rl = !!b._up;
        var c = Ok();
        a.Ik = void 0 !== c.aw;
        a.Jk = void 0 !== c.dc;
        a.Kk = void 0 !== c.gbraid;
        var d = zj(C.location.href)
          , e = xj(d, "query", !1, void 0, "gad");
        a.Rf = void 0 !== e;
        if (!a.Rf) {
            var f = d.hash.replace("#", "")
              , h = uj(f, "gad");
            a.Rf = void 0 !== h
        }
        var l = E.referrer ? xj(zj(E.referrer), "host") : "";
        a.Bk = am.test(l);
        a.wk = bm.test(l);
        return a
    };
    var em = function() {
        var a = C.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }
      , fm = function(a) {
        if (E.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !C.getComputedStyle)
            return !0;
        var c = C.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , h = e.filter;
            if (h) {
                var l = h.indexOf("opacity(");
                0 <= l && (h = h.substring(l + 8, h.indexOf(")", l)),
                "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
                f = Math.min(h, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = C.getComputedStyle(d, null))
        }
        return !1
    };
    function an() {
        return "attribution-reporting"
    }
    function bn(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    }
    ;var cn = !1;
    function dn() {
        if (bn("join-ad-interest-group") && ta(Rb.joinAdInterestGroup))
            return !0;
        cn || (Kh('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),
        cn = !0);
        return bn("join-ad-interest-group") && ta(Rb.joinAdInterestGroup)
    }
    function en(a, b) {
        var c = void 0;
        try {
            c = E.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ja() - d) {
                gb("TAGGING", 9);
                return
            }
        } else
            try {
                if (50 <= E.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    gb("TAGGING", 10);
                    return
                }
            } catch (e) {}
        $b(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ja()
        }, c)
    }
    function fn() {
        return "https://td.doubleclick.net"
    }
    ;var gn = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
      , hn = /^~?[\w-]+(?:\.~?[\w-]+)*$/
      , jn = /^\d+\.fls\.doubleclick\.net$/
      , kn = /;gac=([^;?]+)/
      , ln = /;gacgb=([^;?]+)/
      , mn = /;gclaw=([^;?]+)/
      , nn = /;gclgb=([^;?]+)/;
    function on(a, b) {
        if (jn.test(E.location.host)) {
            var c = E.location.href.match(b);
            return c && 2 == c.length && c[1].match(gn) ? decodeURIComponent(c[1]) : ""
        }
        var d = [], e;
        for (e in a) {
            for (var f = [], h = a[e], l = 0; l < h.length; l++)
                f.push(h[l].R);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var pn = function(a, b, c) {
        var d = Fk() ? rk("_gac_gb", !0) : {}, e = [], f = !1, h;
        for (h in d) {
            var l = Zk("_gac_gb_" + h, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(h + ":" + l.join(","))
        }
        return {
            vk: f ? e.join(";") : "",
            uk: on(d, ln)
        }
    };
    function qn(a, b, c) {
        if (jn.test(E.location.host)) {
            var d = E.location.href.match(c);
            if (d && 2 == d.length && d[1].match(hn))
                return [{
                    R: d[1]
                }]
        } else
            return Hk((a || "_gcl") + b);
        return []
    }
    var rn = function(a) {
        return qn(a, "_aw", mn).map(function(b) {
            return b.R
        }).join(".")
    }
      , sn = function(a) {
        return qn(a, "_gb", nn).map(function(b) {
            return b.R
        }).join(".")
    }
      , tn = function(a, b) {
        var c = Zk((b && b.prefix || "_gcl") + "_gb", a, b);
        return 0 === c.length || c.every(function(d) {
            return 0 === d
        }) ? "" : c.join(".")
    };
    var un = function() {
        if (ta(C.__uspapi)) {
            var a = "";
            try {
                C.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var ho = {
        D: {
            rg: "ads_conversion_hit",
            af: "container_execute_start",
            ug: "container_setup_end",
            bf: "container_setup_start",
            sg: "container_execute_end",
            vg: "container_yield_end",
            cf: "container_yield_start",
            vh: "event_execute_end",
            uh: "event_evaluation_end",
            Af: "event_evaluation_start",
            wh: "event_setup_end",
            hd: "event_setup_start",
            xh: "ga4_conversion_hit",
            nd: "page_load",
            fm: "pageview",
            wb: "snippet_load",
            Hh: "tag_callback_error",
            Ih: "tag_callback_failure",
            Jh: "tag_callback_success",
            Kh: "tag_execute_end",
            oc: "tag_execute_start"
        }
    };
    function io() {
        function a(c, d) {
            var e = ib(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    }
    ;var jo = !1
      , ko = "L S Y E EC TC HTC".split(" ")
      , lo = ["S", "V", "E"]
      , mo = ["TS", "TI", "TE"];
    var Po = function(a) {}
      , Qo = function(a) {}
      , Ro = function() {}
      , So = function(a, b) {}
      , To = function(a, b) {}
      , Uo = function(a, b) {}
      , Vo = function(a, b) {}
      , no = function(a, b, c, d, e, f) {
        var h;
        h = void 0 === h ? !1 : h;
        var l = {};
        return l
    }
      , oo = function(a) {
        var b = !1;
        return b
    }
      , po = function(a, b) {}
      , Wo = function() {
        var a = {};
        return a
    }
      , Io = function(a) {
        a = void 0 === a ? !0 : a;
        var b = {};
        return b
    }
      , Xo = function() {}
      , Yo = function(a, b) {}
      , Zo = function(a, b, c) {};
    var $o = function(a, b) {
        var c, d = C.GooglebQhCsO;
        d || (d = {},
        C.GooglebQhCsO = d);
        c = d;
        if (c[a])
            return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var ap = function(a, b, c) {
        var d = Fh(a, "fmt");
        if (b) {
            var e = Fh(a, "random")
              , f = Fh(a, "label") || "";
            if (!e)
                return !1;
            var h = gj(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!$o(h, b))
                return !1
        }
        d && 4 != d && (a = Hh(a, "rfmt", d));
        var l = Hh(a, "fmt", 4);
        Yb(l, function() {
            C.google_noFurtherRedirects && b && b.call && (C.google_noFurtherRedirects = null,
            b())
        }, void 0, c, E.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var qp = function() {
        this.h = {}
    }
      , rp = function(a, b, c) {
        null != c && (a.h[b] = c)
    }
      , sp = function(a) {
        return Object.keys(a.h).map(function(b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
        }).join("&")
    }
      , up = function(a, b, c, d) {};
    function wp(a, b) {
        if (data.entities && data.entities[a])
            return data.entities[a][b]
    }
    ;var yp = function(a) {
        var b = rg();
        xp(b).event && xp(b).event.push(a)
    }
      , zp = function() {
        var a = xp(rg());
        return a.event ? a.event : []
    };
    function xp(a) {
        var b, c = Ae.r;
        c || (c = {
            container: {}
        },
        Ae.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: []
        },
        b.container[a] = d);
        return d
    }
    ;var Ap = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , Bp = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , Cp = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , Dp = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ")
      , Gp = function(a) {
        var b = $e("gtm.allowlist") || $e("gtm.whitelist");
        b && J(9);
        Ge && (b = ["google", "gtagfl", "lcl", "zone"]);
        Ep() && (Ge ? J(116) : (J(117),
        Fp && (b = [],
        window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var c = b && Pa(Fa(b), Bp)
          , d = $e("gtm.blocklist") || $e("gtm.blacklist");
        d || (d = $e("tagTypeBlacklist")) && J(3);
        d ? J(8) : d = [];
        Ep() && (d = Fa(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Fa(d).indexOf("google") && J(2);
        var e = d && Pa(Fa(d), Cp)
          , f = {};
        return function(h) {
            var l = h && h[pc.ia];
            if (!l || "string" != typeof l)
                return !0;
            l = l.replace(/^_*/, "");
            if (void 0 !== f[l])
                return f[l];
            var m = Se[l] || [], n = a(l, m), p;
            p = xp(rg()).entity;
            for (var q = 0; q < p.length; q++)
                try {
                    n = n && p[q](l, m)
                } catch (y) {
                    n = !1
                }
            if (b) {
                var r;
                if (r = n)
                    a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        J(11);
                                        r = !1;
                                        break a
                                    }
                                }
                            else {
                                r = !1;
                                break a
                            }
                        r = !0
                    }
                n = r
            }
            var u = !1;
            if (d) {
                var v = 0 <= e.indexOf(l);
                if (v)
                    u = v;
                else {
                    var w = Ba(e, m || []);
                    w && J(10);
                    u = w
                }
            }
            var x = !n || u;
            x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ba(e, Dp));
            return f[l] = x
        }
    }
      , Fp = !1;
    var Ep = function() {
        return Ap.test(C.location && C.location.hostname)
    }
      , Hp = function() {
        ig && xp(rg()).entity.push(function(a) {
            var b = {};
            b[pc.ia] = "__" + a;
            for (var c in void 0)
                (void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
            var d;
            if (ed(b)) {
                var e = b[pc.ia];
                if (!e)
                    throw "Error: No function name given for function call.";
                var f = Uc[e];
                d = !!f && !!f.runInSiloedMode
            } else
                d = !!wp(b[pc.ia], 4);
            return d
        })
    };
    function Ip(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return zj("" + c + b).href
        }
    }
    function Jp() {
        return !!ze.ze && "SGTM_TOKEN" !== ze.ze.split("@@").join("")
    }
    function Kp(a) {
        for (var b = ha([K.g.Vc, K.g.Lb]), c = b.next(); !c.done; c = b.next()) {
            var d = T(a, c.value);
            if (d)
                return d
        }
    }
    ;var Mp = function(a, b, c, d) {
        if (!Lp() && !xg(a)) {
            var e = "?id=" + encodeURIComponent(a) + "&l=" + ze.da
              , f = 0 === a.indexOf("GTM-");
            f || (e += "&cx=c");
            P(66) && (e += "&gtm=" + bj());
            var h = Jp();
            h && (e += "&sign=" + ze.ze);
            var l = c ? "/gtag/js" : "/gtm.js"
              , m = Ie || Ke ? Ip(b, l + e) : void 0;
            if (!m) {
                var n = ze.Sd + l;
                h && Sb && f && (n = Sb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                m = ll("https://", "http://", n + e)
            }
            var p = a;
            d.siloed && (zg({
                ctid: p,
                isDestination: !1
            }),
            p = lg(p));
            var q = p
              , r = yg();
            eg().container[q] = {
                state: 1,
                context: d,
                parent: r
            };
            fg({
                ctid: q,
                isDestination: !1
            });
            Yb(m)
        }
    }
      , Np = function(a, b, c) {
        var d;
        if (d = !Lp()) {
            var e = eg().destination[a];
            d = !(e && e.state)
        }
        if (d)
            if (Ag())
                eg().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: yg()
                },
                fg({
                    ctid: a,
                    isDestination: !0
                }),
                J(91);
            else {
                var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ze.da + "&cx=c";
                P(66) && (f += "&gtm=" + bj());
                Jp() && (f += "&sign=" + ze.ze);
                var h = Ie || Ke ? Ip(b, f) : void 0;
                h || (h = ll("https://", "http://", ze.Sd + f));
                var l = a;
                c.siloed && (zg({
                    ctid: l,
                    isDestination: !0
                }),
                l = lg(l));
                eg().destination[l] = {
                    state: 1,
                    context: c,
                    parent: yg()
                };
                fg({
                    ctid: l,
                    isDestination: !0
                });
                Yb(h)
            }
    };
    function Lp() {
        if ($i()) {
            return !0
        }
        return !1
    }
    ;var Op = ""
      , Pp = [];
    function Qp(a) {
        var b = "";
        Op && (b = "&dl=" + encodeURIComponent(Op));
        0 < Pp.length && (b += "&tdp=" + Pp.join("."));
        a.Cb && (Op = "",
        Pp.length = 0,
        b && a.ri());
        return b
    }
    ;var Rp = [];
    function Sp(a) {
        if (!Rp.length)
            return "";
        var b = "&tdc=" + Rp.join("!");
        a.Cb && (a.ri(),
        Rp.length = 0);
        return b
    }
    ;var Tp = {
        initialized: 11,
        complete: 12,
        interactive: 13
    }
      , Up = {}
      , Vp = Object.freeze((Up[K.g.Ka] = !0,
    Up))
      , Wp = 0 <= E.location.search.indexOf("?gtm_diagnostics=") || 0 <= E.location.search.indexOf("&gtm_diagnostics=")
      , Yp = function(a, b, c) {
        if (Kg && "config" === a && !(1 < il(b).K.length)) {
            var d, e = Tb("google_tag_data", {});
            e.td || (e.td = {});
            d = e.td;
            var f = z(c.I);
            z(c.h, f);
            var h = [], l;
            for (l in d) {
                var m = Xp(d[l], f);
                m.length && (Wp && console.log(m),
                h.push(l))
            }
            h.length && (h.length && Kg && Rp.push(b + "*" + h.join(".")),
            gb("TAGGING", Tp[E.readyState] || 14));
            d[b] = f
        }
    };
    function Zp(a, b) {
        var c = {}, d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function Xp(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b)
            return [];
        var e = function(q, r) {
            var t = r[q];
            return void 0 === t ? Vp[q] : t
        }, f;
        for (f in Zp(a, b)) {
            var h = (d ? d + "." : "") + f
              , l = e(f, a)
              , m = e(f, b)
              , n = "object" === Wa(l) || "array" === Wa(l)
              , p = "object" === Wa(m) || "array" === Wa(m);
            if (n && p)
                Xp(l, m, c, h);
            else if (n || p || l !== m)
                c[h] = !0
        }
        return Object.keys(c)
    }
    ;var $p = !1
      , aq = 0
      , bq = [];
    function cq(a) {
        if (!$p) {
            var b = E.createEventObject
              , c = "complete" == E.readyState
              , d = "interactive" == E.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                $p = !0;
                for (var e = 0; e < bq.length; e++)
                    H(bq[e])
            }
            bq.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    H(arguments[f]);
                return 0
            }
        }
    }
    function dq() {
        if (!$p && 140 > aq) {
            aq++;
            try {
                E.documentElement.doScroll("left"),
                cq()
            } catch (a) {
                C.setTimeout(dq, 50)
            }
        }
    }
    var eq = function(a) {
        $p ? a() : bq.push(a)
    };
    var fq = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: qg()
        }
    };
    var hq = function(a, b) {
        this.h = !1;
        this.I = [];
        this.M = {
            tags: []
        };
        this.U = !1;
        this.B = this.C = 0;
        gq(this, a, b)
    }
      , iq = function(a, b, c, d) {
        if (De.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        Ya(d) && (e = z(d, e));
        e.id = c;
        e.status = "timeout";
        return a.M.tags.push(e) - 1
    }
      , jq = function(a, b, c, d) {
        var e = a.M.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , kq = function(a) {
        if (!a.h) {
            for (var b = a.I, c = 0; c < b.length; c++)
                b[c]();
            a.h = !0;
            a.I.length = 0
        }
    }
      , gq = function(a, b, c) {
        void 0 !== b && lq(a, b);
        c && C.setTimeout(function() {
            return kq(a)
        }, Number(c))
    }
      , lq = function(a, b) {
        var c = La(function() {
            return H(function() {
                b(qg(), a.M)
            })
        });
        a.h ? c() : a.I.push(c)
    }
      , mq = function(a) {
        a.C++;
        return La(function() {
            a.B++;
            a.U && a.B >= a.C && kq(a)
        })
    }
      , nq = function(a) {
        a.U = !0;
        a.B >= a.C && kq(a)
    };
    var oq = {}
      , qq = function() {
        return C[pq()]
    }
      , rq = !1;
    var sq = function(a) {
        C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
        var b = C.GoogleAnalyticsObject;
        if (C[b])
            C.hasOwnProperty(b);
        else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(Ia());
            C[b] = c
        }
        return C[b]
    }
      , tq = function(a) {
        if (Nf()) {
            var b = qq();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0)
        }
    };
    function pq() {
        return C.GoogleAnalyticsObject || "ga"
    }
    var uq = function(a) {}
      , Oq = function(a, b) {
        return function() {
            var c = qq()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var h = f.get("hitPayload")
                      , l = f.get("hitCallback")
                      , m = 0 > h.indexOf("&tid=" + b);
                    m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", h, !0),
                    f.set("hitCallback", l, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    var Yq = {}
      , Zq = {};
    function $q(a, b) {
        if (Kg) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Yq[a] = "&e=" + c + "&eid=" + a;
            Ug(a)
        }
    }
    function ar(a) {
        var b = a.eventId
          , c = a.Cb;
        if (!Yq[b])
            return "";
        var d = Zq[b] ? "" : "&es=1";
        d += Yq[b];
        c && (Zq[b] = !0);
        return d
    }
    ;var br = {};
    function cr(a, b) {
        Kg && (br[a] = br[a] || {},
        br[a][b] = (br[a][b] || 0) + 1)
    }
    function dr(a) {
        var b = a.eventId, c = a.Cb, d = br[b] || {}, e = [], f;
        for (f in d)
            d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete br[b];
        return e.length ? "&md=" + e.join(".") : ""
    }
    ;var er = {}
      , fr = {
        aev: "1",
        c: "2",
        jsm: "3",
        v: "4",
        j: "5",
        smm: "6",
        rmm: "7",
        input: "8"
    };
    function gr(a, b, c) {
        if (Kg) {
            er[a] = er[a] || [];
            var d = fr[b] || "0", e;
            e = c instanceof C.Element ? "1" : c instanceof C.Event ? "2" : c instanceof C.RegExp ? "3" : c === C ? "4" : c === E ? "5" : c instanceof C.Promise ? "6" : c instanceof C.Storage ? "7" : c instanceof C.Date ? "8" : c instanceof C.History ? "9" : c instanceof C.Performance ? "a" : c === C.crypto ? "b" : c instanceof C.Location ? "c" : c instanceof C.Navigator ? "d" : "object" !== typeof c || Ya(c) ? "0" : "e";
            er[a].push("" + d + e)
        }
    }
    function hr(a) {
        var b = a.eventId
          , c = er[b] || [];
        if (!c.length)
            return "";
        a.Cb && delete er[b];
        return "&pcr=" + c.join(".")
    }
    ;var ir = {}
      , jr = {};
    function kr(a, b, c) {
        if (Kg && b) {
            var d = cg(b);
            ir[a] = ir[a] || [];
            ir[a].push(c + d);
            var e = (ed(b) ? "1" : "2") + d;
            jr[a] = jr[a] || [];
            jr[a].push(e);
            Ug(a)
        }
    }
    function lr(a) {
        var b = a.eventId
          , c = a.Cb
          , d = ""
          , e = ir[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = jr[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete ir[b],
        delete jr[b]);
        return d
    }
    ;function mr(a, b, c, d) {
        var e = Sc[a]
          , f = nr(a, b, c, d);
        if (!f)
            return null;
        var h = bd(e[pc.Gh], c, []);
        if (h && h.length) {
            var l = h[0];
            f = mr(l.index, {
                onSuccess: f,
                onFailure: 1 === l.Uh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function nr(a, b, c, d) {
        function e() {
            if (f[pc.Nj])
                l();
            else {
                var w = cd(f, c, [])
                  , x = w[pc.Gi];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!Q(x[y])) {
                            l();
                            return
                        }
                var A = iq(c.Nb, String(f[pc.ia]), Number(f[pc.rd]), w[pc.Oj])
                  , B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var F = Ja() - I;
                        kr(c.id, Sc[a], "5");
                        jq(c.Nb, A, "success", F);
                        P(29) && Zo(c, f, ho.D.Jh);
                        h()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var F = Ja() - I;
                        kr(c.id, Sc[a], "6");
                        jq(c.Nb, A, "failure", F);
                        P(29) && Zo(c, f, ho.D.Ih);
                        l()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                kr(c.id, f, "1");
                var D = function() {
                    of(3);
                    var F = Ja() - I;
                    kr(c.id, f, "7");
                    jq(c.Nb, A, "exception", F);
                    P(29) && Zo(c, f, ho.D.Hh);
                    B || (B = !0,
                    l())
                };
                P(29) && Yo(c, f);
                var I = Ja();
                try {
                    ad(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (F) {
                    D(F)
                }
                P(29) && Zo(c, f, ho.D.Kh)
            }
        }
        var f = Sc[a]
          , h = b.onSuccess
          , l = b.onFailure
          , m = b.terminate;
        if (c.Vf(f))
            return null;
        var n = bd(f[pc.Lh], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = mr(p.index, {
                onSuccess: h,
                onFailure: l,
                terminate: m
            }, c, d);
            if (!q)
                return null;
            h = q;
            l = 2 === p.Uh ? m : q
        }
        if (f[pc.Ch] || f[pc.Qj]) {
            var r = f[pc.Ch] ? Tc : c.Kl
              , t = h
              , u = l;
            if (!r[a]) {
                e = La(e);
                var v = or(a, r, e);
                h = v.onSuccess;
                l = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }
    function or(a, b, c) {
        var d = []
          , e = [];
        b[a] = pr(d, e, c);
        return {
            onSuccess: function() {
                b[a] = qr;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            onFailure: function() {
                b[a] = rr;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function pr(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function qr(a) {
        a()
    }
    function rr(a, b) {
        b()
    }
    ;var tr = function(a, b) {
        return 1 === arguments.length ? sr("config", a) : sr("config", a, b)
    }
      , ur = function(a, b, c) {
        c = c || {};
        c[K.g.Kb] = a;
        return sr("event", b, c)
    };
    function sr(a) {
        return arguments
    }
    var vr = function() {
        this.h = [];
        this.B = []
    };
    vr.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.B.length; f++)
            try {
                this.B[f](e)
            } catch (h) {}
    }
    ;
    vr.prototype.listen = function(a) {
        this.B.push(a)
    }
    ;
    vr.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    vr.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    }
    ;
    var xr = function(a, b, c) {
        wr().enqueue(a, b, c)
    }
      , zr = function() {
        var a = yr;
        wr().listen(a)
    };
    function wr() {
        var a = Ae.mb;
        a || (a = new vr,
        Ae.mb = a);
        return a
    }
    var Br = function() {
        var a = Ae.zones;
        a || (a = Ae.zones = new Ar);
        return a
    }
      , Cr = {
        zone: 1,
        cn: 1,
        css: 1,
        ew: 1,
        eq: 1,
        ge: 1,
        gt: 1,
        lc: 1,
        le: 1,
        lt: 1,
        re: 1,
        sw: 1,
        um: 1
    }
      , Dr = {
        cl: ["ecl"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"]
    }
      , Ar = function() {
        this.h = {};
        this.B = {};
        this.C = 0
    };
    ca = Ar.prototype;
    ca.isActive = function(a, b) {
        for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++)
            ;
        if (!c)
            return !0;
        if (!this.isActive([c.jg], b))
            return !1;
        for (var e = 0; e < c.Qd.length; e++)
            if (this.B[c.Qd[e]].sc(b))
                return !0;
        return !1
    }
    ;
    ca.getIsAllowedFn = function(a, b) {
        if (!this.isActive(a, b))
            return function() {
                return !1
            }
            ;
        for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++)
            ;
        if (!c)
            return function() {
                return !0
            }
            ;
        for (var e = [], f = 0; f < c.Qd.length; f++) {
            var h = this.B[c.Qd[f]];
            h.sc(b) && e.push(h)
        }
        if (!e.length)
            return function() {
                return !1
            }
            ;
        var l = this.getIsAllowedFn([c.jg], b);
        return function(m, n) {
            n = n || [];
            if (!l(m, n))
                return !1;
            for (var p = 0; p < e.length; ++p)
                if (e[p].C(m, n))
                    return !0;
            return !1
        }
    }
    ;
    ca.unregisterChild = function(a) {
        for (var b = 0; b < a.length; b++)
            delete this.h[a[b]]
    }
    ;
    ca.createZone = function(a, b) {
        var c = String(++this.C);
        this.B[c] = new Er(a,b);
        return c
    }
    ;
    ca.updateZone = function(a, b, c) {
        var d = this.B[a];
        d && d.I(b, c)
    }
    ;
    ca.registerChild = function(a, b, c) {
        var d = this.h[a];
        if (!d && Ae[a] || !d && xg(a) || d && d.jg !== b)
            return !1;
        if (d)
            return d.Qd.push(c),
            !1;
        this.h[a] = {
            jg: b,
            Qd: [c]
        };
        return !0
    }
    ;
    var Er = function(a, b) {
        this.h = [{
            eventId: a,
            sc: !0
        }];
        this.B = null;
        if (b) {
            this.B = {};
            for (var c = 0; c < b.length; c++)
                this.B[b[c]] = !0
        }
    };
    Er.prototype.I = function(a, b) {
        var c = this.h[this.h.length - 1];
        a <= c.eventId || c.sc !== b && this.h.push({
            eventId: a,
            sc: b
        })
    }
    ;
    Er.prototype.sc = function(a) {
        for (var b = this.h.length - 1; 0 <= b; b--)
            if (this.h[b].eventId <= a)
                return this.h[b].sc;
        return !1
    }
    ;
    Er.prototype.C = function(a, b) {
        b = b || [];
        if (!this.B || Cr[a] || this.B[a])
            return !0;
        for (var c = 0; c < b.length; ++c)
            if (this.B[b[c]])
                return !0;
        return !1
    }
    ;
    var Fr = function(a, b, c, d, e, f) {
        var h = Br();
        c = c && Pa(c, Dr);
        for (var l = h.createZone(a, c), m = 0; m < b.length; m++) {
            var n = String(b[m]);
            if (h.registerChild(n, qg(), l)) {
                var p = a
                  , q = d
                  , r = e
                  , t = f;
                if (0 === n.indexOf("GTM-"))
                    Mp(n, void 0, !1, {
                        source: 1,
                        fromContainerExecution: !0
                    });
                else {
                    var u = sr("js", Ia());
                    Mp(n, void 0, !0, {
                        source: 1,
                        fromContainerExecution: !0
                    });
                    var v = {
                        originatingEntity: r,
                        inheritParentConfig: t
                    };
                    xr(u, p, v);
                    xr(tr(n, q), p, v)
                }
            }
        }
        return l
    }
      , Gr = function(a, b, c) {
        Br().updateZone(a, b, c)
    };
    var Hr = function(a) {
        var b = Ae.zones;
        return b ? b.getIsAllowedFn(mg(), a) : function() {
            return !0
        }
    }
      , Ir = function() {
        yp(function(a, b) {
            var c = Ae.zones;
            return c ? c.isActive(mg(), b) : !0
        })
    };
    var Lr = function(a, b) {
        for (var c = [], d = 0; d < Sc.length; d++)
            if (a[d]) {
                var e = Sc[d];
                var f = mq(b.Nb);
                try {
                    var h = mr(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var l = e[pc.ia];
                        if (!l)
                            throw "Error: No function name given for function call.";
                        var m = Uc[l];
                        c.push({
                            vi: d,
                            ji: (m ? m.priorityOverride || 0 : 0) || wp(e[pc.ia], 1) || 0,
                            execute: h
                        })
                    } else
                        Jr(d, b),
                        f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Kr);
        for (var n = 0; n < c.length; n++)
            c[n].execute();
        return 0 < c.length
    };
    function Kr(a, b) {
        var c, d = b.ji, e = a.ji;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var h = a.vi
              , l = b.vi;
            f = h > l ? 1 : h < l ? -1 : 0
        }
        return f
    }
    function Jr(a, b) {
        if (Kg) {
            var c = function(d) {
                var e = b.Vf(Sc[d]) ? "3" : "4"
                  , f = bd(Sc[d][pc.Gh], b, []);
                f && f.length && c(f[0].index);
                kr(b.id, Sc[d], e);
                var h = bd(Sc[d][pc.Lh], b, []);
                h && h.length && c(h[0].index)
            };
            c(a)
        }
    }
    var Or = !1, Mr;
    var Tr = function(a) {
        var b = a["gtm.uniqueEventId"]
          , c = a["gtm.priorityId"]
          , d = a.event;
        P(29) && So(b, d);
        if ("gtm.js" === d) {
            if (Or)
                return !1;
            Or = !0
        }
        var e, f = !1;
        if (zp().every(function(r) {
            return r(d, b)
        }))
            e = Hr(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
                return !1;
            f = !0;
            e = Hr(Number.MAX_SAFE_INTEGER)
        }
        $q(b, d);
        var h = a.eventCallback
          , l = a.eventTimeout
          , m = {
            id: b,
            priorityId: c,
            name: d,
            Vf: Gp(e),
            Kl: [],
            bi: function() {
                J(6);
                of(0)
            },
            Ph: Pr(),
            Qh: Qr(b),
            Nb: new hq(function() {
                if (P(29)) {}
                h && h.apply(h, [].slice.call(arguments, 0))
            }
            ,l)
        };
        P(56) && (m.lg = cr);
        P(29) && Uo(m.id, m.name);
        var n = id(m);
        P(29) && Vo(m.id, m.name);
        f && (n = Rr(n));
        P(29) && To(b, d);
        var p = Lr(n, m)
          , q = !1;
        nq(m.Nb);
        "gtm.js" !== d && "gtm.sync" !== d || uq(qg());
        return Sr(n, p) || q
    };
    function Qr(a) {
        return function(b) {
            Za(b) || gr(a, "input", b)
        }
    }
    function Pr() {
        var a = {};
        a.event = df("event", 1);
        a.ecommerce = df("ecommerce", 1);
        a.gtm = df("gtm");
        a.eventModel = df("eventModel");
        return a
    }
    function Rr(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Sc[c][pc.ia]);
                if (Ce[d] || void 0 !== Sc[c][pc.Rj] || Te[d] || wp(d, 2))
                    b[c] = !0
            }
        return b
    }
    function Sr(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Sc[c] && !De[String(Sc[c][pc.ia])])
                return !0;
        return !1
    }
    var Ur = {};
    function Vr(a, b, c) {
        Kg && void 0 !== a && (Ur[a] = Ur[a] || [],
        Ur[a].push(c + b),
        Ug(a))
    }
    function Wr(a) {
        var b = a.eventId
          , c = a.Cb
          , d = ""
          , e = Ur[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete Ur[b];
        return d
    }
    ;var Yr = function(a, b, c, d) {
        var e = il(c, d.isGtmEvent);
        e && Xr.push("event", [b, a], e, d)
    }
      , Zr = function(a, b, c, d) {
        var e = il(c, d.isGtmEvent);
        e && Xr.push("get", [a, b], e, d)
    }
      , $r = function() {
        this.status = 1;
        this.I = {};
        this.h = {};
        this.M = {};
        this.U = null;
        this.C = {};
        this.B = !1
    }
      , as = function(a, b, c, d) {
        var e = Ja();
        this.type = a;
        this.C = e;
        this.h = b;
        this.B = c;
        this.messageContext = d
    }
      , bs = function() {
        this.B = {};
        this.C = {};
        this.h = []
    }
      , cs = function(a, b) {
        var c = b.X;
        return a.B[c] = a.B[c] || new $r
    }
      , ds = function(a, b, c, d) {
        if (d.h) {
            var e = cs(a, d.h)
              , f = e.U;
            if (f) {
                var h = z(c)
                  , l = z(e.I[d.h.id])
                  , m = z(e.C)
                  , n = z(e.h)
                  , p = z(a.C)
                  , q = {};
                if (Kg)
                    try {
                        q = z(Xe)
                    } catch (v) {
                        J(72)
                    }
                var r = d.h.prefix
                  , t = function(v) {
                    Vr(d.messageContext.eventId, r, v)
                }
                  , u = uh(th(sh(rh(qh(oh(nh(ph(mh(lh(kh(new jh(d.messageContext.eventId,d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                            d.messageContext.onSuccess()
                    }
                }), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("3");
                        if (d.messageContext.onFailure)
                            d.messageContext.onFailure()
                    }
                }), !!d.messageContext.isGtmEvent));
                try {
                    Vr(d.messageContext.eventId, r, "1"),
                    Yp(d.type, d.h.id, u),
                    f(d.h.id, b, d.C, u)
                } catch (v) {
                    Vr(d.messageContext.eventId, r, "4")
                }
            }
        }
    };
    bs.prototype.register = function(a, b, c) {
        var d = cs(this, a);
        3 !== d.status && (d.U = b,
        d.status = 3,
        c && (z(d.h, c),
        d.h = c),
        this.flush())
    }
    ;
    bs.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === cs(this, c).status && (cs(this, c).status = 2,
        this.push("require", [{}], c, {})),
        cs(this, c).B && (d.deferrable = !1));
        this.h.push(new as(a,c,b,d));
        d.deferrable || this.flush()
    }
    ;
    bs.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
            e = {
                xb: e.xb,
                Fe: e.Fe
            };
            var f = this.h[0]
              , h = f.h;
            if (f.messageContext.deferrable)
                !h || cs(this, h).B ? (f.messageContext.deferrable = !1,
                this.h.push(f)) : c.push(f),
                this.h.shift();
            else {
                switch (f.type) {
                case "require":
                    if (3 !== cs(this, h).status && !a) {
                        this.h.push.apply(this.h, c);
                        return
                    }
                    break;
                case "set":
                    k(f.B[0], function(r, t) {
                        z(Ra(r, t), b.C)
                    });
                    break;
                case "config":
                    var l = cs(this, h);
                    e.xb = {};
                    k(f.B[0], function(r) {
                        return function(t, u) {
                            z(Ra(t, u), r.xb)
                        }
                    }(e));
                    var m = !!e.xb[K.g.Mb];
                    delete e.xb[K.g.Mb];
                    var n = h.X === h.id;
                    m || (n ? l.C = {} : l.I[h.id] = {});
                    l.B && m || ds(this, K.g.la, e.xb, f);
                    l.B = !0;
                    n ? z(e.xb, l.C) : (z(e.xb, l.I[h.id]),
                    J(70));
                    d = !0;
                    break;
                case "event":
                    e.Fe = {};
                    k(f.B[0], function(r) {
                        return function(t, u) {
                            z(Ra(t, u), r.Fe)
                        }
                    }(e));
                    ds(this, f.B[1], e.Fe, f);
                    break;
                case "get":
                    var p = {}
                      , q = (p[K.g.Ya] = f.B[0],
                    p[K.g.nb] = f.B[1],
                    p);
                    ds(this, K.g.Ha, q, f)
                }
                this.h.shift();
                es(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    }
    ;
    var es = function(a, b) {
        if ("require" !== b.type)
            if (b.h)
                for (var c = cs(a, b.h).M[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.B)
                    if (a.B.hasOwnProperty(e)) {
                        var f = a.B[e];
                        if (f && f.M)
                            for (var h = f.M[b.type] || [], l = 0; l < h.length; l++)
                                h[l]()
                    }
    }
      , fs = function(a, b) {
        var c = Xr
          , d = z(b);
        z(cs(c, a).h, d);
        cs(c, a).h = d
    }
      , Xr = new bs;
    var gs = {}
      , hs = {}
      , is = function(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
            Oe: e.Oe,
            Je: e.Je
        },
        f++) {
            var h = a[f];
            if (0 <= h.indexOf("-")) {
                if (e.Oe = il(h, b),
                e.Oe) {
                    var l = og();
                    xa(l, function(r) {
                        return function(t) {
                            return r.Oe.X === t
                        }
                    }(e)) ? c.push(h) : d.push(h)
                }
            } else {
                var m = gs[h] || [];
                e.Je = {};
                m.forEach(function(r) {
                    return function(t) {
                        return r.Je[t] = !0
                    }
                }(e));
                for (var n = mg(), p = 0; p < n.length; p++)
                    if (e.Je[n[p]]) {
                        c = c.concat(og());
                        break
                    }
                var q = hs[h] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            jl: c,
            kl: d
        }
    }
      , js = function(a) {
        k(gs, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    }
      , ks = function(a) {
        k(hs, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var ls = "HA GF G UA AW DC MC".split(" ")
      , ms = !1
      , ns = !1;
    function os(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ue()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var ps = void 0
      , qs = void 0;
    function rs(a, b, c) {
        var d = z(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && J(136);
        var e = z(b);
        z(c, e);
        xr(tr(mg()[0], e), a.eventId, d)
    }
    function ss(a) {
        for (var b = ha([K.g.Vc, K.g.Lb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value
              , e = a && a[d] || Xr.C[d];
            if (e)
                return e
        }
    }
    var ts = {
        config: function(a, b) {
            var c = P(57)
              , d = os(a, b);
            if (!(2 > a.length) && g(a[1])) {
                var e = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Ya(a[2]) || 3 < a.length)
                        return;
                    e = a[2]
                }
                var f = il(a[1], b.isGtmEvent);
                if (f) {
                    var h, l, m;
                    a: {
                        if (!hg.ld) {
                            var n = sg(yg());
                            if (Cg(n)) {
                                var p = n.parent
                                  , q = p.isDestination;
                                m = {
                                    nl: sg(p),
                                    il: q
                                };
                                break a
                            }
                        }
                        m = void 0
                    }
                    var r = m;
                    r && (h = r.nl,
                    l = r.il);
                    $q(d.eventId, "gtag.config");
                    var t = f.X
                      , u = f.id !== t;
                    if (u ? -1 === og().indexOf(t) : -1 === mg().indexOf(t)) {
                        if (!(c && b.inheritParentConfig || P(25) && e[K.g.qb])) {
                            var v = ss(e);
                            if (u)
                                Np(t, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                            else if (c && void 0 !== h && -1 !== h.containers.indexOf(t)) {
                                var w = e;
                                ps ? rs(b, w, ps) : qs || (qs = z(w))
                            } else
                                Mp(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                        }
                    } else {
                        if (h && (J(128),
                        l && J(130),
                        c && b.inheritParentConfig)) {
                            var x;
                            var y = e;
                            qs ? (rs(b, qs, y),
                            x = !1) : (!y[K.g.Mb] && Fe && ps || (ps = z(y)),
                            x = !0);
                            x && h.containers && h.containers.join(",");
                            return
                        }
                        if (Fe && !u && !e[K.g.Mb]) {
                            var A = ns;
                            ns = !0;
                            if (A)
                                return
                        }
                        ms || J(43);
                        if (!b.noTargetGroup)
                            if (u) {
                                ks(f.id);
                                var B = f.id
                                  , D = e[K.g.me] || "default";
                                D = String(D).split(",");
                                for (var I = 0; I < D.length; I++) {
                                    var F = hs[D[I]] || [];
                                    hs[D[I]] = F;
                                    0 > F.indexOf(B) && F.push(B)
                                }
                            } else {
                                js(f.id);
                                var G = f.id
                                  , M = e[K.g.me] || "default";
                                M = M.toString().split(",");
                                for (var N = 0; N < M.length; N++) {
                                    var R = gs[M[N]] || [];
                                    gs[M[N]] = R;
                                    0 > R.indexOf(G) && R.push(G)
                                }
                            }
                        delete e[K.g.me];
                        var Z = b.eventMetadata || {};
                        Z.hasOwnProperty("is_external_event") || (Z.is_external_event = !b.fromContainerExecution);
                        b.eventMetadata = Z;
                        delete e[K.g.Pc];
                        for (var S = u ? [f.id] : og(), O = 0; O < S.length; O++) {
                            var Y = e
                              , ba = z(b)
                              , aa = il(S[O], ba.isGtmEvent);
                            aa && Xr.push("config", [Y], aa, ba)
                        }
                    }
                }
            }
        },
        consent: function(a, b) {
            if (3 === a.length) {
                J(39);
                var c = os(a, b)
                  , d = a[1];
                "default" === d ? Xf(a[2]) : "update" === d ? Yf(a[2], c) : "declare" === d ? b.fromContainerExecution && Wf(a[2]) : "core_platform_services" === d && Zf(a[2])
            }
        },
        event: function(a, b) {
            var c = a[1];
            if (!(2 > a.length) && g(c)) {
                var d;
                if (2 < a.length) {
                    if (!Ya(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = d
                  , f = {}
                  , h = (f.event = c,
                f);
                e && (h.eventModel = z(e),
                e[K.g.Pc] && (h.eventCallback = e[K.g.Pc]),
                e[K.g.fe] && (h.eventTimeout = e[K.g.fe]));
                var l = os(a, b)
                  , m = l.eventId
                  , n = l.priorityId;
                h["gtm.uniqueEventId"] = m;
                n && (h["gtm.priorityId"] = n);
                if ("optimize.callback" === c)
                    return h.eventModel = h.eventModel || {},
                    h;
                var p;
                var q = d
                  , r = q && q[K.g.Kb];
                void 0 === r && (r = $e(K.g.Kb, 2),
                void 0 === r && (r = "default"));
                if (g(r) || va(r)) {
                    var t;
                    b.isGtmEvent ? t = g(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                    var u = is(t, b.isGtmEvent)
                      , v = u.jl
                      , w = u.kl;
                    if (w.length)
                        for (var x = ss(q), y = 0; y < w.length; y++) {
                            var A = il(w[y], b.isGtmEvent);
                            A && Np(A.X, x, {
                                source: 3,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    p = kl(v, b.isGtmEvent)
                } else
                    p = void 0;
                var B = p;
                if (B) {
                    $q(m, c);
                    for (var D = [], I = 0; I < B.length; I++) {
                        var F = B[I]
                          , G = z(b);
                        if (-1 !== ls.indexOf(tg(F.prefix))) {
                            var M = z(d)
                              , N = G.eventMetadata || {};
                            N.hasOwnProperty("is_external_event") || (N.is_external_event = !G.fromContainerExecution);
                            G.eventMetadata = N;
                            delete M[K.g.Pc];
                            Yr(c, M, F.id, G)
                        }
                        D.push(F.id)
                    }
                    h.eventModel = h.eventModel || {};
                    0 < B.length ? h.eventModel[K.g.Kb] = D.join() : delete h.eventModel[K.g.Kb];
                    ms || J(43);
                    void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                    h.eventModel[K.g.pb] && (b.noGtmEvent = !0);
                    return b.noGtmEvent ? void 0 : h
                }
            }
        },
        get: function(a, b) {
            J(53);
            if (4 === a.length && g(a[1]) && g(a[2]) && ta(a[3])) {
                var c = il(a[1], b.isGtmEvent)
                  , d = String(a[2])
                  , e = a[3];
                if (c) {
                    ms || J(43);
                    var f = ss();
                    if (!xa(og(), function(l) {
                        return c.X === l
                    }))
                        Np(c.X, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                    else if (-1 !== ls.indexOf(tg(c.prefix))) {
                        os(a, b);
                        var h = {};
                        Tf(z((h[K.g.Ya] = d,
                        h[K.g.nb] = e,
                        h)));
                        Zr(d, function(l) {
                            H(function() {
                                return e(l)
                            })
                        }, c.id, b)
                    }
                }
            }
        },
        js: function(a, b) {
            if (2 == a.length && a[1].getTime) {
                ms = !0;
                var c = os(a, b)
                  , d = c.eventId
                  , e = c.priorityId
                  , f = {};
                return f.event = "gtm.js",
                f["gtm.start"] = a[1].getTime(),
                f["gtm.uniqueEventId"] = d,
                f["gtm.priorityId"] = e,
                f
            }
        },
        policy: function() {},
        set: function(a, b) {
            var c;
            2 == a.length && Ya(a[1]) ? c = z(a[1]) : 3 == a.length && g(a[1]) && (c = {},
            Ya(a[2]) || va(a[2]) ? c[a[1]] = z(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = os(a, b)
                  , e = d.eventId
                  , f = d.priorityId;
                z(c);
                var h = z(c);
                Xr.push("set", [h], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                P(13) && delete c.event;
                b.overwriteModelFields = !0;
                return c
            }
        }
    }
      , us = {
        policy: !0
    };
    var vs = function(a) {
        var b = C[ze.da].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b)
                if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
            c && (b.end(),
            b.end = null)
        }
    }
      , ws = function(a) {
        var b = C[ze.da]
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var xs = !1
      , ys = [];
    function zs() {
        if (!xs) {
            xs = !0;
            for (var a = 0; a < ys.length; a++)
                H(ys[a])
        }
    }
    var As = function(a) {
        xs ? H(a) : ys.push(a)
    };
    var Rs = function(a) {
        if (Qs(a))
            return a;
        this.h = a
    };
    Rs.prototype.getUntrustedMessageValue = function() {
        return this.h
    }
    ;
    var Qs = function(a) {
        return !a || "object" !== Wa(a) || Ya(a) ? !1 : "getUntrustedMessageValue"in a
    };
    Rs.prototype.getUntrustedMessageValue = Rs.prototype.getUntrustedMessageValue;
    var Ss = 0
      , Ts = {}
      , Us = []
      , Vs = []
      , Ws = !1
      , Xs = !1;
    function Ys(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Zs = function(a) {
        return C[ze.da].push(a)
    }
      , $s = function(a, b) {
        if (!ua(b) || 0 > b)
            b = 0;
        var c = Ae[ze.da]
          , d = 0
          , e = !1
          , f = void 0;
        f = C.setTimeout(function() {
            e || (e = !0,
            a());
            f = void 0
        }, b);
        return function() {
            var h = c ? c.subscribers : 1;
            ++d === h && (f && (C.clearTimeout(f),
            f = void 0),
            e || (a(),
            e = !0))
        }
    };
    function at(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && cf(e),
            cf(e, f))
        });
        Pe || (Pe = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        "number" !== typeof d && (d = Ue(),
        a["gtm.uniqueEventId"] = d,
        cf("gtm.uniqueEventId", d));
        return Tr(a)
    }
    function bt(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Ca(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b)
                return !0
        }
        return !1
    }
    function ct() {
        var a;
        if (Vs.length)
            a = Vs.shift();
        else if (Us.length)
            a = Us.shift();
        else
            return;
        var b;
        var c = a;
        if (Ws || !bt(c.message))
            b = c;
        else {
            Ws = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ue());
            var e = {}
              , f = {
                message: (e.event = "gtm.init_consent",
                e["gtm.uniqueEventId"] = d - 2,
                e),
                messageContext: {
                    eventId: d - 2
                }
            }
              , h = {}
              , l = {
                message: (h.event = "gtm.init",
                h["gtm.uniqueEventId"] = d - 1,
                h),
                messageContext: {
                    eventId: d - 1
                }
            };
            Us.unshift(l, c);
            if (Kg) {
                var m = jg.ctid;
                if (m) {
                    var n, p = sg(yg());
                    n = p && p.context;
                    var q, r = zj(C.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution
                      , u = n && n.source
                      , v = jg.Jf
                      , w = hg.ld;
                    Kg && (Op || (Op = q),
                    Pp.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }
    function dt() {
        for (var a = !1, b; !Xs && (b = ct()); ) {
            Xs = !0;
            delete Xe.eventModel;
            Ze();
            var c = b
              , d = c.message
              , e = c.messageContext;
            if (null == d)
                Xs = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
                        var l = f[h]
                          , m = $e(l, 1);
                        if (va(m) || Ya(m))
                            m = z(m);
                        Ye[l] = m
                    }
                try {
                    if (ta(d))
                        try {
                            d.call(af)
                        } catch (D) {}
                    else if (va(d)) {
                        var n = d;
                        if (g(n[0])) {
                            var p = n[0].split(".")
                              , q = p.pop()
                              , r = n.slice(1)
                              , t = $e(p.join("."), 2);
                            if (null != t)
                                try {
                                    t[q].apply(t, r)
                                } catch (D) {}
                        }
                    } else {
                        var u = void 0
                          , v = !1;
                        if (Ca(d)) {
                            a: {
                                if (d.length && g(d[0])) {
                                    var w = ts[d[0]];
                                    if (w && (!e.fromContainerExecution || !us[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }
                            (v = u && "set" === d[0] && !!u.event) && J(101)
                        } else
                            u = d;
                        if (u) {
                            var x = at(u, e);
                            a = x || a;
                            v && x && J(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Ze(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var A = Ts[String(y)] || [], B = 0; B < A.length; B++)
                            Vs.push(et(A[B]));
                        A.length && Vs.sort(Ys);
                        delete Ts[String(y)];
                        y > Ss && (Ss = y)
                    }
                    Xs = !1
                }
            }
        }
        return !a
    }
    function ft() {
        if (P(29)) {
            var a = gt();
        }
        var e = dt();
        try {
            vs(qg())
        } catch (f) {}
        return e
    }
    function yr(a) {
        if (Ss < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Ts[b] = Ts[b] || [];
            Ts[b].push(a)
        } else
            Vs.push(et(a)),
            Vs.sort(Ys),
            H(function() {
                Xs || dt()
            })
    }
    function et(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var ht = function() {
        function a(f) {
            var h = {};
            if (Qs(f)) {
                var l = f;
                f = Qs(l) ? l.getUntrustedMessageValue() : void 0;
                h.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: h
            }
        }
        var b = Tb(ze.da, [])
          , c = Ae[ze.da] = Ae[ze.da] || {};
        !0 === c.pruned && J(83);
        Ts = wr().get();
        zr();
        eq(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom",
                f))
            }
        });
        As(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load",
                f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (0 < Ae.SANDBOXED_JS_SEMAPHORE) {
                f = [];
                for (var h = 0; h < arguments.length; h++)
                    f[h] = new Rs(arguments[h])
            } else
                f = [].slice.call(arguments, 0);
            var l = f.map(function(q) {
                return a(q)
            });
            Us.push.apply(Us, l);
            var m = d.apply(b, f)
              , n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (J(4),
                c.pruned = !0; this.length > n; )
                    this.shift();
            var p = "boolean" !== typeof m || m;
            return dt() && p
        }
        ;
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        Us.push.apply(Us, e);
        gt() && (P(29) && Ro(),
        H(ft))
    }
      , gt = function() {
        var a = !0;
        return a
    };
    function it(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a)
          , c = Ja();
        return b < c + 3E5 && b > c - 9E5
    }
    function jt(a) {
        return a && 0 === a.indexOf("pending:") ? it(a.substr(8)) : !1
    }
    ;var Ft = function() {};
    var Gt = new String("undefined")
      , Ht = function() {};
    Ht.prototype.toString = function() {
        return "undefined"
    }
    ;
    var It = new Ht;
    var nu = C.clearTimeout
      , ou = C.setTimeout
      , U = function(a, b, c, d) {
        if ($i()) {
            b && H(b)
        } else
            return Yb(a, b, c, d)
    }
      , pu = function() {
        return new Date
    }
      , qu = function() {
        return C.location.href
    }
      , ru = function(a) {
        return xj(zj(a), "fragment")
    }
      , su = function(a) {
        return yj(zj(a))
    }
      , tu = function(a, b) {
        return $e(a, b || 2)
    }
      , uu = function(a, b, c) {
        var d;
        b ? (a.eventCallback = b,
        c && (a.eventTimeout = c),
        d = Zs(a)) : d = Zs(a);
        return d
    }
      , vu = function(a, b) {
        C[a] = b
    }
      , V = function(a, b, c) {
        b && (void 0 === C[a] || c && !C[a]) && (C[a] = b);
        return C[a]
    }
      , wu = function(a, b, c) {
        return Hi(a, b, void 0 === c ? !0 : !!c)
    }
      , xu = function(a, b, c) {
        return 0 === Qi(a, b, c)
    }
      , yu = function(a, b) {
        if ($i()) {
            b && H(b)
        } else
            $b(a, b)
    }
      , zu = function(a) {
        return !!Ut(a, "init", !1)
    }
      , Au = function(a) {
        St(a, "init", !0)
    }
      , Bu = function(a, b, c) {
        Za(a) || gr(c, b, a)
    };
    function Yu(a, b) {
        function c(h) {
            var l = zj(h)
              , m = xj(l, "protocol")
              , n = xj(l, "host", !0)
              , p = xj(l, "port")
              , q = xj(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p)
                m = "web",
                p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function Zu(a) {
        return $u(a) ? 1 : 0
    }
    function $u(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = z(a, {});
                z({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Zu(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return 0 <= String(b).indexOf(String(c));
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var h = 0; h < xd.length; h++) {
                            var l = xd[h];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (v) {}
                f = !1
            }
            return f;
        case "_ew":
            var m, n;
            m = String(b);
            n = String(c);
            var p = m.length - n.length;
            return 0 <= p && m.indexOf(n, p) === p;
        case "_eq":
            return String(b) === String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            var q;
            var r = a.ignore_case ? "i" : void 0;
            try {
                var t = String(c) + r
                  , u = yd.get(t);
                u || (u = new RegExp(c,r),
                yd.set(t, u));
                q = u.test(b)
            } catch (v) {
                q = !1
            }
            return q;
        case "_sw":
            return 0 === String(b).indexOf(String(c));
        case "_um":
            return Yu(b, c)
        }
        return !1
    }
    ;function av() {
        var a = ["&cv=1", "&rv=" + ze.Ff, "&tc=" + Sc.filter(function(b) {
            return b
        }).length];
        ze.pd && a.push("&x=" + ze.pd);
        return a.join("")
    }
    ;var Ev = function() {
        var a = !0;
        li(7) && li(9) && li(10) || (a = !1);
        return a
    }
      , Fv = function() {
        var a = !0;
        li(3) && li(4) || (a = !1);
        return a
    };
    var Jv = function(a, b) {
        if (!b.isGtmEvent) {
            var c = T(b, K.g.Ya)
              , d = T(b, K.g.nb)
              , e = T(b, c);
            if (void 0 === e) {
                var f = void 0;
                Gv.hasOwnProperty(c) ? f = Gv[c] : Hv.hasOwnProperty(c) && (f = Hv[c]);
                1 === f && (f = Iv(c));
                g(f) ? qq()(function() {
                    var h = qq().getByName(a).get(f);
                    d(h)
                }) : d(void 0)
            } else
                d(e)
        }
    }
      , Kv = function(a, b) {
        var c = a[K.g.Ib]
          , d = b + "."
          , e = a[K.g.O] || ""
          , f = void 0 === c ? !!a.use_anchor : "fragment" === c
          , h = !!a[K.g.rb];
        e = String(e).replace(/\s+/g, "").split(",");
        var l = qq();
        l(d + "require", "linker");
        l(d + "linker:autoLink", e, f, h)
    }
      , Ov = function(a, b, c) {
        if (Nf() || P(44))
            if (!c.isGtmEvent || !Lv[a]) {
                var d = !Q(K.g.N)
                  , e = function(f) {
                    var h, l, m = qq(), n = Mv(b, "", c), p, q = n.createOnlyFields._useUp;
                    if (c.isGtmEvent || Nv(b, n.createOnlyFields)) {
                        c.isGtmEvent && (h = "gtm" + Ue(),
                        l = n.createOnlyFields,
                        n.gtmTrackerName && (l.name = h));
                        m(function() {
                            var t = m.getByName(b);
                            t && (p = t.get("clientId"));
                            c.isGtmEvent || m.remove(b)
                        });
                        m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                        d && Q(K.g.N) && (d = !1,
                        m(function() {
                            var t = qq().getByName(c.isGtmEvent ? h : b);
                            !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1",
                            n.fieldsToSet["&sst.gcut"] = ue[f]) : (n.fieldsToSend["&gcu"] = "1",
                            n.fieldsToSend["&sst.gcut"] = ue[f]),
                            t.set(n.fieldsToSet),
                            c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                        }));
                        c.isGtmEvent && m(function() {
                            m.remove(h)
                        })
                    }
                };
                $f(function() {
                    return e(K.g.N)
                }, K.g.N);
                $f(function() {
                    return e(K.g.F)
                }, K.g.F);
                c.isGtmEvent && (Lv[a] = !0)
            }
    }
      , Pv = function(a, b) {
        Jp() && b && (a[K.g.Hb] = b)
    }
      , Yv = function(a, b, c) {
        function d() {
            var G = T(c, K.g.Kc);
            l(function() {
                if (!c.isGtmEvent && Ya(G)) {
                    var M = u.fieldsToSend, N = m().getByName(n), R;
                    for (R in G)
                        if (G.hasOwnProperty(R) && /^(dimension|metric)\d+$/.test(R) && void 0 != G[R]) {
                            var Z = N.get(Iv(G[R]));
                            Qv(M, R, Z)
                        }
                }
            })
        }
        function e() {
            if (u.displayfeatures) {
                var G = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                p("require", "displayfeatures", void 0, {
                    cookieName: G
                })
            }
        }
        var f = a
          , h = "https://www.google-analytics.com/analytics.js"
          , l = c.isGtmEvent ? sq(T(c, "gaFunctionName")) : sq();
        if (ta(l)) {
            var m = qq, n;
            c.isGtmEvent ? n = T(c, "name") || T(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
            var p = function(G) {
                var M = [].slice.call(arguments, 0);
                M[0] = n ? n + "." + M[0] : "" + M[0];
                l.apply(window, M)
            }
              , q = function(G) {
                var M = function(Y, ba) {
                    for (var aa = 0; ba && aa < ba.length; aa++)
                        p(Y, ba[aa])
                }
                  , N = c.isGtmEvent
                  , R = N ? Rv(u) : Sv(b, c);
                if (R) {
                    var Z = {};
                    Pv(Z, G);
                    p("require", "ec", "ec.js", Z);
                    N && R.Lf && p("set", "&cu", R.Lf);
                    var S = R.action;
                    if (N || "impressions" === S)
                        if (M("ec:addImpression", R.Zh),
                        !N)
                            return;
                    if ("promo_click" === S || "promo_view" === S || N && R.Nd) {
                        var O = R.Nd;
                        M("ec:addPromo", O);
                        if (O && 0 < O.length && "promo_click" === S) {
                            N ? p("ec:setAction", S, R.Qa) : p("ec:setAction", S);
                            return
                        }
                        if (!N)
                            return
                    }
                    "promo_view" !== S && "impressions" !== S && (M("ec:addProduct", R.Sb),
                    p("ec:setAction", S, R.Qa))
                }
            }
              , r = function(G) {
                if (G) {
                    var M = {};
                    if (Ya(G))
                        for (var N in Tv)
                            Tv.hasOwnProperty(N) && Uv(Tv[N], N, G[N], M);
                    Pv(M, x);
                    p("require", "linkid", M)
                }
            }
              , t = function() {
                if ($i()) {} else {
                    var G = T(c, K.g.wj);
                    G && (p("require", G, {
                        dataLayer: ze.da
                    }),
                    p("require", "render"))
                }
            }
              , u = Mv(n, b, c)
              , v = function(G, M, N) {
                N && (M = "" + M);
                u.fieldsToSend[G] = M
            };
            !c.isGtmEvent && Nv(n, u.createOnlyFields) && (l(function() {
                m() && m().remove(n)
            }),
            Vv[n] = !1);
            l("create", f, u.createOnlyFields);
            if (u.createOnlyFields[K.g.Hb] && !c.isGtmEvent) {
                var w = Ie || Ke ? Ip(u.createOnlyFields[K.g.Hb], "/analytics.js") : void 0;
                w && (h = w)
            }
            var x = c.isGtmEvent ? u.fieldsToSet[K.g.Hb] : u.createOnlyFields[K.g.Hb];
            if (x) {
                var y = c.isGtmEvent ? u.fieldsToSet[K.g.ie] : u.createOnlyFields[K.g.ie];
                y && !Vv[n] && (Vv[n] = !0,
                l(Oq(n, y)))
            }
            c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
            r(u.linkAttribution));
            var A = u[K.g.za];
            A && A[K.g.O] && Kv(A, n);
            p("set", u.fieldsToSet);
            if (c.isGtmEvent) {
                if (u.enableLinkId) {
                    var B = {};
                    Pv(B, x);
                    p("require", "linkid", "linkid.js", B)
                }
                Ov(f, n, c)
            }
            if (b === K.g.bc)
                if (c.isGtmEvent) {
                    e();
                    if (u.remarketingLists) {
                        var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                        p("require", "adfeatures", {
                            cookieName: D
                        })
                    }
                    q(x);
                    p("send", "pageview");
                    u.createOnlyFields._useUp && tq(n + ".")
                } else
                    t(),
                    p("send", "pageview", u.fieldsToSend);
            else
                b === K.g.la ? (t(),
                wl(f, c),
                T(c, K.g.vb) && (Yk(["aw", "dc"]),
                tq(n + ".")),
                0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
                Ov(f, n, c)) : b === K.g.Ha ? Jv(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing",
                v("timingCategory", u.eventCategory, !0),
                c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0),
                v("timingValue", Da(u.value)),
                void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
                p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social",
                v("socialNetwork", u.socialNetwork, !0),
                v("socialAction", u.socialAction, !0),
                v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || Wv[b]) && q(x),
                c.isGtmEvent && e(),
                u.fieldsToSend.hitType = "event",
                v("eventCategory", u.eventCategory, !0),
                v("eventAction", u.eventAction || b, !0),
                void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                void 0 !== u.value && v("eventValue", Da(u.value))),
                p("send", u.fieldsToSend));
            if (!Xv && !c.isGtmEvent) {
                Xv = !0;
                var I = function() {
                    c.onFailure()
                }
                  , F = function() {
                    m().loaded || I()
                };
                $i() ? H(F) : Yb(h, F, I)
            }
        } else
            H(c.onFailure)
    }
      , Zv = function(a, b, c, d) {
        ag(function() {
            Yv(a, b, d)
        }, [K.g.N, K.g.F])
    }
      , aw = function(a) {
        function b(e) {
            function f(l, m) {
                for (var n = 0; n < m.length; n++) {
                    var p = m[n];
                    if (e[p]) {
                        h[l] = e[p];
                        break
                    }
                }
            }
            var h = z(e);
            f("id", ["id", "item_id", "promotion_id"]);
            f("name", ["name", "item_name", "promotion_name"]);
            f("brand", ["brand", "item_brand"]);
            f("variant", ["variant", "item_variant"]);
            f("list", ["list_name", "item_list_name"]);
            f("position", ["list_position", "creative_slot", "index"]);
            (function() {
                if (e.category)
                    h.category = e.category;
                else {
                    for (var l = "", m = 0; m < $v.length; m++)
                        void 0 !== e[$v[m]] && (l && (l += "/"),
                        l += e[$v[m]]);
                    l && (h.category = l)
                }
            }
            )();
            f("listPosition", ["list_position"]);
            f("creative", ["creative_name"]);
            f("list", ["list_name"]);
            f("position", ["list_position", "creative_slot"]);
            return h
        }
        for (var c = [], d = 0; a && d < a.length; d++)
            a[d] && Ya(a[d]) && c.push(b(a[d]));
        return c.length ? c : void 0
    }
      , bw = function(a) {
        return Q(a)
    }
      , cw = !1;
    var Xv, Vv = {}, Lv = {}, dw = {}, ew = Object.freeze((dw.page_hostname = 1,
    dw[K.g.Z] = 1,
    dw[K.g.jb] = 1,
    dw[K.g.Oa] = 1,
    dw[K.g.Ca] = 1,
    dw[K.g.Pa] = 1,
    dw[K.g.hc] = 1,
    dw[K.g.Jc] = 1,
    dw[K.g.Ja] = 1,
    dw[K.g.kb] = 1,
    dw[K.g.oa] = 1,
    dw[K.g.Sc] = 1,
    dw[K.g.Aa] = 1,
    dw[K.g.sb] = 1,
    dw)), fw = {}, Gv = Object.freeze((fw.client_storage = "storage",
    fw.sample_rate = 1,
    fw.site_speed_sample_rate = 1,
    fw.store_gac = 1,
    fw.use_amp_client_id = 1,
    fw[K.g.Wa] = 1,
    fw[K.g.ya] = "storeGac",
    fw[K.g.Oa] = 1,
    fw[K.g.Ca] = 1,
    fw[K.g.Pa] = 1,
    fw[K.g.hc] = 1,
    fw[K.g.Jc] = 1,
    fw[K.g.kb] = 1,
    fw)), gw = {}, hw = Object.freeze((gw._cs = 1,
    gw._useUp = 1,
    gw.allowAnchor = 1,
    gw.allowLinker = 1,
    gw.alwaysSendReferrer = 1,
    gw.clientId = 1,
    gw.cookieDomain = 1,
    gw.cookieExpires = 1,
    gw.cookieFlags = 1,
    gw.cookieName = 1,
    gw.cookiePath = 1,
    gw.cookieUpdate = 1,
    gw.legacyCookieDomain = 1,
    gw.legacyHistoryImport = 1,
    gw.name = 1,
    gw.sampleRate = 1,
    gw.siteSpeedSampleRate = 1,
    gw.storage = 1,
    gw.storeGac = 1,
    gw.useAmpClientId = 1,
    gw._cd2l = 1,
    gw)), iw = Object.freeze({
        anonymize_ip: 1
    }), jw = {}, Hv = Object.freeze((jw.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword"
    },
    jw.app_id = 1,
    jw.app_installer_id = 1,
    jw.app_name = 1,
    jw.app_version = 1,
    jw.description = "exDescription",
    jw.fatal = "exFatal",
    jw.language = 1,
    jw.page_hostname = "hostname",
    jw.transport_type = "transport",
    jw[K.g.na] = "currencyCode",
    jw[K.g.eh] = 1,
    jw[K.g.oa] = "location",
    jw[K.g.Sc] = "page",
    jw[K.g.Aa] = "referrer",
    jw[K.g.sb] = "title",
    jw[K.g.wf] = 1,
    jw[K.g.wa] = 1,
    jw)), kw = {}, lw = Object.freeze((kw.content_id = 1,
    kw.event_action = 1,
    kw.event_category = 1,
    kw.event_label = 1,
    kw.link_attribution = 1,
    kw.name = 1,
    kw[K.g.za] = 1,
    kw[K.g.bh] = 1,
    kw[K.g.Ka] = 1,
    kw[K.g.aa] = 1,
    kw)), mw = Object.freeze({
        displayfeatures: 1,
        enableLinkId: 1,
        enableRecaptcha: 1,
        eventAction: 1,
        eventCategory: 1,
        eventLabel: 1,
        gaFunctionName: 1,
        gtmEcommerceData: 1,
        gtmTrackerName: 1,
        linker: 1,
        remarketingLists: 1,
        socialAction: 1,
        socialNetwork: 1,
        socialTarget: 1,
        timingVar: 1,
        value: 1
    }), $v = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]), nw = {}, Tv = Object.freeze((nw.levels = 1,
    nw[K.g.Ca] = "duration",
    nw[K.g.hc] = 1,
    nw)), ow = {}, pw = Object.freeze((ow.anonymize_ip = 1,
    ow.fatal = 1,
    ow.send_page_view = 1,
    ow.store_gac = 1,
    ow.use_amp_client_id = 1,
    ow[K.g.ya] = 1,
    ow[K.g.eh] = 1,
    ow)), Uv = function(a, b, c, d) {
        if (void 0 !== c)
            if (pw[b] && (c = Ea(c)),
            "anonymize_ip" !== b || c || (c = void 0),
            1 === a)
                d[Iv(b)] = c;
            else if (g(a))
                d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    }, Iv = function(a) {
        return a && g(a) ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase()
        }) : a
    }, qw = {}, Wv = Object.freeze((qw.checkout_progress = 1,
    qw.select_content = 1,
    qw.set_checkout_option = 1,
    qw[K.g.Xb] = 1,
    qw[K.g.Yb] = 1,
    qw[K.g.Eb] = 1,
    qw[K.g.Zb] = 1,
    qw[K.g.Ua] = 1,
    qw[K.g.hb] = 1,
    qw[K.g.Va] = 1,
    qw[K.g.ka] = 1,
    qw[K.g.ac] = 1,
    qw[K.g.xa] = 1,
    qw)), rw = {}, sw = Object.freeze((rw.checkout_progress = 1,
    rw.set_checkout_option = 1,
    rw[K.g.Bg] = 1,
    rw[K.g.Cg] = 1,
    rw[K.g.Xb] = 1,
    rw[K.g.Yb] = 1,
    rw[K.g.Dg] = 1,
    rw[K.g.Eb] = 1,
    rw[K.g.ka] = 1,
    rw[K.g.ac] = 1,
    rw[K.g.Eg] = 1,
    rw)), tw = {}, uw = Object.freeze((tw.generate_lead = 1,
    tw.login = 1,
    tw.search = 1,
    tw.select_content = 1,
    tw.share = 1,
    tw.sign_up = 1,
    tw.view_search_results = 1,
    tw[K.g.Zb] = 1,
    tw[K.g.Ua] = 1,
    tw[K.g.hb] = 1,
    tw[K.g.Va] = 1,
    tw[K.g.xa] = 1,
    tw)), vw = function(a) {
        var b = "general";
        sw[a] ? b = "ecommerce" : uw[a] ? b = "engagement" : "exception" === a && (b = "error");
        return b
    }, ww = {}, xw = Object.freeze((ww.view_search_results = 1,
    ww[K.g.Ua] = 1,
    ww[K.g.Va] = 1,
    ww[K.g.xa] = 1,
    ww)), Qv = function(a, b, c) {
        a.hasOwnProperty(b) || (a[b] = c)
    }, yw = function(a) {
        if (va(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                if (void 0 != d) {
                    var e = d.id
                      , f = d.variant;
                    void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                }
            }
            return 0 < b.length ? b.join("!") : void 0
        }
    }, Mv = function(a, b, c) {
        var d = function(N) {
            return T(c, N)
        }
          , e = {}
          , f = {}
          , h = {}
          , l = {}
          , m = yw(d(K.g.uj));
        !c.isGtmEvent && m && Qv(f, "exp", m);
        h["&gtm"] = bj(!0);
        c.isGtmEvent || (h._no_slc = !0);
        if (Nf() || P(44))
            l._cs = bw;
        var n = d(K.g.Kc);
        if (!c.isGtmEvent && Ya(n))
            for (var p in n)
                if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                    var q = d(String(n[p]));
                    void 0 !== q && Qv(f, p, q)
                }
        for (var r = !c.isGtmEvent, t = $g(c), u = 0; u < t.length; ++u) {
            var v = t[u];
            if (c.isGtmEvent) {
                var w = d(v);
                mw.hasOwnProperty(v) ? e[v] = w : hw.hasOwnProperty(v) ? l[v] = w : h[v] = w
            } else {
                var x = void 0;
                x = v !== K.g.W ? d(v) : ah(c, v);
                if (lw.hasOwnProperty(v))
                    Uv(lw[v], v, x, e);
                else if (iw.hasOwnProperty(v))
                    Uv(iw[v], v, x, h);
                else if (Hv.hasOwnProperty(v))
                    Uv(Hv[v], v, x, f);
                else if (Gv.hasOwnProperty(v))
                    Uv(Gv[v], v, x, l);
                else if (/^(dimension|metric|content_group)\d+$/.test(v))
                    Uv(1, v, x, f);
                else if (v === K.g.W) {
                    if (!cw) {
                        var y = Ta(x);
                        y && (f["&did"] = y)
                    }
                    var A = void 0
                      , B = void 0;
                    b === K.g.la ? A = Ta(ah(c, v), ".") : (A = Ta(ah(c, v, 1), "."),
                    B = Ta(ah(c, v, 2), "."));
                    A && (f["&gdid"] = A);
                    B && (f["&edid"] = B)
                } else
                    v === K.g.Ja && 0 > t.indexOf(K.g.hc) && (l.cookieName = x + "_ga");
                P(42) && ew[v] && (c.C.hasOwnProperty(v) || b === K.g.la && c.h.hasOwnProperty(v)) && (r = !1)
            }
        }
        P(42) && r && (f["&jsscut"] = "1");
        !1 !== d(K.g.ff) && !1 !== d(K.g.jb) && Ev() || (h.allowAdFeatures = !1);
        ri(c) && (P(81) || Fv()) ? P(52) && (h.allowAdPersonalizationSignals = !0) : h.allowAdPersonalizationSignals = !1;
        !c.isGtmEvent && d(K.g.vb) && (l._useUp = !0);
        if (c.isGtmEvent) {
            l.name = l.name || e.gtmTrackerName;
            var D = h.hitCallback;
            h.hitCallback = function() {
                ta(D) && D();
                c.onSuccess()
            }
        } else {
            Qv(l, "cookieDomain", "auto");
            Qv(h, "forceSSL", !0);
            Qv(e, "eventCategory", vw(b));
            xw[b] && Qv(f, "nonInteraction", !0);
            "login" === b || "sign_up" === b || "share" === b ? Qv(e, "eventLabel", d(K.g.bh)) : "search" === b || "view_search_results" === b ? Qv(e, "eventLabel", d(K.g.Ej)) : "select_content" === b && Qv(e, "eventLabel", d(K.g.lj));
            var I = e[K.g.za] || {}
              , F = I[K.g.kc];
            F || 0 != F && I[K.g.O] ? l.allowLinker = !0 : !1 === F && Qv(l, "useAmpClientId", !1);
            f.hitCallback = c.onSuccess;
            l.name = a
        }
        if (Nf() || P(44))
            h["&gcs"] = si(),
            P(48) && (h["&gcd"] = wi(c)),
            Q(K.g.N) || (l.storage = "none"),
            Q(K.g.F) || (h.allowAdFeatures = !1,
            l.storeGac = !1);
        P(50) && (Ai() && (h["&dma_cps"] = xi()),
        h["&dma"] = zi());
        P(81) && Uh(ci()) && (h["&tcfd"] = Bi());
        var G = Kp(c) || d(K.g.Hb)
          , M = d(K.g.ie);
        G && (c.isGtmEvent || (l[K.g.Hb] = G),
        l._cd2l = !0);
        M && !c.isGtmEvent && (l[K.g.ie] = M);
        e.fieldsToSend = f;
        e.fieldsToSet = h;
        e.createOnlyFields = l;
        return e
    }, Rv = function(a) {
        var b = a.gtmEcommerceData;
        if (!b)
            return null;
        var c = {};
        b.currencyCode && (c.Lf = b.currencyCode);
        if (b.impressions) {
            c.action = "impressions";
            var d = b.impressions;
            c.Zh = "impressions" === b.translateIfKeyEquals ? aw(d) : d
        }
        if (b.promoView) {
            c.action = "promo_view";
            var e = b.promoView.promotions;
            c.Nd = "promoView" === b.translateIfKeyEquals ? aw(e) : e
        }
        if (b.promoClick) {
            c.action = "promo_click";
            var f = b.promoClick.promotions;
            c.Nd = "promoClick" === b.translateIfKeyEquals ? aw(f) : f;
            c.Qa = b.promoClick.actionField;
            return c
        }
        for (var h in b)
            if (b.hasOwnProperty(h) && "translateIfKeyEquals" !== h && "impressions" !== h && "promoView" !== h && "promoClick" !== h && "currencyCode" !== h) {
                c.action = h;
                var l = b[h].products;
                c.Sb = "products" === b.translateIfKeyEquals ? aw(l) : l;
                c.Qa = b[h].actionField;
                break
            }
        return Object.keys(c).length ? c : null
    }, Sv = function(a, b) {
        function c(u) {
            return {
                id: d(K.g.qa),
                affiliation: d(K.g.Ig),
                revenue: d(K.g.aa),
                tax: d(K.g.lf),
                shipping: d(K.g.Nc),
                coupon: d(K.g.Jg),
                list: d(K.g.kf) || d(K.g.Mc) || u
            }
        }
        for (var d = function(u) {
            return T(b, u)
        }, e = d(K.g.T), f, h = 0; e && h < e.length && !(f = e[h][K.g.kf] || e[h][K.g.Mc]); h++)
            ;
        var l = d(K.g.Kc);
        if (Ya(l))
            for (var m = 0; e && m < e.length; ++m) {
                var n = e[m], p;
                for (p in l)
                    l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && Qv(n, p, n[l[p]])
            }
        var q = null
          , r = d(K.g.pj);
        if (a === K.g.ka || a === K.g.ac)
            q = {
                action: a,
                Qa: c(),
                Sb: aw(e)
            };
        else if (a === K.g.Xb)
            q = {
                action: "add",
                Qa: c(),
                Sb: aw(e)
            };
        else if (a === K.g.Yb)
            q = {
                action: "remove",
                Qa: c(),
                Sb: aw(e)
            };
        else if (a === K.g.xa)
            q = {
                action: "detail",
                Qa: c(f),
                Sb: aw(e)
            };
        else if (a === K.g.Ua)
            q = {
                action: "impressions",
                Zh: aw(e)
            };
        else if (a === K.g.Va)
            q = {
                action: "promo_view",
                Nd: aw(r) || aw(e)
            };
        else if ("select_content" === a && r && 0 < r.length || a === K.g.hb)
            q = {
                action: "promo_click",
                Nd: aw(r) || aw(e)
            };
        else if ("select_content" === a || a === K.g.Zb)
            q = {
                action: "click",
                Qa: {
                    list: d(K.g.kf) || d(K.g.Mc) || f
                },
                Sb: aw(e)
            };
        else if (a === K.g.Eb || "checkout_progress" === a) {
            var t = {
                step: a === K.g.Eb ? 1 : d(K.g.jf),
                option: d(K.g.ae)
            };
            q = {
                action: "checkout",
                Sb: aw(e),
                Qa: z(c(), t)
            }
        } else
            "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Qa: {
                    step: d(K.g.jf),
                    option: d(K.g.ae)
                }
            });
        q && (q.Lf = d(K.g.na));
        return q
    }, zw = {}, Nv = function(a, b) {
        var c = zw[a];
        zw[a] = z(b);
        if (!c)
            return !1;
        for (var d in b)
            if (b.hasOwnProperty(d) && b[d] !== c[d])
                return !0;
        for (var e in c)
            if (c.hasOwnProperty(e) && c[e] !== b[e])
                return !0;
        return !1
    };
    tf();
    function Kw() {
        return C.gaGlobal = C.gaGlobal || {}
    }
    var Lw = function() {
        var a = Kw();
        a.hid = a.hid || ya();
        return a.hid
    }
      , Mw = function(a, b) {
        var c = Kw();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var Ix = window
      , Jx = document
      , Kx = function(a) {
        var b = Ix._gaUserPrefs;
        if (b && b.ioo && b.ioo() || Jx.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === Ix["ga-disable-" + a])
            return !0;
        try {
            var c = Ix.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = Di("AMP_TOKEN", String(Jx.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return Jx.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    function Sx(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[K.g.La] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    }
    ;var ay = function(a, b) {};
    function $x(a, b) {
        var c = function() {};
        return c
    }
    function by(a, b, c) {}
    ;var cy = $x;
    var dy = function(a, b, c) {
        for (var d = 0; d < b.length; d++)
            a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var ey = encodeURI
      , W = encodeURIComponent
      , fy = function(a, b, c) {
        ac(a, b, c)
    }
      , gy = function(a, b) {
        if (!a)
            return !1;
        var c = xj(zj(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    }
      , hy = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var X = {
        m: {}
    };
    X.m.c = ["google"],
    function() {
        (function(a) {
            X.__c = a;
            X.__c.o = "c";
            X.__c.isVendorTemplate = !0;
            X.__c.priorityOverride = 0;
            X.__c.isInfrastructure = !1;
            X.__c.runInSiloedMode = !0
        }
        )(function(a) {
            Bu(a.vtp_value, "c", a.vtp_gtmEventId);
            return a.vtp_value
        })
    }();
    X.m.e = ["google"],
    function() {
        (function(a) {
            X.__e = a;
            X.__e.o = "e";
            X.__e.isVendorTemplate = !0;
            X.__e.priorityOverride = 0;
            X.__e.isInfrastructure = !1;
            X.__e.runInSiloedMode = !0
        }
        )(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();
    X.m.v = ["google"],
    function() {
        (function(a) {
            X.__v = a;
            X.__v.o = "v";
            X.__v.isVendorTemplate = !0;
            X.__v.priorityOverride = 0;
            X.__v.isInfrastructure = !1;
            X.__v.runInSiloedMode = !1
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = tu(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
              , d = void 0 !== c ? c : a.vtp_defaultValue;
            Bu(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();

    X.m.rep = ["google"],
    function() {
        (function(a) {
            X.__rep = a;
            X.__rep.o = "rep";
            X.__rep.isVendorTemplate = !0;
            X.__rep.priorityOverride = 0;
            X.__rep.isInfrastructure = !1;
            X.__rep.runInSiloedMode = !0
        }
        )(function(a) {
            var b = tg(a.vtp_containerId), c = il(b, !0), d;
            switch (c.prefix) {
            case "AW":
                d = dv;
                break;
            case "DC":
                d = pv;
                break;
            case "GF":
                d = vv;
                break;
            case "HA":
                d = Av;
                break;
            case "UA":
                d = Zv;
                break;
            case "MC":
                d = cy(c, a.vtp_gtmEventId);
                break;
            default:
                H(a.vtp_gtmOnFailure);
                return
            }
            if (d) {
                H(a.vtp_gtmOnSuccess);
                var e = d
                  , f = il(pg(b), !0);
                f && Xr.register(f, e);
                if (a.vtp_remoteConfig) {
                    var h = a.vtp_remoteConfig || {}
                      , l = il(pg(b), !0);
                    l && fs(l, h)
                }
            } else
                H(a.vtp_gtmOnFailure)
        })
    }();

    X.m.get = ["google"],
    function() {
        (function(a) {
            X.__get = a;
            X.__get.o = "get";
            X.__get.isVendorTemplate = !0;
            X.__get.priorityOverride = 0;
            X.__get.isInfrastructure = !1;
            X.__get.runInSiloedMode = !1
        }
        )(function(a) {
            var b = a.vtp_settings
              , c = b.eventParameters || {}
              , d = String(a.vtp_eventName)
              , e = {};
            e.eventId = a.vtp_gtmEventId;
            e.priorityId = a.vtp_gtmPriorityId;
            a.vtp_deferrable && (e.deferrable = !0);
            var f = ur(String(b.streamId), d, c);
            xr(f, e.eventId, e);
            a.vtp_gtmOnSuccess()
        })
    }();

    X.m.zone = [],
    function() {
        var a = {}
          , b = function(c) {
            for (var d = 0; d < c.length; d++)
                if (!c[d])
                    return !1;
            return !0
        };
        (function(c) {
            X.__zone = c;
            X.__zone.o = "zone";
            X.__zone.isVendorTemplate = !0;
            X.__zone.priorityOverride = 0;
            X.__zone.isInfrastructure = !1;
            X.__zone.runInSiloedMode = !1
        }
        )(function(c) {
            var d = b(c.vtp_boundaries || []);
            if (c.vtp_gtmTagId in a)
                Gr(a[c.vtp_gtmTagId], c.vtp_gtmEventId, d);
            else if (d) {
                var e = c.vtp_childContainers.map(function(m) {
                    return m.publicId
                })
                  , f = c.vtp_enableTypeRestrictions ? c.vtp_whitelistedTypes.map(function(m) {
                    return m.typeId
                }) : null
                  , h = {};
                var l = Fr(c.vtp_gtmEventId, e, f, h, fq(c.vtp_gtmEntityIndex, c.vtp_gtmEntityName), !!c.vtp_inheritParentConfig);
                a[c.vtp_gtmTagId] = l
            }
            H(c.vtp_gtmOnSuccess)
        })
    }();

    var zz = {};
    zz.dataLayer = af;
    zz.callback = function(a) {
        Re.hasOwnProperty(a) && ta(Re[a]) && Re[a]();
        delete Re[a]
    }
    ;
    zz.bootstrap = 0;
    zz._spx = !1;
    function Az() {
        Ae[qg()] = Ae[qg()] || zz;
        wg();
        Ag() || k(Bg(), function(a, b) {
            Np(a, b.transportUrl, b.context);
            J(92)
        });
        Ma(Se, X.m);
        P(92) && sg(yg());
        Zc = jd
    }
    (function(a) {
        function b() {
            m = E.documentElement.getAttribute("data-tag-assistant-present");
            it(m) && (l = h.Gj)
        }
        if (!C["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (E.referrer) {
                var d = zj(E.referrer);
                c = "cct.google" === wj(d, "host")
            }
            if (!c) {
                var e = Hi("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (C["__TAGGY_INSTALLED"] = !0,
            Yb("https://cct.google/taggy/agent.js"))
        }
        if (Me)
            a();
        else {
            var f = function(u) {
                var v = "GTM"
                  , w = "GTM";
                Ge ? (v = "OGT",
                w = "GTAG") : Me && (w = v = "OPT");
                var x = C["google.tagmanager.debugui2.queue"];
                x || (x = [],
                C["google.tagmanager.debugui2.queue"] = x,
                Yb("https://" + ze.Sd + "/debug/bootstrap?id=" + jg.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + bj()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: Sb,
                        containerProduct: v,
                        debug: !1,
                        id: jg.ctid,
                        targetRef: {
                            ctid: jg.ctid,
                            isDestination: hg.ld
                        },
                        aliases: kg(),
                        destinations: ng()
                    }
                };
                y.data.resume = function() {
                    a()
                }
                ;
                ze.Hi && (y.data.initialPublish = !0);
                x.push(y)
            }
              , h = {
                Yl: 1,
                Hj: 2,
                Sj: 3,
                Ji: 4,
                Gj: 5
            }
              , l = void 0
              , m = void 0
              , n = xj(C.location, "query", !1, void 0, "gtm_debug");
            it(n) && (l = h.Hj);
            if (!l && E.referrer) {
                var p = zj(E.referrer);
                "tagassistant.google.com" === wj(p, "host") && (l = h.Sj)
            }
            if (!l) {
                var q = Hi("__TAG_ASSISTANT");
                q.length && q[0].length && (l = h.Ji)
            }
            l || b();
            if (!l && jt(m)) {
                var r = function() {
                    if (t)
                        return !0;
                    t = !0;
                    b();
                    l && Sb ? f(l) : a()
                }
                  , t = !1;
                bc(E, "TADebugSignal", function() {
                    r()
                }, !1);
                C.setTimeout(function() {
                    r()
                }, 200)
            } else
                l && Sb ? f(l) : a()
        }
    }
    )(function() {
        try {
            ug();
            if (P(29)) {}
            Bf().B();
            ii();
            var b = rg();
            if (eg().canonical[b]) {
                var c = Ae.zones;
                c && c.unregisterChild(mg());
            } else {
                Hp();
                for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++)
                    Pc.push(e[f]);
                for (var h = d.tags || [], l = 0; l < h.length; l++)
                    Sc.push(h[l]);
                for (var m = d.predicates || [], n = 0; n < m.length; n++)
                    Rc.push(m[n]);
                for (var p = d.rules || [], q = 0; q < p.length; q++) {
                    for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
                        var v = r[u][0];
                        t[v] = Array.prototype.slice.call(r[u], 1);
                        Nc(5) || Nc(7) ? ("if" !== v && "unless" !== v || Yc(t[v]),
                        gb("TAGGING", 22)) : Nc(6) && gb("TAGGING", 23)
                    }
                    Qc.push(t)
                }
                Uc = X;
                Vc = Zu;
                Az();
                if (P(44)) {
                    for (var w = pf["7"], x = w ? w.split("|") : [], y = {}, A = 0; A < x.length; A++)
                        y[x[A]] = !0;
                    for (var B = 0; B < Vf.length; B++) {
                        var D = Vf[B]
                          , I = y[D] ? "granted" : "denied";
                        Gf().implicit(D, I)
                    }
                }
                ht();
                $p = !1;
                aq = 0;
                if ("interactive" == E.readyState && !E.createEventObject || "complete" == E.readyState)
                    cq();
                else {
                    bc(E, "DOMContentLoaded", cq);
                    bc(E, "readystatechange", cq);
                    if (E.createEventObject && E.documentElement.doScroll) {
                        var F = !0;
                        try {
                            F = !C.frameElement
                        } catch (O) {}
                        F && dq()
                    }
                    bc(C, "load", cq)
                }
                xs = !1;
                "complete" === E.readyState ? zs() : bc(C, "load", zs);
                Kg && (Fg(Xg),
                C.setInterval(Wg, 864E5));
                Fg(av);
                Fg(ar);
                Fg(io);
                Fg(Wr);
                Fg(lr);
                Fg(Sp);
                Fg(dj);
                Fg(Qp);
                Fg(hr);
                P(56) && Fg(dr);
                Ft();
                of(1);
                Ir();
                Qe = Ja();
                zz.bootstrap = Qe;
                if (P(29)) {}
            }
        } catch (O) {
            if (of(4),
            Kg) {
                var S = Rg(!0, !0);
                ac(S)
            }
        }
    });

}
)()