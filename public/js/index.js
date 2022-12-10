// Variable Declaration
let signUpButton = document.querySelector(".signUpButton");

function renderSignUpPage() {
  document.location.href = "http://localhost:3001/login";
}

signUpButton.addEventListener("click", renderSignUpPage);
