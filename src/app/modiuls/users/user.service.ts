import config from '../../config';
import { TStudent } from '../student/student.interfach';
import { Student } from '../student/student.model';
import { TUser } from './user.interfach';
import { User } from './user.model';

const createUserFromtoDB = async (password: string, studentData: TStudent) => {
  //create user object
  const userData: Partial<TUser> = {};

  //if password in not given , use default password
  userData.password = password || (config.DEFAULT_PASSWORD as string);

  //set student role
  userData.role = 'student';

  // set manually generate id
  userData.id = '2020040002';

  //create user data
  const newUser = await User.create(userData);

  //create student data
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createUserFromtoDB,
};
