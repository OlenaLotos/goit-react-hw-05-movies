"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[8],{4146:function(n,t,e){e.d(t,{Z:function(){return b}});var r,a,c,o,u=e(885),i=e(2791),s=e(6871),p=e(168),f=e(6444),d=e(501),l=f.ZP.ul(r||(r=(0,p.Z)(["\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  background-color: #e9def0;\n  padding-top: 48px;\n  margin: 0;\n"]))),h=(0,f.ZP)(d.rU)(a||(a=(0,p.Z)(["\n  display: block;\n  color: black;\n  font-size: 16px;\n  font-weight: 400;\n  border-bottom: 2px solid transparent;\n  text-decoration: none;\n  margin-right: 20px;\n  &:hover {\n    cursor: pointer;\n    color: #806d8c;\n  }\n"]))),m=f.ZP.li(c||(c=(0,p.Z)(["\n  margin-right: 16px;\n  text-align: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,\n    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n  border-radius: 4px;\n  margin-bottom: 12px;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n  }\n"]))),v=f.ZP.img(o||(o=(0,p.Z)(["\n  height: auto;\n  width: 100%;\n  border-radius: 4px;\n  cursor: pointer;\n"]))),x=e(9793),g=e(184);function b(n){var t=n.movies,e=(0,i.useState)(""),r=(0,u.Z)(e,2),a=r[0],c=r[1],o=(0,s.TH)();return console.log(o),(0,i.useEffect)((function(){a&&c(a)}),[a]),(0,g.jsx)(g.Fragment,{children:t&&(0,g.jsx)(l,{children:t.map((function(n){var t=n.id,e=n.title,r=n.name,a=n.poster_path,c="https://image.tmdb.org/t/p/w342".concat(a);return(0,g.jsx)(m,{children:(0,g.jsxs)(h,{to:"/movies/".concat(t),state:{from:o},children:[(0,g.jsx)(v,{src:a?c:x,alt:r})," ",e||r]})},t)}))})})}},3311:function(n,t,e){var r=e(5861),a=e(7757),c=e.n(a),o=e(4569),u=e.n(o),i="1abcab100520369e11a771de2f4e2532",s="https://api.themoviedb.org/3",p=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m={fetchPopularMovies:p,fetchMoviesName:f,fetchMovieById:d,fetchFilmCasts:l,fetchFilmReviews:h};t.Z=m},4063:function(n,t,e){e.r(t),e.d(t,{default:function(){return i}});var r=e(885),a=e(2791),c=e(4146),o=e(3311),u=e(184);function i(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],i=t[1];return(0,a.useEffect)((function(){o.Z.fetchPopularMovies().then((function(n){return i(n)}))}),[]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(c.Z,{movies:e})})}},9793:function(n,t,e){n.exports=e.p+"static/media/notfound.7e7ad2815d148f623658.png"}}]);
//# sourceMappingURL=home-view.477b379f.chunk.js.map