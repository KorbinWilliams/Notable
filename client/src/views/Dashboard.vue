<template>
  <div class="dashboard container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <div class="row dash-block">
          <div class="col-12">
            <Weather />
          </div>
        </div>
        <div class="row dash-block">
          <div class="col">
            <h3>Your top notes</h3>
            <div class="row note-box">
              <StickyNote
                :dash="true"
                v-for="note in notes"
                :Note="note"
                :key="note._id"
                class="col-3 notes offset-1"
              />
            </div>
          </div>
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
  },
  computed: {
    notes() {
      return this.$store.state.stickyNotes.slice(0, 3);
    }
  },
  methods: {
    getNoteIndex(note) {
      let noteIndex = notes.indexOf(note);
    }
  }
};
</script>

<style scoped>
.dash-block {
  height: 40vh;
  background-color: rgb(35, 131, 134);
  margin-top: 5vh;
  border: 2px solid black;
}
.note-box {
  display: flex;
}
/* .notes {
} */
</style>