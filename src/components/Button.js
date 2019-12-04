import React from "react";

class Button extends React.Component {
  render() {
    const { className, name, url } = this.props;
    return (
      <div
        className={className}
        onClick={() => window.open(`${url}`, "_blank")}
      >
        <span>{name}</span>
      </div>
    );
  }
}

export default Button;
