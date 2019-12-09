import React from "react";
import listServiceStore from "./services/listServiceStore.js";
import listServiceWizard from "./services/listServiceWizard.js";
import Header from "./components/Header.js";
import BreadCrumb from "./components/BreadCrumb.js";
import CardContainer from "./components/CardContainer.js";
import Result from "./components/Result.js";
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

  render() {
    const {
      steps,
      tree,
      results,
      selection,
      activeIndex,
      completed
    } = this.state;

    const resultNavigate = listServiceWizard.navigate(
      selection,
      tree,
      steps.length
    );

    const buttonActive = selection[activeIndex];
    const isActive = typeof buttonActive !== "undefined";
    const activeButton = isActive ? "button" : "button disabled";

    const currentStep = steps[activeIndex];

    const cardContainer =
      currentStep && !completed ? (
        <CardContainer
          answers={currentStep.answers}
          selectCard={this.selectCard}
          question={currentStep.question}
        ></CardContainer>
      ) : null;

    const survey =
      currentStep && !completed ? (
        <div className="App-container">
          <Header />
          <BreadCrumb activeIndex={activeIndex} steps={steps}></BreadCrumb>
          <br />
          {cardContainer}
          <button
            className={activeButton}
            onClick={this.handleContinue}
            disabled={!isActive}
          >
            CONTINUA
          </button>
        </div>
      ) : (
        <Result
          activeIndex={activeIndex}
          steps={steps}
          results={results}
          resultNavigate={resultNavigate}
        />
      );
    return <div className="App">{survey}</div>;
  }
}

export default App;
