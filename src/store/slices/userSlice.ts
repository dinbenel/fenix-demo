// DUCKS pattern
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {appSliceNames} from '../../constants/appSliceNames';
import {loginUser} from '../thunk/userThunk';
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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload as IUser;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
