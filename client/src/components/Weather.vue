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
    this.getWeather();
  },
  methods: {
    getWeather() {
      this.getWeatherInfo().then(res => this.weatherInfoCheck());
    },

    // NOTE gets weather info
    getWeatherInfo() {
      this.$store.dispatch("get", {
        address: "locationInfo",
        commitAddress: "locationInfo",
        commit: "setItem"
      });
    },

    // NOTE checks to see if there is location info saved. if there is, then it gets weather info based on that information.
    weatherInfoCheck() {
      if (this.$store.state.locationInfo.city.length > 3) {
        this.$store.dispatch("get", {
          weather: {
            city: this.$store.state.locationInfo.city,
            state: this.$store.state.locationInfo.state
          },
          commit: "setItem",
          commitAddress: "weatherInfo"
        });
      }
    },

    // NOTE after submitting weather info checks to see if weather info is saved. If weather info is already there it deletes it. Then creates a new one with the provided information.
    saveLocationInfo() {
      if (this.weather.city.length <= 4 || this.weather.state.length <= 4) {
        this.$store.dispatch("create", {
          data: {
            city: this.weather.city,
            state: this.weather.state
          },
          commit: "setItem",
          address: "locationInfo",
          commitAddress: "locationInfo"
        });
      } else {
        this.$store
          .dispatch("delete", {
            data: this.$store.state.locationInfo,
            address: "locationInfo",
            commit: "resetItem",
            commitAddress: "locationInfo"
          })
          .then(res =>
            this.$store.dispatch("create", {
              data: {
                city: this.weather.city,
                state: this.weather.state
              },
              commit: "setItem",
              address: "locationInfo",
              commitAddress: "locationInfo"
            })
          );
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