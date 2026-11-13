import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAsyncState, type AsyncState } from "../initialState";
import type { IUser } from "../types/user.types";
import { axiosPrivate } from "../../api/axios";

interface IinitialState extends AsyncState {
  user: IUser| null;
}

const initialState: IinitialState = {
  user: null,
  ...createAsyncState(),
};

export const getUserInfo = createAsyncThunk<IUser, void, { rejectValue: string }>(
  "user/info",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.get("/users/info");
      return response.data.result;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return builder.addAsyncThunk(getUserInfo, {
          pending: (state) => {
            state.isPending = true;
            state.isFulfilled = false;
            state.isRejected = false;
            state.error = null;
          },
          fulfilled: (state, { payload }) => {
            state.isPending = false;
            state.isFulfilled = true;
            state.user = payload;
          },
          rejected: (state, { payload }) => {
            state.isPending = false;
            state.isRejected = true;
            console.log(payload);
          },
        });
    }
})

export default userSlice.reducer;