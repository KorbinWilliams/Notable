<template>
  <div class="stickynote row">
    <div class="col-12 bg-ylw">
      <h3>{{Note.name}}</h3>
      <p>{{Note.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StickyNote",
  props: ["Note"],
  methods: {
    deleteStickyNote() {
      this.$store.dispatch("delete", {
        data: this.$store.state.activeStickyNote,
        address: "stickyNotes",
        commitAddress: "stickyNotes",
        commit: "removeItem"
      });
    }
  }
};
</script>

<style scoped>
.bg-ylw {
  margin: 5vh 0 5vh 0;
  background-color: yellow;
  border: 2px solid black;
  margin-left: 2vw;
}
</style>
