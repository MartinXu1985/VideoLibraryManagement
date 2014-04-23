
var user = require('../Model/User');
var movie = require('../Model/Movie');
var order = require('../Model/Order');
var ejs = require("ejs");

// hadrcoded value. we need to get the value from session
var membershipid ="3";


exports.index = function(req, res){
	console.log("index");
  res.render('index', { title: 'Express' });
  
};

exports.userSignIn =function(req,res){
	console.log("user sign in");
	res.render('SignUp');
};
exports.signUp =function(req,res){
	console.log("signup");
	res.render('SignUpin');
};

exports.validateUser =function(req,res){
	console.log("validate user");
	var newUser = new user();
	newUser.validateUser(function(err,result) {
		if(err){
			console.log("Error"+err);
			throw(err);
		}else
		{
			res.render('Welcome.ejs');
		}

	},req.body);
	
	console.log("Username "+ req.param('userName'));
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

exports.listMovies =function(req,res){
	console.log("list movies index");
	var newMovie = new movie();
	
	newMovie.listMovies(function(err,result) {
		if(err){
			console.log("Error"+err);
			throw(err);
		}else
		{
			ejs.renderFile('views/ListMovies.ejs', {
				result : result
			}, function(err, result) {
				// render on success
				if (!err) {
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred in rendering page');
					console.log(err);
				}
			});
		}

	},req.body);
};


exports.viewCustomers =function(req,res){
	console.log("view customers");
	var newUser = new user();
	
	newUser.viewCustomers(function(err,result) {
		if(err){
			console.log("Error"+err);
			throw(err);
		}else
		{
			ejs.renderFile('views/ViewCustomers.ejs', {
				result : result
			}, function(err, result) {
				// render on success
				if (!err) {
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred in rendering page');
					console.log(err);
				}
			});
		}

	},req.body);
};


exports.viewHistory =function(req,res){
	console.log("view history");
	var orders = new order();
	
	orders.viewHistory(function(err,result) {
		if(err){
			console.log("Error"+err);
			throw(err);
		}else
		{
			ejs.renderFile('views/ViewHistory.ejs', {
				result : result
			}, function(err, result) {
				// render on success
				if (!err) {
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred in rendering page');
					console.log(err);
				}
			});
		}
		// instead ofmembership id which is hardcoded, here we need to send the value from session

	},membershipid);
};



