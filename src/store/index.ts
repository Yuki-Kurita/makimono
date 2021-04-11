import { configureStore } from "@reduxjs/toolkit";
import { roadmapReducer } from "./roadmap/roadmapSlice";

const store = configureStore({
  reducer: {
    roadmap: roadmapReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
