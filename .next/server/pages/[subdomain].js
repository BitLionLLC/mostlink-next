"use strict";
(() => {
var exports = {};
exports.id = 631;
exports.ids = [631];
exports.modules = {

/***/ 427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_default_header_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(534);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(753);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tsparticles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_particlesPresets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5);
/* harmony import */ var _subdomain_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(294);
/* harmony import */ var _subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11__);












const particlesInit = async (main)=>{
    // console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await (0,tsparticles__WEBPACK_IMPORTED_MODULE_9__.loadFull)(main);
};
const particlesLoaded = (container)=>{
    return;
};
function Site({ site , links  }) {
    const { /*#__PURE__*/ 0: hoveredLinkIndex , 1: setHoveredLinkIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { bodyColor , containerColor , headerEmoji , headerImage , title , subtitle , titlesColor , linkTextColor , linkBackgroundColor , backgroundImage , liveNotificationColor , containerGradient , bodyGradient , bodyAnimationStyle  } = site || {};
    const memoizedParticles = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tsparticles__WEBPACK_IMPORTED_MODULE_8___default()), {
            id: "tsparticles",
            init: particlesInit,
            loaded: particlesLoaded,
            options: {
                ..._assets_particlesPresets__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z[bodyAnimationStyle],
                autoplay: true
            },
            style: {
                height: "100vh",
                width: "100vw"
            }
        })
    );
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        document.body.style.backgroundColor = bodyColor;
        document.body.style.backgroundImage = bodyGradient || `url(${(backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.base64) || (backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.url)})`;
    }, []);
    const onMouseEnter = (index)=>{
        setHoveredLinkIndex(index);
    };
    const onMouseLeave = ()=>{
        setHoveredLinkIndex(null);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=G-X10YJFYWXK"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                id: 0,
                children: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-X10YJFYWXK');
            `
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                })
            }),
            bodyAnimationStyle && memoizedParticles,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default().singleSiteWrapper),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default().singleSiteContainer),
                    style: {
                        backgroundColor: containerColor,
                        backgroundImage: containerGradient
                    },
                    children: [
                        headerEmoji ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default().headerEmoji),
                            children: headerEmoji
                        }) : !(headerImage === null || headerImage === void 0 ? void 0 : headerImage.url) && !(headerImage === null || headerImage === void 0 ? void 0 : headerImage.base64) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default().headerImage),
                            src: _assets_default_header_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                            alt: title,
                            height: "200",
                            width: "200"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "headerImg",
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "6f702ee72f11adc7",
                                    [
                                        (headerImage === null || headerImage === void 0 ? void 0 : headerImage.url) || (headerImage === null || headerImage === void 0 ? void 0 : headerImage.base64)
                                    ]
                                ]
                            ]) + " " + ((_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default().headerImage) || ""),
                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                                id: "6f702ee72f11adc7",
                                dynamic: [
                                    (headerImage === null || headerImage === void 0 ? void 0 : headerImage.url) || (headerImage === null || headerImage === void 0 ? void 0 : headerImage.base64)
                                ],
                                children: `#headerImg.__jsx-style-dynamic-selector{background-image:url(${(headerImage === null || headerImage === void 0 ? void 0 : headerImage.url) || (headerImage === null || headerImage === void 0 ? void 0 : headerImage.base64)})}`
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default().singleTitle),
                            style: {
                                color: titlesColor
                            },
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default().singleSubtitle),
                            style: {
                                color: titlesColor
                            },
                            children: subtitle
                        }),
                        links ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: (_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default().linksList),
                            children: links === null || links === void 0 ? void 0 : links.map((link, i)=>{
                                var ref;
                                const hoverStyle = {
                                    color: linkBackgroundColor,
                                    background: linkTextColor
                                };
                                const nonHoverStyle = {
                                    color: linkTextColor,
                                    background: linkBackgroundColor
                                };
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: link.href.startsWith("http") ? link.href : "https://" + link.href,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: (_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default().individualLink),
                                    style: {
                                        color: hoveredLinkIndex === i ? hoverStyle.color : nonHoverStyle.color,
                                        background: hoveredLinkIndex === i ? hoverStyle.background : nonHoverStyle.background
                                    },
                                    onMouseEnter: ()=>onMouseEnter(i)
                                    ,
                                    onMouseLeave: onMouseLeave,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default().linkTextAndLiveStatus),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_subdomain_module_css__WEBPACK_IMPORTED_MODULE_11___default().linkText),
                                                    children: link.text
                                                }),
                                                link.live ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: link.live.isLive ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "-"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                style: {
                                                                    color: liveNotificationColor
                                                                },
                                                                children: " LIVE!"
                                                            })
                                                        ]
                                                    }) : "- not live"
                                                }) : null
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                                            icon: link === null || link === void 0 ? void 0 : (ref = link.icon) === null || ref === void 0 ? void 0 : ref.split("_"),
                                            width: "16"
                                        })
                                    ]
                                }, link.href);
                            })
                        }) : null
                    ]
                })
            })
        ]
    });
}
async function getServerSideProps(context) {
    const { subdomain  } = context.query;
    const res = await fetch(`${process.env.API_HOST}/api/sites/static/next/subdomain-${subdomain}`) || {};
    const data = await res.json();
    const { site , links  } = data;
    return {
        props: {
            site,
            links
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Site);


/***/ }),

/***/ 197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 561:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 753:
/***/ ((module) => {

module.exports = require("react-tsparticles");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 47:
/***/ ((module) => {

module.exports = require("tsparticles");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,93], () => (__webpack_exec__(427)));
module.exports = __webpack_exports__;

})();