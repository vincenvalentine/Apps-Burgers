let username = document.getElementById('username');
let password = document.getElementById('password');
let button = document.getElementById('btn');
let error = document.getElementById('error');

let errorText = [];

function validateLogin (){
    nouser();

    if (emptyValue()){
        return;
    }
    
    let ArrayUserLoginList = window.localStorage.getItem('UserLoginList');
    ArrayUserLoginList = JSON.parse(ArrayUserLoginList);

    for (let i = 0; i < ArrayUserLoginList.length; i++) {

        if ((ArrayUserLoginList[i].name === username.value) && (ArrayUserLoginList[i].password === password.value)) {
            setTimeout(function () {
                window.location.pathname = "/home.html"; 
             }, 1000);
            return;
        }
    }
    console.log('here');
    
    ErrorUserPasswordWrong();
}

function enter(){
    username.onkeyup = function(e){
        if (e.which === 13) {
            validateLogin ();
        }
        
    }
    password.onkeyup = function(e){
        if(e.which === 13){
            validateLogin ();
        }
    }
}

function btn() {
    button.addEventListener('click', function() {
        validateLogin();
    })
}


function ErrorUserPasswordWrong() {
    error.style.padding = '1rem';
    error.innerHTML = 'Username & password Is Wrong';
    
}


function nouser() {
    let ArrayUserLoginList = window.localStorage.getItem('UserLoginList');
    if (ArrayUserLoginList == null || ArrayUserLoginList == '') {
        alert('you must register first')
    }
}


function emptyValue() {
    if ((username.value === '') || (username.value === null)) {
        error.style.padding = '1rem';
        error.innerHTML = 'Username & password Cannot Be Empty';
        return true;
    }
    return false;
}

enter();
btn();