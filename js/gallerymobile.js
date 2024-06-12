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


function toggleBurgerMenu() {
    var burgerMenu = document.getElementById('burgerMenu');
    if (burgerMenu.style.display === 'block') {
        burgerMenu.style.display = 'none';
    } else {
        burgerMenu.style.display = 'block';
    }
}