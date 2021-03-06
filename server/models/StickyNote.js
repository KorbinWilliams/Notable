import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const StickyNote = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    authorId: { type: ObjectId, ref: "User", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default StickyNote;
