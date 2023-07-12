import { auth } from '@/lib/firebase';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface IUserState {
  user: {
    email: string | null;
    role?: string;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}
const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

interface ICredential {
  email: string;
  password: string;
}

export const createUser = createAsyncThunk(
  'user/create-user',
  async ({ email, password }: ICredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload; // here "action.payload" will get the return value from "createUser" function. so we must return the "createUser" function
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

export default userSlice.reducer;
