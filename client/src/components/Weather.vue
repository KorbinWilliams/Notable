<template>
  <div class="weather row">
    <!-- external weather api OpenWeather
    API Key: c108e787517dc67e1b16cd77c033c428
    docs: https://openweathermap.org/forecast5-->
  </div>
</template>

<script>
export default {
  name: "Weather",
  data() {
    return {
      weatherLocation: {
        city: "",
        state: ""
      }
    };
  }
};
</script>

<style>
</style>