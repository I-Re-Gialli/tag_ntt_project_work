import React from "react";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import Button from "./Button.js";

class Result extends React.Component {
  render() {
    const { steps, activeIndex } = this.props;
    return (
      <div>
        <Header />
        <BreadCrumb activeIndex={activeIndex} steps={steps} />
        <h1>Ecco cosa ti aiuterà a svolgere meglio il tuo lavoro!</h1>
        <Button name="ECCO COSA ABBIAMO SCELTO PER TE" />
      </div>
    );
  }
}

export default Result;
