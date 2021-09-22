import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.name == "" || this.state.email == "") {
      alert("Please Field Details");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ email: "", name: "" });
    console.log("24", this.props);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <h2 style={{ padding: "20px" }}>Add Contact</h2>

        <div className="ui main container" style={{ marginTop: "10px" }}>
          <form
            className="ui form container"
            style={{ marginTop: "10px" }}
            onSubmit={this.add}
          >
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => this.setState({ name: e.target.value })}
                value={this.state.name}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
            </div>
            <Button primary style={{ marginBottom: "49px" }}>
              Add Contact
            </Button>
            <div>
              <Link to="/">
                <button className="ui button green center">
                  Back To Contact List
                </button>
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddContact;
