import type{ Request, Response } from "express";
import ContentModel from "../models/ContentModels.js";

interface CreateContentInput {
  title: string;
  link: string;
  tags?: string[];
}

export const createContentController = async (
  req: Request<{}, {}, CreateContentInput>,
  res: Response
) => {
  try {
    const { title, link, tags } = req.body;

    // userId from auth middleware
    const userId = req.userId;

    // ✅ validation
    if (!title || !link) {
      return res.status(400).json({
        message: "Title and link are required",
      });
    }

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    // ✅ create in DB
    const content = await ContentModel.create({
      title,
      link,
      tags,
      userId,
    });

    return res.status(201).json({
      message: "Content created successfully",
      data: content,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const getContentController =async (
  req:Request,
  res:Response
)=>{

  const userId = req.userId;
  const content = await ContentModel.find({
    userId: userId
  }).populate("userId","username")

  res.json(content)
    
}