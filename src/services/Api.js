import axios from "axios";
import constants from "../constants/costants.js";

const axiosApi = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? constants.DEVELOP_API_URL : "/"
});

export default () => {
  return axiosApi;
};
