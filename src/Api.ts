import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-server-project-reactjs.vercel.app",
});
