(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(2),c=n.n(l),r=(n(13),n(3)),s=n(4),i=n(6),u=n(5),m=n(7),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={listGoods:[],isLoaded:!1},n.handleClick=function(){n.setState({listGoods:[].concat(p),isLoaded:!0})},n.getReverse=function(){n.setState({listGoods:[].concat(p).reverse()})},n.getSort=function(){n.setState({listGoods:[].concat(p).sort(function(e,t){return e.localeCompare(t)})})},n.getReset=function(){n.setState({listGoods:[].concat(p)})},n.getSortByLength=function(){n.setState({listGoods:[].concat(p).sort(function(e,t){return e.length-t.length})})},n.setGoodsLength=function(e){n.setState({listGoods:[].concat(p).filter(function(t){return t.length>=e.target.value})})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},this.state.isLoaded?o.a.createElement("div",null,o.a.createElement("h1",null,"Goods"),o.a.createElement("div",null,o.a.createElement("select",{onChange:this.setGoodsLength},o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10")),o.a.createElement("button",{onClick:this.getReset,type:"button"},"reset set value")),o.a.createElement("ul",null,this.state.listGoods.map(function(e){return o.a.createElement("li",{key:"item"},e)})),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.getReverse,type:"button"},"reverse"),o.a.createElement("button",{onClick:this.getSort,type:"button"},"sort alphabetically"),o.a.createElement("button",{onClick:this.getSortByLength,type:"button"},"sort by length"),o.a.createElement("button",{onClick:this.getReset,type:"button"},"reset"))):o.a.createElement("button",{onClick:this.handleClick,type:"button",className:"start-bth"},"Start"))}}]),t}(o.a.Component),h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null))};c.a.render(o.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.f7d8194d.chunk.js.map