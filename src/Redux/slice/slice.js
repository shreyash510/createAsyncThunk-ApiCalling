import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
//create actions

export const fetchPost = createAsyncThunk('post/list', async (payload,
    rejectWithValue, getState, dispatch) => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return data
    }
    catch (e) {
        return e?.response;
    }
})


//create slices

const postSlices = createSlice({
    name : "post",
    initialState : {},
    extraReducers : {
        //handling pending state
        [fetchPost.pending] : (state, action)=>{
            state.loading = true;
        },
        //handling fulfilled state
        [fetchPost.fulfilled] : (state, action)=>{
            state.postsList = action.payload;
            state.loading = false;
        },
        //handling rejection 
        [fetchPost.rejected] : (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default postSlices.reducer;