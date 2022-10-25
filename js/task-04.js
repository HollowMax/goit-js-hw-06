let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let interfaceCounter = document.querySelector('#value');
decrementBtn.addEventListener('click', () => (interfaceCounter.textContent = --counterValue));
incrementBtn.addEventListener('click', () => (interfaceCounter.textContent = ++counterValue));
