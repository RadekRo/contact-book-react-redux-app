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
            contacts: this.props.contacts.filter(contact => contact.id !== contactId)
        })
    };

    render() {
        const { contacts } = this.props;
        console.log('Propsy App: ', this.props);
        console.log('this: ', this);
        console.log(contacts);
        return (

            <React.Fragment>
                <AddContactForm />
                <br/>
                <ContactList
                    contacts={ contacts }
                    removeContact={ this.removeContact }
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