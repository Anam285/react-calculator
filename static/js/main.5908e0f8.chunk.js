(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"value":"clear","displayValue":"AC","style":"ac"},{"value":"/","displayValue":"\xf7","style":"dark"},{"value":"*","displayValue":"x","style":"orange"},{"value":"7","displayValue":"7"},{"value":"8","displayValue":"8"},{"value":"9","displayValue":"9"},{"value":"+","displayValue":"+","style":"orange"},{"value":"4","displayValue":"4"},{"value":"5","displayValue":"5"},{"value":"6","displayValue":"6"},{"value":"-","displayValue":"-","style":" orange"},{"value":"1","displayValue":"1"},{"value":"2","displayValue":"2"},{"value":"3","displayValue":"3"},{"value":".","displayValue":".","style":"orange"},{"value":"0","displayValue":"0","style":"zero"},{"value":"=","displayValue":"=","style":"equal"}]')},28:function(e,a,l){},29:function(e,a,l){},39:function(e,a){},40:function(e,a,l){"use strict";l.r(a);var t=l(7),s=l.n(t),u=l(20),c=l.n(u),i=(l(28),l(1)),n=l(6),r=(l(29),l(42)),d=l(21),o=l(4),y=function(e){return Object(o.jsx)("h3",{children:e.display>0?e.display:e.value})},v=function(e){var a=e.value,l=e.handleClick,t=e.displayValue,s=e.style;return Object(o.jsxs)("button",{className:"button ".concat(s),onClick:function(){return l(a)},children:[" ",t]})},p=function(){var e=Object(t.useState)([0]),a=Object(n.a)(e,2),l=a[0],s=a[1],u=Object(t.useState)([0]),c=Object(n.a)(u,2),p=c[0],j=c[1],b=Object(t.useState)(!1),O=Object(n.a)(b,2),V=O[0],h=O[1],f=function(e){j([0]);try{if(void 0===e)throw new Error("value not defined ");if("clear"===e)s([0]);else if("="===e){var a=l.join(""),t=Object(r.a)(a);t=t.toFixed(3),j(t),s([0])}else{var u=[].concat(Object(i.a)(l),[e]);0===l[0]&&u.shift(),s(u),console.log(u)}}catch(V){console.log(V),h(!0)}};return V?Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"We Encountered errror"})}):Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"display",children:Object(o.jsx)(y,{value:l,display:p})}),Object(o.jsx)("div",{className:"keys",children:d.map((function(e,a){return Object(o.jsx)(v,{value:e.value,handleClick:f,displayValue:e.displayValue,style:e.style},a)}))})]})};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5908e0f8.chunk.js.map