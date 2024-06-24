const nodemailer = require('nodemailer');

// Создаем транспорт для отправки почты через Gmail
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true для порта 465, false для порта 587
    auth: {
        user: '0trava0910@gmail.com',
        pass: '0Trava09101984'
    }
});

// Определяем параметры письма
let mailOptions = {
    from: '"Ваше Имя" <0trava0910@gmail.com>', // Адрес отправителя
    to: 'svetlana@ledps.com.ua', // Список получателей (замените на реальный адрес получателя)
    subject: 'Предложение по аварийным светильникам', // Тема письма
    text: `Шановні колеги,

Хочу запропонувати вашій управляючій компанії придбати аварійні акумуляторні світильники для сходових клітин за ціною 900 грн. за одиницю. Ці світильники можуть замінити ті, що стоять зараз, і забезпечити надійне аварійне освітлення.

Основні характеристики світильників:
- Заряджаються від 220 В
- Працюють до 6 годин на акумуляторах (змінні)

Це чудова можливість підвищити безпеку вашого об'єкта за вигідною ціною. Звертаю вашу увагу, що світильники наразі є в наявності, тому пропоную скористатися цією пропозицією якомога швидше.

З повагою,
Ваше ім'я
Ваш контактний номер
Ваша електронна пошта`
};

// / Функция для отправки письма
function sendEmail() {
    console.log('Отправка письма начата...'); // Лог до отправки
    transporter.verify(function(error, success) {
        if (error) {
            console.log('Error during connection verification:', error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`Error occurred: ${error.message}`);
            return;
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    console.log('Функция sendMail вызвана'); // Лог после вызова функции sendMail
}

// Запуск функции отправки письма
sendEmail();
console.log('Скрипт завершен'); // Лог после вызова функции sendEmail