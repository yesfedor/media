(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tops"],{be18:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a={class:"container-fluid pt-5"},o=Object(n["g"])("div",{class:"row"},[Object(n["g"])("div",{class:"col-12 text-center"},[Object(n["g"])("h1",{class:"mb-3 py-3"},"В тренде")])],-1),d={key:0,class:"row justify-content-center"},r={key:1,class:"row justify-content-center"},i={class:"col-12 col-md-6 col-lg-4 text-center border border-white theme-panel rounded z-depth-3 py-4"},s=Object(n["g"])("h4",{class:"mt-2 mb-3"},"Как-то здесь пусто",-1),p=Object(n["f"])("К поиску");function b(t,e,c,b,u,l){var j=Object(n["u"])("MediaCart"),O=Object(n["u"])("router-link");return Object(n["p"])(),Object(n["d"])("div",a,[o,u.topsData.length>0?(Object(n["p"])(),Object(n["d"])("div",d,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(u.topsData,(function(t){return Object(n["p"])(),Object(n["d"])(j,{key:t.filmId,view:"default",kpid:t.filmId,type:t.type,nameRu:t.nameRu,year:t.year},null,8,["kpid","type","nameRu","year"])})),128))])):(Object(n["p"])(),Object(n["d"])("div",r,[Object(n["g"])("div",i,[s,Object(n["g"])(O,{class:"btn btn-outline-white btn-rounded mt-3 mb-2 z-depth-0",to:"/search"},{default:Object(n["A"])((function(){return[p]})),_:1})])]))])}var u=c("bc3a"),l=c.n(u),j=c("a246"),O={name:"Tops",components:{MediaCart:j["a"]},data:function(){return{topsData:[]}},mounted:function(){var t=this;document.title="Топ 10 самых просматриваемых фильмов и сериалов",l.a.get("https://iny.su/api.php?_action=media.getTop10&v=0.1").then((function(e){t.topsData=e.data.topData}))}};O.render=b;e["default"]=O}}]);
//# sourceMappingURL=tops.e4e6e737.js.map