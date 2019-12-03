import Api from "./Api.js";

export default {
  getStore() {
    return Api().get("stores.json");
  },
  getWizard() {
    return Api().get("wizard_config.json");
  }
};
