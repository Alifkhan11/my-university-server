import { Router } from 'express';
import { UserRought } from '../modiuls/users/user.router';
import { StudentRought } from '../modiuls/student/student.router';
import { AcademicSemesterRouter } from '../modiuls/academicSemester/academicSemester.router';

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
  {
    path: '/academic-semister',
    route: AcademicSemesterRouter,
  },
];

mosuleRought.forEach((route) => router.use(route.path, route.route));

export default router;
