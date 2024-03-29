import React from "react";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import CardResult from "./CardResult.js";
import "../style/CardResult.css";

class Result extends React.Component {
  render() {
    const { steps, activeIndex, results, resultNavigate } = this.props;

    return (
      <div>
        <Header />
        <BreadCrumb activeIndex={activeIndex} steps={steps} />
        <div className="lastTitle">
          <h1>Ecco cosa ti aiuterà a svolgere meglio il tuo lavoro!</h1>
        </div>
        <CardResult results={results} resultNavigate={resultNavigate} />
      </div>
    );
  }
}

export default Result;
