// DUCKS pattern
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {appSliceNames} from '../../constants/appSliceNames';
import {IUser} from '../../types/user.type';

interface UserState {
  user: IUser | null;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: null,
  error: '',
  isLoading: false,
};

const userSlice = createSlice({
  name: appSliceNames.user,
  initialState,
  reducers: {
    loginUserData(state, action) {
      state.user = action.payload as IUser;
    },
  },
});

export const {loginUserData} = userSlice.actions;
export default userSlice.reducer;
