import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAsyncState } from "../initialState";
import { axiosPrivate } from "../../api/axios";
import type {
  ICreateLinkPayload,
  ICreateLinkResponse,
} from "../types/link.types";

const initialState = {
  links: null,
  metadata: null,
  ...createAsyncState(),
};

export const checkExistingLink = createAsyncThunk<ICreateLinkResponse, string, {rejectValue: string}>("link/check", async (slug, {rejectWithValue}) => {
  try {
    const response = await axiosPrivate.get(`/links/check?slug=${slug}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message);
  }
})

export const createLink = createAsyncThunk<
  ICreateLinkResponse,
  ICreateLinkPayload,
  { rejectValue: string }
>("/link/create", async (payload, { rejectWithValue }) => {
  try {
    const response = await axiosPrivate.post("/links", payload);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message);
  }
});

const linkSlice = createSlice({
    name: "links",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        return builder
          .addAsyncThunk(createLink, {
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
          .addAsyncThunk(checkExistingLink, {
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
          });
    }
})

export default linkSlice.reducer;