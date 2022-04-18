<template>
  <h1>main step</h1>
  <div class="stepBox">
    <stepBoxVue
      v-for="i in stpes"
      :key="i.id"
      :isActive="i.isActive"
      :label="i.label"
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
        { id: 1, label: "step 1", isActive: false },
        { id: 2, label: "step 2", isActive: false },
        { id: 3, label: "step 3", isActive: false },
        { id: 4, label: "step 4", isActive: false },
        { id: 5, label: "step 5", isActive: false },
        { id: 6, label: "step 6", isActive: false },
      ],
      currentActiceStep: null,
    };
  },
  methods: {
    stepClickhandler(id) {
      this.currentActiceStep = id;
      for (let i = 0; i < this.stpes.length; i++) {
        if (id >= this.stpes[i].id) this.stpes[i].isActive = true;
        else this.stpes[i].isActive = false;
      }
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
