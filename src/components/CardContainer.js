import React from "react";
import Card from "./Card";
class CardContainer extends React.Component {
  render() {
    const { answers, selectCard } = this.props;

    const cards = answers.map((answer, index) => {
      const onClick = () => {
        selectCard(index);
      };
      return <Card key={answer.id} answer={answer} onClick={onClick} />;
    });
    return <div className="step-cards-container">{cards}</div>;
  }
}

export default CardContainer;
