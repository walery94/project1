'use strict';

$(document).ready(function () {

  var phoneAdverters = document.getElementById('phone-adverters');
  var phoneFeedback = document.getElementById('phone-feedback');

  var optionMask = {
    mask: '+{7} (000) 000-00-00',
  };
  if (phoneAdverters) {
    var maskPhoneAdverters = IMask(phoneAdverters, optionMask);
    maskPhoneAdverters.updateValue();
  }
  if (phoneFeedback) {
    var maskPhoneFeedback = IMask(phoneFeedback, optionMask);
    maskPhoneFeedback.updateValue();
  }
});
