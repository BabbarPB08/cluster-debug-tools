_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"89bT":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var o=n("nKUr"),i=n("fY7J"),r=n("lttR"),a=n("vjeJ"),c=n("ol27");function s(t){var e=t.setComponentToDisplay,n=a.d.getState(),s=Object(c.a)(n.dataSetView,[{label:n.selectedRowID}]),l=Object(c.b)(s,"key");return Object(o.jsxs)("div",{style:{width:"100%",height:"80vh"},children:[Object(o.jsxs)("h4",{children:["You are currently viewing ",n.selectedRowID," with ",l.length," distinct values. To go to the previous page ",Object(o.jsx)("button",{type:"button",onClick:function(){e("main")},children:" click "})]}),Object(o.jsx)(i.a,{data:s,keys:l,indexBy:"key",margin:{top:50,right:100,bottom:50,left:100},padding:0,minValue:0,groupMode:"grouped",valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:{scheme:"nivo"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],borderColor:{from:"color",modifiers:[["darker",2.5]]},borderWidth:2,axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legendPosition:"middle",legendOffset:-40},tooltip:function(t){var e=t.id,n=t.value,i=t.color;return Object(o.jsxs)("div",{children:[Object(o.jsx)(r.b,{color:i}),void 0!==n?Object(o.jsxs)("span",{style:{overflowWrap:"break-word"},children:[e,": ",Object(o.jsx)("strong",{children:"".concat(n)})]}):e]})},theme:{tooltip:{container:{width:"190px"}}},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",3]]},legends:[],animate:!0,motionStiffness:90,motionDamping:15})]})}},RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return g})),n.d(e,"default",(function(){return v}));var o=n("nKUr"),i=n("1OyB"),r=n("vuIU");function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c=n("Ji7U"),s=n("U8pU");function l(t,e){return!e||"object"!==Object(s.a)(e)&&"function"!==typeof e?a(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=n("rePB"),p=n("q1tI"),f=n.n(p),b=n("89bT"),h=n("KnIj");function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=d(t);if(e){var i=d(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return l(this,n)}}var g=!0,v=function(t){Object(c.a)(n,t);var e=j(n);function n(t){var o;return Object(i.a)(this,n),o=e.call(this,t),Object(u.a)(a(o),"updateComponentToDisplay",(function(t){o.setState({page:t})})),o.state={page:"main"},o}return Object(r.a)(n,[{key:"render",value:function(){var t;return t="details"===this.state.page?Object(o.jsx)(b.default,{setComponentToDisplay:this.updateComponentToDisplay}):Object(o.jsx)(h.default,{data:this.props.data,setComponentToDisplay:this.updateComponentToDisplay}),Object(o.jsx)("div",{children:t})}}]),n}(f.a.Component)},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);