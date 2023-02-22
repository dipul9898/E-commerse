let signupbtn = document.getElementById("signup-btn");
let signinbtn = document.getElementById("signin-btn");
let nameField = document.getElementById("name-field")
let title = document.getElementById("title");


signinbtn.onclick = function(){
    nameField.style.maxHeight = "0"; 
    title.innerHTML="Sign In";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
}


signupbtn.onclick = function(){
    nameField.style.maxHeight = "60px"; 
    title.innerHTML="Sign Up";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
}