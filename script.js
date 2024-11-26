function changeMenu(){
    let burger = document.querySelector('.burger');
    burger.classList.toggle('active');
    let nav = document.querySelector('.nav-bar');
    nav.classList.toggle('open')
}

const tg = window.Telegram.WebApp;

function getUsername() {
    const user = tg.initDataUnsafe.user;
    const username = user.username;
    const firstName = user.first_name;

    return username + ' ' + firstName;
}

document.getElementById("tg-username").innerText = Welcome, `${getUsername()}`;