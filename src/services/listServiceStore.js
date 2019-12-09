import Api from "./Api.js";

export default {
  getStore() {
    return Api().get("stores.json");
  }
};
