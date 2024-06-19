import { Schema, model } from 'mongoose';
import { TUser } from './user.interfach';
import bcrypt from 'bcrypt'
import config from '../../config';

const userSchme = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      required: true,
      default:false
    },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      required: true,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);



// pre save middlewere hook
userSchme.pre('save', async function (next) {
  // console.log(this,'pre hooks:this is save data');
  this.password = await bcrypt.hash(
    this.password,
    Number(config.BCRYPT_SALT_ROUND),
  );
  next();
});

// post save middlewere hook
userSchme.post('save', function (doc, next) {
  doc.password = '';
  // console.log(this,'post hooks:this is save data');
  next();
});



export const User = model<TUser>('Users', userSchme);
