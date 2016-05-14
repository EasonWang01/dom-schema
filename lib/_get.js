var http = require('http');
var https = require('https');


exports.get = function(url,callback){


if(url.charAt(4)=='s'){//https 
  var req = https.get(url, function(res) {
  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    callback(body.toString())
  })
});
req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
}

if(url.charAt(4)==':'){//http
  var req = http.get(url, function(res) {
  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    callback(body.toString())
  })
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
}

}