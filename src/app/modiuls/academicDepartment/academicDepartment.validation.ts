import { z } from 'zod';

const createAcademicDepartmentValidationSchma = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department must be String',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Department must be String',
    }),
  }),
});
const updathAcademicDepartmentValidationSchma = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department must be String',
    }),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidationSchma,
  updathAcademicDepartmentValidationSchma,
};
