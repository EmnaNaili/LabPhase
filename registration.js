let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}

btnSignUp.onclick = function(){
   signIn.classList.remove("active");
   signUp.classList.remove("inActive");
}

function signClicked() {
    alert('Account Made Successfully :) ')
}

document.getElementsByClassName('btn')[0].addEventListener('click', signClicked)
function logClicked() {
    alert('You are logged in :) ')
}

document.getElementsByClassName('btnlog')[0].addEventListener('click', logClicked)

function forgetClicked() {
    alert('Relax and try to remember your password :) ')
}
document.getElementsByClassName('forget')[0].addEventListener('click', forgetClicked)

