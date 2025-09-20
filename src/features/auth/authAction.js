import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUP = createAsyncThunk('signUp',async(data,{rejectWithValue})=>{
try{
  const responce = await fetch('http://localhost:3003/user/user/register',{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  const result = await responce.json()
  return result
}
catch(err){
 return rejectWithValue(err)
}
})