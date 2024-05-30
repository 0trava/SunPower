document.querySelector('.prev').addEventListener('click', function() {
    document.querySelector('.gallery').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.querySelector('.next').addEventListener('click', function() {
    document.querySelector('.gallery').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});