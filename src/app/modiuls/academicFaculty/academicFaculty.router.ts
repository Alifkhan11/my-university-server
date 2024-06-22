import e from 'express';
import validateRequest from '../../middlewere/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultycontroller } from './academicFaculty.controller';

const router = e.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultycontroller.createAcademicFaculty,
);

router.get('/', AcademicFacultycontroller.getAllAcademicFacultyes);

router.get('/:fecultyId', AcademicFacultycontroller.getSingleAcademicFaculty);

router.patch(
  '/:fecultyId',
  validateRequest(
    AcademicFacultyValidation.updathAcademicFacultyValidationSchema,
  ),
  AcademicFacultycontroller.updathAcademicFaculty,
);

export const AcademicFacultyRouter = router;
