'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rawobj = {};
  const splittedobj = sourceString.split(';');

  for (let i = 0; i < splittedobj.length; i++) {
    const newItem = splittedobj[i].trim();

    if (!newItem) {
      continue;
    }

    const arraynew = newItem.split(':');

    const keyofarray = arraynew[0];
    const valueofarray = arraynew[1];

    if (valueofarray === undefined) {
      continue;
    }

    const preparedkey = keyofarray.trim();

    const preparedvalue = valueofarray.trim().replace(/;$/, '');

    rawobj[preparedkey] = preparedvalue;
  }

  return rawobj;
}

module.exports = convertToObject;
