let input = document.querySelectorAll('input');
let button = document.getElementById('btn');


let name = document.getElementById('username');
let password = document.getElementById('password');
let Verifypassword = document.getElementById('verifPasword');
let email = document.getElementById('email');
let error = document.getElementById('error');
let registerBox = document.getElementsByClassName('Register-box');
let register = document.getElementsByClassName('Register-input');
let icon = document.getElementsByClassName('fa');

console.log(icon[0]);


function btn() {
    button.addEventListener('click', function () {
        valueVerification();
    });

}

function enter() {
    name.onkeyup = function (e) {
        if (e.which === 13) {
            valueVerification();
        }

    }
    password.onkeyup = function (e) {
        if (e.which === 13) {
            valueVerification();
        }
    }

    Verifypassword.onkeyup = function (e) {
        if (e.which === 13) {
            valueVerification();
        }
    }

    email.onkeyup = function (e) {
        if (e.which === 13) {
            valueVerification();
        }
    }
}

function valueVerification() {
    // let name = document.getElementById('username').value;
    validateEmail();
    if (name.value.length >= 5) {
        register[0].classList.add('success');
        icon[0].classList.add('animated', 'heartBeat')
    } else {
        register[0].classList.remove('success');
        icon[0].classList.remove('animated', 'heartBeat')
        error.classList.add('error');
        error.innerHTML = 'User name must put min 5 character';
        return;
    }

    if (password.value.length >= 5) {
        register[1].classList.add('success');
        icon[1].classList.add('animated', 'bounce','delay-1s')
    } else {
        register[1].classList.remove('success');
        icon[1].classList.remove('animated', 'bounce', 'delay-1s')
        error.classList.add('error');
        error.innerHTML = 'Password min 5 character';
        return;
    }

    if (Verifypassword.value.length < 4) {
        register[3].classList.remove('success');
        icon[2].classList.remove('animated', 'flash' , 'delay-1s')
        error.classList.add('error');
        error.innerHTML = 'Verify password min 5 character';
        return;
    } else if (password.value !== Verifypassword.value) {
        console.log('here');
        
        error.classList.add('error');
        error.innerHTML = 'password not same';
        return;
    } else {
        icon[2].classList.add('animated', 'flash', 'delay-1s')
        register[2].classList.add('success');
    }

    if (validateEmail()) {

        addUser();
    }

}

function addUser() {
    name = name.value;
    email = email.value;
    password = password.value;

    let ArrayUserLoginList = window.localStorage.getItem('UserLoginList');

    if (ArrayUserLoginList === null || ArrayUserLoginList === '') {

        let newUserLoginList = [];
        let IdOrder = 0;

        UserListObj = {
            'name': name,
            'email': email,
            'password': password,
            'id': IdOrder
        }

        newUserLoginList.push(UserListObj);

        window.localStorage.setItem('UserLoginList', JSON.stringify(newUserLoginList));
    } else {

        let CurrentUserLoginList = JSON.parse(ArrayUserLoginList);
        let length = CurrentUserLoginList.length - 1;
        console.log(length);
        let IdOrder = CurrentUserLoginList[length].id + 1;


        UserListObj = {
            'name': name,
            'email': email,
            'password': password,
            'id': IdOrder
        }

        CurrentUserLoginList.push(UserListObj);

        window.localStorage.setItem('UserLoginList', JSON.stringify(CurrentUserLoginList));
    }
    registerBox[0].classList.add('animated', 'bounceOutRight')

    setTimeout(function () {
        window.location.pathname = '/';
     }, 1000);
    return;
    

}

function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        register[3].classList.add('success');
        return true;

    } else {
        register[3].classList.remove('success');
        error.classList.add('error');
        error.innerHTML = 'use right format eg. joko@bla.com';
        return false;
    }
    return false;
}

enter();
btn();
