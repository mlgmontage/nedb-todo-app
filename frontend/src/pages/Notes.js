import React, { Component } from "react";
import axios from "../axios";
import Card from "../components/card";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
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

  render() {
    return (
      <div>
        <h1>Notes</h1>
        {this.state.notes.map((note) => {
          return <Card key={note._id} title={note.title} note={note.note} />;
        })}
      </div>
    );
  }
}

export default Notes;
