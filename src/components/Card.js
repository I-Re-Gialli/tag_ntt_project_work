import React from "react";
import "../style/Card.css";
// import urlImage from "../assets/img/";
class Card extends React.Component {
  render() {
    const { answer, onClick, image, selected } = this.props;
    const { title, description } = answer;
    const classNameImage = selected ? "step-card blur" : "step-card";
    const classNameIcon = selected ? "fa fa-check-circle fa-4x" : ''
    const classNameButton = selected ? "stepCardButton focus" : "stepCardButton";
    
    return image ? (
      <div className="step-card" onClick={onClick}>
         <div className="iconClick">
        <img
        className={classNameImage}
          src={require(`../assets/img/${image}`)}
          alt="img_alt"
        /><i className={classNameIcon}></i>
        </div>
      
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
