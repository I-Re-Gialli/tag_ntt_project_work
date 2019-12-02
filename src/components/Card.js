import React from "react";
// import urlImage from "../assets/img/";
class Card extends React.Component {
  render() {
    const { answer } = this.props;
    const { image, title, description } = answer;

    return (
      <div className="step-card">
        <img src={require(`../assets/img/${image}`)} alt="img_alt" />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    );
  }
}

export default Card;
