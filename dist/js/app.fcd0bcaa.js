(function(e){function t(t){for(var a,n,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],a=!0,n=1;n<o.length;n++){var s=o[n];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=o[0]))}return e}var a={},n={app:0},r={app:0},i=[];function s(e){return u.p+"js/"+({calcular:"calcular",pokevuex:"pokevuex",rutas:"rutas",vuex:"vuex"}[e]||e)+"."+{calcular:"8a9547f2",pokevuex:"e7a9faef",rutas:"0cabebc9",vuex:"63066612"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var t=[],o={calcular:1,pokevuex:1,rutas:1,vuex:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise((function(t,o){for(var a="css/"+({calcular:"calcular",pokevuex:"pokevuex",rutas:"rutas",vuex:"vuex"}[e]||e)+"."+{calcular:"dafb6893",pokevuex:"511ec6bc",rutas:"01661270",vuex:"d12dfc95"}[e]+".css",r=u.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===a||l===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[e],m.parentNode.removeChild(m),o(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,o){a=r[e]=[t,o]}));t.push(a[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,o[1](d)}r[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(o,a,function(t){return e[t]}.bind(null,a));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"093d":function(e,t,o){},"169c":function(e,t,o){},"199c":function(e,t){},"23be":function(e,t,o){"use strict";var a=o("199c"),n=o.n(a);t["default"]=n.a},"3dfd":function(e,t,o){"use strict";var a=o("717d"),n=o("23be"),r=(o("5c0b"),o("2877")),i=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},"4ad2":function(e,t,o){"use strict";o("169c")},"4f5f":function(e,t,o){"use strict";o("093d")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("e792"),o("0cdd");var a=o("2b0e"),n=o("5f5b");o("ab8b"),o("2dd8");a["default"].use(n["a"]);var r=o("3dfd"),i=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("div",{staticClass:"padre"},[o("h1",[e._v("Soy el componente Padre")]),o("label",{attrs:{for:""}},[e._v("Soy un input en el componente padre: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),o("div",[o("button",{on:{click:e.updateText}},[e._v(" Soy un botón para borrar en padre ")])]),o("div",[o("p",[e._v("Soy el valor en padre, enlazado con v-model")]),o("span",[e._v("Acá está el valor con v-model: "),o("p",{staticClass:"message"},[e._v(e._s(e.value))])])]),o("div",[o("p",[e._v("Soy el valor en padre, me transmito con emit")]),o("span",[e._v("Acá está el valor con emit: "),o("p",{staticClass:"message"},[e._v(e._s(e.msgHijo))])])]),o("div",[o("p",[e._v("Soy el valor en padre, me transmito con .sync")]),o("span",[e._v("Acá está el valor con .sync: "),o("p",{staticClass:"message"},[e._v(e._s(e.otroMsg))])])])]),o("Hijo",{attrs:{"otro-msg":e.otroMsg},on:{"update:otroMsg":function(t){e.otroMsg=t},"update:otro-msg":function(t){e.otroMsg=t},input2:e.updateHijo},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},u=[],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"children"},[o("h1",[e._v("Soy el componente Hijo")]),o("div",{},[o("button",{on:{click:function(t){return e.borrarHijo("")}}},[e._v(" Soy un botón para borrar desde el hijo ")])]),o("label",{attrs:{for:""}},[e._v("Transmito mensajes con v-model: ")]),o("input",{attrs:{type:"text"},domProps:{value:e.value},on:{input:function(t){return e.updateValue(t.target.value)}}}),o("div",[o("label",{attrs:{for:""}},[e._v("Transmito mensajes con emit: ")]),o("input",{attrs:{type:"text",msgHijo:e.msgHijo},on:{input:function(t){return e.msgHijo(t.target.value)}}})]),o("div",[o("label",{attrs:{for:""}},[e._v("Transmito mensajes con sync:")]),o("input",{attrs:{type:"text",otroMsg:e.otroMsg},on:{input:function(t){return e.otroMsg(t.target.value)}}})])])},l=[],d={props:{value:{type:String,default:""}},data:function(){return{}},methods:{updateValue:function(e){this.$emit("input",e)},msgHijo:function(e){this.$emit("input2",e)},borrarHijo:function(e){this.$emit("input",e)},otroMsg:function(e){this.$emit("update:otroMsg",e)}}},m=d,p=(o("4f5f"),o("2877")),v=Object(p["a"])(m,c,l,!1,null,"d14021dc",null),f=v.exports,h={name:"Home",components:{Hijo:f},props:{},data:function(){return{value:"",msgHijo:"",otroMsg:""}},methods:{updateText:function(){this.value=""},updateHijo:function(e){console.log(e),this.msgHijo=e}}},g=h,b=(o("4ad2"),Object(p["a"])(g,s,u,!1,null,"649e4a62",null)),_=b.exports;a["default"].use(i["a"]);var E=[{path:"/",name:"Home",component:_},{path:"/calcular",name:"Calcular",component:function(){return o.e("calcular").then(o.bind(null,"22cc"))}},{path:"/rutas/:id",name:"Rutas",component:function(){return o.e("rutas").then(o.bind(null,"04b4"))}},{path:"/vuex",name:"Vuex",component:function(){return o.e("vuex").then(o.bind(null,"ddda"))}},{path:"/filtros",name:"Filtros",component:function(){return o.e("vuex").then(o.bind(null,"ce76"))}},{path:"/pokevuex",name:"PokeVuex",component:function(){return o.e("pokevuex").then(o.bind(null,"b45e"))}},{path:"/buscadorGold",name:"BuscadorGold",component:function(){return o.e("pokevuex").then(o.bind(null,"6d60"))}},{path:"/mutaciones",name:"Mutaciones",component:function(){return o.e("pokevuex").then(o.bind(null,"25cd"))}},{path:"/trabajoFinal",name:"Trabajo Final",component:function(){return o.e("pokevuex").then(o.bind(null,"5ae7"))}},{path:"/prueba",name:"Prueba",component:function(){return o.e("pokevuex").then(o.bind(null,"9767"))}}],x=new i["a"]({routes:E}),S=x,M=o("2f62"),T={namespaced:!0,state:{pokemon:"pikachu",number:1,type:"hierba",description:"pokemon electrico poderoso"},mutations:{},actions:{},getters:{}},L=(o("07ac"),function(e,t){return Math.floor(Math.random()*(t+1-e))+e}),y=o("bc3a").default,k={namespaced:!0,state:{locations:[],currentGold:0,farmLevel:1,caveLevel:1,houseLevel:1,casinoLevel:1,farmMin:10,caveMin:5,houseMin:1,casinoMin:1,farmMax:20,caveMax:10,houseMax:5,casinoMax:50,farmPressed:!1,cavePressed:!1,housePressed:!1,farmUpgrade:50,caveUpgrade:25,houseUpgrade:25,casinoUpgrade:150,casinoAnimation:""},mutations:{SET_LOCATIONS:function(e,t){e.locations=t},SET_INCREMENT:function(e,t){Math.random()<.5?e.currentGold=e.currentGold+t:e.currentGold=e.currentGold-t,e.farmPressed=!0},SET_INCREMENT_2:function(e,t){Math.random()<.5?e.currentGold=e.currentGold+t:e.currentGold=e.currentGold-t,e.cavePressed=!0},SET_INCREMENT_3:function(e,t){e.currentGold=e.currentGold+t,e.housePressed=!0},SET_INCREMENT_4:function(e,t){Math.random()<.5?(e.currentGold=e.currentGold+t,e.casinoAnimation="win"):(e.currentGold=e.currentGold-t,e.casinoAnimation="loss"),e.farmPressed=!1,e.cavePressed=!1,e.housePressed=!1},SET_UPGRADE:function(e){e.currentGold=e.currentGold-e.farmUpgrade,e.farmUpgrade=Object.values(e.locations[0].costUpgrade)[e.farmLevel],e.farmLevel++,e.farmMax=Object.values(e.locations[0].goldEarn)[e.farmLevel-1],e.farmMin=Object.values(e.locations[0].goldLost)[e.farmLevel-1]},SET_UPGRADE_2:function(e){e.currentGold=e.currentGold-e.caveUpgrade,e.caveUpgrade=Object.values(e.locations[1].costUpgrade)[e.caveLevel],e.caveLevel++,e.caveMax=Object.values(e.locations[1].goldEarn)[e.caveLevel-1],e.caveMin=Object.values(e.locations[1].goldLost)[e.caveLevel-1]},SET_UPGRADE_3:function(e){e.currentGold=e.currentGold-e.houseUpgrade,e.houseUpgrade=Object.values(e.locations[2].costUpgrade)[e.houseLevel],e.houseLevel++,e.houseMax=Object.values(e.locations[2].goldEarn)[e.houseLevel-1],e.houseMin=Object.values(e.locations[2].goldLost)[e.houseLevel-1]},SET_UPGRADE_4:function(e){e.currentGold=e.currentGold-e.casinoUpgrade,e.casinoUpgrade=Object.values(e.locations[3].costUpgrade)[e.casinoLevel],e.casinoLevel++,e.casinoMax=Object.values(e.locations[3].goldEarn)[e.casinoLevel-1],e.casinoMin=Object.values(e.locations[3].goldLost)[e.casinoLevel-1]}},actions:{getLocations:function(e){var t=e.commit;y.get("https://my-json-server.typicode.com/icaeth/vue-actividades-v1/locaciones").then((function(e){t("SET_LOCATIONS",e.data)}))},farmClick:function(e,t){var o=e.state,a=e.commit;o.currentGold>=20&&a("SET_INCREMENT",L(t.min,t.max))},caveClick:function(e,t){var o=e.state,a=e.commit;o.currentGold>=5&&a("SET_INCREMENT_2",L(t.min,t.max))},houseClick:function(e,t){var o=e.commit;o("SET_INCREMENT_3",L(t.min,t.max))},casinoClick:function(e,t){var o=e.commit,a=e.state;!0===a.farmPressed&&!0===a.cavePressed&&!0===a.housePressed&&a.currentGold>=50&&o("SET_INCREMENT_4",L(t.min,t.max))},farmUpgrade:function(e){var t=e.state,o=e.commit;t.currentGold>=t.farmUpgrade&&o("SET_UPGRADE")},caveUpgrade:function(e){var t=e.state,o=e.commit;t.currentGold>=t.caveUpgrade&&o("SET_UPGRADE_2")},houseUpgrade:function(e){var t=e.state,o=e.commit;t.currentGold>=t.houseUpgrade&&o("SET_UPGRADE_3")},casinoUpgrade:function(e){var t=e.state,o=e.commit;t.currentGold>=t.casinoUpgrade&&o("SET_UPGRADE_4")},setScore:function(e,t){e.state,e.commit;y.post("https://168.119.171.187:4400/scores",t)},getScore:function(e){e.state,e.commit}},getters:{}},j=(o("4de4"),{namespaced:!0,state:{input:{},items:[{id:1,name:"Zathin",color:"Indigo",size:"XS",material:"Ramona Horkelia"},{id:2,name:"Y-find",color:"Yellow",size:"2XL",material:"Sphinctrina Lichen"},{id:3,name:"Cardify",color:"Fuscia",size:"2XL",material:"Canada Lettuce"},{id:4,name:"Hatity",color:"Fuscia",size:"M",material:"Nodding Semaphoregrass"},{id:5,name:"Flexidy",color:"Aquamarine",size:"M",material:"Cup Lichen"},{id:6,name:"Duobam",color:"Puce",size:"L",material:"African-queen"},{id:7,name:"Temp",color:"Blue",size:"XL",material:"Browneyes"},{id:8,name:"Namfix",color:"Maroon",size:"2XL",material:"Entodon Moss"},{id:9,name:"Span",color:"Pink",size:"XL",material:"Moss Campion"},{id:10,name:"Alpha",color:"Puce",size:"XS",material:"Golden Dewdrops"},{id:11,name:"Zontrax",color:"Violet",size:"M",material:"Lilac Tasselflower"},{id:12,name:"Y-find",color:"Aquamarine",size:"XS",material:"Island Jepsonia"},{id:13,name:"Fixflex",color:"Crimson",size:"M",material:"Harebell"},{id:14,name:"Lotlux",color:"Goldenrod",size:"S",material:"Alexandrian Laurel"},{id:15,name:"Cardguard",color:"Teal",size:"S",material:"Wormleaf Stonecrop"},{id:16,name:"Sonair",color:"Fuscia",size:"2XL",material:"Hawai'i Pokeweed"},{id:17,name:"Flexidy",color:"Green",size:"XL",material:"Bonjean's Dicranum Moss"},{id:18,name:"Namfix",color:"Puce",size:"M",material:"Fuscidea Lichen"},{id:19,name:"Bitchip",color:"Goldenrod",size:"L",material:"Seaside Disc Lichen"},{id:20,name:"Fix San",color:"Khaki",size:"M",material:"Dot Lichen"},{id:21,name:"Hatity",color:"Crimson",size:"S",material:"Arizona Signalgrass"},{id:22,name:"Job",color:"Violet",size:"3XL",material:"Comb Bushmint"},{id:23,name:"Konklux",color:"Turquoise",size:"2XL",material:"Revolute Didymodon Moss"},{id:24,name:"Cardguard",color:"Mauv",size:"2XL",material:"Fowler's Knotweed"},{id:25,name:"Tempsoft",color:"Green",size:"2XL",material:"Luquillo Forest Lidflower"},{id:26,name:"Sub-Ex",color:"Violet",size:"L",material:"Shasta Tansyaster"},{id:27,name:"Aerified",color:"Blue",size:"M",material:"Bachman's Jelly Lichen"},{id:28,name:"Duobam",color:"Red",size:"XL",material:"Nested Polypody"},{id:29,name:"Zoolab",color:"Goldenrod",size:"2XL",material:"Neckweed"},{id:30,name:"Cookley",color:"Orange",size:"M",material:"Devil In The Bush"}],entries:31,rowsNumber:30},mutations:{DEL_ITEMS:function(e,t){e.items=e.items.filter((function(e){return e.id!=t}))},UPDATE_ITEMS:function(e,t){},ADD_ITEMS:function(e,t){console.log("primer clog",t),t.id=e.entries,e.items.push(t),e.entries++,e.rowsNumber++}},actions:{},getters:{}});a["default"].use(M["a"]);var G=new M["a"].Store({state:{score:0,msg:!1,students:[{}]},mutations:{SET_INCREMENT:function(e){e.score++},SET_DECREMENT:function(e){e.score--},SET_CUSTOM_INCREMENT:function(e,t){e.score=t},ADD_STUDENT:function(e,t){e.students.push(t)}},actions:{},modules:{pokeStore:T,goldStore:k,tfinalStore:j},getters:{over9:function(e){e.score>9e3?e.msg=!0:e.msg=!1}}}),C=o("c986"),P=o.n(C);a["default"].config.productionTip=!1,a["default"].use(P.a,"vac"),new a["default"]({router:S,store:G,render:function(e){return e(r["default"])}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";o("9c0c")},"717d":function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"tarea"},[o("p",[o("router-link",{attrs:{to:"/"}},[e._v(" Home ")]),o("router-link",{attrs:{to:"/calcular"}},[e._v(" Calcular ")]),o("router-link",{attrs:{to:"/rutas/0"}},[e._v(" Rutas ")]),o("router-link",{attrs:{to:"/filtros"}},[e._v(" Filtros ")]),o("router-link",{attrs:{to:"/vuex"}},[e._v(" Vuex ")]),o("router-link",{attrs:{to:"/mutaciones"}},[e._v(" Mutaciones ")]),o("router-link",{attrs:{to:"/pokevuex"}},[e._v(" PokeVuex ")]),o("router-link",{attrs:{to:"/buscadorGold"}},[e._v(" Buscador Gold ")]),o("router-link",{attrs:{to:"/trabajoFinal"}},[e._v(" Trabajo Final ")]),o("router-link",{attrs:{to:"/relojvue"}},[e._v(" Reloj Vue ")]),o("router-link",{attrs:{to:"/prueba"}},[e._v(" Prueba ")])],1),o("router-view")],1)])},n=[]},"9c0c":function(e,t,o){}});
//# sourceMappingURL=app.fcd0bcaa.js.map