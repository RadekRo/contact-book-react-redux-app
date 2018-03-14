import React, { Component } from 'react';

class EditContactForm extends Component {

    state = {
        contactName: this.props.name,
        contactPhone: this.props.phone,
        contactEmail: this.props.email,
        contactCategory: this.props.categories
    };

    handleChange = ({ target: { name, value } }) => {
        console.log('dupa');
        this.setState({
            [name]: value
        })
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.updateContact(this.props.contactId, {
            ...this.state,
            name: this.state.contactName,
            phone: this.state.contactPhone,
            email: this.state.contactEmail,
            categories: this.state.contactCategory
        })
    };

    renderInput(fieldName) {
        return (
            <input
                name={ fieldName }
                value={ this.state[fieldName] }
                onChange={ this.handleChange }
            />
        )
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={ this.handleSubmit }>

                    { this.renderInput('contactName')}<br/>
                    { this.renderInput('contactPhone')}<br/>
                    { this.renderInput('contactEmail')}<br/>
                    { this.renderInput('contactCategory')}<br/>

                    <button>Update contact</button>
                </form>
            </React.Fragment>
        );
    }
}

export default EditContactForm;