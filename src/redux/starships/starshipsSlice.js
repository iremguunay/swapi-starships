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
    nextURL: null,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchStarships.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchStarships.fulfilled]: (state, action) => {
      // using concat to add the new items to the existing items for load more button
      state.items = state.items.concat(action.payload.results);
      // setting the nextURL to using next property from the API
      state.nextURL = action.payload.next;
      // to show the load more button, check if there is a nextURL
      state.hasNextPage = state.nextURL ? true : false;
      state.status = "succeded";
    },
    [fetchStarships.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
  },
});

export default starshipsSlice.reducer;
