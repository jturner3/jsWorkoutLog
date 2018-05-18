var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/', function(req, res){

				console.log(req.body);
				//When we post to api user, it will want a user object in the body
				var username = req.body.user.username;
				var pass = req.body.user.password;		//TODO: hash this password - HASH= not human readable
				console.log(username);
				//Match the model we creat above
				//Sequelize - take the user model and go out to the db and create this:
				User.create({
						username: username,
						passwordhash: bcrypt.hashSync(pass, 10)
				}).then(
							//Sequelize is going to return the object it created from db.
						function createSucess(user){
							var token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
							//successful get this:
							res.json({
								user: user,
								message: 'create',
								sessionToken: token
							});
							},
							function createError(err){
								res.send(500, err.message);
							}
					);
			});

module.exports = router;