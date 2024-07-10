import {userApiErr} from '../constants/errorMessage';
import {IUser} from '../types/user.type';
import {LoginFormState} from '../validations/userFormSchema';

export const login = (loginData: LoginFormState): Promise<IUser> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (
        loginData.email !== 'bino@bino.com' ||
        loginData.password !== '1234567!'
      ) {
        return rej(userApiErr.loginErr);
      }
      res({
        email: 'bino@bino.com',
        id: 'sfdhsfpjpj',
        lastName: 'bino',
        name: 'binbino',
      });
    }, 2000);
  });
};
