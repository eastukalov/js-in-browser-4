'use strict';

const contacts = JSON.parse(loadContacts());
const listContacts = document.querySelector('.contacts-list');

for(const el of listContacts.getElementsByTagName('li')) {
  el.remove();
}

contacts.forEach(el => {
  const li = document.createElement('li');
  li.dataset.email = el.email;
  li.dataset.phone = el.phone;
  li.innerHTML = '<stong>' + el.name + '</strong>';
  listContacts.appendChild(li);
});

