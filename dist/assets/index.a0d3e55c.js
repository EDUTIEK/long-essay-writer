var V=Object.defineProperty;var k=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))$.call(t,n)&&v(e,n,t[n]);if(k)for(var n of k(t))w.call(t,n)&&v(e,n,t[n]);return e};import{E as z,c as _,r as E,o as U,m as L,w as a,V as b,a as o,b as B,d as R,e as A,f as y,g as h,h as N,i as x,j as c,k as C,l as D,n as F,p as T,q as d,t as g,s as O,u as m,v as q,x as M,y as P,z as i,A as j,B as G}from"./vendor.11bec266.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}};H();var K=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n};const J={name:"TinyEditor",components:{editor:z}};function Q(e,t,n,r,s,l){const u=E("editor");return U(),_(u,{"api-key":"no-api-key",init:{height:500,menubar:!1,plugins:"lists charmap",toolbar:"undo redo | formatselect | bold italic |            bullist numlist outdent indent | removeformat | charmap"}})}var W=K(J,[["render",Q]]);const X={name:"App",components:{"tiny-example":W},data:()=>({}),computed:p(p({},L(["initialized","backendUrl","returnUrl","userKey","environmentKey","authToken"])),L("task",["instructions"]))},Y=d("Fred Neumann, Klausur Vertragsrecht I"),Z=m("span",null,"2 Mitteilungen",-1),ee=m("span",null,"Restzeit 02:13h",-1),te=m("span",null,"Beenden ...",-1),ne=m("h2",{class:"text-h6"},"Aufgabenstellung",-1),oe=m("h2",{class:"text-h6"},"Mein Text",-1);function se(e,t,n,r,s,l){const u=E("tiny-example");return U(),_(b,null,{default:a(()=>[o(b,null,{default:a(()=>[o(B,{elevation:"1",color:"white",density:"compact"},{default:a(()=>[o(R,null,{default:a(()=>[Y]),_:1}),o(A),o(y,null,{default:a(()=>[o(h,{left:"",icon:"mdi-bell-outline"}),Z]),_:1}),o(y,null,{default:a(()=>[o(h,{left:"",icon:"mdi-clock-outline"}),ee]),_:1}),o(y,null,{default:a(()=>[o(h,{left:"",icon:"mdi-logout-variant"}),te]),_:1})]),_:1}),o(N,{elevation:"2",color:"grey-lighten-2",rail:"","expand-on-hover":""},{default:a(()=>[o(x,null,{default:a(()=>[o(c,{"prepend-icon":"mdi-text-box-outline",title:"Aufgabenstellung"}),o(c,{"prepend-icon":"mdi-file-edit-outline",title:"Essay schreiben"}),o(c,{"prepend-icon":"mdi-clipboard-outline",title:"Notizbrett 1"}),o(c,{"prepend-icon":"mdi-clipboard-outline",title:"Notizbrett 2"})]),_:1})]),_:1}),o(C,null,{default:a(()=>[o(D,{color:"grey"},{default:a(()=>[o(F,{dense:""},{default:a(()=>[o(T,null,{default:a(()=>[ne,d(" "+g(e.instructions)+" ",1),o(O,null,{default:a(()=>[o(c,null,{default:a(()=>[d("initialized: "+g(e.initialized),1)]),_:1}),o(c,null,{default:a(()=>[d("backendUrl: "+g(e.backendUrl),1)]),_:1}),o(c,null,{default:a(()=>[d("returnUrl: "+g(e.returnUrl),1)]),_:1}),o(c,null,{default:a(()=>[d("userKey: "+g(e.userKey),1)]),_:1}),o(c,null,{default:a(()=>[d("environmentKey: "+g(e.environmentKey),1)]),_:1}),o(c,null,{default:a(()=>[d("authToken: "+g(e.authToken),1)]),_:1})]),_:1})]),_:1}),o(T,{color:"white"},{default:a(()=>[oe,o(u)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var ae=K(X,[["render",se]]);var re=q();const I=M.createInstance({storeName:"task",description:"Task data"}),ie={instructions:"not yet loaded"},le={instructions:e=>e.instructions},ue={setInstructions(e,t){e.instructions=t}},ce={async loadFromStorage({commit:e}){try{const t=await I.getItem("instructions");console.log("got instructions from storage"),e("setInstructions",t)}catch(t){console.log(t)}},async loadFromData({commit:e},t){try{await I.setItem("instructions",t.instructions),console.log("got instructions from storage"),e("setInstructions",t.instructions)}catch(n){console.log(n)}}},de={};var ge={namespaced:!0,state:ie,getters:le,mutations:ue,actions:ce,modules:de};const me={initialized:!1,backendUrl:"",returnUrl:"",userKey:"",environmentKey:"",authToken:""},fe={initialized:e=>e.initialized,backendUrl:e=>e.backendUrl,returnUrl:e=>e.returnUrl,userKey:e=>e.userKey,environmentKey:e=>e.environmentKey,authToken:e=>e.authToken,requestConfig(e){let t=e.backendUrl,n=new URLSearchParams,r=t.search(/\?+/);return r!=-1&&(n=new URLSearchParams(t.substr(r)),t=t.substr(0,r)),{baseURL:t,params:n,headers:{LongEssayUser:e.userKey,LongEssayEnvironment:e.environmentKey,LongEssayToken:e.authToken},timeout:3e4,responseType:"json",responseEncoding:"utf8"}}},pe={setInitialized(e,t){e.initialized=t},setBackendUrl(e,t){e.backendUrl=t,localStorage.setItem("backendUrl",t)},setReturnUrl(e,t){e.returnUrl=t,localStorage.setItem("returnUrl",t)},setUserKey(e,t){e.userKey=t,localStorage.setItem("userKey",t)},setEnvironmentKey(e,t){e.environmentKey=t,localStorage.setItem("environmentKey",t)},setAuthToken(e,t){e.authToken=t,localStorage.setItem("authToken",t)},refreshToken(e,t){e.authToken=t.headers.LongEssayToken,localStorage.setItem("authToken",e.authToken)}},ye={async init({commit:e,dispatch:t}){let n=!1,r=localStorage.getItem("backendUrl"),s=localStorage.getItem("returnUrl"),l=localStorage.getItem("userKey"),u=localStorage.getItem("environmentKey"),f=localStorage.getItem("authToken");!!i.get("LongEssayBackend")&&i.get("LongEssayBackend")!==r&&(r=i.get("LongEssayBackend"),n=!0),!!i.get("LongEssayReturn")&&i.get("LongEssayReturn")!==s&&(s=i.get("LongEssayReturn"),n=!0),!!i.get("LongEssayUser")&&i.get("LongEssayUser")!==l&&(l=i.get("LongEssayUser"),n=!0),!!i.get("LongEssayEnvironment")&&i.get("LongEssayEnvironment")!==u&&(u=i.get("LongEssayEnvironment"),n=!0),!!i.get("LongEssayToken")&&i.get("LongEssayToken")!==f&&(f=i.get("LongEssayToken"),n=!0),i.remove("LongEssayBackend"),i.remove("LongEssayReturn"),i.remove("LongEssayUser"),i.remove("LongEssayEnvironment"),i.remove("LongEssayToken"),!!r&&!!s&&!!l&&!!u&&!!f&&(e("setBackendUrl",r),e("setReturnUrl",s),e("setUserKey",l),e("setEnvironmentKey",u),e("setAuthToken",f),n&&await t("loadData"),e("setInitialized",!0))},async loadData({commit:e,getters:t,dispatch:n}){let r={};try{console.log(t.axiosConfig),r=await j.get("/",t.requestConfig),console.log(r)}catch(s){console.error(s);return}await n("task/loadFromData",r.data.task),e("refreshToken",r),e("setInitialized",!0)}},he={task:ge};var S=P({state:me,getters:fe,mutations:pe,actions:ye,modules:he});S.dispatch("init");G(ae).use(S).use(re).mount("#app");
