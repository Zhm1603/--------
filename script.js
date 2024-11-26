
function changeMenu(){
    let burger = document.querySelector('.burger');
    burger.classList.toggle('active');
    let nav = document.querySelector('.nav-bar');
    nav.classList.toggle('open')
}


const tg = window.Telegram.WebApp;
console.log(tg)

const username = tg.initDataUnsafe.user.username;
const firstName = tg.initDataUnsafe.user.first_name;

console.log('Username:', username);
console.log('First Name:', firstName);

let htmlUsername = document.getElementsByClassName