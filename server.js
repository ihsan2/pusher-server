var express = require('express');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var Pusher = require('pusher');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Pusher instance
var pusher = new Pusher({
  appId      : process.env.PUSHER_APP_ID,
  key        : process.env.PUSHER_APP_KEY,
  secret     : process.env.PUSHER_APP_SECRET,
  encrypted  : true,
});
var channel = 'events_to_be_shown';

// POST endpoint to register a new record
app.post('/api', function (req, res) {
  var event = {
    data: req.body.data,
	id: crypto.randomBytes(16).toString('hex').substring(0, 4),
  };
  
  // Do something with the data...
  
  // Publish event to the Pusher channel
  pusher.trigger(channel, 'created', event);

  res.status(200).json(event);
  
});

app.route('/api/:id')
  // PUT  endpoint to update a record
  .put(function (req, res) {
    var event = {
      data: req.body.data,
	  id: req.params.id,
    };
  
    // Do something with the data...
  
    // Publish event to the Pusher channel
    pusher.trigger(channel, 'updated', event);

    res.status(200).json(event);
  })
  // DELETE  endpoint to delete a record
  .delete(function (req, res) {
    var event = {
	  id: req.params.id,
    };
  
    // Do something with the data...
  
    // Publish event to the Pusher channel
    pusher.trigger(channel, 'deleted', event);

    res.status(200).json(event);
  });

// Start server
app.listen(3000, function () {
  console.log('Node server running on port 3000');
});
