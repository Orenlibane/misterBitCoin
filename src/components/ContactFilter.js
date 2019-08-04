import React, { Component } from 'react';

class ContactFilter extends Component {
  render() {
    return (
      <div className="center">
        <input
          className="filter-input"
          type="text"
          placeholder="Search User"
          onChange={this.props.onFilter}
        />
      </div>
    );
  }
}

export default ContactFilter;
