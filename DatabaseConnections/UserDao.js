
var mysql = require('mysql');

function UserDao() {
	
}


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Helloworld',
  port: '3306',
  database: 'videolib'
});

UserDao.prototype.validateUser = function(callback, username, password){
	
	connection.connect();
	//console.log("USERNAME: " + username + " Password: " + password);
	
	var sql = 'SELECT * FROM USER_DATA WHERE FNAME="' + username + '" AND PASSWORD="' + password + '"';
	
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

UserDao.prototype.signUp = function(callback, username, password){
	
	connection.connect();
	//console.log("USERNAME: " + username + " Password: " + password);
	
	var sql = 'INSERT INTO USER_DATA SET ?';
	var data = {FNAME:username,PASSWORD:password}
	connection.query(sql,data, function(err, result) {
		if (err) {
			var error = err.toString();
			
			console.log(error);
		} else {
			console.log("error is:" + err);
			callback(err, result);

		}

	});
	
	
};


UserDao.prototype.viewCustomers = function(callback, username, password){
	
	connection.connect();
	var sql = 'SELECT * FROM person';
	
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


module.exports = UserDao;


