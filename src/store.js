import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './features/lang/languageSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});
