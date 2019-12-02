import React from "react";
import ListService from "./services/ListService.js";
import logo from "./assets/img/logo.svg";
import Select from "./components/Select.js";
import BreadCrumb from "./components/BreadCrumb.js";
import CardContainer from "./components/CardContainer.js";
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
    ListService.fetchStore().then(stores => {
      this.setState({
        stores: stores.data
      });
    });

    ListService.fetchWizard().then(wizard => {
      this.setState({
        steps: wizard.data.steps
      });
    });
  }
  render() {
    const { steps, activeIndex, stores } = this.state;
    console.log(steps);
    const currentStep = steps[activeIndex];

    const cardContainer = currentStep ? (
      <CardContainer answers={currentStep.answers}></CardContainer>
    ) : null;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-container">
          <BreadCrumb activeIndex={activeIndex} steps={steps}></BreadCrumb>
          <br />
          {cardContainer}
          <div className="button disabled">
            <span>CONTINUA</span>
          </div>
        </div>
        <Select stores={stores} />
      </div>
    );
  }
}

export default App;
