<template>
  <div>
    <Navbar></Navbar>
    <div class="showcase">
      <div class="intro">
        <h1>{{ introTitle }}</h1>
        <h2 v-html="introMessage"></h2>
        <a href="#about" class="btn btn-green">{{ introButton }}</a>
      </div>
    </div>
    <section class="about-us" id="about">
      <div class="container">
        <h2 class="section-title">{{ aboutSectionTitle }}</h2>
        <div class="about-wrapper">
          <div class="text">
            <p>{{ aboutDescr }}</p>
            <p>{{ aboutDescrSec }}</p>
          </div>
          <div class="image">
            <img src="../../assets/images/mockup.png" alt="Mockup" />
          </div>
        </div>
      </div>
    </section>
    <Features></Features>
    <section class="quote">
      <div class="overlay"></div>
      <blockquote>
        <h3>Μια διαφορετική γλώσσα είναι ένα διαφορετικό όραμα ζωής</h3>
        <h4>Federico Fellini</h4>
      </blockquote>
    </section>
    <Testimonials></Testimonials>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  metaInfo: {
    title: "Αρχική",
    titleTemplate: "%s | Μαθαίνω γερμανικά",
    meta: [
      {
        name: "keywords",
        content: "μαθαίνω, γερμανικά, deutsch, lernen"
      },
      {
        name: "description",
        content:
          "Το Ich lerne Deutsch πρόκειται για έναν ιστότοπο με σκοπό την εκμάθηση της γερμανικής γλώσσας."
      }
    ]
  },
  components: {
    Navbar,
    Features,
    Testimonials,
    Footer
  },
  data() {
    return {
      introTitle: "Καλώς Ήρθατε στο ILD!",
      introMessage: ` Το <span class="underline">Ich lerne Deutsch</span> πρόκειται για έναν ιστότοπο με σκοπό την εκμάθηση της γερμανικής γλώσσας.`,
      introButton: "Περισσότερα",
      aboutSectionTitle: "Σχετικά με εμάς",
      aboutDescr:
        'Ο ιστότοπος Ich lerne Deutsch ("μαθαίνω γερμανικά") έχει ως στόχο την εκμάθηση της γερμανικής γλώσσας. Πρόκειται για μία ιστοσελίδα που επιχειρεί να βοηθήσει τους επισκέπτες της μέσω του ebook, του λεξιλογίου και των ασκήσεων που παρέχει.',
      aboutDescrSec:
        "Το ILD είναι εντελώς δωρεάν καθώς είναι εθελοντική ιστοσελίδα με μόνο γνώμονα την αγάπη προς τη γερμανική γλώσσα.",
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/setup/variables.scss";
@import "../../assets/styles/setup/config.scss";
@import "../../assets/styles/setup/mixins.scss";
@import "../../assets/styles/views/home.scss";
</style>
