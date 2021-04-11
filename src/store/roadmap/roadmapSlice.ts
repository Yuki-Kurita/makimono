import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface RoadmapActionType {
  id: number;
  title: string;
  url: string;
  explain: string;
}

interface Roadmap {
  readonly [key: number]: {
    title: string;
    url: string;
    explain: string;
  };
}

const initialState: Roadmap = {
  1: {
    title: "",
    url: "",
    explain: "",
  },
};

export const roadmapSlice = createSlice({
  name: "roadmap",
  initialState,
  reducers: {
    setRoadmap: (state, action: PayloadAction<RoadmapActionType>) => {
      state[action.payload.id] = {
        title: action.payload.title,
        url: action.payload.url,
        explain: action.payload.explain,
      };
    },
  },
});

export const { setRoadmap } = roadmapSlice.actions;
export const roadmapReducer = roadmapSlice.reducer;
export const selectRoadmap = (state: RootState) => state.roadmap;
