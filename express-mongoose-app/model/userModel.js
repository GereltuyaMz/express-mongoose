import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name must required!"]
  },
  profileImg: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },

})

const User = mongoose.model('User', UserSchema);

export default User;

