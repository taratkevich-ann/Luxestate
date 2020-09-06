/* BURGER MENU */
let toggleButton = document.querySelector('.burger-menu');
let navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
    navBar.classList.toggle('toggle');
});

/* COUNTER */
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }

    counter("count1", 600, 748, 1500);
    counter("count2", 0, 24, 2000);
    counter("count3", 3500, 3854, 1000);
    counter("count4", 0, 14, 2000);
});

/* SLIDER */

// var slide = 0,
//     slides = document.querySelectorAll('.slider-content'),
//     numSlides = slides.length,
//
//     //Functions!!
//     currentSlide = function() {
//         var itemToShow = Math.abs(slide % numSlides);
//         [].forEach.call(slides, function(el) {
//             el.classList.remove('slideActive')
//         });
//         slides[itemToShow].classList.add('slideActive');
//         resetProgress();
//         resetInterval();
//     },
//     next = function() {
//         slide++;
//         currentSlide();
//     },
//     prev = function() {
//         slide--;
//         currentSlide();
//     },
//     resetProgress = function() {
//         var elm = document.querySelector('.progressbar'),
//             newone = elm.cloneNode(true),
//             x = elm.parentNode.replaceChild(newone, elm);
//     },
//     resetslide = function() {
//         var elm = document.querySelector('.slider-content'),
//             newone = elm.cloneNode(true),
//             x = elm.parentNode.replaceChild(newone, elm);
//     },
//     resetInterval = function() {
//         clearInterval(autonext);
//         autonext = setInterval(function() {
//             slide++;
//             currentSlide();
//         }, 5000);
//     },
//     autonext = setInterval(function() {
//         next();
//     }, 5000);

