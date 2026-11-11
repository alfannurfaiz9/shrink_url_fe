import { createSlice } from "@reduxjs/toolkit"
import type { AsyncState } from "../initialState"
import { createAsyncState } from "../initialState";

interface IinitialState extends AsyncState {
  token: string | null;
}

const initialState: IinitialState = {
    token: null, 
    ...createAsyncState()
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;