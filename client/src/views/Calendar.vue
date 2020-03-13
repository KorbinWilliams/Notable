<template>
  <div class="calendar container-fluid">
    <div class="row top-bar">
      <!-- Display active month if there is no active month set active month to current month -->
      <div class="col">
        <h1>Month</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-8 offset-2">
        <!-- How am I gonna v-for for 7 days? -->
        <div class="row">
          <div class="col-1">day</div>
          <div class="col-1">day</div>
          <div class="col-1">day</div>
          <div class="col-1">day</div>
          <div class="col-1">day</div>
          <div class="col-1">day</div>
          <div class="col-1">day</div>
        </div>
        <div class="row">
          <!--  -->
        </div>
        <div class="row">
          <!--  -->
        </div>
        <div class="row">
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar"
};
</script>

<style>
</style>