<template>
  <div class="stickynote row">
    <div class="col-12 bg-ylw">
      <div>
        <select @click="setActiveStickyNote" text="Dropdown Button">
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
    setActiveStickyNote() {
      console.log(this.Note);
      // let thisNote = {
      //   _id: this.Note._id,
      //   name: this.Note.name,
      //   description = this.Note.description,
      //   authorId = this.Note.authorId,
      //   createdAt = this.Note.createdAt,
      //   updatedAt = this.Note.updatedAt,
      //   _v: this.Note._v,
      //   id: this.Note.id
      // };
      this.$store.dispatch("setActive", {
        data: this.Note,
        commitAddress: "activeStickyNote",
        commit: "setItem"
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
