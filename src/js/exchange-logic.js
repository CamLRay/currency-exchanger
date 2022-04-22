import $ from 'jquery';

export function convertCurrency (data, value, exchangeTo) {
  const exchangeRate = parseFloat(data["conversion_rates"][exchangeTo]);
  console.log(parseFloat(value) * exchangeRate);
  let conversion = parseFloat(value) * exchangeRate;
  $("h1").text(`${value} ${data["base_code"]} is ${conversion}${exchangeTo}`);
}