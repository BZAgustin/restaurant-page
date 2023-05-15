/* eslint-disable no-restricted-syntax */
import menu from './menuLibrary';

const menuItemFactory = (imageUrl, name, description, price, side) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  menuItem.classList.add(side);

  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = name;

  const descContainer = document.createElement('div');
  descContainer.classList.add('item-desc');

  const descTitle = document.createElement('h1');
  descTitle.classList.add('desc-title');
  descTitle.innerHTML = name;

  const descIngredients = document.createElement('span');
  descIngredients.classList.add('desc-ingredients');
  descIngredients.innerHTML = description;

  const underline = document.createElement('div');
  underline.classList.add('underline');

  const itemPrice = document.createElement('h2');
  itemPrice.classList.add('price');
  itemPrice.innerHTML = `$${price}`;

  descContainer.appendChild(descTitle);
  descContainer.appendChild(descIngredients);
  descContainer.appendChild(underline);
  
  menuItem.appendChild(image);
  menuItem.appendChild(descContainer);
  menuItem.appendChild(itemPrice);

  return menuItem;
}

function showMenu() {
  const content = document.getElementById('content');

  const menuContainer = document.createElement('section');
  menuContainer.classList.add('menu-container');

  for(const item of menu) {
    menuContainer.appendChild(menuItemFactory(item.imgUrl, item.name, item.description, item.price, item.side));
  }

  content.appendChild(menuContainer);
}

export default showMenu;