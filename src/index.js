import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Service from './service.js';

function getElements(response) {
  let country = $('#country').val();
  if (country === "USD") {
    let convertedAmount = $('#dollarAmount').val() * response.conversion_rates.USD;
    $('.showMoney').html(`The exchange of x dollars is equal to ${convertedAmount}`);
  }  else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#exchangeMoney').click(function() {
    Service.getMoney()
      .then(function(response) {
        getElements(response);
      }).catch(function(){
        ('.showErrors').text('This is an error');
      });
    // const cash = $('#showMoney').val();
    // $('#showMoney').val("");
  });
});

// let request = new XMLHttpRequest();
// const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

// request.onreadystatechange = function() {
//   if (this.readyState === 4 && this.status === 200) {
//     const response = JSON.parse(this.responseText);
//     getElements(response);
//   }
// };

// request.open("GET", url, true);
// request.send();