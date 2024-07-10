import {createAsyncThunk} from '@reduxjs/toolkit';
import {userThunkPaths} from '../../constants/thunkPaths';
import {login} from '../../api/userApi';
import {LoginFormState} from '../../validations/userFormSchema';

export const loginUser = createAsyncThunk(
  userThunkPaths.login,
  async (userData: LoginFormState) => {
    try {
      const res = await login(userData);
      return res;
    } catch (error) {
      return error;
    }
  },
);
