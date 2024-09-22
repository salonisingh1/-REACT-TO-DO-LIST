import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store= configureStore({
    reducer: todoReducer
})

//reducers inside redux-toolkit is called as slices.u can call it anything.