<template>
  <div class="container">
    <news-app></news-app>
  </div>
</template>

<script>
import NewsApp from "./components/NewsApp.vue";
export default {
  name: "App",
  components: { NewsApp },
};
</script>

<style>
.container {
  display: flex;
  height: auto;
}
</style>
