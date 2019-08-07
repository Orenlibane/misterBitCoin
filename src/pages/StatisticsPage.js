import React, { Component } from 'react';
import BitCoinService from '../services/BitCoinService.js';
import Charts from '../components/Charts.js';

class StatisticsPage extends Component {
  state = { confirmedTransChartData: [], marktPriceChartData: [] };

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
      <div>
        <Charts> {this.state.confirmedTransChartData}</Charts>
        <Charts> {this.state.confirmedTransChartData}</Charts>
      </div>
    );
  }
  //here i should call 2 charts and send them the data
}

export default StatisticsPage;
