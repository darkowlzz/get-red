//modules and configs
//===============================================
var express  = require('express'),
    router   = express.Router(),
    app      = express(),
    bodyParser = require('body-parser')
    mongoose = require('mongoose');

// mongodb uri
var uristring = '';

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log('Error connectin to db');
  } else {
    console.log('Succeeded in connecting to db');
  }
})

var reqSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  reqBloodType: { type: String },
  quantity: { type: Number },
  reqOn: { type: String }
});

var BloodReq = mongoose.model('bloodreq', reqSchema);


var port = process.env.port || 3000; //port set to 3000

//app specific configurations
//==================================================

app.use('/', express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//router configurations
//============================================

router.get('/', function (req, res) {
	res.render('/index.html');
});

router.post('/submit', function (req, res) {
  var data = req.body.data;
  var aReq = new BloodReq({
    name: data.name || '',
    email: data.email || '',
    phone: data.phone || '',
    address: data.address || '',
    group: data.group || '',
    quantity: data.quantity || '',
    date: data.date || ''
  });
  aReq.save(function (err, obj) {
    if (err) {
      console.log('Error on save!')
    } else {
      console.log('Saving', obj);
      res.json(obj);
    }
  });
});


app.use('/', router);

//run the server========================
var server = app.listen(port, function(){
	console.log('server has started running at localhost:' + port);
});
