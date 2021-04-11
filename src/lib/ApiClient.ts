/* eslint-disable prettier/prettier */
import FailedToCallApiError from "@/errors/FailedToCallApiError";
import axios, { AxiosError, AxiosInstance } from "axios";
import GuideResponse from "./GuideResponse";
import {
  default as RoadmapResponse,
  default as RoadResponse
} from "./RoadmapResponse";

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:3000",
      timeout: 1000,
    });
  }

  public async fetchGuides(): Promise<GuideResponse[]> {
    return this.client
      .get<GuideResponse[]>("/api/guides")
      .then((res) => res.data)
      .catch((error: AxiosError) => {
        const status = error.response ? error.response.status : undefined;
        throw new FailedToCallApiError(error.message, status);
      });
  }

  public async fetchRoadmap(id: number): Promise<RoadmapResponse[]> {
    return this.client
      .get<RoadResponse[]>("/api/roadmaps/" + id.toString)
      .then((res) => res.data)
      .catch((error: AxiosError) => {
        const status = error.response ? error.response.status : undefined;
        throw new FailedToCallApiError(error.message, status);
      });
  }
}

export default new ApiClient();
