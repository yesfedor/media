(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tops"],{be18:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a={class:"container-fluid mt-3 pt-5"},i=Object(n["i"])("div",{class:"row"},[Object(n["i"])("div",{class:"col-12 text-center"},[Object(n["i"])("h1",{class:"theme-title mb-3 py-3"},"В тренде")])],-1),o={key:0,class:"row justify-content-center"},s={key:1,class:"row justify-content-center"},r={class:"col-12 col-md-6 col-lg-4 text-center border border-white theme-panel rounded z-depth-3 py-4"},b=Object(n["i"])("h4",{class:"mt-2 mb-3"},"Как-то здесь пусто",-1),d=Object(n["h"])("К поиску");function u(t,e,c,u,l,p){var j=Object(n["x"])("MediaCart"),O=Object(n["x"])("router-link");return Object(n["s"])(),Object(n["e"])("div",a,[i,l.topsData.length>0?(Object(n["s"])(),Object(n["e"])("div",o,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(l.topsData,(function(t){return Object(n["s"])(),Object(n["e"])(j,{key:t.filmId,view:"default",kpid:t.filmId,type:t.type,nameRu:t.nameRu,year:t.year},null,8,["kpid","type","nameRu","year"])})),128))])):(Object(n["s"])(),Object(n["e"])("div",s,[Object(n["i"])("div",r,[b,Object(n["i"])(O,{class:"btn btn-outline-white btn-rounded mt-3 mb-2 z-depth-0",to:"/search"},{default:Object(n["E"])((function(){return[d]})),_:1})])]))])}var l=c("bc3a"),p=c.n(l),j=c("a246"),O={name:"Tops",components:{MediaCart:j["a"]},data:function(){return{topsData:[]}},mounted:function(){var t=this;document.title="Топ 10 самых просматриваемых фильмов и сериалов",p.a.get("https://iny.su/api.php?_action=media.getTop10&v=0.1").then((function(e){t.topsData=e.data.topData}))}};O.render=u;e["default"]=O}}]);
//# sourceMappingURL=tops.82d757f4.js.map