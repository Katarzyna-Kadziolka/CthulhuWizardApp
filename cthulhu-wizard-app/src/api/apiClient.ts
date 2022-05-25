import axios, { type AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://localhost:7160/v1",
  headers: {
    "Content-type": "application/json",
  },
});
export default apiClient;
