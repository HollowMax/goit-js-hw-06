const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const liArr = [];
for (const ingridient of ingredients) {
  const el = document.createElement('li');
  el.textContent = ingridient;
  el.classList.add('item');
  liArr.push(el);
}
const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...liArr);
