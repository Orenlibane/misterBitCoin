import React, { Component } from 'react';
import contactService from '../services/ContactService.js';
import ContactList from '../components/ContactList.js';
import ContactFilter from '../components/ContactFilter.js';

class ContactPage extends Component {
  state = { contacts: [], fiter: '' };

  async componentDidMount() {
    const contacts = await contactService.getContacts();
    this.setState({ contacts });
  }

  onFilter = async event => {
    const filterBy = event.target.value;
    const contacts = await contactService.getContacts({ term: filterBy });
    this.setState({ contacts });
  };

  render() {
    return (
      <div>
        <ContactFilter onFilter={this.onFilter} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default ContactPage;
