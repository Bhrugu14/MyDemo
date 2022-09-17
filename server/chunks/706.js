"use strict";
exports.id = 706;
exports.ids = [706];
exports.modules = {

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* reexport */ NavBar),
  "a": () => (/* reexport */ RippleButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./component/button.js


const RippleButton = (props)=>{
    const { title , onclickButton  } = props;
    const rippleButtonRef = (0,external_react_.useRef)(null);
    const onClickCapture = (e)=>{
        console.log("SAD", e);
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        e.target.appendChild(ripple);
        setTimeout(function() {
            ripple.remove();
        }, 600); // 1second = 1000ms
        onclickButton(e);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: rippleButtonRef,
        className: "ripple-button",
        onClick: onClickCapture,
        ...props,
        children: title
    });
};

;// CONCATENATED MODULE: ./component/navbar.js


const NavBar = ()=>{
    (0,external_react_.useEffect)(()=>{
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-50px";
            }
            prevScrollpos = currentScrollPos;
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "navbar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#home",
                children: "Home"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#news",
                children: "News"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#contact",
                children: "Contact"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./component/index.js




/***/ })

};
;