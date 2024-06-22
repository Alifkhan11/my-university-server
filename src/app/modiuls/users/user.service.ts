import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../error/appEror';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interfach';
import { Student } from '../student/student.model';
import { TUser } from './user.interfach';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import httpStatus from 'http-status';

const createUserFromtoDB = async (password: string, studentData: TStudent) => {
  //create user object
  const userData: Partial<TUser> = {};

  //if password in not given , use default password
  userData.password = password || (config.DEFAULT_PASSWORD as string);

  //set student role
  userData.role = 'student';

  // set manually generate id
  // userData.id = '2020040001';
  const admissionSemesterID = studentData.admissionSemester;
  const admissionSemester =
    await AcademicSemester.findById(admissionSemesterID);
  if (!admissionSemester) {
    throw new AppError(400, 'Admission semester not found');
  }

  const session = await mongoose.startSession();

  try {
    await session.startTransaction();
    userData.id = await generateStudentId(admissionSemester);

    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }
    studentData.id = newUser[0].id;
    studentData.user = newUser[0]._id;

    const newStudent = await Student.create([studentData], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    await session.commitTransaction();
    await session.endSession();
    return { newStudent, newUser };
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(`Failed to create Student becouse ${error}`);
  }

  //set  generated id
  // userData.id = await generateStudentId(admissionSemester);

  //create user data
  // const newUser = await User.create(userData);

  //create student data
  // if (Object.keys(newUser).length) {
  //   studentData.id = newUser.id;
  //   studentData.user = newUser._id;

  //create new student
  // const newStudent = await Student.create(studentData);
  // return { newStudent, newUser };
  // }
};

export const UserService = {
  createUserFromtoDB,
};
