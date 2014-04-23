
var mysql = require('mysql');

function OrderDao() {
	
}

var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'root', 
	  port: '8889',  //3306
	  database: 'videolib' 
	});

OrderDao.prototype.getOrderInfo = function(callback, MemberShipID){
	console.log("IN getOrderInfo ");
	connection = mysql.createConnection(connection.config);
	connection.connect();
	var sql = 'SELECT * FROM Orders WHERE MemberShipID= "'+MemberShipID+'" AND RentPaymentStatus = 0';
	
	connection.query(sql, function(err, rows, fields) {
		if (rows.length !== 0) {
			console.log("DATA : " + JSON.stringify(rows));
			callback(err, rows);
		} else {
			console.log("error is:" + err);
			callback(err, rows);
			connection.end();
		}

	});
};

OrderDao.prototype.viewHistory = function(callback, membershipId){
	
	connection.connect();
	console.log("membership "+membershipId);
	var sql = 'SELECT * FROM Orders where MemberShipID = \"' + membershipId + '\"';
	console.log(sql);
	connection.query(sql, function(err, rows, fields) {
		if (rows.length !== 0) {
			console.log("DATA : " + JSON.stringify(rows));
			callback(err, rows);
		} else {
			console.log("error is:" + err);
			callback(err, null);

		}

	});
	

	
};

module.exports = OrderDao;
