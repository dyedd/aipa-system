!(function (e) {
    var t,
        n,
        c,
        o,
        i,
        s =
            '<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M927.104 866.816l-195.626667-208.768C780.629333 601.770667 810.666667 528.426667 810.666667 448 810.666667 271.530667 667.136 128 490.666667 128S170.666667 271.530667 170.666667 448 314.197333 768 490.666667 768c65.322667 0 126.08-19.754667 176.768-53.461333l197.461333 210.688L927.104 866.816zM256 448C256 318.592 361.258667 213.333333 490.666667 213.333333S725.333333 318.592 725.333333 448 620.074667 682.666667 490.666667 682.666667 256 577.408 256 448z"  ></path></symbol><symbol id="icon-User" viewBox="0 0 1024 1024"><path d="M371.2 497.067c-38.4-36.267-64-89.6-64-147.2 0-113.067 91.733-204.8 204.8-204.8s204.8 91.733 204.8 204.8c0 57.6-23.467 110.933-64 147.2C797.867 550.4 900.267 684.8 900.267 840.533c0 23.467-19.2 40.534-40.534 40.534H164.267c-23.467 0-40.534-19.2-40.534-40.534 0-157.866 102.4-290.133 247.467-343.466zM817.067 800C795.733 661.333 667.733 552.533 512 552.533S228.267 661.333 206.933 800h610.134zM512 471.467c68.267 0 123.733-55.467 123.733-123.734S580.267 224 512 224s-123.733 55.467-123.733 123.733S443.733 471.467 512 471.467z"  ></path></symbol><symbol id="icon-cart" viewBox="0 0 1024 1024"><path d="M352.512 832c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64-28.64-64-64-64z m448 0c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64-28.64-64-64-64zM864 800H344.224c-46.112 0-86.656-36.48-92.288-83.04l-54.272-382.08-30.88-178.56c-1.92-15.584-16.128-28.32-30.016-28.32H96c-17.664 0-32-14.336-32-32s14.336-32 32-32h40.768c46.688 0 87.68 36.48 93.344 83.04l30.816 177.888 54.496 383.712c1.792 14.848 15.232 27.36 28.8 27.36H864c17.696 0 32 14.304 32 32s-14.304 32-32 32zM384.224 672c-16.608 0-30.656-12.8-31.872-29.664-1.312-17.632 11.936-32.96 29.536-34.24l434.112-32c15.936-0.096 29.376-12.608 31.136-26.848l50.4-288.384c1.28-10.752-1.696-22.528-8.128-29.824-4.128-4.672-9.312-7.04-15.36-7.04H320c-17.664 0-32-14.336-32-32s14.336-32 32-32h554.048c24.448 0 46.912 10.144 63.264 28.608 18.688 21.088 27.264 50.816 23.52 81.632L910.4 558.656C904.96 603.52 864.448 640 818.336 640l-431.744 31.904c-0.8 0.064-1.6 0.096-2.368 0.096z"  ></path></symbol></svg>',
        d = (d = document.getElementsByTagName("script"))[
            d.length - 1
        ].getAttribute("data-injectcss"),
        l = function (e, t) {
            t.parentNode.insertBefore(e, t)
        }
    if (d && !e.__iconfont__svg__cssinject__) {
        e.__iconfont__svg__cssinject__ = !0
        try {
            document.write(
                "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>",
            )
        } catch (e) {
            console && console.log(e)
        }
    }
    function a() {
        i || ((i = !0), c())
    }
    function r() {
        try {
            o.documentElement.doScroll("left")
        } catch (e) {
            return void setTimeout(r, 50)
        }
        a()
    }
    ;(t = function () {
        var e, t
        ;((t = document.createElement("div")).innerHTML = s),
            (s = null),
            (e = t.getElementsByTagName("svg")[0]) &&
                (e.setAttribute("aria-hidden", "true"),
                (e.style.position = "absolute"),
                (e.style.width = 0),
                (e.style.height = 0),
                (e.style.overflow = "hidden"),
                (t = e),
                (e = document.body).firstChild
                    ? l(t, e.firstChild)
                    : e.appendChild(t))
    }),
        document.addEventListener
            ? ~["complete", "loaded", "interactive"].indexOf(
                  document.readyState,
              )
                ? setTimeout(t, 0)
                : ((n = function () {
                      document.removeEventListener("DOMContentLoaded", n, !1),
                          t()
                  }),
                  document.addEventListener("DOMContentLoaded", n, !1))
            : document.attachEvent &&
              ((c = t),
              (o = e.document),
              (i = !1),
              r(),
              (o.onreadystatechange = function () {
                  "complete" == o.readyState &&
                      ((o.onreadystatechange = null), a())
              }))
})(window)
