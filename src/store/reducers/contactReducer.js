import types from '../types';

export default function contactReducer(state = { contacts: [] }, action) {
  switch (action.type) {
    case types.FETCH_CONTACTS:
      return { ...state, contacts: action.data };
    case types.ADD_EDIT_CONTACT:
      return { ...state, editedContact: action.data };
    default:
      return state;
  }
}
