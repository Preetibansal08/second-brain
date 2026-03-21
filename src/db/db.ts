import mongoose from "mongoose";
import { MONGO_URI } from "../config/env.js";

export const connect =async ()=>{
    await mongoose.connect(MONGO_URI).then(()=>{
    console.log("db connected succesfully")
})
}