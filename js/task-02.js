const ingrList = document.querySelector('#ingredients')

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newItems = ingredients.map((item) => {
    const newItem = document.createElement('li');
    newItem.textContent = item;

    return newItem;
})

ingrList.append(...newItems);