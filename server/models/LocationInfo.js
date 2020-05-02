import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const LocationInfo = new Schema(
  {
    state: { type: String, unique: true, minlength: 4 },
    city: { type: String, unique: true, minlength: 4 },
    hasInfo: { type: Boolean, default: true },
    weatherImages: {
      type: Object, default: {
        clear: "https://spaceplace.nasa.gov/templates/featured/sun/sunburn300.png",
        cloudy: "https://cdn.clipart.email/aee2c3d044b614a239eb3c6371629871_its-cloudy-clipart-storm-clipart-transparent-cartoon-free-_920-688.png",
        rain: "https://cdn.clipart.email/4d208ea9100acff88f6d17621a21cc4c_rain-cartoon-clipart-clipart-kid-clipartingcom_2000-2000.png",
        thunderstorm: "https://cdn1.vectorstock.com/i/thumb-large/52/40/thunderstorm-cloud-hand-drawn-vector-20755240.jpg",
        snow: "https://cdn.clipart.email/2ea4d3f5453bb9ff52e3aa8a70281a1a_cloud-clipart-snow_958-958.png",
      }
    },
    authorId: { type: ObjectId, ref: "User", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default LocationInfo;
