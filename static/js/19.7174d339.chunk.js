webpackJsonp([19,36],{495:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),i=n.n(c),u=n(165),l=n.n(u),s=n(45),p=n(11),f=n(89),h=n(28),m=n(57),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"render",value:function(){var e=this.props.hash;return i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("span",{title:e},i.a.createElement(s.Link,{to:"/tx/"+e},Object(h.i)(e)))),i.a.createElement("td",null,i.a.createElement(p.a,{value:this.props.time}),i.a.createElement(p.e,{value:this.props.time})),i.a.createElement("td",null,this.props.value),i.a.createElement("td",null,i.a.createElement(s.Link,{to:"/block/"+this.props.ledger},this.props.ledger)))}}]),t}(i.a.Component),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"renderRow",value:function(e){return i.a.createElement(y,Object.assign({key:e.hash},e))}},{key:"render",value:function(){return i.a.createElement(l.a,{id:"Account-table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"#"),i.a.createElement("th",null,i.a.createElement(p.b,{id:"time"})),i.a.createElement("th",null,i.a.createElement(p.b,{id:"value"})),i.a.createElement("th",null,i.a.createElement(p.b,{id:"ledger"})))),i.a.createElement("tbody",null,this.props.accounts.map(this.renderRow)))}}]),t}(i.a.Component),v=function(e){function t(){var e,n,a,c;r(this,t);for(var i=arguments.length,u=Array(i),l=0;l<i;l++)u[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={accounts:[],isLoading:!0},c=n,o(a,c)}return a(t,e),b(t,[{key:"componentDidMount",value:function(){var e=this;this.update(),this.timerID=setInterval(function(){return e.update()},15e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"accounts",value:function(){var e=Object(h.f)(this.props,"limit")?this.props.limit:this.DEFAULT_LIMIT,t=this.props.server.accounts();return t.limit(e),t.order("desc"),t.call()}},{key:"update",value:function(){var e=this;this.props.server.accounts().then(function(t){e.setState({accounts:t.records.accounts,isLoading:!1})}).catch(function(t){console.error("Failed to fetch Accounts: ["+t+"]"),e.setState({accounts:[],isLoading:!1})})}},{key:"render",value:function(){return i.a.createElement(E,{accounts:this.state.accounts})}}]),t}(i.a.Component);v.DEFAULT_LIMIT=5;var E=Object(m.withSpinner)()(d);t.default=Object(f.withServer)(v)},503:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),i=n.n(c),u=n(51),l=n.n(u),s=n(56),p=n.n(s),f=n(495),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),h(t,[{key:"render",value:function(){return i.a.createElement(l.a,null,i.a.createElement(p.a,null,i.a.createElement(f.default,{limit:10})))}}]),t}(i.a.Component);t.default=m}});
//# sourceMappingURL=19.7174d339.chunk.js.map