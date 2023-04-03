var events = require("events");
var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function () {
  console.log("Welcome to Event-Handler");
};

// Assign the event handler to an event:
eventEmitter.on("Event1", myEventHandler);

// Fire the 'geeks' event:
eventEmitter.emit("Event1");
