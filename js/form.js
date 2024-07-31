


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const description = document.getElementById('description').value.trim();

    if (!name || !phone || !description) {
        alert('Будь ласка, заповніть всі поля.');
        return;
    }

    alert('Ваше повідомлення було успішно відправлено!');
    document.getElementById('contactForm').reset();
});