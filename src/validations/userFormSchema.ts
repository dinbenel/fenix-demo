import {z} from 'zod';
import {validationMessage} from '../constants/errorMessage';

export const loginFormSchema = z.object({
  email: z.string().email(validationMessage.email),
  phone: z.string().length(10, validationMessage.phoneLength),
});

export type LoginFormState = z.infer<typeof loginFormSchema>;
