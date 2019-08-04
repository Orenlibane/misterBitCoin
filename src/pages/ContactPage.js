import React, { Component } from 'react';
import contactService from '../services/ContactService.js';
import ContactList from '../components/ContactList.js';
import ContactFilter from '../components/ContactFilter.js';

// need to make the details cmp appear here with function been sent to the list and then to preview

class ContactPage extends Component {
  state = { contacts: [], fiter: '' };

  async componentDidMount() {
    const contacts = await contactService.getContacts();
    this.setState({ contacts });
  }

  onFilter = async event => {
    const filterBy = event.target.value;
    this.setState({ filter: filterBy });
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
