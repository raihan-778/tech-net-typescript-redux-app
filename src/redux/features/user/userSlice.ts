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

const createUser = createAsyncThunk('user/create-user', async () => {
  const data = await createUserWithEmailAndPassword(auth, email, password);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
