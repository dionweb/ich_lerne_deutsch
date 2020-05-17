<template>
  <div>
    <Navbar></Navbar>
    <PageHeader pageTitle="Λεξιλόγιο"></PageHeader>
    <div class="dictionary-info">
      <div class="container">
        <p>{{ dictionaryDescr }}</p>
        <p v-html="dictionaryDescrSec"></p>
      </div>
    </div>
    <div class="container">
      <div class="selectors">
        <label>
          <input type="checkbox" v-model="verbenChecked" />
          <div class="checkbox-title">{{ firstInput }}</div>
        </label>
        <label>
          <input type="checkbox" v-model="adjektiveChecked" />
          <div class="checkbox-title">{{ secondInput }}</div>
        </label>
        <label>
          <input type="checkbox" v-model="substantiveChecked" />
          <div class="checkbox-title">{{ thirdInput }}</div>
        </label>
      </div>
    </div>
    <transition name="fade">
      <div v-if="verbenChecked || adjektiveChecked || substantiveChecked" class="dictionary">
        <div class="container">
          <input type="text" v-model="search" placeholder="Αναζήτηση" class="search" />
          <i class="fas fa-search"></i>
          <table cellspacing="0">
            <thead>
              <tr>
                <th>Γερμανικά</th>
                <th>Ελληνικά</th>
              </tr>
            </thead>
            <tbody class="scroller">
              <div v-if="verbenChecked">
                <tr v-for="(verben, x) in filteredVerben" :key="x">
                  <td>{{ verben.aufdeutsch }}</td>
                  <td>{{ verben.aufgriechisch }}</td>
                </tr>
              </div>

              <div v-if="adjektiveChecked">
                <tr v-for="(adjektive, y) in filteredAdjektive" :key="y">
                  <td>{{ adjektive.aufdeutsch }}</td>
                  <td>{{ adjektive.aufgriechisch }}</td>
                </tr>
              </div>

              <div v-if="substantiveChecked">
                <tr v-for="(substantive, z) in filteredSubstantive" :key="z">
                  <td>{{ substantive.aufdeutsch }}</td>
                  <td>{{ substantive.aufgriechisch }}</td>
                </tr>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import firebase from "firebase/app";
import "firebase/database";

let db = firebase
  .initializeApp({
    apiKey: process.env.VUE_APP_I,
    authDomain: process.env.VUE_APP_DONT,
    databaseURL: process.env.VUE_APP_KNOW,
    projectId: process.env.VUE_APP_WTF,
    storageBucket: process.env.VUE_APP_IS,
    messagingSenderId: process.env.VUE_APP_THIS
  })
  .database();

let verbenRef = db.ref("verben").orderByChild("aufdeutsch");
let adjektiveRef = db.ref("adjektive").orderByChild("aufdeutsch");
let substantiveRef = db.ref("substantive").orderByChild("aufdeutsch");

export default {
  name: "Dictionary",
  metaInfo: {
    title: "Λεξιλόγιο",
    titleTemplate: "%s | Μαθαίνω γερμανικά",
    meta: [
      {
        name: "keywords",
        content:
          "γερμανικές, λέξεις, γερμανικό, λεξιλόγιο, ρήματα, επίθετα, ουσιαστικά"
      },
      {
        name: "description",
        content:
          "Βρες περισσότερα από χίλια ρήματα, επίθετα και ουσιαστικά στα γερμανικά."
      }
    ]
  },
  components: {
    Navbar,
    PageHeader,
    Footer
  },
  firebase: {
    verben: verbenRef,
    adjektive: adjektiveRef,
    substantive: substantiveRef
  },
  data: function() {
    return {
      dictionaryDescr:
        "Σε αυτή τη σελίδα μπορείτε να εμφανίσετε και να αναζητήσετε το λεξιλόγιο που παρέχει το ILD. Η λίστα περιέχει περισσότερες από 1000 λέξεις χωρισμένες σε τρεις διαφορετικές κατηγορίες.",
      dictionaryDescrSec: `Για να εμφανίσετε τις λέξεις επιλέξτε την <span class="underline">κατηγορία</span> ή τις <span class="underline">κατηγορίες</span> που θέλετε.`,
      firstInput: "Ρήματα",
      secondInput: "Επίθετα",
      thirdInput: "Ουσιαστικά",
      verben: verbenRef,
      adjektive: adjektiveRef,
      substantive: substantiveRef,
      verbenChecked: false,
      adjektiveChecked: false,
      substantiveChecked: false,
      search: ""
    };
  },
  computed: {
    filteredVerben: function() {
      return this.verben.filter(verben => {
        return (
          verben.aufdeutsch.toLowerCase().match(this.search.toLowerCase()) ||
          verben.aufgriechisch.toLowerCase().match(this.search.toLowerCase())
        );
      });
    },
    filteredAdjektive: function() {
      return this.adjektive.filter(adjektive => {
        return (
          adjektive.aufdeutsch.toLowerCase().match(this.search.toLowerCase()) ||
          adjektive.aufgriechisch.toLowerCase().match(this.search.toLowerCase())
        );
      });
    },
    filteredSubstantive: function() {
      return this.substantive.filter(substantive => {
        return (
          substantive.aufdeutsch
            .toLowerCase()
            .match(this.search.toLowerCase()) ||
          substantive.aufgriechisch
            .toLowerCase()
            .match(this.search.toLowerCase())
        );
      });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/setup/variables.scss";
@import "../../assets/styles/setup/config.scss";
@import "../../assets/styles/setup/mixins.scss";
@import "../../assets/styles/views/dictionary.scss";
</style>
