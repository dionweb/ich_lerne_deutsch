(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(e,s,t){"use strict";var i=t(75);t.n(i).a},202:function(e,s,t){"use strict";t.r(s);var i={name:"Cards",data:function(){return{currentFilter:"Όλες",cards:[{chapter:"Άρθρο και κλίση",question:"Σε ποια θέση βρίσκονται οι κτητικές αντωνυμίες;",answer:"Πριν από το ουσιαστικό στο οποίο αναφέρονται.",isAnswerVisible:!1},{chapter:"Άρθρο και κλίση",question:"Με τι ρωτάμε στην αιτιατική για πρόσωπα;",answer:"Στην αιτιατική για πρόσωπα ρωτάμε με Wen (ποιον).",isAnswerVisible:!1},{chapter:"Αριθμοί",question:"Με ποια σειρά διαβάζουμε τους αριθμούς;",answer:"Στα γερμανικά λέμε πρώτα τη μονάδα και μετά τη δεκάδα",isAnswerVisible:!1},{chapter:"Αριθμοί",question:"Πως ρωτάμε τι ώρα είναι;",answer:" Wie viel Uhr ist es? ή Wie spät ist es?",isAnswerVisible:!1},{chapter:"Ρήματα",question:"Σε ποια θέση της πρότασης μπαίνει το ρήμα;",answer:"Πάντα στην δεύτερη θέση κλιμένο.",isAnswerVisible:!1},{chapter:"Ρήματα",question:"Με ποιο ρήμα σχηματίζεται ο Konjunktiv II",answer:"Με το ρήμα werden.",isAnswerVisible:!1},{chapter:"Προτάσεις",question:"Πότε κάνουμε απαρεμφατικές προτάσεις με zu+Inf;",answer:"Όταν έχουμε ταυτοπροσωπία.",isAnswerVisible:!1},{chapter:"Προτάσεις",question:"Γιατί χρησιμοποιείται ο σύνδεσμος als;",answer:"Για μια πράξη που έγινε μια φορά στο παρελθόν.",isAnswerVisible:!1}]}},methods:{setFilter:function(e){this.currentFilter=e},rotateCard:function(e){e.isAnswerVisible=!e.isAnswerVisible}}},r=(t(195),t(0)),n=Object(r.a)(i,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"cards"},[t("div",{staticClass:"buttons"},[t("button",{class:{active:"Όλες"===e.currentFilter},on:{click:function(s){return e.setFilter("Όλες")}}},[e._v("Όλες")]),e._v(" "),t("button",{class:{active:"Άρθρο και κλίση"===e.currentFilter},on:{click:function(s){return e.setFilter("Άρθρο και κλίση")}}},[e._v("Άρθρο")]),e._v(" "),t("button",{class:{active:"Αριθμοί"===e.currentFilter},on:{click:function(s){return e.setFilter("Αριθμοί")}}},[e._v("Αριθμοί")]),e._v(" "),t("button",{class:{active:"Ρήματα"===e.currentFilter},on:{click:function(s){return e.setFilter("Ρήματα")}}},[e._v("Ρήματα")]),e._v(" "),t("button",{class:{active:"Προτάσεις"===e.currentFilter},on:{click:function(s){return e.setFilter("Προτάσεις")}}},[e._v("Προτάσεις")])]),e._v(" "),t("transition-group",{staticClass:"cards",attrs:{name:"cards"}},e._l(e.cards,(function(s,i){return e.currentFilter===s.chapter||"Όλες"===e.currentFilter?t("div",{key:i,staticClass:"card",on:{click:function(t){return e.rotateCard(s)}}},[t("transition",{attrs:{name:"rotate"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!s.isAnswerVisible,expression:"!card.isAnswerVisible"}],staticClass:"question"},[t("span",[e._v("Ερώτηση")]),e._v(" "),t("p",[e._v(e._s(s.question))]),e._v(" "),t("i",{staticClass:"fas fa-eye"})])]),e._v(" "),t("transition",{attrs:{name:"rotate"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:s.isAnswerVisible,expression:"card.isAnswerVisible"}],staticClass:"answer"},[t("span",[e._v("Απάντηση")]),e._v(" "),t("p",[e._v(e._s(s.answer))]),e._v(" "),t("i",{staticClass:"fas fa-eye-slash"})])])],1):e._e()})),0)],1)}),[],!1,null,"53b22a6e",null);s.default=n.exports},75:function(e,s,t){}}]);