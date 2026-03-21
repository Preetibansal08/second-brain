import mongoose, { Schema, Document } from "mongoose";

// ✅ 1. TypeScript Interface
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

// ✅ 2. Mongoose Schema
const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // no duplicate emails
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// ✅ 3. Model
const UserModul = mongoose.model<IUser>("User", userSchema);

export default UserModul;