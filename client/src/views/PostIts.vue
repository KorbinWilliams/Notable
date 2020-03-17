<template>
  <div class="postits container-fluid">
    <div class="row">
      <div class="col-12 top-bar">
        <h1>Post-Its</h1>
      </div>
    </div>
    <div class="row">
      <!-- v-for stickynote change to make into col-3
      with class: "col-3"-->
      <StickyNote v-for="note in notes" :Note="note" :key="note._id" class="col-3 offset-1" />
      <div class="col-3 add-note ml-4">
        <div class="form-group">
          <label>Title</label>
          <input v-model="postIt.name" type="text" class="form-control" placeholder="Title" />
          <label>Text</label>
          <input v-model="postIt.description" type="text" class="form-control" placeholder="Text" />
          <button @click="createStickyNote">addNote</button>
        </div>
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
  },
  computed: {
    notes() {
      return this.$store.state.stickyNotes;
    }
  },
  methods: {
    createStickyNote() {
      this.$store.dispatch("create", {
        data: this.postIt,
        address: "stickyNotes",
        commitAddress: "stickyNotes",
        commit: "addItem"
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