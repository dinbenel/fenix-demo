import {z} from 'zod';
import {validationMessage} from '../constants/errorMessage';

export const loginFormSchema = z.object({
  email: z.string().email(validationMessage.email),
  password: z
    .string()
    .min(3, validationMessage.passwordMin)
    .max(8, validationMessage.passwordMax),
});

export type LoginFormState = z.infer<typeof loginFormSchema>;
