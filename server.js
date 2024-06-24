const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

// Разрешаем Express обрабатывать данные JSON и URL-encoded формы
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Обработчик POST запроса с формы
app.post('/send-email', (req, res) => {
    const { name, phone, description } = req.body;

    // Выполняем скрипт sendEmail.js с передачей параметров
    const process = spawn('node', ['sendEmail.js', name, phone, description]);

    // Слушаем событие вывода данных
    process.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    process.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    process.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        // Отправляем ответ клиенту, что запрос успешно обработан
        res.send('Email sent successfully');
    });
});

// Запускаем сервер на порту 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});