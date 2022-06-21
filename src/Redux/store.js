import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducer';

const store = configureStore(rootReducer);

export default store;