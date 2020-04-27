<template>
  <div class="weather row">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <h3>Weather</h3>
        </div>
      </div>
      <div class="row locationInput">
        <div class="col-6">
          <div class="form-group">
            <label>input your city</label>
            <input
              v-model="weather.city"
              type="text"
              name="cityInput"
              class="form-control"
              placeholder="city"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label>input your state</label>
            <input
              v-model="weather.state"
              type="text"
              name="stateInput"
              class="form-control"
              placeholder="state"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data() {
    return {
      weather: {
        city: "",
        state: ""
      }
    };
  },
  mounted() {
    //NOTE make this happen only when city and state are saved
    this.getWeather();
  },
  methods: {
    getWeather() {
      this.$store.dispatch("get", {
        weather: {
          city: this.weather.city,
          state: this.weather.state
        },
        commit: "setItem",
        commitAddress: "weatherInfo"
      });
    }
  }
};
</script>

<style>
</style>