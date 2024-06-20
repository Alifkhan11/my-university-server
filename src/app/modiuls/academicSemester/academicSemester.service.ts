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

const getAllAcademicSemesterFromDB = async () => {
  const resualt = await AcademicSemester.find();
  return resualt;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const resualt = await AcademicSemester.findOne({ _id: id });
  return resualt;
};

const updathAcademicSemesterFromDB = async (
  id: string,
  payloads: Partial<TAcademicSemester>,
) => {
  if (
    payloads.name &&
    payloads.code &&
    academicSemesterNameCodeMapper[payloads.name] !== payloads.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.findOneAndUpdate(
    { _id: id },
    payloads,
    { new: true },
  );
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterInToDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updathAcademicSemesterFromDB,
};
