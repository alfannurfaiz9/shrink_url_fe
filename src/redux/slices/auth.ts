import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null, 
    isPending: false,
    isFullfilled: false,
    isRejected: false,
    error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    test : () => {
        console.log("first");
    }
  },
});

export const { test } = authSlice.actions;
export default authSlice.reducer;