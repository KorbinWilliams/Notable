import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const LocationInfo = new Schema(
  {
    state: { type: String, unique: true, minlength: 3 },
    city: { type: String, unique: true, minlength: 3 },
    hasInfo: { type: Boolean, default: true },
    authorId: { type: ObjectId, ref: "User", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default LocationInfo;
