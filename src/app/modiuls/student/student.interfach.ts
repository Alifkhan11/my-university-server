import { Model } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TUserName = {
  firstname: string;
  middname?: string;
  lestname: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dathOfBirth: string;
  contactNo: string;
  emargencyContactNo: string;
  bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  email: string;
  avatar?: string;
  presentAddress: string;
  permanentAddres: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
  isDeleted?: boolean;
};

//for creating static

// export interface StudentModel extends Model<TStudent>{
//   isUserExists(id:string):Promise<TStudent | null>
// }

export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

//for creating instance

// export type StudentModels={
//   isUserExists(id:string):Promise<TStudent |null>
// }

// export type StudentModel=Model<TStudent,Record<string,never>,StudentModels>
