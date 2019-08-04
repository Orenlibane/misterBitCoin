import React, { Component } from 'react';
class ContactPreview extends Component {
  selectContact = () => {
    this.props.onChooseUser(this.props.user._id);
  };

  render() {
    return (
      <li onClick={this.selectContact}>
        <div className="user-buttons">
          <button>✎</button>
          <button>🗑️</button>
        </div>
        <img
          className="avatar-img"
          src={`https://robohash.org/${this.props.user.name}.png`}
          alt=""
        />
        <div>{this.props.user.email}</div>
        {this.props.user.name}
      </li>
    );
  }
}

export default ContactPreview;
