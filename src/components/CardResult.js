import React from "react";
import "./CardResult.css";
import attivita_1 from "../assets/img/attivita_1.jpg";

class CardResult extends React.Component {
  render() {
    const { results, resultNavigate } = this.props;

    const selectedResults = results.filter(r => {
      if (!resultNavigate) {
        return false;
      }
      return resultNavigate.includes(r.id);
    });

    const resultMap = selectedResults.map(res => (
      <div className="Rectangle" key={res.id}>
        <div className="cardResult" key={res.id}>
          <h2 className="titleResult">{res.title}</h2>
          <img className="imgResult" src={attivita_1} alt="giardino"></img>
          <p className="paraResult">{res.description}</p>
          <a className="button" href={res.url}>
            ECCO COSA ABBIAMO SCELTO PER TE
          </a>
        </div>
      </div>
    ));

    return <div>{resultMap}</div>;
  }
}

export default CardResult;
