<template>
  <div>
    <nav>
      <div class="navbar">
        <div class="title">
          <a href="index">{{ navbarTitle }}</a>
        </div>
        <div class="links">
          <a
            v-for="(item, index) in navbarItems"
            :key="index"
            v-bind:href="item.path"
            v-bind:class="item.class"
            v-bind:target="item.target"
          >{{ item.name }}</a>
        </div>
        <div class="open-sidebar">
          <i v-on:click="Nav" class="fas fa-bars sidebar-open"></i>
        </div>
      </div>
      <div class="sidebar">
        <a
          v-for="(item, index) in navbarItems"
          :key="index"
          v-bind:href="item.path"
          v-bind:class="item.sidebarClass"
          v-bind:target="item.target"
        >{{ item.name }}</a>
        <button v-on:click="Nav" class="btn">{{ close }}</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarTitle: "Ich lerne Deutsch",
      close: "Κλεισιμο",
      navbarItems: [
        {
          name: "Αρχικη",
          path: "index",
          class: "underline"
        },
        {
          name: "Λεξιλογιο",
          path: "dictionary",
          class: "underline"
        },
        {
          name: "Μεταφραστης",
          path: "translator",
          class: "underline"
        },
        {
          name: "Επικοινωνια",
          path: "contact",
          class: "underline"
        },
        {
          name: "Ebook",
          path: "ebook/",
          class: "ebook underline",
          sidebarClass: "ebook",
          target: "_blank"
        }
      ]
    };
  },
  methods: {
    Nav() {
      let sidebar = document.querySelector(".sidebar");

      if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
      } else {
        sidebar.classList.add("open");
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/setup/variables.scss";
@import "../assets/styles/setup/mixins.scss";
@import "../assets/styles/components/navbar.scss";
</style>
