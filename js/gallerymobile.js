let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    // slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Start the slideshow
showSlides();

document.cookie = "name=value; SameSite=None; Secure";


window.addEventListener('scroll', function() {
    const circle = document.querySelector('.gradient-circle');
    if (window.scrollY > 50) {
        circle.classList.add('scrolled');
    } else {
        circle.classList.remove('scrolled');
    }
});