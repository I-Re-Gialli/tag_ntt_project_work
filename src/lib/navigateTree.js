import ListService from "../services/ListService.js";

const navigateTree = () => {
  const arr = [0];
  const res = ListService.getWizard().then(res => {
    // const json = JSON.stringify(res.data);
    // console.log(json);
  });

  console.log(res);
};

navigateTree();

export default () => {
  return navigateTree;
};
