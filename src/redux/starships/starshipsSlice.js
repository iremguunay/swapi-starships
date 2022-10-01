import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStarships = createAsyncThunk(
  "starships/getStarships",
  async (baseURL) => {
    const response = await axios(baseURL);
    return response.data;
  }
);

export const starshipsSlice = createSlice({
  name: "starships",
  initialState: {
    items: [],
    status: "idle",
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/starships/`,
  },
  reducers: {},
  extraReducers: {
    [fetchStarships.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchStarships.fulfilled]: (state, action) => {
      state.items = action.payload.results;
    },
    [fetchStarships.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
  },
});

export default starshipsSlice.reducer;
