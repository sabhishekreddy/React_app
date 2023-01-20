import { configureStore } from '@reduxjs/toolkit'
import customreducer from './reducers';

const initialState = {}

const store = configureStore({reducer:customreducer});
export default store;