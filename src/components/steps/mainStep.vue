<template>
  <h1>main step</h1>
  <div class="stepBox">
    <stepBoxVue
      v-for="i in stpes"
      :key="i.id"
      :isActive="i.isActive"
      @click="stepClickhandler(i.id)"
    />
  </div>
</template>

<script>
import stepBoxVue from "./stepBox.vue";
export default {
  components: {
    stepBoxVue,
  },
  data() {
    return {
      stpes: [
        { id: 1, isActive: false },
        { id: 2, isActive: false },
        { id: 3, isActive: false },
        { id: 4, isActive: false },
        { id: 5, isActive: false },
        { id: 6, isActive: false },
      ],
      currentActiceStep: null,
    };
  },
  methods: {
    stepClickhandler(id) {
      this.currentActiceStep = id;
      //   debugger;
      for (let i = 0; i < this.stpes.length; i++) {
        // debugger;
        if (id >= this.stpes[i].id) this.stpes[i].isActive = true;
        else this.stpes[i].isActive = false;
      }
      //   this.stpes[id].isActive = !this.stpes[id].isActive;
    },
  },
};
</script>

<style>
.stepBox {
  /* position: relative; */
  display: flex;
}
</style>
