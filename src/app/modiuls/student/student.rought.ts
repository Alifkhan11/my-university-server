import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middlewere/validateRequest';
import { StudentValidationSchema } from './student.validation';

const router = express.Router();

router.get('/', StudentController.getAllStudents);

router.get('/:studentId', StudentController.getSingleStudent);

router.patch(
  '/:studentId',
  validateRequest(StudentValidationSchema.updathStudentValidationSchema),
  StudentController.updathStudent,
);

router.delete('/:studentId', StudentController.deletedSingleStudent);

export const StudentRought = router;
