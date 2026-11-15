import { createSlice } from "@reduxjs/toolkit";
import { createAsyncState } from "../initialState";

const initialState = {
  links: null,
  metadata: null,
  ...createAsyncState(),
};

const linkSlice = createSlice({
    name: "links",
    initialState,
    reducers:{}
})

export default linkSlice.reducer;