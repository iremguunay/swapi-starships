import {createSlice} from '@reduxjs/toolkit';

export const starshipsSlice = createSlice({
    name: 'starships',
    initialState: {
        items: [],
    },
    reducers: {},
    extraReducers: {},
})

export default starshipsSlice.reducer