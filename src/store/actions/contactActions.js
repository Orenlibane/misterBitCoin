import types from '../types';
import ContactService from '../../services/ContactService';

export const fetchData = (data, type) => {
  return {
    type,
    data
  };
};

export const getContacts = (term = '') => {
  return dispatch => {
    return ContactService.getContacts(term)
      .then(response => {
        dispatch(fetchData(response, types.FETCH_CONTACTS));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const removeContacts = id => {
  return dispatch => {
    return ContactService.deleteContact(id)
      .then(response => {})
      .catch(error => {
        throw error;
      });
  };
};

export const saveContact = editContact => {
  return dispatch => {
    return ContactService.saveContact(editContact)
      .then(response => {
        dispatch(fetchData(response, types.ADD_EDIT_CONTACT));
      })
      .catch(error => {
        throw error;
      });
  };
};
