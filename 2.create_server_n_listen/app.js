// Here we're creating a webserver and listening to it.

// Require http module
var http = require("http");

// Create server
http
  .createServer(function (req, res) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    // Write a response to the client
    res.write("Geeks For Geeks");
    // End the response
    res.end();
    // The server object listens on port 5000

    // Try http://localhost:5000/
    // in url you will see "Geeks For Geeks" will be written there this will means node server is listen on host 5000.
  })
  .listen(5000);
