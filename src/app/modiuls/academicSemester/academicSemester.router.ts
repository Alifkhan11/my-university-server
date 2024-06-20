import e from 'express';
import validateRequest from '../../middlewere/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validiton';
import { AcademicSemesterControlller } from './academicSemester.controller';

const router = e.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createAcademicSemestervalidationSchema,
  ),
  AcademicSemesterControlller.createAcademicSemester,
);

export const AcademicSemesterRouter = router;
