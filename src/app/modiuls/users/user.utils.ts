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
  const currentId = (await findLastStudentId()) || (0).toString();
  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  const id = `${payloads.year}${payloads.code}${incrementId}`;
  return id;
};
