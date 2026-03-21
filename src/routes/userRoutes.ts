import { Router } from "express";
import { signin, signUp } from "../controller/userController.js";

const userRouter = Router()

// interface user{
//     userName:string,
//     email:string,
//     password:string
// }


userRouter.post("/signup",signUp)
userRouter.get("/signin",signin)


export default userRouter