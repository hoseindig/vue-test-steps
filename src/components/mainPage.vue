<template>
  <div>
    <div v-if="stpes.length === 0">
      <h1 class="alert">لطفا برای ادامه برروی دریافت اطلاعات کلیک کنید</h1>
      <button @click="getData()">دریافت اطلاعات</button>
    </div>
    <div class="alert" v-else>
      <h1>اطلاعات با موفقیت دریافت شد لطفا وارد تب بررسی بشوید</h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getData() {
      this.axios.get("https://hire.camp/api/job/list").then((response) => {
        debugger;
        if (response && response.data && response.data.length > 0)
          this.$store.dispatch("setStepsData", response.data);
        else alert("data error");
        console.log("getData", response.data);
      });
    },
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
};
</script>

<style lang="scss">
button {
  background-color: green;
  color: #ffffff;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  transition: 0.2s;
  transform: scale(0.95);
  &:hover {
    cursor: pointer;
    transform: scale(0.99);
    border-radius: 15px;
  }
}

.alert {
  background-color: aqua;
  width: 90%;
  margin: 20px 5%;
  padding: 15px;
  color: black;
  border-radius: 15px;
}
</style>
