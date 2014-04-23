
var mysql = require('mysql');

function UserDao() {
	
}

//set your own DB connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root', 
  port: '8889',  //3306
  database: 'videolib' //test

});

UserDao.prototype.validateUser = function(callback, membershipId, password){
	
	connection.connect();
	//console.log("USERNAME: " + username + " Password: " + password);
	
	var sql = 'SELECT * FROM Person WHERE MemberShipID="' + membershipId + '" AND Password="' + password + '"';
	
	connection.query(sql, function(err, rows) {
		if (rows.length !== 0) {
			console.log("DATA : " + JSON.stringify(rows));
			
			callback(err, rows);
		} else {
			console.log("error is:" + err);
			callback(err, null);

		}
		
	});
	
	
};

UserDao.prototype.createUser = function(callback, fname, lname,address,city,zip,state,membertype){
	
	connection.connect();
	//console.log("USERNAME: " + username + " Password: " + password);
	var membershipID= (Math.floor(Math.random() * 900)+100)+"-"+ (Math.floor(Math.random() * 100)+10)+"-"+ (Math.floor(Math.random() * 9000)+1000);
	var sql = 'INSERT INTO Person SET ?';
	//var Address = address+" "+city+" "+state+" "+zip;
	var data = {MemberShipID:membershipID,FirstName: fname,LastName:lname,Password:lname,Address:address,City:city,State:state,ZipCode:zip,MemberTypeID:membertype};
	connection.query(sql,data, function(err, result) {
		if (err) {
			var error = err.toString();
		
			console.log(error);
		} else {
			
			result.data = data;
			console.log(result);
		}
		callback(err, result);
	});
	
	
};
UserDao.prototype.updateUser = function(callback, membershipID,fname, lname,address,city,zip,state){
	
	connection.connect();
	//console.log("USERNAME: " + username + " Password: " + password);
	//var membershipID= (Math.floor(Math.random() * 900)+100)+"-"+ (Math.floor(Math.random() * 100)+10)+"-"+ (Math.floor(Math.random() * 9000)+1000);
	var sql = 'UPDATE Person SET ? WHERE MemberShipID="'+membershipID+'"';
	//var Address = address+" "+city+" "+state+" "+zip;
	var data = [{FirstName: fname,LastName:lname,Password:lname,Address:address,City:city,ZipCode:zip},{MemberShipID:membershipID}];
	
	connection.query(sql,data, function(err, result) {
		if (err) {
			var error = err.toString();
		
			console.log(error);
		} else {
			
			result.data = data;
			console.log(result);
		}
		callback(err, result);
	});
	
	
};


UserDao.prototype.viewCustomers = function(callback, username, password){
	
	connection.connect();
	var sql = 'SELECT * FROM Person';
	
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


//DB delete User (member_types , person, orders)
UserDao.prototype.removeUser = function (callback, memberTypeID){
	console.log("DAOremove ");
	connection = mysql.createConnection(connection.config);
	connection.connect();
	var sql = 'DELETE FROM Member_Types WHERE MemberTypeID = '+memberTypeID;
	console.log(sql);
	connection.query(sql,function(err,result){
		if(err){
			var error = err.toString();
			console.log(error);
		}else{
		    var numRows = result.affectedRows;
			console.log(numRows);
			console.log("deleting User");
			callback(err,numRows);
			connection.end();
		}
	});
}

module.exports = UserDao;

