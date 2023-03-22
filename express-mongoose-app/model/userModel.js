import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: {
    type: String,
    unique: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
})

export const User = mongoose.model('User', userSchema);