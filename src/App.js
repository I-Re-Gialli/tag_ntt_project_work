import React from "react";
import ListService from "./services/ListService.js";
import Header from "./components/Header.js";
import Select from "./components/Select.js";
import BreadCrumb from "./components/BreadCrumb.js";
import CardContainer from "./components/CardContainer.js";
import Button from "./components/Button.js";
import Result from "./components/Result.js";
// import navigateTree from "./lib/navigateTree.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      steps: [],
      tree: [],
      results: [],
      activeIndex: 1
    };
  }

  componentDidMount() {
    ListService.getStore().then(stores => {
      this.setState({
        stores: stores.data
      });
    });

    ListService.getWizard().then(wizard => {
      this.setState({
        steps: wizard.data.steps,
        tree: wizard.data.tree,
        results: wizard.data.results
      });
    });
  }

  render() {
    const { steps, activeIndex, stores, results } = this.state;

    const currentStep = steps[activeIndex];
    const cardContainer = currentStep ? (
      <CardContainer answers={currentStep.answers}></CardContainer>
    ) : null;

    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <BreadCrumb activeIndex={activeIndex} steps={steps}></BreadCrumb>
          <br />
          {cardContainer}
          <Button className="button disabled" name="CONTINUA" />
        </div>
        <Select stores={stores} />
        <Result activeIndex={activeIndex} steps={steps} results={results} />
      </div>
    );
  }
}

export default App;
