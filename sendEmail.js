const nodemailer = require('nodemailer');

// --------------------------------------------------


// Получаем параметры из командной строки
const name = process.argv[2];
const phone = process.argv[3];
const description = process.argv[4];

// --------------------------------------------------



// Создаем транспорт для отправки почты через Gmail
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true для порта 465, false для порта 587
    auth: {
        user: '0trava0910@gmail.com',
        pass: 'enqo roos smmt gxlu'
    }
});

// Определяем параметры письма
let mailOptions = {
    from: '"SunPower" <0trava0910@gmail.com>', // Адрес отправителя
    to: 'svetlana@ledps.com.ua', // Список получателей (замените на реальный адрес получателя)
    subject: 'PromSys - Заявка клієнта з сайту', // Тема письма
    text: `${name}, ${phone}, ${description}`
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