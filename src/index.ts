import express from "express";
import userRouter from "./routes/userRoutes.js";
import { connect } from "./db/db.js";
import contantRouter from "./routes/contentRoutes.js";
import { PORT } from "./config/env.js";



const app = express()
connect()
app.use(express.json());

app.use("/user",userRouter)
app.use("/content",contantRouter)


app.listen(PORT,()=>{
    console.log("server is running on 3000 port")
})