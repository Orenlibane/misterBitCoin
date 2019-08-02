import React, { Component } from 'react';
import contactService from '../services/ContactService.js';

class ContactDetalisPage extends Component {
  render() {
    return (
      <div class="layout">
        <button onClick={this.props.onClose}>Back</button>

        <ul class="clear-list user-details">
          <li> {this.props.currentUser.email}</li>
          <li> {this.props.currentUser.name}</li>
          <li> {this.props.currentUser.phone}</li>
        </ul>
      </div>
    );
  }
}

export default ContactDetalisPage;
