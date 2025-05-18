import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./sclices/authSlice";
import profileReducer from "./sclices/profileSlice";
import availabilityReducer from "./sclices/availabilitySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    availability: availabilityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;