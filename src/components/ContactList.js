import React, { Component } from 'react';
import ContactPreview from './ContactPreview.js';
import ContactDetalisPage from '../pages/ContactDetailsPage.js';
import contactService from '../services/ContactService.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ContactList extends Component {
  state = { currentUser: null };

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <ul className="flex wrap userList">
          {this.props.contacts.map(user => (
            <Link key={user._id} to={`/Contact/${user._id}`}>
              <ContactPreview
                currentUser={this.state.currentUser}
                key={user._id}
                user={user}
              />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ contactReducer }) => {
  const { contacts } = contactReducer;
  return {
    contacts
  };
};

export default connect(mapStateToProps)(ContactList);
