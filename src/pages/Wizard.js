import React from "react";
import listServiceStore from "../services/listServiceStore.js";
import listServiceWizard from "../services/listServiceWizard.js";
import Header from "../components/Header.js";
import BreadCrumb from "../components/BreadCrumb.js";
import CardContainer from "../components/CardContainer.js";
import Result from "../components/Result.js";
import "../App.css";

class Wizard extends React.Component {
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
    this.selectChip = this.selectChip.bind(this);
  }

  componentDidMount() {
    listServiceStore.getStore().then(stores => {
      this.setState({
        stores: stores.data
      });
    });

    listServiceWizard.getWizard().then(wizard => {
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

  selectChip(chipIndex) {
    const removedAnswers = this.state.selection.slice(0, chipIndex);
    this.setState({
      activeIndex: chipIndex,
      selection: removedAnswers
    });
  }

  renderCardContainer(currentStep, selectedIndex) {
    if (this.state.completed) {
      return null;
    }

    if (!currentStep) {
      return null;
    }

    return (
      <CardContainer
        answers={currentStep.answers}
        selectCard={this.selectCard}
        question={currentStep.question}
        selectedIndex={selectedIndex}
      ></CardContainer>
    );
  }

  renderWizard() {
    if (this.state.completed) {
      return null;
    }

    const { steps, selection, activeIndex } = this.state;

    const selectedIndex = selection[activeIndex];

    const currentStep = steps[activeIndex];
    const isActive = typeof selectedIndex !== "undefined";
    const activeButton = isActive ? "button" : "button disabled";

    const cardContainer = this.renderCardContainer(currentStep, selectedIndex);

    return (
      <div className="App">
      <div className="App-container">
        <Header />
        <BreadCrumb
          activeIndex={activeIndex}
          selectChip={this.selectChip}
          steps={steps}
        />
        <br />
        {cardContainer}
        <div className="buttonClick">
        <button
          className={activeButton}
          onClick={this.handleContinue}
          disabled={!isActive}
        >
          CONTINUA
        </button>
        </div>
      </div>
      </div>
    );
  }

  renderResult() {
    if (!this.state.completed) {
      return null;
    }

    const { steps, tree, results, selection, activeIndex } = this.state;

    const resultNavigate = listServiceWizard.navigate(
      selection,
      tree,
      steps.length
    );

    return (
      <Result
        activeIndex={activeIndex}
        steps={steps}
        results={results}
        resultNavigate={resultNavigate}
      />
    );
  }

  render() {
    const wizard = this.renderWizard();
    const result = this.renderResult();

    return <div className="App">{wizard || result}</div>;
  }
}

export default Wizard;
