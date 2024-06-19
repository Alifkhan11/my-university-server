import e from 'express';
import { UserController } from './user.controller';

const router = e.Router();

router.post('/create-student', UserController.createStudent);

export const UserRought = router;
