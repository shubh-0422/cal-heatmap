(this.webpackJsonpproductstdio=this.webpackJsonpproductstdio||[]).push([[0],{18:function(t){t.exports=JSON.parse('{"startDate":"2020-01-08T10:00:00.000Z","endDate":"2021-01-08T09:59:59.000Z","counts":[{"date":"2021-01-05","count":15},{"date":"2020-12-24","count":11},{"date":"2020-05-14","count":15},{"date":"2020-11-26","count":8},{"date":"2020-12-14","count":5},{"date":"2020-12-01","count":6},{"date":"2021-01-07","count":6}]}')},23:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"convertDateArrToObjectArr",{enumerable:!0,get:function(){return o.convertDateArrToObjectArr}}),e.default=void 0;var r,n=(r=a(31))&&r.__esModule?r:{default:r},o=a(34);a(35);var i=n.default;e.default=i},24:function(t){t.exports=JSON.parse('[{"type":"ADDED","date":"2021-01-07","holderId":"ABC","productId":"f71660e7-51a9-4029-b4d0-39d09489d7bc","description":"ABC added a new Residential Mortgages product named ABC Product 1"},{"type":"ADDED","date":"2021-01-07","holderId":"ABC","productId":"3a86f9e4-1b41-4222-9091-5934d1fc9178","description":"ABC added a new Residential Mortgages product named ABC Product 2"},{"type":"ADDED","date":"2021-01-07","holderId":"ABC","productId":"37912a9e-dbec-41f8-b4ab-ddcd963f0121","description":"ABC added a new Residential Mortgages product named Product 3"},{"type":"ADDED","date":"2021-01-07","holderId":"ABC","productId":"3fb9e10c-6560-4471-83bc-c5edf92ebeef","description":"ABC added a new Residential Mortgages product named ABC Product 4"},{"type":"ADDED","date":"2021-01-07","holderId":"ABC","productId":"3ed59e50-572d-4883-ad0a-2282c786506e","description":"ABC added a new Residential Mortgages product named Product 5"},{"type":"ADDED","date":"2021-01-07","holderId":"ABC","productId":"544ad5cb-7e52-4a30-b1d7-a080abafbfac","description":"ABC added a new Residential Mortgages product named ABC Product 6"},{"type":"ADDED","date":"2020-11-26","holderId":"ABC","productId":"3a86f9e4-1b41-4222-9091-5934d1fc9178","description":"ABC added a new Residential Mortgages product named ABC Product 1"},{"type":"ADDED","date":"2020-11-26","holderId":"ABC","productId":"3fb9e10c-6560-4471-83bc-c5edf92ebeef","description":"ABC added a new Residential Mortgages product named ABC Product 2"},{"type":"ADDED","date":"2020-11-26","holderId":"ABC","productId":"3ed59e50-572d-4883-ad0a-2282c786506e","description":"ABC added a new Residential Mortgages product named ABC Product 3"},{"type":"ADDED","date":"2020-11-26","holderId":"ABC","productId":"fbcfd277-25c3-44c0-94ad-5c4cf028e2ce","description":"ABC added a new Residential Mortgages product named ABC Product 4"},{"type":"ADDED","date":"2020-11-26","holderId":"ABC","productId":"1f9a67ea-8fda-cab0-e9d3-7ab9d0627545","description":"ABC added a new Credit & Charge Cards product named ABC"},{"type":"ADDED","date":"2020-11-26","holderId":"ABC","productId":"544ad5cb-7e52-4a30-b1d7-a080abafbfac","description":"ABC added a new Residential Mortgages product named ABC"},{"type":"ADDED","date":"2020-11-26","holderId":"ABC","productId":"37912a9e-dbec-41f8-b4ab-ddcd963f0121","description":"ABC added a new Residential Mortgages product named ABC"},{"type":"ADDED","date":"2020-11-26","holderId":"ABC","productId":"f71660e7-51a9-4029-b4d0-39d09489d7bc","description":"ABC added a new Residential Mortgages product named ABC"}]')},29:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n=c(a(4)),o=c(a(37)),i=a(32),d=(r=a(33))&&r.__esModule?r:{default:r};function c(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,a):{};r.get||r.set?Object.defineProperty(e,a,r):e[a]=t[a]}return e.default=t,e}function s(t){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p=function(t){function e(t){var a,r,n;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,a=!(n=l(e).call(this,t))||"object"!==s(n)&&"function"!==typeof n?g(r):n,h(g(g(a)),"ID",void 0),h(g(g(a)),"IDLegend",void 0),t.rectWidth&&t.rectWidth<0)throw new Error("rectWidth must be greater than zero");if(t.marginBottom&&t.marginBottom<0)throw new Error("marginBottom must be greater than zero");if(t.marginRight&&t.marginRight<0)throw new Error("marginRight must be greater than zero");if(t.monthSpace&&t.monthSpace<0)throw new Error("monthSpace must be greater than zero");if(t.radius&&t.radius<0)throw new Error("radius must be greater than zero");return a.ID=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,32),a.IDLegend=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,32),a.state={svgElem:void 0,svgLegend:void 0,firstRender:!0},a}var a,r,c;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),a=e,(r=[{key:"cleanHeatMap",value:function(t){o.select(".d3-tip."+this.ID).remove(),o.select(".d3-tip."+this.IDLegend).remove(),t.selectAll("*").remove()}},{key:"renderLegend",value:function(t){var e=this,a=this.props,r=a.colors,n=a.defaultColor,i=a.rectWidth,c=a.marginRight,s=a.displayLegend,u=a.backgroundColor,l=a.textColor,f=a.radius,g=a.textDefaultColor;if(a.yearLables,s){var h=o.select(t);h.selectAll("*").remove(),h.attr("width",1600).attr("height",30),h.append("text").text("Less").attr("x",950).attr("y",28).attr("font-size",i+3).attr("fill",l),h.append("text").text("More").attr("x",1100).attr("y",28).attr("font-size",i+3).attr("fill",l);var p=(0,d.default)().attr("class","d3-tip "+this.IDLegend).offset([-8,0]).html((function(t){return"<div style={{ fontSize: '15' ,font-family: 'Poppins'> "+(t.text?t.text:t.count.toString())+"</div>"}));h.call(p);var m=[{color:n,count:0,text:g||"0"}];r.map((function(t){m.push(t)})),h.selectAll("rect").data(m).enter().append("rect").attr("width",i).attr("height",i).attr("x",(function(t,e){return(i+c)*e+6*i+930})).attr("y",22-i/2).attr("rx",f).attr("ry",f).attr("fill",(function(t){return t.color})).on("mouseover",(function(t){t.color!==u&&(p.show(t,this),o.select(this).attr("stroke",l))})).on("mouseout",(function(t){p.hide(t,e),o.selectAll("rect").attr("stroke","none")}))}else{var D=o.select(t);D.attr("width",0).attr("height",0)}}},{key:"renderHeatMap",value:function(t,e,a){var r=this,n=this.props,c=n.startDate,s=n.rectWidth,u=n.marginBottom,l=n.backgroundColor,f=n.textColor,g=n.radius,h=n.displayYear,p=n.onClick,m=n.onDoubleClick,D=n.onMouseEnter,b=n.onMouseLeave,y=n.monthSpace,A=n.marginRight,j=n.yearLables,v=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];if(t.length>0){var w=(0,d.default)().attr("class","d3-tip "+this.ID).offset([-8,0]).html((function(t){return t.color!==l?"<div style={{ fontSize: '15' ,font-family: 'Poppins'}}>"+t.count+" changes on "+v[t.date.getMonth()]+" "+t.date.getDate()+", "+t.date.getFullYear()+"</div>":null}));e.call(w);var C=0;e.selectAll("rect").data(t).enter().append("rect").attr("fill-opacity",1).attr("width",s).attr("height",s).attr("class","dayRect").attr("x",(function(t){var a=h?s:0,r=new Date(t.date);return 1===r.getDate()&&t.color!==l&&C++,(1===r.getDate()&&t.color!==l||r.getTime()===new Date(c).setHours(0,0,0,0)&&new Date(c).getDate()<14)&&e.append("text").text(v[r.getMonth()]).attr("x",(function(){return Math.floor(t.i/7)*(s+A)+110+C*y-a})).attr("y",42).attr("font-size",s+3).attr("fill",f),Math.floor(t.i/7)*(s+A)+65+C*y})).attr("y",(function(t){return t.i%7*(s+u)+50})).attr("fill",(function(t){return t.color})).attr("rx",g).attr("ry",g).on("mouseover",(function(t,e){t.color!==l&&t.color!==i.noDisplayColor&&(w.show(t,this),o.select(this).attr("stroke","black")),D(t,e)})).on("mouseout",(function(t,e){w.hide(t,r),o.selectAll("rect").attr("stroke","none"),b(t,e)})).on("click",(function(t,e){p(t,e)})).on("ondblclick",(function(){m()}))}var x=h?new Date(j[0]).getFullYear().toString()+"":" ",M=h?new Date(j[1]).getFullYear().toString()+"":" ";e.append("text").text(x).attr("x",70).attr("y",20).attr("font-size",s+3).attr("fill",f),e.append("text").text(M).attr("x",1150).attr("y",20).attr("font-size",s+3).attr("fill",f)}},{key:"render",value:function(){var t=this,e=this.props,a=e.startDate,r=e.endDate,d=e.data,c=e.colors,s=e.defaultColor,u=e.rectWidth,l=e.marginRight,f=e.marginBottom,g=e.backgroundColor,h=e.textColor,p=e.classnames,m=e.shouldStartMonday,D=e.monthSpace,b=e.rangeDisplayData,y=e.fadeAnimation,A=this.state,j=A.svgElem,v=A.svgLegend,w=m?["Mon","Wed","Fri","Sun"]:["Sun","Tue","Thu","Sat"],C=o.select(j);this.cleanHeatMap(C);var x=new Date(a),M=new Date(a),O=a.getMonth()===r.getMonth()&&a.getFullYear()===r.getFullYear()||11==a.getMonth()&&0===r.getMonth()&&r.getFullYear()-a.getFullYear()===1;M.setDate(M.getDate()-1),x.setDate(x.getDate()-M.getDay()),m||x.setDate(x.getDate()-1);var B=new Date(x);B.setHours(0,0,0,0);var T=(r.getTime()-B.getTime())/1e3/60/60/24,E=(r.getTime()-B.getTime())/1e3/60/60/24/30,P=(u+l)*c.length+90+200,S=(u+l)*(T/7)+E*D+200;C.attr("width",P>S?P:S).attr("height",7*(u+f)+50);var Y=(0,i.generateD3Dataset)(T,C,w,u,f,h,d,B,g,M,s,c,b);this.renderLegend(v,P),this.renderHeatMap(Y,C,O);var I={width:P>S?P:S+"px",height:"auto",backgroundColor:g,animationDuration:"0s"};return y.animate&&(I.animationDuration=y.duration+"s"),n.createElement("div",{className:"react-d3-heatMap-container "+p,style:I,id:"react-d3-heatMap-"+this.ID},n.createElement("svg",{style:{width:"1200",display:"block"},ref:function(e){t.state.svgElem||t.setState({svgElem:e})}}),n.createElement("svg",{ref:function(e){t.state.svgLegend||t.setState({svgLegend:e})}}))}}])&&u(a.prototype,r),c&&u(a,c),e}(n.PureComponent);e.default=p,h(p,"defaultProps",{marginRight:4,marginBottom:4,displayLegend:!0,rectWidth:10,defaultColor:"#cdcdcd",backgroundColor:"#fff",textColor:"#000",radius:0,classnames:"",yearLables:[],onClick:function(){},onDoubleClick:function(){},onMouseLeave:function(){},onMouseEnter:function(){},shouldStartMonday:!1,monthSpace:0,rangeDisplayData:[],fadeAnimation:{animate:!0,duration:.4}})},32:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.generateD3Dataset=e.noDisplayColor=void 0;var r="#aaaaaa22";e.noDisplayColor=r;e.generateD3Dataset=function(t,e,a,n,o,i,d,c,s,u,l,f,g){var h=[],p=g&&g[0]?new Date(g[0]):null;p&&p.setHours(0,0,0,0);var m=g&&g[1]?new Date(g[1]):null;if(m&&m.setHours(0,0,0,0),m&&p&&p.getTime()>m.getTime()){var D=new Date(p);p=new Date(m),m=new Date(D)}for(var b=function(t){0!=t&&2!==t&&4!==t&&6!==t||e.append("text").text(a[t/2]).attr("y",t%7*(n+o)+n/6+32+30).attr("x",10).attr("font-size",n+3).attr("fill",i);var g=d.find((function(t){var e=new Date(t.date);return e.setHours(0,0,0,0),c.setHours(0,0,0,0),e.getTime()===c.getTime()})),D=s;p&&p.getTime()>c.getTime()||m&&m.getTime()<c.getTime()?D=r:void 0===g&&c.getTime()>=u.getTime()?D=l:c.getTime()>=u.getTime()&&(D=0===(D=f.filter((function(t){return t.count<=g.count}))).length?l:D[D.length-1].color);var b=new Date(c.getTime());h.push({date:b,count:g?g.count:0,color:D,i:t}),c.setDate(c.getDate()+1)},y=0;y<t;y++)b(y);return h}},34:function(t,e,a){"use strict";function r(t,e){return new Date(t.getTime()+Math.random()*(e.getTime()-t.getTime()))}Object.defineProperty(e,"__esModule",{value:!0}),e.setData=function(t,e,a){for(var n=[],o=[],i=0;i<a;i++){for(var d=r(t,e);o.includes(d);)d=r(t,e);o.push(d);var c=Math.floor(14*Math.random());n.push({date:new Date(d),count:c})}return n},e.convertDateArrToObjectArr=function(t){var e=[];return t.map((function(t){var a=new Date(t).setHours(0,0,0,0);if(!isNaN(a)&&"number"===typeof a){var r=e.findIndex((function(t){return new Date(t.date).setHours(0,0,0,0)===a}));-1!==r?e[r].count+=1:e.push({date:new Date(a),count:1})}})),e}},35:function(t,e,a){},38:function(t,e,a){"use strict";a.r(e);var r=a(4),n=a.n(r),o=a(22),i=a.n(o),d=(a(29),a(14)),c=(a(30),a(18)),s=a(23),u=a.n(s),l=a(24),f=a(0),g=function(){var t=Object(r.useState)("Select a Box to view changes for that date"),e=Object(d.a)(t,2),a=e[0],n=e[1],o=Object(r.useState)([]),i=Object(d.a)(o,2),s=i[0],g=i[1],h=Object(r.useState)(!1),p=Object(d.a)(h,2),m=(p[0],p[1]),D=Object(r.useState)({date:"",count:-1}),b=Object(d.a)(D,2),y=(b[0],b[1]),A=c.counts;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"contain"}),Object(f.jsxs)("div",{className:"main",children:[Object(f.jsxs)("div",{className:"sub",style:{alignItems:"center",paddingBottom:"10px"},children:[Object(f.jsx)("h1",{children:"Change Heat Map"}),Object(f.jsx)(u.a,{data:A,rectSize:10,width:840,rectWidth:12,startDate:new Date(c.startDate),endDate:new Date(c.endDate),onClick:function(t){y({date:t.date,count:t.count}),0===t.count&&(n("No changes available On ".concat(t.date.toString())),m(!1),g([])),t.count>0&&(n("Showing ".concat(t.count," changes that occurred On ").concat(t.date.toString())),g((function(e){return l.filter((function(e){if(e.date===function(t){var e=new Date(t),a=""+(e.getMonth()+1),r=""+e.getDate(),n=e.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[n,a,r].join("-")}(t.date))return e}))})),m(!0))},yearLables:["2020","2021"],colors:[{count:2,color:"#FCA08B"},{count:4,color:"#FC8D72"},{count:10,color:"#FD7859"},{count:20,color:"#FC6341"}],monthSpace:20,fadeAnimation:{animate:!0,duration:.4},displayYear:!0,displayLegend:!0})]}),Object(f.jsxs)("div",{className:"sub",children:[Object(f.jsx)("h2",{children:a}),Object(f.jsx)("div",{children:Object(f.jsx)("ui",{style:{listStyleType:"none"},children:s.map((function(t){return Object(f.jsxs)("li",{style:{display:"flex",flexDirection:"coloum",alignItems:"center"},children:[Object(f.jsx)("img",{src:"data:image/png;base64,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",style:{height:"32px",marginRight:"48px"}}),Object(f.jsx)("h4",{style:{},children:t.description})]},t.index)}))})})]})]})]})},h=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,o=e.getLCP,i=e.getTTFB;a(t),r(t),n(t),o(t),i(t)}))};i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),h()}},[[38,1,2]]]);
//# sourceMappingURL=main.3d295f33.chunk.js.map