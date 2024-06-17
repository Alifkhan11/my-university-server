import { z } from "zod";

const UserValidationSchema=z.object({
    password: z.string().max(20).optional(),

})

export const UserValidation={
    UserValidationSchema
}