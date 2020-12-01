const game = require('../server/models/game.js');
const gameController = require('../server/controllers/game.js');

gameController.findTitle = async (req, res) => {
    try {
        const { gameTitle } = req.query;
    } catch (err) {
        return res.error(err);
    }
}
