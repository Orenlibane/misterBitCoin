import React, { Component } from 'react';
import contactService from '../services/ContactService.js';

class ContactDetalisPage extends Component {
  render() {
    return (
      <div class="full">
        <div className="user-details flex column sub-center ">
          <img
            className="avatar-img"
            src={`https://robohash.org/${this.props.currentUser.name}.png`}
            alt=""
          />
          <ul class="clear-list">
            <li> {this.props.currentUser.email}</li>
            <li> {this.props.currentUser.name}</li>
            <li> {this.props.currentUser.phone}</li>
          </ul>
          <button onClick={this.props.onClose}>Back</button>
        </div>
      </div>
    );
  }
}

export default ContactDetalisPage;
