
function changeMenu(){
    let burger = document.querySelector('.burger');
    burger.classList.toggle('active');
    let nav = document.querySelector('.nav-bar');
    nav.classList.toggle('open')
}


const tg = window.Telegram.WebApp();


if (user) {
    const username = tg.iniinitDataUnsafe.user.username;

    // Проверка на наличие элемента с id "username"
    let htmlUsername = document.getElementById("username");

    if (htmlUsername) {
        htmlUsername.innerHTML = username;  // Меняем содержимое на username
    }
}
