<template>
  <div class="stickynote row">
    <div class="col-12 bg-ylw">
      <!-- TODO make this look nice-->
      <div class="row">
        <div class="col d-flex justify-content-end">
          <img src="https://imgur.com/DuIKmrh" alt="push-pin" />
          <button @click="toggleOptions(), setActiveStickyNote()">
            <img
              class="dots-btn"
              src="https://pngimage.net/wp-content/uploads/2018/06/3-dots-png-5.png"
              alt="dots"
            />
          </button>
        </div>
      </div>
      <div v-show="this.optionBool == true" class="row">
        <div class="col-6">
          <button @click="deleteStickyNote">Delete Note</button>
        </div>
        <!-- TODO Make this an on click edit event??? -->
        <div class="col-6">
          <button @click="editStickyNote">Edit Note</button>
        </div>
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
  data() {
    return {
      optionBool: false
    };
  },
  methods: {
    toggleOptions() {
      if (this.optionBool == false) {
        this.optionBool = true;
      } else {
        this.optionBool = false;
      }
    },
    setActiveStickyNote() {
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
    // TODO Make this an on click edit event???
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
.dots-btn {
  height: 1rem;
}
</style>
