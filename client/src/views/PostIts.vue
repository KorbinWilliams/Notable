<template>
  <div class="postits container-fluid">
    <div class="row">
      <div class="col-12 top-bar">
        <h1>Post-Its</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <!-- v-for stickynote change to make into col-3
        with class: "col-3"-->
        <StickyNote />
      </div>
    </div>
  </div>
</template>

<script>
import StickyNote from "@/components/StickyNote.vue";

export default {
  name: "PostIts",
  components: {
    StickyNote
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

<style>
.top-bar {
  background-color: rgb(255, 238, 0);
  border: 3px solid black;
}
</style>