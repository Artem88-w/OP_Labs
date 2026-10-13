'use strict';

const phonebook = [
  { name: 'Artem', phone: '+380501112233' },
  { name: 'Olena', phone: '+380672223344' },
  { name: 'Denys', phone: '+380933334455' },
];

const findPhoneByName = (name) => {
  for (const user of phonebook) {
    if (user.name === name) return user.phone;
  }
};


module.exports = { phonebook, findPhoneByName };
