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

$("form").on("submit", async function(e){
  e.preventDefault();
  const value = $("#user-amount").val();
  const currency = "USD";
  const exchangeTo = $("#currency").val();
  if(value && currency && exchangeTo){
    exchangeApiCall(currency, value, exchangeTo);
  } else {
    $("h1").text(`Please Enter a number and select a currency`);
  }
});



// $(document).ready(function(){
//   $(".user-input").text();
// });
