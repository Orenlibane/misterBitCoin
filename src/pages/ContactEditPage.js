import React, { Component } from 'react';
import contactService from '../services/ContactService.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveContact } from '../store/actions/contactActions.js';

class ContactEditPage extends Component {
  state = { currentUser: { name: '', email: '', phone: '' } };

  async componentDidMount() {
    if (!this.props.match.params.id) return;
    let currentUser = await contactService.getContactById(
      this.props.match.params.id
    );
    this.setState({ currentUser });
  }

  handleChange = e => {
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async ev => {
    ev.preventDefault();
    const { dispatch } = this.props;
    dispatch(saveContact(this.state.currentUser));
    // await contactService.saveContact(this.state.currentUser);
    const { history } = this.props;
    history.push('/ContactPage');
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
          <form onSubmit={this.handleSubmit}>
            <ul className="clear-list flex column">
              Name:{' '}
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.currentUser.name}
              />
              Email:{' '}
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.currentUser.email}
              />
              Phone:{' '}
              <input
                type="text"
                name="phone"
                onChange={this.handleChange}
                value={this.state.currentUser.phone}
              />
            </ul>
            <button>SAVE</button>
          </form>
          <div>
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

export default connect()(ContactEditPage);
