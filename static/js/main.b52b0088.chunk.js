(this.webpackJsonpbtccaclulator=this.webpackJsonpbtccaclulator||[]).push([[0],{153:function(e,t,c){},154:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(12),i=c.n(r),s=c(60),l=c(4);var o=c(0),u=Object(n.createContext)(),j=function(e){var t=Object(n.useState)({btc:4e4,bch:500,eth:1800,ltc:450,bnb:400}),c=Object(l.a)(t,2),a=c[0],r=c[1];return Object(o.jsx)(u.Provider,{value:[a,r],children:e.children})},b=u,d=function(e){var t=e.click,c=Object(n.useState)("..."),a=Object(l.a)(c,2),r=a[0],i=a[1],s=Object(n.useState)("..."),u=Object(l.a)(s,2),j=u[0],d=u[1],O=Object(n.useState)("..."),f=Object(l.a)(O,2),h=f[0],m=f[1],v=Object(n.useState)("..."),x=Object(l.a)(v,2),p=x[0],S=x[1],C=Object(n.useState)("..."),N=Object(l.a)(C,2),g=N[0],w=N[1],k=Object(n.useContext)(b),y=Object(l.a)(k,1)[0];return Object(n.useEffect)((function(){i(y.eth),d(y.btc),m(y.bch),S(y.ltc),w(y.bnb)}),[y]),Object(o.jsx)("div",{className:"dropdown-list",children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{onClick:function(){return t(j,"Bitcoin","btc")},children:["Bitcoin: ",j]}),Object(o.jsxs)("li",{onClick:function(){return t(r,"Ethereum","eth")},children:["Ethereum: ",r]}),Object(o.jsxs)("li",{onClick:function(){return t(h,"Bitcoin Cash","bch")},children:["Bitcoin cash: ",h]}),Object(o.jsxs)("li",{onClick:function(){return t(p,"Litecoin","ltc")},children:["Litecoin: ",p]}),Object(o.jsxs)("li",{onClick:function(){return t(g,"Binance","bnb")},children:["Binance: ",g]}),Object(o.jsx)("li",{onClick:function(){return t(null,"Custom")},children:"Custom"})]})})},O=function(e){var t=e.onClickCurrent,c=e.setCrypto,a=e.crypto,r=Object(n.useState)(),i=Object(l.a)(r,2),s=i[0],u=i[1],j=Object(n.useContext)(b),O=Object(l.a)(j,1)[0],f=Object(n.useState)(""),h=Object(l.a)(f,2),m=h[0],v=h[1],x=Object(n.useState)(0),p=Object(l.a)(x,2),S=p[0],C=p[1];return Object(n.useEffect)((function(){O[m]!==S&&0!==S&&(C(O[m]),t(O[m]))}),[O,m,S]),Object(o.jsxs)("div",{className:"flex-row div-spacing-10",children:[Object(o.jsx)("div",{className:"left-label",children:"Crypto: "}),Object(o.jsxs)("div",{className:"input-container-with-dropdown",children:[Object(o.jsx)("input",{type:"text",placeholder:"Choose cryptocurrency",onChange:function(e){return c(e.target.value)},value:a}),Object(o.jsx)("div",{className:"arrow-container",onClick:function(){return u(!s)},children:Object(o.jsx)("span",{children:"\u25be"})}),s&&Object(o.jsx)(d,{click:function(e,c,n){u(!1),t(e,c),v(n),C(e)}})]})]})},f=function(e){var t=e.label,c=e.onChangeHandler,n=e.value,a=void 0===n?"":n,r=e.placeholder,i=e.disabled;return Object(o.jsxs)("div",{className:"flex-row div-spacing-10",children:[Object(o.jsxs)("div",{className:"left-label",children:[t,": "]}),Object(o.jsx)("div",{className:"input-container",children:Object(o.jsx)("input",{type:"text",placeholder:r,onChange:function(e){return c(e.target.value)},value:0!==a?a:"",disabled:i})})]})},h=function(e){var t=e.crypto,c=e.numberOfCoins,n=e.formattedProfit,a=e.formattedReturn,r=e.profit;return Object(o.jsxs)("div",{className:"card-container card-2",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"title-medium-label",children:"ROI:\xa0"}),Object(o.jsx)("span",{className:"title-medium-value",children:t})]}),Object(o.jsxs)("div",{children:["Number of coins:"," ",Object(o.jsx)("span",{className:"span-100 result-1",children:0!==c?parseFloat(c).toFixed(2):"-"})]}),Object(o.jsxs)("div",{children:["Total Return:"," ",Object(o.jsx)("span",{className:"span-100 result-1",children:0!==a?a:"-"})]}),Object(o.jsxs)("div",{children:["Profit:"," ",Object(o.jsx)("span",{className:"span-100 ".concat(r>0?"result-2":"result-negative"),children:0!==n?n:""})]})]})},m=function(e){var t=e.closeable,c=e.id,a=e.closeClick,r=e.investment,i=e.updateInvestment,s=Object(n.useState)(0),u=Object(l.a)(s,2),j=u[0],b=u[1],d=function(e){var t=Object(n.useState)(e),c=Object(l.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){r(a)}),[a]),[a,r]}(r),m=Object(l.a)(d,2),v=m[0],x=m[1],p=Object(n.useState)(0),S=Object(l.a)(p,2),C=S[0],N=S[1],g=Object(n.useState)(""),w=Object(l.a)(g,2),k=w[0],y=w[1],D=function(e,t){var c=Object(n.useState)(0),a=Object(l.a)(c,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){var c;if(e&&t){var n=e.toString();c=parseFloat(t.replace(/[^0-9.]/g,"")/n.replace(/[^0-9.]/g,"")).toFixed(6),i(c)}else i(0)}),[e,t]),r}(j,v),B=function(e,t,c,a){var r=Object(n.useState)(0),i=Object(l.a)(r,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){if(e&&t&&c&&a){var n=parseFloat(a.replace(/[^0-9.]/,"")*c.replace(/[^0-9.]/g,"")).toFixed(2);o(n)}else o(e&&t?t.replace(/[^0-9.]/g,""):0)}),[e,t,c,a]),s}(j,v,C,D),U=function(e,t,c){var a=Object(n.useState)(0),r=Object(l.a)(a,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){if(c&&t&&e){var n=parseFloat(e.replace(/[^0-9.]/g,"")-t.replace(/[^0-9.]/g,"")).toFixed(2);s(n)}else s(0)}),[e,t,c]),i}(B,v,C),E=function(e,t){var c=Object(n.useState)(0),a=Object(l.a)(c,2),r=a[0],i=a[1],s=Object(n.useState)(0),o=Object(l.a)(s,2),u=o[0],j=o[1];return Object(n.useEffect)((function(){if(j(e?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.replace(/[^0-9.]/,"")):0),t){var c=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t.replace(/[^0-9.-]/,""));i(t<0?"-".concat(c.replace(/-/,"")):"".concat(c))}else i(0)}),[e,t]),[r,u]}(B,U),T=Object(l.a)(E,2),L=T[0],F=T[1];return Object(n.useEffect)((function(){x(r)}),[r]),Object(o.jsxs)("div",{className:"flex-row",children:[Object(o.jsxs)("div",{className:"card-container card-1",children:[t&&Object(o.jsx)("div",{className:"close",onClick:function(){return a(c)},children:Object(o.jsx)("div",{className:"close-x",children:"x"})}),Object(o.jsx)(O,{onClickCurrent:function(e,t){e&&b(e),t&&y(t)},setCrypto:y,crypto:k}),Object(o.jsx)(f,{label:"Purchase price",onChangeHandler:b,value:j,placeholder:"cost p/coin when purchased"}),Object(o.jsx)(f,{label:"Total Investment",onChangeHandler:function(e){x(e),i&&i(e)},value:t?r:v,disabled:!!t,placeholder:"ie $25,000"}),Object(o.jsx)(f,{label:"Price after purchase",onChangeHandler:N,value:C,placeholder:"expected future price $"})]}),Object(o.jsx)(h,{crypto:k,numberOfCoins:D,formattedProfit:L,formattedReturn:F,profit:U})]})},v=c(57),x=c.n(v),p=(c(66),c(14)),S=c.n(p),C=c(29),N="https://min-api.cryptocompare.com/data";function g(e){var t,c=Object(n.useContext)(b),a=Object(l.a)(c,2),r=(a[0],a[1]),i=Object(n.useState)("..."),s=Object(l.a)(i,2),o=s[0],u=s[1],j=Object(n.useState)("..."),d=Object(l.a)(j,2),O=d[0],f=d[1],h=Object(n.useState)("..."),m=Object(l.a)(h,2),v=m[0],x=m[1],p=Object(n.useState)("..."),g=Object(l.a)(p,2),D=g[0],U=g[1],E=Object(n.useState)("..."),T=Object(l.a)(E,2),L=T[0],F=T[1],I=Object(n.useState)(0),H=Object(l.a)(I,2),P=H[0],R=H[1],$=Object(n.useRef)(P),J=function e(){t=setTimeout((function(){k(w)?clearTimeout(t):(R($.current++),e())}),1e4)};Object(n.useEffect)((function(){B(e),k(e)?clearTimeout(t):(clearTimeout(t),R($.current++),J())}),[e]),Object(n.useEffect)(Object(C.a)(S.a.mark((function t(){var c,n,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=new Date(Date.now()).toLocaleString().split(",")[0],(n=new Date(e).toLocaleString().split(",")[0])===c){t.next=8;break}return q(),t.next=6,y(n);case 6:a=t.sent,q(a);case 8:case"end":return t.stop()}}),t)}))),[e]);var q=function(e){u(e?e.ETH.USD:"..."),f(e?e.BTC.USD:"..."),x(e?e.BCH.USD:"..."),U(e?e.LTC.USD:"..."),F(e?e.BNB.USD:"..."),r({eth:e?e.ETH.USD:"...",btc:e?e.BTC.USD:"...",bch:e?e.BCH.USD:"...",ltc:e?e.LTC.USD:"...",bnb:e?e.BNB.USD:"..."})};return Object(n.useEffect)((function(){var e="".concat(N,"/pricemulti?fsyms=ETH,BTC,BCH,LTC,BNB&tsyms=USD&extraParams=CryptoCalculator&ts=1605549600");fetch(e,{"Content-Type":"application-json"}).then((function(e){return e.json()})).then((function(e){q(e)}))}),[P]),{eth:o,btc:O,bch:v,ltc:D,bnb:L}}var w,k=function(e){return new Date(Date.now()).toLocaleString().split(",")[0]!==new Date(e).toLocaleString().split(",")[0]},y=function(e){return new Promise(function(){var t=Object(C.a)(S.a.mark((function t(c){var n,a,r,i,s,l,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Date.parse(e),a=n/1e3,r={ETH:{USD:0},BTC:{USD:0},BCH:{USD:0},LTC:{USD:0},BNB:{USD:0}},i=Object.keys(r),s=0;case 5:if(!(s<i.length)){t.next=14;break}return l=i[s],t.next=9,D(l,a);case 9:o=t.sent,r[l]=o[l];case 11:s++,t.next=5;break;case 14:return t.abrupt("return",c(r));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},D=function(e,t){var c="".concat(N,"/pricehistorical?fsym=").concat(e,"&tsyms=USD&ts=").concat(t,"&extraParams=CryptoCalculator");return fetch(c).then((function(e){return e.json()})).then((function(e){return e}))},B=function(e){w=e,console.log(w)},U=function(e){var t=e||new Date(Date.now());return new Date(t).toLocaleString().split(",")[0]},E=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(new Date),i=Object(l.a)(r,2),s=i[0],u=i[1],j=g(s),b=j.eth,d=j.btc,O=j.bnb,f=j.ltc,h=j.bch,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date(Date.now()),t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){var t=new Date(e).toLocaleString().split(",")[0];k(t)?r("Select a different date"):r("Use data from a previous date")}),[e]),a}(s),v=(function(e){var t=Object(n.useState)(),c=Object(l.a)(t,2),a=c[0],r=c[1];Object(n.useEffect)((function(e){r(k(e))}))}(),function(e){return e&&!isNaN(e)?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e):e});return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"ticker-container flex-row",children:[Object(o.jsxs)("div",{className:"text-medium",children:["Data from ",U(s)," "]}),Object(o.jsx)("div",{className:"link marginLeft10",onClick:function(){a(!c)},children:m}),Object(o.jsx)("div",{className:"text-medium marginLeft10",children:c&&Object(o.jsx)(x.a,{selected:s,onChange:function(e){return u(e)},onSelect:function(e){a(!1)}})})]}),Object(o.jsxs)("div",{className:"ticker-container flex-row",children:[Object(o.jsx)("div",{className:"ticker-label",children:"Bitcoin: "}),Object(o.jsx)("div",{className:"ticker-value",children:v(d)}),Object(o.jsx)("div",{className:"ticker-label",children:"Ethereum: "}),Object(o.jsx)("div",{className:"ticker-value",children:v(b)}),Object(o.jsx)("div",{className:"ticker-label",children:"Bitcoin Cash: "}),Object(o.jsx)("div",{className:"ticker-value",children:v(h)}),Object(o.jsx)("div",{className:"ticker-label",children:"Litecoin: "}),Object(o.jsx)("div",{className:"ticker-value",children:v(f)}),Object(o.jsx)("div",{className:"ticker-label",children:"Binance: "}),Object(o.jsx)("div",{className:"ticker-value",children:v(O)})]})]})},T=[],L=function(){var e=Object(n.useState)(T),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),i=Object(l.a)(r,2),u=i[0],j=i[1];Object(n.useEffect)((function(){document.title="Crypto Calculator ROI"}));var b=function(e){var t=c.filter((function(t){return t.id!==e}));a(t)};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"flex-row",children:[Object(o.jsx)("div",{className:"title-large",children:"Crypto ROI Calculator"}),Object(o.jsx)("div",{className:"heading-container heading",children:"bitcoinprojection.com"})]}),Object(o.jsx)(E,{}),Object(o.jsx)(m,{updateInvestment:function(e){j(e)}}),c.map((function(e,t){return Object(o.jsx)(m,{closeable:!0,id:t,closeClick:b,investment:u},t)})),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsx)("button",{onClick:function(){a((function(e){return[].concat(Object(s.a)(e),[{id:e.length}])}))},children:"Compare +"})}),Object(o.jsxs)("div",{className:"blurb",children:["I needed a quick way to determine future crypto profit projections with my investment. For example, if I invested $25,000 in Ethereum at a current price of $1700, what would my return look like if the future price per coin rose to $1800? What if it rose to $3000? ",Object(o.jsx)("br",{}),"How would that compare to an investment in Bitcoin? ",Object(o.jsx)("br",{}),"Use the bitcoin / crypto future calculator above. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Also, I'm open to suggestions!",Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:"https://twitter.com/JoeL42737181",className:"link-light",children:"Find me on Twitter :-)"}),Object(o.jsx)("br",{})]})]})};c(153);var F=function(){return Object(o.jsx)(j,{children:Object(o.jsx)("div",{className:"body-centered",children:Object(o.jsx)(L,{})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,156)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(F,{})}),document.getElementById("root")),I()}},[[154,1,2]]]);
//# sourceMappingURL=main.b52b0088.chunk.js.map