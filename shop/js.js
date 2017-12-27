'use strict';

const buttons = document.querySelectorAll('button.add');
const price = document.getElementById('cart-total-price');
const count = document.getElementById('cart-count');

for(const button of buttons) {
  button.addEventListener('click', event => {
    count.innerHTML = Number(count.innerHTML) + 1;
    price.innerHTML = getPriceFormatted(Number(price.innerHTML.replace(' ', '')) + Number(event.currentTarget.dataset.price));
  })
}
