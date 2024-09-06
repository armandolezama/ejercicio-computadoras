const numbersContainer = document.querySelector('#numbers-div');
const addInputButton = document.querySelector('#add-input');
const controlBoard = document.querySelector('#control-board');
const inputsDiv = document.querySelector('#inputs-div');
const printButton = document.querySelector('#print-inputs');
const sortButton = document.querySelector('#sort');

console.log(numbersContainer);

const createId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const createInputComponent = () => {
  const newInput = document.createElement('input');
  newInput.className = 'number-input';
  newInput.type = 'number';
  newInput.value = '0';

  const newCloseButton = document.createElement('button');
  newCloseButton.className = 'number-input-close-button';
  newCloseButton.innerHTML = 'X';
  newCloseButton.addEventListener('click', () => {
    newInput.remove();
    newCloseButton.remove();
  })

  const inputComponentContainer = document.createElement('div');
  inputComponentContainer.className = 'input-component-container';
  inputComponentContainer.appendChild(newInput);
  inputComponentContainer.appendChild(newCloseButton);

  return inputComponentContainer;
}

addInputButton.addEventListener('click', () => {
  inputsDiv.appendChild(createInputComponent());
});

const createNumberElement = (number) => {
  const newElement = document.createElement('p');
  newElement.className = 'number-paragraph';
  newElement.innerHTML = number;
  numbersContainer.appendChild(newElement);
}

const clearInputs = () => {
  numbersContainer.innerHTML = '';
}

printButton.addEventListener('click', () => {
  clearInputs();
  const inputs = document.querySelectorAll('.number-input');
  inputs.forEach((input) => {
    createNumberElement(input.value);
  })
});

const verificarOrden = () => {
  const inputs = document.querySelectorAll('.number-paragraph');
  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index].innerHTML > inputs[index + 1].innerHTML) {
      return { isORdered: false, index };
    }
  }
  return { isORdered: true, index: -1 };
}

sortButton.addEventListener('click', () => {
  const { isORdered, index } = verificarOrden();
  if (!isORdered) {
    const inputs = document.querySelectorAll('.number-paragraph');
    inputs[index].classList.add('active');
    inputs[index + 1].classList.add('active');
  }
});
