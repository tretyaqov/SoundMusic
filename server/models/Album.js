import mongoose from "mongoose";
//Модель альбома в представлении базы данных
const AlbumSchema = new mongoose.Schema({
    albumName: {         //Название альбома музыкальной композиции
        type: String,
        required: true,
    },
    musicAuthor: {       //Полное имя пользователя, являющийся автором альбома
        type: String,
        required: true,
    },
    musicIMG_URL: String,//Ссылка на обложку альбома
    is_single: Boolean,
},{
    timestamps: true,
},);
//Загрузка модели на базу данных
export default mongoose.model('Album', AlbumSchema);

/*
ВНИМАНИЕ!!! В данной модели еще не реализована фуннкция вложенных музыкальных композиций!
 */