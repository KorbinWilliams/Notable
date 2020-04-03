<template>
  <div id="app">
    <div class="nav container-fluid justify-content-center">
      <!-- TODO Remake the nav bar -->
      <router-link v-show="this.$store.state.isLoggedIn == false" to="/">Login</router-link>
      <router-link v-show="this.$store.state.isLoggedIn == true" to="/Calendar">Calendar</router-link>
      <p>--</p>
      <router-link v-show="this.$store.state.isLoggedIn == true" to="/Postits">PostIts</router-link>
      <p>--</p>
      <router-link v-show="this.$store.state.isLoggedIn == true" to="/Dashboard">Dashboard</router-link>
      <p>--</p>
      <router-link v-show="this.$store.state.isLoggedIn == true" @click="logout" to="/login">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    if (this.$store.state.user._id !== null) {
      this.$store.dispatch("setActive", {
        data: true,
        commitAddress: "isLoggedIn",
        commit: "setItem"
      });
      this.$router.push({ name: "Dashboard" });
    }
  },
  methods: {
    logout() {
      debugger;
      this.$store.dispatch("logout");
    }
  }
  // TODO Make a logout button
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

body {
  /* TODO figure out how to do this in vue (in each component?) */
  height: 100%;
  width: 100%;
}
</style>