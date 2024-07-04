import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"
import AppError from "../error/appEror";
import httpStatus from "http-status";
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../config";
import { TUserRole } from "../modiuls/users/user.interfach";





const auth=(...requiredRoll:TUserRole[])=>{
    return catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const token=req.headers.authorization;


        if(!token){
            throw new AppError(httpStatus.NOT_FOUND,`You have not authrize`)
        }
       
        jwt.verify(token,config.JWT_SECRET_ACCESS_KE as string,function(error,decoded){
            if(error){
                throw new AppError(httpStatus.UNAUTHORIZED,'You have not authrize')
            }
            // const {userId, role}=decoded

            const role=(decoded as JwtPayload)?.role
            if(requiredRoll && !requiredRoll.includes(role)){

                throw new AppError(httpStatus.BAD_REQUEST,`You are not auturize`)
            }

            req.user=decoded as JwtPayload
            
            
            next()
        })


    })
}

export default auth