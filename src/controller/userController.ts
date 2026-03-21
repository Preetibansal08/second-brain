import type { Request, Response } from "express";
import UserModul from "../models/UserModels.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config/env.js";


type User = {
  username: string;
  email: string;
  password: string;
};



type signinUser =Pick<User ,'email'|'password'> 

export const signUp = async (
  req: Request<{}, {}, User>,
  res: Response
) => {
  try {
    const {username , email , password} = req.body;

    const hashpassword = await bcrypt.hash(password , 10)


    // console.log("BODY:", user);

     await UserModul.create({
        username:username,
        email:email,
        password:hashpassword
    });

    res.status(201).json({
        "meaasge":"user created successfully"
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const signin = async (
  req: Request<{}, {}, signinUser>,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const user = await UserModul.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(400).json({
        message: "email or password is incorrect",
      });
    }

    const token = jwt.sign({
        id : user._id 
    },JWT_SECRET)



    // ✅ FINAL RETURN (important)
    return res.status(200).json({
      message: "login successful",
      token:token
    });

  } catch (err) {
    return res.status(500).json({ error: err });
  }
};










