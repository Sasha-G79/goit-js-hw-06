const nameInput = document.getElementById("name-input");
const greet = document.getElementById("name-output");
let anonimous = "Anonimopus";

greet.textContent = anonimous;

nameInput.addEventListener("input", onInput);

function onInput(event) {
    greet.textContent = event.target.value || anonimous;
}