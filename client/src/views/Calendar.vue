<template>
  <div class="calendar container-fluid">
    <div class="row top-bar">
      <!-- Display active month if there is no active month set active month to current month -->
      <div class="col">
        <h1>Month</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!--NOTE How am I gonna v-for for 7 days? 
        I'm not, change calendar blocks to just events. don't save the whole calendarblock. filter events where data: month / day == event.date?
        put into premade calendar with preset days-->
        <!-- NOTE PREMADE CALENDAR: save another object on backend for dates? DEALING WITH YEAR/VARIANCE: for year for loop over year (mess with date type?) split on character OR if year - 2020 == 0 || 4 || 8; change february.days to 29
        DEALING WITH DAYS OF THE WEEK: (How do I automate this?)
        Need Months object with amount of days[] 
        Months = [JAN,FEB,MAR,APR,MAY,JUN,JUL,AUG,SEP,OCT,NOV,DEC]
        dow = [SUN,MON,TUES,WED,THUR,FRI,SAT]
        (where do i put dow?)
        Need a basis so let year.JAN.days[0].dow = WED 
        let months[month] - 1 == lastMonth
        let lastMonth.days.length - 1 = lastDay
        let curDow = lastday.dow + 1
        -->
        <!-- NOTE ARRANGING DAYS IN CALENDER: (Can I make a more customized v-for? if so, v-for over month.days let month.days[0].dow = curDow )  -->
        <!-- NOTE BACKEND CHANGES: remove calendarBlocks
        Date? {
          Year: 2020
          Months: [JAN: {days: 1-31},FEB: {days: 1-28},MAR: {days: 1-31},APR: {days: 1-30},MAY: {days: 1-30},JUN: {days: 1-30},JUL: {days: 1-31},AUG: {days: 1-31},SEP: {days: 1-30},OCT: {days: 1-31},NOV: {days: 1-30},DEC: {days: 1-31}],
          Dow: [SUN,MON,TUES,WED,THUR,FRI,SAT]
        } -->
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
          <div class="col-1 cal-block">day</div>
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
.cal-block {
  height: 10rem;
}
</style>