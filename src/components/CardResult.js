import React from "react";

import Button from "./Button.js";
class CardResult extends React.Component {
  render() {
    const { results } = this.props;

    const treeResults = [3, 5];
    const arrResult = [];

    treeResults.map(treeResult =>
      results.map(res => {
        if (res.id === treeResult) {
          arrResult.push(res);
        }
      })
    );

    const resultMap = arrResult.map(res => (
      <div className="step-card" key={res.id}>
        <h3>{res.title}</h3>
        <p>{res.description}</p>
        <Button
          className={"button"}
          name="ECCO COSA ABBIAMO SCELTO PER TE"
          url={res.url}
        />
      </div>
    ));

    return <div>{resultMap}</div>;
  }
}

export default CardResult;
