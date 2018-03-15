import React, { Component } from 'react';
import '../css/style.css';

import ContactList from './ContactList';
import AddContactForm from "./AddContactForm";

class App extends Component {

    render() {
        return (

            <React.Fragment>
                <AddContactForm />
                <br/>
                <ContactList />
            </React.Fragment>
        );
    }
}

export default App;