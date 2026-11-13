import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { AsyncState } from "../initialState"
import { createAsyncState } from "../initialState";
import type { ILoginPayload, ILoginResponse, IRegisterPayload, IRegisterResponse } from "../types/auth.types";
import axios from "axios";
import { axiosPrivate } from "../../api/axios";
import { clearUser } from "./user";

interface IinitialState extends AsyncState {
  token: string | null;
}

const initialState: IinitialState = {
  token: null,
  ...createAsyncState(),
};

export const register = createAsyncThunk<
  IRegisterResponse,
  IRegisterPayload,
  { rejectValue: string }
>("auth/register", async (payload, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/register`,
      payload,
    );

    return { message: response.data.message };
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message);
  }
});

export const login = createAsyncThunk<
  ILoginResponse,
  ILoginPayload,
  { rejectValue: any }
>("auth/login", async (payload, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      payload,
    );

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk<any, void, { dispatch: any,rejectValue: any }>(
  "auth/logout",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post(`/auth/logout`);
      dispatch(clearUser());
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }

      return rejectWithValue({ message: "An internal server error occurred." });
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(register, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
          state.error = null;
        },
        fulfilled: (state) => {
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(login, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
          state.error = null;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          state.token = payload.result.Token;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload.message;
        },
      })
      .addAsyncThunk(logout, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
          state.error = null;
        },
        fulfilled: (state) => {
          state.isPending = false;
          state.isFulfilled = true;
          state.token = null;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      });
  },
});

export default authSlice.reducer;