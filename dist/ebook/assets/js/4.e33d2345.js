(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{315:function(s,e,t){},348:function(s,e,t){"use strict";var i=t(315);t.n(i).a},356:function(s,e,t){"use strict";t.r(e);var i={name:"Cards",data:function(){return{currentFilter:"Όλες",cards:[{chapter:"Άρθρο και κλίση",question:"Σε ποια θέση βρίσκονται οι κτητικές αντωνυμίες;",answer:"Πριν από το ουσιαστικό στο οποίο αναφέρονται.",isAnswerVisible:!1},{chapter:"Άρθρο και κλίση",question:"Με τι ρωτάμε στην αιτιατική για πρόσωπα;",answer:"Στην αιτιατική για πρόσωπα ρωτάμε με Wen (ποιον).",isAnswerVisible:!1},{chapter:"Αριθμοί",question:"Με ποια σειρά διαβάζουμε τους αριθμούς;",answer:"Στα γερμανικά λέμε πρώτα τη μονάδα και μετά τη δεκάδα",isAnswerVisible:!1},{chapter:"Αριθμοί",question:"Πως ρωτάμε τι ώρα είναι;",answer:" Wie viel Uhr ist es? ή Wie spät ist es?",isAnswerVisible:!1},{chapter:"Ρήματα",question:"Σε ποια θέση της πρότασης μπαίνει το ρήμα;",answer:"Πάντα στην δεύτερη θέση κλιμένο.",isAnswerVisible:!1},{chapter:"Ρήματα",question:"Με ποιο ρήμα σχηματίζεται ο Konjunktiv II",answer:"Με το ρήμα werden.",isAnswerVisible:!1},{chapter:"Προτάσεις",question:"Πότε κάνουμε απαρεμφατικές προτάσεις με zu+Inf;",answer:"Όταν έχουμε ταυτοπροσωπία.",isAnswerVisible:!1},{chapter:"Προτάσεις",question:"Γιατί χρησιμοποιείται ο σύνδεσμος als;",answer:"Για μια πράξη που έγινε μια φορά στο παρελθόν.",isAnswerVisible:!1}]}},methods:{setFilter:function(s){this.currentFilter=s},rotateCard:function(s){s.isAnswerVisible=!s.isAnswerVisible}}},r=(t(348),t(40)),n=Object(r.a)(i,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"cards"},[t("div",{staticClass:"buttons"},[t("button",{class:{active:"Όλες"===s.currentFilter},on:{click:function(e){return s.setFilter("Όλες")}}},[s._v("Όλες")]),s._v(" "),t("button",{class:{active:"Άρθρο και κλίση"===s.currentFilter},on:{click:function(e){return s.setFilter("Άρθρο και κλίση")}}},[s._v("Άρθρο")]),s._v(" "),t("button",{class:{active:"Αριθμοί"===s.currentFilter},on:{click:function(e){return s.setFilter("Αριθμοί")}}},[s._v("Αριθμοί")]),s._v(" "),t("button",{class:{active:"Ρήματα"===s.currentFilter},on:{click:function(e){return s.setFilter("Ρήματα")}}},[s._v("Ρήματα")]),s._v(" "),t("button",{class:{active:"Προτάσεις"===s.currentFilter},on:{click:function(e){return s.setFilter("Προτάσεις")}}},[s._v("Προτάσεις")])]),s._v(" "),t("transition-group",{staticClass:"cards",attrs:{name:"cards"}},s._l(s.cards,(function(e,i){return s.currentFilter===e.chapter||"Όλες"===s.currentFilter?t("div",{key:i,staticClass:"card",on:{click:function(t){return s.rotateCard(e)}}},[t("transition",{attrs:{name:"rotate"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isAnswerVisible,expression:"!card.isAnswerVisible"}],staticClass:"question"},[t("span",[s._v("Ερώτηση")]),s._v(" "),t("p",[s._v(s._s(e.question))]),s._v(" "),t("i",{staticClass:"fas fa-eye"})])]),s._v(" "),t("transition",{attrs:{name:"rotate"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isAnswerVisible,expression:"card.isAnswerVisible"}],staticClass:"answer"},[t("span",[s._v("Απάντηση")]),s._v(" "),t("p",[s._v(s._s(e.answer))]),s._v(" "),t("i",{staticClass:"fas fa-eye-slash"})])])],1):s._e()})),0)],1)}),[],!1,null,"195b61a4",null);e.default=n.exports}}]);