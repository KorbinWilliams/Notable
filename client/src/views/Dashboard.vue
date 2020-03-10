<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <div class="col">
        <p>Welcome to your dashboard</p>
      </div>
    </div>
    <StickyNote />
    <!-- component bootstrap structure will be row as top level then col NO CONTAINERS -->
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
