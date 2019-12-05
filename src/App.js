import React from "react";
import ListService from "./services/ListService.js";
import Header from "./components/Header.js";
import Select from "./components/Select.js";
import BreadCrumb from "./components/BreadCrumb.js";
import CardContainer from "./components/CardContainer.js";
import Result from "./components/Result.js";
// import navigateTree from "./lib/navigateTree.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      steps: [],
      tree: {},
      results: [],
      selection: [],
      activeIndex: 0,
      completed: false
    };
    this.handleContinue = this.handleContinue.bind(this);
    this.selectCard = this.selectCard.bind(this);
  }

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

  handleContinue() {
    const newActiveIndex = this.state.activeIndex + 1;
    const completed = newActiveIndex >= this.state.steps.length;
    this.setState({ activeIndex: this.state.activeIndex + 1, completed });
  }

  selectCard(cardIndex) {
    const { activeIndex, selection } = this.state;
    selection[activeIndex] = cardIndex;
    this.setState({ selection });
  }

  render() {
    const {
      steps,
      activeIndex,
      stores,
      tree,
      selection,
      results,
      completed
    } = this.state;

    const resultNavigate = this.navigate(selection, tree, steps.length);

    const currentStep = steps[activeIndex];
    const cardContainer =
      currentStep && !completed ? (
        <CardContainer
          answers={currentStep.answers}
          selectCard={this.selectCard}
        ></CardContainer>
      ) : null;

    const resultsComponent = completed ? (
      <Result
        activeIndex={activeIndex}
        steps={steps}
        results={results}
        resultNavigate={resultNavigate}
      />
    ) : null;
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <BreadCrumb activeIndex={activeIndex} steps={steps}></BreadCrumb>
          <br />
          {cardContainer}
          <button className="button" onClick={this.handleContinue}>
            CONTINUA
          </button>
        </div>
        <Select stores={stores} />
        {resultsComponent}
      </div>
    );
  }
}

export default App;
