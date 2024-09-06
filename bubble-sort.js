const numbersContainer = document.querySelector('#numbers-div');
const addInputButton = document.querySelector('#add-input');
const controlBoard = document.querySelector('#control-board');
const inputsDiv = document.querySelector('#inputs-div');
const printButton = document.querySelector('#print-inputs');
const sortButton = document.querySelector('#sort');

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
  for (let index = 0; index < inputs.length - 1; index++) { // Corregido para evitar comparar el último con un undefined
    if (parseFloat(inputs[index].innerHTML) > parseFloat(inputs[index + 1].innerHTML)) {
      return { isOrdered: false, index };
    }
  }
  return { isOrdered: true, index: -1 };
}

const exchangeWithTransition = (firstElement, secondElement) => {
  // Agrega clase de transición visual
  const firstY = firstElement.getBoundingClientRect().top;
  const secondY = secondElement.getBoundingClientRect().top;

  firstElement.style.transform = `translateY(${secondY - firstY}px)`;
  secondElement.style.transform = `translateY(${firstY - secondY}px)`;

  // Espera que la transición termine
  setTimeout(() => {
    firstElement.style.transform = '';
    secondElement.style.transform = '';

    // Intercambiar posiciones en el DOM
    const parent = firstElement.parentNode;
    parent.insertBefore(secondElement, firstElement);
  }, 500); // Coincide con el tiempo de la transición
}

sortButton.addEventListener('click', () => {
  const { isOrdered, index } = verificarOrden();
  if (!isOrdered) {
    const inputs = document.querySelectorAll('.number-paragraph');
    const firstElement = inputs[index];
    const secondElement = inputs[index + 1];

    firstElement.classList.add('active');
    secondElement.classList.add('active');

    // Realizar intercambio con animación
    exchangeWithTransition(firstElement, secondElement);

    // Remover clase después de la animación
    setTimeout(() => {
      firstElement.classList.remove('active');
      secondElement.classList.remove('active');
    }, 1000); // Espera más que la transición para que se note el cambio
  } else {
    alert('Ya estás ordenado');
  }
});