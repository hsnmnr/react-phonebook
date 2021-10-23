import React, { useState } from "react";
import Intro from "./intro";
import "./App.css";

const phoneBook = [
    { name: "Mashood Ali", number: "+923318822203" },
    { name: "Abdul Rehman", number: "+923234044700" },
];

const App = () => {
    const [contacts, setContacts] = useState(phoneBook);
    const [showForm, setShowForm] = useState(false);

    const Form = () => (
        <div className="container">
            <form className="form">
                <div class="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeHolder="Name"
                    />
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeHolder="Number"
                    />
                </div>
                <button type="button" className="btn btn-primary">
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
                                        <i class="delete fa fa-trash"></i>
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
