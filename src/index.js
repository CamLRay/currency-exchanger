import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeApi from './js/exchange-service';
import {convertCurrency} from './js/exchange-logic';

async function exchangeApiCall(currency) {
  const data = await ExchangeApi.getRates(currency);
  return data;
}

$("#base-currency").on("submit", async function(e){
  e.preventDefault();
  const baseCurrency = $("#base-currency-select").val();
  $("#currency").empty();
  if(baseCurrency){
    let exchangeRates = await exchangeApiCall(baseCurrency);
    $(".heading").append(`<h2>Last Update: ${exchangeRates["time_last_update_utc"].slice(0, -6)}</h2>`)
    $("#user-currency").text(`${exchangeRates["base_code"]}`);
    Object.keys(exchangeRates["conversion_rates"]).forEach(function(currency){
      $("#currency").append(`<option>${currency}</option>`);
    });
    $("#conversion-form").removeClass("hidden");

    $("#conversion-form").on("change submit", function(e){
      e.preventDefault();
      const value = $("#user-amount").val();
      const exchangeTo = $("#currency").val();
      convertCurrency(exchangeRates, value, exchangeTo);
    });
  } else {
    $(".error-message").text(`Please select a base currency`);
  }
});



// $(document).ready(function(){
//   $(".user-input").text();
// });
