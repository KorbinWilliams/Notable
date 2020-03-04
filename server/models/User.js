import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
let Schema = mongoose.Schema

const User = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
// might need to remove toJSON
User.methods.validatePassword = function (password, hash) {
  return bcrypt.compareSync(password, this.hash)
}

export default User