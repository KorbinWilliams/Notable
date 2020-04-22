<template>
  <div class="calendar container-fluid">
    <div class="row top-bar">
      <!-- Display active month if there is no active month set active month to current month -->
      <div class="col-3">
        <img src alt="previous month" />
      </div>
      <div class="col-6">
        <h1>{{Month.name.default}}</h1>
      </div>
      <div class="col-3">
        <img src alt="next month" />
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
          <div class="col-1 cal-dow">
            <p>Sun</p>
          </div>
          <div class="col-1 cal-dow">
            <p>Mon</p>
          </div>
          <div class="col-1 cal-dow">
            <p>Tues</p>
          </div>
          <div class="col-1 cal-dow">
            <p>Wed</p>
          </div>
          <div class="col-1 cal-dow">
            <p>Thurs</p>
          </div>
          <div class="col-1 cal-dow">
            <p>Fri</p>
          </div>
          <div class="col-1 cal-dow">
            <p>Sat</p>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">
            <p>1</p>
          </div>
          <div class="col-1 cal-block">
            <p>2</p>
          </div>
          <div class="col-1 cal-block">
            <p>3</p>
          </div>
          <div class="col-1 cal-block">
            <p>4</p>
          </div>
          <div class="col-1 cal-block">
            <p>5</p>
          </div>
          <div class="col-1 cal-block">
            <p>6</p>
          </div>
          <div class="col-1 cal-block">
            <p>7</p>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">
            <p>8</p>
          </div>
          <div class="col-1 cal-block">
            <p>9</p>
          </div>
          <div class="col-1 cal-block">
            <p>10</p>
          </div>
          <div class="col-1 cal-block">
            <p>11</p>
          </div>
          <div class="col-1 cal-block">
            <p>12</p>
          </div>
          <div class="col-1 cal-block">
            <p>13</p>
          </div>
          <div class="col-1 cal-block">
            <p>14</p>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">
            <p>15</p>
          </div>
          <div class="col-1 cal-block">
            <p>16</p>
          </div>
          <div class="col-1 cal-block">
            <p>17</p>
          </div>
          <div class="col-1 cal-block">
            <p>18</p>
          </div>
          <div class="col-1 cal-block">
            <p>19</p>
          </div>
          <div class="col-1 cal-block">
            <p>20</p>
          </div>
          <div class="col-1 cal-block">
            <p>21</p>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">
            <p>22</p>
          </div>
          <div class="col-1 cal-block">
            <p>23</p>
          </div>
          <div class="col-1 cal-block">
            <p>24</p>
          </div>
          <div class="col-1 cal-block">
            <p>25</p>
          </div>
          <div class="col-1 cal-block">
            <p>26</p>
          </div>
          <div class="col-1 cal-block">
            <p>27</p>
          </div>
          <div class="col-1 cal-block">
            <p>28</p>
          </div>
        </div>
        <!-- NOTE Start v-ifs here feb has 29 on leap year, 30 or 31 for other months. -->
        <div class="row d-flex justify-content-center">
          <div class="col-1 cal-block">
            <p>29</p>
          </div>
          <div class="col-1 cal-block">
            <p v-if="this.$store.state.activeMonth.days.default.length > 29">30</p>
          </div>
          <div class="col-1 cal-block">
            <p v-if="this.$store.state.activeMonth.days.default.length > 30">31</p>
          </div>
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

      // TODO Fix this up using slice
      let curMonthStr =
        currentDateWithFormat[5].toString() +
        currentDateWithFormat[6].toString();
      let curMonth = Number(curMonthStr);

      let cal = this.$store.state.calendar[0].Months;
      let activeMonth = cal.find(m => m.order == curMonth);
      // TODO Fix this so that acctiveMonth contains the whole month object then adjust days based on minth
      this.$store.dispatch("setActive", {
        commit: "setItem",
        commitAddress: "activeMonth",
        data: activeMonth
      });
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
.cal-dow {
  height: 2rem;
  color: lightsteelblue;
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