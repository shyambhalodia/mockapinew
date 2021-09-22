import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class EditContact extends Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }

  edit = (e) => {
    e.preventDefault();
    if (this.state.name == "" || this.state.email == "") {
      alert("Please Field Details");
      return;
    }
    this.props.editContactHandler(this.state);
    this.setState({ email: "", name: "" });
    console.log("24", this.props);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <h2 style={{ padding: "20px" }}>Edit Contact</h2>

        <div className="ui main container" style={{ marginTop: "10px" }}>
          <form
            className="ui form container"
            style={{ marginTop: "10px" }}
            onSubmit={this.edit}
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
              Update Contact
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

export default EditContact;
