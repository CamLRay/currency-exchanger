export default class ExchangeApi {
  static async getRates(currency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/?`);
      if (!response.ok) {
        console.log(response.statusText);
        // throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      console.log(error.message);
      return error.message;
    }
  }
}