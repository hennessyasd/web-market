const uuid = require('uuid')
const path = require('path');
const { Game, GameInfo } = require('../models/models')
const ApiError = require('../error/ApiError');

class GameController {
    async create(req, res, next) {
        try {
            let { name, price, genreId, typeId, info } = req.body;
            const { img } = req.files;

            if (!name || !price || !genreId || !typeId || !img) {
                return next(ApiError.badRequest("Все поля должны быть заполнены"));
            }

            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const game = await Game.create({ name, price, genreId, typeId, img: fileName });

            if (info) {
                info = JSON.parse(info);
                info.forEach(i =>
                    GameInfo.create({
                        title: i.title,
                        description: i.description,
                        gameId: game.id
                    })
                );
            }
            // Убедитесь, что возвращается вся игра, включая свойства
            const fullGame = await Game.findOne({ where: { id: game.id }, include: GameInfo });
            return res.json(fullGame);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res) {
        let { genreId, typeId, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let games;
        if (!genreId && !typeId) {
            games = await Game.findAndCountAll({ limit, offset })
        }
        if (genreId && !typeId) {
            games = await Game.findAndCountAll({ where:{ genreId }, limit, offset })
        }
        if (!genreId && typeId) {
            games = await Game.findAndCountAll({ where:{ typeId }, limit, offset })
        }
        if (genreId && typeId) {
            games = await Game.findAndCountAll({ where:{ typeId, genreId }, limit, offset })
        }
        return res.json(games)
    }

    async getOne(req, res) {
        const { id } = req.params;
        const game = await Game.findOne({
            where: { id },
            include: [{ model: GameInfo, as: 'info' }]
        });
        return res.json(game);
    }
}

module.exports = new GameController()