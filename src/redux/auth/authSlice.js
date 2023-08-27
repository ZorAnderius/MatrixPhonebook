import { createSlice } from '@reduxjs/toolkit';
import { logOutThunk, loginThunk, refreshThunk, signUpThunk } from './thunks';
import {
  handlerAuthFulfilled,
  handlerLogOutFulfilled,
  handlerRefreshFulfilled,
  handlerRefreshPending,
} from './handler';
import { initialAuthState } from './initialAuthState';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  extraReducers: builder =>
    builder
      .addCase(signUpThunk.fulfilled, handlerAuthFulfilled)
      .addCase(loginThunk.fulfilled, handlerAuthFulfilled)
      .addCase(logOutThunk.fulfilled, handlerLogOutFulfilled)
      .addCase(refreshThunk.fulfilled, handlerRefreshFulfilled)
      .addCase(refreshThunk.pending, handlerRefreshPending)
      .addCase(refreshThunk.rejected, handlerLogOutFulfilled),
});

export const authReducer = authSlice.reducer;
