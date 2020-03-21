<template>
  <div id="app">
    <div class="nav container-fluid justify-content-center">
      <router-link v-show="this.$store.state.bool1 == false" to="/">Login</router-link>
      <router-link v-show="this.$store.state.bool1 == true" to="/Calendar">Calendar</router-link>
      <p>--</p>
      <router-link v-show="this.$store.state.bool1 == true" to="/Postits">PostIts</router-link>
      <p>--</p>
      <router-link v-show="this.$store.state.bool1 == true" to="/Dashboard">Dashboard</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    debugger;
    if (!this.$store.state.user._id) {
      this.$store.dispatch("setActive", {
        data: true,
        commitAddress: "bool1",
        commit: "setItem"
      });
      this.$router.push({ name: "Dashboard" });
    }
  }
  // TODO think of a better way to flip bool on page open -include in login function?
  // TODO Change bool1 name in store and nav
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>