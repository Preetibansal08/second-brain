import type { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

import UserModul from "../models/UserModels.js";

export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized user",
      });
    }

    const token = authHeader.split(" ")[1];

    if(!token){
        return res.json({
            massage:"please login"
        })
    }

    const decoded = jwt.verify(token, JWT_SECRET);

     if(!decode){
        return res.json({
            massage:"Unauth user"
        })
    }
    //@ts-ignore
    const user = await UserModul.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.userId = user._id.toString();

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};