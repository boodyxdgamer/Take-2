//Image slider

const slides = document.querySelectorAll('.slides img');
let Index = 0;
let IntervalID = null;

document.addEventListener('DOMContentLoaded',  () => {

initializeSlider();
});

function initializeSlider() {

    if (slides.length > 0) {
    slides[Index].classList.add('displaySlide');
    IntervalID = setInterval(nextSlide, 3000);
    }
}

function showSlide(i) {
    if (i >= slides.length) {
        Index = 0;
    }else if (i < 0) {
        Index = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[Index].classList.add('displaySlide');
}

function nextSlide() {
   
    Index++;
    showSlide(Index);
    
}

function previousSlide() {
    
    Index--;
    showSlide(Index);
    clearInterval(IntervalID);
}