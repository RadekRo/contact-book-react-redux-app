import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggleEditContactButton from './ToggleEditContactButton';

class ContactList extends Component {

    handleRemoveClick = event => {
        const contactId = event.target.dataset.contactId;
        this.props.removeContact(contactId)
    };

    render() {
        console.log('propsy ContactList: ', this.props);
        const { contacts } = this.props;

        return (
            <React.Fragment>
                <strong>Contact List:</strong>
                <ul>
                    { contacts.map(contact => {

                        let contactDisplay = contact.categories.replace(/\s/g,'').split(',');

                        for (let i=0; i<contactDisplay.length; i++){
                            contactDisplay[i]='['+contactDisplay[i]+']';
                        }

                        contactDisplay = contactDisplay.join(', ');

                        return (
                            <li key={ contact.id }>
                                <strong>{ contact.name }</strong><br/>
                                { contact.phone }, { contact.email }<br/>
                                { contactDisplay }<br/>

                                <button
                                    onClick={ this.handleRemoveClick }
                                    data-contact-id={ contact.id }>
                                    remove
                                </button>

                                <ToggleEditContactButton
                                    contact={ contact }
                                    updateContact={ this.props.updateContact }
                                />

                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        );

    }
}

export default connect()(ContactList);