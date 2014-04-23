
/**
 * Orders Model
 */


var orderDao = require("../DatabaseConnections/OrderDao");
var orderobj = new orderDao();

var ejs = require("ejs");

function Order() {

}

Order.prototype.generateBill = function(callback,MemberShipID){
	var total = 0;
	console.log("generateBill function "+MemberShipID);
	orderobj.getOrderInfo(function(err,res){
		console.log("get res from getOrderInfo "+ JSON.stringify(res));
		for (var i = 0; i < res.length; i++) { 
			total = total + res[i].TotalAmount;
		}
		callback(err,res,total);
	},MemberShipID);
	
}


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
