import { configureStore } from "@reduxjs/toolkit";
import { roadmapReducer } from "./roadmap/roadmapSlice";
import { userReducer } from "./user/userSlice";

const store = configureStore({
  reducer: {
    roadmap: roadmapReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
