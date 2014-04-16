
var user = require('../Model/User');
var ejs = require("ejs");
exports.index = function(req, res){
	console.log("index");
  res.render('index', { title: 'Express' });
  
};



exports.userSignIn =function(req,res){
	console.log("signup");
	res.render('SignUp');
};


exports.validateUser =function(req,res){
	console.log("validate user");
	var newUser = new user();
	//newUser.validateUser(req.param('username'), req.param('password'));
	newUser.validateUser(function(err,result) {
		if(err){
			console.log("Error"+err);
			throw(err);
		}else
		{
			res.render('Welcome.ejs');
		}

	},req.param('userName'), req.param('password'));
	console.log("Username"+ req.param('userName'));
};

