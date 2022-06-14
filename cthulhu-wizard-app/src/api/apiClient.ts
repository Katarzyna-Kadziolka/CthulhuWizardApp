import axios, { type AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://localhost:5000/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
export default apiClient;
