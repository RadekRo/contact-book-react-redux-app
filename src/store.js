import { createStore } from 'redux';

const initialState = {
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

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: state.contacts.concat({
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
                contacts: state.contacts.filter(contact => contact.id !== action.removedContactId)
            };

        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(
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

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log('zmiana', store.getState());
    });
export default store;