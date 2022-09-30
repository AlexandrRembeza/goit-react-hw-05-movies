"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[948],{6948:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,c,i,o=t(885),u=t(6871),s=t(2791),p=t(9126),f=t(1097),d=t(787),l=t(9457),x=t(3747),h=t(168),g=t(9584),v=g.Z.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  flex-wrap: wrap;\n  gap: 20px;\n\n  font-size: 20px;\n  font-weight: bold;\n\n  max-width: 1240px;\n  padding: 20px 20px;\n  margin: 0;\n\n  color: #d22f2f;\n  background-color: #feeeee;\n  border: 5px solid;\n  border-image: linear-gradient(45deg, #ee9797, #704d4d) 1;\n"]))),b=g.Z.li(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  flex-basis: calc((100% - 200px) / 5);\n"]))),m=g.Z.img(c||(c=(0,h.Z)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 15%;\n  object-fit: cover;\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 14px 28px, rgba(0, 0, 0, 0.5) 0px 10px 10px;\n"]))),w=g.Z.p(i||(i=(0,h.Z)(["\n  flex-grow: 1;\n  text-align: center;\n  margin: 0;\n"]))),y=t(184),Z=function(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,u.UO)().movieId;return(0,s.useEffect)((function(){d.b.fetchMovieActors(a).then((function(n){return r(n.cast)})).catch((function(n){return(0,f._)("\u0427\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")}))}),[a]),(0,s.useEffect)((function(){window.scroll(0,460)}),[t]),(0,y.jsx)(l.x,{display:"flex",justifyContent:"center",py:"30px",as:"section",children:0!==t.length?(0,y.jsx)(v,{children:t.map((function(n){var e=n.cast_id,t=n.character,r=n.original_name,a=n.profile_path;return(0,y.jsxs)(b,{children:[(0,y.jsx)(l.x,{width:"200px",height:"300px",children:a?(0,y.jsx)(m,{loading:"lazy",src:"https://image.tmdb.org/t/p/original".concat(a),alt:"".concat(r," image")}):(0,y.jsx)(l.x,{display:"flex",alignItems:"center",justifyContent:"center",bg:"#ece7e7",width:"100%",height:"100%",borderRadius:"15%",children:(0,y.jsx)(p.HHm,{size:150,color:"#6b6969"})})}),(0,y.jsx)(w,{children:r}),(0,y.jsxs)(w,{children:["Character: ",t]})]},e)}))}):(0,y.jsx)(l.x,{as:"section",display:"flex",justifyContent:"center",children:(0,y.jsx)(x.TX,{children:"We don't have any actors for this movie!"})})})}},3747:function(n,e,t){t.d(e,{Cq:function(){return f},TX:function(){return x},jK:function(){return p},ov:function(){return d},sv:function(){return l}});var r,a,c,i,o,u=t(168),s=t(9584),p=s.Z.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  width: 1000px;\n\n  margin: 0;\n  padding: 20px 20px;\n  border: 4px dotted #d22f2f;\n"]))),f=s.Z.article(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n\n  padding: 10px 20px;\n  background-color: #f3bbbb;\n"]))),d=s.Z.p(c||(c=(0,u.Z)(["\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0;\n"]))),l=s.Z.p(i||(i=(0,u.Z)(["\n  font-size: 17px;\n  margin: 0;\n"]))),x=s.Z.p(o||(o=(0,u.Z)(["\n  font-size: 25px;\n  padding: 20px 25px;\n  margin: 0;\n  color: #ffffff;\n  background-color: #d22f2f;\n  border-radius: 10px;\n  box-shadow: 0 10px 10px -6px #777;\n"])))},787:function(n,e,t){t.d(e,{b:function(){return r}});var r={};t.r(r),t.d(r,{fetchMovieActors:function(){return d},fetchMovieDetails:function(){return f},fetchMovieReviews:function(){return l},fetchSearchMovies:function(){return x},fetchTrendingMovies:function(){return p}});var a=t(5861),c=t(4687),i=t.n(c),o=t(4569),u=t.n(o),s="6308d1a98819d8ffdd4916cbcea5cd95";u().defaults.baseURL="https://api.themoviedb.org/3";var p=function(){var n=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.next=5,e.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("/search/movie?api_key=".concat(s,"&language=en-US&page=1&query=").concat(e));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1097:function(n,e,t){t.d(e,{_:function(){return a}});var r=t(7596);function a(n){return r.Am.error("".concat(n),{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}}]);
//# sourceMappingURL=948.c8f2e9d3.chunk.js.map