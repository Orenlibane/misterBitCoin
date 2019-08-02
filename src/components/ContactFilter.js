import React, { Component } from 'react';
import contactService from '../services/ContactService.js';

class ContactFilter extends Component {
  render() {
    return (
      <div className="center">
        <input
          type="text"
          placeholder="Search User"
          onChange={this.props.onFilter}
        />
      </div>
    );
  }
}

export default ContactFilter;
