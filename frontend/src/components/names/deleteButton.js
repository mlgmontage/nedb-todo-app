import React, { Component } from "react";
import { Button } from "react-bootstrap";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const id = this.props.id;

    fetch("http://localhost:8000/name/delete", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("deleted");
        this.props.updater();
      });
  }

  render() {
    return (
      <Button onClick={this.handleDelete} variant="warning">
        Delete
      </Button>
    );
  }
}

export default DeleteButton;
