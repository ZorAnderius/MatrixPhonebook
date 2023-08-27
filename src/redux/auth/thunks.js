import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOut, refresh, signUp } from '../../api/authAPI';
import { login } from 'api/authAPI';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      return await signUp(body);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      return await login(body);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await logOut();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      return await refresh();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
