import React, { Component } from 'react';
import BitCoinService from '../services/BitCoinService.js';
import UserService from '../services/UserService.js';

class HomePage extends Component {
  state = { BitCoinRate: null, loggedUser: { name: null } };

  async componentDidMount() {
    const BitCoinRate = await BitCoinService.getRate();
    const loggedUser = UserService.getUser();
    this.setState({ BitCoinRate });
    this.setState({ loggedUser });
  }

  render() {
    return (
      <div className="full column white center">
        <h1>Hello {this.state.loggedUser.name}! </h1>
        <ul className="clear-list">
          <li>Coins: 💰{this.state.loggedUser.coins} </li>
          <li>BTC: ₿{this.state.BitCoinRate} </li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
