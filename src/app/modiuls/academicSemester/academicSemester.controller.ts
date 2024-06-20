import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const resualt = await AcademicSemesterService.createAcademicSemesterInToDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Create Academic Semester successfully',
    data: resualt,
  });
});

export const AcademicSemesterControlller = {
  createAcademicSemester,
};
