(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(4),i=n.n(c),o=(n(14),n(15),n(5)),l=n(6),r=n(7),h=n(2),m=n(9),d=n(8),j=n.p+"static/media/troll-face-2.e90ad9a2.png",u=n(0),b=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.state={topText:"",bottomText:"",randomImg:j,allMemeImgs:[],memeDetails:""},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;e.setState({allMemeImgs:n})})).catch((function(e){return console.log("Caught Error:",e)}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(o.a)({},n,a))}},{key:"handleClick",value:function(e){e.preventDefault();var t=Math.round(Math.random()*this.state.allMemeImgs.length),n=this.state.allMemeImgs[t].url;this.setState({randomImg:n,memeDetails:this.state.allMemeImgs[t]})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"application-body",children:[Object(u.jsx)("div",{className:"header-section",children:Object(u.jsx)("h1",{children:"Meme Generator"})}),Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("form",{className:"meme-form",children:[Object(u.jsx)("input",{type:"text",name:"topText",value:this.state.topText,placeholder:"Enter text to show on top",onChange:this.handleChange}),Object(u.jsx)("input",{type:"text",name:"bottomText",value:this.state.bottomText,placeholder:"Enter text to show at bottom",onChange:this.handleChange}),Object(u.jsx)("button",{onClick:this.handleClick,children:"Generate Meme"})]}),Object(u.jsxs)("div",{className:"meme",children:[Object(u.jsx)("img",{src:this.state.randomImg,alt:""}),Object(u.jsx)("h2",{className:"top",children:this.state.topText}),Object(u.jsx)("h2",{className:"bottom",children:this.state.bottomText})]})]}),Object(u.jsxs)("div",{className:"footer-section",children:[Object(u.jsx)("p",{children:this.state.memeDetails.id}),Object(u.jsx)("p",{children:this.state.memeDetails.name})]})]})}}]),n}(a.Component);var p=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.9e9276fc.chunk.js.map