<template>
  <div id="app">
    <div class="nav container-fluid justify-content-center">
      <router-link to="/">Login</router-link>
      <router-link v-show="navCheck.navBool == true" to="/Calendar">| Calendar|</router-link>
      <router-link v-show="navCheck.navBool == true" to="/Postits">PostIts|</router-link>
      <router-link v-show="navCheck.navBool == true" to="/Dashboard">Dashboard|</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    if (this.$store.state.bool1 == true) {
      // this.$router.push({ name: "Dashboard" });
      this.navCheck.navBool = true;
    }
  },
  data() {
    return {
      navCheck: {
        navBool: false
        // if (this.$store.state.bool1 == false) {
        // this.navBool = true
        // }
        // need this to run everytime
      }
    };
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
</style>