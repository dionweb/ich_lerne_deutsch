<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="section-title">{{ sectionTitle }}</h2>
      <div class="testimonials-wrapper">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="box">
          <div class="image">
            <img v-bind:src="testimonial.image" v-bind:alt="testimonial.alt" />
          </div>
          <div class="content">
            <h3>{{ testimonial.name }}</h3>
            <h4>{{ testimonial.identity }}</h4>
            <p class="smaller">
              {{ testimonial.review }}
              <i class="fas fa-quote-right"></i>
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      sectionTitle: "Κριτικές",
      testimonials: [
        {
          name: "Ρένα Αντωνίου",
          identity: "Μαθήτρια",
          review: "Το ILD μέ έχει βοηθήσει στο μάθημα γερμανικών!",
          image: require("../assets/images/testimonial1.jpg"),
          alt: "Ρένα Αντωνίου"
        },
        {
          name: "Βασίλης Παπαδόπουλος",
          identity: "Φωτογράφος",
          review: "Βρίσκω το ILD ενδιαφέρον και εύχρηστο!",
          image: require("../assets/images/testimonial2.jpg"),
          alt: "Βασίλης Παπαδόπουλος"
        },
        {
          name: "Έρικ Τόνσον",
          identity: "Μηχανικός",
          review:
            "Έχω μάθει πάρα πολλές λέξεις χάρις το πλούσιο λεξιλόγιο που υπαρέχει!",
          image: require("../assets/images/testimonial3.jpg"),
          alt: "Έρικ Τόνσον"
        },
        {
          name: "Μαρία Κυριακού",
          identity: "Φοιτήτρια",
          review: "Το χρησιμοποιώ για μετάφραση και δεν με έχει απογοητεύσει!",
          image: require("../assets/images/testimonial4.jpg"),
          alt: "Μαρία Κυριακού"
        }
      ]
    };
  }
};
</script>

<style lang="sass"></style>
