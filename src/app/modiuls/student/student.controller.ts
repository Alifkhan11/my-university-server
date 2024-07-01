import { RequestHandler } from 'express';
import { StudentServises } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

///get all user
const getAllStudents = catchAsync(async (req, res) => {
  const resualt = await StudentServises.getAllStudentFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student all Data Get now here',
    data: resualt,
  });
});

//get single user

const getSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;

    const resualt = await StudentServises.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student single data get now here',
      data: resualt,
    });
  } catch (error) {
    next(error);
  }
};

const deletedSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;

  const resualt = await StudentServises.deletedSingleStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student single data deleted successfully',
    data: resualt,
  });
});
const updathStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { Student } = req.body;

  const resualt = await StudentServises.updathStudentFromDB(studentId, Student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student updath successfully',
    data: resualt,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deletedSingleStudent,
  updathStudent,
};
