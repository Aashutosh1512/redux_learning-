import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/createslice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;


// this is store it will be created under reduxstore folder 
