import React, { useState } from "react";
import Intro from "./intro";
import "./App.css";

const phoneBook = [];

const App = () => {
    const [contacts, setContacts] = useState(phoneBook);
    const [showForm, setShowForm] = useState(false);

    const deleteContact = (contact) => {
        setContacts(
            contacts.filter((object) => object.number !== contact.number)
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var data = new FormData(event.target);
        let formObject = Object.fromEntries(data.entries());
        setContacts(
            [...contacts, formObject].sort((a, b) =>
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
            )
        );
    };

    const Form = () => (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <div class="form-group">
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeHolder="Name"
                        name="name"
                        onChange={(e) => console.log(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeHolder="Number"
                        name="number"
                        onChange={(e) => console.log(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add
                </button>
            </form>
        </div>
    );

    return (
        <div id="main">
            <Intro />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4"></div>

                    <div className="col-md-4">
                        <div className="App">
                            <h2 className="header">PhoneBook</h2>
                            <span
                                style={{
                                    cursor: "pointer",
                                    color: "blue",
                                    textDecoration: "underline",
                                }}
                                onClick={() => setShowForm(!showForm)}
                            >
                                {showForm
                                    ? "Hide Contact Form"
                                    : "Create New Contact"}
                            </span>

                            {showForm && <Form />}

                            {contacts.map((contact) => (
                                <div className="contacts">
                                    <div class="contact-details">
                                        <h5>{contact.name}</h5>
                                        <p>{contact.number}</p>
                                    </div>
                                    <button class="icon-holder">
                                        <i
                                            onClick={() =>
                                                deleteContact(contact)
                                            }
                                            class="delete fa fa-trash"
                                        ></i>
                                    </button>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );
};

export default App;
