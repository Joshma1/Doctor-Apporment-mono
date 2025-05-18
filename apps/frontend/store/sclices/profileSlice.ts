import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProfileState = {
  firstName?: string;
  lastName?: string;
  qualifications?: string;
  biography?: string;
  profileImageUrl?: string;
};

const initialState: ProfileState = {};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<ProfileState>) {
      return { ...state, ...action.payload };
    },
    clearProfile() {
      return {};
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;