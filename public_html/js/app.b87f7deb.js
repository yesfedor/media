(function(e){function t(t){for(var n,i,o=t[0],s=t[1],l=t[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r={app:0},c=[];function o(e){return s.p+"js/"+({auth:"auth",changelog:"changelog",feed:"feed",history:"history",playlist:"playlist",search:"search",subscriptions:"subscriptions",tops:"tops",watch:"watch",welcome:"welcome","watch.intro":"watch.intro","watch.player":"watch.player"}[e]||e)+"."+{auth:"81daf073",changelog:"90ebcfa1",feed:"59f73034",history:"c7dfba91",playlist:"a7ead5b8",search:"2ea759bc",subscriptions:"c82110fc",tops:"8524af82",watch:"43f292d2",welcome:"045cb9bf","watch.intro":"59df8746","watch.player":"64045b40"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={auth:1,"watch.player":1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var n="css/"+({auth:"auth",changelog:"changelog",feed:"feed",history:"history",playlist:"playlist",search:"search",subscriptions:"subscriptions",tops:"tops",watch:"watch",welcome:"welcome","watch.intro":"watch.intro","watch.player":"watch.player"}[e]||e)+"."+{auth:"41741b9d",changelog:"31d6cfe0",feed:"31d6cfe0",history:"31d6cfe0",playlist:"31d6cfe0",search:"31d6cfe0",subscriptions:"31d6cfe0",tops:"31d6cfe0",watch:"31d6cfe0",welcome:"31d6cfe0","watch.intro":"31d6cfe0","watch.player":"51737294"}[e]+".css",r=s.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete i[e],h.parentNode.removeChild(h),a(c)},h.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3a2e":function(e,t,a){"use strict";a("fb6a");var n=a("7a23"),i={key:0,class:"col-12 mb-3 col-md-6 col-lg-4 col-xl-3 embed-responsive embed-responsive-16by9"},r={class:"col-12 text-center"},c={class:"white-text my-2"},o={class:"col-12 text-center"},s={class:"d-lg-none white-text my-2"},l={class:"d-none d-lg-block white-text my-2"},u={key:0,class:"col-12 text-center"},d={key:1,class:"col-12"},h={class:"row"},b={class:"col-12 text-center"},p={class:"white-text my-2"},m={class:"col-12 text-center"},f={class:"d-lg-none white-text my-2"},O={class:"d-none d-lg-block white-text my-2"},j={key:0,class:"col-12 text-center"};function g(e,t,a,g,v,y){var w=Object(n["z"])("MediaCart");return"closed"===v.state?(Object(n["s"])(),Object(n["e"])("div",i,[Object(n["i"])("div",{onClick:t[2]||(t[2]=function(e){return y.go()}),class:[a.theme,"row justify-content-center align-items-center theme-duration card-poster_view-default embed-responsive-item ml-0 cursor-pointer rounded px-3"],style:{"background-image":y.getBgImage()}},[Object(n["i"])("div",r,[Object(n["i"])("h4",c,Object(n["C"])(v.label_type),1)]),Object(n["i"])("div",o,[Object(n["i"])("h4",s,Object(n["C"])(y.getShortTitleFromMobile(v.title)),1),Object(n["i"])("h4",l,Object(n["C"])(y.getShortTitleFromPC(v.title)),1)]),a.actionBtn?(Object(n["s"])(),Object(n["e"])("div",u,[Object(n["i"])("button",{onClick:t[1]||(t[1]=Object(n["J"])((function(e){return y.toggleState()}),["stop"])),class:"btn btn-outline-white btn-rounded btn-large my-2 w-100"},Object(n["C"])("closed"===v.state?"Раскрыть":"Скрыть"),1)])):Object(n["f"])("",!0)],6)])):(Object(n["s"])(),Object(n["e"])("div",d,[Object(n["i"])("div",h,[Object(n["i"])("div",{onClick:t[4]||(t[4]=function(e){return y.go()}),class:"col-12 mb-3 col-md-6 col-lg-4 col-xl-3 embed-responsive embed-responsive-16by9"},[Object(n["i"])("div",{class:[a.theme,"row justify-content-center align-items-center theme-duration card-poster_view-default embed-responsive-item ml-0 cursor-pointer rounded px-3"],style:{"background-image":y.getBgImage()}},[Object(n["i"])("div",b,[Object(n["i"])("h4",p,Object(n["C"])(v.label_type),1)]),Object(n["i"])("div",m,[Object(n["i"])("h4",f,Object(n["C"])(y.getShortTitleFromMobile(v.title)),1),Object(n["i"])("h4",O,Object(n["C"])(y.getShortTitleFromPC(v.title)),1)]),a.actionBtn?(Object(n["s"])(),Object(n["e"])("div",j,[Object(n["i"])("button",{onClick:t[3]||(t[3]=Object(n["J"])((function(e){return y.toggleState()}),["stop"])),class:"btn btn-outline-white btn-rounded my-2 w-100"},Object(n["C"])("closed"===v.state?"Раскрыть":"Скрыть"),1)])):Object(n["f"])("",!0)],6)]),(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(v.playlistData.slice(0,3),(function(e){return Object(n["s"])(),Object(n["e"])(w,{key:e.filmId,view:"default",kpid:e.filmId,type:e.type,nameRu:e.nameRu,year:e.year},null,8,["kpid","type","nameRu","year"])})),128))])]))}var v=a("a246"),y=a("bc3a"),w=a.n(y),k={name:"MediaPlaylist",components:{MediaCart:v["a"]},props:{alias:String,initState:String,theme:{default:"card-poster",required:!1,type:String},actionBtn:{default:!0,required:!1,type:Boolean}},data:function(){return{state:"closed",title:"",poster:"",label_type:"Плейлист",playlistData:[]}},methods:{go:function(){this.$router.push("/playlist/"+this.alias)},toggleState:function(){"closed"===this.state?this.state="opened":this.state="closed"},getBgImage:function(){var e,t;if(this.poster)return"url(".concat(this.poster,")");var a=0;return a=this.playlistData.length>=4?null===(e=this.playlistData[this.playlistData.length-1])||void 0===e?void 0:e.filmId:null===(t=this.playlistData[0])||void 0===t?void 0:t.filmId,"url(https://kinopoiskapiunofficial.tech/images/posters/kp/".concat(a,".jpg)")},getShortTitleFromMobile:function(e){return e.length>49?e.substr(0,46)+"...":e},getShortTitleFromPC:function(e){return e.length>98?e.substr(0,94)+"...":e}},mounted:function(){var e=this;this.initState&&(this.state=this.initState),w.a.get("https://iny.su/api.php?_action=media.playlist&v=0.1&act=get&alias="+this.alias).then((function(t){e.poster=t.data.playlist.poster,e.title=t.data.playlist.title,e.playlistData=t.data.playlist.content}))}};k.render=g;t["a"]=k},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function i(e,t,a,i,r,c){var o=Object(n["z"])("AppHeader"),s=Object(n["z"])("router-view"),l=Object(n["z"])("AppFooter");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(o,{logo:r.logo},null,8,["logo"]),Object(n["i"])(s,{class:"router-view-height"},{default:Object(n["G"])((function(e){var t=e.Component;return[Object(n["i"])(n["b"],{name:"router-view",duration:{enter:600,leave:600},mode:"out-in","enter-to-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:Object(n["G"])((function(){return[(Object(n["s"])(),Object(n["e"])(Object(n["A"])(t)))]})),_:2},1024)]})),_:1}),Object(n["i"])(l,{logo:r.logo},null,8,["logo"])],64)}a("b0c0");var r={class:"container"},c=Object(n["i"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#appNavbarTop","aria-controls":"appNavbarTop","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["i"])("i",{class:"fas fa-bars theme-title"})],-1),o={class:"collapse navbar-collapse theme-panel-blur-mobile",id:"appNavbarTop"},s={class:"navbar-nav mr-auto"},l={class:"nav-item"},u=Object(n["h"])("В тренде"),d={class:"nav-item"},h=Object(n["h"])("Поиск"),b={class:"d-none d-lg-block form-inline pl-3 w-100"},p={class:"navbar-nav ml-auto"},m={key:0,class:"nav-item"},f=Object(n["h"])("Подписки"),O={class:"nav-item"};function j(e,t,a,i,j,g){var v=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["e"])("nav",{class:["navbar navbar-expand-lg fixed-top theme-header z-depth-0",0===e.position[1]&&"Watch"!==e.$route.name&&"Search"!==e.$route.name?"":"theme-panel-blur theme-border-bottom-header"]},[Object(n["i"])("div",r,[Object(n["i"])(v,{class:"navbar-brand theme-title",to:g.getLogoLink()},{default:Object(n["G"])((function(){return[Object(n["h"])(Object(n["C"])(a.logo),1)]})),_:1},8,["to"]),c,Object(n["i"])("div",o,[Object(n["i"])("ul",s,[Object(n["i"])("li",l,[Object(n["i"])(v,{class:"nav-link theme-title",to:"/tops"},{default:Object(n["G"])((function(){return[u]})),_:1})]),Object(n["i"])("li",d,[Object(n["i"])(v,{class:"nav-link theme-title d-lg-none",to:"/search"},{default:Object(n["G"])((function(){return[h]})),_:1}),Object(n["i"])("form",b,[g.searchBlock?Object(n["H"])((Object(n["s"])(),Object(n["e"])("input",{key:0,onKeypress:t[1]||(t[1]=Object(n["I"])(Object(n["J"])((function(e){return g.goToSearch()}),["prevent"]),["enter"])),class:"form-control border-white theme-header theme-panel-blur theme-title placeholder-text w-100",type:"text",placeholder:"Поиск","aria-label":"Search","onUpdate:modelValue":t[2]||(t[2]=function(e){return j.AppNavbarSearch=e})},null,544)),[[n["E"],j.AppNavbarSearch]]):Object(n["f"])("",!0)])])]),Object(n["i"])("ul",p,[j.auth?(Object(n["s"])(),Object(n["e"])("li",m,[Object(n["i"])(v,{class:"nav-link theme-title",to:"/subscriptions"},{default:Object(n["G"])((function(){return[f]})),_:1})])):Object(n["f"])("",!0),Object(n["i"])("li",O,[Object(n["i"])(v,{class:"nav-link theme-title",to:"/auth"},{default:Object(n["G"])((function(){return[Object(n["h"])(Object(n["C"])(g.getProfileText()),1)]})),_:1})])])])])],2)}var g=a("835a"),v={name:"AppHeader",props:{logo:String},mixins:[Object(g["a"])("position")],data:function(){return{AppNavbarSearch:"",auth:void 0,user:this.$store.getters.USER}},mounted:function(){this.auth=this.$store.getters.IS_AUTH},computed:{get_user:function(){return this.$store.getters.USER},get_auth:function(){return this.$store.getters.IS_AUTH},searchBlock:function(){return"Search"!==this.$route.name}},methods:{getLogoLink:function(){return this.auth?"/feed":this.auth?void 0:"/"},getProfileText:function(){var e;return""===(null===(e=this.user)||void 0===e?void 0:e.name)?"Войти":this.user.name},goToSearch:function(){var e="/search?request=".concat(this.AppNavbarSearch);"Watch"===this.$route.name?window.open(e,"blank"):this.$router.push(e),this.AppNavbarSearch=""}},watch:{get_auth:function(e){this.auth=e},get_user:function(e){this.user=e}}};v.render=j;var y=v,w={key:0,class:"theme-footer text-center text-lg-start"},k={class:"text-center theme-text p-3"},S={class:"theme-title",target:"_blank",href:"https://iny.su/"};function _(e,t,a,i,r,c){var o=Object(n["z"])("router-link");return"Welcome"!==e.$route.name?(Object(n["s"])(),Object(n["e"])("footer",w,[Object(n["i"])("div",k,[Object(n["h"])(" © "+Object(n["C"])(r.year)+" Copyright: ",1),Object(n["i"])("a",S,Object(n["C"])(a.logo),1),Object(n["i"])(o,{to:"/changelog",class:"theme-nav-link pl-3"},{default:Object(n["G"])((function(){return[Object(n["h"])(Object(n["C"])(r.version),1)]})),_:1})])])):Object(n["f"])("",!0)}var x={name:"AppFooter",props:{logo:String},data:function(){return{version:"media-v5.2.0",year:(new Date).getFullYear()}}};x.render=_;var C=x,T={name:"App",components:{AppHeader:y,AppFooter:C},data:function(){return{logo:"INY Media"}},mounted:function(){var e=this;window.addEventListener("storage",(function(t){"jwt"===t.key&&("LOGOUT"===t.newValue?e.$store.commit("LOGOUT"):e.$store.commit("LOGIN",t.newValue))}));var t=localStorage.getItem("jwt");t&&"LOGOUT"!==t&&this.$store.commit("LOGIN",t)},watch:{}};a("7eb1");T.render=i;var I=T,A=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),L={class:"container-fluid px-0 px-lg-3"},$={class:"row justify-content-center mt-3 px-lg-3"};function M(e,t,a,i,r,c){var o=Object(n["z"])("MediaCarousel"),s=Object(n["z"])("MediaPlaylist");return Object(n["s"])(),Object(n["e"])("div",L,[Object(n["i"])(o),Object(n["i"])("div",$,[Object(n["i"])(s,{initState:"opened",alias:"welcome_netflix"}),Object(n["i"])(s,{initState:"opened",alias:"welcome_apple"}),Object(n["i"])(s,{initState:"opened",alias:"welcome_hbo"}),Object(n["i"])(s,{initState:"opened",alias:"welcome_showtime"}),Object(n["i"])(s,{initState:"opened",alias:"welcome_amc"})])])}var N=a("e2fc"),G=a("3a2e"),E={name:"Main",props:{auth:String,_origin:String},components:{MediaCarousel:N["a"],MediaPlaylist:G["a"]},data:function(){return{data:"",isAuth:!1}},methods:{maybeWelcome:function(){var e=localStorage.getItem("isWelcomeShowV2")||!1;e||this.$router.push("/welcome")}},computed:{auth_staus:function(){return this.$store.getters.IS_AUTH}},mounted:function(){this.maybeWelcome(),""!==this.auth&&"iny.su"===this._origin&&(this.$store.commit("LOGIN",this.auth),this.$router.push("/")),this.$store.getters.IS_AUTH&&this.$router.push("/feed"),document.title="INY Media - Онлайн кинотеатр"},watch:{auth_staus:function(e){e&&this.$router.push("/feed")}}};E.render=M;var P=E,D={class:"container-fluid mt-5"},U={class:"row mt-5"},B={class:"col-12 text-center"},F=Object(n["i"])("h1",{class:"theme-title my-0 py-3"},"Ошибка 404",-1),H=Object(n["i"])("h4",{class:"theme-text py-3"},"Вы попали на несуществующую страницу",-1),z={class:"py-3"},q=Object(n["h"])("На главную");function R(e,t,a,i,r,c){var o=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["e"])("div",D,[Object(n["i"])("div",U,[Object(n["i"])("div",B,[F,H,Object(n["i"])("h4",z,[Object(n["i"])(o,{to:"/",class:"theme-link"},{default:Object(n["G"])((function(){return[q]})),_:1})])])])])}var W={name:"Error404",mounted:function(){document.title="Вы попали на несуществующую страницу"}};W.render=R;var J=W,V=[{path:"/",name:"Main",component:P,alias:"/main",props:function(e){return{auth:e.query.auth?e.query.auth:"",_origin:e.query._origin?e.query._origin:""}}},{path:"/feed",name:"Feed",component:function(){return a.e("feed").then(a.bind(null,"4787"))}},{path:"/search",name:"Search",component:function(){return a.e("search").then(a.bind(null,"2d3b"))}},{path:"/playlist/dashboard",name:"PlaylistDashboard",component:function(){return a.e("playlist").then(a.bind(null,"0f98"))},props:!0},{path:"/playlist/:alias",name:"Playlist",component:function(){return a.e("playlist").then(a.bind(null,"2059"))},props:!0},{path:"/tops",name:"Tops",component:function(){return a.e("tops").then(a.bind(null,"be18"))}},{path:"/subscriptions",name:"Subscriptions",component:function(){return a.e("subscriptions").then(a.bind(null,"3c4f"))}},{path:"/history",name:"History",component:function(){return a.e("history").then(a.bind(null,"e4bb"))}},{path:"/auth",name:"Auth",component:function(){return a.e("auth").then(a.bind(null,"2fef"))}},{path:"/watch:kpid",name:"Watch",component:function(){return a.e("watch").then(a.bind(null,"4eb8"))},props:!0},{path:"/welcome",name:"Welcome",component:function(){return a.e("welcome").then(a.bind(null,"eec5"))}},{path:"/changelog",name:"Changelog",component:function(){return a.e("changelog").then(a.bind(null,"f522"))}},{path:"/:pathMatch(.*)*",name:"Error404",component:J}],Y=Object(A["a"])({history:Object(A["b"])("/"),routes:V}),K=Y,X=(a("1276"),a("ac1f"),a("99af"),a("5502")),Q=a("bc3a"),Z=a.n(Q),ee=Object(X["a"])({state:{user:{auth:!1,uid:"",name:"",surname:"",jwt:""}},getters:{IS_AUTH:function(e){return e.user.auth},USER:function(e){return e.user},JWT:function(e){return e.user.jwt}},mutations:{LOGIN:function(e,t){var a=JSON.parse(atob(t.split(".")[1]));e.user.auth=!0,e.user.uid=a.uid,e.user.name=a.name,e.user.surname=a.surname,e.user.jwt=t,localStorage.setItem("jwt",t)},LOGOUT:function(e){localStorage.setItem("jwt","LOGOUT"),e.user={auth:!1,uid:"",name:"",surname:"",jwt:""}}},actions:{AUTH:function(e,t){Z.a.get("https://iny.su/api.php?_action=auth.jwt&v=0.1&login=".concat(t.login,"&password=").concat(t.password)).then((function(t){var a=t.data;!0===a.auth&&e.commit("LOGIN",a.jwt)}))},REGISTER:function(e,t){Z.a.get("https://iny.su/api.php?_action=auth.jwt&v=0.1&login=".concat(t.login,"&password=").concat(t.password))}},modules:{}});Object(n["d"])(I).use(ee).use(K).mount("#app")},"7eb1":function(e,t,a){"use strict";a("beb4")},"835a":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("ade3");function i(e){return{data:function(){return Object(n["a"])({},e,[0,0])},created:function(){var t=this;this.$isServer||(this._scrollListener=function(){t[e]=[Math.round(window.pageXOffset),Math.round(window.pageYOffset)]},this._scrollListener(),window.addEventListener("scroll",this._scrollListener))},beforeDestroy:function(){window.removeEventListener("scroll",this._scrollListener)}}}},"95a0":function(e,t,a){"use strict";a("d92a")},a246:function(e,t,a){"use strict";var n=a("7a23"),i={class:"col-12 text-center"},r={class:"white-text text-capitalize my-2"},c={class:"col-12 text-center"},o={class:"white-text text-capitalize my-2"},s={class:"col-12 text-center"},l={class:"white-text my-2"};function u(e,t,a,u,d,h){return Object(n["s"])(),Object(n["e"])("div",{class:["embed-responsive embed-responsive-16by9","default"===a.view?"col-12 mb-3 col-md-6 col-lg-4 col-xl-3":"col-12 mb-3"]},[Object(n["i"])("div",{onClick:t[1]||(t[1]=function(e){return h.go()}),class:["row justify-content-center align-items-center card-poster theme-duration embed-responsive-item ml-0 cursor-pointer rounded",a.theme+" "+("default"===a.view?"card-poster_view-default":"card-poster_view-max-content")],style:{"background-image":h.getBgImage()}},[Object(n["i"])("div",i,[Object(n["i"])("h5",r,Object(n["C"])(d.label_type),1)]),Object(n["i"])("div",c,[Object(n["i"])("h5",o,Object(n["C"])(a.nameRu),1)]),Object(n["i"])("div",s,[Object(n["i"])("h6",l,Object(n["C"])(a.year),1)])],6)],2)}a("a9e3");var d={name:"MediaCart",props:{theme:{default:"card-poster",required:!1,type:String},view:String,kpid:Number,type:String,nameRu:String,year:String},data:function(){return{label_type:""}},methods:{go:function(){this.$router.push("/watch"+this.kpid)},getBgImage:function(){return"url(https://kinopoiskapiunofficial.tech/images/posters/kp/".concat(this.kpid,".jpg)")}},mounted:function(){"FILM"===this.type&&(this.label_type="фильм"),"TV_SHOW"===this.type&&(this.label_type="сериал")}};d.render=u;t["a"]=d},beb4:function(e,t,a){},d92a:function(e,t,a){},e2fc:function(e,t,a){"use strict";var n=a("7a23"),i={id:"media-carousel-1",class:"carousel slide carousel-fade z-depth-0","data-interval":"3000","data-ride":"false"},r={class:"carousel-indicators"},c={class:"carousel-inner rounded",role:"listbox"},o={class:"view not-select"},s={key:1,class:"carousel-img-responsive",autoplay:"",loop:"",muted:""},l=Object(n["i"])("source",{src:"//media.iny.su/file/videos/playlist1_trailer.mp4",type:"video/mp4"},null,-1),u=Object(n["i"])("div",{class:"mask carousel-mask"},null,-1),d={class:"col-12 col-lg-8 offset-lg-2"},h={class:"d-none d-lg-block display-4 theme-title mb-lg-5"},b={class:"d-block d-lg-none h2-responsive theme-title mb-lg-5"},p=Object(n["i"])("button",{class:"btn btn-small btn-lg-large btn-white btn-rounded w-max mb-lg-5"},"Смотреть",-1),m=Object(n["i"])("a",{class:"carousel-control-prev",href:"#media-carousel-1",role:"button","data-slide":"prev"},[Object(n["i"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(n["i"])("span",{class:"sr-only"},"Предыдущий")],-1),f=Object(n["i"])("a",{class:"carousel-control-next",href:"#media-carousel-1",role:"button","data-slide":"next"},[Object(n["i"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(n["i"])("span",{class:"sr-only"},"Следующий")],-1);function O(e,t,a,O,j,g){return Object(n["s"])(),Object(n["e"])("div",i,[Object(n["i"])("ol",r,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(j.mediaData,(function(e,t,a){return Object(n["s"])(),Object(n["e"])("li",{key:t,"data-target":"#media-carousel-1","data-slide-to":a,class:0===a?"active":""},null,10,["data-slide-to"])})),128))]),Object(n["i"])("div",c,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(j.mediaData,(function(e,t,a){return Object(n["s"])(),Object(n["e"])("div",{key:t,class:["carousel-item carousel-view-height",0===a?"active":""]},[Object(n["i"])("div",o,["img"===e.type?(Object(n["s"])(),Object(n["e"])("img",{key:0,class:"carousel-img-responsive",src:e.src,alt:"Gallery Item"},null,8,["src"])):Object(n["f"])("",!0),"video"===e.type?(Object(n["s"])(),Object(n["e"])("video",s,[l])):Object(n["f"])("",!0),u]),Object(n["i"])("div",{onClick:function(a){return g.go(e.object,t)},class:"carousel-caption cursor-pointer row"},[Object(n["i"])("div",d,[Object(n["i"])("h1",h,Object(n["C"])(e.title),1),Object(n["i"])("h1",b,Object(n["C"])(e.title),1),p])],8,["onClick"])],2)})),128))]),m,f])}a("99af");var j=a("bc3a"),g=a.n(j),v={name:"MediaCarousel",data:function(){return{mediaData:{}}},mounted:function(){var e=this,t=new Date,a="https://iny.su/api/0.1/media/getCarouselData.json?v=".concat(t.getFullYear(),"-").concat(t.getUTCHours());g.a.get(a).then((function(t){e.mediaData=t.data}))},methods:{go:function(e,t){switch(e){case"kpid":this.$router.push("/watch"+t);break;case"playlist":this.$router.push("/playlist/"+t);break}}}};a("95a0");v.render=O;t["a"]=v}});
//# sourceMappingURL=app.b87f7deb.js.map