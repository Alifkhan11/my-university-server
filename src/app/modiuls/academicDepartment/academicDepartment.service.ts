import { TAcademicDepartment } from './academicDepartment.interfach';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentInToDB = async (
  payloads: TAcademicDepartment,
) => {
  // const isExisitDepartment=await AcademicDepartment.findOne({
  //   name:payloads.name
  // })

  // if(isExisitDepartment){
  //   throw new AppError('The Department is Alrady Exixit')
  // }

  const resualt = await AcademicDepartment.create(payloads);
  return resualt;
};

const getAllAcademicDepartmentFromDB = async () => {
  const resualt = await AcademicDepartment.find().populate('academicFaculty');
  return resualt;
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const resualt = await AcademicDepartment.findOne({ _id: id }).populate(
    'academicFaculty',
  );
  return resualt;
};

const updathSingleAcademicDepartmentFromDB = async (
  id: string,
  payloads: Partial<TAcademicDepartment>,
) => {
  const resualt = await AcademicDepartment.updateOne({ _id: id }, payloads, {
    new: true,
  });
  return resualt;
};

export const AcademicDepartmentService = {
  createAcademicDepartmentInToDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  updathSingleAcademicDepartmentFromDB,
};
