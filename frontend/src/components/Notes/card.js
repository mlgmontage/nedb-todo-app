import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card mb-2">
        <div className="card-header">{this.props.title}</div>
        <div className="card-body">
          <p className="card-text">{this.props.note}</p>
        </div>
      </div>
    );
  }
}

export default Card;
