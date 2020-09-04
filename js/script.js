var toggleButton = document.querySelector('.burger-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
    navBar.classList.toggle('toggle');
});