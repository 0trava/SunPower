const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware для обробки даних форми
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Обробка POST запиту з форми
app.post('/send-email', (req, res) => {
    const { name, phone, description } = req.body;

    // Налаштування транспорту для відправки листа через Gmail
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: '0trava0910@gmail.com',
            pass: 'enqo roos smmt gxlu'
        }
    });

    // Параметри листа
    let mailOptions = {
        from: '"SunPower" <0trava0910@gmail.com>',
        to: 'svetlana@ledps.com.ua',
        subject: 'PromSys - Заявка клієнта з сайту',
        text: `${name}, ${phone}, ${description}`
    };

    // Відправка листа
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error occurred: ' + error.message);
        }
        res.status(200).send('Message sent: ' + info.messageId);
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
