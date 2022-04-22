import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeApi from './js/exchange-service';
import {convertCurrency} from './js/exchange-logic';

async function exchangeApiCall(currency, value, exchangeTo) {
  const data = await ExchangeApi.getRates(currency);
  convertCurrency(data, value, exchangeTo);
  return data;
}

console.log(`${process.env.API_KEY}`);

$("form").on("submit", async function(e){
  e.preventDefault();
  const value = $("#user-amount").val();
  const currency = $("#currency").val();
  const exchangeTo = "AED";
  if(value && currency && exchangeTo){
    let exchangeObject = await exchangeApiCall(currency, value, exchangeTo);

    console.log(exchangeObject["conversion_rates"]["ALL"]);
  } else {
    console.log("missed if");
  }
});
