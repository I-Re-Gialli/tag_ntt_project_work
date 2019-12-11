import Api from "./api.js";

export default {
  getStore() {
    return Api().get("stores.json");
  }
};
