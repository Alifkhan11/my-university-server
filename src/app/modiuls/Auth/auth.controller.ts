import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const loginUser=catchAsync(async(req,res)=>{
    const resualt=await AuthService.logonUser(req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'User is Logged in sussefully',
        data:resualt
    })
})

export const AuthController={
    loginUser
}