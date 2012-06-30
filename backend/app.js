
/**
 * Module dependencies.
 */

var express = require('express'), 
    routes = require('./routes');

var app = module.exports = express.createServer();
var qrcodeservice = require('./qrcodeservice');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

var discounts = [];

var fs = require('fs');

app.get('/', function(req, res){
  res.render('index', {
    title: 'Crear nuevo descuento',
	discounts: discounts,
  });
});

app.post('/newdiscount', function(req, res){
  discounts.push(req.body.newdiscount);
  res.render('index', {
    title: 'Crear nuevo descuento',
	  discounts: discounts
  });
});

app.get('/showdiscount/:discountname', function(req, res){
  qrcodeservice.getqrcodeimage(req.params.discountname, function(image) {
    res.send({'image': '<img src="' + image + '"/>'});
  });
});

app.listen(8080, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});