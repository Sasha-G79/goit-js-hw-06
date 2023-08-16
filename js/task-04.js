const value = document.querySelector("#value");let counterValue = 0;

const incrButton = document.querySelector('button[data-action="increment"]');

const decrButton = document.querySelector('button[data-action="decrement"]');

const incrementClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrementClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
incrButton.addEventListener("click", incrementClick);
decrButton.addEventListener("click", decrementClick);