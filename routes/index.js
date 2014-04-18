
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
exports.signUp =function(req,res){
	console.log("signup");
	res.render('SignUpin');
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

	},req.body);
	console.log("Username"+ req.param('userName'));
};

exports.createUser =function(req,res){
	console.log("create user");
	var newUser = new user();
	var a = req.param;
	console.log("a"+ a);
	//newUser.validateUser(req.param('username'), req.param('password'));
	newUser.signUp(function(err,result) {
		if(err){
			console.log("Error"+err);
			throw(err);
		}else
		{
			res.render('Welcome.ejs');
		}

	},req.body);
	console.log("Username"+ req.param('userName'));
	console.log("Username"+ req.param('password'));
};