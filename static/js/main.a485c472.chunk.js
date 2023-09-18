(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(7),s=i.n(c),a=(i(13),i(8)),n=i(2),r=i(1),l=(i(14),i(15),i(16),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=i(6),m=i.n(j);i(18);var b=function(e){var t=e.setMoviesList,i=Object(r.useState)(""),c=Object(n.a)(i,2),s=c[0],a=c[1],d=Object(r.useState)(!1),j=Object(n.a)(d,2),b=j[0],u=j[1],v=Object(r.useState)(null),h=Object(n.a)(v,2),O=h[0],x=h[1],f=Object(r.useState)(null),p=Object(n.a)(f,2),N=p[0],g=p[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){(e.preventDefault(),u(!0),s)&&function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=fc00f2c6","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(s.trim().toLowerCase()).then((function(e){if(Object.hasOwn(e,"Title")){var t=e,i=t.Title,c=t.Plot,s=t.Poster,a=t.imdbID,n={title:i,imgUrl:"N/A"===s?"https://via.placeholder.com/360x270.png?text=no%20preview":s,imdbUrl:"https://www.imdb.com/title/".concat(a),imdbId:a,description:c};g(n),x(null)}Object.hasOwn(e,"Error")&&x(e)})).finally((function(){return u(!1)}))},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":null===O||void 0===O?void 0:O.Error}),value:s,onChange:function(e){return function(e){x(null),a(e.target.value)}(e)}})}),(null===O||void 0===O?void 0:O.Error)&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{disabled:!s,"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":b}),children:"Find a movie"})}),N&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return t(N),a(""),void g(null)},children:"Add to the list"})})]})]}),N&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:N})]})]})},u=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),i=t[0],c=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(b,{setMoviesList:function(e){i.some((function(t){return t.imdbId===e.imdbId}))||c((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a485c472.chunk.js.map