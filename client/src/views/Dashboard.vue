<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <div class="row dash-block">
          <div class="col-12"></div>
        </div>
        <div class="row dash-block">
          <div class="col-12"></div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
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
  },
  mounted() {
    this.$store.dispatch("get", {
      address: "stickyNotes",
      commit: "setItem",
      commitAddress: "stickyNotes"
    });
  }
};
</script>

<style scoped>
.dash-block {
  height: 40vh;
  background-color: rgb(35, 131, 134);
  margin-top: 5vh;
}
</style>