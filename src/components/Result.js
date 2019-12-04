import React from "react";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import CardResult from "./CardResult.js";

class Result extends React.Component {
  render() {
    const { steps, activeIndex, results } = this.props;
    return (
      <div>
        <Header />
        <BreadCrumb activeIndex={activeIndex} steps={steps} />
        <h1>Ecco cosa ti aiuterà a svolgere meglio il tuo lavoro!</h1>
        <CardResult results={results} />
      </div>
    );
  }
}

export default Result;
