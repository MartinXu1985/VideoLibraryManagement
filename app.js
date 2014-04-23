
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var ejs = require("ejs");

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.cookieParser());
app.use(express.session({
	secret : '1234567890QWERTY'
}));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

// Everytime you need to route a page, put that corresponding function in index.js
app.get('/', routes.index);
app.get('/userSignIn',routes.userSignIn);
app.post('/validateUser', routes.validateUser);
app.get('/signUp',routes.signUp);
app.post('/createUser', routes.createUser);
app.get('/removeUser',routes.removeUser);
app.get('/generateBill',routes.generateBill);
app.post('/payBill/:data',routes.payBill);
app.get('/listMovies', routes.listMovies);
app.get('/viewCustomers', routes.viewCustomers);
app.get('/viewHistory', routes.viewHistory);
app.get('/updateUser',routes.updateUser);
app.post('/updateuser', routes.updateuser);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
