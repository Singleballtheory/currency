import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Service from './service.js';


$(document).ready(function() {
  $('#exchangeMoney').click(function() {
    const cash = $('#showMoney').val();
    $('#showMoney').val("");

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/c10b158a3ffbea4285694a74/latest/USD`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

   function getElements(response) {
     if (response.name) {
       $('.showMoney').html(`The exchange of ${response.name} is equal to ${response.conversion_rates.USD}`);
     }  else {
      $('.showErrors').text(`There was an error: ${response.message}`);
     }
    }
  });
});