import { TAcademicSemester } from '../academicSemester/academicSemester.interfach';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  //2030 01   0001
  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

export const generateStudentId = async (payloads: TAcademicSemester) => {
  let currentId = (0).toString(); //0000 by defaylt

  const lastStudentId = await findLastStudentId();
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentSemesterYear = lastStudentId?.substring(0, 4);
  const currentSemesterCode = payloads.code;
  const currentSemesterYear = payloads.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentSemesterYear === currentSemesterYear
  ) {
    currentId = lastStudentId.substring(6);
  }

  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  const id = `${payloads.year}${payloads.code}${incrementId}`;
  return id;
};
