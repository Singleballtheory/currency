import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Service from './service.js';

function getElements(response) {
  let country = $('#country').val();
  if (country === "USD") {
    let USDAmount = $('#dollarAmount').val() * response.conversion_rates.USD;
    $('.showMoney').html(`This exchange equates to $${USDAmount} dollars, which is exactly what you already have Charlie!`);
  }  else if (country === "AED") {
    let AEDAmount = $('#dollarAmount').val() * response.conversion_rates.AED;
    $('.showMoney').html(`This exchange equates to ${AEDAmount} dirhams.`);
  }  else if (country === "AUD") {
    let AUDAmount = $('#dollarAmount').val() * response.conversion_rates.AUD;
    $('.showMoney').html(`This exchange equates to ${AUDAmount} Australian dollars.`);
  }  else if (country === "EUR") {
    let EURAmount = $('#dollarAmount').val() * response.conversion_rates.EUR;
    $('.showMoney').html(`This exchange equates to ${EURAmount} euros.`);
  }  else if (country === "MXN") {
    let MXNAmount = $('#dollarAmount').val() * response.conversion_rates.MXN;
    $('.showMoney').html(`This exchange equates to ${MXNAmount} pesos.`);
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
  });
});