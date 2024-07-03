import e from 'express';
import validateRequest from '../../middlewere/validateRequest';
import { CourseValidaerion } from './course.validation';
import { CourseController } from './course.controller';

const router = e.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidaerion.createCorceValidationSchema),
  CourseController.createCourses,
);

router.get('/', CourseController.getAllCourse);

router.get('/:id', CourseController.getSingleCourse);

router.delete('/:id', CourseController.deletedCourse);

router.patch(
  '/:id',
  validateRequest(CourseValidaerion.updathCourseValidationSchema),
  CourseController.updathCourse,
);

router.put(
  '/:courseId/assign-faculties',
  validateRequest(CourseValidaerion.facultyWithCourseValidationScema),
  CourseController.assignFacultyesWithCourse,
);

router.delete(
  '/:courseId/remove-faculties',
  validateRequest(CourseValidaerion.facultyWithCourseValidationScema),
  CourseController.removeFacultiesFromCourse,
);

export const CourseRouter = router;
