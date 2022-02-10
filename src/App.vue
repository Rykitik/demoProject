<template lang ="pug">
#app.h-100
  Header
  router-view
  Footer
</template>

<script>
import Header from "@/components/Header.vue";
import MainPage from "@/views/MainPage.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    MainPage,
    Footer,
    Header,
  },
};
</script>


