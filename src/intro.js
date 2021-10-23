import React from "react";

const Intro = () => {
    return (
        <div id="intro">
            <h1 class="title"> Simple React PhoneBook Application</h1>
            <div class="description">
                <p>How it works. </p>
                <ul>
                    <li>Add contacts using the contact form</li>
                    <li>Contacts are displayed in alphabetical order</li>
                    <li>Delete contacts by clicking delete icon</li>
                    <li>
                        Note: This project is open source you can use it/add new
                        features.{" "}
                        <a
                            href="https://github.com/hsnmnr/react-phonebook"
                            target="_blank"
                        >
                            Take a look at GitHub repo
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Intro;
