import React from "react";
import "./CardResult.css";
import Button from "./Button.js";
import attivita_1 from "../assets/img/attivita_1.jpg";

class CardResult extends React.Component {
  render() {
    const { results } = this.props;

    const treeResults = [11,5];
    const arrResult = [];

    treeResults.map(treeResult =>
      results.map(res => {
        if (res.id === treeResult) {
          arrResult.push(res);
        }
      })
    );

    const resultMap = arrResult.map(res => (
      <div className="Rectangle"> 
      <div className="cardResult" key={res.id}>
        <h1 className="titleResult">{res.title}</h1>
        <img className="imgResult" src={attivita_1} alt='giardino'></img>
        <p className="paraResult">{res.description}</p>
        <Button
          className={"button"}
          name="ECCO COSA ABBIAMO SCELTO PER TE"
          url={res.url}
        />
      </div>
      </div>
    ));

    return <div>{resultMap}</div>;
  }
}

export default CardResult;
