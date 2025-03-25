//hero title fitting

jQuery("#vg-title").fitText(.85);

// swaps scroll snap type after reaching main page area, tried way too hard to do this in pure css when this was such an easy solution

document.addEventListener("DOMContentLoaded", function () {
    const swapPoint = document.getElementById("swap-snap-type");
    const elementToChange = document.documentElement;

    const oldClass = "scroll-snap-ymand";
    const newClass = "scroll-snap-none";

    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            let scrollingDown = window.scrollY > lastScrollY;
            lastScrollY = window.scrollY;

            if (entry.isIntersecting) {
                elementToChange.classList.replace(oldClass, newClass);
            } else if (!scrollingDown) {
                elementToChange.classList.replace(newClass, oldClass);
            }
        });

    // could definitely tune this to make it smoother but time is short
    }, { threshold: 0.1 });

    observer.observe(swapPoint);
});

//mobile nav

function toggleMenu() {
    document.querySelector(".nav-styling").classList.toggle("active");
}

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.nav-styling');
    const toggleButton = document.querySelector('.menu-toggle');
    
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove('active');
    }
});

//carousel (old)

// document.addEventListener("DOMContentLoaded", function () {
//     const carousel = document.querySelector(".carousel-items");
//     const prevButton = document.querySelector(".carousel-button.prev");
//     const nextButton = document.querySelector(".carousel-button.next");
//     const items = document.querySelectorAll(".carousel-item");
//     const totalItems = items.length;
//     let currentIndex = 0;

//     function updateCarousel() {
//         const offset = -currentIndex * 100;
//         carousel.style.transform = `translateX(${offset}%)`;
//     }

//     nextButton.addEventListener("click", function () {
//         if (currentIndex < totalItems - 1) {
//             currentIndex++;
//         } else {
//             currentIndex = 0;
//         }
//         updateCarousel();
//     });

//     prevButton.addEventListener("click", function () {
//         if (currentIndex > 0) {
//             currentIndex--;
//         } else {
//             currentIndex = totalItems - 1;
//         }
//         updateCarousel();
//     });
// });

//carousel attempt 2

const splide = new Splide('.splide', {
    type: 'loop',
    gap: '20px',
    speed: 500,
    padding: 50,
    perPage:1,
    start: 1,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: false,
    updateOnMove: true,
    pauseOnHover: true,
    focus: 'center',
    wheel: false,
  });
  splide.mount();
  