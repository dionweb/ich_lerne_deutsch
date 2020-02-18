<template>
  <div class="output title">{{ translatedText }}</div>
</template>

<script>
export default {
  name: "TextOutput",
  props: ["translatedText"],
  data() {
    return {
      textToTranslate: ""
    };
  }
};
</script>

<style lang="scss">
@import "../assets/styles/setup/variables.scss";
@import "../assets/styles/components/textoutput.scss";
</style>
