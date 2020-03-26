<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <div class="col">
        <p>Welcome to your dashboard</p>
      </div>
    </div>
    <!-- Quote of day, weather, customizeable background save as userSettings then fetch via user (don't trust the front end) -->
    <!-- component bootstrap structure will be row as top level then col NO CONTAINERS -->
    <!-- maybe change calendar blocks save events, then filter events and place them into premade calendar. -->
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
