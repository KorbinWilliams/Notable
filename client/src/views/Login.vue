<template>
  <div class="login">
    <form v-if="loginForm" @submit.prevent="loginUser">
      <input type="email" v-model="creds.email" placeholder="email" />
      <input type="password" v-model="creds.password" placeholder="password" />
      <button class="btn btn-success" type="submit">Login</button>
    </form>
    <form v-else @submit.prevent="register">
      <input type="text" v-model="newUser.name" placeholder="name" />
      <input type="email" v-model="newUser.email" placeholder="email" />
      <input type="password" v-model="newUser.password" placeholder="password" />
      <button class="btn btn-warning" type="submit">Create Account</button>
    </form>
    <div class="action" @click="loginForm = !loginForm">
      <p v-if="loginForm">No account? Click here to Register</p>
      <p v-else>Already have an account? Click here to Login</p>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: ""
      },
      newCalendar: {
        events: []
      }
    };
  },
  beforeCreate() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "Dashboard" });
      this.$store.dispatch("setActive", {
        data: true,
        commitAddress: "isLoggedIn",
        commit: "setItem"
      });
    }
  },
  methods: {
    // NOTE Example dispatch
    //     setActive({ commit }, payload) {
    //   commit(payload.commit, {
    //     data: payload.data,
    //     address: payload.commitAddress
    //   })
    // }
    register() {
      // TODO Find way to get current date
      // NOTE registers user, creates new calendar, then changes view to dashboard
      this.$store
        .dispatch("register", this.newUser)
        .then(res =>
          this.$store.dispatch("setActive", {
            data: true,
            commitAddress: "isLoggedIn",
            commit: "setItem"
          })
        )
        .then(res =>
          this.$store.dispatch("create", {
            data: this.newCalendar,
            commit: "setItem",
            commitAddress: "calendar",
            address: "calendar"
          })
        )
        .then(res => this.$router.push({ name: "Dashboard" }));
    },
    loginUser() {
      this.$store.dispatch("login", this.creds).then(res => {
        if (this.$store.state.user._id) {
          this.$router.push({ name: "Dashboard" });
          this.$store.dispatch("setActive", {
            data: true,
            commitAddress: "isLoggedIn",
            commit: "setItem"
          });
        }
      });
    }
  }
};
</script>

<style>
.action {
  cursor: pointer;
}
</style>