import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interfach';

const studentNameSchma = new Schema<UserName>({
  firstname: {
    type: String,
    required: true,
  },
  middname: {
    type: String,
  },
  lestname: {
    type: String,
    required: true,
  },
});

const gurdianSchma = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchma = new Schema<Student>({
  id: {
    type: String,
    required: true,
  },
  name: studentNameSchma,
  gender: ['male', 'female'],
  dathOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emargencyContactNo: {
    type: String,
    required: true,
  },
  bloogGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddres: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },
  isActive: ['active', 'blocked'],
  localGuardian: localGuardianSchema,
  guardian: gurdianSchma,
});

export const StudentModel = model<Student>('Student', studentSchma);
