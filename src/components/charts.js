import React, { Component } from 'react';
import contactService from '../services/ContactService.js';
import BitCoinService from '../services/BitCoinService.js';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class ContactFilter extends Component {
  state = { confirmedTransChartData: [], marktPriceChartData: [] };

  async componentDidMount() {
    const marketPriceData = await BitCoinService.getMarketPrice();
    const confirmedTransData = await BitCoinService.getConfirmedTrans();
    let marktPriceChartData = [];
    let confirmedTransChartData = [];
    for (let i = 0; i < 100; i++) {
      marktPriceChartData.push(marketPriceData.values[i].y);
      confirmedTransChartData.push(confirmedTransData.values[i].y);
    }
    this.setState({ marktPriceChartData, confirmedTransChartData });
    // this.setState({ confirmedTransChartData });
    console.log(this.state);
  }

  render() {
    return (
      <div className="flex column center layout">
        <h1>Market Price (USD)</h1>
        <Sparklines
          data={this.state.marktPriceChartData}
          limit={300}
          width={1000}
          height={200}
          margin={10}
        >
          <SparklinesLine color="blue" />
        </Sparklines>
        <h1>Confirmed transactions per day</h1>
        <Sparklines
          data={this.state.confirmedTransChartData}
          limit={300}
          width={1000}
          height={200}
          margin={10}
        >
          <SparklinesLine color="red" />
        </Sparklines>
      </div>
    );
  }
}

export default ContactFilter;
