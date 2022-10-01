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
    search: "",
    didSearchValueChange: false,
  },
  reducers: {
    getSearchResult: (state, action) => {
      state.didSearchValueChange = true;
      state.search = action.payload;
      // add search query to the baseURL
      state.baseURL = `${process.env.REACT_APP_API_BASE_URL}/starships/?search=${state.search}`;
      // reset the status to idle so that the useEffect hook in the Home component can fetch the data
      state.status = "idle";
    }
  },
  extraReducers: {
    [fetchStarships.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchStarships.fulfilled]: (state, action) => {
      // if the search value has changed, then we need to reset the items array
      if(state.didSearchValueChange) {
        state.items = action.payload.results;
      } else {
        // using concat to add the new items to the existing items for load more button
        state.items = state.items.concat(action.payload.results);
      }
      // setting the nextURL to using next property from the API
      state.nextURL = action.payload.next;
      // to show the load more button, check if there is a nextURL
      state.hasNextPage = state.nextURL ? true : false;
      // reset the didSearchValueChange to false for adding new items to the existing items
      state.didSearchValueChange = false;
      state.status = "succeded";
    },
    [fetchStarships.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
  },
});

export const { getSearchResult } = starshipsSlice.actions;
export default starshipsSlice.reducer;
