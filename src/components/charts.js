import React, { Component } from 'react';
import contactService from '../services/ContactService.js';
import BitCoinService from '../services/BitCoinService.js';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class ContactFilter extends Component {
  state = { confirmedTransChartData: [], marktPriceChartData: [] };

  //Should be promise all/2 diffrent functions
  async componentDidMount() {
    const marketPriceData = await BitCoinService.getMarketPrice();
    const confirmedTransData = await BitCoinService.getConfirmedTrans();
    console.log(marketPriceData, confirmedTransData);
    let marktPriceChartData = [];
    let confirmedTransChartData = [];
    for (let i = 0; i < 100; i++) {
      marktPriceChartData.push(marketPriceData.values[i].y);
      confirmedTransChartData.push(confirmedTransData.values[i].y);
    }
    this.setState({ marktPriceChartData, confirmedTransChartData });
  }

  render() {
    return (
      <div className="flex column layout white">
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
