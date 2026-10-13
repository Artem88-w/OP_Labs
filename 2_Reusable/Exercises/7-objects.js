'use strict';


const fn = () => {
  const user = { name: 'Artem' };
  let guest = { name: 'Olena' };

  user.name = 'Artem';
  guest.name = 'Olena';
  guest = { name: 'Denys' };

  return { user, guest };
};


module.exports = { fn };
