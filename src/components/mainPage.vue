<template>
  <h1>صفحه اول</h1>
  <button @click="getData()">دریافت اطلاعات</button>
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
};
</script>

<style></style>
