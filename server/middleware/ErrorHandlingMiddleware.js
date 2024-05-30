const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
    console.error(err);  // Добавим логирование ошибок для отладки

    if (err instanceof ApiError) {
        return res.status(err.code).json({ message: err.message });
    }
    return res.status(500).json({ message: "Непредвиденная ошибка!" });
}
