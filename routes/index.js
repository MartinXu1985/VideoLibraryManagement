
var user = require('../Model/User');
var order = require('../Model/Order');
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

exports.removeUser = function(req,res){
	var memberTypeID = 111;  //hard code here, should get from user add/update/delete page
	
	var newUser = new user();
	newUser.remove(function(err,result){
		if(err){
			console.log("remove user error"+err);
			throw(err);
		}else{
			//return number of rows that deleted
			console.log("return "+result);
			res.render('Welcome.ejs');
		}
		
	}, memberTypeID);
	
};

exports.generateBill = function(req,res){
	var MemberShipID = 'cdef'; //hard code here, should be input by admin
	var newOrder = new order();
	newOrder.generateBill(function(err,result,total){
		if(err){
			console.log("generateBill error"+err);
			throw(err);
		}else{
			console.log("return "+JSON.stringify(result));
			console.log(total);
			 res.render('Bill.ejs',
					 {data:result,
					  total:total
					 },
					 function(err, result) {
				// render on success
				if (!err) {
					res.end(result);
					
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
		}
		
	},MemberShipID);
	
};

exports.payBill = function(req,res){
	console.log('in paybill');
	var paymentInfo = JSON.parse(req.params.data);
	 res.send(paymentInfo[0].MemberShipID);
	 
};