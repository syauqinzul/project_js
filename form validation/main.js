// Create an Object for each Field
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const result = document.getElementById("result");

// Function to Display Error
function showError(el, message) {
  el.innerHTML = message;
}

// Function to Clear the Error
function clearError(el) {
  el.innerHTML = "";
}

// Function to Validate Form
function validateForm() {
  return false;
}

// Prevent Default Reloading
form.addEventListener("submit", function (event) {
  event.preventDefault();

// Clear Result
  result.innerHTML = "";

// Validate Form
  if (validateForm()) {
    result.innerHTML = "Form is valid!";
    result.className = "ok";
  } else {
    result.innerHTML = "Please fix the errors.";
    result.className = "error";
  }
});