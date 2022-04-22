import $ from 'jquery';

export function convertCurrency (data, value, exchangeTo) {
  if(Object.keys(data["conversion_rates"]).includes(exchangeTo)){
    const exchangeRate = parseFloat(data["conversion_rates"][exchangeTo]);
    let conversion = (parseFloat(value) * exchangeRate).toFixed(2);
    let fullValue = parseFloat(value).toFixed(2);
    $(".output").html(`<h2>${fullValue} ${data["base_code"]} is ${conversion} ${exchangeTo}</h2><h2>Exchange Rate: ${exchangeRate} per ${data["base_code"]}</h2>`);
  } else {
    $(".error-message").text(`${exchangeTo} is not a valid currency or isn't in our database. Please try using ISO 4217 Three Letter Currency Code e.g. "EUR" for Euro.`);
  }
}