(this.webpackJsonpreact_js_20=this.webpackJsonpreact_js_20||[]).push([[2],{35:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return m}));var a=n(38),c=n.n(a),i="https://api.themoviedb.org/3/",o="6b99ab3893b7ab7cc1f5e941cef2fb78",r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day";return c.a.get("".concat(i,"trending/").concat(t,"/").concat(e,"?api_key=").concat(o))},s=function(t){return c.a.get("".concat(i,"movie/").concat(t,"?api_key=").concat(o))},u=function(t){return c.a.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t))},l=function(t){return c.a.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o))},m=function(t){return c.a.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o))}},39:function(t,e,n){"use strict";var a=n(0),c=n.n(a),i=n(8),o=n(40),r=n.n(o);e.a=function(t){var e=t.data;return c.a.createElement("ul",{className:r.a.list},e.map((function(t){return c.a.createElement("li",{key:t.id,className:r.a.item},c.a.createElement(i.b,{to:"/movies/".concat(t.id),className:r.a.link,activeClassName:r.a.active},t.title||t.name))})))}},40:function(t,e,n){t.exports={list:"List_list__vXUAM",item:"List_item__2OjLz",link:"List_link__2BR6F",active:"List_active__1qNT4"}},67:function(t,e,n){t.exports={moviesList:"HomePage_moviesList__2Abnn",title:"HomePage_title__3C5Qz"}},96:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var a=n(13),c=n(14),i=n(16),o=n(15),r=n(17),s=n(0),u=n.n(s),l=n(36),m=n(35),v=n(39),f=n(67),_=n.n(f),d=function(t){function e(){var t,n;Object(a.a)(this,e);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(t=Object(o.a)(e)).call.apply(t,[this].concat(r)))).state={movies:[]},n}return Object(r.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;m.e().then((function(e){var n=e.data;t.setState({movies:n.results})})).catch((function(t){l.a.error({text:t})}))}},{key:"render",value:function(){var t=this.state.movies;return u.a.createElement("section",{className:_.a.moviesList},u.a.createElement("h1",{className:_.a.title},"Trending today"),u.a.createElement(v.a,{data:t}))}}]),e}(s.Component)}}]);
//# sourceMappingURL=HomePage.b38761c1.chunk.js.map