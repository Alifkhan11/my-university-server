import { z } from 'zod';

const studentNamevaledationSchma = z.object({
  firstname: z
    .string()
    .min(1, 'First Name is Required')
    .max(20)
    .refine(
      (value) => {
        const firstnamestr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return firstnamestr === value;
      },
      { message: 'First name is not in capitalize format' },
    ),
  middname: z.string().optional(),
  lestname: z
    .string()
    .min(1, 'Last Name is Required')
    .max(20)
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Last name is not valid',
    }),
});

const gurdianvalidationSchma = z.object({
  fatherName: z.string().min(1, 'Father Name is Required').trim(),
  fatherOccupation: z.string().min(1, 'Father occupation is Required').trim(),
  fatherContactNo: z.string().min(1, 'Father contact no is Required').trim(),
  motherName: z.string().min(1, 'Mother Name is Required').trim(),
  motherOccupation: z.string().min(1, 'Mother occupation is Required').trim(),
  motherContactNo: z.string().min(1, 'Mother contact no is Required').trim(),
});

const localGuardianvaliditionSchema = z.object({
  name: z.string().min(1, 'Name is Required').trim(),
  occupation: z.string().min(1, 'Occupation is Required').trim(),
  contactNo: z.string().min(1, 'Contact no is Required').trim(),
  address: z.string().min(1, 'Address is Required').trim(),
});

export const studentValidationSchema = z.object({
  id: z.string().min(1, 'Unique ID is Required').trim(),
  password: z.string().min(1, 'Last Name is Required').max(20),
  name: studentNamevaledationSchma,
  gender: z.enum(['male', 'female', 'other'], {
    message: 'Gender is not valid',
  }),
  dathOfBirth: z.string().min(1, 'Date of birth is Required').trim(),
  email: z
    .string()
    .email('Email is not valid')
    .min(1, 'Email is Required')
    .trim(),
  contactNo: z.string().min(1, 'Contact no is Required').trim(),
  emargencyContactNo: z
    .string()
    .min(1, 'Emergency contact no is Required')
    .trim(),
  bloogGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1, 'Present Address is Required').trim(),
  permanentAddres: z.string().min(1, 'Permanent Address is Required').trim(),
  profileImg: z.string().url('Profile image must be a valid URL').optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  localGuardian: localGuardianvaliditionSchema,
  guardian: gurdianvalidationSchma,
  isDeleted: z.boolean().optional().default(false),
});

export default studentValidationSchema;
