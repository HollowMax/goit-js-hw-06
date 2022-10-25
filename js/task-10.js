function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

const createBoxes = function (amount) {
  let elString = '';
  for (let i = 0; i < amount; i++) {
    elString += `<div style="height:${30 + 10 * i}px; width:${
      30 + 10 * i
    }px; background-color:${getRandomHexColor()}"></div>`;
  }
  return elString;
};

btnCreate.addEventListener('click', () => (boxes.innerHTML = createBoxes(input.value)));

btnDestroy.addEventListener('click', () => (boxes.innerHTML = ''));
