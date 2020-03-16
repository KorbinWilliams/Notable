<template>
  <div class="postits container-fluid">
    <div class="row">
      <div class="col-12 top-bar">
        <h1>Post-Its</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-3 offset-1">
        <!-- v-for stickynote change to make into col-3
        with class: "col-3"-->
        <StickyNote />
      </div>
      <div class="col-3 add-note ml-4">
        <div class="form-group">
          <label>Name</label>
          <input :v-bind="this.postIt.name" type="text" class="form-control" placeholder="Title" />
          <label>Text</label>
          <input
            :v-bind="this.postIt.description"
            type="text"
            class="form-control"
            placeholder="Title"
          />
        </div>
        <button>addNote</button>
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
  data() {
    return {
      postIt: {
        name: "",
        description: "",
        authorId: this.$store.state.user._id
      }
    };
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
.add-note {
  margin: 5vh 0 5vh 0;
  background-color: yellow;
  border: 2px solid black;
  height: 20%;
  width: 20%;
}
</style>