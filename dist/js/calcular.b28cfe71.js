(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["calcular"],{"22cc":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Ingrese dos números y la operación")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.a,expression:"a",modifiers:{number:!0}}],attrs:{id:"",type:"number",name:"a"},domProps:{value:t.a},on:{input:function(e){e.target.composing||(t.a=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.operator,expression:"operator"}],attrs:{id:"",name:"operator"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.operator=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"+"}},[t._v(" + ")]),a("option",{attrs:{value:"-"}},[t._v(" - ")]),a("option",{attrs:{value:"*"}},[t._v(" * ")]),a("option",{attrs:{value:"/"}},[t._v(" / ")])]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.b,expression:"b",modifiers:{number:!0}}],attrs:{id:"",type:"number",name:"b"},domProps:{value:t.b},on:{input:function(e){e.target.composing||(t.b=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("button",{staticClass:"boton-azul",on:{click:t.operacion}},[t._v(" Calcular ")]),a("button",{staticClass:"boton-rojo",on:{click:t.borrar}},[t._v(" Borrar ")]),a("div",[a("h2",[t._v(" Resultado: "+t._s(t.a)+" "+t._s(t.operator)+" "+t._s(t.b)+" "+t._s(t.igual)+" "+t._s(t.resultado)+" ")])]),a("div",[a("pre",{staticClass:"color"},[t._v('      {\n        "a": '+t._s(t.a)+',\n        "b": '+t._s(t.b)+',\n        "resultado": '+t._s(t.resultado)+',\n        "operator": '+t._s(t.operator)+",          \n      }\n    ")])])])},r=[],n={data:function(){return{a:null,b:null,operator:null,resultado:null,igual:null}},methods:{operacion:function(){switch(this.operator){case"+":this.resultado=this.a+this.b,this.igual="=";break;case"-":this.resultado=this.a-this.b,this.igual="=";break;case"*":console.log(this.a),this.resultado=this.a*this.b,this.igual="=";break;case"/":console.log(this.a),this.resultado=this.a/this.b,this.igual="=";break;default:console.log("default")}},borrar:function(){this.a=null,this.b=null,this.resultado=null,this.operator=null,this.igual=null}}},s=n,l=(a("cfb6"),a("2877")),i=Object(l["a"])(s,o,r,!1,null,"13b9ced1",null);e["default"]=i.exports},cfb6:function(t,e,a){"use strict";a("db97")},db97:function(t,e,a){}}]);
//# sourceMappingURL=calcular.b28cfe71.js.map