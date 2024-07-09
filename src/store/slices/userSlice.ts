// DUCKS pattern
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {appSliceNames} from '../../constants/appSliceNames';

interface UserState {
  user: null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: appSliceNames.user,
  initialState,
  reducers: {
    login() {},
  },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;
