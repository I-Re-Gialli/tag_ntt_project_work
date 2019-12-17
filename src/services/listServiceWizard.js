import api from "./api.js";

export default {
  getWizard() {
    return api().get("wizard_config.json");
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
