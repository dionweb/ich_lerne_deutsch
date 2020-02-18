<template>
  <div>
    <div v-if="questionIndex < 0" class="welcome">
      <h3>Εισαγωγή</h3>
      <p>
        Το κουίζ αποτελείται από
        <span>{{ quiz.questions.length }}</span> ερωτήσεις. Πιέστε το κουμπί για ξεκινήσετε.
      </p>
      <button v-on:click="start">
        Ξεκίνα
        <i class="fas fa-play"></i>
      </button>
    </div>
    <div class="question">
      <div v-for="(question, index) in quiz.questions">
        <div v-show="index === questionIndex">
          <span class="current">{{questionIndex+1}}/{{quiz.questions.length}}</span>
          <h3>{{ question.question }}</h3>
          <ol>
            <li v-for="(response, indexS) in question.responses">
              <label>
                <input
                  type="radio"
                  v-bind:value="response.text"
                  v-bind:name="response.text"
                  v-model="userResponses[index]"
                  v-bind:checked="response.correct==true"
                />
                {{response.text}}
              </label>
            </li>
          </ol>
          <div class="step-buttons">
            <button v-if="questionIndex > 0" v-on:click="previous">
              <i class="fas fa-arrow-left"></i>
              Πίσω
            </button>
            <button v-on:click="next">
              Συνέχεια
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div v-show="questionIndex === quiz.questions.length" class="results">
        <h3>Αποτελέσματα</h3>
        <p>
          Απάντησες σωστά σε
          <span>{{ score() }}</span> από τις
          <span>{{ quiz.questions.length }}</span> ερωτήσεις.
        </p>
        <button v-on:click="start">
          Επανάληψη
          <i class="fas fa-redo"></i>
        </button>
        <button v-on:click="close">
          Κλείσιμο
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
let quiz = {
  questions: [
    {
      question: "Πως είναι το αόριστο άρθρο ein στον πληθυντικό;",
      responses: [
        {
          text: "eine",
          correct: false
        },
        {
          text: "ein",
          correct: false
        },
        {
          text: "kein",
          correct: false
        },
        {
          text: "Δεν έχει πληθυντικό",
          correct: true
        }
      ]
    },
    {
      question: "Με ποιες λέξεις μπορούμε να σχηματίσουμε άρνηση;",
      responses: [
        {
          text: "kein",
          correct: false
        },
        {
          text: "nicht",
          correct: false
        },
        {
          text: "Και με τις δύο",
          correct: true
        },
        {
          text: "Με καμία από τις παραπάνω",
          correct: false
        }
      ]
    },
    {
      question: "Στην αιτιατική, για πρόσωπα ρωτάμε με:",
      responses: [
        {
          text: "Wen",
          correct: true
        },
        {
          text: "Wem",
          correct: false
        },
        {
          text: "Wer",
          correct: false
        },
        {
          text: "Wessen",
          correct: false
        }
      ]
    },
    {
      question: "Το απαρέμφατο του ρήματος spielen είναι:",
      responses: [
        {
          text: "spiel",
          correct: false
        },
        {
          text: "en",
          correct: false
        },
        {
          text: "spielen",
          correct: true
        },
        {
          text: "gespielt",
          correct: false
        }
      ]
    },
    {
      question: "Πως κλίνεται το ρήμα sitzen στο δεύτερο ενικό;",
      responses: [
        {
          text: "Du sitz",
          correct: false
        },
        {
          text: "Du sitzt",
          correct: true
        },
        {
          text: "Du sitzet",
          correct: false
        },
        {
          text: "Du sitzen",
          correct: false
        }
      ]
    },
    {
      question: "Το πρόθεμα ενός χωριζόμενου ρήματος μπαίνει:",
      responses: [
        {
          text: "Δεν μπαίνει πουθενά",
          correct: false
        },
        {
          text: "Στην δεύτερη θέση",
          correct: false
        },
        {
          text: "Στην πρώτη θέση",
          correct: false
        },
        {
          text: "Στο τέλος της πρότασης",
          correct: true
        }
      ]
    },
    {
      question: "Ποιο από τα παρακάτω είναι σωστό για προστακτική ενικού;",
      responses: [
        {
          text: "Du kommst",
          correct: false
        },
        {
          text: "Kommen Sie!",
          correct: false
        },
        {
          text: "Komm!",
          correct: true
        },
        {
          text: "Kommt!",
          correct: false
        }
      ]
    },
    {
      question: "Μέλλοντας σχηματίζεται με το ρήμα:",
      responses: [
        {
          text: "Sein",
          correct: false
        },
        {
          text: "Haben",
          correct: false
        },
        {
          text: "Werden",
          correct: true
        },
        {
          text: "Wollen",
          correct: false
        }
      ]
    },
    {
      question:
        "Όταν το ρήμα  δηλώνει κίνηση ο παρακείμενος σχηματίζεται με το βοηθητικό ρήμα:",
      responses: [
        {
          text: "machen",
          correct: false
        },
        {
          text: "werden",
          correct: false
        },
        {
          text: "haben",
          correct: false
        },
        {
          text: "sein",
          correct: true
        }
      ]
    },
    {
      question: "Ποια είναι η μετοχή παρακειμένου του ρήματος spielen;",
      responses: [
        {
          text: "gespielt",
          correct: true
        },
        {
          text: "gespielen",
          correct: false
        },
        {
          text: "spielt",
          correct: false
        },
        {
          text: "spielen",
          correct: false
        }
      ]
    },
    {
      question: "Ποια είναι η μετοχή παρακειμένου του ρήματος verkaufen;",
      responses: [
        {
          text: "vergekaufen",
          correct: false
        },
        {
          text: "vergekauft",
          correct: false
        },
        {
          text: "verkaufen",
          correct: false
        },
        {
          text: "verkauft",
          correct: true
        }
      ]
    },
    {
      question: "Οι σύνδεσμοι ADUSO συνδέουν:",
      responses: [
        {
          text: "Δύο όρους μιας πρότασης",
          correct: false
        },
        {
          text: "Δύο κύριες προτάσεις",
          correct: false
        },
        {
          text: "Και τα δύο",
          correct: true
        },
        {
          text: "Τίποτα από τα παραπάνω",
          correct: false
        }
      ]
    },
    {
      question: "Στις δευτερεύουσες προτάσεις",
      responses: [
        {
          text: "Το ρήμα μπαίνει στην τελευταία θέση",
          correct: true
        },
        {
          text: "Το ρήμα μπαίνει στην δεύτερη θέση",
          correct: false
        },
        {
          text: "Το ρήμα μπαίνει μετά τον σύνδεσμο",
          correct: false
        },
        {
          text: "Τα χωριζόμενα ρήματα χωρίζονται",
          correct: false
        }
      ]
    },

    {
      question: "Ο συγκριτικός βαθμός σχηματίζεται με την κατάληξη:",
      responses: [
        {
          text: "-e",
          correct: false
        },
        {
          text: "-er",
          correct: true
        },
        {
          text: "-en",
          correct: false
        },
        {
          text: "-es",
          correct: false
        }
      ]
    },
    {
      question: "Ο υπερθετικός βαθμός σχηματίζεται με την κατάληξη:",
      responses: [
        {
          text: "-st",
          correct: false
        },
        {
          text: "-ste",
          correct: false
        },
        {
          text: "-sten",
          correct: true
        },
        {
          text: "-s",
          correct: false
        }
      ]
    },
    {
      question:
        "Ποια λέξη χρησιμοποιείται για σύγκριση δύο ανόμοιων πραγμάτων;",
      responses: [
        {
          text: "genau so",
          correct: false
        },
        {
          text: "wie",
          correct: false
        },
        {
          text: "als",
          correct: true
        },
        {
          text: "wenn",
          correct: false
        }
      ]
    },
    {
      question: "Ποια είναι η σωστή μορφή ημερομηνίας;",
      responses: [
        {
          text: "24/04/2010",
          correct: false
        },
        {
          text: "24-04-2010",
          correct: false
        },
        {
          text: "04/24/2010",
          correct: false
        },
        {
          text: "24.04.2010",
          correct: true
        }
      ]
    },
    {
      question: "Πως διαβάζεται ο αριθμός 23;",
      responses: [
        {
          text: "zwangizunddrei",
          correct: false
        },
        {
          text: "zwangiz und drei",
          correct: false
        },
        {
          text: "dreiundzwanzig",
          correct: true
        },
        {
          text: "drei und zwanzig",
          correct: false
        }
      ]
    },
    {
      question: "Πως λέμε ότι σήμερα είναι 11 Νοεμβρίου;",
      responses: [
        {
          text: "Heute ist elfte Zehnte.",
          correct: false
        },
        {
          text: "Heute ist der elfte Zehnte.",
          correct: true
        },
        {
          text: "Heute ist der elfte Zehn.",
          correct: false
        },
        {
          text: "Heute ist elf Zehnte.",
          correct: false
        }
      ]
    },
    {
      question: "Τι ώρα είναι; (13:35)",
      responses: [
        {
          text: "Es ist fünf nach halb zwei.",
          correct: true
        },
        {
          text: "Es ist fünf nach halb eins.",
          correct: false
        },
        {
          text: "Es ist fünf vor halb zwei.",
          correct: false
        },
        {
          text: "Es ist fünf vor halb eins.",
          correct: false
        }
      ]
    }
  ]
};
export default {
  data() {
    return {
      quiz: quiz,
      questionIndex: -1,
      userResponses: Array(quiz.questions.length).fill(false)
    };
  },
  methods: {
    next: function() {
      this.questionIndex++;
    },
    previous: function() {
      this.questionIndex--;
    },
    score: function() {
      let correctCount = 0;
      let self = this;

      this.quiz.questions.filter(function(value, i) {
        value.userAnswerCorrect = false;
        value.userAnswer = self.userResponses[i];

        value.responses.filter(function(answer, j) {
          if (answer.correct == true && value.userAnswer == answer.text) {
            correctCount++;
          }
        });
      });

      return correctCount;
    },

    start: function() {
      this.userResponses = [];
      this.questionIndex = 0;
    },

    close: function() {
      this.userResponses = [];
      this.questionIndex = -1;
    }
  }
};
</script>

<style lang="scss" scoped>
$green: #0eb29a;
$black: #1b1c1d;
$grey: #f2f4f4;
$grey-sec: #f7f7f7;
$shadow: 0 0 10px rgba(0, 0, 0, 0.17);
$shadowSec: 0 0 10px rgba(0, 0, 0, 0.06);

@mixin faIcon($content) {
  content: $content;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 20px;
  position: absolute;
  top: -2px;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: $green;
}

h3 {
  padding: 0 10px;
  font-size: 1.2rem;
}
p {
  margin: 10px;
  font-size: 1.1rem;
  span {
    font-weight: bold;
    color: $green;
  }
}

button {
  font-family: "Roboto Condensed";
  font-size: 1rem;
  cursor: pointer;
  border: 0;
  background: white;
  border: 1px solid $green;
  color: $black;
  padding: 6px 16px;
  margin: 10px 0 0 10px;
  border-radius: 30px;
  transition: 400ms;
  i {
    transition: 400ms;
    margin-left: 7px;
    color: $green;
    &.fa-arrow-left {
      margin-left: 0;
      margin-right: 7px;
    }
  }
  &:hover {
    background: $green;
    color: white;
    i {
      color: white;
    }
  }
  &::-moz-focus-inner {
    border: 0;
  }
}

.welcome {
  margin: 40px 10px;
  overflow: hidden;
}

.question {
  margin: 40px 10px;
  overflow: hidden;
  position: relative;
  .current {
    top: 21px;
    right: 19px;
    position: absolute;
  }
  ol {
    list-style-type: none;
    padding: 0;
    li {
      padding: 6px;
      label {
        transition: 400ms;
        display: block;
        cursor: pointer;
        box-shadow: $shadowSec;
        padding: 6px;
        border-left: 2px solid #0eb29a;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        &:hover {
          background: $grey;
          box-shadow: none;
          margin-left: 10px;
        }
        input {
          margin-left: 6px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          display: inline-block;
          position: relative;
          top: 10px;
          height: 25px;
          width: 25px;
          border: 0;
          border-radius: 50%;
          outline: none;
          transition: 400ms;
          &:before {
            @include faIcon("\f111");
          }
          &:checked::before {
            @include faIcon("\f058");
          }
        }
      }
    }
  }
  .step-buttons {
    float: right;
  }
}

@media screen and (max-width: 460px) {
  .question {
    margin: 40px 0;
    .step-buttons button {
      margin: 4px;
      min-width: 60px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .question .current {
    top: 0;
  }
}
</style>