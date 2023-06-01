"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [839], {
        543: function(t, e, i) {
            i.d(e, {
                useDrag: function() {
                    return to
                },
                useGesture: function() {
                    return ta
                }
            });
            let s = {
                toVector: (t, e) => (void 0 === t && (t = e), Array.isArray(t) ? t : [t, t]),
                add: (t, e) => [t[0] + e[0], t[1] + e[1]],
                sub: (t, e) => [t[0] - e[0], t[1] - e[1]],
                addTo(t, e) {
                    t[0] += e[0], t[1] += e[1]
                },
                subTo(t, e) {
                    t[0] -= e[0], t[1] -= e[1]
                }
            };

            function n(t, e, i) {
                return 0 === e || Math.abs(e) === 1 / 0 ? Math.pow(t, 5 * i) : t * e * i / (e + i * t)
            }

            function r(t, e, i, s = .15) {
                return 0 === s ? Math.max(e, Math.min(t, i)) : t < e ? -n(e - t, i - e, s) + e : t > i ? +n(t - i, i - e, s) + i : t
            }

            function o(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function a(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), i.push.apply(i, s)
                }
                return i
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(i), !0).forEach(function(e) {
                        o(t, e, i[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    })
                }
                return t
            }
            let h = {
                pointer: {
                    start: "down",
                    change: "move",
                    end: "up"
                },
                mouse: {
                    start: "down",
                    change: "move",
                    end: "up"
                },
                touch: {
                    start: "start",
                    change: "move",
                    end: "end"
                },
                gesture: {
                    start: "start",
                    change: "change",
                    end: "end"
                }
            };

            function l(t) {
                return t ? t[0].toUpperCase() + t.slice(1) : ""
            }
            let u = ["enter", "leave"],
                d = ["gotpointercapture", "lostpointercapture"];

            function p(t) {
                return "touches" in t
            }

            function f(t) {
                return p(t) ? "touch" : "pointerType" in t ? t.pointerType : "mouse"
            }

            function v(t) {
                return p(t) ? ("touchend" === t.type || "touchcancel" === t.type ? t.changedTouches : t.targetTouches)[0] : t
            }

            function m(t, e) {
                let i = e.clientX - t.clientX,
                    s = e.clientY - t.clientY,
                    n = (e.clientX + t.clientX) / 2,
                    r = (e.clientY + t.clientY) / 2;
                return {
                    angle: -(180 * Math.atan2(i, s)) / Math.PI,
                    distance: Math.hypot(i, s),
                    origin: [n, r]
                }
            }

            function g(t, e) {
                let [i, s] = Array.from(t.touches).filter(t => e.includes(t.identifier));
                return m(i, s)
            }

            function _(t) {
                let e = v(t);
                return p(t) ? e.identifier : e.pointerId
            }

            function b(t) {
                let e = v(t);
                return [e.clientX, e.clientY]
            }

            function y(t) {
                let {
                    deltaX: e,
                    deltaY: i,
                    deltaMode: s
                } = t;
                return 1 === s ? (e *= 40, i *= 40) : 2 === s && (e *= 800, i *= 800), [e, i]
            }

            function w(t, ...e) {
                return "function" == typeof t ? t(...e) : t
            }

            function S() {}

            function T(t, e) {
                return Object.assign({}, e, t || {})
            }
            class k {
                constructor(t, e, i) {
                    this.ctrl = t, this.args = e, this.key = i, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
                }
                get state() {
                    return this.ctrl.state[this.key]
                }
                set state(t) {
                    this.ctrl.state[this.key] = t
                }
                get shared() {
                    return this.ctrl.state.shared
                }
                get eventStore() {
                    return this.ctrl.gestureEventStores[this.key]
                }
                get timeoutStore() {
                    return this.ctrl.gestureTimeoutStores[this.key]
                }
                get config() {
                    return this.ctrl.config[this.key]
                }
                get sharedConfig() {
                    return this.ctrl.config.shared
                }
                get handler() {
                    return this.ctrl.handlers[this.key]
                }
                reset() {
                    let {
                        state: t,
                        shared: e,
                        ingKey: i,
                        args: s
                    } = this;
                    e[i] = t._active = t.active = t._blocked = t._force = !1, t._step = [!1, !1], t.intentional = !1, t._movement = [0, 0], t._distance = [0, 0], t._direction = [0, 0], t._delta = [0, 0], t._bounds = [
                        [-1 / 0, 1 / 0],
                        [-1 / 0, 1 / 0]
                    ], t.args = s, t.axis = void 0, t.memo = void 0, t.elapsedTime = 0, t.direction = [0, 0], t.distance = [0, 0], t.overflow = [0, 0], t._movementBound = [!1, !1], t.velocity = [0, 0], t.movement = [0, 0], t.delta = [0, 0], t.timeStamp = 0
                }
                start(t) {
                    let e = this.state,
                        i = this.config;
                    e._active || (this.reset(), this.computeInitial(), e._active = !0, e.target = t.target, e.currentTarget = t.currentTarget, e.lastOffset = i.from ? w(i.from, e) : e.offset, e.offset = e.lastOffset), e.startTime = e.timeStamp = t.timeStamp
                }
                computeValues(t) {
                    let e = this.state;
                    e._values = t, e.values = this.config.transform(t)
                }
                computeInitial() {
                    let t = this.state;
                    t._initial = t._values, t.initial = t.values
                }
                compute(t) {
                    let {
                        state: e,
                        config: i,
                        shared: n
                    } = this;
                    e.args = this.args;
                    let o = 0;
                    if (t && (e.event = t, i.preventDefault && t.cancelable && e.event.preventDefault(), e.type = t.type, n.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, n.locked = !!document.pointerLockElement, Object.assign(n, function(t) {
                            let e = {};
                            if ("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t) {
                                let {
                                    shiftKey: i,
                                    altKey: s,
                                    metaKey: n,
                                    ctrlKey: r
                                } = t;
                                Object.assign(e, {
                                    shiftKey: i,
                                    altKey: s,
                                    metaKey: n,
                                    ctrlKey: r
                                })
                            }
                            return e
                        }(t)), n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0, o = t.timeStamp - e.timeStamp, e.timeStamp = t.timeStamp, e.elapsedTime = e.timeStamp - e.startTime), e._active) {
                        let a = e._delta.map(Math.abs);
                        s.addTo(e._distance, a)
                    }
                    this.axisIntent && this.axisIntent(t);
                    let [c, h] = e._movement, [l, u] = i.threshold, {
                        _step: d,
                        values: p
                    } = e;
                    if (i.hasCustomTransform ? (!1 === d[0] && (d[0] = Math.abs(c) >= l && p[0]), !1 === d[1] && (d[1] = Math.abs(h) >= u && p[1])) : (!1 === d[0] && (d[0] = Math.abs(c) >= l && Math.sign(c) * l), !1 === d[1] && (d[1] = Math.abs(h) >= u && Math.sign(h) * u)), e.intentional = !1 !== d[0] || !1 !== d[1], !e.intentional) return;
                    let f = [0, 0];
                    if (i.hasCustomTransform) {
                        let [v, m] = p;
                        f[0] = !1 !== d[0] ? v - d[0] : 0, f[1] = !1 !== d[1] ? m - d[1] : 0
                    } else f[0] = !1 !== d[0] ? c - d[0] : 0, f[1] = !1 !== d[1] ? h - d[1] : 0;
                    this.restrictToAxis && !e._blocked && this.restrictToAxis(f);
                    let g = e.offset,
                        _ = e._active && !e._blocked || e.active;
                    _ && (e.first = e._active && !e.active, e.last = !e._active && e.active, e.active = n[this.ingKey] = e._active, t && (e.first && ("bounds" in i && (e._bounds = w(i.bounds, e)), this.setup && this.setup()), e.movement = f, this.computeOffset()));
                    let [b, y] = e.offset, [
                        [S, T],
                        [k, x]
                    ] = e._bounds;
                    e.overflow = [b < S ? -1 : b > T ? 1 : 0, y < k ? -1 : y > x ? 1 : 0], e._movementBound[0] = !!e.overflow[0] && (!1 === e._movementBound[0] ? e._movement[0] : e._movementBound[0]), e._movementBound[1] = !!e.overflow[1] && (!1 === e._movementBound[1] ? e._movement[1] : e._movementBound[1]);
                    let E = e._active && i.rubberband || [0, 0];
                    if (e.offset = function(t, [e, i], [s, n]) {
                            let [
                                [o, a],
                                [c, h]
                            ] = t;
                            return [r(e, o, a, s), r(i, c, h, n)]
                        }(e._bounds, e.offset, E), e.delta = s.sub(e.offset, g), this.computeMovement(), _ && (!e.last || o > 32)) {
                        e.delta = s.sub(e.offset, g);
                        let O = e.delta.map(Math.abs);
                        s.addTo(e.distance, O), e.direction = e.delta.map(Math.sign), e._direction = e._delta.map(Math.sign), !e.first && o > 0 && (e.velocity = [O[0] / o, O[1] / o])
                    }
                }
                emit() {
                    let t = this.state,
                        e = this.shared,
                        i = this.config;
                    if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !i.triggerAllEvents) return;
                    let s = this.handler(c(c(c({}, e), t), {}, {
                        [this.aliasKey]: t.values
                    }));
                    void 0 !== s && (t.memo = s)
                }
                clean() {
                    this.eventStore.clean(), this.timeoutStore.clean()
                }
            }
            class x extends k {
                constructor(...t) {
                    super(...t), o(this, "aliasKey", "xy")
                }
                reset() {
                    super.reset(), this.state.axis = void 0
                }
                init() {
                    this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
                }
                computeOffset() {
                    this.state.offset = s.add(this.state.lastOffset, this.state.movement)
                }
                computeMovement() {
                    this.state.movement = s.sub(this.state.offset, this.state.lastOffset)
                }
                axisIntent(t) {
                    let e = this.state,
                        i = this.config;
                    if (!e.axis && t) {
                        let s = "object" == typeof i.axisThreshold ? i.axisThreshold[f(t)] : i.axisThreshold;
                        e.axis = function([t, e], i) {
                            let s = Math.abs(t),
                                n = Math.abs(e);
                            return s > n && s > i ? "x" : n > s && n > i ? "y" : void 0
                        }(e._movement, s)
                    }
                    e._blocked = (i.lockDirection || !!i.axis) && !e.axis || !!i.axis && i.axis !== e.axis
                }
                restrictToAxis(t) {
                    if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
                        case "x":
                            t[1] = 0;
                            break;
                        case "y":
                            t[0] = 0
                    }
                }
            }
            let E = t => t,
                O = {
                    enabled: (t = !0) => t,
                    eventOptions: (t, e, i) => c(c({}, i.shared.eventOptions), t),
                    preventDefault: (t = !1) => t,
                    triggerAllEvents: (t = !1) => t,
                    rubberband(t = 0) {
                        switch (t) {
                            case !0:
                                return [.15, .15];
                            case !1:
                                return [0, 0];
                            default:
                                return s.toVector(t)
                        }
                    },
                    from: t => "function" == typeof t ? t : null != t ? s.toVector(t) : void 0,
                    transform(t, e, i) {
                        let s = t || i.shared.transform;
                        return this.hasCustomTransform = !!s, s || E
                    },
                    threshold: t => s.toVector(t, 0)
                },
                I = c(c({}, O), {}, {
                    axis(t, e, {
                        axis: i
                    }) {
                        if (this.lockDirection = "lock" === i, !this.lockDirection) return i
                    },
                    axisThreshold: (t = 0) => t,
                    bounds(t = {}) {
                        if ("function" == typeof t) return e => I.bounds(t(e));
                        if ("current" in t) return () => t.current;
                        if ("function" == typeof HTMLElement && t instanceof HTMLElement) return t;
                        let {
                            left: e = -1 / 0,
                            right: i = 1 / 0,
                            top: s = -1 / 0,
                            bottom: n = 1 / 0
                        } = t;
                        return [
                            [e, i],
                            [s, n]
                        ]
                    }
                }),
                M = {
                    ArrowRight: (t = 1) => [10 * t, 0],
                    ArrowLeft: (t = 1) => [-10 * t, 0],
                    ArrowUp: (t = 1) => [0, -10 * t],
                    ArrowDown: (t = 1) => [0, 10 * t]
                },
                A = "undefined" != typeof window && window.document && window.document.createElement;

            function C() {
                return A && "ontouchstart" in window || A && window.navigator.maxTouchPoints > 1
            }
            let D = {
                    isBrowser: A,
                    gesture: function() {
                        try {
                            return "constructor" in GestureEvent
                        } catch (t) {
                            return !1
                        }
                    }(),
                    touch: C(),
                    touchscreen: C(),
                    pointer: A && "onpointerdown" in window,
                    pointerLock: A && "exitPointerLock" in window.document
                },
                P = {
                    mouse: 0,
                    touch: 0,
                    pen: 8
                },
                j = c(c({}, I), {}, {
                    device(t, e, {
                        pointer: {
                            touch: i = !1,
                            lock: s = !1,
                            mouse: n = !1
                        } = {}
                    }) {
                        return (this.pointerLock = s && D.pointerLock, D.touch && i) ? "touch" : this.pointerLock ? "mouse" : D.pointer && !n ? "pointer" : D.touch ? "touch" : "mouse"
                    },
                    preventScrollAxis(t, e, {
                        preventScroll: i
                    }) {
                        if (this.preventScrollDelay = "number" == typeof i ? i : i || void 0 === i && t ? 250 : void 0, D.touchscreen && !1 !== i) return t || (void 0 !== i ? "y" : void 0)
                    },
                    pointerCapture(t, e, {
                        pointer: {
                            capture: i = !0,
                            buttons: s = 1,
                            keys: n = !0
                        } = {}
                    }) {
                        return this.pointerButtons = s, this.keys = n, !this.pointerLock && "pointer" === this.device && i
                    },
                    threshold(t, e, {
                        filterTaps: i = !1,
                        tapsThreshold: n = 3,
                        axis: r
                    }) {
                        let o = s.toVector(t, i ? n : r ? 1 : 0);
                        return this.filterTaps = i, this.tapsThreshold = n, o
                    },
                    swipe({
                        velocity: t = .5,
                        distance: e = 50,
                        duration: i = 250
                    } = {}) {
                        return {
                            velocity: this.transform(s.toVector(t)),
                            distance: this.transform(s.toVector(e)),
                            duration: i
                        }
                    },
                    delay(t = 0) {
                        switch (t) {
                            case !0:
                                return 180;
                            case !1:
                                return 0;
                            default:
                                return t
                        }
                    },
                    axisThreshold: t => t ? c(c({}, P), t) : P
                });

            function K(t) {
                let [e, i] = t.overflow, [s, n] = t._delta, [r, o] = t._direction;
                (e < 0 && s > 0 && r < 0 || e > 0 && s < 0 && r > 0) && (t._movement[0] = t._movementBound[0]), (i < 0 && n > 0 && o < 0 || i > 0 && n < 0 && o > 0) && (t._movement[1] = t._movementBound[1])
            }
            let V = c(c({}, O), {}, {
                    device(t, e, {
                        shared: i,
                        pointer: {
                            touch: s = !1
                        } = {}
                    }) {
                        if (i.target && !D.touch && D.gesture) return "gesture";
                        if (D.touch && s) return "touch";
                        if (D.touchscreen) {
                            if (D.pointer) return "pointer";
                            if (D.touch) return "touch"
                        }
                    },
                    bounds(t, e, {
                        scaleBounds: i = {},
                        angleBounds: s = {}
                    }) {
                        let n = t => {
                                let e = T(w(i, t), {
                                    min: -1 / 0,
                                    max: 1 / 0
                                });
                                return [e.min, e.max]
                            },
                            r = t => {
                                let e = T(w(s, t), {
                                    min: -1 / 0,
                                    max: 1 / 0
                                });
                                return [e.min, e.max]
                            };
                        return "function" != typeof i && "function" != typeof s ? [n(), r()] : t => [n(t), r(t)]
                    },
                    threshold(t, e, i) {
                        this.lockDirection = "lock" === i.axis;
                        let n = s.toVector(t, this.lockDirection ? [.1, 3] : 0);
                        return n
                    },
                    modifierKey: t => void 0 === t ? "ctrlKey" : t,
                    pinchOnWheel: (t = !0) => t
                }),
                Z = c(c({}, I), {}, {
                    mouseOnly: (t = !0) => t
                }),
                L = c(c({}, I), {}, {
                    mouseOnly: (t = !0) => t
                }),
                B = new Map,
                U = new Map;

            function H(t) {
                B.set(t.key, t.engine), U.set(t.key, t.resolver)
            }
            let X = {
                    key: "drag",
                    engine: class extends x {
                        constructor(...t) {
                            super(...t), o(this, "ingKey", "dragging")
                        }
                        reset() {
                            super.reset();
                            let t = this.state;
                            t._pointerId = void 0, t._pointerActive = !1, t._keyboardActive = !1, t._preventScroll = !1, t._delayed = !1, t.swipe = [0, 0], t.tap = !1, t.canceled = !1, t.cancel = this.cancel.bind(this)
                        }
                        setup() {
                            let t = this.state;
                            if (t._bounds instanceof HTMLElement) {
                                let e = t._bounds.getBoundingClientRect(),
                                    i = t.currentTarget.getBoundingClientRect(),
                                    s = {
                                        left: e.left - i.left + t.offset[0],
                                        right: e.right - i.right + t.offset[0],
                                        top: e.top - i.top + t.offset[1],
                                        bottom: e.bottom - i.bottom + t.offset[1]
                                    };
                                t._bounds = I.bounds(s)
                            }
                        }
                        cancel() {
                            let t = this.state;
                            t.canceled || (t.canceled = !0, t._active = !1, setTimeout(() => {
                                this.compute(), this.emit()
                            }, 0))
                        }
                        setActive() {
                            this.state._active = this.state._pointerActive || this.state._keyboardActive
                        }
                        clean() {
                            this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
                        }
                        pointerDown(t) {
                            let e = this.config,
                                i = this.state;
                            if (null != t.buttons && (Array.isArray(e.pointerButtons) ? !e.pointerButtons.includes(t.buttons) : -1 !== e.pointerButtons && e.pointerButtons !== t.buttons)) return;
                            let s = this.ctrl.setEventIds(t);
                            e.pointerCapture && t.target.setPointerCapture(t.pointerId), s && s.size > 1 && i._pointerActive || (this.start(t), this.setupPointer(t), i._pointerId = _(t), i._pointerActive = !0, this.computeValues(b(t)), this.computeInitial(), e.preventScrollAxis && "mouse" !== f(t) ? (i._active = !1, this.setupScrollPrevention(t)) : e.delay > 0 ? (this.setupDelayTrigger(t), e.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t))
                        }
                        startPointerDrag(t) {
                            let e = this.state;
                            e._active = !0, e._preventScroll = !0, e._delayed = !1, this.compute(t), this.emit()
                        }
                        pointerMove(t) {
                            let e = this.state,
                                i = this.config;
                            if (!e._pointerActive || e.type === t.type && t.timeStamp === e.timeStamp) return;
                            let n = _(t);
                            if (void 0 !== e._pointerId && n !== e._pointerId) return;
                            let r = b(t);
                            if (document.pointerLockElement === t.target ? e._delta = [t.movementX, t.movementY] : (e._delta = s.sub(r, e._values), this.computeValues(r)), s.addTo(e._movement, e._delta), this.compute(t), e._delayed && e.intentional) {
                                this.timeoutStore.remove("dragDelay"), e.active = !1, this.startPointerDrag(t);
                                return
                            }
                            if (i.preventScrollAxis && !e._preventScroll) {
                                if (!e.axis) return;
                                if (e.axis === i.preventScrollAxis || "xy" === i.preventScrollAxis) {
                                    e._active = !1, this.clean();
                                    return
                                }
                                this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(t);
                                return
                            }
                            this.emit()
                        }
                        pointerUp(t) {
                            this.ctrl.setEventIds(t);
                            try {
                                this.config.pointerCapture && t.target.hasPointerCapture(t.pointerId) && t.target.releasePointerCapture(t.pointerId)
                            } catch (e) {}
                            let i = this.state,
                                s = this.config;
                            if (!i._active || !i._pointerActive) return;
                            let n = _(t);
                            if (void 0 !== i._pointerId && n !== i._pointerId) return;
                            this.state._pointerActive = !1, this.setActive(), this.compute(t);
                            let [r, o] = i._distance;
                            if (i.tap = r <= s.tapsThreshold && o <= s.tapsThreshold, i.tap && s.filterTaps) i._force = !0;
                            else {
                                let [a, c] = i.direction, [h, l] = i.velocity, [u, d] = i.movement, [p, f] = s.swipe.velocity, [v, m] = s.swipe.distance, g = s.swipe.duration;
                                i.elapsedTime < g && (Math.abs(h) > p && Math.abs(u) > v && (i.swipe[0] = a), Math.abs(l) > f && Math.abs(d) > m && (i.swipe[1] = c))
                            }
                            this.emit()
                        }
                        pointerClick(t) {
                            !this.state.tap && t.detail > 0 && (t.preventDefault(), t.stopPropagation())
                        }
                        setupPointer(t) {
                            let e = this.config,
                                i = e.device;
                            e.pointerLock && t.currentTarget.requestPointerLock(), e.pointerCapture || (this.eventStore.add(this.sharedConfig.window, i, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, i, "cancel", this.pointerUp.bind(this)))
                        }
                        pointerClean() {
                            this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
                        }
                        preventScroll(t) {
                            this.state._preventScroll && t.cancelable && t.preventDefault()
                        }
                        setupScrollPrevention(t) {
                            this.state._preventScroll = !1, "persist" in t && "function" == typeof t.persist && t.persist();
                            let e = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                                passive: !1
                            });
                            this.eventStore.add(this.sharedConfig.window, "touch", "end", e), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", e), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, t)
                        }
                        setupDelayTrigger(t) {
                            this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
                                this.state._step = [0, 0], this.startPointerDrag(t)
                            }, this.config.delay)
                        }
                        keyDown(t) {
                            let e = M[t.key];
                            if (e) {
                                let i = this.state,
                                    n = t.shiftKey ? 10 : t.altKey ? .1 : 1;
                                this.start(t), i._delta = e(n), i._keyboardActive = !0, s.addTo(i._movement, i._delta), this.compute(t), this.emit()
                            }
                        }
                        keyUp(t) {
                            t.key in M && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit())
                        }
                        bind(t) {
                            let e = this.config.device;
                            t(e, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(e, "change", this.pointerMove.bind(this)), t(e, "end", this.pointerUp.bind(this)), t(e, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
                                capture: !0,
                                passive: !1
                            })
                        }
                    },
                    resolver: j
                },
                Y = {
                    key: "hover",
                    engine: class extends x {
                        constructor(...t) {
                            super(...t), o(this, "ingKey", "hovering")
                        }
                        enter(t) {
                            this.config.mouseOnly && "mouse" !== t.pointerType || (this.start(t), this.computeValues(b(t)), this.compute(t), this.emit())
                        }
                        leave(t) {
                            if (this.config.mouseOnly && "mouse" !== t.pointerType) return;
                            let e = this.state;
                            if (!e._active) return;
                            e._active = !1;
                            let i = b(t);
                            e._movement = e._delta = s.sub(i, e._values), this.computeValues(i), this.compute(t), e.delta = e.movement, this.emit()
                        }
                        bind(t) {
                            t("pointer", "enter", this.enter.bind(this)), t("pointer", "leave", this.leave.bind(this))
                        }
                    },
                    resolver: L
                },
                z = {
                    key: "move",
                    engine: class extends x {
                        constructor(...t) {
                            super(...t), o(this, "ingKey", "moving")
                        }
                        move(t) {
                            this.config.mouseOnly && "mouse" !== t.pointerType || (this.state._active ? this.moveChange(t) : this.moveStart(t), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
                        }
                        moveStart(t) {
                            this.start(t), this.computeValues(b(t)), this.compute(t), this.computeInitial(), this.emit()
                        }
                        moveChange(t) {
                            if (!this.state._active) return;
                            let e = b(t),
                                i = this.state;
                            i._delta = s.sub(e, i._values), s.addTo(i._movement, i._delta), this.computeValues(e), this.compute(t), this.emit()
                        }
                        moveEnd(t) {
                            this.state._active && (this.state._active = !1, this.compute(t), this.emit())
                        }
                        bind(t) {
                            t("pointer", "change", this.move.bind(this)), t("pointer", "leave", this.moveEnd.bind(this))
                        }
                    },
                    resolver: Z
                },
                W = {
                    key: "pinch",
                    engine: class extends k {
                        constructor(...t) {
                            super(...t), o(this, "ingKey", "pinching"), o(this, "aliasKey", "da")
                        }
                        init() {
                            this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = new Map
                        }
                        reset() {
                            super.reset();
                            let t = this.state;
                            t._touchIds = [], t.canceled = !1, t.cancel = this.cancel.bind(this), t.turns = 0
                        }
                        computeOffset() {
                            let {
                                type: t,
                                movement: e,
                                lastOffset: i
                            } = this.state;
                            "wheel" === t ? this.state.offset = s.add(e, i) : this.state.offset = [(1 + e[0]) * i[0], e[1] + i[1]]
                        }
                        computeMovement() {
                            let {
                                offset: t,
                                lastOffset: e
                            } = this.state;
                            this.state.movement = [t[0] / e[0], t[1] - e[1]]
                        }
                        axisIntent() {
                            let t = this.state,
                                [e, i] = t._movement;
                            if (!t.axis) {
                                let s = 30 * Math.abs(e) - Math.abs(i);
                                s < 0 ? t.axis = "angle" : s > 0 && (t.axis = "scale")
                            }
                        }
                        restrictToAxis(t) {
                            this.config.lockDirection && ("scale" === this.state.axis ? t[1] = 0 : "angle" === this.state.axis && (t[0] = 0))
                        }
                        cancel() {
                            let t = this.state;
                            t.canceled || setTimeout(() => {
                                t.canceled = !0, t._active = !1, this.compute(), this.emit()
                            }, 0)
                        }
                        touchStart(t) {
                            this.ctrl.setEventIds(t);
                            let e = this.state,
                                i = this.ctrl.touchIds;
                            if (e._active && e._touchIds.every(t => i.has(t)) || i.size < 2) return;
                            this.start(t), e._touchIds = Array.from(i).slice(0, 2);
                            let s = g(t, e._touchIds);
                            this.pinchStart(t, s)
                        }
                        pointerStart(t) {
                            if (null != t.buttons && t.buttons % 2 != 1) return;
                            this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
                            let e = this.state,
                                i = e._pointerEvents,
                                s = this.ctrl.pointerIds;
                            if (e._active && Array.from(i.keys()).every(t => s.has(t)) || (i.size < 2 && i.set(t.pointerId, t), e._pointerEvents.size < 2)) return;
                            this.start(t);
                            let n = m(...Array.from(i.values()));
                            this.pinchStart(t, n)
                        }
                        pinchStart(t, e) {
                            let i = this.state;
                            i.origin = e.origin, this.computeValues([e.distance, e.angle]), this.computeInitial(), this.compute(t), this.emit()
                        }
                        touchMove(t) {
                            if (!this.state._active) return;
                            let e = g(t, this.state._touchIds);
                            this.pinchMove(t, e)
                        }
                        pointerMove(t) {
                            let e = this.state._pointerEvents;
                            if (e.has(t.pointerId) && e.set(t.pointerId, t), !this.state._active) return;
                            let i = m(...Array.from(e.values()));
                            this.pinchMove(t, i)
                        }
                        pinchMove(t, e) {
                            let i = this.state,
                                s = i._values[1],
                                n = e.angle - s,
                                r = 0;
                            Math.abs(n) > 270 && (r += Math.sign(n)), this.computeValues([e.distance, e.angle - 360 * r]), i.origin = e.origin, i.turns = r, i._movement = [i._values[0] / i._initial[0] - 1, i._values[1] - i._initial[1]], this.compute(t), this.emit()
                        }
                        touchEnd(t) {
                            this.ctrl.setEventIds(t), this.state._active && this.state._touchIds.some(t => !this.ctrl.touchIds.has(t)) && (this.state._active = !1, this.compute(t), this.emit())
                        }
                        pointerEnd(t) {
                            let e = this.state;
                            this.ctrl.setEventIds(t);
                            try {
                                t.target.releasePointerCapture(t.pointerId)
                            } catch (i) {}
                            e._pointerEvents.has(t.pointerId) && e._pointerEvents.delete(t.pointerId), e._active && e._pointerEvents.size < 2 && (e._active = !1, this.compute(t), this.emit())
                        }
                        gestureStart(t) {
                            t.cancelable && t.preventDefault();
                            let e = this.state;
                            e._active || (this.start(t), this.computeValues([t.scale, t.rotation]), e.origin = [t.clientX, t.clientY], this.compute(t), this.emit())
                        }
                        gestureMove(t) {
                            if (t.cancelable && t.preventDefault(), !this.state._active) return;
                            let e = this.state;
                            this.computeValues([t.scale, t.rotation]), e.origin = [t.clientX, t.clientY];
                            let i = e._movement;
                            e._movement = [t.scale - 1, t.rotation], e._delta = s.sub(e._movement, i), this.compute(t), this.emit()
                        }
                        gestureEnd(t) {
                            this.state._active && (this.state._active = !1, this.compute(t), this.emit())
                        }
                        wheel(t) {
                            let e = this.config.modifierKey;
                            (!e || t[e]) && (this.state._active ? this.wheelChange(t) : this.wheelStart(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)))
                        }
                        wheelStart(t) {
                            this.start(t), this.wheelChange(t)
                        }
                        wheelChange(t) {
                            "uv" in t || !t.cancelable || t.preventDefault();
                            let e = this.state;
                            e._delta = [-y(t)[1] / 100 * e.offset[0], 0], s.addTo(e._movement, e._delta), K(e), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit()
                        }
                        wheelEnd() {
                            this.state._active && (this.state._active = !1, this.compute(), this.emit())
                        }
                        bind(t) {
                            let e = this.config.device;
                            e && (t(e, "start", this[e + "Start"].bind(this)), t(e, "change", this[e + "Move"].bind(this)), t(e, "end", this[e + "End"].bind(this)), t(e, "cancel", this[e + "End"].bind(this))), this.config.pinchOnWheel && t("wheel", "", this.wheel.bind(this), {
                                passive: !1
                            })
                        }
                    },
                    resolver: V
                },
                R = {
                    key: "scroll",
                    engine: class extends x {
                        constructor(...t) {
                            super(...t), o(this, "ingKey", "scrolling")
                        }
                        scroll(t) {
                            this.state._active || this.start(t), this.scrollChange(t), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
                        }
                        scrollChange(t) {
                            t.cancelable && t.preventDefault();
                            let e = this.state,
                                i = function(t) {
                                    var e, i;
                                    let {
                                        scrollX: s,
                                        scrollY: n,
                                        scrollLeft: r,
                                        scrollTop: o
                                    } = t.currentTarget;
                                    return [null !== (e = null != s ? s : r) && void 0 !== e ? e : 0, null !== (i = null != n ? n : o) && void 0 !== i ? i : 0]
                                }(t);
                            e._delta = s.sub(i, e._values), s.addTo(e._movement, e._delta), this.computeValues(i), this.compute(t), this.emit()
                        }
                        scrollEnd() {
                            this.state._active && (this.state._active = !1, this.compute(), this.emit())
                        }
                        bind(t) {
                            t("scroll", "", this.scroll.bind(this))
                        }
                    },
                    resolver: I
                },
                N = {
                    key: "wheel",
                    engine: class extends x {
                        constructor(...t) {
                            super(...t), o(this, "ingKey", "wheeling")
                        }
                        wheel(t) {
                            this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
                        }
                        wheelChange(t) {
                            let e = this.state;
                            e._delta = y(t), s.addTo(e._movement, e._delta), K(e), this.compute(t), this.emit()
                        }
                        wheelEnd() {
                            this.state._active && (this.state._active = !1, this.compute(), this.emit())
                        }
                        bind(t) {
                            t("wheel", "", this.wheel.bind(this))
                        }
                    },
                    resolver: I
                };
            var $ = i(7294);
            let G = {
                    target(t) {
                        if (t) return () => "current" in t ? t.current : t
                    },
                    enabled: (t = !0) => t,
                    window: (t = D.isBrowser ? window : void 0) => t,
                    eventOptions: ({
                        passive: t = !0,
                        capture: e = !1
                    } = {}) => ({
                        passive: t,
                        capture: e
                    }),
                    transform: t => t
                },
                q = ["target", "eventOptions", "window", "enabled", "transform"];

            function F(t = {}, e) {
                let i = {};
                for (let [s, n] of Object.entries(e)) switch (typeof n) {
                    case "function":
                        i[s] = n.call(i, t[s], s, t);
                        break;
                    case "object":
                        i[s] = F(t[s], n);
                        break;
                    case "boolean":
                        n && (i[s] = t[s])
                }
                return i
            }
            class J {
                constructor(t, e) {
                    o(this, "_listeners", new Set), this._ctrl = t, this._gestureKey = e
                }
                add(t, e, i, s, n) {
                    let r = this._listeners,
                        o = function(t, e = "") {
                            let i = h[t],
                                s = i && i[e] || e;
                            return t + s
                        }(e, i),
                        a = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {},
                        l = c(c({}, a), n);
                    t.addEventListener(o, s, l);
                    let u = () => {
                        t.removeEventListener(o, s, l), r.delete(u)
                    };
                    return r.add(u), u
                }
                clean() {
                    this._listeners.forEach(t => t()), this._listeners.clear()
                }
            }
            class Q {
                constructor() {
                    o(this, "_timeouts", new Map)
                }
                add(t, e, i = 140, ...s) {
                    this.remove(t), this._timeouts.set(t, window.setTimeout(e, i, ...s))
                }
                remove(t) {
                    let e = this._timeouts.get(t);
                    e && window.clearTimeout(e)
                }
                clean() {
                    this._timeouts.forEach(t => void window.clearTimeout(t)), this._timeouts.clear()
                }
            }
            class tt {
                constructor(t) {
                    o(this, "gestures", new Set), o(this, "_targetEventStore", new J(this)), o(this, "gestureEventStores", {}), o(this, "gestureTimeoutStores", {}), o(this, "handlers", {}), o(this, "config", {}), o(this, "pointerIds", new Set), o(this, "touchIds", new Set), o(this, "state", {
                        shared: {
                            shiftKey: !1,
                            metaKey: !1,
                            ctrlKey: !1,
                            altKey: !1
                        }
                    }), t.drag && te(this, "drag"), t.wheel && te(this, "wheel"), t.scroll && te(this, "scroll"), t.move && te(this, "move"), t.pinch && te(this, "pinch"), t.hover && te(this, "hover")
                }
                setEventIds(t) {
                    return p(t) ? (this.touchIds = new Set(Array.from(t.touches).filter(e => {
                        var i, s;
                        return e.target === t.currentTarget || (null === (i = t.currentTarget) || void 0 === i ? void 0 : null === (s = i.contains) || void 0 === s ? void 0 : s.call(i, e.target))
                    }).map(t => t.identifier)), this.touchIds) : "pointerId" in t ? ("pointerup" === t.type || "pointercancel" === t.type ? this.pointerIds.delete(t.pointerId) : "pointerdown" === t.type && this.pointerIds.add(t.pointerId), this.pointerIds) : void 0
                }
                applyHandlers(t, e) {
                    this.handlers = t, this.nativeHandlers = e
                }
                applyConfig(t, e) {
                    this.config = function(t, e, i = {}) {
                        let {
                            target: s,
                            eventOptions: n,
                            window: r,
                            enabled: o,
                            transform: a
                        } = t, h = function(t, e) {
                            if (null == t) return {};
                            var i, s, n = function(t, e) {
                                if (null == t) return {};
                                var i, s, n = {},
                                    r = Object.keys(t);
                                for (s = 0; s < r.length; s++) i = r[s], e.indexOf(i) >= 0 || (n[i] = t[i]);
                                return n
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(t);
                                for (s = 0; s < r.length; s++) i = r[s], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i])
                            }
                            return n
                        }(t, q);
                        if (i.shared = F({
                                target: s,
                                eventOptions: n,
                                window: r,
                                enabled: o,
                                transform: a
                            }, G), e) {
                            let l = U.get(e);
                            i[e] = F(c({
                                shared: i.shared
                            }, h), l)
                        } else
                            for (let u in h) {
                                let d = U.get(u);
                                d && (i[u] = F(c({
                                    shared: i.shared
                                }, h[u]), d))
                            }
                        return i
                    }(t, e, this.config)
                }
                clean() {
                    for (let t of (this._targetEventStore.clean(), this.gestures)) this.gestureEventStores[t].clean(), this.gestureTimeoutStores[t].clean()
                }
                effect() {
                    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
                }
                bind(...t) {
                    let e;
                    let i = this.config.shared,
                        s = {};
                    if (!i.target || (e = i.target())) {
                        if (i.enabled) {
                            for (let n of this.gestures) {
                                let r = this.config[n],
                                    o = ti(s, r.eventOptions, !!e);
                                if (r.enabled) {
                                    let a = B.get(n);
                                    new a(this, t, n).bind(o)
                                }
                            }
                            let h = ti(s, i.eventOptions, !!e);
                            for (let l in this.nativeHandlers) h(l, "", e => this.nativeHandlers[l](c(c({}, this.state.shared), {}, {
                                event: e,
                                args: t
                            })), void 0, !0)
                        }
                        for (let u in s) s[u] = function(...t) {
                            return 0 === t.length ? S : 1 === t.length ? t[0] : function() {
                                let e;
                                for (let i of t) e = i.apply(this, arguments) || e;
                                return e
                            }
                        }(...s[u]);
                        if (!e) return s;
                        for (let p in s) {
                            let {
                                device: f,
                                capture: v,
                                passive: m
                            } = function(t) {
                                let e = t.substring(2).toLowerCase(),
                                    i = !!~e.indexOf("passive");
                                i && (e = e.replace("passive", ""));
                                let s = d.includes(e) ? "capturecapture" : "capture",
                                    n = !!~e.indexOf(s);
                                return n && (e = e.replace("capture", "")), {
                                    device: e,
                                    capture: n,
                                    passive: i
                                }
                            }(p);
                            this._targetEventStore.add(e, f, "", s[p], {
                                capture: v,
                                passive: m
                            })
                        }
                    }
                }
            }

            function te(t, e) {
                t.gestures.add(e), t.gestureEventStores[e] = new J(t, e), t.gestureTimeoutStores[e] = new Q
            }
            let ti = (t, e, i) => (s, n, r, o = {}, a = !1) => {
                    var c, d;
                    let p = null !== (c = o.capture) && void 0 !== c ? c : e.capture,
                        f = null !== (d = o.passive) && void 0 !== d ? d : e.passive,
                        v = a ? s : function(t, e = "", i = !1) {
                            let s = h[t],
                                n = s && s[e] || e;
                            return "on" + l(t) + l(n) + (! function(t = !1, e) {
                                return t && !u.includes(e)
                            }(i, n) ? "" : "Capture")
                        }(s, n, p);
                    i && f && (v += "Passive"), t[v] = t[v] || [], t[v].push(r)
                },
                ts = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

            function tn(t, e, i, s, n, r) {
                if (!t.has(i) || !B.has(s)) return;
                let o = i + "Start",
                    a = i + "End",
                    c = t => {
                        let s;
                        return t.first && o in e && e[o](t), i in e && (s = e[i](t)), t.last && a in e && e[a](t), s
                    };
                n[s] = c, r[s] = r[s] || {}
            }

            function tr(t, e = {}, i, s) {
                let n = $.useMemo(() => new tt(t), []);
                if (n.applyHandlers(t, s), n.applyConfig(e, i), $.useEffect(n.effect.bind(n)), $.useEffect(() => n.clean.bind(n), []), void 0 === e.target) return n.bind.bind(n)
            }

            function to(t, e) {
                return H(X), tr({
                    drag: t
                }, e || {}, "drag")
            }

            function ta(t, e) {
                let i = ([X, W, R, N, z, Y].forEach(H), function(t, e) {
                    let {
                        handlers: i,
                        nativeHandlers: s,
                        config: n
                    } = function(t, e) {
                        let [i, s, n] = function(t) {
                            let e = {},
                                i = {},
                                s = new Set;
                            for (let n in t) ts.test(n) ? (s.add(RegExp.lastMatch), i[n] = t[n]) : e[n] = t[n];
                            return [i, e, s]
                        }(t), r = {};
                        return tn(n, i, "onDrag", "drag", r, e), tn(n, i, "onWheel", "wheel", r, e), tn(n, i, "onScroll", "scroll", r, e), tn(n, i, "onPinch", "pinch", r, e), tn(n, i, "onMove", "move", r, e), tn(n, i, "onHover", "hover", r, e), {
                            handlers: r,
                            config: e,
                            nativeHandlers: s
                        }
                    }(t, e || {});
                    return tr(i, n, void 0, s)
                });
                return i(t, e || {})
            }
        },
        7685: function(t, e, i) {
            var s = i(6092).Z.Symbol;
            e.Z = s
        },
        3589: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return u
                }
            });
            var s = i(7685),
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = n.toString,
                a = s.Z ? s.Z.toStringTag : void 0,
                c = function(t) {
                    var e = r.call(t, a),
                        i = t[a];
                    try {
                        t[a] = void 0;
                        var s = !0
                    } catch (n) {}
                    var c = o.call(t);
                    return s && (e ? t[a] = i : delete t[a]), c
                },
                h = Object.prototype.toString,
                l = s.Z ? s.Z.toStringTag : void 0,
                u = function(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : l && l in Object(t) ? c(t) : h.call(t)
                }
        },
        3413: function(t, e) {
            var i = "object" == typeof global && global && global.Object === Object && global;
            e.Z = i
        },
        6092: function(t, e, i) {
            var s = i(3413),
                n = "object" == typeof self && self && self.Object === Object && self,
                r = s.Z || n || Function("return this")();
            e.Z = r
        },
        8891: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return _
                }
            });
            var s = i(7226),
                n = i(6092),
                r = function() {
                    return n.Z.Date.now()
                },
                o = /\s/,
                a = function(t) {
                    for (var e = t.length; e-- && o.test(t.charAt(e)););
                    return e
                },
                c = /^\s+/,
                h = i(2714),
                l = 0 / 0,
                u = /^[-+]0x[0-9a-f]+$/i,
                d = /^0b[01]+$/i,
                p = /^0o[0-7]+$/i,
                f = parseInt,
                v = function(t) {
                    if ("number" == typeof t) return t;
                    if ((0, h.Z)(t)) return l;
                    if ((0, s.Z)(t)) {
                        var e, i = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = (0, s.Z)(i) ? i + "" : i
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = (e = t) ? e.slice(0, a(e) + 1).replace(c, "") : e;
                    var n = d.test(t);
                    return n || p.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? l : +t
                },
                m = Math.max,
                g = Math.min,
                _ = function(t, e, i) {
                    var n, o, a, c, h, l, u = 0,
                        d = !1,
                        p = !1,
                        f = !0;
                    if ("function" != typeof t) throw TypeError("Expected a function");

                    function _(e) {
                        var i = n,
                            s = o;
                        return n = o = void 0, u = e, c = t.apply(s, i)
                    }

                    function b(t) {
                        var i = t - l,
                            s = t - u;
                        return void 0 === l || i >= e || i < 0 || p && s >= a
                    }

                    function y() {
                        var t, i, s, n = r();
                        if (b(n)) return w(n);
                        h = setTimeout(y, (t = n - l, i = n - u, s = e - t, p ? g(s, a - i) : s))
                    }

                    function w(t) {
                        return (h = void 0, f && n) ? _(t) : (n = o = void 0, c)
                    }

                    function S() {
                        var t, i = r(),
                            s = b(i);
                        if (n = arguments, o = this, l = i, s) {
                            if (void 0 === h) return u = t = l, h = setTimeout(y, e), d ? _(t) : c;
                            if (p) return clearTimeout(h), h = setTimeout(y, e), _(l)
                        }
                        return void 0 === h && (h = setTimeout(y, e)), c
                    }
                    return e = v(e) || 0, (0, s.Z)(i) && (d = !!i.leading, a = (p = "maxWait" in i) ? m(v(i.maxWait) || 0, e) : a, f = "trailing" in i ? !!i.trailing : f), S.cancel = function() {
                        void 0 !== h && clearTimeout(h), u = 0, n = l = o = h = void 0
                    }, S.flush = function() {
                        return void 0 === h ? c : w(r())
                    }, S
                }
        },
        7226: function(t, e) {
            e.Z = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        },
        8533: function(t, e) {
            e.Z = function(t) {
                return null != t && "object" == typeof t
            }
        },
        2714: function(t, e, i) {
            var s = i(3589),
                n = i(8533);
            e.Z = function(t) {
                return "symbol" == typeof t || (0, n.Z)(t) && "[object Symbol]" == (0, s.Z)(t)
            }
        }
    }
]);