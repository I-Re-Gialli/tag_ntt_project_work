import React from "react";
import Card from "./Card";
class CardContainer extends React.Component {
  render() {
    const { answers, selectCard, question, selectedIndex } = this.props;

    const classCardsContainer = answers[0].image
      ? "step-cards-container"
      : "step-cards-container-button";

    const cards = answers.map((answer, index) => {
      const onClick = () => {
        selectCard(index);
      };
      return (
        <Card
          key={answer.id}
          answer={answer}
          onClick={onClick}
          image={answer.image}
          selected={index === selectedIndex}
        />
      );
    });
    return (
      <div className="page">
        <h1 className="question">{question}</h1>
        <div className={classCardsContainer}>{cards}</div>
      </div>
    );
  }
}

export default CardContainer;
