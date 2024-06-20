import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interfach';
import { Student } from '../student/student.model';
import { TUser } from './user.interfach';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createUserFromtoDB = async (password: string, studentData: TStudent) => {
  //create user object
  const userData: Partial<TUser> = {};

  //if password in not given , use default password
  userData.password = password || (config.DEFAULT_PASSWORD as string);

  //set student role
  userData.role = 'student';

  // set manually generate id
  // userData.id = '2020040001';

  const admSemester = await AcademicSemester.findById(
    studentData.admissionSemester,
  );
  // console.log(admissionSemester);

  //set  generated id
  userData.id = await generateStudentId(admSemester);

  //create user data
  const newUser = await User.create(userData);

  //create student data
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    //create new student
    const newStudent = await Student.create(studentData);
    return { newStudent, newUser };
  }
};

export const UserService = {
  createUserFromtoDB,
};
