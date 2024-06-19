import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, Student: studentData } = req.body;

  const resualt = await UserService.createUserFromtoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User and student Created successfully',
    data: resualt,
  });
});

export const UserController = {
  createStudent,
};
