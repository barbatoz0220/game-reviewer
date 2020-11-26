const Game = require("../models/game")

exports.listAll = function(req, res) {
	Game.find({}, function(err, games) {
		if (!games) res.status(500).json({ success: false, msg: `Something went wrong. ${err}` })
		else res.status(200).json(games)
	})
}

exports.findTitle = function(req, res) {
	Game.findOne({title: req.body.title}, function(err, games) {
		if (!games) res.status(500).json({ success: false, msg: `Something went wrong. ${err}` })
		else res.status(200).json(games) 
	})
}


