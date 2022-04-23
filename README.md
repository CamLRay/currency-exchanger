# Currency Exchanger

#### Basic example of utlizing and API for content

#### By Cameron Ray

## Technologies Used

* Node.js v16.14.2
* Node Package Manager
* Eslint
* ExchangeRate-API
* HTML
* Es6
* CSS

## Description
Currency Exchanger utilizes the ExchangeRate-API to allow users to select a currency to exchange from and then check the exchange rate for all available currencies. It also automatically converts the inputted value to the newly selected currency. By selecting the base currency type at the start, the application can make a single API call for the base currency and the conversion currencies can be changed without requiring a new call.

## Setup/Installation Requirements

* Clone the repository
* sign up for a free key at [ExchangeRate-API](https://www.exchangerate-api.com/) by entering your email and pressing the "Get a Free Key!" button make an account and verify your email to get the key.
* You will be taken to the ExchangeRate-API dashboard where you can see your key and the uses left this month.
* Create a .env file in the root of the currency exchanger directroy and add API_KEY={YOURKEYHERE} replacing everything after the equal sign with your api key from ExchangeRate-API.
* install dependencies
```
$ npm install
```
* open the file by running the start script
```
$ npm run start
```

## Known Bugs

* No Known Bugs

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact Information

Copyright (c) _April 2022_ _Cameron Ray_