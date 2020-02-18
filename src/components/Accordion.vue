<template>
  <div class="faq">
    <h2 class="section-title">Συχνές ερωτήσεις</h2>
    <div class="accordions-wrapper">
      <div v-for="(qna, index) in customItems" :key="index" class="accordion">
        <div v-on:click="showAnswer(index)" class="question">{{ qna.question }}</div>
        <transition name="fade">
          <div v-if="qna.active" class="answer">{{ qna.answer }}</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: ["qnas"],
  data() {
    return {
      accordions: []
    };
  },
  computed: {
    customItems() {
      // eslint-disable-next-line
      this.accordions = this.qnas.map(qna => {
        return {
          question: qna.question,
          answer: qna.answer,
          active: false
        };
      });
      return this.accordions;
    }
  },
  methods: {
    showAnswer(index) {
      this.accordions[index].active = !this.accordions[index].active;
      this.accordions.forEach((qna, ind) => {
        if (ind !== index) {
          qna.active = false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/components/accordion.scss";
</style>
