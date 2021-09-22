import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import { ContactCard } from "./ContactCard";

function ContactList(props) {
  console.log("7 search Props", props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const inputEl = useRef("");
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    console.log("24 search item ", inputEl.current.value);
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <>
      <div className="main">
        <h2 style={{ padding: "50px", fontFamily: "Circular-Loom" }}>
          Contact List
          <Link to="/addContact">
            <button className="ui button blue right" style={{ margin: "20px" }}>
              Add Contact
            </button>
          </Link>
        </h2>
        <div className="ui search">
          <div className="ui icon input">
            <input
              style={{ marginBottom: "40px" }}
              ref={inputEl}
              type="text"
              placeholder="Search Contact Here"
              className="prompt"
              value={props.term}
              onChange={getSearchTerm}
            />
            <i style={{ marginTop: "-20px" }} className="search icon"></i>
          </div>
        </div>
        <div>
          <List>
            {renderContactList.length > 0
              ? renderContactList
              : "No Contact Founds"}
          </List>
        </div>
      </div>
    </>
  );
}

export default ContactList;
