(function(g) {
    var window = this;
    'use strict';
    var a8 = function(a) {
        g.go(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.eb()).toString(36));
        return a
    }
      , b8 = function(a, b, c) {
        Array.isArray(c) || (c = [String(c)]);
        g.kga(a.B, b, c)
    }
      , kub = function(a) {
        if (a instanceof g.fs)
            return a;
        if ("function" == typeof a.yk)
            return a.yk(!1);
        if (g.Wa(a)) {
            var b = 0
              , c = new g.fs;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        return g.L2;
                    if (b in a)
                        return g.gs(a[b++]);
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
      , lub = function(a, b, c) {
        if (g.Wa(a))
            g.Yb(a, b, c);
        else
            for (a = kub(a); ; ) {
                var d = a.next();
                if (d.done)
                    break;
                b.call(c, d.value, void 0, a)
            }
    }
      , mub = function(a, b) {
        var c = [];
        lub(b, function(d) {
            try {
                var e = g.Hu.prototype.B.call(this, d, !0)
            } catch (f) {
                if ("Storage: Invalid value was encountered" == f)
                    return;
                throw f;
            }
            void 0 === e ? c.push(d) : g.Xka(e) && c.push(d)
        }, a);
        return c
    }
      , nub = function(a, b) {
        mub(a, b).forEach(function(c) {
            g.Hu.prototype.remove.call(this, c)
        }, a)
    }
      , oub = function(a) {
        if (a.qa) {
            if (a.qa.locationOverrideToken)
                return {
                    locationOverrideToken: a.qa.locationOverrideToken
                };
            if (null != a.qa.latitudeE7 && null != a.qa.longitudeE7)
                return {
                    latitudeE7: a.qa.latitudeE7,
                    longitudeE7: a.qa.longitudeE7
                }
        }
        return null
    }
      , pub = function(a, b) {
        g.Db(a, b) || a.push(b)
    }
      , qub = function(a) {
        var b = 0, c;
        for (c in a)
            b++;
        return b
    }
      , rub = function(a, b) {
        return g.hd(a, b)
    }
      , sub = function(a) {
        try {
            return g.Qa.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
      , c8 = function(a) {
        if (g.Qa.JSON)
            try {
                return g.Qa.JSON.parse(a)
            } catch (b) {}
        return sub(a)
    }
      , tub = function(a, b, c, d) {
        var e = new g.Yn(null);
        a && g.Zn(e, a);
        b && g.$n(e, b);
        c && g.ao(e, c);
        d && (e.C = d);
        return e
    }
      , uub = function() {
        this.j = d8();
        this.j.Po("/client_streamz/youtube/living_room/mdx/channel/opened", {
            gh: 3,
            fh: "channel_type"
        })
    }
      , vub = function(a, b) {
        a.j.fq("/client_streamz/youtube/living_room/mdx/channel/opened", b)
    }
      , wub = function() {
        this.j = d8();
        this.j.Po("/client_streamz/youtube/living_room/mdx/channel/closed", {
            gh: 3,
            fh: "channel_type"
        })
    }
      , xub = function(a, b) {
        a.j.fq("/client_streamz/youtube/living_room/mdx/channel/closed", b)
    }
      , yub = function() {
        this.j = d8();
        this.j.Po("/client_streamz/youtube/living_room/mdx/channel/message_received", {
            gh: 3,
            fh: "channel_type"
        })
    }
      , zub = function(a, b) {
        a.j.fq("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
    }
      , Aub = function() {
        this.j = d8();
        this.j.Po("/client_streamz/youtube/living_room/mdx/channel/error", {
            gh: 3,
            fh: "channel_type"
        })
    }
      , Bub = function(a, b) {
        a.j.fq("/client_streamz/youtube/living_room/mdx/channel/error", b)
    }
      , Cub = function() {
        this.j = d8();
        this.j.Po("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
    }
      , Dub = function() {
        this.j = d8();
        this.j.Po("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
    }
      , e8 = function(a) {
        this.name = this.id = "";
        this.clientName = "UNKNOWN_INTERFACE";
        this.app = "";
        this.type = "REMOTE_CONTROL";
        this.obfuscatedGaiaId = this.avatar = this.username = "";
        this.capabilities = new Set;
        this.compatibleSenderThemes = new Set;
        this.experiments = new Set;
        this.theme = "u";
        new g.ku;
        this.model = this.brand = "";
        this.year = 0;
        this.chipset = this.osVersion = this.os = "";
        this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
        a && (this.id = a.id || a.name,
        this.name = a.name,
        this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
        this.app = a.app,
        this.type = a.type || "REMOTE_CONTROL",
        this.username = a.user || "",
        this.avatar = a.userAvatarUri || "",
        this.obfuscatedGaiaId = a.obfuscatedGaiaId || "",
        this.theme = a.theme || "u",
        Eub(this, a.capabilities || ""),
        Fub(this, a.compatibleSenderThemes || ""),
        Gub(this, a.experiments || ""),
        this.brand = a.brand || "",
        this.model = a.model || "",
        this.year = a.year || 0,
        this.os = a.os || "",
        this.osVersion = a.osVersion || "",
        this.chipset = a.chipset || "",
        this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN",
        a = a.deviceInfo) && (a = JSON.parse(a),
        this.brand = a.brand || "",
        this.model = a.model || "",
        this.year = a.year || 0,
        this.os = a.os || "",
        this.osVersion = a.osVersion || "",
        this.chipset = a.chipset || "",
        this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
        this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
    }
      , Eub = function(a, b) {
        a.capabilities.clear();
        g.ks(b.split(","), g.db(rub, Hub)).forEach(function(c) {
            a.capabilities.add(c)
        })
    }
      , Fub = function(a, b) {
        a.compatibleSenderThemes.clear();
        g.ks(b.split(","), g.db(rub, Iub)).forEach(function(c) {
            a.compatibleSenderThemes.add(c)
        })
    }
      , Gub = function(a, b) {
        a.experiments.clear();
        b.split(",").forEach(function(c) {
            a.experiments.add(c)
        })
    }
      , f8 = function(a) {
        a = a || {};
        this.name = a.name || "";
        this.id = a.id || a.screenId || "";
        this.token = a.token || a.loungeToken || "";
        this.uuid = a.uuid || a.dialId || "";
        this.idType = a.screenIdType || "normal"
    }
      , g8 = function(a, b) {
        return !!b && (a.id == b || a.uuid == b)
    }
      , Jub = function(a) {
        return {
            name: a.name,
            screenId: a.id,
            loungeToken: a.token,
            dialId: a.uuid,
            screenIdType: a.idType
        }
    }
      , Kub = function(a) {
        return new f8(a)
    }
      , Lub = function(a) {
        return Array.isArray(a) ? g.Up(a, Kub) : []
    }
      , h8 = function(a) {
        return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
    }
      , Mub = function(a) {
        return Array.isArray(a) ? "[" + g.Up(a, h8).join(",") + "]" : "null"
    }
      , Nub = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    }
      , Oub = function(a) {
        return g.Up(a, function(b) {
            return {
                key: b.id,
                name: b.name
            }
        })
    }
      , Pub = function(a, b) {
        return g.Bb(a, function(c) {
            return c || b ? !c != !b ? !1 : c.id == b.id : !0
        })
    }
      , i8 = function(a, b) {
        return g.Bb(a, function(c) {
            return g8(c, b)
        })
    }
      , Qub = function() {
        var a = (0,
        g.tD)();
        a && nub(a, a.j.yk(!0))
    }
      , j8 = function() {
        var a = g.vD("yt-remote-connected-devices") || [];
        g.Ub(a);
        return a
    }
      , Rub = function(a) {
        if (0 == a.length)
            return [];
        var b = a[0].indexOf("#")
          , c = -1 == b ? a[0] : a[0].substring(0, b);
        return g.Up(a, function(d, e) {
            return 0 == e ? d : d.substring(c.length)
        })
    }
      , Sub = function(a) {
        g.uD("yt-remote-connected-devices", a, 86400)
    }
      , k8 = function() {
        if (Tub)
            return Tub;
        var a = g.vD("yt-remote-device-id");
        a || (a = Nub(),
        g.uD("yt-remote-device-id", a, 31536E3));
        for (var b = j8(), c = 1, d = a; g.Db(b, d); )
            c++,
            d = a + "#" + c;
        return Tub = d
    }
      , Uub = function() {
        var a = j8()
          , b = k8();
        g.xD() && g.Xb(a, b);
        a = Rub(a);
        if (0 == a.length)
            try {
                g.Lma("remote_sid")
            } catch (c) {}
        else
            try {
                g.MC("remote_sid", a.join(","), -1)
            } catch (c) {}
    }
      , Vub = function() {
        return g.vD("yt-remote-session-browser-channel")
    }
      , Wub = function() {
        return g.vD("yt-remote-local-screens") || []
    }
      , Xub = function() {
        g.uD("yt-remote-lounge-token-expiration", !0, 86400)
    }
      , Yub = function(a) {
        5 < a.length && (a = a.slice(a.length - 5));
        var b = g.Up(Wub(), function(d) {
            return d.loungeToken
        })
          , c = g.Up(a, function(d) {
            return d.loungeToken
        });
        g.Vp(c, function(d) {
            return !g.Db(b, d)
        }) && Xub();
        g.uD("yt-remote-local-screens", a, 31536E3)
    }
      , l8 = function(a) {
        a || (g.wD("yt-remote-session-screen-id"),
        g.wD("yt-remote-session-video-id"));
        Uub();
        a = j8();
        g.Fb(a, k8());
        Sub(a)
    }
      , Zub = function() {
        if (!m8) {
            var a = g.Qu();
            a && (m8 = new g.Eu(a))
        }
    }
      , $ub = function() {
        Zub();
        return m8 ? !!m8.get("yt-remote-use-staging-server") : !1
    }
      , n8 = function(a, b) {
        g.eF[a] = !0;
        var c = g.cF();
        c && c.publish.apply(c, arguments);
        g.eF[a] = !1
    }
      , avb = function() {}
      , d8 = function() {
        if (!o8) {
            o8 = new g.jg(new avb);
            var a = g.hC("client_streamz_web_flush_count", -1);
            -1 !== a && (o8.D = a)
        }
        return o8
    }
      , bvb = function() {
        var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
        return a ? parseInt(a[1], 10) : 0
    }
      , cvb = function(a) {
        return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
    }
      , dvb = function() {
        return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
    }
      , p8 = function(a) {
        a.length ? evb(a.shift(), function() {
            p8(a)
        }) : fvb()
    }
      , gvb = function(a) {
        return "chrome-extension://" + a + "/cast_sender.js"
    }
      , evb = function(a, b, c) {
        var d = document.createElement("script");
        d.onerror = b;
        c && (d.onload = c);
        g.zn(d, g.Dv(a));
        (document.head || document.documentElement).appendChild(d)
    }
      , hvb = function() {
        var a = bvb()
          , b = [];
        if (1 < a) {
            var c = a - 1;
            b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
            b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
        }
        return b
    }
      , fvb = function() {
        var a = dvb();
        a && a(!1, "No cast extension found")
    }
      , jvb = function() {
        if (ivb) {
            var a = 2
              , b = dvb()
              , c = function() {
                a--;
                0 == a && b && b(!0)
            };
            window.__onGCastApiAvailable = c;
            evb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", fvb, c)
        }
    }
      , kvb = function() {
        jvb();
        var a = hvb();
        a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
        p8(a)
    }
      , mvb = function() {
        jvb();
        var a = hvb();
        a.push.apply(a, g.qa(lvb.map(gvb)));
        a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
        p8(a)
    }
      , q8 = function(a, b, c) {
        g.J.call(this);
        this.K = null != c ? (0,
        g.cb)(a, c) : a;
        this.Ri = b;
        this.G = (0,
        g.cb)(this.V0, this);
        this.j = !1;
        this.B = 0;
        this.C = this.qd = null;
        this.D = []
    }
      , r8 = function(a, b, c) {
        g.J.call(this);
        this.D = null != c ? a.bind(c) : a;
        this.Ri = b;
        this.C = null;
        this.j = !1;
        this.B = 0;
        this.qd = null
    }
      , nvb = function(a) {
        a.qd = g.hg(function() {
            a.qd = null;
            a.j && !a.B && (a.j = !1,
            nvb(a))
        }, a.Ri);
        var b = a.C;
        a.C = null;
        a.D.apply(null, b)
    }
      , s8 = function() {}
      , ovb = function() {
        g.xb.call(this, "p")
    }
      , pvb = function() {
        g.xb.call(this, "o")
    }
      , rvb = function() {
        return qvb = qvb || new g.Gd
    }
      , svb = function(a) {
        g.xb.call(this, "serverreachability", a)
    }
      , t8 = function(a) {
        var b = rvb();
        b.dispatchEvent(new svb(b,a))
    }
      , tvb = function(a) {
        g.xb.call(this, "statevent", a)
    }
      , u8 = function(a) {
        var b = rvb();
        b.dispatchEvent(new tvb(b,a))
    }
      , uvb = function(a, b, c, d) {
        g.xb.call(this, "timingevent", a);
        this.size = b;
        this.KA = d
    }
      , v8 = function(a, b) {
        if ("function" !== typeof a)
            throw Error("Fn must not be null and must be a function");
        return g.Qa.setTimeout(function() {
            a()
        }, b)
    }
      , vvb = function() {}
      , w8 = function(a, b, c, d) {
        this.G = a;
        this.D = b;
        this.Bd = c;
        this.Jc = d || 1;
        this.kb = new g.lo(this);
        this.Bb = 45E3;
        a = g.JS ? 125 : void 0;
        this.tb = new g.gg(a);
        this.Pa = null;
        this.C = !1;
        this.ma = this.gb = this.S = this.Va = this.Ca = this.Ub = this.ea = null;
        this.va = [];
        this.j = null;
        this.qa = 0;
        this.K = this.Fa = null;
        this.Mb = -1;
        this.Oa = !1;
        this.zb = 0;
        this.eb = null;
        this.wc = this.Ya = this.vc = this.Ia = !1;
        this.B = new wvb
    }
      , wvb = function() {
        this.C = null;
        this.j = "";
        this.B = !1
    }
      , yvb = function(a, b, c) {
        a.Va = 1;
        a.S = a8(b.clone());
        a.ma = c;
        a.Ia = !0;
        xvb(a, null)
    }
      , xvb = function(a, b) {
        a.Ca = Date.now();
        x8(a);
        a.gb = a.S.clone();
        b8(a.gb, "t", a.Jc);
        a.qa = 0;
        var c = a.G.Va;
        a.B = new wvb;
        a.j = zvb(a.G, c ? b : null, !a.ma);
        0 < a.zb && (a.eb = new r8((0,
        g.cb)(a.pS, a, a.j),a.zb));
        a.kb.Ta(a.j, "readystatechange", a.Y0);
        b = a.Pa ? g.pd(a.Pa) : {};
        a.ma ? (a.Fa || (a.Fa = "POST"),
        b["Content-Type"] = "application/x-www-form-urlencoded",
        a.j.send(a.gb, a.Fa, a.ma, b)) : (a.Fa = "GET",
        a.j.send(a.gb, a.Fa, null, b));
        t8(1)
    }
      , Avb = function(a) {
        return a.j ? "GET" == a.Fa && 2 != a.Va && a.G.We : !1
    }
      , Evb = function(a, b, c) {
        for (var d = !0, e; !a.Oa && a.qa < c.length; )
            if (e = Bvb(a, c),
            e == y8) {
                4 == b && (a.K = 4,
                u8(14),
                d = !1);
                break
            } else if (e == Cvb) {
                a.K = 4;
                u8(15);
                d = !1;
                break
            } else
                Dvb(a, e);
        Avb(a) && e != y8 && e != Cvb && (a.B.j = "",
        a.qa = 0);
        4 != b || 0 != c.length || a.B.B || (a.K = 1,
        u8(16),
        d = !1);
        a.C = a.C && d;
        d ? 0 < c.length && !a.wc && (a.wc = !0,
        a.G.lP(a)) : (z8(a),
        A8(a))
    }
      , Bvb = function(a, b) {
        var c = a.qa
          , d = b.indexOf("\n", c);
        if (-1 == d)
            return y8;
        c = Number(b.substring(c, d));
        if (isNaN(c))
            return Cvb;
        d += 1;
        if (d + c > b.length)
            return y8;
        b = b.slice(d, d + c);
        a.qa = d + c;
        return b
    }
      , x8 = function(a) {
        a.Ub = Date.now() + a.Bb;
        Fvb(a, a.Bb)
    }
      , Fvb = function(a, b) {
        if (null != a.ea)
            throw Error("WatchDog timer not null");
        a.ea = v8((0,
        g.cb)(a.W0, a), b)
    }
      , B8 = function(a) {
        a.ea && (g.Qa.clearTimeout(a.ea),
        a.ea = null)
    }
      , A8 = function(a) {
        a.G.jh() || a.Oa || Gvb(a.G, a)
    }
      , z8 = function(a) {
        B8(a);
        g.sb(a.eb);
        a.eb = null;
        a.tb.stop();
        a.kb.Of();
        if (a.j) {
            var b = a.j;
            a.j = null;
            b.abort();
            b.dispose()
        }
    }
      , Dvb = function(a, b) {
        try {
            var c = a.G;
            if (0 != c.Hh && (c.j == a || Hvb(c.B, a)))
                if (!a.Ya && Hvb(c.B, a) && 3 == c.Hh) {
                    try {
                        var d = c.Gf.j.parse(b)
                    } catch (y) {
                        d = null
                    }
                    if (Array.isArray(d) && 3 == d.length) {
                        var e = d;
                        if (0 == e[0])
                            a: {
                                if (!c.ma) {
                                    if (c.j)
                                        if (c.j.Ca + 3E3 < a.Ca)
                                            C8(c),
                                            D8(c);
                                        else
                                            break a;
                                    Ivb(c);
                                    u8(18)
                                }
                            }
                        else
                            c.Ud = e[1],
                            0 < c.Ud - c.eb && 37500 > e[2] && c.Ya && 0 == c.va && !c.qa && (c.qa = v8((0,
                            g.cb)(c.Z0, c), 6E3));
                        if (1 >= Jvb(c.B) && c.rd) {
                            try {
                                c.rd()
                            } catch (y) {}
                            c.rd = void 0
                        }
                    } else
                        E8(c, 11)
                } else if ((a.Ya || c.j == a) && C8(c),
                !g.dc(b))
                    for (e = c.Gf.j.parse(b),
                    b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.eb = f[0];
                        f = f[1];
                        if (2 == c.Hh)
                            if ("c" == f[0]) {
                                c.D = f[1];
                                c.wc = f[2];
                                var h = f[3];
                                null != h && (c.qS = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.kb = 1.5 * l);
                                d = c;
                                var m = a.CN();
                                if (m) {
                                    var n = g.ym(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.gc(n, "spdy") || g.gc(n, "quic") || g.gc(n, "h2")) && (p.D = p.G,
                                        p.j = new Set,
                                        p.B && (Kvb(p, p.B),
                                        p.B = null))
                                    }
                                    if (d.Ia) {
                                        var q = g.ym(m, "X-HTTP-Session-Id");
                                        q && (d.Ne = q,
                                        g.go(d.Pa, d.Ia, q))
                                    }
                                }
                                c.Hh = 3;
                                c.G && c.G.wS();
                                c.Wc && (c.Sd = Date.now() - a.Ca);
                                d = c;
                                var r = a;
                                d.Md = Lvb(d, d.Va ? d.wc : null, d.Jc);
                                if (r.Ya) {
                                    Mvb(d.B, r);
                                    var t = r
                                      , w = d.kb;
                                    w && t.setTimeout(w);
                                    t.ea && (B8(t),
                                    x8(t));
                                    d.j = r
                                } else
                                    Nvb(d);
                                0 < c.C.length && F8(c)
                            } else
                                "stop" != f[0] && "close" != f[0] || E8(c, 7);
                        else
                            3 == c.Hh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? E8(c, 7) : c.disconnect() : "noop" != f[0] && c.G && c.G.vS(f),
                            c.va = 0)
                    }
            t8(4)
        } catch (y) {}
    }
      , Ovb = function(a, b) {
        this.j = a;
        this.map = b;
        this.context = null
    }
      , Pvb = function(a) {
        this.G = a || 10;
        g.Qa.PerformanceNavigationTiming ? (a = g.Qa.performance.getEntriesByType("navigation"),
        a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Qa.chrome && g.Qa.chrome.loadTimes && g.Qa.chrome.loadTimes() && g.Qa.chrome.loadTimes().wasFetchedViaSpdy);
        this.D = a ? this.G : 1;
        this.j = null;
        1 < this.D && (this.j = new Set);
        this.B = null;
        this.C = []
    }
      , Qvb = function(a) {
        return a.B ? !0 : a.j ? a.j.size >= a.D : !1
    }
      , Jvb = function(a) {
        return a.B ? 1 : a.j ? a.j.size : 0
    }
      , Hvb = function(a, b) {
        return a.B ? a.B == b : a.j ? a.j.has(b) : !1
    }
      , Kvb = function(a, b) {
        a.j ? a.j.add(b) : a.B = b
    }
      , Mvb = function(a, b) {
        a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
    }
      , Rvb = function(a) {
        if (null != a.B)
            return a.C.concat(a.B.va);
        if (null != a.j && 0 !== a.j.size) {
            var b = a.C;
            a = g.u(a.j.values());
            for (var c = a.next(); !c.done; c = a.next())
                b = b.concat(c.value.va);
            return b
        }
        return g.Kb(a.C)
    }
      , Svb = function(a, b) {
        var c = new vvb;
        if (g.Qa.Image) {
            var d = new Image;
            d.onload = g.db(G8, c, d, "TestLoadImage: loaded", !0, b);
            d.onerror = g.db(G8, c, d, "TestLoadImage: error", !1, b);
            d.onabort = g.db(G8, c, d, "TestLoadImage: abort", !1, b);
            d.ontimeout = g.db(G8, c, d, "TestLoadImage: timeout", !1, b);
            g.Qa.setTimeout(function() {
                if (d.ontimeout)
                    d.ontimeout()
            }, 1E4);
            d.src = a
        } else
            b(!1)
    }
      , G8 = function(a, b, c, d, e) {
        try {
            b.onload = null,
            b.onerror = null,
            b.onabort = null,
            b.ontimeout = null,
            e(d)
        } catch (f) {}
    }
      , Tvb = function() {
        this.j = new s8
    }
      , Uvb = function(a, b, c) {
        var d = c || "";
        try {
            g.Xn(a, function(e, f) {
                var h = e;
                g.Xa(e) && (h = g.nm(e));
                b.push(d + f + "=" + encodeURIComponent(h))
            })
        } catch (e) {
            throw b.push(d + "type=" + encodeURIComponent("_badmap")),
            e;
        }
    }
      , H8 = function(a, b, c) {
        return c && c.W5 ? c.W5[a] || b : b
    }
      , Vvb = function(a) {
        this.C = [];
        this.wc = this.Md = this.Pa = this.Jc = this.j = this.Ne = this.Ia = this.Oa = this.S = this.Ub = this.ea = null;
        this.cg = this.gb = 0;
        this.Sf = H8("failFast", !1, a);
        this.Ya = this.qa = this.ma = this.K = this.G = null;
        this.Bd = !0;
        this.Ud = this.eb = -1;
        this.vc = this.va = this.Ca = 0;
        this.Rf = H8("baseRetryDelayMs", 5E3, a);
        this.dg = H8("retryDelaySeedMs", 1E4, a);
        this.Tf = H8("forwardChannelMaxRetries", 2, a);
        this.Td = H8("forwardChannelRequestTimeoutMs", 2E4, a);
        this.Me = a && a.mgb || void 0;
        this.We = a && a.jgb || !1;
        this.kb = void 0;
        this.Va = a && a.N$ || !1;
        this.D = "";
        this.B = new Pvb(a && a.Hdb);
        this.Gf = new Tvb;
        this.Bb = a && a.Wdb || !1;
        this.zb = a && a.Mdb || !1;
        this.Bb && this.zb && (this.zb = !1);
        this.eg = a && a.Bdb || !1;
        a && a.Ydb && (this.Bd = !1);
        this.Wc = !this.Bb && this.Bd && a && a.Kdb || !1;
        this.Cd = void 0;
        a && a.oX && 0 < a.oX && (this.Cd = a.oX);
        this.rd = void 0;
        this.Sd = 0;
        this.tb = !1;
        this.Mb = this.Fa = null
    }
      , D8 = function(a) {
        a.j && (Wvb(a),
        a.j.cancel(),
        a.j = null)
    }
      , Xvb = function(a) {
        D8(a);
        a.ma && (g.Qa.clearTimeout(a.ma),
        a.ma = null);
        C8(a);
        a.B.cancel();
        a.K && ("number" === typeof a.K && g.Qa.clearTimeout(a.K),
        a.K = null)
    }
      , F8 = function(a) {
        Qvb(a.B) || a.K || (a.K = !0,
        g.Qf(a.sS, a),
        a.Ca = 0)
    }
      , Zvb = function(a, b) {
        if (Jvb(a.B) >= a.B.D - (a.K ? 1 : 0))
            return !1;
        if (a.K)
            return a.C = b.va.concat(a.C),
            !0;
        if (1 == a.Hh || 2 == a.Hh || a.Ca >= (a.Sf ? 0 : a.Tf))
            return !1;
        a.K = v8((0,
        g.cb)(a.sS, a, b), Yvb(a, a.Ca));
        a.Ca++;
        return !0
    }
      , awb = function(a, b) {
        var c;
        b ? c = b.Bd : c = a.gb++;
        var d = a.Pa.clone();
        g.go(d, "SID", a.D);
        g.go(d, "RID", c);
        g.go(d, "AID", a.eb);
        I8(a, d);
        a.S && a.ea && g.ko(d, a.S, a.ea);
        c = new w8(a,a.D,c,a.Ca + 1);
        null === a.S && (c.Pa = a.ea);
        b && (a.C = b.va.concat(a.C));
        b = $vb(a, c, 1E3);
        c.setTimeout(Math.round(.5 * a.Td) + Math.round(.5 * a.Td * Math.random()));
        Kvb(a.B, c);
        yvb(c, d, b)
    }
      , I8 = function(a, b) {
        a.Oa && g.Tc(a.Oa, function(c, d) {
            g.go(b, d, c)
        });
        a.G && g.Xn({}, function(c, d) {
            g.go(b, d, c)
        })
    }
      , $vb = function(a, b, c) {
        c = Math.min(a.C.length, c);
        var d = a.G ? (0,
        g.cb)(a.G.b1, a.G, a) : null;
        a: for (var e = a.C, f = -1; ; ) {
            var h = ["count=" + c];
            -1 == f ? 0 < c ? (f = e[0].j,
            h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
            for (var l = !0, m = 0; m < c; m++) {
                var n = e[m].j
                  , p = e[m].map;
                n -= f;
                if (0 > n)
                    f = Math.max(0, e[m].j - 100),
                    l = !1;
                else
                    try {
                        Uvb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
            }
            if (l) {
                d = h.join("&");
                break a
            }
        }
        a = a.C.splice(0, c);
        b.va = a;
        return d
    }
      , Nvb = function(a) {
        a.j || a.ma || (a.vc = 1,
        g.Qf(a.rS, a),
        a.va = 0)
    }
      , Ivb = function(a) {
        if (a.j || a.ma || 3 <= a.va)
            return !1;
        a.vc++;
        a.ma = v8((0,
        g.cb)(a.rS, a), Yvb(a, a.va));
        a.va++;
        return !0
    }
      , Wvb = function(a) {
        null != a.Fa && (g.Qa.clearTimeout(a.Fa),
        a.Fa = null)
    }
      , bwb = function(a) {
        a.j = new w8(a,a.D,"rpc",a.vc);
        null === a.S && (a.j.Pa = a.ea);
        a.j.zb = 0;
        var b = a.Md.clone();
        g.go(b, "RID", "rpc");
        g.go(b, "SID", a.D);
        g.go(b, "AID", a.eb);
        g.go(b, "CI", a.Ya ? "0" : "1");
        !a.Ya && a.Cd && g.go(b, "TO", a.Cd);
        g.go(b, "TYPE", "xmlhttp");
        I8(a, b);
        a.S && a.ea && g.ko(b, a.S, a.ea);
        a.kb && a.j.setTimeout(a.kb);
        var c = a.j;
        a = a.wc;
        c.Va = 1;
        c.S = a8(b.clone());
        c.ma = null;
        c.Ia = !0;
        xvb(c, a)
    }
      , C8 = function(a) {
        null != a.qa && (g.Qa.clearTimeout(a.qa),
        a.qa = null)
    }
      , Gvb = function(a, b) {
        var c = null;
        if (a.j == b) {
            C8(a);
            Wvb(a);
            a.j = null;
            var d = 2
        } else if (Hvb(a.B, b))
            c = b.va,
            Mvb(a.B, b),
            d = 1;
        else
            return;
        if (0 != a.Hh)
            if (b.C)
                if (1 == d) {
                    c = b.ma ? b.ma.length : 0;
                    b = Date.now() - b.Ca;
                    var e = a.Ca;
                    d = rvb();
                    d.dispatchEvent(new uvb(d,c,b,e));
                    F8(a)
                } else
                    Nvb(a);
            else {
                var f = b.Mb;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && Zvb(a, b) || 2 == d && Ivb(a)))
                    switch (c && 0 < c.length && (b = a.B,
                    b.C = b.C.concat(c)),
                    e) {
                    case 1:
                        E8(a, 5);
                        break;
                    case 4:
                        E8(a, 10);
                        break;
                    case 3:
                        E8(a, 6);
                        break;
                    default:
                        E8(a, 2)
                    }
            }
    }
      , Yvb = function(a, b) {
        var c = a.Rf + Math.floor(Math.random() * a.dg);
        a.isActive() || (c *= 2);
        return c * b
    }
      , E8 = function(a, b) {
        if (2 == b) {
            var c = null;
            a.G && (c = null);
            var d = (0,
            g.cb)(a.T$, a);
            c || (c = new g.Yn("//www.google.com/images/cleardot.gif"),
            g.Qa.location && "http" == g.Qa.location.protocol || g.Zn(c, "https"),
            a8(c));
            Svb(c.toString(), d)
        } else
            u8(2);
        a.Hh = 0;
        a.G && a.G.uS(b);
        cwb(a);
        Xvb(a)
    }
      , cwb = function(a) {
        a.Hh = 0;
        a.Mb = [];
        if (a.G) {
            var b = Rvb(a.B);
            if (0 != b.length || 0 != a.C.length)
                g.Lb(a.Mb, b),
                g.Lb(a.Mb, a.C),
                a.B.C.length = 0,
                g.Kb(a.C),
                a.C.length = 0;
            a.G.tS()
        }
    }
      , dwb = function(a) {
        if (0 == a.Hh)
            return a.Mb;
        var b = [];
        g.Lb(b, Rvb(a.B));
        g.Lb(b, a.C);
        return b
    }
      , Lvb = function(a, b, c) {
        var d = g.ho(c);
        "" != d.j ? (b && g.$n(d, b + "." + d.j),
        g.ao(d, d.D)) : (d = g.Qa.location,
        d = tub(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
        b = a.Ia;
        c = a.Ne;
        b && c && g.go(d, b, c);
        g.go(d, "VER", a.qS);
        I8(a, d);
        return d
    }
      , zvb = function(a, b, c) {
        if (b && !a.Va)
            throw Error("Can't create secondary domain capable XhrIo object.");
        b = c && a.We && !a.Me ? new g.rm(new g.Tn({
            LZ: !0
        })) : new g.rm(a.Me);
        b.K = a.Va;
        return b
    }
      , ewb = function() {}
      , fwb = function() {
        if (g.bf && !g.Nc(10))
            throw Error("Environmental error: no available transport.");
    }
      , K8 = function(a, b) {
        g.Gd.call(this);
        this.j = new Vvb(b);
        this.G = a;
        this.B = b && b.G6 || null;
        a = b && b.F6 || null;
        b && b.Gdb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
            "X-Client-Protocol": "webchannel"
        });
        this.j.ea = a;
        a = b && b.Veb || null;
        b && b.vX && (a ? a["X-WebChannel-Content-Type"] = b.vX : a = {
            "X-WebChannel-Content-Type": b.vX
        });
        b && b.QU && (a ? a["X-WebChannel-Client-Profile"] = b.QU : a = {
            "X-WebChannel-Client-Profile": b.QU
        });
        this.j.Ub = a;
        (a = b && b.Ueb) && !g.dc(a) && (this.j.S = a);
        this.K = b && b.N$ || !1;
        this.D = b && b.Kfb || !1;
        (b = b && b.R5) && !g.dc(b) && (this.j.Ia = b,
        g.gd(this.B, b) && g.md(this.B, b));
        this.C = new J8(this)
    }
      , gwb = function(a) {
        ovb.call(this);
        a.__headers__ && (this.headers = a.__headers__,
        this.statusCode = a.__status__,
        delete a.__headers__,
        delete a.__status__);
        var b = a.__sm__;
        b ? this.data = (this.j = g.Yc(b)) ? g.nd(b, this.j) : b : this.data = a
    }
      , hwb = function(a) {
        pvb.call(this);
        this.status = 1;
        this.errorCode = a
    }
      , J8 = function(a) {
        this.j = a
    }
      , iwb = function(a, b) {
        this.B = a;
        this.j = b
    }
      , jwb = function(a) {
        return dwb(a.j).map(function(b) {
            b = b.map;
            "__data__"in b && (b = b.__data__,
            b = a.B.D ? sub(b) : b);
            return b
        })
    }
      , L8 = function(a, b) {
        if ("function" !== typeof a)
            throw Error("Fn must not be null and must be a function");
        return g.Qa.setTimeout(function() {
            a()
        }, b)
    }
      , N8 = function(a) {
        M8.dispatchEvent(new kwb(M8,a))
    }
      , kwb = function(a) {
        g.xb.call(this, "statevent", a)
    }
      , O8 = function(a, b, c, d) {
        this.j = a;
        this.D = b;
        this.S = c;
        this.K = d || 1;
        this.B = 45E3;
        this.C = new g.lo(this);
        this.G = new g.gg;
        this.G.setInterval(250)
    }
      , mwb = function(a, b, c) {
        a.zx = 1;
        a.Zr = a8(b.clone());
        a.Fu = c;
        a.Ia = !0;
        lwb(a, null)
    }
      , nwb = function(a, b, c, d, e) {
        a.zx = 1;
        a.Zr = a8(b.clone());
        a.Fu = null;
        a.Ia = c;
        e && (a.pZ = !1);
        lwb(a, d)
    }
      , lwb = function(a, b) {
        a.yx = Date.now();
        P8(a);
        a.hs = a.Zr.clone();
        b8(a.hs, "t", a.K);
        a.LF = 0;
        a.cj = a.j.HK(a.j.IB() ? b : null);
        0 < a.FK && (a.JF = new r8((0,
        g.cb)(a.xS, a, a.cj),a.FK));
        a.C.Ta(a.cj, "readystatechange", a.e1);
        b = a.Eu ? g.pd(a.Eu) : {};
        a.Fu ? (a.KF = "POST",
        b["Content-Type"] = "application/x-www-form-urlencoded",
        a.cj.send(a.hs, a.KF, a.Fu, b)) : (a.KF = "GET",
        a.pZ && !g.Pc && (b.Connection = "close"),
        a.cj.send(a.hs, a.KF, null, b));
        a.j.Kn(1)
    }
      , qwb = function(a, b) {
        var c = a.LF
          , d = b.indexOf("\n", c);
        if (-1 == d)
            return owb;
        c = Number(b.substring(c, d));
        if (isNaN(c))
            return pwb;
        d += 1;
        if (d + c > b.length)
            return owb;
        b = b.slice(d, d + c);
        a.LF = d + c;
        return b
    }
      , swb = function(a, b) {
        a.yx = Date.now();
        P8(a);
        var c = b ? window.location.hostname : "";
        a.hs = a.Zr.clone();
        g.go(a.hs, "DOMAIN", c);
        g.go(a.hs, "t", a.K);
        try {
            a.Zn = new ActiveXObject("htmlfile")
        } catch (m) {
            Q8(a);
            a.gs = 7;
            N8(22);
            R8(a);
            return
        }
        var d = "<html><body>";
        if (b) {
            var e = "";
            for (b = 0; b < c.length; b++) {
                var f = c.charAt(b);
                if ("<" == f)
                    f = e + "\\x3c";
                else if (">" == f)
                    f = e + "\\x3e";
                else {
                    if (f in S8)
                        f = S8[f];
                    else if (f in rwb)
                        f = S8[f] = rwb[f];
                    else {
                        var h = f.charCodeAt(0);
                        if (31 < h && 127 > h)
                            var l = f;
                        else {
                            if (256 > h) {
                                if (l = "\\x",
                                16 > h || 256 < h)
                                    l += "0"
                            } else
                                l = "\\u",
                                4096 > h && (l += "0");
                            l += h.toString(16).toUpperCase()
                        }
                        f = S8[f] = l
                    }
                    f = e + f
                }
                e = f
            }
            d += '<script>document.domain="' + e + '"\x3c/script>'
        }
        d += "</body></html>";
        g.Vd("b/12014412");
        c = g.le(d);
        a.Zn.open();
        a.Zn.write(g.ke(c));
        a.Zn.close();
        a.Zn.parentWindow.m = (0,
        g.cb)(a.r9, a);
        a.Zn.parentWindow.d = (0,
        g.cb)(a.vY, a, !0);
        a.Zn.parentWindow.rpcClose = (0,
        g.cb)(a.vY, a, !1);
        c = a.Zn.createElement("DIV");
        a.Zn.parentWindow.document.body.appendChild(c);
        d = g.de(a.hs.toString()) || g.ie;
        d = g.Ie(g.ae(d));
        g.Vd("b/12014412");
        d = g.le('<iframe src="' + d + '"></iframe>');
        g.Rba(c, d);
        a.j.Kn(1)
    }
      , P8 = function(a) {
        a.GK = Date.now() + a.B;
        twb(a, a.B)
    }
      , twb = function(a, b) {
        if (null != a.Ax)
            throw Error("WatchDog timer not null");
        a.Ax = L8((0,
        g.cb)(a.d1, a), b)
    }
      , uwb = function(a) {
        a.Ax && (g.Qa.clearTimeout(a.Ax),
        a.Ax = null)
    }
      , R8 = function(a) {
        a.j.jh() || a.Du || a.j.MF(a)
    }
      , Q8 = function(a) {
        uwb(a);
        g.sb(a.JF);
        a.JF = null;
        a.G.stop();
        a.C.Of();
        if (a.cj) {
            var b = a.cj;
            a.cj = null;
            b.abort();
            b.dispose()
        }
        a.Zn && (a.Zn = null)
    }
      , vwb = function(a, b) {
        try {
            a.j.yS(a, b),
            a.j.Kn(4)
        } catch (c) {}
    }
      , xwb = function(a, b, c, d, e) {
        if (0 == d)
            c(!1);
        else {
            var f = e || 0;
            d--;
            wwb(a, b, function(h) {
                h ? c(!0) : g.Qa.setTimeout(function() {
                    xwb(a, b, c, d, f)
                }, f)
            })
        }
    }
      , wwb = function(a, b, c) {
        var d = new Image;
        d.onload = function() {
            try {
                T8(d),
                c(!0)
            } catch (e) {}
        }
        ;
        d.onerror = function() {
            try {
                T8(d),
                c(!1)
            } catch (e) {}
        }
        ;
        d.onabort = function() {
            try {
                T8(d),
                c(!1)
            } catch (e) {}
        }
        ;
        d.ontimeout = function() {
            try {
                T8(d),
                c(!1)
            } catch (e) {}
        }
        ;
        g.Qa.setTimeout(function() {
            if (d.ontimeout)
                d.ontimeout()
        }, b);
        d.src = a
    }
      , T8 = function(a) {
        a.onload = null;
        a.onerror = null;
        a.onabort = null;
        a.ontimeout = null
    }
      , ywb = function(a) {
        this.j = a;
        this.B = new s8
    }
      , zwb = function(a) {
        var b = U8(a.j, a.iC, "/mail/images/cleardot.gif");
        a8(b);
        xwb(b.toString(), 5E3, (0,
        g.cb)(a.N3, a), 3, 2E3);
        a.Kn(1)
    }
      , Awb = function(a) {
        var b = a.j.K;
        if (null != b)
            N8(5),
            b ? (N8(11),
            V8(a.j, a, !1)) : (N8(12),
            V8(a.j, a, !0));
        else if (a.Hj = new O8(a),
        a.Hj.Eu = a.IK,
        b = a.j,
        b = U8(b, b.IB() ? a.HB : null, a.JK),
        N8(5),
        !g.bf || g.Nc(10))
            b8(b, "TYPE", "xmlhttp"),
            nwb(a.Hj, b, !1, a.HB, !1);
        else {
            b8(b, "TYPE", "html");
            var c = a.Hj;
            a = !!a.HB;
            c.zx = 3;
            c.Zr = a8(b.clone());
            swb(c, a)
        }
    }
      , Bwb = function(a, b, c) {
        this.j = 1;
        this.B = [];
        this.C = [];
        this.G = new s8;
        this.ea = a || null;
        this.K = null != b ? b : null;
        this.ma = c || !1
    }
      , Cwb = function(a, b) {
        this.j = a;
        this.map = b;
        this.context = null
    }
      , Dwb = function(a, b, c, d) {
        g.xb.call(this, "timingevent", a);
        this.size = b;
        this.KA = d
    }
      , Ewb = function(a) {
        g.xb.call(this, "serverreachability", a)
    }
      , Gwb = function(a) {
        a.f1(1, 0);
        a.NF = U8(a, null, a.KK);
        Fwb(a)
    }
      , Hwb = function(a) {
        a.Is && (a.Is.abort(),
        a.Is = null);
        a.Rg && (a.Rg.cancel(),
        a.Rg = null);
        a.cq && (g.Qa.clearTimeout(a.cq),
        a.cq = null);
        W8(a);
        a.Qj && (a.Qj.cancel(),
        a.Qj = null);
        a.ls && (g.Qa.clearTimeout(a.ls),
        a.ls = null)
    }
      , Iwb = function(a, b) {
        if (0 == a.j)
            throw Error("Invalid operation: sending map when state is closed");
        a.B.push(new Cwb(a.j1++,b));
        2 != a.j && 3 != a.j || Fwb(a)
    }
      , Jwb = function(a) {
        var b = 0;
        a.Rg && b++;
        a.Qj && b++;
        return b
    }
      , Fwb = function(a) {
        a.Qj || a.ls || (a.ls = L8((0,
        g.cb)(a.CS, a), 0),
        a.Cx = 0)
    }
      , Mwb = function(a, b) {
        if (1 == a.j) {
            if (!b) {
                a.KB = Math.floor(1E5 * Math.random());
                b = a.KB++;
                var c = new O8(a,"",b);
                c.Eu = a.zo;
                var d = Kwb(a)
                  , e = a.NF.clone();
                g.go(e, "RID", b);
                g.go(e, "CVER", "1");
                X8(a, e);
                mwb(c, e, d);
                a.Qj = c;
                a.j = 2
            }
        } else
            3 == a.j && (b ? Lwb(a, b) : 0 == a.B.length || a.Qj || Lwb(a))
    }
      , Lwb = function(a, b) {
        if (b)
            if (6 < a.Gu) {
                a.B = a.C.concat(a.B);
                a.C.length = 0;
                var c = a.KB - 1;
                b = Kwb(a)
            } else
                c = b.S,
                b = b.Fu;
        else
            c = a.KB++,
            b = Kwb(a);
        var d = a.NF.clone();
        g.go(d, "SID", a.D);
        g.go(d, "RID", c);
        g.go(d, "AID", a.Dx);
        X8(a, d);
        c = new O8(a,a.D,c,a.Cx + 1);
        c.Eu = a.zo;
        c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
        a.Qj = c;
        mwb(c, d, b)
    }
      , X8 = function(a, b) {
        a.Hi && (a = a.Hi.GS()) && g.Tc(a, function(c, d) {
            g.go(b, d, c)
        })
    }
      , Kwb = function(a) {
        var b = Math.min(a.B.length, 1E3)
          , c = ["count=" + b];
        if (6 < a.Gu && 0 < b) {
            var d = a.B[0].j;
            c.push("ofs=" + d)
        } else
            d = 0;
        for (var e = {}, f = 0; f < b; e = {
            Qz: e.Qz
        },
        f++) {
            e.Qz = a.B[f].j;
            var h = a.B[f].map;
            e.Qz = 6 >= a.Gu ? f : e.Qz - d;
            try {
                g.Tc(h, function(l) {
                    return function(m, n) {
                        c.push("req" + l.Qz + "_" + n + "=" + encodeURIComponent(m))
                    }
                }(e))
            } catch (l) {
                c.push("req" + e.Qz + "_type=" + encodeURIComponent("_badmap"))
            }
        }
        a.C = a.C.concat(a.B.splice(0, b));
        return c.join("&")
    }
      , Nwb = function(a) {
        a.Rg || a.cq || (a.S = 1,
        a.cq = L8((0,
        g.cb)(a.BS, a), 0),
        a.Bx = 0)
    }
      , Pwb = function(a) {
        if (a.Rg || a.cq || 3 <= a.Bx)
            return !1;
        a.S++;
        a.cq = L8((0,
        g.cb)(a.BS, a), Owb(a, a.Bx));
        a.Bx++;
        return !0
    }
      , V8 = function(a, b, c) {
        a.iK = null == a.K ? c : !a.K;
        a.Ao = b.bq;
        a.ma || Gwb(a)
    }
      , W8 = function(a) {
        null != a.Hu && (g.Qa.clearTimeout(a.Hu),
        a.Hu = null)
    }
      , Owb = function(a, b) {
        var c = 5E3 + Math.floor(1E4 * Math.random());
        a.isActive() || (c *= 2);
        return c * b
    }
      , Y8 = function(a, b) {
        if (2 == b || 9 == b) {
            var c = null;
            a.Hi && (c = null);
            var d = (0,
            g.cb)(a.S$, a);
            c || (c = new g.Yn("//www.google.com/images/cleardot.gif"),
            a8(c));
            wwb(c.toString(), 1E4, d)
        } else
            N8(2);
        Qwb(a, b)
    }
      , Qwb = function(a, b) {
        a.j = 0;
        a.Hi && a.Hi.DS(b);
        Rwb(a);
        Hwb(a)
    }
      , Rwb = function(a) {
        a.j = 0;
        a.Ao = -1;
        if (a.Hi)
            if (0 == a.C.length && 0 == a.B.length)
                a.Hi.LK();
            else {
                var b = g.Kb(a.C)
                  , c = g.Kb(a.B);
                a.C.length = 0;
                a.B.length = 0;
                a.Hi.LK(b, c)
            }
    }
      , U8 = function(a, b, c) {
        var d = g.ho(c);
        if ("" != d.j)
            b && g.$n(d, b + "." + d.j),
            g.ao(d, d.D);
        else {
            var e = window.location;
            d = tub(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
        }
        a.JB && g.Tc(a.JB, function(f, h) {
            g.go(d, h, f)
        });
        g.go(d, "VER", a.Gu);
        X8(a, d);
        return d
    }
      , Swb = function() {}
      , Twb = function() {
        this.j = [];
        this.B = []
    }
      , Uwb = function(a) {
        g.xb.call(this, "channelMessage");
        this.message = a
    }
      , Vwb = function(a) {
        g.xb.call(this, "channelError");
        this.error = a
    }
      , Wwb = function(a, b) {
        this.action = a;
        this.params = b || {}
    }
      , Z8 = function(a, b) {
        g.J.call(this);
        this.j = new g.Ut(this.j9,0,this);
        g.L(this, this.j);
        this.Ri = 5E3;
        this.B = 0;
        if ("function" === typeof a)
            b && (a = (0,
            g.cb)(a, b));
        else if (a && "function" === typeof a.handleEvent)
            a = (0,
            g.cb)(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        this.C = a
    }
      , Xwb = function(a, b, c, d, e) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? function() {
            return ""
        }
        : d;
        e = void 0 === e ? !1 : e;
        this.Ca = a;
        this.S = b;
        this.C = new g.Du;
        this.B = new Z8(this.q$,this);
        this.j = null;
        this.qa = !1;
        this.K = null;
        this.ea = "";
        this.ma = this.G = 0;
        this.D = [];
        this.Va = c;
        this.va = d;
        this.Ya = e;
        this.Pa = new uub;
        this.Fa = new wub;
        this.Oa = new yub;
        this.Ia = new Aub;
        this.eb = new Cub;
        this.gb = new Dub
    }
      , Ywb = function(a) {
        if (a.j) {
            var b = a.va()
              , c = a.j.zo || {};
            b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
            a.j.zo = c
        }
    }
      , $8 = function(a) {
        this.scheme = "https";
        this.port = this.domain = "";
        this.j = "/api/lounge";
        this.B = !0;
        a = a || document.location.href;
        var b = Number(g.rl(4, a)) || "";
        b && (this.port = ":" + b);
        this.domain = g.sl(a) || "";
        a = g.nc();
        0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1],
        0 > g.mc(a, "10.0") && (this.B = !1))
    }
      , a9 = function(a, b) {
        var c = a.j;
        a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
        return g.yl(c + b, {})
    }
      , Zwb = function(a, b, c, d, e) {
        a = {
            format: "JSON",
            method: "POST",
            context: a,
            timeout: 5E3,
            withCredentials: !1,
            onSuccess: g.db(a.D, d, !0),
            onError: g.db(a.C, e),
            onTimeout: g.db(a.G, e)
        };
        c && (a.postParams = c,
        a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.DC(b, a)
    }
      , $wb = function(a, b) {
        g.Gd.call(this);
        var c = this;
        this.Id = a();
        this.Id.subscribe("handlerOpened", this.o1, this);
        this.Id.subscribe("handlerClosed", this.m1, this);
        this.Id.subscribe("handlerError", function(d, e) {
            c.onError(e)
        });
        this.Id.subscribe("handlerMessage", this.n1, this);
        this.j = b
    }
      , axb = function(a, b, c) {
        var d = this;
        c = void 0 === c ? function() {
            return ""
        }
        : c;
        var e = void 0 === e ? new fwb : e;
        var f = void 0 === f ? new g.Du : f;
        this.pathPrefix = a;
        this.j = b;
        this.Ca = c;
        this.G = f;
        this.ma = null;
        this.ea = this.S = 0;
        this.channel = null;
        this.K = 0;
        this.C = new Z8(function() {
            d.C.isActive();
            var h;
            0 === (null == (h = d.channel) ? void 0 : Jvb((new iwb(h,h.j)).j.B)) && d.connect(d.ma, d.S)
        }
        );
        this.D = {};
        this.B = {};
        this.qa = !1;
        this.logger = null;
        this.va = [];
        this.Mg = void 0;
        this.Pa = new uub;
        this.Fa = new wub;
        this.Oa = new yub;
        this.Ia = new Aub
    }
      , bxb = function(a) {
        g.yd(a.channel, "m", function() {
            a.K = 3;
            a.C.reset();
            a.ma = null;
            a.S = 0;
            for (var b = g.u(a.va), c = b.next(); !c.done; c = b.next())
                c = c.value,
                a.channel && a.channel.send(c);
            a.va = [];
            a.ra("webChannelOpened");
            vub(a.Pa, "WEB_CHANNEL")
        });
        g.yd(a.channel, "n", function() {
            a.K = 0;
            a.C.isActive() || a.ra("webChannelClosed");
            var b, c = null == (b = a.channel) ? void 0 : jwb(new iwb(b,b.j));
            c && (a.va = [].concat(g.qa(c)));
            xub(a.Fa, "WEB_CHANNEL")
        });
        g.yd(a.channel, "p", function(b) {
            var c = b.data;
            "gracefulReconnect" === c[0] ? (a.C.start(),
            a.channel && a.channel.close()) : a.ra("webChannelMessage", new Wwb(c[0],c[1]));
            a.Mg = b.statusCode;
            zub(a.Oa, "WEB_CHANNEL")
        });
        g.yd(a.channel, "o", function() {
            401 === a.Mg || a.C.start();
            a.ra("webChannelError");
            Bub(a.Ia, "WEB_CHANNEL")
        })
    }
      , cxb = function(a) {
        var b = a.Ca();
        b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
    }
      , dxb = function(a) {
        g.Gd.call(this);
        this.j = a();
        this.j.subscribe("webChannelOpened", this.t1, this);
        this.j.subscribe("webChannelClosed", this.q1, this);
        this.j.subscribe("webChannelError", this.onError, this);
        this.j.subscribe("webChannelMessage", this.s1, this)
    }
      , exb = function(a, b, c, d, e) {
        function f() {
            return new Xwb(a9(a, "/bc"),b,!1,c,d)
        }
        c = void 0 === c ? function() {
            return ""
        }
        : c;
        return g.gC("enable_mdx_web_channel_desktop") ? new dxb(function() {
            return new axb(a9(a, "/wc"),b,c)
        }
        ) : new $wb(f,e)
    }
      , ixb = function() {
        var a = fxb;
        gxb();
        b9.push(a);
        hxb()
    }
      , c9 = function(a, b) {
        gxb();
        var c = jxb(a, String(b));
        0 == b9.length ? kxb(c) : (hxb(),
        g.Yb(b9, function(d) {
            d(c)
        }))
    }
      , d9 = function(a) {
        c9("CP", a)
    }
      , gxb = function() {
        b9 || (b9 = g.Ta("yt.mdx.remote.debug.handlers_") || [],
        g.Sa("yt.mdx.remote.debug.handlers_", b9))
    }
      , kxb = function(a) {
        var b = (e9 + 1) % 50;
        e9 = b;
        f9[b] = a;
        g9 || (g9 = 49 == b)
    }
      , hxb = function() {
        var a = b9;
        if (f9[0]) {
            var b = g9 ? e9 : -1;
            do {
                b = (b + 1) % 50;
                var c = f9[b];
                g.Yb(a, function(d) {
                    d(c)
                })
            } while (b != e9);
            f9 = Array(50);
            e9 = -1;
            g9 = !1
        }
    }
      , jxb = function(a, b) {
        var c = (Date.now() - lxb) / 1E3;
        c.toFixed && (c = c.toFixed(3));
        var d = [];
        d.push("[", c + "s", "] ");
        d.push("[", "yt.mdx.remote", "] ");
        d.push(a + ": " + b, "\n");
        return d.join("")
    }
      , h9 = function(a) {
        g.yG.call(this);
        this.K = a;
        this.screens = []
    }
      , mxb = function(a, b) {
        var c = a.get(b.uuid) || a.get(b.id);
        if (c)
            return a = c.name,
            c.id = b.id || c.id,
            c.name = b.name,
            c.token = b.token,
            c.uuid = b.uuid || c.uuid,
            c.name != a;
        a.screens.push(b);
        return !0
    }
      , nxb = function(a, b) {
        var c = a.screens.length != b.length;
        a.screens = g.ks(a.screens, function(f) {
            return !!Pub(b, f)
        });
        for (var d = 0, e = b.length; d < e; d++)
            c = mxb(a, b[d]) || c;
        return c
    }
      , oxb = function(a, b) {
        var c = a.screens.length;
        a.screens = g.ks(a.screens, function(d) {
            return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
        });
        return a.screens.length < c
    }
      , pxb = function(a, b, c, d, e) {
        g.yG.call(this);
        this.C = a;
        this.S = b;
        this.D = c;
        this.K = d;
        this.G = e;
        this.B = 0;
        this.j = null;
        this.qd = NaN
    }
      , j9 = function(a) {
        h9.call(this, "LocalScreenService");
        this.B = a;
        this.j = NaN;
        i9(this);
        this.info("Initializing with " + Mub(this.screens))
    }
      , qxb = function(a) {
        if (a.screens.length) {
            var b = g.Up(a.screens, function(d) {
                return d.id
            })
              , c = a9(a.B, "/pairing/get_lounge_token_batch");
            Zwb(a.B, c, {
                screen_ids: b.join(",")
            }, (0,
            g.cb)(a.p5, a), (0,
            g.cb)(a.o5, a))
        }
    }
      , i9 = function(a) {
        if (g.gC("deprecate_pair_servlet_enabled"))
            return nxb(a, []);
        var b = Lub(Wub());
        b = g.ks(b, function(c) {
            return !c.uuid
        });
        return nxb(a, b)
    }
      , k9 = function(a, b) {
        Yub(g.Up(a.screens, Jub));
        b && Xub()
    }
      , sxb = function(a, b) {
        g.yG.call(this);
        this.K = b;
        b = (b = g.vD("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
        for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
            var h = d[f].id;
            c[h] = g.Db(b, h)
        }
        this.j = c;
        this.G = a;
        this.C = this.D = NaN;
        this.B = null;
        rxb("Initialized with " + g.nm(this.j))
    }
      , txb = function(a, b, c) {
        var d = a9(a.G, "/pairing/get_screen_availability");
        Zwb(a.G, d, {
            lounge_token: b.token
        }, (0,
        g.cb)(function(e) {
            e = e.screens || [];
            for (var f = e.length, h = 0; h < f; ++h)
                if (e[h].loungeToken == b.token) {
                    c("online" == e[h].status);
                    return
                }
            c(!1)
        }, a), (0,
        g.cb)(function() {
            c(!1)
        }, a))
    }
      , vxb = function(a, b) {
        a: if (qub(b) != qub(a.j))
            var c = !1;
        else {
            c = g.fd(b);
            for (var d = c.length, e = 0; e < d; ++e)
                if (!a.j[c[e]]) {
                    c = !1;
                    break a
                }
            c = !0
        }
        c || (rxb("Updated online screens: " + g.nm(a.j)),
        a.j = b,
        a.ra("screenChange"));
        uxb(a)
    }
      , l9 = function(a) {
        isNaN(a.C) || g.AC(a.C);
        a.C = g.yC((0,
        g.cb)(a.BQ, a), 0 < a.D && a.D < g.eb() ? 2E4 : 1E4)
    }
      , rxb = function(a) {
        c9("OnlineScreenService", a)
    }
      , wxb = function(a) {
        var b = {};
        g.Yb(a.K(), function(c) {
            c.token ? b[c.token] = c.id : this.ag("Requesting availability of screen w/o lounge token.")
        });
        return b
    }
      , uxb = function(a) {
        a = g.fd(g.Uc(a.j, function(b) {
            return b
        }));
        g.Ub(a);
        a.length ? g.uD("yt-remote-online-screen-ids", a.join(","), 60) : g.wD("yt-remote-online-screen-ids")
    }
      , m9 = function(a, b) {
        b = void 0 === b ? !1 : b;
        h9.call(this, "ScreenService");
        this.D = a;
        this.S = b;
        this.j = this.B = null;
        this.C = [];
        this.G = {};
        xxb(this)
    }
      , zxb = function(a, b, c, d, e, f) {
        a.info("getAutomaticScreenByIds " + c + " / " + b);
        c || (c = a.G[b]);
        var h = a.Kk()
          , l = c ? i8(h, c) : null;
        c && (a.S || l) || (l = i8(h, b));
        if (l) {
            l.uuid = b;
            var m = n9(a, l);
            txb(a.j, m, function(n) {
                e(n ? m : null)
            })
        } else
            c ? yxb(a, c, (0,
            g.cb)(function(n) {
                var p = n9(this, new f8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                txb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
    }
      , Axb = function(a, b) {
        for (var c = a.screens.length, d = 0; d < c; ++d)
            if (a.screens[d].name == b)
                return a.screens[d];
        return null
    }
      , Bxb = function(a, b, c) {
        txb(a.j, b, c)
    }
      , yxb = function(a, b, c, d) {
        a.info("requestLoungeToken_ for " + b);
        var e = {
            postParams: {
                screen_ids: b
            },
            method: "POST",
            context: a,
            onSuccess: function(f, h) {
                f = h && h.screens || [];
                f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
            },
            onError: function() {
                d(Error("Request screen lounge token failed"))
            }
        };
        g.DC(a9(a.D, "/pairing/get_lounge_token_batch"), e)
    }
      , Cxb = function(a) {
        a.screens = a.B.Kk();
        var b = a.G, c = {}, d;
        for (d in b)
            c[b[d]] = d;
        b = a.screens.length;
        for (d = 0; d < b; ++d) {
            var e = a.screens[d];
            e.uuid = c[e.id] || ""
        }
        a.info("Updated manual screens: " + Mub(a.screens))
    }
      , xxb = function(a) {
        Dxb(a);
        a.B = new j9(a.D);
        a.B.subscribe("screenChange", (0,
        g.cb)(a.z5, a));
        Cxb(a);
        a.S || (a.C = Lub(g.vD("yt-remote-automatic-screen-cache") || []));
        Dxb(a);
        a.info("Initializing automatic screens: " + Mub(a.C));
        a.j = new sxb(a.D,(0,
        g.cb)(a.Kk, a, !0));
        a.j.subscribe("screenChange", (0,
        g.cb)(function() {
            this.ra("onlineScreenChange")
        }, a))
    }
      , n9 = function(a, b) {
        var c = a.get(b.id);
        c ? (c.uuid = b.uuid,
        b = c) : ((c = i8(a.C, b.uuid)) ? (c.id = b.id,
        c.token = b.token,
        b = c) : a.C.push(b),
        a.S || Exb(a));
        Dxb(a);
        a.G[b.uuid] = b.id;
        g.uD("yt-remote-device-id-map", a.G, 31536E3);
        return b
    }
      , Exb = function(a) {
        a = g.ks(a.C, function(b) {
            return "shortLived" != b.idType
        });
        g.uD("yt-remote-automatic-screen-cache", g.Up(a, Jub))
    }
      , Dxb = function(a) {
        a.G = g.vD("yt-remote-device-id-map") || {}
    }
      , o9 = function(a, b, c) {
        g.yG.call(this);
        this.Ia = c;
        this.D = a;
        this.B = b;
        this.j = null
    }
      , p9 = function(a, b) {
        a.j = b;
        a.ra("sessionScreen", a.j)
    }
      , Fxb = function(a, b) {
        a.j && (a.j.token = b,
        n9(a.D, a.j));
        a.ra("sessionScreen", a.j)
    }
      , q9 = function(a, b) {
        c9(a.Ia, b)
    }
      , r9 = function(a, b, c) {
        o9.call(this, a, b, "CastSession");
        var d = this;
        this.config_ = c;
        this.C = null;
        this.va = (0,
        g.cb)(this.B1, this);
        this.Fa = (0,
        g.cb)(this.y9, this);
        this.qa = g.yC(function() {
            Gxb(d, null)
        }, 12E4);
        this.S = this.G = this.K = this.ma = 0;
        this.Ca = !1;
        this.ea = "unknown"
    }
      , Ixb = function(a, b) {
        g.AC(a.S);
        a.S = 0;
        0 == b ? Hxb(a) : a.S = g.yC(function() {
            Hxb(a)
        }, b)
    }
      , Hxb = function(a) {
        Jxb(a, "getLoungeToken");
        g.AC(a.G);
        a.G = g.yC(function() {
            Kxb(a, null)
        }, 3E4)
    }
      , Jxb = function(a, b) {
        a.info("sendYoutubeMessage_: " + b + " " + g.nm());
        var c = {};
        c.type = b;
        a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0,
        g.cb)(function() {
            q9(this, "Failed to send message: " + b + ".")
        }, a)) : q9(a, "Sending yt message without session: " + g.nm(c))
    }
      , Lxb = function(a, b) {
        b ? (a.info("onConnectedScreenId_: Received screenId: " + b),
        a.j && a.j.id == b || a.UV(b, function(c) {
            p9(a, c)
        }, function() {
            return a.xj()
        }, 5)) : a.xj(Error("Waiting for session status timed out."))
    }
      , Nxb = function(a, b, c) {
        a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
        var d = new f8(b);
        Mxb(a, d, function(e) {
            e ? (a.Ca = !0,
            n9(a.D, d),
            p9(a, d),
            a.ea = "unknown",
            Ixb(a, c)) : (g.jC(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")),
            a.xj())
        }, 5)
    }
      , Gxb = function(a, b) {
        g.AC(a.qa);
        a.qa = 0;
        b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? Nxb(a, {
            name: a.B.friendlyName,
            screenId: b.screenId,
            loungeToken: b.loungeToken,
            dialId: b.deviceId,
            screenIdType: "shortLived"
        }, b.loungeTokenRefreshIntervalMs) : (g.jC(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")),
        Lxb(a, b.screenId))) : (g.jC(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")),
        Lxb(a, b.screenId)) : Lxb(a, b.screenId) : a.xj(Error("Waiting for session status timed out."))
    }
      , Kxb = function(a, b) {
        g.AC(a.G);
        a.G = 0;
        var c = null;
        if (b)
            if (b.loungeToken) {
                var d;
                (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
            } else
                c = "missingLoungeToken";
        else
            c = "noLoungeTokenResponse";
        c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)),
        a.ea = c,
        Ixb(a, 3E4)) : (Fxb(a, b.loungeToken),
        a.Ca = !1,
        a.ea = "unknown",
        Ixb(a, b.loungeTokenRefreshIntervalMs))
    }
      , Mxb = function(a, b, c, d) {
        g.AC(a.K);
        a.K = 0;
        Bxb(a.D, b, function(e) {
            e || 0 > d ? c(e) : a.K = g.yC(function() {
                Mxb(a, b, c, d - 1)
            }, 300)
        })
    }
      , Oxb = function(a) {
        g.AC(a.ma);
        a.ma = 0;
        g.AC(a.K);
        a.K = 0;
        g.AC(a.qa);
        a.qa = 0;
        g.AC(a.G);
        a.G = 0;
        g.AC(a.S);
        a.S = 0
    }
      , s9 = function(a, b, c, d) {
        o9.call(this, a, b, "DialSession");
        this.config_ = d;
        this.C = this.ma = null;
        this.Fa = "";
        this.Va = c;
        this.Pa = null;
        this.qa = function() {}
        ;
        this.ea = NaN;
        this.Oa = (0,
        g.cb)(this.C1, this);
        this.G = function() {}
        ;
        this.S = this.K = 0;
        this.va = !1;
        this.Ca = "unknown"
    }
      , t9 = function(a) {
        var b;
        return !!(a.config_.enableDialLoungeToken && (null == (b = a.C) ? 0 : b.getDialAppInfo))
    }
      , Pxb = function(a) {
        a.G = a.D.IS(a.Fa, a.B.label, a.B.friendlyName, t9(a), function(b, c) {
            a.G = function() {}
            ;
            a.va = !0;
            p9(a, b);
            "shortLived" == b.idType && 0 < c && u9(a, c)
        }, function(b) {
            a.G = function() {}
            ;
            a.xj(b)
        })
    }
      , Qxb = function(a) {
        var b = {};
        b.pairingCode = a.Fa;
        b.theme = a.Va;
        $ub() && (b.env_useStageMdx = 1);
        return g.xl(b)
    }
      , Rxb = function(a) {
        return new Promise(function(b) {
            a.Fa = Nub();
            if (a.Pa) {
                var c = new chrome.cast.DialLaunchResponse(!0,Qxb(a));
                b(c);
                Pxb(a)
            } else
                a.qa = function() {
                    g.AC(a.ea);
                    a.qa = function() {}
                    ;
                    a.ea = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0,Qxb(a));
                    b(d);
                    Pxb(a)
                }
                ,
                a.ea = g.yC(function() {
                    a.qa()
                }, 100)
        }
        )
    }
      , Txb = function(a, b, c) {
        a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
        var d = new f8(b);
        return (new Promise(function(e) {
            Sxb(a, d, function(f) {
                f ? (a.va = !0,
                n9(a.D, d),
                p9(a, d),
                u9(a, c)) : g.jC(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                e(f)
            }, 5)
        }
        )).then(function(e) {
            return e ? new chrome.cast.DialLaunchResponse(!1) : Rxb(a)
        })
    }
      , Uxb = function(a, b) {
        var c = a.ma.receiver.label
          , d = a.B.friendlyName;
        return (new Promise(function(e) {
            zxb(a.D, c, b, d, function(f) {
                f && f.token && p9(a, f);
                e(f)
            }, function(f) {
                q9(a, "Failed to get DIAL screen: " + f);
                e(null)
            })
        }
        )).then(function(e) {
            return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : Rxb(a)
        })
    }
      , Sxb = function(a, b, c, d) {
        g.AC(a.K);
        a.K = 0;
        Bxb(a.D, b, function(e) {
            e || 0 > d ? c(e) : a.K = g.yC(function() {
                Sxb(a, b, c, d - 1)
            }, 300)
        })
    }
      , u9 = function(a, b) {
        a.info("getDialAppInfoWithTimeout_ " + b);
        t9(a) && (g.AC(a.S),
        a.S = 0,
        0 == b ? Vxb(a) : a.S = g.yC(function() {
            Vxb(a)
        }, b))
    }
      , Vxb = function(a) {
        t9(a) && a.C.getDialAppInfo(function(b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
                var d;
                (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
            } else
                c = "missingLoungeToken";
            c ? (a.Ca = c,
            u9(a, 3E4)) : (a.va = !1,
            a.Ca = "unknown",
            Fxb(a, b.loungeToken),
            u9(a, b.loungeTokenRefreshIntervalMs))
        }, function(b) {
            a.info("getDialAppInfo error: " + b);
            a.Ca = "noLoungeTokenResponse";
            u9(a, 3E4)
        })
    }
      , Wxb = function(a) {
        g.AC(a.K);
        a.K = 0;
        g.AC(a.S);
        a.S = 0;
        a.G();
        a.G = function() {}
        ;
        g.AC(a.ea)
    }
      , v9 = function(a, b) {
        o9.call(this, a, b, "ManualSession");
        this.C = g.yC((0,
        g.cb)(this.Jz, this, null), 150)
    }
      , w9 = function(a, b) {
        g.yG.call(this);
        this.config_ = b;
        this.B = a;
        this.ma = b.appId || "233637DE";
        this.D = b.theme || "cl";
        this.ea = b.disableCastApi || !1;
        this.K = b.forceMirroring || !1;
        this.j = null;
        this.S = !1;
        this.C = [];
        this.G = (0,
        g.cb)(this.u8, this)
    }
      , Xxb = function(a, b) {
        return b ? g.Bb(a.C, function(c) {
            return g8(b, c.label)
        }, a) : null
    }
      , x9 = function(a) {
        c9("Controller", a)
    }
      , fxb = function(a) {
        window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
    }
      , y9 = function(a) {
        return a.S || !!a.C.length || !!a.j
    }
      , z9 = function(a, b, c) {
        b != a.j && (g.sb(a.j),
        (a.j = b) ? (c ? a.ra("yt-remote-cast2-receiver-resumed", b.B) : a.ra("yt-remote-cast2-receiver-selected", b.B),
        b.subscribe("sessionScreen", (0,
        g.cb)(a.tY, a, b)),
        b.subscribe("sessionFailed", function() {
            return Yxb(a, b)
        }),
        b.j ? a.ra("yt-remote-cast2-session-change", b.j) : c && a.j.Jz(null)) : a.ra("yt-remote-cast2-session-change", null))
    }
      , Yxb = function(a, b) {
        a.j == b && a.ra("yt-remote-cast2-session-failed")
    }
      , Zxb = function(a) {
        var b = a.B.HS()
          , c = a.j && a.j.B;
        a = g.Up(b, function(d) {
            c && g8(d, c.label) && (c = null);
            var e = d.uuid ? d.uuid : d.id
              , f = Xxb(this, d);
            f ? (f.label = e,
            f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e,d.name),
            f.receiverType = chrome.cast.ReceiverType.CUSTOM);
            return f
        }, a);
        c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label,c.friendlyName),
        c.receiverType = chrome.cast.ReceiverType.CUSTOM),
        a.push(c));
        return a
    }
      , fyb = function(a, b, c, d) {
        d.disableCastApi ? A9("Cannot initialize because disabled by Mdx config.") : $xb() ? ayb(b, d) && (byb(!0),
        window.chrome && chrome.cast && chrome.cast.isAvailable ? cyb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
            e ? cyb(a, c) : (B9("Failed to load cast API: " + f),
            dyb(!1),
            byb(!1),
            g.wD("yt-remote-cast-available"),
            g.wD("yt-remote-cast-receiver"),
            eyb(),
            c(!1))
        }
        ,
        d.loadCastApiSetupScript ? g.Mqa("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= bvb() && kvb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? fvb() : 89 <= bvb() ? mvb() : (jvb(),
        p8(lvb.map(gvb))))) : A9("Cannot initialize because not running Chrome")
    }
      , eyb = function() {
        A9("dispose");
        var a = C9();
        a && a.dispose();
        g.Sa("yt.mdx.remote.cloudview.instance_", null);
        gyb(!1);
        g.lF(hyb);
        hyb.length = 0
    }
      , D9 = function() {
        return !!g.vD("yt-remote-cast-installed")
    }
      , iyb = function() {
        var a = g.vD("yt-remote-cast-receiver");
        return a ? a.friendlyName : null
    }
      , jyb = function() {
        A9("clearCurrentReceiver");
        g.wD("yt-remote-cast-receiver")
    }
      , kyb = function() {
        return D9() ? C9() ? C9().getCastSession() : (B9("getCastSelector: Cast is not initialized."),
        null) : (B9("getCastSelector: Cast API is not installed!"),
        null)
    }
      , lyb = function() {
        D9() ? C9() ? E9() ? (A9("Requesting cast selector."),
        C9().requestSession()) : (A9("Wait for cast API to be ready to request the session."),
        hyb.push(g.kF("yt-remote-cast2-api-ready", lyb))) : B9("requestCastSelector: Cast is not initialized.") : B9("requestCastSelector: Cast API is not installed!")
    }
      , F9 = function(a, b) {
        E9() ? C9().setConnectedScreenStatus(a, b) : B9("setConnectedScreenStatus called before ready.")
    }
      , $xb = function() {
        var a = 0 <= g.nc().search(/ (CrMo|Chrome|CriOS)\//);
        return g.FL || a
    }
      , myb = function(a, b) {
        C9().init(a, b)
    }
      , ayb = function(a, b) {
        var c = !1;
        C9() || (a = new w9(a,b),
        a.subscribe("yt-remote-cast2-availability-change", function(d) {
            g.uD("yt-remote-cast-available", d);
            n8("yt-remote-cast2-availability-change", d)
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
            A9("onReceiverSelected: " + d.friendlyName);
            g.uD("yt-remote-cast-receiver", d);
            n8("yt-remote-cast2-receiver-selected", d)
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
            A9("onReceiverResumed: " + d.friendlyName);
            g.uD("yt-remote-cast-receiver", d);
            n8("yt-remote-cast2-receiver-resumed", d)
        }),
        a.subscribe("yt-remote-cast2-session-change", function(d) {
            A9("onSessionChange: " + h8(d));
            d || g.wD("yt-remote-cast-receiver");
            n8("yt-remote-cast2-session-change", d)
        }),
        g.Sa("yt.mdx.remote.cloudview.instance_", a),
        c = !0);
        A9("cloudview.createSingleton_: " + c);
        return c
    }
      , C9 = function() {
        return g.Ta("yt.mdx.remote.cloudview.instance_")
    }
      , cyb = function(a, b) {
        dyb(!0);
        byb(!1);
        myb(a, function(c) {
            c ? (gyb(!0),
            g.mF("yt-remote-cast2-api-ready")) : (B9("Failed to initialize cast API."),
            dyb(!1),
            g.wD("yt-remote-cast-available"),
            g.wD("yt-remote-cast-receiver"),
            eyb());
            b(c)
        })
    }
      , A9 = function(a) {
        c9("cloudview", a)
    }
      , B9 = function(a) {
        c9("cloudview", a)
    }
      , dyb = function(a) {
        A9("setCastInstalled_ " + a);
        g.uD("yt-remote-cast-installed", a)
    }
      , E9 = function() {
        return !!g.Ta("yt.mdx.remote.cloudview.apiReady_")
    }
      , gyb = function(a) {
        A9("setApiReady_ " + a);
        g.Sa("yt.mdx.remote.cloudview.apiReady_", a)
    }
      , byb = function(a) {
        g.Sa("yt.mdx.remote.cloudview.initializing_", a)
    }
      , G9 = function(a) {
        this.index = -1;
        this.videoId = this.listId = "";
        this.volume = this.playerState = -1;
        this.muted = !1;
        this.audioTrackId = null;
        this.K = this.S = 0;
        this.trackData = null;
        this.Pk = this.kp = !1;
        this.ma = this.G = this.j = this.D = 0;
        this.C = NaN;
        this.B = !1;
        this.reset(a)
    }
      , nyb = function(a) {
        a.audioTrackId = null;
        a.trackData = null;
        a.playerState = -1;
        a.kp = !1;
        a.Pk = !1;
        a.S = 0;
        a.K = g.eb();
        a.D = 0;
        a.j = 0;
        a.G = 0;
        a.ma = 0;
        a.C = NaN;
        a.B = !1
    }
      , H9 = function(a) {
        return a.isPlaying() ? (g.eb() - a.K) / 1E3 : 0
    }
      , I9 = function(a, b) {
        a.S = b;
        a.K = g.eb()
    }
      , J9 = function(a) {
        switch (a.playerState) {
        case 1:
        case 1081:
            return (g.eb() - a.K) / 1E3 + a.S;
        case -1E3:
            return 0
        }
        return a.S
    }
      , K9 = function(a, b, c) {
        var d = a.videoId;
        a.videoId = b;
        a.index = c;
        b != d && nyb(a)
    }
      , oyb = function(a) {
        var b = {};
        b.index = a.index;
        b.listId = a.listId;
        b.videoId = a.videoId;
        b.playerState = a.playerState;
        b.volume = a.volume;
        b.muted = a.muted;
        b.audioTrackId = a.audioTrackId;
        b.trackData = g.qd(a.trackData);
        b.hasPrevious = a.kp;
        b.hasNext = a.Pk;
        b.playerTime = a.S;
        b.playerTimeAt = a.K;
        b.seekableStart = a.D;
        b.seekableEnd = a.j;
        b.duration = a.G;
        b.loadedTime = a.ma;
        b.liveIngestionTime = a.C;
        return b
    }
      , M9 = function(a, b) {
        g.yG.call(this);
        this.C = 0;
        this.D = a;
        this.K = [];
        this.G = new Twb;
        this.B = this.j = null;
        this.ea = (0,
        g.cb)(this.n7, this);
        this.S = (0,
        g.cb)(this.bE, this);
        this.ma = (0,
        g.cb)(this.m7, this);
        this.qa = (0,
        g.cb)(this.q7, this);
        var c = 0;
        a ? (c = a.getProxyState(),
        3 != c && (a.subscribe("proxyStateChange", this.TQ, this),
        pyb(this))) : c = 3;
        0 != c && (b ? this.TQ(c) : g.yC((0,
        g.cb)(function() {
            this.TQ(c)
        }, this), 0));
        (a = kyb()) && L9(this, a);
        this.subscribe("yt-remote-cast2-session-change", this.qa)
    }
      , N9 = function(a) {
        return new G9(a.D.getPlayerContextData())
    }
      , pyb = function(a) {
        g.Yb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
            this.K.push(this.D.subscribe(b, g.db(this.s8, b), this))
        }, a)
    }
      , qyb = function(a) {
        g.Yb(a.K, function(b) {
            this.D.unsubscribeByKey(b)
        }, a);
        a.K.length = 0
    }
      , O9 = function(a) {
        return 1 == a.getState()
    }
      , P9 = function(a, b) {
        var c = a.G;
        50 > c.j.length + c.B.length && a.G.B.push(b)
    }
      , ryb = function(a, b, c) {
        var d = N9(a);
        I9(d, c);
        -1E3 != d.playerState && (d.playerState = b);
        Q9(a, d)
    }
      , R9 = function(a, b, c) {
        a.D.sendMessage(b, c)
    }
      , Q9 = function(a, b) {
        qyb(a);
        a.D.setPlayerContextData(oyb(b));
        pyb(a)
    }
      , L9 = function(a, b) {
        a.B && (a.B.removeUpdateListener(a.ea),
        a.B.removeMediaListener(a.S),
        a.bE(null));
        a.B = b;
        a.B && (d9("Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.ea),
        a.B.addMediaListener(a.S),
        a.B.media.length && a.bE(a.B.media[0]))
    }
      , syb = function(a) {
        var b = a.j.media
          , c = a.j.customData;
        if (b && c) {
            var d = N9(a);
            b.contentId != d.videoId && d9("Cast changing video to: " + b.contentId);
            d.videoId = b.contentId;
            d.playerState = c.playerState;
            I9(d, a.j.getEstimatedTime());
            Q9(a, d)
        } else
            d9("No cast media video. Ignoring state update.")
    }
      , S9 = function(a, b, c) {
        return (0,
        g.cb)(function(d) {
            this.ag("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
            d.code != chrome.cast.ErrorCode.TIMEOUT && (this.ag("Retrying " + b + " using MDx browser channel."),
            R9(this, b, c))
        }, a)
    }
      , V9 = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        g.yG.call(this);
        var e = this;
        this.K = NaN;
        this.Fa = !1;
        this.ea = this.ma = this.va = this.Ca = NaN;
        this.qa = [];
        this.G = this.S = this.D = this.j = this.B = null;
        this.Pa = a;
        this.Oa = d;
        this.qa.push(g.lD(window, "beforeunload", function() {
            e.Ry(2)
        }));
        this.C = [];
        this.j = new G9;
        this.Va = b.id;
        this.Ia = b.idType;
        this.B = exb(this.Pa, c, this.MS, "shortLived" == this.Ia, this.Va);
        this.B.Ta("channelOpened", function() {
            tyb(e)
        });
        this.B.Ta("channelClosed", function() {
            T9("Channel closed");
            isNaN(e.K) ? l8(!0) : l8();
            e.dispose()
        });
        this.B.Ta("channelError", function(f) {
            l8();
            isNaN(e.aD()) ? (1 == f && "shortLived" == e.Ia && e.ra("browserChannelAuthError", f),
            T9("Channel error: " + f + " without reconnection"),
            e.dispose()) : (e.Fa = !0,
            T9("Channel error: " + f + " with reconnection in " + e.aD() + " ms"),
            U9(e, 2))
        });
        this.B.Ta("channelMessage", function(f) {
            uyb(e, f)
        });
        this.B.Er(b.token);
        this.subscribe("remoteQueueChange", function() {
            var f = e.j.videoId;
            g.xD() && g.uD("yt-remote-session-video-id", f)
        })
    }
      , vyb = function(a) {
        return g.Bb(a.C, function(b) {
            return "LOUNGE_SCREEN" == b.type
        })
    }
      , T9 = function(a) {
        c9("conn", a)
    }
      , U9 = function(a, b) {
        a.ra("proxyStateChange", b)
    }
      , wyb = function(a) {
        a.K = g.yC(function() {
            T9("Connecting timeout");
            a.Ry(1)
        }, 2E4)
    }
      , xyb = function(a) {
        g.AC(a.K);
        a.K = NaN
    }
      , yyb = function(a) {
        g.AC(a.Ca);
        a.Ca = NaN
    }
      , Ayb = function(a) {
        zyb(a);
        a.va = g.yC(function() {
            W9(a, "getNowPlaying")
        }, 2E4)
    }
      , zyb = function(a) {
        g.AC(a.va);
        a.va = NaN
    }
      , tyb = function(a) {
        T9("Channel opened");
        a.Fa && (a.Fa = !1,
        yyb(a),
        a.Ca = g.yC(function() {
            T9("Timing out waiting for a screen.");
            a.Ry(1)
        }, 15E3))
    }
      , Cyb = function(a, b) {
        var c = null;
        if (b) {
            var d = vyb(a);
            d && (c = {
                clientName: d.clientName,
                deviceMake: d.brand,
                deviceModel: d.model,
                osVersion: d.osVersion
            })
        }
        g.Sa("yt.mdx.remote.remoteClient_", c);
        b && (xyb(a),
        yyb(a));
        c = a.B.yz() && isNaN(a.K);
        b == c ? b && (U9(a, 1),
        W9(a, "getSubtitlesTrack")) : b ? (a.PV() && a.j.reset(),
        U9(a, 1),
        W9(a, "getNowPlaying"),
        Byb(a)) : a.Ry(1)
    }
      , Dyb = function(a, b) {
        var c = b.params.videoId;
        delete b.params.videoId;
        c == a.j.videoId && (g.jd(b.params) ? a.j.trackData = null : a.j.trackData = b.params,
        a.ra("remotePlayerChange"))
    }
      , Eyb = function(a, b, c) {
        var d = b.params.videoId || b.params.video_id
          , e = parseInt(b.params.currentIndex, 10);
        a.j.listId = b.params.listId || a.j.listId;
        K9(a.j, d, e);
        a.ra("remoteQueueChange", c)
    }
      , Gyb = function(a, b) {
        b.params = b.params || {};
        Eyb(a, b, "NOW_PLAYING_MAY_CHANGE");
        Fyb(a, b);
        a.ra("autoplayDismissed")
    }
      , Fyb = function(a, b) {
        var c = parseInt(b.params.currentTime || b.params.current_time, 10);
        I9(a.j, isNaN(c) ? 0 : c);
        c = parseInt(b.params.state, 10);
        c = isNaN(c) ? -1 : c;
        -1 == c && -1E3 == a.j.playerState && (c = -1E3);
        a.j.playerState = c;
        c = Number(b.params.loadedTime);
        a.j.ma = isNaN(c) ? 0 : c;
        a.j.rl(Number(b.params.duration));
        c = a.j;
        var d = Number(b.params.liveIngestionTime);
        c.C = d;
        c.B = isNaN(d) ? !1 : !0;
        c = a.j;
        d = Number(b.params.seekableStartTime);
        b = Number(b.params.seekableEndTime);
        c.D = isNaN(d) ? 0 : d;
        c.j = isNaN(b) ? 0 : b;
        1 == a.j.playerState ? Ayb(a) : zyb(a);
        a.ra("remotePlayerChange")
    }
      , Hyb = function(a, b) {
        if (-1E3 != a.j.playerState) {
            var c = 1085;
            switch (parseInt(b.params.adState, 10)) {
            case 1:
                c = 1081;
                break;
            case 2:
                c = 1084;
                break;
            case 0:
                c = 1083
            }
            a.j.playerState = c;
            b = parseInt(b.params.currentTime, 10);
            I9(a.j, isNaN(b) ? 0 : b);
            a.ra("remotePlayerChange")
        }
    }
      , Iyb = function(a, b) {
        var c = "true" == b.params.muted;
        a.j.volume = parseInt(b.params.volume, 10);
        a.j.muted = c;
        a.ra("remotePlayerChange")
    }
      , Jyb = function(a, b) {
        a.S = b.params.videoId;
        a.ra("nowAutoplaying", parseInt(b.params.timeout, 10))
    }
      , Kyb = function(a, b) {
        a.S = b.params.videoId || null;
        a.ra("autoplayUpNext", a.S)
    }
      , Lyb = function(a, b) {
        a.G = b.params.autoplayMode;
        a.ra("autoplayModeChange", a.G);
        "DISABLED" == a.G && a.ra("autoplayDismissed")
    }
      , Myb = function(a, b) {
        var c = "true" == b.params.hasNext;
        a.j.kp = "true" == b.params.hasPrevious;
        a.j.Pk = c;
        a.ra("previousNextChange")
    }
      , uyb = function(a, b) {
        b = b.message;
        b.params ? T9("Received: action=" + b.action + ", params=" + g.nm(b.params)) : T9("Received: action=" + b.action + " {}");
        switch (b.action) {
        case "loungeStatus":
            b = c8(b.params.devices);
            a.C = g.Up(b, function(d) {
                return new e8(d)
            });
            b = !!g.Bb(a.C, function(d) {
                return "LOUNGE_SCREEN" == d.type
            });
            Cyb(a, b);
            b = a.RW("mlm");
            a.ra("multiStateLoopEnabled", b);
            break;
        case "loungeScreenDisconnected":
            g.Gb(a.C, function(d) {
                return "LOUNGE_SCREEN" == d.type
            });
            Cyb(a, !1);
            break;
        case "remoteConnected":
            var c = new e8(c8(b.params.device));
            g.Bb(a.C, function(d) {
                return d.equals(c)
            }) || pub(a.C, c);
            break;
        case "remoteDisconnected":
            c = new e8(c8(b.params.device));
            g.Gb(a.C, function(d) {
                return d.equals(c)
            });
            break;
        case "gracefulDisconnect":
            break;
        case "playlistModified":
            Eyb(a, b, "QUEUE_MODIFIED");
            break;
        case "nowPlaying":
            Gyb(a, b);
            break;
        case "onStateChange":
            Fyb(a, b);
            break;
        case "onAdStateChange":
            Hyb(a, b);
            break;
        case "onVolumeChanged":
            Iyb(a, b);
            break;
        case "onSubtitlesTrackChanged":
            Dyb(a, b);
            break;
        case "nowAutoplaying":
            Jyb(a, b);
            break;
        case "autoplayDismissed":
            a.ra("autoplayDismissed");
            break;
        case "autoplayUpNext":
            Kyb(a, b);
            break;
        case "onAutoplayModeChanged":
            Lyb(a, b);
            break;
        case "onHasPreviousNextChanged":
            Myb(a, b);
            break;
        case "requestAssistedSignIn":
            a.ra("assistedSignInRequested", b.params.authCode);
            break;
        case "onLoopModeChanged":
            a.ra("loopModeChange", b.params.loopMode);
            break;
        default:
            T9("Unrecognized action: " + b.action)
        }
    }
      , Byb = function(a) {
        g.AC(a.ea);
        a.ea = g.yC(function() {
            a.Ry(1)
        }, 864E5)
    }
      , W9 = function(a, b, c) {
        c ? T9("Sending: action=" + b + ", params=" + g.nm(c)) : T9("Sending: action=" + b);
        a.B.sendMessage(b, c)
    }
      , Nyb = function(a) {
        h9.call(this, "ScreenServiceProxy");
        this.ih = a;
        this.j = [];
        this.j.push(this.ih.$_s("screenChange", (0,
        g.cb)(this.G1, this)));
        this.j.push(this.ih.$_s("onlineScreenChange", (0,
        g.cb)(this.b8, this)))
    }
      , Syb = function(a, b) {
        Zub();
        if (!m8 || !m8.get("yt-remote-disable-remote-module-for-dev")) {
            b = g.eC("MDX_CONFIG") || b;
            Qub();
            Uub();
            X9 || (X9 = new $8(b ? b.loungeApiHost : void 0),
            $ub() && (X9.j = "/api/loungedev"));
            Y9 || (Y9 = g.Ta("yt.mdx.remote.deferredProxies_") || [],
            g.Sa("yt.mdx.remote.deferredProxies_", Y9));
            Oyb();
            var c = Z9();
            if (!c) {
                var d = new m9(X9,b ? b.disableAutomaticScreenCache || !1 : !1);
                g.Sa("yt.mdx.remote.screenService_", d);
                c = Z9();
                var e = {};
                b && (e = {
                    appId: b.appId,
                    disableDial: b.disableDial,
                    theme: b.theme,
                    loadCastApiSetupScript: b.loadCastApiSetupScript,
                    disableCastApi: b.disableCastApi,
                    enableDialLoungeToken: b.enableDialLoungeToken,
                    enableCastLoungeToken: b.enableCastLoungeToken,
                    forceMirroring: b.forceMirroring
                });
                g.Sa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                fyb(a, d, function(f) {
                    f ? $9() && F9($9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                        n8("yt-remote-receiver-availability-change")
                    })
                }, e)
            }
            b && !g.Ta("yt.mdx.remote.initialized_") && (g.Sa("yt.mdx.remote.initialized_", !0),
            a$("Initializing: " + g.nm(b)),
            b$.push(g.kF("yt-remote-cast2-api-ready", function() {
                n8("yt-remote-api-ready")
            })),
            b$.push(g.kF("yt-remote-cast2-availability-change", function() {
                n8("yt-remote-receiver-availability-change")
            })),
            b$.push(g.kF("yt-remote-cast2-receiver-selected", function() {
                c$(null);
                n8("yt-remote-auto-connect", "cast-selector-receiver")
            })),
            b$.push(g.kF("yt-remote-cast2-receiver-resumed", function() {
                n8("yt-remote-receiver-resumed", "cast-selector-receiver")
            })),
            b$.push(g.kF("yt-remote-cast2-session-change", Pyb)),
            b$.push(g.kF("yt-remote-connection-change", function(f) {
                f ? F9($9(), "YouTube TV") : d$() || (F9(null, null),
                jyb())
            })),
            b$.push(g.kF("yt-remote-cast2-session-failed", function() {
                n8("yt-remote-connection-failed")
            })),
            a = Qyb(),
            b.isAuto && (a.id += "#dial"),
            e = b.capabilities || [],
            g.gC("desktop_enable_autoplay") && e.push("atp"),
            0 < e.length && (a.capabilities = e),
            a.name = b.device,
            a.app = b.app,
            (b = b.theme) && (a.theme = b),
            a$(" -- with channel params: " + g.nm(a)),
            a ? (g.uD("yt-remote-session-app", a.app),
            g.uD("yt-remote-session-name", a.name)) : (g.wD("yt-remote-session-app"),
            g.wD("yt-remote-session-name")),
            g.Sa("yt.mdx.remote.channelParams_", a),
            c.start(),
            $9() || Ryb())
        }
    }
      , Tyb = function() {
        var a = Z9().ih.$_gos();
        var b = e$();
        b && f$() && (Pub(a, b) || a.push(b));
        return Oub(a)
    }
      , Vyb = function() {
        var a = Uyb();
        !a && D9() && iyb() && (a = {
            key: "cast-selector-receiver",
            name: iyb()
        });
        return a
    }
      , Uyb = function() {
        var a = Tyb()
          , b = e$();
        b || (b = d$());
        return g.Bb(a, function(c) {
            return b && g8(b, c.key) ? !0 : !1
        })
    }
      , e$ = function() {
        var a = $9();
        if (!a)
            return null;
        var b = Z9().Kk();
        return i8(b, a)
    }
      , Pyb = function(a) {
        a$("remote.onCastSessionChange_: " + h8(a));
        if (a) {
            var b = e$();
            if (b && b.id == a.id) {
                if (F9(b.id, "YouTube TV"),
                "shortLived" == a.idType && (a = a.token))
                    g$ && (g$.token = a),
                    (b = f$()) && b.Er(a)
            } else
                b && h$(),
                i$(a, 1)
        } else
            f$() && h$()
    }
      , h$ = function() {
        E9() ? C9().stopSession() : B9("stopSession called before API ready.");
        var a = f$();
        a && (a.disconnect(1),
        Wyb(null))
    }
      , Xyb = function() {
        var a = f$();
        return !!a && 3 != a.getProxyState()
    }
      , a$ = function(a) {
        c9("remote", a)
    }
      , Z9 = function() {
        if (!Yyb) {
            var a = g.Ta("yt.mdx.remote.screenService_");
            Yyb = a ? new Nyb(a) : null
        }
        return Yyb
    }
      , $9 = function() {
        return g.Ta("yt.mdx.remote.currentScreenId_")
    }
      , Zyb = function(a) {
        g.Sa("yt.mdx.remote.currentScreenId_", a)
    }
      , $yb = function() {
        return g.Ta("yt.mdx.remote.connectData_")
    }
      , c$ = function(a) {
        g.Sa("yt.mdx.remote.connectData_", a)
    }
      , f$ = function() {
        return g.Ta("yt.mdx.remote.connection_")
    }
      , Wyb = function(a) {
        var b = f$();
        c$(null);
        a || Zyb("");
        g.Sa("yt.mdx.remote.connection_", a);
        Y9 && (g.Yb(Y9, function(c) {
            c(a)
        }),
        Y9.length = 0);
        b && !a ? n8("yt-remote-connection-change", !1) : !b && a && n8("yt-remote-connection-change", !0)
    }
      , d$ = function() {
        var a = g.xD();
        if (!a)
            return null;
        var b = Z9();
        if (!b)
            return null;
        b = b.Kk();
        return i8(b, a)
    }
      , i$ = function(a, b) {
        $9();
        e$() && e$();
        if (j$)
            g$ = a;
        else {
            Zyb(a.id);
            var c = g.Ta("yt.mdx.remote.enableConnectWithInitialState_") || !1;
            a = new V9(X9,a,Qyb(),c);
            a.connect(b, $yb());
            a.subscribe("beforeDisconnect", function(d) {
                n8("yt-remote-before-disconnect", d)
            });
            a.subscribe("beforeDispose", function() {
                f$() && (f$(),
                Wyb(null))
            });
            a.subscribe("browserChannelAuthError", function() {
                var d = e$();
                d && "shortLived" == d.idType && (E9() ? C9().handleBrowserChannelAuthError() : B9("refreshLoungeToken called before API ready."))
            });
            Wyb(a)
        }
    }
      , Ryb = function() {
        var a = d$();
        a ? (a$("Resume connection to: " + h8(a)),
        i$(a, 0)) : (l8(),
        jyb(),
        a$("Skipping connecting because no session screen found."))
    }
      , Oyb = function() {
        var a = Qyb();
        if (g.jd(a)) {
            a = k8();
            var b = g.vD("yt-remote-session-name") || ""
              , c = g.vD("yt-remote-session-app") || "";
            a = {
                device: "REMOTE_CONTROL",
                id: a,
                name: b,
                app: c,
                mdxVersion: 3
            };
            a.authuser = String(g.eC("SESSION_INDEX", "0"));
            (b = g.eC("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
            g.Sa("yt.mdx.remote.channelParams_", a)
        }
    }
      , Qyb = function() {
        return g.Ta("yt.mdx.remote.channelParams_") || {}
    }
      , czb = function(a, b, c) {
        g.J.call(this);
        var d = this;
        this.module = a;
        this.J = b;
        this.Hc = c;
        this.events = new g.lL(this);
        this.ea = this.events.V(this.J, "onVolumeChange", function(e) {
            azb(d, e)
        });
        this.D = !1;
        this.G = new g.cM(64);
        this.j = new g.Ut(this.HZ,500,this);
        this.B = new g.Ut(this.IZ,1E3,this);
        this.S = new q8(this.qaa,0,this);
        this.C = {};
        this.ma = new g.Ut(this.v_,1E3,this);
        this.K = new r8(this.seekTo,1E3,this);
        g.L(this, this.events);
        this.events.V(b, "onCaptionsTrackListChanged", this.M7);
        this.events.V(b, "captionschanged", this.k7);
        this.events.V(b, "captionssettingschanged", this.RZ);
        this.events.V(b, "videoplayerreset", this.WI);
        this.events.V(b, "mdxautoplaycancel", function() {
            d.Hc.fV()
        });
        b.N("enable_mdx_video_play_directly") && this.events.V(b, "videodatachange", function() {
            bzb(d.module) || k$(d) || l$(d, 0)
        });
        a = this.Hc;
        a.isDisposed();
        a.subscribe("proxyStateChange", this.qY, this);
        a.subscribe("remotePlayerChange", this.hE, this);
        a.subscribe("remoteQueueChange", this.WI, this);
        a.subscribe("previousNextChange", this.nY, this);
        a.subscribe("nowAutoplaying", this.iY, this);
        a.subscribe("autoplayDismissed", this.OX, this);
        g.L(this, this.j);
        g.L(this, this.B);
        g.L(this, this.S);
        g.L(this, this.ma);
        g.L(this, this.K);
        this.RZ();
        this.WI();
        this.hE()
    }
      , azb = function(a, b) {
        if (k$(a)) {
            a.Hc.unsubscribe("remotePlayerChange", a.hE, a);
            var c = Math.round(b.volume);
            b = !!b.muted;
            var d = N9(a.Hc);
            if (c !== d.volume || b !== d.muted)
                a.Hc.setVolume(c, b),
                a.ma.start();
            a.Hc.subscribe("remotePlayerChange", a.hE, a)
        }
    }
      , dzb = function(a) {
        a.Ic(0);
        a.j.stop();
        a.Ac(new g.cM(64))
    }
      , ezb = function(a, b) {
        if (k$(a) && !a.D) {
            var c = null;
            b && (c = {
                style: a.J.getSubtitlesUserSettings()
            },
            g.sd(c, b));
            a.Hc.LS(a.J.getVideoData(1).videoId, c);
            a.C = N9(a.Hc).trackData
        }
    }
      , l$ = function(a, b) {
        var c = a.J.getPlaylist();
        if (null == c ? 0 : c.listId) {
            var d = c.index;
            var e = c.listId.toString()
        }
        c = a.J.getVideoData(1);
        a.Hc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ca, oub(c));
        a.Ac(new g.cM(1))
    }
      , fzb = function(a, b) {
        if (b) {
            var c = a.J.getOption("captions", "tracklist", {
                FW: 1
            });
            c && c.length ? (a.J.setOption("captions", "track", b),
            a.D = !1) : (a.J.loadModule("captions"),
            a.D = !0)
        } else
            a.J.setOption("captions", "track", {})
    }
      , k$ = function(a) {
        return N9(a.Hc).videoId === a.J.getVideoData(1).videoId
    }
      , m$ = function() {
        g.U.call(this, {
            I: "div",
            T: "ytp-mdx-popup-dialog",
            Y: {
                role: "dialog"
            },
            X: [{
                I: "div",
                T: "ytp-mdx-popup-dialog-inner-content",
                X: [{
                    I: "div",
                    T: "ytp-mdx-popup-title",
                    Aa: "You're signed out"
                }, {
                    I: "div",
                    T: "ytp-mdx-popup-description",
                    Aa: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                }, {
                    I: "div",
                    T: "ytp-mdx-privacy-popup-buttons",
                    X: [{
                        I: "button",
                        Na: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                        Aa: "Cancel"
                    }, {
                        I: "button",
                        Na: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                        Aa: "Confirm"
                    }]
                }]
            }]
        });
        this.j = new g.hH(this,250);
        this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
        this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
        g.L(this, this.j);
        this.V(this.cancelButton, "click", this.B);
        this.V(this.confirmButton, "click", this.C)
    }
      , n$ = function(a) {
        g.U.call(this, {
            I: "div",
            T: "ytp-remote",
            X: [{
                I: "div",
                T: "ytp-remote-display-status",
                X: [{
                    I: "div",
                    T: "ytp-remote-display-status-icon",
                    X: [g.Jta()]
                }, {
                    I: "div",
                    T: "ytp-remote-display-status-text",
                    Aa: "{{statustext}}"
                }]
            }]
        });
        this.api = a;
        this.j = new g.hH(this,250);
        g.L(this, this.j);
        this.V(a, "presentingplayerstatechange", this.onStateChange);
        this.Fc(a.Tb())
    }
      , o$ = function(a, b) {
        g.QX.call(this, "Play on", 1, a, b);
        this.J = a;
        this.Wt = {};
        this.V(a, "onMdxReceiversChange", this.D);
        this.V(a, "presentingplayerstatechange", this.D);
        this.D()
    }
      , gzb = function(a) {
        g.IV.call(this, a);
        this.Cp = {
            key: Nub(),
            name: "This computer"
        };
        this.Xl = null;
        this.subscriptions = [];
        this.ZP = this.Hc = null;
        this.Wt = [this.Cp];
        this.Ks = this.Cp;
        this.kf = new g.cM(64);
        this.aX = 0;
        this.Ph = -1;
        this.AE = !1;
        this.zE = this.zA = null;
        if (!g.vS(this.player.W()) && !g.DH(this.player.W())) {
            a = this.player;
            var b = g.qU(a);
            b && (b = b.cn()) && (b = new o$(a,b),
            g.L(this, b));
            b = new n$(a);
            g.L(this, b);
            g.IU(a, b.element, 4);
            this.zA = new m$;
            g.L(this, this.zA);
            g.IU(a, this.zA.element, 4);
            this.AE = !!d$()
        }
    }
      , p$ = function(a) {
        a.zE && (a.player.removeEventListener("presentingplayerstatechange", a.zE),
        a.zE = null)
    }
      , hzb = function(a, b, c) {
        a.kf = c;
        a.player.ra("presentingplayerstatechange", new g.mH(c,b))
    }
      , q$ = function(a, b) {
        if (b.key !== a.Ks.key)
            if (b.key === a.Cp.key)
                h$();
            else if (bzb(a) && izb(a),
            a.Ks = b,
            !a.player.W().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.DH(a.player.W())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.W().N("should_clear_video_data_on_player_cued_unstarted"))
                    d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++)
                            h[l] = g.FV(f, l).videoId
                    } else
                        h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Ca,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = oub(d)) && (a.locationInfo = d);
                    d = a
                }
                a$("Connecting to: " + g.nm(b));
                "cast-selector-receiver" == b.key ? (c$(d || null),
                b = d || null,
                E9() ? C9().setLaunchParams(b) : B9("setLaunchParams called before ready.")) : !d && Xyb() && $9() == b.key ? n8("yt-remote-connection-change", !0) : (h$(),
                c$(d || null),
                d = Z9().Kk(),
                (b = i8(d, b.key)) && i$(b, 1))
            }
    }
      , bzb = function(a) {
        var b = a.player.W();
        return !b.N("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.AE || !a.zA ? !1 : g.GS(b) || g.IS(b)
    }
      , izb = function(a) {
        a.player.Tb().isPlaying() ? a.player.pauseVideo() : (a.zE = function(b) {
            !a.AE && g.pH(b, 8) && (a.player.pauseVideo(),
            p$(a))
        }
        ,
        a.player.addEventListener("presentingplayerstatechange", a.zE));
        a.zA && a.zA.yd();
        f$() || (j$ = !0)
    };
    g.rx.prototype.Vs = g.ea(0, function() {
        return g.Bj(this, 6)
    });
    var rwb = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\v": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "\\u003C"
    }
      , S8 = {
        "'": "\\'"
    }
      , Hub = {
        jla: "atp",
        c_a: "ska",
        hXa: "que",
        dPa: "mus",
        b_a: "sus",
        MAa: "dsp",
        nYa: "seq",
        GNa: "mic",
        Vra: "dpa",
        uma: "cds",
        UOa: "mlm",
        Jra: "dsdtr",
        DPa: "ntb",
        W$a: "vsp",
        Msa: "scn",
        vXa: "rpe",
        Hra: "dcn",
        Ira: "dcp"
    }
      , Iub = {
        f3: "u",
        CLASSIC: "cl",
        M2: "k",
        w0: "i",
        f0: "cr",
        S2: "m",
        t0: "g",
        RT: "up"
    };
    e8.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    }
    ;
    var m8, Tub = "";
    avb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.gC("enable_client_streamz_web")) {
            a = g.u(a);
            for (var c = a.next(); !c.done; c = a.next())
                c = g.Fea(c.value),
                c = {
                    serializedIncrementBatch: g.mg(c.j())
                },
                g.OD("streamzIncremented", c, {
                    sendIsolatedPayload: b
                })
        }
    }
    ;
    var o8, ivb = cvb("loadCastFramework") || cvb("loadCastApplicationFramework"), lvb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.gb(q8, g.J);
    g.k = q8.prototype;
    g.k.U0 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.qd ? this.C = g.eb() + this.Ri : this.qd = g.hg(this.G, this.Ri)
    }
    ;
    g.k.stop = function() {
        this.qd && (g.Qa.clearTimeout(this.qd),
        this.qd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    }
    ;
    g.k.pause = function() {
        ++this.B
    }
    ;
    g.k.resume = function() {
        this.B && (--this.B,
        !this.B && this.j && (this.j = !1,
        this.K.apply(null, this.D)))
    }
    ;
    g.k.Ba = function() {
        this.stop();
        q8.Qf.Ba.call(this)
    }
    ;
    g.k.V0 = function() {
        this.qd && (g.Qa.clearTimeout(this.qd),
        this.qd = null);
        this.C ? (this.qd = g.hg(this.G, this.C - g.eb()),
        this.C = null) : this.B ? this.j = !0 : (this.j = !1,
        this.K.apply(null, this.D))
    }
    ;
    g.v(r8, g.J);
    g.k = r8.prototype;
    g.k.EK = function(a) {
        this.C = arguments;
        this.qd || this.B ? this.j = !0 : nvb(this)
    }
    ;
    g.k.stop = function() {
        this.qd && (g.Qa.clearTimeout(this.qd),
        this.qd = null,
        this.j = !1,
        this.C = null)
    }
    ;
    g.k.pause = function() {
        this.B++
    }
    ;
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.qd || (this.j = !1,
        nvb(this))
    }
    ;
    g.k.Ba = function() {
        g.J.prototype.Ba.call(this);
        this.stop()
    }
    ;
    s8.prototype.stringify = function(a) {
        return g.Qa.JSON.stringify(a, void 0)
    }
    ;
    s8.prototype.parse = function(a) {
        return g.Qa.JSON.parse(a, void 0)
    }
    ;
    g.gb(ovb, g.xb);
    g.gb(pvb, g.xb);
    var qvb = null;
    g.gb(svb, g.xb);
    g.gb(tvb, g.xb);
    g.gb(uvb, g.xb);
    vvb.prototype.info = function() {}
    ;
    vvb.prototype.warning = function() {}
    ;
    var Cvb = {}
      , y8 = {};
    g.k = w8.prototype;
    g.k.setTimeout = function(a) {
        this.Bb = a
    }
    ;
    g.k.Y0 = function(a) {
        a = a.target;
        var b = this.eb;
        b && 3 == g.um(a) ? b.EK() : this.pS(a)
    }
    ;
    g.k.pS = function(a) {
        try {
            if (a == this.j)
                a: {
                    var b = g.um(this.j)
                      , c = this.j.B
                      , d = this.j.getStatus();
                    if (!(3 > b) && (3 != b || g.JS || this.j && (this.B.B || g.wm(this.j) || g.xm(this.j)))) {
                        this.Oa || 4 != b || 7 == c || (8 == c || 0 >= d ? t8(3) : t8(2));
                        B8(this);
                        var e = this.j.getStatus();
                        this.Mb = e;
                        b: if (Avb(this)) {
                            var f = g.xm(this.j);
                            a = "";
                            var h = f.length
                              , l = 4 == g.um(this.j);
                            if (!this.B.C) {
                                if ("undefined" === typeof TextDecoder) {
                                    z8(this);
                                    A8(this);
                                    var m = "";
                                    break b
                                }
                                this.B.C = new g.Qa.TextDecoder
                            }
                            for (c = 0; c < h; c++)
                                this.B.B = !0,
                                a += this.B.C.decode(f[c], {
                                    stream: l && c == h - 1
                                });
                            f.splice(0, h);
                            this.B.j += a;
                            this.qa = 0;
                            m = this.B.j
                        } else
                            m = g.wm(this.j);
                        if (this.C = 200 == e) {
                            if (this.vc && !this.Ya) {
                                b: {
                                    if (this.j) {
                                        var n = g.ym(this.j, "X-HTTP-Initial-Response");
                                        if (n && !g.dc(n)) {
                                            var p = n;
                                            break b
                                        }
                                    }
                                    p = null
                                }
                                if (e = p)
                                    this.Ya = !0,
                                    Dvb(this, e);
                                else {
                                    this.C = !1;
                                    this.K = 3;
                                    u8(12);
                                    z8(this);
                                    A8(this);
                                    break a
                                }
                            }
                            this.Ia ? (Evb(this, b, m),
                            g.JS && this.C && 3 == b && (this.kb.Ta(this.tb, "tick", this.X0),
                            this.tb.start())) : Dvb(this, m);
                            4 == b && z8(this);
                            this.C && !this.Oa && (4 == b ? Gvb(this.G, this) : (this.C = !1,
                            x8(this)))
                        } else
                            g.wfa(this.j),
                            400 == e && 0 < m.indexOf("Unknown SID") ? (this.K = 3,
                            u8(12)) : (this.K = 0,
                            u8(13)),
                            z8(this),
                            A8(this)
                    }
                }
        } catch (q) {} finally {}
    }
    ;
    g.k.X0 = function() {
        if (this.j) {
            var a = g.um(this.j)
              , b = g.wm(this.j);
            this.qa < b.length && (B8(this),
            Evb(this, a, b),
            this.C && 4 != a && x8(this))
        }
    }
    ;
    g.k.cancel = function() {
        this.Oa = !0;
        z8(this)
    }
    ;
    g.k.W0 = function() {
        this.ea = null;
        var a = Date.now();
        0 <= a - this.Ub ? (2 != this.Va && (t8(3),
        u8(17)),
        z8(this),
        this.K = 2,
        A8(this)) : Fvb(this, this.Ub - a)
    }
    ;
    g.k.getLastError = function() {
        return this.K
    }
    ;
    g.k.CN = function() {
        return this.j
    }
    ;
    Pvb.prototype.cancel = function() {
        this.C = Rvb(this);
        if (this.B)
            this.B.cancel(),
            this.B = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next())
                b.value.cancel();
            this.j.clear()
        }
    }
    ;
    g.k = Vvb.prototype;
    g.k.qS = 8;
    g.k.Hh = 1;
    g.k.connect = function(a, b, c, d) {
        u8(0);
        this.Jc = a;
        this.Oa = b || {};
        c && void 0 !== d && (this.Oa.OSID = c,
        this.Oa.OAID = d);
        this.Ya = this.Bd;
        this.Pa = Lvb(this, null, this.Jc);
        F8(this)
    }
    ;
    g.k.disconnect = function() {
        Xvb(this);
        if (3 == this.Hh) {
            var a = this.gb++
              , b = this.Pa.clone();
            g.go(b, "SID", this.D);
            g.go(b, "RID", a);
            g.go(b, "TYPE", "terminate");
            I8(this, b);
            a = new w8(this,this.D,a);
            a.Va = 2;
            a.S = a8(b.clone());
            b = !1;
            if (g.Qa.navigator && g.Qa.navigator.sendBeacon)
                try {
                    b = g.Qa.navigator.sendBeacon(a.S.toString(), "")
                } catch (c) {}
            !b && g.Qa.Image && ((new Image).src = a.S,
            b = !0);
            b || (a.j = zvb(a.G, null),
            a.j.send(a.S));
            a.Ca = Date.now();
            x8(a)
        }
        cwb(this)
    }
    ;
    g.k.jh = function() {
        return 0 == this.Hh
    }
    ;
    g.k.getState = function() {
        return this.Hh
    }
    ;
    g.k.sS = function(a) {
        if (this.K)
            if (this.K = null,
            1 == this.Hh) {
                if (!a) {
                    this.gb = Math.floor(1E5 * Math.random());
                    a = this.gb++;
                    var b = new w8(this,"",a)
                      , c = this.ea;
                    this.Ub && (c ? (c = g.pd(c),
                    g.sd(c, this.Ub)) : c = this.Ub);
                    null !== this.S || this.zb || (b.Pa = c,
                    c = null);
                    var d;
                    if (this.Bb)
                        a: {
                            for (var e = d = 0; e < this.C.length; e++) {
                                b: {
                                    var f = this.C[e];
                                    if ("__data__"in f.map && (f = f.map.__data__,
                                    "string" === typeof f)) {
                                        f = f.length;
                                        break b
                                    }
                                    f = void 0
                                }
                                if (void 0 === f)
                                    break;
                                d += f;
                                if (4096 < d) {
                                    d = e;
                                    break a
                                }
                                if (4096 === d || e === this.C.length - 1) {
                                    d = e + 1;
                                    break a
                                }
                            }
                            d = 1E3
                        }
                    else
                        d = 1E3;
                    d = $vb(this, b, d);
                    e = this.Pa.clone();
                    g.go(e, "RID", a);
                    g.go(e, "CVER", 22);
                    this.Ia && g.go(e, "X-HTTP-Session-Id", this.Ia);
                    I8(this, e);
                    c && (this.zb ? d = "headers=" + g.ye(g.lga(c)) + "&" + d : this.S && g.ko(e, this.S, c));
                    Kvb(this.B, b);
                    this.eg && g.go(e, "TYPE", "init");
                    this.Bb ? (g.go(e, "$req", d),
                    g.go(e, "SID", "null"),
                    b.vc = !0,
                    yvb(b, e, null)) : yvb(b, e, d);
                    this.Hh = 2
                }
            } else
                3 == this.Hh && (a ? awb(this, a) : 0 == this.C.length || Qvb(this.B) || awb(this))
    }
    ;
    g.k.rS = function() {
        this.ma = null;
        bwb(this);
        if (this.Wc && !(this.tb || null == this.j || 0 >= this.Sd)) {
            var a = 2 * this.Sd;
            this.Fa = v8((0,
            g.cb)(this.j7, this), a)
        }
    }
    ;
    g.k.j7 = function() {
        this.Fa && (this.Fa = null,
        this.Ya = !1,
        this.tb = !0,
        u8(10),
        D8(this),
        bwb(this))
    }
    ;
    g.k.lP = function(a) {
        this.j == a && this.Wc && !this.tb && (Wvb(this),
        this.tb = !0,
        u8(11))
    }
    ;
    g.k.Z0 = function() {
        null != this.qa && (this.qa = null,
        D8(this),
        Ivb(this),
        u8(19))
    }
    ;
    g.k.T$ = function(a) {
        a ? u8(2) : u8(1)
    }
    ;
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    }
    ;
    g.k = ewb.prototype;
    g.k.wS = function() {}
    ;
    g.k.vS = function() {}
    ;
    g.k.uS = function() {}
    ;
    g.k.tS = function() {}
    ;
    g.k.isActive = function() {
        return !0
    }
    ;
    g.k.b1 = function() {}
    ;
    g.gb(K8, g.Gd);
    K8.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Va = !0);
        this.j.connect(this.G, this.B || void 0)
    }
    ;
    K8.prototype.close = function() {
        this.j.disconnect()
    }
    ;
    K8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else
            this.D && (c = {},
            c.__data__ = g.nm(a),
            a = c);
        b.C.push(new Ovb(b.cg++,a));
        3 == b.Hh && F8(b)
    }
    ;
    K8.prototype.Ba = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        K8.Qf.Ba.call(this)
    }
    ;
    g.gb(gwb, ovb);
    g.gb(hwb, pvb);
    g.gb(J8, ewb);
    J8.prototype.wS = function() {
        this.j.dispatchEvent("m")
    }
    ;
    J8.prototype.vS = function(a) {
        this.j.dispatchEvent(new gwb(a))
    }
    ;
    J8.prototype.uS = function(a) {
        this.j.dispatchEvent(new hwb(a))
    }
    ;
    J8.prototype.tS = function() {
        this.j.dispatchEvent("n")
    }
    ;
    var M8 = new g.Gd;
    g.v(kwb, g.xb);
    g.k = O8.prototype;
    g.k.Eu = null;
    g.k.aq = !1;
    g.k.Ax = null;
    g.k.GK = null;
    g.k.yx = null;
    g.k.zx = null;
    g.k.Zr = null;
    g.k.hs = null;
    g.k.Fu = null;
    g.k.cj = null;
    g.k.LF = 0;
    g.k.Zn = null;
    g.k.KF = null;
    g.k.gs = null;
    g.k.GB = -1;
    g.k.pZ = !0;
    g.k.Du = !1;
    g.k.FK = 0;
    g.k.JF = null;
    var pwb = {}
      , owb = {};
    g.k = O8.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    }
    ;
    g.k.e1 = function(a) {
        a = a.target;
        var b = this.JF;
        b && 3 == g.um(a) ? b.EK() : this.xS(a)
    }
    ;
    g.k.xS = function(a) {
        try {
            if (a == this.cj)
                a: {
                    var b = g.um(this.cj)
                      , c = this.cj.B
                      , d = this.cj.getStatus();
                    if (g.bf && !g.Nc(10) || g.Pc && !g.Mc("420+")) {
                        if (4 > b)
                            break a
                    } else if (3 > b || 3 == b && !g.wm(this.cj))
                        break a;
                    this.Du || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Kn(3) : this.j.Kn(2));
                    uwb(this);
                    var e = this.cj.getStatus();
                    this.GB = e;
                    var f = g.wm(this.cj);
                    if (this.aq = 200 == e) {
                        4 == b && Q8(this);
                        if (this.Ia) {
                            for (a = !0; !this.Du && this.LF < f.length; ) {
                                var h = qwb(this, f);
                                if (h == owb) {
                                    4 == b && (this.gs = 4,
                                    N8(15),
                                    a = !1);
                                    break
                                } else if (h == pwb) {
                                    this.gs = 4;
                                    N8(16);
                                    a = !1;
                                    break
                                } else
                                    vwb(this, h)
                            }
                            4 == b && 0 == f.length && (this.gs = 1,
                            N8(17),
                            a = !1);
                            this.aq = this.aq && a;
                            a || (Q8(this),
                            R8(this))
                        } else
                            vwb(this, f);
                        this.aq && !this.Du && (4 == b ? this.j.MF(this) : (this.aq = !1,
                        P8(this)))
                    } else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.gs = 3,
                        N8(13)) : (this.gs = 0,
                        N8(14)),
                        Q8(this),
                        R8(this)
                }
        } catch (l) {} finally {}
    }
    ;
    g.k.r9 = function(a) {
        L8((0,
        g.cb)(this.q9, this, a), 0)
    }
    ;
    g.k.q9 = function(a) {
        this.Du || (uwb(this),
        vwb(this, a),
        P8(this))
    }
    ;
    g.k.vY = function(a) {
        L8((0,
        g.cb)(this.p9, this, a), 0)
    }
    ;
    g.k.p9 = function(a) {
        this.Du || (Q8(this),
        this.aq = a,
        this.j.MF(this),
        this.j.Kn(4))
    }
    ;
    g.k.cancel = function() {
        this.Du = !0;
        Q8(this)
    }
    ;
    g.k.d1 = function() {
        this.Ax = null;
        var a = Date.now();
        0 <= a - this.GK ? (2 != this.zx && this.j.Kn(3),
        Q8(this),
        this.gs = 2,
        N8(18),
        R8(this)) : twb(this, this.GK - a)
    }
    ;
    g.k.getLastError = function() {
        return this.gs
    }
    ;
    g.k = ywb.prototype;
    g.k.IK = null;
    g.k.Hj = null;
    g.k.uJ = !1;
    g.k.JZ = null;
    g.k.aH = null;
    g.k.xO = null;
    g.k.JK = null;
    g.k.Tl = null;
    g.k.bq = -1;
    g.k.HB = null;
    g.k.iC = null;
    g.k.connect = function(a) {
        this.JK = a;
        a = U8(this.j, null, this.JK);
        N8(3);
        this.JZ = Date.now();
        var b = this.j.ea;
        null != b ? (this.HB = b[0],
        (this.iC = b[1]) ? (this.Tl = 1,
        zwb(this)) : (this.Tl = 2,
        Awb(this))) : (b8(a, "MODE", "init"),
        this.Hj = new O8(this),
        this.Hj.Eu = this.IK,
        nwb(this.Hj, a, !1, null, !0),
        this.Tl = 0)
    }
    ;
    g.k.N3 = function(a) {
        if (a)
            this.Tl = 2,
            Awb(this);
        else {
            N8(4);
            var b = this.j;
            b.Ao = b.Is.bq;
            Y8(b, 9)
        }
        a && this.Kn(2)
    }
    ;
    g.k.HK = function(a) {
        return this.j.HK(a)
    }
    ;
    g.k.abort = function() {
        this.Hj && (this.Hj.cancel(),
        this.Hj = null);
        this.bq = -1
    }
    ;
    g.k.jh = function() {
        return !1
    }
    ;
    g.k.yS = function(a, b) {
        this.bq = a.GB;
        if (0 == this.Tl)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Ao = this.bq;
                    Y8(a, 2);
                    return
                }
                this.HB = c[0];
                this.iC = c[1]
            } else
                a = this.j,
                a.Ao = this.bq,
                Y8(a, 2);
        else if (2 == this.Tl)
            if (this.uJ)
                N8(7),
                this.xO = Date.now();
            else if ("11111" == b) {
                if (N8(6),
                this.uJ = !0,
                this.aH = Date.now(),
                a = this.aH - this.JZ,
                !g.bf || g.Nc(10) || 500 > a)
                    this.bq = 200,
                    this.Hj.cancel(),
                    N8(12),
                    V8(this.j, this, !0)
            } else
                N8(8),
                this.aH = this.xO = Date.now(),
                this.uJ = !1
    }
    ;
    g.k.MF = function() {
        this.bq = this.Hj.GB;
        if (this.Hj.aq)
            0 == this.Tl ? this.iC ? (this.Tl = 1,
            zwb(this)) : (this.Tl = 2,
            Awb(this)) : 2 == this.Tl && ((!g.bf || g.Nc(10) ? !this.uJ : 200 > this.xO - this.aH) ? (N8(11),
            V8(this.j, this, !1)) : (N8(12),
            V8(this.j, this, !0)));
        else {
            0 == this.Tl ? N8(9) : 2 == this.Tl && N8(10);
            var a = this.j;
            this.Hj.getLastError();
            a.Ao = this.bq;
            Y8(a, 2)
        }
    }
    ;
    g.k.IB = function() {
        return this.j.IB()
    }
    ;
    g.k.isActive = function() {
        return this.j.isActive()
    }
    ;
    g.k.Kn = function(a) {
        this.j.Kn(a)
    }
    ;
    g.k = Bwb.prototype;
    g.k.zo = null;
    g.k.JB = null;
    g.k.Qj = null;
    g.k.Rg = null;
    g.k.KK = null;
    g.k.NF = null;
    g.k.zS = null;
    g.k.OF = null;
    g.k.KB = 0;
    g.k.j1 = 0;
    g.k.Hi = null;
    g.k.ls = null;
    g.k.cq = null;
    g.k.Hu = null;
    g.k.Is = null;
    g.k.iK = null;
    g.k.Dx = -1;
    g.k.AS = -1;
    g.k.Ao = -1;
    g.k.Cx = 0;
    g.k.Bx = 0;
    g.k.Gu = 8;
    g.gb(Dwb, g.xb);
    g.gb(Ewb, g.xb);
    g.k = Bwb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        N8(0);
        this.KK = b;
        this.JB = c || {};
        d && void 0 !== e && (this.JB.OSID = d,
        this.JB.OAID = e);
        this.ma ? (L8((0,
        g.cb)(this.RU, this, a), 100),
        Gwb(this)) : this.RU(a)
    }
    ;
    g.k.disconnect = function() {
        Hwb(this);
        if (3 == this.j) {
            var a = this.KB++
              , b = this.NF.clone();
            g.go(b, "SID", this.D);
            g.go(b, "RID", a);
            g.go(b, "TYPE", "terminate");
            X8(this, b);
            a = new O8(this,this.D,a);
            a.zx = 2;
            a.Zr = a8(b.clone());
            (new Image).src = a.Zr.toString();
            a.yx = Date.now();
            P8(a)
        }
        Rwb(this)
    }
    ;
    g.k.RU = function(a) {
        this.Is = new ywb(this);
        this.Is.IK = this.zo;
        this.Is.B = this.G;
        this.Is.connect(a)
    }
    ;
    g.k.jh = function() {
        return 0 == this.j
    }
    ;
    g.k.getState = function() {
        return this.j
    }
    ;
    g.k.CS = function(a) {
        this.ls = null;
        Mwb(this, a)
    }
    ;
    g.k.BS = function() {
        this.cq = null;
        this.Rg = new O8(this,this.D,"rpc",this.S);
        this.Rg.Eu = this.zo;
        this.Rg.FK = 0;
        var a = this.zS.clone();
        g.go(a, "RID", "rpc");
        g.go(a, "SID", this.D);
        g.go(a, "CI", this.iK ? "0" : "1");
        g.go(a, "AID", this.Dx);
        X8(this, a);
        if (!g.bf || g.Nc(10))
            g.go(a, "TYPE", "xmlhttp"),
            nwb(this.Rg, a, !0, this.OF, !1);
        else {
            g.go(a, "TYPE", "html");
            var b = this.Rg
              , c = !!this.OF;
            b.zx = 3;
            b.Zr = a8(a.clone());
            swb(b, c)
        }
    }
    ;
    g.k.yS = function(a, b) {
        if (0 != this.j && (this.Rg == a || this.Qj == a))
            if (this.Ao = a.GB,
            this.Qj == a && 3 == this.j)
                if (7 < this.Gu) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c,
                        0 == a[0])
                            a: {
                                if (!this.cq) {
                                    if (this.Rg)
                                        if (this.Rg.yx + 3E3 < this.Qj.yx)
                                            W8(this),
                                            this.Rg.cancel(),
                                            this.Rg = null;
                                        else
                                            break a;
                                    Pwb(this);
                                    N8(19)
                                }
                            }
                        else
                            this.AS = a[1],
                            0 < this.AS - this.Dx && 37500 > a[2] && this.iK && 0 == this.Bx && !this.Hu && (this.Hu = L8((0,
                            g.cb)(this.l1, this), 6E3));
                    else
                        Y8(this, 11)
                } else
                    null != b && Y8(this, 11);
            else if (this.Rg == a && W8(this),
            !g.dc(b))
                for (a = this.G.parse(b),
                b = 0; b < a.length; b++)
                    c = a[b],
                    this.Dx = c[0],
                    c = c[1],
                    2 == this.j ? "c" == c[0] ? (this.D = c[1],
                    this.OF = c[2],
                    c = c[3],
                    null != c ? this.Gu = c : this.Gu = 6,
                    this.j = 3,
                    this.Hi && this.Hi.FS(),
                    this.zS = U8(this, this.IB() ? this.OF : null, this.KK),
                    Nwb(this)) : "stop" == c[0] && Y8(this, 7) : 3 == this.j && ("stop" == c[0] ? Y8(this, 7) : "noop" != c[0] && this.Hi && this.Hi.ES(c),
                    this.Bx = 0)
    }
    ;
    g.k.l1 = function() {
        null != this.Hu && (this.Hu = null,
        this.Rg.cancel(),
        this.Rg = null,
        Pwb(this),
        N8(20))
    }
    ;
    g.k.MF = function(a) {
        if (this.Rg == a) {
            W8(this);
            this.Rg = null;
            var b = 2
        } else if (this.Qj == a)
            this.Qj = null,
            b = 1;
        else
            return;
        this.Ao = a.GB;
        if (0 != this.j)
            if (a.aq)
                if (1 == b) {
                    b = Date.now() - a.yx;
                    var c = M8;
                    c.dispatchEvent(new Dwb(c,a.Fu ? a.Fu.length : 0,b,this.Cx));
                    Fwb(this);
                    this.C.length = 0
                } else
                    Nwb(this);
            else {
                c = a.getLastError();
                var d;
                if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Ao)) {
                    if (d = 1 == b)
                        this.Qj || this.ls || 1 == this.j || 2 <= this.Cx ? d = !1 : (this.ls = L8((0,
                        g.cb)(this.CS, this, a), Owb(this, this.Cx)),
                        this.Cx++,
                        d = !0);
                    d = !(d || 2 == b && Pwb(this))
                }
                if (d)
                    switch (c) {
                    case 1:
                        Y8(this, 5);
                        break;
                    case 4:
                        Y8(this, 10);
                        break;
                    case 3:
                        Y8(this, 6);
                        break;
                    case 7:
                        Y8(this, 12);
                        break;
                    default:
                        Y8(this, 2)
                    }
            }
    }
    ;
    g.k.f1 = function(a) {
        if (!g.Db(arguments, this.j))
            throw Error("Unexpected channel state: " + this.j);
    }
    ;
    g.k.S$ = function(a) {
        a ? N8(2) : (N8(1),
        Qwb(this, 8))
    }
    ;
    g.k.HK = function(a) {
        if (a)
            throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.rm;
        a.K = !1;
        return a
    }
    ;
    g.k.isActive = function() {
        return !!this.Hi && this.Hi.isActive(this)
    }
    ;
    g.k.Kn = function(a) {
        var b = M8;
        b.dispatchEvent(new Ewb(b,a))
    }
    ;
    g.k.IB = function() {
        return !(!g.bf || g.Nc(10))
    }
    ;
    g.k = Swb.prototype;
    g.k.FS = function() {}
    ;
    g.k.ES = function() {}
    ;
    g.k.DS = function() {}
    ;
    g.k.LK = function() {}
    ;
    g.k.GS = function() {
        return {}
    }
    ;
    g.k.isActive = function() {
        return !0
    }
    ;
    g.k = Twb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.B.length
    }
    ;
    g.k.clear = function() {
        this.j = [];
        this.B = []
    }
    ;
    g.k.contains = function(a) {
        return g.Db(this.j, a) || g.Db(this.B, a)
    }
    ;
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0,
        g.Sbb)(b, a);
        0 <= c ? (g.Eb(b, c),
        b = !0) : b = !1;
        return b || g.Fb(this.B, a)
    }
    ;
    g.k.nm = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b)
            a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b)
            a.push(this.B[b]);
        return a
    }
    ;
    g.v(Uwb, g.xb);
    g.v(Vwb, g.xb);
    g.gb(Z8, g.J);
    g.k = Z8.prototype;
    g.k.j9 = function() {
        this.Ri = Math.min(3E5, 2 * this.Ri);
        this.C();
        this.B && this.start()
    }
    ;
    g.k.start = function() {
        var a = this.Ri + 15E3 * Math.random();
        g.Vt(this.j, a);
        this.B = Date.now() + a
    }
    ;
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    }
    ;
    g.k.isActive = function() {
        return this.j.isActive()
    }
    ;
    g.k.reset = function() {
        this.j.stop();
        this.Ri = 5E3
    }
    ;
    g.gb(Xwb, Swb);
    g.k = Xwb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    }
    ;
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    }
    ;
    g.k.Vh = function(a) {
        return this.C.Vh(a)
    }
    ;
    g.k.ra = function(a, b) {
        return this.C.ra.apply(this.C, arguments)
    }
    ;
    g.k.dispose = function() {
        this.qa || (this.qa = !0,
        g.sb(this.C),
        this.disconnect(),
        g.sb(this.B),
        this.B = null,
        this.va = function() {
            return ""
        }
        )
    }
    ;
    g.k.isDisposed = function() {
        return this.qa
    }
    ;
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.ea = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ca + "/test";
            b = this.Ca + "/bind";
            var d = new Bwb(c ? c.firstTestResults : null,c ? c.secondTestResults : null,this.Va)
              , e = this.j;
            e && (e.Hi = null);
            d.Hi = this;
            this.j = d;
            Ywb(this);
            if (this.j) {
                d = g.eC("ID_TOKEN");
                var f = this.j.zo || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.zo = f
            }
            e ? (3 != e.getState() && 0 == Jwb(e) || e.getState(),
            this.j.connect(a, b, this.S, e.D, e.Dx)) : c ? this.j.connect(a, b, this.S, c.sessionId, c.arrayId) : this.j.connect(a, b, this.S)
        }
    }
    ;
    g.k.disconnect = function(a) {
        this.ma = a || 0;
        this.B.stop();
        Ywb(this);
        this.j && (3 == this.j.getState() && Mwb(this.j),
        this.j.disconnect());
        this.ma = 0
    }
    ;
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.sd(a, b);
        this.B.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(a) : this.yz() && (Ywb(this),
        Iwb(this.j, a))
    }
    ;
    g.k.FS = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b)
                Iwb(this.j, a[b])
        }
        this.ra("handlerOpened");
        vub(this.Pa, "BROWSER_CHANNEL")
    }
    ;
    g.k.DS = function(a) {
        var b = 2 == a && 401 == this.j.Ao;
        4 == a || b || this.B.start();
        this.ra("handlerError", a, b);
        Bub(this.Ia, "BROWSER_CHANNEL")
    }
    ;
    g.k.LK = function(a, b) {
        if (!this.B.isActive())
            this.ra("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        xub(this.Fa, "BROWSER_CHANNEL");
        a && this.eb.j.MK("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.gb.j.MK("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    }
    ;
    g.k.GS = function() {
        var a = {
            v: 2
        };
        this.ea && (a.gsessionid = this.ea);
        0 != this.G && (a.ui = "" + this.G);
        0 != this.ma && (a.ui = "" + this.ma);
        this.K && g.sd(a, this.K);
        return a
    }
    ;
    g.k.ES = function(a) {
        "S" == a[0] ? this.ea = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(),
        this.j.disconnect()) : this.ra("handlerMessage", new Wwb(a[0],a[1]));
        zub(this.Oa, "BROWSER_CHANNEL")
    }
    ;
    g.k.yz = function() {
        return !!this.j && 3 == this.j.getState()
    }
    ;
    g.k.Er = function(a) {
        (this.S.loungeIdToken = a) || this.B.stop();
        if (this.Ya && this.j) {
            var b = this.j.zo || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.zo = b
        }
    }
    ;
    g.k.Vs = function() {
        return this.S.id
    }
    ;
    g.k.jt = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    }
    ;
    g.k.Gw = function() {
        var a = this.B;
        g.Wt(a.j);
        a.start()
    }
    ;
    g.k.q$ = function() {
        this.B.isActive();
        0 == Jwb(this.j) && this.connect(this.K, this.G)
    }
    ;
    $8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    }
    ;
    $8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    }
    ;
    $8.prototype.G = function(a) {
        a(Error("request timed out"))
    }
    ;
    g.v($wb, g.Gd);
    g.k = $wb.prototype;
    g.k.connect = function(a, b, c) {
        this.Id.connect(a, b, c)
    }
    ;
    g.k.disconnect = function(a) {
        this.Id.disconnect(a)
    }
    ;
    g.k.Gw = function() {
        this.Id.Gw()
    }
    ;
    g.k.Vs = function() {
        return this.Id.Vs()
    }
    ;
    g.k.jt = function() {
        return this.Id.jt()
    }
    ;
    g.k.yz = function() {
        return this.Id.yz()
    }
    ;
    g.k.o1 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Id
          , b = this.j;
        g.uD("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.iK,
            sessionId: a.j.D,
            arrayId: a.j.Dx
        });
        g.uD("yt-remote-session-screen-id", b);
        a = j8();
        b = k8();
        g.Db(a, b) || a.push(b);
        Sub(a);
        Uub()
    }
    ;
    g.k.m1 = function() {
        this.dispatchEvent("channelClosed")
    }
    ;
    g.k.n1 = function(a) {
        this.dispatchEvent(new Uwb(a))
    }
    ;
    g.k.onError = function(a) {
        this.dispatchEvent(new Vwb(a ? 1 : 0))
    }
    ;
    g.k.sendMessage = function(a, b) {
        this.Id.sendMessage(a, b)
    }
    ;
    g.k.Er = function(a) {
        this.Id.Er(a)
    }
    ;
    g.k.dispose = function() {
        this.Id.dispose()
    }
    ;
    g.k = axb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.K && (this.C.stop(),
        this.ma = a,
        this.S = b,
        cxb(this),
        (a = g.eC("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"],
        this.j && (this.B.device = this.j.device,
        this.B.name = this.j.name,
        this.B.app = this.j.app,
        this.B.id = this.j.id,
        this.j.B6 && (this.B.mdxVersion = "" + this.j.B6),
        this.j.theme && (this.B.theme = this.j.theme),
        this.j.capabilities && (this.B.capabilities = this.j.capabilities),
        this.j.d4 && (this.B.cst = this.j.d4),
        this.j.authuser && (this.B.authuser = this.j.authuser),
        this.j.pageId && (this.B.pageId = this.j.pageId)),
        0 !== this.S ? this.B.ui = "" + this.S : delete this.B.ui,
        Object.assign(this.B, this.ma),
        this.channel = new K8(this.pathPrefix,{
            R5: "gsessionid",
            F6: this.D,
            G6: this.B
        }),
        this.channel.open(),
        this.K = 2,
        bxb(this))
    }
    ;
    g.k.disconnect = function(a) {
        this.ea = void 0 === a ? 0 : a;
        this.C.stop();
        cxb(this);
        this.channel && (0 !== this.ea ? this.B.ui = "" + this.ea : delete this.B.ui,
        this.channel.close());
        this.ea = 0
    }
    ;
    g.k.jt = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    }
    ;
    g.k.Gw = function() {
        var a = this.C;
        g.Wt(a.j);
        a.start()
    }
    ;
    g.k.sendMessage = function(a, b) {
        this.channel && (cxb(this),
        a = Object.assign({}, {
            _sc: a
        }, b),
        this.channel.send(a))
    }
    ;
    g.k.Er = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    }
    ;
    g.k.Vs = function() {
        return this.j ? this.j.id : ""
    }
    ;
    g.k.ra = function(a) {
        return this.G.ra.apply(this.G, [a].concat(g.qa(g.Ja.apply(1, arguments))))
    }
    ;
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    }
    ;
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    }
    ;
    g.k.Vh = function(a) {
        return this.G.Vh(a)
    }
    ;
    g.k.dispose = function() {
        this.qa || (this.qa = !0,
        g.sb(this.G),
        this.disconnect(),
        g.sb(this.C),
        this.Ca = function() {
            return ""
        }
        )
    }
    ;
    g.k.isDisposed = function() {
        return this.qa
    }
    ;
    g.v(dxb, g.Gd);
    g.k = dxb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    }
    ;
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    }
    ;
    g.k.Gw = function() {
        this.j.Gw()
    }
    ;
    g.k.Vs = function() {
        return this.j.Vs()
    }
    ;
    g.k.jt = function() {
        return this.j.jt()
    }
    ;
    g.k.yz = function() {
        return 3 === this.j.K
    }
    ;
    g.k.t1 = function() {
        this.dispatchEvent("channelOpened")
    }
    ;
    g.k.q1 = function() {
        this.dispatchEvent("channelClosed")
    }
    ;
    g.k.s1 = function(a) {
        this.dispatchEvent(new Uwb(a))
    }
    ;
    g.k.onError = function() {
        this.dispatchEvent(new Vwb(401 === this.j.Mg ? 1 : 0))
    }
    ;
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    }
    ;
    g.k.Er = function(a) {
        this.j.Er(a)
    }
    ;
    g.k.dispose = function() {
        this.j.dispose()
    }
    ;
    var lxb = Date.now()
      , b9 = null
      , f9 = Array(50)
      , e9 = -1
      , g9 = !1;
    g.gb(h9, g.yG);
    h9.prototype.Kk = function() {
        return this.screens
    }
    ;
    h9.prototype.contains = function(a) {
        return !!Pub(this.screens, a)
    }
    ;
    h9.prototype.get = function(a) {
        return a ? i8(this.screens, a) : null
    }
    ;
    h9.prototype.info = function(a) {
        c9(this.K, a)
    }
    ;
    g.v(pxb, g.yG);
    g.k = pxb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.qd) && this.KY()
    }
    ;
    g.k.stop = function() {
        this.j && (this.j.abort(),
        this.j = null);
        isNaN(this.qd) || (g.AC(this.qd),
        this.qd = NaN)
    }
    ;
    g.k.Ba = function() {
        this.stop();
        g.yG.prototype.Ba.call(this)
    }
    ;
    g.k.KY = function() {
        this.qd = NaN;
        this.j = g.DC(a9(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.S
            },
            timeout: 5E3,
            onSuccess: (0,
            g.cb)(this.w1, this),
            onError: (0,
            g.cb)(this.v1, this),
            onTimeout: (0,
            g.cb)(this.z1, this)
        })
    }
    ;
    g.k.w1 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived",
        a.loungeToken = a.shortLivedLoungeToken.value,
        b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.ra("pairingComplete", new f8(a), b)
    }
    ;
    g.k.v1 = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.B >= jzb.length ? this.ra("pairingFailed", Error("DIAL polling timed out")) : (a = jzb[this.B],
        this.qd = g.yC((0,
        g.cb)(this.KY, this), a),
        this.B++) : this.ra("pairingFailed", Error("Server error " + a.status))
    }
    ;
    g.k.z1 = function() {
        this.j = null;
        this.ra("pairingFailed", Error("Server not responding"))
    }
    ;
    var jzb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.gb(j9, h9);
    g.k = j9.prototype;
    g.k.start = function() {
        i9(this) && this.ra("screenChange");
        !g.vD("yt-remote-lounge-token-expiration") && qxb(this);
        g.AC(this.j);
        this.j = g.yC((0,
        g.cb)(this.start, this), 1E4)
    }
    ;
    g.k.add = function(a, b) {
        i9(this);
        mxb(this, a);
        k9(this, !1);
        this.ra("screenChange");
        b(a);
        a.token || qxb(this)
    }
    ;
    g.k.remove = function(a, b) {
        var c = i9(this);
        oxb(this, a) && (k9(this, !1),
        c = !0);
        b(a);
        c && this.ra("screenChange")
    }
    ;
    g.k.hK = function(a, b, c, d) {
        var e = i9(this)
          , f = this.get(a.id);
        f ? (f.name != b && (f.name = b,
        k9(this, !1),
        e = !0),
        c(a)) : d(Error("no such local screen."));
        e && this.ra("screenChange")
    }
    ;
    g.k.Ba = function() {
        g.AC(this.j);
        j9.Qf.Ba.call(this)
    }
    ;
    g.k.p5 = function(a) {
        i9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c]
              , f = this.get(e.screenId);
            f && (f.token = e.loungeToken,
            --b)
        }
        k9(this, !b);
        b && c9(this.K, "Missed " + b + " lounge tokens.")
    }
    ;
    g.k.o5 = function(a) {
        c9(this.K, "Requesting lounge tokens failed: " + a)
    }
    ;
    g.v(sxb, g.yG);
    g.k = sxb.prototype;
    g.k.start = function() {
        var a = parseInt(g.vD("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.eb() - 144E5 < a ? 0 : a) ? l9(this) : (this.D = g.eb() + 3E5,
        g.uD("yt-remote-fast-check-period", this.D),
        this.BQ())
    }
    ;
    g.k.isEmpty = function() {
        return g.jd(this.j)
    }
    ;
    g.k.update = function() {
        rxb("Updating availability on schedule.");
        var a = this.K()
          , b = g.Uc(this.j, function(c, d) {
            return c && !!i8(a, d)
        }, this);
        vxb(this, b)
    }
    ;
    g.k.Ba = function() {
        g.AC(this.C);
        this.C = NaN;
        this.B && (this.B.abort(),
        this.B = null);
        g.yG.prototype.Ba.call(this)
    }
    ;
    g.k.BQ = function() {
        g.AC(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = wxb(this);
        if (qub(a)) {
            var b = a9(this.G, "/pairing/get_screen_availability");
            this.B = Zwb(this.G, b, {
                lounge_token: g.fd(a).join(",")
            }, (0,
            g.cb)(this.O8, this, a), (0,
            g.cb)(this.N8, this))
        } else
            vxb(this, {}),
            l9(this)
    }
    ;
    g.k.O8 = function(a, b) {
        this.B = null;
        var c = g.fd(wxb(this));
        if (g.Wb(c, g.fd(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e)
                c[a[b[e].loungeToken]] = "online" == b[e].status;
            vxb(this, c);
            l9(this)
        } else
            this.ag("Changing Screen set during request."),
            this.BQ()
    }
    ;
    g.k.N8 = function(a) {
        this.ag("Screen availability failed: " + a);
        this.B = null;
        l9(this)
    }
    ;
    g.k.ag = function(a) {
        c9("OnlineScreenService", a)
    }
    ;
    g.gb(m9, h9);
    g.k = m9.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.ra("screenChange"),
        this.j.isEmpty() || this.ra("onlineScreenChange"))
    }
    ;
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    }
    ;
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    }
    ;
    g.k.hK = function(a, b, c, d) {
        this.B.contains(a) ? this.B.hK(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name,
        c9(this.K, a),
        d(Error(a)))
    }
    ;
    g.k.Kk = function(a) {
        return a ? this.screens : g.Ib(this.screens, g.ks(this.C, function(b) {
            return !this.contains(b)
        }, this))
    }
    ;
    g.k.HS = function() {
        return g.ks(this.Kk(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    }
    ;
    g.k.IS = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new pxb(this.D,a,b,c,d);
        l.subscribe("pairingComplete", function(m, n) {
            g.sb(l);
            e(n9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.sb(l);
            f(m)
        });
        l.start();
        return (0,
        g.cb)(l.stop, l)
    }
    ;
    g.k.A1 = function(a, b, c, d) {
        g.DC(a9(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0,
            g.cb)(function(e, f) {
                e = new f8(f.screen || {});
                if (!e.name || Axb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); Axb(this, l); ) {
                            h++;
                            if (20 < h)
                                break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(n9(this, e))
            }, this),
            onError: (0,
            g.cb)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0,
            g.cb)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    }
    ;
    g.k.Ba = function() {
        g.sb(this.B);
        g.sb(this.j);
        m9.Qf.Ba.call(this)
    }
    ;
    g.k.z5 = function() {
        Cxb(this);
        this.ra("screenChange");
        this.j.update()
    }
    ;
    m9.prototype.dispose = m9.prototype.dispose;
    g.gb(o9, g.yG);
    g.k = o9.prototype;
    g.k.xj = function(a) {
        this.isDisposed() || (a && (q9(this, "" + a),
        this.ra("sessionFailed")),
        this.j = null,
        this.ra("sessionScreen", null))
    }
    ;
    g.k.info = function(a) {
        c9(this.Ia, a)
    }
    ;
    g.k.JS = function() {
        return null
    }
    ;
    g.k.QQ = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a,[]),
        b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0,
        g.cb)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0,
        g.cb)(function() {
            q9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    }
    ;
    g.k.Ba = function() {
        this.QQ("");
        o9.Qf.Ba.call(this)
    }
    ;
    g.v(r9, o9);
    g.k = r9.prototype;
    g.k.PQ = function(a) {
        if (this.C) {
            if (this.C == a)
                return;
            q9(this, "Overriding cast session with new session object");
            Oxb(this);
            this.Ca = !1;
            this.ea = "unknown";
            this.C.removeUpdateListener(this.va);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa)
        }
        this.C = a;
        this.C.addUpdateListener(this.va);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa);
        Jxb(this, "getMdxSessionStatus")
    }
    ;
    g.k.Jz = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.nm(a))
    }
    ;
    g.k.stop = function() {
        this.C ? this.C.stop((0,
        g.cb)(function() {
            this.xj()
        }, this), (0,
        g.cb)(function() {
            this.xj(Error("Failed to stop receiver app."))
        }, this)) : this.xj(Error("Stopping cast device without session."))
    }
    ;
    g.k.QQ = function() {}
    ;
    g.k.Ba = function() {
        this.info("disposeInternal");
        Oxb(this);
        this.C && (this.C.removeUpdateListener(this.va),
        this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Fa));
        this.C = null;
        o9.prototype.Ba.call(this)
    }
    ;
    g.k.y9 = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = c8(b),
                g.Xa(b))
                    switch (a = "" + b.type,
                    b = b.data || {},
                    this.info("onYoutubeMessage_: " + a + " " + g.nm(b)),
                    a) {
                    case "mdxSessionStatus":
                        Gxb(this, b);
                        break;
                    case "loungeToken":
                        Kxb(this, b);
                        break;
                    default:
                        q9(this, "Unknown youtube message: " + a)
                    }
                else
                    q9(this, "Unable to parse message.");
            else
                q9(this, "No data in message.")
    }
    ;
    g.k.UV = function(a, b, c, d) {
        g.AC(this.ma);
        this.ma = 0;
        zxb(this.D, this.B.label, a, this.B.friendlyName, (0,
        g.cb)(function(e) {
            e ? b(e) : 0 <= d ? (q9(this, "Screen " + a + " appears to be offline. " + d + " retries left."),
            this.ma = g.yC((0,
            g.cb)(this.UV, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    }
    ;
    g.k.JS = function() {
        return this.C
    }
    ;
    g.k.B1 = function(a) {
        this.isDisposed() || a || (q9(this, "Cast session died."),
        this.xj())
    }
    ;
    g.v(s9, o9);
    g.k = s9.prototype;
    g.k.PQ = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.Oa)
    }
    ;
    g.k.Jz = function(a) {
        this.Pa = a;
        this.qa()
    }
    ;
    g.k.stop = function() {
        Wxb(this);
        this.C ? this.C.stop((0,
        g.cb)(this.xj, this, null), (0,
        g.cb)(this.xj, this, "Failed to stop DIAL device.")) : this.xj()
    }
    ;
    g.k.Ba = function() {
        Wxb(this);
        this.C && this.C.removeUpdateListener(this.Oa);
        this.C = null;
        o9.prototype.Ba.call(this)
    }
    ;
    g.k.C1 = function(a) {
        this.isDisposed() || a || (q9(this, "DIAL session died."),
        this.G(),
        this.G = function() {}
        ,
        this.xj())
    }
    ;
    g.v(v9, o9);
    v9.prototype.stop = function() {
        this.xj()
    }
    ;
    v9.prototype.PQ = function() {}
    ;
    v9.prototype.Jz = function() {
        g.AC(this.C);
        this.C = NaN;
        var a = i8(this.D.Kk(), this.B.label);
        a ? p9(this, a) : this.xj(Error("No such screen"))
    }
    ;
    v9.prototype.Ba = function() {
        g.AC(this.C);
        this.C = NaN;
        o9.prototype.Ba.call(this)
    }
    ;
    g.v(w9, g.yG);
    g.k = w9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.ma,[chrome.cast.Capability.AUDIO_OUT]);
        this.ea || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0,
        g.cb)(this.x8, this);
        c = new chrome.cast.ApiConfig(c,(0,
        g.cb)(this.rY, this),e,d,a);
        c.customDialLaunchCallback = (0,
        g.cb)(this.x7, this);
        chrome.cast.initialize(c, (0,
        g.cb)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.G),
            ixb(),
            this.B.subscribe("onlineScreenChange", (0,
            g.cb)(this.KS, this)),
            this.C = Zxb(this),
            chrome.cast.setCustomReceivers(this.C, function() {}, (0,
            g.cb)(function(f) {
                this.ag("Failed to set initial custom receivers: " + g.nm(f))
            }, this)),
            this.ra("yt-remote-cast2-availability-change", y9(this)),
            b(!0))
        }, this), (0,
        g.cb)(function(f) {
            this.ag("Failed to initialize API: " + g.nm(f));
            b(!1)
        }, this))
    }
    ;
    g.k.v$ = function(a, b) {
        x9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a)
                x9("Unsetting old screen status: " + this.j.B.friendlyName),
                z9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = i8(this.B.Kk(), a);
                if (!c) {
                    x9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    x9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = Xxb(this, c);
                a || (x9("setConnectedScreenStatus: Connected receiver not custom..."),
                a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id,c.name),
                a.receiverType = chrome.cast.ReceiverType.CUSTOM,
                this.C.push(a),
                chrome.cast.setCustomReceivers(this.C, function() {}, (0,
                g.cb)(function(d) {
                    this.ag("Failed to set initial custom receivers: " + g.nm(d))
                }, this)));
                x9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                z9(this, new v9(this.B,a), !0)
            }
            this.j.QQ(b)
        } else
            x9("setConnectedScreenStatus: no screen.")
    }
    ;
    g.k.x$ = function(a) {
        this.isDisposed() ? this.ag("Setting connection data on disposed cast v2") : this.j ? this.j.Jz(a) : this.ag("Setting connection data without a session")
    }
    ;
    g.k.E1 = function() {
        this.isDisposed() ? this.ag("Stopping session on disposed cast v2") : this.j ? (this.j.stop(),
        z9(this, null)) : x9("Stopping non-existing session")
    }
    ;
    g.k.requestSession = function() {
        chrome.cast.requestSession((0,
        g.cb)(this.rY, this), (0,
        g.cb)(this.S8, this))
    }
    ;
    g.k.Ba = function() {
        this.B.unsubscribe("onlineScreenChange", (0,
        g.cb)(this.KS, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = fxb
          , b = g.Ta("yt.mdx.remote.debug.handlers_");
        g.Fb(b || [], a);
        g.sb(this.j);
        g.yG.prototype.Ba.call(this)
    }
    ;
    g.k.ag = function(a) {
        c9("Controller", a)
    }
    ;
    g.k.tY = function(a, b) {
        this.j == a && (b || z9(this, null),
        this.ra("yt-remote-cast2-session-change", b))
    }
    ;
    g.k.u8 = function(a, b) {
        if (!this.isDisposed())
            if (a)
                switch (a.friendlyName = chrome.cast.unescape(a.friendlyName),
                x9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b),
                b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label)
                            x9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName),
                            this.j.stop();
                        else {
                            x9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.ra("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                    case chrome.cast.ReceiverType.CUSTOM:
                        z9(this, new v9(this.B,a));
                        break;
                    case chrome.cast.ReceiverType.DIAL:
                        z9(this, new s9(this.B,a,this.D,this.config_));
                        break;
                    case chrome.cast.ReceiverType.CAST:
                        z9(this, new r9(this.B,a,this.config_));
                        break;
                    default:
                        this.ag("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.ag("Stopping receiver w/o session: " + a.friendlyName)
                }
            else
                this.ag("onReceiverAction_ called without receiver.")
    }
    ;
    g.k.x7 = function(a) {
        if (this.isDisposed())
            return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.ag("Not DIAL receiver: " + b.friendlyName),
        b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label)
            return this.ag("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName),
            Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j)
                return x9("Reselecting dial screen."),
                this.ra("yt-remote-cast2-session-change", this.j.j),
                Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.ag('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            z9(this, new s9(this.B,b,this.D,this.config_))
        }
        b = this.j;
        b.ma = a;
        b.ma.appState == chrome.cast.DialAppState.RUNNING ? (a = b.ma.extraData || {},
        c = a.screenId || null,
        t9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = Txb(b, {
            name: b.B.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.ma.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.jC(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")),
        a = Uxb(b, c)) : a = Uxb(b, c)) : a = Rxb(b);
        return a
    }
    ;
    g.k.rY = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.K) {
            x9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST)
                        x9("Got resumed cast session before resumed mdx connection."),
                        c.friendlyName = chrome.cast.unescape(c.friendlyName),
                        z9(this, new r9(this.B,c,this.config_), !0);
                    else {
                        this.ag("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B
                  , e = i8(this.B.Kk(), d.label);
                e && g8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (x9("onSessionEstablished_: manual to cast session change " + c.friendlyName),
                g.sb(this.j),
                this.j = new r9(this.B,c,this.config_),
                this.j.subscribe("sessionScreen", (0,
                g.cb)(this.tY, this, this.j)),
                this.j.subscribe("sessionFailed", function() {
                    return Yxb(b, b.j)
                }),
                this.j.Jz(null));
                this.j.PQ(a)
            }
        }
    }
    ;
    g.k.D1 = function() {
        return this.j ? this.j.JS() : null
    }
    ;
    g.k.S8 = function(a) {
        this.isDisposed() || (this.ag("Failed to estabilish a session: " + g.nm(a)),
        a.code != chrome.cast.ErrorCode.CANCEL && z9(this, null),
        this.ra("yt-remote-cast2-session-failed"))
    }
    ;
    g.k.x8 = function(a) {
        x9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = y9(this);
            this.S = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            y9(this) != b && this.ra("yt-remote-cast2-availability-change", y9(this))
        }
    }
    ;
    g.k.KS = function() {
        this.isDisposed() || (this.C = Zxb(this),
        x9("Updating custom receivers: " + g.nm(this.C)),
        chrome.cast.setCustomReceivers(this.C, function() {}, (0,
        g.cb)(function() {
            this.ag("Failed to set custom receivers.")
        }, this)),
        this.ra("yt-remote-cast2-availability-change", y9(this)))
    }
    ;
    w9.prototype.setLaunchParams = w9.prototype.x$;
    w9.prototype.setConnectedScreenStatus = w9.prototype.v$;
    w9.prototype.stopSession = w9.prototype.E1;
    w9.prototype.getCastSession = w9.prototype.D1;
    w9.prototype.requestSession = w9.prototype.requestSession;
    w9.prototype.init = w9.prototype.init;
    w9.prototype.dispose = w9.prototype.dispose;
    var hyb = [];
    g.k = G9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        nyb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index,
        this.listId = a.listId,
        this.videoId = a.videoId,
        this.playerState = a.playerState,
        this.volume = a.volume,
        this.muted = a.muted,
        this.audioTrackId = a.audioTrackId,
        this.trackData = a.trackData,
        this.kp = a.hasPrevious,
        this.Pk = a.hasNext,
        this.S = a.playerTime,
        this.K = a.playerTimeAt,
        this.D = a.seekableStart,
        this.j = a.seekableEnd,
        this.G = a.duration,
        this.ma = a.loadedTime,
        this.C = a.liveIngestionTime,
        this.B = !isNaN(this.C))
    }
    ;
    g.k.isPlaying = function() {
        return 1 == this.playerState
    }
    ;
    g.k.rl = function(a) {
        this.G = isNaN(a) ? 0 : a
    }
    ;
    g.k.getDuration = function() {
        return this.B ? this.G + H9(this) : this.G
    }
    ;
    g.k.clone = function() {
        return new G9(oyb(this))
    }
    ;
    g.v(M9, g.yG);
    g.k = M9.prototype;
    g.k.getState = function() {
        return this.C
    }
    ;
    g.k.jt = function() {
        return this.D.getReconnectTimeout()
    }
    ;
    g.k.Gw = function() {
        this.D.reconnect()
    }
    ;
    g.k.play = function() {
        O9(this) ? (this.j ? this.j.play(null, g.Kd, S9(this, "play")) : R9(this, "play"),
        ryb(this, 1, J9(N9(this))),
        this.ra("remotePlayerChange")) : P9(this, this.play)
    }
    ;
    g.k.pause = function() {
        O9(this) ? (this.j ? this.j.pause(null, g.Kd, S9(this, "pause")) : R9(this, "pause"),
        ryb(this, 2, J9(N9(this))),
        this.ra("remotePlayerChange")) : P9(this, this.pause)
    }
    ;
    g.k.seekTo = function(a) {
        if (O9(this)) {
            if (this.j) {
                var b = N9(this)
                  , c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Kd, S9(this, "seekTo", {
                    newTime: a
                }))
            } else
                R9(this, "seekTo", {
                    newTime: a
                });
            ryb(this, 3, a);
            this.ra("remotePlayerChange")
        } else
            P9(this, g.db(this.seekTo, a))
    }
    ;
    g.k.stop = function() {
        if (O9(this)) {
            this.j ? this.j.stop(null, g.Kd, S9(this, "stopVideo")) : R9(this, "stopVideo");
            var a = N9(this);
            a.index = -1;
            a.videoId = "";
            nyb(a);
            Q9(this, a);
            this.ra("remotePlayerChange")
        } else
            P9(this, this.stop)
    }
    ;
    g.k.setVolume = function(a, b) {
        if (O9(this)) {
            var c = N9(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0,
                    g.cb)(function() {
                        d9("set receiver volume: " + d)
                    }, this), (0,
                    g.cb)(function() {
                        this.ag("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0,
                g.cb)(function() {
                    d9("set receiver muted: " + b)
                }, this), (0,
                g.cb)(function() {
                    this.ag("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                -1 != c.volume && (e.delta = a - c.volume);
                R9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            Q9(this, c)
        } else
            P9(this, g.db(this.setVolume, a, b))
    }
    ;
    g.k.LS = function(a, b) {
        if (O9(this)) {
            var c = N9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            },
            a.style = g.nm(b.style),
            g.sd(a, c.trackData));
            R9(this, "setSubtitlesTrack", a);
            Q9(this, c)
        } else
            P9(this, g.db(this.LS, a, b))
    }
    ;
    g.k.setAudioTrack = function(a, b) {
        O9(this) ? (b = b.getLanguageInfo().getId(),
        R9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }),
        a = N9(this),
        a.audioTrackId = b,
        Q9(this, a)) : P9(this, g.db(this.setAudioTrack, a, b))
    }
    ;
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = N9(this)
          , m = {
            videoId: a
        };
        void 0 !== c && (m.currentIndex = c);
        K9(l, a, c || 0);
        void 0 !== b && (I9(l, b),
        m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.nm(h));
        R9(this, "setPlaylist", m);
        d || Q9(this, l)
    }
    ;
    g.k.mJ = function(a, b) {
        if (O9(this)) {
            if (a && b) {
                var c = N9(this);
                K9(c, a, b);
                Q9(this, c)
            }
            R9(this, "previous")
        } else
            P9(this, g.db(this.mJ, a, b))
    }
    ;
    g.k.nextVideo = function(a, b) {
        if (O9(this)) {
            if (a && b) {
                var c = N9(this);
                K9(c, a, b);
                Q9(this, c)
            }
            R9(this, "next")
        } else
            P9(this, g.db(this.nextVideo, a, b))
    }
    ;
    g.k.uG = function() {
        if (O9(this)) {
            R9(this, "clearPlaylist");
            var a = N9(this);
            a.reset();
            Q9(this, a);
            this.ra("remotePlayerChange")
        } else
            P9(this, this.uG)
    }
    ;
    g.k.fV = function() {
        O9(this) ? R9(this, "dismissAutoplay") : P9(this, this.fV)
    }
    ;
    g.k.dispose = function() {
        if (3 != this.C) {
            var a = this.C;
            this.C = 3;
            this.ra("proxyStateChange", a, this.C)
        }
        g.yG.prototype.dispose.call(this)
    }
    ;
    g.k.Ba = function() {
        qyb(this);
        this.D = null;
        this.G.clear();
        L9(this, null);
        g.yG.prototype.Ba.call(this)
    }
    ;
    g.k.TQ = function(a) {
        if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
            var b = this.C;
            this.C = a;
            this.ra("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.G.isEmpty(); )
                    b = a = this.G,
                    0 === b.j.length && (b.j = b.B,
                    b.j.reverse(),
                    b.B = []),
                    a.j.pop().apply(this);
            else
                3 == a && this.dispose()
        }
    }
    ;
    g.k.s8 = function(a, b) {
        this.ra(a, b)
    }
    ;
    g.k.n7 = function(a) {
        if (!a)
            this.bE(null),
            L9(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = N9(this)
              , c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted)
                d9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
                b.volume = c,
                b.muted = !!a.muted,
                Q9(this, b)
        }
    }
    ;
    g.k.bE = function(a) {
        d9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.ma);
        if (this.j = a)
            this.j.addUpdateListener(this.ma),
            syb(this),
            this.ra("remotePlayerChange")
    }
    ;
    g.k.m7 = function(a) {
        a ? (syb(this),
        this.ra("remotePlayerChange")) : this.bE(null)
    }
    ;
    g.k.sR = function() {
        R9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    }
    ;
    g.k.q7 = function() {
        var a = kyb();
        a && L9(this, a)
    }
    ;
    g.k.ag = function(a) {
        c9("CP", a)
    }
    ;
    g.v(V9, g.yG);
    g.k = V9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId
              , d = b.videoId
              , e = b.videoIds
              , f = b.playerParams
              , h = b.clickTrackingParams
              , l = b.index
              , m = {
                videoId: d
            }
              , n = b.currentTime
              , p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Oa && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            I9(this.j, n);
            this.G = "UNSUPPORTED";
            c = this.Oa ? "setInitialState" : "setPlaylist";
            T9("Connecting with " + c + " and params: " + g.nm(m));
            this.B.connect({
                method: c,
                params: g.nm(m)
            }, a, Vub())
        } else
            T9("Connecting without params"),
            this.B.connect({}, a, Vub());
        wyb(this)
    }
    ;
    g.k.Er = function(a) {
        this.B.Er(a)
    }
    ;
    g.k.dispose = function() {
        this.isDisposed() || (g.Sa("yt.mdx.remote.remoteClient_", null),
        this.ra("beforeDispose"),
        U9(this, 3));
        g.yG.prototype.dispose.call(this)
    }
    ;
    g.k.Ba = function() {
        xyb(this);
        zyb(this);
        yyb(this);
        g.AC(this.ma);
        this.ma = NaN;
        g.AC(this.ea);
        this.ea = NaN;
        this.D = null;
        g.mD(this.qa);
        this.qa.length = 0;
        this.B.dispose();
        g.yG.prototype.Ba.call(this);
        this.G = this.S = this.C = this.j = this.B = null
    }
    ;
    g.k.RW = function(a) {
        if (!this.C || 0 === this.C.length)
            return !1;
        for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a))
                return !1;
        return !0
    }
    ;
    g.k.c5 = function() {
        var a = 3;
        this.isDisposed() || (a = 0,
        isNaN(this.aD()) ? this.B.yz() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    }
    ;
    g.k.Ry = function(a) {
        T9("Disconnecting with " + a);
        g.Sa("yt.mdx.remote.remoteClient_", null);
        xyb(this);
        this.ra("beforeDisconnect", a);
        1 == a && l8();
        this.B.disconnect(a);
        this.dispose()
    }
    ;
    g.k.a5 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(),
        K9(a, this.D, a.index));
        return oyb(a)
    }
    ;
    g.k.y$ = function(a) {
        var b = this
          , c = new G9(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId,
        g.AC(this.ma),
        this.ma = g.yC(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && W9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && J9(this.j) == J9(c) && g.nm(this.j.trackData) == g.nm(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.Yb(d, function(e) {
            this.ra(e)
        }, this)
    }
    ;
    g.k.PV = function() {
        var a = this.B.Vs()
          , b = g.Bb(this.C, function(c) {
            return "REMOTE_CONTROL" == c.type && c.id != a
        });
        return b ? b.id : ""
    }
    ;
    g.k.aD = function() {
        return this.B.jt()
    }
    ;
    g.k.S4 = function() {
        return this.G || "UNSUPPORTED"
    }
    ;
    g.k.T4 = function() {
        return this.S || ""
    }
    ;
    g.k.F1 = function() {
        !isNaN(this.aD()) && this.B.Gw()
    }
    ;
    g.k.u$ = function(a, b) {
        W9(this, a, b);
        Byb(this)
    }
    ;
    g.k.MS = function() {
        var a = g.NC("SID", "") || ""
          , b = g.NC("SAPISID", "") || ""
          , c = g.NC("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c)
            return "";
        a = g.mg(g.lg(a), 2);
        b = g.mg(g.lg(b), 2);
        c = g.mg(g.lg(c), 2);
        return g.mg(g.lg(a + "," + b + "," + c), 2)
    }
    ;
    V9.prototype.subscribe = V9.prototype.subscribe;
    V9.prototype.unsubscribeByKey = V9.prototype.Vh;
    V9.prototype.getProxyState = V9.prototype.c5;
    V9.prototype.disconnect = V9.prototype.Ry;
    V9.prototype.getPlayerContextData = V9.prototype.a5;
    V9.prototype.setPlayerContextData = V9.prototype.y$;
    V9.prototype.getOtherConnectedRemoteId = V9.prototype.PV;
    V9.prototype.getReconnectTimeout = V9.prototype.aD;
    V9.prototype.getAutoplayMode = V9.prototype.S4;
    V9.prototype.getAutoplayVideoId = V9.prototype.T4;
    V9.prototype.reconnect = V9.prototype.F1;
    V9.prototype.sendMessage = V9.prototype.u$;
    V9.prototype.getXsrfToken = V9.prototype.MS;
    V9.prototype.isCapabilitySupportedOnConnectedDevices = V9.prototype.RW;
    g.v(Nyb, h9);
    g.k = Nyb.prototype;
    g.k.Kk = function(a) {
        return this.ih.$_gs(a)
    }
    ;
    g.k.contains = function(a) {
        return !!this.ih.$_c(a)
    }
    ;
    g.k.get = function(a) {
        return this.ih.$_g(a)
    }
    ;
    g.k.start = function() {
        this.ih.$_st()
    }
    ;
    g.k.add = function(a, b, c) {
        this.ih.$_a(a, b, c)
    }
    ;
    g.k.remove = function(a, b, c) {
        this.ih.$_r(a, b, c)
    }
    ;
    g.k.hK = function(a, b, c, d) {
        this.ih.$_un(a, b, c, d)
    }
    ;
    g.k.Ba = function() {
        for (var a = 0, b = this.j.length; a < b; ++a)
            this.ih.$_ubk(this.j[a]);
        this.j.length = 0;
        this.ih = null;
        h9.prototype.Ba.call(this)
    }
    ;
    g.k.G1 = function() {
        this.ra("screenChange")
    }
    ;
    g.k.b8 = function() {
        this.ra("onlineScreenChange")
    }
    ;
    m9.prototype.$_st = m9.prototype.start;
    m9.prototype.$_gspc = m9.prototype.A1;
    m9.prototype.$_gsppc = m9.prototype.IS;
    m9.prototype.$_c = m9.prototype.contains;
    m9.prototype.$_g = m9.prototype.get;
    m9.prototype.$_a = m9.prototype.add;
    m9.prototype.$_un = m9.prototype.hK;
    m9.prototype.$_r = m9.prototype.remove;
    m9.prototype.$_gs = m9.prototype.Kk;
    m9.prototype.$_gos = m9.prototype.HS;
    m9.prototype.$_s = m9.prototype.subscribe;
    m9.prototype.$_ubk = m9.prototype.Vh;
    var g$ = null
      , j$ = !1
      , X9 = null
      , Y9 = null
      , Yyb = null
      , b$ = [];
    g.v(czb, g.J);
    g.k = czb.prototype;
    g.k.Ba = function() {
        g.J.prototype.Ba.call(this);
        this.j.stop();
        this.B.stop();
        this.S.stop();
        var a = this.Hc;
        a.unsubscribe("proxyStateChange", this.qY, this);
        a.unsubscribe("remotePlayerChange", this.hE, this);
        a.unsubscribe("remoteQueueChange", this.WI, this);
        a.unsubscribe("previousNextChange", this.nY, this);
        a.unsubscribe("nowAutoplaying", this.iY, this);
        a.unsubscribe("autoplayDismissed", this.OX, this);
        this.Hc = this.module = null
    }
    ;
    g.k.Ok = function(a) {
        var b = g.Ja.apply(1, arguments);
        if (2 != this.Hc.C)
            if (k$(this)) {
                if (1081 != N9(this.Hc).playerState || "control_seek" !== a)
                    switch (a) {
                    case "control_toggle_play_pause":
                        N9(this.Hc).isPlaying() ? this.Hc.pause() : this.Hc.play();
                        break;
                    case "control_play":
                        this.Hc.play();
                        break;
                    case "control_pause":
                        this.Hc.pause();
                        break;
                    case "control_seek":
                        this.K.EK(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        ezb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                    }
            } else
                switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b = this.J.getCurrentTime();
                    l$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    l$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    ezb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
                }
    }
    ;
    g.k.k7 = function(a) {
        this.S.U0(a)
    }
    ;
    g.k.qaa = function(a) {
        this.Ok("control_subtitles_set_track", g.jd(a) ? null : a)
    }
    ;
    g.k.RZ = function() {
        var a = this.J.getOption("captions", "track");
        g.jd(a) || ezb(this, a)
    }
    ;
    g.k.Ic = function(a) {
        this.module.Ic(a, this.J.getVideoData().lengthSeconds)
    }
    ;
    g.k.M7 = function() {
        g.jd(this.C) || fzb(this, this.C);
        this.D = !1
    }
    ;
    g.k.qY = function(a, b) {
        this.B.stop();
        2 === b && this.IZ()
    }
    ;
    g.k.hE = function() {
        if (k$(this)) {
            this.j.stop();
            var a = N9(this.Hc);
            switch (a.playerState) {
            case 1080:
            case 1081:
            case 1084:
            case 1085:
                this.module.Ph = 1;
                break;
            case 1082:
            case 1083:
                this.module.Ph = 0;
                break;
            default:
                this.module.Ph = -1
            }
            switch (a.playerState) {
            case 1081:
            case 1:
                this.Ac(new g.cM(8));
                this.HZ();
                break;
            case 1085:
            case 3:
                this.Ac(new g.cM(9));
                break;
            case 1083:
            case 0:
                this.Ac(new g.cM(2));
                this.K.stop();
                this.Ic(this.J.getVideoData().lengthSeconds);
                break;
            case 1084:
                this.Ac(new g.cM(4));
                break;
            case 2:
                this.Ac(new g.cM(4));
                this.Ic(J9(a));
                break;
            case -1:
                this.Ac(new g.cM(64));
                break;
            case -1E3:
                this.Ac(new g.cM(128,{
                    errorCode: "mdx.remoteerror",
                    errorMessage: "This video is not available for remote playback.",
                    WG: 2
                }))
            }
            a = N9(this.Hc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a,
            fzb(this, a));
            a = N9(this.Hc);
            -1 === a.volume || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.ma.isActive() || this.v_()
        } else
            dzb(this)
    }
    ;
    g.k.nY = function() {
        this.J.ra("mdxpreviousnextchange")
    }
    ;
    g.k.WI = function() {
        k$(this) || dzb(this)
    }
    ;
    g.k.iY = function(a) {
        isNaN(a) || this.J.ra("mdxnowautoplaying", a)
    }
    ;
    g.k.OX = function() {
        this.J.ra("mdxautoplaycanceled")
    }
    ;
    g.k.setAudioTrack = function(a) {
        k$(this) && this.Hc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    }
    ;
    g.k.seekTo = function(a, b) {
        -1 === N9(this.Hc).playerState ? l$(this, a) : b && this.Hc.seekTo(a)
    }
    ;
    g.k.v_ = function() {
        var a = this;
        if (k$(this)) {
            var b = N9(this.Hc);
            this.events.Qc(this.ea);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.ea = this.events.V(this.J, "onVolumeChange", function(c) {
                azb(a, c)
            })
        }
    }
    ;
    g.k.HZ = function() {
        this.j.stop();
        if (!this.Hc.isDisposed()) {
            var a = N9(this.Hc);
            a.isPlaying() && this.Ac(new g.cM(8));
            this.Ic(J9(a));
            this.j.start()
        }
    }
    ;
    g.k.IZ = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Hc.jt();
        2 == this.Hc.C && !isNaN(a) && this.B.start()
    }
    ;
    g.k.Ac = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.CAa(b, a)) {
            var c = g.nH(a, 2);
            c !== g.nH(this.G, 2) && this.J.UA(c);
            this.G = a;
            hzb(this.module, b, a)
        }
    }
    ;
    g.v(m$, g.U);
    m$.prototype.yd = function() {
        this.j.show()
    }
    ;
    m$.prototype.Pb = function() {
        this.j.hide()
    }
    ;
    m$.prototype.B = function() {
        n8("mdx-privacy-popup-cancel");
        this.Pb()
    }
    ;
    m$.prototype.C = function() {
        n8("mdx-privacy-popup-confirm");
        this.Pb()
    }
    ;
    g.v(n$, g.U);
    n$.prototype.onStateChange = function(a) {
        this.Fc(a.state)
    }
    ;
    n$.prototype.Fc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.nH(a, 128) ? g.IK("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.IK("Playing on $RECEIVER_NAME", b) : g.IK("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else
            this.j.hide()
    }
    ;
    g.v(o$, g.QX);
    o$.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && 1 < a.length && !this.J.getOption("remote", "quickCast") ? (this.Wt = g.ac(a, this.j, this),
        g.RX(this, g.Up(a, this.j)),
        a = this.J.getOption("remote", "currentReceiver"),
        a = this.j(a),
        this.options[a] && this.Ij(a),
        this.enable(!0)) : this.enable(!1)
    }
    ;
    o$.prototype.j = function(a) {
        return a.key
    }
    ;
    o$.prototype.wk = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Wt[a].name
    }
    ;
    o$.prototype.uh = function(a) {
        g.QX.prototype.uh.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.Wt[a]);
        this.Ob.Pb()
    }
    ;
    g.v(gzb, g.IV);
    g.k = gzb.prototype;
    g.k.create = function() {
        var a = this.player.W()
          , b = g.uS(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
        };
        Syb(b, a);
        this.subscriptions.push(g.kF("yt-remote-before-disconnect", this.i7, this));
        this.subscriptions.push(g.kF("yt-remote-connection-change", this.y8, this));
        this.subscriptions.push(g.kF("yt-remote-receiver-availability-change", this.pY, this));
        this.subscriptions.push(g.kF("yt-remote-auto-connect", this.w8, this));
        this.subscriptions.push(g.kF("yt-remote-receiver-resumed", this.v8, this));
        this.subscriptions.push(g.kF("mdx-privacy-popup-confirm", this.P9, this));
        this.subscriptions.push(g.kF("mdx-privacy-popup-cancel", this.O9, this));
        this.pY()
    }
    ;
    g.k.load = function() {
        this.player.cancelPlayback();
        g.IV.prototype.load.call(this);
        this.Xl = new czb(this,this.player,this.Hc);
        var a = (a = $yb()) ? a.currentTime : 0;
        var b = Xyb() ? new M9(f$(),void 0) : null;
        0 == a && b && (a = J9(N9(b)));
        0 !== a && this.Ic(a);
        hzb(this, this.kf, this.kf);
        this.player.Sp(6)
    }
    ;
    g.k.unload = function() {
        this.player.ra("mdxautoplaycanceled");
        this.Ks = this.Cp;
        g.tb(this.Xl, this.Hc);
        this.Hc = this.Xl = null;
        g.IV.prototype.unload.call(this);
        this.player.Sp(5);
        p$(this)
    }
    ;
    g.k.Ba = function() {
        g.lF(this.subscriptions);
        g.IV.prototype.Ba.call(this)
    }
    ;
    g.k.dE = function(a) {
        var b = g.Ja.apply(1, arguments);
        this.loaded && this.Xl.Ok.apply(this.Xl, [a].concat(g.qa(b)))
    }
    ;
    g.k.getAdState = function() {
        return this.Ph
    }
    ;
    g.k.kp = function() {
        return this.Hc ? N9(this.Hc).kp : !1
    }
    ;
    g.k.Pk = function() {
        return this.Hc ? N9(this.Hc).Pk : !1
    }
    ;
    g.k.Ic = function(a, b) {
        this.aX = a || 0;
        this.player.ra("progresssync", a, b);
        this.player.Ua("onVideoProgress", a || 0)
    }
    ;
    g.k.getCurrentTime = function() {
        return this.aX
    }
    ;
    g.k.getProgressState = function() {
        var a = N9(this.Hc)
          , b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Oh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + H9(a) : a.C,
            isAtLiveHead: 1 >= (a.B ? a.j + H9(a) : a.j) - this.getCurrentTime(),
            loaded: a.ma,
            seekableEnd: a.B ? a.j + H9(a) : a.j,
            seekableStart: 0 < a.D ? a.D + H9(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    }
    ;
    g.k.nextVideo = function() {
        this.Hc && this.Hc.nextVideo()
    }
    ;
    g.k.mJ = function() {
        this.Hc && this.Hc.mJ()
    }
    ;
    g.k.i7 = function(a) {
        1 === a && (this.ZP = this.Hc ? N9(this.Hc) : null)
    }
    ;
    g.k.y8 = function() {
        var a = Xyb() ? new M9(f$(),void 0) : null;
        if (a) {
            var b = this.Ks;
            this.loaded && this.unload();
            this.Hc = a;
            this.ZP = null;
            b.key !== this.Cp.key && (this.Ks = b,
            this.load())
        } else
            g.sb(this.Hc),
            this.Hc = null,
            this.loaded && (this.unload(),
            (a = this.ZP) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, J9(a)));
        this.player.ra("videodatachange", "newdata", this.player.getVideoData(), 3)
    }
    ;
    g.k.pY = function() {
        var a = [this.Cp]
          , b = a.concat
          , c = Tyb();
        D9() && g.vD("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Wt = b.call(a, c);
        a = Vyb() || this.Cp;
        q$(this, a);
        this.player.Ua("onMdxReceiversChange")
    }
    ;
    g.k.w8 = function() {
        var a = Vyb();
        q$(this, a)
    }
    ;
    g.k.v8 = function() {
        this.Ks = Vyb()
    }
    ;
    g.k.P9 = function() {
        this.AE = !0;
        p$(this);
        j$ = !1;
        g$ && i$(g$, 1);
        g$ = null
    }
    ;
    g.k.O9 = function() {
        this.AE = !1;
        p$(this);
        q$(this, this.Cp);
        this.Ks = this.Cp;
        j$ = !1;
        g$ = null;
        this.player.playVideo()
    }
    ;
    g.k.Ih = function(a, b) {
        switch (a) {
        case "casting":
            return this.loaded;
        case "receivers":
            return this.Wt;
        case "currentReceiver":
            return b && ("cast-selector-receiver" === b.key ? lyb() : q$(this, b)),
            this.loaded ? this.Ks : this.Cp;
        case "quickCast":
            return 2 === this.Wt.length && "cast-selector-receiver" === this.Wt[1].key ? (b && lyb(),
            !0) : !1
        }
    }
    ;
    g.k.sR = function() {
        this.Hc.sR()
    }
    ;
    g.k.vl = function() {
        return !1
    }
    ;
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    }
    ;
    g.k.isLoggedIn = function() {
        var a, b;
        return void 0 !== (null == (a = g.eC("PLAYER_CONFIG")) ? void 0 : null == (b = a.args) ? void 0 : b.authuser) ? !0 : !(!g.eC("SESSION_INDEX") && !g.eC("LOGGED_IN"))
    }
    ;
    g.HV("remote", gzb);
}
)(_yt_player);
