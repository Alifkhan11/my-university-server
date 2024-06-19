import { Router } from 'express';
import { UserRought } from '../modiuls/users/user.rought';
import { StudentRought } from '../modiuls/student/student.rought';

const router = Router();

const mosuleRought = [
  {
    path: '/students',
    route: StudentRought,
  },
  {
    path: '/users',
    route: UserRought,
  },
];

mosuleRought.forEach((route) => router.use(route.path, route.route));

export default router;
