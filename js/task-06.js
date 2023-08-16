const textInput = document.querySelector("#validation-input");

const checkLength = () => {
  if (textInput.value.length < textInput.dataset.length) {
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
};

textInput.addEventListener("blur", checkLength);