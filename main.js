let input = document.getElementById('input');
let createButton = document.getElementById('createButton');
let container = document.querySelector('.list-container');

class itemList {
  constructor(name) {
    this.createItem(name);
  }
  createItem(name) {
    let itemBox = document.createElement('div');
    itemBox.classList.add('item');

    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'input';
    newInput.disabled = true;
    newInput.value = name;

    let editButton = document.createElement('button');
    editButton.className = 'btn';
    editButton.innerHTML = 'EDIT';
    editButton.addEventListener('click', () => this.edit(newInput, itemBox));

    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn';
    deleteButton.innerHTML = 'DELETE';
    deleteButton.addEventListener('click', () => this.delete(itemBox));

    container.appendChild(itemBox);
    itemBox.appendChild(newInput);
    itemBox.appendChild(editButton);
    itemBox.appendChild(deleteButton);
  }
  edit(newInput, itemBox) {
    if (newInput.disabled == true) {
      newInput.disabled = !newInput.disabled;
      newInput.focus();
    } else {
      newInput.disabled = !newInput.disabled;
    }

    if (newInput.value == "") {
      itemBox.remove();
    }
  }
  delete(itemBox) {
    itemBox.remove();
  }
}

createButton.addEventListener('click', () => {
  if (input.value != "") {
    new itemList(input.value);
    input.value = "";
  } else {
    console.log('no funciona');
  }
})

new itemList("test");