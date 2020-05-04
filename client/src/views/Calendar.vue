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
        <div v-if="canEditEvents == false && this.canAddEvents == false">
          <h3
            v-for="Event in Events"
            :key="Event._id"
            @click="setActiveEvent(Event)"
          >{{Event.name}}, {{Event.description}}, {{Event.dateOfEvent.slice(0, 10)}}</h3>
        </div>

        <div v-if="canEditEvents == true || canAddEvents == true" class="form-group row">
          <div v-if="canAddEvents == true" class="col-12">
            <label for>new event</label>
          </div>
          <div v-if="canEditEvents == true" class="col-12">
            <label for>edit event</label>
          </div>
          <div class="col-12">
            <input
              type="text"
              class="form-control event-form"
              placeholder="event title"
              aria-describedby="helpId"
              v-if="canAddEvents == true || canEditEvents == true"
              v-model="newEvent.name"
            />
          </div>
          <div class="col-12">
            <input
              type="text"
              class="form-control event-form"
              placeholder="event description (optional)"
              aria-describedby="helpId"
              v-if="canAddEvents == true || canEditEvents == true"
              v-model="newEvent.description"
            />
          </div>
          <div class="col-12">
            <input
              type="date"
              class="form-control event-form"
              aria-describedby="helpId"
              v-if="canAddEvents == true || canEditEvents == true"
              v-model="newEvent.dateOfEvent"
            />
          </div>
          <div class="col-12">
            <button
              @click="addEvent"
              v-if="canAddEvents == true"
              type="button"
              class="btn event-form"
            >Submit</button>
          </div>
          <div class="col-12">
            <button
              @click="editEvent"
              v-if="canEditEvents == true"
              type="button"
              class="btn event-form"
            >Submit</button>
          </div>
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
    this.$store.dispatch("get", {
      address: "events",
      commit: "setItem",
      commitAddress: "events"
    });
  },
  data() {
    return {
      canAddEvents: false,
      canEditEvents: false,
      canRemoveEvents: false,
      selectedEvent: false,
      newEvent: {
        name: "",
        description: "",
        dateOfEvent: Date
      }
    };
  },
  methods: {
    getDate() {
      // NOTE Takes current date finds month in calendar where order is equal to month then makes that current month
      let currentDate = new Date();

      var currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");

      // TODO Make this an independent function
      let curMonthStr =
        currentDateWithFormat[5].toString() +
        currentDateWithFormat[6].toString();
      let curMonth = Number(curMonthStr);

      let cal = this.$store.state.calendar[0].Months;
      let activeMonth = cal.find(m => m.order == curMonth);

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
      this.$store
        .dispatch("setActive", {
          commit: "setItem",
          commitAddress: "activeMonth",
          data: newMonth
        })
        .then(res => this.filterEventsByMonth());
    },
    filterEventsByMonth() {
      let events = this.$store.state.events;
      let curMonth = this.$store.state.activeMonth.order;
      var currentDate = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      let activeEvents = events.filter(
        e =>
          e.dateOfEvent.slice(5, 7) == curMonth &&
          e.dateOfEvent.slice(0, 4) == currentDate.slice(0, 4)
      );
      this.$store.dispatch("setActive", {
        commit: "setItem",
        commitAddress: "activeEvents",
        data: activeEvents
      });
    },
    convertEventDate() {
      let eventDate = this.newEvent.dateOfEvent;
      let yearStr = eventDate[0] + eventDate[1] + eventDate[2] + eventDate[3];
      let monthStr = eventDate[5] + eventDate[6];
      let dayStr = eventDate[8] + eventDate[9];
      let year = Number(yearStr);
      // NOTE Month is 1 less because months in the Date object are zero indexed for some reason
      let month = Number(monthStr) - 1;
      let day = Number(dayStr);
      this.newEvent.dateOfEvent = new Date(year, month, day);
    },
    addEvent() {
      this.convertEventDate();
      this.$store.dispatch("create", {
        commit: "addItem",
        commitAddress: "events",
        address: "events",
        data: this.newEvent
      });
      setTimeout(this.filterEventsByMonth(), 2000);
      // .then(res => this.filterEventsByMonth());
    },
    editEvent() {
      this.convertEventDate();
      this.$store.dispatch("edit", {
        commit: "addItem",
        commitAddress: "events",
        address: "events",
        data: {
          name: this.newEvent.name,
          description: this.newEvent.description,
          _id: this.$store.state.activeEvent._id,
          id: this.$store.state.activeEvent.id,
          dateOfEvent: this.newEvent.dateOfEvent
        }
      });
    },
    deleteEvent(Event) {
      if (this.canRemoveEvents == true) {
        this.$store.dispatch("delete", {
          commit: "removeItem",
          commitAddress: "events",
          commitAddress2: "events",
          address: "events",
          data: Event
        });
      }
    },
    eventModifier(num) {
      this.filterEventsByMonth();
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
    },
    setActiveEvent(Event) {
      if (this.canRemoveEvents == true) {
        this.deleteEvent(Event);
      } else {
        this.$store.dispatch("setActive", {
          commit: "setItem",
          commitAddress: "activeEvent",
          data: Event
        });
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
  height: 22vh;
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
.event-form {
  margin-top: 0.5rem;
}
/* TODO Make v-if for background color dependent on month */
</style>