import httpStatus from "http-status";
import AppError from "../../error/appEror";
import { User } from "../users/user.model";
import { TLoginUser } from "./auth.interfach";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from "../../config";


const logonUser=async(paylods:TLoginUser)=>{


    //cheak user
 const user=await User.findOne({id:paylods?.id})
 if(!user){
    throw new AppError(httpStatus.NOT_FOUND,'This User is NOt Found')
 }

 //cheak user delete
 const isdelete=user.isDeleted
if(isdelete){
    throw new AppError(httpStatus.NOT_FOUND,'This User is Deleted')
}

//stutas cheak
const stutasCheak=user.status
if(stutasCheak==='blocked'){
    throw new AppError(httpStatus.NOT_FOUND,'This User is Blocked')
}

//cheak password 
const isPasswordMatched=await bcrypt.compare(paylods.password,user.password)
if(!isPasswordMatched){
    throw new AppError(httpStatus.NOT_FOUND,'This Password wrong')
}

const jwtPaylod={
    userId:user.id,
    role:user.role
}

const assessToken=jwt.sign(
    jwtPaylod,
    config.JWT_SECRET_ACCESS_KE as string,
    {
        expiresIn:'10h'
    }
)

return {
    assessToken,
    needsPasswordChange:user.needsPasswordChange
}
 
}

export const AuthService={
    logonUser
}