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
    res.write("My First Node Application run and listen on browser");
    // End the response
    res.end();
    // The server object listens on port 5000

    // Try http://localhost:5000/
    // in url you will see "My First Node Application run and listen on browser" will be written there this will means node server is listen on host 5000.
  })
  .listen(5000);
