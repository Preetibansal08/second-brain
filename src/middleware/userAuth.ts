import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import UserModul from "../models/UserModels.js";

export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({
        message: "Unauthorized user",
      });
      return;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      res.status(401).json({
        message: "Please login",
      });
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    if (!decoded) {
      res.status(401).json({
        message: "Unauthorized user",
      });
      return;
    }

    const user = await UserModul.findById(decoded.id);

    if (!user) {
      res.status(401).json({
        message: "User not found",
      });
      return;
    }


    req.userId = user._id.toString();

    return next(); // ✅ IMPORTANT
  } catch (error) {
    res.status(401).json({
      message: "Invalid or expired token",
    });
    return;
  }
};