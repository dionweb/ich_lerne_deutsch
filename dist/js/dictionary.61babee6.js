(function(e){function t(t){for(var n,i,c=t[0],d=t[1],o=t[2],u=0,h=[];u<c.length;u++)i=c[u],r[i]&&h.push(r[i][0]),r[i]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,c=1;c<a.length;c++){var d=a[c];0!==r[d]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={dictionary:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var l=d;s.push([3,"chunk-vendors"]),a()})({"01f7":function(e,t,a){},"16a3":function(e,t,a){"use strict";var n=a("cd8c"),r=a.n(n);r.a},"201a":function(e,t,a){"use strict";var n=a("5ddf"),r=a.n(n);r.a},3:function(e,t,a){e.exports=a("4dc9")},"36ad":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-header"},[a("div",{staticClass:"page-info"},[e._m(0),a("h3",{staticClass:"underline"},[e._v(e._s(e.pageTitle))])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"index"}},[a("i",{staticClass:"fab fa-houzz green-icon"})])}],s=(a("cadf"),a("551c"),a("f751"),a("097d"),{name:"PageHeader",props:{pageTitle:String}}),i=s,c=(a("201a"),a("2877")),d=Object(c["a"])(i,n,r,!1,null,null,null);t["a"]=d.exports},"4dc9":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navbar"),a("PageHeader",{attrs:{pageTitle:"Λεξιλόγιο"}}),a("div",{staticClass:"dictionary-info"},[a("div",{staticClass:"container"},[a("p",[e._v(e._s(e.dictionaryDescr))]),a("p",{domProps:{innerHTML:e._s(e.dictionaryDescrSec)}})])]),a("div",{staticClass:"container"},[a("div",{staticClass:"selectors"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.verbenChecked,expression:"verbenChecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.verbenChecked)?e._i(e.verbenChecked,null)>-1:e.verbenChecked},on:{change:function(t){var a=e.verbenChecked,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=null,i=e._i(a,s);n.checked?i<0&&(e.verbenChecked=a.concat([s])):i>-1&&(e.verbenChecked=a.slice(0,i).concat(a.slice(i+1)))}else e.verbenChecked=r}}}),a("div",{staticClass:"checkbox-title"},[e._v(e._s(e.firstInput))])]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.adjektiveChecked,expression:"adjektiveChecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.adjektiveChecked)?e._i(e.adjektiveChecked,null)>-1:e.adjektiveChecked},on:{change:function(t){var a=e.adjektiveChecked,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=null,i=e._i(a,s);n.checked?i<0&&(e.adjektiveChecked=a.concat([s])):i>-1&&(e.adjektiveChecked=a.slice(0,i).concat(a.slice(i+1)))}else e.adjektiveChecked=r}}}),a("div",{staticClass:"checkbox-title"},[e._v(e._s(e.secondInput))])]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.substantiveChecked,expression:"substantiveChecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.substantiveChecked)?e._i(e.substantiveChecked,null)>-1:e.substantiveChecked},on:{change:function(t){var a=e.substantiveChecked,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=null,i=e._i(a,s);n.checked?i<0&&(e.substantiveChecked=a.concat([s])):i>-1&&(e.substantiveChecked=a.slice(0,i).concat(a.slice(i+1)))}else e.substantiveChecked=r}}}),a("div",{staticClass:"checkbox-title"},[e._v(e._s(e.thirdInput))])])])]),a("transition",{attrs:{name:"fade"}},[e.verbenChecked||e.adjektiveChecked||e.substantiveChecked?a("div",{staticClass:"dictionary"},[a("div",{staticClass:"container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"search",attrs:{type:"text",placeholder:"Αναζήτηση"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),a("i",{staticClass:"fas fa-search"}),a("table",{attrs:{cellspacing:"0"}},[a("thead",[a("tr",[a("th",[e._v("Γερμανικά")]),a("th",[e._v("Ελληνικά")])])]),a("tbody",{staticClass:"scroller"},[e.verbenChecked?a("div",e._l(e.filteredVerben,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.aufdeutsch))]),a("td",[e._v(e._s(t.aufgriechisch))])])})),0):e._e(),e.adjektiveChecked?a("div",e._l(e.filteredAdjektive,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.aufdeutsch))]),a("td",[e._v(e._s(t.aufgriechisch))])])})),0):e._e(),e.substantiveChecked?a("div",e._l(e.filteredSubstantive,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.aufdeutsch))]),a("td",[e._v(e._s(t.aufgriechisch))])])})),0):e._e()])])])]):e._e()]),a("Footer")],1)},s=[],i=(a("386d"),a("4917"),a("d178")),c=a("36ad"),d=a("fd2d"),o=a("8aa5"),l=a.n(o),u={apiKey:"AIzaSyAidtmmP8Fwf5cOBD1R_OY17Iwu60xHxaU",authDomain:"ichlernedeutsch-dictionary.firebaseapp.com",databaseURL:"https://ichlernedeutsch-dictionary.firebaseio.com",projectId:"ichlernedeutsch-dictionary",storageBucket:"ichlernedeutsch-dictionary.appspot.com",messagingSenderId:"896200277866"},h=l.a.initializeApp(u),v=h.database(),f=v.ref("verben").orderByChild("aufdeutsch"),p=v.ref("adjektive").orderByChild("aufdeutsch"),b=v.ref("substantive").orderByChild("aufdeutsch"),k={name:"Dictionary",metaInfo:{title:"Λεξιλόγιο",titleTemplate:"%s | Μαθαίνω γερμανικά",meta:[{name:"keywords",content:"γερμανικές, λέξεις, γερμανικό, λεξιλόγιο, ρήματα, επίθετα, ουσιαστικά"},{name:"description",content:"Βρες περισσότερα από χίλια ρήματα, επίθετα και ουσιαστικά στα γερμανικά."}]},components:{Navbar:i["a"],PageHeader:c["a"],Footer:d["a"]},firebase:{verben:f,adjektive:p,substantive:b},data:function(){return{dictionaryDescr:"Σε αυτή τη σελίδα μπορείτε να εμφανίσετε και να αναζητήσετε το λεξιλόγιο που παρέχει το ILD. Η λίστα περιέχει περισσότερες από 1000 λέξεις χωρισμένες σε τρεις διαφορετικές κατηγορίες.",dictionaryDescrSec:'Για να εμφανίσετε τις λέξεις επιλέξτε την <span class="underline">κατηγορία</span> ή τις <span class="underline">κατηγορίες</span> που θέλετε.',firstInput:"Ρήματα",secondInput:"Επίθετα",thirdInput:"Ουσιαστικά",verbenChecked:!1,adjektiveChecked:!1,substantiveChecked:!1,search:""}},computed:{filteredVerben:function(){var e=this;return this.verben.filter((function(t){return t.aufdeutsch.match(e.search)||t.aufgriechisch.match(e.search)}))},filteredAdjektive:function(){var e=this;return this.adjektive.filter((function(t){return t.aufdeutsch.match(e.search)||t.aufgriechisch.match(e.search)}))},filteredSubstantive:function(){var e=this;return this.substantive.filter((function(t){return t.aufdeutsch.match(e.search)||t.aufgriechisch.match(e.search)}))}}},m=k,_=(a("ff93"),a("2877")),C=Object(_["a"])(m,r,s,!1,null,null,null),y=C.exports,g=a("5f30"),j=a.n(g),x=a("58ca");n["a"].use(j.a),n["a"].use(x["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(y)}}).$mount("#app")},"53d7":function(e,t,a){"use strict";var n=a("01f7"),r=a.n(n);r.a},"56e9":function(e,t,a){},"5ddf":function(e,t,a){},cd8c:function(e,t,a){},d178:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",[a("div",{staticClass:"navbar"},[a("div",{staticClass:"title"},[a("a",{attrs:{href:"index"}},[e._v(e._s(e.navbarTitle))])]),a("div",{staticClass:"links"},e._l(e.navbarItems,(function(t,n){return a("a",{key:n,class:t.class,attrs:{href:t.path,target:t.target}},[e._v(e._s(t.name))])})),0),a("div",{staticClass:"open-sidebar"},[a("i",{staticClass:"fas fa-bars sidebar-open",on:{click:e.Nav}})])]),a("div",{staticClass:"sidebar"},[e._l(e.navbarItems,(function(t,n){return a("a",{key:n,class:t.sidebarClass,attrs:{href:t.path,target:t.target}},[e._v(e._s(t.name))])})),a("button",{staticClass:"btn",on:{click:e.Nav}},[e._v(e._s(e.close))])],2)])])},r=[],s=(a("cadf"),a("551c"),a("f751"),a("097d"),{name:"Navbar",data:function(){return{navbarTitle:"Ich lerne Deutsch",close:"Κλεισιμο",navbarItems:[{name:"Αρχικη",path:"index",class:"underline"},{name:"Λεξιλογιο",path:"dictionary",class:"underline"},{name:"Μεταφραστης",path:"translator",class:"underline"},{name:"Επικοινωνια",path:"contact",class:"underline"},{name:"Ebook",path:"ebook/",class:"ebook underline",sidebarClass:"ebook",target:"_blank"}]}},methods:{Nav:function(){var e=document.querySelector(".sidebar");e.classList.contains("open")?e.classList.remove("open"):e.classList.add("open")}}}),i=s,c=(a("16a3"),a("2877")),d=Object(c["a"])(i,n,r,!1,null,null,null);t["a"]=d.exports},fd2d:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("p",[e._v(" Copyrights 2020 ©. Created with "),a("i",{staticClass:"fas fa-heart green-icon"}),e._v(" by "),a("a",{attrs:{href:"https://www.dionweb.me",target:"_blank"}},[a("span",{staticClass:"underline"},[e._v("DionWeb")])])]),a("a",{staticClass:"privacy-link",attrs:{href:"privacy"}},[e._v("Πολιτική απορρήτου")])])}],s=(a("cadf"),a("551c"),a("f751"),a("097d"),{name:"Footer"}),i=s,c=(a("53d7"),a("2877")),d=Object(c["a"])(i,n,r,!1,null,null,null);t["a"]=d.exports},ff93:function(e,t,a){"use strict";var n=a("56e9"),r=a.n(n);r.a}});
//# sourceMappingURL=dictionary.61babee6.js.map