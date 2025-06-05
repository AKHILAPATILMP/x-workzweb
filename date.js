function validate() {
  let isValid = true;

  let name = document.formName.nameName.value;
  let email = document.formName.email.value;
  let contact = document.formName.contact.value;
  let address = document.formName.address.value;
  let gender = document.formName.gender.value;
  let password = document.formName.password.value;
  let confirmPassword = document.formName.confirmPassword.value;

  if (name.length === 0 || name.length > 20) {
    alert("Name is required and must be less than or equal to 20 characters.");
    isValid = false;
  }

  if (email.length === 0 || !email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address.");
    isValid = false;
  }

  if (contact.length !== 10 || isNaN(contact)) {
    alert("Enter a valid 10-digit contact number.");
    isValid = false;
  }

  if (address.length === 0) {
    alert("Address is required.");
    isValid = false;
  }

  if (gender === "") {
    alert("Please select a gender.");
    isValid = false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    isValid = false;
  }

  if (confirmPassword !== password) {
    alert("Confirm password must match the password.");
    isValid = false;
  }

  if (isValid) {
    alert("Form is submitted successfully!");
  }

  return isValid;
}
