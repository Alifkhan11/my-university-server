import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interfach';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterInToDB = async (payloas: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payloas.name] !== payloas.code) {
    throw new Error('Invalid Semester Code');
  }

  const resualt = await AcademicSemester.create(payloas);
  return resualt;
};

export const AcademicSemesterService = {
  createAcademicSemesterInToDB,
};
