'use strict';

/**
 * Validation for email Input Plugin
 *
 * @param {object} input - inputs in this plugin's instance and their values as {string}
 * @param {object} input.target - the triggering input's name and value as {string}
 * @param {string} input.target.name - the triggering input's name
 * @param {string|bool} input.target.value - the triggering input's value
 * @param {object} input.all - all inputs in this plugin's instance
 * @param {string|bool} input.all.email - value of input email
 *
 * @returns {bool|string} true or a string with the text describing the error
 *
 * @module emailValidation
 */

const isEmail = require('validator/lib/isEmail');

module.exports = function emailValidation(input) {
  isEmail(input.target.value);

  if (!isEmail(input.target.value)) {
    return 'Not a valid e-mail address.';
  }

  return true;
};
