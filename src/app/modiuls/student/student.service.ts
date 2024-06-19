import { Student } from './student.model';
// import { TStudent } from './student.interfach';

// const createStudentIntoDB = async (studentData: TStudent) => {
//   const resualt = await Student.create(studentData); //bilt in static method

  //static method

  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!');
  // }

  //for creating instance

  // const student=new Student(studentData)//create and instans
  // if(await student.isUserExists(studentData.id)){
  //   throw new Error('User alrady Exists')
  // }
  // const resualt=await student.save()//bild in instence method
//   return resualt;
// };

const getAllStudentFromDB = async () => {
  const resualt = await Student.find();
  return resualt;
};

const getSingleStudentFromDB = async (id: string) => {
  const resualt = await Student.findOne({ id });
  return resualt;
};

const deletedSingleStudentFromDB = async (id: string) => {
  const resualt = await Student.updateOne({ id }, { isDeleted: true });
  return resualt;
};

export const StudentServises = {
  // createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deletedSingleStudentFromDB,
};
