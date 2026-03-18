


let hamburger = document.querySelector('.hamburger-menu');
let dropmenu = document.querySelector('.drop-menu');
hamburger.addEventListener('click', function() { dropmenu.classList.toggle('active');});



let currentIndex = 0;

function moveSlide(direction) {

    let track = document.getElementById('sliderTrack');
    let slides = document.querySelectorAll('.slide');
    let totalSlides = slides.length;

    
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
    currentIndex = 0;
    } 
    
    else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
    }

    // Calculate how far to push the track to the left (e.g., -100%, -200%)
    let percentageToMove = currentIndex * -100;
    
    // Apply the CSS change via JavaScript
    track.style.transform = `translateX(${percentageToMove}%)`;
}