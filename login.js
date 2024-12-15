const logInBtn = document.getElementById("log-in")
const emailInput = document.getElementById("email")
const passInput = document.getElementById("password")
const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const error = document.getElementById("error")



logInBtn.addEventListener("click", () => {
    if(!re.test(emailInput.value)){
        error.innerHTML = "Invalid Email adress!"
    }
    else if(passInput.value.length < 8){
        error.innerHTML = "Password must be longer than 8 charachters"
    }
})


