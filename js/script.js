let toggleButton = document.querySelector('.burger-menu');
let navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
    navBar.classList.toggle('toggle');
});