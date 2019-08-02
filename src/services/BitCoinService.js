export default {
  getRate
  // getMarketPrice()
};

const axios = require('axios');

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

// function getMarketPrice(),
