import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    image: { url: String, public_id: String },
    password: {
      type: String,
      min: 6,
      max: 64,
      require: true,
    },
    secret: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    about: {},
    
    photo: String,
    following: [{ type: Schema.ObjectId, ref: "User" }],
    followers: [{ type: Schema.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
