import React, { Component } from "react";
import axios from "../axios";
import Card from "../components/Notes/card";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: "",
      note: "",
    };
  }

  componentDidMount() {
    axios.get("/api/notes").then((notes) => {
      console.log(notes.data);
      this.setState({
        notes: notes.data,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title: this.state.title,
      note: this.state.note,
    };

    axios
      .post("/api/notes", body)
      .then((response) => {
        const inserted = response.data;
        console.log(inserted);
        this.setState({
          notes: [inserted, ...this.state.notes],
          title: "",
          note: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>+Note</h1>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input
              name="title"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="note">note</label>
            <input
              name="note"
              id="note"
              onChange={this.handleChange}
              value={this.state.note}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
        {this.state.notes.map((note) => {
          return <Card key={note._id} title={note.title} note={note.note} />;
        })}
      </div>
    );
  }
}

export default Notes;
