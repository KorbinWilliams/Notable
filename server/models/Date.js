import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Calendar = new Schema(
  {
    Year: { type: Number, default: 2020 },
    Months: {
      Jan: {
        days: {
          type: Array, default:
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
      }
    },
    authorId: { type: ObjectId, ref: "User", required: true, immutable: true },
    userId: { type: ObjectId, ref: "User", required: true, immutable: true }
    // why did i reference user twice????? If it aint broke.
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

//         Date? {
//   Year: 2020,
//   Months: [JAN: {days: 1-31},FEB: {days: 1-28},MAR: {days: 1-31},APR: {days: 1-30},MAY: {days: 1-30},JUN: {days: 1-30},JUL: {days: 1-31},AUG: {days: 1-31},SEP: {days: 1-30},OCT: {days: 1-31},NOV: {days: 1-30},DEC: {days: 1-31}],
//   Dow: [SUN,MON,TUES,WED,THUR,FRI,SAT]
// } 

export default Calendar;
