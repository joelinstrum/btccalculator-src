(this.webpackJsonpbtccaclulator=this.webpackJsonpbtccaclulator||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(6),i=c.n(a),s=c(7),l=c(2);var o=c(0),j=Object(n.createContext)(),u=function(e){var t=Object(n.useState)({btc:4e4,bch:500,eth:1800,ltc:450,bnb:400}),c=Object(l.a)(t,2),r=c[0],a=c[1];return Object(o.jsx)(j.Provider,{value:[r,a],children:e.children})},b=j,d=function(e){var t=e.click,c=Object(n.useState)("..."),r=Object(l.a)(c,2),a=r[0],i=r[1],s=Object(n.useState)("..."),j=Object(l.a)(s,2),u=j[0],d=j[1],O=Object(n.useState)("..."),f=Object(l.a)(O,2),h=f[0],v=f[1],m=Object(n.useState)("..."),x=Object(l.a)(m,2),p=x[0],C=x[1],S=Object(n.useState)("..."),N=Object(l.a)(S,2),y=N[0],g=N[1],k=Object(n.useContext)(b),B=Object(l.a)(k,1)[0];return Object(n.useEffect)((function(){console.log(B),i(B.eth),d(B.btc),v(B.bch),C(B.ltc),g(B.bnb)}),[B]),Object(o.jsx)("div",{className:"dropdown-list",children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{onClick:function(){return t(u,"Bitcoin")},children:["Bitcoin: ",u]}),Object(o.jsxs)("li",{onClick:function(){return t(a,"Ethereum")},children:["Ethereum: ",a]}),Object(o.jsxs)("li",{onClick:function(){return t(h,"Bitcoin Cash")},children:["Bitcoin cash: ",h]}),Object(o.jsxs)("li",{onClick:function(){return t(p,"Litecoin")},children:["Litecoin: ",p]}),Object(o.jsxs)("li",{onClick:function(){return t(y,"Binance")},children:["Binance: ",y]})]})})},O=function(e){var t=e.onClickCurrent,c=e.setCrypto,r=e.crypto,a=Object(n.useState)(),i=Object(l.a)(a,2),s=i[0],j=i[1];return Object(o.jsxs)("div",{className:"flex-row div-spacing-10",children:[Object(o.jsx)("div",{className:"left-label",children:"Crypto: "}),Object(o.jsxs)("div",{className:"input-container-with-dropdown",children:[Object(o.jsx)("input",{type:"text",placeholder:"Choose cryptocurrency",onChange:function(e){return c(e.target.value)},value:r}),Object(o.jsx)("div",{className:"arrow-container",onClick:function(){return j(!s)},children:Object(o.jsx)("span",{children:"\u25be"})}),s&&Object(o.jsx)(d,{click:function(e,c){j(!1),t(e,c)}})]})]})},f=function(e){var t=e.label,c=e.onChangeHandler,n=e.value,r=void 0===n?"":n,a=e.placeholder,i=e.disabled;return Object(o.jsxs)("div",{className:"flex-row div-spacing-10",children:[Object(o.jsxs)("div",{className:"left-label",children:[t,": "]}),Object(o.jsx)("div",{className:"input-container",children:Object(o.jsx)("input",{type:"text",placeholder:a,onChange:function(e){return c(e.target.value)},value:0!==r?r:"",disabled:i})})]})},h=function(e){var t=e.crypto,c=e.numberOfCoins,n=e.formattedProfit,r=e.formattedReturn,a=e.profit;return Object(o.jsxs)("div",{className:"card-container card-2",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"title-medium-label",children:"ROI:\xa0"}),Object(o.jsx)("span",{className:"title-medium-value",children:t})]}),Object(o.jsxs)("div",{children:["Number of coins:"," ",Object(o.jsx)("span",{className:"span-100 result-1",children:0!==c?parseFloat(c).toFixed(2):"-"})]}),Object(o.jsxs)("div",{children:["Total Return:"," ",Object(o.jsx)("span",{className:"span-100 result-1",children:0!==r?r:"-"})]}),Object(o.jsxs)("div",{children:["Profit:"," ",Object(o.jsx)("span",{className:"span-100 ".concat(a>0?"result-2":"result-negative"),children:0!==n?n:""})]})]})},v=function(e){var t=e.closeable,c=e.id,r=e.closeClick,a=e.investment,i=e.updateInvestment,s=Object(n.useState)(0),j=Object(l.a)(s,2),u=j[0],b=j[1],d=function(e){var t=Object(n.useState)(e),c=Object(l.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){a(r)}),[r]),[r,a]}(a),v=Object(l.a)(d,2),m=v[0],x=v[1],p=Object(n.useState)(0),C=Object(l.a)(p,2),S=C[0],N=C[1],y=Object(n.useState)(""),g=Object(l.a)(y,2),k=g[0],B=g[1],w=function(e,t){var c=Object(n.useState)(0),r=Object(l.a)(c,2),a=r[0],i=r[1];return Object(n.useEffect)((function(){var c;if(e&&t){var n=e.toString();c=parseFloat(t.replace(/[^0-9.]/g,"")/n.replace(/[^0-9.]/g,"")).toFixed(6),i(c)}else i(0)}),[e,t]),a}(u,m),E=function(e,t,c,r){var a=Object(n.useState)(0),i=Object(l.a)(a,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){if(e&&t&&c&&r){var n=parseFloat(r.replace(/[^0-9.]/,"")*c.replace(/[^0-9.]/g,"")).toFixed(2);o(n)}else o(e&&t?t.replace(/[^0-9.]/g,""):0)}),[e,t,c,r]),s}(u,m,S,w),F=function(e,t,c){var r=Object(n.useState)(0),a=Object(l.a)(r,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){if(c&&t&&e){var n=parseFloat(e.replace(/[^0-9.]/g,"")-t.replace(/[^0-9.]/g,"")).toFixed(2);s(n)}else s(0)}),[e,t,c]),i}(E,m,S),U=function(e,t){var c=Object(n.useState)(0),r=Object(l.a)(c,2),a=r[0],i=r[1],s=Object(n.useState)(0),o=Object(l.a)(s,2),j=o[0],u=o[1];return Object(n.useEffect)((function(){if(u(e?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.replace(/[^0-9.]/,"")):0),t){var c=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t.replace(/[^0-9.-]/,""));i(t<0?"-".concat(c.replace(/-/,"")):"".concat(c))}else i(0)}),[e,t]),[a,j]}(E,F),T=Object(l.a)(U,2),D=T[0],I=T[1];return Object(n.useEffect)((function(){x(a)}),[a]),Object(o.jsxs)("div",{className:"flex-row",children:[Object(o.jsxs)("div",{className:"card-container card-1",children:[t&&Object(o.jsx)("div",{className:"close",onClick:function(){return r(c)},children:Object(o.jsx)("div",{className:"close-x",children:"x"})}),Object(o.jsx)(O,{onClickCurrent:function(e,t){b(e),B(t)},setCrypto:B,crypto:k}),Object(o.jsx)(f,{label:"Current price",onChangeHandler:b,value:u,placeholder:"cost per coin"}),Object(o.jsx)(f,{label:"Total Investment",onChangeHandler:function(e){x(e),i&&i(e)},value:t?a:m,disabled:!!t,placeholder:"ie $25,000"}),Object(o.jsx)(f,{label:"Future price",onChangeHandler:N,value:S,placeholder:"expected future price $"})]}),Object(o.jsx)(h,{crypto:k,numberOfCoins:w,formattedProfit:D,formattedReturn:I,profit:F})]})},m=function(){var e=Object(n.useState)("..."),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)("..."),i=Object(l.a)(a,2),s=i[0],j=i[1],u=Object(n.useState)("..."),d=Object(l.a)(u,2),O=d[0],f=d[1],h=Object(n.useState)("..."),v=Object(l.a)(h,2),m=v[0],x=v[1],p=Object(n.useState)("..."),C=Object(l.a)(p,2),S=C[0],N=C[1],y=Object(n.useContext)(b),g=Object(l.a)(y,2),k=(g[0],g[1]),B=Object(n.useState)(0),w=Object(l.a)(B,2),E=w[0],F=w[1],U=Object(n.useRef)(E);Object(n.useEffect)((function(){console.log(E);fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,BCH,LTC,BNB&tsyms=USD&extraParams=CryptoCalculator",{"Content-Type":"application-json"}).then((function(e){return e.json()})).then((function(e){r(e.ETH.USD),j(e.BTC.USD),f(e.BCH.USD),x(e.LTC.USD),N(e.BNB.USD),k({eth:e.ETH.USD,btc:e.BTC.USD,bch:e.BCH.USD,ltc:e.LTC.USD,bnb:e.BNB.USD})}))}),[E]);var T=function e(){var t=setTimeout((function(){F(U.current++),e(),clearTimeout(t)}),1e4)};Object(n.useEffect)((function(){}),[s,O,c,m,S]),Object(n.useEffect)((function(){T()}),[]);var D=function(e){if(e)return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)};return Object(o.jsxs)("div",{className:"ticker-container flex-row",children:[Object(o.jsx)("div",{className:"ticker-label",children:"Bitcoin: "}),Object(o.jsx)("div",{className:"ticker-value",children:D(s)}),Object(o.jsx)("div",{className:"ticker-label",children:"Ethereum: "}),Object(o.jsx)("div",{className:"ticker-value",children:D(c)}),Object(o.jsx)("div",{className:"ticker-label",children:"Bitcoin Cash: "}),Object(o.jsx)("div",{className:"ticker-value",children:D(O)}),Object(o.jsx)("div",{className:"ticker-label",children:"Litecoin: "}),Object(o.jsx)("div",{className:"ticker-value",children:D(m)}),Object(o.jsx)("div",{className:"ticker-label",children:"Binance: "}),Object(o.jsx)("div",{className:"ticker-value",children:D(S)})]})},x=[],p=function(){var e=Object(n.useState)(x),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),i=Object(l.a)(a,2),j=i[0],u=i[1];Object(n.useEffect)((function(){document.title="Crypto Calculator ROI"}));var b=function(e){var t=c.filter((function(t){return t.id!==e}));r(t)};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"flex-row",children:[Object(o.jsx)("div",{className:"title-large",children:"Crypto ROI Calculator"}),Object(o.jsx)("div",{className:"heading-container heading",children:"bitcoinprojection.com"})]}),Object(o.jsx)(m,{}),Object(o.jsx)(v,{updateInvestment:function(e){u(e)}}),c.map((function(e,t){return Object(o.jsx)(v,{closeable:!0,id:t,closeClick:b,investment:j},t)})),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsx)("button",{onClick:function(){r((function(e){return[].concat(Object(s.a)(e),[{id:e.length}])}))},children:"Compare +"})}),Object(o.jsxs)("div",{className:"blurb",children:["I needed a quick way to determine future crypto profit projections with my investment. For example, if I invested $25,000 in Ethereum at a current price of $1700, what would my return look like if the future price per coin rose to $1800? What if it rose to $3000? ",Object(o.jsx)("br",{}),"How would that compare to an investment in Bitcoin? ",Object(o.jsx)("br",{}),"Use the bitcoin / crypto future calculator above. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Also, I'm open to suggestions!",Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:"https://twitter.com/JoeL42737181",className:"link-light",children:"Find me on Twitter :-)"}),Object(o.jsx)("br",{})]})]})};c(13);var C=function(){return Object(o.jsx)(u,{children:Object(o.jsx)("div",{className:"body-centered",children:Object(o.jsx)(p,{})})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),S()}},[[14,1,2]]]);
//# sourceMappingURL=main.8f5759a3.chunk.js.map