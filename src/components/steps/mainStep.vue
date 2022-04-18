<template>
  <h1>main step</h1>
  <div class="stepBox">
    <stepBoxVue v-for="i in 5" :key="i" :isActive="true" />
  </div>
</template>

<script>
import stepBoxVue from "./stepBox.vue";
export default {
  components: {
    stepBoxVue,
  },
};
</script>

<style>
.stepBox {
  /* position: relative; */
  display: flex;
}
</style>
