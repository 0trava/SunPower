


    // Функція для відкриття форми
    function openForm() {
        document.getElementById("overlay").style.display = "block";
    }

    // Функція для закриття форми
    function closeForm() {
        document.getElementById("overlay").style.display = "none";
    }



    function openModal() {
        document.getElementById('fullScreenModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('fullScreenModal').style.display = 'none';
    }

    // Додаємо обробник подій до всіх посилань в модальному меню
    document.querySelectorAll('.modal-menu a').forEach(function(link) {
        link.addEventListener('click', function() {
            closeModal();
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.menu a');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.getAttribute('href') === `#${sectionId}` ? link.classList.add('active') : link.classList.remove('active');
                    });
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));
    });



    // Swiper

    const swiper = new Swiper('.swiper', {
        mousewheel: true,
        speed: 1700,
        allowTouchMove: true
   
     });