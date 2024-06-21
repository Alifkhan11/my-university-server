import { Router } from 'express';
import { UserRought } from '../modiuls/users/user.router';
import { AcademicSemesterRouter } from '../modiuls/academicSemester/academicSemester.router';
import { StudentRought } from '../modiuls/student/student.rought';
import { academicFacultyRouter } from '../modiuls/academicFaculty/academicFaculty.router';

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
  {
    path: '/academic-faculty',
    route: academicFacultyRouter,
  },
];

mosuleRought.forEach((route) => router.use(route.path, route.route));

export default router;
