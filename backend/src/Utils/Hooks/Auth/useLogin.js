
import { emailSchema, passwordSchema, YupObject } from "../../Validation/ValidationSchemas";

export const LogInSchema = YupObject({
  email: emailSchema,
  password: passwordSchema,
});

