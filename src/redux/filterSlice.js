import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilterQuery(_, { payload }) {
      return payload;
    },
  },
});

export const { addFilterQuery } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
