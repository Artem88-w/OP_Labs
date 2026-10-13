'use strict';


const phonebook = {
  Artem: '+380501112233',
  Olena: '+380672223344',
  Denys: '+380933334455',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
