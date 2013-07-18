var express = require('express');

// DEPRECATED: var app = express.createServer(express.logger());
// instead, use: var app = express();
var app = express();

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = fs.readFileSync('index.html');
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
