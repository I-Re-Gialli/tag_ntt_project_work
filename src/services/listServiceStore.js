import api from "./api.js";

export default {
  getStore() {
    return api().get("stores.json");
  }
};
