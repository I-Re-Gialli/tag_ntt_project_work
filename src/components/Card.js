import React from "react";
// import urlImage from "../assets/img/";
class Card extends React.Component {
  render() {
    const { answer, onClick } = this.props;
    const { image, title, description } = answer;

    return image ? (
      <div className="step-card" onClick={onClick}>
        <img src={require(`../assets/img/${image}`)} alt="img_alt" />
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    ) : (
      <div className="step-card" onClick={onClick}>
        <button>{title}</button>
      </div>
    );
  }
}

export default Card;
