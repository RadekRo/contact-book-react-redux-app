import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/style.css';

import ContactList from './ContactList';
import AddContactForm from "./AddContactForm";

class App extends Component {

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

    removeContact = contactId => {
        this.setState({
            contacts: this.props.contacts.filter(contact => contact.id !== contactId)
        })
    };

    render() {
        const { contacts } = this.props;
        return (

            <React.Fragment>
                <AddContactForm />
                <br/>
                <ContactList
                    contacts={ contacts }
                    updateContact={ this.updateContact }
                />
            </React.Fragment>
        );
    }
}

export default connect(

    state => ({
    contacts: state.contacts
    })

)(App);