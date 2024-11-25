window._iconfont_svg_string_4759340 = '<svg><symbol id="icon-jiudian" viewBox="0 0 1024 1024"><path d="M896 896h42.666667v42.666667H85.333333v-42.666667h42.666667V170.730667A42.666667 42.666667 0 0 1 170.602667 128h469.461333C663.594667 128 682.666667 147.242667 682.666667 170.730667V896h170.666666V426.666667h-128v-42.666667h149.333334a21.333333 21.333333 0 0 1 21.333333 21.333333v490.666667z m-256 0V170.730667L170.602667 170.666667 170.666667 896h469.333333zM277.333333 298.666667h256v42.666666H277.333333v-42.666666z m0 256h256v42.666666H277.333333v-42.666666z m0-128h256v42.666666H277.333333v-42.666666z m0 256h256v42.666666H277.333333v-42.666666z" fill="#3D3D3D" ></path></symbol></svg>', (n => {
    var t = (e = (e = document.getElementsByTagName("script"))[e.length - 1]).getAttribute("data-injectcss"),
        e = e.getAttribute("data-disable-injectsvg");
    if (!e) {
        var i, o, d, c, s, a = function (t, e) {
            e.parentNode.insertBefore(t, e)
        };
        if (t && !n.__iconfont__svg__cssinject__) {
            n.__iconfont__svg__cssinject__ = !0;
            try {
                document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
            } catch (t) {
                console && console.log(t)
            }
        }
        i = function () {
            var t, e = document.createElement("div");
            e.innerHTML = n._iconfont_svg_string_4759340, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", e = e, (t = document.body).firstChild ? a(e, t.firstChild) : t.appendChild(e))
        }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(i, 0) : (o = function () {
            document.removeEventListener("DOMContentLoaded", o, !1), i()
        }, document.addEventListener("DOMContentLoaded", o, !1)) : document.attachEvent && (d = i, c = n.document, s = !1, r(), c.onreadystatechange = function () {
            "complete" == c.readyState && (c.onreadystatechange = null, l())
        })
    }
    
    function l() {
        s || (s = !0, d())
    }
    
    function r() {
        try {
            c.documentElement.doScroll("left")
        } catch (t) {
            return void setTimeout(r, 50)
        }
        l()
    }
})(window);