<template>
  <h1>نوع را انتخاب کنید</h1>
  <select
    name=""
    id=""
    v-model="selectedCombo"
    @change="selectItemHandler(selectedCombo)"
  >
    <option :value="item.id" v-for="item in steps" :key="item.id">
      {{ item.title }}
    </option>
  </select>
  <div class="stepBox" v-if="selectedCombo">
    <stepBoxVue
      v-for="(i, index) in selectedItem.stages"
      :key="i"
      :isActive="index <= selectedItem.active"
      :label="i"
      :stepNumber="index"
      :totalStep="selectedItem.stages.length"
      @click="stepClickhandler(index, selectedItem.id)"
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
      selectedCombo: null,
    };
  },
  computed: {
    steps: {
      get() {
        return this.$store.getters.steps;
      },
      set(val) {
        this.$store.dispatch("updateAcivestep", val);
      },
    },
    selectedItem() {
      if (this.selectedCombo)
        return this.$store.getters.steps.find(
          (i) => i.id === this.selectedCombo
        );
      else return null;
    },
  },

  methods: {
    selectItemHandler(id) {
      this.selectedItem = JSON.parse(JSON.stringify(this.steps)).find(
        (i) => i.id === id
      );
    },
    stepClickhandler(step, selectedId) {
      this.$store.dispatch("updateAcivestep", {
        activeStep: step,
        selectedId,
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },
  mounted() {
    if (this.steps.length === 0) this.$router.push("/");
  },
};
</script>

<style>
.stepBox {
  border: 1px solid gray;
  padding: 15px;
  margin: 10px;
  display: flex;
}
</style>
