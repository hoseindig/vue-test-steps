<template>
  <nav>
    <router-link active-class="active" class="link_" to="/"
      >صفحه اول</router-link
    >
    <router-link
      active-class="active"
      class="link_"
      to="/step"
      v-if="steps.length > 0"
    >
      بررسی و تنظیم مراحل</router-link
    >
  </nav>
  <router-view />
</template>

<script>
export default {
  methods: {},
  mounted() {},
  computed: {
    steps: {
      get() {
        return this.$store.getters.steps;
      },
      set(val) {
        this.$store.dispatch("updateAcivestep", val);
      },
    },
  },
 

};
</script>
<style>
@font-face {
  font-family: "BYekan";
  src: url("~@/assets/fonts/BYekan+.ttf");
}
* {
  font-family: "BYekan";
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style scoped>
.link_ {
  text-decoration: none;
}
.active {
  background-color: blue;
  color: #ffffff !important;
  border-radius: 15px;
  padding: 10px;
  margin: 0 15px;
}
</style>
