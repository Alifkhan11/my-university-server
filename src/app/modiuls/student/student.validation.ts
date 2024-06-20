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
  body: z.object({
    password: z.string().max(20).optional(),
    Student: z.object({
      name: studentNamevaledationSchma,
      gender: z.enum(['male', 'female', 'other']),
      dathOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emargencyContactNo: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string(),
      permanentAddres: z.string(),
      guardian: gurdianvalidationSchma,
      localGuardian: localGuardianvaliditionSchema,
      profileImg: z.string(),
    }),
  }),
});

export const ValidationSchema = {
  studentNamevaledationSchma,
};
