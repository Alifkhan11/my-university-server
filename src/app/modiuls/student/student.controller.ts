import { NextFunction, Request, Response } from 'express';
import { StudentServises } from './student.service';
// import studentValidationSchema from './student.validation';

///add user
// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student: studentData } = req.body;
//     // const result = await StudentServises.createStudentIntoDB(studentData);

//     //jod validation
//     const zodParsedData = studentValidationSchema.parse(studentData);

//     const result = await StudentServises.createStudentIntoDB(zodParsedData);

//     res.status(200).json({
//       success: true,
//       message: 'Student is created succesfully',
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error || 'Student is created unsuccesfully',
//       data: error,
//     });
//   }
// };

///get all user
const getAllStudents = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const resualt = await StudentServises.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Student all Data Get now here',
      data: resualt,
    });
  } catch (error) {
    next(error)
  }
};

//get single user

const getSingleStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { studentId } = req.params;

    const resualt = await StudentServises.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student single data get now here',
      data: resualt,
    });
  } 
  catch(error){
    next(error)
  }
};

const deletedSingleStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { studentId } = req.params;

    const resualt = await StudentServises.deletedSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student single data deleted successfully',
      data: resualt,
    });
  } catch (error) {
    next(error)
    };
  };

export const StudentController = {
  // createStudent,
  getAllStudents,
  getSingleStudent,
  deletedSingleStudent,
};
