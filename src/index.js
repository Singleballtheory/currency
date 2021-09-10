import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Service from './service.js';

function getElements(response) {
  let country = $('#country').val();
  if (country === "USD") {
    let USDAmount = Math.round($('#dollarAmount').val() * response.conversion_rates.USD);
    $('.showMoney').html(`This exchange equates to $${USDAmount} dollars, which is exactly what you already have Charlie! You're in America right now!!`);
  }  else if (country === "AED") {
    let AEDAmount = Math.round($('#dollarAmount').val() * response.conversion_rates.AED);
    $('.showMoney').html(`This exchange equates to ${AEDAmount} dirhams.`);
  }  else if (country === "AUD") {
    let AUDAmount =Math.round($('#dollarAmount').val() * response.conversion_rates.AUD);
    $('.showMoney').html(`This exchange equates to ${AUDAmount} Australian dollars.`);
  }  else if (country === "EUR") {
    let EURAmount = Math.round($('#dollarAmount').val() * response.conversion_rates.EUR);
    $('.showMoney').html(`This exchange equates to ${EURAmount} euros.`);
  }  else if (country === "MXN") {
    let MXNAmount = Math.round($('#dollarAmount').val() * response.conversion_rates.MXN);
    $('.showMoney').html(`This exchange equates to ${MXNAmount} pesos.`);
  }  else if (country === "JOB") {
    let JOBAmount = $('#dollarAmount').val() * response.conversion_rates.JOB;
    $('.showMoney').html(`Jobland? You want to go to Jobland, Charlie? Where Jobs grow on Jobbies?! You get ${JOBAmount} dollars, Charlie! That means Not a Number! Nothing! You know why?! Because Jobland doesn't exist, Charlie!!`);
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