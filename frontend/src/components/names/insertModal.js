import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class InsertModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: null,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleInsert = this.handleInsert.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }

  handleInsert() {
    if (this.state.name == null) return;
    fetch("http://localhost:8000/name/insert", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: "",
        });
      });
  }

  handleClose() {
    this.setState({
      show: false,
    });
    this.props.updater();
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Add name
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Insert name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                name="name"
                type="text"
                placeholder="Name"
                value={this.state.name}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleInsert} variant="primary">
              Insert
            </Button>
            <Button onClick={this.handleClose} variant="secondary">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default InsertModal;
