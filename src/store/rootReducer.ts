// src/store/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';

// Import các slice reducer của bạn tại đây
import counterReducer from '../features/counterSlice';
import breedsReducer from '../features/breedsSlice';

const rootReducer = combineReducers({
  // Đăng ký các reducer tại đây
  counter: counterReducer,
  breeds: breedsReducer
});

export default rootReducer;
