<template>
  <div class="calendar container-fluid">
    <div class="row top-bar">
      <!-- Display active month if there is no active month set active month to current month -->
      <div class="col-12">
        <h1>{{Month}}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!-- NOTE PREMADE CALENDAR: save another object on backend for dates? DEALING WITH YEAR/VARIANCE: for year for loop over year (mess with date type?) split on character OR if year - 2020 == 0 || 4 || 8; change february.days to 29
        DEALING WITH DAYS OF THE WEEK: (How do I automate this?)
        Need Months object with amount of days[] 
        Months = [JAN,FEB,MAR,APR,MAY,JUN,JUL,AUG,SEP,OCT,NOV,DEC]
        dow = [SUN,MON,TUES,WED,THUR,FRI,SAT]
        (where do i put dow?)
        Need a basis so let year.JAN.days[0].dow = WED 
        let months[month] - 1 = lastMonth
        let lastMonth.days.length - 1 = lastDay
        let curDow = lastday.dow + 1
        -->
        <!-- NOTE ARRANGING DAYS IN CALENDER: (Can I make a more customized v-for? if so, v-for over month.days let month.days[0].dow = curDow )  -->
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">1</div>
          <div class="col-1 cal-block">2</div>
          <div class="col-1 cal-block">3</div>
          <div class="col-1 cal-block">4</div>
          <div class="col-1 cal-block">5</div>
          <div class="col-1 cal-block">6</div>
          <div class="col-1 cal-block">7</div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">8</div>
          <div class="col-1 cal-block">9</div>
          <div class="col-1 cal-block">10</div>
          <div class="col-1 cal-block">11</div>
          <div class="col-1 cal-block">12</div>
          <div class="col-1 cal-block">13</div>
          <div class="col-1 cal-block">14</div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">15</div>
          <div class="col-1 cal-block">16</div>
          <div class="col-1 cal-block">17</div>
          <div class="col-1 cal-block">18</div>
          <div class="col-1 cal-block">19</div>
          <div class="col-1 cal-block">20</div>
          <div class="col-1 cal-block">21</div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">22</div>
          <div class="col-1 cal-block">23</div>
          <div class="col-1 cal-block">24</div>
          <div class="col-1 cal-block">25</div>
          <div class="col-1 cal-block">26</div>
          <div class="col-1 cal-block">27</div>
          <div class="col-1 cal-block">28</div>
        </div>
        <!-- NOTE Start v-ifs here feb has 29 on leap year, 30 or 31 for other months. -->
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">29</div>
          <div class="col-1 cal-block">30</div>
          <div class="col-1 cal-block">31</div>
          <div class="col-1 cal-block"></div>
          <div class="col-1 cal-block"></div>
          <div class="col-1 cal-block"></div>
          <div class="col-1 cal-block"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  mounted() {
    this.$store
      .dispatch("get", {
        address: "calendar",
        commit: "setItem",
        commitAddress: "calendar"
      })
      .then(res => this.getDate());
  },
  methods: {
    getDate() {
      let currentDate = new Date();
      console.log(currentDate);

      var currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      console.log(currentDateWithFormat + " current date");

      let curMonthStr =
        currentDateWithFormat[5].toString() +
        currentDateWithFormat[6].toString();
      let curMonth = Number(curMonthStr);
      console.log(curMonthStr + " curMonth");

      let cal = this.$store.state.calendar[0].Months;
      let activeMonth = cal.find(
        m => m.order == curMonth[1] || m.order == curMonth
      );
      this.$store.dispatch("setActive", {
        commit: "setItem",
        commitAddress: "activeMonth",
        data: activeMonth.name.default
      });
      console.log(activeMonth.name.default + " default");
    }
  },
  computed: {
    Month() {
      return this.$store.state.activeMonth;
    },
    Calendar() {
      return this.$store.state.calendar;
    }
  }
};
</script>

<style scoped>
.cal-block {
  height: 10rem;
  color: whitesmoke;
}
/* TODO Make v-if for background color dependent on month */
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #4f488f;
}
.top-bar {
  background-color: rgb(35, 131, 134);
  border: 3px solid black;
}
</style>