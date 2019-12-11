import React from "react";
import "../style/Card.css";
// import urlImage from "../assets/img/";
class Card extends React.Component {
  render() {
    const { answer, onClick, image, selected } = this.props;
    const { title, description } = answer;
    const classNameImage = selected ? "step-card blur" : "step-card";
    const classNameButton = selected ? "stepCardButton blur" : "stepCardButton";
    return image ? (
      <div className="step-card" onClick={onClick}>
        <img
          className={classNameImage}
          src={require(`../assets/img/${image}`)}
          alt="img_alt"
        />
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    ) : (
      <div className="step-card" onClick={onClick}>
        <button className={classNameButton}>{title}</button>
      </div>
    );
  }
}

export default Card;
