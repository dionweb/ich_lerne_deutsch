<template>
  <div class="input">
    <form v-on:submit="formSubmit">
      <div class="top">
        <div class="languages">
          <select class="btn-s btn-white-s" v-model="language">
            <option value="el">Ελληνικά</option>
            <option value="de">Γερμανικά</option>
          </select>
        </div>
        <button class="btn-s btn-green-s" type="submit">Μετάφραση</button>
      </div>
      <textarea type="text" v-model="textToTranslate" placeholder="Πληκτρολογήστε κείμενο"></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  data() {
    return {
      textToTranslate: "",
      language: ""
    };
  },
  created() {
    this.language = "de";
  },
  methods: {
    formSubmit(e) {
      this.$emit("formSubmit", this.textToTranslate, this.language);
      e.preventDefault();
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/setup/variables.scss";
@import "../assets/styles/setup/mixins.scss";
@import "../assets/styles/components/textinput.scss";
</style>
