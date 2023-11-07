import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    //Получение токена
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    //Если есть токен, то разрешает доступ
    if (token) {                        
        try {
            //получение расшифровки
            const decoded = jwt.verify(token, 'password');
            //получаем ID пользователя
            req.userId = decoded._id;
            next();
        } catch (err) {
            //Если не получилось расшифровать токен, то доступа нет
            return res.status(403).json({          
                message: 'Не получилось получить доступ'
            })
        }
    } else {
        //Если токена нет, то доступа нет
        return res.status(403).json({          
            message: 'Нет доступа'
        })
    }
    console.log(token);
}