import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DaySchedule = {
  day: string;
  isAvailable: boolean;
  startTime: string;
  endTime: string;
};

type AvailabilityState = {
  slots: DaySchedule[];
};

const initialState: AvailabilityState = {
  slots: [],
};

const availabilitySlice = createSlice({
  name: "availability",
  initialState,
  reducers: {
    setAvailability(state, action: PayloadAction<DaySchedule[]>) {
      state.slots = action.payload;
    },
    clearAvailability(state) {
      state.slots = [];
    },
  },
});

export const { setAvailability, clearAvailability } = availabilitySlice.actions;
export default availabilitySlice.reducer;