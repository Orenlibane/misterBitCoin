import React, { Component } from 'react';
import contactService from '../services/ContactService.js';
import BitCoinService from '../services/BitCoinService.js';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class ContactFilter extends Component {
  render() {
    return (
      <div className="flex column layout white">
        <Sparklines
          data={this.props.data}
          limit={300}
          width={1000}
          height={200}
          margin={10}
        >
          <SparklinesLine color="blue" />
        </Sparklines>
      </div>
    );
  }
}

export default ContactFilter;
