import AddContact from "./AddContact";
import "./App.css";
import { Header } from "./Header";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";
import { ContactDetails } from "./ContactDetails";
import api from "../api/Contacts";
import EditContact from "./EditContact";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [serachResult, setserachResult] = useState([]);

  // Featch the data from json - GET Call
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  // Add Contact with POST Call
  const addContactHandler = async (contact) => {
    console.log("25 Appjs Object", contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setcontacts([...contacts, response.data]);
  };

  //Update (edit) Contact with Put Call

  const editContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    console.log("37 updateData ", response.data);
    const { id, email, name } = response.data;
    setcontacts(
      contacts.map((contact) => {
        return contact.id === id
          ? {
              ...response.data,
            }
          : contact;
      })
    );
  };

  // Delete Contact with Delete Call
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setcontacts(newContactList);
  };

  // For Search Functionality

  const searchHandler = (searchTerm) => {
    console.log("63 searchTem ContactList to app JS", searchTerm);
    setsearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setserachResult(newContactList);
    } else {
      setserachResult(contacts);
    }
  };

  useEffect(() => {
    // const retriveDataFromLocalStorage = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // console.log("37", retriveDataFromLocalStorage);
    // if (retriveDataFromLocalStorage) {
    //   setcontacts(retriveDataFromLocalStorage);
    // }

    const getAllContacts = async () => {
      const allContact = await retriveContacts();
      if (allContact) setcontacts(allContact);
    };

    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={searchTerm.length < 1 ? contacts : serachResult}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/addContact"
            exact
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            path="/editContact"
            exact
            render={(props) => (
              <EditContact {...props} editContactHandler={editContactHandler} />
            )}
          />

          <Route path="/contact/:id" component={ContactDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
