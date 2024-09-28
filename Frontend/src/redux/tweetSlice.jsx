import { createSlice } from "@reduxjs/toolkit";
const tweetSlice = createSlice({
    name:"tweet",
    initialState:{
        allTweets:[]
    },
    reducers:{
        setAllTweets:(state,action)=>{
            state.allTweets = action.payload
        }
    }
})

export const {setAllTweets} = tweetSlice.actions;
export default tweetSlice.reducer