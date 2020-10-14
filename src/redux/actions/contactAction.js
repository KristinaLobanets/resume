import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CONTACT_FILTER,
} from "../constans/contactConstants.js";

const addContact = createAction(ADD_CONTACT, (taskName, taskPhone) => ({
  payload: { contacts: { name: taskName, number: taskPhone, id: uuidv4() } },
}));

const deleteContact = createAction(DELETE_CONTACT);

const searchContact = createAction(CONTACT_FILTER);

// const removeTask = (taskid) => ({
//   type: DELETE_CONTACT,
//   payload: { id: taskid },
// });

export default { addContact, deleteContact, searchContact };
