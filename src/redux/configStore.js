import { configureStore } from '@reduxjs/toolkit';
import miseReducer from './modules/miseSlice';

const store = configureStore({
  reducer: {
    mise: miseReducer,
  },
});

export default store;
