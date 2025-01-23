import { emailSchema, YupObject } from "../../Validation/ValidationSchemas";

export const ForgotPasswordSchema = YupObject({ email: emailSchema });


