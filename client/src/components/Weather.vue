<template>
  <div class="weather row">
    <div class="col-12">
      <div class="row weather-bar">
        <div class="col-4 offset-4">
          <h2>Weather</h2>
        </div>
        <!-- Options -->
        <div v-if="this.inputLocation == false" class="col-2">
          <button class="btn" @click="changeLocation">location</button>
        </div>
        <div v-if="this.inputLocation == true" class="col-2">
          <button class="btn" @click="changeLocation">hide</button>
        </div>
        <div class="col-2">
          <button class="btn" @click="changeDegreeMeasurement">temp</button>
        </div>
      </div>
      <!-- Location Form -->
      <div v-if="this.inputLocation == true" class="row locationInput form-group">
        <div class="col-6">
          <div>
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
          <div>
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
          <button @click="createLocationInfo">Save</button>
        </div>
      </div>
      <!-- Weather info -->
      <div class="row">
        <div v-if="inputLocation == false" class="col-12">
          <!-- NOTE Source of location change bug. No idea how to fix without deleting this -->
          <h3>{{LocationInfo.city}}, {{LocationInfo.state}}</h3>
        </div>
      </div>
      <div v-if="this.inputLocation == false" class="row weather-information">
        <div class="col-6">
          <img
            class="weather-img"
            src="https://spaceplace.nasa.gov/templates/featured/sun/sunburn300.png"
            alt="sunny,rainy,cloudy"
          />
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-12 weather-info">
              <p>Temp: {{TempInfo}} {{degrees}}</p>
            </div>
            <div class="col-12 weather-info">
              <p>{{WeatherInfo[day].weather[0].description}}</p>
            </div>
            <div class="col-12 weather-info">
              <p>Humidity: {{WeatherInfo[day].main.humidity}}%</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Day selector -->
      <div v-if="this.inputLocation == false" class="row day-selector">
        <div class="col-4">
          <button>---</button>
        </div>
        <div class="col-4">
          <button>---</button>
        </div>
        <div class="col-4">
          <button>---</button>
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
      },
      inputLocation: false,
      degrees: "Kelvin",
      day: 0
    };
  },
  computed: {
    WeatherInfo() {
      if (this.$store.state.weatherInfo.list) {
        return this.$store.state.weatherInfo.list.slice(0, 4);
      }
    },
    LocationInfo() {
      return this.$store.state.locationInfo[0];
    },
    TempInfo() {
      return this.$store.state.tempInfo;
    }
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      this.getWeatherInfo();
      setTimeout(this.weatherInfoCheck(), 2000);
    },

    // NOTE gets weather info
    getWeatherInfo() {
      this.$store.dispatch("get", {
        address: "locationInfo",
        commitAddress: "locationInfo",
        commit: "setItem"
      });
    },

    setTempInfo() {
      this.$store.dispatch("setActive", {
        commit: "setItem",
        commitAddress: "tempInfo",
        data: this.$store.state.weatherInfo.list[0].main.temp
      });
    },

    // NOTE checks to see if there is location info saved. if there is, then it gets weather info based on that information.
    weatherInfoCheck() {
      if (this.$store.state.locationInfo[0].city.length > 3) {
        this.$store.dispatch("get", {
          weather: {
            city: this.$store.state.locationInfo[0].city,
            state: this.$store.state.locationInfo[0].state
          },
          commit: "setItem",
          commitAddress: "weatherInfo"
        });
        setTimeout(() => {
          this.setTempInfo();
        }, 500);
      }
    },

    // NOTE hides/shows location input form
    changeLocation() {
      console.log(this.inputLocation);
      if (this.inputLocation == true) {
        this.inputLocation = false;
      } else {
        this.inputLocation = true;
      }
    },

    // NOTE changes base measurement of temperature
    changeDegreeMeasurement() {
      if (this.degrees == "Kelvin") {
        this.degrees = "Fahrenheit";
        this.convertTemperature("F");
      } else if (this.degrees == "Fahrenheit") {
        this.degrees = "Celsius";
        this.convertTemperature("C");
      } else if (this.degrees == "Celsius") {
        this.degrees = "Kelvin";
        this.convertTemperature();
      }
    },

    // NOTE Converts base temp then overwrites it in the store
    convertTemperature(temp) {
      let curTemp = this.$store.state.tempInfo;
      if (temp === "F") {
        let preFormatTemp = (curTemp * 9) / 5 - 459.67;
        let newTemp = preFormatTemp.toFixed(0);
        this.saveTemp(newTemp);
      } else if (temp === "C") {
        let x = curTemp - 32;
        let preFormatTemp = x * 0.555555555;
        let newTemp = preFormatTemp.toFixed(0);
        this.saveTemp(newTemp);
      } else {
        let preFormatTemp = Number(curTemp) + 273.15;
        let newTemp = preFormatTemp.toFixed(0);
        this.saveTemp(newTemp);
      }
    },

    saveTemp(newTemp) {
      this.$store.dispatch("setActive", {
        data: newTemp,
        commit: "setItem",
        commitAddress: "tempInfo"
      });
    },

    createLocationInfo() {
      this.$store.dispatch("create", {
        data: {
          city: this.weather.city,
          state: this.weather.state
        },
        commit: "setItem",
        address: "locationInfo",
        commitAddress: "locationInfo"
      });
    },

    deleteLocationInfo() {
      this.$store.dispatch("delete", {
        data: this.$store.state.locationInfo[0],
        address: "locationInfo",
        commit: "removeItem",
        commitAddress: "locationInfo"
      });
    },

    // NOTE after submitting weather info checks to see if weather info is saved. If weather info is already there it deletes it. Then creates a new one with the provided information.
    saveLocationInfo() {
      debugger;

      this.$store.dispatch(
        "create",
        {
          data: {
            city: this.weather.city,
            state: this.weather.state
          },
          commit: "setItem",
          address: "locationInfo",
          commitAddress: "locationInfo"
        },
        console.log(this.weather.city)
      );
      // .then(res => this.weatherInfoCheck());
      setTimeout(this.weatherInfoCheck(), 2000);
      // }
    }
  }
};
</script>

<style scoped>
.weather-btn {
  flex: inherit;
  justify-content: center;
}
.weather-img {
  height: 10rem;
  width: 10rem;
}
.weather-bar {
  border-bottom: 2px solid black;
}
.weather-information {
  padding-top: 1vh;
}
.weather-info {
  height: 5vh;
}
.day-selector {
  padding-top: 3vh;
}
</style>