import { StudentModel } from '../student.model';
import { Student } from './student.interfach';

const cteateStudentIntoDB = async (student: Student) => {
  const resualt = await StudentModel.create(student);
  return resualt;
};

const getAllStudentFromDB = async () => {
  const resualt = await StudentModel.find();
  return resualt;
};

const getSingleStudentFromDB = async (id: string) => {
  const resualt = await StudentModel.findOne({ id });
  return resualt;
};

export const StudentServises = {
  cteateStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
