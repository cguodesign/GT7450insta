var eventDrops = function(t) {
    function e(a) {
        if (n[a]) return n[a].exports;
        var r = n[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return t[a].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function(t, e, n) {
    t.exports = n(3)
}, function(t, e) {
    "use strict";
    t.exports = function(t, e, n) {
        n = n || {};
        for (var a in e) ! function(a) {
            t[a] = function(r) {
                return arguments.length ? (e[a] = r, n.hasOwnProperty(a) && n[a](r), t) : e[a]
            }
        }(a)
    }
}, function(t, e, n) {
    "use strict";
    var a = n(1),
        r = {
            xScale: null,
            dateFormat: null
        };
    t.exports = function(t) {
        return function(e) {
            function n(n) {
                n.each(function(n) {
                    t.select(this).selectAll("text").remove();
                    var a = e.xScale.domain();
                    t.select(this).append("text").text(function() {
                        return e.dateFormat(a[0])
                    }).classed("start", !0), t.select(this).append("text").text(function() {
                        return e.dateFormat(a[1])
                    }).attr("text-anchor", "end").attr("transform", "translate(" + e.xScale.range()[1] + ")").classed("end", !0)
                })
            }
            e = e || {};
            for (var o in r) e[o] = e[o] || r[o];
            return a(n, e), n
        }
    }
}, function(t, e, n) {
    "use strict";

    function a(t) {
        function e(e) {
            e.each(function(e) {
                function r() {
                    l.event.sourceEvent && "[object MouseEvent]" === l.event.sourceEvent.toString() && f.translate([l.event.translate[0], 0]), l.event.sourceEvent && "[object WheelEvent]" === l.event.sourceEvent.toString() && f.scale(l.event.scale), m()
                }

                function s() {
                    E.call(c({
                        xScale: n,
                        dateFormat: t.locale ? t.locale.timeFormat("%d %B %Y") : l.time.format("%d %B %Y")
                    }))
                }

                function u() {
                    t.eventZoom && t.eventZoom(n), t.hasDelimiter && s(n)
                }

                function m() {
                    var a = "function" == typeof t.hasTopAxis ? t.hasTopAxis(e) : t.hasTopAxis;
                    a && p.drawXAxis();
                    var r = "function" == typeof t.hasBottomAxis ? t.hasBottomAxis(e) : t.hasBottomAxis;
                    r && v.drawXAxis(), M.call(i({
                        xScale: n,
                        eventColor: t.eventColor
                    }))
                }
                var f = l.behavior.zoom().center(null).scaleExtent([t.minScale, t.maxScale]).on("zoom", r);
                f.on("zoomend", u);
                var p, v, d = t.width - t.margin.right - t.margin.left,
                    x = 40 * e.length,
                    h = x + t.margin.top + t.margin.bottom;
                l.select(this).select("svg").remove();
                var g = l.select(this).append("svg").attr("width", t.width).attr("height", h),
                    y = g.append("defs"),
                    A = y.append("filter").attr("id", "metaball");
                A.append("feGaussianBlur").attr("in", "SourceGraphic").attr("stdDeviation", 10).attr("result", "blur"), A.append("feColorMatrix").attr("in", "blur").attr("mode", "matrix").attr("values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 80 -7").attr("result", "contrast"), A.append("feBlend").attr("in", "SourceGraphic").attr("in2", "contrast");
                var S = g.append("g").attr("transform", "translate(0, 25)"),
                    b = [],
                    F = [];
                e.forEach(function(t, e) {
                    b.push(t.name), F.push(40 * e)
                }), a.domain(b).range(F);
                var w = S.append("g").classed("y-axis", !0).attr("transform", "translate(0, 60)"),
                    B = w.append("g").selectAll("g").data(b);
                B.enter().append("g").attr("transform", function(t) {
                    return "translate(0, " + a(t) + ")"
                }).append("line").classed("y-tick", !0).attr("x1", t.margin.left).attr("x2", t.margin.left + d), B.exit().remove();
                var C, k, D = g.append("rect").call(f).classed("zoom", !0).attr("width", d).attr("height", h).attr("transform", "translate(" + t.margin.left + ", 35)");
                "function" == typeof t.eventHover && D.on("mousemove", function(e, n) {
                    var a = l.event;
                    if (C != a.clientX || k != a.clientY) {
                        C = a.clientX, k = a.clientY, D.attr("display", "none");
                        var r = document.elementFromPoint(l.event.clientX, l.event.clientY);
                        D.attr("display", "block"), "circle" === r.tagName && t.eventHover(r)
                    }
                }), "function" == typeof t.eventClick && D.on("click", function() {
                    D.attr("display", "none");
                    var e = document.elementFromPoint(l.event.clientX, l.event.clientY);
                    D.attr("display", "block"), "circle" === e.tagName && t.eventClick(e)
                }), n.range([0, d]).domain([t.start, t.end]), f.x(n), g.select(".delimiter").remove();
                var E = g.append("g").classed("delimiter", !0).attr("width", d).attr("height", 10).attr("transform", "translate(" + t.margin.left + ", " + (t.margin.top - 45) + ")").call(c({
                        xScale: n,
                        dateFormat: t.locale ? t.locale.timeFormat("%d %B %Y") : l.time.format("%d %B %Y")
                    })),
                    Y = "function" == typeof t.hasTopAxis ? t.hasTopAxis(e) : t.hasTopAxis;
                Y && (p = o(l, t, n, S, x, "top"));
                var T = "function" == typeof t.hasBottomAxis ? t.hasBottomAxis(e) : t.hasBottomAxis;
                T && (v = o(l, t, n, S, x, "bottom")), f.size([t.width, h]), S.select(".graph-body").remove();
                var X = S.append("g").classed("graph-body", !0).attr("transform", "translate(" + t.margin.left + ", " + (t.margin.top - 15) + ")"),
                    M = X.selectAll("g").data(e);
                M.enter().append("g").classed("line", !0).attr("transform", function(t) {
                    return "translate(0," + a(t.name) + ")"
                }).style("fill", t.eventLineColor).call(i({
                    xScale: n,
                    eventColor: t.eventColor
                })), M.exit().remove(), m(), t.hasDelimiter && s(n), t.eventZoom && t.eventZoom(n)
            })
        }
        var n = l.time.scale(),
            a = l.scale.ordinal();
        t = t || {};
        for (var u in s) t[u] = t[u] || s[u];
        return r(e, t), e
    }
    var r = n(1),
        o = n(6),
        l = n(7),
        i = n(4)(l),
        c = n(2)(l),
        s = {
            start: new Date(0),
            end: new Date,
            minScale: 0,
            maxScale: 1 / 0,
            width: 1e3,
            margin: {
                top: 60,
                left: 200,
                bottom: 40,
                right: 50
            },
            locale: null,
            axisFormat: null,
            tickFormat: [
                [".%L", function(t) {
                    return t.getMilliseconds()
                }],
                [":%S", function(t) {
                    return t.getSeconds()
                }],
                ["%I:%M", function(t) {
                    return t.getMinutes()
                }],
                ["%I %p", function(t) {
                    return t.getHours()
                }],
                ["%a %d", function(t) {
                    return t.getDay() && 1 != t.getDate()
                }],
                ["%b %d", function(t) {
                    return 1 != t.getDate()
                }],
                ["%B", function(t) {
                    return t.getMonth()
                }],
                ["%Y", function() {
                    return !0
                }]
            ],
            eventHover: null,
            eventZoom: null,
            eventClick: null,
            hasDelimiter: !0,
            hasTopAxis: !0,
            hasBottomAxis: function(t) {
                return t.length >= 10
            },
            eventLineColor: "black",
            eventColor: null
        };
    l.chart = l.chart || {}, l.chart.eventDrops = a, t.exports = a
}, function(t, e, n) {
    "use strict";
    var a = n(1),
        r = n(5),
        o = {
            xScale: null
        };
    t.exports = function(t) {
        return function(e) {
            e = e || {
                    xScale: null,
                    eventColor: null
                };
            for (var n in o) e[n] = e[n] || o[n];
            var l = function(n) {
                n.each(function(n) {
                    t.select(this).selectAll("text").remove(), t.select(this).append("text").text(function(t) {
                        // Zizheng's modification here
                        //var n = r(t.dates, e.xScale).length;
                        //return t.name + (n > 0 ? " (" + n + ")" : "")
                    }).attr("text-anchor", "end").attr("transform", "translate(-20)").style("fill", "black"), t.select(this).selectAll("circle").remove();
                    var a = t.select(this).append("g").style("filter", "url(#metaball)");
                    a.append("rect").attr("width", "40px").attr("height", "40px").attr("transform", "translate(0,-25)").style("fill", "none");
                    var o = a.selectAll("circle").data(function(t) {
                        return r(t.dates, e.xScale)
                    });
                    o.enter().append("circle").attr("cx", function(t) {
                        return e.xScale(t)
                    }).style("fill", e.eventColor).attr("cy", -5).attr("r", 5), o.exit().remove()
                })
            };
            return a(l, e), l
        }
    }
}, function(t, e) {
    "use strict";
    t.exports = function(t, e) {
        t = t || [];
        var n = [],
            a = e.range(),
            r = a[0],
            o = a[1];
        return t.forEach(function(t) {
            var a = e(t);
            r > a || a > o || n.push(t)
        }), n
    }
}, function(t, e) {
    "use strict";
    t.exports = function(t, e, n, a, r, o) {
        var l = {},
            i = {},
            c = [];
        e.tickFormat.forEach(function(t) {
            var e = t.slice(0);
            c.push(e)
        });
        var s = e.locale ? e.locale.timeFormat.multi(c) : t.time.format.multi(c);
        l[o] = t.svg.axis().scale(n).orient(o).tickFormat(s), "function" == typeof e.axisFormat && e.axisFormat(l);
        var u = ("bottom" == o ? parseInt(r) : 0) + e.margin.top - 40;
        i[o] = a.append("g").classed("x-axis", !0).classed(o, !0).attr("transform", "translate(" + e.margin.left + ", " + u + ")").call(l[o]);
        var m = function() {
            i[o].call(l[o])
        };
        return {
            drawXAxis: m
        }
    }
}, function(t, e) {
    t.exports = d3
}]);
//# sourceMappingURL=eventDrops.js.map