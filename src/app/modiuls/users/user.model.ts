import { Schema, model } from "mongoose";
import { TUser } from "./user.interfach";

const userSchme=new Schema<TUser>({
    id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    needsPasswordChange:{
        type:Boolean,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['admin' , 'student' , 'faculty']
    },
    status:{
        type:String,
        required:true,
        enum:[ 'in-progress' , 'blocked'],
        default:'in-progress'
    },
    isDeleted:{
        type:Boolean,
        required:true,
        default:false
    }
},
{
    timestamps:true
})


export const User=model<TUser>('Users',userSchme)