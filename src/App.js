import React from "react";
import ListService from "./services/ListService.js";
import Header from "./components/Header.js";
import Select from "./components/Select.js";
import BreadCrumb from "./components/BreadCrumb.js";
import CardContainer from "./components/CardContainer.js";
import Button from "./components/Button.js";
import Result from "./components/Result.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      steps: [],
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
        steps: wizard.data.steps
      });
    });
  }
  render() {
    const { steps, activeIndex, stores } = this.state;
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
          <Button name="CONTINUA" />
        </div>
        <Select stores={stores} />
        <Result activeIndex={activeIndex} steps={steps} />
      </div>
    );
  }
}

export default App;
