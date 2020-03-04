<template>
  <div class="dashboard">
    <StickyNote msg="Welcome to Your Dashboard" />
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
