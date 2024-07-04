import e from "express";
import validateRequest from "../../middlewere/validateRequest";
import { AuthValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";

const router=e.Router()

router.post('/login',validateRequest(AuthValidation.loginValidationSchema),AuthController.loginUser)


export const AuthRouter=router