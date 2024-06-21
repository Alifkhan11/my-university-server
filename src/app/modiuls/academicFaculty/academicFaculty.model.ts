import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interfach';

const AcademicFacultySchema = new Schema<TAcademicFaculty>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const AcademicFaculty = model<TAcademicFaculty>(
  'AcademicFaculty',
  AcademicFacultySchema,
);
