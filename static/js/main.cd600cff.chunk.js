(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(t,e,a){t.exports=a(54)},43:function(t,e,a){},50:function(t,e,a){},54:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(18),i=a.n(r),c=(a(43),a(35)),s=a(5),l=(a(44),a(12)),v=a(14),u=a(16),f=a(15),h=a(59),d=a(60),m=function(t){Object(u.a)(a,t);var e=Object(f.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return n.a.createElement(h.a,{bg:"dark",variant:"dark"},n.a.createElement(h.a.Brand,null,"Tetris Clone"),n.a.createElement(d.a,{className:"mr-auto"},n.a.createElement(d.a.Link,{href:"/"},"Home"),n.a.createElement(d.a.Link,{href:"about"},"About"),n.a.createElement(d.a.Link,{href:"about"},"Source Code"),n.a.createElement(d.a.Link,{href:"about"},"Other Projects")))}}]),a}(n.a.Component),b=a(8),k=a(56),y=a(57),T=a(58),g=function(){function t(){Object(l.a)(this,t),this.blocks=void 0,this.rotation=void 0,this.blocks=[]}return Object(v.a)(t,[{key:"updatePosition",value:function(t,e){var a,o=Object(b.a)(this.blocks);try{for(o.s();!(a=o.n()).done;){var n=a.value;n[0]+=t,n[1]+=e}}catch(r){o.e(r)}finally{o.f()}}}]),t}(),O=function(t){Object(u.a)(a,t);var e=Object(f.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).blocks=[[6,0],[6,1],[6,2],[6,3]],t.rotation=0,t}return Object(v.a)(a,[{key:"rotate",value:function(){if(this.rotation%4===0){var t,e=this.blocks[3][1],a=-1,o=Object(b.a)(this.blocks);try{for(o.s();!(t=o.n()).done;){var n=t.value;n[0]=n[0]+a,n[1]=e,a+=1}}catch(O){o.e(O)}finally{o.f()}}else if(this.rotation%4===1){var r,i=this.blocks[2][0],c=-3,s=Object(b.a)(this.blocks);try{for(s.s();!(r=s.n()).done;){var l=r.value;l[0]=i,l[1]=l[1]+c,c+=1}}catch(O){s.e(O)}finally{s.f()}}else if(this.rotation%4===2){var v,u=this.blocks[3][1],f=-2,h=Object(b.a)(this.blocks);try{for(h.s();!(v=h.n()).done;){var d=v.value;d[0]=d[0]+f,d[1]=u,f+=1}}catch(O){h.e(O)}finally{h.f()}}else{var m,k=this.blocks[1][0],y=-3,T=Object(b.a)(this.blocks);try{for(T.s();!(m=T.n()).done;){var g=m.value;g[0]=k,g[1]=g[1]+y,y+=1}}catch(O){T.e(O)}finally{T.f()}}this.rotation+=1}}]),a}(g),j=(a(50),function(t){Object(u.a)(a,t);var e=Object(f.a)(a);function a(t){var o;Object(l.a)(this,a),o=e.call(this,t);for(var n=[],r=0;r<20;r++){n[r]=[];for(var i=0;i<10;i++)n[r][i]=document.createElement("div"),n[r][i].classList.add("cell"),n[r][i].style.backgroundColor="rgba(255, 255, 255, 0.8)"}return o.state={grid:n,activeTetromino:null},o}return Object(v.a)(a,[{key:"moveTetromino",value:function(t){var e,a=this.state.grid,o=Object(b.a)(this.state.activeTetromino.blocks);try{for(o.s();!(e=o.n()).done;){var n=e.value;a[n[1]][n[0]].style.backgroundColor="rgba(255, 255, 255, 0.8)"}}catch(r){o.e(r)}finally{o.f()}37===t?this.detectCollision(this.state.activeTetromino,-1,0)||this.state.activeTetromino.updatePosition(-1,0):39===t?this.detectCollision(this.state.activeTetromino,1,0)||this.state.activeTetromino.updatePosition(1,0):40===t&&(this.detectCollision(this.state.activeTetromino,0,1)||this.state.activeTetromino.updatePosition(0,1))}},{key:"rotateTetromino",value:function(){var t=JSON.parse(JSON.stringify(this.state.activeTetromino));if(t.rotate=this.state.activeTetromino.rotate,t.rotate(),!this.detectCollision(t,0,0)){var e,a=this.state.grid,o=Object(b.a)(this.state.activeTetromino.blocks);try{for(o.s();!(e=o.n()).done;){var n=e.value;a[n[1]][n[0]].style.backgroundColor="rgba(255, 255, 255, 0.8)"}}catch(r){o.e(r)}finally{o.f()}this.state.activeTetromino.rotate()}}},{key:"drawTetromino",value:function(t){var e,a=this.state.grid,o=Object(b.a)(t.blocks);try{for(o.s();!(e=o.n()).done;){var n=e.value;a[n[1]][n[0]].style.backgroundColor="red"}}catch(r){o.e(r)}finally{o.f()}this.setState({grid:a})}},{key:"detectCollision",value:function(t,e,a){var o,n=Object(b.a)(t.blocks);try{for(n.s();!(o=n.n()).done;){var r=o.value;if(!(0<=r[0]+e&&r[0]+e<10)||!(0<=r[1]+a&&r[1]+a<20)||this.state.grid[r[1]+a][r[0]+e].storeBlock)return!0}}catch(i){n.e(i)}finally{n.f()}return!1}},{key:"componentDidMount",value:function(){for(var t=this,e=document.getElementById("main-game"),a=0;a<20;a++)for(var o=0;o<10;o++)e.appendChild(this.state.grid[a][o]);this.state.activeTetromino||this.setState({activeTetromino:new O}),window.addEventListener("keydown",(function(e){38===e.keyCode&&t.rotateTetromino(),t.moveTetromino(e.keyCode),t.drawTetromino(t.state.activeTetromino)})),setInterval((function(){var e=t.state.grid;if(t.detectCollision(t.state.activeTetromino,0,1)){var a,o=Object(b.a)(t.state.activeTetromino.blocks);try{for(o.s();!(a=o.n()).done;){var n=a.value;e[n[1]][n[0]].storeBlock=!0}}catch(s){o.e(s)}finally{o.f()}t.setState({activeTetromino:new O})}else{var r,i=Object(b.a)(t.state.activeTetromino.blocks);try{for(i.s();!(r=i.n()).done;){var c=r.value;e[c[1]][c[0]].style.backgroundColor="rgba(255, 255, 255, 0.8)"}}catch(s){i.e(s)}finally{i.f()}t.state.activeTetromino.updatePosition(0,1)}t.drawTetromino(t.state.activeTetromino)}),100)}},{key:"render",value:function(){return n.a.createElement(k.a,{style:{marginTop:"5vh"}},n.a.createElement(y.a,null,n.a.createElement(T.a,{sm:8},n.a.createElement("div",{id:"main-game"})),n.a.createElement(T.a,{sm:4},n.a.createElement("div",null,"T"))))}}]),a}(n.a.Component));var E=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,null),n.a.createElement(c.a,null,n.a.createElement(s.a,{path:"/",component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.cd600cff.chunk.js.map