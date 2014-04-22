
var movieDao = require("../DatabaseConnections/MovieDao");
var movieObj = new movieDao();

var ejs = require("ejs");

function Movie() {

}

Movie.prototype.listMovies = function(callback,request)
{

	console.log("list movie function");
	
	movieObj.listMovies(function(err,res) {
		callback(err,res);
	});

};

module.exports = Movie;
