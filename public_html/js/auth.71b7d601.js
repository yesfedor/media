(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{"2fef":function(t,e,s){"use strict";s.r(e);s("b0c0");var c=s("7a23"),n={class:"container"},o={key:0,class:"row d-flex justify-content-center py-3 my-5"},r=Object(c["g"])("div",{class:"col-12 text-center"},[Object(c["g"])("h1",{class:"theme-title mb-3"},"Авторизация на сайте β"),Object(c["g"])("h5",{class:"my-0"},[Object(c["f"])("Должен быть активный аккаунт на "),Object(c["g"])("a",{class:"theme-link",href:"//iny.su/auth",target:"_blank"},"iny.su")])],-1),l={class:"col-12 col-md-6 form-outline mb-3 mx-3"},a=Object(c["g"])("label",{class:"form-label theme-text active"},"username or login",-1),i={class:"col-12 col-md-6 form-outline mt-3 mx-3"},u=Object(c["g"])("label",{class:"form-label theme-text"},"password",-1),m={class:"col-12 my-3 text-center"},h={key:1,class:"row d-flex justify-content-center"},b={class:"col-12 text-center my-5"},d={class:"theme-title mb-3"};function g(t,e,s,g,O,j){var p=this;return Object(c["p"])(),Object(c["d"])("div",n,[t.user.auth?(Object(c["p"])(),Object(c["d"])("div",h,[Object(c["g"])("div",b,[Object(c["g"])("h1",d,"Привет, "+Object(c["y"])(t.user.name)+" "+Object(c["y"])(t.user.surname),1),Object(c["g"])("h5",{onClick:e[5]||(e[5]=function(e){p.$store.commit("LOGOUT",t.user.uid),t.user.auth=!1})},"Выйти")])])):(Object(c["p"])(),Object(c["d"])("div",o,[r,Object(c["g"])("div",l,[Object(c["C"])(Object(c["g"])("input",{placeholder:"username or login",type:"text",class:"form-control theme-text",onKeypress:e[1]||(e[1]=Object(c["D"])((function(t){return j.auth()}),["enter"])),"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.login=e})},null,544),[[c["A"],t.login]]),a]),Object(c["g"])("div",i,[Object(c["C"])(Object(c["g"])("input",{type:"password",class:"form-control theme-text",onKeypress:e[3]||(e[3]=Object(c["D"])((function(t){return j.auth()}),["enter"])),"onUpdate:modelValue":e[4]||(e[4]=function(e){return t.password=e})},null,544),[[c["A"],t.password]]),u]),Object(c["g"])("div",m,[Object(c["g"])("h5",null,Object(c["y"])(t.msg),1)])]))])}var O={name:"Auth",components:{},data:function(){return{login:"",password:"",msg:"",user:{auth:!1}}},methods:{auth:function(){var t=this;this.login&&""!=this.password?(this.$store.dispatch("LOGIN",{login:this.login,password:this.password}),this.msg="Загрузка",setTimeout((function(){t.$store.getters.IS_AUTH?t.user=t.$store.getters.USER:t.msg="неверные данные"}),1e3)):this.msg="Заполните поля"}},mounted:function(){document.title="Auth",this.msg="Авторизуйтесь",this.$store.getters.IS_AUTH&&(this.user=this.$store.getters.USER)},watch:{$store:function(t,e){console.log(t,e)}}};O.render=g;e["default"]=O}}]);
//# sourceMappingURL=auth.71b7d601.js.map