import React from "react";
import Card from "./Card";
class CardContainer extends React.Component {
  render() {
    const { answers } = this.props;
    const cards = answers.map(answer => {
      return <Card key={answer.id} answer={answer} />;
    });
    return <div className="step-cards-container">{cards}</div>;
  }
}

export default CardContainer;
