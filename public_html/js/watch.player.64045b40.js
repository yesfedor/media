(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["watch.player"],{"057f":function(t,e,i){var n=i("fc6a"),r=i("241c").f,c={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==c.call(t)?s(t):r(n(t))}},"2ad7":function(t,e,i){},"4df4":function(t,e,i){"use strict";var n=i("0366"),r=i("7b0b"),c=i("9bdd"),a=i("e95a"),s=i("50c4"),o=i("8418"),l=i("35a1");t.exports=function(t){var e,i,u,f,b,p,d=r(t),h="function"==typeof this?this:Array,m=arguments.length,y=m>1?arguments[1]:void 0,v=void 0!==y,g=l(d),O=0;if(v&&(y=n(y,m>2?arguments[2]:void 0,2)),void 0==g||h==Array&&a(g))for(e=s(d.length),i=new h(e);e>O;O++)p=v?y(d[O],O):d[O],o(i,O,p);else for(f=g.call(d),b=f.next,i=new h;!(u=b.call(f)).done;O++)p=v?c(f,y,[u.value,O],!0):u.value,o(i,O,p);return i.length=O,i}},"6dca":function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a");var n=i("7a23"),r=Object(n["K"])("data-v-3168ab9b");Object(n["v"])("data-v-3168ab9b");var c={class:"container-fluid mt-5"},a={class:"row py-3"},s={class:"col-12 col-md-10 offset-md-1"},o={class:"row"},l={class:"col-12 col-xl-9 mt-3"},u={class:"row"},f={class:"col-12 text-center text-md-left px-md-0"},b={class:"theme-title w-100"},p=Object(n["h"])(" Плеер: "),d=Object(n["i"])("div",{class:"embed-responsive-item"},null,-1),h={id:"player-layout",class:"col-12 embed-responsive embed-responsive-16by9"},m={class:"col-12 px-3 px-md-0"},y={class:"w-75 text-left theme-title text-capitalize mt-3 mb-0 float-left"},v={class:"w-25 text-right text-muted mt-3 mb-0 float-right"},g=Object(n["i"])("hr",{class:"w-100 theme-border-white mt-3 mb-3"},null,-1),O={class:"col-12 col-lg-4 px-0 text-center text-lg-left"},j={class:"theme-text my-2"},w={class:"col-12 col-lg-8 px-0 text-center text-lg-right mt-3 mt-lg-0"},x=Object(n["i"])("a",{href:"https://go.iny.su/donate",target:"_blank",class:"btn btn-outline-primary btn-rounded"},"Донат",-1),S={class:"col-12 px-0 my-3"},k={class:"list-group list-group-flush rounded"},P={class:"list-group-item theme-panel theme-text"},C=Object(n["i"])("span",{class:"float-left w-50 text-left theme-title"},"Год производства",-1),A={class:"float-right w-50 text-left"},_={class:"list-group-item theme-panel theme-text"},I=Object(n["i"])("span",{class:"float-left w-50 text-left theme-title"},"Страна",-1),L={class:"float-right w-50 text-left"},z={class:"list-group-item theme-panel theme-text"},R=Object(n["i"])("span",{class:"float-left w-50 text-left theme-title"},"Жанр",-1),T={class:"float-right w-50 text-left"},W={class:"list-group-item theme-panel theme-text"},M=Object(n["i"])("span",{class:"float-left w-50 text-left theme-title"},"Слоган",-1),$={class:"float-right w-50 text-left"},J={class:"list-group-item theme-panel theme-text"},N=Object(n["i"])("span",{class:"float-left w-50 text-left theme-title"},"Время",-1),D={class:"float-right w-50 text-left"},E={class:"list-group-item theme-panel theme-text"},H=Object(n["i"])("span",{class:"text-left theme-title"},"Описание:",-1),B={class:"col-12 theme-panel rounded text-center py-3 my-3"},q=Object(n["i"])("h4",{class:"theme-title py-3 mb-3"},"Факты",-1),F={class:"row"},U={class:"theme-link"},Z={key:1,class:"col-12"},K=Object(n["i"])("h5",{class:"d-block theme-text text-center px-3 mb-3"},"Факты еще не подобраны",-1),Y=Object(n["i"])("div",{id:"iny-main-comments",class:"col-12 theme-panel rounded py-3 my-3"},[Object(n["i"])("div",{class:"row"},[Object(n["i"])("div",{class:"col-12 text-center"},[Object(n["i"])("h4",{class:"text-center text-center theme-title py-3"},"Комментарии")])])],-1),Q={class:"col-12 col-xl-3"},V=Object(n["i"])("div",{class:"row px-0 pl-xl-5 "},[Object(n["i"])("div",{class:"col-12 text-center mb-3"},[Object(n["i"])("h4",{class:"theme-title my-0 py-3"},"Рекомендации")])],-1),G={class:"row px-0 pl-xl-5"};Object(n["t"])();var X=r((function(t,e,i,r,X,tt){var et=Object(n["z"])("MediaCart");return Object(n["s"])(),Object(n["e"])("div",c,[Object(n["i"])("div",{class:"d-none d-lg-block bg-poster-image",style:{"background-image":tt.getBgImage()}},null,4),Object(n["i"])("div",a,[Object(n["i"])("div",s,[Object(n["i"])("div",o,[Object(n["i"])("div",l,[Object(n["i"])("div",u,[Object(n["i"])("div",f,[Object(n["i"])("h4",b,[p,Object(n["i"])("a",{class:["btn btn-link btn-sm","svetacdn"===X.currentPlayer?"btn-primary":"btn-outline-primary"],onClick:e[1]||(e[1]=function(t){return X.currentPlayer="svetacdn"})},"Svetacdn",2),Object(n["i"])("a",{class:["btn btn-link btn-sm","allohalive"===X.currentPlayer?"btn-primary":"btn-outline-primary"],onClick:e[2]||(e[2]=function(t){return X.currentPlayer="allohalive"})},"Allohalive",2),Object(n["i"])("a",{class:["btn btn-link btn-sm","bazon"===X.currentPlayer?"btn-primary":"btn-outline-primary"],onClick:e[3]||(e[3]=function(t){return X.currentPlayer="bazon"})},"Bazon",2)])]),Object(n["i"])("div",{class:[X.isPlayerActive?"d-none":"d-block","col-12 embed-responsive embed-responsive-16by9"]},[d],2),Object(n["i"])("div",h,[Object(n["i"])("iframe",{class:"embed-responsive-item",src:tt.getSrc(X.currentPlayer),frameborder:"0",scrolling:"no",allowfullscreen:"",referrerpolicy:"origin"},null,8,["src"])]),Object(n["i"])("div",m,[Object(n["i"])("h4",y,Object(n["C"])(X.type)+" "+Object(n["C"])(X.nameRu),1),Object(n["i"])("h4",v,Object(n["C"])(X.ratingAgeLimits),1)]),g,Object(n["i"])("div",O,[Object(n["i"])("h4",j,"Информация к "+Object(n["C"])(X.type)+"у",1)]),Object(n["i"])("div",w,[x,Object(n["i"])("button",{onClick:e[4]||(e[4]=function(t){return tt.subsManager()}),class:["btn btn-rounded theme-duration ml-3",X.is_subscription?"btn-outline-primary":"btn-outline-red"]},Object(n["C"])(X.is_subscription?"Отписаться":"Подписаться"),3)]),Object(n["i"])("div",S,[Object(n["i"])("ul",k,[Object(n["i"])("li",P,[C,Object(n["i"])("span",A,Object(n["C"])(X.year),1)]),Object(n["i"])("li",_,[I,Object(n["i"])("span",L,Object(n["C"])(X.countries),1)]),Object(n["i"])("li",z,[R,Object(n["i"])("span",T,Object(n["C"])(X.genres),1)]),Object(n["i"])("li",W,[M,Object(n["i"])("span",$,Object(n["C"])(X.slogan),1)]),Object(n["i"])("li",J,[N,Object(n["i"])("span",D,Object(n["C"])(X.filmLength),1)]),Object(n["i"])("li",E,[H,Object(n["h"])(" "+Object(n["C"])(X.description),1)])])]),Object(n["i"])("div",B,[q,Object(n["i"])("div",F,[X.facts.length>0?(Object(n["s"])(!0),Object(n["e"])(n["a"],{key:0},Object(n["y"])(X.facts,(function(t,e){return Object(n["s"])(),Object(n["e"])("h5",{key:e,class:"d-block theme-text text-left px-3 mb-3"},[Object(n["i"])("span",U,"#"+Object(n["C"])(e+1),1),Object(n["h"])(" "+Object(n["C"])(t),1)])})),128)):(Object(n["s"])(),Object(n["e"])("div",Z,[K]))])]),Y])]),Object(n["i"])("div",Q,[V,Object(n["i"])("div",G,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(X.recoms,(function(t){return Object(n["s"])(),Object(n["e"])(et,{key:t.filmId,view:"max-content",kpid:t.filmId,type:t.type,nameRu:t.nameRu,year:t.year},null,8,["kpid","type","nameRu","year"])})),128))])])])])])])}));function tt(t){if(Array.isArray(t))return t}i("d3b7"),i("d28b"),i("3ca3"),i("ddb0");function et(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var i=[],n=!0,r=!1,c=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)if(i.push(a.value),e&&i.length===e)break}catch(o){r=!0,c=o}finally{try{n||null==s["return"]||s["return"]()}finally{if(r)throw c}}return i}}i("fb6a"),i("b0c0"),i("a630");function it(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function nt(t,e){if(t){if("string"===typeof t)return it(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?it(t,e):void 0}}function rt(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ct(t,e){return tt(t)||et(t,e)||nt(t,e)||rt()}i("99af"),i("d81d"),i("a15b");var at=i("bc3a"),st=i.n(at),ot=i("a246"),lt=i("835a"),ut={name:"WatchAuthTrue",components:{MediaCart:ot["a"]},props:{kpid:String},mixins:[Object(lt["a"])("position")],data:function(){return{isPlayerActive:!0,currentPlayer:"",auth:!0,type:"",nameRu:"",ratingAgeLimits:"",slogan:"",year:"",description:"",premiereWorldCountry:"",filmLength:"",countries:"",genres:"",facts:[],is_subscription:!1,subscriptionCount:0,recoms:[{},{},{},{},{},{},{},{},{},{},{},{}]}},mounted:function(){this.auth=this.$store.getters.IS_AUTH,this.auth||this.$router.push("/");var t=localStorage.getItem("currentPlayer");this.currentPlayer=t||"bazon",this.render(),this.getRecoms(),console.log(this.position)},methods:{setPlayerClassPositionDefault:function(){var t=document.querySelector("#player-layout");this.isPlayerActive=!0,t.classList.remove("layout-zip")},setPlayerClassPositionZip:function(){var t=document.querySelector("#player-layout");this.isPlayerActive=!1,t.classList.add("layout-zip"),t.classList.add("opacity-0"),setTimeout((function(){var e=window.innerWidth,i=window.innerHeight,n=t.offsetWidth,r=t.offsetHeight;html.style.setProperty("--app-width",e+"px"),html.style.setProperty("--app-height",i+"px"),html.style.setProperty("--player-width",Math.round(.75*n)+"px"),html.style.setProperty("--player-height",Math.round(.75*r)+"px"),t.classList.remove("opacity-0")}),0)},render:function(){var t=this;st.a.get("https://iny.su/api.php?_action=media.watch&v=0.1&kpid=".concat(this.kpid,"&jwt=").concat(this.$store.getters.JWT)).then((function(e){var i=e.data.watchData.data;"subscribe"===e.data.is_subscription?t.is_subscription=!0:t.is_subscription=!1,t.subscriptionCount=e.data.subscriptionCount,"FILM"===i.type&&(t.type="фильм"),"TV_SHOW"===i.type&&(t.type="сериал"),t.nameRu=i.nameRu,t.ratingAgeLimits=i.ratingAgeLimits?i.ratingAgeLimits:"16+",i.slogan?t.slogan=i.slogan:t.slogan="-",t.year=i.year,t.description=i.description,t.premiereWorldCountry=i.premiereWorldCountry,t.filmLength=i.filmLength,t.facts=i.facts.length>0?i.facts:[],document.title="Смотреть ".concat(t.type," ").concat(t.nameRu," (").concat(t.year,") - на INY Media");var n=[];i.countries.map((function(t){n.push(t.country)})),t.countries=n.join(", ");var r=[];i.genres.map((function(t){r.push(t.genre)})),t.genres=r.join(", ")}))},getRecoms:function(){var t=this;st.a.get("https://iny.su/api.php?_action=media.similarsByKpid&v=0.1&kpid=".concat(this.kpid)).then((function(e){t.recoms=e.data}))},subsManager:function(){var t="";!0===this.is_subscription?(this.is_subscription=!1,t="unsubscribe"):(this.is_subscription=!0,t="subscribe"),st.a.get("https://iny.su/api.php?_action=media.subscription&v=0.1&act=".concat(t,"&kpid=").concat(this.kpid,"&jwt=").concat(this.$store.getters.JWT))},getSrc:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"svetacdn";switch(t){case"svetacdn":return localStorage.setItem("currentPlayer","svetacdn"),"//7043.svetacdn.in/LDSZJq4uCNvY?kp_id=".concat(this.kpid);case"allohalive":return localStorage.setItem("currentPlayer","allohalive"),"https://dud.allohalive.com/?kp=".concat(this.kpid);case"bazon":return localStorage.setItem("currentPlayer","bazon"),"https://v1619875985.bazon.site/kp/".concat(this.kpid)}},getBgImage:function(){return"url(https://kinopoiskapiunofficial.tech/images/posters/kp/".concat(this.kpid,".jpg)")}},computed:{get_auth:function(){return this.$store.getters.IS_AUTH}},watch:{position:function(t){var e=this,i=ct(t,2),n=(i[0],i[1]);0!==n||this.isPlayerActive||setTimeout((function(){e.setPlayerClassPositionDefault()}),500),0!==n&&n<50&&!this.isPlayerActive&&this.setPlayerClassPositionDefault();var r=window.innerHeight/2;n>=r&&this.isPlayerActive&&this.setPlayerClassPositionZip()},get_auth:function(t){this.auth=t},kpid:function(){this.render(),this.getRecoms()}}};i("f957");ut.render=X,ut.__scopeId="data-v-3168ab9b";e["default"]=ut},"746f":function(t,e,i){var n=i("428f"),r=i("5135"),c=i("e538"),a=i("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});r(e,t)||a(e,t,{value:c.f(t)})}},"9bdd":function(t,e,i){var n=i("825a"),r=i("2a62");t.exports=function(t,e,i,c){try{return c?e(n(i)[0],i[1]):e(i)}catch(a){throw r(t),a}}},a15b:function(t,e,i){"use strict";var n=i("23e7"),r=i("44ad"),c=i("fc6a"),a=i("a640"),s=[].join,o=r!=Object,l=a("join",",");n({target:"Array",proto:!0,forced:o||!l},{join:function(t){return s.call(c(this),void 0===t?",":t)}})},a4d3:function(t,e,i){"use strict";var n=i("23e7"),r=i("da84"),c=i("d066"),a=i("c430"),s=i("83ab"),o=i("4930"),l=i("fdbf"),u=i("d039"),f=i("5135"),b=i("e8b5"),p=i("861d"),d=i("825a"),h=i("7b0b"),m=i("fc6a"),y=i("c04e"),v=i("5c6c"),g=i("7c73"),O=i("df75"),j=i("241c"),w=i("057f"),x=i("7418"),S=i("06cf"),k=i("9bf2"),P=i("d1e7"),C=i("9112"),A=i("6eeb"),_=i("5692"),I=i("f772"),L=i("d012"),z=i("90e3"),R=i("b622"),T=i("e538"),W=i("746f"),M=i("d44e"),$=i("69f3"),J=i("b727").forEach,N=I("hidden"),D="Symbol",E="prototype",H=R("toPrimitive"),B=$.set,q=$.getterFor(D),F=Object[E],U=r.Symbol,Z=c("JSON","stringify"),K=S.f,Y=k.f,Q=w.f,V=P.f,G=_("symbols"),X=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),it=_("wks"),nt=r.QObject,rt=!nt||!nt[E]||!nt[E].findChild,ct=s&&u((function(){return 7!=g(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=K(F,e);n&&delete F[e],Y(t,e,i),n&&t!==F&&Y(F,e,n)}:Y,at=function(t,e){var i=G[t]=g(U[E]);return B(i,{type:D,tag:t,description:e}),s||(i.description=e),i},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},ot=function(t,e,i){t===F&&ot(X,e,i),d(t);var n=y(e,!0);return d(i),f(G,n)?(i.enumerable?(f(t,N)&&t[N][n]&&(t[N][n]=!1),i=g(i,{enumerable:v(0,!1)})):(f(t,N)||Y(t,N,v(1,{})),t[N][n]=!0),ct(t,n,i)):Y(t,n,i)},lt=function(t,e){d(t);var i=m(e),n=O(i).concat(dt(i));return J(n,(function(e){s&&!ft.call(i,e)||ot(t,e,i[e])})),t},ut=function(t,e){return void 0===e?g(t):lt(g(t),e)},ft=function(t){var e=y(t,!0),i=V.call(this,e);return!(this===F&&f(G,e)&&!f(X,e))&&(!(i||!f(this,e)||!f(G,e)||f(this,N)&&this[N][e])||i)},bt=function(t,e){var i=m(t),n=y(e,!0);if(i!==F||!f(G,n)||f(X,n)){var r=K(i,n);return!r||!f(G,n)||f(i,N)&&i[N][n]||(r.enumerable=!0),r}},pt=function(t){var e=Q(m(t)),i=[];return J(e,(function(t){f(G,t)||f(L,t)||i.push(t)})),i},dt=function(t){var e=t===F,i=Q(e?X:m(t)),n=[];return J(i,(function(t){!f(G,t)||e&&!f(F,t)||n.push(G[t])})),n};if(o||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=z(t),i=function(t){this===F&&i.call(X,t),f(this,N)&&f(this[N],e)&&(this[N][e]=!1),ct(this,e,v(1,t))};return s&&rt&&ct(F,e,{configurable:!0,set:i}),at(e,t)},A(U[E],"toString",(function(){return q(this).tag})),A(U,"withoutSetter",(function(t){return at(z(t),t)})),P.f=ft,k.f=ot,S.f=bt,j.f=w.f=pt,x.f=dt,T.f=function(t){return at(R(t),t)},s&&(Y(U[E],"description",{configurable:!0,get:function(){return q(this).description}}),a||A(F,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:U}),J(O(it),(function(t){W(t)})),n({target:D,stat:!0,forced:!o},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var i=U(e);return tt[e]=i,et[i]=e,i},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!o,sham:!s},{create:ut,defineProperty:ot,defineProperties:lt,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:pt,getOwnPropertySymbols:dt}),n({target:"Object",stat:!0,forced:u((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(h(t))}}),Z){var ht=!o||u((function(){var t=U();return"[null]"!=Z([t])||"{}"!=Z({a:t})||"{}"!=Z(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,i){var n,r=[t],c=1;while(arguments.length>c)r.push(arguments[c++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),r[1]=e,Z.apply(null,r)}})}U[E][H]||C(U[E],H,U[E].valueOf),M(U,D),L[N]=!0},a630:function(t,e,i){var n=i("23e7"),r=i("4df4"),c=i("1c7e"),a=!c((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:r})},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,i){var n=i("0366"),r=i("44ad"),c=i("7b0b"),a=i("50c4"),s=i("65f0"),o=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,u=4==t,f=6==t,b=7==t,p=5==t||f;return function(d,h,m,y){for(var v,g,O=c(d),j=r(O),w=n(h,m,3),x=a(j.length),S=0,k=y||s,P=e?k(d,x):i||b?k(d,0):void 0;x>S;S++)if((p||S in j)&&(v=j[S],g=w(v,S,O),t))if(e)P[S]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return S;case 2:o.call(P,v)}else switch(t){case 4:return!1;case 7:o.call(P,v)}return f?-1:l||u?u:P}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d28b:function(t,e,i){var n=i("746f");n("iterator")},d81d:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").map,c=i("1dde"),a=c("map");n({target:"Array",proto:!0,forced:!a},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,i){"use strict";var n=i("23e7"),r=i("83ab"),c=i("da84"),a=i("5135"),s=i("861d"),o=i("9bf2").f,l=i("e893"),u=c.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(b,u);var p=b.prototype=u.prototype;p.constructor=b;var d=p.toString,h="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;o(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=d.call(t);if(a(f,t))return"";var i=h?e.slice(7,-1):e.replace(m,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:b})}},e538:function(t,e,i){var n=i("b622");e.f=n},f957:function(t,e,i){"use strict";i("2ad7")}}]);
//# sourceMappingURL=watch.player.64045b40.js.map