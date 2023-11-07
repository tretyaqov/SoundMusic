import mongoose from "mongoose";
//Модель пользователя в представлении базы данных
const UserSchema = new mongoose.Schema({
    fullName: {         //Полное имя пользователя
        type: String,
        required: true,
    },
    email: {            //Электронная почта пользователя
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {     //Хэш пароля пользователя
        type: String,
        required: true,
    },
    avatarURL: String,
},{
    timestamps: true,
},);

export default mongoose.model('User', UserSchema);