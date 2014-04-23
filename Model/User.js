
var userDao = require("../DatabaseConnections/UserDao");
var userobj = new userDao();

var ejs = require("ejs");

function User() {

}

User.prototype.validateUser = function(callback,request)
{

	console.log("user function ");
	
	userobj.validateUser(function(err,res) {
		callback(err,res);
		
	},request.userName,request.password);

};

User.prototype.signUp = function(callback,request)
{
	
	console.log("signUp function ");
	userobj.signUp(function(err,res) {
		callback(err,res);
		
	},request.userName,request.password);

};

User.prototype.viewCustomers = function(callback,request)
{
	
	console.log("view customers function ");
	userobj.viewCustomers(function(err,res) {
		callback(err,res);
		
	},request.userName,request.password);

};

module.exports = User;
