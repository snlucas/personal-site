import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'en',
};

export const setLanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, lang) => {
      state.value = lang.payload;
    },
  },
});

export const { setLanguage } = setLanguageSlice.actions;
export default setLanguageSlice.reducer;
