function validateForms(e) {
    let firstName = document.forms["signUpForm"]["firstName"].value;
    let lastName = document.forms["signUpForm"]["lastName"].value;
    let emailAddress = document.forms["signUpForm"]["emailAddress"].value;
    let password = document.forms["signUpForm"]["password"].value;
    let emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (firstName.length < 1) {
       let firstNameError = "First Name is required!"
       document.querySelector('#error').innerHTML = firstNameError;  
       return false
    }
    else if(lastName.length < 1) {
       let lastNameError = "Last Name is required!";
        document.querySelector('#error1').innerHTML = lastNameError;
        return false
    } else if(emailAddress === ""){ 
       let emailError = "Email address is required!";
       document.querySelector('#error2').innerHTML = emailError;
       return false
    } else if(!emailPattern.test(emailAddress)){
        document.querySelector('#error2').innerHTML = "please enter valid email."
    }
    else if(password === ""){
        let passwordError = "password is required!";
        document.querySelector('#error3').innerHTML = passwordError;
        return false
    } else{
        document.querySelector('.success').innerHTML = "Form is successfully submitted";
    }
   
    
}

let button = document.querySelector('button');
button.addEventListener("click", (e) =>{
    validateForms();
   
})
