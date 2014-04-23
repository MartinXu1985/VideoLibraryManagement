var mysql = require('mysql');

function OrderDao() {
	
}


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Helloworld',
  port: '3306',
  database: 'videolib'
});

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