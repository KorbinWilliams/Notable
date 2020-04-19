import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Calendar = new Schema(
  {
    Events: { type: Array },
    Year: { type: Number, default: 2020 },
    Dow: { type: Array, default: ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"], unmodifiable: true },
    Months: {
      1: {
        name: "January",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      },
      2: {
        name: "February",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
        }
      },
      3: {
        name: "March",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      },
      4: {
        name: "April",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
      },
      5: {
        name: "May",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
      },
      6: {
        name: "June",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
      },
      7: {
        name: "July",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      },
      8: {
        name: "August",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      },
      9: {
        name: "September",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
      },
      10: {
        name: "October",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      },
      11: {
        name: "November",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
      },
      12: {
        name: "December",
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      },
    },
    authorId: { type: ObjectId, ref: "User", required: true, immutable: true },
    userId: { type: ObjectId, ref: "User", required: true, immutable: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Calendar;
