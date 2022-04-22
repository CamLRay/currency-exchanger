import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeApi from './js/exchange-service';

function convertCurrency (data, value, exchangeTo) {
  const exchangeRate = data[conversion_rates][exchangeTo];
  return value * exchangeRate;
}

async function exchangeApiCall(currency, value, exchangeTo) {
  const data = await ExchangeApi.getRates(currency)
  convertCurrency(data, value, exchangeTo)
}
