function changeMenu(){
    let burger = document.querySelector('.burger');
    burger.classList.toggle('active');
    let nav = document.querySelector('.nav-bar');
    nav.classList.toggle('open')
}

const tg = window.Telegram.WebApp;

document.getElementById("tg-username").value = `${tg.initDataUnsafe.user.username}`;