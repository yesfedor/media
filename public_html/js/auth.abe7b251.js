(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{"0056":function(t,e,i){"use strict";i("f667")},"2fef":function(t,e,i){"use strict";i.r(e);var s=i("7a23"),n={class:"container mt-3 pt-5"},r={key:0,class:"row d-flex justify-content-center align-items-center mt-5"},c={class:"col-12 col-lg-6 my-3 py-3 border border-white rounded theme-panel text-center"},o=Object(s["i"])("h3",{class:"theme-title my-0 py-3"},"Авторизация",-1),a=Object(s["i"])("h4",{class:"theme-text my-0 py-3"},"Выполните авторизацию на INY.SU, чтобы получить доступ к просмотру фильмов и сериалов",-1),u={key:1,class:"row justify-content-center align-items-center mt-5"},l={class:"col-12 col-lg-7 text-center theme-panel rounded py-3"},h={class:"h1-responsive mt-0 mb-3 py-3"},b={class:"list-group border"},m=Object(s["i"])("li",{class:"list-group-item theme-panel-primary border border-primary theme-title py-3"},"Управление аккаунтом",-1),p=Object(s["h"])("Плейлисты"),d=Object(s["h"])("История просмотров"),f=Object(s["i"])("a",{class:"list-group-item list-group-item-action theme-panel theme-title py-3",href:"https://iny.su",target:"_blank"},"Вернуться на INY.SU",-1);function g(t,e,i,g,j,y){var O=Object(s["x"])("router-link");return Object(s["s"])(),Object(s["e"])("div",n,[j.status?(Object(s["s"])(),Object(s["e"])("div",u,[Object(s["i"])("div",l,[Object(s["i"])("h1",h,Object(s["A"])(y.getWelcomeText()),1),Object(s["i"])("ul",b,[m,Object(s["i"])(O,{to:"/playlist/dashboard",class:"list-group-item list-group-item-action theme-panel theme-title py-3"},{default:Object(s["E"])((function(){return[p]})),_:1}),Object(s["i"])(O,{to:"/history",class:"list-group-item list-group-item-action theme-panel theme-title py-3"},{default:Object(s["E"])((function(){return[d]})),_:1}),f,Object(s["i"])("a",{onClick:e[2]||(e[2]=Object(s["H"])((function(t){return y.logout()}),["prevent"])),href:"#",class:"list-group-item list-group-item-action danger-color border-danger theme-title py-3"},"Выйти")])])])):(Object(s["s"])(),Object(s["e"])("div",r,[Object(s["i"])("div",c,[o,a,Object(s["i"])("button",{class:"btn btn-outline-white btn-rounded my-3 w-75",onClick:e[1]||(e[1]=function(t){return y.authWithIny()})},"Авторизоваться")])]))])}i("b0c0");var j={name:"Main",data:function(){return{user:{},status:""}},methods:{getWelcomeText:function(){var t=(new Date).getHours(),e="";switch(!0){case t>=5&&t<11:e="Доброе утро, ";break;case t>=11&&t<16:e="Добрый день, ";break;case t>=16&&t<=23:e="Добрый вечер, ";break;case t>=0&&t<5:e="Доброй ночи, ";break;default:e="Здравствуйте, ";break}return e+=this.user.name,e},authWithIny:function(){open("https://iny.su/auth?to=media.iny.su&_origin=true&api=true")},logout:function(){this.$store.commit("LOGOUT")}},mounted:function(){document.title="Авторизация на INY Media",this.status=this.$store.getters.IS_AUTH,this.user=this.$store.getters.USER},computed:{auth_staus:function(){return this.$store.getters.IS_AUTH},get_user:function(){return this.$store.getters.USER}},watch:{auth_staus:function(t){this.status=t},get_user:function(t){this.user=t}}};i("0056");j.render=g;e["default"]=j},f667:function(t,e,i){}}]);
//# sourceMappingURL=auth.abe7b251.js.map