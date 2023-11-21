import UserModel from '../models/User.js';                  //Подключаем модель пользователя
import MusicModel from '../models/Music.js';                 //Подключаем модель музыкальной композиции
import bcrypt from 'bcrypt';                                //Подклчение библиотеки BCrypt для шифрования пароля
import jwt from 'jsonwebtoken';                             //Подключение библиотеки JSONWebToken, чтобы создавать токен
import { validationResult } from 'express-validator';       //Подключение библиотеки Express Validator для проверки данных

export const addMusic = async (req,res) => {
    try{                                                    //Попытка обработать запрос
        const errors = validationResult(req);               //Записываем в 'errors' ошибки, не прошедшие по второму аругменту
        if (!errors.isEmpty()){                             //Если ошибки есть
            return res.status(400).json(errors.array());    //Выдать ошибку
        }
        //Создаём модель музыки в базе данных
        const doc = new MusicModel({                        //Загружаем в 'doc' модель музыки
            musicName: req.body.musicName,                  //Загружаем название музыкальной композиции
            musicAuthor: req.body.musicAuthor,              //Загружаем автора музыкальной композиции
            musicIMG_URL: req.body.musicIMG_URL,            //Загружаем ссылку обложки музыкальной композиции
            musicFile_URL: req.body.musicFile_URL,          //Загружаем ссылку файла музыкальной композиции
            //listens: 0,                                     //Сколько прослушали музыкальной композиции
        });
        //Сохраняем музыку
        const music = await doc.save();
        
    } catch(err) {                                          //Если не удалось создать
        console.log(err);
        res.status(500).json({
            message: 'Не удалось добавить музыкальную композицию'
        });
    }
};