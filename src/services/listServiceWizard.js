import api from "./api.js";
import axios from "axios";
export default {
  getWizard() {
    return api().get("wizard_config.json");
  },
  getWizardModified() {
    return axios
      .get("http://www.mocky.io/v2/5df114db31000055008f0dd4")
      .then(res => res);
  },
  navigate(selection, tree, numberOfSteps) {
    if (numberOfSteps <= 0) {
      return undefined;
    }

    if (!tree) {
      return undefined;
    }

    if (!tree.children) {
      return undefined;
    }

    if (!selection) {
      return undefined;
    }

    if (selection.length < numberOfSteps) {
      return undefined;
    }

    const lastElement = selection.reduce((acc, currentSelection) => {
      if (!acc) {
        return acc;
      }
      return acc.children[currentSelection];
    }, tree);

    if (!lastElement) {
      return undefined;
    }

    return lastElement.results;
  }
};
