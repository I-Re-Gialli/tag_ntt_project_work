import React from "react";

class Button extends React.Component {
  render() {
    const { className, name, url } = this.props;
    return (
      <button
        className={className}
        onClick={() => window.open(`${url}`, "_blank")}
      >
        <span>{name}</span>
      </button>
    );
  }
}
//att disable use tag button
export default Button;
