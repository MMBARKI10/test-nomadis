import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: false,
    },
    lastname: {
        type: String,
        required: true,
        unique: false,
      },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    }, 
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);


