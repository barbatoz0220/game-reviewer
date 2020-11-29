const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
	email: { 
		type: String, 
		unique: true,
		required: true
	},
	password: {
		type: String,
		unique: true,
		required: true
	},
})

const Game = mongoose.model('Game', GameSchema)
module.exports = Game