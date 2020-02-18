<template>
  <section class="features">
    <div class="container">
      <div class="features-wrapper">
        <div v-for="(feature, index) in features" :key="index" class="box">
          <i v-bind:class="feature.iconClass" class="fas green-icon"></i>
          <h3>{{ feature.title }}</h3>
          <p class="smaller">{{ feature.description }}</p>
          <a v-bind:href="feature.link" class="btn btn-white">{{ navigate }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",
  data() {
    return {
      navigate: "Πήγαινε",
      features: [
        {
          title: "Ηλεκτρονικό βιβλίο",
          description: "Μάθε γερμανικά δωρεάν χωρίς να πας σε φροντιστήριο!",
          link: "ebook/",
          iconClass: "fa-book-open"
        },
        {
          title: "Λεξιλόγιο",
          description: "Βρες, ψάξε και μάθε περισσότερες από 1000 λέξεις!",
          link: "dictionary",
          iconClass: "fa-book"
        },
        {
          title: "Μεταφραστής",
          description: "Μπορείς να μεταφράσεις εύκολα και γρήγορα!",
          link: "translator",
          iconClass: "fa-language"
        }
      ]
    };
  }
};
</script>

<style lang="sass"></style>
