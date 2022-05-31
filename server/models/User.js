import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    nome: {
      type: String,
    },
    email: {
      type: String,
    },
    pass: {
      type: String,
    },
  },
);

const User = mongoose.model("User", UserSchema);
export default User;
