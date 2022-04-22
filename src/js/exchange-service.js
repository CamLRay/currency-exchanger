import $ from 'jquery';
export default class ExchangeApi {
  static async getRates(currency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}?`);
      if (!response.ok) {
        const jsonResponse = await response.json();
        $(".error-message").html(`<h1>Error: ${jsonResponse["error-type"]}</h1>`)
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      console.log(error.message);
      return error.message;
    }
  }
}