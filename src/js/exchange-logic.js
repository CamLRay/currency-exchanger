import $ from 'jquery';

export function convertCurrency (data, value, exchangeTo) {
  if(Object.keys(data["conversion_rates"]).includes(exchangeTo)){
    const exchangeRate = parseFloat(data["conversion_rates"][exchangeTo]);
    let conversion = parseFloat(value) * exchangeRate;
    $("h1").text(`${value} ${data["base_code"]} is ${conversion}${exchangeTo}`);
  } else {
    $("h1").text(`${exchangeTo} is not a valid currency or isn't in our database. Please try using ISO 4217 Three Letter Currency Code e.g. "EUR" for Euro.`);
  }
}