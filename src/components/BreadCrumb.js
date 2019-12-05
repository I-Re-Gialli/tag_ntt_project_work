import React from "react";
import Chip from "./Chip.js";

class BreadCrumb extends React.Component {
  render() {
    const { steps, activeIndex } = this.props;
    const chips = steps.map((step, index) => {
      return (
        <Chip key={index} title={step.category} active={activeIndex >= index} />
      );
    });
    return <div className="chip-container">{chips}</div>;
  }
}

export default BreadCrumb;
