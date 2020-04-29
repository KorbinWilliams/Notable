import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const LocationInfo = new Schema(
  {
    state: { type: String, unique: true, minlength: 4 },
    city: { type: String, unique: true, minlength: 4 },
    hasInfo: { type: Boolean, default: true },
    authorId: { type: ObjectId, ref: "User", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default LocationInfo;
