<template>
  <div class="cards">
    <div class="buttons">
      <button
        v-bind:class="{ active: currentFilter === 'Όλες' }"
        v-on:click="setFilter('Όλες')"
      >Όλες</button>
      <button
        v-bind:class="{ active: currentFilter === 'Άρθρο και κλίση' }"
        v-on:click="setFilter('Άρθρο και κλίση')"
      >Άρθρο</button>
      <button
        v-bind:class="{ active: currentFilter === 'Αριθμοί' }"
        v-on:click="setFilter('Αριθμοί')"
      >Αριθμοί</button>
      <button
        v-bind:class="{ active: currentFilter === 'Ρήματα' }"
        v-on:click="setFilter('Ρήματα')"
      >Ρήματα</button>
      <button
        v-bind:class="{ active: currentFilter === 'Προτάσεις' }"
        v-on:click="setFilter('Προτάσεις')"
      >Προτάσεις</button>
    </div>

    <transition-group class="cards" name="cards">
      <div
        class="card"
        v-if="currentFilter === card.chapter || currentFilter === 'Όλες'"
        v-for="(card, index) in cards"
        :key="index"
        v-on:click="rotateCard(card)"
      >
        <transition name="rotate">
          <div class="question" v-show="!card.isAnswerVisible">
            <span>Ερώτηση</span>
            <p>{{ card.question }}</p>
            <i class="fas fa-eye"></i>
          </div>
        </transition>
        <transition name="rotate">
          <div class="answer" v-show="card.isAnswerVisible">
            <span>Απάντηση</span>
            <p>{{ card.answer }}</p>
            <i class="fas fa-eye-slash"></i>
          </div>
        </transition>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      currentFilter: "Όλες",
      cards: [
        {
          chapter: "Άρθρο και κλίση",
          question: "Σε ποια θέση βρίσκονται οι κτητικές αντωνυμίες;",
          answer: "Πριν από το ουσιαστικό στο οποίο αναφέρονται.",
          isAnswerVisible: false
        },
        {
          chapter: "Άρθρο και κλίση",
          question: "Με τι ρωτάμε στην αιτιατική για πρόσωπα;",
          answer: "Στην αιτιατική για πρόσωπα ρωτάμε με Wen (ποιον).",
          isAnswerVisible: false
        },
        {
          chapter: "Αριθμοί",
          question: "Με ποια σειρά διαβάζουμε τους αριθμούς;",
          answer: "Στα γερμανικά λέμε πρώτα τη μονάδα και μετά τη δεκάδα",
          isAnswerVisible: false
        },
        {
          chapter: "Αριθμοί",
          question: "Πως ρωτάμε τι ώρα είναι;",
          answer: " Wie viel Uhr ist es? ή Wie spät ist es?",
          isAnswerVisible: false
        },
        {
          chapter: "Ρήματα",
          question: "Σε ποια θέση της πρότασης μπαίνει το ρήμα;",
          answer: "Πάντα στην δεύτερη θέση κλιμένο.",
          isAnswerVisible: false
        },
        {
          chapter: "Ρήματα",
          question: "Με ποιο ρήμα σχηματίζεται ο Konjunktiv II",
          answer: "Με το ρήμα werden.",
          isAnswerVisible: false
        },
        {
          chapter: "Προτάσεις",
          question: "Πότε κάνουμε απαρεμφατικές προτάσεις με zu+Inf;",
          answer: "Όταν έχουμε ταυτοπροσωπία.",
          isAnswerVisible: false
        },
        {
          chapter: "Προτάσεις",
          question: "Γιατί χρησιμοποιείται ο σύνδεσμος als;",
          answer: "Για μια πράξη που έγινε μια φορά στο παρελθόν.",
          isAnswerVisible: false
        }
      ]
    };
  },
  methods: {
    setFilter: function(filter) {
      this.currentFilter = filter;
    },
    rotateCard: function(card) {
      card.isAnswerVisible = !card.isAnswerVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
$green: #0eb29a;
$shadow: 0 0 10px rgba(0, 0, 0, 0.17);

@mixin faIcon($content) {
  font-family: "Font Awesome 5 Free";
  content: $content;
  font-weight: 900;
  font-style: normal;
  padding: 10px;
  font-size: 16px;
  border-radius: 50%;
  border: 2px solid $green;
  position: absolute;
  background: white;
  color: $green;
  left: -55px;
  top: -10px;
}

body {
  overflow-x: hidden;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  p {
    min-width: 100px;
  }
  .buttons {
    font-size: 0;
    margin: 30px auto;
    border: 1px solid $green;
    border-radius: 10px;
    overflow: auto;
    box-shadow: $shadow;

    button {
      font-family: "Roboto Condensed";
      font-size: 1rem;
      cursor: pointer;
      outline: 0;
      border: 0;
      padding: 5px 13px;
      color: #1b1c1d;
      background: transparent;

      &:hover,
      &.active {
        color: white;
        background: $green;
        transition: 400ms;
      }

      &::-moz-focus-inner {
        border: 0;
      }
    }
  }
}

.card {
  cursor: pointer;
  padding: 25px 35px;
  transition: 400ms;
  margin: 15px;
  border-left: 2px solid $green;
  box-shadow: $shadow;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  flex: 1;
  &:hover {
    transform: scale(1.04);
    opacity: 1;
  }
}

.question,
.answer {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  &.question::before {
    @include faIcon("\f059");
  }

  &.answer::before {
    @include faIcon("\f058");
  }
  span {
    font-style: italic;
  }
  i {
    color: $green;
  }
}

.card .rotate-enter-active {
  transition: 400ms ease;
}

.rotate-enter {
  transform: rotateX(180deg);
}

.rotate-leave {
  display: none;
}

.cards-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.cards-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.cards-leave-active {
  position: absolute;
  z-index: -1;
}

@media screen and (max-width: 555px) {
  .cards .buttons {
    font-size: 0;
    button {
      padding: 10px 3px;
      font-size: 14px;
    }
  }

  .card:hover {
    transform: none;
  }
}
</style>