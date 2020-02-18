<template>
  <footer>
    <p>
      Copyrights 2020 ©. Created with
      <i class="fas fa-heart green-icon"></i> by
      <a href="https://www.dionweb.me" target="_blank">
        <span class="underline">DionWeb</span>
      </a>
    </p>
  </footer>
</template>

</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  background: #223441;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 1.1rem;
    i {
      padding: 0 2px;
      color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #0eb29a;
    }
    a {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #0eb29a;
        bottom: -2px;
        left: 0;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 400ms;
      }

      &:hover:after {
        transform-origin: bottom left;
        transform: scaleX(1);
        box-sizing: border-box;
      }

      &:hover {
        color: #0eb29a;
      }
    }
  }
}
@media screen and (max-width: 460px) {
  footer p {
    font-size: 1rem;
  }
}
</style>