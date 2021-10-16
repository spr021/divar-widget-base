(this["webpackJsonpdivar-widget-base"]=this["webpackJsonpdivar-widget-base"]||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},22:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),i=(a(22),a(1)),o=a(7),s=function(){return r.a.createElement("hr",{className:"w-auto h-px bg-gray-400"})},u=function(e){var t=e.text,a=e.has_divider;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w-auto h-auto flex flex-col justify-start items-start p-1"},r.a.createElement("h2",{className:"font-semibold text-lg text-gray-600 pb-6 pr-2"},t)),a&&r.a.createElement(s,null))},m=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:" w-auto h-12 flex flex-row items-center p-1 "},r.a.createElement("div",{className:"ml-2"},r.a.createElement("img",{className:"w-8 h-8",src:e.icon.image_url_dark,alt:e.icon.icon_name})),r.a.createElement("div",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.title}}))),e.has_divider&&r.a.createElement(s,null))},f=function(e){var t=e.items;return r.a.createElement("div",{className:"flex flex-row flex-wrap justify-center items-center"},t.map((function(e){return r.a.createElement("img",{key:e.image_url,className:"p-6",src:e.image_url,alt:"car"})})))},d=function(e){var t=e.title;e.show_thumbnail;return r.a.createElement("h3",{className:"font-bold text-2xl pb-2"},t)},g=[/\u06f0/g,/\u06f1/g,/\u06f2/g,/\u06f3/g,/\u06f4/g,/\u06f5/g,/\u06f6/g,/\u06f7/g,/\u06f8/g,/\u06f9/g],E=[/\u0660/g,/\u0661/g,/\u0662/g,/\u0663/g,/\u0664/g,/\u0665/g,/\u0666/g,/\u0667/g,/\u0668/g,/\u0669/g],h=function(e){if("string"===typeof(e=String(e)))for(var t=0;t<10;t++)e=e.replace(g[t],t).replace(E[t],t);return e.replace(/\D/g,"")},p=function(e){var t=e.percentage_score,a=e.score_color;return r.a.createElement("div",{className:"w-24 h-3 rounded-full bg-gray-300 relative"},r.a.createElement("div",{className:"w-px h-full bg-white absolute z-10",style:{right:"20%"}}),r.a.createElement("div",{className:"w-px h-full bg-white absolute z-10",style:{right:"40%"}}),r.a.createElement("div",{className:"w-px h-full bg-white absolute z-10",style:{right:"60%"}}),r.a.createElement("div",{className:"w-px h-full bg-white absolute z-10",style:{right:"80%"}}),r.a.createElement("div",{className:"w-24 h-3 rounded-l-full bg-".concat(a," absolute left-0"),style:{width:"".concat(h(t),"%")}}))},v=function(e,t){var a=e.type,n=e.payload;switch(a){case"LOAD_PAGE":t.push({pathname:"/action/".concat(n.title?n.title:""),state:{payload:n}});break;default:return null}},w=function(e){var t=e.title,a=e.descriptive_score,n=e.percentage_score,l=e.score_color,c=(e.image_url,e.image_color,e.action),o=e.has_divider,u=e.icon,m=Object(i.f)();return r.a.createElement("div",{onClick:function(){return c&&v(c,m)}},r.a.createElement("div",{className:"w-auto h-12 flex flex-row justify-start items-center p-1 ".concat(c?"cursor-pointer":"")},r.a.createElement("div",{className:" w-full h-full flex flex-row justify-start items-center"},r.a.createElement("div",{className:"ml-2"},r.a.createElement("img",{className:"w-8 h-8",src:u.image_url_light,alt:u.icon_name})),r.a.createElement("div",{className:"flex"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t}}),a&&r.a.createElement("pre",null," : ",a))),r.a.createElement("div",{className:" w-48 h-full flex flex-row justify-end items-center"},r.a.createElement(p,{percentage_score:n||a,score_color:l}),c&&r.a.createElement("i",{className:" text-3xl text-gray-500 fa fa-angle-left mb-1 mr-4"}))),o&&r.a.createElement(s,null))},b=function(e){var t=e.text,a=e.text_color,n=e.has_divider;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"text-".concat(a," font-bold text-xl py-2")},t),n&&r.a.createElement(s,null))},x=function(e){var t=e.title,a=e.value,n=e.has_divider;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w-auto h-auto flex flex-col justify-start items-start p-1 cursor-pointer"},r.a.createElement("h3",{className:"font-bold text-xl dark-text"},t),r.a.createElement("h3",{className:"mt-4 mb-2 secondary-text"},a)),n&&r.a.createElement(s,null))},_=function(e){switch(e.type){case"FEATURE_ROW":return r.a.createElement(m,e.data);case"SCORE_ROW":return r.a.createElement(w,e.data);case"TITLE_ROW":return r.a.createElement(b,e.data);case"SECTION_DIVIDER_ROW":return r.a.createElement(s,null);case"UNEXPANDABLE_ROW":return r.a.createElement(x,e.data);case"LEGEND_TITLE_ROW":return r.a.createElement(d,e.data);case"DESCRIPTION_ROW":return r.a.createElement(u,e.data);case"IMAGE_CAROUSEL_ROW":return r.a.createElement(f,e.data);default:return null}},y=function(){var e=Object(i.g)(),t=Object(n.useState)(),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(!0),u=Object(o.a)(s,2),m=u[0],f=u[1];return Object(n.useEffect)((function(){f(!1),function(e){var t=[];e.map((function(e,a){return t.push(r.a.createElement(_,{key:a,type:e.widget_type,data:e.data}))})),c(t)}(e.state.payload.widget_list)}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"App-intro"},m?"\xab\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc...\xbb":l))},N=function(){return Promise.resolve(fetch("https://run.mocky.io/v3/e399a0d4-6b0b-4e0c-b71f-2ae7d8caecd7",{method:"GET"}).then((function(e){return e.json()})))},O=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),i=Object(o.a)(c,2),s=i[0],u=i[1];return Object(n.useEffect)((function(){N().then((function(e){u(!1),function(e){var t=[];e.map((function(e,a){return t.push(r.a.createElement(_,{key:a,type:e.widget_type,data:e.data}))})),l(t)}(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"App-intro"},s?"\xab\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc...\xbb":a))};var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("main",{className:"w-full h-full flex md:flex-row-reverse justify-center items-start p-6 flex-col"},r.a.createElement("article",{className:"flex flex-row justify-center items-satrt w-full min-h-screen md:w-4/5 md:ml-3 bg-white shadow p-4 pt-10"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/action"},r.a.createElement(y,null)),r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(O,null))))))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(28),a(29);var S=a(9);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,null,r.a.createElement(j,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/divar-widget-base",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/divar-widget-base","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.cfcf6ec7.chunk.js.map