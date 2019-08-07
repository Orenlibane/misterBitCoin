import React, { Component } from 'react';
import contactService from '../services/ContactService.js';
import ContactList from '../components/ContactList.js';
import ContactFilter from '../components/ContactFilter.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getContacts } from '../store/actions/contactActions.js';

// need to make the details cmp appear here with function been sent to the list and then to preview

class ContactPage extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getContacts());
  }

  onFilter = async event => {
    const filterBy = event.target.value;
    const { dispatch } = this.props;
    dispatch(getContacts({ term: filterBy }));
  };

  render() {
    return (
      <div>
        <ContactFilter onFilter={this.onFilter} />
        <Link to={`/Contact/edit`}>
          <button>✎</button>
        </Link>{' '}
        <ContactList />
      </div>
    );
  }
}

export default connect()(ContactPage);
