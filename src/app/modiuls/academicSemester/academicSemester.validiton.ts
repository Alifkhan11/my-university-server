import { z } from 'zod';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';
import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from './academicSemester.interfach';

const createAcademicSemestervalidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [TAcademicSemesterName]),
    code: z.enum([...AcademicSemesterCode] as [TAcademicSemesterCode]),
    year: z.string(),
    startMonth: z.enum([...Months] as [TMonths]),
    endMonth: z.enum([...Months] as [TMonths]),
  }),
});

const updathAcademicSemestervalidationSchema = z.object({
  body: z.object({
    name: z
      .enum([...AcademicSemesterName] as [TAcademicSemesterName])
      .optional(),
    code: z
      .enum([...AcademicSemesterCode] as [TAcademicSemesterCode])
      .optional(),
    year: z.string().optional(),
    startMonth: z.enum([...Months] as [TMonths]).optional(),
    endMonth: z.enum([...Months] as [TMonths]).optional(),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemestervalidationSchema,
  updathAcademicSemestervalidationSchema,
};
