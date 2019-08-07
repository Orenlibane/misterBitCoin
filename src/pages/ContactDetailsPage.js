import React, { Component } from 'react';
import contactService from '../services/ContactService.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeContacts } from '../store/actions/contactActions.js';

class ContactDetalisPage extends Component {
  state = { currentUser: '' };

  async componentDidMount() {
    let currentUser = await contactService.getContactById(
      this.props.match.params.id
    );
    this.setState({ currentUser });
  }

  deleteUser = async () => {
    const { dispatch } = this.props;
    dispatch(removeContacts(this.state.currentUser._id));
  };

  render() {
    return (
      <div className="full">
        <div className="user-details flex column sub-center ">
          <img
            className="avatar-img"
            src={`https://robohash.org/${this.state.currentUser.name}.png`}
            alt=""
          />
          <ul className="clear-list">
            <li> {this.state.currentUser.email}</li>
            <li> {this.state.currentUser.name}</li>
            <li> {this.state.currentUser.phone}</li>
          </ul>
          <div>
            <Link to={`/Contact/edit/${this.state.currentUser._id}`}>
              <button>✎</button>
            </Link>
            <Link to="/ContactPage">
              <button onClick={this.deleteUser}>🗑️</button>
            </Link>
          </div>
          <Link to="/ContactPage">
            <button>Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect()(ContactDetalisPage);
