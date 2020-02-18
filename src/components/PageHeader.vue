<template>
  <div class="page-header">
    <div class="page-info">
      <a href="index">
        <i class="fab fa-houzz green-icon"></i>
      </a>
      <h3 class="underline">{{ pageTitle }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    pageTitle: String
  }
};
</script>

<style lang="scss">
@import "../assets/styles/setup/variables.scss";
@import "../assets/styles/components/pageheader.scss";
</style>
