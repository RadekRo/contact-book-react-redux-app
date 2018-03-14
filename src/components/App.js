import React, { Component } from 'react';
import '../css/style.css';

import ContactList from './ContactList';
import AddContactForm from "./AddContactForm";

class App extends Component {

    state = {
        contacts: [
            {
                id: '1',
                name: 'Ann Arrante',
                phone: '234 324 345',
                email: 'anna@aol.com',
                categories: 'work, family'
            },
            {
                id: '2',
                name: 'Monica Pascale',
                phone: '454 324 345',
                email: 'monicap@gmail.com',
                categories: 'family'
            },
            {
                id: '3',
                name: 'Jessica Hudson',
                phone: '454 333 345',
                email: 'jessica333@gmail.com',
                categories: 'family'
            }
        ]
    };

    updateContact = (contactId, updatedContact) => {
        this.setState({
            contacts: this.state.contacts.map(
                contact =>
                    contact.id !== contactId
                        ? contact
                        : {
                                    ...contact,
                                    ...updatedContact
                                }
            )
        })
    };

    addContact = ({ contactName, contactPhone, contactEmail, contactCategory }) => {
        this.setState({
            contacts: this.state.contacts.concat({
                id: Date.now().toString(32),
                name: contactName,
                phone: contactPhone,
                email: contactEmail,
                categories: contactCategory
            })
        })
    };

    removeContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== contactId)
        })
    }

    render() {
        return (
            <React.Fragment>
                <AddContactForm addContact={ this.addContact } />
                <br/>
                <ContactList
                    contacts={ this.state.contacts }
                    removeContact={ this.removeContact }
                    updateContact={ this.updateContact }
                />
            </React.Fragment>
        );
    }
}

export default App;