import { Request, Response } from 'express';
import { StudentServises } from './student.service';

///add user
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServises.cteateStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

///get all user
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const resualt = await StudentServises.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Student all Data Get now here',
      data: resualt,
    });
  } catch (error) {
    console.log(error);
  }
};

//get single user

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const resualt = await StudentServises.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student single data get now here',
      data: resualt,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
