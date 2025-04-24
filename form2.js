function submitForm() {
    let isValid = true;
    let nameValue = document.registration.nameName.value;
    let emailValue = document.registration.emailName.value;
    let phoneValue = document.registration.phoneName.value;
    let ageValue = document.registration.ageName.value;
    let genderValue = document.registration.genderName.value;

    alert("Name: " + nameValue +
          "\nEmail: " + emailValue +
          "\nPhone: " + phoneValue +
          "\nAge: " + ageValue +
          "\nGender: " + genderValue);

    return isValid;
}