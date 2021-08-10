import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { roadmapSlice } from "../roadmap/roadmapSlice";

interface User {
  name?: string | null;
  isLogin: boolean;
}

interface UserActionType extends User {}

const initialState: User = {
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserActionType>) => {
      state = { ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = roadmapSlice.reducer;
