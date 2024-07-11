export const validationMessage = {
  email: 'invalid email',
  passwordMin: 'password must contain more then 3 characters',
  passwordMax: 'password must contain less then 8 characters',
  phoneLength: 'invalid phone number',
} as const;

export const userApiErr = {
  loginErr: 'invalid credentials',
} as const;
