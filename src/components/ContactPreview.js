import React, { Component } from 'react';
class ContactPreview extends Component {
  render() {
    return (
      <li
        onClick={() => {
          this.props.onChooseUser(this.props.user._id);
        }}
      >
        <div>{this.props.user.email}</div>
        {this.props.user.name}
      </li>
    );
  }
}

export default ContactPreview;
