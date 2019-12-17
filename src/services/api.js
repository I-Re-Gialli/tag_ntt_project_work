import axios from "axios";
import constants from "../constants/costants.js";

const axiosApi = axios.create({
  baseURL: constants.DEVELOP_API_URL
});

export default () => {
  return axiosApi;
};
