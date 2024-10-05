// src/models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type:String,
    required:true
  },
  Course:String,
  DOB:Date,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
