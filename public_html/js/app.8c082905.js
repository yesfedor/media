(function(e){function t(t){for(var n,o,r=t[0],s=t[1],l=t[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},c=[];function o(e){return r.p+"js/"+({auth:"auth",playlist:"playlist",search:"search",subscriptions:"subscriptions",tops:"tops",watch:"watch",welcome:"welcome","watch.intro":"watch.intro","watch.player":"watch.player"}[e]||e)+"."+{auth:"10deb25a",playlist:"5cad9e01",search:"038b5f00",subscriptions:"5334413f",tops:"82d757f4",watch:"3177331c",welcome:"393784fd","watch.intro":"34344b83","watch.player":"1abce4d5"}[e]+".js"}function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=n);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=o(e);var l=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",l.name="ChunkLoadError",l.type=n,l.request=c,a[1](l)}i[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=l;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2324:function(e,t,a){"use strict";a("e091")},"3a2e":function(e,t,a){"use strict";a("fb6a");var n=a("7a23"),i={key:0,class:"col-12 mb-3 col-md-6 col-lg-4 col-xl-3 embed-responsive embed-responsive-16by9"},c={class:"col-12 text-center"},o={class:"white-text my-2"},r={class:"col-12 text-center"},s={class:"d-lg-none white-text my-2"},l={class:"d-none d-lg-block white-text my-2"},u={class:"col-12 text-center"},b={key:1,class:"col-12"},d={class:"row"},p={class:"col-12 text-center"},h={class:"white-text my-2"},m={class:"col-12 text-center"},O={class:"d-lg-none white-text my-2"},j={class:"d-none d-lg-block white-text my-2"},f={class:"col-12 text-center"};function v(e,t,a,v,g,y){var w=Object(n["x"])("MediaCart");return"closed"===g.state?(Object(n["s"])(),Object(n["e"])("div",i,[Object(n["i"])("div",{onClick:t[2]||(t[2]=function(e){return y.go()}),class:"row justify-content-center align-items-center card-poster theme-duration card-poster_view-default embed-responsive-item ml-0 cursor-pointer rounded px-3",style:{"background-image":y.getBgImage()}},[Object(n["i"])("div",c,[Object(n["i"])("h4",o,Object(n["A"])(g.label_type),1)]),Object(n["i"])("div",r,[Object(n["i"])("h4",s,Object(n["A"])(y.getShortTitleFromMobile(g.title)),1),Object(n["i"])("h4",l,Object(n["A"])(y.getShortTitleFromPC(g.title)),1)]),Object(n["i"])("div",u,[Object(n["i"])("button",{onClick:t[1]||(t[1]=Object(n["H"])((function(e){return y.toggleState()}),["stop"])),class:"btn btn-outline-white btn-rounded btn-large my-2 w-100"},Object(n["A"])("closed"===g.state?"Раскрыть":"Скрыть"),1)])],4)])):(Object(n["s"])(),Object(n["e"])("div",b,[Object(n["i"])("div",d,[Object(n["i"])("div",{onClick:t[4]||(t[4]=function(e){return y.go()}),class:"col-12 mb-3 col-md-6 col-lg-4 col-xl-3 embed-responsive embed-responsive-16by9"},[Object(n["i"])("div",{class:"row justify-content-center align-items-center card-poster theme-duration card-poster_view-default embed-responsive-item ml-0 cursor-pointer rounded px-3",style:{"background-image":y.getBgImage()}},[Object(n["i"])("div",p,[Object(n["i"])("h4",h,Object(n["A"])(g.label_type),1)]),Object(n["i"])("div",m,[Object(n["i"])("h4",O,Object(n["A"])(y.getShortTitleFromMobile(g.title)),1),Object(n["i"])("h4",j,Object(n["A"])(y.getShortTitleFromPC(g.title)),1)]),Object(n["i"])("div",f,[Object(n["i"])("button",{onClick:t[3]||(t[3]=Object(n["H"])((function(e){return y.toggleState()}),["stop"])),class:"btn btn-outline-white btn-rounded my-2 w-100"},Object(n["A"])("closed"===g.state?"Раскрыть":"Скрыть"),1)])],4)]),(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(g.playlistData.slice(0,3),(function(e){return Object(n["s"])(),Object(n["e"])(w,{key:e.filmId,view:"default",kpid:e.filmId,type:e.type,nameRu:e.nameRu,year:e.year},null,8,["kpid","type","nameRu","year"])})),128))])]))}var g=a("a246"),y=a("bc3a"),w=a.n(y),x={name:"MediaPlaylist",components:{MediaCart:g["a"]},props:{alias:String,initState:String},data:function(){return{state:"closed",title:"",label_type:"Плейлист",playlistData:[]}},methods:{go:function(){this.$router.push("/playlist/"+this.alias)},toggleState:function(){"closed"===this.state?this.state="opened":this.state="closed"},getBgImage:function(){var e,t,a=0;return a=this.playlistData.length>=4?null===(e=this.playlistData[this.playlistData.length-1])||void 0===e?void 0:e.filmId:null===(t=this.playlistData[0])||void 0===t?void 0:t.filmId,"url(https://kinopoiskapiunofficial.tech/images/posters/kp/".concat(a,".jpg)")},getShortTitleFromMobile:function(e){return e.length>49?e.substr(0,46)+"...":e},getShortTitleFromPC:function(e){return e.length>98?e.substr(0,94)+"...":e}},mounted:function(){var e=this;this.initState&&(this.state=this.initState),w.a.get("https://iny.su/api.php?_action=media.playlist&v=0.1&act=get&alias="+this.alias).then((function(t){e.title=t.data.playlist.title,e.playlistData=t.data.playlist.content}))}};x.render=v;t["a"]=x},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function i(e,t,a,i,c,o){var r=Object(n["x"])("AppHeader"),s=Object(n["x"])("router-view"),l=Object(n["x"])("AppFooter");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(r,{logo:c.logo},null,8,["logo"]),Object(n["i"])(s,{class:"router-view-height"},{default:Object(n["E"])((function(e){var t=e.Component;return[Object(n["i"])(n["b"],{name:"router-view",duration:{enter:600,leave:600},mode:"out-in","enter-to-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:Object(n["E"])((function(){return[(Object(n["s"])(),Object(n["e"])(Object(n["y"])(t)))]})),_:2},1024)]})),_:1}),Object(n["i"])(l,{logo:c.logo},null,8,["logo"])],64)}a("b0c0");var c={class:"container"},o=Object(n["i"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#appNavbarTop","aria-controls":"appNavbarTop","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["i"])("i",{class:"fas fa-bars theme-title"})],-1),r={class:"collapse navbar-collapse theme-panel-blur-mobile",id:"appNavbarTop"},s={class:"navbar-nav mr-auto"},l={class:"nav-item"},u=Object(n["h"])("В тренде"),b={class:"nav-item"},d=Object(n["h"])("Поиск"),p={class:"d-none d-lg-block form-inline pl-3 w-100"},h={class:"navbar-nav ml-auto"},m={key:0,class:"nav-item"},O=Object(n["h"])("Подписки"),j={class:"nav-item"},f=Object(n["h"])("Аккаунт");function v(e,t,a,i,v,g){var y=Object(n["x"])("router-link");return Object(n["s"])(),Object(n["e"])("nav",{class:["navbar navbar-expand-lg fixed-top theme-header z-depth-0",0===e.position[1]&&"Watch"!==e.$route.name?"":"theme-panel-blur theme-border-bottom-header"]},[Object(n["i"])("div",c,[Object(n["i"])(y,{class:"navbar-brand theme-title",to:"/"},{default:Object(n["E"])((function(){return[Object(n["h"])(Object(n["A"])(a.logo),1)]})),_:1}),o,Object(n["i"])("div",r,[Object(n["i"])("ul",s,[Object(n["i"])("li",l,[Object(n["i"])(y,{class:"nav-link theme-title",to:"/tops"},{default:Object(n["E"])((function(){return[u]})),_:1})]),Object(n["i"])("li",b,[Object(n["i"])(y,{class:"nav-link theme-title d-lg-none",to:"/search"},{default:Object(n["E"])((function(){return[d]})),_:1}),Object(n["i"])("form",p,[g.searchBlock?Object(n["F"])((Object(n["s"])(),Object(n["e"])("input",{key:0,onKeypress:t[1]||(t[1]=Object(n["G"])(Object(n["H"])((function(e){return g.goToSearch()}),["prevent"]),["enter"])),class:"form-control border-white theme-header theme-panel-blur theme-title placeholder-text w-100",type:"text",placeholder:"Поиск","aria-label":"Search","onUpdate:modelValue":t[2]||(t[2]=function(e){return v.AppNavbarSearch=e})},null,544)),[[n["C"],v.AppNavbarSearch]]):Object(n["f"])("",!0)])])]),Object(n["i"])("ul",h,[v.auth?(Object(n["s"])(),Object(n["e"])("li",m,[Object(n["i"])(y,{class:"nav-link theme-title",to:"/subscriptions"},{default:Object(n["E"])((function(){return[O]})),_:1})])):Object(n["f"])("",!0),Object(n["i"])("li",j,[Object(n["i"])(y,{class:"nav-link theme-title",to:"/auth"},{default:Object(n["E"])((function(){return[f]})),_:1})])])])])],2)}var g=a("ade3");function y(e){return{data:function(){return Object(g["a"])({},e,[0,0])},created:function(){var t=this;this.$isServer||(this._scrollListener=function(){t[e]=[Math.round(window.pageXOffset),Math.round(window.pageYOffset)]},this._scrollListener(),window.addEventListener("scroll",this._scrollListener))},beforeDestroy:function(){window.removeEventListener("scroll",this._scrollListener)}}}var w={name:"AppHeader",props:{logo:String},mixins:[y("position")],data:function(){return{AppNavbarSearch:"",auth:void 0}},mounted:function(){this.auth=this.$store.getters.IS_AUTH},computed:{get_auth:function(){return this.$store.getters.IS_AUTH},searchBlock:function(){return"Search"!==this.$route.name}},methods:{goToSearch:function(){var e="/search?request=".concat(this.AppNavbarSearch);"Watch"===this.$route.name?window.open(e,"blank"):this.$router.push(e),this.AppNavbarSearch=""}},watch:{get_auth:function(e){this.auth=e}}};w.render=v;var x=w,k={class:"theme-footer text-center text-lg-start"},S={class:"text-center theme-text p-3"},_={class:"theme-title",target:"_blank",href:"https://iny.su/"};function A(e,t,a,i,c,o){return Object(n["s"])(),Object(n["e"])("footer",k,[Object(n["i"])("div",S,[Object(n["h"])(" © "+Object(n["A"])(c.year)+" Copyright: ",1),Object(n["i"])("a",_,Object(n["A"])(a.logo),1)])])}var T={name:"AppFooter",props:{logo:String},data:function(){return{year:(new Date).getFullYear()}}};T.render=A;var I=T,M={name:"App",components:{AppHeader:x,AppFooter:I},data:function(){return{logo:"INY Media"}},mounted:function(){var e=this;window.addEventListener("storage",(function(t){"jwt"===t.key&&("LOGOUT"===t.newValue?e.$store.commit("LOGOUT"):e.$store.commit("LOGIN",t.newValue))}));var t=localStorage.getItem("jwt");t&&"LOGOUT"!==t&&this.$store.commit("LOGIN",t)},watch:{}};a("7eb1");M.render=i;var C=M,L=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),E={class:"container-fluid px-0"},N=Object(n["i"])("div",{class:"row"},[Object(n["i"])("div",{class:"col-12 col-lg-6 offset-lg-3 theme-panel rounded text-center my-3 py-5"},[Object(n["i"])("h1",{class:"h4 theme-title mb-1 px-1 px-lg-4 font-weight-lighter"}," Вы уже написали в гугле «сериал смотреть онлайн» и листаете большой перечень ресурсов, где между волнующего момента возлюбленного телесериала вам нежданно-негаданно предложат сделать ставку или узнать о волшебном средстве, которое вылечит от всех болезней. Дальше лучше не листать, вы на верном пути: на INY Media возможно законно смотреть знаменитые телесериалы онлайн, не отрываясь на рекламу и прочую суету. ")])],-1),P={class:"row justify-content-center"};function $(e,t,a,i,c,o){var r=Object(n["x"])("MediaCarousel"),s=Object(n["x"])("MediaPlaylist");return Object(n["s"])(),Object(n["e"])("div",E,[Object(n["i"])(r),N,Object(n["i"])("div",P,[Object(n["i"])(s,{initState:"opened",alias:"welcome_netflix"}),Object(n["i"])(s,{initState:"opened",alias:"welcome_apple"}),Object(n["i"])(s,{initState:"opened",alias:"welcome_hbo"}),Object(n["i"])(s,{initState:"opened",alias:"welcome_showtime"}),Object(n["i"])(s,{initState:"opened",alias:"welcome_amc"})])])}var D={id:"media-carousel-1",class:"carousel slide carousel-fade z-depth-0","data-interval":"3000","data-ride":"false"},F={class:"carousel-indicators"},G={class:"carousel-inner",role:"listbox"},H={class:"view not-select"},U={key:1,class:"carousel-img-responsive",autoplay:"",loop:"",muted:""},W=Object(n["i"])("source",{src:"//media.iny.su/file/videos/playlist1_trailer.mp4",type:"video/mp4"},null,-1),R=Object(n["i"])("div",{class:"mask carousel-mask"},null,-1),B={class:"col-12 col-lg-8 offset-lg-2"},q={class:"d-none d-lg-block display-4 theme-title mb-lg-5"},Y={class:"d-block d-lg-none h2-responsive theme-title mb-lg-5"},V=Object(n["i"])("button",{class:"btn btn-small btn-lg-large btn-white btn-rounded w-max mb-lg-5"},"Смотреть",-1),z=Object(n["i"])("a",{class:"carousel-control-prev",href:"#media-carousel-1",role:"button","data-slide":"prev"},[Object(n["i"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(n["i"])("span",{class:"sr-only"},"Предыдущий")],-1),J=Object(n["i"])("a",{class:"carousel-control-next",href:"#media-carousel-1",role:"button","data-slide":"next"},[Object(n["i"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(n["i"])("span",{class:"sr-only"},"Следующий")],-1);function K(e,t,a,i,c,o){return Object(n["s"])(),Object(n["e"])("div",D,[Object(n["i"])("ol",F,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(c.mediaData,(function(e,t,a){return Object(n["s"])(),Object(n["e"])("li",{key:t,"data-target":"#media-carousel-1","data-slide-to":a,class:0===a?"active":""},null,10,["data-slide-to"])})),128))]),Object(n["i"])("div",G,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(c.mediaData,(function(e,t,a){return Object(n["s"])(),Object(n["e"])("div",{key:t,class:["carousel-item carousel-view-height",0===a?"active":""]},[Object(n["i"])("div",H,["img"===e.type?(Object(n["s"])(),Object(n["e"])("img",{key:0,class:"carousel-img-responsive",src:e.src,alt:"Gallery Item"},null,8,["src"])):Object(n["f"])("",!0),"video"===e.type?(Object(n["s"])(),Object(n["e"])("video",U,[W])):Object(n["f"])("",!0),R]),Object(n["i"])("div",{onClick:function(a){return o.go(e.object,t)},class:"carousel-caption cursor-pointer row"},[Object(n["i"])("div",B,[Object(n["i"])("h1",q,Object(n["A"])(e.title),1),Object(n["i"])("h1",Y,Object(n["A"])(e.title),1),V])],8,["onClick"])],2)})),128))]),z,J])}a("99af");var X=a("bc3a"),Q=a.n(X),Z={name:"MediaCarousel",data:function(){return{mediaData:{}}},mounted:function(){var e=this,t=new Date,a="https://iny.su/api/0.1/media/getCarouselData.json?v=".concat(t.getFullYear(),"-").concat(t.getUTCHours());Q.a.get(a).then((function(t){e.mediaData=t.data}))},methods:{go:function(e,t){switch(e){case"kpid":this.$router.push("/watch"+t);break;case"playlist":this.$router.push("/playlist/"+t);break}}}};a("2324");Z.render=K;var ee=Z,te=a("3a2e"),ae={name:"Main",props:{auth:String,_origin:String},components:{MediaCarousel:ee,MediaPlaylist:te["a"]},data:function(){return{data:""}},methods:{maybeWelcome:function(){var e=localStorage.getItem("isWelcomeShowV1")||!1;e||this.$router.push("/welcome")}},mounted:function(){this.maybeWelcome(),""!==this.auth&&"iny.su"===this._origin&&(this.$store.commit("LOGIN",this.auth),this.$router.push("/")),document.title="INY Media - Онлайн кинотеатр"}};ae.render=$;var ne=ae,ie={class:"container-fluid mt-5"},ce={class:"row mt-5"},oe={class:"col-12 text-center"},re=Object(n["i"])("h1",{class:"theme-title my-0 py-3"},"Ошибка 404",-1),se=Object(n["i"])("h4",{class:"theme-text py-3"},"Вы попали на несуществующую страницу",-1),le={class:"py-3"},ue=Object(n["h"])("На главную");function be(e,t,a,i,c,o){var r=Object(n["x"])("router-link");return Object(n["s"])(),Object(n["e"])("div",ie,[Object(n["i"])("div",ce,[Object(n["i"])("div",oe,[re,se,Object(n["i"])("h4",le,[Object(n["i"])(r,{to:"/",class:"theme-link"},{default:Object(n["E"])((function(){return[ue]})),_:1})])])])])}var de={name:"Error404",mounted:function(){document.title="Вы попали на несуществующую страницу"}};de.render=be;var pe=de,he=[{path:"/",name:"Main",component:ne,alias:"/main",props:function(e){return{auth:e.query.auth?e.query.auth:"",_origin:e.query._origin?e.query._origin:""}}},{path:"/search",name:"Search",component:function(){return a.e("search").then(a.bind(null,"2d3b"))}},{path:"/playlist/dashboard",name:"PlaylistDashboard",component:function(){return a.e("playlist").then(a.bind(null,"0f98"))},props:!0},{path:"/playlist/:alias",name:"Playlist",component:function(){return a.e("playlist").then(a.bind(null,"2059"))},props:!0},{path:"/tops",name:"Tops",component:function(){return a.e("tops").then(a.bind(null,"be18"))}},{path:"/subscriptions",name:"Subscriptions",component:function(){return a.e("subscriptions").then(a.bind(null,"3c4f"))}},{path:"/auth",name:"Auth",component:function(){return a.e("auth").then(a.bind(null,"2fef"))}},{path:"/watch:kpid",name:"Watch",component:function(){return a.e("watch").then(a.bind(null,"4eb8"))},props:!0},{path:"/welcome",name:"Welcome",component:function(){return a.e("welcome").then(a.bind(null,"eec5"))}},{path:"/:pathMatch(.*)*",name:"Error404",component:pe}],me=Object(L["a"])({history:Object(L["b"])("/"),routes:he}),Oe=me,je=(a("1276"),a("ac1f"),a("5502")),fe=Object(je["a"])({state:{user:{auth:!1,uid:"",name:"",surname:"",jwt:""}},getters:{IS_AUTH:function(e){return e.user.auth},USER:function(e){return e.user},JWT:function(e){return e.user.jwt}},mutations:{LOGIN:function(e,t){var a=JSON.parse(atob(t.split(".")[1]));e.user.auth=!0,e.user.uid=a.uid,e.user.name=a.name,e.user.surname=a.surname,e.user.jwt=t,localStorage.setItem("jwt",t)},LOGOUT:function(e){localStorage.setItem("jwt","LOGOUT"),e.user={auth:!1,uid:"",name:"",surname:"",jwt:""}}},actions:{AUTH:function(e,t){Q.a.get("https://iny.su/api.php?_action=auth.jwt&v=0.1&login=".concat(t.login,"&password=").concat(t.password)).then((function(t){var a=t.data;!0===a.auth&&e.commit("LOGIN",a.jwt)}))},REGISTER:function(e,t){Q.a.get("https://iny.su/api.php?_action=auth.jwt&v=0.1&login=".concat(t.login,"&password=").concat(t.password))}},modules:{}});Object(n["d"])(C).use(fe).use(Oe).mount("#app")},"7eb1":function(e,t,a){"use strict";a("beb4")},a246:function(e,t,a){"use strict";var n=a("7a23"),i={class:"col-12 text-center"},c={class:"white-text text-capitalize my-2"},o={class:"col-12 text-center"},r={class:"white-text text-capitalize my-2"},s={class:"col-12 text-center"},l={class:"white-text my-2"};function u(e,t,a,u,b,d){return Object(n["s"])(),Object(n["e"])("div",{class:["embed-responsive embed-responsive-16by9","default"===a.view?"col-12 mb-3 col-md-6 col-lg-4 col-xl-3":"col-12 mb-3"]},[Object(n["i"])("div",{onClick:t[1]||(t[1]=function(e){return d.go()}),class:["row justify-content-center align-items-center card-poster theme-duration embed-responsive-item ml-0 cursor-pointer rounded","default"===a.view?"card-poster_view-default":"card-poster_view-max-content"],style:{"background-image":d.getBgImage()}},[Object(n["i"])("div",i,[Object(n["i"])("h5",c,Object(n["A"])(b.label_type),1)]),Object(n["i"])("div",o,[Object(n["i"])("h5",r,Object(n["A"])(a.nameRu),1)]),Object(n["i"])("div",s,[Object(n["i"])("h6",l,Object(n["A"])(a.year),1)])],6)],2)}a("a9e3");var b={name:"MediaCart",props:{view:String,kpid:Number,type:String,nameRu:String,year:String},data:function(){return{label_type:""}},methods:{go:function(){this.$router.push("/watch"+this.kpid)},getBgImage:function(){return"url(https://kinopoiskapiunofficial.tech/images/posters/kp/".concat(this.kpid,".jpg)")}},mounted:function(){"FILM"===this.type&&(this.label_type="фильм"),"TV_SHOW"===this.type&&(this.label_type="сериал")}};b.render=u;t["a"]=b},beb4:function(e,t,a){},e091:function(e,t,a){}});
//# sourceMappingURL=app.8c082905.js.map