import React from "react";
import user from "../Images/download.png";
import { Link } from "react-router-dom";

export const ContactDetails = (props) => {
  console.log("6", props);
  const { name, email } = props.location.state.contact;
  return (
    <div>
      <div
        className="main"
        style={{
          margin: "100px",
          position: "fixed",
          left: "50%",
          width: "400px",
          marginLeft: "-200px",
        }}
      >
        <div className="ui card centered">
          <div className="image">
            <img src={user} alt="No Images" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="description">{email}</div>
          </div>
        </div>
        <div className="center-div">
          <Link to="/">
            <button className="ui button blue center">
              Back To Contact List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
