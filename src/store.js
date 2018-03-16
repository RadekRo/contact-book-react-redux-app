import { createStore, combineReducers } from 'redux';
import contacts from './state/contacts';

const reducer = combineReducers({
    contacts
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;