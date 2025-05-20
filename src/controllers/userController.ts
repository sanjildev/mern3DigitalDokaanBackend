import { Request, Response } from "express";
import User from "../database/models/UserModel";

class UserController{
static async register(req:Request,res:Response){
    //incoming user data receive
const {username,email,password}=req.body
console.log(username,password,email);


if(!username || !email || !password){
    res.status(400).json({
        message:"Please provide username,email,password"
    })
    return
}
const user=await User.create({
    username,
    email,
    password
})
res.status(201).json({
    message:'User register successfully',
    data:user
})
}

}
export default UserController