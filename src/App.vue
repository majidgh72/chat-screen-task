<template>
  <div class="Screen">
    <Widget />
  </div>
</template>

<script>
import Widget from '@/components/Widget/index.vue';

export default {
  components: {
    Widget
  }
}
</script>

<style>
@import "@/assets/scss/app.scss";

.Screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>