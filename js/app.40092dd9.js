(function(e){function t(t){for(var n,c,l=t[0],u=t[1],i=t[2],s=0,f=[];s<l.length;s++)c=l[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);b&&b(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4f127b16"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var i=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(s);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"container"};function o(e,t,r,o,c,l){var u=Object(n["s"])("Navbar"),i=Object(n["s"])("router-view");return Object(n["o"])(),Object(n["d"])(n["a"],null,[Object(n["f"])(u),Object(n["f"])("div",a,[Object(n["f"])(i)])],64)}var c={class:"navbar navbar-dark bg-dark"},l=Object(n["e"])(" Formularios "),u={class:"d-flex"},i=Object(n["e"])(" Tareas ");function s(e,t,r,a,o,s){var b=Object(n["s"])("router-link");return Object(n["o"])(),Object(n["d"])("div",c,[Object(n["f"])(b,{to:"/",class:"navbar-brand"},{default:Object(n["B"])((function(){return[l]})),_:1}),Object(n["f"])("div",u,[Object(n["f"])(b,{class:"btn btn-dark",to:"/"},{default:Object(n["B"])((function(){return[i]})),_:1})])])}var b={};b.render=s;var f=b,d={components:{Navbar:f}};d.render=o;var m=d,p=(r("d3b7"),r("6c02")),j=Object(n["f"])("h1",{class:"my-5"},"Orden de servicio ACyT",-1),O=Object(n["f"])("aside",null," ¿cual es su nombre? ",-1),h=Object(n["f"])("aside",null," ¿cual es su area de trabajo? ",-1),v=Object(n["f"])("h2",null," registre su orden de servicio",-1),k={class:"form-check form-check-inline"},y=Object(n["f"])("label",{for:"check-1",class:"form-check-label"},"impresora",-1),g={class:"form-check form-check-inline"},w=Object(n["f"])("label",{for:"check-2",class:"form-check-label"},"computadora",-1),x={class:"form-check form-check-inline"},C=Object(n["f"])("label",{for:"check-1",class:"form-check-label"},"internet",-1),P={class:"mt-2"},U={class:"form-check form-check-inline"},V=Object(n["f"])("label",{for:"radio-1",class:"form-check-label"},"Urgente",-1),_={class:"form-check form-check-inline"},S=Object(n["f"])("label",{for:"radio-2",class:"form-check-label"},"Relax",-1),T={class:"mt-2"},M=Object(n["f"])("hr",null,null,-1);function q(e,t,r,a,o,c){return Object(n["o"])(),Object(n["d"])(n["a"],null,[j,Object(n["f"])("form",{onSubmit:t[9]||(t[9]=Object(n["D"])((function(){return c.procesarFormulario.apply(c,arguments)}),["prevent"]))},[O,Object(n["C"])(Object(n["f"])("input",{type:"text",class:"form-control my-2",placeholder:"Ingrese nombre","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.tarea.nombre=e})},null,512),[[n["y"],o.tarea.nombre,void 0,{trim:!0}]]),h,Object(n["C"])(Object(n["f"])("input",{type:"text",class:"form-control my-2",placeholder:"Ingrese semestre","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.tarea.semestre=e})},null,512),[[n["y"],o.tarea.semestre,void 0,{trim:!0}]]),v,Object(n["f"])("div",k,[Object(n["C"])(Object(n["f"])("input",{type:"checkbox",id:"check-1",class:"form-check-input","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.tarea.categorias=e}),value:"impresora"},null,512),[[n["w"],o.tarea.categorias]]),y]),Object(n["f"])("div",g,[Object(n["C"])(Object(n["f"])("input",{type:"checkbox",id:"check-2",class:"form-check-input","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.tarea.categorias=e}),value:"computadora"},null,512),[[n["w"],o.tarea.categorias]]),w]),Object(n["f"])("div",x,[Object(n["C"])(Object(n["f"])("input",{type:"checkbox",id:"check-1",class:"form-check-input","onUpdate:modelValue":t[5]||(t[5]=function(e){return o.tarea.categorias=e}),value:"internet"},null,512),[[n["w"],o.tarea.categorias]]),C]),Object(n["f"])("div",P,[Object(n["f"])("div",U,[Object(n["C"])(Object(n["f"])("input",{type:"radio",id:"radio-1",class:"form-check-input",value:"urgente","onUpdate:modelValue":t[6]||(t[6]=function(e){return o.tarea.estado=e})},null,512),[[n["x"],o.tarea.estado]]),V]),Object(n["f"])("div",_,[Object(n["C"])(Object(n["f"])("input",{type:"radio",id:"radio-2",class:"form-check-input",value:"relax","onUpdate:modelValue":t[7]||(t[7]=function(e){return o.tarea.estado=e})},null,512),[[n["x"],o.tarea.estado]]),S])]),Object(n["f"])("div",T,[Object(n["C"])(Object(n["f"])("input",{type:"number",class:"form-control","onUpdate:modelValue":t[8]||(t[8]=function(e){return o.tarea.numero=e})},null,512),[[n["y"],o.tarea.numero,void 0,{number:!0}]])]),Object(n["f"])("button",{class:"btn btn-dark mt-2 btn-block",type:"submit",disabled:c.bloquear}," Procesar ",8,["disabled"])],32),M,Object(n["f"])("p",null,Object(n["u"])(o.tarea),1)],64)}r("498a");var A={name:"Home",components:{},data:function(){return{tarea:{nombre:"",semestre:"",categorias:[],estado:"",numero:0}}},methods:{procesarFormulario:function(){console.log(this.tarea),""!==this.tarea.nombre.trim()?(console.log("no está vacio"),this.tarea={nombre:"",categorias:[],estado:"",numero:0}):console.log("Campo vacío")}},computed:{bloquear:function(){return""===this.tarea.nombre.trim()}}};A.render=q;var E=A,F=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],B=Object(p["a"])({history:Object(p["b"])("/"),routes:F}),H=B,I=r("5502"),J=Object(I["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(m).use(J).use(H).mount("#app")}});
//# sourceMappingURL=app.40092dd9.js.map