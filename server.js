//modules and configs
//===============================================
var express  = require('express'),
    router   = express.Router(),
    app      = express(),
    bodyParser = require('body-parser')
    mongoose = require('mongoose');

var port = process.env.PORT || 3000; //port set to 3000

// mongodb uri
var uristring = process.env.MONGODB_URI || '';

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log('Error connecting to db');
  } else {
    console.log('Succeeded in connecting to db');
  }
});

var reqSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  group: { type: String },
  quantity: { type: Number },
  reqOn: { type: String },
  reqId: { type: Number }
});
var BloodReq = mongoose.model('bloodreqs', reqSchema);

var statusSchema = new mongoose.Schema({
  name: { type: String },
  count: { type: Number }
});
var Status = mongoose.model('status', statusSchema);

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

  Status.findOne({name: 'bloodRequests'}, function (err, stat) {
    aReq.reqId = stat.count + 1;
    stat.count = aReq.reqId;
    stat.save(function (err) {
      if (err) {
        console.log('error in updating')
      } else {
        aReq.save(function (err, obj) {
          if (err) {
            console.log('Error on save!');
          } else {
            console.log('Saving', obj);
            res.json(obj);
          }
        });
      }
    });
  });

});


app.use('/', router);

//run the server========================
var server = app.listen(port, function(){
	console.log('server has started running at localhost:' + port);
});
