import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAsyncState, type AsyncState } from "../initialState";
import { axiosPrivate } from "../../api/axios";
import type {
  ICreateLinkPayload,
  ICreateLinkResponse,
  ILinks,
  IMetadata,
} from "../types/link.types";

interface IinitialState extends AsyncState {
  links: ILinks[] | null;
  metadata: IMetadata | null;
}

const initialState: IinitialState = {
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

export const getUserLinks = createAsyncThunk<
  any,
  void,
  { rejectValue: string }
>("/link/all", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosPrivate.get("/links");
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
          }).addAsyncThunk(getUserLinks, {
            pending: (state) => {
              state.isPending = true;
              state.isFulfilled = false;
              state.isRejected = false;
              state.error = null;
            },
            fulfilled: (state, {payload}) => {
              state.isPending = false;
              state.isFulfilled = true;
              state.links = payload.result;
              state.metadata = payload.metadata;
            },
            rejected: (state, { payload }) => {
              state.isPending = false;
              state.isRejected = true;
              state.error = payload;
            },
          })
    }
})

export default linkSlice.reducer;