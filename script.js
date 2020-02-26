function validateForms() {
    let firstName = document.forms["signUpForm"]["firstName"].value;
    let lastName = document.forms["signUpForm"]["lastName"].value;
    let emailAddress = document.forms["signUpForm"]["emailAddress"].value;
    let password = document.forms["signUpForm"]["password"].value;
    let emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (firstName === "") {
       let firstNameError = "First Name cannot be empty!"
       document.querySelector('.error').innerHTML = firstNameError;  
       return false
    }
    else if(lastName === "") {
       let lastNameError = "Last Name cannot be empty";
        document.querySelector('.error').innerHTML = lastNameError;
        return false
    } else if(emailAddress !== emailPattern){
       let emailError = "email is invalid";
       document.querySelector('.error').innerHTML = emailError;
       return false
    } else if(password === ""){
        let passwordError = "password cannot be empty";
        document.querySelector('.error').innerHTML = passwordError;
        return false
    }
        return true;
    
}

let button = document.querySelector('button');
button.addEventListener("click", (e) =>{
    validateForms();
    
})