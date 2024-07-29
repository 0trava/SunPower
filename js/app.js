


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