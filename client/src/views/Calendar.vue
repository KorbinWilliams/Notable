<template>
  <div class="calendar container-fluid">
    <div class="row top-bar">
      <!-- Display active month if there is no active month set active month to current month -->
      <div class="col-3">
        <img
          class="arrows"
          src="https://i.imgur.com/s0bQfjC.png"
          @click="changeMonth(false)"
          alt="previous month"
        />
      </div>
      <div class="col-6">
        <h1>{{Month.name.default}}</h1>
      </div>
      <div class="col-3">
        <img
          class="arrows"
          src="https://i.imgur.com/6e7JwqP.png"
          @click="changeMonth(true)"
          alt="next month"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
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
    <div class="row event-box">
      <div class="col-12 event-toolbar">
        <div class="row">
          <div class="col-3 event-tool">
            <button @click="eventModifier(1)" type="button" class="btn-info">View Events</button>
          </div>
          <div class="col-3 event-tool">
            <button @click="eventModifier(2)" type="button" class="btn-success">Add Event</button>
          </div>
          <div class="col-3 event-tool">
            <button @click="eventModifier(3)" type="button" class="btn-warning">Edit Event</button>
          </div>
          <div class="col-3 event-tool">
            <button @click="eventModifier(4)" type="button" class="btn-danger">Remove Event</button>
          </div>
        </div>
      </div>
      <div class="col-12 events">
        <h3 v-for="Event in Events" :key="Event._id"></h3>
        <div v-if="canEditEvents == true || canAddEvents == true" class="form-group">
          <label for>new event</label>
          <input type="text" name id class="form-control" placeholder aria-describedby="helpId" />
          <small id="helpId" class="text-muted">Help text</small>
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
  data() {
    return {
      canAddEvents: false,
      canEditEvents: false,
      canRemoveEvents: false,
      newEvent: {},
      editedEvent: {}
    };
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
    },
    changeMonth(string) {
      let curMonth = this.$store.state.activeMonth.order;
      let months = this.$store.state.calendar[0].Months;
      let newMonth = 1;
      if (curMonth == 12 && string == true) {
        newMonth = months.find(m => m.order == curMonth - 11);
      } else if (curMonth == 1 && string == false) {
        newMonth = months.find(m => m.order == curMonth + 11);
      } else if (string == true) {
        newMonth = months.find(m => m.order == curMonth + 1);
      } else if (string == false) {
        newMonth = months.find(m => m.order == curMonth - 1);
      }
      this.$store.dispatch("setActive", {
        commit: "setItem",
        commitAddress: "activeMonth",
        data: newMonth
      });
    },
    addEvent() {},
    editEvent() {},
    removeEvent() {},
    eventModifier(num) {
      if (num == 1) {
        this.canAddEvents = false;
        this.canEditEvents = false;
        this.canRemoveEvents = false;
      } else if (num == 2) {
        this.canAddEvents = true;
        this.canEditEvents = false;
        this.canRemoveEvents = false;
      } else if (num == 3) {
        this.canAddEvents = false;
        this.canEditEvents = true;
        this.canRemoveEvents = false;
      } else if (num == 4) {
        this.canAddEvents = false;
        this.canEditEvents = false;
        this.canRemoveEvents = true;
      }
    }
  },
  computed: {
    Month() {
      return this.$store.state.activeMonth;
    },
    Calendar() {
      return this.$store.state.calendar;
    },
    Events() {
      return this.$store.state.activeEvents;
    }
  }
};
</script>

<style scoped>
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
.arrows {
  height: 4rem;
}
.arrows:hover {
  cursor: pointer;
}
.cal-block {
  height: 10rem;
  color: whitesmoke;
  text-shadow: 2px 2px black;
}
.cal-dow {
  height: 2rem;
  color: lightsteelblue;
}
.events {
  color: whitesmoke;
  justify-content: center;
}
.event-box {
  height: 18vh;
  background-color: rgb(35, 131, 134);
  border: 2px solid black;
}
.event-toolbar {
  height: 2rem;
  border-bottom: 2px solid black;
}
.event-tool {
  display: flex;
  justify-content: center;
}
/* TODO Make v-if for background color dependent on month */
</style>