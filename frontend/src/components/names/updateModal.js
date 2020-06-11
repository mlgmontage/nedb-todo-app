import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class UpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: null,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadData = this.loadData.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.loadData();
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

  loadData() {
    const id = this.props.id;
    fetch(`http://localhost:8000/name/get/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          name: data.data.name,
        });
      });
  }

  handleUpdate() {
    if (this.state.name == null) return;
    const id = this.props.id;
    fetch("http://localhost:8000/name/update", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        id: id,
        name: this.state.name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: null,
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
          Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
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
            <Button onClick={this.handleUpdate} variant="primary">
              Save
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

export default UpdateModal;
