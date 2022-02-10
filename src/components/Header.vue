<template>
  <header>
    <!-- Fixed navbar -->
    <nav
      class="navbar navbar-expand-md navbar-dark fixed-top bg-dark d-flex justify-content-between"
    >
      <a class="navbar-brand" @click.prevent="goMainPage" href="">Design.pro</a>
      <a class="btn btn-outline-primary" href="" @click.prevent="login"
        >Войти</a
      >
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
  methods: {
    login() {
      if (this.$route.name !== "Login") {
        this.$router.push({ name: "Login" });
      }
    },
    goMainPage() {
      if (this.$route.name !== "mainPage") {
        this.$router.push("/");
      }
    },
  },
};
</script>