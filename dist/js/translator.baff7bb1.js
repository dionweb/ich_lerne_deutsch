(function(t){function e(e){for(var n,i,l=e[0],o=e[1],c=e[2],d=0,f=[];d<l.length;d++)i=l[d],r[i]&&f.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={translator:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/ich_lerne_deutsch/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;s.push([4,"chunk-vendors"]),a()})({0:function(t,e){},"01f7":function(t,e,a){},"16a3":function(t,e,a){"use strict";var n=a("cd8c"),r=a.n(n);r.a},"201a":function(t,e,a){"use strict";var n=a("5ddf"),r=a.n(n);r.a},3108:function(t,e,a){},"36ad":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("div",{staticClass:"page-info"},[t._m(0),a("h3",{staticClass:"underline"},[t._v(t._s(t.pageTitle))])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"index"}},[a("i",{staticClass:"fab fa-houzz green-icon"})])}],s=(a("cadf"),a("551c"),a("f751"),a("097d"),{name:"PageHeader",props:{pageTitle:String}}),i=s,l=(a("201a"),a("2877")),o=Object(l["a"])(i,n,r,!1,null,null,null);e["a"]=o.exports},4:function(t,e,a){t.exports=a("ad43")},"53d7":function(t,e,a){"use strict";var n=a("01f7"),r=a.n(n);r.a},"5ddf":function(t,e,a){},ad43:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("PageHeader",{attrs:{pageTitle:"Μεταφραστής"}}),a("section",{staticClass:"translator-info"},[a("div",{staticClass:"container-t"},[a("p",[t._v(t._s(t.translatorDescr))]),a("p",{domProps:{innerHTML:t._s(t.translatorDescrSec)}})])]),a("section",{staticClass:"translator"},[a("div",{staticClass:"container-t"},[a("div",{staticClass:"translator-wrapper"},[a("TextInput",{on:{formSubmit:t.translateText}}),a("TextOutput",{domProps:{textContent:t._s(t.translatedText)}})],1),t._m(0)])]),a("Footer")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"http://translate.yandex.com",target:"_blank"}},[t._v(" Powered by "),a("span",[t._v("Yandex.Translate")])])}],i=a("d178"),l=a("36ad"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input"},[a("form",{on:{submit:t.formSubmit}},[a("div",{staticClass:"top"},[a("div",{staticClass:"languages"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"btn-s btn-white-s",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"el"}},[t._v("Ελληνικά")]),a("option",{attrs:{value:"de"}},[t._v("Γερμανικά")])])]),a("button",{staticClass:"btn-s btn-green-s",attrs:{type:"submit"}},[t._v("Μετάφραση")])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],attrs:{type:"text",placeholder:"Πληκτρολογήστε κείμενο"},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}})])])},c=[],u={name:"TextInput",data:function(){return{textToTranslate:"",language:""}},created:function(){this.language="de"},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}}},d=u,f=(a("d809"),a("2877")),p=Object(f["a"])(d,o,c,!1,null,null,null),v=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"output title"},[t._v(t._s(t.translatedText))])},b=[],h={name:"TextOutput",props:["translatedText"],data:function(){return{textToTranslate:""}}},_=h,g=(a("c2f9"),Object(f["a"])(_,m,b,!1,null,null,null)),x=g.exports,T=a("fd2d"),y={name:"Translator",metaInfo:{title:"Μεταφραστής",titleTemplate:"%s | Μαθαίνω γερμανικά",meta:[{name:"keywords",content:"translate, greek, griechisch, german, deutch"},{name:"description",content:"Σε αυτή τη σελίδα μπορείτε να μεταφράσετε οποιοδήποτε κείμενο από ελληνικά σε γερμανικά και το αντίστροφο."}]},components:{Navbar:i["a"],PageHeader:l["a"],TextInput:v,TextOutput:x,Footer:T["a"]},data:function(){return{translatorDescr:"Σε αυτή τη σελίδα μπορείτε να μεταφράσετε οποιαδήποτε λέξη ή κείμενο επιθυμείτε είτε από ελληνικά σε γερμανικά είτε από γερμανικά σε ελληνικά.",translatorDescrSec:'Για να κάνετε μετάφραση <span class="underline">επιλέξτε</span> σε ποια γλώσσα θέλετε να γίνει μετάφραση, έπειτα <span class="underline">πληκτρολογήστε</span> κάποια λέξη ή κείμενο και πατήστε το κουμπί "<span class="underline">Μετάφραση</span>".',translatedText:"Μετάφραση"}},methods:{translateText:function(t,e){var a=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190216T151851Z.706e73e362018445.f7ba3d68e61919aa1dad10e28a3551af5327b204&lang="+e+"&text="+t).then((function(t){a.translatedText=t.body.text[0]}))}}},C=y,w=(a("d40a"),Object(f["a"])(C,r,s,!1,null,null,null)),k=w.exports,O=a("28dd"),j=a("58ca");n["a"].config.productionTip=!1,n["a"].use(O["a"]),n["a"].use(j["a"]),new n["a"]({render:function(t){return t(k)}}).$mount("#app")},adac:function(t,e,a){},c2f9:function(t,e,a){"use strict";var n=a("e6a1"),r=a.n(n);r.a},cd8c:function(t,e,a){},d178:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",[a("div",{staticClass:"navbar"},[a("div",{staticClass:"title"},[a("a",{attrs:{href:"index"}},[t._v(t._s(t.navbarTitle))])]),a("div",{staticClass:"links"},t._l(t.navbarItems,(function(e,n){return a("a",{key:n,class:e.class,attrs:{href:e.path,target:e.target}},[t._v(t._s(e.name))])})),0),a("div",{staticClass:"open-sidebar"},[a("i",{staticClass:"fas fa-bars sidebar-open",on:{click:t.Nav}})])]),a("div",{staticClass:"sidebar"},[t._l(t.navbarItems,(function(e,n){return a("a",{key:n,class:e.sidebarClass,attrs:{href:e.path,target:e.target}},[t._v(t._s(e.name))])})),a("button",{staticClass:"btn",on:{click:t.Nav}},[t._v(t._s(t.close))])],2)])])},r=[],s=(a("cadf"),a("551c"),a("f751"),a("097d"),{name:"Navbar",data:function(){return{navbarTitle:"Ich lerne Deutsch",close:"Κλεισιμο",navbarItems:[{name:"Αρχικη",path:"index",class:"underline"},{name:"Λεξιλογιο",path:"dictionary",class:"underline"},{name:"Μεταφραστης",path:"translator",class:"underline"},{name:"Επικοινωνια",path:"contact",class:"underline"},{name:"Ebook",path:"ebook/",class:"ebook underline",sidebarClass:"ebook",target:"_blank"}]}},methods:{Nav:function(){var t=document.querySelector(".sidebar");t.classList.contains("open")?t.classList.remove("open"):t.classList.add("open")}}}),i=s,l=(a("16a3"),a("2877")),o=Object(l["a"])(i,n,r,!1,null,null,null);e["a"]=o.exports},d40a:function(t,e,a){"use strict";var n=a("3108"),r=a.n(n);r.a},d809:function(t,e,a){"use strict";var n=a("adac"),r=a.n(n);r.a},e6a1:function(t,e,a){},fd2d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("p",[t._v(" Copyrights 2020 ©. Created with "),a("i",{staticClass:"fas fa-heart green-icon"}),t._v(" by "),a("a",{attrs:{href:"https://www.dionweb.me",target:"_blank"}},[a("span",{staticClass:"underline"},[t._v("DionWeb")])])]),a("a",{staticClass:"privacy-link",attrs:{href:"privacy"}},[t._v("Πολιτική απορρήτου")])])}],s=(a("cadf"),a("551c"),a("f751"),a("097d"),{name:"Footer"}),i=s,l=(a("53d7"),a("2877")),o=Object(l["a"])(i,n,r,!1,null,null,null);e["a"]=o.exports}});
//# sourceMappingURL=translator.baff7bb1.js.map