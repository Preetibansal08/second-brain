import mongoose, { Schema, Document, Types } from "mongoose";

/**
 * 1. Interface (Type Safety)
 */
export interface IContent extends Document {
  title: string;
  link: string;
  tags: Types.ObjectId[];   // array of Tag references
  userId: Types.ObjectId;   // reference to User
  createdAt: Date;
  updatedAt: Date;
}

/**
 * 2. Schema Definition
 */
const ContentSchema: Schema<IContent> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag", // reference to Tag model
      },
    ],
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // reference to User model
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

/**
 * 3. Model Export
 */
const ContentModel =
  mongoose.models.Content ||
  mongoose.model<IContent>("Content", ContentSchema);


  export default ContentModel