import React from "react";
import Card from "./Card";
class CardContainer extends React.Component {
  render() {
    const { answers, selectCard, question } = this.props;

    const cards = answers.map((answer, index) => {
      const onClick = () => {
        selectCard(index);
      };

      return <Card key={answer.id} answer={answer} onClick={onClick} />;
    });
    return (
      <div className="page">
        <h1>{question}</h1>
        <div className="step-cards-container">{cards}</div>
      </div>
    );
  }
}

export default CardContainer;
