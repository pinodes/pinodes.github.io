webpackJsonp([33],{511:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),u=n.n(i),c=n(51),l=n.n(c),p=n(463),s=n.n(p),f=n(56),d=n.n(f),y=n(11),h=n(28),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.inputChange=function(){var t=e.input.value;e.setState({myid:t})},e.getInput=function(){""===e.state.myid||null===e.state.myid?window.location.href="account/GABT7EMPGNCQSZM22DIYC4FNKHUVJTXITUF6Y5HNIWPU4GA7BHT4GC5G":window.location.href="account/"+e.state.myid},e.state={myid:"",username:window.localStorage.getItem("username")},e}return o(t,e),m(t,[{key:"render",value:function(){var e=this,t=this.props.intl.formatMessage;return Object(h.g)("MyAccount"),u.a.createElement(l.a,null,u.a.createElement(d.a,null,u.a.createElement(s.a,{header:t({id:"MyAccount"})},u.a.createElement("h4",null,t({id:"Please Input your account address:"})),u.a.createElement("input",{style:{width:"100%",padding:"12px 16px"},type:"text",ref:function(t){return e.input=t},defaultValue:"GABT7EMPGNCQSZM22DIYC4FNKHUVJTXITUF6Y5HNIWPU4GA7BHT4GC5G",onChange:function(){return e.inputChange()}}),"\xa0 \xa0 ",u.a.createElement("br",null),u.a.createElement("h4",null,t({id:"Pi Username:"})),u.a.createElement("input",{style:{width:"100%",padding:"12px 16px"},type:"text",value:this.state.username}),"\xa0 \xa0 ",u.a.createElement("br",null),u.a.createElement("input",{style:{backgroundColor:"#a34ea7",color:"white",letterspacing:"0.05em",padding:"4px 12px 4px",borderRadius:"60px"},onClick:this.getInput.bind(this),type:"submit"}))))}}]),t}(u.a.Component);t.default=Object(y.h)(b)}});
//# sourceMappingURL=33.16180206.chunk.js.map