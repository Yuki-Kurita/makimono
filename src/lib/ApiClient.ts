import FailedToCallApiError from "@/errors/FailedToCallApiError";
import axios, { AxiosError, AxiosInstance } from "axios";
import GuideResponse from "./GuideResponse";

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
}

export default new ApiClient();
