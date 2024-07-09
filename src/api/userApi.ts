import {IUser} from '../types/user.type';

export const login = async (): Promise<IUser> => {
  return {
    email: 'bino@bino.com',
    id: 'sfdhsfpjpj',
    lastName: 'bino',
    name: 'binbino',
  };
};
