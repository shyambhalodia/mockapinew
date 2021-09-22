import React from "react";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import user from "../Images/149071.png";
export const ContactCard = (props) => {
  const { name, email, id } = props.contact;
  return (
    <>
      <List.Item>
        <List.Content>
          <img src={user} style={{ height: "40px", width: "40px" }} />
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <List.Header
              style={{
                fontSize: "29px",
                paddingTop: "10px",
                marginTop: "5px",
              }}
              as="a"
            >
              {name}
            </List.Header>
            <List.Description
              style={{
                fontSize: "17px",
                paddingTop: "10px",
                marginTop: "5px",
              }}
              as="a"
            >
              {email}
            </List.Description>
          </Link>
        </List.Content>
      </List.Item>
      <div style={{ padding: "10px" }}>
        <span style={{ paddingRight: "150px" }}>
          <List.Icon
            name="trash alternate outline icon"
            size="large"
            style={{ color: "red" }}
            onClick={() => props.clickHandler(id)}
          ></List.Icon>
          <span
            style={{ color: "red", fontFamily: "cursive", fontSize: "17px" }}
          >
            Delete Contact
          </span>
        </span>

        <Link
          to={{
            pathname: "/editContact",
            state: { contact: props.contact },
          }}
        >
          <List.Icon
            name="edit alternate outline icon"
            size="large"
            style={{ color: "Blue" }}
          ></List.Icon>
          <span
            style={{ color: "blue", fontFamily: "cursive", fontSize: "17px" }}
          >
            Update Contact
          </span>
        </Link>
      </div>
      <hr />
    </>
  );
};
