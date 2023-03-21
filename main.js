const form = document.querySelector("#form");
const numberOneInput = document.querySelector("#numberOne");
const numberTwoInput = document.querySelector("#numberTwo");
const addButton = document.querySelector("#add");
const subButton = document.querySelector("#sub");
const mulButton = document.querySelector("#mul");
const divButton = document.querySelector("#div");
const showResult = document.querySelector("#result");
const reloadButton = document.querySelector("#reloadBtn");

// Evento por defecto del form
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Eventos
addButton.addEventListener("click", () => calculate("+"));
subButton.addEventListener("click", () => calculate("-"));
mulButton.addEventListener("click", () => calculate("*"));
divButton.addEventListener("click", () => calculate("/"));
reloadButton.addEventListener("click", reloadPage);

// Funciones
function calculate(operator) {
  const numberOne = parseFloat(numberOneInput.value);
  const numberTwo = parseFloat(numberTwoInput.value);

  let result;

  switch (operator) {
    case "+":
      result = numberOne + numberTwo;
      break;

    case "-":
      result = numberOne - numberTwo;
      break;

    case "*":
      result = numberOne * numberTwo;
      break;

    case "/":
      result = numberOne / numberTwo;
      break;

    default:
      result = 0;
  }

  showResult.innerText = result;
}


// Reload
function reloadPage() {
  window.location.reload();
}
