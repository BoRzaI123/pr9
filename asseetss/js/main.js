'use strict';

let form = document.forms.signin;
let loginInput = form.login;
let passwordInput = form.password;
console.log(loginInput);

form.addEventListener('submit', userSignin)

function userSignin(event){
    event.preventDefault();
    let flag = true;
    loginError.innerHTML = ''
    passwordError.innerHTML = ''

    if (passwordInput.classList.contains('error__input')){
        passwordInput.classList.remove('error__input')
    }

    if (loginInput.classList.contains('error__input')){
        loginInput.classList.remove('error__input')
    }

    if(!loginInput.value){
        loginInput.classList.add('error__input');
        loginError.innerHTML = 'Введите Имя';
        flag = false;
    }

    else if (loginInput.value.length < 2){
        loginInput.classList.add('error__input');
        loginError.innerHTML = 'Введите не менее 2 символов';
        flag = false;
    }

    if(!passwordInput.value){
        passwordInput.classList.add('error__input');
        passwordError.innerHTML = 'Введите год рождения';
        flag = false;
    }

    else if (passwordInput.value.length > 4){
        passwordInput.classList.add('error__input');
        passwordError.innerHTML = 'Некоректный вид года рождения';
        flag = false;
    }

    else if ((2024 - passwordInput.value) < 18){
        passwordInput.classList.add('error__input');
        passwordError.innerHTML = 'Доступ заблокирован, возращайтесь после совершенолетия';
        flag = false;
    }


    if (flag == true){
        user.innerHTML = `Здраствуйте, ${loginInput.value}`;
    }
}