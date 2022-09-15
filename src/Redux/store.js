import {configureStore} from '@reduxjs/toolkit';
import postSlice from './slice/slice'


const store = configureStore({
    reducer : {
        data : postSlice
    }
})

export default store;