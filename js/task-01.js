const mainList = document.querySelector('#categories');
const mainListItem = mainList.querySelectorAll('.item');

console.log(`Number of categories: ${mainListItem.length}`);

for (const item of mainListItem) {
  console.log(item.querySelector('h2').textContent);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
