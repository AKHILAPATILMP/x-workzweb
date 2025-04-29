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

        if (nameValue.length<3 || nameValue.length>20){
            setError('name','please provide min 3 & mx 20 characters ');
            isValid=false;
        }

    if (phoneValue.length != 10) {
        setError('id','the length should be 10 digits');
        isValid = false;
    }
    if (ageValue < 18) {
        setError('number','age should be above 18');
        isValid = false;
    }
        return isValid;

}
function setError(name,id,number){
    alert(name,id,number);
    }
function onClick(){
    let dothis=document.getElementsByClassName('name')[1].innerHTML;
    console.log('do',dothis);
}

