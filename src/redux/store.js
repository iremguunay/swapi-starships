import { configureStore } from "@reduxjs/toolkit";
import starshipsSlice from "./starships/starshipsSlice";

export const store = configureStore({
    reducer: {
        starships: starshipsSlice,
    },
});
