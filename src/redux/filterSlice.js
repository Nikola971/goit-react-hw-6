import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterFiltration: (state, action) => {
      return state, action.payload;
    },
    prepare(text) {
      return {
        payload: {
          text,
        },
      };
    },
  },
});

export const { filterFiltration } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
