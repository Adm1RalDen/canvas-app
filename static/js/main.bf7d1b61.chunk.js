(window["webpackJsonpcanvas-app"]=window["webpackJsonpcanvas-app"]||[]).push([[0],{33:function(e,t,n){e.exports=n(83)},83:function(e,t,n){"use strict";n.r(t);var o=n(17),a=n(6),r=n.n(a),l=n(9),i=n.n(l),u=n(28),c=n(29),d=n(31),s=n(30),p=n(32),h=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(e){this.renderPortal()}},{key:"componentWillUnmount",value:function(){i.a.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"renderPortal",value:function(e){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var t=this.props.children;"function"===typeof t.type&&(t=r.a.cloneElement(t)),i.a.render(t,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),t}(r.a.Component),m=n(10);function f(e){var t=Object(a.useState)("green"),n=Object(o.a)(t,1)[0],l=Object(a.useState)([50,50]),i=Object(o.a)(l,2),u=i[0],c=i[1];return r.a.createElement(m.Group,{width:100,height:100},r.a.createElement(m.Rect,{x:50,y:50,width:100,height:100,fill:n,shadowBlur:5,draggable:!0,onDragMove:function(e){c([e.currentTarget.attrs.y,e.currentTarget.attrs.x]),console.log([e.evt.screenX,e.evt.screenY])}}),r.a.createElement(h,null,r.a.createElement("div",null,r.a.createElement("input",{style:{position:"absolute",top:u[0]+50,left:u[1]+6,width:"100px"},type:"text",placeholder:"some text"}))))}Object(l.render)(r.a.createElement(function(e){return r.a.createElement(m.Stage,{width:window.innerWidth,height:window.innerHeight},r.a.createElement(m.Layer,null,r.a.createElement(f,null)))},null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.bf7d1b61.chunk.js.map