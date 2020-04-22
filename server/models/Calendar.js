import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Calendar = new Schema(
  {
    Year: { type: Number, default: 2020 },
    Dow: { type: Array, default: ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"], unmodifiable: true },
    Months: {
      type: Array, unmodifiable: true, default: [
        {
          order: 1,
          name: { type: String, unmodifiable: true, default: "January" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
          }
        },
        {
          order: 2,
          name: { type: String, unmodifiable: true, default: "February" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
          }
        },
        {
          order: 3,
          name: { type: String, unmodifiable: true, default: "March" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
          }
        },
        {
          order: 4,
          name: { type: String, unmodifiable: true, default: "April" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
          }
        },
        {
          order: 5,
          name: { type: String, unmodifiable: true, default: "May" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
          }
        },
        {
          order: 6,
          name: { type: String, unmodifiable: true, default: "June" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
          }
        },
        {
          order: 7,
          name: { type: String, unmodifiable: true, default: "July" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
          }
        },
        {
          order: 8,
          name: { type: String, unmodifiable: true, default: "August" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
          }
        },
        {
          order: 9,
          name: { type: String, unmodifiable: true, default: "September" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
          }
        },
        {
          order: 10,
          name: { type: String, unmodifiable: true, default: "October" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
          }
        },
        {
          order: 11,
          name: { type: String, unmodifiable: true, default: "November" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
          }
        },
        {
          order: 12,
          name: { type: String, unmodifiable: true, default: "December" },
          days: {
            type: Array, unmodifiable: true, default:
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
          }
        }
      ]
    },
    authorId: { type: ObjectId, ref: "User", required: true, immutable: true },
    userId: { type: ObjectId, ref: "User", required: true, immutable: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Calendar;
