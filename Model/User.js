
var userDao = require("../DatabaseConnections/UserDao");
var userobj = new userDao();

var ejs = require("ejs");

function User() {

}

User.prototype.validateUser = function(callback,request)
{

	console.log("user function ");
	
	userobj.signUp(function(err,res) {
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

//removeUser Model
User.prototype.remove = function(callback,memberTypeID){
	
	console.log("removeUser function "+memberTypeID);
	userobj.removeUser(function(err,res){
		callback(err,res);
	},memberTypeID);
};

module.exports = User;
