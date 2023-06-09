/*! nouislider - 8.5.1 - 2016-04-24 16:00:29 */

! function(a) { "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? module.exports = a() : window.noUiSlider = a() }(function() {
    "use strict";

    function a(a) { return a.filter(function(a) { return this[a] ? !1 : this[a] = !0 }, {}) }

    function b(a, b) { return Math.round(a / b) * b }

    function c(a) {
        var b = a.getBoundingClientRect(),
            c = a.ownerDocument,
            d = c.documentElement,
            e = l();
        return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (e.x = 0), { top: b.top + e.y - d.clientTop, left: b.left + e.x - d.clientLeft }
    }

    function d(a) { return "number" == typeof a && !isNaN(a) && isFinite(a) }

    function e(a, b, c) { i(a, b), setTimeout(function() { j(a, b) }, c) }

    function f(a) { return Math.max(Math.min(a, 100), 0) }

    function g(a) { return Array.isArray(a) ? a : [a] }

    function h(a) { var b = a.split("."); return b.length > 1 ? b[1].length : 0 }

    function i(a, b) { a.classList ? a.classList.add(b) : a.className += " " + b }

    function j(a, b) { a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ") }

    function k(a, b) { return a.classList ? a.classList.contains(b) : new RegExp("\\b" + b + "\\b").test(a.className) }

    function l() {
        var a = void 0 !== window.pageXOffset,
            b = "CSS1Compat" === (document.compatMode || ""),
            c = a ? window.pageXOffset : b ? document.documentElement.scrollLeft : document.body.scrollLeft,
            d = a ? window.pageYOffset : b ? document.documentElement.scrollTop : document.body.scrollTop;
        return { x: c, y: d }
    }

    function m() { return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" } }

    function n(a, b) { return 100 / (b - a) }

    function o(a, b) { return 100 * b / (a[1] - a[0]) }

    function p(a, b) { return o(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]) }

    function q(a, b) { return b * (a[1] - a[0]) / 100 + a[0] }

    function r(a, b) { for (var c = 1; a >= b[c];) c += 1; return c }

    function s(a, b, c) { if (c >= a.slice(-1)[0]) return 100; var d, e, f, g, h = r(c, a); return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + p([d, e], c) / n(f, g) }

    function t(a, b, c) { if (c >= 100) return a.slice(-1)[0]; var d, e, f, g, h = r(c, b); return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], q([d, e], (c - f) * n(f, g)) }

    function u(a, c, d, e) { if (100 === e) return e; var f, g, h = r(e, a); return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : c[h - 1] ? a[h - 1] + b(e - a[h - 1], c[h - 1]) : e }

    function v(a, b, c) {
        var e;
        if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b)) throw new Error("noUiSlider: 'range' contains invalid value.");
        if (e = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !d(e) || !d(b[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
        c.xPct.push(e), c.xVal.push(b[0]), e ? c.xSteps.push(isNaN(b[1]) ? !1 : b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1])
    }

    function w(a, b, c) { return b ? void(c.xSteps[a] = o([c.xVal[a], c.xVal[a + 1]], b) / n(c.xPct[a], c.xPct[a + 1])) : !0 }

    function x(a, b, c, d) { this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.snap = b, this.direction = c; var e, f = []; for (e in a) a.hasOwnProperty(e) && f.push([a[e], e]); for (f.length && "object" == typeof f[0][0] ? f.sort(function(a, b) { return a[0][0] - b[0][0] }) : f.sort(function(a, b) { return a[0] - b[0] }), e = 0; e < f.length; e++) v(f[e][1], f[e][0], this); for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++) w(e, this.xNumSteps[e], this) }

    function y(a, b) {
        if (!d(b)) throw new Error("noUiSlider: 'step' is not numeric.");
        a.singleStep = b
    }

    function z(a, b) {
        if ("object" != typeof b || Array.isArray(b)) throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        if (b.min === b.max) throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
        a.spectrum = new x(b, a.snap, a.dir, a.singleStep)
    }

    function A(a, b) {
        if (b = g(b), !Array.isArray(b) || !b.length || b.length > 2) throw new Error("noUiSlider: 'start' option is incorrect.");
        a.handles = b.length, a.start = b
    }

    function B(a, b) { if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider: 'snap' option must be a boolean.") }

    function C(a, b) { if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider: 'animate' option must be a boolean.") }

    function D(a, b) { if (a.animationDuration = b, "number" != typeof b) throw new Error("noUiSlider: 'animationDuration' option must be a number.") }

    function E(a, b) {
        if ("lower" === b && 1 === a.handles) a.connect = 1;
        else if ("upper" === b && 1 === a.handles) a.connect = 2;
        else if (b === !0 && 2 === a.handles) a.connect = 3;
        else {
            if (b !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            a.connect = 0
        }
    }

    function F(a, b) {
        switch (b) {
            case "horizontal":
                a.ort = 0;
                break;
            case "vertical":
                a.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }

    function G(a, b) { if (!d(b)) throw new Error("noUiSlider: 'margin' option must be numeric."); if (0 !== b && (a.margin = a.spectrum.getMargin(b), !a.margin)) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.") }

    function H(a, b) { if (!d(b)) throw new Error("noUiSlider: 'limit' option must be numeric."); if (a.limit = a.spectrum.getMargin(b), !a.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.") }

    function I(a, b) {
        switch (b) {
            case "ltr":
                a.dir = 0;
                break;
            case "rtl":
                a.dir = 1, a.connect = [0, 2, 1, 3][a.connect];
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }

    function J(a, b) {
        if ("string" != typeof b) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var c = b.indexOf("tap") >= 0,
            d = b.indexOf("drag") >= 0,
            e = b.indexOf("fixed") >= 0,
            f = b.indexOf("snap") >= 0,
            g = b.indexOf("hover") >= 0;
        if (d && !a.connect) throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");
        a.events = { tap: c || f, drag: d, fixed: e, snap: f, hover: g }
    }

    function K(a, b) {
        var c;
        if (b !== !1)
            if (b === !0)
                for (a.tooltips = [], c = 0; c < a.handles; c++) a.tooltips.push(!0);
            else {
                if (a.tooltips = g(b), a.tooltips.length !== a.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                a.tooltips.forEach(function(a) { if ("boolean" != typeof a && ("object" != typeof a || "function" != typeof a.to)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.") })
            }
    }

    function L(a, b) { if (a.format = b, "function" == typeof b.to && "function" == typeof b.from) return !0; throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.") }

    function M(a, b) {
        if (void 0 !== b && "string" != typeof b && b !== !1) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        a.cssPrefix = b
    }

    function N(a, b) { if (void 0 !== b && "object" != typeof b) throw new Error("noUiSlider: 'cssClasses' must be an object."); if ("string" == typeof a.cssPrefix) { a.cssClasses = {}; for (var c in b) b.hasOwnProperty(c) && (a.cssClasses[c] = a.cssPrefix + b[c]) } else a.cssClasses = b }

    function O(a) {
        var b, c = { margin: 0, limit: 0, animate: !0, animationDuration: 300, format: R };
        b = { step: { r: !1, t: y }, start: { r: !0, t: A }, connect: { r: !0, t: E }, direction: { r: !0, t: I }, snap: { r: !1, t: B }, animate: { r: !1, t: C }, animationDuration: { r: !1, t: D }, range: { r: !0, t: z }, orientation: { r: !1, t: F }, margin: { r: !1, t: G }, limit: { r: !1, t: H }, behaviour: { r: !0, t: J }, format: { r: !1, t: L }, tooltips: { r: !1, t: K }, cssPrefix: { r: !1, t: M }, cssClasses: { r: !1, t: N } };
        var d = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", cssPrefix: "noUi-", cssClasses: { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", ltr: "ltr", rtl: "rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", stacking: "stacking", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" } };
        return Object.keys(b).forEach(function(e) {
            if (void 0 === a[e] && void 0 === d[e]) { if (b[e].r) throw new Error("noUiSlider: '" + e + "' is required."); return !0 }
            b[e].t(c, void 0 === a[e] ? d[e] : a[e])
        }), c.pips = a.pips, c.style = c.ort ? "top" : "left", c
    }

    function P(b, d, n) {
        function o(a, b, c) {
            var d = a + b[0],
                e = a + b[1];
            return c ? (0 > d && (e += Math.abs(d)), e > 100 && (d -= e - 100), [f(d), f(e)]) : [d, e]
        }

        function p(a, b) {
            a.preventDefault();
            var c, d, e = 0 === a.type.indexOf("touch"),
                f = 0 === a.type.indexOf("mouse"),
                g = 0 === a.type.indexOf("pointer"),
                h = a;
            return 0 === a.type.indexOf("MSPointer") && (g = !0), e && (c = a.changedTouches[0].pageX, d = a.changedTouches[0].pageY), b = b || l(), (f || g) && (c = a.clientX + b.x, d = a.clientY + b.y), h.pageOffset = b, h.points = [c, d], h.cursor = f || g, h
        }

        function q(a, b) {
            var c = document.createElement("div"),
                e = document.createElement("div"),
                f = [d.cssClasses.handleLower, d.cssClasses.handleUpper];
            return a && f.reverse(), i(e, d.cssClasses.handle), i(e, f[b]), i(c, d.cssClasses.origin), c.appendChild(e), c
        }

        function r(a, b, c) {
            switch (a) {
                case 1:
                    i(b, d.cssClasses.connect), i(c[0], d.cssClasses.background);
                    break;
                case 3:
                    i(c[1], d.cssClasses.background);
                case 2:
                    i(c[0], d.cssClasses.connect);
                case 0:
                    i(b, d.cssClasses.background)
            }
        }

        function s(a, b, c) { var d, e = []; for (d = 0; a > d; d += 1) e.push(c.appendChild(q(b, d))); return e }

        function t(a, b, c) { i(c, d.cssClasses.target), 0 === a ? i(c, d.cssClasses.ltr) : i(c, d.cssClasses.rtl), 0 === b ? i(c, d.cssClasses.horizontal) : i(c, d.cssClasses.vertical); var e = document.createElement("div"); return i(e, d.cssClasses.base), c.appendChild(e), e }

        function u(a, b) { if (!d.tooltips[b]) return !1; var c = document.createElement("div"); return c.className = d.cssClasses.tooltip, a.firstChild.appendChild(c) }

        function v() {
            d.dir && d.tooltips.reverse();
            var a = W.map(u);
            d.dir && (a.reverse(), d.tooltips.reverse()), S("update", function(b, c, e) { a[c] && (a[c].innerHTML = d.tooltips[c] === !0 ? b[c] : d.tooltips[c].to(e[c])) })
        }

        function w(a, b, c) {
            if ("range" === a || "steps" === a) return _.xVal;
            if ("count" === a) {
                var d, e = 100 / (b - 1),
                    f = 0;
                for (b = [];
                    (d = f++ * e) <= 100;) b.push(d);
                a = "positions"
            }
            return "positions" === a ? b.map(function(a) { return _.fromStepping(c ? _.getStep(a) : a) }) : "values" === a ? c ? b.map(function(a) { return _.fromStepping(_.getStep(_.toStepping(a))) }) : b : void 0
        }

        function x(b, c, d) {
            function e(a, b) { return (a + b).toFixed(7) / 1 }
            var f = _.direction,
                g = {},
                h = _.xVal[0],
                i = _.xVal[_.xVal.length - 1],
                j = !1,
                k = !1,
                l = 0;
            return _.direction = 0, d = a(d.slice().sort(function(a, b) { return a - b })), d[0] !== h && (d.unshift(h), j = !0), d[d.length - 1] !== i && (d.push(i), k = !0), d.forEach(function(a, f) {
                var h, i, m, n, o, p, q, r, s, t, u = a,
                    v = d[f + 1];
                if ("steps" === c && (h = _.xNumSteps[f]), h || (h = v - u), u !== !1 && void 0 !== v)
                    for (i = u; v >= i; i = e(i, h)) {
                        for (n = _.toStepping(i), o = n - l, r = o / b, s = Math.round(r), t = o / s, m = 1; s >= m; m += 1) p = l + m * t, g[p.toFixed(5)] = ["x", 0];
                        q = d.indexOf(i) > -1 ? 1 : "steps" === c ? 2 : 0, !f && j && (q = 0), i === v && k || (g[n.toFixed(5)] = [i, q]), l = n
                    }
            }), _.direction = f, g
        }

        function y(a, b, c) {
            function e(a, b) {
                var c = b === d.cssClasses.value,
                    e = c ? m : n,
                    f = c ? k : l;
                return b + " " + e[d.ort] + " " + f[a]
            }

            function f(a, b, c) { return 'class="' + e(c[1], b) + '" style="' + d.style + ": " + a + '%"' }

            function g(a, e) { _.direction && (a = 100 - a), e[1] = e[1] && b ? b(e[0], e[1]) : e[1], j += "<div " + f(a, d.cssClasses.marker, e) + "></div>", e[1] && (j += "<div " + f(a, d.cssClasses.value, e) + ">" + c.to(e[0]) + "</div>") }
            var h = document.createElement("div"),
                j = "",
                k = [d.cssClasses.valueNormal, d.cssClasses.valueLarge, d.cssClasses.valueSub],
                l = [d.cssClasses.markerNormal, d.cssClasses.markerLarge, d.cssClasses.markerSub],
                m = [d.cssClasses.valueHorizontal, d.cssClasses.valueVertical],
                n = [d.cssClasses.markerHorizontal, d.cssClasses.markerVertical];
            return i(h, d.cssClasses.pips), i(h, 0 === d.ort ? d.cssClasses.pipsHorizontal : d.cssClasses.pipsVertical), Object.keys(a).forEach(function(b) { g(b, a[b]) }), h.innerHTML = j, h
        }

        function z(a) {
            var b = a.mode,
                c = a.density || 1,
                d = a.filter || !1,
                e = a.values || !1,
                f = a.stepped || !1,
                g = w(b, e, f),
                h = x(c, b, g),
                i = a.format || { to: Math.round };
            return Z.appendChild(y(h, d, i))
        }

        function A() {
            var a = V.getBoundingClientRect(),
                b = "offset" + ["Width", "Height"][d.ort];
            return 0 === d.ort ? a.width || V[b] : a.height || V[b]
        }

        function B(a, b, c) {
            var e;
            for (e = 0; e < d.handles; e++)
                if (-1 === $[e]) return;
            void 0 !== b && 1 !== d.handles && (b = Math.abs(b - d.dir)), Object.keys(ba).forEach(function(d) {
                var e = d.split(".")[0];
                a === e && ba[d].forEach(function(a) { a.call(X, g(P()), b, g(C(Array.prototype.slice.call(aa))), c || !1, $) })
            })
        }

        function C(a) { return 1 === a.length ? a[0] : d.dir ? a.reverse() : a }

        function D(a, b, c, e) {
            var f = function(b) { return Z.hasAttribute("disabled") ? !1 : k(Z, d.cssClasses.tap) ? !1 : (b = p(b, e.pageOffset), a === Y.start && void 0 !== b.buttons && b.buttons > 1 ? !1 : e.hover && b.buttons ? !1 : (b.calcPoint = b.points[d.ort], void c(b, e))) },
                g = [];
            return a.split(" ").forEach(function(a) { b.addEventListener(a, f, !1), g.push([a, f]) }), g
        }

        function E(a, b) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === a.buttons && 0 !== b.buttonsProperty) return F(a, b);
            var c, d, e = b.handles || W,
                f = !1,
                g = 100 * (a.calcPoint - b.start) / b.baseSize,
                h = e[0] === W[0] ? 0 : 1;
            if (c = o(g, b.positions, e.length > 1), f = L(e[0], c[h], 1 === e.length), e.length > 1) {
                if (f = L(e[1], c[h ? 0 : 1], !1) || f)
                    for (d = 0; d < b.handles.length; d++) B("slide", d)
            } else f && B("slide", h)
        }

        function F(a, b) {
            var c = V.querySelector("." + d.cssClasses.active),
                e = b.handles[0] === W[0] ? 0 : 1;
            null !== c && j(c, d.cssClasses.active), a.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener));
            var f = document.documentElement;
            f.noUiListeners.forEach(function(a) { f.removeEventListener(a[0], a[1]) }), j(Z, d.cssClasses.drag), B("set", e), B("change", e), void 0 !== b.handleNumber && B("end", b.handleNumber)
        }

        function G(a, b) { "mouseout" === a.type && "HTML" === a.target.nodeName && null === a.relatedTarget && F(a, b) }

        function H(a, b) {
            var c = document.documentElement;
            if (1 === b.handles.length) {
                if (b.handles[0].hasAttribute("disabled")) return !1;
                i(b.handles[0].children[0], d.cssClasses.active)
            }
            a.preventDefault(), a.stopPropagation();
            var e = D(Y.move, c, E, { start: a.calcPoint, baseSize: A(), pageOffset: a.pageOffset, handles: b.handles, handleNumber: b.handleNumber, buttonsProperty: a.buttons, positions: [$[0], $[W.length - 1]] }),
                f = D(Y.end, c, F, { handles: b.handles, handleNumber: b.handleNumber }),
                g = D("mouseout", c, G, { handles: b.handles, handleNumber: b.handleNumber });
            if (c.noUiListeners = e.concat(f, g), a.cursor) {
                document.body.style.cursor = getComputedStyle(a.target).cursor, W.length > 1 && i(Z, d.cssClasses.drag);
                var h = function() { return !1 };
                document.body.noUiListener = h, document.body.addEventListener("selectstart", h, !1)
            }
            void 0 !== b.handleNumber && B("start", b.handleNumber)
        }

        function I(a) {
            var b, f, g = a.calcPoint,
                h = 0;
            return a.stopPropagation(), W.forEach(function(a) { h += c(a)[d.style] }), b = h / 2 > g || 1 === W.length ? 0 : 1, W[b].hasAttribute("disabled") && (b = b ? 0 : 1), g -= c(V)[d.style], f = 100 * g / A(), d.events.snap || e(Z, d.cssClasses.tap, d.animationDuration), W[b].hasAttribute("disabled") ? !1 : (L(W[b], f), B("slide", b, !0), B("set", b, !0), B("change", b, !0), void(d.events.snap && H(a, { handles: [W[b]] })))
        }

        function J(a) {
            var b = a.calcPoint - c(V)[d.style],
                e = _.getStep(100 * b / A()),
                f = _.fromStepping(e);
            Object.keys(ba).forEach(function(a) { "hover" === a.split(".")[0] && ba[a].forEach(function(a) { a.call(X, f) }) })
        }

        function K(a) {
            if (a.fixed || W.forEach(function(a, b) { D(Y.start, a.children[0], H, { handles: [a], handleNumber: b }) }), a.tap && D(Y.start, V, I, { handles: W }), a.hover && D(Y.move, V, J, { hover: !0 }), a.drag) {
                var b = [V.querySelector("." + d.cssClasses.connect)];
                i(b[0], d.cssClasses.draggable), a.fixed && b.push(W[b[0] === W[0] ? 1 : 0].children[0]), b.forEach(function(a) { D(Y.start, a, H, { handles: W }) })
            }
        }

        function L(a, b, c) {
            var e = a !== W[0] ? 1 : 0,
                g = $[0] + d.margin,
                h = $[1] - d.margin,
                k = $[0] + d.limit,
                l = $[1] - d.limit;
            return W.length > 1 && (b = e ? Math.max(b, g) : Math.min(b, h)), c !== !1 && d.limit && W.length > 1 && (b = e ? Math.min(b, k) : Math.max(b, l)), b = _.getStep(b), b = f(b), b === $[e] ? !1 : (window.requestAnimationFrame ? window.requestAnimationFrame(function() { a.style[d.style] = b + "%" }) : a.style[d.style] = b + "%", a.previousSibling || (j(a, d.cssClasses.stacking), b > 50 && i(a, d.cssClasses.stacking)), $[e] = b, aa[e] = _.fromStepping(b), B("update", e), !0)
        }

        function M(a, b) { var c, e, f; for (d.limit && (a += 1), c = 0; a > c; c += 1) e = c % 2, f = b[e], null !== f && f !== !1 && ("number" == typeof f && (f = String(f)), f = d.format.from(f), (f === !1 || isNaN(f) || L(W[e], _.toStepping(f), c === 3 - d.dir) === !1) && B("update", e)) }

        function N(a, b) { var c, f, h = g(a); for (b = void 0 === b ? !0 : !!b, d.dir && d.handles > 1 && h.reverse(), d.animate && -1 !== $[0] && e(Z, d.cssClasses.tap, d.animationDuration), c = W.length > 1 ? 3 : 1, 1 === h.length && (c = 1), M(c, h), f = 0; f < W.length; f++) null !== h[f] && b && B("set", f) }

        function P() { var a, b = []; for (a = 0; a < d.handles; a += 1) b[a] = d.format.to(aa[a]); return C(b) }

        function Q() {
            for (var a in d.cssClasses) d.cssClasses.hasOwnProperty(a) && j(Z, d.cssClasses[a]);
            for (; Z.firstChild;) Z.removeChild(Z.firstChild);
            delete Z.noUiSlider
        }

        function R() {
            var a = $.map(function(a, b) {
                var c = _.getApplicableStep(a),
                    d = h(String(c[2])),
                    e = aa[b],
                    f = 100 === a ? null : c[2],
                    g = Number((e - c[2]).toFixed(d)),
                    i = 0 === a ? null : g >= c[1] ? c[2] : c[0] || !1;
                return [i, f]
            });
            return C(a)
        }

        function S(a, b) { ba[a] = ba[a] || [], ba[a].push(b), "update" === a.split(".")[0] && W.forEach(function(a, b) { B("update", b) }) }

        function T(a) {
            var b = a && a.split(".")[0],
                c = b && a.substring(b.length);
            Object.keys(ba).forEach(function(a) {
                var d = a.split(".")[0],
                    e = a.substring(d.length);
                b && b !== d || c && c !== e || delete ba[a]
            })
        }

        function U(a, b) {
            var c = P(),
                e = O({ start: [0, 0], margin: a.margin, limit: a.limit, step: void 0 === a.step ? d.singleStep : a.step, range: a.range, animate: a.animate, snap: void 0 === a.snap ? d.snap : a.snap });
            ["margin", "limit", "range", "animate"].forEach(function(b) { void 0 !== a[b] && (d[b] = a[b]) }), e.spectrum.direction = _.direction, _ = e.spectrum, $ = [-1, -1], N(a.start || c, b)
        }
        var V, W, X, Y = m(),
            Z = b,
            $ = [-1, -1],
            _ = d.spectrum,
            aa = [],
            ba = {};
        if (Z.noUiSlider) throw new Error("Slider was already initialized.");
        return V = t(d.dir, d.ort, Z), W = s(d.handles, d.dir, V), r(d.connect, Z, W), d.pips && z(d.pips), d.tooltips && v(), X = { destroy: Q, steps: R, on: S, off: T, get: P, set: N, updateOptions: U, options: n, target: Z, pips: z }, K(d.events), X
    }

    function Q(a, b) {
        if (!a.nodeName) throw new Error("noUiSlider.create requires a single element.");
        var c = O(b, a),
            d = P(a, c, b);
        return d.set(c.start), a.noUiSlider = d, d
    }
    x.prototype.getMargin = function(a) { return 2 === this.xPct.length ? o(this.xVal, a) : !1 }, x.prototype.toStepping = function(a) { return a = s(this.xVal, this.xPct, a), this.direction && (a = 100 - a), a }, x.prototype.fromStepping = function(a) { return this.direction && (a = 100 - a), t(this.xVal, this.xPct, a) }, x.prototype.getStep = function(a) { return this.direction && (a = 100 - a), a = u(this.xPct, this.xSteps, this.snap, a), this.direction && (a = 100 - a), a }, x.prototype.getApplicableStep = function(a) {
        var b = r(a, this.xPct),
            c = 100 === a ? 2 : 1;
        return [this.xNumSteps[b - 2], this.xVal[b - c], this.xNumSteps[b - c]]
    }, x.prototype.convert = function(a) { return this.getStep(this.toStepping(a)) };
    var R = { to: function(a) { return void 0 !== a && a.toFixed(2) }, from: Number };
    return { create: Q }
});