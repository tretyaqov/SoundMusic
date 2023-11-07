import UserModel from '../models/User.js';                   //Подключаем модель пользователя
import bcrypt from 'bcrypt';                                //Подклчение библиотеки BCrypt для шифрования пароля
import jwt from 'jsonwebtoken';                             //Подключение библиотеки JSONWebToken, чтобы создавать токен
import { validationResult } from 'express-validator';       //Подключение библиотеки Express Validator для проверки данных

export const register = async (req,res) => {
    try{                                                    //Попытка обработать запрос
        const errors = validationResult(req);               //Записываем в 'errors' ошибки, не прошедшие по второму аругменту
        if (!errors.isEmpty()){                             //Если ошибки есть
            return res.status(400).json(errors.array());    //Выдать ошибку
        }
        //Шифрование пароля
        const password = req.body.password;                 //Записываем пароль из запроса в переменную
        const salt = await bcrypt.genSalt(10);              //Создаёмм ключ шифрования
        const hash = await bcrypt.hash(password, salt);     //Шифруем пароль
    
        //Создаём пользователя в базе данных
        const doc = new UserModel({                         //Загружаем в 'doc' мрдель пользователя
            email: req.body.email,                          //Загружаем данные почты
            fullName: req.body.fullName,                    //Загружаем данные имени пользователя
            avatarURL: req.body.avatarURL,                  //Загружаем ссылку аватара пользователя
            passwordHash: hash,                             //Загружаем зашифрованный пароль пользователя
        });
        //Сохраняем пользователя
        const user = await doc.save();  

        const token = jwt.sign({                            //создание токена
            _id: user._id
        }, 'password',
        {expiresIn: '30d'});

        const {passwordHash, ...userData} = user._doc;      //Убирем пароль от пользователя
    
        res.json({                                          //иначе выдать результат
            ...userData,                                    //Выдача информации о том, что получилось обработать запрос
            token
        });
    } catch(err) {                                          //Если не удалось создать
        console.log(err);
        res.status(500).json({
            message: 'Не удалось зарегистрировать пользователя'
        });
    }
};

export const login = async (req, res) => {
    try {                                                   //Попытка обработки запроса авторизации пользователя
                                                            //Получаем из введёного, есть ли совпадения в почте, отпраленной от пользователя, в базе данных
        const user = await UserModel.findOne({email: req.body.email});

        if (!user) {                                        //Если в базе данных не найден пользователь, то выдать ошибку
            return res.status(404).json({
                message: 'Пользователь не найден',
            });
        }
        //Получаем из введённого, есть ли совпадения пароля, отправленного пользователем, в базе данных
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        
        if (!isValidPass){                                  //Если не найден пароль, то выдача ошибки
            return res.status(404).json({
                message: 'Неверно введены данные'
            });
        }

        const token = jwt.sign({                            //создание токена
            _id: user._id
        }, 'password',
        {expiresIn: '30d'});

        const {passwordHash, ...userData} = user._doc;      //Убирем пароль от пользователя
    
        res.json({                                          //иначе выдать результат
            ...userData,                                    //Выдача информации о том, что получилось обработать запрос
            token
        });
    } catch (err) {                                         //Если попытка авторизации пользователя не удалась
        console.log(err);
        res.status(500).json({
            message: 'Неудалось авторизоваться'
        });
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId);       //Обработка запроса на нахождение пользователя

        if (!user) {                                        //Если пользователь не найден, то выдаём ошибку
            return res.status(404).json({
                message: 'Пользователь не найден',
            });
        }

        const { passwordHash, ...userData } = user._doc;    //Если пользователь найден, то выдаём данные
        res.json(userData);                                 //Выдаём данные пользователя
    } catch (err) {}
};