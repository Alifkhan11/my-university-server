import { UserController } from './user.controller';
import validateRequest from '../../middlewere/validateRequest';
import e from 'express';
import { createStudentValidationSchema } from '../student/student.validation';

const router = e.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserController.createStudent,
);

export const UserRought = router;
