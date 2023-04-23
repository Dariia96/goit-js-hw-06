const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



ingredients.forEach((ingredient) => {
  const liIngredient = document.createElement('li');
liIngredient.classList.add("item");
  liIngredient.textContent = ingredient;
const ulIngredients = document.querySelector('ul');
ulIngredients.appendChild(liIngredient);
}, 0);

