(() => {
  "use strict";
  var e = {
      279: (e, n, t) => {
        t.r(n);
      },
      226: function (e, n, t) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.AddToHomeScreen = function (e) {
            let {
                appIconUrl: n,
                appName: t,
                appNameDisplay: o,
                assetUrl: i,
                maxModalDisplayCount: d,
                displayOptions: l,
                allowClose: c
              } = e,
              u = null;
            const f = window.navigator.userAgent;
            function p() {
              return (
                !(
                  !("standalone" in window.navigator) ||
                  !window.navigator.standalone
                ) || !!window.matchMedia("(display-mode: standalone)").matches
              );
            }
            function m() {
              const e = document.querySelector(".adhs-container");
              e &&
                (e.classList.remove("visible"),
                setTimeout(
                  () => {
                    e.remove(),
                      u &&
                        (window.removeEventListener("touchstart", u),
                        window.removeEventListener("click", u),
                        (u = null));
                  },
                  g() ? 500 : 300
                ));
            }
            function h(e) {
              return !!f.match(e);
            }
            function v() {
              return !!h(/Android/);
            }
            function g() {
              return h(/iPhone|iPad|iPod/) || w();
            }
            function w() {
              return !!(
                f.match(/Macintosh/) &&
                navigator.maxTouchPoints &&
                navigator.maxTouchPoints > 1
              );
            }
            function b() {
              return (
                g() &&
                h(/Safari/) &&
                !_() &&
                !y() &&
                !S() &&
                !D() &&
                !I() &&
                !L() &&
                !T()
              );
            }
            function _() {
              return g() && h(/CriOS/);
            }
            function y() {
              return g() && h(/FxiOS/);
            }
            function S() {
              return !!g() && h(/FBAN|FBAV/);
            }
            function D() {
              return !!g() && h(/LinkedInApp/);
            }
            function I() {
              return (
                !!g() && !!window.document.referrer.match("//l.instagram.com/")
              );
            }
            function L() {
              return I();
            }
            function T() {
              return !!g() && !!window.document.referrer.match("//t.co/");
            }
            function O() {
              return (
                v() &&
                !!h(/Chrome/) &&
                !A() &&
                !k() &&
                !M() &&
                !(v() && h(/Edg/)) &&
                !(v() && h(/OPR/))
              );
            }
            function A() {
              return v() && h(/FBAN|FBAV/);
            }
            function k() {
              return v() && h(/SamsungBrowser/);
            }
            function M() {
              return v() && h(/Firefox/);
            }
            function E() {
              return f.includes("Macintosh");
            }
            function B() {
              const e = f.includes("Chrome") && !f.includes("Edg"),
                n =
                  f.includes("Windows") ||
                  f.includes("Macintosh") ||
                  f.includes("Linux");
              return e && n;
            }
            function $() {
              const e =
                  f.includes("Safari") &&
                  !f.includes("Chrome") &&
                  !f.includes("Edg"),
                n = f.includes("Macintosh") || f.includes("Windows");
              return e && n;
            }
            function C() {
              return f.includes("Edg/");
            }
            function P(e, n) {
              if (!n)
                throw new Error(
                  "AddToHomeScreen: variable '" + e + "' has an invalid value."
                );
            }
            function x(e = !1) {
              const n = document.createElement("div");
              if ((n.classList.add("adhs-container"), e)) {
                var t = F() + "</div>";
                n.innerHTML = t;
              }
              return n;
            }
            function N(e) {
              document.body.appendChild(e),
                (u = (e) => {
                  !document
                    .getElementsByClassName("adhs-container")[0]
                    .getElementsByClassName("adhs-modal")[0]
                    .contains(e.target) &&
                    c &&
                    m();
                }),
                setTimeout(() => {
                  window.addEventListener("touchstart", u),
                    window.addEventListener("click", u);
                }, 50),
                setTimeout(() => {
                  e.classList.add("visible");
                }, 50);
            }
            function F() {
              return (
                ae("modal") +
                ` ${ae("logo")}<img src="` +
                n +
                '" alt="logo" /></div> '
              );
            }
            function H() {
              return ae("list");
            }
            function U(e, n) {
              return ` ${ae("list-item")} ${ae("number-container")} ${ae(
                "circle"
              )} ${ae("number")} ${e}</div></div></div> ${ae(
                "instruction"
              )} ${n}</div></div>`;
            }
            function R(e, n = "", t = "none") {
              if (n) {
                if ("right" === t)
                  return (
                    ` ${ae("list-button")} ${ae(
                      "list-button-text"
                    )} ${n}</div><img class="adhs-list-button-image-right -translate-y-1" src="` +
                    e +
                    '" /></div>'
                  );
                if ("left" === t)
                  return (
                    ` ${ae(
                      "list-button"
                    )}<img class="adhs-list-button-image-left -translate-y-1" src="` +
                    e +
                    `" /> ${ae("list-button-text")} ${n}</div></div>`
                  );
                throw new Error("_genListButtonWithImage: invalid arguments");
              }
              return (
                ` ${ae(
                  "list-button"
                )}<img class="adhs-list-button-image-only -translate-y-1" src="` +
                e +
                '" /></div>'
              );
            }
            function j(e) {
              return i + e;
            }
            function K(e) {
              var n =
                F() +
                W() +
                Y() +
                H() +
                U(
                  "1",
                  r.default.__(
                    "Tap the %s button above.",
                    `<img class="adhs-more-button" src="${j(
                      "generic-more-button.svg"
                    )}"/>`
                  )
                ) +
                U(
                  "2",
                  `${r.default.__(
                    "Tap"
                  )} <span class="adhs-emphasis">${r.default.__(
                    "Open in browser"
                  )}</span>`
                ) +
                "</div></div>" +
                ae(
                  "inappbrowser-openinsystembrowser-bouncing-arrow-container"
                ) +
                '<img src="' +
                j("generic-vertical-up-bouncing-arrow.svg") +
                '" alt="arrow" /></div>';
              (e.innerHTML = n),
                e.classList.add(
                  "adhs-mobile",
                  "adhs-ios",
                  "adhs-inappbrowser-openinsystembrowser"
                );
            }
            function W() {
              return (
                '<h1 class="adhs-install-app">' +
                ("inline" === o
                  ? r.default.__("Install %s", t)
                  : r.default.__("Install app")) +
                "</h1>"
              );
            }
            function Y() {
              return "inline" === o ? "" : ae("app-name") + t + "</div>";
            }
            function q() {
              return (
                ae("app-url") +
                new URL(window.location.href).href.replace(/\/$/, "") +
                "</div>"
              );
            }
            function V(e) {
              return ae("blurb") + e + "</div>";
            }
            function G() {
              return V(
                r.default.__(
                  "An icon will be added to your home screen so you can quickly access this website."
                )
              );
            }
            function z() {
              return V(
                r.default.__(
                  "An icon will be added to your Taskbar so you can quickly access this website."
                )
              );
            }
            function J() {
              return V(
                r.default.__(
                  "An icon will be added to your Dock so you can quickly access this website."
                )
              );
            }
            function Q() {
              return (
                "number" == typeof d && d >= 0 && void 0 !== window.localStorage
              );
            }
            function X() {
              return !!Q() && ee() >= d;
            }
            function Z() {
              if (!Q()) return !1;
              var e = ee();
              return (
                e++,
                window.localStorage.setItem(
                  "adhs-modal-display-count",
                  e.toString()
                ),
                !0
              );
            }
            function ee() {
              var e,
                n = window.localStorage.getItem("adhs-modal-display-count");
              return (
                null === n
                  ? ((e = 0),
                    window.localStorage.setItem(
                      "adhs-modal-display-count",
                      e.toString()
                    ))
                  : (e = parseInt(n)),
                e
              );
            }
            P("appName", "string" == typeof t && t.length > 0),
              P("appIconUrl", "string" == typeof n && n.length > 0),
              P("assetUrl", "string" == typeof i && i.length > 0),
              (d = void 0 === d ? -1 : d),
              P("maxModalDisplayCount", Number.isInteger(d)),
              (l = void 0 === l ? a.DISPLAY_OPTIONS_DEFAULT : l),
              P("displayOptions", (0, a.isDisplayOptions)(l)),
              (c = void 0 === c || c),
              P("allowClose", "boolean" == typeof c),
              (u = null),
              !p() &&
                !X() &&
                !g() &&
                !v() &&
                (B() || C()) &&
                window.addEventListener("beforeinstallprompt", function (e) {
                  e.preventDefault(), (ne = e);
                });
            let ne = null,
              te = !1,
              oe = null;
            function ie() {
              if (!te) {
                if (null === ne && !(oe && Date.now() - oe > 2e3))
                  return (
                    null === oe && (oe = Date.now()),
                    void setTimeout(() => {
                      ie();
                    }, 500)
                  );
                te = !0;
                var e = x(!0);
                !(function (e) {
                  var n = E() ? J() : z(),
                    t =
                      F() +
                      W() +
                      Y() +
                      q() +
                      n +
                      ae("button-container") +
                      '<button class="adhs-button adhs-button-cancel"> ' +
                      r.default.__("Later") +
                      '</button><button class="adhs-button adhs-button-install"> ' +
                      r.default.__("Install") +
                      "</button></div></div>";
                  (e.innerHTML = t),
                    e.classList.add("adhs-desktop", "adhs-desktop-chrome"),
                    e
                      .getElementsByClassName("adhs-button-cancel")[0]
                      .addEventListener("click", () => {
                        m();
                      }),
                    e
                      .getElementsByClassName("adhs-button-install")[0]
                      .addEventListener("click", () => {
                        ne &&
                          (ne.prompt(),
                          m(),
                          ne.userChoice.then((e) => {
                            e.outcome, (ne = null);
                          }));
                      });
                })(e),
                  N(e);
              }
            }
            function ae(e) {
              return `<div class="adhs-${e}">`;
            }
            return {
              appName: t,
              appIconUrl: n,
              assetUrl: i,
              maxModalDisplayCount: d,
              displayOptions: l,
              allowClose: c,
              clearModalDisplayCount: function () {
                Q() &&
                  window.localStorage.removeItem("adhs-modal-display-count");
              },
              isStandAlone: p,
              show: function (e) {
                if (
                  (e &&
                    !s[e] &&
                    (console.log(
                      "add-to-homescreen: WARNING: locale selected not available:",
                      e
                    ),
                    (e = "")),
                  !e)
                ) {
                  const n = r.default._getLanguageFromBrowserSettings();
                  e = n && s[n] ? n : s.en ? "en" : Object.keys(s)[0];
                }
                var n, t;
                let o, i;
                if (
                  (r.default.setLocale(e),
                  (t = g()
                    ? a.DeviceType.IOS
                    : v()
                    ? a.DeviceType.ANDROID
                    : a.DeviceType.DESKTOP),
                  p())
                )
                  n = new a.DeviceInfo((o = !0), (i = !0), t);
                else if (X()) n = new a.DeviceInfo((o = !1), (i = !1), t);
                else if (l.showMobile && (g() || v())) {
                  var d = !0;
                  Z();
                  var c = x(!1);
                  g()
                    ? b()
                      ? ((n = new a.DeviceInfo((o = !1), (i = !0), t)),
                        (function (e) {
                          var n =
                            F() +
                            W() +
                            Y() +
                            H() +
                            U(
                              "1",
                              r.default.__(
                                "Tap the %s button in the toolbar.",
                                R(j("ios-safari-sharing-api-button-2.svg"))
                              )
                            ) +
                            U(
                              "2",
                              r.default.__(
                                "Select %s from the menu that pops up.",
                                R(
                                  j(
                                    "ios-safari-add-to-home-screen-button-2.svg"
                                  ),
                                  r.default.__("Add to Home Screen"),
                                  "right"
                                )
                              ) +
                                ` <span class="adhs-emphasis">${r.default.__(
                                  "You may need to scroll down to find this menu item."
                                )}</span>`
                            ) +
                            "</div>" +
                            G() +
                            "</div>" +
                            ae(
                              w()
                                ? "ios-ipad-safari-bouncing-arrow-container"
                                : "ios-safari-bouncing-arrow-container"
                            ) +
                            '<img src="' +
                            j("ios-safari-bouncing-arrow.svg") +
                            '" alt="arrow" /></div>';
                          (e.innerHTML = n),
                            e.classList.add(
                              "adhs-mobile",
                              "adhs-ios",
                              "adhs-safari"
                            );
                        })(c))
                      : _()
                      ? ((n = new a.DeviceInfo((o = !1), (i = !0), t)),
                        (function (e) {
                          var n =
                            F() +
                            W() +
                            Y() +
                            H() +
                            U(
                              "1",
                              r.default.__(
                                "Tap the %s button in the upper right corner.",
                                R(j("ios-chrome-more-button-2.svg"))
                              )
                            ) +
                            U(
                              "2",
                              r.default.__(
                                "Select %s from the menu that pops up.",
                                R(
                                  j(
                                    "ios-safari-add-to-home-screen-button-2.svg"
                                  ),
                                  r.default.__("Add to Home Screen"),
                                  "right"
                                )
                              ) +
                                " " +
                                `<span class="adhs-emphasis">${r.default.__(
                                  "You may need to scroll down to find this menu item."
                                )}</span>`
                            ) +
                            "</div>" +
                            G() +
                            "</div>" +
                            ae("ios-chrome-bouncing-arrow-container") +
                            '<img src="' +
                            j("ios-chrome-bouncing-arrow.svg") +
                            '" alt="arrow" /></div>';
                          (e.innerHTML = n),
                            e.classList.add(
                              "adhs-mobile",
                              "adhs-ios",
                              "adhs-chrome"
                            );
                        })(c))
                      : S() || D()
                      ? ((n = new a.DeviceInfo((o = !1), (i = !1), t)), K(c))
                      : I() || L() || T()
                      ? ((n = new a.DeviceInfo((o = !1), (i = !1), t)),
                        (function (e) {
                          var n =
                            F() +
                            W() +
                            Y() +
                            H() +
                            U(
                              "1",
                              r.default.__(
                                "Tap the %s button below to open your system browser.",
                                `<img class="adhs-more-button" src="${j(
                                  "openinsafari-button.png"
                                )}"/>`
                              )
                            ) +
                            "</div></div>" +
                            ae(
                              "inappbrowser-openinsafari-bouncing-arrow-container"
                            ) +
                            '<img src="' +
                            j("generic-vertical-down-bouncing-arrow.svg") +
                            '" alt="arrow" /></div>';
                          (e.innerHTML = n),
                            e.classList.add(
                              "adhs-mobile",
                              "adhs-ios",
                              "adhs-inappbrowser-openinsafari"
                            );
                        })(c))
                      : ((n = new a.DeviceInfo((o = !1), (i = !1), t)),
                        (d = !1))
                    : O()
                    ? ((n = new a.DeviceInfo((o = !1), (i = !0), t)),
                      (function (e) {
                        var n =
                          F() +
                          W() +
                          Y() +
                          H() +
                          U(
                            "1",
                            r.default.__(
                              "Tap %s in the browser bar.",
                              R(j("android-chrome-more-button-2.svg"))
                            )
                          ) +
                          U(
                            "2",
                            r.default.__(
                              "Tap %s",
                              R(
                                j(
                                  "android-chrome-add-to-home-screen-button-2.svg"
                                ),
                                r.default.__("Add to Home Screen"),
                                "left"
                              )
                            )
                          ) +
                          "</div>" +
                          G() +
                          "</div>" +
                          ae("android-chrome-bouncing-arrow-container") +
                          '<img src="' +
                          j("android-chrome-bouncing-arrow.svg") +
                          '" alt="arrow" /></div>';
                        (e.innerHTML = n),
                          e.classList.add(
                            "adhs-mobile",
                            "adhs-android",
                            "adhs-chrome"
                          );
                      })(c))
                    : A()
                    ? ((n = new a.DeviceInfo((o = !1), (i = !1), t)), K(c))
                    : ((n = new a.DeviceInfo((o = !1), (i = !1), t)), (d = !1)),
                    d && N(c);
                } else
                  (n = new a.DeviceInfo((o = !1), (i = !1), t)),
                    l.showDesktop &&
                      (B() || C()
                        ? (Z(), ie())
                        : $() &&
                          (Z(),
                          (function () {
                            var e = x(!0);
                            (function (e) {
                              var n = E() ? J() : z(),
                                t =
                                  F() +
                                  W() +
                                  Y() +
                                  q() +
                                  H() +
                                  U(
                                    "1",
                                    r.default.__(
                                      "Tap %s in the toolbar.",
                                      R(j("desktop-safari-menu.svg"))
                                    )
                                  ) +
                                  U(
                                    "2",
                                    r.default.__(
                                      "Tap %s",
                                      R(
                                        j("desktop-safari-dock.svg"),
                                        r.default.__("Add To Dock"),
                                        "left"
                                      )
                                    )
                                  ) +
                                  "</div>" +
                                  n +
                                  "</div>" +
                                  ae(
                                    "desktop-safari-bouncing-arrow-container"
                                  ) +
                                  '<img src="' +
                                  j("desktop-safari-bouncing-arrow.svg") +
                                  '" alt="arrow" /></div>';
                              (e.innerHTML = t),
                                e.classList.add(
                                  "adhs-desktop",
                                  "adhs-desktop-safari"
                                );
                            })(e),
                              N(e);
                          })()));
                return n;
              },
              closeModal: m,
              isBrowserAndroidChrome: O,
              isBrowserAndroidFacebook: A,
              isBrowserAndroidFirefox: M,
              isBrowserAndroidSamsung: k,
              isBrowserIOSChrome: _,
              isBrowserIOSFirefox: y,
              isBrowserIOSInAppFacebook: S,
              isBrowserIOSInAppInstagram: I,
              isBrowserIOSInAppLinkedin: D,
              isBrowserIOSInAppThreads: L,
              isBrowserIOSInAppTwitter: T,
              isBrowserIOSSafari: b,
              isDesktopChrome: B,
              isDesktopEdge: C,
              isDesktopMac: E,
              isDesktopSafari: $,
              isDesktopWindows: function () {
                return f.includes("Windows");
              }
            };
          }),
          t(279);
        const i = ["en"],
          a = t(56),
          r = o(t(794)),
          s = {};
        i.forEach((e) => {
          s[e] = {};
        }),
          r.default.configure({ locales: i, staticCatalog: s, directory: "." });
      },
      794: (e, n) => {
        let t, o;
        Object.defineProperty(n, "__esModule", { value: !0 });
        const i = {
          configure: (e) => {
            t = e;
          },
          _getLanguageFromLocale: (e) =>
            e
              ? e.indexOf("-") >= 0
                ? e.split("-")[0]
                : e.indexOf("_") >= 0
                ? e.split("_")[0]
                : e
              : "",
          _getLanguageFromBrowserSettings: () => {
            const e = new URLSearchParams(window.location.search).get("locale");
            return e
              ? i._getLanguageFromLocale(e)
              : navigator.languages && navigator.languages.length
              ? i._getLanguageFromLocale(navigator.languages[0])
              : "";
          },
          setLocale: (e) => {
            o = t.staticCatalog[e];
          },
          _translateKey: (e) => (null == o || null == o[e] ? e : o[e]),
          __: (e, n) => {
            if (e.indexOf("%s") < 0) return i._translateKey(e);
            const t = i._translateKey(e).split("%s");
            return t[0] + n + t[1];
          }
        };
        n.default = i;
      },
      56: (e, n) => {
        var t;
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.DISPLAY_OPTIONS_DEFAULT = n.DeviceInfo = n.DeviceType = void 0),
          (n.isDisplayOptions = function (e) {
            return (
              e &&
              "boolean" == typeof e.showMobile &&
              "boolean" == typeof e.showDesktop
            );
          }),
          (function (e) {
            (e.IOS = "IOS"), (e.ANDROID = "ANDROID"), (e.DESKTOP = "DESKTOP");
          })(t || (n.DeviceType = t = {})),
          (n.DeviceInfo = class {
            constructor(e, n, t) {
              (this.isStandAlone = e),
                (this.canBeStandAlone = n),
                (this.device = t);
            }
          }),
          (n.DISPLAY_OPTIONS_DEFAULT = { showMobile: !0, showDesktop: !0 });
      }
    },
    n = {};
  function t(o) {
    var i = n[o];
    if (void 0 !== i) return i.exports;
    var a = (n[o] = { exports: {} });
    return e[o].call(a.exports, a, a.exports, t), a.exports;
  }
  (t.r = (e) => {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
    (() => {
      const { AddToHomeScreen: e } = t(226);
      window.AddToHomeScreen = e;
    })();
})();
