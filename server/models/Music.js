import { Int32 } from "mongodb";
import mongoose from "mongoose";
//Модель музыки в представлении базы данных
const MusicSchema = new mongoose.Schema({
    musicName: {         //Название музыкальной композиции
        type: String,
        required: true,
    },
    musicAuthor: {       //Полное имя пользователя, являющийся автором музыкальной композиции
        type: String,
        required: true,
    },
    musicIMG_URL: String,//Ссылка на обложку музыкальной композиции
    musicFile_URL: String,//Ссылка на файл музыкальной композиции
    listens: Int32,
},{
    timestamps: true,
},);
//Загрузка модели на базу данных
export default mongoose.model('Music', MusicSchema);

