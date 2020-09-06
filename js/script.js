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

function createSmoothScroll() {
    console.log("entrance");
    let anchors = document.querySelectorAll('header a[href*="#"');
    for(let i = 0; i < anchors.length-1; i++) {
        let anchor = anchors[i];
        if (anchor) {
            anchor.addEventListener('click', function (e){
                e.preventDefault();
                let anchorId = this.getAttribute('href');
                console.log(anchorId);
                document.querySelector(anchorId).scrollIntoView({
                    behavior: "smooth", block: "start"
                })
            })
        }
    }
}
createSmoothScroll();

