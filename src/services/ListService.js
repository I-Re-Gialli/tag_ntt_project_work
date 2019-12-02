import Api from "./Api.js";

export default {
  fetchStore() {
    return Api().get("stores.json");
  },
  fetchWizard() {
    return Api().get("wizard_config.json");
  }
};
