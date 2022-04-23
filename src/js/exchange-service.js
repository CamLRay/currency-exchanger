import $ from 'jquery';
export default class ExchangeApi {
  static async getRates(currency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}?`);
      if (response.ok) {
        return response.json();
      } else {
        $(".error-message").html(`<h1>Error: ${response.status} ${response.statusText}</h1>`);
      }
    } catch(error) {
      $(".error-message").html(`<h1>${error.message}</h1>`);
      return error.message;
    }
  }
}