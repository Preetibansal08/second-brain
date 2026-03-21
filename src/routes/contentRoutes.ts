import { Router } from "express";
import { createContentController, getContentController } from "../controller/contantController.js";
import { userAuth } from "../middleware/userAuth.js";

const contantRouter = Router()


contantRouter.post("/create",userAuth,createContentController)
contantRouter.get("/getcontent",userAuth,getContentController)



export default contantRouter