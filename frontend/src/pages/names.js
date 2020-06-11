import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import InsertModal from "../components/names/insertModal";
import DeleteButton from "../components/names/deleteButton";

class Names extends Component {
  constructor(props) {
    super(props);
    this.fetchList = this.fetchList.bind(this);
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList() {
    fetch("http://localhost:8000/name")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          list: data,
        });
      });
  }

  state = {
    list: null,
  };
  render() {
    return (
      <div>
        <h1>Names</h1>
        <Button variant="primary">+ ADD</Button>
        <InsertModal updater={this.fetchList} />
        <hr></hr>
        <Table striped hover bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list === null ? (
              <div>loading...</div>
            ) : (
              this.state.list.data.map((data) => (
                <tr key={data._id}>
                  <td>{data._id}</td>
                  <td>{data.name}</td>
                  <td>
                    <DeleteButton id={data._id} updater={this.fetchList} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Names;
