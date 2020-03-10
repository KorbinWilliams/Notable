<template>
  <div class="dashboard">
    <StickyNote />
    <p>Welcome to your dashboard</p>
  </div>
</template>

<script>
// @ is an alias to /src
import StickyNote from "@/components/StickyNote.vue";
import Weather from "../components/Weather.vue";

export default {
  name: "Dashboard",
  components: {
    StickyNote,
    Weather
  }
};
</script>
