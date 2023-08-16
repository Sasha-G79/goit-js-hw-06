function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesArray = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    boxesArray.push(
      `<div style="height: ${size}px; width: ${size}px; background-color:${getRandomHexColor()}"></div>`
    );

    size += 10;
  }

  let boxesString = boxesArray.join("");

  boxes.insertAdjacentHTML("afterbegin", boxesString);
}

function removeBoxes() {
  boxes.innerHTML = "";
}

const input = document.querySelector("#controls > input");
const controls = document.querySelector("#controls");

const btnCreate = document.querySelector("#controls button[data-create]");

const btnDestroy = document.querySelector("#controls button[data-destroy]");

const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  createBoxes(input.value);
});

// btnDestroy.addEventListener("click", removeBoxes);
// const widget = document.querySelector('.widget');
// const colorSpan = widget.querySelector('.color');
// const changeColorButton = widget.querySelector('.change-color');
// changeColorButton.addEventListener('click', function () {
//   const randomColor = getRandomHexColor();
//   document.body.style.backgroundColor = randomColor;
//   colorSpan.textContent = randomColor;
// });