const initialState = {
    data: [
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
            categories: 'family, friends'
        }
    ]
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case 'ADD_CONTACT':
            return {
                ...state,
                    data: state.data.concat({
                        id: Date.now().toString(32),
                        name: action.contactName,
                        phone: action.contactPhone,
                        email: action.contactEmail,
                        categories: action.contactCategory
                    })
            };

        case 'REMOVE_CONTACT':
            return {
                ...state,
                data: state.data.filter(contact => contact.id !== action.removedContactId)
            };

        case 'UPDATE_CONTACT':
            return {
                ...state,
                data: state.data.map(
                    contact =>
                        contact.id !== action.updatedContactId
                            ? contact
                            : {
                                ...contact,
                                ...action.updatedContact
                            }
                )
            };

        default:
            return state
    }
};