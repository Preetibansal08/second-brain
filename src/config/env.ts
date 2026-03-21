import dotenv from "dotenv";

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing");
}


if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is missing");
}

export const JWT_SECRET = process.env.JWT_SECRET;

export const PORT = process.env.PORT;

export const MONGO_URI = process.env.MONGO_URI