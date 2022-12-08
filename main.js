const template = document.querySelector(".main");
const submitForm = document.querySelector(".create-account");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const errorMessage = document.querySelector(".error-message");

window.onload = () => {
  comparePasswords();
};

passwordField.addEventListener("input", function (e) {
  comparePasswords();
});

confirmPasswordField.addEventListener("input", function (e) {
  comparePasswords();
});

function comparePasswords() {
  if (
    passwordField.value !== confirmPasswordField.value ||
    !passwordField.value
  ) {
    passwordField.classList.add("error");
    confirmPasswordField.classList.add("error");
    errorMessage.style.display = "block";
    return false;
  } else {
    passwordField.classList.remove("error");
    confirmPasswordField.classList.remove("error");
    errorMessage.style.display = "none";
    return true;
  }
}

submitForm.addEventListener("submit", function (e) {
  if (
    passwordField.value == confirmPasswordField.value &&
    passwordField.value
  ) {
    console.log("Success");
  } else {
    e.preventDefault();
  }
});
