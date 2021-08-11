import { User } from "@/domain/user/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserActionType extends User {}

const initialState: User = {
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserActionType>) => {
      state.name = action.payload.name;
      state.iconUrl = action.payload.iconUrl;
      state.isLogin = action.payload.isLogin;
    },
    clearUser: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
