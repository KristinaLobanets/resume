import actionType from "../actions/contactAction";
import { combineReducers } from "redux";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case actionType.addContact.type:
      return [...state, payload.contacts];

    case actionType.deleteContact.type:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case actionType.searchContact.type:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ contacts: contacts, filter: filter });
