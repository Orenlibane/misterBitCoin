import React, { Component } from 'react';
class ContactPreview extends Component {
  render() {
    return (
      <li className="flex sub-center">
        <div className="flex">
          <img
            className="avatar-img"
            src={`https://robohash.org/${this.props.user.name}.png`}
            alt=""
          />
          <h3>{this.props.user.name}</h3>
        </div>
      </li>
    );
  }
}

export default ContactPreview;
