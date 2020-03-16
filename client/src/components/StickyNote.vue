<template>
  <div class="stickynote row">
    <div class="col-12 bg-ylw">
      <p>PostIt</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StickyNote",
  props: ["Note"],
  methods: {
    createStickyNote() {
      this.$store.dispatch("create", {
        data: this.postIt,
        address: "stickyNotes",
        commitAddress: "stickyNotes",
        commit: "addItem"
      });
    },
    deleteStickyNote() {
      this.$store.dispatch("delete", {
        data: this.$store.state.activeStickyNote,
        address: "stickyNotes",
        commitAddress: "stickyNotes",
        commit: "removeItem"
      });
    },
    setActiveNote() {
      this.$store.state.dispatch("setActive", {
        data: "",
        // data?
        commitAddress: "activeStickyNote",
        commit: "setItem"
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
