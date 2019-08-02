import React, { Component } from 'react';
import ContactPreview from './ContactPreview.js';
import ContactDetalisPage from '../pages/ContactDetailsPage.js';
import contactService from '../services/ContactService.js';

class ContactList extends Component {
  state = { currentUser: null };

  onChooseUser = async id => {
    const currentUser = await contactService.getContactById(id);
    this.setState({ currentUser });
    console.log(this.state.currentUser);
  };

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        {!currentUser && (
          <ul className="flex wrap userList">
            {this.props.contacts.map(user => (
              <ContactPreview
                onChooseUser={this.onChooseUser}
                currentUser={this.state.currentUser}
                key={user._id}
                user={user}
              />
            ))}
          </ul>
        )}
        {currentUser && (
          <ContactDetalisPage
            currentUser={currentUser}
            onClose={() => this.setState({ currentUser: null })}
          />
        )}
      </div>
    );
  }
}

export default ContactList;
