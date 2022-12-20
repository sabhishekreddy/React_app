import { configureStore } from '@reduxjs/toolkit'
import customreducer from './reducers';

const initialState = {
    user : {
        name:"",
        email :"-1"
    }
}

const store = configureStore({reducer:customreducer,preloadedState:{}});
export default store;