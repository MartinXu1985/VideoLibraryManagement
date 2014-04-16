
var userDao = require("../DatabaseConnections/UserDao");
var userobj = new userDao();

var ejs = require("ejs");

function User() {

}

User.prototype.validateUser = function(callback,fname,password)
{

	console.log("user function ");
	userobj.validateUser(function(err,res) {
		callback(err,res);
		
	},fname,password);

};

module.exports = User;
