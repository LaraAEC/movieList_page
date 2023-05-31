import axios from "axios";

export const api = axios.create({
  baseURL: "https://movielist-api-mrqt.onrender.com"
});