import { UserController } from './user.controller';
import { studentValidationSchema } from '../student/student.validation';
import validateRequest from '../../middlewere/validateRequest';
import e from 'express';

const router = e.Router();

router.post(
  '/create-student',
  validateRequest(studentValidationSchema),
  UserController.createStudent,
);

export const UserRought = router;
