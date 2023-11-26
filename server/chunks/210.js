"use strict";
exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 5794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AnimatedTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4695);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7685);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(663);




function AnimatedTitle({ text , className , wordSpace , charSpace  }) {
    //   const text = "Animated Text"; // This would normally be passed into this component as a prop!
    const ctrls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .useAnimation */ ._)();
    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__/* .useInView */ .YD)({
        threshold: 0.1,
        triggerOnce: true
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [
        ctrls,
        inView
    ]);
    const wordAnimation = {
        hidden: {},
        visible: {}
    };
    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: `0.25em`
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 1,
                ease: [
                    0.2,
                    0.65,
                    0.3,
                    0.9
                ]
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
        "aria-label": text,
        role: "heading",
        className: className,
        children: text.split(" ").map((word, index)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion.span */ .E.span, {
                ref: ref,
                "aria-hidden": "true",
                initial: "hidden",
                animate: ctrls,
                variants: wordAnimation,
                transition: {
                    delayChildren: index * 0.25,
                    staggerChildren: 0.05
                },
                className: `inline-block whitespace-nowrap ${wordSpace}`,
                children: word.split("").map((character, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion.span */ .E.span, {
                        "aria-hidden": "true",
                        variants: characterAnimation,
                        className: `inline-block ${charSpace}`,
                        children: character
                    }, index);
                })
            }, index);
        })
    });
}


/***/ })

};
;