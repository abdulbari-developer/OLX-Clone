import { createSlice } from "@reduxjs/toolkit";
import { signUP } from "./authAction";


export const authSlice = createSlice({
    name: "authSlice",
    initialState:{
        product:[],
        error:null,
        loading:false
    },
    reducers:{},
    extraReducers: (builder)=>{
 builder
 .addCase(signUP.pending,(state)=>{
    state.loading=true;
 })
 .addCase(signUP.fulfilled,(state,action)=>{
    state.loading= false,
    state.product.push(action.payload)
 })
 .addCase(signUP.rejected,(state,action)=>{
    state.loading= false,
    state.error=action.payload
 })
    }
})

export default authSlice.reducer
