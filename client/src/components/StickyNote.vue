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
  data() {
    return {
      name: "",
      descriptiion: "",
      authorId: this.$store.state.user._id
    };
  }
};
</script>

<style scoped>
.bg-ylw {
  background-color: yellow;
  border: 2px solid black;
}
</style>
