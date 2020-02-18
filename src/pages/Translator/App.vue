<template>
  <div>
    <Navbar></Navbar>
    <PageHeader pageTitle="Μεταφραστής"></PageHeader>
    <section class="translator-info">
      <div class="container-t">
        <p>{{ translatorDescr }}</p>
        <p v-html="translatorDescrSec"></p>
      </div>
    </section>
    <section class="translator">
      <div class="container-t">
        <div class="translator-wrapper">
          <TextInput v-on:formSubmit="translateText"></TextInput>
          <TextOutput v-text="translatedText"></TextOutput>
        </div>
        <a href="http://translate.yandex.com" target="_blank">
          Powered by
          <span>Yandex.Translate</span>
        </a>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import TextInput from "@/components/TextInput";
import TextOutput from "@/components/TextOutput";
import Footer from "@/components/Footer";
export default {
  name: "Translator",
  metaInfo: {
    title: "Μεταφραστής",
    titleTemplate: "%s | Μαθαίνω γερμανικά",
    meta: [
      {
        name: "keywords",
        content: "translate, greek, griechisch, german, deutch"
      },
      {
        name: "description",
        content:
          "Σε αυτή τη σελίδα μπορείτε να μεταφράσετε οποιοδήποτε κείμενο από ελληνικά σε γερμανικά και το αντίστροφο."
      }
    ]
  },
  components: {
    Navbar,
    PageHeader,
    TextInput,
    TextOutput,
    Footer
  },
  data: function() {
    return {
      translatorDescr:
        "Σε αυτή τη σελίδα μπορείτε να μεταφράσετε οποιαδήποτε λέξη ή κείμενο επιθυμείτε είτε από ελληνικά σε γερμανικά είτε από γερμανικά σε ελληνικά.",
      translatorDescrSec: `Για να κάνετε μετάφραση <span class="underline">επιλέξτε</span> σε ποια γλώσσα θέλετε να γίνει μετάφραση, έπειτα <span class="underline">πληκτρολογήστε</span> κάποια λέξη ή κείμενο και πατήστε το κουμπί "<span class="underline">Μετάφραση</span>".`,
      translatedText: "Μετάφραση"
    };
  },
  methods: {
    translateText: function(text, language) {
      this.$http
        .get(process.env.VUE_APP_MAYBE + language + "&text=" + text)
        .then(response => {
          this.translatedText = response.body.text[0];
        });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/setup/variables.scss";
@import "../../assets/styles/setup/config.scss";
@import "../../assets/styles/setup/mixins.scss";
@import "../../assets/styles/views/translator.scss";
</style>
