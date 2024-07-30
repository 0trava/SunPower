
    // Модальне вікно

    function openModal() {
        document.getElementById("fullScreenModal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("fullScreenModal").style.display = "none";
    }

    // Закриття модального вікна при кліку на область поза вмістом
    window.onclick = function(event) {
        if (event.target == document.getElementById("fullScreenModal")) {
            closeModal();
        }
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


    // Animate with scroll

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();



    // Swiper

    const swiper = new Swiper('.swiper', {
        speed: 1700,
        allowTouchMove: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        

   
     });


    //  Script for scroll
    document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('a[href^="#"]');
        for (const link of links) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
