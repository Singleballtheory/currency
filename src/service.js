export default class Service {
  static getMoney(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/c10b158a3ffbea4285694a74/latest/USD`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
  }
}