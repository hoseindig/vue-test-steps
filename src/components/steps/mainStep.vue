<template>
  <h1>main step</h1>
  <!-- <p>{{ selectedCombo }}</p> -->
  <select name="" id="" v-model="selectedCombo">
    <option :value="item.id" v-for="item in stpes" :key="item.id">
      {{ item.title }}
    </option>
  </select>
  <div class="stepBox" v-if="selectedCombo">
    <stepBoxVue
      v-for="(i, index) in stpes[selectedCombo].stages"
      :key="i"
      :isActive="index <= stpes[selectedCombo].active"
      :label="i"
      @click="stepClickhandler(index, selectedCombo)"
    />
  </div>
</template>

<script>
import stepBoxVue from "./stepBox.vue";
// import { mapGetters } from "vuex";
export default {
  components: {
    stepBoxVue,
  },
  data() {
    return {
      selectedCombo: null,
    };
  },
  computed: {
    stpes: {
      get() {
        return this.$store.getters.stpes;
      },
      set(val) {
        this.$store.dispatch("updateAcivestep", val);
      },
    },
  },
  methods: {
    stepClickhandler(step, selected) {
      this.$store.dispatch("updateAcivestep", {
        activeStep: step,
        selected: selected,
      });
    },
  },
};
</script>

<style>
.stepBox {
  /* position: relative; */
  border: 1px solid gray;
  padding: 15px;
  margin: 10px;
  display: flex;
}
</style>
