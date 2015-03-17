//modules and configs
//===============================================
var express = require('express');
var app = express();

var port = process.env.port || 3000; //port set to 3000

//app specific configurations
//==================================================

app.use(express.static(__dirname + '/app'));
app.set('view engine', 'jade');


//router configurations
//============================================

app.get('/', function(req, res){
	res.sendFile('./app/index.html');

});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

app.use(function(error, req, res, next){
	console.log(error.stack);
	res.status(500);
	res.send('500');
});


//run the server========================
var server = app.listen(port, function(){
	console.log('server has started running at localhost:' + port);
});

