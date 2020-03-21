<template>
  <div class="stickynote row">
    <div class="col-12 bg-ylw">
      <div>
        <select text="Dropdown Button">
          <option @change="deleteStickyNote">Delete</option>
          <option @change="editStickyNote">Edit</option>
        </select>
        <!-- @change will only work on the select tag itself need to find another way to do the dropdown -->
      </div>
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
    setActiveStickyNote(Note) {
      this.$store.state.dispatch("setActive", {
        data: Note,
        commitAddress: "activeStickyNote"
      });
    },
    deleteStickyNote() {
      debugger;
      this.$store.dispatch("delete", {
        data: this.$store.state.activeStickyNote,
        address: "stickyNotes",
        commitAddress: "stickyNotes",
        commit: "removeItem"
      });
    },
    editStickyNote() {
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
.trash-img {
  height: 2rem;
}
</style>
