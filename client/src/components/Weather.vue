<template>
  <div class="weather row">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <h3>Weather</h3>
        </div>
      </div>
      <div class="row locationInput form-group">
        <div class="col-6">
          <div class>
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
          <div class>
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
        <div class="col-4 offset-4 pt-3 d-flex weather-btn">
          <button @click="saveLocationInfo">Submit</button>
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
    },
    saveLocationInfo() {
      if (this.weather.city.length > 4 || this.weather.state.length > 4) {
        this.$store.dispatch("", {});
      }
    }
  }
};
</script>

<style scoped>
.weather-btn {
  flex: inherit;
  justify-content: center;
}
</style>