<template>
  <div class="postits container-fluid bg-cork-board">
    <div class="row">
      <div class="col-12 top-bar">
        <h1>Post-Its</h1>
      </div>
    </div>
    <div class="row">
      <StickyNote v-for="note in notes" :Note="note" :key="note._id" class="col-3 offset-1" />
    </div>
    <div class="row">
      <div class="col-3 add-note offset-1">
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
  mounted() {
    this.$store.dispatch("get", {
      address: "stickyNotes",
      commit: "setItem",
      commitAddress: "stickyNotes"
    });
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
      this.postIt = {
        name: "",
        description: "",
        authorId: this.$store.state.user._id
      };
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
.bg-cork-board {
  background-image: url(https://previews.123rf.com/images/mexrix/mexrix1206/mexrix120600069/14260342-brown-cork-board-for-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>