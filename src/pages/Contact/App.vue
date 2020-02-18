<template>
  <div>
    <Navbar></Navbar>
    <PageHeader pageTitle="Επικοινωνία"></PageHeader>
    <div class="contact-wrapper">
      <Accordion :qnas="accordions"></Accordion>
      <div class="contact-form">
        <h2 class="section-title">{{contactSectionTitle}}</h2>
        <form v-on:submit="checkForm">
          <transition name="fade">
            <div v-if="errors.length">
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </div>
          </transition>
          <div class="fields">
            <div class="personal-info">
              <input id="name" v-model="name" type="text" name="name" placeholder="Όνομα" />
              <input id="email" v-model="email" type="email" name="email" placeholder="Email" />
            </div>
            <div class="options">
              <select v-model="selected">
                <option disabled value="disabledoption">Επιλέξτε θέμα</option>
                <option>Ερωτήσεις ή απορίες</option>
                <option>Παράπονα</option>
                <option>Συνεισφορά</option>
              </select>
            </div>
            <textarea id="message" v-model="message" name="message" rows="6" placeholder="Μήνυμα"></textarea>
          </div>
          <label for="acceptTerms">
            <input type="checkbox" name="terms" id="acceptTerms" v-model="termsAccepted" />
            Κατανοώ και αποδέχομαι την
            <a
              href="privacy"
              target="_blank"
              class="underline"
            >Πολιτική απορρήτου</a>
          </label>
          <button v-on:click.prevent="checkForm" type="submit" class="btn-s btn-green-s">Υποβολή</button>
          <transition name="fade">
            <p class="submitted" v-if="submitted">{{submittedText}}</p>
          </transition>
        </form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
export default {
  name: "Contact",
  metaInfo: {
    title: "Επικοινωνία",
    titleTemplate: "%s | Μαθαίνω γερμανικά",
    meta: [
      {
        name: "keywords",
        content: "επικοινωνία, φόρμα, επικοινωνίας, συχνές, ερωτήσεις"
      },
      {
        name: "description",
        content: "Επικοινώνησε μαζί για όποιοδήποτε θέμα."
      }
    ]
  },
  components: {
    Navbar,
    PageHeader,
    Accordion,
    Footer
  },
  data() {
    return {
      contactSectionTitle: "Φόρμα επικοινωνίας",
      errors: [],
      name: null,
      email: null,
      selected: "disabledoption",
      message: null,
      termsAccepted: false,
      submitted: false,
      submittedText:
        "Ευχαριστούμε πολύ για την επικοινωνία. Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατόν.",
      accordions: [
        {
          question: "Έχω ερωτήσεις - απορίες τι να κάνω;",
          answer:
            "Συμπληρώστε τη φόρμα που βρίσκεται στη σελίδα Επικοινωνία και θα λάβουμε το μήνυμα σας."
        },
        {
          question: "Προσφέρει το ILD κάποια πιστοποίηση;",
          answer:
            "Όχι. Το ILD έχει μοναδικό στόχο την διευκόλυνση εκμάθησης της γερμανικής γλώσσας."
        },
        {
          question: "Μπορώ να χρησιμοποιήσω το ILD στο κινητό μου;",
          answer: "Ναι, είναι σχεδιασμένο και για κινητά."
        }
      ]
    };
  },
  methods: {
    checkForm: function() {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Παρακαλώ συμπληρώστε το όνομα σας.");
      } else if (this.name.length < 3 || !this.validName(this.name)) {
        this.errors.push("Παρακαλώ εισάγετε το πραγματικό σας όνομα.");
      }

      if (!this.email) {
        this.errors.push("Παρακαλώ συμπληρώστε την ηλεκτρονική σας διεύθυνση.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push(
          "Η ηλεκτρονική διεύθυνση που έχετε εισάγει δεν είναι έγκυρη."
        );
      }

      if (!this.message) {
        this.errors.push("Δεν έχετε γράψει κάποιο μήνυμα.");
      } else if (this.message.length < 20 || this.message.length > 500) {
        this.errors.push(
          "Το μήνυμα σας θα πρέπει να περιέχει από 20 εώς και 500 χαρακτήρες."
        );
      }
      if (!this.termsAccepted) {
        this.errors.push("Πρέπει να αποδεχτείτε τους όρους.");
      }

      if (!this.errors.length) {
        this.$http.post(process.env.VUE_APP_REALLY, {
          name: this.name,
          email: this.email,
          subject: this.selected,
          message: this.message.trim()
        });
        this.name = this.email = this.message = "";
        this.selected = "disabledoption";
        this.submitted = true;
      }
    },
    validEmail: function(email) {
      var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
    validName: function(name) {
      var regex = /^([A-za-z]|[Α-ωα-ω]|[Ά-ωά-ω])/;
      return regex.test(name);
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/setup/variables.scss";
@import "../../assets/styles/setup/config.scss";
@import "../../assets/styles/setup/mixins.scss";
@import "../../assets/styles/views/contact.scss";
</style>
