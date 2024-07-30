
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
