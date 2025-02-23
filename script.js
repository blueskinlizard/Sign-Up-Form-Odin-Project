const submitButton = document.getElementById("sign-up-button");
const emailForm = document.getElementById("Email-Form");
const passwordForm = document.getElementById("Password-Form");

submitButton.addEventListener("click", function(){
    emailForm.submit();
    passwordForm.submit();
    
})