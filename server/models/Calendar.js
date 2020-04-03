import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Calendar = new Schema(
  {
    Events: { type: Array },
    Year: { type: Number, default: 2020 },
    Dow: { type: Array, default: ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"], unmodifiable: true },
    Months: {
      Jan: {
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      },
      Feb: {
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
        }
      },
      Mar: {
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      },
      Apr: {
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
      },
      May: {
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
      },
      Jun: {
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
      },
      Jul: {
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      },
      Aug: {
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      },
      Sep: {
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
      },
      Oct: {
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      },
      Nov: {
        days: {
          type: Array, unmodifiable: true, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        }
      },
      Dec: {
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
