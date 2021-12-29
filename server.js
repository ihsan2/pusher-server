var express = require("express");
var bodyParser = require("body-parser");
var crypto = require("crypto");
var Pusher = require("pusher");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Pusher instance
var pusher = new Pusher({
  appId: "1293264",
  key: "4f2945b6a3d298ca5ab1",
  secret: "a496b64b50310e2db467",
  cluster: "ap1",
  useTLS: true,
});
var channel = "my-channel";

// POST endpoint to register a new record
app.post("/api", function (req, res) {
  var event = {
    data: req.body.data,
  };

  // Publish event to the Pusher channel
  pusher.trigger(channel, "my-event", event);

  res.status(200).json(event);
});

// Start server
app.listen(3000, function () {
  console.log("Node server running on port 3000");
});
