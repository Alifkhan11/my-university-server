import { NextFunction, Request, Response } from 'express';
// import { UserValidation } from './user.validation';
import { UserService } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, Student: studentData } = req.body;
    // const zodParsedData =userData UserValidation.UserValidationSchema.parse(userData);
    const resualt = await UserService.createUserFromtoDB(password, studentData);
    res.status(200).json({
      success: true,
      message: 'User and student Created successfully',
      data: resualt,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent,
};
