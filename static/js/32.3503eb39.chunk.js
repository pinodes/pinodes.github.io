webpackJsonp([32],{513:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),c=n(1),l=n.n(c),o=n(117),i=n(165),u=n.n(i),s=n(11),m=n(471),d=n.n(m),p=n(273),v=n.n(p),h=n(274),b=n.n(h),f=n(173),E=n(83),g=n(118),y=n(82),j=n(57),w=n(119),R=this,k=function(e){return a.a.createElement("div",null,a.a.createElement(u.a,{id:"payment-table",className:"table-striped table-hover table-condensed"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement(s.b,{id:"account"})),a.a.createElement("th",null,a.a.createElement(s.b,{id:"payment"})),!1===e.compact&&a.a.createElement("th",{class:"block-column"},a.a.createElement(s.b,{id:"transaction"})),!1===e.compact&&a.a.createElement("th",{class:"block-column"},a.a.createElement(s.b,{id:"type"})),a.a.createElement("th",null,a.a.createElement(s.b,{id:"time"})),a.a.createElement("th",null))),a.a.createElement("tbody",null,e.records.map(function(t){return a.a.createElement(f.default,{key:t.id,compact:e.compact,op:t,opURLFn:e.server.opURL,parentRenderTimestamp:e.parentRenderTimestamp})}))),a.a.createElement("div",{className:"text-center",id:"csv-export"},a.a.createElement(D,{server:e.server,account:e.account})))};k.propTypes={compact:l.a.bool,parentRenderTimestamp:l.a.number,records:l.a.array.isRequired,server:l.a.object.isRequired};var O=function(e){return e.time=e.created_at,v()(e,function(e,t){return b()(t)})},T=function(e){var t=e.account,n=e.tx,r=e.limit,a=e.server,c=function(){var e=a.payments();return n&&e.forTransaction(n),t&&e.forAccount(t),e.limit(r),e.order("desc"),e},l=_();return l?F(c,l,r,void 0,0,0,0):c().call()},_=function(){var e=window.location.search.match(/opTypeFilter=([a-z_]*)/);if(e&&e[1])return e[1]},P=[],x=0,F=function e(t,n,r,a,c,l){return(l?t().cursor(l):t()).call().then(function(l){var o=l.records;c+=o.length;var i=d()(o,function(e){return e.type===n});a||(a=l,a.records=[]),a.records=a.records.concat(i);var u=o.length-1,s=o.length>0&&u>=0?o[u].paging_token:0;if(a.records.length<r&&o.length>0&&c<400)return e(t,n,r,a,c,s);var m=a.records.length<r,p=0!==s;return c>=400&&p&&m&&(R.possiblyMoreDataAvailable=!0),a.next=function(){if(0===o.length)return Promise.resolve(l);P.push(x);var a=o[o.length-1].paging_token;return x=a,e(t,n,r,void 0,0,a)},a.prev=function(){if(0===o.length)return Promise.resolve(l);var a=P.pop();return e(t,n,r,void 0,0,a)},Promise.resolve(a)})},A=function(e){return e.server.payments()},D=Object(g.withDataFetchingAllContainer)(T)(w.default),q=Object(o.a)(Object(y.withPaging)(),Object(E.withDataFetchingContainer)(T,O,A),Object(j.withSpinner)());t.default=q(k)}});
//# sourceMappingURL=32.3503eb39.chunk.js.map