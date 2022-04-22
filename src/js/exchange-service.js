export default class ExchangeAPI {
  static async getRates(currency) {
    try {
      const response = await fetch(`https://v6.echangerate-api.com/vs/${process.env.API_KEY}/latest/${currency}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}