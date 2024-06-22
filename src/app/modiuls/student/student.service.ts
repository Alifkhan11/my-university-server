import { Student } from './student.model';

const getAllStudentFromDB = async () => {
  const resualt = await Student.find()
    .populate('admissionSemester')
    .populate('user')
    .populate({
      path: 'academicDepartment',
      populate: { path: 'academicFaculty' },
    });
  return resualt;
};

const getSingleStudentFromDB = async (id: string) => {
  const resualt = await Student.findOne({ id }).populate(
    'admissionSemester',
    'user',
  );
  return resualt;
};

const deletedSingleStudentFromDB = async (id: string) => {
  const resualt = await Student.updateOne({ id }, { isDeleted: true });
  return resualt;
};

export const StudentServises = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deletedSingleStudentFromDB,
};
