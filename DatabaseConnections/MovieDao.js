
var mysql = require('mysql');

function MovieDao() {
	
}


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Helloworld',
  port: '3306',
  database: 'videolib'
});

MovieDao.prototype.listMovies = function(callback, username, password){
	
	connection.connect();
	var sql = 'SELECT * FROM Movies';
	
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

module.exports = MovieDao;


