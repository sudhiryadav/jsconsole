(this.webpackJsonpsynaptic_jsconsole=this.webpackJsonpsynaptic_jsconsole||[]).push([[0],{13:function(e,t,_){},14:function(e,t,_){},16:function(e,t,_){"use strict";_.r(t);var r=_(1),n=_.n(r),a=_(6),s=_.n(a),c=(_(13),_(8)),o=_(2),u=(_(14),_(0)),i=function(e){var t=e.output,_=t.command,r=t.value,n=t.isError;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"input-row",children:[Object(u.jsx)("span",{className:"pre-symbol type-past-command",children:">"}),Object(u.jsx)("div",{className:"past-output",children:_})]}),Object(u.jsxs)("div",{className:"input-row ".concat(n?"error-row":""),children:[Object(u.jsx)("span",{className:"pre-symbol type-past-value",style:n?{color:"red"}:{},children:n?"x":"<"}),Object(u.jsx)("div",{className:"past-output",children:r})]})]})},l=_(7),m=0;var d=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),_=t[0],n=t[1],a=Object(r.useState)([]),s=Object(o.a)(a,2),d=s[0],p=s[1],O=Object(r.useState)(""),j=Object(o.a)(O,2),E=j[0],b=j[1],x=function(e){e.ctrlKey&&"d"===e.key&&n([])};return Object(r.useEffect)((function(){return window.addEventListener("keypress",x),function(){window.removeEventListener("keypress",x)}}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:"Synaptic Console"}),Object(u.jsx)("div",{children:"Use up and down arrow for history. Ctrl+d to clear history"}),Object(u.jsxs)("div",{className:"container",children:[_.map((function(e){return Object(u.jsx)(i,{output:e},e.id)})),Object(u.jsx)(l.a,{onExecute:function(e,t){if(e)e.id=m++,p(_.length),n([].concat(Object(c.a)(_),[e]));else{if(!_||0===_.length)return;"ArrowUp"===t?p(0===d?0:d-1):"ArrowDown"===t&&p(d===_.length-1?_.length-1:d+1),b(_[d].command)}},currentCommand:E,clearOutput:function(){n([])}})]})]})},p=function(e){e&&e instanceof Function&&_.e(3).then(_.bind(null,17)).then((function(t){var _=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;_(e),r(e),n(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),p()},7:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_sudhiryadav_Documents_FrontSlash_Projects_SkillTest_synaptic_jsconsole_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__),TextInput=function TextInput(props){var currentCommand=props.currentCommand,onExecute=props.onExecute,clearOutput=props.clearOutput,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)('"1"==="1"'),_useState2=Object(_Users_sudhiryadav_Documents_FrontSlash_Projects_SkillTest_synaptic_jsconsole_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),command=_useState2[0],setCommand=_useState2[1];Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setCommand(currentCommand)}),[currentCommand]);var onKeyDown=function onKeyDown(e){var newCommand=e.target.value,evaluatedCommand,isError;if(e.ctrlKey&&"d"===e.key)clearOutput();else if("Enter"===e.key){if(e.preventDefault(),e.stopPropagation(),""===newCommand)return;try{var resp=eval(newCommand);!0===resp&&(resp="true"),!1===resp&&(resp="false"),evaluatedCommand=Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{children:[" ",resp]}),isError=!1}catch(e){evaluatedCommand=Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:e.name}),' {"',Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{style:{color:"#02a902"},children:e.message}),'"}']}),isError=!0}setCommand(""),onExecute({command:newCommand,value:evaluatedCommand,isError:isError},e.Key)}else"ArrowUp"!==e.key&&"ArrowDown"!==e.key||onExecute(null,e.key)},onChange=function(e){setCommand(e.target.value)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"input-row",style:{borderBottom:"none"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"pre-symbol type-input",children:">"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea",{autoComplete:"true",autoFocus:!0,spellCheck:!0,className:"text-input",value:command,onKeyDown:onKeyDown,onChange:onChange})]})};__webpack_exports__.a=TextInput}},[[16,1,2]]]);
//# sourceMappingURL=main.844f0c1b.chunk.js.map