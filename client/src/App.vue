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
      <button type="button" v-show="this.$store.state.isLoggedIn == true" @click="logout">Logout</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // TODO Fix this
    console.log(this.$store.user._id);
    if (this.$store.state.user._id.length > 3) {
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
      // this.$store.dispatch("setActive", {
      //   data: false,
      //   commitAddress: "isLoggedIn",
      //   commit: "setItem"
      // });
      this.$store.dispatch("logout");
    }
  }
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

body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #404740;
}
</style>