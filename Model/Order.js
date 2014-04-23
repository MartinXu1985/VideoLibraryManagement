var orderDao = require("../DatabaseConnections/OrderDao");
var orderObj = new orderDao();

var ejs = require("ejs");

function Order() {

}

Order.prototype.viewHistory = function(callback,membershipId)
{

	console.log("view history function ");
	
	orderObj.viewHistory(function(err,res) {
		callback(err,res);
		
	},membershipId);

};

module.exports = Order;