import { Router } from 'express';
import { UserRought } from '../modiuls/users/user.router';
import { AcademicSemesterRouter } from '../modiuls/academicSemester/academicSemester.router';
import { StudentRought } from '../modiuls/student/student.rought';
import { AcademicFacultyRouter } from '../modiuls/academicFaculty/academicFaculty.router';
import { AcademicDepartmentRouter } from '../modiuls/academicDepartment/academicDepartment.router';
import { CourseRouter } from '../modiuls/course/course.rought';
import { semesterRegistrationRoutes } from '../modiuls/semesterRegistration/semesterRegistration.router';
import { AuthRouter } from '../modiuls/Auth/auth.router';
import { AdminRoutes } from '../modiuls/Admin/admin.route';

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
    route: AcademicFacultyRouter,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRouter,
  },
  {
    path: '/course',
    route: CourseRouter,
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
];

mosuleRought.forEach((route) => router.use(route.path, route.route));

export default router;
