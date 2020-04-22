import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Event = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    authorId: { type: ObjectId, ref: "User", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default Event;
