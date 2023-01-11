import { configureStore } from "@reduxjs/toolkit";
import fullnameReducer from "../features/fullname/fullnameSlice";

export const store = configureStore({
  reducer: {
    fullname: fullnameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>