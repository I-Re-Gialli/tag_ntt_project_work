import React from "react";

class Button extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="button disabled">
        <span>{name}</span>
      </div>
    );
  }
}

export default Button;
