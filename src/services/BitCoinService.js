export default {
  getRate,
  getMarketPrice,
  getConfirmedTrans
};

const axios = require('axios');
let bitCoinChartsData = null;

async function getRate(coins) {
  try {
    const res = await axios.get(
      'https://blockchain.info/tobtc?currency=USD&value=1'
    );
    return res.data;
  } catch (err) {
    if (err.response.status === 401) {
      console.log('401 Error!');
    } else {
    }
  }
}

async function getMarketPrice() {
  try {
    // if (bitCoinChartsData) return;
    const res = await axios.get(
      'https://api.blockchain.info/charts/market-price?format=json&cors=true'
    );
    console.log(res.data);
    bitCoinChartsData = res.data;
    return res.data;
  } catch (err) {
    if (err.response.status === 401) {
      console.log('401 Error!');
    }
  }
}

async function getConfirmedTrans() {
  try {
    const res = await axios.get(
      'https://api.blockchain.info/charts/n-transactions?format=json&cors=true'
    );
    console.log(res.data);
    bitCoinChartsData = res.data;
    return res.data;
  } catch (err) {
    if (err.response.status === 401) {
      console.log('401 Error!');
    }
  }
}
