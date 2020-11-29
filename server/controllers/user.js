const User = require("../models/user")

exports.postLogin = function(req, res) {
	User.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
		if (!user) res.status(500).json({loginSuccessful: false})
		else res.status(200).json({loginSuccessful: true})
	})
}

exports.postRegister = function(req, res) {
	User.findOne({email: req.body.email}).then((user) => {
		// if the user already exists
		if (user) res.status(400).json({registerSuccessfully: false})
		else {
			const newUser = new User({
				email: req.body.email,
				password: req.body.password
			})
			
			newUser
				.save()
				.then(user => res.status(200).json({registerSuccessfully: true}))
				.catch(err => console.log(err))
		}
	})
}