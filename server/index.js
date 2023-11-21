//Благодаря библиотеке nodemon сервер отслеживает изменение его содержимого и перезагружает его.
//Для того, чтобы подключить библиотеку nodemon нужно её установить npm install nodemon
//и прописать в package.json в разделе "scripts" функцию с каким либо названием и командой
//nodemon *имя файла*       пример: "start:dev": "nodemon index.js"
//Для запуска сервера нужно ввести в терминал: npm run start:dev

//Библиотека Mongoose позволяет серверу подключится к базе данных mongoDB

import express from 'express';                              //Подключение библиотеки Express
import mongoose from 'mongoose';                            //Подключение библиотки Mongoos для подключения базе данных
import { registerValidation } from './validations/auth.js'; //Подключения формы валидации для авторизации (проверяет правильность полученной информации)
import checkAuth from './utils/checkAuth.js';               //Подключение утилиты, проверяющей выдачу информавции о пользователе
import {register, login, getMe} from './controllers/UserController.js'
import { addMusic } from './controllers/musicController.js';

mongoose    //Подключение базы данных
    .connect('mongodb+srv://username:12345aaa@cluster0.vya3tsu.mongodb.net/site?retryWrites=true&w=majority')   //попытка подключения
    .then(() => console.log('Data Base OK'))                //если удалось, написать ОК
    .catch((err) => console.log('DB error',err));           //если не удалось, выдать ошибку

const app = express();                                      //Создание express приложения

app.use(express.json());                                    //Позволяет серверу читать JSON файлы

app.get('/', (req,res) => {                                 //Если прийдёт на приложение GET запрос на главный путь (/), то отправится текст
    res.send('Hello World!');                               //req - то, что получаем от запроса, res - что отправим обратно
});

//обработка POST запроса авторизации
app.post('/auth/login', login);

//Обработка POST запроса регистрации пользователя в базу данных
//второй аргумент в обработке POST запроса проверяет правильность заполненных данных

app.post('/auth/register', registerValidation, register);

//Получение данных о пользователе
app.get('/auth/me', checkAuth, getMe);

//Запрос на добавление музыкальной композиции
app.post('/music/add', addMusic);

//Запуск ВЕБ-Сервера с портом 4444 (путь сайта - localhost:4444)
app.listen(4444, (err) => {
    if (err) {                                              //Если сервер не смог запустится, то выдаёт ошибку
        return console.log(err);
    }
    console.log('Server OK');                               //Если сервер запустился, то сервер выдаёт ответ о том, что всё ОК
});