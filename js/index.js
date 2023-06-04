// Write your Pizza Builder JavaScript in this file.
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// Agregar detector de eventos de clic al botón de champiñones
const mushroomsButton = document.querySelector('.btn.btn-mushrooms');
mushroomsButton.addEventListener('click', renderMushrooms);

// Agregar detector de eventos de clic al botón de pimientos verdes
const greenPeppersButton = document.querySelector('.btn.btn-green-peppers');
greenPeppersButton.addEventListener('click', renderGreenPeppers);

// Función para mostrar/ocultar los champiñones
function renderMushrooms() {
  const mushroomSections = document.querySelectorAll('.hongo');
  mushroomSections.forEach(section => {
    section.classList.toggle('hidden');
    const ingredientName = ingredients.mushrooms.name;
    const ingredientState = !state.mushrooms;
    updateIngredientState(ingredientName, ingredientState);
  });
}

// Función para mostrar/ocultar los pimientos verdes
function renderGreenPeppers() {
  const pepperSections = document.querySelectorAll('.pimiento-verde');
  pepperSections.forEach(section => {
    section.classList.toggle('hidden');
    const ingredientName = ingredients.greenPeppers.name;
    const ingredientState = !state.greenPeppers;
    updateIngredientState(ingredientName, ingredientState);
  });
}

// Función para actualizar el estado de los ingredientes
function updateIngredientState(ingredientName, ingredientState) {
  state[ingredientName.toLowerCase()] = ingredientState;
  console.log(state);
}


// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
    const sauceSections = document.querySelectorAll('.sauce');
    sauceSections.forEach((sauceSection) => {
      if (state.whiteSauce) {
        sauceSection.classList.add('sauce-white');
      } else {
        sauceSection.classList.remove('sauce-white');
      }
    });
  }

function renderGlutenFreeCrust() {
  const crustSections = document.querySelectorAll('.crust');
  crustSections.forEach((crustSection) => {
    if (state.glutenFreeCrust) {
      crustSection.classList.add('crust-gluten-free');
    } else {
      crustSection.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Pepperoni button
  const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni) {
    pepperoniButton.classList.add('active');
  } else {
    pepperoniButton.classList.remove('active');
  }

  // Mushrooms button
  const mushroomsButton = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    mushroomsButton.classList.add('active');
  } else {
    mushroomsButton.classList.remove('active');
  }

  // Green peppers button
  const greenPeppersButton = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    greenPeppersButton.classList.add('active');
  } else {
    greenPeppersButton.classList.remove('active');
  }

  // White sauce button
  const whiteSauceButton = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    whiteSauceButton.classList.add('active');
  } else {
    whiteSauceButton.classList.remove('active');
  }

  // Gluten-free crust button
  const glutenFreeCrustButton = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    glutenFreeCrustButton.classList.add('active');
  } else {
    glutenFreeCrustButton.classList.remove('active');
  }
}


function renderPrice() {
  const priceList = document.querySelector('.price ul');
  priceList.innerHTML = '';

  let totalPrice = basePrice;

  for (const ingredient in ingredients) {
    if (state[ingredient]) {
      const ingredientName = ingredients[ingredient].name;
      const ingredientPrice = ingredients[ingredient].price;

      const listItem = document.createElement('li');
      listItem.textContent = `$${ingredientPrice} ${ingredientName}`;
      priceList.appendChild(listItem);

      totalPrice += ingredientPrice;
    }
  }

  const totalPriceElement = document.querySelector('.price strong');
  totalPriceElement.textContent = `$${totalPrice}`;
}



document.querySelector('.btn.btn-pepperoni').addEventListener('click', function() {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


document.querySelector('.btn.btn-mushrooms').addEventListener('click', function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});


document.querySelector('.btn.btn-green-peppers').addEventListener('click', function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});


document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

